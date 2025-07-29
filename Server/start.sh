#!/bin/bash

# Railway deployment script
echo "Starting deployment..."

# Run database migrations
echo "Running database migrations..."
flask db upgrade

# Start the application
echo "Starting Flask application..."
exec gunicorn --bind 0.0.0.0:$PORT app:app
