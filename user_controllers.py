from flask import Flask, jsonify, request, json
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 

import os
from models import Job, User, JobSchema, UserSchema, user_schema, users_schema, job_schema, jobs_schema


# Init app
app = Flask(__name__)


# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)


# Get All User
def get_users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result.data)

# Get a Single User
def get_user(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)

# Update a User
def update_user(id,request):
    user = db.session.query(User).get(id)
    name = request.json['name']
    alias = request.json['alias']
    email = request.json['email']
    phone = request.json['phone']
    address = request.json['address']
    city = request.json['city']
    gender = request.json['gender']
    birth_date = request.json['birth_date']
	
    user.name = name
    user.alias = alias
    user.phone = phone
    user.address = address
    user.city = city
    user.gender = gender
    user.birth_date = birth_date
    
    db.session.commit()

    return user_schema.jsonify(user)
	