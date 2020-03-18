from flask import Flask,request, Response
from flask_restful import Resource

# 获得聚类页图片
class getNetwork_svg(Resource):
    def get(self, imageid):
      image = open("./test/聚类图/{}.svg".format(imageid), 'rb')
      resp = Response(image, mimetype="image/svg+xml;charset=UTF-8")
      return resp

# 聚类页图片和图例
class clustering_network(Resource):
    def get(self):
        response = {
            'image': '/api/getNetwork_svg/test',
            'legend': [{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            },{
              'name': '暂无数据',
              'paper': 0,
              'images': 0,
              'webs': 0,
              'report': 0,
              'english':0,
              'patent':0,
              'meeting':0
            }]
        }
        return response