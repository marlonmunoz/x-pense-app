from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from models import db, Goal

app = Flask(__name__)
# CORS(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///goals.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()


users = {
    "mago": "1234"
}

@app.route('/login', methods=['POST'])
def login():
    data = request.json 
    
    # Server-side validation
    if not data:
        return jsonify({"message": "No input data provided"}), 400
    
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({"message": "Username and password are required"}), 400
    
    
    if username in users and users[username] == password:
        return jsonify({"message": "Login Successful"}), 200
    else:
        return jsonify({"message": "Invalid Credentials"}), 401

@app.route('/logout', methods=['POST'])
def logout():
    return jsonify({"message": "Logout Successful"}), 200

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
    goal = Goal.query.get(goal_id)
    if goal is None:
        return jsonify({'error': 'Goal not found'}), 404
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

if __name__ == '__main__':
    app.run(debug=True, port=5001)
    
    
# pip install Flask Flask-SQLAlchemy Flask-Cors