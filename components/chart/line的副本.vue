<template>
	<view class="qiun-columns">

		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchLineA"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<!-- <canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas> -->
			<!--#endif-->
		</view>
		<!-- <button class="qiun-button" @tap="changeData()">更新图表</button> -->
		<!--#endif-->
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import  { isJSON } from '@/common/checker.js';
	
	var _self;
	var canvaLineA=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:'',
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
		mounted() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
		async	getServerData(){
			
				let list=await this.$api.moniterList();
				let LineA=this.handleWay(list.message.data)
				console.log(LineA)
				// //这里我后台返123回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				// LineA.categories=this.LineA.categories;
				// LineA.series=this.LineA.series;
				// _self.textarea = JSON.stringify(this.LineA);
				console.log(LineA)
				_self.showLineA("canvasLineA",LineA);
			},
			handleWay(data){
				console.log(data)
				let LineA={categories:[],series:[{name:'温度',data:[]},{name:"湿度",data:[]}]};
				for(let v of data){
					LineA.categories.push(v.date);
					LineA.series[0].data.push(v.wendu)
					LineA.series[1].data.push(v.shidu)
				}
				return LineA
			},
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					padding:[15,43,0,39],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					
					enableScroll:true,
					dataLabel:true,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						scrollShow:true,
						labelCount:3,
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8,
						enableScroll:true,
						itemCount:3,
            boundaryGap:'justify',
			format:(val)=>{return val.slice(2,7)}
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						rotateLabel:true,
						dashLength:8,
						splitNumber:5,
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'curve'
						}
					}
				});
				
			},
			touchLineA(e) {
				console.log(123)
				canvaLineA.touchLegend(e);
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			changeData(){
				if(isJSON(_self.textarea)){
					let newdata=JSON.parse(_self.textarea);
					canvaLineA.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				}else{
					uni.showToast({
						title:'数据格式错误',
						image:'../../../static/images/alert-warning.png'
					})
				}
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 100%;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
