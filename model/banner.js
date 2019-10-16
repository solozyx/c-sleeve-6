/**
 * @author 落秋
 * @date 2019/10/6 19:11
 */
import {Http} from "../utils/http";

class Banner {
    static locationB = 'b-1'
    static locationG = 'b-2'

    static async getHomeLocationB() {
        return await Http.request({
            url: `banner/name/${Banner.locationB}`
        })
    }

    static async getHomeLocationG() {
        return await Http.request({
            url: `banner/name/${Banner.locationG}`
        })
    }
}

export {
    Banner
}