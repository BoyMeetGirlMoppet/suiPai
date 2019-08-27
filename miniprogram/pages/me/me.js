// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [ { icon: "../../images/mine/send.png", title: "发布" }, { icon: "../../images/mine/pinglun.png", title: "评论" }],
    info:{},
    uid:""
  },
  toMyInfo:function(e){
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/myInfo/myInfo?id='+id+"&uid="+this.data.uid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: res=> {
        console.log(res)
        this.setData({
          info: res.userInfo,
          uid: res.signature
        })
      }
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