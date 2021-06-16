import re
import sys 
sys.path.append(r"C:/Users/zzy/Desktop/d/backend/model/recommend")
from itemCF import ItemCFRec
from flask import Flask,request, Response
from flask_restful import Resource
import pymongo
from bson import json_util
import json

client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db_list = client.list_database_names()
db = client.data
collections = db.all
user = db.user

class show_recommend(Resource):
    def get(self):
        page = request.args.get('page')
        name = request.args.get('name')
        now_user = user.find_one({'name': name})
        itemcf = ItemCFRec(now_user['_id'], now_user['history'], update=False)
        result = itemcf.result
        response = {
          'data': result,
          'total': len(result)
        }
        return response