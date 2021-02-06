//index.js
import { 
  getHotShop, getDistriShop, getAdvertise
} from '../../../service/index'
Page({
  data: {
    name: '', //小程序名
    area: {},  //地区
    advertise: '',  //公告
    hotShop: [],  //热门店铺
    business: []  //商家  
  },
  onLoad: function () {
    // this. _getCity();
    //先设置再监听

    this.setData({
      area: getApp().globalData.city,
      name: getApp().globalData.name
    })
    let that = this;
    getApp().watch(that, that.watchBack, 'city');
    this._getAdvertise();
    // this._getData();
  },

  watchBack: function (that, city){
    that.setData({
      area: city
    })
    this._getData();
  },

  changeOnlyAble() {
    // 切换是否选择可接单商家
    this._getDistriShop();
  },

  _getData() {
    //数据
    this._getAdvertise2();
    this._getHotShop();
    this._getDistriShop();
  },

  _getAdvertise() {
    //首次获取公告
    getApp()._getIsAuth().then(() => {
      this._getAdvertise2();
    })
  },

  _getAdvertise2() {
    //用于更新，防止刚开通会员未更新公告
    getAdvertise().then(res => {
      if(!res.data) {
        this.setData({
          advertise: res.tishi
        })
        return;
      }
      res.data.forEach(item => {
        if(item.type == 1) {
          this.setData({
            advertise: item.reception_notice
          })
        }
      })
    })
  },

  _getHotShop() {
    //获取热门商店
    getHotShop().then(res => {
      this.setData({
        hotShop: res.data
      })
    })
  },

  _getDistriShop() {
    //获取商家列表
    let onlyAble = this.selectComponent('#bg').data.onlyAble;
    let status = onlyAble ? 1 : 0;
    getDistriShop(status).then(res => {
      this.setData({
        business: Object.values(res.data)
      })
    })
  },

  onTabItemTap(item) {
    //刷新页面
    this.setData({
      area: getApp().globalData.city
    })
    this._getData();
  },

  onShow() {
    
  }
})
