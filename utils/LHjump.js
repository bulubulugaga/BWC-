//封装方法，用于页面跳转时检测是否登录，未登录则弹出登录窗口

//解析参数
function param(data) {
  // console.log(data);
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

export function jump(value) {
  // console.log(value);
  //是否微信登录
  new Promise((resolve, reject) => {
    //是否已授权
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权
          console.log('已授权');
          resolve();
        }
        else {
          console.log('未授权');
          getApp().globalData.isShowLogin = true;
          reject();
        }
      }
    })
  }).then(() => {
    //检测登录状态
    wx.checkSession({
      success: function () {
        console.log("处于登录态, sessionId有效");
        return 1;
      },
      fail: function () {
        console.log("需要重新登录, sessionId过期");
        // 重新登录
        getApp().globalData.isShowLogin = true;
      }
    })
  }).then(() => {
    //跳转
    if (typeof (value) == 'string') {
      //只传一个参数，用跳转
      wx.navigateTo({
        url: value
      })
    }
    else {
      //解析参数，获取链接地址
      let url = value.url;
      url += (url.indexOf('?') < 0 ? '?' : '&') + param(value.param);
      if (value.type) {
        //传了跳转方式
        //此小程序用不到switchTab
        switch (value.type) {
          case 'reLaunch':
            wx.reLaunch({
              url
            });
            break;
          case 'redirectTo':
            wx.redirectTo({
              url
            });
            break;
          case 'switchTab':
            wx.switchTab({
              url
            });
            break;
          default:
            wx.navigateTo({
              url
            });
            break;
        }
      }
      else {
        //没传跳转方式，用navigateTo
        wx.navigateTo({
          url
        })
      }
    }
  })
}