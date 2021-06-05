from flask import Flask,request, Response
from flask_restful import Resource
import os
from bson.json_util import default
import json
from bson import ObjectId
import pymongo

client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db_list = client.list_database_names()
db = client.data
collections = db.spider

class show_spider(Resource):
    def get(self):
        results = collections.find({},{'file_path': 0})
        serialized_results = [json.dumps(result, default=default, separators=(',', ':')) for result in results]
        return {
            'data': serialized_results
        }

class upload_spider(Resource):
    def post(self):
        file = request.files['file']
        name = request.form['name']
        type = request.form['type']
        file_path = os.path.join('./model/spider', file.filename)
        file.save(file_path)
        collections.insert_one({'name': name, 'type': type, 'file_path': file_path})
        return {
            'msg': '上传成功',
        }
