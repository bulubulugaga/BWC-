// pages/index/notice/notice.js
import { transeTime } from '../../../utils/util.js'
import { 
  getNotice, 
  getNoticeB
} from '../../../service/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '',
    meta: '公告通知',
    list: []   //公告列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.before == 'shop') {
      //商家
      this._getNoticeB();
      this.setData({
        meta: '商家公告'
      })
    }
    else {
      this._getNotice();
      this.setData({
        meta: '公告通知'
      })
    }
    this.setData({
      type: options.before
    })
  },

  _getNotice() {
    //获取用户公告
    getNotice().then(res => {
      this.setDataR(res);
    })
  },
  
  _getNoticeB() {
    //获取商家公告
    getNoticeB().then(res => {
      this.setDataR(res);
    })
  },

  setDataR(res) {
    // 修改数据格式
    res.notice.forEach(item => {
      item.create_time = transeTime(item.create_time * 1000, 'Y-M-D');
    });
    this.setData({
      list: res.notice
    });
  },

  toDetail(e) {
    //跳转详情
    const id = e.detail;
    wx.navigateTo({
      url: './detail/detail?type=' + this.data.type + '&id=' + id
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