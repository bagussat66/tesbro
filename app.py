from flask import Flask, jsonify, request, json
from datetime import datetime
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from flask_sqlalchemy import SQLAlchemy 

import os
from models import Job, User, JobSchema, UserSchema, user_schema, users_schema, job_schema, jobs_schema
import user_login_controllers as ulc
import user_controllers as uc
import job_controllers as jc
import category_controllers as cc

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@127.0.0.1/pasargawe'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'super-secret'

# Init db
SQLAlchemy(app)
JWTManager(app)
CORS(app)

# Register User
@app.route('/user/register', methods=['POST'])
def register():
  return ulc.register(request)
	
# Log In User
@app.route('/user/login', methods=['POST'])
def login():
  return ulc.login(request)

# User
@app.route('/user', methods=['GET'])
def get_users():
  return uc.get_users()

@app.route('/user/<id>', methods=['GET'])
def get_user(id):
  return uc.get_user(id)

@app.route('/user/<id>', methods=['PUT'])
def update_user(id):
  return uc.update_user(id,request)
	
# Job
@app.route('/job', methods=['POST'])
def add_job():
  return jc.add_job(request)

@app.route('/job', methods=['GET'])
def get_jobs():
  return jc.get_jobs()

@app.route('/job/<id>', methods=['GET'])
def get_job(id):
  return jc.get_job(id)

@app.route('/job/user/<id>', methods=['GET'])
def get_job_by_uid(id):
  return jc.get_job_by_uid(id)

@app.route('/job/category/<id>', methods=['GET'])
def get_job_by_cid(id):
  return jc.get_job_by_cid(id)

@app.route('/job/<id>', methods=['PUT'])
def update_job(id):
  return jc.update_job(id,request)

@app.route('/job/<id>', methods=['DELETE'])
def delete_job(id):
  return jc.delete_job(id)

# Category
@app.route('/category', methods=['POST'])
def add_category():
  return cc.add_category(request)

@app.route('/category', methods=['GET'])
def get_categories():
  return cc.get_categories()

@app.route('/category/<id>', methods=['GET'])
def get_category(id):
  return cc.get_category(id)

@app.route('/category/<id>', methods=['PUT'])
def update_category(id):
  return cc.update_category(id,request)

@app.route('/category/<id>', methods=['DELETE'])
def delete_category(id):
  return cc.delete_category(id)



if __name__ == '__main__':
  app.run(debug=True)