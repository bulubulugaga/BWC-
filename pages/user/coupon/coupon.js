// pages/user/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: [  //商品选项
      {title: '未使用', status: 1},
      {title: '已使用', status: 2}
    ],
    navIndex: 0,  //选项下标

    coupons: [
      {id: 0, title: '霸王餐接单券', introduce: '非会员用户接单时使用', day: 30, status: 1},
      {id: 0, title: '霸王餐接单券', introduce: '非会员用户接单时使用', day: 30, status: 2}
    ]
  },

  clickNav(e) {
    this.setData({
      navIndex: e.currentTarget.dataset['index']
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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