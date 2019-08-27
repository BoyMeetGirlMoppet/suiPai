const db = wx.cloud.database();
// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[], //接收详情页面数据
    review:"",//评论的内容
    id:"",    //接收页面传过来的id 获取数据的判断条件
    comments:[]  //接收评论 
  },
  selReview:function(){
    db.collection("comment").where({
      id:this.data.id
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        comments: res.data
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  flush:function(){//评论过后刷新页面
    db.collection("comment").add({
      data:{
        review:this.data.review,
        id:this.data.id
      }
    }).then(res=>{
      console.log(res)
      
    }).catch(err=>{
      console.log(err)
    })
  },
  inputAction:function(e){
    console.log(e.detail.value)
    this.setData({
      review: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      id:options.id
    })
    db.collection("photo_list").where({
      _id: options.id
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        list: res.data
      })
    })
    this.selReview()
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