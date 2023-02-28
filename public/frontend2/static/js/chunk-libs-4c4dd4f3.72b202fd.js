"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [8661], {
        41460: function(n, e, t) {
            t.d(e, {
                o: function() {
                    return M
                }
            });
            var r = t(57043),
                o = t.n(r),
                i = t(30236),
                a = t.n(i),
                u = t(3336),
                c = t(84486),
                s = t.n(c),
                d = t(78305),
                l = t.n(d),
                f = t(54725),
                v = t(58677),
                p = t(80699),
                w = t(90219),
                h = t(19413),
                m = t(11925),
                b = t(52476),
                x = t(7308);

            function g(n, e) {
                if (!n) {
                    if (e) throw new w.o(e);
                    throw new w.o("element not existed!")
                }
            }

            function k(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
                return n.length ? n.reduce((function(n, r) {
                    return n.then((function() {
                        return r(e, t)
                    }))
                }), Promise.resolve()) : Promise.resolve()
            }

            function G(n, e) {
                return (0, f.mG)(this, void 0, void 0, l().mark((function t() {
                    return l().wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", "function" === typeof n ? n(e) : !!n);
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))
            }
            var S = !!document.head.attachShadow || !!document.head.createShadowRoot;

            function y(n, e, t, r) {
                var o = document.createElement("div");
                o.innerHTML = n;
                var i = o.firstChild;
                if (e)
                    if (S) {
                        var a, u = i.innerHTML;
                        i.innerHTML = "", a = i.attachShadow ? i.attachShadow({
                            mode: "open"
                        }) : i.createShadowRoot(), a.innerHTML = u
                    } else console.warn("[qiankun]: As current browser not support shadow dom, your strictStyleIsolation configuration will be ignored!");
                if (t) {
                    var c = i.getAttribute(m.W0);
                    c || i.setAttribute(m.W0, r);
                    var d = i.querySelectorAll("style") || [];
                    s()(d, (function(n) {
                        m.N4(i, n, r)
                    }))
                }
                return i
            }

            function C(n, e, t, r, o) {
                return function() {
                    if (e) {
                        if (t) throw new w.o("strictStyleIsolation can not be used with legacy render!");
                        if (r) throw new w.o("experimentalStyleIsolation can not be used with legacy render!");
                        var i = document.getElementById((0, x.Jj)(n));
                        return g(i, "Wrapper element for ".concat(n, " is not existed!")), i
                    }
                    var a = o();
                    return g(a, "Wrapper element for ".concat(n, " is not existed!")), t && S ? a.shadowRoot : a
                }
            }
            var T, q = HTMLElement.prototype.appendChild,
                H = HTMLElement.prototype.removeChild;

            function I(n, e, t) {
                var r = function(r, o) {
                    var i = r.element,
                        a = r.loading,
                        u = r.container;
                    if (t) return t({
                        loading: a,
                        appContent: i ? e : ""
                    });
                    var c = (0, x.ZO)(u);
                    if ("unmounted" !== o) {
                        var s = function() {
                            switch (o) {
                                case "loading":
                                case "mounting":
                                    return "Target container with ".concat(u, " not existed while ").concat(n, " ").concat(o, "!");
                                case "mounted":
                                    return "Target container with ".concat(u, " not existed after ").concat(n, " ").concat(o, "!");
                                default:
                                    return "Target container with ".concat(u, " not existed while ").concat(n, " rendering!")
                            }
                        }();
                        g(c, s)
                    }
                    if (c && !c.contains(i)) {
                        while (c.firstChild) H.call(c, c.firstChild);
                        i && q.call(c, i)
                    }
                };
                return r
            }

            function L(n, e, t, r) {
                if ((0, x.BS)(n)) return n;
                if (r) {
                    var o = t[r];
                    if ((0, x.BS)(o)) return o
                }
                var i = t[e];
                if ((0, x.BS)(i)) return i;
                throw new w.o("You need to export lifecycle functions in ".concat(e, " entry"))
            }

            function M(n) {
                var e, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 ? arguments[2] : void 0;
                return (0, f.mG)(this, void 0, void 0, l().mark((function i() {
                    var c, s, d, w, m, g, S, q, H, M, j, A, P, O, W, B, E, F, Z, R, U, X, D, J, N, Q, Y, _, z, K, V, $, nn, en, tn, rn, on, an, un, cn, sn, dn, ln, fn, vn, pn, wn, hn, mn, bn, xn, gn = this;
                    return l().wrap((function(i) {
                        while (1) switch (i.prev = i.next) {
                            case 0:
                                return c = n.entry, s = n.name, d = (0, x.DE)(s), "[qiankun] App ".concat(d, " Loading"), w = t.singular, m = void 0 !== w && w, g = t.sandbox, S = void 0 === g || g, q = t.excludeAssetFilter, H = t.globalContext, M = void 0 === H ? window : H, j = (0, f._T)(t, ["singular", "sandbox", "excludeAssetFilter", "globalContext"]), i.next = 7, (0, v.IH)(c, j);
                            case 7:
                                return A = i.sent, P = A.template, O = A.execScripts, W = A.assetPublicPath, i.next = 13, G(m, n);
                            case 13:
                                if (!i.sent) {
                                    i.next = 16;
                                    break
                                }
                                return i.next = 16, T && T.promise;
                            case 16:
                                return B = (0, x.sQ)(d)(P), E = "object" === (0, u.Z)(S) && !!S.strictStyleIsolation, F = (0, x.FO)(S), Z = y(B, E, F, d), R = "container" in n ? n.container : void 0, U = "render" in n ? n.render : void 0, X = I(d, B, U), X({
                                    element: Z,
                                    loading: !0,
                                    container: R
                                }, "loading"), D = C(d, !!U, E, F, (function() {
                                    return Z
                                })), J = M, N = function() {
                                    return Promise.resolve()
                                }, Q = function() {
                                    return Promise.resolve()
                                }, Y = "object" === (0, u.Z)(S) && !!S.loose, S && (_ = (0, b.Id)(d, D, F, Y, q, J), J = _.instance.proxy, N = _.mount, Q = _.unmount), z = a()({}, (0, p.Z)(J, W), r, (function(n, e) {
                                    return o()(null !== n && void 0 !== n ? n : [], null !== e && void 0 !== e ? e : [])
                                })), K = z.beforeUnmount, V = void 0 === K ? [] : K, $ = z.afterUnmount, nn = void 0 === $ ? [] : $, en = z.afterMount, tn = void 0 === en ? [] : en, rn = z.beforeMount, on = void 0 === rn ? [] : rn, an = z.beforeLoad, un = void 0 === an ? [] : an, i.next = 34, k((0, x.qo)(un), n, J);
                            case 34:
                                return i.next = 36, O(J, S && !Y);
                            case 36:
                                return cn = i.sent, sn = L(cn, s, J, null === (e = null === _ || void 0 === _ ? void 0 : _.instance) || void 0 === e ? void 0 : e.latestSetProp), dn = sn.bootstrap, ln = sn.mount, fn = sn.unmount, vn = sn.update, pn = (0, h.I)(d), wn = pn.onGlobalStateChange, hn = pn.setGlobalState, mn = pn.offGlobalStateChange, bn = function(n) {
                                    return Z = n
                                }, xn = function() {
                                    var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
                                        o = {
                                            name: d,
                                            bootstrap: dn,
                                            mount: [function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function n() {
                                                    return l().wrap((function(n) {
                                                        while (1) switch (n.prev = n.next) {
                                                            case 0:
                                                                0;
                                                            case 1:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })))
                                            }, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function e() {
                                                    return l().wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, G(m, n);
                                                            case 2:
                                                                if (e.t0 = e.sent, !e.t0) {
                                                                    e.next = 5;
                                                                    break
                                                                }
                                                                e.t0 = T;
                                                            case 5:
                                                                if (!e.t0) {
                                                                    e.next = 7;
                                                                    break
                                                                }
                                                                return e.abrupt("return", T.promise);
                                                            case 7:
                                                                return e.abrupt("return", void 0);
                                                            case 8:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))
                                            }, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function n() {
                                                    return l().wrap((function(n) {
                                                        while (1) switch (n.prev = n.next) {
                                                            case 0:
                                                                e = Z, t = C(d, !!U, E, F, (function() {
                                                                    return e
                                                                }));
                                                            case 2:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })))
                                            }, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function n() {
                                                    var t;
                                                    return l().wrap((function(n) {
                                                        while (1) switch (n.prev = n.next) {
                                                            case 0:
                                                                t = r !== R, !t && e || (e = y(B, E, F, d), bn(e)), X({
                                                                    element: e,
                                                                    loading: !0,
                                                                    container: r
                                                                }, "mounting");
                                                            case 3:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })))
                                            }, N, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function e() {
                                                    return l().wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.abrupt("return", k((0, x.qo)(on), n, J));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))
                                            }, function(n) {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function e() {
                                                    return l().wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.abrupt("return", ln(Object.assign(Object.assign({}, n), {
                                                                    container: t(),
                                                                    setGlobalState: hn,
                                                                    onGlobalStateChange: wn
                                                                })));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))
                                            }, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function n() {
                                                    return l().wrap((function(n) {
                                                        while (1) switch (n.prev = n.next) {
                                                            case 0:
                                                                return n.abrupt("return", X({
                                                                    element: e,
                                                                    loading: !1,
                                                                    container: r
                                                                }, "mounted"));
                                                            case 1:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })))
                                            }, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function e() {
                                                    return l().wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.abrupt("return", k((0, x.qo)(tn), n, J));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))
                                            }, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function e() {
                                                    return l().wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, G(m, n);
                                                            case 2:
                                                                if (!e.sent) {
                                                                    e.next = 4;
                                                                    break
                                                                }
                                                                T = new x.BH;
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))
                                            }, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function n() {
                                                    return l().wrap((function(n) {
                                                        while (1) switch (n.prev = n.next) {
                                                            case 0:
                                                                0;
                                                            case 1:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })))
                                            }],
                                            unmount: [function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function e() {
                                                    return l().wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.abrupt("return", k((0, x.qo)(V), n, J));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))
                                            }, function(n) {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function e() {
                                                    return l().wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.abrupt("return", fn(Object.assign(Object.assign({}, n), {
                                                                    container: t()
                                                                })));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))
                                            }, Q, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function e() {
                                                    return l().wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.abrupt("return", k((0, x.qo)(nn), n, J));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))
                                            }, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function n() {
                                                    return l().wrap((function(n) {
                                                        while (1) switch (n.prev = n.next) {
                                                            case 0:
                                                                X({
                                                                    element: null,
                                                                    loading: !1,
                                                                    container: r
                                                                }, "unmounted"), mn(d), e = null, bn(e);
                                                            case 4:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })))
                                            }, function() {
                                                return (0, f.mG)(gn, void 0, void 0, l().mark((function e() {
                                                    return l().wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, G(m, n);
                                                            case 2:
                                                                if (e.t0 = e.sent, !e.t0) {
                                                                    e.next = 5;
                                                                    break
                                                                }
                                                                e.t0 = T;
                                                            case 5:
                                                                if (!e.t0) {
                                                                    e.next = 7;
                                                                    break
                                                                }
                                                                T.resolve();
                                                            case 7:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))
                                            }]
                                        };
                                    return "function" === typeof vn && (o.update = vn), o
                                }, i.abrupt("return", xn);
                            case 42:
                            case "end":
                                return i.stop()
                        }
                    }), i)
                })))
            }
        }
    }
]);