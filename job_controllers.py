from flask import Flask, jsonify, request, json
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 

import os
from models import Job, JobSchema, job_schema, jobs_schema


# Init app
app = Flask(__name__)


# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# Add Job
def add_job(request):
    title = request.json['title']
    tag = request.json['tag']
    price = request.json['price']
    delivery = request.json['delivery']
    description = request.json['description']
    instruction = request.json['instruction']
    category_id = request.json['category_id']
    user_id = request.json['user_id']
    created_date = datetime.utcnow()

    new_job = Job(title, tag, price, delivery, description, instruction, created_date, category_id, user_id)

    db.session.add(new_job)
    db.session.commit()

    return job_schema.jsonify(new_job)

# Get All Job
def get_jobs():
    all_jobs = Job.query.all()
    result = jobs_schema.dump(all_jobs)
    return jsonify(result.data)

# Get Single Job
def get_job(id):
    job = Job.query.get(id)
    return job_schema.jsonify(job)

# Get Single Job by Category Id
def get_job_by_cid(category_id):
    job = Job.query.filter_by(category_id=category_id).first()
    return job_schema.jsonify(job)

# Get Single Job by User Id
def get_job_by_uid(user_id):
    job = Job.query.filter_by(user_id=user_id).first()
    return job_schema.jsonify(job)


# Update a Job
def update_job(id,request):
    job = db.session.query(Job).get(id)
    title = request.json['title']
    tag = request.json['tag']
    price = request.json['price']
    delivery = request.json['delivery']
    description = request.json['description']
    instruction = request.json['instruction']
    category_id = request.json['category_id']
    job.title = title
    job.tag = tag
    job.price = price
    job.delivery = delivery
    job.description = description
    job.instruction = instruction
    job.category_id = category_id

    db.session.commit()

    return job_schema.jsonify(job)

# Delete Job
def delete_job(id):
  job = Job.query.get(id)
  db.session.delete(job)
  db.session.commit()

  return job_schema.jsonify(job)
