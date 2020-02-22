// pages/home/home.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		title: "哈哈哈"
	},

	handlePushDetail(){
		wx.navigateTo({
			url: '/pages/detail/detail?title="Hello"',
		})
	}
})