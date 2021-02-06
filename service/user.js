//我的
import request from './network.js'

export function getHelp() {
	//获取帮助
	return request({
		fun: 'Select_problem',
		method: 'POST'
	})
}

export function getProfile() {
	//获取个人信息
	return request({
		fun: 'My_personal',
		method: 'POST'
	})
}

export function getLaw() {
	//获取法律
	return request({
		fun: 'Law',
		method: 'POST'
	})
}

export function subIssue(data) {
	//提交问题
	return request({
		fun: 'Submit_problem',
		data,
		method: 'POST'
	})
}

export function getVip() {
	//会员中心
	return request({
		fun: 'Vip_list'
	})
}


export function getVipB() {
	//商家会员中心
	return request({
		fun: 'Business_vip_list'
	})
}

export function becomeVip(data) {
	//用户购买会员
	return request({
		fun: 'Buy_vip_order',
		data
	})
}

export function becomeVipY(data) {
	//用户购买会员余额
	return request({
		fun: 'Buy_vip_order_balance',
		data
	})
}

export function becomeVipB(data) {
	//商家购买会员
	return request({
		fun: 'Business_buy_vip_order',
		data
	})
}

export function becomeVipBY(data) {
	//商家购买会员余额
	return request({
		fun: 'Business_buy_vip_order_balance',
		data
	})
}

export function Change_users(data) {
	//用户购买会员
	return request({
		fun: 'Change_users',
		data
	})
}

export function Change_business(data) {
	//商家购买会员
	return request({
		fun: 'Change_business',
		data
	})
}

export function shopSettled(data) {
	//商家入驻
	return request({
		fun: 'Business_add',
		data
	})
}

export function addSettled(data) {
	//商家添加其他平台店铺
	return request({
		fun: 'Add_orther_business',
		data
	})
}

export function shopEdit(data) {
	//修改信息
	return request({
		fun: 'Edit_business',
		data
	})
}

export function isSettledPass() {
	//商家入驻信息是否审核通过
	return request({
		fun: 'Judge_business'
	})
}

export function getInfoB() {
	//获取商家入驻信息
	return request({
		fun: 'Business_self'
	})
}

export function getNotice() {
	//获取用户公告
	return request({
		fun: 'Users_notice'
	})
}

export function getNoticeB() {
	//获取商家公告
	return request({
		fun: 'Business_notice'
	})
}

export function getNoticeDe(id) {
	//获取用户公告详情
	return request({
		fun: 'Users_notice_details',
		data: {
			id
		}
	})
}

export function getNoticeDeB(id) {
	//获取商家公告详情
	return request({
		fun: 'Business_notice_details',
		data: {
			id
		}
	})
}

export function editInfo(data) {
	//修改用户信息
	return request({
		fun: 'User_edit_data',
		data
	})
}

export function applyAgent(data) {
	//提交区域代理信息
	return request({
		fun: 'Apply_agent',
		data
	})
}

export function recharge(price) {
	//充值支付
	return request({
		fun: 'Recharge_balance_pay',
		data: {
			price
		}
	})
}

export function rechargeRe(price) {
	//充值
	return request({
		fun: 'Recharge_balance',
		data: {
			price
		}
	})
}

export function rechargeDe() {
	//充值明细
	return request({
		fun: 'Select_users_recharge'
	})
}

export function getInviteRu() {
	//获取邀请规则
	return request({
		fun: 'Invitation_rule'
	})
}
