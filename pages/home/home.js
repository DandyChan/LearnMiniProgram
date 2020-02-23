// pages/home/home.js
import{
	getMultidata,
	getGoodsdata
}from '../../service/home.js'

//设置一个tabBar分类的常量
const types = ['pop', 'new', 'sell']
//设置一个backTop显示的距离
const TOP_DISTANCE = 1000

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		banners: [],
		recommends: [],
		titles: ['流行', '新款', '精选'],
		goods: {
			pop: {page: 0, list: []},
			new: {page: 0, list: []},
			sell: {page: 0, list: []}
		},
		currentType: 'pop',
		showBackTop: false,
		isTabFixed: false,
		tabScrollTop: 0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 1. 请求轮播图数据以及推荐数据
		this._getMultidata()
		// 2.请求商品数据
		this._getGoodsdata('pop')
		this._getGoodsdata('new')
		this._getGoodsdata('sell')
	},

	//--------------- 网络处理函数 ------------------
	_getMultidata(){	
		getMultidata().then(res => {
			//取出轮播图和推荐的数据
			const banners = res.data.data.banner.list;
			const recommends = res.data.data.recommend.list;

			console.log(banners),
				console.log(recommends)
			//将banners和recommends放到data中
			this.setData({
				banners: banners,
				recommends: recommends
			})
		})
	},

	_getGoodsdata(type){
		// 1.获取页面
		const page = this.data.goods[type].page + 1;

		// 2. 发送网络请求
		getGoodsdata(type, page).then(res => {
			// 2.1 取出数据
			const list = res.data.data.list;

			// 2.2 将数据设置到对应type的list中
			const oldList = this.data.goods[type].list;
			//push是把获取来的list添加到原来的list后（ES6语法）
			//...用于取出所有可遍历属性
			oldList.push(...list)

			// 2.3 将数据设置到data中的goods中
			const typeKey = `goods.${type}.list`
			const pageKey = `goods.${type}.page`

			this.setData({
				[typeKey]: oldList,
				[pageKey]: page
			})
		})
	},

	//--------------- 事件监听 ------------------
	handleTabClick(event){
		//取出index
		const index = event.detail.index;
		
		//设置currentType
		//利用获取的index来获取设置的常量types里面的值(如index为0，types则返回一个'pop')
		//currentType 默认值为'pop'
		const type = types[index]  
		this.setData({
			currentType: type
		})
	},

	handleImageLoad(){
		wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
			console.log(rect)
			this.data.tabScrollTop = rect.top
		}).exec()
	},

	//页面滚动到底部触发函数
	onReachBottom(){
		//上拉加载更多
		this._getGoodsdata(this.data.currentType)
	},

	onPageScroll(options){
		// 1.取出scrollTop
		const backTop = options.scrollTop

		// 2.修改showBackTop属性
		const flag1 = backTop >= TOP_DISTANCE  //比较获得一个布尔值
		if(flag1 != this.data.showBackTop){    //用获得的布尔值比较showBackTop的值
			this.setData({											//只有不同时才setData，以提高性能
				showBackTop: flag1
			})
		}

		// 3. 修改isTabFixed属性
		const flag2 = backTop >= this.data.tabScrollTop
		if(flag2 != this.data.isTabFixed){
			this.setData({
				isTabFixed: flag2
			})
		}
	}
})