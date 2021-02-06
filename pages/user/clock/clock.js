// pages/user/clock/clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clock: [
      {title: '中午', time: '11:00', url: ''},
      {title: '晚上', time: '17:00', url: ''}
    ],
    isShowATime: false,  //中午
    isShowMTime: false  //下午
  },

  showPopup(e) {
    // 展示弹窗
    let demo = '';
    switch(e.currentTarget.dataset.index) {
      case 0: demo = 'isShowATime'; break;
      case 1: demo = 'isShowMTime'; break;
    }
    this.setData({
      [demo]: true
    })
  },

  closePopup() {
    // 关闭弹窗
    this.setData({
      isShowATime: false,
      isShowMTime: false
    })
  },

  chooseTime(e) {
    // 选择中午时间
    let value = e.detail;
    let type = e.currentTarget.dataset.type;
    let index = 0;
    switch(type) {
      case 'isShowATime': index = 0; break;
      case 'isShowMTime': index = 1; break;
    }
    let demo = 'clock[' + index + '].time'
    this.setData({
      [demo]: value,
      isShowATime: false,
      isShowMTime: false
    })
  },

  submit() {
    // 确认时间
    let data = {
      time1: this.data.clock[0].time,
      time2: this.data.clock[1].time
    }
    console.log(data);
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