from flask import Flask, jsonify, request, json
from flask_mysqldb import MySQL
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_DB'] = 'pasargawe'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['JWT_SECRET_KEY'] = 'secret'

mysql = MySQL(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/users/register', methods=['POST'])
def register():
    cur = mysql.connection.cursor()
    name = request.get_json()['name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created_date = datetime.utcnow()
	
    cur.execute("INSERT INTO users (name, email, password, created_date) VALUES ('" + 
		str(name) + "', '" + 
		str(email) + "', '" + 
		str(password) + "', '" + 
		str(created_date) + "')")
    mysql.connection.commit()
	
    result = {
		'name' : name,
		'email' : email,
		'password' : password,
		'created_date' : created_date
	}

    return jsonify({'result' : result})
	

@app.route('/users/login', methods=['POST'])
def login():
    cur = mysql.connection.cursor()
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""
	
    cur.execute("SELECT * FROM users where email = '" + str(email) + "'")
    rv = cur.fetchone()
	
    if bcrypt.check_password_hash(rv['password'], password):
        access_token = create_access_token(identity = {'id': rv['id']})
        result = access_token
    else:
        result = jsonify({"error":"Invalid username and password"})
    
    return result

@app.route('/users/profile/', methods=['GET','POST'])
def getCurrentProfile():

    return getProfile(1)

@app.route('/users/profile/<string:id>/', methods=['GET'])
def getProfile(id):
    cur = mysql.connection.cursor()
    result = ""
	
    cur.execute("SELECT name, city, gender, birth_date, created_date FROM users where id = '" + str(id) + "'")
    rv = cur.fetchone()
	
    if rv is not None:
        result = jsonify(rv)
    else:
        result = jsonify({"error":"Invalid User ID"})
    
    return result

@app.route('/users/update', methods=['POST'])
def updateProfile():
    cur = mysql.connection.cursor()
    uid = request.get_json()['id']
    name = request.get_json()['name']
    email = request.get_json()['email']
    phone = request.get_json()['phone']
    address = request.get_json()['address']
    city = request.get_json()['city']
    gender = request.get_json()['gender']
    birth_date = request.get_json()['birth_date']
	
    cur.execute("UPDATE users SET (name, email, phone, address, city, gender, birth_date) VALUES ('" + 
		str(name) + "', '" + 
		str(email) + "', '" + 
		str(phone) + "', '" + 
        str(address) + "', '" + 
        str(city) + "', '" + 
        str(gender) + "', '" + 
		str(birth_date) + "') WHERE id = '" +
        str(uid)+ "'")
    mysql.connection.commit()
    
    if cur.rowcount==0:
        result = jsonify({"name":name})
    else:
        result = jsonify({"error":"Invalid User ID"})
    return result
	


if __name__ == '__main__':
    app.run(debug=True)