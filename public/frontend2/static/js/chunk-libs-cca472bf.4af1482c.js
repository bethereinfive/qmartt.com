(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [1749], {
        1001: function(n, e, t) {
            "use strict";

            function o(n, e, t, o, r, i, c, u) {
                var a, f = "function" === typeof n ? n.options : n;
                if (e && (f.render = e, f.staticRenderFns = t, f._compiled = !0), o && (f.functional = !0), i && (f._scopeId = "data-v-" + i), c ? (a = function(n) {
                        n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, n || "undefined" === typeof __VUE_SSR_CONTEXT__ || (n = __VUE_SSR_CONTEXT__), r && r.call(this, n), n && n._registeredComponents && n._registeredComponents.add(c)
                    }, f._ssrRegister = a) : r && (a = u ? function() {
                        r.call(this, (f.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : r), a)
                    if (f.functional) {
                        f._injectStyles = a;
                        var s = f.render;
                        f.render = function(n, e) {
                            return a.call(e), s(n, e)
                        }
                    } else {
                        var p = f.beforeCreate;
                        f.beforeCreate = p ? [].concat(p, a) : [a]
                    }
                return {
                    exports: n,
                    options: f
                }
            }
            t.d(e, {
                Z: function() {
                    return o
                }
            })
        },
        7308: function(n, e, t) {
            "use strict";
            t.d(e, {
                BH: function() {
                    return T
                },
                DE: function() {
                    return P
                },
                ZO: function() {
                    return Z
                },
                Ze: function() {
                    return A
                },
                sQ: function() {
                    return S
                },
                Jj: function() {
                    return E
                },
                WE: function() {
                    return x
                },
                GV: function() {
                    return w
                },
                RL: function() {
                    return b
                },
                FO: function() {
                    return $
                },
                B1: function() {
                    return j
                },
                TU: function() {
                    return m
                },
                Po: function() {
                    return O
                },
                qo: function() {
                    return l
                },
                BS: function() {
                    return N
                }
            });
            var o = t(3336),
                r = t(62833),
                i = t(13087),
                c = t(23560),
                u = t.n(c),
                a = t(51463),
                f = t.n(a),
                s = t(11865),
                p = t.n(s),
                d = "2.7.5";

            function l(n) {
                return Array.isArray(n) ? n : [n]
            }
            var v = "function" === typeof window.Zone ? setTimeout : function(n) {
                    return Promise.resolve().then(n)
                },
                y = !1;

            function m(n) {
                y || (y = !0, v((function() {
                    n(), y = !1
                })))
            }
            var _ = new WeakMap;

            function b(n) {
                var e = n.prototype && n.prototype.constructor === n && Object.getOwnPropertyNames(n.prototype).length > 1;
                if (e) return !0;
                if (_.has(n)) return _.get(n);
                var t = e;
                if (!t) {
                    var o = n.toString(),
                        r = /^function\b\s[A-Z].*/,
                        i = /^class\b/;
                    t = r.test(o) || i.test(o)
                }
                return _.set(n, t), t
            }
            var h = "function" === typeof document.all && "undefined" === typeof document.all,
                g = new WeakMap,
                w = function(n) {
                    if (g.has(n)) return !0;
                    var e = h ? "function" === typeof n && "undefined" !== typeof n : "function" === typeof n;
                    return e && g.set(n, e), e
                },
                C = new WeakMap;

            function x(n) {
                if (C.has(n)) return C.get(n);
                var e = 0 === n.name.indexOf("bound ") && !n.hasOwnProperty("prototype");
                return C.set(n, e), e
            }
            var O = "qiankun-head";

            function S(n) {
                return function(e) {
                    var t;
                    return t = -1 !== e.indexOf("<head>") ? e.replace("<head>", "<".concat(O, ">")).replace("</head>", "</".concat(O, ">")) : "<".concat(O, "></").concat(O, ">").concat(e), '<div id="'.concat(E(n), '" data-name="').concat(n, '" data-version="').concat(d, '">').concat(t, "</div>")
                }
            }

            function E(n) {
                return "__qiankun_microapp_wrapper_for_".concat(p()(n), "__")
            }
            var j = new Function("return this")(),
                k = f()((function() {
                    return j.hasOwnProperty("__app_instance_name_map__") || Object.defineProperty(j, "__app_instance_name_map__", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: {}
                    }), j.__app_instance_name_map__
                })),
                P = function(n) {
                    var e = k();
                    return n in e ? (e[n]++, "".concat(n, "_").concat(e[n])) : (j.__app_instance_name_map__[n] = 0, n)
                };

            function N(n) {
                var e = null !== n && void 0 !== n ? n : {},
                    t = e.bootstrap,
                    o = e.mount,
                    r = e.unmount;
                return u()(t) && u()(o) && u()(r)
            }
            var T = (0, r.Z)((function n() {
                var e = this;
                (0, i.Z)(this, n), this.promise = new Promise((function(n, t) {
                    e.resolve = n, e.reject = t
                }))
            }));
            "undefined" !== typeof performance && "function" === typeof performance.mark && "function" === typeof performance.clearMarks && "function" === typeof performance.measure && "function" === typeof performance.clearMeasures && performance.getEntriesByName;

            function $(n) {
                return "object" === (0, o.Z)(n) && (!n.strictStyleIsolation && !!n.experimentalStyleIsolation)
            }

            function B(n, e) {
                if (e.body.contains(n)) {
                    var t, o, r = "",
                        i = n;
                    while (i !== e.documentElement) {
                        t = 0, o = i;
                        while (o) 1 === o.nodeType && o.nodeName === i.nodeName && (t += 1), o = o.previousSibling;
                        r = "*[name()='".concat(i.nodeName, "'][").concat(t, "]/").concat(r), i = i.parentNode
                    }
                    return r = "/*[name()='".concat(e.documentElement.nodeName, "']/").concat(r), r = r.replace(/\/$/, ""), r
                }
            }

            function Z(n) {
                return "string" === typeof n ? document.querySelector(n) : n
            }

            function A(n) {
                if (n) {
                    var e = Z(n);
                    if (e) return B(e, document)
                }
            }
        },
        54725: function(n, e, t) {
            "use strict";
            t.d(e, {
                _T: function() {
                    return o
                },
                mG: function() {
                    return r
                }
            });

            function o(n, e) {
                var t = {};
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && e.indexOf(o) < 0 && (t[o] = n[o]);
                if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (o = Object.getOwnPropertySymbols(n); r < o.length; r++) e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[r]) && (t[o[r]] = n[o[r]])
                }
                return t
            }

            function r(n, e, t, o) {
                function r(n) {
                    return n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))
                }
                return new(t || (t = Promise))((function(t, i) {
                    function c(n) {
                        try {
                            a(o.next(n))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(n) {
                        try {
                            a(o["throw"](n))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(n) {
                        n.done ? t(n.value) : r(n.value).then(c, u)
                    }
                    a((o = o.apply(n, e || [])).next())
                }))
            }
        },
        27214: function(n, e, t) {
            "use strict";

            function o(n) {
                return null !== n && "object" === typeof n && "constructor" in n && n.constructor === Object
            }

            function r(n, e) {
                void 0 === n && (n = {}), void 0 === e && (e = {}), Object.keys(e).forEach((function(t) {
                    "undefined" === typeof n[t] ? n[t] = e[t] : o(e[t]) && o(n[t]) && Object.keys(e[t]).length > 0 && r(n[t], e[t])
                }))
            }
            t.d(e, {
                tj: function() {
                    return i
                },
                u9: function() {
                    return u
                }
            });
            var i = "undefined" !== typeof document ? document : {},
                c = {
                    body: {},
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    activeElement: {
                        blur: function() {},
                        nodeName: ""
                    },
                    querySelector: function() {
                        return null
                    },
                    querySelectorAll: function() {
                        return []
                    },
                    getElementById: function() {
                        return null
                    },
                    createEvent: function() {
                        return {
                            initEvent: function() {}
                        }
                    },
                    createElement: function() {
                        return {
                            children: [],
                            childNodes: [],
                            style: {},
                            setAttribute: function() {},
                            getElementsByTagName: function() {
                                return []
                            }
                        }
                    },
                    createElementNS: function() {
                        return {}
                    },
                    importNode: function() {
                        return null
                    },
                    location: {
                        hash: "",
                        host: "",
                        hostname: "",
                        href: "",
                        origin: "",
                        pathname: "",
                        protocol: "",
                        search: ""
                    }
                };
            r(i, c);
            var u = "undefined" !== typeof window ? window : {},
                a = {
                    document: c,
                    navigator: {
                        userAgent: ""
                    },
                    location: {
                        hash: "",
                        host: "",
                        hostname: "",
                        href: "",
                        origin: "",
                        pathname: "",
                        protocol: "",
                        search: ""
                    },
                    history: {
                        replaceState: function() {},
                        pushState: function() {},
                        go: function() {},
                        back: function() {}
                    },
                    CustomEvent: function() {
                        return this
                    },
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    getComputedStyle: function() {
                        return {
                            getPropertyValue: function() {
                                return ""
                            }
                        }
                    },
                    Image: function() {},
                    Date: function() {},
                    screen: {},
                    setTimeout: function() {},
                    clearTimeout: function() {},
                    matchMedia: function() {
                        return {}
                    }
                };
            r(u, a)
        },
        12346: function(n, e, t) {
            "use strict";

            function o(n) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                    return typeof n
                } : function(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(n)
            }

            function r(n, e) {
                if (!n.vueAxiosInstalled) {
                    var t = u(e) ? a(e) : e;
                    if (f(t)) {
                        var o = s(n);
                        if (o) {
                            var r = o < 3 ? i : c;
                            Object.keys(t).forEach((function(e) {
                                r(n, e, t[e])
                            })), n.vueAxiosInstalled = !0
                        } else console.error("[vue-axios] unknown Vue version")
                    } else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")
                }
            }

            function i(n, e, t) {
                Object.defineProperty(n.prototype, e, {
                    get: function() {
                        return t
                    }
                }), n[e] = t
            }

            function c(n, e, t) {
                n.config.globalProperties[e] = t, n[e] = t
            }

            function u(n) {
                return n && "function" == typeof n.get && "function" == typeof n.post
            }

            function a(n) {
                return {
                    axios: n,
                    $http: n
                }
            }

            function f(n) {
                return "object" === o(n) && Object.keys(n).every((function(e) {
                    return u(n[e])
                }))
            }

            function s(n) {
                return n && n.version && Number(n.version.split(".")[0])
            }
            t.d(e, {
                Z: function() {
                    return r
                }
            }), n = t.hmd(n), "object" == ("undefined" == typeof exports ? "undefined" : o(exports)) ? n.exports = r : "function" == typeof define && t.amdO ? define([], (function() {
                return r
            })) : window.Vue && window.axios && window.Vue.use && Vue.use(r, window.axios)
        },
        72268: function(n, e, t) {
            var o = t(81653),
                r = {
                    autoSetContainer: !1,
                    appendToBody: !0
                },
                i = {
                    install: function(n) {
                        var e = "3." === n.version.slice(0, 2) ? n.config.globalProperties : n.prototype;
                        e.$clipboardConfig = r, e.$copyText = function(n, e) {
                            return new Promise((function(t, i) {
                                var c = document.createElement("button"),
                                    u = new o(c, {
                                        text: function() {
                                            return n
                                        },
                                        action: function() {
                                            return "copy"
                                        },
                                        container: "object" === typeof e ? e : document.body
                                    });
                                u.on("success", (function(n) {
                                    u.destroy(), t(n)
                                })), u.on("error", (function(n) {
                                    u.destroy(), i(n)
                                })), r.appendToBody && document.body.appendChild(c), c.click(), r.appendToBody && document.body.removeChild(c)
                            }))
                        }, n.directive("clipboard", {
                            bind: function(n, e, t) {
                                if ("success" === e.arg) n._vClipboard_success = e.value;
                                else if ("error" === e.arg) n._vClipboard_error = e.value;
                                else {
                                    var i = new o(n, {
                                        text: function() {
                                            return e.value
                                        },
                                        action: function() {
                                            return "cut" === e.arg ? "cut" : "copy"
                                        },
                                        container: r.autoSetContainer ? n : void 0
                                    });
                                    i.on("success", (function(e) {
                                        var t = n._vClipboard_success;
                                        t && t(e)
                                    })), i.on("error", (function(e) {
                                        var t = n._vClipboard_error;
                                        t && t(e)
                                    })), n._vClipboard = i
                                }
                            },
                            update: function(n, e) {
                                "success" === e.arg ? n._vClipboard_success = e.value : "error" === e.arg ? n._vClipboard_error = e.value : (n._vClipboard.text = function() {
                                    return e.value
                                }, n._vClipboard.action = function() {
                                    return "cut" === e.arg ? "cut" : "copy"
                                })
                            },
                            unbind: function(n, e) {
                                n._vClipboard && ("success" === e.arg ? delete n._vClipboard_success : "error" === e.arg ? delete n._vClipboard_error : (n._vClipboard.destroy(), delete n._vClipboard))
                            }
                        })
                    },
                    config: r
                };
            n.exports = i
        },
        28725: function(n, e, t) {
            n.exports = t(77760)
        }
    }
]);