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
		<navTabs :menutop="menutop" :list="navList" @setCurrent="getCurrent"></navTabs>
		<view class="contentBg" style="height: 1500rpx;">
			<swiper :current="current">
				<swiper-item v-for="(item,index) in tabs" :key="index">
					<u-card :title="item.status" title-color="#F26B0B">
						<view>
							
						</view>
						<view>
							
						</view>
					</u-card>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import navTabs from '../components/twoLevelNav.vue'
	export default {
		data() {
			return {
				navList: [{
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
				rect: '', //页面滚动距离
				menutop: '', //组件距离顶部的距离
				height:'65',
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				FixedVal: false,
				tabs: [{
					status: '进行中',
					price:"2600",
					poName:"炮兵甲",
					orderTime:"2020-09-28 15:00",
					address:"声学所住宅楼小区",
					description:"河北省张家口招4个小工，工资日结，需要.......",
					workTime:"一周左右",
				}, {
					status: '进行中',
					price:"2600",
					poName:"炮兵甲",
					orderTime:"2020-09-28 15:00",
					address:"声学所住宅楼小区",
					description:"河北省张家口招4个小工，工资日结，需要.......",
					workTime:"一周左右",
				}, {
					status: '进行中',
					price:"2600",
					poName:"炮兵甲",
					orderTime:"2020-09-28 15:00",
					address:"声学所住宅楼小区",
					description:"河北省张家口招4个小工，工资日结，需要.......",
					workTime:"一周左右",
				}, {
					status: '进行中',
					price:"2600",
					poName:"炮兵甲",
					orderTime:"2020-09-28 15:00",
					address:"声学所住宅楼小区",
					description:"河北省张家口招4个小工，工资日结，需要.......",
					workTime:"一周左右",
				}]
			}
		},
		components:{
			navTabs
		},
		computed: {
		},
		onLoad() {
			this.initNavTop();
		},
		onShow() {},
		// 监听页面滚动距离-生命周期
		onPageScroll(e) {
			this.rect = e.scrollTop;
		},
		mounted() {
		},
		methods: {
			initNavTop(){
				let viewHe = uni.createSelectorQuery().select('.navOne');
				viewHe.boundingClientRect(res=>{
					this.menutop = res.height
				}).exec()
				
			},
			slotUser() {
				console.log("个人中心");
			},
			getCurrent(idx) {
				this.current = idx;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width:100%;
		margin: 0;
		padding: 0;
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
