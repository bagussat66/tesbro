from flask import Flask, jsonify, request, json
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 

import os
from models import Category, CategorySchema, category_schema, categories_schema


# Init app
app = Flask(__name__)


# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# Add Category
def add_category(request):
    name = request.json['name']

    new_category = Category(name)

    db.session.add(new_category)
    db.session.commit()

    return category_schema.jsonify(new_category)

# Get All Category
def get_categories():
    all_categories = Category.query.all()
    result = categories_schema.dump(all_categories)
    return jsonify(result.data)

# Get Single Category
def get_category(id):
    category = Category.query.get(id)
    return category_schema.jsonify(category)

# Update a Category
def update_category(id,request):
    category = Category.query.get(id)
    name = request.json['name']
    category.name = name
    db.session.commit()
    return category_schema.jsonify(category)

# Delete Job
def delete_category(id):
  category = Category.query.get(id)
  db.session.delete(category)
  db.session.commit()

  return category_schema.jsonify(category)
