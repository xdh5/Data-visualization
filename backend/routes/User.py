from flask import Flask,request, Response
from flask_restful import Resource
import json
import pymongo
from bson.objectid import ObjectId

client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db_list = client.list_database_names()
db = client.data
collections = db.user

class register(Resource):
    def post(self):
        data = json.loads(request.get_data().decode('utf-8'))
        name = data.get('name')
        password = data.get('password')
        habit = data.get('habit')
        interesting = data.get('interesting')
        result = collections.find()
        for user in result:
          if name == user['name']:
            return {'msg': '用户名已存在'}, 401

        result = collections.insert_one({
          'name': name,
          'password': password,
          'habit': habit,
          'interesting': interesting
        })
        return

class login(Resource):
    def post(self):
        data = json.loads(request.get_data().decode('utf-8'))
        name = data.get('name')
        password = data.get('password')
        result = collections.find()
        for user in result:
          if name == user['name'] and password == user['password']:
            return {
              'sessionToken': str(user['_id']),
              'user': name,
              'admin': user['admin']
            }
        return {'msg': '用户名或密码错误'}, 401