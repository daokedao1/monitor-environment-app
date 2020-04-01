<template>
	<view class="sensor">
	
		<view class="list">
			<view style="margin-top: 30upx;" class="">
				<text style="color: #4CD964;margin-top: 30upx;">●运行中</text>
			</view>
			<view class="list_b">
				<view class="list_b_t">
					<text class="num">{{currentData.wendu}}℃</text>
					<text class="unit">温度</text>
				</view>
				<view class="list_b_t">
					<text class="num">{{this.util.numFormat(currentData.shidu*100)}}%</text>
					<text class="unit">湿度</text>
				</view>
				
			</view>
		</view>

		<view class="allChart">
			
			    <view class="lineA">
					
			
						<uni-segmented-control  :current="current" :values="items" @clickItem="onClickItem" style-type="button" style="width: 80%;margin-bottom: 30upx;" active-color="#2b61ea"></uni-segmented-control>
			        <view >
			            <view v-if="current === 0">
							<uni-countdown  :show-day="false"  @timeup="getServerData" :second="stateNum"></uni-countdown>
			                <lineChart v-if="showLine" :XYdata="XYdata"  :dataAll='dataAll' ></lineChart>
							<!-- <barChart ></barChart> -->
			            </view>
			            <view v-if="current === 1">
							<view class="times">
										<view class="times_s">
											<text>开始时间：</text>
											<ruiDatePicker
											    fields="second"
												 start="2010-00-00 00:00:00"
												 end="2030-12-30 23:59:59"
												:value="dataAll.startDate"
											    @change="bindChange1"
											    @cancel="bindCancel"
											></ruiDatePicker>
										</view>
										<view class="times_s">
											<text>结束时间：</text>
											<ruiDatePicker
												fields="second"
												:value="dataAll.endDate"
												@change="bindChange2"
												@cancel="bindCancel"
											></ruiDatePicker>
										</view>
									</view>
			                <lineChart  v-if="showLine" :XYdata="XYdata1"  :dataAll='dataAll'></lineChart>
							<!-- <barChart ></barChart> -->
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
	import ruiDatePicker from '@/components/rattenking-dtpicker/rattenking-dtpicker.vue';
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	export default {
		data() {
			return {
				initArr:[],
				stateNum:6,
				currentData:{},
				showLine:false,
				XYdata:{categories:[],series:[{name:'温度（℃）',data:[]},{name:"湿度（%）",data:[]}]},
				XYdata1:{categories:[],series:[{name:'温度（℃）',data:[]},{name:"湿度（%）",data:[]}]},
				
				   items: ['实时数据','历史数据'],
				            current: 0,
						 dataAll:{id:1,startDate:'2019-01-01 00:00:00',endDate:this.$moment().format("YYYY-MM-DD HH:mm:ss")}
			};
		},
		mounted() {
			this.init()
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		   this.dataAll.id=option.id; //打印出上个页面传递的参数。
		},
		watch:{
			current(v){
				if(v){
					this.history()
				}else{
					this.realTime();
				}
			}
		},
		    methods: {
				handleWay(data){
					let LineA={categories:[],series:[{name:'温度（℃）',data:[],index:0},{name:"湿度（%）",data:[],index:1}]};
					for(let v of data){
						let wendu=Number(v.wendu);
						let shidu=Number(v.shidu*100).toFixed(2);
						let date=v.date.slice(10,v.date.length)
						LineA.categories.push(date);
						LineA.series[0].data.push(wendu.toFixed(2));
						LineA.series[1].data.push(shidu);
					}
					return LineA
				},
				getServerData(){
					this.realTime()
				},
		        onClickItem(e,index) {
		            if (this.current !== e.currentIndex) {
		                this.current = e.currentIndex;
		            }
		        },
				bindChange1(v){
					this.dataAll.startDate=v;
					this.history()
				},
				bindChange2(v){
					this.dataAll.endDate=v;
					this.history()
				},

			async realTime(){
					let list=await this.$api.moniterList({id:this.dataAll.id,startDate:this.$moment().subtract(6, 's').format("YYYY-MM-DD HH:mm:ss"),endDate:this.$moment().format("YYYY-MM-DD HH:mm:ss")});
					if(list.message.data.length>0){
						this.currentData=list.message.data[list.message.data.length-1];
						let newArr=this.initArr.concat(list.message.data)
						let LineA=this.handleWay(newArr);
						this.XYdata=LineA;
					}
				},
				async history(){
						let list=await this.$api.historyList({id:this.dataAll.id,startDate:this.dataAll.startDate,endDate:this.dataAll.endDate});
						let LineA=this.handleWay(list.message.data);
						this.XYdata1=LineA;
					},
				
			async init(){
					let [list,res]=await Promise.all([
						this.$api.moniterList({id:this.dataAll.id,startDate:this.$moment().subtract(10, 'm').format("YYYY-MM-DD HH:mm:ss"),endDate:this.$moment().format("YYYY-MM-DD HH:mm:ss")})
					]);
					this.initArr=this.util.clone(list.message.data);
					this.currentData=list.message.data[list.message.data.length-1];
					console.log(this.currentData)
					let LineA=this.handleWay(list.message.data);
					// this.XYdata1=LineA;
					this.XYdata=this.util.clone(LineA);
					this.showLine=true;
				}
		},
		components: {
			lineChart,uniSegmentedControl,
			barChart,
			ruiDatePicker,
			uniCountdown
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
	.times{
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		align-items: center;
		.times_s{
			display: flex;
			margin: 13upx 0;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
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
