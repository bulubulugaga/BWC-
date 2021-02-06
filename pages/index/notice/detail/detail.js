// pages/index/notice/detail/detail.js
import { getNoticeDe, getNoticeDeB } from '../../../../service/user.js'
import { transeTime } from '../../../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '',
    id: '',
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type,
      id: options.id
    })
    this._getDetail();
  },

  _getDetail() {
    //获取详情
    if(this.data.type == 'shop') {
      getNoticeDeB(this.data.id).then(res => {
        this.setDataR(res);
      })
    }
    else {
      getNoticeDe(this.data.id).then(res => {
        this.setDataR(res);
      })
    }
  },

  setDataR(res) {
    // 修改数据格式
    res.data.create_time = transeTime(res.data.create_time * 1000, 'Y-M-D');
    res.data.content = res.data.content.replace(/<img/g, '<img style=\"max-width: 100%;\" ');
    this.setData({
      detail: res.data
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