<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view >测试版本：{{title}}</view>
		<view>测试APi:{{url}}</view>
	</view>
</template>

<script>
	import { BASEURL,TEXT } from "@/env-config.js"
	export default {
		data() {
			return {
				title: TEXT,
				url:BASEURL
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
