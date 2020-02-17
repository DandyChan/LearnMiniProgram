Page({
	data: {
		name: "hello world",
		firstName: "Dandy",
		lastName: "Chan",
		age: 20,
		time: new Date().toLocaleString(),
		isActive: false,
		isShow: true,
		score: 20,
		movies: ["湮灭", "功夫", "叶问"],
		nums: [
			[10, 11, 12],
			[20, 21, 22],
			[30, 31, 32]
		],
		letters: ['a', 'b', 'c']
	},

	onLoad(){
		setInterval(() => {
			this.setData({
				time: new Date().toLocaleString()
			})
		}, 1000)
	},

	handleSwitchColor(){
		this.setData({
			isActive: !this.data.isActive
		})
	},

	handleCanISee(){
		this.setData({
			isShow: !this.data.isShow
		})
	},

	handleScoreIncrease(){
		this.setData({
			score: this.data.score + 5
		})
	}

})