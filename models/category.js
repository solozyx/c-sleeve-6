/**
 * @author 落秋
 * @date 2019/10/7 8:22
 */
import {Http} from "../utils/http";

class Category {
    static async getHomeLocationC() {
        return await Http.request({
            url: "category/grid/all"
        })
    }
}

export {
    Category
}