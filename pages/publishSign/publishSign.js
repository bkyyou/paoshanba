// pages/signs/signs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allSignsArr: [
      {id: 0, loc: '拉萨'}, 
      {id: 1, loc: '拉萨'},
      {id: 2, loc: '丽江古城'},
      {id: 3, loc: '拉萨'}, 
      {id: 4, loc: '拉萨'},
      {id: 5, loc: '拉萨'}, 
      {id: 6, loc: '拉萨'},
    ],
    allSignsObj: {},

    customTagDia: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  chooseSign(e) {
    let { id } = e.target.dataset;
    let { allSignsObj } = this.data;
    allSignsObj[id] = ! allSignsObj[id];
    this.setData({
      allSignsObj
    });
  },

  // 展示隐藏的元素
  show(e) {
    console.log('e', e);
    let showDia = e.currentTarget.dataset.showDia || e.target.dataset.showDia;
    this.setData({
      [showDia]: false
    })
  },
  // 隐藏元素
  hide(e) {
    let showDia = e.target.dataset.showDia || e.currentTarget.dataset.showDia;
    this.setData({
      [showDia]: true
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