// pages/signUpList/signUpList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 1, 
    currentPeo: [
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '周俊杰',
        time: '10-16 12:35',
        phone: '13754877428',
        des: '这位摩友你好呀！我家就住晋阳湖旁边，可以主动报名担当向导吗？'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '周俊杰',
        time: '10-16 12:35',
        phone: '13754877428',
        des: '这位摩友你好呀！我家就住晋阳湖旁边，可以主动报名担当向导吗？'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '周俊杰',
        time: '10-16 12:35',
        phone: '13754877428',
        des: '这位摩友你好呀！我家就住晋阳湖旁边，可以主动报名担当向导吗？'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '周俊杰',
        time: '10-16 12:35',
        phone: '13754877428',
        des: '这位摩友你好呀！我家就住晋阳湖旁边，可以主动报名担当向导吗？'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '周俊杰',
        time: '10-16 12:35',
        phone: '13754877428',
        des: '这位摩友你好呀！我家就住晋阳湖旁边，可以主动报名担当向导吗？'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '周俊杰',
        time: '10-16 12:35',
        phone: '13754877428',
        des: '这位摩友你好呀！我家就住晋阳湖旁边，可以主动报名担当向导吗？'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '周俊杰',
        time: '10-16 12:35',
        phone: '13754877428',
        des: '这位摩友你好呀！我家就住晋阳湖旁边，可以主动报名担当向导吗？'
      },
    ],
    waitPeo: [
      {
        imgUrl: ''
      }
    ] // 待审核
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  toggle(e) {
    let { status } = e.target.dataset;
    this.setData({ status })
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