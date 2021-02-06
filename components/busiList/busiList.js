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
    isOrder: {  //是否是订单，默认否
      type: Boolean,
      default: false
    },
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
    toOrder(e) {
      //详情
      let id = e.currentTarget.dataset.id;
      let tid = e.currentTarget.dataset.tid;
      let bid = e.currentTarget.dataset.bid;
      let state = e.currentTarget.dataset.state;
      let yu = e.currentTarget.dataset.yu;

      if(state == -1) {
        wx.showToast({
          title: '当前订单已失效',
          icon: 'none'
        })
        return;
      }

      let pages = getCurrentPages();
      let bpage = pages[pages.length - 1];
      if(bpage.route != "pages/tabBar/order/order") {
        if(!yu) {
          wx.showToast({
            title: '当前商家任务已售清',
            icon: 'none'
          })
          return;
        }
      }

      wx.navigateTo({
        url: '/pages/order/detail/detail?id=' + id + '&tid=' + tid + '&bid=' + bid
      });
    },
  }
})
