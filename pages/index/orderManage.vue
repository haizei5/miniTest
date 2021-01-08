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
		<view class="sticky-tabs" id="tabBers" >
			<view class="main-title" ref="operationRef" data-id="operationRef">
				<u-tabs ref="uTabs" active-color="#0091FF" inactive-color="#3B426B" :is-scroll="false" :list='navList' @change="tabsChange"
				 :current="current"></u-tabs>
			</view>
		</view>
		<view class="contentMain" :style="{height:`${height}px`}">
				<u-empty  text="订单为空" mode="list" :show="emptyType"></u-empty>
				<u-card  v-show="listD.length > 0" :padding="0" v-for="(content,idx) in listD" :key="idx">
					<view class="slotHead p16" slot="head">
						<view class="leftTitleOne flex flex-r flex-pack-between">
							<text>{{content.status}}</text>
							<text style="color:#333333">{{content.price}}</text>
						</view>
						<view class="leftTitleTwo">
							工人<text>{{content.poName}}</text>已完成接单
						</view>
					</view>
					<view class="slotBody p16" slot="body" body-style="{height:100rpx}">
						<u-row class="orderTime">
							下单时间：<text>{{content.orderTime}}</text>
						</u-row>
						<view class="flex flex-r flex-pack-left">
							<view class="flex flex-pack-center flex-align-center mr10">
								<text class="iconfont icon-dian icon-size"></text>
							</view>
							<view>
								地址：{{content.address}}
							</view>
						</view>
						<view class="flex flex-r flex-pack-left">
							<view class="flex flex-pack-center flex-align-center mr10">
								<text class="iconfont icon-dian icon-size"></text>
							</view>
							<text class="OverSpace">
								描述：{{content.description}}
							</text>
						</view>
						<view class="flex flex-r flex-pack-left">
							<view class="flex flex-pack-center flex-align-center mr10">
								<text class="iconfont icon-dian icon-size"></text>
							</view>
							<text>
								工期：{{content.workTime}}
							</text>
						</view>
					</view>
					<view slot="foot" class="p16">
						<u-button ripple="true" type="primary" shape="circle" size="medium" :customStyle="{'width':'20px','margin-right':'5px'}">联系雇主</u-button>
						<u-button ripple="true" shape="circle" size="medium" :customStyle="{'width':'20px'}">联系工人</u-button>
					</view>
				</u-card>
			<u-loadmore v-show="(listD.length > 0)" :status="status" />
		</view>
	</view>
</template>

<script>
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
				height: '576',
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				emptyType: false,
				status: 'loadmore',
				listD:[],
				mockData: [{
					status: '进行中',
					price: "￥2600",
					poName: "炮兵甲",
					orderTime: "2020-09-28 15:00",
					address: "声学所住宅楼小区",
					description: "河北省张家口招4个小工，工资日结，需要积极配合工作，具备团队协作能力",
					workTime: "一周左右",
				}, {
					status: '进行中',
					price: "￥2600",
					poName: "炮兵甲",
					orderTime: "2020-09-28 15:00",
					address: "声学所住宅楼小区",
					description: "河北省张家口招4个小工，工资日结，需要积极配合工作，具备团队协作能力",
					workTime: "一周左右",
				}, {
					status: '进行中',
					price: "￥2600",
					poName: "炮兵甲",
					orderTime: "2020-09-28 15:00",
					address: "声学所住宅楼小区",
					description: "河北省张家口招4个小工，工资日结，需要积极配合工作，具备团队协作能力",
					workTime: "一周左右",
				}]
			}
		},
		computed: {},
		onLoad() {
		},
		onReady() {
			this.initNavTop()
		},
		onShow() {},
		// 监听页面滚动距离-生命周期
		onPageScroll(e) {
			this.rect = e.scrollTop;
		},
		mounted() {
			let _that = this;
			_that.listD = _that.mockData;
		},
		methods: {
			initNavTop() {
				let query = uni.createSelectorQuery();
				query.select('.navOne').boundingClientRect();
				query.select('.sticky-tabs').boundingClientRect();
				query.select('.container').boundingClientRect();
				query.exec((data) => {
					this.menutop = data[0].height;
					this.height = data[2].height - data[0].height - data[1].height;
				});
			},
			slotUser() {
				console.log("个人中心");
			},
			tabsChange(idx) {
				console.log(idx)
				let _that = this;
				_that.current = idx;
				if(idx == 0){
					_that.emptyType = false
					_that.listD=_that.mockData;
				}else{
					_that.emptyType = true
					_that.listD=[];
				}
			},
			getCurrent(e) {
				this.current = e.detail.current;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;

		.sticky-tabs {
			z-index: 990;
			position: sticky;
			top: 0;
			background-color: #fff;
		}

		.slot-icon {
			padding: 0 30rpx;

			.icon-size {
				font-size: 50rpx !important;
			}
		}

		.contentMain {
			// position: absolute;
			width: 100%;
			display: block;
			background: $uni-bg-color;
			overflow-y: scroll;
			-webkit-overflow-scrolling: touch;
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
