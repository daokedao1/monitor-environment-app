<template>
	<view class="qiun-columns">
		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<!-- <canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas> -->
			<!--#endif-->
		</view>

		<!--#endif-->
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import  { isJSON } from '@/common/checker.js';
	var _self;
	var canvaLineA=null;
	export default {
		props: {
			dataAll: {
				type: Object,
			},
			XYdata: {
				type: Object,
			},

		},
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:'',
				state:true,
				stateNum:10,
				"LineA": {
								  "categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
								  "series": [{
									"name": "成交量A",
									"data": [35, 8, 25, 37, 4, 20]
								  }, {
									"name": "成交量B",
									"data": [70, 40, 65, 100, 44, 68]
								  }, {
									"name": "成交量C",
									"data": [100, 80, 95, 150, 112, 132]
								  }]
								},
			}
		},
		components: {},
		mounted() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData(true,this.XYdata);
		},
		watch:{
			dataAll:{
				     handler(v){
				                  // this.getServerData(false)  
				           },
				deep:true
			},
			XYdata:{
				handler(v){
					this.getServerData(false,v);
				},
				deep:true
			}
		},

		methods: {
			getServerData(state,data){
					if(state){
						_self.showLineA("canvasLineA",data);
					}else{
						console.log(data)
						this.changeData(data)
					}
			},

			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:5,
					},
					dataLabel:true,
					dataPointShape:true,
					dataPointShapeType:'hollow',
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true,//开启图表拖拽功能
					xAxis: {
						disableGrid:false,
						type:'grid',
						gridType:'dash',
						itemCount:9,
						rotateLabel:false,
						labelCount:3,
						// scrollBackgroundColor:'red',
						scrollAlign:"right",
						scrollShow:true,
					},
					yAxis: {
						//disabled:true
						gridType:'dash',
						splitNumber:8,
						// min:10,
						// max:180,
						format:(val)=>{return val.toFixed(0)+'℃'}//如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						}
					},
				});
				
			},
			touchLineA(e){
				canvaLineA.scrollStart(e);
			},
			moveLineA(e) {
				canvaLineA.scroll(e);
			},
			touchEndLineA(e) {
				canvaLineA.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaLineA.touchLegend(e);
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			changeData(data){
					canvaLineA.updateData({
						series: data.series,
						categories: data.categories,
						scrollPosition:'right',
						animation:false
					});
			
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
