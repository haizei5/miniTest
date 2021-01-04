<template>
	<!-- 自定义导航栏 -->
	<view class="container">
		<head>
			<u-navbar :is-back="false" title="订单管理" titleBold="true" title-color="#000">
				<view class="slot-icon flex flex-align-center">
					<text class="iconfont icon-user icon-size" @click="slotUser"></text>
				</view>
			</u-navbar>
			<view class="u-content">
				<u-sticky :offset-top="offsetTop" h5-nav-height="44">
					<view class="tab-bar" id="tabBar">
						<u-tabs ref="uTabs" active-color="#0091FF" inactive-color="#3B426B" :is-scroll="false" :list='list' @change="tabsChange"
						 :current="current"></u-tabs>
					</view>
				</u-sticky>
			</view>
		</head>
		<section class="contentBg" style="height: 1500rpx;">
			<swiper :current="current">
				<swiper-item v-for="(item,index) in tabs" :key="index">
					<view>
						{{item.content}}
					</view>
				</swiper-item>
			</swiper>
		</section>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部',
					itemwidth: "60",
				}, {
					name: '派单'
				}, {
					name: '进行中',
					count: 5
				}, {
					name: '争议订单'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				offsetTop: 0, //吸附顶部是的间距
				tabBarTop: 0,
				tabs: [{
					content: 'tab0'
				}, {
					content: 'tab1'
				}, {
					content: 'tab2'
				}, {
					content: 'tab3'
				}]
			}
		},
		onLoad() {

		},
		onShow() {
			this.setOffestTop()
		},
		mounted() {
			uni.createSelectorQuery().in(this).select('#tabBar').boundingClientRect(res => {
				this.tabBarTop = res.top
			}).exec()
		},
		methods: {
			slotUser() {
				console.log("个人中心");
			},
			tabsChange(idx) {
				this.current = idx;
				uni.createSelectorQuery().selectViewport().scrollOffset(res => {
					uni.pageScrollTo({
						scrollTop: this.tabBarTop,
						duration: 300
					})
				}).exec()
			},
			setOffestTop() {
				let systemInfo = uni.getSystemInfoSync();
				let topPx = systemInfo.statusBarHeight + 44; //顶部状态栏+沉浸式自定义顶部导航
				this.offsetTop = topPx / (uni.upx2px(topPx) / topPx) //px转为rpx
			},

		}
	}
</script>

<style lang="scss">
	.container {
		.slot-icon {
			padding: 0 30rpx;

			.icon-size {
				font-size: 50rpx !important;
			}
		}
	
			

		.contentBg {
			background: #F5F5F5;
		}

	}
</style>
