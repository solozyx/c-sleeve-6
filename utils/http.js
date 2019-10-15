import {config} from "../config/config";
import {promisic} from "./util";

/**
 * @author 落秋
 * @date 2019/10/6 15:30
 */

class Http {
     static async request({url, data, method = 'GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            method,
            data,
            header: {
                appKey: config.apiKey
            }
        })
         return res.data
        // wx.request({
        //     url: `${config.apiBaseUrl}${url}`,
        //     method,
        //     data,
        //     header: {
        //         appKey: config.apiKey
        //     },
        //     success: res => {
        //         callback(res.data)
        //     }
        // })
    }
}

export {
    Http
}