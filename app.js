//设置为常量，更好的编码习惯
const TOKEN = 'token'

App({
	globalData: {
		token: ''
	},
	onLaunch: function () {
		//一、先从缓存中取出token
		const token = wx.getStorageSync(TOKEN)

		//二、判断token是否有值
		if(token && token.length !== 0){ //已经有token，只需验证token是否过期
			this.check_token()
		}else{ //没有token进行登录操作
			this.login()
		}
		
	},
		//登录操作
		login(){
			console.log('Login now.......')
			wx.login({
				//code只有5分钟的有效期
				success: (res) => {
					// console.log(res)
					//1. 获取code
					const code = res.code

					//2. 将code发送给服务器
					wx.request({
						url: 'http://123.207.32.32:3000/login',
						method: 'post',
						data: {
							code: code
						},
						success: (res) => {
							// console.log(res)
							//1. 取出token
							const token = res.data.token

							//2. 将token保存在globalData中
							this.globalData.token = token
							console.log(this.globalData.token)

							//3. 进行本地存储
							wx.setStorageSync(TOKEN, token)
						}
					})
				}
			})
		},
		//验证token
		check_token(token){
			console.log('check token now.........')
			wx.request({
				url: 'http://123.207.32.32:3000/auth',
				method: 'post',
				header: {
					token: token
				},
				success: (res) => {
					console.log(res)
					if(!res.data.errorCode){
						console.log('token有效')
						this.globalData.token = token
					}else{
						this.login()
					}
				},
				fail: function(err){
					console.log(err)
				}
			})
		}
})
