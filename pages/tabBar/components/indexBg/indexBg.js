// pages/tabBar/components/indexHeader.js
import { getCategory, getCategoryA } from '../../../../service/index.js'
import { reverseArrObj } from '../../../../utils/util'

Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    area: Object,  //地区
    advertise: {  //公告
      type: 'String',
      value: ''
    },
    hotTitle: String,  //热门标题
    hotShop: Array,  //店铺
    business: Array,  //商家
    type: String  //1-霸王餐  2-返利餐
  },

  /**
   * 组件的初始数据
   */
  data: {
    hrWidth: '',  //头部右侧宽度    
    category: [],  //导航分类
    navbarHeight: 0,  //导航栏高度
    onlyAble: false,   //仅商家展示是按钮样式
  },

  /**
   * 组件的方法列表
   */
  methods: {
   
    toArea() {
      //选择地区
      wx.navigateTo({
        url: '/pages/index/area/area'
      })
    },
    changeOnlyAble() {
      //切换是否仅可接单商家
      let onlyAble = !this.data.onlyAble;
      this.setData({
        onlyAble
      })
      this.triggerEvent('changeAble');
    },
    toNotice() {
      //公告
      // wx.navigateTo({
      //   url: '/pages/index/notice/notice'
      // })
    },
    toCategory(e) {
      //点击分类
      let index = e.currentTarget.dataset.index;
      wx.navigateTo({
        url: '/pages/index/category/category?index=' + index
      });
    },
    toOrder(e) {
      //详情
      let id = e.currentTarget.dataset.id;
      let tid = e.currentTarget.dataset.tid;
      let bid = e.currentTarget.dataset.bid;
      if(!tid) {
        wx.showToast({
          title: '当前福利已售清',
          icon: 'none'
        })
        return;
      }
      wx.navigateTo({
        url: '/pages/order/detail/detail?id=' + id + '&tid=' + tid + '&bid=' + bid
      });
    },
    toSearch() {
      // 搜索
      wx.navigateTo({
        url: '/pages/index/search/search'
      });
    },


    //网络数据
    _getData() {
      this._getCategory();
    },
    _getCategory() {
      //获取分类
      // getCategory().then(res => {
      //   let list = res.data;
      //   list.unshift({id: -1, type_title: '全部', img: '/static/images/tabBar/all_cate.png'});
      //   list.push({id: -100, type_title: '其它', img: '/static/images/tabBar/other_cate.png'});
      //   this.setData({
      //     category: list
      //   })
      // })
      getCategoryA().then(res => {
        let list = reverseArrObj(res.navigation);
        // list.unshift({id: -1, type_title: '全部', img: '/static/images/tabBar/all_cate.png'});
        this.setData({
          category: list
        })
      })
    }
  },
  // 初始化
  attached() {
    //这里不能用created
    let meniu = wx.getMenuButtonBoundingClientRect();
    this.setData({
      hrWidth: meniu.width,
      navbarHeight: meniu.height + meniu.top + 8
    });

    this._getData();
  }
})
