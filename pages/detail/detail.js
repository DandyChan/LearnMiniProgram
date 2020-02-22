// pages/detail/detail.js
Page({
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options)
	},

	onUnload(){
		//1. 获取首页的页面对象
		//此函数返回当前所有活跃的页面
		const pages = getCurrentPages()
		const home = pages[ pages.length - 2]

		//2. 调用页面对象的setData
		home.setData({
			title: "嘿嘿嘿"
		})
	},

	handleBackHome(){
		wx.navigateBack({
			delta: 1
		})
	}

})