<template>
	 <view>
	        <view >
	          <form @submit="onSubmit">
	            <view class="uni-form-item uni-column">
	                <view class="title">设备名称</view>
	                <input class="uni-input" placeholder="设备名称" />
	            </view>
				<view class="uni-form-item uni-column">
				    <view class="title">编码</view>
				    <input class="uni-input" placeholder="编码" />
				</view>
				<view>
				   <view class="uni-form-item uni-column">厂区</view>
				   <view class="uni-input">
					   <picker @change="bindPickerChange" :value="index" :range="array">
					   		<view class="uni-input">{{array[index]}}</view>
					   </picker>
				   </view>
				</view>
				<view class="uni-form-item uni-column">
				    <view class="title">位置</view>
				    <input class="uni-input" placeholder="位置" />
				</view>
				<view class="uni-form-item uni-column">
				    <view class="title">负责人</view>
				    <input class="uni-input" placeholder="负责人" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit" >保存</button>
					<button type="default" form-type="reset">重置</button>
				</view>
	          </form>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array:['厂区1','厂区2','厂区3'],
				index:0
			}
		},
		methods: {
			bindPickerChange(){
				
			}
		}
	}
</script>

<style>
	.uni-form-item .title {
		padding: 20rpx 0;
	}
	.uni-input{
		background: #f7f5f5;
	}
</style>
