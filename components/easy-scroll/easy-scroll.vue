<template>
    <view class="container">
        <view class="nav-list">
            <view class="nav-item"
                v-for="(item,index) of list" 
                :class="{active:index==viewNavIndex}"
                @click="handleClickNav(index)"
                :key="index">{{item.name}}</view>
        </view>
        <view class="list-wrapper">
            <scroll-view class="list-container" id="list-container"
                @scroll="handleListScroll"
                @touchstart="handleTouchScrollView"
                :scroll-y="true" 
                :scroll-into-view="'scroll-item-'+clickedNavIndex" 
                :show-scrollbar="false"
                :scroll-with-animation="true">
                <view class="list" v-for="(item,listIndex) of list" :key="listIndex" :id="'scroll-item-'+listIndex">
                    <view class="title"><text>传感器</text></view>
                    <view class="item-container">
                        <view 	@click="device(item)" class="item" v-for="(item,index) of item.children" :key="index">
                            <image src="../../static/logo1.jpg" mode=""></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'EasyScroll',
	components: {
	},
    data() {
        return {
            list: [
				{
					name:'厂区1',
					children:[
						{name:'设备1',id:2},
						{name:'设备2',id:2},
						{name:'设备3',id:2}
						
					]
				},
				{
					name:'厂区2',
					children:[
						{name:'设备1',id:2},
						{name:'设备2',id:2},
						{name:'设备3',id:2},
						{name:'设备4',id:2},
						{name:'设备5',id:2},
						{name:'设备6',id:2}
					]
				},{
					name:'厂区3',
					children:[
						{name:'设备1',id:1},
						{name:'设备2',id:1},
						{name:'设备3',id:1},
						{name:'设备4',id:1},
						{name:'设备5',id:1},
						{name:'设备6',id:1}
					]
				}
			],//列表数据
            isTouchScrollView: false,
            clickedNavIndex: 0,
            viewNavIndex: 0,
            nodeInfoList: [],
        }
    },
	mounted() {
		console.log(this.list)
		this.init()
	},
    methods:{
       async init(){
			const res=await this.$api.addEquipment();
			this.list=res.message;
			// http://39.98.215.185:8010/api/equipment/list
            // const query = uni.createSelectorQuery().in(this);
            // query.selectAll('#list-container .list').boundingClientRect(data => {
            //     // console.log(data);
            //     this.nodeInfoList = data
            // }).exec()
        },
        handleClickNav(nav){
            if(!this.isTouchScrollView&&this.clickedNavIndex == nav) return;
            // 锁定联动
            this.isTouchScrollView = false;
            // 解决clickedNavIndex相同触发更新失败
            if(this.clickedNavIndex == nav){
                this.clickedNavIndex = -1;
            }
            this.$nextTick(function(){
                this.clickedNavIndex = nav;
                this.viewNavIndex = nav
            })
        },
		device(item){
			uni.navigateTo({
				url: '../../pages/sensor/sensor?id='+item.id
			});
		},
        handleListScroll(e){
            if(!this.isTouchScrollView) return;
            let scrollTop = this.scrollTop = e.detail.scrollTop;
            let currentNavIndex = this.nodeInfoList.map((item,index)=>({index,...item}))
            .filter(item=>item.top<=scrollTop)
            .sort((a,b)=>b.top-a.top)[0].index;
            // console.log(currentNavIndex);
            this.viewNavIndex = currentNavIndex;
        },
        handleTouchScrollView(){
            this.isTouchScrollView = true;
        },
    },
    onLoad() {
        this.$nextTick(function(){
            this.init()
        })
    }
}
</script>
<style lang="stylus" scoped>
.container
    display flex
    height calc(100vh - var(--window-top))
    .nav-list
        width: 160rpx;
        border-right: 2rpx solid #efefef;
        overflow-y auto
        overflow-x hidden
        display flex
        flex-direction column
        align-items center
        font-size 34rpx
        &::-webkit-scrollbar
            width 0
            height 0
            background transparent
        .nav-item
            width 100%
            padding 25rpx 0
            text-align center
            transition: transform .1s linear;
            &.active
                color: #fb7d34
                transform-origin: center center;
                transform: scale(1.32);
    .list-wrapper
        flex 1
        position relative
        .list-container
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            padding 0 2rpx
            box-sizing border-box
            .title
                height 132rpx
                line-height 132rpx
                text-align center
            .item-container
                display flex
                flex-wrap wrap
                align-items center
                .item
                    width 33.33%
                    text-align center
                    padding-top 21rpx 
                    padding-bottom 31rpx
                    image
                        width 104rpx
                        height 104rpx
                        margin-bottom 28rpx
                    .name
                        font-size 23rpx
                        color #0000008a
						word-wrap:break-word
</style>
