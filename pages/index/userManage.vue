<template>
	<!-- 自定义导航栏 -->
	<view class="container">
			<view class="navOne" data-id="navOne">
				<u-navbar :is-back="false" title="订单管理" titleBold="true" title-color="#000">
					<view class="slot-icon flex flex-align-center">
						<text class="iconfont icon-user icon-size" @click="slotUser"></text>
					</view>
				</u-navbar>
			</view>
			<view class="sticky-tabs" id="tabBers" :style="{top:`${menutop}px`}">
				<view class="main-title" ref="operationRef" data-id="operationRef">
					<u-tabs ref="uTabs" active-color="#0091FF" inactive-color="#3B426B" :is-scroll="false" :list='navList' @change="tabsChange"
					 :current="current"></u-tabs>
				</view>
			</view>
			<view style="height:1888px"></view>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
		data() {
			return {
				navList: ['全部','派单','进行中','争议订单'],
				rect: '', //页面滚动距离
				menutop: '66', //组件距离顶部的距离
				height: '576',
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				FixedVal: false,
				tabs: [{
					type: true
				}, {
					type: false
				}, {
					status: '进行中',
					price: "2600",
					poName: "炮兵甲",
					orderTime: "2020-09-28 15:00",
					address: "声学所住宅楼小区",
					description: "河北省张家口招4个小工，工资日结，需要积极配合工作，具备团队协作能力",
					workTime: "一周左右",
					type: true
				}, {
					status: '进行中',
					price: "2600",
					poName: "炮兵甲",
					orderTime: "2020-09-28 15:00",
					address: "声学所住宅楼小区",
					description: "河北省张家口招4个小工，工资日结，需要积极配合工作，具备团队协作能力",
					workTime: "一周左右",
					type: true
				}]
			}
		},
		computed: {},
		onLoad() {},
		onReady() {
			this.initNavTop()
		},
		onShow() {},
		// 监听页面滚动距离-生命周期
		onPageScroll(e) {
			this.rect = e.scrollTop;
		},
		mounted() {},
		methods: {
			initNavTop() {
				// let query = uni.createSelectorQuery();
				// query.select('.navOne').boundingClientRect();
				// query.select('.navTab').boundingClientRect();
				// query.select('.container').boundingClientRect();
				// query.exec((data) => {
				// 	this.menutop = data[0].height;
				// 	this.height = data[2].height - data[0].height - data[1].height;
				// });
			},
			slotUser() {
				console.log("个人中心");
			},
			tabsChange(idx) {
				this.current = idx;
				this.$emit('setCurrent', this.current);
			},
			getCurrent(e) {
				this.current = e.detail.current;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		/*
		sticky生效条件：
		1、父元素不能overflow:hidden或者overflow:auto属性。(mescroll-body设置:sticky="true"即可, mescroll-uni本身没有设置overflow)
		2、必须指定top、bottom、left、right4个值之一，否则只会处于相对定位
		3、父元素的高度不能低于sticky元素的高度
		4、sticky元素仅在其父元素内生效,所以父元素必须是 mescroll
		*/
		.sticky-tabs{
			z-index: 990;
			position: sticky;
			top: 0;
			background-color: #fff;
		}
		margin: 0;
		padding: 0;

		.navTab {
			// display: flex;
			width: 100%;
			left: 0;
			right: 0;
			position: -webkit-sticky;
			position: -moz-sticky;
			position: -ms-sticky;
			position: sticky;
			z-index: 99;
		}

		.slot-icon {
			padding: 0 30rpx;

			.icon-size {
				font-size: 50rpx !important;
			}
		}

		.contentBg {
			background: #F5F5F5;
			height: 100%;

			.contentHg {
				height: 100% !important
			}

			.leftTitleOne {
				font-size: 30rpx;
				color: #F26B0B;
				margin-bottom: 12rpx;
			}

			.leftTitleTwo {
				color: #999999;

				text {
					margin: 0 10rpx 0 10rpx;
					color: #4DB2FF
				}
			}

			.slotBody {
				.orderTime {
					color: #666666
				}

				.icon-size {
					font-size: 12rpx !important;
					color: #CCCCCC;
					opacity: 0.5;
				}
			}
		}
	}
</style>
