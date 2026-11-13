import jwt
import datetime
import hashlib
import hmac
import math
import os
import re
import threading
import time
from flask import Flask, request, jsonify, g
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from models import db, User, Goal, Transaction, Balance, Budget, Investment
from dotenv import load_dotenv
from datetime import datetime, timedelta, timezone
from werkzeug.security import generate_password_hash, check_password_hash
import requests

load_dotenv()  

app = Flask(__name__)
# Only our own front-end sites may call this API from a browser.
# Each pattern ends in $ so "x-penseapp.com.evil.com" cannot slip through.
ALLOWED_ORIGINS = [
    r'^https://(www\.)?x-penseapp\.com$',
    r'^https://([a-z0-9-]+\.)?x-pense\.pages\.dev$',
    r'^http://localhost:\d+$',
    r'^http://127\.0\.0\.1:\d+$',
]
CORS(app, origins=ALLOWED_ORIGINS)

# Requests here are tiny JSON bodies; refuse anything bigger than 100 KB.
app.config['MAX_CONTENT_LENGTH'] = 100 * 1024

# Handle Railway PostgreSQL URL format
database_url = os.environ.get('DATABASE_URL')
if database_url and database_url.startswith('postgres://'):
    database_url = database_url.replace('postgres://', 'postgresql://', 1)

app.config['SQLALCHEMY_DATABASE_URI'] = database_url or 'sqlite:///xpense.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Hosted Postgres (Supabase) drops idle connections and requires SSL.
engine_options = {'pool_pre_ping': True, 'pool_recycle': 300}
if database_url and 'supabase.' in database_url:
    engine_options['connect_args'] = {'sslmode': 'require'}
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = engine_options

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
if not app.config['SECRET_KEY']:
    raise RuntimeError('SECRET_KEY is not set. Add it to Server/.env (local) or the Railway variables (production).')

db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()


# LOGIN ============================================================================>>>>>>>
EMAIL_PATTERN = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')
PUBLIC_ENDPOINTS = {'register', 'login', 'forgot_password', 'reset_password', 'static'}
DUMMY_PASSWORD_HASH = generate_password_hash('not-a-real-password')


def password_fingerprint(user):
    # A short code that changes whenever the user's password changes. It is built with the
    # server's secret key, so nobody can work backwards from it to the stored password hash.
    digest = hmac.new(
        app.config['SECRET_KEY'].encode(), user.password_hash.encode(), hashlib.sha256
    ).hexdigest()
    return digest[:16]


def issue_token(user):
    payload = {
        'sub': str(user.id),
        'role': user.role,
        'pwv': password_fingerprint(user),  # "password version": see require_login
        'exp': datetime.now(timezone.utc) + timedelta(days=7),
    }
    return jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')


@app.before_request
def require_login():
    if request.method == 'OPTIONS' or request.endpoint is None or request.endpoint in PUBLIC_ENDPOINTS:
        return None

    header = request.headers.get('Authorization', '')
    if not header.startswith('Bearer '):
        return jsonify({'error': 'Authentication required'}), 401

    try:
        payload = jwt.decode(header[7:], app.config['SECRET_KEY'], algorithms=['HS256'])
        user = db.session.get(User, int(payload['sub']))
    except (jwt.InvalidTokenError, KeyError, ValueError):
        return jsonify({'error': 'Invalid or expired session'}), 401

    if user is None:
        return jsonify({'error': 'Invalid or expired session'}), 401

    # A token from before the last password change carries an old fingerprint, so it is
    # refused. This is what "log out everywhere" means: every older session dies at once.
    if not hmac.compare_digest(str(payload.get('pwv', '')), password_fingerprint(user)):
        return jsonify({'error': 'Invalid or expired session'}), 401

    g.user = user
    return None


def get_owned(model, object_id):
    obj = db.session.get(model, object_id)
    if obj is None or obj.user_id != g.user.id:
        return None
    return obj


# RATE LIMITING ====================================================================>>>>>>>
# A simple in-memory counter. It is accurate because the server runs a single worker
# (see entrypoint.sh); the counts reset whenever the server restarts.
_events = {}
_events_lock = threading.Lock()


def client_ip():
    # Railway's proxy appends the visitor's real address as the LAST value, so a fake
    # X-Forwarded-For header sent by an attacker can't change which address we see.
    forwarded = request.headers.get('X-Forwarded-For', '')
    if forwarded:
        return forwarded.split(',')[-1].strip()
    return request.remote_addr or 'unknown'


def seconds_until_allowed(bucket, limit, window):
    """0 if `bucket` is under its limit, otherwise how many seconds until it frees up."""
    now = time.time()
    with _events_lock:
        recent = [t for t in _events.get(bucket, []) if now - t < window]
        _events[bucket] = recent
        if len(recent) >= limit:
            return int(window - (now - recent[0])) + 1
    return 0


def record_event(bucket):
    now = time.time()
    with _events_lock:
        if len(_events) > 10000:
            # Keep memory bounded: drop buckets that haven't been touched for an hour.
            for key in [k for k, v in _events.items() if not v or now - v[-1] > 3600]:
                del _events[key]
        _events.setdefault(bucket, []).append(now)


def clear_events(bucket):
    with _events_lock:
        _events.pop(bucket, None)


def too_many_attempts(wait):
    response = jsonify({'error': 'Too many attempts. Please try again in a few minutes.'})
    response.status_code = 429
    response.headers['Retry-After'] = str(wait)
    return response


LOGIN_WINDOW = 15 * 60       # seconds
LOGIN_FAILS_PER_ACCOUNT = 8  # wrong passwords per (visitor address + email) per window
LOGIN_FAILS_PER_IP = 30      # wrong passwords from one address, across all emails
REGISTER_WINDOW = 60 * 60
REGISTER_PER_IP = 10         # sign-up attempts per address per hour


def password_problem(password):
    """Return a message describing what is wrong with `password`, or None if it is fine."""
    if len(password) < 8:
        return 'Password must be at least 8 characters'
    if len(password) > 128:
        return 'Password must be 128 characters or fewer'
    return None


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        data = {}
    email = str(data.get('email', '')).strip().lower()
    password = str(data.get('password', ''))

    ip_bucket = f'register:{client_ip()}'
    wait = seconds_until_allowed(ip_bucket, REGISTER_PER_IP, REGISTER_WINDOW)
    if wait:
        return too_many_attempts(wait)
    record_event(ip_bucket)

    if not EMAIL_PATTERN.match(email) or len(email) > 255:
        return jsonify({'error': 'Enter a valid email address'}), 400
    problem = password_problem(password)
    if problem:
        return jsonify({'error': problem}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'An account with this email already exists'}), 409

    admin_email = os.environ.get('ADMIN_EMAIL', '').strip().lower()
    role = 'admin' if admin_email and email == admin_email else 'user'

    user = User(email=email, password_hash=generate_password_hash(password), role=role)
    db.session.add(user)
    try:
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'An account with this email already exists'}), 409

    return jsonify({'token': issue_token(user), 'user': user.to_dict()}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        data = {}
    email = str(data.get('email', '')).strip().lower()
    password = str(data.get('password', ''))

    # Count only WRONG attempts, and refuse to even check the password once a limit is hit.
    ip = client_ip()
    ip_bucket = f'login-ip:{ip}'
    account_bucket = f'login:{ip}:{email[:255]}'
    wait = max(
        seconds_until_allowed(ip_bucket, LOGIN_FAILS_PER_IP, LOGIN_WINDOW),
        seconds_until_allowed(account_bucket, LOGIN_FAILS_PER_ACCOUNT, LOGIN_WINDOW),
    )
    if wait:
        return too_many_attempts(wait)

    user = User.query.filter_by(email=email).first()
    password_ok = len(password) <= 128 and check_password_hash(
        user.password_hash if user else DUMMY_PASSWORD_HASH, password
    )
    if user is None or not password_ok:
        record_event(ip_bucket)
        record_event(account_bucket)
        return jsonify({'error': 'Invalid email or password'}), 401

    clear_events(account_bucket)
    return jsonify({'token': issue_token(user), 'user': user.to_dict()}), 200


@app.route('/me', methods=['GET'])
def me():
    return jsonify(g.user.to_dict())


# PASSWORD RESET ===================================================================>>>>>>>
# Where the link in the email should point. Production sets APP_URL on Railway;
# on your own machine it falls back to the local front-end.
APP_URL = os.environ.get('APP_URL', 'http://localhost:5173').rstrip('/')
RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
MAIL_FROM = 'X-PENSE <noreply@x-penseapp.com>'
RESET_TOKEN_MINUTES = 30


def reset_key(user):
    # The signing key mixes in the user's CURRENT password hash. The moment the password
    # changes, the key changes, so any reset link already used (or older) stops working.
    return app.config['SECRET_KEY'] + user.password_hash


def issue_reset_token(user):
    payload = {
        'sub': str(user.id),
        'purpose': 'password-reset',
        'exp': datetime.now(timezone.utc) + timedelta(minutes=RESET_TOKEN_MINUTES),
    }
    return jwt.encode(payload, reset_key(user), algorithm='HS256')


def user_from_reset_token(token):
    """Return the user this reset token belongs to, or None if it is invalid or expired."""
    try:
        # Step 1: peek inside WITHOUT trusting it, only to learn whose key to check with.
        claimed = jwt.decode(token, options={'verify_signature': False})
        user_id = int(claimed['sub'])
        if not 0 < user_id < 2**31:  # the database id column is a 32-bit integer
            return None
        user = db.session.get(User, user_id)
        if user is None:
            return None
        # Step 2: now really verify the signature and expiry, using that user's key.
        payload = jwt.decode(token, reset_key(user), algorithms=['HS256'])
    except (jwt.InvalidTokenError, KeyError, ValueError, TypeError):
        return None
    if payload.get('purpose') != 'password-reset':
        return None
    return user


def send_reset_email(to_email, token):
    link = f'{APP_URL}/reset-password?token={token}'
    if not RESEND_API_KEY:
        # No email service configured (local development): show the link instead.
        print(f'[dev] password reset link for {to_email}: {link}', flush=True)
        return
    try:
        requests.post(
            'https://api.resend.com/emails',
            headers={'Authorization': f'Bearer {RESEND_API_KEY}'},
            json={
                'from': MAIL_FROM,
                'to': [to_email],
                'subject': 'Reset your X-PENSE password',
                'text': (
                    'Someone asked to reset the password for your X-PENSE account.\n\n'
                    f'Open this link to choose a new password (it works for {RESET_TOKEN_MINUTES} minutes):\n'
                    f'{link}\n\n'
                    'If this was not you, ignore this email. Your password has not changed.'
                ),
            },
            timeout=10,
        )
    except requests.exceptions.RequestException:
        # Never let an email problem crash the request; just record it in the server log.
        app.logger.exception('Could not send password reset email')


FORGOT_WINDOW = 60 * 60
FORGOT_PER_IP = 5      # reset requests per visitor address per hour
FORGOT_PER_EMAIL = 3   # reset requests per email address per hour (stops inbox flooding)
FORGOT_MESSAGE = 'If an account exists for that email, a reset link is on its way.'


@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        data = {}
    email = str(data.get('email', '')).strip().lower()

    # Limits are counted for EVERY request, whether or not the email has an account,
    # so the limits themselves can't be used to find out who is registered.
    ip_bucket = f'forgot-ip:{client_ip()}'
    email_bucket = f'forgot-email:{email[:255]}'
    wait = max(
        seconds_until_allowed(ip_bucket, FORGOT_PER_IP, FORGOT_WINDOW),
        seconds_until_allowed(email_bucket, FORGOT_PER_EMAIL, FORGOT_WINDOW),
    )
    if wait:
        return too_many_attempts(wait)
    record_event(ip_bucket)
    record_event(email_bucket)

    user = User.query.filter_by(email=email).first() if EMAIL_PATTERN.match(email) else None
    if user:
        token = issue_reset_token(user)
        # Sending an email takes a moment. Doing it in the background keeps the response
        # equally fast for real and unknown emails, so timing can't give the answer away.
        threading.Thread(target=send_reset_email, args=(user.email, token), daemon=True).start()

    # The same reply no matter what happened.
    return jsonify({'message': FORGOT_MESSAGE}), 200


RESET_PER_IP = 20  # attempts to use a reset link, per visitor address per hour


@app.route('/reset-password', methods=['POST'])
def reset_password():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        data = {}
    token = str(data.get('token', ''))
    password = str(data.get('password', ''))

    # Tokens can't realistically be guessed, but every attempt costs the server work
    # (password hashing is deliberately slow), so we still cap them.
    ip_bucket = f'reset-ip:{client_ip()}'
    wait = seconds_until_allowed(ip_bucket, RESET_PER_IP, FORGOT_WINDOW)
    if wait:
        return too_many_attempts(wait)
    record_event(ip_bucket)

    user = user_from_reset_token(token)
    if user is None:
        return jsonify({'error': 'This reset link is invalid or has expired. Please request a new one.'}), 400

    problem = password_problem(password)
    if problem:
        return jsonify({'error': problem}), 400

    # Saving the new hash is also what kills this link (and any older ones): the key
    # they were signed with included the old hash.
    user.password_hash = generate_password_hash(password)
    db.session.commit()
    return jsonify({'message': 'Your password has been updated. You can now log in.'}), 200


# INPUT VALIDATION =================================================================>>>>>>>
MAX_MONEY = 1_000_000_000_000   # one trillion; far beyond any real balance
MAX_GOAL = 2_000_000_000        # the goal columns are 32-bit integers


class ValidationError(Exception):
    """Raised by the helpers below; turned into a clean 400 response."""


@app.errorhandler(ValidationError)
def handle_validation_error(err):
    return jsonify({'error': str(err)}), 400


@app.errorhandler(413)
def handle_too_large(err):
    return jsonify({'error': 'Request is too large'}), 413


def json_body():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        raise ValidationError('Request body must be a JSON object')
    return data


def text_field(data, key, label, max_length):
    value = data.get(key)
    if not isinstance(value, str) or not value.strip():
        raise ValidationError(f'{label} is required')
    value = value.strip()
    if len(value) > max_length:
        raise ValidationError(f'{label} must be {max_length} characters or fewer')
    return value


def number_field(data, key, label, maximum=MAX_MONEY):
    value = data.get(key)
    if isinstance(value, bool):
        raise ValidationError(f'{label} must be a number')
    try:
        number = float(value)
    except (TypeError, ValueError):
        raise ValidationError(f'{label} must be a number')
    if not math.isfinite(number):
        raise ValidationError(f'{label} must be a number')
    if number < 0:
        raise ValidationError(f'{label} cannot be negative')
    if number > maximum:
        raise ValidationError(f'{label} is too large')
    return number


def date_field(data, key, label):
    try:
        return datetime.strptime(str(data.get(key, '')), '%Y-%m-%d').date()
    except ValueError:
        raise ValidationError(f'{label} must be a date in YYYY-MM-DD format')


# INVESTMENTS ==========================================================================>>>>>
# GET
# Add the proxy route for CoinGecko API
@app.route('/api/coins/markets', methods=['GET'])
def get_market_caps():
    try:
        response = requests.get('https://api.coingecko.com/api/v3/coins/markets', params={
            'vs_currency': 'usd',
            'ids': 'bitcoin,ethereum,usd-coin'
        }, timeout=10)
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Error fetching market cap data'}), 500



# BUDGET ==========================================================================>>>>>>>
# GET
@app.route('/budgets', methods=['GET'])
def get_budgets():
    budgets = Budget.query.filter_by(user_id=g.user.id).all()
    return jsonify([budget.to_dict() for budget in budgets])

# POST
@app.route('/budgets', methods=['POST'])
def add_budget():
    data = json_body()
    new_budget = Budget(
        user_id=g.user.id,
        item_name=text_field(data, 'item_name', 'Item name', 80),
        amount=number_field(data, 'amount', 'Amount'),
        date=date_field(data, 'date', 'Date')
    )
    db.session.add(new_budget)
    db.session.commit()
    return jsonify(new_budget.to_dict()), 201

# PUT
# @app.route('/budgets/<int:id>', methods=['PUT'])
# def update_budget(id):
#     data = request.get_json()
#     if 'item_name' not in data or 'amount' not in data or 'date' not in data:
#         return jsonify({'error': 'Missing required fields'}), 400
    
#     budget = db.session.get(Budget, id)
#     if budget is None:
#         return jsonify({'error': 'Budget not found'}), 404
#     budget.item_name = data['item_name']
#     budget.amount = data['amount']
#     budget.date = datetime.strptime(data['date'], '%Y-%m-%d').date()
#     db.session.commit()
#     return jsonify(budget.to_dict())

@app.route('/budgets/<int:id>', methods=['PUT'])
def update_budget(id):
    data = json_body()
    if 'item_name' not in data or 'amount' not in data or 'date' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    budget = get_owned(Budget, id)
    if budget is None:
        return jsonify({'error': 'Budget not found'}), 404
    
    budget.item_name = text_field(data, 'item_name', 'Item name', 80)
    
    if data['amount'] in ('', None):
        budget.amount = 0.0  # The "reset" button sends an empty amount on purpose
    else:
        budget.amount = number_field(data, 'amount', 'Amount')
    
    if data['date'] in ('', None):
        budget.date = datetime.now().date()  # The "reset" button sends an empty date on purpose
    else:
        budget.date = date_field(data, 'date', 'Date')
    
    db.session.commit()
    return jsonify(budget.to_dict())

# DELETE
@app.route('/budgets/<int:id>', methods=['DELETE'])
def delete_budget(id):
    budget = get_owned(Budget, id)
    if budget is None:
        return jsonify({'error': 'Budget not found'}), 404
    db.session.delete(budget)
    db.session.commit()
    return '', 204



# BALANCE =====================================================================>>>>>>>
# GET
@app.route('/balance', methods=['GET'])
def get_balance():
    balance = Balance.query.filter_by(user_id=g.user.id).order_by(Balance.id).first()
    if balance:
        return jsonify(balance.to_dict())
    else:
        return jsonify({'message': 'No balance found'}), 404
    
# POST
@app.route('/balance', methods=['POST'])
def add_balance():
    data = json_body()
    new_balance = Balance(
        user_id=g.user.id,
        cash_on_hand=number_field(data, 'cash_on_hand', 'Cash on hand'),
        bank_account_balance=number_field(data, 'bank_account_balance', 'Bank account balance'),
        savings=number_field(data, 'savings', 'Savings')        
    )
    db.session.add(new_balance)
    db.session.commit()
    return jsonify(new_balance.to_dict()), 201

# PUT
@app.route('/balance/<int:id>', methods=['PUT'])
def update_balance(id) :
    data = json_body()
    balance = get_owned(Balance, id)
    if balance is None:
        return jsonify({'message': 'Balance not found'}), 404
    # Only the fields that were sent are changed, and each one is checked.
    for field, label in (('cash_on_hand', 'Cash on hand'),
                         ('bank_account_balance', 'Bank account balance'),
                         ('savings', 'Savings')):
        if field in data:
            setattr(balance, field, number_field(data, field, label))
    db.session.commit()
    return jsonify(balance.to_dict())

# DELETE
@app.route('/balance/<int:id>', methods=['DELETE'])
def delete_balance(id):
    balance = get_owned(Balance, id)
    if balance is None:
        return jsonify({'message': 'Balance not found'}), 404
    db.session.delete(balance)
    db.session.commit()
    return jsonify({'message': 'Balance deleted successfully'}), 200

# GET all balances
@app.route('/balances', methods=['GET'])
def get_balances():
    balances = Balance.query.filter_by(user_id=g.user.id).order_by(Balance.id).all()
    return jsonify([balance.to_dict() for balance in balances])
    
    
    
# TRANSACTIONS ================================================================>>>>>>>
# GET
@app.route('/transactions', methods=['GET'])
def get_transaction():
    transactions = Transaction.query.filter_by(user_id=g.user.id).all()
    return jsonify([transaction.to_dict() for transaction in transactions])

# POST
@app.route('/transactions', methods=['POST'])
def add_transaction():
    data = json_body()
    category = text_field(data, 'category', 'Category', 80)
    description = text_field(data, 'description', 'Description', 255)
    amount = number_field(data, 'amount', 'Amount')
    date_obj = date_field(data, 'date', 'Date')
    
    new_transaction = Transaction(
        user_id=g.user.id,
        category=category,
        date=date_obj,
        description=description,
        amount=amount
    )
    db.session.add(new_transaction)
    db.session.commit()
    return jsonify(new_transaction.to_dict()), 201

# PUT
@app.route('/transactions/<int:id>', methods=['PUT'])
def update_transaction(id):
    data = json_body()
    session: Session = db.session
    transaction = get_owned(Transaction, id)
    if transaction is None:
        return jsonify({'error': 'Transaction not found'}), 404
    transaction.category = text_field(data, 'category', 'Category', 80)
    transaction.date = date_field(data, 'date', 'Date')
    transaction.description = text_field(data, 'description', 'Description', 255)
    transaction.amount = number_field(data, 'amount', 'Amount')
    session.commit()
    return jsonify(transaction.to_dict())

# DELETE
@app.route('/transactions/<int:id>', methods=['DELETE'])
def delete_transaction(id):
    session: Session = db.session
    transaction = get_owned(Transaction, id)
    if transaction is None:
        return jsonify({'error': 'Transaction not found'}), 404
    session.delete(transaction)
    session.commit()
    return '', 204



# GOALS ======================================================================>>>>>>>
# GET
@app.route('/goals', methods=['GET'])
def get_goals():
    goals = Goal.query.filter_by(user_id=g.user.id).all()
    return jsonify([{'id': goal.id, 'name': goal.name, 'target': goal.target, 'saved': goal.saved} for goal in goals])

# POST
@app.route('/goals', methods=['POST'])
def add_goal():
    data = json_body()
    target = int(round(number_field(data, 'target', 'Target', MAX_GOAL)))
    if target <= 0:
        raise ValidationError('Target must be greater than zero')
    # Goal amounts are stored as whole numbers.
    saved = int(round(number_field(data, 'saved', 'Saved amount', MAX_GOAL))) if 'saved' in data else 0
    new_goal = Goal(
        user_id=g.user.id,
        name=text_field(data, 'name', 'Goal name', 80),
        target=target,
        saved=saved
        )
    db.session.add(new_goal)
    db.session.commit()
    return jsonify(
        {
            'id': new_goal.id,
            'name': new_goal.name,
            'target': new_goal.target,
            'saved': new_goal.saved
        }
        )

# PUT
@app.route('/goals/<int:goal_id>', methods=['PUT'])
def update_goal(goal_id):
    data = json_body()
    goal = get_owned(Goal, goal_id)
    if goal is None:
        return jsonify({'error': 'Goal not found'}), 404
    if 'name' in data:
        goal.name = text_field(data, 'name', 'Goal name', 80)
    if 'saved' in data:
        goal.saved = int(round(number_field(data, 'saved', 'Saved amount', MAX_GOAL)))
    db.session.commit()
    return jsonify(
        {
            'id': goal.id,
            'name': goal.name,
            'target': goal.target,
            'saved': goal.saved
        }
        )
    
# DELETE
@app.route('/goals/<int:goal_id>', methods=['DELETE'])
def delete_goal(goal_id):
    goal = get_owned(Goal, goal_id)
    if goal is None:
        return jsonify({'error': 'Goal not found'}), 404
    db.session.delete(goal)
    db.session.commit()
    return '', 204

# INVESTEMENT =====================================================>>>>>>>>>>>>>>>>>>
# POST
@app.route('/investments', methods=['POST'])
def add_investment():
    data = json_body()
    new_investment = Investment(
        user_id=g.user.id,
        name=text_field(data, 'name', 'Name', 80),
        pricePerUnit=number_field(data, 'pricePerUnit', 'Price per unit'),
        amount=number_field(data, 'amount', 'Amount'),
        total_price=number_field(data, 'totalPrice', 'Total price')
    )
    db.session.add(new_investment)
    db.session.commit()
    return jsonify(new_investment.to_dict()), 201

# GET
@app.route('/investments', methods=['GET'])
def get_investments():
    investments = Investment.query.filter_by(user_id=g.user.id).all()
    return jsonify([investment.to_dict() for investment in investments]), 200

# DELETE
@app.route('/investments/<int:investment_id>', methods=['DELETE'])
def delete_investment(investment_id):
    investment = get_owned(Investment, investment_id)
    if investment is None:
        return jsonify({'error': 'Investment not found'}), 404
    db.session.delete(investment)
    db.session.commit()
    return '', 204

# PUT
@app.route('/investments/<int:investment_id>', methods=['PUT'])
def update_investment(investment_id):
    data = json_body()
    investment = get_owned(Investment, investment_id)
    if investment is None:
        return jsonify({'error': 'Investment not found'}), 404
    
    investment.amount = number_field(data, 'amount', 'Amount')
    investment.total_price = number_field(data, 'totalPrice', 'Total price')
    db.session.commit()
    return jsonify(investment.to_dict()), 200



if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(debug=False, host='0.0.0.0', port=port)
    

    
    
# pip install Flask Flask-SQLAlchemy Flask-Cors


# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///xpense.db'
