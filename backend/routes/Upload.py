from flask import Flask,request, Response
from flask_restful import Resource

class check_file(Resource):
    def post(self):
        params = request.files.to_dict().keys()
        for params in params:
          pass
          # csv = request.files['xxx']  # 读取单文件
          # file = request.files.getlist(
          #     'xxx')  # 读取列表
        return {
          'sessionToken': 'start',
          'msg': '上传成功'
        }
