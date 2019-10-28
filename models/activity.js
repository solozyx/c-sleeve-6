/**
 * @author 落秋
 * @date 2019/10/7 22:17
 */
import {Http} from "../utils/http";

class Activity {
    static locationD = "a-2"
    static async getHomeLocationD() {
        return await Http.request({
            url: `activity/name/${Activity.locationD}`
        })
    }
}

export {
    Activity
}