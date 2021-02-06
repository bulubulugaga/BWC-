// components/swiper/swiper.js
import { getSwiper } from '../../service/index.js'
Component({
  /**
   * 组件的初始数据
   */
  data: {
    swiper: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //网络数据
    _getData() {
      this._getSwiper();
    },
    _getSwiper() {
      //获取轮播图
      getSwiper().then(res => {
        this.setData({
          swiper: res.data
        })
      })
    },
    toDetail(e) {
      //详情
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/index/bannerDetail/bannerDetail?id=' + id
      })
    }
  },
  // 初始化
  attached() {
    //这里不能用created   
    this._getData();
  }
})
