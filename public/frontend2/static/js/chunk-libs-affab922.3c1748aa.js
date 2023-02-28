"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [3435], {
        91108: function(t, e, n) {
            var r;
            n.d(e, {
                    u: function() {
                        return r
                    }
                }),
                function(t) {
                    t["Proxy"] = "Proxy", t["Snapshot"] = "Snapshot", t["LegacyProxy"] = "LegacyProxy"
                }(r || (r = {}))
        },
        27855: function(t, e, n) {
            n.d(e, {
                RT: function() {
                    return i
                },
                cd: function() {
                    return u
                },
                wF: function() {
                    return a
                }
            });
            var r = n(7308),
                o = null;

            function i() {
                return o
            }

            function a(t) {
                o = t
            }
            var c = new WeakMap;

            function u(t, e) {
                if ((0, r.GV)(e) && !(0, r.WE)(e) && !(0, r.RL)(e)) {
                    var n = c.get(e);
                    if (n) return n;
                    var o = Function.prototype.bind.call(e, t);
                    for (var i in e) o[i] = e[i];
                    if (e.hasOwnProperty("prototype") && !o.hasOwnProperty("prototype") && Object.defineProperty(o, "prototype", {
                            value: e.prototype,
                            enumerable: !1,
                            writable: !0
                        }), "function" === typeof e.toString) {
                        var a = e.hasOwnProperty("toString") && !o.hasOwnProperty("toString"),
                            u = o.toString === Function.prototype.toString;
                        if (a || u) {
                            var s = Object.getOwnPropertyDescriptor(a ? e : Function.prototype, "toString");
                            Object.defineProperty(o, "toString", Object.assign(Object.assign({}, s), (null === s || void 0 === s ? void 0 : s.get) ? null : {
                                value: function() {
                                    return e.toString()
                                }
                            }))
                        }
                    }
                    return c.set(e, o), o
                }
                return e
            }
            new WeakMap
        },
        52476: function(t, e, n) {
            n.d(e, {
                Id: function() {
                    return y
                }
            });
            var r = n(89584),
                o = n(78305),
                i = n.n(o),
                a = n(54725),
                c = n(3336),
                u = n(13087),
                s = n(62833),
                l = n(91108),
                d = n(27855);

            function p(t, e) {
                var n = Object.getOwnPropertyDescriptor(t, e);
                return !n || n.configurable
            }
            var f = function() {
                    function t(e) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                        (0, u.Z)(this, t), this.addedPropsMapInSandbox = new Map, this.modifiedPropsOriginalValueMapInSandbox = new Map, this.currentUpdatedPropsValueMap = new Map, this.sandboxRunning = !0, this.latestSetProp = null, this.name = e, this.globalContext = r, this.type = l.u.LegacyProxy;
                        var o = this.addedPropsMapInSandbox,
                            i = this.modifiedPropsOriginalValueMapInSandbox,
                            a = this.currentUpdatedPropsValueMap,
                            c = r,
                            s = Object.create(null),
                            p = function(t, e, r) {
                                var u = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                                return !n.sandboxRunning || (c.hasOwnProperty(t) ? i.has(t) || i.set(t, r) : o.set(t, e), a.set(t, e), u && (c[t] = e), n.latestSetProp = t, !0)
                            },
                            f = new Proxy(s, {
                                set: function(t, e, n) {
                                    var r = c[e];
                                    return p(e, n, r, !0)
                                },
                                get: function(t, e) {
                                    if ("top" === e || "parent" === e || "window" === e || "self" === e) return f;
                                    var n = c[e];
                                    return (0, d.cd)(c, n)
                                },
                                has: function(t, e) {
                                    return e in c
                                },
                                getOwnPropertyDescriptor: function(t, e) {
                                    var n = Object.getOwnPropertyDescriptor(c, e);
                                    return n && !n.configurable && (n.configurable = !0), n
                                },
                                defineProperty: function(t, e, n) {
                                    var r = c[e],
                                        o = Reflect.defineProperty(c, e, n),
                                        i = c[e];
                                    return p(e, i, r, !1), o
                                }
                            });
                        this.proxy = f
                    }
                    return (0, s.Z)(t, [{
                        key: "setWindowProp",
                        value: function(t, e, n) {
                            void 0 === e && n ? delete this.globalContext[t] : p(this.globalContext, t) && "symbol" !== (0, c.Z)(t) && (Object.defineProperty(this.globalContext, t, {
                                writable: !0,
                                configurable: !0
                            }), this.globalContext[t] = e)
                        }
                    }, {
                        key: "active",
                        value: function() {
                            var t = this;
                            this.sandboxRunning || this.currentUpdatedPropsValueMap.forEach((function(e, n) {
                                return t.setWindowProp(n, e)
                            })), this.sandboxRunning = !0
                        }
                    }, {
                        key: "inactive",
                        value: function() {
                            var t = this;
                            this.modifiedPropsOriginalValueMapInSandbox.forEach((function(e, n) {
                                return t.setWindowProp(n, e)
                            })), this.addedPropsMapInSandbox.forEach((function(e, n) {
                                return t.setWindowProp(n, void 0, !0)
                            })), this.sandboxRunning = !1
                        }
                    }]), t
                }(),
                h = n(60561),
                v = n(99416),
                g = n(74433);

            function y(t, e, n, o, c, u) {
                var s;
                s = window.Proxy ? o ? new f(t, u) : new v.Z(t, u) : new g.Z(t);
                var l = (0, h.Fv)(t, e, s, n, c),
                    d = [],
                    p = [];
                return {
                    instance: s,
                    mount: function() {
                        return (0, a.mG)(this, void 0, void 0, i().mark((function r() {
                            var o, a;
                            return i().wrap((function(r) {
                                while (1) switch (r.prev = r.next) {
                                    case 0:
                                        s.active(), o = p.slice(0, l.length), a = p.slice(l.length), o.length && o.forEach((function(t) {
                                            return t()
                                        })), d = (0, h.BP)(t, e, s, n, c), a.length && a.forEach((function(t) {
                                            return t()
                                        })), p = [];
                                    case 7:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))
                    },
                    unmount: function() {
                        return (0, a.mG)(this, void 0, void 0, i().mark((function t() {
                            return i().wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        p = [].concat((0, r.Z)(l), (0, r.Z)(d)).map((function(t) {
                                            return t()
                                        })), s.inactive();
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    }
                }
            }
        },
        11925: function(t, e, n) {
            n.d(e, {
                N4: function() {
                    return d
                },
                W0: function() {
                    return l
                }
            });
            var r, o = n(13087),
                i = n(62833);
            (function(t) {
                t[t["STYLE"] = 1] = "STYLE", t[t["MEDIA"] = 4] = "MEDIA", t[t["SUPPORTS"] = 12] = "SUPPORTS", t[t["IMPORT"] = 3] = "IMPORT", t[t["FONT_FACE"] = 5] = "FONT_FACE", t[t["PAGE"] = 6] = "PAGE", t[t["KEYFRAMES"] = 7] = "KEYFRAMES", t[t["KEYFRAME"] = 8] = "KEYFRAME"
            })(r || (r = {}));
            var a, c = function(t) {
                    return [].slice.call(t, 0)
                },
                u = HTMLBodyElement.prototype.appendChild,
                s = function() {
                    function t() {
                        (0, o.Z)(this, t);
                        var e = document.createElement("style");
                        u.call(document.body, e), this.swapNode = e, this.sheet = e.sheet, this.sheet.disabled = !0
                    }
                    return (0, i.Z)(t, [{
                        key: "process",
                        value: function(e) {
                            var n, r = this,
                                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if (!(t.ModifiedTag in e)) {
                                if ("" !== e.textContent) {
                                    var i = document.createTextNode(e.textContent || "");
                                    this.swapNode.appendChild(i);
                                    var a = this.swapNode.sheet,
                                        u = c(null !== (n = null === a || void 0 === a ? void 0 : a.cssRules) && void 0 !== n ? n : []),
                                        s = this.rewrite(u, o);
                                    return e.textContent = s, this.swapNode.removeChild(i), void(e[t.ModifiedTag] = !0)
                                }
                                var l = new MutationObserver((function(n) {
                                    for (var i, a = 0; a < n.length; a += 1) {
                                        var u = n[a];
                                        if (t.ModifiedTag in e) return;
                                        if ("childList" === u.type) {
                                            var s = e.sheet,
                                                l = c(null !== (i = null === s || void 0 === s ? void 0 : s.cssRules) && void 0 !== i ? i : []),
                                                d = r.rewrite(l, o);
                                            e.textContent = d, e[t.ModifiedTag] = !0
                                        }
                                    }
                                }));
                                l.observe(e, {
                                    childList: !0
                                })
                            }
                        }
                    }, {
                        key: "rewrite",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                o = "";
                            return t.forEach((function(t) {
                                switch (t.type) {
                                    case r.STYLE:
                                        o += e.ruleStyle(t, n);
                                        break;
                                    case r.MEDIA:
                                        o += e.ruleMedia(t, n);
                                        break;
                                    case r.SUPPORTS:
                                        o += e.ruleSupport(t, n);
                                        break;
                                    default:
                                        o += "".concat(t.cssText);
                                        break
                                }
                            })), o
                        }
                    }, {
                        key: "ruleStyle",
                        value: function(t, e) {
                            var n = /((?:[^\w\-.#]|^)(body|html|:root))/gm,
                                r = /(html[^\w{[]+)/gm,
                                o = t.selectorText.trim(),
                                i = t.cssText;
                            if ("html" === o || "body" === o || ":root" === o) return i.replace(n, e);
                            if (r.test(t.selectorText)) {
                                var a = /(html[^\w{]+)(\+|~)/gm;
                                a.test(t.selectorText) || (i = i.replace(r, ""))
                            }
                            return i = i.replace(/^[\s\S]+{/, (function(t) {
                                return t.replace(/(^|,\n?)([^,]+)/g, (function(t, r, o) {
                                    return n.test(t) ? t.replace(n, (function(t) {
                                        var n = [",", "("];
                                        return t && n.includes(t[0]) ? "".concat(t[0]).concat(e) : e
                                    })) : "".concat(r).concat(e, " ").concat(o.replace(/^ */, ""))
                                }))
                            })), i
                        }
                    }, {
                        key: "ruleMedia",
                        value: function(t, e) {
                            var n = this.rewrite(c(t.cssRules), e);
                            return "@media ".concat(t.conditionText || t.media.mediaText, " {").concat(n, "}")
                        }
                    }, {
                        key: "ruleSupport",
                        value: function(t, e) {
                            var n = this.rewrite(c(t.cssRules), e);
                            return "@supports ".concat(t.conditionText || t.cssText.split("{")[0], " {").concat(n, "}")
                        }
                    }]), t
                }();
            s.ModifiedTag = "Symbol(style-modified-qiankun)";
            var l = "data-qiankun",
                d = function(t, e, n) {
                    a || (a = new s), "LINK" === e.tagName && console.warn("Feature: sandbox.experimentalStyleIsolation is not support for link element yet.");
                    var r = t;
                    if (r) {
                        var o = (r.tagName || "").toLowerCase();
                        if (o && "STYLE" === e.tagName) {
                            var i = "".concat(o, "[").concat(l, '="').concat(n, '"]');
                            a.process(e, i)
                        }
                    }
                }
        }
    }
]);