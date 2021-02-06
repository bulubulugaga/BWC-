// pages/order/detail/detail.js
import { 
  getOrderDetail,
  getOrderDetailB,
  addOrder,
  shOrder
} from '../../../service/order'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userType: 'user',  //用户类型
    bpage: '',  //上一个页面  shop-商家中心  user-用户
    id: '',  //商家openid
    tid: '', //任务id
    
    infoB: {}, //商家信息
    infoT: {}, //任务信息
    infoF: {}, //表单信息

    isStatus: 0,  //用户是否下过单
    imgInfo: {}, //图片信息
    
    time: '0',  //倒计时
    timeData: {},  //自定义时间样式
    
    isShowCode: false,  //是否展示进店下单二维码
    codeImg: '/static/images/code.png',

    rule: '', //规则
    type: ''  //订单状态

  },

  changeUser() {
    //测试切换用户
    let userType = this.data.userType === 'user' ? 'shop' : 'user';
    this.setData({ userType });
  },

  changeTime(e) {
    //倒计时
    this.setData({
      timeData: e.detail,
    });
  },

  grabbing() {
    //立即抢单
    if(!getApp().globalData.isLogin) {
      getApp().globalData.isShowLogin = true;
      return;
    }
    //抢单
    const data = {
      task_id: this.data.info.id,
      task_type: this.data.info.task_type
    }
    addOrder(data).then(res =>{
      if(res.data == 1) {
        //抢单成功
        wx.showToast({
          title: '已抢单'
        })
        this._getData();
      }
      else {
        wx.showToast({
          title: res.data,
          icon: 'none'
        })
      }
    })
  },

  showCode() {
    //立即下单展示二维码进店
    console.log('a');
    this.setData({
      isShowCode: true
    })
  },

  closeCode() {
    //关闭二维码弹窗
    this.setData({
      isShowCode: false
    })
  },

  addOrderImg() {
    //提交下单图片
    getApp()._jump('/pages/order/orderImg/orderImg?id='+this.data.info.id);
  },

  toComment() {
    //评论
    getApp()._jump('/pages/order/comment/comment?id='+this.data.imgInfo.id);
  },

  platform(e) {
    //平台介入
    let id = e.currentTarget.dataset.id;
    let num = e.currentTarget.dataset.num;
    if(num == 2) {
      wx.showToast({
        title: '您已经申请了两次平台介入，不能再申请了',
        icon: 'none'
      });
      return;
    }
    wx.showModal({
      title: '提示',
      content: '每张订单只能申请两次平台介入，当前是第' + (Number(num) + 1) + '次，确认继续吗？',
      success: (result) => {
        if(result.confirm){
          wx.navigateTo({
            url: '/pages/order/platform/platform?id=' + id + '&num=' + num
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  examine(e) {
    let id = e.currentTarget.dataset.id;
    //审核
    wx.showModal({
      title: '提示',
      content: '确认审核此订单通过吗？',
      success: (result) => {
        if(result.confirm){
          shOrder(id).then(res =>{
            if(res.data == '通过成功') {
              wx.showToast({
                title: res.data
              })
              let pages = getCurrentPages();
              let bPage = pages[pages.length - 1];
              bPage._getData();
            }
          })
        }
        else {
          wx.showToast({
            title: res.data,
            icon: 'none'
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  preveImg(e) {
    // 预览图片
    wx.previewImage({
      urls: e.currentTarget.dataset.src
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //判断是否从商家中心进入
    let pages = getCurrentPages();
    let beforePage = pages[pages.length - 2];
    let bpage = 'user';
    if(beforePage.route == "pages/shop/shop") {
      bpage = 'shop';
    }
    
    this.setData({
      id: options.id,
      tid: options.tid,
      type: options.type,
      bpage
    })

    this._getData();
  },

  _getData() {
    this._getOrderDetail();
  },
  _getOrderDetail() {
    //获取详情
    let data = {
      business_openid: this.data.id,
      task_id: this.data.tid
    }
    getOrderDetailB(data).then(res => {
      

        //结束时间
        let time1 = res.task_list.end_time * 1000;  			
        // 倒计时
        let time2 = time1 - new Date().getTime();
  
        if(res.task_form_list) {
        res.task_form_list.forEach(item =>{
          if(item.order_img) {
            item.order_img = item.order_img.split(',');
          }
          if(item.comment_img) {
            item.comment_img = item.comment_img.split(',');
          }
        })
        }

        this.setData({
        infoB: res.business,
        infoT: res.task_list,
        infoF: res.task_form_list,
        time: time2,
        rule: res.activity_rule
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