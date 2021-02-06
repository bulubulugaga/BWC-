// pages/user/help/heilp.js
// 监听表单输入
import inputChange from '../../../utils/inputChange'

//api
import { 
  getHelp, subIssue
} from '../../../service/user.js'

//判断格式
import { isObjHasNull, isPhone } from '../../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarHeight: 0,
    navIndex: 0,
    navItem: [
      {title: '常见问题'},
      {title: '问题反馈'}
    ],
    
    help: [],  //帮助列表

    message: '',
    phone: '',

  },
  inputChange(e) {
    inputChange(this, e);
  },
  submit() {
    let data = {
      user_problem: this.data.message,
      phone: this.data.phone
    }
    if(isObjHasNull(data)) {
      wx.showToast({
        title: '请完整输入信息',
        icon: 'none'
      })
      return;
    }
    // if(!isPhone(data.phone)) {
    //   wx.showToast({
    //     title: '请正确输入手机号',
    //     icon: 'none'
    //   })
    //   return;
    // }
    subIssue(data).then(res => {
      wx.showToast({
        title: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navbarHeight: getApp().globalData.navbarHeight
    });

    this._getData();
  },

  chooseNav(e) {
    this.setData({
      navIndex: e.currentTarget.dataset['index']
    })
  },
  toDetail(e) {
    let index = e.currentTarget.dataset.index;
    wx.setStorage({
      key: "help",
      data: this.data.help[index],
      success: function() {
        wx.navigateTo({
          url: './helpDetail/helpDetail'
        })
      },
      fail: function() {
        wx.showToast({
          title: '获取详情失败，请稍后再试'
        })
      }
    })
    
  },


  _getData() {
    this._getHelp();
  },
  _getHelp() {
    //获取帮助列表
    getHelp().then(res => {
      this.setData({
        help: res.data
      });
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