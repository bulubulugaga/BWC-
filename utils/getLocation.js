//获取手机是否开启定位
function isPhone() {
	let is = true;
	wx.getSystemInfo({
		success: function (res) {
			if(res.locationEnabled) {
				//手机打开了定位服务
				console.log('手机设备已打开定位');
			}
			else {
				// wx.showToast({
				// 	title: '为确保准确性，请先打开手机定位服务',
				// 	icon: 'none',
				// 	duration: 2200
				// })
				// is = false;
				is = true;
			}
		},
		fail(err) {
			//获取失败，直接调用uniapp接口
			console.log('获取手机是否定位失败：' + err);
		}
	});
	return is;
}

// 获取gps坐标
export function getGPSLocation() {
	return new Promise((resolve, reject) => {
		let gps = {
			latitude: 30.5702,
			longitude: 104.06476
		};
		if(isPhone()) {
			wx.getLocation({
				type: 'gcj02',
				success: function (res) {
					resolve(res)
			  },
				fail(err) {
					console.log('getLocation接口调用失败', err);
					wx.getSetting({
						success: function(res) {
							let statu = res.authSetting;
							if (!statu['scope.userLocation']) {
								wx.showModal({
									title: '是否授权当前位置',
									content: '小程序申请获取您的地理位置，请确认授权',
									success: function(tip) {
										if (tip.confirm) {
											wx.openSetting({
												success: function(data) {
													if (data.authSetting["scope.userLocation"] === true) {
														//授权成功之后，再调用getLocation获取坐标
														wx.getLocation({
														    type: 'gcj02',
														    success: function (res) {
														        resolve(res);
														    }
														})
													} else {
														resolve(gps);
													}
												}
											})
										}
										else {
											//取消授权										
											resolve(gps);
										}
									},
									fail() {
										//接口调用失败,使用默认地址
										resolve(gps);
									}
								})
							}
						},
						fail: function(res) {
							resolve(gps);
						}
					})	
				}
			});
		}
	})
}

//gps坐标获取城市信息
//腾讯地图
import map from '../static/js/qqmap-wx-jssdk.min';
export function getCity(gps, poi) {
	let qqmapsdk = new map({
		key: getApp().globalData.mapKey //腾讯地图生成的key
	});
	if(poi) poi = 1;
	return new Promise((resolve, reject) => {
		qqmapsdk.reverseGeocoder({ //腾讯题图逆解析地址
			location: {
				latitude: gps.latitude,
				longitude: gps.longitude
			},
			get_poi: poi,
			poi_options: 'page_size=10;page_index=1',
			success(res) {
				resolve(res);
			},
			fail(err) {
				console.log(err);
			}
		})
	})
}