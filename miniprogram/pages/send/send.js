// pages/send/send.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:""
  },

  // 上传头像
  selectImage: function () {
   wx.chooseImage({
     count: 9,
     sizeType: [],
     sourceType: [],
     success: function(res) {}
   })
  },
  // 输入框 输入的事件
  inputAction: function (event) {
    // 保存 输入框 输入的内容
    this.setData({
      content: event.detail.value
    });
  },
  // 发布秘密
  add: function () {
    // 发表成功后 在跳转回首页

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