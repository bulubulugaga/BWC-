// pages/user/vip/vip.js
//api
import { 
  getVip, getVipB, becomeVip, becomeVipY, becomeVipB, becomeVipBY, Change_users, Change_business
} from '../../../service/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userType: 'user',
    cardTip: '*预计每月可节省998元',  //会员卡内容
    vipType: [],  //会员卡类型
    vipTip: '',  //会员说明
    vipTypeIndex: 0,  //会员卡下标
  },

  chooseType(e) {
    //切换vip卡类型
    this.setData({
      vipTypeIndex: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userType = getApp().globalData.userInfo.business_status == 0 ? 'user' : 'business';
    this.setData({ userType })
    this._getVip(userType);
  },

  _getVip(userType) {
    if(userType == 'user') {
      //用户
      getVip().then(res => {
        if(typeof(res.data) == 'string') {
          this.setData({
            vipTip: res.data
          })
        }
        else {
          this.setData({
            vipType: res.data
          })
        }
      })
    }
    else {
      //商家
      getVipB().then(res => {
        if(typeof(res.data) == 'string') {
          this.setData({
            vipTip: res.data
          })
        }
        else {
          this.setData({
            vipType: res.data
          })
        }
      })
    }
  },

  submit() {
    //开通会员
    this.selectComponent('#pay').setData({
      isShow: true
    })
  },

  choosePay(e) {
    //选择支付方式进行支付
    //基础数据
    let data = {
      card_id: this.data.vipType[this.data.vipTypeIndex].id,
      business_card_id: this.data.vipType[this.data.vipTypeIndex].id,
      price: this.data.vipType[this.data.vipTypeIndex].price,
      day: this.data.vipType[this.data.vipTypeIndex].day,
    }
    switch(e.detail.id) {
      case 1: 
        console.log('钱包支付');
        if(this.data.userType == 'user') {
          becomeVipY(data).then(res=> {
            this.toUser(res);
          })
        }
        else {
          becomeVipBY(data).then(res=> {
            this.toUser(res);
          })
        }
        break;
      case 2: 
        console.log('微信支付');
        if(this.data.userType == 'user') {
          //用户
          becomeVip(data).then(res => {
            wx.requestPayment({
              timeStamp: res.result.timeStamp,
              nonceStr: res.result.nonceStr,
              package: res.result.package,
              signType: res.result.signType,
              paySign: res.result.paySign,
              success () {
                Change_users({ vip_order_id: res.vip_order_id }).then(releaseR => {
                  this.toUser(releaseR);
                })
              },
              fail (err) { 
                console.log('购买会员支付失败', err);
              }
            })
          })
        }
        else {
          //商家
          becomeVipB(data).then(res => {
            wx.requestPayment({
              timeStamp: res.result.timeStamp,
              nonceStr: res.result.nonceStr,
              package: res.result.package,
              signType: res.result.signType,
              paySign: res.result.paySign,
              success () {
                Change_business({ vip_order_id: res.vip_order_id }).then(releaseR => {
                  this.toUser(releaseR);
                })
              },
              fail (err) { 
                console.log('购买会员支付失败', err);
              }
            })
          })
        }
        break;
    }
  },

  // 用户反馈
  toUser(res) {
    console.log(res);
    if(res.data == '购买成功') {
      wx.showToast({
        title: '已开通会员'
      })

      let pages = getCurrentPages();
      let beforePage = pages[pages.length - 2];
      beforePage._getInfo();
      setTimeout(() =>{
        wx.navigateBack();
      }, 2000)
    }
    else {
      wx.showToast({
        title: res.data,
        icon: 'none'
      })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})