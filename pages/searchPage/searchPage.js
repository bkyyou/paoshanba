// pages/searchPage/searchPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchHistory: ['山西大学', '西藏', '晋阳湖公园', '植物园',],
    flag: false,
    active: 'plan',
    allAcivities: [
      {
        nickname: '天剑骑士董超',
        motorcycleType: '豪爵铃木 2019款 GSX 250R-A ABS版',
        sexIcon: 'iconnan',
        time: '10-16 12:35',
        acitivityTitle: '晋阳湖公园约起！',
        acitivityDes: '趁这几天天气好，我想抓住秋天的小尾巴。有没有志同道合的小伙伴一起去晋阳湖公园溜一圈儿？',
      },
      {
        nickname: '天剑骑士董超',
        motorcycleType: '豪爵铃木 2019款 GSX 250R-A ABS版',
        sexIcon: 'iconzu',
        time: '10-16 12:35',
        acitivityTitle: '晋阳湖公园约起！',
        acitivityDes: '趁这几天天气好，我想抓住秋天的小尾巴。有没有志同道合的小伙伴一起去晋阳湖公园溜一圈儿？',
      },
    ],
    allUsers: [
      {
        imgUrl: '',
        userName: '爱晋阳湖公园',
        fansCount: 2101,
        signature: '战斗的时候要英勇与果敢',
        attentionStatus: true
      },
      {
        imgUrl: '',
        userName: '爱晋阳湖公园',
        fansCount: 2101,
        signature: '战斗的时候要英勇与果敢',
        attentionStatus: false
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toggleNav(e) {
    console.log('e', e);
    this.setData({active: e.target.dataset.nav});
  },

  goAttention(e) {
    console.log('e', e);
    let { allUsers } = this.data;
    let { index } = e.target.dataset
    allUsers[index].attentionStatus = !allUsers[index].attentionStatus;
    this.setData({ allUsers })
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