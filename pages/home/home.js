//注册一个页面
//页面也有自己的生命周期函数
Page({
	// ---------2. 初始化数据------------//
	data:{
		msg: '哈哈哈哈哈'
	},

	// ---------1. 监听页面的生命周期函数------------//
	//页面被加载出来时
	onLoad(){
		console.log('onLoad')
	},
	//页面显示出来时
	onReady(){
		console.log('onReady')
	},
	//页面初次渲染完成时
	onShow(){
		console.log('onShow')
	},
	//页面隐藏时
	onHide(){
		console.log('onHide')
	},
	//页面销毁时
	onUnload(){
		console.log('onUnload')
	},

	// ---------3. 监听wxml中相关的事件------------//
	handleViewClick() {
		console.log("哈哈哈被点击了")
	},

	handleGetUserInfo(event) {
		console.log(event)
	},

	// ---------4. 其他事件------------//
	//监听页面的滚动
	onPageScroll(obj){
		console.log(obj)
	},
	//监听页面滚动到底部
	onReachBottom(){
		console.log("页面滚动到底部")
	},
	//下拉刷新事件
	onPullDownRefresh(){
		console.log("下拉刷新事件")
	},
	//分享事件
	onShareAppMessage(){
		console.log("分享成功")
	}
})