// components/paoContainer/container.js

//获取应用实例
const app = getApp();

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
    navHeight: 0,
    statusBarHeight: 0
  },

  attached() {
    console.log('paocontianer')
    // this.setData({
    //   navHeight: app.globalData.navHeight,
    //   statusBarHeight: app.globalData.statusBarHeight
    // })
    // this.initStyle();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initStyle() {
      this.setData({
        navHeight: app.globalData.navHeight,
        statusBarHeight: app.globalData.statusBarHeight
      })
    }
  }
})
