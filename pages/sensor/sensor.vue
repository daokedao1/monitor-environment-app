<template>
	<view class="sensor">
	
		<view class="list">
			<view style="margin-top: 30upx;" class="">
				<text style="color: #4CD964;margin-top: 30upx;">●运行中</text>
			</view>
			<view class="list_b">
				<view class="list_b_t">
					<text class="num">40℃</text>
					<text class="unit">温度</text>
				</view>
				<view class="list_b_t">
					<text class="num">50%</text>
					<text class="unit">湿度</text>
				</view>
				
			</view>
		</view>
		<view class="allChart">
			    <view class="lineA">
			        <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" style="width: 80%;margin-bottom: 30upx;" active-color="#2b61ea"></uni-segmented-control>
			        <view >
			            <view v-if="current === 0">
			                <lineChart></lineChart>
							<barChart ></barChart>
			            </view>
			            <view v-if="current === 1">
			                <lineChart></lineChart>
							<barChart ></barChart>
			            </view>
			            <view v-if="current === 2">
			                <lineChart></lineChart>
							<barChart ></barChart>
			            </view>
			        </view>
			    </view>
		</view>
	</view>
	
</template>

<script>
	import lineChart from '../../components/chart/line.vue'
	import barChart from '../../components/chart/bar/bar.vue'
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		data() {
			return {
				   items: ['分钟','小时','天'],
				            current: 0
			};
		},
		    methods: {
		        onClickItem(e,index) {
		            if (this.current !== e.currentIndex) {
		                this.current = e.currentIndex;
		            }
		        }
		},
		components: {
			lineChart,uniSegmentedControl,
			barChart
		},
	}
</script>

<style lang="scss">
.sensor{
	background: #f4f8f9;
	.list{
		height: 600upx;
		background-color: #557cc3;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: flex-start;
		.list_b{
			display: flex;
			color: #fff;
			flex-flow: row wrap;
			justify-content: center;
			align-items: flex-start;
			height: 230upx;
			width: 100%;
			.list_b_t{
				display: flex;
				flex-flow: column nowrap;
				justify-content: space-between;
				width: 40%;
				text-align: center;
				height: 200upx;
				.num{
					font-size: 80upx;
				}
			}
		}
	}
	.allChart{
		margin:30upx 9px 0 30upx;
		.lineA{
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;
		}
	}

}
</style>
