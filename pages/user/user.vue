<template>
	<view class="header">

		<view class="headerb">
			<!-- <image src="../../static/img1.png" mode="widthFix"></image> -->
			<view class="listm1 flex flex-between">
				<view class="listmr1"  @tap="openAlartListPage">
					<view style="font-weight: bold;" class="col3 f30 elip ">报警消息中心</view>
					<view style="font-size: 40upx;" class="flow">
						>
					</view>
				</view>
				
			</view>
			
			<view class="listm1 flex flex-between">
				<view class="listmr1"  >
					<view style="font-weight: bold;" class="col3 f30 elip ">设置</view>
					<view style="font-size: 40upx;" class="flow">
						>
					</view>
				</view>
				
			</view>
			<view class="listm1 flex flex-between">
				<view class="listmr1" >
					<view style="font-weight: bold;" class="col3 f30 elip ">帮助与反馈</view>
					<view style="font-size: 40upx;" class="flow">
						>
					</view>
				</view>
				
			</view>
			<view class="listm1 flex flex-between">
				<view class="listmr1" >
					<view style="font-weight: bold;" class="col3 f30 elip ">用户协议和隐私政策</view>
					<view style="font-size: 40upx;" class="flow">
						>
					</view>
				</view>
				
			</view>
			<view class="listm1 flex flex-between">
				<view class="listmr1"  >
					<view style="font-weight: bold;" class="col3 f30 elip ">关于我们</view>
					<view style="font-size: 40upx;" class="flow">
						>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			openAlartListPage(){
				uni.navigateTo({
					url:'AlartListPage'
				})
			}


		}
	}
</script>

<style>
	page {
		background: #ededed;
	}
	.header{background: #1de1d3;padding: 15upx 20upx 255upx; position: relative;}
	.headerb{
		
		position: absolute;left: 0; top: 209upx; width: 100%; box-sizing: border-box;padding: 0 20upx;}
	.headerb .notice{ 
		width: 710upx; box-shadow: 0 10upx 10px rgba(0,0,0,0.3); border-radius: 40upx; position: relative;z-index: 10;
		background-color: #fff;
	}
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
</style>
