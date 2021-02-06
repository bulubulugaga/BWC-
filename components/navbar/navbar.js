// components/navbar/navbar.js
Component({
  properties: {
    title: {  //导航标题
      type: String,
      value: ''
    },
    color: {  //字体颜色
      type: String
    },
    size: {  //字体大小
      type: String,
      value: '36rpx'
    },
    leftIconShow: {  //是否显示左侧图标
      type: Boolean,
      value: true
    },
    leftIcon: {  //左侧按钮图标
      type: String,
      value: 'arrow-left'
    },
    iconSize: {  //左侧图标大小 px
      type: String,
      value: '40rpx'
    },
    iconColor: {  //左侧图标颜色
      type: String
    },
    isDefaultFun: {  //是否使用默认左侧按钮方法
      // 布尔值传参，父组件必须用v-bind，否则会被当字符串处理
      type: Boolean,
      value: true
    },
    bgColor: {
      type: String,
      value: 'white'
    },
    blankShow: {  //是否占位（内容是否顶格）
      type: Boolean,
      value: true
    }
  },
  data: {
    demo: {}
  },
  methods: {
    leftFun() {
      if(this.data.isDefaultFun) {
        //左侧按钮默认返回
        wx.navigateBack({
          delta: 1
        })
      }
      else {
        //自定义方法
        //只有传值isDefaulFun为false才生效
        this.triggerEvent('leftTap', {})
      }
    }
  },
  attached() {
    //这里不能用created
    let a = wx.getMenuButtonBoundingClientRect();
    this.setData({
      demo: a
    });
  }
})