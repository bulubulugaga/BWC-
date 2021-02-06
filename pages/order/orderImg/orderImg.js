// pages/order/orderImg/orderImg.js
import { uploadFile } from '../../../service/uploadFile'
import { upOrderImg } from '../../../service/order'
import { isObjHasNull } from '../../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    tid: '',  //存在tid为修改
    orderId: '',
    price: '',
    fileList: [],  //图片列表
  },

  afterRead(event) {
    //预览
    const { file } = event.detail;
    let data = [];
    if(!file[0]) {
      //部分机型可能不支持多图，则会传对象，转为数组
      data.push({path: file.thumb});
    }
    else {
      file.forEach(item => {
        data.push({path: item.thumb});
      })
    }
    uploadFile(data).then(res => {
      //上传图片更新预览
      // console.log(res);
      this.setData({ 
        fileList: this.data.fileList.concat(res)
      });
    })

  },

  deleteImg(e) {
    //删除
    const index = e.detail.index;
    const { fileList = [] } = this.data;
    fileList.splice(index, 1);
    this.setData({ fileList })
  },

  submit() {
    //提交
    let order_img = '';
    let order_img_arr = [];
    this.data.fileList.forEach(item => {
      order_img_arr.push(item.url);
    })
    order_img = order_img_arr.join(',');
    let data = {
      task_id: this.data.id,
      order_img,
      order_num: this.data.orderId,
      order_price: this.data.price
    }
    if(this.data.tid != 'undefined') {
      data['task_form_id'] = this.data.tid;
    }
    if(isObjHasNull(data)) {
      wx.showToast({
        title: '请完整填写信息',
        icon: 'none'
      });
      return;
    }
    upOrderImg(data).then(res => {
      if(res.code == 200) {
        wx.showToast({
          title: '已提交'
        })
        let pages = getCurrentPages();
        let beforePage = pages[pages.length - 2];
        beforePage._getData();
        setTimeout(() => {
          wx.navigateBack();
        }, 1200)
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      tid: options.tid
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