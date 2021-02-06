// pages/shop/shop.js
import { orderListB } from '../../service/order'
import { isSettledPass, getNoticeB } from '../../service/user'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeNum: 0, //公告数量
    nav: [  //商品选项
      // {title: '全部', num: 0},
      {title: '进行中', num: 0},
      {title: '已结束', num: 0}
    ],
    navIndex: 0,  //选项下标

    list: []  //订单列表

  },

  clickNav(e) {
    this.setData({
      navIndex: e.currentTarget.dataset['index']
    })
    this._getOrder();
  },

  toRelease() {
    //发布任务

    isSettledPass().then(res => {
      //判断是否修改信息
      if(res.status == 1) {
        //等待审核
        wx.showToast({
          title: '您提交的商家信息还在审核中，暂时不能发布任务',
          icon: 'none'
        })
        return;
      }
      wx.navigateTo({
        url: '/pages/shop/release/release'
      })
    })
  },

  editShop() {
    //修改资料

    //如果有进行中任务，不能修改
    // if(this.data.nav[0].num > 0) {
    //   wx.showToast({
    //     title: '您还有进行中的任务，暂时不能修改信息',
    //     icon: 'none'
    //   })
    //   return;
    // }

    isSettledPass().then(res => {
      //判断是否修改信息
      if(res.status == 1) {
        //等待审核
        wx.showToast({
          title: '您提交的商家信息还在审核中，请耐心等待',
          icon: 'none'
        })
        return;
      }
      wx.navigateTo({
        url: '/pages/user/settled/form/form?before=edit'
      })
    })
  },

  toNotice() {
    //公告
    wx.navigateTo({
      url: '/pages/index/notice/notice?before=shop'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      this._getData();
    }, 2000)
  },

  _getData() {
    this._getOrder();
    this._getNotice();
  },

  _getOrder() {
    orderListB(this.data.navIndex).then(res => {
      this.setData({
        list: res.business_task_list,
        nav: [
          // {title: '全部', num: res.num.all_num},
          {title: '进行中', num: res.num.conduct_num},
          {title: '已结束', num: res.num.end_num}
        ]
      })
    })
  },

  _getNotice() {
    getNoticeB().then(res => {
      this.setData({
        noticeNum: res.num
      });
    })
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