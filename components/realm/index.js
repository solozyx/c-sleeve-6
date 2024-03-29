// components/realm/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    judger:Object
  },

  /**
   * 监听器
   */
  observers: {
    'spu': function(spu) {
      if (!spu) {
        return
      }
      const fenceGroup = new FenceGroup(spu)
      fenceGroup.initFences()
      this.data.judger = new Judger(fenceGroup)
      this.bindInitData(fenceGroup)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
      bindInitData(fenceGroup) {
        this.setData({
          fences: fenceGroup.fences
        })
      },
      onCellTap(event) {
        const judger = this.data.judger
        const cell = event.detail.cell
        const x = event.detail.x
        const y = event.detail.y
        judger.judge(cell, x, y)
        this.setData({
          fences: judger.fenceGroup.fences
        })
      }
  }
})
