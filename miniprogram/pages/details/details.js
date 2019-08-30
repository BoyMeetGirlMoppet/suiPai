const db = wx.cloud.database();
// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [], //接收详情页面数据
    review: "", //评论的内容
    id: "", //接收页面传过来的id 获取数据的判断条件
    comments: [] //接收评论 
  },
  selReview: function() {
    db.collection("comment").where({
        id: this.data.id
      }).get()
      .then(res => {
        console.log(res)
        this.setData({
          comments: res.data
        })
      }).catch(err => {
        console.log(err)
      })
  },
  sub: function() { //评论过后刷新页面
    wx.showLoading({
      title: '正在评论中...'
    })
    db.collection("comment").add({
      data: {
        review: this.data.review,
        id: this.data.id,
        userInfo: this.data.list[0].userInfo,
        title: this.data.list[0].title
      }
    }).then(res => {
      console.log(res)
      wx.hideLoading()
      wx.showToast({
        title: '评论成功',
        duration: 1000,
        mask: true,
        success: (res)=> {
          this.selReview()
        }
      })
      
    }).catch(err => {
      console.log(err)
    })
  },
  inputAction: function(e) {
    console.log(e.detail.value)
    this.setData({
      review: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showToast({
      title: '数据加载成功',
      duration: 1000,
      mask: true,
      success: (res)=> {
        console.log(options.id)
        this.setData({
          id: options.id
        })
        db.collection("photo_list").where({
          _id: options.id
        }).get()
          .then(res => {
            console.log(res)
            this.setData({
              list: res.data
            })
          })
        this.selReview()
      }
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})