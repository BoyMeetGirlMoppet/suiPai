const db = wx.cloud.database({
  env: "lucky-cj-03ffa"
});

// pages/send/send.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    content:"",
    list:[],
    username:"",
    createdAt:""//创建时间
  },
  select: function () {
    // 查询照片
    db.collection("myphoto").get()
      .then(res => {
        console.log(res)
        this.setData({
          list: res.data
        })
      })
  },
  // 上传头像
  updateImage: function () {
    var t = this;
   wx.chooseImage({
     count: 9,
     sizeType: ["original", "compressed"],
       sourceType: ["album", "camera"],
     success: function(res) {
       console.log(res.tempFilePaths); // 临时文件的路径
       var file = res.tempFilePaths[0];
       //上传图片
       wx.cloud.uploadFile({
         cloudPath: new Date().getTime() + ".jpg",
         filePath: file,
         success: (res => {
           console.log(res.fileID);
           var fileID = res.fileID;
           // this.add(fileID)
           db.collection("myphoto").add({
             data: {
               fileID: fileID
             }
           }).then(res => {
             console.log(res)
             t.select();
           })
         })
       })
     }
   })
  },
  // 输入框 输入的事件
  inputAction: function (event) {
    // 保存 输入框 输入的内容
    this.setData({
      content: event.detail.value
    });
  },
  txtTitle:function(e){
    // console.log(e)
    this.setData({
      title: e.detail.value
    })
  },
  // 发布秘密
  add: function () {
    var date = new Date();
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取小时
    var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    //获取十分秒
    var Min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() ;
    // console.log("当前时间：" + Y + '年' + M + '月' + D + '日'); 
    // 发表成功后 在跳转回首页
    db.collection("photo").add({
      data:{
        content:this.data.content,
        title:this.data.title,
        username:"蓝汐",
        createdAt: Y + '年' + M + '月' + D + '日'+'-' + H + ':'+ Min + ":" + S
      }
    }).then(res=>{
      console.log(res)
      wx.navigateTo({
        url: '../index/index'
      })
    }).catch(err=>{
      console.log(err)
    })
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