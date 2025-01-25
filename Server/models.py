from flask_sqlalchemy import SQLAlchemy

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

db = SQLAlchemy()

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
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
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    target = db.Column(db.Integer, nullable=False)
    saved = db.Column(db.Integer, default=0)
    
class Balance(db.Model):
    id = db.Column(db.Integer, primary_key=True)
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

class Investment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    price = db.Column(db.Float, nullable=False)
    
    def to_dict(self):
        return{
            'id': self.id,
            'name': self.name,
            'amount': self.amount,
            'price': self.price
        }