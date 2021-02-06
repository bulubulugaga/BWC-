// pages/index/category/category.js
import { 
  getCategory, getCategoryA, getCategoryShop, getAllShop, getOtherShop
} from '../../../service/index.js'
import { reverseArrObj } from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [],  //导航分类
    categoryIndex: 0,
    onlyAble: false,   //仅商家展示是按钮样式
    list: [],  //订单列表 
    other_id: '',  //已有id
  },

  changeOnlyAble() {
    //切换是否仅可接单商家
    let onlyAble = !this.data.onlyAble;
    this.setData({
      onlyAble
    })
    this._getCategoryShop();
  },

  toCategory(e) {
    //点击分类
    let index = e.currentTarget.dataset.index;
    this.setData({
      categoryIndex: index
    })
    this._getCategoryShop();
  },

  //网络数据
  _getData() {
    // this._getCategory();
    this._getCategoryA();
  },
  _getCategory() {
    //获取首页分类
    getCategory().then(res => {
      let list = res.data;

      //拼接id，用于获取其它
      let all = [];
      list.forEach(item => {
        all.push(item.id);
      })
      this.setData({
        other_id: all.join(',')
      })
      // 拼接分类
      list.unshift({id: -1, type_title: '全部', img: '/static/images/tabBar/all_cate.png'});
      list.push({id: -100, type_title: '其它', img: '/static/images/tabBar/other_cate.png'});
      this.setData({
        category: list
      })
      // 获取
      this._getCategoryShop();
    })
  },
  _getCategoryA() {
    //获取全部分类
    getCategoryA().then(res => {
      let list = reverseArrObj(res.navigation);
      // list.unshift({id: -1, type_title: '全部', img: '/static/images/tabBar/all_cate.png'});
      this.setData({
        category: list
      })
      this._getCategoryShop();
    })
  },
  _getCategoryShop() {
    //获取分类下的列表
    let id = this.data.category[this.data.categoryIndex].id;
    let data = {};
    switch(id) {
      case -1:  //全部
        data = {
          status: this.data.onlyAble ? 1 : 0
        }; 
        getAllShop(data).then(res => {
          this.setData({
            list: Object.values(res.business_list)
          })
        });
        break;
      case -100:  //其它
        data = {
          id: this.data.other_id,
          status: this.data.onlyAble ? 1 : 0
        }; 
        getOtherShop(data).then(res => {
          if(res.data == 0) {
            console.log(res.data);
            wx.showToast({
              title: res.errno,
              icon: 'none'
            })
            this.setData({
              list: []
            })
          }
          else {
            this.setData({
              list: Object.values(res.business_list)
            })
          }
        });
      break;
      default: 
        data = {
          id,
          status: this.data.onlyAble ? 1 : 0
        }; 
        getCategoryShop(data).then(res => {
          this.setData({
            list: Object.values(res.business_list)
          })
        })
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      categoryIndex: options.index
    })
    this._getData();
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