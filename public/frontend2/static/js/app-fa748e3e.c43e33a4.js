"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [5605], {
        44548: function(t, s, e) {
            e.d(s, {
                Z: function() {
                    return r
                }
            });
            var i = function() {
                    var t = this,
                        s = t._self._c;
                    return s("div", {
                        ref: "cter",
                        staticClass: "container"
                    }, [s("div", {
                        attrs: {
                            id: "home"
                        }
                    }, [s("div", {
                        attrs: {
                            id: "user_message"
                        }
                    }, [s("div", {
                        attrs: {
                            id: "avatar"
                        }
                    }, [s("img", {
                        attrs: {
                            src: t.data.Avatar || t.placeHolderNothing,
                            onerror: t.defaultImg,
                            alt: ""
                        }
                    })]), s("div", {
                        attrs: {
                            id: "message"
                        }
                    }, [s("p", [t._v(t._s(t.username))])]), s("div", {
                        staticClass: "right",
                        on: {
                            click: function(s) {
                                return t.$router.push("recharge")
                            }
                        }
                    }, [s("span", [t._v(t._s(t.$t("Home.text35")))])])]), s("div", {
                        staticClass: "swiper-no-swiping",
                        attrs: {
                            id: "swiper_list"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "swiper",
                            rawName: "v-swiper:mySwiper",
                            value: t.swiperOption,
                            expression: "swiperOption",
                            arg: "mySwiper"
                        }]
                    }, [s("div", {
                        staticClass: "swiper-wrapper"
                    }, t._l(t.carouseldata, (function(e) {
                        return s("p", {
                            key: e.id,
                            staticClass: "swiper-slide",
                            staticStyle: {
                                "white-space": "nowrap",
                                transform: "scale(0.9)",
                                "transform-origin": "left"
                            }
                        }, [t._v(" " + t._s(e.DesValue) + " ")])
                    })), 0)])]), s("div", {
                        attrs: {
                            id: "income_message"
                        }
                    }, [s("div", {
                        attrs: {
                            id: "total"
                        }
                    }, [s("p", [s("span", [t._v(t._s(t.$t("common.CS")))]), t._v(t._s(t._f("newNumberFormat")(t.data.Balance, 2)) + " ")]), s("p", [t._v(" +" + t._s(t.$t("common.CS")) + t._s(t._f("newNumberFormat")(t.data.TodayIncome, 2)) + " " + t._s(t.$t("Home.text36")) + " ")])]), s("div", {
                        staticClass: "right"
                    }, [s("div", {
                        staticClass: "item"
                    }, [s("p", [s("span", [t._v(t._s(t.$t("common.CS")))]), t._v(t._s(t._f("newNumberFormat")(t.data.VirtualGold, 2)) + " ")]), s("p", [t._v(t._s(t.$t("Home.text7")))])]), s("div", {
                        staticClass: "item"
                    }, [s("p", [s("span", [t._v(t._s(t.$t("common.CS")))]), t._v(t._s(t._f("newNumberFormat")(t.data.TotalIncome, 2)) + " ")]), s("p", [t._v(t._s(t.$t("Home.text8")))])])])]), s("div", {
                        staticClass: "value"
                    }, [s("div", {
                        staticClass: "top"
                    }, [s("div", {
                        staticClass: "left"
                    }, [s("div", {
                        staticClass: "texten"
                    }, [s("p", {
                        domProps: {
                            innerHTML: t._s(t.$t("Home.text37"))
                        }
                    })]), s("div", {
                        staticClass: "right"
                    }, [t._v(t._s(t.data.IncreaseRateDes))])]), s("div", {
                        staticClass: "aturan",
                        domProps: {
                            innerHTML: t._s(t.$t("Home.text3"))
                        },
                        on: {
                            click: function(s) {
                                return t.toogleAlert(2)
                            }
                        }
                    })]), s("div", {
                        staticClass: "mid"
                    }, [s("div", {
                        staticClass: "left",
                        on: {
                            click: function(s) {
                                return t.$router.push("/increaseAmount")
                            }
                        }
                    }, [s("p", [t._v(" " + t._s(t.$t("common.MOC")) + t._s(t._f("newNumberFormat")(t.data.IncreaseAmount, 2)) + " ")]), s("p", [s("span", {
                        domProps: {
                            innerHTML: t._s(t.$t("Home.text5"))
                        }
                    }), s("img", {
                        staticClass: "icon_03",
                        attrs: {
                            src: e(10719),
                            alt: ""
                        }
                    })])]), s("div", {
                        staticClass: "right"
                    }, [s("p", [t._v(" " + t._s(t.$t("common.MOC")) + t._s(t._f("newNumberFormat")(t.data.UsableIncreaseAmount, 2)) + " ")]), s("p", [t._v(t._s(t.$t("Home.text10")))])])]), s("div", {
                        staticClass: "btns"
                    }, [s("div", {
                        staticClass: "btn",
                        class: {
                            on: t.data.UsableIncreaseAmount > 0
                        },
                        on: {
                            click: t.toogleShare
                        }
                    }, [t._v(" " + t._s(t.$t("Home.text9")) + " ")]), s("div", {
                        staticClass: "whitePaper",
                        class: {
                            on: t.data.UsableIncreaseAmount <= 0
                        },
                        on: {
                            click: t.withdrawIncrease
                        }
                    }, [s("span", {
                        domProps: {
                            innerHTML: t._s(t.$t("Home.text12"))
                        }
                    })])])]), s("div", {
                        staticClass: "nav"
                    }, [s("div", {
                        staticClass: "item",
                        class: {
                            on: 1 == t.navIndex
                        },
                        on: {
                            click: function(s) {
                                return t.changeNavIndex(1)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("Home.text13")) + " ")]), s("div", {
                        staticClass: "item",
                        class: {
                            on: 2 == t.navIndex
                        },
                        on: {
                            click: function(s) {
                                return t.changeNavIndex(2)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("Home.text14")) + " "), s("span", {
                        staticClass: "vipTips"
                    }, [s("img", {
                        attrs: {
                            src: e(73487)(`./jiaobiao_${this.$i18n.locale}.gif`),
                            alt: ""
                        }
                    })])])]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == t.navIndex,
                            expression: "navIndex == 1"
                        }],
                        attrs: {
                            id: "goods_list"
                        }
                    }, t._l(t.homeProduct, (function(e) {
                        return s("div", {
                            key: e.Id,
                            on: {
                                click: function(s) {
                                    return t.goOrder(e.Id)
                                }
                            }
                        }, [s("div", {
                            staticClass: "item"
                        }, [s("div", {
                            staticClass: "goods_img"
                        }, [s("div", {
                            staticClass: "before"
                        }, [s("span", [t._v("+" + t._s(t.$t("common.CS")) + t._s(t._f("newNumberFormat")(e.DayIncome, 2)) + "/" + t._s(t.$t("funcList.t764")))])]), s("img", {
                            attrs: {
                                src: e.Img.replace(/^http(s?)/g, "https"),
                                onerror: t.defaultImg,
                                alt: ""
                            }
                        }), s("div", {
                            staticClass: "after"
                        }, [t._v(t._s(e.LevelName))])]), s("p", [t._v(t._s(t.$t("common.CS")) + t._s(t._f("newNumberFormat")(e.Amount, 2)))]), s("p", {
                            staticClass: "nn"
                        }, [t._v(t._s(e.Name))])])])
                    })), 0), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 2 == t.navIndex,
                            expression: "navIndex == 2"
                        }],
                        attrs: {
                            id: "goods_list2"
                        }
                    }, t._l(t.homeProduct2, (function(e, i) {
                        return s("div", {
                            key: e.Id,
                            staticClass: "item",
                            on: {
                                click: function(s) {
                                    return t.goSenOrder(e.Id, e.RequireSubRechargeAmount, e.SubRechargeAmount, e.SubRechargeAchieveRate)
                                }
                            }
                        }, [s("div", {
                            staticClass: "before"
                        }, [s("span", [t._v("+" + t._s(t.$t("common.CS")) + t._s(t._f("newNumberFormat")(e.DayIncome, 2)) + "/" + t._s(t.$t("funcList.t764")))])]), s("div", {
                            staticClass: "left"
                        }, [s("img", {
                            attrs: {
                                src: e.Img.replace(/^http(s?)/g, "https"),
                                alt: "",
                                onerror: t.defaultImg
                            }
                        }), s("div", {
                            staticClass: "after"
                        }, [t._v(t._s(e.LevelName))])]), s("div", {
                            staticClass: "right"
                        }, [s("p", {
                            staticClass: "name"
                        }, [t._v(t._s(e.Name))]), s("span", [t._v(t._s(0 == i ? t.$t("funcList.t776") : t.$t("funcList.t777")))]), s("p", {
                            staticClass: "money"
                        }, [t._v(" " + t._s(t.$t("common.CS")) + t._s(t._f("newNumberFormat")(e.Amount, 2)) + " ")]), s("p", {
                            staticClass: "dic"
                        }, [t._v(" " + t._s(t.$t("Home.text15")) + " " + t._s(t.$t("common.CS")) + t._s(e.RequireSubRechargeAmount) + " ")]), s("div", {
                            staticClass: "bottom"
                        }, [s("div", {
                            staticClass: "proc"
                        }, [s("div", {
                            staticClass: "bar",
                            style: {
                                width: e.SubRechargeAchieveRate > 100 ? "100%" : e.SubRechargeAchieveRate + "%"
                            }
                        })]), s("div", {
                            staticClass: "pec"
                        }, [t._v(" " + t._s(e.SubRechargeAchieveRate > 100 ? 100 : e.SubRechargeAchieveRate) + "% ")])])])])
                    })), 0), s("div", {
                        staticClass: "join"
                    }, [s("router-link", {
                        attrs: {
                            to: "redpack"
                        }
                    }, [s("img", {
                        attrs: {
                            src: e(53701)(`./right_${this.$i18n.locale}.gif`),
                            alt: ""
                        }
                    })])], 1), t.isTwoDays ? s("div", {
                        staticClass: "join1",
                        on: {
                            click: function(s) {
                                return t.showGuide1(2)
                            }
                        }
                    }, [s("img", {
                        attrs: {
                            src: e(41595)(`./right2_${this.$i18n.locale}.gif`),
                            alt: ""
                        }
                    })]) : t._e(), null == t.$store.state.token ? s("div", {
                        attrs: {
                            id: "hm"
                        },
                        on: {
                            click: t.goLogin
                        }
                    }) : t._e()]), t.inRules.isAlertShow ? s("Alert", {
                        attrs: {
                            title: t.inRules.title,
                            hasClose: t.inRules.hasClose
                        },
                        on: {
                            closeAlert: function(s) {
                                return t.toogleAlert(2)
                            }
                        }
                    }, [s("div", {
                        staticClass: "content",
                        staticStyle: {
                            "max-height": "2.6rem",
                            overflow: "scroll"
                        },
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [s("div", {
                        staticClass: "iframe"
                    }, [s("div", {
                        attrs: {
                            id: "yourContainer"
                        }
                    })])]), s("div", {
                        staticClass: "content",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [s("div", {
                        staticClass: "btn",
                        staticStyle: {
                            position: "relative",
                            "z-index": "23"
                        },
                        on: {
                            click: t.inrulesbtn
                        }
                    }, [t._v(" " + t._s(t.$t("Home.text16")) + " ")])])]) : t._e(), t.new_novice2 ? s("Alert", {
                        attrs: {
                            title: t.novice.title,
                            hasClose: t.novice.hasClose
                        }
                    }, [s("div", {
                        staticClass: "content sure",
                        staticStyle: {
                            position: "fixed",
                            right: "0",
                            bottom: "0",
                            left: "0",
                            top: "0",
                            "-webkit-overflow-scrolling": "touch",
                            "overflow-y": "scroll",
                            padding: "0.15rem 0.2rem",
                            "margin-top": "0.45rem",
                            "max-height": "3rem"
                        },
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [s("iframe", {
                        staticStyle: {
                            overflow: "scroll !important",
                            "-webkit-overflow-scrolling": "touch !important"
                        },
                        attrs: {
                            src: t.novice.url.replace(/^http(s?)/g, "https"),
                            frameborder: "0",
                            width: "100%",
                            height: "100%"
                        }
                    })]), s("div", {
                        staticClass: "content",
                        staticStyle: {
                            "margin-top": "3.4rem"
                        },
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [s("div", {
                        staticClass: "btn",
                        staticStyle: {
                            position: "relative",
                            "z-index": "23"
                        },
                        on: {
                            click: t.novicebtn
                        }
                    }, [t._v(" " + t._s(t.$t("Home.text17")) + " ")])])]) : t._e(), s("Share", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShareShow,
                            expression: "isShareShow"
                        }],
                        attrs: {
                            url: t.shareUrl,
                            show: t.isShareShow
                        },
                        on: {
                            closeShare: t.toogleShare,
                            openShare: function(s) {
                                return t.openShare()
                            }
                        }
                    }), s("Footer", {
                        attrs: {
                            path: "home"
                        }
                    }), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isNewNoviceShow,
                            expression: "isNewNoviceShow"
                        }],
                        staticClass: "new_novice"
                    }, [s("div", {
                        staticClass: "hm"
                    }), s("div", {
                        staticClass: "content"
                    }, [s("div", {
                        staticClass: "top"
                    }, [s("img", {
                        attrs: {
                            src: e(49092),
                            alt: ""
                        }
                    }), s("p", [t._v(t._s(t.$t("Home.text18")))]), s("p", [t._v(t._s(t.$t("Home.text19")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("p", [t._v(t._s(t.$t("Home.text20")))]), s("p", [t._v(" " + t._s(t.$t("Home.text21")) + " " + t._s(t.$t("common.CS")) + t._s(t.RedPackMinWithdrawMoney + " ") + " " + t._s(t.$t("Home.text22")) + " ")]), s("div", {
                        staticClass: "btn",
                        on: {
                            click: function(s) {
                                return t.$router.push("redPack")
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("Home.text23")) + " ")])])])]), t.novice.isAlertShow ? s("div", {
                        staticClass: "alert new_novice2"
                    }, [s("div", {
                        staticClass: "hm"
                    }), s("div", {
                        staticClass: "content"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("Home.text24")))]), s("div", {
                        staticClass: "c",
                        staticStyle: {
                            position: "fixed",
                            right: "0",
                            bottom: "0",
                            left: "0",
                            top: "0",
                            "-webkit-overflow-scrolling": "touch",
                            "overflow-y": "scroll",
                            padding: "0rem 0.12rem",
                            "margin-top": "0.7rem",
                            "max-height": "2.7rem"
                        }
                    }, [s("iframe", {
                        staticStyle: {
                            overflow: "scroll !important",
                            "-webkit-overflow-scrolling": "touch !important"
                        },
                        attrs: {
                            src: t.novice.url.replace(/^http(s?)/g, "https"),
                            frameborder: "0",
                            width: "100%",
                            height: "100%"
                        }
                    })]), s("div", {
                        staticClass: "btns"
                    }, [s("div", {
                        staticClass: "btn",
                        on: {
                            click: function(s) {
                                return t.toogleAlert(1)
                            }
                        }
                    }, [t._v(t._s(t.$t("Home.text25")))])]), s("div", {
                        staticClass: "close",
                        on: {
                            click: function(s) {
                                return t.toogleAlert(1)
                            }
                        }
                    })])]) : t._e(), t.logGuide ? s("div", {
                        staticClass: "alertGuide"
                    }, [s("div", {
                        staticClass: "hmGuide"
                    }), s("div", {
                        staticClass: "wrapGuide"
                    }, [s("div", {
                        staticClass: "closeGuide",
                        on: {
                            click: t.closeGuide
                        }
                    }), s("div", {
                        staticClass: "titleGuide"
                    }, [t._v(t._s(t.$t("Home.text26")))]), s("div", {
                        staticClass: "contentGuide"
                    }, [s("p", [t._v(" " + t._s(t.$t("Home.text27")) + " ")])]), s("div", {
                        staticClass: "btnGuide",
                        on: {
                            click: t.btnGuide
                        }
                    }, [t._v(t._s(t.$t("funcList.t783")))])])]) : t._e(), t.isShua ? s("div", {
                        staticClass: "wrapper"
                    }, [s("div", {
                        staticClass: "layer",
                        on: {
                            click: function(s) {
                                return t.jump()
                            }
                        }
                    }), s("div", {
                        staticClass: "text"
                    }, [t._v(" " + t._s(t.$t("Home.text29")) + t._s(t.$t("common.CS")) + t._s(t._f("newNumberFormat")(t.homeProduct[0].Amount, 2)) + t._s(t.$t("Home.text29_1")) + " ")])]) : t._e(), t.routerState ? s("div", {
                        staticClass: "rpt",
                        on: {
                            click: function(s) {
                                return t.$router.push("/login")
                            }
                        }
                    }) : t._e(), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.lotteryPopupShow,
                            expression: "lotteryPopupShow"
                        }],
                        staticClass: "lotteryPopup"
                    }, [s("img", {
                        staticClass: "close2_icon",
                        attrs: {
                            src: e(56722),
                            alt: ""
                        },
                        on: {
                            click: function(s) {
                                t.lotteryPopupShow = !1
                            }
                        }
                    }), s("div", {
                        staticClass: "lotteryPopup_con"
                    }, [s("p", {
                        staticClass: "title_cls",
                        domProps: {
                            innerHTML: t._s(t.$t("Home.text1"))
                        }
                    }), s("p", {
                        staticClass: "lotteryPopupImg_txt"
                    }, [s("span", {
                        domProps: {
                            innerHTML: t._s(t.$t("Home.text30"))
                        }
                    })]), s("p", {
                        staticClass: "lotteryPopup_button",
                        on: {
                            click: t.toLotteryPage
                        }
                    }, [t._v(" " + t._s(t.$t("Home.text2")) + " ")])])]), t.withIncrease.isAlertShow ? s("Alert", {
                        staticClass: "alertSS",
                        attrs: {
                            title: t.withIncrease.title,
                            hasClose: t.withIncrease.hasClose
                        },
                        on: {
                            closeAlert: t.popupShow
                        }
                    }, [s("div", {
                        staticClass: "content",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [s("p", [t._v(t._s(t.$t("funcList.t368")))]), s("div", {
                        staticClass: "btn",
                        on: {
                            click: t.withdrawIncrease
                        }
                    }, [t._v(" " + t._s(t.$t("funcList.t366")) + " ")])])]) : t._e(), t.sellTPC.isAlertShow ? s("SellCoin", {
                        attrs: {
                            ownCoin: t.data.UsableIncreaseAmount
                        },
                        on: {
                            closeSC: t.closeSC
                        }
                    }) : t._e(), t.popUpBannerShow ? s("Alert", {
                        attrs: {
                            title: t.$t("funcList.t828"),
                            hasClose: !0
                        },
                        on: {
                            closeAlert: function(s) {
                                t.popUpBannerShow = !1
                            }
                        }
                    }, [s("div", {
                        staticClass: "content",
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [s("p", {
                        staticClass: "lfcprice_cls"
                    }, [t._v(" " + t._s(t._f("newNumberFormat")(t.data.IncreaseAmount, 2)) + " ")]), s("p", [s("span", {
                        staticClass: "lfcprice_title"
                    }, [t._v(t._s(t.$t("funcList.t823")))])]), s("p", {
                        staticClass: "lfcprice_inl"
                    }, [t._v(t._s(t.$t("funcList.t824")))]), s("p", {
                        ref: "lfcpriceScoll",
                        staticClass: "lfcprice_scoll",
                        style: {
                            height: t.clientHeight,
                            overflow: t.overValue
                        }
                    }, [t._v(" " + t._s(t.$t("funcList.t825")) + " ")]), s("p", {
                        staticClass: "lfcprice_look",
                        on: {
                            click: t.viewMore
                        }
                    }, [s("span", [t._v(t._s(t.$t("funcList.t826")))]), s("img", {
                        staticClass: "selecticon_cls",
                        attrs: {
                            src: e(62863),
                            alt: ""
                        }
                    })]), s("div", {
                        staticClass: "btn",
                        on: {
                            click: function(s) {
                                t.popUpBannerShow = !1, t.isShareShow = !0
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("funcList.t827")) + " ")])])]) : t._e(), t.downloadBlock.isShow ? s("Download", {
                        on: {
                            downloadBlockClose: t.downloadBlockClose
                        }
                    }) : t._e(), t.logUnOrder ? s("UnfinishedTask", t._b({
                        on: {
                            close: t.unfinishedTaskClose
                        }
                    }, "UnfinishedTask", t.unfinishedTask, !1)) : t._e(), s("EarningsShow", {
                        attrs: {
                            isEarningsShow: t.earningsShow1,
                            earningContent1: t.earningContent1
                        },
                        on: {
                            cancelGo: t.cancelGo,
                            cancelEarning1: t.cancelEarning1
                        }
                    }), s("EarningsShow", {
                        attrs: {
                            isEarningsShow: t.earningsShow2,
                            earningContent2: t.earningContent2
                        },
                        on: {
                            cancelEarning1: t.cancelEarning2
                        }
                    })], 1)
                },
                a = [],
                o = e(58615),
                n = o.Z,
                c = e(1001),
                l = (0, c.Z)(n, i, a, !1, null, "8c4b8248", null),
                r = l.exports
        },
        92614: function(t, s, e) {
            e.d(s, {
                Z: function() {
                    return r
                }
            });
            var i = function() {
                    var t = this,
                        s = t._self._c;
                    return s("div", {
                        attrs: {
                            id: "sellCoin"
                        }
                    }, [s("div", {
                        staticClass: "sellCoinhm",
                        on: {
                            click: t.closeSC
                        }
                    }), t.tips.isAlertShow ? t._e() : s("div", {
                        staticClass: "block block1"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("sellCoin.text1")))]), s("div", {
                        staticClass: "navs"
                    }, t._l(t.navs, (function(e) {
                        return s("div", {
                            key: e.id,
                            staticClass: "nav",
                            class: {
                                on: t.navId == e.id
                            },
                            domProps: {
                                innerHTML: t._s(e.text)
                            },
                            on: {
                                click: function(s) {
                                    return t.changeNav(e.id)
                                }
                            }
                        })
                    })), 0), s("div", {
                        staticClass: "price"
                    }, [s("p", [t._v(" " + t._s(t.$t("common.MOC")) + t._s(t._f("newNumberFormat")(1, 0)) + "=" + t._s(t.$t("common.CS")) + t._s(t._f("newNumberFormat")(t.currPrice, 2)) + " ")])]), s("p", {
                        staticClass: "text1"
                    }, [t._v(" " + t._s(2 == t.navId ? t.$t("sellCoin.text2") : t.$t("sellCoin.text17")) + " ")]), 2 == t.navId ? s("div", {
                        staticClass: "text2"
                    }, [s("p", [t._v(" " + t._s(t.$t("sellCoin.text3")) + t._s(t.$t("common.MOC")) + t._s(t.minimumQuantity) + " ")])]) : t._e(), s("p", {
                        staticClass: "text3"
                    }, [t._v(t._s(2 == t.navId ? t.text32 : t.$t("sellCoin.text12", [t.currPrice])))]), s("div", {
                        staticClass: "btns"
                    }, [s("div", {
                        staticClass: "btn",
                        on: {
                            click: t.cancel
                        }
                    }, [t._v(t._s(t.$t("sellCoin.text4")))]), s("div", {
                        staticClass: "btn",
                        on: {
                            click: t.sell
                        }
                    }, [t._v(t._s(t.$t("sellCoin.text5")))])])]), t.tips.isAlertShow ? s("div", {
                        staticClass: "block block2"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("sellCoin.text6")))]), s("p", {
                        staticClass: "text3"
                    }, [t._v(" " + t._s(t.$t("sellCoin.text7")) + " ")]), s("div", {
                        staticClass: "btns"
                    }, [s("div", {
                        staticClass: "btn",
                        on: {
                            click: t.cancel2
                        }
                    }, [t._v(t._s(t.$t("sellCoin.text8")))]), s("div", {
                        staticClass: "btn",
                        on: {
                            click: t.sell2
                        }
                    }, [t._v(t._s(t.$t("sellCoin.text9")))])])]) : t._e()])
                },
                a = [],
                o = {
                    name: "sellCoin",
                    props: {
                        ownCoin: {
                            default: 0,
                            type: Number
                        }
                    },
                    data() {
                        return {
                            navs: [{
                                id: 1,
                                text: this.$t("sellCoin.text10")
                            }, {
                                id: 2,
                                text: this.$t("sellCoin.text11")
                            }],
                            navId: 1,
                            currPrice: 0,
                            minimumQuantity: 0,
                            text32: this.$t("sellCoin.text13"),
                            recycleInfo: {},
                            rate: 0,
                            tips: {
                                isAlertShow: !1
                            },
                            processing: !1
                        }
                    },
                    methods: {
                        changeNav(t) {
                            this.navId = t, this.changeCurrPrice()
                        },
                        cancel() {
                            this.closeSC()
                        },
                        cancel2() {
                            this.tips.isAlertShow = !1
                        },
                        sell() {
                            1 == this.navId ? this.tips.isAlertShow = !0 : this.RecycleIncrease()
                        },
                        sell2() {
                            this.RecycleIncrease()
                        },
                        closeSC() {
                            this.$emit("closeSC")
                        },
                        GetIncomeRecycleInfo() {
                            let t = this.$api.GetIncomeRecycleInfo;
                            var s = {
                                UserID: localStorage.getItem("userId"),
                                Timestamp: parseInt((new Date).getTime() / 1e3)
                            };
                            this.axios.post(t, s).then((t => {
                                let s = t.data.Data;
                                this.recycleInfo = s, this.minimumQuantity = s.LowestRecoveryPrice, this.rate = s.Bili, this.changeCurrPrice()
                            })).catch((t => {
                                this.$message({
                                    message: t.Message,
                                    type: "success"
                                })
                            }))
                        },
                        changeCurrPrice() {
                            this.currPrice = 1 == this.navId ? this.recycleInfo.PlatRate : this.recycleInfo.OrganRate
                        },
                        RecycleIncrease() {
                            if (this.processing) return;
                            this.processing = !0;
                            let t = this.$api.RecycleIncrease;
                            var s = {
                                UserID: localStorage.getItem("userId"),
                                Timestamp: parseInt((new Date).getTime() / 1e3),
                                Version: "1",
                                Type: this.navId
                            };
                            const e = this;
                            this.axios.post(t, s).then((t => {
                                let s = t.data.Data,
                                    i = "";
                                s ? (i = this.$t("sellCoin.text15"), this.closeSC()) : i = this.$t("sellCoin.text16"), this.$message({
                                    message: i,
                                    type: "success",
                                    onClose: () => {
                                        e.processing = !1
                                    }
                                })
                            })).catch((t => {
                                this.$message({
                                    message: t.Message,
                                    type: "success",
                                    onClose: () => {
                                        e.processing = !1
                                    }
                                })
                            }))
                        }
                    },
                    created() {
                        this.GetIncomeRecycleInfo()
                    }
                },
                n = o,
                c = e(1001),
                l = (0, c.Z)(n, i, a, !1, null, "257f5fb4", null),
                r = l.exports
        }
    }
]);