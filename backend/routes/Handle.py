from flask import Flask,request, Response
from flask_restful import Resource
from threading import Thread
import time

def handel_algorithm(arg1, arg2):
    time.sleep(60)

class data_thread(object):
    __c__ = None
    #定义构造方法
    def __init__(self, thread):
        self.__thread__ = thread
    def start_thread(self):
        self.__thread__.start()
    def thread__isAlive(self):
        return self.__thread__.isAlive()

handle_data_thread = None
class handle_data(Resource):
    def get(self):
        global handle_data_thread 
        if request.headers.get('Authorization') == 'start':
          handle_data_thread = data_thread(Thread(target = handel_algorithm, args=('arg1','arg2')))
          handle_data_thread.start_thread()
          return {
              'sessionToken': 'handle',
              'msg': 'start'
          }
        else:
          if handle_data_thread.thread__isAlive(): 
            return {
                'sessionToken': 'handle',
                'msg': 'handle'
            }
          else:
            return {
                'sessionToken': 'normal',
                'msg': 'finish'
            }
        # # 失败
        # return {
        #     'msg': '数据处理失败，请重新上传',
        #     'mode': 'normal'
        # }