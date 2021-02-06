// pages/index/search/search.js
// 监听表单输入
import inputChange from '../../../utils/inputChange'
import { getSearchKey } from '../../../service/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    onlyAble: false,   //仅商家展示是按钮样式
    list: []  //订单列表 
  },

  inputChange(e) {
    inputChange(this, e);
  },

  changeOnlyAble() {
    //切换是否仅可接单商家
    let onlyAble = !this.data.onlyAble;
    this.setData({
      onlyAble
    })
    this._getSearchKey();
  },

  searchKey() {
    this._getSearchKey();
    
  },

  _getSearchKey() {
    let status = this.data.onlyAble ? 1 : 0;
    getSearchKey(this.data.key, status).then(res => {
      this.setData({
        list: res.business_list
      })
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