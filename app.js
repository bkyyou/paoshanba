//app.js
import $api from './config';

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // wx.setStorageSync('$api', $api);
    // var $api = wx.getStorageSync('$api')

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

     // 获取手机系统信息
     wx.getSystemInfo({
      success: res => {
        //导航高度
        console.log('res', res);
        let { statusBarHeight, windowHeight } = res;
        let { top, height } = wx.getMenuButtonBoundingClientRect();
        this.globalData.statusBarHeight = statusBarHeight;
        this.globalData.windowHeight = windowHeight;
        this.globalData.navHeight = statusBarHeight + height + (top - statusBarHeight ) * 2;

      }, fail(err) {
        console.log(err);
      }
    })

  },
  globalData: {
    userInfo: null,
    statusBarHeight: 0,
    navHeight: 0,
    $api,
    windowHeight: 0
  }
})