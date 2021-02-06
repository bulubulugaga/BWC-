// pages/user/wallet/recharge/recharge.js
// 监听input输入
import inputChange from '../../../../utils/inputChange'
import { recharge, rechargeRe } from '../../../../service/user'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    withdrawal: '',   //充值金额
  },

  inputChange(e) {
    inputChange(this, e)
  },

  submit() {
    // 充值
    const price = this.data.withdrawal;
    if(!price) {
      wx.showToast({
        title: '请输入充值金额',
        icon: 'none'
      })
      return;
    }
    recharge(price).then(res => {
      wx.requestPayment({
        timeStamp: res.data.timeStamp,
        nonceStr: res.data.nonceStr,
        package: res.data.package,
        signType: res.data.signType,
        paySign: res.data.paySign,
        success () {
          rechargeRe(price).then(releaseR => {
            if(releaseR.data == "添加记录成功") {
              // 充值成功
              wx.showToast({
                title: '已充值'
              })
              let pages = getCurrentPages();
              let beforePage = pages[pages.length - 2]; //钱包
              let beforePage2 = pages[pages.length - 3];  //我的
              beforePage._getProfile();
              beforePage2._getInfo();
              setTimeout(() =>{
                wx.navigateBack();
              }, 1500)
            }
            else {
              wx.showToast({
                title: releaseR.data,
                icon: 'none'
              })
            }
          })
        },
        fail (err) { 
          console.log('购买会员支付失败', err);
        }
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