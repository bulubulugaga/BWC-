// pages/user/wallet/wallet.js
// 监听input输入
import inputChange from '../../../utils/inputChange'
import { getProfile } from '../../../service/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 0,  //余额
    withdrawal: '',   //提现金额
    isShowRe: false,  //是否显示充值
  },

  inputChange(e) {
    inputChange(this, e)
  },

  submit() {
    // 提现
    console.log(this.data.withdrawal);
  },

  toOther(e) {
    const src = e.currentTarget.dataset.src;
    if(src == './detail/detail?type=0') {
      wx.showToast({
        title: '暂未开通提现功能，敬请期待。',
        icon: 'none',
        duration: 3000
      })
      return;
    }
    //跳转页面
    wx.navigateTo({
      url: src
    })
  },

  _getProfile(){
    // 获取信息
    getProfile().then(res => {
      this.setData({
        money: res.data.balance
      })
      if(res.data.business_status) {
        this.setData({
          isShowRe: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getProfile();
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