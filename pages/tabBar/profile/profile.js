// pages/tabBar/profile/profile.js
import { loginH } from '../../../service/index.js'
import { getProfile } from '../../../service/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,

    navHeight: 0,
    user: {
      avatarUrl: '/static/images/tie.png',
      nickName: '小满时节',
      vip: '您还不是会员，请购买',
      money: 0
    },

    box1: [
      // {img: '/static/images/userTool/icon02.png', title: '我的订单', linkType: 'switchTab', url: '/pages/tabBar/order/order'},
      {img: '/static/images/userTool/icon03.png', title: '会员中心', url: '/pages/user/vip/vip'},
      // {img: '/static/images/userTool/icon04.png', title: '优惠券', url: '/pages/user/coupon/coupon'},
      {img: '/static/images/userTool/icon05.png', title: '公告通知', url: '/pages/index/notice/notice'}
    ],
    box2: [
      {img: '/static/images/userTool/icon06.png', title: '邀请有奖', url: '/pages/user/invited/invited', isShow: true},
      {img: '/static/images/userTool/icon07.png', title: '商家入驻', url: '/pages/user/settled/settled', isShow: true},
      {img: '/static/images/userTool/icon08.png', title: '区域代理', url: '/pages/user/agent/agent', isShow: true}
    ],
    box3: [
      {img: '/static/images/userTool/icon09.png', title: '在线客服', url: '/pages/user/serve/serve'},
      {img: '/static/images/userTool/icon10.png', title: '帮助中心', url: '/pages/user/help/help'},
      // {img: '/static/images/userTool/icon10.png', title: '投诉', url: '/pages/user/complaint/complaint'},
      {img: '/static/images/userTool/icon11.png', title: '法律声明', url: '/pages/user/law/law'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let a = wx.getMenuButtonBoundingClientRect();
    this.setData({
      navHeight: a.height
    });

    this._getLogin();
    this._getInfo();
  },
  
  showLogin() {
    //点击登录按钮
    getApp().globalData.isShowLogin = true;
  },

  toSetting() {
    getApp()._jump('/pages/user/setting/setting');
    // getApp().globalData.isShowLogin = true;
  },

  jump(e) {
    //跳转判断
    let type = e.currentTarget.dataset.type;
    let url = e.currentTarget.dataset.url;
    getApp()._jump({type, url});
  },

  toShop() {
    //商家中心
    if(getApp().globalData.userInfo && getApp().globalData.userInfo.business_status == 0) {
      wx.showToast({
        title: '您暂时还不是商家，请先入驻，等待平台审核通过后即可成为商家',
        icon: 'none'
      })
      return;
    }
    wx.navigateTo({
      url: '/pages/shop/shop'
    })
  },

  _getLogin() {
    this.setData({
      isLogin: getApp().globalData.isLogin
    })
  },

  _getInfo() {
    //获取个人信息
    getProfile().then(res => {
      this.setData({
        user: res.data
      })
      //重新将信息存入全局(商家入住信息不一致，以此为准)
      getApp().globalData.userInfo = res.data
      if(res.data.business_status) {
        this.setData({
          'box2[1].isShow': false
        })
      }
    })
  },
  
  onTabItemTap(item) {
    //刷新页面
    //未防止用户先点击此页面，再去下单页登录，造成登录信息不一致，则放入点击刷新
    this._getLogin();
    this._getInfo();
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