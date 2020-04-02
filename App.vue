<script>
	import './global.css'
	export default {
		onLaunch: function() {
			console.log('App La1unch')
			setInterval(e=>{
				
				this.$api.getAlertList({}).then(e=>{
					if(e.success){
						let list = e.message.data;
						if(list.length>0){
							let message = '设备异常报警！位置：'+list[0].alertItem+'内容：'+list[0].breakType;
							
							uni.showModal({
								title: '设备异常报警',
								content: message,
								showCancel: false,
								cancelText: '',
								confirmText: '关闭',
								
							});
							
							// #ifdef APP-PLUS
							plus.nativeUI.toast(message);
							var options = {cover:false};    
							plus.push.createMessage(message, "报警通知", options);  
							// #endif
						}
					}
					
				})
			},6000)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	view{font-family: '\5FAE\8F6F\96C5\9ED1'; font-size: 30upx;
	    font-family: "NSimSun";
	}
	
</style>
