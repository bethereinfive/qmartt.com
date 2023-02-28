"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [325], {
        49385: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var a = n(20144),
                i = n(78345),
                r = n(44548),
                o = n(38042),
                s = n(24239),
                l = n(38898);

            function c() {
                o.Z.post(l.h.initializa, {
                    Version: "1",
                    Timestamp: parseInt((new Date).getTime() / 1e3),
                    UserID: s.Z.state.userId
                }).then((e => {
                    let t = e.data;
                    "{}" !== JSON.stringify(t) && s.Z.commit("set_initializa", t)
                })).catch((function(e) {}))
            }
            var m = c;
            const u = i.Z.prototype.push;
            i.Z.prototype.push = function(e, t, n) {
                return t || n ? u.call(this, e, t, n) : u.call(this, e).catch((e => {}))
            }, a.ZP.use(i.Z);
            const d = [{
                    path: "/",
                    name: "home",
                    component: r.Z
                }, {
                    path: "/login",
                    name: "Login",
                    component: () => n.e(1548).then(n.bind(n, 81548))
                }, {
                    path: "/register",
                    name: "Register",
                    component: () => n.e(9587).then(n.bind(n, 49587))
                }, {
                    path: "/share",
                    name: "share",
                    component: () => Promise.all([n.e(8322), n.e(813)]).then(n.bind(n, 78322))
                }, {
                    path: "/forgetPassword",
                    name: "ForgetPassword",
                    component: () => Promise.all([n.e(8633), n.e(9847)]).then(n.bind(n, 48633))
                }, {
                    path: "/secretSecurity",
                    name: "SecretSecurity",
                    component: () => n.e(1709).then(n.bind(n, 51709))
                }, {
                    path: "/changePassword",
                    name: "ChangePassword",
                    component: () => Promise.all([n.e(2675), n.e(7406)]).then(n.bind(n, 22675))
                }, {
                    path: "/order",
                    name: "OrderRecord",
                    component: () => Promise.all([n.e(7978), n.e(2910)]).then(n.bind(n, 97978)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/lotteryNew",
                    name: "lotteryNew",
                    component: () => Promise.all([n.e(905), n.e(7862)]).then(n.bind(n, 20905)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/orderGrabbing",
                    name: "OrderGrabbing",
                    component: () => Promise.all([n.e(3745), n.e(3737), n.e(8879)]).then(n.bind(n, 28879)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/me",
                    name: "Me",
                    component: () => Promise.all([n.e(2589), n.e(8006), n.e(2438), n.e(5740), n.e(3693), n.e(8830), n.e(7660), n.e(3296), n.e(6352), n.e(9935), n.e(2850), n.e(1279), n.e(4853), n.e(4081), n.e(3729), n.e(9239), n.e(6224), n.e(8386), n.e(9339), n.e(69), n.e(381), n.e(3161), n.e(8956), n.e(9174)]).then(n.bind(n, 98956)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/Leaderboard",
                    name: "Leaderboard",
                    component: () => Promise.all([n.e(3510), n.e(4024)]).then(n.bind(n, 10845)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/myAward",
                    name: "myAward",
                    component: () => Promise.all([n.e(5873), n.e(6377)]).then(n.bind(n, 35873)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/LeaderboardHistory",
                    name: "LeaderboardHistory",
                    component: () => Promise.all([n.e(3510), n.e(600)]).then(n.bind(n, 34397)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/memberSystem",
                    name: "MemberSystem",
                    component: () => n.e(6158).then(n.bind(n, 16158)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/accountDetails",
                    name: "AccountDetails",
                    component: () => Promise.all([n.e(5103), n.e(8547)]).then(n.bind(n, 45103)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/team",
                    name: "Team",
                    component: () => Promise.all([n.e(5879), n.e(2619)]).then(n.bind(n, 35879)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/incomeList",
                    name: "IncomeList",
                    component: () => Promise.all([n.e(7425), n.e(864)]).then(n.bind(n, 67425)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/inviteMission",
                    name: "InviteMission",
                    component: () => Promise.all([n.e(1420), n.e(2384)]).then(n.bind(n, 51420)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/memberList",
                    name: "MemberList",
                    component: () => Promise.all([n.e(7251), n.e(180)]).then(n.bind(n, 7251)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/recharge",
                    name: "Recharge",
                    component: () => Promise.all([n.e(3874), n.e(5680), n.e(5414), n.e(6237)]).then(n.bind(n, 56237)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/withdrawalRecords",
                    name: "withdrawalRecords",
                    component: () => Promise.all([n.e(7593), n.e(6430), n.e(8566)]).then(n.bind(n, 98566)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/recordDetails",
                    name: "recordDetails",
                    component: () => n.e(574).then(n.bind(n, 50574)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/mentionMoney",
                    name: "mentionMoney",
                    component: () => Promise.all([n.e(9985), n.e(6743), n.e(2056), n.e(5932)]).then(n.bind(n, 63229)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/redpack",
                    name: "RedPack",
                    component: () => Promise.all([n.e(4847), n.e(4656), n.e(7383), n.e(8231), n.e(3444)]).then(n.bind(n, 28231)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/page",
                    name: "Page",
                    component: () => n.e(8726).then(n.bind(n, 18726)),
                    meta: {
                        requireInidata: !0
                    }
                }, {
                    path: "/increaseAmount",
                    name: "IncreaseAmount",
                    component: () => Promise.all([n.e(60), n.e(6105)]).then(n.bind(n, 30060)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/billDetails",
                    name: "billDetails",
                    component: () => n.e(568).then(n.bind(n, 80568))
                }, {
                    path: "/level",
                    name: "Level",
                    component: () => Promise.all([n.e(2801), n.e(6576)]).then(n.bind(n, 92801)),
                    meta: {
                        requireAuth: !0,
                        requireInidata: !0
                    }
                }, {
                    path: "/message",
                    name: "Message",
                    component: () => Promise.all([n.e(60), n.e(7567)]).then(n.bind(n, 10058)),
                    meta: {
                        requireAuth: !0
                    }
                }, {
                    path: "/messageDetail",
                    name: "MessageDetail",
                    component: () => n.e(5550).then(n.bind(n, 15550)),
                    meta: {
                        requireAuth: !0
                    }
                }, {
                    path: "/awardlist",
                    name: "awardlist",
                    component: () => n.e(794).then(n.bind(n, 60794)),
                    meta: {
                        requireAuth: !0
                    }
                }, {
                    path: "/friendslist",
                    name: "friendslist",
                    component: () => Promise.all([n.e(4746), n.e(1665)]).then(n.bind(n, 34746)),
                    meta: {
                        requireAuth: !0
                    }
                }, {
                    path: "/WhitePaper",
                    name: "WhitePaper",
                    component: () => n.e(2808).then(n.bind(n, 22808))
                }, {
                    path: "/friendHelp",
                    name: "friendHelp",
                    component: () => Promise.all([n.e(3766), n.e(91)]).then(n.bind(n, 53766))
                }, {
                    path: "/friendHelpSecondPage",
                    name: "friendHelpSecondPage",
                    component: () => Promise.all([n.e(3874), n.e(9770)]).then(n.bind(n, 19770))
                }, {
                    path: "/friendHelpRecord",
                    name: "friendHelpRecord",
                    component: () => Promise.all([n.e(1635), n.e(8233)]).then(n.bind(n, 1635))
                }],
                p = new i.Z({
                    mode: "history",
                    base: "/",
                    routes: d
                });
            p.beforeEach(((e, t, n) => {
                e.meta.requireAuth ? localStorage.getItem("token") ? n() : n("/login") : n()
            })), p.afterEach(((e, t) => {
                window.scrollTo(0, 0), e.meta.requireInidata && (localStorage.getItem("initializa") || m())
            }));
            var h = p
        },
        2106: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return m
                }
            });
            var a = n(38042),
                i = n(24239),
                r = n(38898),
                o = n(65518);

            function s(e) {
                (0, o.y)(e)
            }
            async function l(e, t = {}, n = "", o = s) {
                let l = {
                        UserID: i.Z.state.userId,
                        Timestamp: parseInt((new Date).getTime() / 1e3),
                        ...t
                    },
                    c = null;
                try {
                    let t = await a.Z.post(r.h[e], l);
                    return "function" == typeof n && n(), c = t.data, Promise.resolve(c)
                } catch (m) {
                    return "function" == typeof o && o({
                        message: m.Message,
                        type: "error"
                    }), c = m, Promise.reject(c)
                }
            }
            var c = l;

            function m() {
                return c("GetShopbTaskReminder")
            }
        },
        24239: function(e, t, n) {
            var a = n(20144),
                i = n(20629);
            a.ZP.use(i.ZP);
            const r = new i.ZP.Store({
                state: {
                    token: window.localStorage.getItem("token"),
                    userId: window.localStorage.getItem("userId") || 0,
                    userData: window.localStorage.getItem("userData"),
                    isShowNovice: window.sessionStorage.getItem("isShowNovice"),
                    isShowNovice2: window.sessionStorage.getItem("isShowNovice2"),
                    isShowNovice2ExpTime: window.localStorage.getItem("isShowNovice2ExpTime"),
                    initializa: {},
                    ggDownload: "https://play.google.com/store/apps/details?id=com.lepin.bengali",
                    lotteryPrizeData: "",
                    hpData: {},
                    WhitePaperH5Url: "",
                    pageData: {},
                    pageData2: {},
                    lang: "",
                    selectedLang: {}
                },
                mutations: {
                    set_token(e, t) {
                        e.token = t, window.localStorage.setItem("token", t)
                    },
                    set_userId(e, t) {
                        e.userId = t, window.localStorage.setItem("userId", t)
                    },
                    set_userData(e, t) {
                        e.userData = t, window.localStorage.setItem("userData", t)
                    },
                    set_isShowNovice(e, t) {
                        e.isShowNovice = t, window.sessionStorage.setItem("isShowNovice", t)
                    },
                    set_isShowNovice2(e, t) {
                        e.isShowNovice2 = t, window.sessionStorage.setItem("isShowNovice2", t)
                    },
                    set_isShowNovice2ExpTime(e, t) {
                        e.isShowNovice2 = t, window.localStorage.setItem("isShowNovice2ExpTime", t)
                    },
                    set_initializa(e, t) {
                        e.initializa = t, window.sessionStorage.setItem("initializa", JSON.stringify(t))
                    },
                    set_lotteryPrizeData(e, t) {
                        e.lotteryPrizeData = t, window.sessionStorage.setItem("initializa", t)
                    },
                    set_hpData(e, t) {
                        e.hpData = t
                    },
                    set_WhitePaperH5Url(e, t) {
                        e.WhitePaperH5Url = t
                    },
                    set_pageData(e, t) {
                        e.pageData = t
                    },
                    set_pageData2(e, t) {
                        e.pageData2 = t
                    },
                    set_detailsData(e, t) {
                        e.detailsData = t
                    },
                    SET_LANG(e, t) {
                        e.lang = t, window.localStorage.setItem("lang", t)
                    },
                    SET_SELECTEDLANG(e, t) {
                        e.selectedLang = t, window.localStorage.setItem("langData", JSON.stringify(t))
                    }
                }
            });
            t["Z"] = r
        },
        38042: function(e, t, n) {
            var a = n(73591),
                i = n.n(a),
                r = n(9669),
                o = n.n(r),
                s = n(29489),
                l = n(72044),
                c = (n(24239), n(40435)),
                m = n(7837);
            const u = "YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4",
                d = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDipr6nAa/svkUBgIwusZhpp4CdpBGY3E+AQdDTGwgisVdeYeKKEeVn2ZDPxgQljL2QcbPWiQPu/fcPzRyBhAdPt9imSdYZDuWF5KxDulNgEMG6OjJIpoGxLK9PxKil5eIh/ILvRD4UNH9e8Zfbbny3p4sVDIeE7eHikscpP0spjwIDAQAB";

            function p(e, t) {
                t = t || window.location.href, t && t.indexOf("?") > -1 && (t = t.substring(t.indexOf("?") + 1));
                var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                    a = t ? t.match(n) : window.location.search.substr(1).match(n);
                return null != a && "" != a[2] ? unescape(a[2]) : null
            }
            let h = [];
            const g = function(e, t) {
                for (let n = 0; n < e.length; n++)
                    if (e[n] === t) {
                        e.splice(n, 1);
                        break
                    }
            };
            let w, f = {
                fullscreen: !0,
                lock: !0
            };
            const S = () => {
                    w = i().service(f)
                },
                I = () => {
                    w.close()
                };
            let b = 0;
            const P = () => {
                    b || S(), b++
                },
                D = () => {
                    b--, b || I()
                };
            o().interceptors.request.use((e => {
                let t;
                e.cancelToken = new(o().CancelToken)((function(e) {
                    t = e
                }));
                let n = window.localStorage.getItem("lang");
                n && -1 == m.Z.indexOf(n) && (n = m.Z[0]);
                let a = e.url;
                e.url = e.url + "&language=" + n, "SubmitOrder" !== a.split("=").pop() && -1 == a.indexOf("act=click") && P(), e.headers["Content-Type"] = "text/plain";
                let i = (0, s.R9)(JSON.stringify(e.data) + d),
                    r = {
                        Sys: {
                            ClientType: "web",
                            CurVersion: "1.00.01",
                            DeviceType: "DeviceType",
                            AppID: window.localStorage.getItem("appid") || 1,
                            Imei: l.Z.guuid
                        },
                        Sign: i,
                        Token: {
                            LoginToken: window.localStorage.getItem("token") || ""
                        }
                    };
                return e.data = JSON.stringify(e.data), r.Data = (0, s.K2)(u, e.data), e.data = r, "post" == e.method && (e.data = JSON.stringify(e.data)), e
            }), (e => (console.log(e), D(), Promise.reject(e))));
            const y = ["GetGoShopbCarouselData", "GetShopbHomeHeadData", "GetShopbSeniorPros", "IsSubOrderByUser", "GetConfigureInformation"];

            function x(e) {
                return y.some((t => p("act", e) == t))
            }
            o().interceptors.response.use((e => {
                setTimeout((() => {
                    g(h, e.config.url)
                }), 1e3);
                let t = e.data.Res,
                    n = e.config.url;
                if (-1 != n.indexOf("act=click")) return D(), Promise.resolve(e); {
                    let a = x(n);
                    if (100 == t.Status) return e.data = JSON.parse((0, s.tc)(u, e.data.BizData)), D(), Promise.resolve(e);
                    if (94 == t.Status && !a) {
                        let e = window.localStorage.getItem("log_guid");
                        return window.localStorage.clear(), window.sessionStorage.clear(), window.localStorage.setItem("log_guid", e), window.location.href = "/login", D(), Promise.reject(t)
                    }
                    if (999 != t.Status) return D(), Promise.reject(t); {
                        D();
                        let e = t.Message.split("||"),
                            n = "";
                        (0, c.Z)(n, e)
                    }
                }
            }), (e => (o().isCancel(e) ? console.log(e.message) : setTimeout((() => {
                g(h, e.config.url)
            }), 1e3), D(), Promise.reject(e.response)))), t["Z"] = o()
        },
        29489: function(e, t, n) {
            n.d(t, {
                K2: function() {
                    return s
                },
                R9: function() {
                    return l
                },
                tc: function() {
                    return m
                }
            });
            var a = n(81354),
                i = n.n(a);
            const r = i().enc.Hex.parse("0102030405060708"),
                o = {
                    mode: i().mode.CBC,
                    padding: i().pad.Pkcs7,
                    iv: r
                };

            function s(e, t) {
                let n = t,
                    a = i().enc.Utf8.parse(c(e));
                var r = i().TripleDES.encrypt(n, a, o);
                return r.toString()
            }

            function l(e) {
                var t = i().SHA1(e);
                return t.toString(i().enc.Hex)
            }

            function c(e) {
                var t = i().enc.Utf8.stringify(i().enc.Base64.parse(e));
                return t
            }

            function m(e, t) {
                let n = i().enc.Utf8.parse(c(e)),
                    a = i().TripleDES.decrypt({
                        ciphertext: i().enc.Base64.parse(t)
                    }, n, o);
                return a.toString(i().enc.Utf8)
            }
        },
        72044: function(e, t, n) {
            var a = n(27484),
                i = n.n(a);

            function r() {
                var e = localStorage.getItem("log_guid");
                return null != e && void 0 != e || (e = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                    var t = 16 * Math.random() | 0,
                        n = "x" == e ? t : 3 & t | 8;
                    return n.toString(16)
                })), localStorage.setItem("log_guid", e)), e
            }
            let o = r(),
                s = (e, t = 1) => {
                    let n = i()(e);
                    return e.toString().length < 13 && (n = i().unix(e)), 2 == t ? n.format("D.M.YYYY") : 3 == t ? n.format("D.M.YYYY HH:mm") : n.format("D.M.YYYY HH:mm:ss")
                };
            t["Z"] = {
                guuid: o,
                dateFormat: s
            }
        },
        22977: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = n(29145);

            function i(e, t = "#yourContainer") {
                return (0, a.ZN)({
                    name: "purehtml2",
                    entry: e,
                    container: t,
                    props: {
                        lang: window.localStorage.getItem("lang"),
                        assets: e.match(/(.*\/)/g)[0]
                    }
                })
            }
        },
        65518: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return s
                }
            });
            var a = n(16473),
                i = n.n(a);
            let r = null;
            const o = e => {
                r && r.close(), e.offset = 300, e.iconClass = "type", e.customClass = "grayMessage", r = i()(e)
            };
            ["error", "success", "info", "warning"].forEach((e => {
                o[e] = t => ("string" === typeof t && (t = {
                    message: t
                }), t.type = e, o(t))
            }));
            const s = o
        }
    }
]);