webpackJsonp([2],{"401c":function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"select-wrapper"},[e("div",{staticClass:"clearfix"},[e("el-checkbox-group",{attrs:{size:a.search?"medium":"small",fill:"rgb(34,164,255)"},model:{value:a.checkList,callback:function(t){a.checkList=t},expression:"checkList"}},a._l(a.checkListOption,function(t){return e("el-checkbox-button",{key:t.value,attrs:{label:t.value}},[a._v(a._s(t.label))])}),1)],1),a._v(" "),a.search?e("div",{staticClass:"block-select"},[e("el-input",{attrs:{placeholder:"请输入内容",size:"small"},on:{focus:function(t){a.wrong=!1}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.handleCheckedDataChange(t)}},model:{value:a.keyword,callback:function(t){a.keyword="string"==typeof t?t.trim():t},expression:"keyword"}},[e("el-button",{attrs:{slot:"append",loading:a.loading,icon:"el-icon-search",disabled:0===a.checkList.length},on:{click:a.handleCheckedDataChange},slot:"append"})],1),a._v(" "),a.wrong?e("span",{staticClass:"warning"},[a._v("请输入内容")]):a._e()],1):e("div",{staticClass:"inline-select"},[e("el-button",{attrs:{size:"small",loading:a.loading,disabled:0===a.checkList.length},on:{click:a.handleCheckedDataChange}},[a._v("查询")])],1)])},i=[],s={render:n,staticRenderFns:i};t.a=s},D3ga:function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"search"},[e("div",{staticClass:"body"},[e("Selection",{attrs:{checkListOption:a.checkListOption,loading:a.loading,search:""},on:{change:a.handleCheckChange}}),a._v(" "),e("main",[e("div",{staticClass:"search-paper"},[0===a.cardData.total?e("div",[a._v("\n          暂无数据\n        ")]):a._l(a.cardData.data,function(a,t){return e("Card",{key:t,attrs:{data:a}})}),a._v(" "),a.cardData.total>10?e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":a.cardDataPage,total:a.cardData.total},on:{"current-change":a.handleSizeChange}}):a._e()],2),a._v(" "),e("aside",{staticClass:"search-image"},[a.showAside?e("div",{staticClass:"content"},a._l(a.imagesData,function(t,n){return e("div",{key:n},[e("el-image",{staticClass:"image-item",attrs:{src:t.url,fit:"cover","preview-src-list":new Array(t.url)}}),a._v(" "),e("span",{staticClass:"demonstration"},[a._v(a._s(t.title))])],1)}),0):a._e()])])],1)])},i=[],s={render:n,staticRenderFns:i};t.a=s},GT6m:function(a,t,e){"use strict";var n=e("rhdv"),i=e("bupt");t.a={name:"search",components:{Card:n.a,Selection:i.a},data:function(){return{loading:!1,checkList:["paper","webs","report","english","patent","meeting"],checkListOption:[{value:"paper",label:"中文文献"},{value:"webs",label:"网页"},{value:"report",label:"科技报告"},{value:"english",label:"英文文献"},{value:"patent",label:"专利"},{value:"meeting",label:"会议"}],keyword:"",showAside:!1,imagesData:[{title:"暂无数据",url:"null"}],cardData:{total:0,data:[]},cardDataPage:1}},methods:{getData:function(){var a=this;this.$http.get("/api/search/getSearchData",{params:{key:this.keyword,page:this.cardDataPage,type:this.checkList}}).then(function(t){a.imagesData=t.images,a.cardData=t.cardData,a.showAside=!0,a.loading=!1}).catch(function(t){a.loading=!1,a.showAside=!0})},handleCheckChange:function(a,t){this.loading=!0,this.cardDataPage=1,this.checkList=a,this.keyword=t,this.getData()},handleSizeChange:function(a){this.cardDataPage=a,this.getData()}}}},KEQB:function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-title"},[e("a",{attrs:{href:a.data.url,target:"_blank"}},[a.data.title?e("span",[a._v(a._s(a.data.title))]):a._e(),a._v("\r\n      -\r\n      "),a.data.author?e("span",[a._v(a._s(a.data.author))]):a._e(),a._v(" "),a.data.type?e("span",[a._v("["+a._s(a.data.type)+"]")]):a._e()])]),a._v(" "),e("div",{staticClass:"card-content"},[e("el-tooltip",{attrs:{effect:"dark",content:a.data.abstract,placement:"top-start"}},[a.data.abstract?e("span",[a._v(a._s(a._f("ellipsis")(a.data.abstract)))]):a._e()])],1),a._v(" "),e("div",{staticClass:"card-source"},[a.data.source?e("span",[a._v(a._s(a.data.source))]):a._e()])])},i=[],s={render:n,staticRenderFns:i};t.a=s},NU23:function(a,t,e){"use strict";t.a={name:"Card",props:["data"],filters:{ellipsis:function(a){return a.length>=180?a.slice(0,160)+"...":a}}}},SUZy:function(a,t,e){t=a.exports=e("FZ+f")(!0),t.push([a.i,".search-input[data-v-b7f17f62]{width:30%}.search .title[data-v-b7f17f62]{font-size:16px;font-weight:bolder;color:var(--topic-color);margin:30px 0 20px}.search main[data-v-b7f17f62]{display:-webkit-box;display:-ms-flexbox;display:flex}.search-image[data-v-b7f17f62]{-webkit-box-flex:4;-ms-flex:4;flex:4}.search-image .content[data-v-b7f17f62]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.search-image .content>div[data-v-b7f17f62]{text-align:center;margin:0 1.5vw 20px 0}.search-image .content>div[data-v-b7f17f62]:nth-child(4n+4){margin-right:0}.search-image .content .image-item[data-v-b7f17f62]{width:7vw;height:7vw}.search-image .content .demonstration[data-v-b7f17f62]{line-height:25px;font-size:12px;display:block}.search-paper[data-v-b7f17f62]{-webkit-box-flex:6;-ms-flex:6;flex:6;font-size:14px;padding-right:50px}.el-pagination[data-v-b7f17f62]{margin-top:10px}","",{version:3,sources:["C:/Users/zzy/Desktop/flask-vue-spa/frontend/src/pages/search/index.vue"],names:[],mappings:"AACA,+BACE,SAAW,CACZ,AACD,gCACE,eAAgB,AAChB,mBAAoB,AACpB,yBAA0B,AAC1B,kBAAsB,CACvB,AACD,8BACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,+BACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,wCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,cAAgB,CACrB,AACD,4CACE,kBAAmB,AACnB,qBAAuB,CACxB,AACD,4DACE,cAAgB,CACjB,AACD,oDACE,UAAW,AACX,UAAY,CACb,AACD,uDACE,iBAAkB,AAClB,eAAgB,AAChB,aAAe,CAChB,AACD,+BACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,eAAgB,AAChB,kBAAoB,CACrB,AACD,gCACE,eAAiB,CAClB",file:"index.vue",sourcesContent:["\n.search-input[data-v-b7f17f62] {\n  width: 30%;\n}\n.search .title[data-v-b7f17f62] {\n  font-size: 16px;\n  font-weight: bolder;\n  color: var(--topic-color);\n  margin: 30px 0 20px 0;\n}\n.search main[data-v-b7f17f62] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.search-image[data-v-b7f17f62] {\n  -webkit-box-flex: 4;\n      -ms-flex: 4;\n          flex: 4;\n}\n.search-image .content[data-v-b7f17f62] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.search-image .content > div[data-v-b7f17f62] {\n  text-align: center;\n  margin: 0 1.5vw 20px 0;\n}\n.search-image .content > div[data-v-b7f17f62]:nth-child(4n + 4) {\n  margin-right: 0;\n}\n.search-image .content .image-item[data-v-b7f17f62] {\n  width: 7vw;\n  height: 7vw;\n}\n.search-image .content .demonstration[data-v-b7f17f62] {\n  line-height: 25px;\n  font-size: 12px;\n  display: block;\n}\n.search-paper[data-v-b7f17f62] {\n  -webkit-box-flex: 6;\n      -ms-flex: 6;\n          flex: 6;\n  font-size: 14px;\n  padding-right: 50px;\n}\n.el-pagination[data-v-b7f17f62] {\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},"YU/J":function(a,t,e){var n=e("iSD2");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("rjj0")("1f1c2156",n,!0,{})},ar59:function(a,t,e){"use strict";function n(a){e("dkuu")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("GT6m"),s=e("D3ga"),c=e("VU/8"),o=n,r=c(i.a,s.a,!1,o,"data-v-b7f17f62",null);t.default=r.exports},bupt:function(a,t,e){"use strict";function n(a){e("YU/J")}var i=e("mCk3"),s=e("401c"),c=e("VU/8"),o=n,r=c(i.a,s.a,!1,o,"data-v-6a30aa7d",null);t.a=r.exports},ccL1:function(a,t,e){t=a.exports=e("FZ+f")(!0),t.push([a.i,".card[data-v-5bfc85cd]{position:relative;font-family:SimSun}.card-title[data-v-5bfc85cd]{text-decoration:underline;margin-bottom:10px}.card-title a[data-v-5bfc85cd]{color:#3385ff}.card-content[data-v-5bfc85cd]{line-height:20px;width:95%;overflow:hidden}.card-ellipsis[data-v-5bfc85cd]{position:absolute;right:8px;bottom:45px}.card-source[data-v-5bfc85cd]{font-size:12px;color:green;padding:10px 0 20px}.card:last-child .card-source[data-v-5bfc85cd]{padding-bottom:0}","",{version:3,sources:["C:/Users/zzy/Desktop/flask-vue-spa/frontend/src/components/Card.vue"],names:[],mappings:"AACA,uBACE,kBAAmB,AACnB,kBAAsB,CACvB,AACD,6BACE,0BAA2B,AAC3B,kBAAoB,CACrB,AACD,+BACE,aAAe,CAChB,AACD,+BACE,iBAAkB,AAClB,UAAW,AACX,eAAiB,CAClB,AACD,gCACE,kBAAmB,AACnB,UAAW,AACX,WAAa,CACd,AACD,8BACE,eAAgB,AAChB,YAAa,AACb,mBAAuB,CACxB,AACD,+CACE,gBAAoB,CACrB",file:"Card.vue",sourcesContent:["\n.card[data-v-5bfc85cd] {\n  position: relative;\n  font-family: 'SimSun';\n}\n.card-title[data-v-5bfc85cd] {\n  text-decoration: underline;\n  margin-bottom: 10px;\n}\n.card-title a[data-v-5bfc85cd] {\n  color: #3385ff;\n}\n.card-content[data-v-5bfc85cd] {\n  line-height: 20px;\n  width: 95%;\n  overflow: hidden;\n}\n.card-ellipsis[data-v-5bfc85cd] {\n  position: absolute;\n  right: 8px;\n  bottom: 45px;\n}\n.card-source[data-v-5bfc85cd] {\n  font-size: 12px;\n  color: green;\n  padding: 10px 0 20px 0;\n}\n.card:last-child .card-source[data-v-5bfc85cd] {\n  padding-bottom: 0px;\n}\n"],sourceRoot:""}])},dkuu:function(a,t,e){var n=e("SUZy");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("rjj0")("0f78f8ab",n,!0,{})},iSD2:function(a,t,e){t=a.exports=e("FZ+f")(!0),t.push([a.i,'.clearfix[data-v-6a30aa7d]:after{display:block;clear:both;content:""}.select-wrapper[data-v-6a30aa7d]{margin-bottom:15px}.el-checkbox-group[data-v-6a30aa7d]{display:inline-block;vertical-align:top;float:left}.el-checkbox-group[data-v-6a30aa7d] .el-checkbox-button__inner{display:inline-block}.block-select[data-v-6a30aa7d]{margin:15px 0}.block-select[data-v-6a30aa7d] .el-input{width:30%;margin-right:10px;font-size:12px}.block-select[data-v-6a30aa7d] .el-button.is-disabled:hover{background-color:transparent}.inline-select[data-v-6a30aa7d]{position:absolute;top:0;right:0}.warning[data-v-6a30aa7d]{color:red}',"",{version:3,sources:["C:/Users/zzy/Desktop/flask-vue-spa/frontend/src/components/Selection.vue"],names:[],mappings:"AACA,iCACE,cAAe,AACf,WAAY,AACZ,UAAY,CACb,AACD,iCACE,kBAAoB,CACrB,AACD,oCACE,qBAAsB,AACtB,mBAAoB,AACpB,UAAY,CACb,AACD,+DACE,oBAAsB,CACvB,AACD,+BACE,aAAe,CAChB,AACD,yCACE,UAAW,AACX,kBAAmB,AACnB,cAAgB,CACjB,AACD,4DACE,4BAA8B,CAC/B,AACD,gCACE,kBAAmB,AACnB,MAAO,AACP,OAAS,CACV,AACD,0BACE,SAAW,CACZ",file:"Selection.vue",sourcesContent:["\n.clearfix[data-v-6a30aa7d]::after {\n  display: block;\n  clear: both;\n  content: '';\n}\n.select-wrapper[data-v-6a30aa7d] {\n  margin-bottom: 15px;\n}\n.el-checkbox-group[data-v-6a30aa7d] {\n  display: inline-block;\n  vertical-align: top;\n  float: left;\n}\n.el-checkbox-group[data-v-6a30aa7d] .el-checkbox-button__inner {\n  display: inline-block;\n}\n.block-select[data-v-6a30aa7d] {\n  margin: 15px 0;\n}\n.block-select[data-v-6a30aa7d] .el-input {\n  width: 30%;\n  margin-right: 10px;\n  font-size: 12px;\n}\n.block-select[data-v-6a30aa7d] .el-button.is-disabled:hover {\n  background-color: transparent;\n}\n.inline-select[data-v-6a30aa7d] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.warning[data-v-6a30aa7d] {\n  color: red;\n}\n"],sourceRoot:""}])},mCk3:function(a,t,e){"use strict";t.a={name:"selection",props:{search:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},checkListOption:{type:Array,required:!0}},data:function(){return{wrong:!1,keyword:"",checkList:this.checkListOption.map(function(a){return a.value})}},methods:{handleCheckedDataChange:function(a){0!==this.checkList.length&&(this.search?this.keyword?this.$emit("change",this.checkList,this.keyword):this.wrong=!0:this.$emit("change",this.checkList))}}}},rhdv:function(a,t,e){"use strict";function n(a){e("zaKs")}var i=e("NU23"),s=e("KEQB"),c=e("VU/8"),o=n,r=c(i.a,s.a,!1,o,"data-v-5bfc85cd",null);t.a=r.exports},zaKs:function(a,t,e){var n=e("ccL1");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("rjj0")("00b84730",n,!0,{})}});
//# sourceMappingURL=2.8a75ae8f6221f88b79a8.js.map