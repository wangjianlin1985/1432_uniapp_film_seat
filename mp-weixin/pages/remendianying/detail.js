(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/remendianying/detail"],{"058c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n,i,a,r,s){try{var u=t[r](s),c=u.value}catch(o){return void n(o)}u.done?e(c):Promise.resolve(c).then(i,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function u(t){s(r,i,a,u,c,"next",t)}function c(t){s(r,i,a,u,c,"throw",t)}u(void 0)}))}}var c={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},numberList:[],selectStr:"",activeSeat:"",sfshIndex:-1,sfshOptions:["通过","不通过","待审核"],storeupFlag:0,thumbsupFlag:0,crazilyFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var e=u(i.default.mark((function e(n){var a,r;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.id=n.id,this.init(),a=t.getStorageSync("nowTable"),e.next=5,this.$api.session(a);case 5:r=e.sent,this.user=r.data,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll(),this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 10:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),onShow:function(){var e=u(i.default.mark((function e(){var n,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 0!=Object.keys(this.detail).length&&this.$api.update("remendianying",this.detail),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:a=e.sent,this.user=a.data,this.getStoreup(),this.getThumbsup();case 8:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{onPayTap:function(){t.setStorageSync("paytable","remendianying"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},selectSeat:function(t){""==this.activeSeat?this.activeSeat="#"+"".concat(t)+"#":this.activeSeat=this.activeSeat+",#"+"".concat(t)+"#"},unselectSeat:function(t){for(var e=this.activeSeat.split(","),n=[],i=0;i<e.length;i++)e[i]!="#"+t+"#"&&n.push(e[i]);this.activeSeat=n.join(",")},onSubmitTap:function(){var e=this;this.activeSeat?t.showModal({title:"提示",content:"是否确认预定",success:function(){var n=u(i.default.mark((function n(a){var s,u,c;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!a.confirm){n.next=18;break}if(u=e.activeSeat.replace(/#/g,""),e.detail.selected?e.detail.selected=e.detail.selected+","+u:e.detail.selected=e.detail.selected+u,s={orderid:e.$utils.genTradeNo(),tablename:"remendianying",userid:e.user.id,goodid:e.detail.id,goodname:e.detail.dianyingmingcheng,goodtype:e.detail.dianyingleixing,picture:e.swiperList?e.swiperList[0]:"",buynumber:1,discountprice:0,total:0,discounttotal:0,type:1,address:u,activeSeat:u,status:"已支付"},r(s,"tablename","remendianying"),r(s,"discountprice",e.detail.vipprice),c=s,!e.detail.price){n.next=12;break}c["status"]="未支付",c["price"]="是"==t.getStorageSync("vip")&&e.detail.vipprice>0?e.detail.vipprice:e.detail.price,c["total"]=c["price"]*u.split(",").length,t.setStorageSync("orderGoods",[c]),e.$utils.jump("../shop-order-confirm/shop-order-confirm?seat=1&type=1"),n.next=18;break;case 12:return c["price"]=0,n.next=15,e.$api.add("orders",c);case 15:return n.next=17,e.$api.update("remendianying",e.detail);case 17:e.$utils.msgBack("预定成功");case 18:case"end":return n.stop()}}),n)})));function a(t){return n.apply(this,arguments)}return a}()}):this.$utils.msg("请选择要预定的座位")},onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},getStoreup:function(){var t=u(i.default.mark((function t(){var e,n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,refid:this.id,tablename:"remendianying",userid:this.user.id,type:1},t.next=3,this.$api.list("storeup",e);case 3:n=t.sent,this.storeupFlag=n.data.list.length;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),shoucang:function(){var e=u(i.default.mark((function e(){var n,a,r,s;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this,a={page:1,limit:1,refid:n.detail.id,tablename:"remendianying",userid:n.user.id,type:1},e.next=4,n.$api.list("storeup",a);case 4:if(r=e.sent,1!=r.data.list.length){e.next=9;break}return s=r.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=u(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,n.$api.del("storeup",JSON.stringify([s]));case 3:n.$utils.msg("取消成功"),n.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),e.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=u(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,n.$api.add("storeup",{userid:n.user.id,name:n.detail.dianyingmingcheng,picture:n.swiperList[0],refid:n.detail.id,tablename:"remendianying",type:1});case 3:n.$utils.msg("收藏成功"),n.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onAcrossTap:function(e,n,i,a){if(t.setStorageSync("crossTable","remendianying"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",n),t.setStorageSync("statusColumnValue",a),t.setStorageSync("tips",i),""!=n&&!n.startsWith("[")){var r=t.getStorageSync("crossObj");for(var s in r)if(s==n&&r[s]==a)return void _this.$utils.msg(i)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=u(i.default.mark((function t(){var e,n,a,r,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timer&&clearInterval(this.timer),t.next=3,this.$api.info("remendianying",this.id);case 3:for(e=t.sent,this.detail=e.data,this.swiperList=this.detail.haibao?this.detail.haibao.split(","):[],n=1;n<=this.detail.number;n++)this.numberList.push("".concat(n,"号"));if(this.detail.selected){for(a=this.detail.selected.split(","),r=[],s=0;s<a.length;s++)r.push("".concat(a[s],"号"));this.selectStr=r.join(",")}case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=u(i.default.mark((function t(e){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discussremendianying",{page:e.num,limit:10,refid:this.id});case 2:n=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(n.data.list),0==n.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;t.downloadFile({url:n.$base.url+"file/download?fileName="+e.replace("upload/",""),success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCommentTap:function(){var t=u(i.default.mark((function t(){var e,n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,status:"已完成",goodid:this.detail.id},t.next=3,this.$api.page("orders",e);case 3:if(n=t.sent,0!=n.data.list.length){t.next=7;break}return this.$utils.msg("请完成订单后再评论"),t.abrupt("return");case 7:this.$utils.jump("../discussremendianying/add-or-update?refid=".concat(this.id));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getThumbsup:function(){var t=u(i.default.mark((function t(){var e,n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,refid:this.id,tablename:"remendianying",userid:this.user.id,type:"%2%"},t.next=3,this.$api.list("storeup",e);case 3:n=t.sent,n.data.list.length>0&&("21"==n.data.list[0].type?this.thumbsupFlag=1:this.crazilyFlag=1);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),zan:function(){var e=u(i.default.mark((function e(){var n,a,r,s;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this,a={page:1,limit:1,refid:n.detail.id,tablename:"remendianying",userid:n.user.id,type:"%2%"},e.next=4,n.$api.list("storeup",a);case 4:if(r=e.sent,!(r.data.list.length>0)){e.next=9;break}return s=r.data.list[0].id,t.showModal({title:"提示",content:"是否取消点赞",success:function(){var t=u(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=8;break}return t.next=3,n.$api.del("storeup",JSON.stringify([s]));case 3:return n.detail.thumbsupnum=parseInt(n.detail.thumbsupnum)-1,t.next=6,n.$api.update("remendianying",n.detail);case 6:n.$utils.msg("取消成功"),n.thumbsupFlag=0;case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),e.abrupt("return");case 9:t.showModal({title:"提示",content:"是否点赞",success:function(){var t=u(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=8;break}return t.next=3,n.$api.add("storeup",{userid:n.user.id,name:n.detail.dianyingmingcheng,picture:n.swiperList[0],refid:n.detail.id,tablename:"remendianying",type:"21"});case 3:return n.detail.thumbsupnum=parseInt(n.detail.thumbsupnum)+1,t.next=6,n.$api.update("remendianying",n.detail);case 6:n.$utils.msg("点赞成功"),n.thumbsupFlag=1;case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),cai:function(){var e=u(i.default.mark((function e(){var n,a,r,s;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this,a={page:1,limit:1,refid:n.detail.id,tablename:"remendianying",userid:n.user.id,type:"%2%"},e.next=4,n.$api.list("storeup",a);case 4:if(r=e.sent,!(r.data.list.length>0)){e.next=9;break}return s=r.data.list[0].id,t.showModal({title:"提示",content:"是否取消点踩",success:function(){var t=u(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=8;break}return t.next=3,n.$api.del("storeup",JSON.stringify([s]));case 3:return n.detail.crazilynum=parseInt(n.detail.crazilynum)-1,t.next=6,n.$api.update("remendianying",n.detail);case 6:n.$utils.msg("取消成功"),n.crazilyFlag=0;case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),e.abrupt("return");case 9:t.showModal({title:"提示",content:"是否点踩",success:function(){var t=u(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=8;break}return t.next=3,n.$api.add("storeup",{userid:n.user.id,name:n.detail.dianyingmingcheng,picture:n.swiperList[0],refid:n.detail.id,tablename:"remendianying",type:"22"});case 3:return n.detail.crazilynum=parseInt(n.detail.crazilynum)+1,t.next=6,n.$api.update("remendianying",n.detail);case 6:n.$utils.msg("点踩成功"),n.crazilyFlag=1;case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()}};e.default=c}).call(this,n("543d")["default"])},"564d":function(t,e,n){"use strict";n.r(e);var i=n("c590"),a=n("ceab1");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("dda6");var s,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1f06ecda",null,!1,i["a"],s);e["default"]=c.exports},5692:function(t,e,n){},c590:function(t,e,n){"use strict";var i={"mescroll-uni":()=>Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f05e"))},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.swiperList,(function(e,n){var i=e.substring(0,4);return{$orig:t.__get_orig(e),g0:i}}))),i=t.__map(t.numberList,(function(e,n){var i=t.selectStr.indexOf(e),a=t.activeSeat.indexOf("#"+e.replace("号","")+"#");return{$orig:t.__get_orig(e),g1:i,g2:a}}));t._isMounted||(t.e0=function(e){return t.$utils.msg("该座位已被预定")}),t.$mp.data=Object.assign({},{$root:{l0:n,l1:i}})},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},ceab1:function(t,e,n){"use strict";n.r(e);var i=n("058c"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},dda6:function(t,e,n){"use strict";var i=n("5692"),a=n.n(i);a.a},ef2b:function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");i(n("66fd"));var e=i(n("564d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["ef2b","common/runtime","common/vendor"]]]);