// pages/editInfo/editInfo.js
import { getCurrentDate } from '../../utils/util';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    perInfo: {
      imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
      nickname: '孙娜恩',
      day: '1995-07-07',
      // gender: '女',
    },
    genderArr: ['男', '女'],
    genderIndex: 0,
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date: getCurrentDate()
    })
  },

  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  genderPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let { perInfo, genderArr, genderIndex } = this.data;
    genderIndex = e.detail.value;
    perInfo.gender = genderArr[e.detail.value];
    this.setData({
      perInfo,
      genderIndex
    })
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