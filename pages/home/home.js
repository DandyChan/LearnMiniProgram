// pages/home/home.js
Page({
	data:{
		counter: 0,
		isShow: true
	},

	handleIncreament(event){
		console.log("========", event)
		this.setData({
			counter: this.data.counter + 1
		})
	},

	handleItemClick(event){
		console.log("///////", event)
	},

	handleChangeCpn(){
		//目的：修改my-selector中的counter
		//1. 获取组件对象
		const my_selector = this.selectComponent('#selector') //通过class或id选择
		console.log(my_selector)

		//2. 通过setData修改组件中的数据（不合理）
		// my_selector.setData({
		// 	counter: my_selector.data.counter + 20
		// })

		//3. 通过方法对数据进行修改
		//这个是自定义组件中已有方法
		my_selector.changeCounter(10)
	},

	handleChangeShow(){
		this.setData({
			isShow: !this.data.isShow
		})
	}
})