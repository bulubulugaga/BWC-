// pages/index/area/area.js
import { getGPSLocation, getCity } from '../../../utils/getLocation'
// 监听表单输入
import inputChange from '../../../utils/inputChange'
//腾讯地图
import map from '../../../static/js/qqmap-wx-jssdk.min';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    area: {},
    position: {},
    nearby: []
  },

  inputChange(e) {
    inputChange(this, e);
  },

  toCity() {
    wx.navigateTo({
      url: '/pages/index/city/city'
    })
  },

  searchKey() {
    // 搜索城市
    wx.showLoading();
    let _this = this;
    let qqmapsdk = new map({
      key: getApp().globalData.mapKey //腾讯地图生成的key
    });
    qqmapsdk.search({
      keyword: this.data.key,  //搜索关键词
      region: this.data.area.name,  //设置周边搜索中心点
      auto_extend: 0,  //按选择地搜索，不扩大范围
      success: function (res) { //搜索成功后的回调
        _this.setData({
          nearby: res.data
        })
      },
      fail: function (res) {
        console.log('获取失败', res);
      },
      complete: function() {
        wx.hideLoading();
      }
    });
  },

  chooseCity(e) {
    let city = e.currentTarget.dataset.row;
    let a = {};
    if(city.location) {
      //选择城市列表城市
      a = {
        latitude: city.location.lat,
        longitude: city.location.lng,
        name: city.title,
        city: city.ad_info.city
      }
    }
    else {
      a = city;
    }
    getApp().globalData.city = a;

    //如果选择了附近地址，将搜索地址存入
    getApp().globalData.locationPoi = this.data.nearby;

    //刷新前面页面数据
    let pages = getCurrentPages();
    let beforePage = pages[pages.length - 2];
    beforePage.setData({area: a});
    beforePage._getData();

    //返回
    wx.navigateBack();
  },

  newLocation() {
    //重新定位
    console.log('重新定位');
    getGPSLocation().then(gps => {
      let data = {
        latitude: gps.latitude,
        longitude: gps.longitude,
      }
      getCity(data, 1).then(city => {
        // console.log(city);
        let a = {
          latitude: gps.latitude,
          longitude: gps.longitude,
          name: city.result.formatted_addresses.recommend,
          city: city.result.address_component.city
        }
        getApp().globalData.location = a;
        getApp().globalData.locationPoi = city.result.pois;
        this.setData({
          position: a,
          nearby: city.result.pois
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      area: getApp().globalData.city,
      position: getApp().globalData.location,
      nearby: getApp().globalData.locationPoi
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})