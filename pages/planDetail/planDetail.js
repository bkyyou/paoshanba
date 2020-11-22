// pages/planDetail/planDetail.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      {
        picUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg'
      },
      {
        picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603520953260&di=cec5ecfcd6b793d137e1ec79d4d58880&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
      },
    ],
    // acivityDes: {
    item: {
      nickname: '天剑骑士董超',
      motorcycleType: '豪爵铃木 2019款 GSX 250R-A ABS版',
      sexIcon: 'iconnan',
      time: '10-16 12:35',
      acitivityTitle: '晋阳湖公园约起！',
      acitivityDes: '趁这几天天气好，我想抓住秋天的小尾巴。有没有志同道合的小伙伴一起去晋阳湖公园溜一圈儿？',
      hopePeopleNum: 10,
      singUpNum: 10,
      everyMon: 1000,
      payType: 'AA',
      signUp: true,  // 是否报名 true | false
      isMine: true, // 是否是我自己发布的项目 true | false
      abilityFun: 'showPage', // showPage | 跳转页面 goHref(goSignUp)
      plan: {
        startLoc: '黑坨村',
        distance: '距离 2.1km',
        target: '晋阳湖湿地公园',
        planTime: '10-18 09:00 至 10-18 18:30'
      },
      passBy: [
        {
          locName: '二许线',
          locDes: '路边有一家上海风味小笼包店，店里的蟹粉小笼包和鸭血粉丝汤味道相当正宗，物美价廉'
        },
        {
          locName: '二许线',
          locDes: '路边有一家上海风味小笼包店，店里的蟹粉小笼包和鸭血粉丝汤味道相当正宗，物美价廉'
        },
      ]
    },
    relatedPers: {
      manCount: 1,
      womenCount: 0,
      avatarArr: [
        'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603520953260&di=cec5ecfcd6b793d137e1ec79d4d58880&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
      ]
    },
    signUpPers: {
      manCount: 1,
      womenCount: 0,
      avatarArr: [
        'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603520953260&di=cec5ecfcd6b793d137e1ec79d4d58880&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
      ]
    },
    allComment: [
      {
        avatarUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '雪莉',
        commentTxt: '趁这几天天气好，我想抓住秋天的小尾巴。一 起去吧！',
        commentLoveNum: 13,
        love: true,
        commentTime: '10-20 11:02',
        commentReplyNum: 1
      },
      {
        avatarUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '雪莉',
        commentTxt: '趁这几天天气好，我想抓住秋天的小尾巴。一 起去吧！',
        commentLoveNum: 13,
        love: false,
        commentTime: '10-20 11:02',
        commentReplyNum: 0
      },
    ],

    commentFlag: true,
    // 展示回复中所有评论
    showCurrentComFlag: true,
    currentAllComs: {
      one: {
        avatarUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
        nickname: '雪莉',
        commentTxt: '趁这几天天气好，我想抓住秋天的小尾巴。一 起去吧！',
        commentTime: '10-20 11:02',
        attention: false
      },
      itemComs: [
        {
          avatarUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
          nickname: '雪莉',
          commentTxt: '趁这几天天气好，我想抓住秋天的小尾巴。一 起去吧！',
          commentLoveNum: 13,
          love: false,
          commentTime: '10-20 11:02',
          commentReplyNum: 0,
          relatedCom: '@孙娜恩：趁这几天天气好，我想抓住秋天的小尾巴。一起去吧！'
        },
        {
          avatarUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
          nickname: '雪莉',
          commentTxt: '趁这几天天气好，我想抓住秋天的小尾巴。一 起去吧！',
          commentLoveNum: 13,
          love: false,
          commentTime: '10-20 11:02',
          commentReplyNum: 0,
          relatedCom: '@孙娜恩：趁这几天天气好，我想抓住秋天的小尾巴。一起去吧！'
        },
        {
          avatarUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
          nickname: '雪莉',
          commentTxt: '趁这几天天气好，我想抓住秋天的小尾巴。一 起去吧！',
          commentLoveNum: 13,
          love: false,
          commentTime: '10-20 11:02',
          commentReplyNum: 0,
          relatedCom: '@孙娜恩：趁这几天天气好，我想抓住秋天的小尾巴。一起去吧！'
        },
        {
          avatarUrl: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
          nickname: '雪莉',
          commentTxt: '趁这几天天气好，我想抓住秋天的小尾巴。一 起去吧！',
          commentLoveNum: 13,
          love: false,
          commentTime: '10-20 11:02',
          commentReplyNum: 0,
          relatedCom: '@孙娜恩：趁这几天天气好，我想抓住秋天的小尾巴。一起去吧！'
        },
      ]
    },

    // 管理
    abilityFlag: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options',options);
  },

  getPlanDetailData() {
    
  },

  delComment(e) {
    console.log('delComment e', e);
  },

  showCommentArea(e) {
    console.log('e', e);
    let { commentreplynum } = e.target.dataset;
    if (commentreplynum) {
      // 请求接口
      this.setData({
        showCurrentComFlag: false
      })
    } else {
      this.setData({
        commentFlag: false
      })
    }
  },

  // closeCommentArea() {
  //   this.setData({
  //     commentFlag: true
  //   })
  // },

  // closeCurrentCom() {
  //   this.setData({
  //     showCurrentComFlag: true
  //   })
  // },

  closeDia(e) {
    console.log('e', e.target.dataset.closePageName);
    this.setData({
      [e.target.dataset.closePageName]: true
    })
  },

  // showAbility(e) {
  //   console.log('e', e);
  //   this.showPage(e.target.dataset.showPageName)
  // },

  showPage(e) {
    this.setData({
      [e.target.dataset.showPageName]: false
    })
    e.target.dataset.callback && this[e.target.dataset.callback]();
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