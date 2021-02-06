//首页
import request from './network.js'

export function loginH(data) {
	//登录
	return request({
		fun: 'Login',
		data,
		method: 'POST'
	})
}

export function getSwiper() {
	//获取轮播图
	return request({
		fun: 'Banner',
		method: 'POST'
	})
}

export function getBannerDetail(id) {
	//获取轮播图详情
	return request({
		fun: 'Banner_details',
		data: {
			id
		}
	})
}

export function getAdvertise() {
	//获取公告
	return request({
		fun: 'Reception_notice'
	})
}

export function getCategory() {
	//获取首页分类
	return request({
		fun: 'navigation',
		method: 'POST'
	})
}

export function getCategoryA() {
	//获取全部分类
	return request({
		fun: 'Slect_navigation',
		method: 'POST'
	})
}

export function getCategoryShop(data) {
	//获取分类下的商品
	return request({
		fun: 'Navigation_business',
		data: {
			lat: getApp().globalData.city.latitude,
			lng: getApp().globalData.city.longitude,
			navigation_id: data.id,
			status: data.status,
		},
		method: 'POST'
	})
}

export function getAllShop(data) {
	//获取全部商品
	return request({
		fun: 'Slect_navigation',
		data: {
			lat1: getApp().globalData.city.latitude,
			lng1: getApp().globalData.city.longitude,
			status: data.status,
		}
	})
}

export function getOtherShop(data) {
	//获取全部商品
	return request({
		fun: 'Orther_navigation',
		data: {
			lat1: getApp().globalData.city.latitude,
			lng1: getApp().globalData.city.longitude,
			orther_id: data.id,
			status: data.status,
		}
	})
}

export function getHotShop() {
	//获取首页热门店铺
	return request({
		fun: 'Hot_business',
		data: {
			lat1: getApp().globalData.city.longitude,
			lng1: getApp().globalData.city.latitude,
		}
	})
}

export function getChooseShop() {
	//获取返利餐优选店铺
	return request({
		fun: 'Hot_business_rebate',
		data: {
			lat1: getApp().globalData.city.longitude,
			lng1: getApp().globalData.city.latitude,
		}
	})
}

export function getDistriShop(isAble) {
	//获取首页热门店铺
	return request({
		fun: 'Select_business_task',
		data: {
			lat: getApp().globalData.city.latitude,
			lng: getApp().globalData.city.longitude,
			status: isAble
		}
	})
}

export function getSearchKey(key, status) {
	//搜索
	return request({
		fun: 'Select_input',
		data: {
			lat: getApp().globalData.city.longitude,
			lng: getApp().globalData.city.latitude,
			key_words: key,
			status
		}
	})
}

