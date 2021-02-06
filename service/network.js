//封装网络请求函数

import {
	baseURL,
	timeout
} from './config.js'

//需要登录的头部
// import store from '@/store/index.js'

function request(options) {
	wx.showLoading({
		title: '数据加载中……'
	})
	return new Promise((resolve, reject) => {
		let openid = '';
		if(getApp().globalData.userInfo && getApp().globalData.userInfo.openid) {
			openid = '&openid=' + getApp().globalData.userInfo.openid;
			// openid = '&openid=ox8255ScKwwk45wcu9Pu5A_Ew6MU';
		}
		wx.request({
			url: baseURL +'?i=2&c=entry&a=wxapp&m=yzd_edu&do=' + options.fun + openid,
			timeout: timeout,
			header: {
				'context-type': 'multipart/form-data'
			},
			data: options.data,
			method: options.method || 'GET',
			success: res => {
				resolve(res.data)
			},
			fail: reject,
			complete: res => {
				wx.hideLoading();
			}
		})
	})
}

export default request;
 