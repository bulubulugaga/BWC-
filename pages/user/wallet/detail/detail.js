// pages/user/wallet/detail/detail.js
import { rechargeDe } from '../../../../service/user'
import { transeTime } from '../../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,  //页面类型 0-提现 1-充值
    meta: '提现明细',  //导航标题
    list: []  //列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type
    })
    this._getData();
  },

  _getData() {
    this._getMeta();
    this._getList();
  },

  _getList() {
    if(this.data.type) {
      // 充值明细
      rechargeDe().then(res => {
        res.data.forEach(item =>{
          item.create_time =  transeTime(item.create_time * 1000, 'Y-M-D');
        })
        this.setData({
          list: res.data
        })
      })
    }
    else {
      // 提现
    }
  },

  _getMeta() {
    // 设置导航
    let meta = this.data.type == 0 ? '提现明细' : '充值明细';
    this.setData({ meta });
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