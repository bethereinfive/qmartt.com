"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [2625], {
        80699: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return v
                }
            });
            var r = t(57043),
                o = t.n(r),
                i = t(30236),
                a = t.n(i),
                u = t(78305),
                c = t.n(u),
                s = t(54725);

            function f(n) {
                return {
                    beforeLoad: function() {
                        return (0, s.mG)(this, void 0, void 0, c().mark((function e() {
                            return c().wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        n.__POWERED_BY_QIANKUN__ = !0;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    },
                    beforeMount: function() {
                        return (0, s.mG)(this, void 0, void 0, c().mark((function e() {
                            return c().wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        n.__POWERED_BY_QIANKUN__ = !0;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    },
                    beforeUnmount: function() {
                        return (0, s.mG)(this, void 0, void 0, c().mark((function e() {
                            return c().wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        delete n.__POWERED_BY_QIANKUN__;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }
                }
            }
            var l = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;

            function d(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                    t = !1;
                return {
                    beforeLoad: function() {
                        return (0, s.mG)(this, void 0, void 0, c().mark((function t() {
                            return c().wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = e;
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    },
                    beforeMount: function() {
                        return (0, s.mG)(this, void 0, void 0, c().mark((function r() {
                            return c().wrap((function(r) {
                                while (1) switch (r.prev = r.next) {
                                    case 0:
                                        t && (n.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = e);
                                    case 1:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))
                    },
                    beforeUnmount: function() {
                        return (0, s.mG)(this, void 0, void 0, c().mark((function e() {
                            return c().wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        void 0 === l ? delete n.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ : n.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = l, t = !0;
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }
                }
            }

            function v(n, e) {
                return a()({}, f(n), d(n, e), (function(n, e) {
                    return o()(null !== n && void 0 !== n ? n : [], null !== e && void 0 !== e ? e : [])
                }))
            }
        },
        29145: function(n, e, t) {
            t.d(e, {
                ZN: function() {
                    return b
                },
                sH: function() {
                    return l
                }
            });
            t(50308);
            var r = t(89584),
                o = t(3336),
                i = t(78305),
                a = t.n(i),
                u = t(54725),
                c = t(3759),
                s = t(41460),
                f = t(7308),
                l = {},
                d = !1,
                v = !0,
                _ = (new f.BH, function(n) {
                    var e = n.sandbox,
                        t = n.singular;
                    return e && !window.Proxy ? (console.warn("[qiankun] Miss window.Proxy, proxySandbox will degenerate into snapshotSandbox"), !1 === t && console.warn("[qiankun] Setting singular as false may cause unexpected behavior while your browser not support window.Proxy"), Object.assign(Object.assign({}, n), {
                        sandbox: "object" === (0, o.Z)(e) ? Object.assign(Object.assign({}, e), {
                            loose: !0
                        }) : {
                            loose: !0
                        }
                    })) : n
                });
            var w = new Map,
                h = new Map;

            function b(n, e, t) {
                var o, i, b = this,
                    p = n.props,
                    m = n.name,
                    g = "container" in n ? n.container : void 0,
                    x = (0, f.Ze)(g),
                    k = "".concat(m, "-").concat(x),
                    O = function(n) {
                        var e = n;
                        if (g && x) {
                            var t = h.get(k);
                            if (null === t || void 0 === t ? void 0 : t.length) {
                                var o = [function() {
                                    return (0, u.mG)(b, void 0, void 0, a().mark((function n() {
                                        var e, r;
                                        return a().wrap((function(n) {
                                            while (1) switch (n.prev = n.next) {
                                                case 0:
                                                    return e = t.slice(0, t.indexOf(i)), r = e.filter((function(n) {
                                                        return "LOAD_ERROR" !== n.getStatus() && "SKIP_BECAUSE_BROKEN" !== n.getStatus()
                                                    })), n.next = 4, Promise.all(r.map((function(n) {
                                                        return n.unmountPromise
                                                    })));
                                                case 4:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })))
                                }].concat((0, r.Z)((0, f.qo)(e.mount)));
                                e = Object.assign(Object.assign({}, n), {
                                    mount: o
                                })
                            }
                        }
                        return Object.assign(Object.assign({}, e), {
                            bootstrap: function() {
                                return Promise.resolve()
                            }
                        })
                    },
                    E = function() {
                        return (0, u.mG)(b, void 0, void 0, a().mark((function r() {
                            var o, i, u, c, f;
                            return a().wrap((function(r) {
                                while (1) switch (r.prev = r.next) {
                                    case 0:
                                        if (o = _(null !== e && void 0 !== e ? e : Object.assign(Object.assign({}, l), {
                                                singular: !1
                                            })), i = o.$$cacheLifecycleByAppName, !g) {
                                            r.next = 21;
                                            break
                                        }
                                        if (!i) {
                                            r.next = 12;
                                            break
                                        }
                                        if (u = w.get(m), !u) {
                                            r.next = 12;
                                            break
                                        }
                                        return r.t0 = O, r.next = 9, u;
                                    case 9:
                                        return r.t1 = r.sent, r.t2 = (0, r.t1)(g), r.abrupt("return", (0, r.t0)(r.t2));
                                    case 12:
                                        if (!x) {
                                            r.next = 21;
                                            break
                                        }
                                        if (c = w.get(k), !c) {
                                            r.next = 21;
                                            break
                                        }
                                        return r.t3 = O, r.next = 18, c;
                                    case 18:
                                        return r.t4 = r.sent, r.t5 = (0, r.t4)(g), r.abrupt("return", (0, r.t3)(r.t5));
                                    case 21:
                                        return f = (0, s.o)(n, o, t), g && (i ? w.set(m, f) : x && w.set(k, f)), r.next = 25, f;
                                    case 25:
                                        return r.t6 = r.sent, r.abrupt("return", (0, r.t6)(g));
                                    case 27:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))
                    };
                if (d || !1 === (null === e || void 0 === e ? void 0 : e.autoStart) || (0, c.BL)({
                        urlRerouteOnly: null !== (o = l.urlRerouteOnly) && void 0 !== o ? o : v
                    }), i = (0, c.BP)(E, Object.assign({
                        domElement: document.createElement("div")
                    }, p)), g && x) {
                    var N = h.get(k) || [];
                    N.push(i), h.set(k, N);
                    var P = function() {
                        var n = N.indexOf(i);
                        N.splice(n, 1), i = null
                    };
                    i.unmountPromise.then(P).catch(P)
                }
                return i
            }
        },
        90219: function(n, e, t) {
            t.d(e, {
                o: function() {
                    return c
                }
            });
            var r = t(62833),
                o = t(13087),
                i = t(39110),
                a = t(68951),
                u = t(67712),
                c = function(n) {
                    (0, i.Z)(t, n);
                    var e = (0, a.Z)(t);

                    function t(n) {
                        return (0, o.Z)(this, t), e.call(this, "[qiankun]: ".concat(n))
                    }
                    return (0, r.Z)(t)
                }((0, u.Z)(Error))
        },
        19413: function(n, e, t) {
            t.d(e, {
                I: function() {
                    return s
                }
            });
            var r = t(82482),
                o = t(50361),
                i = t.n(o),
                a = {},
                u = {};

            function c(n, e) {
                Object.keys(u).forEach((function(t) {
                    u[t] instanceof Function && u[t](i()(n), i()(e))
                }))
            }

            function s(n, e) {
                return {
                    onGlobalStateChange: function(e, t) {
                        if (e instanceof Function) {
                            if (u[n] && console.warn("[qiankun] '".concat(n, "' global listener already exists before this, new listener will overwrite it.")), u[n] = e, t) {
                                var r = i()(a);
                                e(r, r)
                            }
                        } else console.error("[qiankun] callback must be function!")
                    },
                    setGlobalState: function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n === a) return console.warn("[qiankun] state has not changed！"), !1;
                        var t = [],
                            o = i()(a);
                        return a = i()(Object.keys(n).reduce((function(o, i) {
                            return e || o.hasOwnProperty(i) ? (t.push(i), Object.assign(o, (0, r.Z)({}, i, n[i]))) : (console.warn("[qiankun] '".concat(i, "' not declared when init state！")), o)
                        }), a)), 0 === t.length ? (console.warn("[qiankun] state has not changed！"), !1) : (c(a, o), !0)
                    },
                    offGlobalStateChange: function() {
                        return delete u[n], !0
                    }
                }
            }
        }
    }
]);