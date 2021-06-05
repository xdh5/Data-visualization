from flask import Response, send_file,request, make_response
from flask_restful import Resource
import json
import pandas as pd
import pymongo
client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db_list = client.list_database_names()
db = client.data

class upload(Resource):
    def post(self, data_type):
        excel_data_df = pd.read_csv(request.files['file'])
        json_str = json.loads(excel_data_df.to_json(orient='records'))
        db[data_type].insert_many(json_str)
        return {
          'msg': '上传成功'
        }

class download(Resource):
    def get(self):
        type = request.args.get('type')
        response = make_response(send_file('./static/files/{}.csv'.format(type)))
        response.headers["Content-Disposition"] = "attachment=True; filename={}.csv;".format(
            type)
        return response