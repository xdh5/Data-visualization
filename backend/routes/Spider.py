#coding=utf-8"
from flask import Flask,request, Response
from flask_restful import Resource
import os
from bson import json_util
import json
from bson import ObjectId
import pymongo
import subprocess

client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db_list = client.list_database_names()
db = client.data
collections = db.spider

p = None
name = ''

class show_spider(Resource):
    def get(self):
        results = collections.find({},{'file_path': 0})
        global name
        if p != None:
            running = name if subprocess.Popen.poll(p) == None else False
        else:
            running = False
        return {
            'data': json.loads(json_util.dumps(results)),
            'running': running
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

class run_spider(Resource):
    def get(self):
        id = request.args.get('id')
        result = collections.find_one({'_id':ObjectId(id)})
        # thread = threading.Thread(target=spide(result['file_path']),name=result['name'])
        global p
        global name
        name = result['name']
        p = subprocess.Popen('python ' + result['file_path'], shell=True)
        return {
            'msg': 'start run'
        }