from flask import Flask,request, Response
from flask_restful import Resource

class search_result(Resource):
    def get(self):
        key = request.args.get('key')
        page = request.args.get('page')
        dataType = request.args.getlist('type[]') #['paper', 'webs', 'report', 'english', 'patent', 'meeting']
        response = {
          "images": [
            {'title': '图片', 'url': '/api/images/test'}
          ], 
          "cardData": {
            'total': 2,
            'data': [
              {'title': '题目', 'author': '作者', 'abstract': '摘要', 'source': '来源', 'url': '/api/files/test.pdf', 'type':'文献'},
              {'title': '题目', 'author': '作者', 'abstract': '摘要', 'source': '来源', 'url': 'https://www.baidu.com', 'type':'网页'}
            ]
          }
        }
        return response