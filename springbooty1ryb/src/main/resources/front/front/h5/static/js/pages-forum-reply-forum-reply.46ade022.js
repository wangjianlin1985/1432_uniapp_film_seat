(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forum-reply-forum-reply"],{"0204":function(e,t,n){"use strict";var r=n("10c0"),a=n.n(r);a.a},"10c0":function(e,t,n){var r=n("22ac");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("77880742",r,!0,{sourceMap:!1,shadowMode:!1})},"1d15":function(e,t,n){"use strict";var r={"xia-editor":n("064f").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{minHeight:"100vh",padding:"0px",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[n("v-uni-form",{style:{width:"100%",padding:"60rpx 40rpx",background:"none",display:"block",height:"auto"}},[n("v-uni-view",{style:{padding:"0 0px 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 40rpx",borderColor:"#c8c8ef",alignItems:"center",display:"flex",minHeight:"100rpx",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[n("xia-editor",{style:{minHeight:"240rpx",padding:"20rpx 20rpx 64rpx",margin:"0px",color:"#333",flex:"1",background:"rgba(255, 255, 255, 0)",height:"auto"},attrs:{placeholder:"回复"},on:{editorChange:function(t){arguments[0]=t=e.$handleEvent(t),e.contentChange.apply(void 0,arguments)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),n("v-uni-view",{style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[n("v-uni-button",{staticClass:"bg-red margin-tb-sm",style:{padding:"0 40rpx",boxShadow:"2rpx 8rpx 0px #cfcfe3",margin:"32rpx 20rpx",borderColor:"#9F9FEC",color:"#333",minWidth:"240rpx",borderRadius:"40rpx",background:"#eaeafa",borderWidth:"2rpx 8rpx 2rpx",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onReplyTap.apply(void 0,arguments)}}},[e._v("提交回复")])],1)],1)],1)],1)},i=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}))},"22ac":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-272e2f7e]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},"3a86":function(e,t,n){"use strict";n.r(t);var r=n("a14c"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},a14c:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("28a5"),n("a481"),n("3b2b"),n("96cf");var a=r(n("3b8d")),i=r(n("064f")),o={data:function(){return{pid:"",content:"",username:"",avatarurl:"",user:{}}},components:{xiaEditor:i.default},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.pid=t.pid,n=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:r=e.sent,this.user=r.data,"yonghu"==n&&(this.username=this.user.yonghuzhanghao);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{contentChange:function(e){this.content=e},onReplyTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.avatarurl=uni.getStorageSync("headportrait")?uni.getStorageSync("headportrait"):"",t="反共,亲美,精日,仆街,垃圾,咸家铲",n=[],t&&(n=t.split(",")),r=0;r<n.length;r++)a=new RegExp(n[r],"g"),this.content.indexOf(n[r])>-1&&(this.content=this.content.replace(a,"**"));return e.next=7,this.$api.save("forum",{parentid:this.pid,content:this.content,avatarurl:this.avatarurl,username:this.username});case 7:this.$utils.msgBack("回复成功");case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=o},fa73:function(e,t,n){"use strict";n.r(t);var r=n("1d15"),a=n("3a86");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("0204");var o,u=n("f0c5"),d=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"272e2f7e",null,!1,r["a"],o);t["default"]=d.exports}}]);