from flask import Flask,request, Response, send_from_directory, make_response, send_file
from flask_restful import Resource
from bson import json_util
import json
import pymongo

client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db_list = client.list_database_names()
db = client.data
collections = db.all

class get_home_data(Resource):
    def get(self):
        paper = collections.find(
          {
            'type': 'paper',
          },
          {'_id':1, 'title': 1, 'content':1, 'type': 1}).limit(10)
        patent = collections.find(
          {
            'type': 'patent',
          },
          {'_id':1, 'title': 1, 'content':1, 'type': 1}).limit(10)
        webpage = collections.find(
          {
            'type': 'webpage',
          },
          {'_id':1, 'title': 1, 'content':1, 'type': 1}).limit(10)
        standard = collections.find(
          {
            'type': 'standard',
          },
          {'_id':1, 'title': 1, 'content':1, 'type': 1}).limit(10)
        print()
        response = {
          'data': {
              'paper': list(json.loads(json_util.dumps(paper))),
              'patent': list(json.loads(json_util.dumps(patent))),
              'webpage':list(json.loads(json_util.dumps(webpage))),
              'standard': list(json.loads(json_util.dumps(standard))),
            }
        } 
        return response