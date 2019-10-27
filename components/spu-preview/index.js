Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    tags: Array
  },

  observers: {
    data: function (data) {
      if (!data) {
        return
      }
      if (!data.tags) {
        return
      }
      const tags = data.tags.split('$')
      this.setData({
        tags
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onImgLoad(event) {
      // 动态计算高宽
      const {width, height} = event.detail
      this.setData({
        w: 340,
        h: 340*height/width
      })
    },
    onItemTap(event) {
      const pid = event.currentTarget.dataset.pid
      // 降低组件的通用性：可能不是所有的组件都需要跳转
      // 区分 业务型组件/通用性组件
      wx.navigateTo({
        url: `/pages/detail/detail?pid=${pid}`
      })
      //this.triggerEvent('onItemTap', event)
    }
  }
})
