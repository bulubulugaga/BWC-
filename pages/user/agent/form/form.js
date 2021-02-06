// pages/user/agent/form/form.js
//引入城市
import cityStatic from '../../../../static/js/citys'
//判断格式
import { isObjHasNull,isPhone } from '../../../../utils/util.js'
//api
import { applyAgent } from '../../../../service/user.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //输入框样式
    fieldStyle: `font-size: 30rpx;
                 height: 90rpx;
                 align-items: center;
                 background-color: rgba(0, 0, 0, 0);`,

    //表单
    name: '',
    phone: '',
    city: '',

    citys: [],  //城市列表
    isShowCity: false,
    proviceIndex: 0,
    cityIndex: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCity();
  },

  _getCity() {
    //初始化城市列表
    this.setData({
      citys: cityStatic
    })
  },

  showPopup() {
    this.setData({
      isShowCity: true
    })
  },

  closePopup() {
    this.setData({
      isShowCity: false
    })
  },

  chooseProvice(e) {
    //选择省份
    this.setData({
      proviceIndex: e.currentTarget.dataset.index,
      cityIndex: 0
    })
  },

  chooseCity(e) {
    //选择城市
    this.setData({
      cityIndex: e.currentTarget.dataset.index
    })
  },

  sureCity() {
    //确认选择城市
    let provice = this.data.citys[this.data.proviceIndex].name;
    let city = this.data.citys[this.data.proviceIndex].child[this.data.cityIndex].name;
    this.setData({
      city: provice + city,
      isShowCity: false
    })
  },

  submit() {
    let data = {
      name: this.data.name,
      phone: this.data.phone,
      agent_region: this.data.city
    };
    if(isObjHasNull(data)) {
      wx.showToast({
        title: '请完整填写信息',
        icon: 'none'
      });
      return;
    }
    if(!isPhone(data.phone)) {
      wx.showToast({
        title: '您输入的手机号格式有误',
        icon: 'none'
      });
      return;
    }
    applyAgent(data).then(res =>{
      console.log(res);
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