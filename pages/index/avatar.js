// pages/index/avatar.js
  
Page({
    data: {
        x: 0,
        area_width: 60,   //可滑动区域的宽，单位是百分比，设置好后自动居中
        box_width: 120,   //滑块的宽,单位是 rpx
        maxNum: 0,        //验证成功时的坐标，不需要设置，代码自动计算；
        coord:0,
        sliderBtnData:{
          sliderBtn_width:0
        }
    },
    drag(e) {
        var that = this;
        console.log(e.detail)
        
        that.setData({
          coord: e.detail.x
        })
        that.data.maxNum = 285.9
      },
      dragOver(e) {
        console.log(e)
        var that = this;
        if (that.data.coord >= that.data.maxNum) {
          wx.showToast({
            title: '验证成功',
            icon: 'success',
            duration: 2000
          })
          //验证成功之后的代码
        } else {
          that.setData({
            x: 0,
          })
        }
        console.log(this.data.x)
      },
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (e) {
        var that = this;
        wx.getSystemInfo({
          success: function (res) {
            console.log(res.windowWidth);
            var n = Math.floor(res.windowWidth * that.data.area_width / 100 - that.data.box_width / 2)
            that.setData({
              maxNum: n,
            })
          }
        })
      },
      _arriveRight(){
        wx.showToast({
          title: '验证成功',
          icon: 'success',
          duration: 2000
        })
      },  /**
      * 生命周期函数--监听页面初次渲染完成
      */
     onReady: function () {
       
      //屏幕宽度
      var that = this
      wx.getSystemInfo({
        complete: (res) => {
          console.log(res)
          that.setData({
            sliderBtnData:{
              sliderBtn_width:res.screenWidth
            }
          })
        },
      })
     




      //获取父视图宽度

      //  var that = this
      //  //创建节点选择器
      //  var query = wx.createSelectorQuery();
      //  //选择id
      //  query.select('.callPoliceClass').boundingClientRect()
      //  query.exec(function (res) {
      //    that.setData({
      //      sliderBtnData:{
      //        sliderBtn_width:res[0].width
      //      }
      //    })
      //  });
     },
   
})