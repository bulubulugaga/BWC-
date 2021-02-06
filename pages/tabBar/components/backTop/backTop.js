// pages/tabBar/components/backTop/backTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bottom: {  //具体底部的距离
      type: String,
      value: '24rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toTop() {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})
