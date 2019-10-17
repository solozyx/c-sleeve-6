/**
 * @author 落秋
 * @date 2019/10/17 23:58
 */

import {Paging} from "../utils/paging";

class SpuPaging {
    static async getLatestPaging() {
        return new Paging({
            url: `spu/latest`
        }, 3)
    }
}

export {
    SpuPaging
}