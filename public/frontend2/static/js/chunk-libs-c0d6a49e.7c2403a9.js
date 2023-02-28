(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [1043], {
        81653: function(t) {
            /*!
             * clipboard.js v2.0.11
             * https://clipboardjs.com/
             *
             * Licensed MIT © Zeno Rocha
             */
            ! function(e, n) {
                t.exports = n()
            }(0, (function() {
                return e = {
                    686: function(t, e, n) {
                        "use strict";
                        n.d(e, {
                            default: function() {
                                return g
                            }
                        });
                        e = n(279);
                        var r = n.n(e),
                            o = (e = n(370), n.n(e)),
                            i = (e = n(817), n.n(e));

                        function u(t) {
                            try {
                                return document.execCommand(t)
                            } catch (t) {
                                return
                            }
                        }
                        var c = function(t) {
                            return t = i()(t), u("cut"), t
                        };

                        function a(t, e) {
                            var n, r;
                            n = t, r = "rtl" === document.documentElement.getAttribute("dir"), (t = document.createElement("textarea")).style.fontSize = "12pt", t.style.border = "0", t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style[r ? "right" : "left"] = "-9999px", r = window.pageYOffset || document.documentElement.scrollTop, t.style.top = "".concat(r, "px"), t.setAttribute("readonly", ""), t.value = n;
                            return e.container.appendChild(t), e = i()(t), u("copy"), t.remove(), e
                        }
                        var f = function(t) {
                            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                    container: document.body
                                },
                                n = "";
                            return "string" == typeof t ? n = a(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? n = a(t.value, e) : (n = i()(t), u("copy")), n
                        };

                        function l(t) {
                            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var s = function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.action,
                                n = void 0 === e ? "copy" : e,
                                r = t.container;
                            e = t.target, t = t.text;
                            if ("copy" !== n && "cut" !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            if (void 0 !== e) {
                                if (!e || "object" !== l(e) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === n && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                            }
                            return t ? f(t, {
                                container: r
                            }) : e ? "cut" === n ? c(e) : f(e, {
                                container: r
                            }) : void 0
                        };

                        function p(t) {
                            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }

                        function y(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }

                        function d(t, e) {
                            return (d = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }

                        function v(e) {
                            var n = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                                } catch (t) {
                                    return !1
                                }
                            }();
                            return function() {
                                var t, r = h(e);
                                return t = n ? (t = h(this).constructor, Reflect.construct(r, arguments, t)) : r.apply(this, arguments), r = this, !t || "object" !== p(t) && "function" != typeof t ? function(t) {
                                    if (void 0 !== t) return t;
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                                }(r) : t
                            }
                        }

                        function h(t) {
                            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t)
                            })(t)
                        }

                        function b(t, e) {
                            if (t = "data-clipboard-".concat(t), e.hasAttribute(t)) return e.getAttribute(t)
                        }
                        var g = function() {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && d(t, e)
                            }(u, r());
                            var t, e, n, i = v(u);

                            function u(t, e) {
                                var n;
                                return function(t) {
                                    if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function")
                                }(this), (n = i.call(this)).resolveOptions(e), n.listenClick(t), n
                            }
                            return t = u, n = [{
                                key: "copy",
                                value: function(t) {
                                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                        container: document.body
                                    };
                                    return f(t, e)
                                }
                            }, {
                                key: "cut",
                                value: function(t) {
                                    return c(t)
                                }
                            }, {
                                key: "isSupported",
                                value: function() {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                        e = (t = "string" == typeof t ? [t] : t, !!document.queryCommandSupported);
                                    return t.forEach((function(t) {
                                        e = e && !!document.queryCommandSupported(t)
                                    })), e
                                }
                            }], (e = [{
                                key: "resolveOptions",
                                value: function() {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === p(t.container) ? t.container : document.body
                                }
                            }, {
                                key: "listenClick",
                                value: function(t) {
                                    var e = this;
                                    this.listener = o()(t, "click", (function(t) {
                                        return e.onClick(t)
                                    }))
                                }
                            }, {
                                key: "onClick",
                                value: function(t) {
                                    var e = t.delegateTarget || t.currentTarget,
                                        n = this.action(e) || "copy";
                                    t = s({
                                        action: n,
                                        container: this.container,
                                        target: this.target(e),
                                        text: this.text(e)
                                    });
                                    this.emit(t ? "success" : "error", {
                                        action: n,
                                        text: t,
                                        trigger: e,
                                        clearSelection: function() {
                                            e && e.focus(), window.getSelection().removeAllRanges()
                                        }
                                    })
                                }
                            }, {
                                key: "defaultAction",
                                value: function(t) {
                                    return b("action", t)
                                }
                            }, {
                                key: "defaultTarget",
                                value: function(t) {
                                    if (t = b("target", t), t) return document.querySelector(t)
                                }
                            }, {
                                key: "defaultText",
                                value: function(t) {
                                    return b("text", t)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.listener.destroy()
                                }
                            }]) && y(t.prototype, e), n && y(t, n), u
                        }()
                    },
                    828: function(t) {
                        var e;
                        "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function(t, e) {
                            for (; t && 9 !== t.nodeType;) {
                                if ("function" == typeof t.matches && t.matches(e)) return t;
                                t = t.parentNode
                            }
                        }
                    },
                    438: function(t, e, n) {
                        var r = n(828);

                        function o(t, e, n, o, i) {
                            var u = function(t, e, n, o) {
                                return function(n) {
                                    n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n)
                                }
                            }.apply(this, arguments);
                            return t.addEventListener(n, u, i), {
                                destroy: function() {
                                    t.removeEventListener(n, u, i)
                                }
                            }
                        }
                        t.exports = function(t, e, n, r, i) {
                            return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function(t) {
                                return o(t, e, n, r, i)
                            })))
                        }
                    },
                    879: function(t, e) {
                        e.node = function(t) {
                            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                        }, e.nodeList = function(t) {
                            var n = Object.prototype.toString.call(t);
                            return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
                        }, e.string = function(t) {
                            return "string" == typeof t || t instanceof String
                        }, e.fn = function(t) {
                            return "[object Function]" === Object.prototype.toString.call(t)
                        }
                    },
                    370: function(t, e, n) {
                        var r = n(879),
                            o = n(438);
                        t.exports = function(t, e, n) {
                            if (!t && !e && !n) throw new Error("Missing required arguments");
                            if (!r.string(e)) throw new TypeError("Second argument must be a String");
                            if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                            if (r.node(t)) return f = e, l = n, (a = t).addEventListener(f, l), {
                                destroy: function() {
                                    a.removeEventListener(f, l)
                                }
                            };
                            if (r.nodeList(t)) return i = t, u = e, c = n, Array.prototype.forEach.call(i, (function(t) {
                                t.addEventListener(u, c)
                            })), {
                                destroy: function() {
                                    Array.prototype.forEach.call(i, (function(t) {
                                        t.removeEventListener(u, c)
                                    }))
                                }
                            };
                            if (r.string(t)) return o(document.body, t, e, n);
                            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                            var i, u, c, a, f, l
                        }
                    },
                    817: function(t) {
                        t.exports = function(t) {
                            var e, n = "SELECT" === t.nodeName ? (t.focus(), t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value) : (t.hasAttribute("contenteditable") && t.focus(), n = window.getSelection(), (e = document.createRange()).selectNodeContents(t), n.removeAllRanges(), n.addRange(e), n.toString());
                            return n
                        }
                    },
                    279: function(t) {
                        function e() {}
                        e.prototype = {
                            on: function(t, e, n) {
                                var r = this.e || (this.e = {});
                                return (r[t] || (r[t] = [])).push({
                                    fn: e,
                                    ctx: n
                                }), this
                            },
                            once: function(t, e, n) {
                                var r = this;

                                function o() {
                                    r.off(t, o), e.apply(n, arguments)
                                }
                                return o._ = e, this.on(t, o, n)
                            },
                            emit: function(t) {
                                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, e);
                                return this
                            },
                            off: function(t, e) {
                                var n = this.e || (this.e = {}),
                                    r = n[t],
                                    o = [];
                                if (r && e)
                                    for (var i = 0, u = r.length; i < u; i++) r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                                return o.length ? n[t] = o : delete n[t], this
                            }
                        }, t.exports = e, t.exports.TinyEmitter = e
                    }
                }, n = {}, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(n, {
                        a: n
                    }), n
                }, t.d = function(e, n) {
                    for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: n[r]
                    })
                }, t.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, t(686).default;

                function t(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        exports: {}
                    };
                    return e[r](o, o.exports, t), o.exports
                }
                var e, n
            }))
        },
        19662: function(t, e, n) {
            var r = n(60614),
                o = n(66330),
                i = TypeError;
            t.exports = function(t) {
                if (r(t)) return t;
                throw i(o(t) + " is not a function")
            }
        },
        96077: function(t, e, n) {
            var r = n(60614),
                o = String,
                i = TypeError;
            t.exports = function(t) {
                if ("object" == typeof t || r(t)) return t;
                throw i("Can't set " + o(t) + " as a prototype")
            }
        },
        19670: function(t, e, n) {
            var r = n(70111),
                o = String,
                i = TypeError;
            t.exports = function(t) {
                if (r(t)) return t;
                throw i(o(t) + " is not an object")
            }
        },
        41318: function(t, e, n) {
            var r = n(45656),
                o = n(51400),
                i = n(26244),
                u = function(t) {
                    return function(e, n, u) {
                        var c, a = r(e),
                            f = i(a),
                            l = o(u, f);
                        if (t && n != n) {
                            while (f > l)
                                if (c = a[l++], c != c) return !0
                        } else
                            for (; f > l; l++)
                                if ((t || l in a) && a[l] === n) return t || l || 0;
                        return !t && -1
                    }
                };
            t.exports = {
                includes: u(!0),
                indexOf: u(!1)
            }
        },
        84326: function(t, e, n) {
            var r = n(1702),
                o = r({}.toString),
                i = r("".slice);
            t.exports = function(t) {
                return i(o(t), 8, -1)
            }
        },
        70648: function(t, e, n) {
            var r = n(51694),
                o = n(60614),
                i = n(84326),
                u = n(5112),
                c = u("toStringTag"),
                a = Object,
                f = "Arguments" == i(function() {
                    return arguments
                }()),
                l = function(t, e) {
                    try {
                        return t[e]
                    } catch (n) {}
                };
            t.exports = r ? i : function(t) {
                var e, n, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = l(e = a(t), c)) ? n : f ? i(e) : "Object" == (r = i(e)) && o(e.callee) ? "Arguments" : r
            }
        },
        77741: function(t, e, n) {
            var r = n(1702),
                o = Error,
                i = r("".replace),
                u = function(t) {
                    return String(o(t).stack)
                }("zxcasd"),
                c = /\n\s*at [^:]*:[^\n]*/,
                a = c.test(u);
            t.exports = function(t, e) {
                if (a && "string" == typeof t && !o.prepareStackTrace)
                    while (e--) t = i(t, c, "");
                return t
            }
        },
        99920: function(t, e, n) {
            var r = n(92597),
                o = n(53887),
                i = n(31236),
                u = n(3070);
            t.exports = function(t, e, n) {
                for (var c = o(e), a = u.f, f = i.f, l = 0; l < c.length; l++) {
                    var s = c[l];
                    r(t, s) || n && r(n, s) || a(t, s, f(e, s))
                }
            }
        },
        68880: function(t, e, n) {
            var r = n(19781),
                o = n(3070),
                i = n(79114);
            t.exports = r ? function(t, e, n) {
                return o.f(t, e, i(1, n))
            } : function(t, e, n) {
                return t[e] = n, t
            }
        },
        79114: function(t) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        },
        98052: function(t, e, n) {
            var r = n(60614),
                o = n(3070),
                i = n(56339),
                u = n(13072);
            t.exports = function(t, e, n, c) {
                c || (c = {});
                var a = c.enumerable,
                    f = void 0 !== c.name ? c.name : e;
                if (r(n) && i(n, f, c), c.global) a ? t[e] = n : u(e, n);
                else {
                    try {
                        c.unsafe ? t[e] && (a = !0) : delete t[e]
                    } catch (l) {}
                    a ? t[e] = n : o.f(t, e, {
                        value: n,
                        enumerable: !1,
                        configurable: !c.nonConfigurable,
                        writable: !c.nonWritable
                    })
                }
                return t
            }
        },
        13072: function(t, e, n) {
            var r = n(17854),
                o = Object.defineProperty;
            t.exports = function(t, e) {
                try {
                    o(r, t, {
                        value: e,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    r[t] = e
                }
                return e
            }
        },
        19781: function(t, e, n) {
            var r = n(47293);
            t.exports = !r((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        48924: function(t, e, n) {
            var r = n(17854),
                o = n(70111),
                i = r.document,
                u = o(i) && o(i.createElement);
            t.exports = function(t) {
                return u ? i.createElement(t) : {}
            }
        },
        88113: function(t, e, n) {
            var r = n(35005);
            t.exports = r("navigator", "userAgent") || ""
        },
        7392: function(t, e, n) {
            var r, o, i = n(17854),
                u = n(88113),
                c = i.process,
                a = i.Deno,
                f = c && c.versions || a && a.version,
                l = f && f.v8;
            l && (r = l.split("."), o = r[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && u && (r = u.match(/Edge\/(\d+)/), (!r || r[1] >= 74) && (r = u.match(/Chrome\/(\d+)/), r && (o = +r[1]))), t.exports = o
        },
        80748: function(t) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        22914: function(t, e, n) {
            var r = n(47293),
                o = n(79114);
            t.exports = !r((function() {
                var t = Error("a");
                return !("stack" in t) || (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack)
            }))
        },
        82109: function(t, e, n) {
            var r = n(17854),
                o = n(31236).f,
                i = n(68880),
                u = n(98052),
                c = n(13072),
                a = n(99920),
                f = n(54705);
            t.exports = function(t, e) {
                var n, l, s, p, y, d, v = t.target,
                    h = t.global,
                    b = t.stat;
                if (l = h ? r : b ? r[v] || c(v, {}) : (r[v] || {}).prototype, l)
                    for (s in e) {
                        if (y = e[s], t.dontCallGetSet ? (d = o(l, s), p = d && d.value) : p = l[s], n = f(h ? s : v + (b ? "." : "#") + s, t.forced), !n && void 0 !== p) {
                            if (typeof y == typeof p) continue;
                            a(y, p)
                        }(t.sham || p && p.sham) && i(y, "sham", !0), u(l, s, y, t)
                    }
            }
        },
        47293: function(t) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (e) {
                    return !0
                }
            }
        },
        22104: function(t, e, n) {
            var r = n(34374),
                o = Function.prototype,
                i = o.apply,
                u = o.call;
            t.exports = "object" == typeof Reflect && Reflect.apply || (r ? u.bind(i) : function() {
                return u.apply(i, arguments)
            })
        },
        34374: function(t, e, n) {
            var r = n(47293);
            t.exports = !r((function() {
                var t = function() {}.bind();
                return "function" != typeof t || t.hasOwnProperty("prototype")
            }))
        },
        46916: function(t, e, n) {
            var r = n(34374),
                o = Function.prototype.call;
            t.exports = r ? o.bind(o) : function() {
                return o.apply(o, arguments)
            }
        },
        76530: function(t, e, n) {
            var r = n(19781),
                o = n(92597),
                i = Function.prototype,
                u = r && Object.getOwnPropertyDescriptor,
                c = o(i, "name"),
                a = c && "something" === function() {}.name,
                f = c && (!r || r && u(i, "name").configurable);
            t.exports = {
                EXISTS: c,
                PROPER: a,
                CONFIGURABLE: f
            }
        },
        1702: function(t, e, n) {
            var r = n(34374),
                o = Function.prototype,
                i = o.bind,
                u = o.call,
                c = r && i.bind(u, u);
            t.exports = r ? function(t) {
                return t && c(t)
            } : function(t) {
                return t && function() {
                    return u.apply(t, arguments)
                }
            }
        },
        35005: function(t, e, n) {
            var r = n(17854),
                o = n(60614),
                i = function(t) {
                    return o(t) ? t : void 0
                };
            t.exports = function(t, e) {
                return arguments.length < 2 ? i(r[t]) : r[t] && r[t][e]
            }
        },
        58173: function(t, e, n) {
            var r = n(19662);
            t.exports = function(t, e) {
                var n = t[e];
                return null == n ? void 0 : r(n)
            }
        },
        17854: function(t, e, n) {
            var r = function(t) {
                return t && t.Math == Math && t
            };
            t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() {
                return this
            }() || Function("return this")()
        }
    }
]);