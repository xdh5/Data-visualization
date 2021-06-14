import jieba
import pymongo
import numpy as np
from string import punctuation
from flask import Flask, jsonify, request
from flask_cors import CORS

class ItemCFRec:
    def __init__(self, user, history, keywords_file='keywords.txt', correlation_file='correlation.npy', update=False):
        self.keywords_file = keywords_file
        self.correlation_file = correlation_file
        self.update = update

        self.txt_dict = self.loadData()
        self.getKeyWords()
        self.txt_cor_dict = self.getCorrelation()
        self.result = self.recommend(user, history)

    def loadData(self):
        print('加载数据...')
        # 连接数据库
        client = pymongo.MongoClient('localhost', 27017)
        mydb = client['data'] # 数据库
        itemsdb = mydb['all'] # 集合
        items = itemsdb.find()
        txt_dict = dict()
        for item in items:
            txt_id = str(item['_id'])
            txt_dict.setdefault(txt_id, {})
            txt_dict[txt_id]['content'] = item['content']
            txt_dict[txt_id]['title'] = item['title']
            txt_dict[txt_id]['tag'] = item['type']
        return txt_dict

    def getKeyWords(self):
        key_words = list()
        # 获取标题中的关键词
        if self.update == False:
            return
        if self.update == True:
            #加载停用词表
            stop_words_list = [line.strip() for line in open('stop_words.txt').readlines()]
            for txt_id in self.txt_dict.keys():
                keywords = jieba.cut(self.txt_dict[txt_id]['title'], cut_all=False)
                kws = list()
                for kw in keywords:
                    if kw not in stop_words_list and kw not in list(punctuation) and kw != ' ' and kw != ' ':
                        kws.append(kw)
                key_words.append(str(txt_id) + '\t' + ','.join(kws))
            # 将key_word写入txt文件
            fw = open(self.keywords_file, 'w', encoding='utf-8')
            fw.write('\n'.join(key_words))
            fw.close()

    def getCorrelation(self):
        # 根据标题中关键词的重合度计算相似度
        txt_cor_dict = dict()
        if self.update == False:
            txt_cor_dict = np.load(self.correlation_file, allow_pickle=True).item()
        if self.update == True:
            txt_keywords = dict()
            for line in open(self.keywords_file, 'r', encoding='utf-8').readlines():
                txtid, txtkeywords = line.strip().split('\t')
                txt_keywords[txtid] = txtkeywords
            for txtid1 in txt_keywords.keys():
                txt_cor_dict.setdefault(txtid1, dict())
                id1_keywords = set(txt_keywords[txtid1].split(','))
                for txtid2 in txt_keywords.keys():
                    txt_cor_dict[txtid1].setdefault(txtid2, 0)
                    id2_keywords = set(txt_keywords[txtid2].split(','))
                    if txtid1 != txtid2:
                        cor = (len(id1_keywords & id2_keywords)) / len(id1_keywords | id2_keywords)
                        if cor > 0.0:
                            txt_cor_dict[txtid1][txtid2] = cor
            # 将txt_cor_dict保存为本地文件
            np.save(self.correlation_file, txt_cor_dict)
        return txt_cor_dict

    def recommend(self, user, history, k=20, nitems=10):
            '''
            :param user:
            :param k: 选取k个近邻物品
            :param nitems: 取前nitems个物品
            :return:
            '''
            result = dict()
            u_items = {user: history}
            for i in u_items[user]:
                for j, cor in sorted(self.txt_cor_dict[str(i['_id'])].items(), key=lambda x:x[1], reverse=True)[0:k]:
                    if j in u_items[user]:
                        continue
                    result.setdefault(j, 0)
                    result[j] = cor
            result_id_list = list(dict(sorted(result.items(), key=lambda x:x[1], reverse=True)[0:nitems]).keys())
            result_data_list = []
            for id in result_id_list:
                result_data_list.append(self.txt_dict[id])
            return result_data_list

