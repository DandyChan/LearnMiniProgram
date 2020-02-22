// pages/home/home.js
import request from '../../services/network.js'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// ---------1. 原生的方式发送网络请求---------
		this.get_data_origin

		//----------2. 使用封装的request发送网络请求---------
		//promise最大好处就是防止出现回调地狱
		request({
			url: 'http://httpbin.org/get'
		}).then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})
	},

	get_data_origin(){
		// //发送网络请求
		// //1. 发送最简单的get请求
		// wx.request({
		// 	url: 'http://httpbin.org/get',
		// 	success: function(res){
		// 		console.log(res)
		// 	}
		// }),

		// // 2. 发送带参数的get请求
		// wx.request({
		// 	url: 'http://httpbin.org/get',
		// 	data: {
		// 		name: "DandyChan",
		// 		age: 20
		// 	},
		// 	success: function(res){
		// 		console.log(res)
		// 	}
		// })

		// 3. 发送带参数的post请求
		wx.request({
			url: 'http://httpbin.org/post',
			method: 'post',
			data: {
				name: "DC",
				type: "post"
			},
			success: function (res) {
				console.log(res)
			}
		})
	}
})