(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dianyingyuan-detail"],{"0b45":function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a481"),i("28a5"),i("f559"),i("55dd"),i("96cf");var n=r(i("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},storeupFlag:0,thumbsupFlag:0,crazilyFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.id=t.id,t.userid&&(this.userid=t.userid),this.init();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:r=e.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),this.getThumbsup();case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","dianyingyuan"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},getStoreup:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:1,limit:1,refid:this.id,tablename:"dianyingyuan",userid:this.user.id,type:1},e.next=3,this.$api.list("storeup",t);case 3:i=e.sent,this.storeupFlag=i.data.list.length;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),shoucang:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"dianyingyuan",userid:t.user.id,type:1},e.next=4,t.$api.list("storeup",i);case 4:if(r=e.sent,1!=r.data.list.length){e.next=9;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=5;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:t.$utils.msg("取消成功"),t.getStoreup();case 5:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否收藏",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=5;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,name:t.detail.yingyuanmingcheng,picture:t.swiperList[0],refid:t.detail.id,tablename:"dianyingyuan",type:1});case 3:t.$utils.msg("收藏成功"),t.getStoreup();case 5:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onAcrossTap:function(e,t,i,r,n){if(uni.setStorageSync("crossTable","dianyingyuan"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",i),uni.setStorageSync("statusColumnValue",n),uni.setStorageSync("tips",r),""!=i&&!i.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var s in a)if(s==i&&a[s]==n)return void this.$utils.msg(r)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.timer&&clearInterval(this.timer),e.next=3,this.$api.info("dianyingyuan",this.id);case 3:t=e.sent,this.detail=t.data,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[],this.detail.yingyuanjieshao=this.detail.yingyuanjieshao.replace(/img src/gi,'img style="width:100%;" src');case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.endSuccess(t.size,this.hasNext);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var t=this;e=t.$base.url+e,uni.downloadFile({url:e,success:function(i){200===i.statusCode&&(t.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$utils.jump("../discussdianyingyuan/add-or-update?refid=".concat(this.id));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getThumbsup:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:1,limit:1,refid:this.id,tablename:"dianyingyuan",userid:this.user.id,type:"%2%"},e.next=3,this.$api.list("storeup",t);case 3:i=e.sent,i.data.list.length>0&&("21"==i.data.list[0].type?this.thumbsupFlag=1:this.crazilyFlag=1);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),zan:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"dianyingyuan",userid:t.user.id,type:"%2%"},e.next=4,t.$api.list("storeup",i);case 4:if(r=e.sent,!(r.data.list.length>0)){e.next=9;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消点赞",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:return t.detail.thumbsupnum=parseInt(t.detail.thumbsupnum)-1,e.next=6,t.$api.update("dianyingyuan",t.detail);case 6:t.$utils.msg("取消成功"),t.thumbsupFlag=0;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否点赞",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,name:t.detail.yingyuanmingcheng,picture:t.swiperList[0],refid:t.detail.id,tablename:"dianyingyuan",type:"21"});case 3:return t.detail.thumbsupnum=parseInt(t.detail.thumbsupnum)+1,e.next=6,t.$api.update("dianyingyuan",t.detail);case 6:t.$utils.msg("点赞成功"),t.thumbsupFlag=1;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cai:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"dianyingyuan",userid:t.user.id,type:"%2%"},e.next=4,t.$api.list("storeup",i);case 4:if(r=e.sent,!(r.data.list.length>0)){e.next=9;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消点踩",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:return t.detail.crazilynum=parseInt(t.detail.crazilynum)-1,e.next=6,t.$api.update("dianyingyuan",t.detail);case 6:t.$utils.msg("取消成功"),t.crazilyFlag=0;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否点踩",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,name:t.detail.yingyuanmingcheng,picture:t.swiperList[0],refid:t.detail.id,tablename:"dianyingyuan",type:"22"});case 3:return t.detail.crazilynum=parseInt(t.detail.crazilynum)+1,e.next=6,t.$api.update("dianyingyuan",t.detail);case 6:t.$utils.msg("点踩成功"),t.crazilyFlag=1;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSHTap:function(){this.$refs.popup.open()}}};t.default=a},"108b":function(e,t,i){"use strict";var r=i("c31d"),n=i.n(r);n.a},4527:function(e,t,i){"use strict";var r={"mescroll-uni":i("f05e").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("mescroll-uni",{attrs:{up:e.upOption,down:e.downOption},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"container",style:{minHeight:"100vh",width:"100%",padding:"0px 0 132rpx",position:"relative",background:"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9",height:"auto"}},[i("v-uni-swiper",{staticClass:"swiper",style:{padding:"0px ",margin:"0px auto",borderColor:"#FEB7D2",borderRadius:"0",background:"rgba(255,255,255,1)",borderWidth:"0px",width:"calc(100% - 0px)",borderStyle:"dotted",height:"360rpx"},attrs:{"indicator-dots":!1,autoplay:!0,circular:!1,"indicator-active-color":"#000000","indicator-color":"rgba(0, 0, 0, .3)",duration:500,interval:5e3,vertical:!1}},e._l(e.swiperList,(function(t,r){return i("v-uni-swiper-item",{key:r,style:{width:"100%",borderRadius:"0",background:"none",height:"360rpx"}},["http"==t.substring(0,4)?i("v-uni-image",{style:{width:"calc(100% - 0px)",margin:"0 auto",objectFit:"cover",borderRadius:"0",display:"block",height:"360rpx"},attrs:{mode:"aspectFill",src:t}}):i("v-uni-image",{style:{width:"calc(100% - 0px)",margin:"0 auto",objectFit:"cover",borderRadius:"0",display:"block",height:"360rpx"},attrs:{mode:"aspectFill",src:e.baseUrl+t}})],1)})),1),i("v-uni-view",{staticClass:"detail-content",style:{padding:"0px 24rpx 24rpx",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{staticClass:"detail-list-item price priceFavor",style:{minHeight:"100rpx",padding:"0px 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"40rpx 0 24rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",justifyContent:"space-between"}},[1==e.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favorfill",style:{border:"0px solid #FEB7D2",boxShadow:"0px 0px 0px #ccc",margin:"16rpx 12rpx 0",color:"#959bd9",textAlign:"center",display:"block",borderRadius:"100%",background:"none",width:"64rpx",lineHeight:"52rpx",fontSize:"48rpx",textShadow:"0px 0px 0px #ccc",height:"64rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shoucang.apply(void 0,arguments)}}}):e._e(),0==e.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favor",style:{border:"0px solid #FEB7D2",boxShadow:"0px 0px 0px #ccc",margin:"16rpx 12rpx 0",color:"#959bd9",textAlign:"center",display:"block",borderRadius:"100%",background:"none",width:"64rpx",lineHeight:"52rpx",fontSize:"48rpx",textShadow:"0px 0px 0px #ccc",height:"64rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shoucang.apply(void 0,arguments)}}}):e._e()],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"16rpx 40rpx 64rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[e._v("影院名称：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[e._v(e._s(e.detail.yingyuanmingcheng))])],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"16rpx 40rpx 64rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[e._v("影院规模：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[e._v(e._s(e.detail.yingyuanguimo))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"16rpx 40rpx 64rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[e._v("咨询电话：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[e._v(e._s(e.detail.zixundianhua))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"16rpx 40rpx 64rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[e._v("影院地址：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[e._v(e._s(e.detail.yingyuandizhi))])],1),e.thumbsupFlag||e.crazilyFlag?e._e():i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#c8c8ef",borderRadius:"0",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"48%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("赞：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#555",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v(e._s(e.detail.thumbsupnum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",style:{border:"0px solid #1bd0a9",boxShadow:"0px 0px 0px #afd3cc",color:"#5657B0",borderRadius:"80rpx",textAlign:"center",background:"none",width:"72rpx",lineHeight:"88rpx",fontSize:"40rpx",textShadow:"0px 0px 0px #75afa2",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zan.apply(void 0,arguments)}}})],1)],1),e.thumbsupFlag?i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#c8c8ef",borderRadius:"0",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"48%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("已赞：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#555",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v(e._s(e.detail.thumbsupnum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",style:{border:"0px solid #1bd0a9",boxShadow:"0px 0px 0px #afd3cc",color:"#5657B0",borderRadius:"80rpx",textAlign:"center",background:"none",width:"72rpx",lineHeight:"88rpx",fontSize:"40rpx",textShadow:"0px 0px 0px #75afa2",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zan.apply(void 0,arguments)}}})],1)],1):e._e(),e.thumbsupFlag||e.crazilyFlag?e._e():i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#c8c8ef",borderRadius:"0",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"48%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("踩：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#555",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v(e._s(e.detail.crazilynum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",staticStyle:{transform:"rotate(180deg)"},style:{border:"0px solid #1bd0a9",boxShadow:"0px 0px 0px #afd3cc",color:"#5657B0",borderRadius:"100%",textAlign:"center",background:"none",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"0px 0px 0px #75afa2",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cai.apply(void 0,arguments)}}})],1)],1),e.crazilyFlag?i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#c8c8ef",borderRadius:"0",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"48%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("踩：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#555",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v(e._s(e.detail.crazilynum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",staticStyle:{transform:"rotate(180deg)"},style:{border:"0px solid #1bd0a9",boxShadow:"0px 0px 0px #afd3cc",color:"#5657B0",borderRadius:"100%",textAlign:"center",background:"none",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"0px 0px 0px #75afa2",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cai.apply(void 0,arguments)}}})],1)],1):e._e(),i("v-uni-view",{staticClass:"detail-list-item rich",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"24rpx 24rpx 64rpx",margin:"0 0 24rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[e._v("影院介绍")]),i("v-uni-view",{staticClass:"rich-text",style:{minHeight:"240rpx",border:"0px solid #f7de91",padding:"0 20rpx 0 0",boxShadow:"0 0px 0px rgba(182,158,18,.4),inset 0px 0px 0px 0px #fcf6d6",margin:"0",borderRadius:"8rpx",color:"#555",background:"none",width:"100%",lineHeight:"48rpx",textIndent:"2em"}},[i("v-uni-rich-text",{attrs:{nodes:e.detail.yingyuanjieshao}})],1)],1),i("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{width:"100%",padding:"20rpx 0px",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}})],1)],1)],1)],1)],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))},"4c1c":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-75d56636]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-75d56636]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-75d56636]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-75d56636]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-75d56636]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-75d56636] .uni-audio-default{width:inherit}',""]),e.exports=t},"7c55":function(e,t,i){"use strict";i.r(t);var r=i("4527"),n=i("d0c4");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("108b");var s,o=i("f0c5"),d=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"75d56636",null,!1,r["a"],s);t["default"]=d.exports},c31d:function(e,t,i){var r=i("4c1c");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("56ba9d61",r,!0,{sourceMap:!1,shadowMode:!1})},d0c4:function(e,t,i){"use strict";i.r(t);var r=i("0b45"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a}}]);