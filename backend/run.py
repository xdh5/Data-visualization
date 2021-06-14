#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from re import search
from flask import Flask, render_template, jsonify, request, Response, send_from_directory, make_response, send_file, abort
from flask_cors import CORS
from flask import Flask
from flask_restful import Resource, Api
import pandas as pd
import requests

from routes import Home, Atlas, Custering, Recommend, Search, Overview, Upload, Spider, User

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
        response.headers["Content-Disposition"] = "as_attachment=True; filename={};".format(
            fileid)
        return response
            
api.add_resource(Home.home_carousel, '/api/home/getCarousel')  # 主页-轮播图
api.add_resource(Home.get_carousel, '/api/images/carouselImages/<imageid>')  # 下载轮播图图片

api.add_resource(Atlas.classify_info, '/api/classify/getInfo')  # 分类页-图片
api.add_resource(Atlas.classify_card, '/api/classify/getCard')  # 分类页-卡片

api.add_resource(Custering.getNetwork_svg, '/api/getNetwork_svg/<imageid>')  # 聚类页图片
api.add_resource(Custering.clustering_network, '/api/clustering/getNetwork')  # 聚类页图片和图例

api.add_resource(Recommend.show_recommend, '/api/recommend/getRecommend')  # 自动推荐


api.add_resource(Search.get_data, '/api/search/getSearchData')  # 搜索数据
# api.add_resource(Overview.start_overview, '/api/overview/start')  # 自动摘要

api.add_resource(Overview.overview_select, '/api/overview/getSelectData')  # 自动摘要获取分类数据
api.add_resource(Overview.start_overview, '/api/overview/start')  # 自动摘要

api.add_resource(Upload.download, '/api/upload/download/') #下载模板
api.add_resource(Upload.upload, '/api/upload/<data_type>') #检查文献

api.add_resource(Spider.show_spider, '/api/spider/show')  # 展示爬虫
api.add_resource(Spider.upload_spider, '/api/spider/upload')  # 上传爬虫
api.add_resource(Spider.run_spider, '/api/spider/run')  # 运行爬虫

api.add_resource(User.register, '/api/user/register')
api.add_resource(User.login, '/api/user/login')
api.add_resource(User.handleShow, '/api/user/handleShow')

api.add_resource(getImages, '/api/images/<imageid>')  # 下载图片
api.add_resource(getPapers, '/api/files/<fileid>')  # 下载文献

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if app.debug:
        app.config['JSON_AS_ASCII'] = False
        return requests.get('http://0.0.0.0:8080/{}'.format(path)).text
    return render_template("index.html")