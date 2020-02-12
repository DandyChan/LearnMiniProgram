Page({
	data:{
		name: 'Hello DandyChan',
		age: 20,
		students:[
			{id: 1, name: 'chan', age:20},
			{id: 2, name: 'chang', age:22},
			{id: 3, name: 'zhang', age:24},
			{id: 4, name: 'chuang', age:21},
		],
		counter: 0,
	},
	handleBtnClick(){
		this.setData({
			counter: this.data.counter + 1
		})
	},
	handleBtnSub(){
		this.setData({
			counter: this.data.counter - 1
		})
	}
})