from flask import Flask,request, Response
from flask_restful import Resource
import json

class get_Atlas(Resource):
    def get(self):
        id = request.args.get('type')
        if id == 'paper':
            with open('./static/atlas/paper.json','r',encoding='utf8')as fp:
                json_data = json.load(fp)
                return {
                    'data': json_data
                }
        elif id == 'patent':
            with open('./static/atlas/patent.json','r',encoding='utf8')as fp:
                json_data = json.load(fp)
                return {
                    'data': json_data
            }