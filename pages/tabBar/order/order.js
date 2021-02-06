// pages/tabBar/order/order.js
import { getOrder } from '../../../service/order'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarHeight: 0,  //导航栏高度
    topType: [  //分类
      {name: '霸王餐', type: 1},
      {name: '返利餐', type: 2}
    ],
    topTypeIndex: 0,  //分类下标
    orderType: [  //订单分类
      {name: '待上传', num: 0, list: []},
      {name: '待审核', num: 0, list: []},
      {name: '待发放', num: 0, list: []},
      {name: '已完成', num: 0, list: []},
      {name: '已失效', num: 0, list: []}
    ],
    orderTypeIndex: 0,  //订单分类下标
    list: [],  //展示的订单列表
    order: [],  //获取到的订单列表
    
  },

  chooseType(e) {
    //选择霸王餐或者返利餐
    this.setData({
      topTypeIndex: e.currentTarget.dataset['index']
    })
    this._getOrder();
  },
  chooseOrderType(e) {
    //选择订单分类
    this.setData({
      orderTypeIndex: e.currentTarget.dataset['index']
    })
    this.pin();
  },

  pin() {
    // 拼接订单数据
    let list = this.data.orderType[this.data.orderTypeIndex].list;
    list.forEach(item => {
      item['img'] = item.business.img;
      item['business_name'] = item.business.business_name;
      item['juli'] = item.business.juli;
      item['business_time'] = item.business.business_time;
      item['stateName'] = this.data.orderType[this.data.orderTypeIndex].name;
      if(!item.task[0]) {
        let task = item.task;
        item.task = [task];
      }
    });
    this.setData({ list })
    // console.log(this.data.list);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let meniu = wx.getMenuButtonBoundingClientRect();
    this.setData({
      navbarHeight: meniu.height + meniu.top + 8
    });

    this._getOrder();
  },

  _getOrder() {
    let data = {
      order_type: this.data.topTypeIndex + 1
    }
    getOrder(data).then(res => {
      let all = res.all_list;
      let waitup = res.wait_uploaded_order_list.concat(res.wait_uploaded_comment_list);
      let waitsh = res.wait_sh_state;
      let waitfa = res.wait_payment;
      let success = res.already_payment;
      let shi = res.already_invalid;
      this.setData({
        orderType: [  //订单分类
          // {name: '全部', num: all.length, list: all},
          {name: '待上传', num: waitup.length, list: waitup},
          {name: '待审核', num: waitsh.length, list: waitsh},
          {name: '待发放', num: waitfa.length, list: waitfa},
          {name: '已完成', num: success.length, list: success},
          {name: '已失效', num: shi.length, list: shi}
        ],
      })
      this.pin();
    })
  },

  onTabItemTap(item) {
    //刷新页面
    this._getOrder();
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