// components/my-selector/my-selector.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		counter: 0
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		changeCounter(num){
			this.setData({
				counter: this.data.counter + num
			})
		}
	}
})
