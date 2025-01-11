from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

users = {
    "user1": "password1",
    "user2": "password2",
    "mago24": "mija2024",
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
  

if __name__ == '__main__':
    app.run(debug=True)