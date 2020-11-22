// pages/teamDialogBox/teamDialogBox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allDialog: [
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '天剑骑士董超',
        txt: '趁这几天天气好,我想抓住秋天的小尾巴。一起去吧！',
        isMine: false
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '天剑骑士董超',
        txt: '趁这几天天气好,我想抓住秋天的小尾巴。一起去吧！',
        isMine: true
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '天剑骑士董超',
        txt: '趁这几天天气好,我想抓住秋天的小尾巴。一起去吧！',
        isMine: true
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '天剑骑士董超',
        txt: '趁这几天天气好,我想抓住秋天的小尾巴。一起去吧！',
        isMine: false
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '天剑骑士董超',
        txt: '趁这几天天气好,我想抓住秋天的小尾巴。一起去吧！',
        isMine: false
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '天剑骑士董超',
        txt: '趁这几天天气好,我想抓住秋天的小尾巴。一起去吧！',
        isMine: false
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '天剑骑士董超',
        txt: '趁这几天天气好,我想抓住秋天的小尾巴。一起去吧！',
        isMine: false
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '天剑骑士董超',
        txt: '趁这几天天气好,我想抓住秋天的小尾巴。一起去吧！',
        isMine: true
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