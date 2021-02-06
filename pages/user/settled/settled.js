// pages/user/settled/settled.js
import { isSettledPass } from '../../../service/user'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toForm() {
    //入驻表单
    isSettledPass().then(res => {
      //判断是否入驻过
      if(res.status == 1) {
        //已入驻
        wx.showToast({
          title: res.data,
          icon: 'none'
        })
        return;
      }
      wx.navigateTo({
        url: '/pages/user/settled/form/form'
      });
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