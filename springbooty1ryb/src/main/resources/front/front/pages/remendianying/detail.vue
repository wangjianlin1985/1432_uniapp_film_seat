<template>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"0px 0 132rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9","height":"auto"}'>
						<swiper :style='{"padding":"0px ","margin":"0px auto","borderColor":"#FEB7D2","borderRadius":"0","background":"rgba(255,255,255,1)","borderWidth":"0px","width":"calc(100% - 0px)","borderStyle":"dotted","height":"360rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
				<swiper-item :style='{"width":"100%","borderRadius":"0","background":"none","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"calc(100% - 0px)","margin":"0 auto","objectFit":"cover","borderRadius":"0","display":"block","height":"360rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"calc(100% - 0px)","margin":"0 auto","objectFit":"cover","borderRadius":"0","display":"block","height":"360rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
									            <view :style='{"padding":"0px 24rpx 24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="detail-content">
				<view :style='{"minHeight":"100rpx","padding":"0px 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"40rpx 0 24rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","justifyContent":"space-between"}' class="detail-list-item price priceFavor">
					<view :style='{"margin":"0","display":"flex"}' class="text">
						<text :style='{"color":"#f00","fontSize":"48rpx","lineHeight":"100rpx"}'>￥</text>
						<text :style='{"margin":"0px 0 0","fontSize":"32rpx","lineHeight":"100rpx","color":"#f00"}'>{{detail.price}}</text>
					</view>
					<view :style='{"border":"0px solid #FEB7D2","boxShadow":"0px 0px 0px #ccc","margin":"16rpx 12rpx 0","color":"#959bd9","textAlign":"center","display":"block","borderRadius":"100%","background":"none","width":"64rpx","lineHeight":"52rpx","fontSize":"48rpx","textShadow":"0px 0px 0px #ccc","height":"64rpx"}' v-if="storeupFlag==1" class="cuIcon-favorfill" @click="shoucang"></view>
					<view :style='{"border":"0px solid #FEB7D2","boxShadow":"0px 0px 0px #ccc","margin":"16rpx 12rpx 0","color":"#959bd9","textAlign":"center","display":"block","borderRadius":"100%","background":"none","width":"64rpx","lineHeight":"52rpx","fontSize":"48rpx","textShadow":"0px 0px 0px #ccc","height":"64rpx"}' v-if="storeupFlag==0" class="cuIcon-favor" @click="shoucang"></view>
				</view>

				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="lable">电影名称：</view>
					<view :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}' class="text">{{detail.dianyingmingcheng}}</view>
				</view>
				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="lable">主演：</view>
					<view :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}' class="text">{{detail.zhuyan}}</view>
				</view>
				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="lable">影院名称：</view>
					<view :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}' class="text">{{detail.yingyuanmingcheng}}</view>
				</view>

				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>电影类型：</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}'>{{detail.dianyingleixing}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>导演：</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}'>{{detail.daoyan}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>语言：</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}'>{{detail.yuyan}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>片长：</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}'>{{detail.pianzhang}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>播放影厅：</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}'>{{detail.bofangyingting}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>播放时间：</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}'>{{detail.bofangshijian}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>点击次数：</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}'>{{detail.clicknum}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>会员价：</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}'>{{detail.vipprice}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"16rpx 40rpx 64rpx","margin":"20rpx 0 20rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>座位总数：</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 0","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#555"}'>{{detail.number}}</view>
				</view>

				<view :style='{"padding":"0 24rpx 8rpx 0","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 24rpx 0","borderColor":"#c8c8ef","borderRadius":"0","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"48%","borderStyle":"dotted dashed solid","height":"auto"}' class="detail-list-item" v-if="!thumbsupFlag&&!crazilyFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">赞：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#555","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.thumbsupnum}}</view>
						<view :style='{"border":"0px solid #1bd0a9","boxShadow":"0px 0px 0px #afd3cc","color":"#5657B0","borderRadius":"80rpx","textAlign":"center","background":"none","width":"72rpx","lineHeight":"88rpx","fontSize":"40rpx","textShadow":"0px 0px 0px #75afa2","height":"72rpx"}' class="cuIcon-appreciate" @click="zan"></view>
					</view>
				</view>
				<view :style='{"padding":"0 24rpx 8rpx 0","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 24rpx 0","borderColor":"#c8c8ef","borderRadius":"0","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"48%","borderStyle":"dotted dashed solid","height":"auto"}' class="detail-list-item" v-if="thumbsupFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">已赞：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#555","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.thumbsupnum}}</view>
						<view :style='{"border":"0px solid #1bd0a9","boxShadow":"0px 0px 0px #afd3cc","color":"#5657B0","borderRadius":"80rpx","textAlign":"center","background":"none","width":"72rpx","lineHeight":"88rpx","fontSize":"40rpx","textShadow":"0px 0px 0px #75afa2","height":"72rpx"}' class="cuIcon-appreciate" @click="zan"></view>
					</view>
				</view>
				<view :style='{"padding":"0 24rpx 8rpx 0","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 24rpx 0","borderColor":"#c8c8ef","borderRadius":"0","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"48%","borderStyle":"dotted dashed solid","height":"auto"}' class="detail-list-item" v-if="!thumbsupFlag&&!crazilyFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">踩：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#555","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.crazilynum}}</view>
						<view style="transform: rotate(180deg);" :style='{"border":"0px solid #1bd0a9","boxShadow":"0px 0px 0px #afd3cc","color":"#5657B0","borderRadius":"100%","textAlign":"center","background":"none","width":"72rpx","lineHeight":"72rpx","fontSize":"40rpx","textShadow":"0px 0px 0px #75afa2","height":"72rpx"}' class="cuIcon-appreciate" @click="cai"></view>
					</view>
				</view>
				<view :style='{"padding":"0 24rpx 8rpx 0","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 24rpx 0","borderColor":"#c8c8ef","borderRadius":"0","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"48%","borderStyle":"dotted dashed solid","height":"auto"}' class="detail-list-item" v-if="crazilyFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">踩：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#555","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.crazilynum}}</view>
						<view style="transform: rotate(180deg);" :style='{"border":"0px solid #1bd0a9","boxShadow":"0px 0px 0px #afd3cc","color":"#5657B0","borderRadius":"100%","textAlign":"center","background":"none","width":"72rpx","lineHeight":"72rpx","fontSize":"40rpx","textShadow":"0px 0px 0px #75afa2","height":"72rpx"}' class="cuIcon-appreciate" @click="cai"></view>
					</view>
				</view>
				<view class="detail-list-item video" :style='{"margin":"0 0 40rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<video :style='{"border":"0","width":"100%","margin":"0","outline":"none","borderRadius":"24rpx","display":"block"}' id="myVideo" :src="baseUrl+detail.pianhua" controls></video>
				</view>


				<view class="detail-list-item rich" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"24rpx 24rpx 64rpx","margin":"0 0 24rpx 0","borderColor":"#c8c8ef","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
					<view class="lable" :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>电影介绍</view>
					<view class="rich-text" :style='{"minHeight":"240rpx","border":"0px solid #f7de91","padding":"0 20rpx 0 0","boxShadow":"0 0px 0px rgba(182,158,18,.4),inset 0px 0px 0px 0px #fcf6d6","margin":"0","borderRadius":"8rpx","color":"#555","background":"none","width":"100%","lineHeight":"48rpx","textIndent":"2em"}'>
						<rich-text :nodes="detail.dianyingjieshao"></rich-text>
					</view>
				</view>

				<view class="seat-list">
					<view v-for="(item,index) in numberList " v-bind:key="index" class="seat-item">
						<image @tap="$utils.msg('该座位已被预定')" v-if="selectStr.indexOf(item)>=0" class="seat-icon"
							src="../../static/restaurant-detail/select.png" mode=""></image>
							<image @tap="unselectSeat(index+1)" v-else-if="activeSeat.indexOf('#'+item.replace('号','')+'#')>=0" class="seat-icon"
							src="../../static/restaurant-detail/select.png" mode=""></image>
						<image @tap="selectSeat(index+1)" v-else class="seat-icon" src="../../static/restaurant-detail/unselect.png" mode=""></image>
						<text>{{item}}</text>
					</view>
				</view>
				

				<view class="time-content" :style='{"width":"100%","margin":"20rpx 0 24rpx 0","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto","height":"auto"}'>
					<view class="comoment-header" :style='{"border":"4rpx solid #5959d9","boxShadow":"2rpx 8rpx 0px #c1c1f2","padding":"0px 0 0 10%","margin":"0px auto 60rpx","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20221227/46f4ec158fb44ae8ac27b28b988282eb.png) no-repeat 5% center,#fff","display":"flex","width":"calc(90% + 0px)","justifyContent":"space-between","height":"auto"}'>
						<view :style='{"padding":"0px 20rpx 0px","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","fontWeight":"600"}'>评论</view>
						<view :style='{"border":"0px solid #64b7ea","padding":"0 16rpx 0 4rpx","margin":"12rpx 16rpx 12rpx ","borderRadius":"12rpx","background":"none","display":"flex","height":"64rpx"}' @click="onCommentTap" class="btn-comment-content" style="display: flex;align-items: center;">
							<view :style='{"margin":"0px 8rpx 0","lineHeight":"60rpx","fontSize":"28rpx","color":"#5657B0"}' class="cuIcon-add"></view>
							<view :style='{"margin":"0px 0 0","lineHeight":"60rpx","fontSize":"28rpx","color":"#5657B0"}'>添加评论</view>
						</view>
					</view>

					<view :style='{"padding":"24rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0px auto 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","borderWidth":"0px 0px 8rpx 0px","width":"calc(100% - 0px)","borderStyle":"dotted dashed solid","height":"auto"}' v-for="(item,index) in commentList" v-bind:key="index" class="cu-item comment-item">
						<view :style='{"width":"100%","display":"flex","height":"auto"}'>
							<image :style='{"width":"60rpx","margin":"0 8rpx 0 0","borderRadius":"100%","display":"block","height":"60rpx"}' v-if="item.avatarurl" mode="aspectFill" :src="baseUrl+item.avatarurl"></image>
							<view :style='{"color":"#333","lineHeight":"60rpx","fontSize":"28rpx"}' class="text-grey">{{item.nickname}}</view>
						</view>
						<view :style='{"padding":"20rpx","margin":"24rpx 0","borderColor":"#FEB7D2","color":"#333","borderRadius":"0px","background":"none","borderWidth":"0px 0px 0px","lineHeight":"1.5","fontSize":"28rpx","textIndent":"2em","borderStyle":"dotted dashed dotted"}' class="text-gray text-content text-df">
							{{item.content}}
						</view>
						<view :style='{"lineHeight":"48rpx","fontSize":"28rpx","color":"#555","textAlign":"right"}' class="margin-top-sm text-gray text-df">{{item.addtime}}</view>
						<view v-if="item.reply" :style='{"padding":"20rpx","margin":"24rpx 0","borderColor":"#FEB7D2","color":"#333","borderRadius":"0px","background":"none","borderWidth":"0px 0px 0px","lineHeight":"1.5","fontSize":"28rpx","textIndent":"2em","borderStyle":"dotted dashed dotted"}' class="text-gray text-content text-df">
							回复:{{item.reply}}
						</view>
					</view>
				</view>
				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"20rpx 0px","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>
				
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"brown","width":"auto","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="btn-submit cu-btn round bg-red">预定</button>
				</view>
			</view>
		</view>
	</view>
</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				numberList: [],
				selectStr: '',
				activeSeat: '',
				sfshIndex: -1,
				sfshOptions: ['通过','不通过', '待审核'],
				storeupFlag: 0,
				thumbsupFlag: 0,
				crazilyFlag: 0,
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			SecondToDate: function() {
				var time = this.count;
				if (null != time && "" != time) {
					if (time > 60 && time < 60 * 60) {
						time =
							parseInt(time / 60.0) +
							"分钟" +
							parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) +
							"秒";
					} else if (time >= 60 * 60 && time < 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else if (time >= 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0 / 24) +
							"天" +
							parseInt(
								(parseFloat(time / 3600.0 / 24) - parseInt(time / 3600.0 / 24)) *
								24
							) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else {
						time = parseInt(time) + "秒";
					}
				}
				return time;
			}
		},
		async onLoad(options) {
			this.id = options.id;
			// 渲染数据
			this.init();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
            this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
		},
		async onShow() {
			//更新座位
			if(Object.keys(this.detail).length!=0) {
				this.$api.update('remendianying', this.detail);
			}
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.getStoreup();
			this.getThumbsup();
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','remendianying');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
			selectSeat(idx) {
				if(this.activeSeat=="") {
					this.activeSeat = "#" + `${idx}` + "#"
				} else {
					this.activeSeat = this.activeSeat + "," + "#" + `${idx}` + "#"
				}
			},
			unselectSeat(idx){
				let array = this.activeSeat.split(",");
				let newarray = [];
				for(let i=0;i<array.length;i++){
					if(array[i]!=("#"+idx+"#")){
						newarray.push(array[i]);
					}
				}
				this.activeSeat = newarray.join(",");
			},
			onSubmitTap() {
				let _this = this;
				if (!this.activeSeat) {
					this.$utils.msg('请选择要预定的座位');
					return
				}
				uni.showModal({
					title: '提示',
					content: '是否确认预定',
					success: async function(res) {
						if (res.confirm) {
							let activeSeatReplace=_this.activeSeat.replace(/#/g,"")
							if (_this.detail.selected) {
								_this.detail.selected = _this.detail.selected + "," + activeSeatReplace
							} else {
								_this.detail.selected = _this.detail.selected + activeSeatReplace
							}
							let data = {
								orderid: _this.$utils.genTradeNo(),
								tablename: 'remendianying',
								userid: _this.user.id,
								goodid: _this.detail.id,
								goodname: _this.detail.dianyingmingcheng,
                                goodtype: _this.detail.dianyingleixing,
								picture: _this.swiperList ? _this.swiperList[0] : "",
								buynumber: 1,
								discountprice: 0,
								total: 0,
								discounttotal: 0,
								type: 1,
								address: activeSeatReplace,
								activeSeat: activeSeatReplace,
								status: '已支付',
								tablename: 'remendianying',
								discountprice: _this.detail.vipprice
							}
							if (_this.detail.price) {
								data['status'] = '未支付'
								data['price'] = (uni.getStorageSync("vip")=='是'&&_this.detail.vipprice>0)?_this.detail.vipprice:_this.detail.price
								data['total'] = data['price'] * activeSeatReplace.split(",").length
								uni.setStorageSync('orderGoods', [data]);
								_this.$utils.jump('../shop-order-confirm/shop-order-confirm?seat=1&type=1');
							} else {
								data['price'] = 0
								await _this.$api.add('orders', data);
								await _this.$api.update('remendianying', _this.detail);
								_this.$utils.msgBack('预定成功');
							}
						}
					}
				});
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 收藏
			async getStoreup() {
				let params = {
					page: 1,
					limit: 1,
					refid : this.id,
					tablename : 'remendianying',
					userid: this.user.id,
					type: 1,
				}
				let res = await this.$api.list(`storeup`, params);
				this.storeupFlag = res.data.list.length;
			},
			async shoucang(){
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid : _this.detail.id,
					tablename : 'remendianying',
					userid: _this.user.id,
					type:1,
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length == 1) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.$utils.msg('取消成功');
								_this.getStoreup();
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								name: _this.detail.dianyingmingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'remendianying',
                                type: 1
							});
							_this.$utils.msg('收藏成功');
							_this.getStoreup();
						}
					}
				});
			},
			// 跨表
			onAcrossTap(tableName,statusColumnName,tips,statusColumnValue){
				uni.setStorageSync('crossTable','remendianying');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							_this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
                if(this.timer) {
                    clearInterval(this.timer);
                } 
				let res = await this.$api.info('remendianying', this.id);
				this.detail = res.data;
				// 轮播图片
				this.swiperList = this.detail.haibao ? this.detail.haibao.split(",") : [];
				for (let i = 1; i <= this.detail.number; i++) {
					this.numberList.push(`${i}号`);
				}
				if (this.detail.selected) {
					let selected = this.detail.selected.split(",");
					let selectList = []
					for (let i = 0; i < selected.length; i++) {
						selectList.push(`${selected[i]}号`);
					}
					this.selectStr = selectList.join(",")
				}
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
                		let res = await this.$api.list('discussremendianying', {
					page: mescroll.num,
					limit: 10,
					refid: this.id
				});
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.commentList = [];
				this.commentList = this.commentList.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },

			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				uni.downloadFile({
					url: _this.$base.url + 'file/download?fileName=' + url.replace('upload/',''),
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			// 添加评论
			async onCommentTap() {
                                let params = {
                                        page: 1,
                                        limit: 1,
					status: '已完成',
					goodid: this.detail.id
                                }
                                let res = await this.$api.page('orders', params);
                                if (res.data.list.length == 0) {
					this.$utils.msg('请完成订单后再评论');
					return;
				}
				this.$utils.jump(`../discussremendianying/add-or-update?refid=${this.id}`)
			},
			// 获取赞踩
			async getThumbsup() {
				let params = {
					page: 1,
					limit: 1,
					refid: this.id,
					tablename: 'remendianying',
					userid: this.user.id,
					type: '%2%',
				}
				let res = await this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					if(res.data.list[0].type=='21') {
						this.thumbsupFlag = 1;
					} else {
						this.crazilyFlag = 1;
					}
				}

			},
			// 点赞
			async zan() {
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid: _this.detail.id,
					tablename : 'remendianying',
					userid: _this.user.id,
					type: '%2%',
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消点赞',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.detail.thumbsupnum = parseInt(_this.detail.thumbsupnum) - 1;
								await _this.$api.update('remendianying', _this.detail);
								_this.$utils.msg('取消成功');
								_this.thumbsupFlag=0;
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否点赞',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
                                name: _this.detail.dianyingmingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'remendianying',
								type: '21'
							});
							_this.detail.thumbsupnum = parseInt(_this.detail.thumbsupnum) + 1;
							await _this.$api.update('remendianying', _this.detail);
							_this.$utils.msg('点赞成功');
							_this.thumbsupFlag=1;
						}
					}
				});
			},
			// 踩
			async cai() {
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid: _this.detail.id,
					tablename: 'remendianying',
					userid: _this.user.id,
					type: '%2%',
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消点踩',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.detail.crazilynum = parseInt(_this.detail.crazilynum) - 1;
								await _this.$api.update('remendianying', _this.detail);
								_this.$utils.msg('取消成功');
								_this.crazilyFlag=0;
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否点踩',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
                                name: _this.detail.dianyingmingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'remendianying',
								type: '22'
							});
							_this.detail.crazilynum = parseInt(_this.detail.crazilynum) + 1;
							await _this.$api.update('remendianying', _this.detail);
							_this.$utils.msg('点踩成功');
							_this.crazilyFlag=1;
						}
					}
				});
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
</style>

