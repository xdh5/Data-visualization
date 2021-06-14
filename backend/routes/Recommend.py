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

        itemcf = ItemCFRec(now_user['_id'], now_user['history'])
        result = itemcf.resul
        # result = collections.find({},{'_id':1, 'title': 1, 'content':1, 'type': 1}).skip(10*(int(page)-1)).limit(10)
        response = {
          'data': list(json.loads(json_util.dumps(result))),
          'total': result.count()
        }
        return response