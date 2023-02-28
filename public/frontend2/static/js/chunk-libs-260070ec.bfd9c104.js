"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [2924], {
        89233: function(e, t, n) {
            n.d(t, {
                Dr: function() {
                    return w
                },
                H9: function() {
                    return T
                },
                HU: function() {
                    return P
                },
                R4: function() {
                    return p
                },
                St: function() {
                    return S
                },
                br: function() {
                    return E
                },
                gU: function() {
                    return I
                },
                q2: function() {
                    return D
                },
                uk: function() {
                    return C
                }
            });
            var r = n(23560),
                o = n.n(r),
                i = n(56084),
                a = n(58677),
                c = n(29145),
                u = n(7308),
                l = n(11925),
                p = HTMLHeadElement.prototype.appendChild,
                s = HTMLHeadElement.prototype.removeChild,
                d = HTMLBodyElement.prototype.appendChild,
                f = HTMLBodyElement.prototype.removeChild,
                h = HTMLHeadElement.prototype.insertBefore,
                m = HTMLElement.prototype.removeChild,
                v = "SCRIPT",
                y = "LINK",
                g = "STYLE",
                C = Symbol("target"),
                E = function(e) {
                    return e.querySelector(u.Po)
                };

            function H(e) {
                return !e.type || -1 !== ["text/javascript", "module", "application/javascript", "text/ecmascript", "application/ecmascript"].indexOf(e.type)
            }

            function w(e) {
                return (null === e || void 0 === e ? void 0 : e.toUpperCase()) === y || (null === e || void 0 === e ? void 0 : e.toUpperCase()) === g || (null === e || void 0 === e ? void 0 : e.toUpperCase()) === v
            }

            function M(e) {
                var t, n;
                return !e.textContent && ((null === (t = e.sheet) || void 0 === t ? void 0 : t.cssRules.length) || (null === (n = G(e)) || void 0 === n ? void 0 : n.length))
            }
            var b = new Map;

            function S(e, t, n) {
                var r = b.get(e) || {
                    bootstrappingPatchCount: 0,
                    mountingPatchCount: 0
                };
                switch (t) {
                    case "increase":
                        r["".concat(n, "PatchCount")] += 1;
                        break;
                    case "decrease":
                        r["".concat(n, "PatchCount")] > 0 && (r["".concat(n, "PatchCount")] -= 1);
                        break
                }
                b.set(e, r)
            }

            function T() {
                return Array.from(b.entries()).every((function(e) {
                    var t = (0, i.Z)(e, 2),
                        n = t[1],
                        r = n.bootstrappingPatchCount,
                        o = n.mountingPatchCount;
                    return 0 === r && 0 === o
                }))
            }

            function L(e, t) {
                return Object.defineProperties(e, {
                    srcElement: {
                        get: t
                    },
                    target: {
                        get: t
                    }
                }), e
            }

            function _(e) {
                var t = new CustomEvent("load"),
                    n = L(t, (function() {
                        return e
                    }));
                o()(e.onload) ? e.onload(n) : e.dispatchEvent(n)
            }

            function k(e) {
                var t = new CustomEvent("error"),
                    n = L(t, (function() {
                        return e
                    }));
                o()(e.onerror) ? e.onerror(n) : e.dispatchEvent(n)
            }

            function B(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fetch,
                    r = document.createElement("style"),
                    o = e.href;
                return r.dataset.qiankunHref = o, n(o).then((function(e) {
                    return e.text()
                })).then((function(n) {
                    r.appendChild(document.createTextNode(n)), t(r), _(e)
                })).catch((function() {
                    return k(e)
                })), r
            }
            var x = new WeakMap,
                O = new WeakMap,
                A = new WeakMap;

            function P(e) {
                e.forEach((function(e) {
                    e instanceof HTMLStyleElement && M(e) && e.sheet && x.set(e, e.sheet.cssRules)
                }))
            }

            function G(e) {
                return x.get(e)
            }

            function N(e) {
                return function(t) {
                    var n, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = t,
                        u = e.rawDOMAppendOrInsertBefore,
                        p = e.isInvokedByMicroApp,
                        s = e.containerConfigGetter,
                        d = e.target,
                        f = void 0 === d ? "body" : d;
                    if (!w(i.tagName) || !p(i)) return u.call(this, i, o);
                    if (i.tagName) {
                        var h = s(i),
                            m = h.appName,
                            M = h.appWrapperGetter,
                            b = h.proxy,
                            S = h.strictGlobal,
                            T = h.dynamicStyleSheetElements,
                            L = h.scopedCSS,
                            x = h.excludeAssetFilter;
                        switch (i.tagName) {
                            case y:
                            case g:
                                var P = t,
                                    G = P,
                                    N = G.href;
                                if (x && N && x(N)) return u.call(this, i, o);
                                Object.defineProperty(P, C, {
                                    value: f,
                                    writable: !0,
                                    configurable: !0
                                });
                                var W = M();
                                if (L) {
                                    var D = (null === (n = i.tagName) || void 0 === n ? void 0 : n.toUpperCase()) === y && "stylesheet" === i.rel && i.href;
                                    if (D) {
                                        var I = "function" === typeof c.sH.fetch ? c.sH.fetch : null === (r = c.sH.fetch) || void 0 === r ? void 0 : r.fn;
                                        P = B(i, (function(e) {
                                            return l.N4(W, e, m)
                                        }), I), A.set(i, P)
                                    } else l.N4(W, P, m)
                                }
                                var U = "head" === f ? E(W) : W;
                                T.push(P);
                                var R = U.contains(o) ? o : null;
                                return u.call(U, P, R);
                            case v:
                                var j = i,
                                    q = j.src,
                                    F = j.text;
                                if (x && q && x(q) || !H(i)) return u.call(this, i, o);
                                var Z = M(),
                                    X = "head" === f ? E(Z) : Z,
                                    K = c.sH.fetch,
                                    V = X.contains(o) ? o : null;
                                if (q) {
                                    (0, a.ZA)(null, [q], b, {
                                        fetch: K,
                                        strictGlobal: S,
                                        beforeExec: function() {
                                            var e = function() {
                                                var e = Object.getOwnPropertyDescriptor(document, "currentScript");
                                                return !e || e.configurable
                                            };
                                            e() && Object.defineProperty(document, "currentScript", {
                                                get: function() {
                                                    return i
                                                },
                                                configurable: !0
                                            })
                                        },
                                        success: function() {
                                            _(i), i = null
                                        },
                                        error: function() {
                                            k(i), i = null
                                        }
                                    });
                                    var Y = document.createComment("dynamic script ".concat(q, " replaced by qiankun"));
                                    return O.set(i, Y), u.call(X, Y, V)
                                }(0, a.ZA)(null, ["<script>".concat(F, "<\/script>")], b, {
                                    strictGlobal: S
                                });
                                var z = document.createComment("dynamic inline script replaced by qiankun");
                                return O.set(i, z), u.call(X, z, V);
                            default:
                                break
                        }
                    }
                    return u.call(this, i, o)
                }
            }

            function W(e, t, n) {
                return function(r) {
                    var o = r.tagName;
                    if (!w(o)) return e.call(this, r);
                    try {
                        var i, a = t(r),
                            c = a.appWrapperGetter,
                            u = a.dynamicStyleSheetElements;
                        switch (o) {
                            case g:
                            case y:
                                i = A.get(r) || r;
                                var l = u.indexOf(i); - 1 !== l && u.splice(l, 1);
                                break;
                            case v:
                                i = O.get(r) || r;
                                break;
                            default:
                                i = r
                        }
                        var p = c(),
                            s = "head" === n ? E(p) : p;
                        if (s.contains(i)) return m.call(i.parentNode, i)
                    } catch (d) {
                        console.warn(d)
                    }
                    return e.call(this, r)
                }
            }

            function D(e, t) {
                return HTMLHeadElement.prototype.appendChild === p && HTMLBodyElement.prototype.appendChild === d && HTMLHeadElement.prototype.insertBefore === h && (HTMLHeadElement.prototype.appendChild = N({
                        rawDOMAppendOrInsertBefore: p,
                        containerConfigGetter: t,
                        isInvokedByMicroApp: e,
                        target: "head"
                    }), HTMLBodyElement.prototype.appendChild = N({
                        rawDOMAppendOrInsertBefore: d,
                        containerConfigGetter: t,
                        isInvokedByMicroApp: e,
                        target: "body"
                    }), HTMLHeadElement.prototype.insertBefore = N({
                        rawDOMAppendOrInsertBefore: h,
                        containerConfigGetter: t,
                        isInvokedByMicroApp: e,
                        target: "head"
                    })), HTMLHeadElement.prototype.removeChild === s && HTMLBodyElement.prototype.removeChild === f && (HTMLHeadElement.prototype.removeChild = W(s, t, "head"), HTMLBodyElement.prototype.removeChild = W(f, t, "body")),
                    function() {
                        HTMLHeadElement.prototype.appendChild = p, HTMLHeadElement.prototype.removeChild = s, HTMLBodyElement.prototype.appendChild = d, HTMLBodyElement.prototype.removeChild = f, HTMLHeadElement.prototype.insertBefore = h
                    }
            }

            function I(e, t) {
                e.forEach((function(e) {
                    var n = t(e);
                    if (n && e instanceof HTMLStyleElement && M(e)) {
                        var r = G(e);
                        if (r)
                            for (var o = 0; o < r.length; o++) {
                                var i = r[o],
                                    a = e.sheet;
                                a.insertRule(i.cssText, a.cssRules.length)
                            }
                    }
                }))
            }
        },
        62671: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return i
                }
            });
            var r = n(3759),
                o = n(89233);

            function i(e, t, n) {
                var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    c = arguments.length > 5 ? arguments[5] : void 0,
                    u = [],
                    l = (0, o.q2)((function() {
                        return (0, r.lV)(window.location).some((function(t) {
                            return t === e
                        }))
                    }), (function() {
                        return {
                            appName: e,
                            appWrapperGetter: t,
                            proxy: n,
                            strictGlobal: !1,
                            scopedCSS: a,
                            dynamicStyleSheetElements: u,
                            excludeAssetFilter: c
                        }
                    }));
                return i || (0, o.St)(e, "increase", "bootstrapping"), i && (0, o.St)(e, "increase", "mounting"),
                    function() {
                        return i || (0, o.St)(e, "decrease", "bootstrapping"), i && (0, o.St)(e, "decrease", "mounting"), (0, o.H9)() && l(), (0, o.HU)(u),
                            function() {
                                (0, o.gU)(u, (function(e) {
                                    var n = t();
                                    return !n.contains(e) && (document.head.appendChild.call(n, e), !0)
                                })), i && (u = [])
                            }
                    }
            }
        },
        54167: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return p
                }
            });
            var r = n(7308),
                o = n(27855),
                i = n(89233);
            Object.defineProperty(r.B1, "__proxyAttachContainerConfigMap__", {
                enumerable: !1,
                writable: !0
            }), r.B1.__proxyAttachContainerConfigMap__ = r.B1.__proxyAttachContainerConfigMap__ || new WeakMap;
            var a = r.B1.__proxyAttachContainerConfigMap__,
                c = new WeakMap,
                u = new WeakMap;

            function l() {
                var e = u.get(document.createElement);
                if (!e) {
                    var t = document.createElement;
                    Document.prototype.createElement = function(e, n) {
                        var r = t.call(this, e, n);
                        if ((0, i.Dr)(e)) {
                            var u = (0, o.RT)() || {},
                                l = u.window;
                            if (l) {
                                var p = a.get(l);
                                p && c.set(r, p)
                            }
                        }
                        return r
                    }, document.hasOwnProperty("createElement") && (document.createElement = Document.prototype.createElement), u.set(Document.prototype.createElement, t)
                }
                return function() {
                    e && (Document.prototype.createElement = e, document.createElement = e)
                }
            }

            function p(e, t, n) {
                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    u = arguments.length > 5 ? arguments[5] : void 0,
                    p = a.get(n);
                p || (p = {
                    appName: e,
                    proxy: n,
                    appWrapperGetter: t,
                    dynamicStyleSheetElements: [],
                    strictGlobal: !0,
                    excludeAssetFilter: u,
                    scopedCSS: o
                }, a.set(n, p));
                var s = p,
                    d = s.dynamicStyleSheetElements,
                    f = l(),
                    h = (0, i.q2)((function(e) {
                        return c.has(e)
                    }), (function(e) {
                        return c.get(e)
                    }));
                return r || (0, i.St)(e, "increase", "bootstrapping"), r && (0, i.St)(e, "increase", "mounting"),
                    function() {
                        return r || (0, i.St)(e, "decrease", "bootstrapping"), r && (0, i.St)(e, "decrease", "mounting"), (0, i.H9)() && (h(), f()), (0, i.HU)(d),
                            function() {
                                (0, i.gU)(d, (function(e) {
                                    var n = t();
                                    if (!n.contains(e)) {
                                        var r = "head" === e[i.uk] ? (0, i.br)(n) : n;
                                        return i.R4.call(r, e), !0
                                    }
                                    return !1
                                }))
                            }
                    }
            }
        },
        15732: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(23560),
                o = n.n(r),
                i = n(50308),
                a = n.n(i);

            function c() {
                var e = function(e) {
                        return a()
                    },
                    t = [],
                    n = [];
                return window.g_history && o()(window.g_history.listen) && (e = window.g_history.listen.bind(window.g_history), window.g_history.listen = function(r) {
                        t.push(r);
                        var o = e(r);
                        return n.push(o),
                            function() {
                                o(), n.splice(n.indexOf(o), 1), t.splice(t.indexOf(r), 1)
                            }
                    }),
                    function() {
                        var r = a();
                        return t.length && (r = function() {
                            t.forEach((function(e) {
                                return window.g_history.listen(e)
                            }))
                        }), n.forEach((function(e) {
                            return e()
                        })), window.g_history && o()(window.g_history.listen) && (window.g_history.listen = e), r
                    }
            }
        }
    }
]);