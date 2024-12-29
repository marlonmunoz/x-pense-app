from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enables CORS for all routes

users = {
    "user1": "password1",
    "user2": "password2"
}

@app.route('/login', methods=['POST'])
def login():
    data = request.json 
    username = data.get('username')
    password  = data.get('password')
    
    if username in users and users[username] == password:
        return jsonify({"message": "Login Successful"}), 200
    else:
        return jsonify({"message": "Invalid Credentials"}), 401

@app.route('/logout', methods=['POST'])
def logout():
    return jsonify({"message": "Logout Successful"}), 200
  

if __name__ == '__main__':
    app.run(debug=True)