// pages/myComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sliderBtnData: { // navbarData 由父页面传递的数据
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    x: 0,
    area_width: 100, //可滑动区域的宽，单位是百分比，设置好后自动居中
    box_width: 60, //滑块的宽,单位是 
    maxNum: 0, //验证成功时的坐标，不需要设置，代码自动计算；
    coord: 0,
    isArriveRight:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    drag(e) {
      var that = this;
      console.log(e.detail)

      that.setData({
        coord: e.detail.x
      })
    },
    dragOver(e) {
      console.log(e)
      var that = this;
      that.data.maxNum = this.data.sliderBtnData.sliderBtn_width - that.data.box_width 
      console.log('that.data.maxNum',this.data.maxNum)

      if (that.data.coord >= that.data.maxNum) {
        //验证成功之后回调给主页面
        this.triggerEvent("arriveRight");
        this.setData({
          isArriveRight:true
        })
      } else {
        that.setData({
          x: 0,
          isArriveRight:false
        })
      }
    },
  },

  /*组件生命周期*/
  lifetimes: {
    created() {
      console.log("在组件实例刚刚被创建时执行")
    },
    attached() {
      console.log("在组件实例进入页面节点树时执行")
    },
    ready() {
      console.log("在组件在视图层布局完成后执行")
      var that = this;
      var n = Math.floor(that.data.area_width / 2 - that.data.box_width / 2)
      console.log(" n", n)

      that.setData({
        maxNum: n,
        x:0
      })

    },
    moved() {
      console.log("在组件实例被移动到节点树另一个位置时执行")
    },
    detached() {
      console.log("在组件实例被从页面节点树移除时执行")
    },
    error() {
      console.log("每当组件方法抛出错误时执行")
    },
    /*组件所在页面的生命周期 */
    pageLifetimes: {
      show: function () {
        // 页面被展示
        console.log("页面被展示")
      },
      hide: function () {
        // 页面被隐藏
        console.log("页面被隐藏")
      },
      resize: function (size) {
        // 页面尺寸变化
        console.log("页面尺寸变化")
      }
    }
  }
})