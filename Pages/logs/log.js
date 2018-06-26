var common = require('common.js');
// Pages/logs/log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'init data',
    num: 0,
    array: [{ text: 'init data' }],
    object: {
      text: 'init data'
    },
    array: [1, 2, 3, 4, 5],
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    count: 1,
    zero:0,
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    },
    item: {
      index: 1,
      msg: 'this is a template',
      time: '2016-09-15'
    }

  },
  add: function (e) {
    console.log(e);
    this.setData({
      count: this.data.count + 1
    })
  },
  handleTap1:function(e){
    console.log(e.currentTarget);
    console.log("press handleTap1");
  },
  handleTap2: function (e) {
    console.log(e.currentTarget);
    console.log("press handleTap2");
  },
  handleTap3: function (e) {
    console.log(e.currentTarget);
    console.log("press handleTap3");
  },
  handleTap4: function (e) {
    console.log("press handleTap4");
  },
  changeText: function () {
    var app = getApp();
    app.globalData++;
    var data = app.globalData;
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: data
    })
  },
  changeNum: function () {
    common.sayHello('yanjun');
    common.sayGoodbye('yanjun');
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData);
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