<template><view class="uni-padding-wrap">
 <view class="header">
 	<!-- <view class="flex flex-between flex-align-center"> -->
 		<!-- <text class="colf f25">上海市</text> -->
	<!-- 	<view class="ssbox"><view class="flex flex-between flex-align-center">
			<input type="text" value="" confirm-type="search" class="ss_input" placeholder="搜索您要的事物" placeholder-style="color:#fff; opacity:0.35" />
			<uni-icons type="search" size="20" color="#fff"></uni-icons>
		</view></view>	 -->
		<!-- <uni-icons type="chat" size="25" color="#fff" style="opacity: 0.85;"></uni-icons> -->
 	<!-- </view> -->
	<view class="headerb">
		<!-- <image src="../../static/img1.png" mode="widthFix"></image> -->
		<view class="listm1 flex flex-between">
			<view class="listmr1">
				<view style="font-weight: bold;" class="col3 f30 elip ">我的设备（3）</view>
				<view style="font-size: 40upx;" class="flow">
					∨
				</view>
				
			</view>
		</view>
		
		<uni-countdown v-if="current" style="margin-top: 19upx;"  :show-day="false"  @timeup="getServerData" :second="stateNum"></uni-countdown>
	</view>
 </view><!--header end-->
 <view class="list">
	<view @click="addDevice(v)" v-for="(v,i) in list" :key="i" class="listm flex flex-between">
		<view class="listmr">
			<view class="col3 f30 elip mb15 list_t">
			<text style="font-weight: bold;font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100px;">{{v.name}}</text>
			<text class="state1">
			<!-- {{v.state1}} -->
			在线
			</text>
			</view>
			<view class="list_b">
				<view class="list_b_t">
					<text>{{v.temperature}}℃</text>
					<text>温度</text>
				</view>
				<view class="list_b_t">
					<text>{{v.humidity}}%</text>
					<text>湿度</text>
				</view>
				<view class="list_b_t">
					<text></text>
					<text v-if="v.humidity<0.001" style="color: #e01616;">●异常</text>
					<text v-else style="color: #4CD964;">●正常</text>
				</view>
			</view>
		</view>
	</view><!---->

 </view><!--list end-->
	
</view></template>

<script>
	// import uniIcons from"@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	// import uniNoticeBar from "../../components/uni-ui/lib/uni-notice-bar/uni-notice-bar.vue"
	export default {
		components:{
			// uniIcons,
			// uniNoticeBar
		},
		data() {
			return {
				stateNum:6,
				current:true,
				list: [
					{
						name:"厂区1",
						state1:"在线",
						temperature:Math.floor(Math.random()*10)+20,
						humidity:'50',
						state2:"正常"
					},
					{
						name:"厂区2",
						state1:"在线",
						temperature:'40',
						humidity:'50',
						state2:"正常"
					},
					{
						name:"厂区3",
						state1:"在线",
						temperature:'40',
						humidity:'50',
						state2:"正常"
					}
				]
				
			}
		},
		mounted() {
			this.init();
		},
		onShow() {
			this.current=true;
		},

		methods: {
			getServerData(){
				this.init();
			},
			async init(){
				// let [res,res1,res2]=await Promise.all([
				// 	this.$api.moniterList({id:1,startDate:this.$moment().subtract(10, 'm').format("YYYY-MM-DD HH:mm:ss"),endDate:this.$moment().format("YYYY-MM-DD HH:mm:ss")}),
				// 	this.$api.moniterList({id:2,startDate:this.$moment().subtract(10, 'm').format("YYYY-MM-DD HH:mm:ss"),endDate:this.$moment().format("YYYY-MM-DD HH:mm:ss")}),
				// 	this.$api.addEquipment()
				// ]);
				// 	let obj=res.message.data[res.message.data.length-1];
				// 	let obj1=res1.message.data[res1.message.data.length-1];
				// 	this.list=res2.message[0].children;
				// 	//0
				// 	let wendu=Number(obj.wendu);
				// 	let shidu=obj.shidu*100;
				// 	this.list[0].temperature=wendu.toFixed(1);
				// 	this.list[0].humidity=shidu.toFixed(1);
				// 	//1
				// 	let wendu1=Number(obj1.wendu);
				// 	let shidu1=obj1.shidu*100;
				// 	this.list[1].temperature=wendu1.toFixed(1);
				// 	this.list[1].humidity=shidu1.toFixed(1);
			 },
			addDevice(v){
				this.current=false;
				uni.navigateTo({
					url: '/pages/sensor/sensor'+"?id="+v.value
				});
			}
			

		}
	}
</script>

<style scoped lang="scss">
	page{background: #f4f8f9;}
	.header{background: #1de1d3;padding: 15upx 20upx 255upx; position: relative;}
	.ssbox{ background: rgba(255,255,255,0.35);  width: 530upx; border-radius: 60rpx;padding: 10upx 15upx; box-sizing: border-box;}
	.ss_input{border: none;width: 450upx;  font-size: 30upx; color: #fff; background: none; height: 45upx; line-break: 45upx;}
	.headerb{ 
		
		position: absolute;left: 0; top: 209upx; width: 100%; box-sizing: border-box;padding: 0 20upx;}
	.headerb .notice{ 
		width: 710upx; box-shadow: 0 10upx 10px rgba(0,0,0,0.3); border-radius: 40upx; position: relative;z-index: 10;
		background-color: #fff;
	}
	// .list1{padding:30upx 20upx 20upx ;}
	.listm1{
		background: #fff; border-radius: 30upx; box-shadow: 0 0 10px rgba(0,0,0,0.3); margin-bottom: 20upx;padding: 30upx;
	}
	.listmr1{
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}
	.notice{position: relative;z-index: 5;padding: 0 50upx;}
	.noticem{background: #fff;padding:55upx 30upx 15upx; border-radius: 10upx;  box-shadow: 0 0 10px rgba(0,0,0,0.3); margin-top: -45upx;}
	.noticer{width: 480upx;height: 50upx;}
	.noticer .swiper-item{white-space: nowrap;text-overflow: ellipsis; overflow: hidden; height: 50upx;line-height: 50upx; font-size: 24upx;}
	.list{padding:140upx 20upx 20upx ;display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	}
	.listm{background: #fff; border-radius: 15upx; box-shadow: 0 0 10px rgba(0,0,0,0.3); margin-bottom: 20upx;padding: 30upx;width: 40%;}
	.listmpic{border-radius: 10upx;width: 166upx;}
	.listmr{width: 460upx; display: inline-block;}
	.list_t{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		.state1{
			background-color: #eee;
			padding: 0 9upx;
			line-height: 50upx;
			color: #aaa;
			font-size: 24upx;
			border-radius: 13upx;
		}
	}
	.list_b{
		    display: flex;
		    flex-flow: row nowrap;
			justify-content: space-around;
		.list_b_t{
			height: 90upx;
			display: flex;
			flex-flow: column;
			text-align: center;
			justify-content: space-between;
		}
		    
	}
	/* #ifdef MP-WEIXIN */
		.noticer .swiper-item{margin-top: 5upx;}
	/* #endif */
	/* #ifdef MP-BAIDU */
		.noticer .swiper-item{margin-top: 3upx;}
	/* #endif */
	/* #ifdef MP-ALIPAY */
		.noticer .swiper-item{margin-top: 2upx;}
	/* #endif */
	/* #ifdef MP-QQ */
		.noticer .swiper-item{margin-top: 4upx;}
	/* #endif */
	/* #ifdef MP-TOUTIAO */
		.noticer .swiper-item{margin-top: 4upx;}
	/* #endif */
</style>
