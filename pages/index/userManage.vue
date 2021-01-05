<template>
	<view class="main">
		<view class="navTab" id="tabBers">
			<view class="main-title" ref="operationRef" data-id="operationRef">
				<u-tabs ref="uTabs" active-color="#0091FF" inactive-color="#3B426B" :is-scroll="false" :list='list' @change="tabsChange"
				 :current="current"></u-tabs>
			</view>
		</view>
		<view class="contentBg" style="height: 1500rpx;">
			<swiper :current="current">
				<swiper-item v-for="(item,index) in tabs" :key="index">
					<view>
						{{item.content}}
					</view>
				</swiper-item>
			</swiper>
		</view>
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
				rect: '', //页面滚动距离
				menutop: '', //组件距离顶部的距离
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				FixedVal: false,
				tabs: [{
					content: "tab0文章，中国内地男演员，毕业于中央戏剧学院2002级表演系本科。因在《奋斗》、《蜗居》等电视剧中的精彩表现走红。1999年，还在上中专艺校的文章就出来拍戏了，但都是饰演一些小角色。2004年，还在中央戏剧学院表演系读书的文章，在《与青春有关的日子》中成功饰演了卓越。虽然只是一个配角，但是他让文章逐渐为观众所熟悉。之后，他又在《奋斗》、《暗流》、《蜗居》、《雪豹》、《海洋天堂》等影视剧作中有突出表现，曾在2003年韩国釜山艺术节上，获“最佳男演员奖”。2009年，第十二届上海国际电影节“电影频道传媒大奖” 最佳新人奖；2010年，凭借《海洋天堂》获第十三届上海国际电影节“电影频道传媒大奖” 最佳男主角。"
				}, {
					content: 'tab1'
				}, {
					content: 'tab2'
				}, {
					content: 'tab3'
				}]
			}
		},
		computed: {
			// 监听筛选组件置顶和不置顶
			namepage() {
				// 如果页面滚动的高度大于筛选组件距离顶部的高度，那就置顶，反之不置顶
				if (this.rect > this.menutop) {
					this.FixedVal = true
				} else {
					this.FixedVal = false
				}
			},
		},
		onLoad() {
			// 监听组件距离顶部的距离
			// this.initScrollTop()
		},
		onShow() {},
		// 监听页面滚动距离-生命周期
		onPageScroll(e) {
			console.log(e)
			this.rect = e.scrollTop;
		},
		mounted() {},
		methods: {
			initScrollTop() {
				const query = uni.createSelectorQuery()
				query.select('#tabBers').boundingClientRect()
				query.exec((res) => {
					this.menutop = res[0].top
				})

			},
			slotUser() {
				console.log("个人中心");
			},
			tabsChange(idx) {
				this.current = idx;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.test {
		position: relative;
		height: 200rpx;
		width: 100%;
	}

	.main {
		width: 100%;
		margin: 0;
		padding: 0;
	}

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
