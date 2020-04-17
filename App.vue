<script>
	import './global.css'
	export default {
		data() {
			return {
				current: 1,
			}
		},
		onLaunch: function() {
			console.log('App La1unch')
			let current = true;
			setInterval(e => {
				if (current) {
					current = false;
					this.$api.getAlertList({}).then(e => {
						if (e.success) {
							let list = e.message.data;
							if (list.length > 0) {
								let message = '设备异常报警！位置：' + list[0].alertItem + '内容：' + list[0].breakType;
								console.log(message)

								uni.showModal({
									title: '设备异常报警',
									duration: 2000,
									content: message,
									showCancel: false,
									cancelText: '',
									confirmText: '关闭',
									success: function(v, d) {
										current = true;
									}
								});

							
								
								// plus.nativeUI.toast(message);
								var options = {
									cover: false
								};
								plus.push.createMessage(message, "报警通知", options);
								
								
							}
						}
					})


				}

			}, 6000)
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
	@import './common/uni.css';
	view {
		font-family: '\5FAE\8F6F\96C5\9ED1';
		font-size: 30upx;
		font-family: "NSimSun";
	}
</style>
