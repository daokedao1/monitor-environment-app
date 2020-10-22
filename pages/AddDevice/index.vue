<template>
	<view>
		<easy-scroll></easy-scroll>
	</view>
</template>

<script>
	import easyScroll from '../../components/easy-scroll/easy-scroll.vue'
	export default {
		data() {
			return {
				
			};
		},
		onNavigationBarButtonTap(e) {
			this.fresh();
		},
		components: {
			easyScroll
		},
		methods: {
			fresh() {
		
				uni.navigateTo({
					url:'./addequipment'
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
