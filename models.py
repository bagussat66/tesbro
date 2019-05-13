from flask import Flask
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 



# Init app
app = Flask(__name__)


# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)


# Class/Model
class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    tag = db.Column(db.String(200))
    price = db.Column(db.Integer)
    delivery = db.Column(db.Integer)
    description = db.Column(db.String(200))
    instruction = db.Column(db.String(200))
    created_date = db.Column(db.String(200))
    category_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer)

    def __init__(self, title, tag, price, delivery, description, instruction, created_date, category_id, user_id):
        self.title = title
        self.tag = tag
        self.price = price
        self.delivery = delivery
        self.description = description
        self.instruction = instruction
        self.created_date = created_date
        self.category_id = category_id
        self.user_id = user_id
        
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))
    alias = db.Column(db.String(200))
    password = db.Column(db.String(200))
    email = db.Column(db.String(100), unique=True)
    phone = db.Column(db.String(200))
    address = db.Column(db.String(200))
    city = db.Column(db.String(200))
    gender = db.Column(db.String(200))
    birth_date = db.Column(db.Date)
    created_date = db.Column(db.Date)

    def __init__(self, name, alias, password, email, phone, address, city, gender, birth_date, created_date):
        self.name = name
        self.alias = alias
        self.password = password
        self.email = email
        self.phone = phone
        self.address = address
        self.city = city
        self.gender = gender
        self.birth_date = birth_date
        self.created_date = created_date

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))

    def __init__(self, name):
        self.name = name


# Schema
class UserSchema(ma.Schema):
  class Meta:
    fields = ('id', 'name', 'alias','password','email','phone','email','phone','address','city','gender','birth_date','created_date')

class JobSchema(ma.Schema):
  class Meta:
    fields = ('id', 'title','tag','price','delivery','description','instruction','created_date','category_id','user_id')

class CategorySchema(ma.Schema):
  class Meta:
    fields = ('id', 'name')



# Init schema
user_schema = UserSchema(strict=True)
users_schema = UserSchema(many=True, strict=True)
job_schema = JobSchema(strict=True)
jobs_schema = JobSchema(many=True, strict=True)
category_schema = CategorySchema(strict=True)
categories_schema = CategorySchema(many=True, strict=True)
