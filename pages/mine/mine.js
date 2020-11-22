// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mineData: {
      nickname: '孙娜恩',
      fansCount: 63,
      att: 102,
      collect: 63,
      imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goHref(e) {
    console.log('e', e);
    let { href } = e.target.dataset.href ? e.target.dataset : e.currentTarget.dataset;

    wx.navigateTo({
      url: `/pages/${href}/${href}?id=1`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // A页面接收值，在A页面的data里面自定义mydata接收值
    // 获取到上一页返回回来带的值
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    // this.data.mydata = currPage.data.valid
    console.log('currPage', currPage.data.a);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})