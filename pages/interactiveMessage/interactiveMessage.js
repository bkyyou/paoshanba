// pages/interactiveMessage/interactiveMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allNews: [
      {
        imgUrl: '../../assets/imgs/interactive_message.png',
        nickname: '天剑骑士董超',
        content: '国庆没玩爽，这几天休年假，约呗！国庆没玩爽，这几天休年假，约呗！',
        time: '评论了你的计划 10-26',
        aci_content: '趁这几天天气好，我想抓住秋天，萨迪萨里的你疯狂拉升的',
        isLike: false
      },
      {
        imgUrl: '../../assets/imgs/interactive_message.png',
        nickname: '天剑骑士董超',
        content: '国庆没玩爽，这几天休年假，约呗！国庆没玩爽，这几天休年假，约呗！',
        time: '评论了你的计划 10-26',
        aci_content: '趁这几天天气好，我想抓住秋天，萨迪萨里的你疯狂拉升的',
        isLike: true
      },
    ]
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