import os
import secrets

# Generate a new secret key if it doesn't exist
if 'SECRET_KEY' not in os.environ:
    secret_key = secrets.token_hex(32)
else:
    secret_key = os.environ['SECRET_KEY']
    
# tests passed