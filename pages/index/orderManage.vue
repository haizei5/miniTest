<template>
	<!-- 自定义导航栏 -->
	<header>
		<view>
			<u-navbar :is-back="false" title="订单管理">
				<text class="iconfont icon-user"></text>
			</u-navbar>
		</view>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello11'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
