/**
 * @author 落秋
 * @date 2019/11/17 18:12
 */
import {combination} from "../../utils/util";

class SkuCode {
    code
    spuId
    totalSegments = []
    constructor(code) {
        this.code = code
        this._splitToSegments()
    }

    _splitToSegments() {
        // 2$1-44#3-9#4-14
        const spuAndSpec = this.code.split('$')
        this.spuId = spuAndSpec[0]

        // 保留key-value
        // const specCodeArray = spuAndSpec[1].split('#')
        // 只保留value --- 性能
        const specCodeArray = spuAndSpec[1].split('#').map(e => {
            return e.split('-')[1]
        })
        const length = specCodeArray.length

        for (let i = 1; i <= length; i++) {
            const segments = combination(specCodeArray, i)
            const newSegments = segments.map(segs => {
                return segs.join('#')
            })
            this.totalSegments = this.totalSegments.concat(newSegments)
        }

        console.log(this.totalSegments)
    }
}

export {
    SkuCode
}