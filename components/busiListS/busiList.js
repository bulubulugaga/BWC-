// components/busiList/busiList.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    list: Array,
    type: String
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
    toDetail(e) {
      //详情
      let id = e.currentTarget.dataset.id;
      let tid = e.currentTarget.dataset.tid;
      wx.navigateTo({
        url: '/pages/shop/orderDetail/detail?id=' + id + '&tid=' + tid + '&type=' + this.data.type
      })
    }
  }
})
