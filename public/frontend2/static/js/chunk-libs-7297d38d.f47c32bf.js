"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [2732], {
        3759: function(t, n, e) {
            e.d(n, {
                BL: function() {
                    return Wt
                },
                BP: function() {
                    return $
                },
                lV: function() {
                    return Nt
                }
            });
            var r = Object.freeze({
                __proto__: null,
                get start() {
                    return Wt
                },
                get ensureJQuerySupport() {
                    return ht
                },
                get setBootstrapMaxTime() {
                    return H
                },
                get setMountMaxTime() {
                    return Q
                },
                get setUnmountMaxTime() {
                    return X
                },
                get setUnloadMaxTime() {
                    return q
                },
                get registerApplication() {
                    return At
                },
                get unregisterApplication() {
                    return St
                },
                get getMountedApps() {
                    return bt
                },
                get getAppStatus() {
                    return Tt
                },
                get unloadApplication() {
                    return _t
                },
                get checkActivityFunctions() {
                    return Nt
                },
                get getAppNames() {
                    return Ot
                },
                get pathToActiveWhen() {
                    return jt
                },
                get navigateToUrl() {
                    return ot
                },
                get triggerAppChange() {
                    return It
                },
                get addErrorHandler() {
                    return f
                },
                get removeErrorHandler() {
                    return l
                },
                get mountRootParcel() {
                    return $
                },
                get NOT_LOADED() {
                    return m
                },
                get LOADING_SOURCE_CODE() {
                    return v
                },
                get NOT_BOOTSTRAPPED() {
                    return d
                },
                get BOOTSTRAPPING() {
                    return w
                },
                get NOT_MOUNTED() {
                    return g
                },
                get MOUNTING() {
                    return E
                },
                get UPDATING() {
                    return P
                },
                get LOAD_ERROR() {
                    return O
                },
                get MOUNTED() {
                    return y
                },
                get UNMOUNTING() {
                    return b
                },
                get SKIP_BECAUSE_BROKEN() {
                    return T
                }
            });

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, n, e) {
                return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e, t
            }
            var u = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof e.g ? e.g : "undefined" != typeof self ? self : {}).CustomEvent,
                a = function() {
                    try {
                        var t = new u("cat", {
                            detail: {
                                foo: "bar"
                            }
                        });
                        return "cat" === t.type && "bar" === t.detail.foo
                    } catch (t) {}
                    return !1
                }() ? u : "undefined" != typeof document && "function" == typeof document.createEvent ? function(t, n) {
                    var e = document.createEvent("CustomEvent");
                    return n ? e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail) : e.initCustomEvent(t, !1, !1, void 0), e
                } : function(t, n) {
                    var e = document.createEventObject();
                    return e.type = t, n ? (e.bubbles = Boolean(n.bubbles), e.cancelable = Boolean(n.cancelable), e.detail = n.detail) : (e.bubbles = !1, e.cancelable = !1, e.detail = void 0), e
                },
                c = [];

            function s(t, n, e) {
                var r = h(t, n, e);
                c.length ? c.forEach((function(t) {
                    return t(r)
                })) : setTimeout((function() {
                    throw r
                }))
            }

            function f(t) {
                if ("function" != typeof t) throw Error(p(28, !1));
                c.push(t)
            }

            function l(t) {
                if ("function" != typeof t) throw Error(p(29, !1));
                var n = !1;
                return c = c.filter((function(e) {
                    var r = e === t;
                    return n = n || r, !r
                })), n
            }

            function p(t, n) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2; o < e; o++) r[o - 2] = arguments[o];
                return "single-spa minified message #".concat(t, ": ").concat(n ? n + " " : "", "See https://single-spa.js.org/error/?code=").concat(t).concat(r.length ? "&arg=".concat(r.join("&arg=")) : "")
            }

            function h(t, n, e) {
                var r, o = "".concat(D(n), " '").concat(S(n), "' died in status ").concat(n.status, ": ");
                if (t instanceof Error) {
                    try {
                        t.message = o + t.message
                    } catch (t) {}
                    r = t
                } else {
                    console.warn(p(30, !1, n.status, S(n)));
                    try {
                        r = Error(o + JSON.stringify(t))
                    } catch (n) {
                        r = t
                    }
                }
                return r.appOrParcelName = S(n), n.status = e, r
            }
            var m = "NOT_LOADED",
                v = "LOADING_SOURCE_CODE",
                d = "NOT_BOOTSTRAPPED",
                w = "BOOTSTRAPPING",
                g = "NOT_MOUNTED",
                E = "MOUNTING",
                y = "MOUNTED",
                P = "UPDATING",
                b = "UNMOUNTING",
                O = "LOAD_ERROR",
                T = "SKIP_BECAUSE_BROKEN";

            function A(t) {
                return t.status === y
            }

            function N(t) {
                try {
                    return t.activeWhen(window.location)
                } catch (o) {
                    return s(o, t, T), !1
                }
            }

            function S(t) {
                return t.name
            }

            function _(t) {
                return Boolean(t.unmountThisParcel)
            }

            function D(t) {
                return _(t) ? "parcel" : "application"
            }

            function U() {
                for (var t = arguments.length - 1; t > 0; t--)
                    for (var n in arguments[t]) "__proto__" !== n && (arguments[t - 1][n] = arguments[t][n]);
                return arguments[0]
            }

            function j(t, n) {
                for (var e = 0; e < t.length; e++)
                    if (n(t[e])) return t[e];
                return null
            }

            function M(t) {
                return t && ("function" == typeof t || (n = t, Array.isArray(n) && !j(n, (function(t) {
                    return "function" != typeof t
                }))));
                var n
            }

            function L(t, n) {
                var e = t[n] || [];
                0 === (e = Array.isArray(e) ? e : [e]).length && (e = [function() {
                    return Promise.resolve()
                }]);
                var r = D(t),
                    o = S(t);
                return function(t) {
                    return e.reduce((function(e, i, u) {
                        return e.then((function() {
                            var e = i(t);
                            return R(e) ? e : Promise.reject(p(15, !1, r, o, n, u))
                        }))
                    }), Promise.resolve())
                }
            }

            function R(t) {
                return t && "function" == typeof t.then && "function" == typeof t.catch
            }

            function I(t, n) {
                return Promise.resolve().then((function() {
                    return t.status !== d ? t : (t.status = w, t.bootstrap ? z(t, "bootstrap").then(e).catch((function(e) {
                        if (n) throw h(e, t, T);
                        return s(e, t, T), t
                    })) : Promise.resolve().then(e))
                }));

                function e() {
                    return t.status = g, t
                }
            }

            function B(t, n) {
                return Promise.resolve().then((function() {
                    if (t.status !== y) return t;
                    t.status = b;
                    var e = Object.keys(t.parcels).map((function(n) {
                        return t.parcels[n].unmountThisParcel()
                    }));
                    return Promise.all(e).then(r, (function(e) {
                        return r().then((function() {
                            var r = Error(e.message);
                            if (n) throw h(r, t, T);
                            s(r, t, T)
                        }))
                    })).then((function() {
                        return t
                    }));

                    function r() {
                        return z(t, "unmount").then((function() {
                            t.status = g
                        })).catch((function(e) {
                            if (n) throw h(e, t, T);
                            s(e, t, T)
                        }))
                    }
                }))
            }
            var x = !1,
                C = !1;

            function W(t, n) {
                return Promise.resolve().then((function() {
                    return t.status !== g ? t : (x || (window.dispatchEvent(new a("single-spa:before-first-mount")), x = !0), z(t, "mount").then((function() {
                        return t.status = y, C || (window.dispatchEvent(new a("single-spa:first-mount")), C = !0), t
                    })).catch((function(e) {
                        return t.status = y, B(t, !0).then(r, r);

                        function r() {
                            if (n) throw h(e, t, T);
                            return s(e, t, T), t
                        }
                    })))
                }))
            }
            var G = 0,
                k = {
                    parcels: {}
                };

            function $() {
                return F.apply(k, arguments)
            }

            function F(t, n) {
                var e = this;
                if (!t || "object" !== o(t) && "function" != typeof t) throw Error(p(2, !1));
                if (t.name && "string" != typeof t.name) throw Error(p(3, !1, o(t.name)));
                if ("object" !== o(n)) throw Error(p(4, !1, name, o(n)));
                if (!n.domElement) throw Error(p(5, !1, name));
                var r, i = G++,
                    u = "function" == typeof t,
                    a = u ? t : function() {
                        return Promise.resolve(t)
                    },
                    c = {
                        id: i,
                        parcels: {},
                        status: u ? v : d,
                        customProps: n,
                        parentName: S(e),
                        unmountThisParcel: function() {
                            return w.then((function() {
                                if (c.status !== y) throw Error(p(6, !1, name, c.status));
                                return B(c, !0)
                            })).then((function(t) {
                                return c.parentName && delete e.parcels[c.id], t
                            })).then((function(t) {
                                return f(t), t
                            })).catch((function(t) {
                                throw c.status = T, l(t), t
                            }))
                        }
                    };
                e.parcels[i] = c;
                var s = a();
                if (!s || "function" != typeof s.then) throw Error(p(7, !1));
                var f, l, m = (s = s.then((function(t) {
                        if (!t) throw Error(p(8, !1));
                        var n = t.name || "parcel-".concat(i);
                        if (Object.prototype.hasOwnProperty.call(t, "bootstrap") && !M(t.bootstrap)) throw Error(p(9, !1, n));
                        if (!M(t.mount)) throw Error(p(10, !1, n));
                        if (!M(t.unmount)) throw Error(p(11, !1, n));
                        if (t.update && !M(t.update)) throw Error(p(12, !1, n));
                        var e = L(t, "bootstrap"),
                            o = L(t, "mount"),
                            u = L(t, "unmount");
                        c.status = d, c.name = n, c.bootstrap = e, c.mount = o, c.unmount = u, c.timeouts = Y(t.timeouts), t.update && (c.update = L(t, "update"), r.update = function(t) {
                            return c.customProps = t, K(function(t) {
                                return Promise.resolve().then((function() {
                                    if (t.status !== y) throw Error(p(32, !1, S(t)));
                                    return t.status = P, z(t, "update").then((function() {
                                        return t.status = y, t
                                    })).catch((function(n) {
                                        throw h(n, t, T)
                                    }))
                                }))
                            }(c))
                        })
                    }))).then((function() {
                        return I(c, !0)
                    })),
                    w = m.then((function() {
                        return W(c, !0)
                    })),
                    E = new Promise((function(t, n) {
                        f = t, l = n
                    }));
                return r = {
                    mount: function() {
                        return K(Promise.resolve().then((function() {
                            if (c.status !== g) throw Error(p(13, !1, name, c.status));
                            return e.parcels[i] = c, W(c)
                        })))
                    },
                    unmount: function() {
                        return K(c.unmountThisParcel())
                    },
                    getStatus: function() {
                        return c.status
                    },
                    loadPromise: K(s),
                    bootstrapPromise: K(m),
                    mountPromise: K(w),
                    unmountPromise: K(E)
                }
            }

            function K(t) {
                return t.then((function() {
                    return null
                }))
            }

            function J(t) {
                var n = S(t),
                    e = "function" == typeof t.customProps ? t.customProps(n, window.location) : t.customProps;
                ("object" !== o(e) || null === e || Array.isArray(e)) && (e = {}, console.warn(p(40, !1), n, e));
                var i = U({}, e, {
                    name: n,
                    mountParcel: F.bind(t),
                    singleSpa: r
                });
                return _(t) && (i.unmountSelf = t.unmountThisParcel), i
            }
            var V = {
                bootstrap: {
                    millis: 4e3,
                    dieOnTimeout: !1,
                    warningMillis: 1e3
                },
                mount: {
                    millis: 3e3,
                    dieOnTimeout: !1,
                    warningMillis: 1e3
                },
                unmount: {
                    millis: 3e3,
                    dieOnTimeout: !1,
                    warningMillis: 1e3
                },
                unload: {
                    millis: 3e3,
                    dieOnTimeout: !1,
                    warningMillis: 1e3
                },
                update: {
                    millis: 3e3,
                    dieOnTimeout: !1,
                    warningMillis: 1e3
                }
            };

            function H(t, n, e) {
                if ("number" != typeof t || t <= 0) throw Error(p(16, !1));
                V.bootstrap = {
                    millis: t,
                    dieOnTimeout: n,
                    warningMillis: e || 1e3
                }
            }

            function Q(t, n, e) {
                if ("number" != typeof t || t <= 0) throw Error(p(17, !1));
                V.mount = {
                    millis: t,
                    dieOnTimeout: n,
                    warningMillis: e || 1e3
                }
            }

            function X(t, n, e) {
                if ("number" != typeof t || t <= 0) throw Error(p(18, !1));
                V.unmount = {
                    millis: t,
                    dieOnTimeout: n,
                    warningMillis: e || 1e3
                }
            }

            function q(t, n, e) {
                if ("number" != typeof t || t <= 0) throw Error(p(19, !1));
                V.unload = {
                    millis: t,
                    dieOnTimeout: n,
                    warningMillis: e || 1e3
                }
            }

            function z(t, n) {
                var e = t.timeouts[n],
                    r = e.warningMillis,
                    o = D(t);
                return new Promise((function(i, u) {
                    var a = !1,
                        c = !1;
                    t[n](J(t)).then((function(t) {
                        a = !0, i(t)
                    })).catch((function(t) {
                        a = !0, u(t)
                    })), setTimeout((function() {
                        return f(1)
                    }), r), setTimeout((function() {
                        return f(!0)
                    }), e.millis);
                    var s = p(31, !1, n, o, S(t), e.millis);

                    function f(t) {
                        if (!a)
                            if (!0 === t) c = !0, e.dieOnTimeout ? u(Error(s)) : console.error(s);
                            else if (!c) {
                            var n = t,
                                o = n * r;
                            console.warn(s), o + r < e.millis && setTimeout((function() {
                                return f(n + 1)
                            }), r)
                        }
                    }
                }))
            }

            function Y(t) {
                var n = {};
                for (var e in V) n[e] = U({}, V[e], t && t[e] || {});
                return n
            }

            function Z(t) {
                return Promise.resolve().then((function() {
                    return t.loadPromise ? t.loadPromise : t.status !== m && t.status !== O ? t : (t.status = v, t.loadPromise = Promise.resolve().then((function() {
                        var r = t.loadApp(J(t));
                        if (!R(r)) throw e = !0, Error(p(33, !1, S(t)));
                        return r.then((function(e) {
                            var r;
                            t.loadErrorTime = null, "object" !== o(n = e) && (r = 34), Object.prototype.hasOwnProperty.call(n, "bootstrap") && !M(n.bootstrap) && (r = 35), M(n.mount) || (r = 36), M(n.unmount) || (r = 37);
                            var i = D(n);
                            if (r) {
                                var u;
                                try {
                                    u = JSON.stringify(n)
                                } catch (t) {}
                                return console.error(p(r, !1, i, S(t), u), n), s(void 0, t, T), t
                            }
                            return n.devtools && n.devtools.overlays && (t.devtools.overlays = U({}, t.devtools.overlays, n.devtools.overlays)), t.status = d, t.bootstrap = L(n, "bootstrap"), t.mount = L(n, "mount"), t.unmount = L(n, "unmount"), t.unload = L(n, "unload"), t.timeouts = Y(n.timeouts), delete t.loadPromise, t
                        }))
                    })).catch((function(n) {
                        var r;
                        return delete t.loadPromise, e ? r = T : (r = O, t.loadErrorTime = (new Date).getTime()), s(n, t, r), t
                    })));
                    var n, e
                }))
            }
            var tt, nt = "undefined" != typeof window,
                et = {
                    hashchange: [],
                    popstate: []
                },
                rt = ["hashchange", "popstate"];

            function ot(t) {
                var n;
                if ("string" == typeof t) n = t;
                else if (this && this.href) n = this.href;
                else {
                    if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(p(14, !1));
                    n = t.currentTarget.href, t.preventDefault()
                }
                var e = lt(window.location.href),
                    r = lt(n);
                0 === n.indexOf("#") ? window.location.hash = r.hash : e.host !== r.host && r.host ? window.location.href = n : r.pathname === e.pathname && r.search === e.search ? window.location.hash = r.hash : window.history.pushState(null, null, n)
            }

            function it(t) {
                var n = this;
                if (t) {
                    var e = t[0].type;
                    rt.indexOf(e) >= 0 && et[e].forEach((function(e) {
                        try {
                            e.apply(n, t)
                        } catch (t) {
                            setTimeout((function() {
                                throw t
                            }))
                        }
                    }))
                }
            }

            function ut() {
                Bt([], arguments)
            }

            function at(t, n) {
                return function() {
                    var e = window.location.href,
                        r = t.apply(this, arguments),
                        o = window.location.href;
                    return tt && e === o || (Gt() ? window.dispatchEvent(ct(window.history.state, n)) : Bt([])), r
                }
            }

            function ct(t, n) {
                var e;
                try {
                    e = new PopStateEvent("popstate", {
                        state: t
                    })
                } catch (n) {
                    (e = document.createEvent("PopStateEvent")).initPopStateEvent("popstate", !1, !1, t)
                }
                return e.singleSpa = !0, e.singleSpaTrigger = n, e
            }
            if (nt) {
                window.addEventListener("hashchange", ut), window.addEventListener("popstate", ut);
                var st = window.addEventListener,
                    ft = window.removeEventListener;
                window.addEventListener = function(t, n) {
                    if (!("function" == typeof n && rt.indexOf(t) >= 0) || j(et[t], (function(t) {
                            return t === n
                        }))) return st.apply(this, arguments);
                    et[t].push(n)
                }, window.removeEventListener = function(t, n) {
                    if (!("function" == typeof n && rt.indexOf(t) >= 0)) return ft.apply(this, arguments);
                    et[t] = et[t].filter((function(t) {
                        return t !== n
                    }))
                }, window.history.pushState = at(window.history.pushState, "pushState"), window.history.replaceState = at(window.history.replaceState, "replaceState"), window.singleSpaNavigate ? console.warn(p(41, !1)) : window.singleSpaNavigate = ot
            }

            function lt(t) {
                var n = document.createElement("a");
                return n.href = t, n
            }
            var pt = !1;

            function ht() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;
                if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !pt) {
                    var n = t.fn.on,
                        e = t.fn.off;
                    t.fn.on = function(t, e) {
                        return mt.call(this, n, window.addEventListener, t, e, arguments)
                    }, t.fn.off = function(t, n) {
                        return mt.call(this, e, window.removeEventListener, t, n, arguments)
                    }, pt = !0
                }
            }

            function mt(t, n, e, r, o) {
                return "string" != typeof e ? t.apply(this, o) : (e.split(/\s+/).forEach((function(t) {
                    rt.indexOf(t) >= 0 && (n(t, r), e = e.replace(t, ""))
                })), "" === e.trim() ? this : t.apply(this, o))
            }
            var vt = {};

            function dt(t) {
                return Promise.resolve().then((function() {
                    var n = vt[S(t)];
                    if (!n) return t;
                    if (t.status === m) return wt(t, n), t;
                    if ("UNLOADING" === t.status) return n.promise.then((function() {
                        return t
                    }));
                    if (t.status !== g && t.status !== O) return t;
                    var e = t.status === O ? Promise.resolve() : z(t, "unload");
                    return t.status = "UNLOADING", e.then((function() {
                        return wt(t, n), t
                    })).catch((function(e) {
                        return function(t, n, e) {
                            delete vt[S(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, s(e, t, T), n.reject(e)
                        }(t, n, e), t
                    }))
                }))
            }

            function wt(t, n) {
                delete vt[S(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = m, n.resolve()
            }

            function gt(t, n, e, r) {
                vt[S(t)] = {
                    app: t,
                    resolve: e,
                    reject: r
                }, Object.defineProperty(vt[S(t)], "promise", {
                    get: n
                })
            }

            function Et(t) {
                return vt[t]
            }
            var yt = [];

            function Pt() {
                var t = [],
                    n = [],
                    e = [],
                    r = [],
                    o = (new Date).getTime();
                return yt.forEach((function(i) {
                    var u = i.status !== T && N(i);
                    switch (i.status) {
                        case O:
                            u && o - i.loadErrorTime >= 200 && e.push(i);
                            break;
                        case m:
                        case v:
                            u && e.push(i);
                            break;
                        case d:
                        case g:
                            !u && Et(S(i)) ? t.push(i) : u && r.push(i);
                            break;
                        case y:
                            u || n.push(i)
                    }
                })), {
                    appsToUnload: t,
                    appsToUnmount: n,
                    appsToLoad: e,
                    appsToMount: r
                }
            }

            function bt() {
                return yt.filter(A).map(S)
            }

            function Ot() {
                return yt.map(S)
            }

            function Tt(t) {
                var n = j(yt, (function(n) {
                    return S(n) === t
                }));
                return n ? n.status : null
            }

            function At(t, n, e, r) {
                var i = function(t, n, e, r) {
                    var i, u = {
                        name: null,
                        loadApp: null,
                        activeWhen: null,
                        customProps: null
                    };
                    return "object" === o(t) ? (function(t) {
                        if (Array.isArray(t) || null === t) throw Error(p(39, !1));
                        var n = ["name", "app", "activeWhen", "customProps"],
                            e = Object.keys(t).reduce((function(t, e) {
                                return n.indexOf(e) >= 0 ? t : t.concat(e)
                            }), []);
                        if (0 !== e.length) throw Error(p(38, !1, n.join(", "), e.join(", ")));
                        if ("string" != typeof t.name || 0 === t.name.length) throw Error(p(20, !1));
                        if ("object" !== o(t.app) && "function" != typeof t.app) throw Error(p(20, !1));
                        var r = function(t) {
                            return "string" == typeof t || "function" == typeof t
                        };
                        if (!(r(t.activeWhen) || Array.isArray(t.activeWhen) && t.activeWhen.every(r))) throw Error(p(24, !1));
                        if (!Ut(t.customProps)) throw Error(p(22, !1))
                    }(t), u.name = t.name, u.loadApp = t.app, u.activeWhen = t.activeWhen, u.customProps = t.customProps) : (function(t, n, e, r) {
                        if ("string" != typeof t || 0 === t.length) throw Error(p(20, !1));
                        if (!n) throw Error(p(23, !1));
                        if ("function" != typeof e) throw Error(p(24, !1));
                        if (!Ut(r)) throw Error(p(22, !1))
                    }(t, n, e, r), u.name = t, u.loadApp = n, u.activeWhen = e, u.customProps = r), u.loadApp = "function" != typeof(i = u.loadApp) ? function() {
                        return Promise.resolve(i)
                    } : i, u.customProps = function(t) {
                        return t || {}
                    }(u.customProps), u.activeWhen = function(t) {
                        var n = Array.isArray(t) ? t : [t];
                        return n = n.map((function(t) {
                                return "function" == typeof t ? t : jt(t)
                            })),
                            function(t) {
                                return n.some((function(n) {
                                    return n(t)
                                }))
                            }
                    }(u.activeWhen), u
                }(t, n, e, r);
                if (-1 !== Ot().indexOf(i.name)) throw Error(p(21, !1, i.name));
                yt.push(U({
                    loadErrorTime: null,
                    status: m,
                    parcels: {},
                    devtools: {
                        overlays: {
                            options: {},
                            selectors: []
                        }
                    }
                }, i)), nt && (ht(), Bt())
            }

            function Nt() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location;
                return yt.filter((function(n) {
                    return n.activeWhen(t)
                })).map(S)
            }

            function St(t) {
                if (0 === yt.filter((function(n) {
                        return S(n) === t
                    })).length) throw Error(p(25, !1, t));
                return _t(t).then((function() {
                    var n = yt.map(S).indexOf(t);
                    yt.splice(n, 1)
                }))
            }

            function _t(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    waitForUnmount: !1
                };
                if ("string" != typeof t) throw Error(p(26, !1));
                var e = j(yt, (function(n) {
                    return S(n) === t
                }));
                if (!e) throw Error(p(27, !1, t));
                var r, o = Et(S(e));
                if (n && n.waitForUnmount) {
                    if (o) return o.promise;
                    var i = new Promise((function(t, n) {
                        gt(e, (function() {
                            return i
                        }), t, n)
                    }));
                    return i
                }
                return o ? (r = o.promise, Dt(e, o.resolve, o.reject)) : r = new Promise((function(t, n) {
                    gt(e, (function() {
                        return r
                    }), t, n), Dt(e, t, n)
                })), r
            }

            function Dt(t, n, e) {
                B(t).then(dt).then((function() {
                    n(), setTimeout((function() {
                        Bt()
                    }))
                })).catch(e)
            }

            function Ut(t) {
                return !t || "function" == typeof t || "object" === o(t) && null !== t && !Array.isArray(t)
            }

            function jt(t, n) {
                var e = function(t, n) {
                    var e = 0,
                        r = !1,
                        o = "^";
                    "/" !== t[0] && (t = "/" + t);
                    for (var i = 0; i < t.length; i++) {
                        var u = t[i];
                        (!r && ":" === u || r && "/" === u) && a(i)
                    }
                    return a(t.length), new RegExp(o, "i");

                    function a(i) {
                        var u = t.slice(e, i).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
                        if (o += r ? "[^/]+/?" : u, i === t.length)
                            if (r) n && (o += "$");
                            else {
                                var a = n ? "" : ".*";
                                o = "/" === o.charAt(o.length - 1) ? "".concat(o).concat(a, "$") : "".concat(o, "(/").concat(a, ")?(#.*)?$")
                            }
                        r = !r, e = i
                    }
                }(t, n);
                return function(t) {
                    var n = t.origin;
                    n || (n = "".concat(t.protocol, "//").concat(t.host));
                    var r = t.href.replace(n, "").replace(t.search, "").split("?")[0];
                    return e.test(r)
                }
            }
            var Mt = !1,
                Lt = [],
                Rt = nt && window.location.href;

            function It() {
                return Bt()
            }

            function Bt() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 ? arguments[1] : void 0;
                if (Mt) return new Promise((function(t, e) {
                    Lt.push({
                        resolve: t,
                        reject: e,
                        eventArguments: n
                    })
                }));
                var e, r = Pt(),
                    o = r.appsToUnload,
                    u = r.appsToUnmount,
                    c = r.appsToLoad,
                    s = r.appsToMount,
                    f = !1,
                    l = Rt,
                    p = Rt = window.location.href;
                return Gt() ? (Mt = !0, e = o.concat(c, u, s), d()) : (e = c, v());

                function h() {
                    f = !0
                }

                function v() {
                    return Promise.resolve().then((function() {
                        var t = c.map(Z);
                        return Promise.all(t).then(E).then((function() {
                            return []
                        })).catch((function(t) {
                            throw E(), t
                        }))
                    }))
                }

                function d() {
                    return Promise.resolve().then((function() {
                        if (window.dispatchEvent(new a(0 === e.length ? "single-spa:before-no-app-change" : "single-spa:before-app-change", P(!0))), window.dispatchEvent(new a("single-spa:before-routing-event", P(!0, {
                                cancelNavigation: h
                            }))), f) return window.dispatchEvent(new a("single-spa:before-mount-routing-event", P(!0))), w(), void ot(l);
                        var n = o.map(dt),
                            r = u.map(B).map((function(t) {
                                return t.then(dt)
                            })).concat(n),
                            i = Promise.all(r);
                        i.then((function() {
                            window.dispatchEvent(new a("single-spa:before-mount-routing-event", P(!0)))
                        }));
                        var p = c.map((function(t) {
                                return Z(t).then((function(t) {
                                    return xt(t, i)
                                }))
                            })),
                            m = s.filter((function(t) {
                                return c.indexOf(t) < 0
                            })).map((function(t) {
                                return xt(t, i)
                            }));
                        return i.catch((function(t) {
                            throw E(), t
                        })).then((function() {
                            return E(), Promise.all(p.concat(m)).catch((function(n) {
                                throw t.forEach((function(t) {
                                    return t.reject(n)
                                })), n
                            })).then(w)
                        }))
                    }))
                }

                function w() {
                    var n = bt();
                    t.forEach((function(t) {
                        return t.resolve(n)
                    }));
                    try {
                        var r = 0 === e.length ? "single-spa:no-app-change" : "single-spa:app-change";
                        window.dispatchEvent(new a(r, P())), window.dispatchEvent(new a("single-spa:routing-event", P()))
                    } catch (t) {
                        setTimeout((function() {
                            throw t
                        }))
                    }
                    if (Mt = !1, Lt.length > 0) {
                        var o = Lt;
                        Lt = [], Bt(o)
                    }
                    return n
                }

                function E() {
                    t.forEach((function(t) {
                        it(t.eventArguments)
                    })), it(n)
                }

                function P() {
                    var t, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        a = arguments.length > 1 ? arguments[1] : void 0,
                        h = {},
                        v = (i(t = {}, y, []), i(t, g, []), i(t, m, []), i(t, T, []), t);
                    r ? (c.concat(s).forEach((function(t, n) {
                        w(t, y)
                    })), o.forEach((function(t) {
                        w(t, m)
                    })), u.forEach((function(t) {
                        w(t, g)
                    }))) : e.forEach((function(t) {
                        w(t)
                    }));
                    var d = {
                        detail: {
                            newAppStatuses: h,
                            appsByNewStatus: v,
                            totalAppChanges: e.length,
                            originalEvent: null == n ? void 0 : n[0],
                            oldUrl: l,
                            newUrl: p,
                            navigationIsCanceled: f
                        }
                    };
                    return a && U(d.detail, a), d;

                    function w(t, n) {
                        var e = S(t);
                        n = n || Tt(e), h[e] = n, (v[n] = v[n] || []).push(e)
                    }
                }
            }

            function xt(t, n) {
                return N(t) ? I(t).then((function(t) {
                    return n.then((function() {
                        return N(t) ? W(t) : t
                    }))
                })) : n.then((function() {
                    return t
                }))
            }
            var Ct = !1;

            function Wt(t) {
                var n;
                Ct = !0, t && t.urlRerouteOnly && (n = t.urlRerouteOnly, tt = n), nt && Bt()
            }

            function Gt() {
                return Ct
            }
            nt && setTimeout((function() {
                Ct || console.warn(p(1, !1))
            }), 5e3);
            var kt = {
                getRawAppData: function() {
                    return [].concat(yt)
                },
                reroute: Bt,
                NOT_LOADED: m,
                toLoadPromise: Z,
                toBootstrapPromise: I,
                unregisterApplication: St
            };
            nt && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = kt)
        }
    }
]);