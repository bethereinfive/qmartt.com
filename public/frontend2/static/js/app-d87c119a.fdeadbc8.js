"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [506], {
        78132: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return c
                }
            });
            var a = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "alertShareS"
                    }, [e("div", {
                        staticClass: "hm",
                        on: {
                            click: t.closeShare
                        }
                    }), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.show ? e("div", {
                        staticClass: "share"
                    }, t._l(t.shares, (function(n) {
                        return e("div", {
                            key: n.id
                        }, [e("div", {
                            staticStyle: {
                                "border-radius": "5px",
                                overflow: "hidden"
                            }
                        }, [e("img", {
                            attrs: {
                                src: n.img,
                                alt: ""
                            },
                            on: {
                                "!click": function(e) {
                                    return t.openShare(n.channel, t.url)
                                }
                            }
                        })])])
                    })), 0) : t._e()])], 1)
                },
                s = [],
                i = {
                    name: "Share",
                    components: {},
                    props: {
                        url: {
                            type: String,
                            default: ""
                        },
                        show: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data() {
                        return {
                            text: "",
                            shares: [{
                                channel: "facebook",
                                img: n(35384)
                            }, {
                                channel: "telegram",
                                img: n(58979)
                            }, {
                                channel: "whatsapp",
                                img: n(64492)
                            }, {
                                channel: "viber",
                                img: n(17566)
                            }]
                        }
                    },
                    methods: {
                        openShare(t, e) {
                            let n = "",
                                a = "",
                                s = window.localStorage.getItem("lang");
                            a = -1 == e.indexOf("lang=") ? -1 != e.indexOf("?") ? e + "&lang=" + s : e + "?lang=" + s : e;
                            let i = encodeURIComponent(a),
                                r = this.text;
                            switch (t) {
                                case "facebook":
                                    n = `https://www.facebook.com/sharer/sharer.php?u=${i}&title=${r}`;
                                    break;
                                case "twitter":
                                    n = `https://www.twitter.com/share?text=${r}&url=${i}`;
                                    break;
                                case "viber":
                                    n = `viber://forward?text=${r}%0D%0A${i}`;
                                    break;
                                case "telegram":
                                    n = `https://t.me/share/url?url=${i}&text=${r}`;
                                    break;
                                case "whatsapp":
                                    n = `https://api.whatsapp.com/send?text=${r}%0D%0A${i}`
                            }
                            window.open(n, "_blank", "noopener"), this.ShareSuccessLog(e), this.$emit("openShare")
                        },
                        closeShare() {
                            this.$emit("closeShare")
                        },
                        blank(t) {
                            window.open(t)
                        },
                        ShareSuccessLog(t) {
                            const e = this;
                            let n = "",
                                a = e.getUrlQueryString("InviteCode", t);
                            a && (n = a.split("_")[0], e.axios.post(e.$api.ShareSuccessLog, {
                                ShareChannel: n,
                                UserID: e.$store.state.userId,
                                Timestamp: parseInt((new Date).getTime() / 1e3)
                            }).then((function(t) {})).catch((function(t) {})))
                        },
                        getUrlQueryString(t, e) {
                            e = e || window.location.href, e && e.indexOf("?") > -1 && (e = e.substring(e.indexOf("?") + 1));
                            var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                                a = e ? e.match(n) : window.location.search.substr(1).match(n);
                            return null != a && "" != a[2] ? unescape(a[2]) : null
                        },
                        getHomeData() {
                            const t = this;
                            t.axios.post(t.$api.home, {
                                UserID: t.$store.state.userId,
                                Timestamp: parseInt((new Date).getTime() / 1e3)
                            }).then((function(e) {
                                let n = e.data.Data;
                                t.text = n.ShareTitle
                            })).catch((function(t) {}))
                        }
                    },
                    mounted() {
                        this.getHomeData()
                    }
                },
                r = i,
                o = n(1001),
                l = (0, o.Z)(r, a, s, !1, null, "894bc042", null),
                c = l.exports
        },
        82642: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return c
                }
            });
            var a = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        attrs: {
                            id: "adDownload"
                        }
                    }, [t._m(0), e("div", {
                        staticClass: "mid"
                    }, [e("div", {
                        staticClass: "p1"
                    }, [t._v(t._s(t.$t("common.projectName")))]), e("div", {
                        staticClass: "p2"
                    }, [t._v(t._s(t.$t("download.text2")))])]), e("div", {
                        staticClass: "right"
                    }, [e("div", {
                        staticClass: "download",
                        on: {
                            click: t.doCopy
                        }
                    }, [t._v(t._s(t.$t("download.text3")))])]), e("div", {
                        staticClass: "close",
                        on: {
                            click: t.close
                        }
                    }, [e("img", {
                        attrs: {
                            src: n(25577),
                            alt: ""
                        }
                    })])])
                },
                s = [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "left"
                    }, [e("img", {
                        attrs: {
                            src: n(97134),
                            alt: ""
                        }
                    })])
                }],
                i = {
                    name: "download",
                    methods: {
                        getUrlQueryString(t, e) {
                            e = e || window.location.href, e && e.indexOf("?") > -1 && (e = e.substring(e.indexOf("?") + 1));
                            var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                                a = e ? e.match(n) : window.location.search.substr(1).match(n);
                            return null != a && "" != a[2] ? unescape(a[2]) : null
                        },
                        close() {
                            this.$emit("downloadBlockClose")
                        },
                        doCopy(t) {
                            this.startDownload()
                        },
                        startDownload() {
                            let t = window.localStorage.getItem("appid");
                            const e = navigator.userAgent;
                            let n = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                            if (n) this.$router.push("/");
                            else {
                                let e = 2 == t ? "l" + t : "webfx";
                                window.open(`https://dl.webfxx.com/${e}.apk`)
                            }
                        }
                    }
                },
                r = i,
                o = n(1001),
                l = (0, o.Z)(r, a, s, !1, null, "6f686b9f", null),
                c = l.exports
        },
        62405: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return c
                }
            });
            var a = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        attrs: {
                            id: "unfinishedTask"
                        }
                    }, [e("div", {
                        staticClass: "hm"
                    }), e("div", {
                        staticClass: "popup"
                    }, [e("div", {
                        staticClass: "content"
                    }, [e("p", {
                        staticClass: "p1"
                    }, [t._v(" " + t._s(t.$t("Home.text38", [t.$t("common.CS")])) + " ")]), e("p", {
                        staticClass: "p2"
                    }, [t._v(t._s(t.money))]), e("p", {
                        staticClass: "p3"
                    }, [t._v(t._s(t.$t("Home.text39")))]), e("div", {
                        staticClass: "p4"
                    }, [e("span", {
                        on: {
                            click: t.goDetail
                        }
                    }, [t._v(t._s(t.$t("Home.text40")))])])]), e("div", {
                        staticClass: "close",
                        on: {
                            click: t.close
                        }
                    }, [e("img", {
                        attrs: {
                            src: n(60942),
                            alt: ""
                        }
                    })])])])
                },
                s = [],
                i = {
                    name: "unfinishedTask",
                    props: {
                        money: 0,
                        productId: 0,
                        SubRechargeAmount: 0,
                        SubRechargeAchieveRate: 0,
                        RequireSubRechargeAmount: 0
                    },
                    data() {
                        return {}
                    },
                    methods: {
                        goDetail() {
                            this.$store.commit("set_sra", this.SubRechargeAmount), this.$store.commit("set_srar", this.SubRechargeAchieveRate), this.$store.commit("set_rsra", this.RequireSubRechargeAmount), this.$router.push({
                                name: "OrderGrabbing",
                                query: {
                                    id: this.productId
                                }
                            })
                        },
                        close() {
                            this.$emit("close")
                        }
                    }
                },
                r = i,
                o = n(1001),
                l = (0, o.Z)(r, a, s, !1, null, "527958d7", null),
                c = l.exports
        },
        7837: function(t, e) {
            e["Z"] = ["en-GB", "bn-BD"]
        },
        57350: function(t, e, n) {
            var a = n(7626),
                s = n.n(a),
                i = n(20144),
                r = n(84864),
                o = n(49385),
                l = n(24239),
                c = n(9669),
                u = n.n(c),
                d = n(12346),
                h = (n(38042), n(38898)),
                p = n(72044),
                m = n(65518),
                f = n(27484),
                g = n.n(f),
                v = n(70794),
                w = n(42152),
                b = n.n(w),
                x = n(72268),
                S = n.n(x),
                Z = n(17152),
                $ = n(22905),
                _ = n(52684),
                C = {
                    "en-GB": $.Z,
                    "bn-BD": _.Z
                },
                k = n(7837);
            i.ZP.use(Z.Z);
            const D = new Z.Z({
                locale: k.Z[0],
                fallbackLocale: k.Z[0],
                messages: C,
                silentTranslationWarn: !0
            });
            var y = D;
            i.ZP.use(d.Z, u()), i.ZP.prototype.$axios = u(), i.ZP.prototype.$api = h.h, i.ZP.prototype.$global = p.Z, i.ZP.use(s()), i.ZP.prototype.$message = m.y, i.ZP.filter("dateFormat", (function(t, e = 2) {
                if (t) {
                    let n = g()(t);
                    return t.toString().length < 13 && (n = g().unix(t)), 2 == e ? n.format("D.M.YYYY hh:mm:ss") : 3 == e ? n.format("D.M.YYYY hh:mm") : n.format("D.M.YYYY")
                }
                return "undefined"
            })), i.ZP.filter("keepNum", (function(t, e) {
                let n = null !== t && "undefined" != typeof t ? t.toString() : "";
                if (e > 0) {
                    let t = n.indexOf("."),
                        s = n; - 1 !== t && (s = n.slice(0, t + e + 1));
                    var a = s.indexOf(".");
                    a < 0 && (a = s.length, s += ".");
                    while (s.length <= a + e) s += "0";
                    return parseFloat(s)
                }
                return n.split(".")[0]
            })), i.ZP.filter("replaceDot", (function(t) {
                const e = ".",
                    n = ",";
                let a = null !== t && "undefined" != typeof t ? t.toString().trim() : "",
                    s = /[0-9.]+$/,
                    i = a.split(s)[0],
                    r = s.exec(a) ? s.exec(a)[0] : "",
                    [o, l = ""] = r.split("."),
                    c = 0,
                    u = "";
                if (o.length > 3)
                    for (var d = o.length - 1; d >= 0; d--) {
                        c++;
                        let t = o[d];
                        c % 3 == 0 ? (c = 0, u = 0 == d ? t + u : e + t + u) : u = t + u
                    } else u = o;
                return u = "" !== l ? u + n + l : u, u = "" !== i ? i + u : u, u
            }));
            const P = {
                decimalSeparator: ".",
                groupSeparator: ",",
                groupSize: 3
            };
            v.Z.config({
                FORMAT: P
            }), i.ZP.filter("newNumberFormat", (function(t, e = 0) {
                let n = new v.Z(t);
                return -1 == e ? n.toFormat() : -2 == e ? n < 1 ? "--" : n.dp(0, v.Z.ROUND_DOWN).toFormat() : -3 == e ? n < 1 || "" == n ? "--" : n.dp(2, v.Z.ROUND_DOWN).toFormat() : n.dp(e, v.Z.ROUND_DOWN).toFormat()
            })), i.ZP.prototype.clipboard = b(), i.ZP.use(S()), new i.ZP({
                router: o.Z,
                store: l.Z,
                i18n: y,
                render: t => t(r.Z)
            }).$mount("#app")
        },
        40435: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return p
                }
            });
            var a = n(20144),
                s = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        attrs: {
                            id: "Maintain"
                        }
                    }, [e("div", {
                        staticClass: "hm"
                    }), e("div", {
                        staticClass: "main"
                    }, [e("div", {
                        staticClass: "top"
                    }, [e("p", {
                        domProps: {
                            innerHTML: t._s(t.texts[0])
                        }
                    })]), e("div", {
                        staticClass: "content"
                    }, [e("div", {
                        staticClass: "p1",
                        domProps: {
                            innerHTML: t._s(t.texts[1])
                        }
                    })])])])
                },
                i = [],
                r = {
                    name: "Maintain"
                },
                o = r,
                l = n(1001),
                c = (0, l.Z)(o, s, i, !1, null, "f60cb01e", null),
                u = c.exports;
            const d = a.ZP.extend(u);

            function h(t, e) {
                var n = new Promise((function(n, a) {
                    const s = new d({
                        el: document.createElement("div"),
                        data() {
                            return {
                                title: t,
                                texts: e
                            }
                        }
                    });
                    document.querySelector("#Maintain") || document.querySelector("#app").appendChild(s.$el)
                }));
                return n
            }
            var p = h
        }
    }
]);