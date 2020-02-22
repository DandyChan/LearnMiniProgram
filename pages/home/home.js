// pages/home/home.js
Page({
	handleShowToast(){
		wx.showToast({
			title: '危',
			duration: 3000,
			icon: "loading",
			// mask: true
			success: function(res){
				console.log("success")
			},
			fail: function(err){
				console.log("error")
			},
			complete: function(){
				console.log("complete")
			} 
		})
	},

	handleShowModal(){
		wx.showModal({
			title: 'Title',
			content: 'Content',
			cancelText: '收工了',
				success: function(res){
				console.log(res)
				if(res.cancel == true){
					console.log("点击了取消按钮")
				}else{
					console.log("点击了确定按钮")
				}
			}
		})
	},

	handleShowLoading(){
		wx.showLoading({
			title: '正在加载',
			mask: true
		})
		setTimeout(() => {
			//必须手动hideLoading才会让loading消失
			wx.hideLoading()
		},1000)
	},

	handleShowAction(){
		wx.showActionSheet({
			itemList: ['相册', '拍照'],
			success: function(res){
				console.log(res)
			}
		})
	},

	onShareAppMessage: function(options){
		return {
			title: 'share',
			path: '/pages/about/about'
		}
	}
})