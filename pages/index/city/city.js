// pages/index/city/city.js
//静态城市文件列表
import citys from '../../../static/js/city'
// 监听表单输入
import inputChange from '../../../utils/inputChange'
//获取定位
import { getGPSLocation, getCity } from '../../../utils/getLocation'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',  //搜索关键字
    position: '定位城市',
    cityList: [],  //城市列表（备份用于搜索）
    list: [],  //展示城市列表
  },

  inputChange(e) {
    inputChange(this, e);
  },

  searchKey() {
    //搜索城市
    let list = [];  //城市列表
    let ini = [];  //存放已有的城市首字母，减少循环
    const key = this.data.key;

    //关键字为空
    if(key == '') {
      this.setData({
        list: this.data.cityList
      })
      return;
    }

    //循环城市备份
    this.data.cityList.forEach(i => {
      //循环城市
      i.citys.forEach(j => {
        // 有搜索结果
        if(j.fullname.indexOf(key) != -1) {
          //判断首字母位置
          let k = ini.indexOf(i.initial);
          if(k == -1) {
            //未添加过此首字母城市
            ini.push(i.initial);
            list.push({
              initial: i.initial,
              initialS: i.initialS,
              citys: [j]
            })
          }
          else {
            //已有此首字母，加在首字母城市列表里
            list[k].citys.push(j);
          }
        }
      })
    })
    this.setData({
      list
    })
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
        })
      })
    })
  },

  chooseCity(e) {
    //选择城市
    let city = e.currentTarget.dataset.row;
    let a = {};
    if(city.location) {
      //选择城市列表城市
      a = {
        latitude: city.location.lat,
        longitude: city.location.lng,
        name: city.fullname,
        city: city.fullname
      }
    }
    else {
      a = city;
      a.name = a.city;
    }
    getApp().globalData.city = a;

    // 获取周围地点
    // 获取城市周围地点信息
    getCity(a, 1).then(city => {
      getApp().globalData.locationPoi = city.result.pois;

      //刷新前面页面数据
      let pages = getCurrentPages();
      let beforePage = pages[pages.length - 2];
      let beforePage2 = pages[pages.length - 3];
      beforePage.onLoad();
      beforePage2.setData({area: a});
      beforePage2._getData();

      //返回
      wx.navigateBack();

    })
  },

  _getCity() {
    //获取城市列表

    //拼凑字母列表，预留城市数组
    let list = [];
    for(let i = 65; i < 91; i++) {
      list.push({
        initial: String.fromCharCode(i),
        initialS: String.fromCharCode(i + 32),
        citys: []
      })
    }
    // console.log(list);
    
    // 静态城市文件
    // console.log(citys);
    // 首字母对比
    citys.forEach(city => {
      list.forEach((init, index) => {
        if(city.pinyin[0].charAt(0) == init.initialS) {
          list[index].citys.push(city);
        }
      })
    })
    // console.log(list);
    this.setData({
      cityList: list,
      list
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      position: getApp().globalData.location,
    });
    this._getCity();
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