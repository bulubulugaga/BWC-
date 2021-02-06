//订单
import request from './network.js'

export function getOrder(data) {
	//获取订单列表
	return request({
		fun: 'Order_task',
		data: {
			order_type: data.order_type,
			lat1: getApp().globalData.city.latitude,
			lng1: getApp().globalData.city.longitude
		}
	})
}

export function getOrderDetail(id, tid, bid) {
	//查看详情
	return request({
		fun: 'User_task_details',
		data: {
			lat1: getApp().globalData.city.latitude,
			lng1: getApp().globalData.city.longitude,
			business_openid: id,
			id: tid,
			business_id: bid
		}
	})
}

export function getOrderDetailB(data) {
	//查看商家任务详情
	return request({
		fun: 'Business_select_user',
		data
	})
}

export function addOrder(data) {
	//用户下单
	return request({
		fun: 'User_task',
		data
	})
}

export function cancelOrder(data) {
	//用户取消订单
	return request({
		fun: 'User_cancel_order',
		data
	})
}

export function upOrderImg(data) {
	//提交下单图片
	return request({
		fun: 'User_upload_orderimg',
		data
	})
}

export function upCommentImg(data) {
	//提交评论图片
	return request({
		fun: 'User_upload_commentimg',
		data
	})
}

export function getPing() {
	//商家发布任务平台服务费折扣
	return request({
		fun: 'Discount'
	})
}

export function addOrderBPay(data) {
	//商家发布任务支付
	return request({
		fun: 'Business_pay_task',
		data
	})
}

export function addOrderB(data) {
	//商家发布任务微信支付
	return request({
		fun: 'Business_release_task',
		data
	})
}

export function addOrderBY(data) {
	//商家发布任务账户余额支付
	return request({
		fun: 'Business_pay_balance',
		data
	})
}

export function orderListB(status) {
	//商家订单列表
	return request({
		fun: 'Business_task',
		data: {
			lat1: getApp().globalData.city.latitude,
			lng1: getApp().globalData.city.longitude,
			status
		}
	})
}

export function shOrder(id) {
	//商家审核订单
	return request({
		fun: 'Business_sh',
		data: {
			task_form_id: id
		}
	})
}

export function shPOrder(data) {
	//商家申请平台介入
	return request({
		fun: 'Platform_intervention',
		data
	})
} 