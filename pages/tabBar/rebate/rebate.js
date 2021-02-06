// pages/tabBar/rebate/rebate.js
import { 
  getChooseShop, getDistriShop, getAdvertise
} from '../../../service/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '', //小程序名
    area: {},  //地区
    advertise: '',  //公告
    hotShop: [  //热门店铺
     
    ],
    business: [  //商家   
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      area: getApp().globalData.city,
      name: getApp().globalData.name
    })
    let that = this;
    getApp().watch(that, that.watchBack, 'city');
    this._getAdvertise();
    this._getData();
  },

  onTabItemTap(item) {
    //刷新页面
    this.setData({
      area: getApp().globalData.city
    })
    this._getData();
  },

  watchBack: function (that, city){
    that.setData({
      area: city
    })
    this._getData();
  },

  _getData() {
    //数据
    this._getHotShop();
    this._getDistriShop();
  },

  _getAdvertise() {
    getAdvertise().then(res => {
      if(!res.data) {
        this.setData({
          advertise: res.fanli.reception_notice
        })
        return;
      }
      res.data.forEach(item => {
        if(item.type == 2) {
          this.setData({
            advertise: item.reception_notice
          })
        }
      })
    })
  },

  changeOnlyAble() {
    // 切换是否选择可接单商家
    this._getDistriShop();
  },

  _getHotShop() {
    //获取优选好店
    getChooseShop().then(res => {
      this.setData({
        hotShop: res.data
      })
    })
  },

  _getDistriShop() {
    let onlyAble = this.selectComponent('#bg').data.onlyAble;
    let status = onlyAble ? 1 : 0;
    getDistriShop(status).then(res => {
      this.setData({
        business: Object.values(res.data)
      })
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