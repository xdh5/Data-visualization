from flask import Flask,request, Response, send_from_directory, make_response, send_file
from flask_restful import Resource

# 首页轮播图
class home_carousel(Resource):
    def get(self):
        response = ['api/images/carouselImages/test1', 'api/images/carouselImages/test2', 'api/images/carouselImages/test3']
        return response

#获取首页轮播图
class get_carousel(Resource):
    def get(self, imageid):
        image = open("./test/轮播图/{}.jpg".format(imageid), 'rb')
        response = Response(image, mimetype="image/jpeg")
        return response