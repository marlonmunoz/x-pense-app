from flask_sqlalchemy import SQLAlchemy

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), nullable=False, default='user', server_default='user')
    created_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'role': self.role,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }

class Investment(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, index=True)
    name = db.Column(db.String(80), nullable=False)
    pricePerUnit = db.Column(db.Float, nullable=False)
    amount = db.Column(db.Float, nullable=False)
    total_price = db.Column(db.Float, nullable=False)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'pricePerUnit': self.pricePerUnit,
            'amount': self.amount,
            'total_price': self.total_price
        }

    
    pass

class Budget(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, index=True)
    item_name = db.Column(db.String(80), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    date = db.Column(db.Date, nullable=False)
    
    def to_dict(self):
        return {
            'id': self.id,
            'item_name': self.item_name,
            'amount': self.amount,
            'date': self.date        
        }
# Run This Commands to create the new table =====>>>>
# flask db init
# flask db migrate -m "Create Budget table"
# flask db upgrade 
    

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, index=True)
    category = db.Column(db.String(80), nullable=False)
    date = db.Column(db.Date, nullable=False)
    description = db.Column(db.String(255), nullable=False)
    amount =db.Column(db.Float, nullable=False)
    
    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category,
            'date': self.date,
            'description': self.description,
            'amount': self.amount
        }

class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, index=True)
    name = db.Column(db.String(80), nullable=False)
    target = db.Column(db.Integer, nullable=False)
    saved = db.Column(db.Integer, default=0)
    
class Balance(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, index=True)
    cash_on_hand = db.Column(db.Float, nullable=False, default=0)
    bank_account_balance = db.Column(db.Float, nullable=False, default=0)
    savings = db.Column(db.Float, nullable=False, default=0)
    
    def to_dict(self):
        return {
            'id': self.id,
            'cash_on_hand': self.cash_on_hand,
            'bank_account_balance': self.bank_account_balance,
            'savings': self.savings
        }

# UPDATING TO autoincrement=True in all tables

# STEP: 01
# psql -U mago -d xpense_database


# STEP: 02
# \d transaction
# \d goal
# \d balance

# STEP: 03
# -- For the transaction table
# CREATE SEQUENCE IF NOT EXISTS transaction_id_seq;
# ALTER TABLE transaction ALTER COLUMN id SET DEFAULT nextval('transaction_id_seq');
# SELECT setval('transaction_id_seq', (SELECT MAX(id) FROM transaction));

# -- For the goal table
# CREATE SEQUENCE IF NOT EXISTS goal_id_seq;
# ALTER TABLE goal ALTER COLUMN id SET DEFAULT nextval('goal_id_seq');
# SELECT setval('goal_id_seq', (SELECT MAX(id) FROM goal));

# -- For the balance table
# CREATE SEQUENCE IF NOT EXISTS balance_id_seq;
# ALTER TABLE balance ALTER COLUMN id SET DEFAULT nextval('balance_id_seq');
# SELECT setval('balance_id_seq', (SELECT MAX(id) FROM balance));

# STEP 04
# VERIFY each table with the following commands:

# \d transaction
# \d goal
# \d balance

# STEP 05
# Run \q to quit and run python app.py to activate the backend with all the nessesary changes implemented

