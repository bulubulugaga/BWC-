// pages/order/platform/platform.js
import { shPOrder } from '../../../service/order'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    num: '',
    msg: ''
  },

  input(e) {
    this.setData({
      msg: e.detail.value
    })
  },

  submit() {
    if(!this.data.msg) {
      wx.showToast({
        title: '请输入平台介入原因',
        icon: 'none'
      });
      return;
    }

    let data = {
      task_form_id: this.data.id,
      intervention_num: this.data.num,
      platform_intervention: this.data.msg
    }
    shPOrder(data).then(res => {
      if(res.data == "申请平台介入成功") {
        wx.showToast({
          title: res.data
        })
        let pages = getCurrentPages();
        let beforePage = pages[pages.length - 2];
        beforePage._getData();
        setTimeout(() => {
          wx.navigateBack();
        }, 1200)
      }
      else {
        wx.showToast({
          title: res.data,
          icon: 'none'
        })
      }
    })

   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      num: options.num
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