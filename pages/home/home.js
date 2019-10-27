// pages/home/home.js

import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";
import {SpuPaging} from "../../model/spu-paging";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grids: [],
        activityD: null,
        // topThemeH: 0,
        // topThemeW: 0,
        themeE: null,
        spuPaging: null,
        loadingType: 'loading'
    },

    methods: {
        onItemTap(e) {
            console.log(e)
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        this.initAllData()
        this.initBottomSpuList()
    },

    async initBottomSpuList() {
        const paging = SpuPaging.getLatestPaging()
        this.data.spuPaging = paging
        const data = await paging.getMoreData()
        if (!data) {
            return
        }
        wx.lin.renderWaterFlow(data.items)
    },

    async initAllData() {

        // const themes = await Theme.getThemes()
        // 函数式编程 find、filter、map、some、reduce
        // const themeA = themes.find(t => t.name === 't-1')
        const theme = new Theme
        await theme.getThemes();
        const themeA = theme.getHomeLocationA()
        const themeE = theme.getHomeLocationE()
        const themeF = theme.getHomeLocationF()
        const themeH = theme.getHomeLocationH()
        let themeESpu = []
        if (themeE.online) {
            const data = await Theme.getHomeLocationESpu()
            if (data) {
                themeESpu = data.spu_list.slice(0, 8)
            }
        }
        // const themeESpuList = await Theme.getHomeLocationESpu()

        // wx.getImageInfo({
        //     src: "/images/test.png", // themeA.entrance_img
        //     success: res => {
        //         this.setData({
        //             topThemeH: res.height * 2,
        //             topThemeW: res.width * 2
        //         })
        //     }
        // })

        // 类的对象本身就具有保存数据的功能
        // 类能保存数据 不能保存状态
        // 类的对象 能保存数据和状态
        // 数据不同才能称为状态
        // const t = new Theme()
        // t.a = 1
        // const t2 = new Theme()
        // t2.a = 2
        // Theme.a = 1
        // Theme.a = 2

        const bannerB = await Banner.getHomeLocationB()
        const grids = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()

        const bannerG = await Banner.getHomeLocationG()

        this.setData({
            themeA,
            bannerB,
            grids,
            activityD,
            themeE,
            themeESpu,
            themeF,
            bannerG,
            themeH
        })
    },

    onPullDownRefresh: function () {

    },

    onReachBottom: async function () {
        const data = await this.data.spuPaging.getMoreData()
        if (!data) {
            return
        }
        wx.lin.renderWaterFlow(data.items)
        if (!data.moreData) {
            this.setData({
                loadingType: 'end'
            })
        }
    },

    onShareAppMessage: function () {

    }
})