// pages/myTeam/myTeam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamName: '晋阳湖公园骑士小队',
    teamMember: [],
    allPeo: [
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '旧人随风',
        attentionStatus: 1, // 1 相互关注 2 已关注 3 回关
        attentionTxt: '相互关注'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '旧人随风',
        attentionStatus: 3, // 1 相互关注 2 已关注 3 回关
        attentionTxt: '回关'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '旧人随风',
        attentionStatus: 2, // 1 相互关注 2 已关注 3 回关
        attentionTxt: '已关注'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '旧人随风',
        attentionStatus: 2, // 1 相互关注 2 已关注 3 回关
        attentionTxt: '已关注'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '旧人随风',
        attentionStatus: 2, // 1 相互关注 2 已关注 3 回关
        attentionTxt: '已关注'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '旧人随风',
        attentionStatus: 2, // 1 相互关注 2 已关注 3 回关
        attentionTxt: '已关注'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '旧人随风',
        attentionStatus: 2, // 1 相互关注 2 已关注 3 回关
        attentionTxt: '已关注'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '旧人随风',
        attentionStatus: 2, // 1 相互关注 2 已关注 3 回关
        attentionTxt: '已关注'
      },
      {
        imgUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        username: '旧人随风',
        attentionStatus: 2, // 1 相互关注 2 已关注 3 回关
        attentionTxt: '已关注'
      },
    ],

    // 管理成员
    isManage: true,
    manageTeamObj: {},
    manageTeamArr: [],
    chooseCount: 0,

    // 编辑队名
    editTeamNameDia: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 点击管理成员
  manageTeam() {
    console.log(this.data)
    this.setData({
      isManage: !this.data.isManage,
      manageTeamObj: {},
      manageTeamArr: [],
      chooseCount: 0
    })
  },

  // 选中
  choose(e) {
    console.log('choose')
    console.log('e', e)
    let { index } = e.currentTarget.dataset;
    let { manageTeamObj } = this.data;
    let manageTeamArr = [];
    manageTeamObj[index] = !manageTeamObj[index];
    Object.keys(manageTeamObj).forEach(val => {
      if (manageTeamObj[val]) manageTeamArr.push(val);
    })
    console.log('manageTeamObj', manageTeamObj);
    this.setData({ manageTeamObj, manageTeamArr })
  },
  // 全选
  chooseAll() {
    // todo 零的时候怎么展示
    let { allPeo, manageTeamArr } = this.data;
    let len = allPeo.length;
    let newManageTeamArr = [], manageTeamObj = {};
    if (manageTeamArr.length < len) {
      for (let i = 0; i < len; i++) {
        newManageTeamArr.push(i);
        manageTeamObj[i] = true
      }
    } else {
      manageTeamObj = {};
      newManageTeamArr = [];
    }
    this.setData({ manageTeamArr: newManageTeamArr, manageTeamObj });
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