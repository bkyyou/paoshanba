//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    backSign: '<',
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    index: 0,
    array: ['美国', '中国', '巴西', '日本'],

    banners: [
      {
        picUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg'
      },
      {
        picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603520953260&di=cec5ecfcd6b793d137e1ec79d4d58880&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
      },
    ],
    currentPage: 'last',
    allActivity: [
      {
        nickname: '天剑骑士董超',
        motorcycleType: '豪爵铃木 2019款 GSX 250R-A ABS版',
        time: '10-16 12:35',
        acitivityTitle: '晋阳湖公园约起！',
        acitivityDes: '趁这几天天气好，我想抓住秋天的小尾巴。有没有志同道合的小伙伴一起去晋阳湖公园溜一圈儿？',
        plan: {
          startLoc: '黑坨村',
          distance: '距离 2.1km',
          target: '晋阳湖湿地公园',
          passBy: '二许线、南中环街、南中环辅路、新晋祠路',
          planTime: '10-18 09:00 至 10-18 18:30'
        },
        acitivityPics: [
          'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 
          'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 
          'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 
        ]
      },
      {
        nickname: '天剑骑士董超',
        motorcycleType: '豪爵铃木 2019款 GSX 250R-A ABS版',
        time: '10-16 12:35',
        acitivityTitle: '晋阳湖公园约起！',
        acitivityDes: '趁这几天天气好，我想抓住秋天的小尾巴。有没有志同道合的小伙伴一起去晋阳湖公园溜一圈儿？',
        plan: {
          startLoc: '黑坨村',
          distance: '距离 2.1km',
          target: '晋阳湖湿地公园',
          passBy: '二许线、南中环街、南中环辅路、新晋祠路',
          planTime: '10-18 09:00 至 10-18 18:30'
        },
        acitivityPics: [
          'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 
          'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 
          'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 
        ],
        acitivitySigns: ['太原', '晋阳湖湿地公园']
      },
    ],
    goodCount: 0,
    commentCount: 0  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    var that = this;
    that.setData({
      navHeight: app.globalData.navHeight,
      statusBarHeight: app.globalData.statusBarHeight
    })

    console.log('wx.getMenuButtonBoundingClientRect() ', wx.getMenuButtonBoundingClientRect() );
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  togglePage(e) {
    console.log('e', e);
    this.setData({currentPage: e.target.dataset.page});
  },
  // 去往详情页
  goPlanDetail(e) {
    wx.navigateTo({
      url: '/pages/planDetail/planDetail'
    })
  },
  // 返回上一页
  navBack: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  navHome: function () {
    wx.reLaunch({
      url: '../index/index'
    })
  }
})
