// components/header/header.js
//获取应用实例
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pageName: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    backData: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navHeight: 0,
    statusBarHeight: 0,
    array: ['辽宁', '北京', '浙江'],
    index: 0
  },

  attached() {
    console.log('header onload');
    let { navHeight, statusBarHeight } = app.globalData;
    // console.log('app.globalData', app.globalData);
    this.setData({
      navHeight,
      statusBarHeight
    })
    // console.log('wx.getMenuButtonBoundingClientRect() ', wx.getMenuButtonBoundingClientRect() );

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goSearch() {
      // wx.reLaunch({
      //   url: '/pages/searchPage/searchPage'
      // })
      wx.navigateTo({
        url: '/pages/searchPage/searchPage'
      })
    },
    back() {
      console.log('back-------')
      // wx.switchTab({
      //   url: 'pages/index/index'
      // })
      // console.log('this.data.backData', this.backData);
      this.data.backData && this.setBackData();
      wx.navigateBack({
        delta:1
      })
    },
    setBackData() {
      console.log('setbackdata');
      let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
      let prevPage = pages[ pages.length - 2 ]; 
      //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面, -1为当前页面，-3是上上个页面以此类推。
      prevPage.setData(  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
        this.data.backData
      )
    }
  }
})
