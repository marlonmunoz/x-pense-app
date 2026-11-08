import jwt
import datetime
import os
import re
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
# CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
CORS(app)

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
PUBLIC_ENDPOINTS = {'register', 'login', 'static'}
DUMMY_PASSWORD_HASH = generate_password_hash('not-a-real-password')


def issue_token(user):
    payload = {
        'sub': str(user.id),
        'role': user.role,
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

    g.user = user
    return None


def get_owned(model, object_id):
    obj = db.session.get(model, object_id)
    if obj is None or obj.user_id != g.user.id:
        return None
    return obj


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json(silent=True) or {}
    email = str(data.get('email', '')).strip().lower()
    password = str(data.get('password', ''))

    if not EMAIL_PATTERN.match(email) or len(email) > 255:
        return jsonify({'error': 'Enter a valid email address'}), 400
    if len(password) < 8:
        return jsonify({'error': 'Password must be at least 8 characters'}), 400
    if len(password) > 128:
        return jsonify({'error': 'Password must be 128 characters or fewer'}), 400
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
    data = request.get_json(silent=True) or {}
    email = str(data.get('email', '')).strip().lower()
    password = str(data.get('password', ''))

    user = User.query.filter_by(email=email).first()
    password_ok = check_password_hash(user.password_hash if user else DUMMY_PASSWORD_HASH, password)
    if user is None or not password_ok:
        return jsonify({'error': 'Invalid email or password'}), 401

    return jsonify({'token': issue_token(user), 'user': user.to_dict()}), 200


@app.route('/me', methods=['GET'])
def me():
    return jsonify(g.user.to_dict())


# INVESTMENTS ==========================================================================>>>>>
# GET
# Add the proxy route for CoinGecko API
@app.route('/api/coins/markets', methods=['GET'])
def get_market_caps():
    try:
        response = requests.get('https://api.coingecko.com/api/v3/coins/markets', params={
            'vs_currency': 'usd',
            'ids': 'bitcoin,ethereum,usd-coin'
        })
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
    data = request.get_json()
    new_budget = Budget(
        user_id=g.user.id,
        item_name=data['item_name'],
        amount=data['amount'],
        date=datetime.strptime(data['date'], '%Y-%m-%d').date()
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
    data = request.get_json()
    if 'item_name' not in data or 'amount' not in data or 'date' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    budget = get_owned(Budget, id)
    if budget is None:
        return jsonify({'error': 'Budget not found'}), 404
    
    budget.item_name = data['item_name']
    
    if data['amount']:
        try:
            budget.amount = float(data['amount'])
        except ValueError:
            return jsonify({'error': 'Invalid amount format, should be a number'}), 400
    else:
        budget.amount = 0.0  # Set to a default value if needed
    
    if data['date']:
        try:
            budget.date = datetime.strptime(data['date'], '%Y-%m-%d').date()
        except ValueError:
            return jsonify({'error': 'Invalid date format, should be YYYY-MM-DD'}), 400
    else:
        budget.date = datetime.now().date()  # Set to the current date as a default value
    
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
    data = request.json
    new_balance = Balance(
        user_id=g.user.id,
        cash_on_hand=data['cash_on_hand'],
        bank_account_balance=data['bank_account_balance'],
        savings=data['savings']        
    )
    db.session.add(new_balance)
    db.session.commit()
    return jsonify(new_balance.to_dict()), 201

# PUT
@app.route('/balance/<int:id>', methods=['PUT'])
def update_balance(id) :
    data = request.json
    balance = get_owned(Balance, id)
    if balance is None:
        return jsonify({'message': 'Balance not found'}), 404
    balance.cash_on_hand = data.get('cash_on_hand', balance.cash_on_hand)
    balance.bank_account_balance = data.get('bank_account_balance', balance.bank_account_balance)
    balance.savings = data.get('savings', balance.savings)
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
    data = request.json
    required_fields = ['category', 'date', 'description', 'amount']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing field: {field}'}), 400
    try:
        date_obj = datetime.strptime(data['date'], '%Y-%m-%d').date()
    except ValueError:
        return jsonify({'error': 'Invalid date format, Use YYYY-MM-DD'}), 400
    
    new_transaction = Transaction(
        user_id=g.user.id,
        category=data['category'],
        date=date_obj,
        description=data['description'],
        amount=data['amount']
    )
    db.session.add(new_transaction)
    db.session.commit()
    return jsonify(new_transaction.to_dict()), 201

# PUT
@app.route('/transactions/<int:id>', methods=['PUT'])
def update_transaction(id):
    data = request.json
    session: Session = db.session
    transaction = get_owned(Transaction, id)
    if transaction is None:
        return jsonify({'error': 'Transaction not found'}), 404
    transaction.category = data['category']
    try:
        transaction.date = datetime.strptime(data['date'], '%Y-%m-%d').date()
    except ValueError:
        return jsonify({'error': 'Invalid date format, Use YYYY-MM-DD'}), 400
    transaction.description = data['description']
    transaction.amount = data['amount']
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
    data = request.get_json()
    new_goal = Goal(
        user_id=g.user.id,
        name=data['name'],
        target=data['target'],
        saved=data['saved']
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
    data = request.get_json()
    goal = get_owned(Goal, goal_id)
    if goal is None:
        return jsonify({'error': 'Goal not found'}), 404
    goal.name = data.get('name', goal.name)
    goal.saved = data.get('saved', goal.saved)
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
    data = request.json
    new_investment = Investment(
        user_id=g.user.id,
        name=data['name'],
        pricePerUnit=data['pricePerUnit'],
        amount=data['amount'],
        total_price=data['totalPrice']
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
    data = request.json
    investment = get_owned(Investment, investment_id)
    if investment is None:
        return jsonify({'error': 'Investment not found'}), 404
    
    investment.amount = float(data['amount'])
    investment.total_price = float(data['totalPrice'])
    db.session.commit()
    return jsonify(investment.to_dict()), 200



if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(debug=False, host='0.0.0.0', port=port)
    

    
    
# pip install Flask Flask-SQLAlchemy Flask-Cors


# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///xpense.db'
