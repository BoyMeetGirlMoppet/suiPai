const db = wx.cloud.database()
const app = getApp()
// pages/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames: ['1'],
    uid:"",
    list:[]

  },
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      uid:options.uid
    })
    if(options.id==0){
      wx.setNavigationBarTitle({
        title: '我的发布'
      })
    db.collection("photo_list").where({
       uid:this.data.uid
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        list : res.data
      })
    }).catch(err=>{
      console.log(err)
    })
    }else if(options.id==1){
      wx.setNavigationBarTitle({
        title: '我的评论'
      })
      db.collection("comment").where({
        _openid: app.globalData.openid
      }).get()
      .then(res=>{
        console.log(res)
        this.setData({
          list: res.data
        })
       
      }).catch(err=>{
        console.log(err)
      })
    }


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