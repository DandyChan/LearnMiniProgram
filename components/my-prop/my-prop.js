// components/my-prop/my-prop.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		// title: String
		//一般用下面的写法
		title: {
			type: String, //数据类型
			value: "默认标题", //默认值
			observer: function(newVal, oldVal){ //观察者，能观察是否有传来的数据
				console.log(newVal, oldVal) 
			}
		}
	},

	externalClasses: ['titleclass']
})
