// components/payType/payType.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    pays: [
      {id: 1, name: '钱包支付'},
      {id: 2, name: '微信支付'}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closePopup() {
      //关闭弹窗
      this.setData({
        isShow: false
      })
    },
    chooseType(e) {
      //选择支付方式
      this.triggerEvent('choosePay', e.detail);
    }
  }
})
