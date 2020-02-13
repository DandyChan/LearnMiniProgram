//注册小程序
App({

	/**
	 * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
	 */
	onLaunch: function (options) {
		console.log('onLaunch')
		console.log(options)
		// wx.getUserInfo({
		// 	success: function(res){
		// 		console.log(res)
		// 	}
		// })
	},

	/**
	 * 当小程序启动，或从后台进入前台显示，会触发 onShow
	 */
	onShow: function (options) {
		//options 就是小程序场景值
		console.log('onShow'),
		console.log(options),

		//获取用户信息，并且获取后传递给服务器
		wx.getUserInfo({
			success: function(res){
				console.log(res)
			}
		}),
		
		//允许转发
		wx.showShareMenu({
			withShareTicket: true
		})
	},

	/**
	 * 当小程序从前台进入后台，会触发 onHide
	 */
	onHide: function () {
		console.log('onHide')
	},

	/**
	 * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
	 */
	onError: function (msg) {
		
	},

	//全局常/变量，所有页面通过getApp()获取
	globalData:{
		name: 'DandyChanPLA',
		age: 20
	}
})
