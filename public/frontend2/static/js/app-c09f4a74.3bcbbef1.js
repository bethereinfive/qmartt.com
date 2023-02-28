"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [2977], {
        58615: function(e, t, i) {
            var s = i(90697),
                o = i(62494),
                a = i(12075),
                n = i(78132),
                r = i(66189),
                h = i(82642),
                l = i(27484),
                c = i.n(l),
                u = i(93776),
                d = i.n(u),
                g = i(92614),
                w = i(62405),
                p = i(2106),
                S = i(22977);
            t["Z"] = {
                name: "Home",
                components: {
                    Footer: o.Z,
                    Share: n.Z,
                    Alert: r.Z,
                    SellCoin: g.Z,
                    EarningsShow: a.Z,
                    Download: h.Z,
                    UnfinishedTask: w.Z
                },
                directives: {
                    swiper: s.directive
                },
                data() {
                    return {
                        earningsShow1: !1,
                        earningContent1: !1,
                        earningsShow2: !1,
                        earningContent2: !1,
                        downloadBlock: {
                            isShow: !1
                        },
                        popUpBannerShow: !1,
                        btnText: "1",
                        isShua: !1,
                        navIndex: 1,
                        userId: this.$store.state.userId,
                        data: {
                            Phone: "0000000000",
                            Level: "",
                            Balance: 0,
                            TodayIncome: 0,
                            VirtualGold: 0,
                            TotalIncome: 0,
                            IncreaseAmount: 0,
                            UsableIncreaseAmount: 0
                        },
                        swiperOption: {
                            loop: !0,
                            autoplay: {
                                delay: 3500,
                                stopOnLastSlide: !1,
                                disableOnInteraction: !1
                            },
                            direction: "vertical"
                        },
                        carouseldata: {},
                        homeProduct: {},
                        homeProduct2: {},
                        shareUrl: "",
                        shareUrl1: "",
                        shareUrl2: "",
                        isShareShow: !1,
                        inRules: {
                            isAlertShow: !1,
                            title: this.$t("Home.text31"),
                            hasClose: !0
                        },
                        guide: {
                            isAlertShow: !1
                        },
                        novice: {
                            isAlertShow: !1,
                            title: this.$t("Home.text32"),
                            hasClose: !0,
                            url: this.$store.state.initializa.TeamIncomeUrl
                        },
                        placeHolderNothing: i(99210),
                        customerServiceUrl: "",
                        isNewNoviceShow: !1,
                        RedPackMinWithdrawMoney: this.$store.state.initializa.RedPackMinWithdrawMoney,
                        new_novice2: !1,
                        routerState: !1,
                        isTwoDays: !1,
                        lotteryPopupShow: !1,
                        withIncrease: {
                            title: this.$t("funcList.t367"),
                            hasClose: !0,
                            isAlertShow: !1,
                            msg: ""
                        },
                        sellTPC: {
                            isAlertShow: !1
                        },
                        clientHeight: "0px",
                        overValue: "hidden",
                        lang: this.$i18n.locale,
                        configInfo: {
                            IsOpenLotteryActKey: 0
                        },
                        isShuaState: "1",
                        logGuide1ShowData: [],
                        unfinishedTask: {
                            isShow: !1,
                            money: 0,
                            productId: 0,
                            SubRechargeAmount: 0,
                            SubRechargeAchieveRate: 0
                        },
                        microApp: {
                            App: {}
                        }
                    }
                },
                methods: {
                    cancelGo() {
                        this.$router.push("accountDetails")
                    },
                    cancelEarning1() {
                        this.earningsShow1 = !this.earningsShow1
                    },
                    cancelEarning2() {
                        this.earningsShow2 = !this.earningsShow2
                    },
                    getUnfinisedState() {
                        (0, p.F)().then((e => {
                            let t = e.Data;
                            this.unfinishedTask.isShow = t.RemainingNum > 0, this.unfinishedTask.money = t.UnEarningsToday, this.unfinishedTask.productId = t.productId, this.unfinishedTask.SubRechargeAmount = t.SubRechargeAmount, this.unfinishedTask.SubRechargeAchieveRate = t.SubRechargeAchieveRate
                        })).catch((e => {}))
                    },
                    unfinishedTaskShow() {
                        this.unfinishedTask.isShow = !0
                    },
                    unfinishedTaskClose() {
                        this.unfinishedTask.isShow = !1
                    },
                    downloadBlockShow() {
                        this.downloadBlock.isShow = !0
                    },
                    downloadBlockClose() {
                        console.log("f"), this.downloadBlock.isShow = !1
                    },
                    initializa() {
                        const e = this;
                        let t = 0;
                        e.$store.state.userId && (t = e.$store.state.userId), e.axios.post(e.$api.initializa, {
                            Version: "1",
                            Timestamp: parseInt((new Date).getTime() / 1e3),
                            UserID: t
                        }).then((function(t) {
                            let i = t.data;
                            var s = window.localStorage.getItem("lang");
                            null != s && "" != s || (s = e.$i18n.locale);
                            for (let e in i)
                                if (-1 != e.indexOf("Url")) {
                                    if (null == i[e] || "" == i[e]) continue; - 1 != i[e].indexOf("?") ? i[e] = i[e] + "&lang=" + s : i[e] = i[e] + "?lang=" + s
                                }
                            "{}" !== JSON.stringify(i) && e.$store.commit("set_initializa", i)
                        })).catch((function(e) {}))
                    },
                    viewMore() {
                        "1" == this.btnText && (this.clientHeight = "100%", this.btnText = "2", this.overValue = "auto")
                    },
                    popupShow() {
                        this.data.UsableIncreaseAmount <= 0 || (this.withIncrease.isAlertShow = !this.withIncrease.isAlertShow)
                    },
                    popupShow2() {
                        const e = this;
                        this.data.UsableIncreaseAmount <= 0 ? this.$message({
                            message: e.$t("Home.text33"),
                            type: "error"
                        }) : this.sellTPC.isAlertShow = !0
                    },
                    closeSC() {
                        this.sellTPC.isAlertShow = !1, this.getHomeData()
                    },
                    toLotteryPage() {
                        this.lotteryPopupShow = !1, this.$router.push({
                            path: "/lotteryNew",
                            query: {
                                id: 1
                            }
                        })
                    },
                    btnGuide() {
                        this.closeGuide()
                    },
                    closeGuide() {
                        this.guide.isAlertShow = !1, this.showGuide2()
                    },
                    scroll(e) {
                        this.pos = e.target.scrollTop
                    },
                    jump() {
                        var e = this.homeProduct[0].Id;
                        this.$router.push({
                            name: "OrderGrabbing",
                            query: {
                                id: e
                            },
                            params: {
                                isNewHand: !0
                            }
                        })
                    },
                    goPage(e) {
                        this.$store.commit("set_pageData", e), this.$router.push({
                            path: "page"
                        })
                    },
                    goWhite() {
                        this.$store.commit("set_WhitePaperH5Url", this.data.WhitePaperH5Url);
                        let e = this.data.WhitePaperEntranceUrl,
                            t = e.indexOf("?") > -1 ? e + "&type=2" : e + "?type=2";
                        this.goPage({
                            title: this.$t("funcList.t393"),
                            type: 4,
                            src: t
                        })
                    },
                    getPosition(e) {
                        this.$nextTick((() => {
                            var e = document.querySelector("#goods_list .item:nth-of-type(1)").offsetTop,
                                t = document.querySelector("#goods_list .item:nth-of-type(1)").offsetLeft;
                            document.querySelector(".wrapper").style.top = e + "px", document.querySelector(".wrapper").style.left = t + "px", scrollTo(0, e - 100)
                        }))
                    },
                    getIsTurnRequest() {
                        const e = this;
                        let t = this.$api.IsSubOrderByUser;
                        var i = {
                            UserID: localStorage.getItem("userId"),
                            Type: 3,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        };
                        this.axios.post(t, i).then((t => {
                            window.localStorage.setItem("isShuaState", 1), e.isShuaState = "1"
                        })).catch((t => {
                            window.localStorage.setItem("isShuaState", 0), e.isShuaState = "0", e.showGuide1()
                        }))
                    },
                    pecCount(e, t) {
                        let i = new(d())(e).div(new(d())(t));
                        return i <= 1 ? parseInt(100 * i) : 100
                    },
                    getinv() {
                        let e = this.getUrlQueryString("InviteCode");
                        e && window.localStorage.setItem("invite_code", e);
                        let t = this.getUrlQueryString("appid");
                        t && window.localStorage.setItem("appid", t)
                    },
                    getUrlQueryString(e, t) {
                        t = t || window.location.href, t && t.indexOf("?") > -1 && (t = t.substring(t.indexOf("?") + 1));
                        var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                            s = t ? t.match(i) : window.location.search.substr(1).match(i);
                        return null != s && "" != s[2] ? unescape(s[2]) : null
                    },
                    goOrder(e) {
                        this.$store.commit("set_hpData", {}), this.$router.push({
                            path: "/orderGrabbing",
                            query: {
                                id: e
                            }
                        })
                    },
                    goSenOrder(e, t, i, s) {
                        this.$store.commit("set_hpData", {
                            rsra: t,
                            sra: i,
                            rate: s
                        }), this.$router.push({
                            path: "/orderGrabbing",
                            query: {
                                id: e
                            }
                        })
                    },
                    changeNavIndex(e) {
                        this.navIndex = e
                    },
                    close_newNovice() {
                        this.isNewNoviceShow = !1
                    },
                    goLogin() {
                        this.$router.push("login")
                    },
                    novicebtn() {
                        sessionStorage.getItem("token"), this.goPage({
                            title: this.$t("Home.text34"),
                            src: this.customerServiceUrl
                        })
                    },
                    inrulesbtn() {
                        this.toogleAlert(2), this.toogleShare()
                    },
                    openShare() {
                        console.log()
                    },
                    toogleShare(e) {
                        this.shareUrl = 1 == e ? this.shareUrl1 : this.shareUrl2, this.isShareShow = !this.isShareShow
                    },
                    getHomeData() {
                        const e = this;
                        e.axios.post(e.$api.home, {
                            UserID: e.$store.state.userId,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        }).then((function(t) {
                            let i = t.data.Data;
                            var s = window.localStorage.getItem("lang");
                            for (let e in i)
                                if (-1 != e.indexOf("Url")) {
                                    if (null == i[e] || "" == i[e]) continue; - 1 != i[e].indexOf("?") ? i[e] = i[e] + "&lang=" + s : i[e] = i[e] + "?lang=" + s
                                }
                            e.data = i, e.shareUrl1 = i.ShareUrl, e.shareUrl2 = i.ProductShareUrl, window.localStorage.setItem("IncomeExplainShareUrl", i.IncomeExplainShareUrl)
                        })).catch((function(e) {}))
                    },
                    getH5() {
                        const e = this;
                        e.axios.post(e.$api.getH5, {
                            UserID: e.$store.state.userId,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        }).then((function(e) {
                            e.data.Data
                        })).catch((function(e) {}))
                    },
                    getCarouselData() {
                        const e = this;
                        e.axios.post(e.$api.carousel, {
                            UserID: e.$store.state.userId || 0,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        }).then((function(t) {
                            let i = t.data.Data;
                            e.carouseldata = i
                        })).catch((function(e) {}))
                    },
                    getHomeProduct() {
                        const e = this;
                        e.axios.post(e.$api.homeProduct, {
                            UserID: e.$store.state.userId || 0,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        }).then((function(t) {
                            let i = t.data.Data;
                            e.homeProduct = i
                        })).catch((function(e) {}))
                    },
                    GetShopbSeniorPros() {
                        const e = this;
                        e.axios.post(e.$api.GetShopbSeniorPros, {
                            UserID: e.$store.state.userId || 0,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        }).then((function(t) {
                            let i = t.data.Data;
                            e.homeProduct2 = i
                        })).catch((function(e) {}))
                    },
                    withdrawIncrease() {
                        const e = this;
                        e.data.UsableIncreaseAmount > 0 ? e.axios.post(e.$api.withdrawIncrease, {
                            UserID: e.$store.state.userId,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        }).then((function(t) {
                            e.getHomeData(), e.withIncrease.isAlertShow = !1, e.earningsShow1 = !0, e.earningContent1 = !0
                        })).catch((function(t) {
                            e.$message({
                                message: t.Message,
                                type: "error"
                            }), e.getHomeData(), e.withIncrease.isAlertShow = !1, e.earningsShow2 = !0, e.earningContent2 = !0
                        })) : (e.earningsShow2 = !0, e.earningContent2 = !0)
                    },
                    showGuide1(e = 1) {
                        let t = this.$store.state.userId;
                        var i = this.isShuaState;
                        let s = JSON.parse(window.localStorage.getItem("isShuaStateExpTime")),
                            o = s ? [].concat(s) : [],
                            a = o.find((e => e.userId == t));
                        if (this.logGuide1ShowData = o, 2 == e) this.changeNavIndex(1), this.guide.isAlertShow = !0;
                        else if ("0" == i)
                            if (a) {
                                let e = (new Date).getTime();
                                e > a.curTime && (o = o.map((e => {
                                    let i = e;
                                    return i.userId == t && (i.curTime = this.oneDay()), i
                                })), this.logGuide1ShowData = o, this.changeNavIndex(1), this.guide.isAlertShow = !0)
                            } else o.push({
                                curTime: this.oneDay(),
                                userId: t
                            }), this.logGuide1ShowData = o, this.changeNavIndex(1), this.guide.isAlertShow = !0
                    },
                    logGuide1Show() {
                        window.localStorage.setItem("isShuaStateExpTime", JSON.stringify(this.logGuide1ShowData))
                    },
                    showGuide2() {
                        this.getPosition(), this.isShua = !0
                    },
                    toogleAlert(e) {
                        switch (e) {
                            case 1:
                                this.novice.isAlertShow = !this.novice.isAlertShow;
                                window.localStorage.getItem("token"), this.$store.state.userId;
                                break;
                            case 2:
                                this.inRules.isAlertShow = !this.inRules.isAlertShow, this.inRules.isAlertShow && (this.microApp.App = (0, S.Z)(this.data.RuleUrl.replace(/^http(s?)/g, "https")));
                                break
                        }
                    },
                    getUserRedPack() {
                        const e = this;
                        e.axios.post(e.$api.getUserRedPack, {
                            UserID: e.$store.state.userId,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        }).then((function(t) {
                            let i = t.data.Data;
                            0 == i.RedPackStatus ? e.gdayalertss() : e.showNovice2()
                        })).catch((function(e) {}))
                    },
                    IsGotRedPack() {
                        const e = this;
                        e.axios.post(e.$api.IsGotRedPack, {
                            UserID: e.$store.state.userId,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        }).then((function(t) {
                            let i = t.data;
                            window.localStorage.setItem("isRedPackFirstShow", i.IsGot), i.IsGot ? e.getUserRedPack() : e.gdayalertss()
                        })).catch((function(e) {}))
                    },
                    gdayalertss() {
                        let e = new Date,
                            t = e.getTime(),
                            i = window.localStorage.getItem("isAlertSS3ExpTime") || t,
                            s = parseInt(i) - t;
                        s > 0 ? (this.isNewNoviceShow = !1, this.showNovice2()) : (this.isNewNoviceShow = !1, this.showNovice2(), window.localStorage.setItem("isAlertSS3ExpTime", this.oneDay()))
                    },
                    oneDay() {
                        return c()().endOf("day").valueOf()
                    },
                    showNovice2() {
                        let e = this.$store.state.userId,
                            t = JSON.parse(window.localStorage.getItem("novice2ExpTime")),
                            i = t ? [].concat(t) : [],
                            s = i.find((t => t.userId == e));
                        if (s) {
                            let t = (new Date).getTime();
                            t > s.curTime && (this.novice.isAlertShow = !0, i = i.map((t => {
                                let i = t;
                                return i.userId == e && (i.curTime = this.oneDay()), i
                            })), window.localStorage.setItem("novice2ExpTime", JSON.stringify(i)))
                        } else this.novice.isAlertShow = !0, i.push({
                            curTime: this.oneDay(),
                            userId: e
                        }), window.localStorage.setItem("novice2ExpTime", JSON.stringify(i))
                    },
                    twoDays() {
                        let e = JSON.parse(this.$store.state.userData).CreateTimestamp;
                        if (e) {
                            let t = (new Date).getTime();
                            this.isTwoDays = t - e < 2592e5
                        }
                    },
                    GetConfigureInformation() {
                        this.axios.post(this.$api.GetConfigureInformation, {
                            UserID: this.$store.state.userId,
                            Timestamp: parseInt((new Date).getTime() / 1e3)
                        }).then((e => {
                            this.configInfo = e.data.Data
                        })).catch((e => {}))
                    },
                    toHttps() {
                        const e = "https:";
                        window.location.protocol != e && "localhost" !== window.location.hostname && (window.location.href = e + window.location.href.substring(window.location.protocol.length))
                    }
                },
                filters: {
                    rate(e) {
                        let t = new(d())(e).mul(new(d())(100));
                        return t.toNumber()
                    }
                },
                watch: {
                    noviceGuide: {
                        handler(e, t) {
                            e.guide.isAlertShow && !e.novice.isAlertShow && this.logGuide1Show()
                        },
                        deep: !0
                    },
                    logGuide(e, t) {
                        e && this.logGuide1Show()
                    }
                },
                computed: {
                    defaultImg() {
                        return 'this.src="' + i(99210) + '"'
                    },
                    username: function() {
                        let e = JSON.parse(window.localStorage.getItem("userData"));
                        return e ? e.EMail || this.data.Phone : "0000000000"
                    },
                    noviceGuide: function() {
                        const {
                            novice: e,
                            guide: t
                        } = this;
                        return {
                            novice: e,
                            guide: t
                        }
                    },
                    logGuide() {
                        return !this.novice.isAlertShow && this.guide.isAlertShow
                    },
                    logUnOrder() {
                        return !this.novice.isAlertShow && !this.guide.isAlertShow && !this.isShua && this.unfinishedTask.isShow
                    }
                },
                created() {
                    this.initializa(), this.toHttps();
                    var e = window.localStorage.getItem("token");
                    e && (this.getIsTurnRequest(), this.getUnfinisedState(), this.GetConfigureInformation(), this.IsGotRedPack(), this.customerServiceUrl = this.$store.state.userData.CustomerServiceUrl)
                },
                mounted() {
                    var e = window.localStorage.getItem("token");
                    e ? this.twoDays() : (this.novice.isAlertShow = !0, this.routerState = !0);
                    const t = navigator.userAgent;
                    let i = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                    i || this.downloadBlockShow(), this.getCarouselData(), this.getHomeProduct(), this.getHomeData(), this.getinv(), this.GetShopbSeniorPros()
                },
                beforeDestroy() {
                    Object.keys(this.microApp.App).length > 0 && this.microApp.App.unmount()
                },
                destroyed() {
                    Object.keys(this.microApp.App).length > 0 && this.microApp.App.unmount()
                }
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [9714, 7667, 3007, 6878, 1826, 2067, 9988, 6015, 1043, 5685, 8660, 1254, 1569, 3192, 9261, 1785, 6623, 3465, 6847, 4768, 1385, 355, 8674, 1581, 1625, 2625, 3435, 8661, 2924, 3594, 1749, 2732, 6060, 1124, 5264, 4880, 5532, 767, 6824, 3487, 1403, 6596, 9318, 506, 5031, 8429, 325, 5605], (function() {
            return t(57350)
        }));
        e.O()
    }
]);