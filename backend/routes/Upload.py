from flask import Flask,request, Response
from flask_restful import Resource

'''
  前后端通过请求头Authorization 和  sessionToken交互, 所有跳转都由sessionToken控制
  后端 sessionToken 为 sessionToken = normal, handle, start
  对所有请求进行检查, 当线程alive, 返回 sessionToken 为 handle
  对所有请求进行检查, 当线程结束, 返回 sessionToken 为 normal
  当进行普通请求, 不设置 sessionToken
  当 handleData 成功后, 开启线程
'''

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