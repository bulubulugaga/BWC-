// pages/user/invited/invited.js
import { getInviteRu } from '../../../service/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    codeImg: '',
    person: 0,  //人数
    rule: ``
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCode();
    this._getInviteRu();
  },

  _getCode() {
    this.setData({
      name:  getApp().globalData.name,
      codeImg: getApp().globalData.logo
    });
  },

  _getInviteRu() {
    getInviteRu().then(res =>{
      this.setData({
        person: res.num,
        rule: res.invitation_rule[0].content
      });
    })
  },

  onShareAppMessage() {
    // 分享
    const id = getApp().globalData.userInfo.openid;
    return {
      path: '/pages/tabBar/index/index?id=' + id // 路径，传递参数到指定页面。
    }
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

  }
})