// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:50,
    movies:['西游记','水浒传','何以为家'],
    letters:['a','s','q'],
    nums:[
      [12,21,34,24],
      [1,221,334,224],
      [112,221,344,244],
    ]
  },
  handleSwitchColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  hanleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score + 6
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    setInterval(()=>{
       this.setData({
         nowTime:new Date().toLocaleString()
       })
    },1000)
  },
  handleSwitchColor(){
    console.log('-----')
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