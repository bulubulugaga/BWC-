// pages/order/detail/detail.js
import { 
  getOrderDetail,
  getOrderDetailB,
  addOrder,
  cancelOrder
} from '../../../service/order'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userType: 'user',  //用户类型
    bpage: '',  //上一个页面  shop-商家中心  user-用户
    id: '',  //商家openid
    bid: '',
    tid: '', //任务id

    info: {}, //信息

    isStatus: 0,  //用户是否下过单
    imgInfo: {}, //图片信息
    
    time: '0',  //倒计时
    timeData: {},  //自定义时间样式
    
    isShowCode: false,  //是否展示进店下单二维码
    codeImg: '/static/images/code.png',

    rule: '',  //下单规则

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
    this.setData({
      isShowCode: true
    })
  },

  previewCode(e) {
    // 预览二维码
    const code = e.target.dataset.src;
    wx.previewImage({
      current: code,
      urls: [code]
    })
  },

  closeCode() {
    //关闭二维码弹窗
    this.setData({
      isShowCode: false
    })
  },

  cancelBill() {
    // 取消订单
    const id = this.data.info.id;  //任务id
    const _this = this;
    wx.showModal({
      title: '提示',
      content: '您每天只能进行3次取消和系统30分钟自动取消的操作，否则将会禁止今日下单，确认取消吗',
      success: (result) => {
        if(result.confirm){
          cancelOrder({ task_id: id }).then(res => {
            wx.showToast({
              title: res.data,
              icon: 'none'
            })
            setTimeout(() => {
              _this._getData();
            }, 1600)
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  addOrderImg(e) {
    let tid = e.currentTarget.dataset.tid;
    //提交下单图片
    getApp()._jump('/pages/order/orderImg/orderImg?id='+this.data.info.id+'&tid='+tid);
  },

  toComment() {
    //评论
    getApp()._jump('/pages/order/comment/comment?id='+this.data.imgInfo.id);
  },

  platform() {
    //平台介入
    wx.navigateTo({
      url: '/pages/order/platform/platform'
    })
  },

  preveImg(e) {
    // 预览图片
    wx.previewImage({
      urls: e.currentTarget.dataset.src
    })
  },

  examine() {
    //审核
    this.setData({
      'info.status': 7
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
      bid: options.bid,
      bpage
    })

    this._getData();
  },

  _getData() {
    this._getOrderDetail();
  },
  _getOrderDetail() {
    //获取详情
    if(this.data.bpage == 'user') {
      getOrderDetail(this.data.id, this.data.tid, this.data.bid).then(res => {
        // console.log(res);
        //计算剩余结束时间
        //结束时间
        let time1 = res.task_list.end_time * 1000;  			
        // 倒计时
        let time2 = time1 - new Date().getTime();
  
        if(res.task_form_list) {
          if(res.task_form_list.order_img) {
            res.task_form_list.order_img = res.task_form_list.order_img.split(',');
          }
          if(res.task_form_list.comment_img) {
            res.task_form_list.comment_img = res.task_form_list.comment_img.split(',');
          }
        }
  
        this.setData({
          info: res.task_list,
          isStatus: res.status === 0 ? true : false,
          imgInfo: res.task_form_list,
          time: time2,
          rule: res.activity_rule
        });
  
        if(time2 <= 0) {
          //剩余时间为0
          this.setData({
            'info.status': -2
          });
        }
  
      })
    }
    else {
      let data = {
        business_openid: this.data.id,
        task_id: this.data.tid
      }
      getOrderDetailB(data).then(res => {
        this.setData({
          infoB: res.business,
          infoT: res.task_list,
          infoF: res.task_form_list
        })
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