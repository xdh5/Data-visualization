import sys
sys.path.append(r"C:/Users/zzy/Desktop/d/backend/model/pointer-generator")
from Summarization import main
from flask import Flask,request, Response
from flask_restful import Resource
import pymongo
from bson import json_util
import json

client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db_list = client.list_database_names()
db = client.data
collections = db.all

class overview_select(Resource):
    def get(self):
        dataType = request.args.get('type')
        page = request.args.get('page')
        result = collections.find({'type': dataType},{'_id':1, 'title': 1, 'content':1, 'type': 1}).skip(10*(int(page)-1)).limit(10)
        response = {
          'data': list(json.loads(json_util.dumps(result))),
          'total': result.count()
        }
        return response

class start_overview(Resource):
    def post(self):
        content = request.json.get('content')
        abstract = main.start(content)
        response = {
          'abstract': abstract
        }
        return response