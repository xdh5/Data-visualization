from flask import Flask,request, Response
from flask_restful import Resource

# 分类页资料
class classify_info(Resource):
    def get(self):
        name = request.args.get('id')
        response = {'type': 1, 'name': '飞机类型', 'images': [
            {'title': '飞机', 'url': '/api/images/test'},{'title': '飞机', 'url': '/api/images/test'},{'title': '飞机', 'url': '/api/images/test'},{'title': '飞机', 'url': '/api/images/test'},{'title': '飞机', 'url': '/api/images/test'},{'title': '飞机', 'url': '/api/images/test'},{'title': '飞机', 'url': '/api/images/test'},{'title': '飞机', 'url': '/api/images/test'}]
        }
        return response

# 分类页文献
class classify_card(Resource):
    def get(self):
        name = request.args.get('id')
        page = request.args.get('page')
        # ['paper', 'webs', 'report', 'english', 'patent', 'meeting']
        dataType = request.args.getlist('type[]')
        response = {'total': 10, 'data': [
            {'title': '题目', 'author': '作者', 'abstract': '摘要', 'source': '来源', 'url': '/api/files/test.pdf','type':'文献'},{'title': '题目', 'author': '作者', 'abstract': '摘要', 'source': '来源', 'url': '/api/files/test.pdf','type':'文献'},{'title': '题目', 'author': '作者', 'abstract': '摘要', 'source': '来源', 'url': '/api/files/test.pdf','type':'文献'},{'title': '题目', 'author': '作者', 'abstract': '摘要', 'source': '来源', 'url': '/api/files/test.pdf','type':'文献'},{'title': '题目', 'author': '作者', 'abstract': '摘要', 'source': '来源', 'url': '/api/files/test.pdf','type':'文献'},{'title': '题目', 'author': '作者', 'abstract': '摘要', 'source': '来源', 'url': '/api/files/test.pdf','type':'文献'},{'title': '题目', 'author': '作者', 'abstract': '摘要', 'source': '来源', 'url': '/api/files/test.pdf','type':'文献'}]}
        return response