// components/noticeList/noticeList.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array   //公告列表
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
      let id = e.currentTarget.dataset.id;
      this.triggerEvent('toDetail', id);
    }
  }
})
