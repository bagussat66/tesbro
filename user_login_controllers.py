from flask import Flask, jsonify, request, json
from flask_mysqldb import MySQL
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
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

bcrypt = Bcrypt(app)




# Register User
def register(request):
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    cpassword = bcrypt.generate_password_hash(password).decode('utf-8')
    created_date = datetime.utcnow()
    na = None
	
    new_user = User(name, name, cpassword, email, na, na, na, na, na, created_date)

    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)
	
# Log User
def login(request):
    email = request.json['email']
    password = request.json['password']
    user = User.query.filter_by(email=email).first()
	
    if bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity = user.id)
        result = access_token
    else:
        result = jsonify({"error":"Invalid username and password"})
    
    return result
