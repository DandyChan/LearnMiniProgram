// components/my-event/my-event.js
Component({
	/**
	 * 组件的方法列表
	 */
	methods: {
		handleIncreament(){
			// console.log("+1+1")
			this.triggerEvent('increament', {name: 'DandyChan', age: 20, id: 5677})
		}
	}
})
