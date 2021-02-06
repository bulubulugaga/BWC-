//app.js
import { jump } from './utils/LHjump.js'
import { getGPSLocation, getCity } from './utils/getLocation'
import { loginH } from './service/index'
App({
  onLaunch: function (options) {
    //初始化
    // 如果有邀请人，存入本地
    if(options.query.id) {
      wx.setStorageSync(beforeOpenid, options.query.id);
    }
    // 获取导航栏高度
    this.getNavBar();
    // 城市
    this._getCity();
    // 授权
    // this._getIsAuth();

  },
  watch(that, method, type) {
    //监听globalData变化
    //that需要传调用页面的this,设置data值
    //method回调监听
    //type监听哪一个变量
    let obj = this.globalData;
    let temp = false;  //中间变量存储，初始化为false,而不是value
    if (type == 'city' || type == 'position') {
      temp = this.globalData.city
    }
    else if (type == 'userInfo') {
      temp = this.globalData.userInfo
    }
    Object.defineProperty(obj, type, {
      configurable: true,
      set(value) {
        //设置值
        temp = value;
        method(that, value, type);
      },
      get() {
        return temp
      }
    });
  },
  globalData: {
    navbarHeight: 44,
    code: '',

    name: '番茄芽',
    logo: '/static/images/tie.png',
    mapKey: 'JORBZ-H72KU-UJEVX-BJM32-FI4IT-ESBKW',
    location: {},  //定位
    locationPoi: [],  //周围位置信息

    isAuth: false,  //是否授权用户信息

    //监听变量
    // isLogin: false,
    // isShowLogin: false,
    // userInfo: false,
    // city: false  //选择地点

  },
  _jump(value) {
    //全局挂载跳转
    jump(value);
  },
  getNavBar() {
    let meniu = wx.getMenuButtonBoundingClientRect();
    this.globalData.navbarHeight = meniu.height + meniu.top + 8
  },
  _getCity() {
    //获取城市位置
    getGPSLocation().then(gps => {
      let data = {
        latitude: gps.latitude,
        longitude: gps.longitude,
      }
      getCity(data, 1).then(city => {
        // console.log(city);
        let a = {
          latitude: gps.latitude,
          longitude: gps.longitude,
          name: city.result.formatted_addresses.recommend,
          city: city.result.address_component.city
        }
        console.log('首次进入，定位和默认展示位置信息', a);
        this.globalData.location = a;
        this.globalData.locationPoi = city.result.pois;
        this.globalData.city = a;
      })
    })
  },
  _getIsAuth() {
    //是否授权获取用户信息
    let _this = this;
    return new Promise((re, rej) => {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权
            console.log('进入小程序检测：已授权，登录获取用户信息');
            _this.globalData.isAuth = true;
            _this.globalData.isLogin = true;
          }
          else {
            console.log('进入小程序检测：未授权，游客登录');
            _this.globalData.isAuth = false;
            _this.globalData.isLogin = false;
          }
  
          // 直接登录
          new Promise((resolve, reject) => {
            //获取code
            wx.login({
              success(res) {
                if (res.code) {
                  resolve(res.code);
                } else {
                  wx.showToast({
                    title: '登录失败！' + res.errMsg,
                    icon: 'none'
                  })
                  reject();
                }
              }
            })
          }).then(res => {
            //登录
            let data = {
              code: res
            }
            if(wx.getStorageSync('beforeOpenid')) {
              // 如果有邀请人
              data.superior_openid = wx.getStorageSync('beforeOpenid')
            }
            loginH(data).then(res => {
              _this.globalData.userInfo = res.data;
              _this.globalData.code = data.code;
              console.log('获取用户信息（包括游客登录信息）', res.data);
              re('success');
            })
          })
        }
      })
    })
  }
})