# coding:utf-8
from flask import Flask,request, Response, send_from_directory, make_response, send_file
from flask_restful import Resource
import pymongo
from bson import json_util
import json

client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db_list = client.list_database_names()
db = client.data
collections = db.all
user = db.user

# 搜索
class get_data(Resource):
    def get(self):
        dataType = request.args.getlist('type[]')
        page = request.args.get('page')
        tap = request.args.get('key')
        name = request.args.get('name')
        now_user = user.find_one({'name': name})
        key = now_user['search']
        if len(key) >= 100:
          key.pop(0)
        key.append(tap)
        now_user['search'] = key
        user.update_one({'name':name},{"$set":{"search": key}})

        result2 = collections.find(
          {'$or':[
            {'title': {'$regex': tap}},
            {'content': {'$regex': tap}},
            {'key': {'$regex': tap}}
            ],
            'type': {'$in': dataType},
          },
          {'_id':1, 'title': 1, 'content':1, 'type': 1}).skip(10*(int(page)-1)).limit(10)
        response = {
          'data': list(json.loads(json_util.dumps(result2))),
          'total': result2.count()
        }
        return response
