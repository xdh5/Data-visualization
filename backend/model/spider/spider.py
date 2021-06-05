import datetime
import json
import requests
# from lxml import etree
import pandas as pd


'''
2021.05.29
把一年前的scrapy的代码重新梳理、修改、简化用requests写一下
1.post请求总页面获取到总数量和所有专利的code
2.post请求每一个code获得对应的专利详细信息
PS：测试的时候这个网站间歇性抽风，经常访问不了，有时候能爬全，有时候爬不全就断开了
'''
def patentSpider():
    '''
    :return: res, statusCode, page[optional], pageTotal[optional]
    1.res，若爬取到数据，无论是否爬全，则res的格式为：
    {
        'patents': [{},{},{},...,{}],  # 爬取到的专利数据，存放在列表中，一个字典{}为一条数据
        'patentTotal': 0,   # 数据总量
        'spiderTime':  # 爬取时间
    }
    2.statusCode,
        200 数据全部获取
        100 获取到部分数据后中断了
        404 访问不了页面，没有爬取到任何数据
    3/4.page[optional], pageTotal[optional]
        可选，在爬取到部分数据中断的情况下返回当前的爬取进度
    '''
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36',
               'Content-Type': 'application/json; charset=UTF-8'}
    listPostUrl = 'http://main.xatrsc.com/findDefencePatentList.action'
    patentPostUrl = 'http://main.xatrsc.com/findDefencePatentByCode.action'
    res = {'patents': [], 'patentTotal': 0, 'spiderTime': datetime.datetime.now().strftime('%Y-%m-%d')}
    totalPageResp = requests.post(url=listPostUrl, json={"num": "20","pageNum": "1"}, headers=headers)
    if totalPageResp.status_code == 200:
        try:
            totalPageRespData = json.loads(totalPageResp.text)
            res['patentTotal'] = totalPageRespData['patentTotal']
            pageTotal = totalPageRespData['pageTotal']
            for page in range(1, int(pageTotal)+1, 1):
                print(page)
                pageResp = requests.post(url=listPostUrl, json={"num": "20","pageNum": str(page)}, headers=headers)
                for info in json.loads(pageResp.text)['list']:
                    patentResp = requests.post(url=patentPostUrl, json={"code": info['code']}, headers=headers)
                    res['patents'].append(json.loads(patentResp.text))
            return res, 200  # 完全爬取
        except:
            return res, 100, page, pageTotal  # 没有爬全
    else:
        return {'error': '爬取失败请稍后再试'}, 404 # 访问不了

if __name__ == '__main__':
    res, statusCode, *arg = patentSpider()
    if statusCode == 200:
        pd.read_json(json.dumps(res['patents'])).to_csv('patentData.csv', encoding='utf-8_sig', index=False)
    elif statusCode == 100:
        pd.read_json(json.dumps(res['patents'])).to_csv('patentData.csv', encoding='utf-8_sig', index=False)
        print('爬取中断，完成{}/{}'.format(*arg))
    else:
        print(res['error'])