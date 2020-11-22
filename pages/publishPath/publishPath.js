// pages/publishPath/publishPath.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    throughTo: [
      {
        path: '',
        remark: ''
      },
      {
        path: '',
        remark: ''
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  addThroughTo() {
    let { throughTo } = this.data;
    throughTo.push({
      path: '',
      remark: ''
    });
    this.setData({throughTo})
  },

  delete(e) {
    let { throughTo } = this.data;
    throughTo.splice(e.target.dataset.index, 1);
    this.setData({throughTo})
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