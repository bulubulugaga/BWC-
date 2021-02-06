// pages/shop/release/release.js
//computed能力
const computedBehavior = require('miniprogram-computed');
//api
import { addOrderBPay, addOrderB, getPing, addOrderBY } from '../../../service/order'
//判断格式
import { isObjHasNull, transeTime } from '../../../utils/util.js'
Page({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    //输入框样式
    fieldStyle: `font-size: 30rpx;
                 height: 90rpx;
                 align-items: center;
                 background-color: rgba(0, 0, 0, 0);`,
    discount: [], //服务费折扣

    //平台选择
    platforms: [  
      {type: 1, img: '/static/images/shop/re_m.png', is: false, isShow: false},
      {type: 2, img: '/static/images/shop/re_e.png', is: false, isShow: false}
    ],
    platformsIndex: 0,
    serPricePre: '',

    //表单内容
    isShowType: false,
    types: [
      { id: 1, name: '霸王餐'},
      { id: 2, name: '返利餐'}
    ],
    type: '霸王餐',
    typeId: 1,
    num: '',
    price: '',
    isShowZhe: false,
    zhe: 5,  //折扣
    zheId: '',
    zhes:  [
      { id: 1, name: '5'},
      { id: 2, name: '4'},
      { id: 3, name: '3'},
      { id: 4, name: '2'},
      { id: 5, name: '1'},
    ],
    isShowTime: false,
    minDate: new Date().getTime(),
    maxDate: new Date(2025, 10, 1).getTime(),
    currentDate: new Date().getTime(),
    endTime: '',
    endTimeDis: '',  //展示的结束时间
    isshowDis: false,
    distris: [],
    dis: '1公里',
    disId: '',
    remark: '',


    // 提交数据
    sdata: {}
  },

  computed: {
    serPrice(data) {
    //   if(data.discount[0]) {
    //     if(data.typeId == 1) {
          return data.num * Number(data.serPricePre)
      //   } 
      //   else {
      //     return data.num * data.price * data.discount[1].discount / 100
      //   }
      // }
    },
    sumPrice(data) {
      return data.num * data.price + Number(data.serPrice)
    },
  },

  chooseP(e) {
    //选择平台
    const index = e.currentTarget.dataset.index;
    const demo='platforms['+index+'].is';
    this.setData({
      [demo]: !this.data.platforms[index].is
    })
  },

  showPopup(e) {
    //展示弹窗
    let type = e.currentTarget.dataset.type;
    this.setData({ [type]: true });
  },

  closePopup(e) {
    // 关闭弹窗
    let type = e.currentTarget.dataset.type;
    this.setData({ [type]: false });
  },

  chooseType(e) {
    //选择任务类型
    let type = e.currentTarget.dataset.typen; 
    let typeId = e.currentTarget.dataset.typeid; 
    this.setData({ 
      [type]: e.detail.name,
      [typeId]: e.detail.id 
    });
  },

  chooseTime(e) {
    //选择时间
    console.log(e);
    this.setData({
      endTime: e.detail,
      endTimeDis: transeTime(e.detail, 'Y-M-D H:M:S'),
      isShowTime: false
    });
  },

  inputRemark(e) {
    this.setData({
      remark: e.detail.value
    })
  },

  submit() {
    //提交选择支付方式
    if(this.data.platforms[0].is && this.data.platforms[1].is && (this.data.num % 2 !=0)) {
      // 选择了两个平台
      wx.showToast({
        title: '您当前选择了两个平台，任务数量请输入双数。',
        icon: 'none',
        duration: 3000
      });
      return;
    }

    // 表单数据
    let data = {
      mt_status: this.data.platforms[0].is == true ? 1 : 0,
      elm_status: this.data.platforms[1].is == true ? 1 : 0,    
      task_type: this.data.typeId,
      task_num: this.data.num,
      task_one_price: this.data.price,
      rebate_discount: this.data.zhe,
      end_time: this.data.endTime / 1000,
      distance: this.data.dis,
      task_remarks: this.data.remark,
      // serPrice: this.data.serPrice,
      // sumPrice: this.data.sumPrice,
      task_order_id: '1'
    }
    if(isObjHasNull(data)) {
      wx.showToast({
        title: '请完整填入信息',
        icon: 'none'
      });
      return;
    }
    this.setData({
      sdata: data
    })
    this.selectComponent('#pay').setData({
      isShow: true
    })
  },

  choosePay(e) {
    //选择支付方式进行支付
    //基础数据
    let data = this.data.sdata;
    // 霸王餐折扣为10
    if(data.task_type == 1) {
      data.rebate_discount = 10
    }
    switch(e.detail.id) {
      case 1: 
        console.log('钱包支付');
        addOrderBY(data).then(releaseR => {
          if(releaseR.data == "支付成功,发布任务成功") {
            wx.showToast({
              title: '已发布'
            })

            // 前一个页面重新获取数据
            let pages = getCurrentPages();
            let beforePage = pages[pages.length - 2];
            beforePage.onLoad();
            // 用户页面重新获取余额
            let beforePage2 = pages[pages.length - 3];
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
        break;
      case 2: 
        console.log('微信支付'); 
        // 调取支付接口的参数
        let dataPay = {
          task_num: this.data.num,
          task_one_price: this.data.price,
        }
        // 微信支付
        addOrderBPay(dataPay).then(res => {
          wx.requestPayment({
            timeStamp: res.result.timeStamp,
            nonceStr: res.result.nonceStr,
            package: res.result.package,
            signType: res.result.signType,
            paySign: res.result.paySign,
            success () {
              // 支付成功，生成订单
              data.task_order_id = res.task_order_id;
              addOrderB(data).then(releaseR => {
                if(releaseR.code == 200) {
                  wx.showToast({
                    title: '已发布'
                  })

                  let pages = getCurrentPages();
                  let beforePage = pages[pages.length - 2];
                  beforePage.onLoad();
                  setTimeout(() =>{
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
            fail (err) { 
              console.log('发布订单支付失败', err);
            }
          })
        })
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getDistris();
    this._getping();
  },

  _getDistris() {
    let distris = [];
    for(let i = 1; i < 21; i++) {
      distris.push({
        id: i, name: i + '公里'
      })
    }
    this.setData({ distris });
  },

  _getping() {
    //获取平台服务费折扣
    getPing().then(res => {
      this.setData({ discount: res.discount, serPricePre: res.service_money });
      //美团或者饿了么
      this.setData({
        'platforms[0].isShow': res.platform_type.mt_status == 1 ? true : false,
        'platforms[1].isShow': res.platform_type.elm_status == 1 ? true : false
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