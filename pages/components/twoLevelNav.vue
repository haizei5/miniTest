<!-- 二级目录 -->
<template>
	<view class="navTab" id="tabBers" :style="{top:`${menutop}px`}">
		<view class="main-title" ref="operationRef" data-id="operationRef">
			<u-tabs ref="uTabs" active-color="#333333" inactive-color="#3B426B" :is-scroll="false" :list='list' @change="tabsChange"
			 :current="current"></u-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		props:['list','menutop'],
		data() {
			return {
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
			}
		},
		computed: {
		},
		onLoad() {
		},
		onShow() {},
		// 监听页面滚动距离-生命周期
		onPageScroll(e) {
		},
		mounted() {
		},
		methods: {
			tabsChange(idx) {
				this.current = idx;
				this.$emit('setCurrent',this.current);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.navTab {
		width: 100%;
		position: -webkit-sticky;
		position: -moz-sticky;
		position: -ms-sticky;
		position: sticky;
		top: var(--window-top);
		z-index: 99;
	}
</style>
