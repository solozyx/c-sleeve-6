/**
 * @author 落秋
 * @date 2019/10/28 23:42
 */
import {Fence} from "./fence";
import {Matrix} from "./matrix";

class FenceGroup {

    spu
    skuList
    fences = []
    // fenceGroup = []

    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
        // this._filterSkuList()
    }

    initFences() {
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        const AT = matrix.transpose()
        AT.forEach(r => {
            const fence = new Fence(r)
            fence.init()
            fences.push(fence)
        })
        this.fences = fences
        console.log(fences)
    }

    initFences1() {
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        let currentJ = - 1;
        matrix.each((element, i, j) => {
            if (currentJ !== j) {
                // 开启一个新列，需要创建一个新的Fence
                fences[j] = this._createFence(element)
                currentJ = j
            }
            fences[currentJ].pushValueTitle(element.value)
        })
        console.log(fences)
    }

    _createFence(element) {
        return new Fence()
    }

    _createMatrix(skuList) {
        const m = []
        skuList.forEach(sku => {
            m.push(sku.specs)
        })
        return new Matrix(m)
        // 两个方案
        // 1.数学函数库
        // 2.不用 借助矩阵思维
    }

    // getFenceGroup() {
    //     return this.fenceGroup
    // }
    //
    // _filterSkuList() {
    //     this.skuList.forEach(item => {
    //         this._filterSpecs(item.specs)
    //     })
    // }
    //
    // _filterSpecs(specs) {
    //     var that = this;
    //     specs.forEach(function (item) {
    //         if (!that.fenceGroup.hasOwnProperty(item.key_id)) {
    //             that.fenceGroup[item.key_id] = []
    //             that.fenceGroup[item.key_id].push(new Fence(item))
    //         } else {
    //             let fences = that.fenceGroup[item.key_id]
    //             if (!fences.find(t => t.getValueId() === item.value_id)) {
    //                 fences.push(new Fence(item))
    //             }
    //         }
    //     })
    // }
}

export {
    FenceGroup
}