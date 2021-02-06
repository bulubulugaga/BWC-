// components/login/login.js
import { 
  loginH
} from '../../service/index.js'
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
    logo: '',
    name: '',
    isAuth: false,  //是否授权
  },
  attached() {
    this.setData({
      logo: getApp().globalData.logo,
      name: getApp().globalData.name
    })

    this.isAuthority();


    let that = this;
    getApp().watch(that, that.watchBack, 'isShowLogin');
  },
  /**
   * 组件的方法列表
   */
  methods: {
    watchBack: function (that, name){
      // 监听globalData.isShowLogin变化
      that.setData({
        isShow: name
      })
    },

    closeLogin() {
      getApp().globalData.isShowLogin = false;
    },

    isAuthority() {
      //是否授权
      this.setData({
        isAuth: getApp().globalData.isAuth
      })
    },
    bindGetUserInfo(e) {
      //微信授权
      let info = e.detail.userInfo;
      if (info) {
        //用户按了允许授权按钮
          console.log('点击微信授权登录');
          this.login();
      } else {
        //用户按了拒绝按钮
        console.log('用户拒绝授权微信登录');
        //关闭弹窗
        getApp().globalData.isShowLogin = false;
      }
    },

    login() {
      //登录
      new Promise((resolve, reject) => {
        //获取code
        wx.login({
          success (res) {
            if (res.code) {
              //获取用户信息
              wx.getUserInfo({
                success: user => {
                  // 可以将 res 发送给后台解码出 unionId
                  // getApp().globalData.userInfo = user.userInfo

                  //判断用户是否为第一次授权
                  let data = {};
                  if(wx.getStorageSync('isFirstBWC')) {
                    data = {
                      code: res.code
                    }
                  }
                  else {
                    data = {
                      code: res.code,
                      nickName: user.userInfo.nickName,
                      avatarUrl: user.userInfo.avatarUrl,
                      gender: user.userInfo.gender,
                    }
                  }
                  resolve(data);
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  // if (this.userInfoReadyCallback) {
                  //   this.userInfoReadyCallback(res)
                  // }
                }
              })

            } else {
              wx.showToast({
                title: '登录失败！' + res.errMsg,
                icon: 'none'
              })
            }
          }
        })
      }).then(data => {
        //登录
        if(wx.getStorageSync('beforeOpenid')) {
          // 如果有邀请人
          data.superior_openid = wx.getStorageSync('beforeOpenid')
        }
        loginH(data).then(res => {
          //存储信息
          getApp().globalData.userInfo = res.data;
          getApp().globalData.isLogin = true;
          // 刷新页面
          let pages = getCurrentPages();
          let page = pages[pages.length - 1];
          console.log('重新登录，刷新页面，新用户信息', res.data);
          page.onLoad(page.options);
          // 存储授权
          wx.setStorageSync('isFirstBWC', true);
        })
      })
      
      //关闭弹窗
      getApp().globalData.isShowLogin = false;
    }
  }
})
