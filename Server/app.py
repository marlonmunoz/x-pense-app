import jwt
import datetime
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy.orm import Session
from models import db, Goal, Transaction, Balance, Budget, Investment
from dotenv import load_dotenv
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import requests

load_dotenv()  

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY') 
db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()


users = {
    "mago": "1234***"
}

# LOGIN ============================================================================>>>>>>>
# POST
@app.route('/login', methods=['POST'])
def login():
    data = request.json 
    
    # Server-side validation code
    if not data:
        return jsonify({"message": "No input data provided"}), 400
    
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({"message": "Username and password are required"}), 400
    
    if username in users and users[username] == password:
        token = jwt.encode({
            'username': username,
            'exp': datetime.utcnow() + timedelta(hours=1)
        }, app.config['SECRET_KEY'], algorithm="HS256")
        return jsonify({"message": "Login Successful", "token": token}), 200
    else:
        return jsonify({"message": "Invalid Credentials"}), 401

@app.route('/verify-token', methods=['POST'])
def verify_token():
    token = request.json.get('token')
    if not token:
        return jsonify({"message": "Token is missing"}), 400
    
    try:
        jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        return jsonify ({"message": "Token is valid"}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({"message": "Token has expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"message": "Invalid token"}), 401

@app.route('/logout', methods=['POST'])
def logout():
    return jsonify({"message": "Logout Successful"}), 200



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
    budgets = Budget.query.all()
    return jsonify([budget.to_dict() for budget in budgets])

# POST
@app.route('/budgets', methods=['POST'])
def add_budget():
    data = request.get_json()
    new_budget = Budget(
        item_name=data['item_name'],
        amount=data['amount'],
        date=datetime.strptime(data['date'], '%Y-%m-%d').date()
    )
    db.session.add(new_budget)
    db.session.commit()
    return jsonify(new_budget.to_dict()), 201

# PUT
@app.route('/budgets/<int:id>', methods=['PUT'])
def update_budget(id):
    data = request.get_json()
    if 'item_name' not in data or 'amount' not in data or 'date' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    budget = db.session.get(Budget, id)
    if budget is None:
        return jsonify({'error': 'Budget not found'}), 404
    budget.item_name = data['item_name']
    budget.amount = data['amount']
    budget.date = datetime.strptime(data['date'], '%Y-%m-%d').date()
    db.session.commit()
    return jsonify(budget.to_dict())

# DELETE
@app.route('/budgets/<int:id>', methods=['DELETE'])
def delete_budget(id):
    budget = Budget.query.get_or_404(id)
    db.session.delete(budget)
    db.session.commit()
    return '', 204



# BALANCE =====================================================================>>>>>>>
# GET
@app.route('/balance', methods=['GET'])
def get_balance():
    balance = Balance.query.first()
    if balance:
        return jsonify(balance.to_dict())
    else:
        return jsonify({'message': 'No balance found'}), 404
    
# POST
@app.route('/balance', methods=['POST'])
def add_balance():
    data = request.json
    new_balance = Balance(
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
    balance = db.session.get(Balance, id)
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
    balance = db.session.get(Balance, id)
    if balance is None:
        return jsonify({'message': 'Balance not found'}), 404
    db.session.delete(balance)
    db.session.commit()
    return jsonify({'message': 'Balance deleted successfully'}), 200

# GET all balances
@app.route('/balances', methods=['GET'])
def get_balances():
    balances = Balance.query.all()
    return jsonify([balances.to_dict() for balance in balances])
    
    
    
# TRANSACTIONS ================================================================>>>>>>>
# GET
@app.route('/transactions', methods=['GET'])
def get_transaction():
    transactions = Transaction.query.all()
    return jsonify([transaction.to_dict() for transaction in transactions])

# POST
@app.route('/transactions', methods=['POST'])
def add_transaction():
    data = request.json
    print(data)
    required_fields = ['category', 'date', 'description', 'amount']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing field: {field}'}), 400
    try:
        date_obj = datetime.strptime(data['date'], '%Y-%m-%d').date()
    except ValueError:
        return jsonify({'error': 'Invalid date format, Use YYYY-MM-DD'}), 400
    
    new_transaction = Transaction(
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
    transaction = session.get(Transaction, id)
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
    transaction = session.get(Transaction, id)
    if transaction is None:
        return jsonify({'error': 'Transaction not found'}), 404
    session.delete(transaction)
    session.commit()
    return '', 204

# Market Cap Data Fetch
@app.route 



# GOALS ======================================================================>>>>>>>
# GET
@app.route('/goals', methods=['GET'])
def get_goals():
    goals = Goal.query.all()
    return jsonify([{'id': goal.id, 'name': goal.name, 'target': goal.target, 'saved': goal.saved} for goal in goals])

# POST
@app.route('/goals', methods=['POST'])
def add_goal():
    data = request.get_json()
    new_goal = Goal(
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
    goal = db.session.get(Goal, goal_id)
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
    goal = Goal.query.get(goal_id)
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
    investments = Investment.query.all()
    return jsonify([investment.to_dict() for investment in investments]), 200

# DELETE
@app.route('/investments/<int:investment_id>', methods=['DELETE'])
def delete_investment(investment_id):
    investment = db.session.get(Investment, investment_id)
    if investment is None:
        return jsonify({'error': 'Investment not found'}), 404
    db.session.delete(investment)
    db.session.commit()
    return '', 204

# PUT
@app.route('/investments/<int:investment_id>', methods=['PUT'])
def update_investment(investment_id):
    data = request.json
    investment = db.session.get(Investment, investment_id)
    if investment is None:
        return jsonify({'error': 'Investment not found'}), 404
    
    investment.amount = float(data['amount'])
    investment.total_price = float(data['totalPrice'])
    db.session.commit()
    return jsonify(investment.to_dict()), 200



if __name__ == '__main__':
    app.run(debug=True, port=5001)
    

    
    
# pip install Flask Flask-SQLAlchemy Flask-Cors


# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///xpense.db'
