#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, jsonify, request, Response, send_from_directory, make_response, send_file, abort
from flask_cors import CORS
from flask import Flask
from flask_restful import Resource, Api
import pandas as pd
import requests

from routes import Home, Atlas, Custering, Search, Upload, Handle, User

app = Flask(__name__,
            static_folder="./templates/static",
            template_folder="./templates")
app.jinja_env.auto_reload = True
app.config['TEMPLATES_AUTO_RELOAD'] = True

api = Api(app)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# 获取数据库飞机图片
class getImages(Resource):
    def get(self, imageid):
        image = open("./test/飞机图/{}.jpg".format(imageid), 'rb')
        resp = Response(image, mimetype="image/jpeg")
        return resp

# 获取数据库飞机paper
class getPapers(Resource):
    def get(self, fileid):
        response = make_response(send_file('./test/{}'.format(fileid)))
        response.headers["Content-Disposition"] = "attachment; filename={};".format(
            fileid)
        return response
            
api.add_resource(Home.home_carousel, '/api/home/getCarousel')  # 主页-轮播图
api.add_resource(Home.get_carousel, '/api/images/carouselImages/<imageid>')  # 下载轮播图图片

api.add_resource(Atlas.classify_info, '/api/classify/getInfo')  # 分类页-图片
api.add_resource(Atlas.classify_card, '/api/classify/getCard')  # 分类页-卡片

api.add_resource(Custering.getNetwork_svg, '/api/getNetwork_svg/<imageid>')  # 聚类页图片
api.add_resource(Custering.clustering_network, '/api/clustering/getNetwork')  # 聚类页图片和图例

api.add_resource(Search.search_result, '/api/search/getSearchData')  # 搜索页

api.add_resource(Upload.check_file, '/api/Upload/checkFile') #检查文献

api.add_resource(Handle.handle_data, '/api/waiting/handle')  # 处理数据

api.add_resource(User.register, '/api/user/register')
api.add_resource(User.login, '/api/user/login')

api.add_resource(getImages, '/api/images/<imageid>')  # 下载图片
api.add_resource(getPapers, '/api/files/<fileid>')  # 下载文献

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if app.debug:
        return requests.get('http://0.0.0.0:8080/{}'.format(path)).text
    return render_template("index.html")