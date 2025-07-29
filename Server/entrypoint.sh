#!/bin/bash
export PYTHONPATH="/app:${PYTHONPATH}"
exec gunicorn --bind 0.0.0.0:$PORT app:app --workers 1 --timeout 120
