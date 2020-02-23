import request from './network.js'

export function getMultidata(){
	return request({
		url: '/home/multidata'
	})
}

export function getGoodsdata(type, page){
	return request({
		url: '/api/hy/home/data',
		data: {
			type: type,
			page: page
		}
	})
}