// pages/user/setting/setting.js
// 上传图片
import { uploadFile } from '../../../service/uploadFile'
import { editInfo } from '../../../service/user'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      avatarUrl: '',
      nickName: '',
      gender: '',
    },
    isShow: '',
    sexs: [
      {id: 1, name: '男'},
      {id: 2, name: '女'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user = {
      avatarUrl: getApp().globalData.userInfo.avatarUrl,
      nickName: getApp().globalData.userInfo.nickName,
      gender: getApp().globalData.userInfo.gender == 1 ? '男' : '女'
    }
    this.setData({ user })
  },

  inputName(e) {
    //修改姓名
    this.setData({
      'user.nickName': e.detail.value
    })
  },

  chooseImg() {
    let _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        let Imgs = [{ path: res.tempFilePaths[0] }]
        uploadFile(Imgs).then(res1 => {
          _this.setData({ 
            'user.avatarUrl': res1[0].url 
          });
        })
      }
    })
  },

  showSex() {
    //性别弹窗
    this.setData({ isShow: true });
  },

  closePopup() {
    //关闭弹窗
    this.setData({ isShow: false });
  },

  chooseSex(e) {
    //选择经营品类
    this.setData({ 
      'user.gender': e.detail.name
    });
  },

  submit() {
    // 上传修改
    if(this.data.user.nickName == ''){
      wx.showToast({
        title: '请输入昵称',
        icon: 'none'
      })
    }
    let data = {
      avatarUrl: this.data.user.avatarUrl,
      nickName: this.data.user.nickName,
      gender: this.data.user.gender == '男'? 1 : 2
    };
    editInfo(data).then(res =>{
      if(res.data == "修改成功") {
        wx.showToast({
          title: '修改成功'
        })
        let pages = getCurrentPages();
        let bpage = pages[pages.length - 2];
        bpage._getInfo();
        setTimeout(() => {
          wx.navigateBack();
        }, 1500)
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