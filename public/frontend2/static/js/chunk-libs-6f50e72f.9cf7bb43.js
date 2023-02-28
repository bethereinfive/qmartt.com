"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [3594], {
        60561: function(n, t, e) {
            e.d(t, {
                Fv: function() {
                    return g
                },
                BP: function() {
                    return h
                }
            });
            var r = e(82482),
                o = e(91108),
                i = e(62671),
                a = e(54167),
                u = e(15732),
                c = e(50308),
                s = e.n(c),
                f = e(89584),
                p = window.setInterval,
                l = window.clearInterval;

            function w(n) {
                var t = [];
                return n.clearInterval = function(n) {
                        return t = t.filter((function(t) {
                            return t !== n
                        })), l.call(window, n)
                    }, n.setInterval = function(n, e) {
                        for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                        var a = p.apply(void 0, [n, e].concat(o));
                        return t = [].concat((0, f.Z)(t), [a]), a
                    },
                    function() {
                        return t.forEach((function(t) {
                            return n.clearInterval(t)
                        })), n.setInterval = p, n.clearInterval = l, s()
                    }
            }
            var d = window.addEventListener,
                y = window.removeEventListener;

            function v(n) {
                var t = new Map;
                return n.addEventListener = function(n, e, r) {
                        var o = t.get(n) || [];
                        return t.set(n, [].concat((0, f.Z)(o), [e])), d.call(window, n, e, r)
                    }, n.removeEventListener = function(n, e, r) {
                        var o = t.get(n);
                        return o && o.length && -1 !== o.indexOf(e) && o.splice(o.indexOf(e), 1), y.call(window, n, e, r)
                    },
                    function() {
                        return t.forEach((function(t, e) {
                            return (0, f.Z)(t).forEach((function(t) {
                                return n.removeEventListener(e, t)
                            }))
                        })), n.addEventListener = d, n.removeEventListener = y, s()
                    }
            }

            function h(n, t, e, c, s) {
                var f, p, l = [function() {
                        return w(e.proxy)
                    }, function() {
                        return v(e.proxy)
                    }, function() {
                        return (0, u.Z)()
                    }],
                    d = (f = {}, (0, r.Z)(f, o.u.LegacyProxy, [].concat(l, [function() {
                        return (0, i.s)(n, t, e.proxy, !0, c, s)
                    }])), (0, r.Z)(f, o.u.Proxy, [].concat(l, [function() {
                        return (0, a.E)(n, t, e.proxy, !0, c, s)
                    }])), (0, r.Z)(f, o.u.Snapshot, [].concat(l, [function() {
                        return (0, i.s)(n, t, e.proxy, !0, c, s)
                    }])), f);
                return null === (p = d[e.type]) || void 0 === p ? void 0 : p.map((function(n) {
                    return n()
                }))
            }

            function g(n, t, e, u, c) {
                var s, f, p = (s = {}, (0, r.Z)(s, o.u.LegacyProxy, [function() {
                    return (0, i.s)(n, t, e.proxy, !1, u, c)
                }]), (0, r.Z)(s, o.u.Proxy, [function() {
                    return (0, a.E)(n, t, e.proxy, !1, u, c)
                }]), (0, r.Z)(s, o.u.Snapshot, [function() {
                    return (0, i.s)(n, t, e.proxy, !1, u, c)
                }]), s);
                return null === (f = p[e.type]) || void 0 === f ? void 0 : f.map((function(n) {
                    return n()
                }))
            }
        },
        99416: function(n, t, e) {
            e.d(t, {
                Z: function() {
                    return v
                }
            });
            e(89584);
            var r = e(13087),
                o = e(62833),
                i = e(91108),
                a = e(7308),
                u = e(27855);

            function c(n) {
                return n.filter((function(n) {
                    return !(n in this) && (this[n] = !0)
                }), Object.create(null))
            }
            var s = Object.defineProperty,
                f = window.__QIANKUN_DEVELOPMENT__ ? ["__REACT_ERROR_OVERLAY_GLOBAL_HOOK__"] : [],
                p = ["System", "__cjsWrapper"].concat(f),
                l = {
                    undefined: !0,
                    Array: !0,
                    Object: !0,
                    String: !0,
                    Boolean: !0,
                    Math: !0,
                    Number: !0,
                    Symbol: !0,
                    parseFloat: !0,
                    Float32Array: !0,
                    isNaN: !0,
                    Infinity: !0,
                    Reflect: !0,
                    Float64Array: !0,
                    Function: !0,
                    Map: !0,
                    NaN: !0,
                    Promise: !0,
                    Proxy: !0,
                    Set: !0,
                    parseInt: !0,
                    requestAnimationFrame: !0
                },
                w = new Map([
                    ["fetch", !0],
                    ["mockDomAPIInBlackList", !1]
                ]);

            function d(n) {
                var t = new Map,
                    e = {};
                return Object.getOwnPropertyNames(n).filter((function(t) {
                    var e = Object.getOwnPropertyDescriptor(n, t);
                    return !(null === e || void 0 === e ? void 0 : e.configurable)
                })).forEach((function(r) {
                    var o = Object.getOwnPropertyDescriptor(n, r);
                    if (o) {
                        var i = Object.prototype.hasOwnProperty.call(o, "get");
                        "top" !== r && "parent" !== r && "self" !== r && "window" !== r || (o.configurable = !0, i || (o.writable = !0)), i && t.set(r, !0), s(e, r, Object.freeze(o))
                    }
                })), {
                    fakeWindow: e,
                    propertiesWithGetter: t
                }
            }
            var y = 0,
                v = function() {
                    function n(t) {
                        var e = this,
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                        (0, r.Z)(this, n), this.updatedValueSet = new Set, this.sandboxRunning = !0, this.latestSetProp = null, this.name = t, this.globalContext = o, this.type = i.u.Proxy;
                        var s = this.updatedValueSet,
                            f = d(o),
                            v = f.fakeWindow,
                            h = f.propertiesWithGetter,
                            g = new Map,
                            b = function(n) {
                                return v.hasOwnProperty(n) || o.hasOwnProperty(n)
                            },
                            P = new Proxy(v, {
                                set: function(n, r, i) {
                                    if (e.sandboxRunning) {
                                        if (e.registerRunningApp(t, P), !n.hasOwnProperty(r) && o.hasOwnProperty(r)) {
                                            var a = Object.getOwnPropertyDescriptor(o, r),
                                                u = a.writable,
                                                c = a.configurable,
                                                f = a.enumerable;
                                            u && Object.defineProperty(n, r, {
                                                configurable: c,
                                                enumerable: f,
                                                writable: u,
                                                value: i
                                            })
                                        } else n[r] = i;
                                        return -1 !== p.indexOf(r) && (o[r] = i), s.add(r), e.latestSetProp = r, !0
                                    }
                                    return !0
                                },
                                get: function(n, r) {
                                    if (e.registerRunningApp(t, P), r === Symbol.unscopables) return l;
                                    if ("window" === r || "self" === r) return P;
                                    if ("globalThis" === r) return P;
                                    if ("top" === r || "parent" === r) return o === o.parent ? P : o[r];
                                    if ("hasOwnProperty" === r) return b;
                                    if ("document" === r) return document;
                                    if ("eval" === r) return eval;
                                    var i = h.has(r) ? o[r] : r in n ? n[r] : o[r],
                                        c = w.get(r) ? a.B1 : o;
                                    return (0, u.cd)(c, i)
                                },
                                has: function(n, t) {
                                    return t in l || t in n || t in o
                                },
                                getOwnPropertyDescriptor: function(n, t) {
                                    if (n.hasOwnProperty(t)) {
                                        var e = Object.getOwnPropertyDescriptor(n, t);
                                        return g.set(t, "target"), e
                                    }
                                    if (o.hasOwnProperty(t)) {
                                        var r = Object.getOwnPropertyDescriptor(o, t);
                                        return g.set(t, "globalContext"), r && !r.configurable && (r.configurable = !0), r
                                    }
                                },
                                ownKeys: function(n) {
                                    return c(Reflect.ownKeys(o).concat(Reflect.ownKeys(n)))
                                },
                                defineProperty: function(n, t, e) {
                                    var r = g.get(t);
                                    switch (r) {
                                        case "globalContext":
                                            return Reflect.defineProperty(o, t, e);
                                        default:
                                            return Reflect.defineProperty(n, t, e)
                                    }
                                },
                                deleteProperty: function(n, r) {
                                    return e.registerRunningApp(t, P), !n.hasOwnProperty(r) || (delete n[r], s.delete(r), !0)
                                },
                                getPrototypeOf: function() {
                                    return Reflect.getPrototypeOf(o)
                                }
                            });
                        this.proxy = P, y++
                    }
                    return (0, o.Z)(n, [{
                        key: "registerRunningApp",
                        value: function(n, t) {
                            if (this.sandboxRunning) {
                                var e = (0, u.RT)();
                                e && e.name === n || (0, u.wF)({
                                    name: n,
                                    window: t
                                }), (0, a.TU)((function() {
                                    (0, u.wF)(null)
                                }))
                            }
                        }
                    }, {
                        key: "active",
                        value: function() {
                            this.sandboxRunning || y++, this.sandboxRunning = !0
                        }
                    }, {
                        key: "inactive",
                        value: function() {
                            var n = this;
                            0 === --y && p.forEach((function(t) {
                                n.proxy.hasOwnProperty(t) && delete n.globalContext[t]
                            })), this.sandboxRunning = !1
                        }
                    }]), n
                }()
        },
        74433: function(n, t, e) {
            e.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = e(13087),
                o = e(62833),
                i = e(91108);

            function a(n, t) {
                for (var e in n)(n.hasOwnProperty(e) || "clearInterval" === e) && t(e)
            }
            var u = function() {
                function n(t) {
                    (0, r.Z)(this, n), this.sandboxRunning = !0, this.modifyPropsMap = {}, this.name = t, this.proxy = window, this.type = i.u.Snapshot
                }
                return (0, o.Z)(n, [{
                    key: "active",
                    value: function() {
                        var n = this;
                        this.windowSnapshot = {}, a(window, (function(t) {
                            n.windowSnapshot[t] = window[t]
                        })), Object.keys(this.modifyPropsMap).forEach((function(t) {
                            window[t] = n.modifyPropsMap[t]
                        })), this.sandboxRunning = !0
                    }
                }, {
                    key: "inactive",
                    value: function() {
                        var n = this;
                        this.modifyPropsMap = {}, a(window, (function(t) {
                            window[t] !== n.windowSnapshot[t] && (n.modifyPropsMap[t] = window[t], window[t] = n.windowSnapshot[t])
                        })), this.sandboxRunning = !1
                    }
                }]), n
            }()
        }
    }
]);