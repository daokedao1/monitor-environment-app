<template>

	<scroll-view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData" :key="key" >
				<view v-if="value.type!=='ad'" class="uni-media-list" @click="goDetail(value)">
					<image class="uni-media-list-logo" :src="value.cover"></image>
					<view class="uni-media-list-body">
						
						<view class="uni-media-list-text-top"><span v-if="value.hot" class="hot-flag">热门</span>{{ value.title }}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{ value.author_name }}</text>
							<text>{{ value.published_at }}</text>
						</view>
					</view>
				</view>
              
			</view>
		</view>
		<uni-load-more :status="status"  :icon-size="16" :content-text="contentText" />
	</scroll-view>
</template>

<script>
import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue';
var dateUtils = require('./../../common/utils.js').dateUtils;
export default {
	components: {
		uniLoadMore
	},
	data() {
		return {
			listData: [],
			last_id: '',
			reload: true,
			status: 'more',
			contentText: {
				contentdown: '',
				contentrefresh: '加载中',
				contentnomore: '没有更多'
			},
			page:1
		};
	},
	onLoad() {
		// this.getList();
	},
	mounted(){
		this.getActivityList();
	},
	
	onPullDownRefresh() {
		console.log('下拉加载！！');
		this.reload = true;
		this.last_id = '';
		this.getActivityList();
		
		// this.getList();
	},
	onReachBottom() {
		this.status = 'more';
		this.getActivityList();
		// this.getList();
	},
	methods: {
		getActivityList(){
			let params = {};
			console.log(this.last_id);
			if(this.last_id){
				this.status = 'loading';
				params = {
					"page": this.page+1,
					"pageSize": 20
				}
				this.page = this.page + 1
			}
			else{
				this.page = 1
				params = {
					"page": this.page,
					"pageSize": 20
				}
			}
			this.$api.getAlertPage(params).then((res)=>{
				if(res.success && res.message.data.length !== 0){
					
						let list = this.setTime(res.message.data)
						console.log(list)
						this.listData = this.reload ? list : this.listData.concat(list);
						this.last_id = list[list.length - 1].id;
						this.reload = false;
					
					uni.stopPullDownRefresh();
				}
				else if(res.message.data.length == 0){
					this.status = 'noMore'
					uni.stopPullDownRefresh();
				}
			})
		},
		getTopList(cb){
			this.$api.getTopNewsList({"type": 1}).then(res=>{
				if(res.success){
					cb(res.data);
				}else{
					cb([])
				}
			})
		},
		goDetail: function(e) {
		
			let newsId = e.id
			console.log(e.id)
			uni.navigateTo({
				url: 'detail?id='+newsId
			});
		},
		setTime: function(items) {
			var newItems = [];
			items.forEach((e,i) => {
				newItems.push({
					author_name: '报警值:'+e.alertValue,
					cover: '/static/alert.png',
					id: i,
					type: e.type,
					published_at: dateUtils.format(e.date),
					title: e.alertItem+e.breakType+'报警'
				});
			});
			return newItems;
		}
	}
};
</script>

<style>
	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}
	.banner-img {
		width: 100%;
	}
	.banner-title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 30upx;
		bottom: 30upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: white;
		z-index: 11;
	}
	.hot-flag{
		  background:#007AFF;
		  color: #fff;
		  font-size: 24upx;
		  padding: 0 5upx;
		  margin-right: 14upx;
	}
	.uni-media-list-logo {
		width: 180upx;
		height: 140upx;
	}
	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}
	.uni-media-list-text-top {
		height: 74upx;
		font-size: 28upx;
		overflow: hidden;
	}
	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
	.activity_list_wrap{
		display: flex;
		align-content: center;
		justify-content: space-between;
		height: 120upx;
		margin-left: 37upx;
		border-bottom: 1upx solid #F5F5F5;
	}
	.item_title_all{
		margin-left: 24upx;
	}
	.item_title{
		font-size: 32upx;
		font-weight: 400;
		color: rgba(51,51,51,1);
	}
	.item_tip{
		font-size: 28upx;
		font-weight: 400;
		color: rgba(150,150,150,1);
	}
	.item_status{
		font-size: 28upx;
		font-weight: 400;
		color: rgba(150,150,150,1);
	}
	.list_item_left{
		display: flex;
		align-items: center;
	}

	.list_item_right{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 36upx;
	}
	.item_img{
		width: 88upx;
		height: 88upx;
	}
</style>
