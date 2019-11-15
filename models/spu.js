/**
 * @author 落秋
 * @date 2019/11/10 16:31
 */
import {Http} from "../utils/http";

class Spu {
    static getDetail(id) {
        return Http.request({
            url: `spu/id/${id}/detail`
        })
    }
}

export {
    Spu
}