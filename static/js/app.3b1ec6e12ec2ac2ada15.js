webpackJsonp([1],{0:function(t,e){},"1RU6":function(t,e){},"5gVi":function(t,e){},"9kb/":function(t,e){},"AQt+":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW");function n(t,e,s){this.snowBox=document.getElementById(t),this.snowStyle=Math.ceil(Math.random()*s),this.left=this.snowBox.offsetWidth*Math.random(),this.top=this.snowBox.offsetHeight*Math.random(),this.angle=1.1+.8*Math.random(),this.minAngle=1.1,this.maxAngle=1.9,this.angleDelta=.01*Math.random(),this.speed=1.4+Math.random(),this.createEle(e)}n.prototype={createEle:function(t){var e=t.lastIndexOf("."),s=t.substring(0,e)+this.snowStyle+t.substring(e,t.length);(new Image).src=s,this.ele=document.createElement("img"),this.ele.setAttribute("src",s),this.ele.style.position="absolute",this.ele.style.zIndex="99",this.ele.style.userSelect="none",this.ele.style.webkitUserSelect="none",this.ele.style.mozUserSelect="none",this.ele.style.msUserSelect="none",this.ele.style.webkitAnimationIterationCount="infinite",this.ele.style.webkitAnimationDirection="alternate",this.ele.style.webkitAnimationTimingFunction="ease-in-out",this.ele.style.webkitTransformOrigin="50% -100%",this.ele.style.webkitAnimationName=Math.random()<.5?"clockwiseSpin":"counterclockwiseSpinAndFlip",this.ele.style.webkitAnimationDuration="5s",this.snowBox.appendChild(this.ele)},move:function(){(this.angle<this.minAngle||this.angle>this.maxAngle)&&(this.angleDelta=-this.angleDelta),this.angle+=this.angleDelta,this.left+=this.speed*Math.cos(this.angle*Math.PI),this.top-=this.speed*Math.sin(this.angle*Math.PI),this.left<0?this.left=this.snowBox.offsetWidth-5*Math.random()+3:this.left>this.snowBox.offsetWidth-5*Math.random()+3&&(this.left=0),this.top>this.snowBox.offsetHeight-5*Math.random()+3&&(this.top=0),this.ele.style.left=this.left+"px",this.ele.style.top=this.top+"px"}};var a="/src/assets",o={name:"app",data:function(){return{navLists:[{text:"首页",route:"home"},{text:"归档",route:"archives"},{text:"标签",route:"tags"},{text:"导航",route:"links"},{text:"关于",route:"about"}],sideIsShow:!1,blogInfo:{}}},methods:{sideIsShowFn:function(t){t&&!this.sideIsShow||(this.sideIsShow=!this.sideIsShow)}},beforeCreate:function(){var t=this,e=this;this.$http.get(a+"/data/blogsInfo.json").then(function(s){t.$store.commit("blogsInfoSet",s.body),e.blogInfo=e.$store.state.blogInfo}).catch(function(t){}),this.$http.get(a+"/data/noteList.json").then(function(e){t.$store.commit("noteListSet",e.body)}).catch(function(t){})},mounted:function(){(function(){for(var t=!1,e=navigator.userAgent,s=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=0;i<s.length;i++)if(e.indexOf(s[i])>0){t=!0;break}return t})()||function(t,e,s,i){for(var a=[],o=0;o<s;o++)a.push(new n(t,e,i));setInterval(function(){for(var t=a.length-1;t>=0;t--)a[t]&&a[t].move()},40)}("bodyCon",a+"/img/snow/flower.png",12,3)}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{side:t.sideIsShow},attrs:{id:"bodyCon"}},[i("div",{attrs:{id:"sidebar"}},[i("div",{staticClass:"logoCon"},[i("a",{on:{click:function(e){t.$goRoute("home")}}},[i("img",{staticClass:"sideLogo",attrs:{src:s("dLd/"),alt:"我的头像"}}),t._v(" "),i("p",{staticClass:"sideUserName"},[t._v(t._s(t.blogInfo.blogName))]),t._v(" "),i("p",{staticClass:"sideSubtitle"},[t._v(t._s(t.blogInfo.subtitle))])])]),t._v(" "),i("ul",{staticClass:"sideNav"},t._l(t.navLists,function(e){return i("li",{staticClass:"navList",on:{click:function(e){t.sideIsShowFn("navList")}}},[i("a",{on:{click:function(s){t.$goRoute(e.route)}}},[t._v(t._s(e.text))])])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.sideIsShow,expression:"sideIsShow"}],attrs:{id:"sidebar-mask"},on:{click:function(e){t.sideIsShowFn()}}}),t._v(" "),i("div",{attrs:{id:"header"}},[i("img",{staticClass:"headerLogo",attrs:{src:s("dLd/"),alt:""},on:{click:function(e){t.sideIsShowFn()}}}),t._v(" "),i("p",{staticClass:"headerUserName"},[i("a",{on:{click:function(e){t.$goRoute("home")}}},[t._v(t._s(t.blogInfo.blogName))])])]),t._v(" "),i("div",{attrs:{id:"main"}},[i("router-view")],1)])},staticRenderFns:[]};var r=s("VU/8")(o,l,!1,function(t){s("ofBR")},null,null).exports,h=s("/ocq"),c={name:"home",data:function(){return{home:"这是主页",page:1,pageCount:10}},computed:{noteList:function(){var t=[];if(this.$store.state.noteList.notes)for(var e=(this.page-1)*this.pageCount;e<=this.page*this.pageCount-1;e++)this.$store.state.noteList.notes[e]&&t.push(this.$store.state.noteList.notes[e]);return t},noteTotal:function(){return this.$store.state.noteList.notes||[]}},methods:{changePage:function(t){this.page=t}},mounted:function(){window.document.title="首页 - 小桃酥的曲奇饼"}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("ul",t._l(t.noteList,function(e){return s("li",{staticClass:"blogItem"},[s("h2",{staticClass:"blogTitle"},[t._v(t._s(e.caption))]),t._v(" "),s("span",{staticClass:"blogUpTime"},[t._v(t._s(e.updatetime))]),t._v(" "),s("p",{staticClass:"blogIntro"},[t._v(t._s(e.intro))]),t._v(" "),s("a",{staticClass:"blogDetail",on:{click:function(s){t.$goRoute("noteItem",{noteData:e})}}},[t._v("阅读全文»")])])})),t._v(" "),s("div",{staticClass:"pageCon"},[s("el-pagination",{attrs:{background:"","current-page":this.page,"page-size":this.pageCount,layout:"total, prev, pager, next, jumper",total:this.noteTotal.length},on:{"current-change":t.changePage}})],1)])},staticRenderFns:[]};var v=s("VU/8")(c,u,!1,function(t){s("5gVi")},null,null).exports,m={name:"archives",data:function(){return{title:"归档"}},computed:{archivesData:function(){for(var t={},e=this.$store.state.noteList.notes||[],s=0;s<e.length;s++)e[s].arcTime=new Date(e[s].updatetime).getFullYear()+"年"+(new Date(e[s].updatetime).getMonth()+1)+"月",t[e[s].arcTime]?t[e[s].arcTime].arcData.push({archive:e[s].arcTime,caption:e[s].caption,updatetime:e[s].updatetime,url:e[s].url}):t[e[s].arcTime]={archive:e[s].arcTime,arcData:[{caption:e[s].caption,updatetime:e[s].updatetime,url:e[s].url}]};return t}},mounted:function(){window.document.title="归档 - 小桃酥的曲奇饼"}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("h2",{staticClass:"conTitle"},[t._v("归档")]),t._v(" "),t._l(t.archivesData,function(e){return s("div",{staticClass:"archiveItem"},[s("h3",[t._v(t._s(e.archive)+" "),s("span",[t._v("("+t._s(e.arcData.length)+")")])]),t._v(" "),s("ul",t._l(e.arcData,function(e){return s("li",[s("a",{on:{click:function(s){t.$goRoute("noteItem",{noteData:e})}}},[t._v(t._s(e.caption))]),t._v(" "),s("span",[t._v(t._s(e.updatetime))])])}))])})],2)},staticRenderFns:[]};var f=s("VU/8")(m,_,!1,function(t){s("AQt+")},null,null).exports,d={name:"tags",data:function(){return{title:"标签"}},components:{},computed:{tagsData:function(){for(var t={},e=this.$store.state.noteList.notes||[],s=0;s<e.length;s++)t[e[s].type]?t[e[s].type].tagData.push(e[s]):t[e[s].type]={tagType:e[s].type,tagData:[e[s]]};return t}},mounted:function(){window.document.title="标签 - 小桃酥的曲奇饼"}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("h2",{staticClass:"conTitle"},[t._v("标签")]),t._v(" "),s("ul",{staticClass:"tagItem clearfix"},t._l(t.tagsData,function(e){return s("li",{on:{click:function(s){t.$goRoute("noteList",{noteListData:e})}}},[t._v(t._s(e.tagType)),s("span",[t._v("("+t._s(e.tagData.length)+")")])])}))])},staticRenderFns:[]};var g=s("VU/8")(d,p,!1,function(t){s("nkFp")},null,null).exports,b={name:"links",data:function(){return{title:"导航",activeName:""}},components:{},computed:{linksData:function(){return this.$store.state.linksData.links||[]}},beforeCreate:function(){var t=this;t.$store.state.linksData.links||this.$http.get(a+"/data/linksData.json").then(function(e){t.$store.commit("linksDataSet",e.body),t.activeName=e.body.links[0].typeName}).catch(function(t){})},mounted:function(){window.document.title="导航 - 小桃酥的曲奇饼",this.$store.state.linksData.links&&(this.activeName=this.$store.state.linksData.links[0].typeName)}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("h2",{staticClass:"conTitle"},[t._v("前端导航")]),t._v(" "),s("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.linksData,function(e){return s("el-collapse-item",{key:e.id,attrs:{title:e.typeName,name:e.typeName}},[s("ul",{staticClass:"linkItems clearfix"},t._l(e.data,function(e){return s("li",{staticClass:"linkItem"},[s("a",{attrs:{target:"_blank",href:e.linkUrl}},[t._v(t._s(e.linkName))])])}))])}))],1)},staticRenderFns:[]};var C=s("VU/8")(b,w,!1,function(t){s("1RU6")},null,null).exports,I={name:"about",data:function(){return{title:"关于",blogCreateTime:this.$store.state.blogInfo.createTime,blogTime:"",timeInterval:function(){}}},components:{},mounted:function(){window.document.title="关于 - 小桃酥的曲奇饼";var t=this;this.timeInterval=setInterval(function(){var e=void 0,s=void 0,i=void 0,n=void 0,a=new Date-new Date(t.blogCreateTime);a-=864e5*(e=Math.floor(a/864e5)),a-=36e5*(s=Math.floor(a/36e5)),a-=6e4*(i=Math.floor(a/6e4)),n=Math.floor(a/1e3),t.blogTime=e+"天"+s+"时"+i+"分"+n+"秒"},1e3)},beforeDestroy:function(){window.clearInterval(this.timeInterval)}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("h2",{staticClass:"conTitle"},[this._v(this._s(this.title))]),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"aboutCon"},[e("h3",{staticClass:"abNavItem",attrs:{id:"aboutIntro"}},[this._v("自我介绍")]),this._v(" "),e("p",[this._v("我叫小桃酥的曲奇饼(无奈...有点长)，直接叫我曲奇也行，92年出生于江苏盐城。现在北京工作，住在霍营那一带。")]),this._v(" "),this._m(1),this._v(" "),e("h3",{staticClass:"abNavItem",attrs:{id:"aboutSkill"}},[this._v("专业技能")]),this._v(" "),this._m(2),this._v(" "),e("h3",{staticClass:"abNavItem",attrs:{id:"aboutWork"}},[this._v("工作经历")]),this._v(" "),this._m(3),this._v(" "),e("h3",{staticClass:"abNavItem",attrs:{id:"aboutProject"}},[this._v("我的项目")]),this._v(" "),this._m(4),this._v(" "),e("h3",{staticClass:"abNavItem",attrs:{id:"aboutTime"}},[this._v("时光机")]),this._v(" "),e("p",[this._v("博客已运行："+this._s(this.blogTime))]),this._v(" "),e("h3",{staticClass:"abNavItem",attrs:{id:"aboutContact"}},[this._v("联系我")]),this._v(" "),this._m(5)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"aboutNav"},[e("li",[e("a",{attrs:{href:"#aboutIntro"}},[this._v("自我介绍")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#aboutSkill"}},[this._v("专业技能")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#aboutWork"}},[this._v("工作经历")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#aboutProject"}},[this._v("我的项目")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#aboutTime"}},[this._v("时光机")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#aboutContact"}},[this._v("联系我")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("喜欢鼓捣各种东西(电子产品、软件系统、博客论坛)，一个动手能力较强的前端职业者。")]),this._v(" "),e("li",[this._v("乐于助人，不管是平时生活还是工作都喜欢帮助他人")]),this._v(" "),e("li",[this._v("享受那种问题(bug)在自己手上解决掉的感觉")]),this._v(" "),e("li",[this._v("有代码强迫症，最初自己写的代码没技术含量(实在看不下去)，慢慢养成了写完一个功能都会回头去梳理逻辑的习惯")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("熟练掌握html+css，能够手写符合w3c标准的页面代码，快速精准还原设计稿，并处理各浏览器兼容问题；")]),this._v(" "),e("li",[this._v("熟练掌握JavaScript/JQ/BootStrap，完成基于DOM的特效交互，实现功能组件封装；")]),this._v(" "),e("li",[this._v("熟练掌握SASS\\SCSS预处理器，并能够利用IDE进行css自编译")]),this._v(" "),e("li",[this._v("熟练掌握requireJS，进行模块化开发；")]),this._v(" "),e("li",[this._v("熟练掌握Ajax/JSONP技术进行异步操作，完成与后台的数据交互；")]),this._v(" "),e("li",[this._v("熟练HTML5和CSS3技术，并能够基于Hybrid APP开发App内嵌页面；")]),this._v(" "),e("li",[this._v("熟练能够利用vue-cli进行项目搭建(本博客)，并使用vue+vuex+vue-router进行项目开发")]),this._v(" "),e("li",[this._v("熟练使用React 、angularJS、senchaTouch等框架")]),this._v(" "),e("li",[this._v("熟练使用git、github、gulp、webpack、Node；")]),this._v(" "),e("li",[this._v("开发工具：WebStorm、Sublime Text、node、Markdown、Chrome、Photoshop。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("北京中科视维文化科技有限公司 "),e("span",[this._v("|")]),this._v(" 2017/10~至今   "),e("span",[this._v("|")]),this._v(" 前端工程师")]),this._v(" "),e("li",[this._v("明博教育科技股份有限公司   "),e("span",[this._v("|")]),this._v(" 2016/01~2017/07 "),e("span",[this._v("|")]),this._v(" 前端工程师")]),this._v(" "),e("li",[this._v("科翔软通信息技术南通有限公司 "),e("span",[this._v("|")]),this._v(" 2014/05~2015/08 "),e("span",[this._v("|")]),this._v(" 网页制作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"javascript:;"}},[this._v("光团乐园管理系统(内部项目)")])]),this._v(" "),e("li",[e("a",{attrs:{target:"_blank",href:"http://www.iotgw.com:8888/"}},[this._v("校园物联网智能管理系统")])]),this._v(" "),e("li",[e("a",{attrs:{target:"_blank",href:"http://yun.myuclass.com//dist/platform/www/home/index.html"}},[this._v("优课智慧教育平台")])]),this._v(" "),e("li",[e("a",{attrs:{target:"_blank",href:"http://ar.myuclass.com/"}},[this._v("AR梦幻课堂")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Email：caiyl@ntsclong.com 或者 ntsclong@foxmail.com")]),this._v(" "),e("li",[this._v("GitHub：github.com/ntsclong")]),this._v(" "),e("li",[this._v("Gitee：gitee.com/ntsclong")]),this._v(" "),e("li",[this._v("博客园：www.cnblogs.com/cookies-cnbogs")]),this._v(" "),e("li",[this._v("QQ：602165066 (请注明来意)")])])}]};var D=s("VU/8")(I,k,!1,function(t){s("zgjM")},null,null).exports,S=s("mvHQ"),y=s.n(S),$={name:"noteItem",data:function(){return{noteData:{}}},components:{},mounted:function(){this.$route.params.noteData?(this.noteData=this.$route.params.noteData,sessionStorage.setItem("noteItemCur",y()(this.noteData))):this.noteData=JSON.parse(sessionStorage.getItem("noteItemCur"))},methods:{}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"noteItemCon",staticStyle:{height:"100%"}},[e("iframe",{attrs:{id:"noteItemIfr",onload:"!function(e) {\n    e.contentWindow.document.body.style.marginRight='20px'\n  }(this)",src:this.noteData.url,frameborder:"0"}})])},staticRenderFns:[]};var L=s("VU/8")($,x,!1,function(t){s("eDhM")},null,null).exports,T={name:"noteList",data:function(){return{noteListData:{}}},components:{},mounted:function(){this.$route.params.noteListData?(this.noteListData=this.$route.params.noteListData,sessionStorage.setItem("noteListCur",y()(this.noteListData))):this.noteListData=JSON.parse(sessionStorage.getItem("noteListCur"))}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("h2",{staticClass:"title"},[t._v("标签"),s("span",[t._v(t._s(t.noteListData.tagType))]),t._v("下的文章")]),t._v(" "),s("ul",t._l(t.noteListData.tagData,function(e){return s("li",{staticClass:"blogItem"},[s("h2",{staticClass:"blogTitle"},[t._v(t._s(e.caption))]),t._v(" "),s("span",{staticClass:"blogUpTime"},[t._v(t._s(e.updatetime))]),t._v(" "),s("p",{staticClass:"blogIntro"},[t._v(t._s(e.intro))]),t._v(" "),s("a",{staticClass:"blogDetail",on:{click:function(s){t.$goRoute("noteItem",{noteData:e})}}},[t._v("阅读全文»")])])}))])},staticRenderFns:[]};var M=s("VU/8")(T,N,!1,function(t){s("9kb/")},null,null).exports;i.default.use(h.a);var R=new h.a({mode:"history",routes:[{path:"/",name:"home",component:v},{path:"/home",name:"home",component:v},{path:"/archives",name:"archives",component:f},{path:"/tags",name:"tags",component:g},{path:"/links",name:"links",component:C},{path:"/about",name:"about",component:D},{path:"/noteItem",name:"noteItem",component:L},{path:"/noteList",name:"noteList",component:M}]}),A=(s("tvR6"),s("zL8q")),E=s("8+8L"),U=s("NYxO");i.default.use(A.Collapse),i.default.use(A.CollapseItem),i.default.use(A.Pagination),i.default.use(E.a),i.default.use(U.a),i.default.config.productionTip=!1,i.default.prototype.$goRoute=function(t,e){this.$router.push({name:t,params:e})};var F=new U.a.Store({state:{blogInfo:{},noteList:{},linksData:{}},mutations:{blogsInfoSet:function(t,e){t.blogInfo=e},noteListSet:function(t,e){t.noteList=e},linksDataSet:function(t,e){t.linksData=e}}});new i.default({el:"#app",store:F,router:R,render:function(t){return t(r)}})},"dLd/":function(t,e,s){t.exports=s.p+"static/img/logo.cc999eb.png"},eDhM:function(t,e){},nkFp:function(t,e){},ofBR:function(t,e){},tvR6:function(t,e){},zgjM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3b1ec6e12ec2ac2ada15.js.map