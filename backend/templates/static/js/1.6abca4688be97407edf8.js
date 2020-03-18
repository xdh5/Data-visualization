webpackJsonp([1],{"1JcG":function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".introduction[data-v-500aa479]{width:60%;margin:0 auto}.introduction h1[data-v-500aa479]{font-size:18px;margin:20px 0;text-align:center}.introduction li[data-v-500aa479]{font-size:14px;line-height:25px}","",{version:3,sources:["C:/Users/zzy/Desktop/flask-vue-spa/frontend/src/pages/upload/introduction.vue"],names:[],mappings:"AACA,+BACE,UAAW,AACX,aAAe,CAChB,AACD,kCACE,eAAgB,AAChB,cAAe,AACf,iBAAmB,CACpB,AACD,kCACE,eAAgB,AAChB,gBAAkB,CACnB",file:"introduction.vue",sourcesContent:["\n.introduction[data-v-500aa479] {\n  width: 60%;\n  margin: 0 auto;\n}\n.introduction h1[data-v-500aa479] {\n  font-size: 18px;\n  margin: 20px 0;\n  text-align: center;\n}\n.introduction li[data-v-500aa479] {\n  font-size: 14px;\n  line-height: 25px;\n}\n"],sourceRoot:""}])},"7hXw":function(t,e,a){"use strict";var n=a("BO1k"),i=a.n(n),s=a("cO69"),o=a("ZIKj"),p=a("Cjaq");e.a={name:"upload",components:{Upload:s.a,Introduction:o.a,Confirm:p.a},data:function(){return{active:0,stepsTitle:["阅读操作说明","上传数据","确认数据"],allData:{},uploadProps:[{type:"images",label:"图片",tip:"仅支持jpg格式，上传的图片的命名格式为：Type+Name.jpg，如：侦察机B200T.jpg",accept:".jpg"},{type:"paper",label:"中文文献",tip:"上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf",accept:".pdf"},{type:"webs",label:"网页",tip:"上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf",accept:".pdf"},{type:"report",label:"科技报告",tip:"上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf",accept:".pdf"},{type:"english",label:"英文文献",tip:"上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf",accept:".pdf"},{type:"patent",label:"专利",tip:"上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf",accept:".pdf"},{type:"meeting",label:"会议",tip:"上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf",accept:".pdf"}]}},methods:{changeUploadData:function(t,e,a){this.allData[e]=t},transform:function(t){var e=[];for(var a in t)e.push(t[a]);return e},checkData:function(){var t=0;for(var e in this.allData){var a=this.allData[e].csv?this.allData[e].csv.length:0,n=this.allData[e].files?this.allData[e].files.length:0;if((0===a&&0!==n||0===n&&0!==a)&&"webs"!==e)return void this.$message.error(this.allData[e].label+"数据必须同时上传！");t+=a,t+=n}if(0===t)return void this.$message.error("数据不能全部为空！");this.active++},uploadData:function(){var t=this,e=new FormData;for(var a in this.allData){var n=this.allData[a].csv,s=this.allData[a].files;if(n||s.length>0){e.append(a+"Csv",n,n.name);var o=!0,p=!1,l=void 0;try{for(var r,c=i()(s);!(o=(r=c.next()).done);o=!0){var d=r.value;e.append(a+"Files",d,d.name)}}catch(t){p=!0,l=t}finally{try{!o&&c.return&&c.return()}finally{if(p)throw l}}}}this.$http.post("/api/Upload/checkFile",e,{headers:{"Content-Type":"multipart/form-data;charse=UTF-8"}}).then(function(e){t.$message({message:"上传成功，请等待计算结果",type:"success"}),t.$router.push({name:"waiting"})}).catch(function(e){t.active=0})},addStep:function(){1===this.active?this.checkData():this.active++},subStep:function(){this.active--}}}},"7v+m":function(t,e,a){"use strict";function n(t){a("K9tz")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("7hXw"),s=a("r1Rg"),o=a("VU/8"),p=n,l=o(i.a,s.a,!1,p,"data-v-b14369a0",null);e.default=l.exports},BO1k:function(t,e,a){t.exports={default:a("fxRn"),__esModule:!0}},Cjaq:function(t,e,a){"use strict";function n(t){a("zdga")}var i=a("g0pA"),s=a("EKVv"),o=a("VU/8"),p=n,l=o(i.a,s.a,!1,p,"data-v-2eb85287",null);e.a=l.exports},D9U3:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".warn[data-v-2eb85287]{color:red}.document[data-v-2eb85287]{margin:20px 0}.document h1[data-v-2eb85287]{font-size:16px;font-weight:700;line-height:30px;font-family:SimHei;color:#409eef;border-bottom:1px solid #dcdfe6}.document h2[data-v-2eb85287]{font-size:14px;color:#000;line-height:30px}.document li[data-v-2eb85287],.document p[data-v-2eb85287]{color:#606266;font-size:12px}","",{version:3,sources:["C:/Users/zzy/Desktop/flask-vue-spa/frontend/src/pages/upload/confirm.vue"],names:[],mappings:"AACA,uBACE,SAAW,CACZ,AACD,2BACE,aAAe,CAChB,AACD,8BACE,eAAgB,AAChB,gBAAkB,AAClB,iBAAkB,AAClB,mBAAsB,AACtB,cAAe,AACf,+BAAiC,CAClC,AACD,8BACE,eAAgB,AAChB,WAAa,AACb,gBAAkB,CACnB,AACD,2DAEE,cAAe,AACf,cAAgB,CACjB",file:"confirm.vue",sourcesContent:["\n.warn[data-v-2eb85287] {\n  color: red;\n}\n.document[data-v-2eb85287] {\n  margin: 20px 0;\n}\n.document h1[data-v-2eb85287] {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 30px;\n  font-family: 'SimHei';\n  color: #409eef;\n  border-bottom: 1px solid #DCDFE6;\n}\n.document h2[data-v-2eb85287] {\n  font-size: 14px;\n  color: black;\n  line-height: 30px;\n}\n.document p[data-v-2eb85287],\n.document li[data-v-2eb85287] {\n  color: #606266;\n  font-size: 12px;\n}\n"],sourceRoot:""}])},EKVv:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"warn"},[t._v("\n    请确认数据是否正确，如不正确，请返回上一步修改；如正确，请点击完成，点击完成后需要5分钟左右处理数据。\n  ")]),t._v(" "),a("div",{staticClass:"show-document"},t._l(t.allData,function(e){return a("div",t._b({key:e.type,staticClass:"document"},"div",e,!1),[a("h1",[t._v(t._s(e.label))]),t._v(" "),a("div",{staticClass:"document-content"},[a("h2",[t._v("csv:")]),t._v(" "),a("p",[t._v(t._s(e.csv?e.csv.name:""))])]),t._v(" "),a("div",{staticClass:"document-content"},[a("h2",[t._v("files:")]),t._v(" "),a("ul",t._l(e.files,function(e){return a("li",{key:e.name},[t._v(t._s(e.name))])}),0)])])}),0)])},i=[],s={render:n,staticRenderFns:i};e.a=s},G20Z:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".step-components[data-v-b14369a0]{margin:30px 0}.upload[data-v-b14369a0]{margin-bottom:20px}","",{version:3,sources:["C:/Users/zzy/Desktop/flask-vue-spa/frontend/src/pages/upload/index.vue"],names:[],mappings:"AACA,kCACE,aAAe,CAChB,AACD,yBACE,kBAAoB,CACrB",file:"index.vue",sourcesContent:["\n.step-components[data-v-b14369a0] {\n  margin: 30px 0;\n}\n.upload[data-v-b14369a0] {\n  margin-bottom: 20px;\n}\n"],sourceRoot:""}])},K9tz:function(t,e,a){var n=a("G20Z");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("06e9464e",n,!0,{})},OOnL:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"introduction"},[a("h1",[t._v("用户操作手册")]),t._v(" "),a("ul",[a("li",[t._v("1. 上传前需下载上传模板文件，并根据模板标题填写数据")]),t._v(" "),a("li",[t._v("2. csv 和 图片/pdf必须同时上传")]),t._v(" "),a("li",[t._v("3. 上传的图片的命名格式为：Type+Name.jpg，如：侦察机B200T.jpg")]),t._v(" "),a("li",[t._v("4. 上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf")]),t._v(" "),a("li",[t._v("5. 上传后须等待数据处理，期间不能进行任何操作，时间约5分钟")])])])}],s={render:n,staticRenderFns:i};e.a=s},PB1H:function(t,e,a){var n=a("QsG2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("105e694c",n,!0,{})},PUYo:function(t,e,a){"use strict";e.a={name:"upload-component",data:function(){return{downloadLoading:!1,uploadData:{label:"",csv:null,files:[]}}},props:{type:{type:String,required:!0},label:{type:String,required:!0},tip:{type:String},accept:{type:String,required:!0}},methods:{checkNumber:function(){this.$message.error("仅允许上传一个文件")},handleDownload:function(){var t=this;this.downloadLoading=!0,this.$http.get("/api/upload/download",{params:{type:this.type}}).then(function(e){t.downloadLoading=!1}).catch(function(t){})},changeData:function(t,e,a){"csv"===a?this.uploadData[a]=e.length>0?e[0].raw:null:"files"===a&&(this.uploadData[a]=e.map(function(t){return t.raw})),this.uploadData.label=this.label,this.$emit("change",this.uploadData,this.type,this.label)}}}},QsG2:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"[data-v-0d9440f8] .el-upload__tip{margin-top:30px}.step-title[data-v-0d9440f8]{font-size:18px;font-weight:700;line-height:40px;font-family:SimHei;color:#409eef;border-bottom:1px solid #dcdfe6}.step-content-wrapper[data-v-0d9440f8]{margin:20px 0}.step-content-wrapper .step-content[data-v-0d9440f8]{margin:10px 0}.step-content-wrapper .upload-tip[data-v-0d9440f8]{display:inline-block;font-size:14px;width:150px;text-align:left}.step-content-wrapper .el-upload__tip[data-v-0d9440f8]{display:inline;color:red;margin-left:20px}.step-content-wrapper[data-v-0d9440f8] .el-upload-list__item-name{font-size:12px!important}","",{version:3,sources:["C:/Users/zzy/Desktop/flask-vue-spa/frontend/src/pages/upload/upload.vue"],names:[],mappings:"AACA,kCACE,eAAiB,CAClB,AACD,6BACE,eAAgB,AAChB,gBAAkB,AAClB,iBAAkB,AAClB,mBAAsB,AACtB,cAAe,AACf,+BAAiC,CAClC,AACD,uCACE,aAAe,CAChB,AACD,qDACE,aAAe,CAChB,AACD,mDACE,qBAAsB,AACtB,eAAgB,AAChB,YAAa,AACb,eAAiB,CAClB,AACD,uDACE,eAAgB,AAChB,UAAW,AACX,gBAAkB,CACnB,AACD,kEACE,wBAA2B,CAC5B",file:"upload.vue",sourcesContent:["\n[data-v-0d9440f8] .el-upload__tip {\n  margin-top: 30px;\n}\n.step-title[data-v-0d9440f8] {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 40px;\n  font-family: 'SimHei';\n  color: #409eef;\n  border-bottom: 1px solid #DCDFE6;\n}\n.step-content-wrapper[data-v-0d9440f8] {\n  margin: 20px 0;\n}\n.step-content-wrapper .step-content[data-v-0d9440f8] {\n  margin: 10px 0;\n}\n.step-content-wrapper .upload-tip[data-v-0d9440f8] {\n  display: inline-block;\n  font-size: 14px;\n  width: 150px;\n  text-align: left;\n}\n.step-content-wrapper .el-upload__tip[data-v-0d9440f8] {\n  display: inline;\n  color: red;\n  margin-left: 20px;\n}\n.step-content-wrapper[data-v-0d9440f8] .el-upload-list__item-name {\n  font-size: 12px !important;\n}\n"],sourceRoot:""}])},SN8i:function(t,e,a){"use strict";e.a={name:"introduction"}},WpYz:function(t,e,a){var n=a("1JcG");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("4fa39a60",n,!0,{})},ZIKj:function(t,e,a){"use strict";function n(t){a("WpYz")}var i=a("SN8i"),s=a("OOnL"),o=a("VU/8"),p=n,l=o(i.a,s.a,!1,p,"data-v-500aa479",null);e.a=l.exports},cO69:function(t,e,a){"use strict";function n(t){a("PB1H")}var i=a("PUYo"),s=a("pKG1"),o=a("VU/8"),p=n,l=o(i.a,s.a,!1,p,"data-v-0d9440f8",null);e.a=l.exports},fxRn:function(t,e,a){a("+tPU"),a("zQR9"),t.exports=a("g8Ux")},g0pA:function(t,e,a){"use strict";e.a={name:"confirm",props:{allData:{type:Array,required:!0}}}},g8Ux:function(t,e,a){var n=a("77Pl"),i=a("3fs2");t.exports=a("FeBl").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},pKG1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step"},[a("div",{staticClass:"step-title"},[t._v(" "+t._s(t.label))]),t._v(" "),a("div",{staticClass:"step-content-wrapper"},["webs"!==t.type?a("div",{staticClass:"step-content"},[a("span",{staticClass:"upload-tip"},[t._v("下载模板文件：")]),t._v(" "),a("el-button",{staticClass:"download",attrs:{size:"mini",type:"primary",loading:t.downloadLoading},on:{click:t.handleDownload}},[t._v("点击下载")])],1):t._e(),t._v(" "),a("div",{staticClass:"step-content"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"/api/Upload/postData","on-change":function(e,a){t.changeData(e,a,"csv")},"on-remove":function(e,a){t.changeData(e,a,"csv")},limit:1,"on-exceed":t.checkNumber,"auto-upload":!1,accept:".csv"}},[a("span",{staticClass:"upload-tip"},[t._v("上传csv数据：")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),"webs"!==t.type?a("div",{staticClass:"step-content"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"/api/Upload/postData","on-change":function(e,a){t.changeData(e,a,"files")},"on-remove":function(e,a){t.changeData(e,a,"files")},"auto-upload":!1,multiple:"",accept:t.accept}},[a("span",{staticClass:"upload-tip"},[t._v("上传"+t._s(t.label)+"数据：")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.tip))])],1)],1):t._e()])])},i=[],s={render:n,staticRenderFns:i};e.a=s},r1Rg:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload body"},[a("el-steps",{attrs:{active:t.active,"finish-status":"success"}},t._l(t.stepsTitle,function(t){return a("el-step",{key:t,attrs:{title:t}})}),1),t._v(" "),a("div",{staticClass:"step-components"},[a("Introduction",{directives:[{name:"show",rawName:"v-show",value:0===t.active,expression:"active === 0"}]})],1),t._v(" "),a("div",{staticClass:"step-components"},t._l(t.uploadProps,function(e){return a("Upload",t._b({directives:[{name:"show",rawName:"v-show",value:1===t.active,expression:"active === 1"}],key:e.type,on:{change:t.changeUploadData}},"Upload",e,!1))}),1),t._v(" "),a("div",{staticClass:"step-components"},[a("Confirm",{directives:[{name:"show",rawName:"v-show",value:2===t.active,expression:"active === 2"}],attrs:{allData:t.transform(t.allData)}})],1),t._v(" "),t.active>0&&t.active<=t.stepsTitle.length-1?a("el-button",{on:{click:t.subStep}},[t._v("上一步")]):t._e(),t._v(" "),t.active>=0&&t.active<t.stepsTitle.length-1?a("el-button",{on:{click:t.addStep}},[t._v("下一步")]):t._e(),t._v(" "),t.active===t.stepsTitle.length-1?a("el-button",{on:{click:function(e){t.addStep(),t.uploadData()}}},[t._v("完成")]):t._e()],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},zdga:function(t,e,a){var n=a("D9U3");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("5eca6ffe",n,!0,{})}});
//# sourceMappingURL=1.6abca4688be97407edf8.js.map