(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [6847], {
        93776: function(n, e, i) {
            var r;
            (function(t) {
                "use strict";
                var s, o, u, c = 9e15,
                    f = 1e9,
                    a = "0123456789abcdef",
                    h = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                    l = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                    d = {
                        precision: 20,
                        rounding: 4,
                        modulo: 1,
                        toExpNeg: -7,
                        toExpPos: 21,
                        minE: -c,
                        maxE: c,
                        crypto: !1
                    },
                    p = !0,
                    g = "[DecimalError] ",
                    w = g + "Invalid argument: ",
                    m = g + "Precision limit exceeded",
                    v = g + "crypto unavailable",
                    N = "[object Decimal]",
                    b = Math.floor,
                    E = Math.pow,
                    x = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                    y = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                    M = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
                    q = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                    O = 1e7,
                    F = 7,
                    A = 9007199254740991,
                    Z = h.length - 1,
                    D = l.length - 1,
                    k = {
                        toStringTag: N
                    };

                function P(n) {
                    var e, i, r, t = n.length - 1,
                        s = "",
                        o = n[0];
                    if (t > 0) {
                        for (s += o, e = 1; e < t; e++) r = n[e] + "", i = F - r.length, i && (s += $(i)), s += r;
                        o = n[e], r = o + "", i = F - r.length, i && (s += $(i))
                    } else if (0 === o) return "0";
                    for (; o % 10 === 0;) o /= 10;
                    return s + o
                }

                function R(n, e, i) {
                    if (n !== ~~n || n < e || n > i) throw Error(w + n)
                }

                function T(n, e, i, r) {
                    var t, s, o, u;
                    for (s = n[0]; s >= 10; s /= 10) --e;
                    return --e < 0 ? (e += F, t = 0) : (t = Math.ceil((e + 1) / F), e %= F), s = E(10, F - e), u = n[t] % s | 0, null == r ? e < 3 ? (0 == e ? u = u / 100 | 0 : 1 == e && (u = u / 10 | 0), o = i < 4 && 99999 == u || i > 3 && 49999 == u || 5e4 == u || 0 == u) : o = (i < 4 && u + 1 == s || i > 3 && u + 1 == s / 2) && (n[t + 1] / s / 100 | 0) == E(10, e - 2) - 1 || (u == s / 2 || 0 == u) && 0 == (n[t + 1] / s / 100 | 0) : e < 4 ? (0 == e ? u = u / 1e3 | 0 : 1 == e ? u = u / 100 | 0 : 2 == e && (u = u / 10 | 0), o = (r || i < 4) && 9999 == u || !r && i > 3 && 4999 == u) : o = ((r || i < 4) && u + 1 == s || !r && i > 3 && u + 1 == s / 2) && (n[t + 1] / s / 1e3 | 0) == E(10, e - 3) - 1, o
                }

                function _(n, e, i) {
                    for (var r, t, s = [0], o = 0, u = n.length; o < u;) {
                        for (t = s.length; t--;) s[t] *= e;
                        for (s[0] += a.indexOf(n.charAt(o++)), r = 0; r < s.length; r++) s[r] > i - 1 && (void 0 === s[r + 1] && (s[r + 1] = 0), s[r + 1] += s[r] / i | 0, s[r] %= i)
                    }
                    return s.reverse()
                }

                function S(n, e) {
                    var i, r, t;
                    if (e.isZero()) return e;
                    r = e.d.length, r < 32 ? (i = Math.ceil(r / 3), t = (1 / en(4, i)).toString()) : (i = 16, t = "2.3283064365386962890625e-10"), n.precision += i, e = nn(n, 1, e.times(t), new n(1));
                    for (var s = i; s--;) {
                        var o = e.times(e);
                        e = o.times(o).minus(o).times(8).plus(1)
                    }
                    return n.precision -= i, e
                }
                k.absoluteValue = k.abs = function() {
                    var n = new this.constructor(this);
                    return n.s < 0 && (n.s = 1), U(n)
                }, k.ceil = function() {
                    return U(new this.constructor(this), this.e + 1, 2)
                }, k.clampedTo = k.clamp = function(n, e) {
                    var i, r = this,
                        t = r.constructor;
                    if (n = new t(n), e = new t(e), !n.s || !e.s) return new t(NaN);
                    if (n.gt(e)) throw Error(w + e);
                    return i = r.cmp(n), i < 0 ? n : r.cmp(e) > 0 ? e : new t(r)
                }, k.comparedTo = k.cmp = function(n) {
                    var e, i, r, t, s = this,
                        o = s.d,
                        u = (n = new s.constructor(n)).d,
                        c = s.s,
                        f = n.s;
                    if (!o || !u) return c && f ? c !== f ? c : o === u ? 0 : !o ^ c < 0 ? 1 : -1 : NaN;
                    if (!o[0] || !u[0]) return o[0] ? c : u[0] ? -f : 0;
                    if (c !== f) return c;
                    if (s.e !== n.e) return s.e > n.e ^ c < 0 ? 1 : -1;
                    for (r = o.length, t = u.length, e = 0, i = r < t ? r : t; e < i; ++e)
                        if (o[e] !== u[e]) return o[e] > u[e] ^ c < 0 ? 1 : -1;
                    return r === t ? 0 : r > t ^ c < 0 ? 1 : -1
                }, k.cosine = k.cos = function() {
                    var n, e, i = this,
                        r = i.constructor;
                    return i.d ? i.d[0] ? (n = r.precision, e = r.rounding, r.precision = n + Math.max(i.e, i.sd()) + F, r.rounding = 1, i = S(r, rn(r, i)), r.precision = n, r.rounding = e, U(2 == u || 3 == u ? i.neg() : i, n, e, !0)) : new r(1) : new r(NaN)
                }, k.cubeRoot = k.cbrt = function() {
                    var n, e, i, r, t, s, o, u, c, f, a = this,
                        h = a.constructor;
                    if (!a.isFinite() || a.isZero()) return new h(a);
                    for (p = !1, s = a.s * E(a.s * a, 1 / 3), s && Math.abs(s) != 1 / 0 ? r = new h(s.toString()) : (i = P(a.d), n = a.e, (s = (n - i.length + 1) % 3) && (i += 1 == s || -2 == s ? "0" : "00"), s = E(i, 1 / 3), n = b((n + 1) / 3) - (n % 3 == (n < 0 ? -1 : 2)), s == 1 / 0 ? i = "5e" + n : (i = s.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + n), r = new h(i), r.s = a.s), o = (n = h.precision) + 3;;)
                        if (u = r, c = u.times(u).times(u), f = c.plus(a), r = L(f.plus(a).times(u), f.plus(c), o + 2, 1), P(u.d).slice(0, o) === (i = P(r.d)).slice(0, o)) {
                            if (i = i.slice(o - 3, o + 1), "9999" != i && (t || "4999" != i)) {
                                +i && (+i.slice(1) || "5" != i.charAt(0)) || (U(r, n + 1, 1), e = !r.times(r).times(r).eq(a));
                                break
                            }
                            if (!t && (U(u, n + 1, 0), u.times(u).times(u).eq(a))) {
                                r = u;
                                break
                            }
                            o += 4, t = 1
                        }
                    return p = !0, U(r, n, h.rounding, e)
                }, k.decimalPlaces = k.dp = function() {
                    var n, e = this.d,
                        i = NaN;
                    if (e) {
                        if (n = e.length - 1, i = (n - b(this.e / F)) * F, n = e[n], n)
                            for (; n % 10 == 0; n /= 10) i--;
                        i < 0 && (i = 0)
                    }
                    return i
                }, k.dividedBy = k.div = function(n) {
                    return L(this, new this.constructor(n))
                }, k.dividedToIntegerBy = k.divToInt = function(n) {
                    var e = this,
                        i = e.constructor;
                    return U(L(e, new i(n), 0, 1, 1), i.precision, i.rounding)
                }, k.equals = k.eq = function(n) {
                    return 0 === this.cmp(n)
                }, k.floor = function() {
                    return U(new this.constructor(this), this.e + 1, 3)
                }, k.greaterThan = k.gt = function(n) {
                    return this.cmp(n) > 0
                }, k.greaterThanOrEqualTo = k.gte = function(n) {
                    var e = this.cmp(n);
                    return 1 == e || 0 === e
                }, k.hyperbolicCosine = k.cosh = function() {
                    var n, e, i, r, t, s = this,
                        o = s.constructor,
                        u = new o(1);
                    if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
                    if (s.isZero()) return u;
                    i = o.precision, r = o.rounding, o.precision = i + Math.max(s.e, s.sd()) + 4, o.rounding = 1, t = s.d.length, t < 32 ? (n = Math.ceil(t / 3), e = (1 / en(4, n)).toString()) : (n = 16, e = "2.3283064365386962890625e-10"), s = nn(o, 1, s.times(e), new o(1), !0);
                    for (var c, f = n, a = new o(8); f--;) c = s.times(s), s = u.minus(c.times(a.minus(c.times(a))));
                    return U(s, o.precision = i, o.rounding = r, !0)
                }, k.hyperbolicSine = k.sinh = function() {
                    var n, e, i, r, t = this,
                        s = t.constructor;
                    if (!t.isFinite() || t.isZero()) return new s(t);
                    if (e = s.precision, i = s.rounding, s.precision = e + Math.max(t.e, t.sd()) + 4, s.rounding = 1, r = t.d.length, r < 3) t = nn(s, 2, t, t, !0);
                    else {
                        n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : 0 | n, t = t.times(1 / en(5, n)), t = nn(s, 2, t, t, !0);
                        for (var o, u = new s(5), c = new s(16), f = new s(20); n--;) o = t.times(t), t = t.times(u.plus(o.times(c.times(o).plus(f))))
                    }
                    return s.precision = e, s.rounding = i, U(t, e, i, !0)
                }, k.hyperbolicTangent = k.tanh = function() {
                    var n, e, i = this,
                        r = i.constructor;
                    return i.isFinite() ? i.isZero() ? new r(i) : (n = r.precision, e = r.rounding, r.precision = n + 7, r.rounding = 1, L(i.sinh(), i.cosh(), r.precision = n, r.rounding = e)) : new r(i.s)
                }, k.inverseCosine = k.acos = function() {
                    var n, e = this,
                        i = e.constructor,
                        r = e.abs().cmp(1),
                        t = i.precision,
                        s = i.rounding;
                    return -1 !== r ? 0 === r ? e.isNeg() ? B(i, t, s) : new i(0) : new i(NaN) : e.isZero() ? B(i, t + 4, s).times(.5) : (i.precision = t + 6, i.rounding = 1, e = e.asin(), n = B(i, t + 4, s).times(.5), i.precision = t, i.rounding = s, n.minus(e))
                }, k.inverseHyperbolicCosine = k.acosh = function() {
                    var n, e, i = this,
                        r = i.constructor;
                    return i.lte(1) ? new r(i.eq(1) ? 0 : NaN) : i.isFinite() ? (n = r.precision, e = r.rounding, r.precision = n + Math.max(Math.abs(i.e), i.sd()) + 4, r.rounding = 1, p = !1, i = i.times(i).minus(1).sqrt().plus(i), p = !0, r.precision = n, r.rounding = e, i.ln()) : new r(i)
                }, k.inverseHyperbolicSine = k.asinh = function() {
                    var n, e, i = this,
                        r = i.constructor;
                    return !i.isFinite() || i.isZero() ? new r(i) : (n = r.precision, e = r.rounding, r.precision = n + 2 * Math.max(Math.abs(i.e), i.sd()) + 6, r.rounding = 1, p = !1, i = i.times(i).plus(1).sqrt().plus(i), p = !0, r.precision = n, r.rounding = e, i.ln())
                }, k.inverseHyperbolicTangent = k.atanh = function() {
                    var n, e, i, r, t = this,
                        s = t.constructor;
                    return t.isFinite() ? t.e >= 0 ? new s(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (n = s.precision, e = s.rounding, r = t.sd(), Math.max(r, n) < 2 * -t.e - 1 ? U(new s(t), n, e, !0) : (s.precision = i = r - t.e, t = L(t.plus(1), new s(1).minus(t), i + n, 1), s.precision = n + 4, s.rounding = 1, t = t.ln(), s.precision = n, s.rounding = e, t.times(.5))) : new s(NaN)
                }, k.inverseSine = k.asin = function() {
                    var n, e, i, r, t = this,
                        s = t.constructor;
                    return t.isZero() ? new s(t) : (e = t.abs().cmp(1), i = s.precision, r = s.rounding, -1 !== e ? 0 === e ? (n = B(s, i + 4, r).times(.5), n.s = t.s, n) : new s(NaN) : (s.precision = i + 6, s.rounding = 1, t = t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan(), s.precision = i, s.rounding = r, t.times(2)))
                }, k.inverseTangent = k.atan = function() {
                    var n, e, i, r, t, s, o, u, c, f = this,
                        a = f.constructor,
                        h = a.precision,
                        l = a.rounding;
                    if (f.isFinite()) {
                        if (f.isZero()) return new a(f);
                        if (f.abs().eq(1) && h + 4 <= D) return o = B(a, h + 4, l).times(.25), o.s = f.s, o
                    } else {
                        if (!f.s) return new a(NaN);
                        if (h + 4 <= D) return o = B(a, h + 4, l).times(.5), o.s = f.s, o
                    }
                    for (a.precision = u = h + 10, a.rounding = 1, i = Math.min(28, u / F + 2 | 0), n = i; n; --n) f = f.div(f.times(f).plus(1).sqrt().plus(1));
                    for (p = !1, e = Math.ceil(u / F), r = 1, c = f.times(f), o = new a(f), t = f; - 1 !== n;)
                        if (t = t.times(c), s = o.minus(t.div(r += 2)), t = t.times(c), o = s.plus(t.div(r += 2)), void 0 !== o.d[e])
                            for (n = e; o.d[n] === s.d[n] && n--;);
                    return i && (o = o.times(2 << i - 1)), p = !0, U(o, a.precision = h, a.rounding = l, !0)
                }, k.isFinite = function() {
                    return !!this.d
                }, k.isInteger = k.isInt = function() {
                    return !!this.d && b(this.e / F) > this.d.length - 2
                }, k.isNaN = function() {
                    return !this.s
                }, k.isNegative = k.isNeg = function() {
                    return this.s < 0
                }, k.isPositive = k.isPos = function() {
                    return this.s > 0
                }, k.isZero = function() {
                    return !!this.d && 0 === this.d[0]
                }, k.lessThan = k.lt = function(n) {
                    return this.cmp(n) < 0
                }, k.lessThanOrEqualTo = k.lte = function(n) {
                    return this.cmp(n) < 1
                }, k.logarithm = k.log = function(n) {
                    var e, i, r, t, s, o, u, c, f = this,
                        a = f.constructor,
                        h = a.precision,
                        l = a.rounding,
                        d = 5;
                    if (null == n) n = new a(10), e = !0;
                    else {
                        if (n = new a(n), i = n.d, n.s < 0 || !i || !i[0] || n.eq(1)) return new a(NaN);
                        e = n.eq(10)
                    }
                    if (i = f.d, f.s < 0 || !i || !i[0] || f.eq(1)) return new a(i && !i[0] ? -1 / 0 : 1 != f.s ? NaN : i ? 0 : 1 / 0);
                    if (e)
                        if (i.length > 1) s = !0;
                        else {
                            for (t = i[0]; t % 10 === 0;) t /= 10;
                            s = 1 !== t
                        }
                    if (p = !1, u = h + d, o = z(f, u), r = e ? H(a, u + 10) : z(n, u), c = L(o, r, u, 1), T(c.d, t = h, l))
                        do {
                            if (u += 10, o = z(f, u), r = e ? H(a, u + 10) : z(n, u), c = L(o, r, u, 1), !s) {
                                +P(c.d).slice(t + 1, t + 15) + 1 == 1e14 && (c = U(c, h + 1, 0));
                                break
                            }
                        } while (T(c.d, t += 10, l));
                    return p = !0, U(c, h, l)
                }, k.minus = k.sub = function(n) {
                    var e, i, r, t, s, o, u, c, f, a, h, l, d = this,
                        g = d.constructor;
                    if (n = new g(n), !d.d || !n.d) return d.s && n.s ? d.d ? n.s = -n.s : n = new g(n.d || d.s !== n.s ? d : NaN) : n = new g(NaN), n;
                    if (d.s != n.s) return n.s = -n.s, d.plus(n);
                    if (f = d.d, l = n.d, u = g.precision, c = g.rounding, !f[0] || !l[0]) {
                        if (l[0]) n.s = -n.s;
                        else {
                            if (!f[0]) return new g(3 === c ? -0 : 0);
                            n = new g(d)
                        }
                        return p ? U(n, u, c) : n
                    }
                    if (i = b(n.e / F), a = b(d.e / F), f = f.slice(), s = a - i, s) {
                        for (h = s < 0, h ? (e = f, s = -s, o = l.length) : (e = l, i = a, o = f.length), r = Math.max(Math.ceil(u / F), o) + 2, s > r && (s = r, e.length = 1), e.reverse(), r = s; r--;) e.push(0);
                        e.reverse()
                    } else {
                        for (r = f.length, o = l.length, h = r < o, h && (o = r), r = 0; r < o; r++)
                            if (f[r] != l[r]) {
                                h = f[r] < l[r];
                                break
                            }
                        s = 0
                    }
                    for (h && (e = f, f = l, l = e, n.s = -n.s), o = f.length, r = l.length - o; r > 0; --r) f[o++] = 0;
                    for (r = l.length; r > s;) {
                        if (f[--r] < l[r]) {
                            for (t = r; t && 0 === f[--t];) f[t] = O - 1;
                            --f[t], f[r] += O
                        }
                        f[r] -= l[r]
                    }
                    for (; 0 === f[--o];) f.pop();
                    for (; 0 === f[0]; f.shift()) --i;
                    return f[0] ? (n.d = f, n.e = I(f, i), p ? U(n, u, c) : n) : new g(3 === c ? -0 : 0)
                }, k.modulo = k.mod = function(n) {
                    var e, i = this,
                        r = i.constructor;
                    return n = new r(n), !i.d || !n.s || n.d && !n.d[0] ? new r(NaN) : !n.d || i.d && !i.d[0] ? U(new r(i), r.precision, r.rounding) : (p = !1, 9 == r.modulo ? (e = L(i, n.abs(), 0, 3, 1), e.s *= n.s) : e = L(i, n, 0, r.modulo, 1), e = e.times(n), p = !0, i.minus(e))
                }, k.naturalExponential = k.exp = function() {
                    return J(this)
                }, k.naturalLogarithm = k.ln = function() {
                    return z(this)
                }, k.negated = k.neg = function() {
                    var n = new this.constructor(this);
                    return n.s = -n.s, U(n)
                }, k.plus = k.add = function(n) {
                    var e, i, r, t, s, o, u, c, f, a, h = this,
                        l = h.constructor;
                    if (n = new l(n), !h.d || !n.d) return h.s && n.s ? h.d || (n = new l(n.d || h.s === n.s ? h : NaN)) : n = new l(NaN), n;
                    if (h.s != n.s) return n.s = -n.s, h.minus(n);
                    if (f = h.d, a = n.d, u = l.precision, c = l.rounding, !f[0] || !a[0]) return a[0] || (n = new l(h)), p ? U(n, u, c) : n;
                    if (s = b(h.e / F), r = b(n.e / F), f = f.slice(), t = s - r, t) {
                        for (t < 0 ? (i = f, t = -t, o = a.length) : (i = a, r = s, o = f.length), s = Math.ceil(u / F), o = s > o ? s + 1 : o + 1, t > o && (t = o, i.length = 1), i.reverse(); t--;) i.push(0);
                        i.reverse()
                    }
                    for (o = f.length, t = a.length, o - t < 0 && (t = o, i = a, a = f, f = i), e = 0; t;) e = (f[--t] = f[t] + a[t] + e) / O | 0, f[t] %= O;
                    for (e && (f.unshift(e), ++r), o = f.length; 0 == f[--o];) f.pop();
                    return n.d = f, n.e = I(f, r), p ? U(n, u, c) : n
                }, k.precision = k.sd = function(n) {
                    var e, i = this;
                    if (void 0 !== n && n !== !!n && 1 !== n && 0 !== n) throw Error(w + n);
                    return i.d ? (e = V(i.d), n && i.e + 1 > e && (e = i.e + 1)) : e = NaN, e
                }, k.round = function() {
                    var n = this,
                        e = n.constructor;
                    return U(new e(n), n.e + 1, e.rounding)
                }, k.sine = k.sin = function() {
                    var n, e, i = this,
                        r = i.constructor;
                    return i.isFinite() ? i.isZero() ? new r(i) : (n = r.precision, e = r.rounding, r.precision = n + Math.max(i.e, i.sd()) + F, r.rounding = 1, i = Y(r, rn(r, i)), r.precision = n, r.rounding = e, U(u > 2 ? i.neg() : i, n, e, !0)) : new r(NaN)
                }, k.squareRoot = k.sqrt = function() {
                    var n, e, i, r, t, s, o = this,
                        u = o.d,
                        c = o.e,
                        f = o.s,
                        a = o.constructor;
                    if (1 !== f || !u || !u[0]) return new a(!f || f < 0 && (!u || u[0]) ? NaN : u ? o : 1 / 0);
                    for (p = !1, f = Math.sqrt(+o), 0 == f || f == 1 / 0 ? (e = P(u), (e.length + c) % 2 == 0 && (e += "0"), f = Math.sqrt(e), c = b((c + 1) / 2) - (c < 0 || c % 2), f == 1 / 0 ? e = "5e" + c : (e = f.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + c), r = new a(e)) : r = new a(f.toString()), i = (c = a.precision) + 3;;)
                        if (s = r, r = s.plus(L(o, s, i + 2, 1)).times(.5), P(s.d).slice(0, i) === (e = P(r.d)).slice(0, i)) {
                            if (e = e.slice(i - 3, i + 1), "9999" != e && (t || "4999" != e)) {
                                +e && (+e.slice(1) || "5" != e.charAt(0)) || (U(r, c + 1, 1), n = !r.times(r).eq(o));
                                break
                            }
                            if (!t && (U(s, c + 1, 0), s.times(s).eq(o))) {
                                r = s;
                                break
                            }
                            i += 4, t = 1
                        }
                    return p = !0, U(r, c, a.rounding, n)
                }, k.tangent = k.tan = function() {
                    var n, e, i = this,
                        r = i.constructor;
                    return i.isFinite() ? i.isZero() ? new r(i) : (n = r.precision, e = r.rounding, r.precision = n + 10, r.rounding = 1, i = i.sin(), i.s = 1, i = L(i, new r(1).minus(i.times(i)).sqrt(), n + 10, 0), r.precision = n, r.rounding = e, U(2 == u || 4 == u ? i.neg() : i, n, e, !0)) : new r(NaN)
                }, k.times = k.mul = function(n) {
                    var e, i, r, t, s, o, u, c, f, a = this,
                        h = a.constructor,
                        l = a.d,
                        d = (n = new h(n)).d;
                    if (n.s *= a.s, !l || !l[0] || !d || !d[0]) return new h(!n.s || l && !l[0] && !d || d && !d[0] && !l ? NaN : l && d ? 0 * n.s : n.s / 0);
                    for (i = b(a.e / F) + b(n.e / F), c = l.length, f = d.length, c < f && (s = l, l = d, d = s, o = c, c = f, f = o), s = [], o = c + f, r = o; r--;) s.push(0);
                    for (r = f; --r >= 0;) {
                        for (e = 0, t = c + r; t > r;) u = s[t] + d[r] * l[t - r - 1] + e, s[t--] = u % O | 0, e = u / O | 0;
                        s[t] = (s[t] + e) % O | 0
                    }
                    for (; !s[--o];) s.pop();
                    return e ? ++i : s.shift(), n.d = s, n.e = I(s, i), p ? U(n, h.precision, h.rounding) : n
                }, k.toBinary = function(n, e) {
                    return tn(this, 2, n, e)
                }, k.toDecimalPlaces = k.toDP = function(n, e) {
                    var i = this,
                        r = i.constructor;
                    return i = new r(i), void 0 === n ? i : (R(n, 0, f), void 0 === e ? e = r.rounding : R(e, 0, 8), U(i, n + i.e + 1, e))
                }, k.toExponential = function(n, e) {
                    var i, r = this,
                        t = r.constructor;
                    return void 0 === n ? i = C(r, !0) : (R(n, 0, f), void 0 === e ? e = t.rounding : R(e, 0, 8), r = U(new t(r), n + 1, e), i = C(r, !0, n + 1)), r.isNeg() && !r.isZero() ? "-" + i : i
                }, k.toFixed = function(n, e) {
                    var i, r, t = this,
                        s = t.constructor;
                    return void 0 === n ? i = C(t) : (R(n, 0, f), void 0 === e ? e = s.rounding : R(e, 0, 8), r = U(new s(t), n + t.e + 1, e), i = C(r, !1, n + r.e + 1)), t.isNeg() && !t.isZero() ? "-" + i : i
                }, k.toFraction = function(n) {
                    var e, i, r, t, s, o, u, c, f, a, h, l, d = this,
                        g = d.d,
                        m = d.constructor;
                    if (!g) return new m(d);
                    if (f = i = new m(1), r = c = new m(0), e = new m(r), s = e.e = V(g) - d.e - 1, o = s % F, e.d[0] = E(10, o < 0 ? F + o : o), null == n) n = s > 0 ? e : f;
                    else {
                        if (u = new m(n), !u.isInt() || u.lt(f)) throw Error(w + u);
                        n = u.gt(e) ? s > 0 ? e : f : u
                    }
                    for (p = !1, u = new m(P(g)), a = m.precision, m.precision = s = g.length * F * 2;;) {
                        if (h = L(u, e, 0, 1, 1), t = i.plus(h.times(r)), 1 == t.cmp(n)) break;
                        i = r, r = t, t = f, f = c.plus(h.times(t)), c = t, t = e, e = u.minus(h.times(t)), u = t
                    }
                    return t = L(n.minus(i), r, 0, 1, 1), c = c.plus(t.times(f)), i = i.plus(t.times(r)), c.s = f.s = d.s, l = L(f, r, s, 1).minus(d).abs().cmp(L(c, i, s, 1).minus(d).abs()) < 1 ? [f, r] : [c, i], m.precision = a, p = !0, l
                }, k.toHexadecimal = k.toHex = function(n, e) {
                    return tn(this, 16, n, e)
                }, k.toNearest = function(n, e) {
                    var i = this,
                        r = i.constructor;
                    if (i = new r(i), null == n) {
                        if (!i.d) return i;
                        n = new r(1), e = r.rounding
                    } else {
                        if (n = new r(n), void 0 === e ? e = r.rounding : R(e, 0, 8), !i.d) return n.s ? i : n;
                        if (!n.d) return n.s && (n.s = i.s), n
                    }
                    return n.d[0] ? (p = !1, i = L(i, n, 0, e, 1).times(n), p = !0, U(i)) : (n.s = i.s, i = n), i
                }, k.toNumber = function() {
                    return +this
                }, k.toOctal = function(n, e) {
                    return tn(this, 8, n, e)
                }, k.toPower = k.pow = function(n) {
                    var e, i, r, t, s, o, u = this,
                        c = u.constructor,
                        f = +(n = new c(n));
                    if (!u.d || !n.d || !u.d[0] || !n.d[0]) return new c(E(+u, f));
                    if (u = new c(u), u.eq(1)) return u;
                    if (r = c.precision, s = c.rounding, n.eq(1)) return U(u, r, s);
                    if (e = b(n.e / F), e >= n.d.length - 1 && (i = f < 0 ? -f : f) <= A) return t = W(c, u, i, r), n.s < 0 ? new c(1).div(t) : U(t, r, s);
                    if (o = u.s, o < 0) {
                        if (e < n.d.length - 1) return new c(NaN);
                        if (0 == (1 & n.d[e]) && (o = 1), 0 == u.e && 1 == u.d[0] && 1 == u.d.length) return u.s = o, u
                    }
                    return i = E(+u, f), e = 0 != i && isFinite(i) ? new c(i + "").e : b(f * (Math.log("0." + P(u.d)) / Math.LN10 + u.e + 1)), e > c.maxE + 1 || e < c.minE - 1 ? new c(e > 0 ? o / 0 : 0) : (p = !1, c.rounding = u.s = 1, i = Math.min(12, (e + "").length), t = J(n.times(z(u, r + i)), r), t.d && (t = U(t, r + 5, 1), T(t.d, r, s) && (e = r + 10, t = U(J(n.times(z(u, e + i)), e), e + 5, 1), +P(t.d).slice(r + 1, r + 15) + 1 == 1e14 && (t = U(t, r + 1, 0)))), t.s = o, p = !0, c.rounding = s, U(t, r, s))
                }, k.toPrecision = function(n, e) {
                    var i, r = this,
                        t = r.constructor;
                    return void 0 === n ? i = C(r, r.e <= t.toExpNeg || r.e >= t.toExpPos) : (R(n, 1, f), void 0 === e ? e = t.rounding : R(e, 0, 8), r = U(new t(r), n, e), i = C(r, n <= r.e || r.e <= t.toExpNeg, n)), r.isNeg() && !r.isZero() ? "-" + i : i
                }, k.toSignificantDigits = k.toSD = function(n, e) {
                    var i = this,
                        r = i.constructor;
                    return void 0 === n ? (n = r.precision, e = r.rounding) : (R(n, 1, f), void 0 === e ? e = r.rounding : R(e, 0, 8)), U(new r(i), n, e)
                }, k.toString = function() {
                    var n = this,
                        e = n.constructor,
                        i = C(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
                    return n.isNeg() && !n.isZero() ? "-" + i : i
                }, k.truncated = k.trunc = function() {
                    return U(new this.constructor(this), this.e + 1, 1)
                }, k.valueOf = k.toJSON = function() {
                    var n = this,
                        e = n.constructor,
                        i = C(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
                    return n.isNeg() ? "-" + i : i
                };
                var L = function() {
                    function n(n, e, i) {
                        var r, t = 0,
                            s = n.length;
                        for (n = n.slice(); s--;) r = n[s] * e + t, n[s] = r % i | 0, t = r / i | 0;
                        return t && n.unshift(t), n
                    }

                    function e(n, e, i, r) {
                        var t, s;
                        if (i != r) s = i > r ? 1 : -1;
                        else
                            for (t = s = 0; t < i; t++)
                                if (n[t] != e[t]) {
                                    s = n[t] > e[t] ? 1 : -1;
                                    break
                                } return s
                    }

                    function i(n, e, i, r) {
                        for (var t = 0; i--;) n[i] -= t, t = n[i] < e[i] ? 1 : 0, n[i] = t * r + n[i] - e[i];
                        for (; !n[0] && n.length > 1;) n.shift()
                    }
                    return function(r, t, s, u, c, f) {
                        var a, h, l, d, p, g, w, m, v, N, E, x, y, M, q, A, Z, D, k, P, R = r.constructor,
                            T = r.s == t.s ? 1 : -1,
                            _ = r.d,
                            S = t.d;
                        if (!_ || !_[0] || !S || !S[0]) return new R(r.s && t.s && (_ ? !S || _[0] != S[0] : S) ? _ && 0 == _[0] || !S ? 0 * T : T / 0 : NaN);
                        for (f ? (p = 1, h = r.e - t.e) : (f = O, p = F, h = b(r.e / p) - b(t.e / p)), k = S.length, Z = _.length, v = new R(T), N = v.d = [], l = 0; S[l] == (_[l] || 0); l++);
                        if (S[l] > (_[l] || 0) && h--, null == s ? (M = s = R.precision, u = R.rounding) : M = c ? s + (r.e - t.e) + 1 : s, M < 0) N.push(1), g = !0;
                        else {
                            if (M = M / p + 2 | 0, l = 0, 1 == k) {
                                for (d = 0, S = S[0], M++;
                                    (l < Z || d) && M--; l++) q = d * f + (_[l] || 0), N[l] = q / S | 0, d = q % S | 0;
                                g = d || l < Z
                            } else {
                                for (d = f / (S[0] + 1) | 0, d > 1 && (S = n(S, d, f), _ = n(_, d, f), k = S.length, Z = _.length), A = k, E = _.slice(0, k), x = E.length; x < k;) E[x++] = 0;
                                P = S.slice(), P.unshift(0), D = S[0], S[1] >= f / 2 && ++D;
                                do {
                                    d = 0, a = e(S, E, k, x), a < 0 ? (y = E[0], k != x && (y = y * f + (E[1] || 0)), d = y / D | 0, d > 1 ? (d >= f && (d = f - 1), w = n(S, d, f), m = w.length, x = E.length, a = e(w, E, m, x), 1 == a && (d--, i(w, k < m ? P : S, m, f))) : (0 == d && (a = d = 1), w = S.slice()), m = w.length, m < x && w.unshift(0), i(E, w, x, f), -1 == a && (x = E.length, a = e(S, E, k, x), a < 1 && (d++, i(E, k < x ? P : S, x, f))), x = E.length) : 0 === a && (d++, E = [0]), N[l++] = d, a && E[0] ? E[x++] = _[A] || 0 : (E = [_[A]], x = 1)
                                } while ((A++ < Z || void 0 !== E[0]) && M--);
                                g = void 0 !== E[0]
                            }
                            N[0] || N.shift()
                        }
                        if (1 == p) v.e = h, o = g;
                        else {
                            for (l = 1, d = N[0]; d >= 10; d /= 10) l++;
                            v.e = l + h * p - 1, U(v, c ? s + v.e + 1 : s, u, g)
                        }
                        return v
                    }
                }();

                function U(n, e, i, r) {
                    var t, s, o, u, c, f, a, h, l, d = n.constructor;
                    n: if (null != e) {
                        if (h = n.d, !h) return n;
                        for (t = 1, u = h[0]; u >= 10; u /= 10) t++;
                        if (s = e - t, s < 0) s += F, o = e, a = h[l = 0], c = a / E(10, t - o - 1) % 10 | 0;
                        else if (l = Math.ceil((s + 1) / F), u = h.length, l >= u) {
                            if (!r) break n;
                            for (; u++ <= l;) h.push(0);
                            a = c = 0, t = 1, s %= F, o = s - F + 1
                        } else {
                            for (a = u = h[l], t = 1; u >= 10; u /= 10) t++;
                            s %= F, o = s - F + t, c = o < 0 ? 0 : a / E(10, t - o - 1) % 10 | 0
                        }
                        if (r = r || e < 0 || void 0 !== h[l + 1] || (o < 0 ? a : a % E(10, t - o - 1)), f = i < 4 ? (c || r) && (0 == i || i == (n.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == i || r || 6 == i && (s > 0 ? o > 0 ? a / E(10, t - o) : 0 : h[l - 1]) % 10 & 1 || i == (n.s < 0 ? 8 : 7)), e < 1 || !h[0]) return h.length = 0, f ? (e -= n.e + 1, h[0] = E(10, (F - e % F) % F), n.e = -e || 0) : h[0] = n.e = 0, n;
                        if (0 == s ? (h.length = l, u = 1, l--) : (h.length = l + 1, u = E(10, F - s), h[l] = o > 0 ? (a / E(10, t - o) % E(10, o) | 0) * u : 0), f)
                            for (;;) {
                                if (0 == l) {
                                    for (s = 1, o = h[0]; o >= 10; o /= 10) s++;
                                    for (o = h[0] += u, u = 1; o >= 10; o /= 10) u++;
                                    s != u && (n.e++, h[0] == O && (h[0] = 1));
                                    break
                                }
                                if (h[l] += u, h[l] != O) break;
                                h[l--] = 0, u = 1
                            }
                        for (s = h.length; 0 === h[--s];) h.pop()
                    }
                    return p && (n.e > d.maxE ? (n.d = null, n.e = NaN) : n.e < d.minE && (n.e = 0, n.d = [0])), n
                }

                function C(n, e, i) {
                    if (!n.isFinite()) return G(n);
                    var r, t = n.e,
                        s = P(n.d),
                        o = s.length;
                    return e ? (i && (r = i - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + $(r) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (n.e < 0 ? "e" : "e+") + n.e) : t < 0 ? (s = "0." + $(-t - 1) + s, i && (r = i - o) > 0 && (s += $(r))) : t >= o ? (s += $(t + 1 - o), i && (r = i - t - 1) > 0 && (s = s + "." + $(r))) : ((r = t + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)), i && (r = i - o) > 0 && (t + 1 === o && (s += "."), s += $(r))), s
                }

                function I(n, e) {
                    var i = n[0];
                    for (e *= F; i >= 10; i /= 10) e++;
                    return e
                }

                function H(n, e, i) {
                    if (e > Z) throw p = !0, i && (n.precision = i), Error(m);
                    return U(new n(h), e, 1, !0)
                }

                function B(n, e, i) {
                    if (e > D) throw Error(m);
                    return U(new n(l), e, i, !0)
                }

                function V(n) {
                    var e = n.length - 1,
                        i = e * F + 1;
                    if (e = n[e], e) {
                        for (; e % 10 == 0; e /= 10) i--;
                        for (e = n[0]; e >= 10; e /= 10) i++
                    }
                    return i
                }

                function $(n) {
                    for (var e = ""; n--;) e += "0";
                    return e
                }

                function W(n, e, i, r) {
                    var t, s = new n(1),
                        o = Math.ceil(r / F + 4);
                    for (p = !1;;) {
                        if (i % 2 && (s = s.times(e), sn(s.d, o) && (t = !0)), i = b(i / 2), 0 === i) {
                            i = s.d.length - 1, t && 0 === s.d[i] && ++s.d[i];
                            break
                        }
                        e = e.times(e), sn(e.d, o)
                    }
                    return p = !0, s
                }

                function j(n) {
                    return 1 & n.d[n.d.length - 1]
                }

                function X(n, e, i) {
                    for (var r, t = new n(e[0]), s = 0; ++s < e.length;) {
                        if (r = new n(e[s]), !r.s) {
                            t = r;
                            break
                        }
                        t[i](r) && (t = r)
                    }
                    return t
                }

                function J(n, e) {
                    var i, r, t, s, o, u, c, f = 0,
                        a = 0,
                        h = 0,
                        l = n.constructor,
                        d = l.rounding,
                        g = l.precision;
                    if (!n.d || !n.d[0] || n.e > 17) return new l(n.d ? n.d[0] ? n.s < 0 ? 0 : 1 / 0 : 1 : n.s ? n.s < 0 ? 0 : n : NaN);
                    null == e ? (p = !1, c = g) : c = e, u = new l(.03125);
                    while (n.e > -2) n = n.times(u), h += 5;
                    for (r = Math.log(E(2, h)) / Math.LN10 * 2 + 5 | 0, c += r, i = s = o = new l(1), l.precision = c;;) {
                        if (s = U(s.times(n), c, 1), i = i.times(++a), u = o.plus(L(s, i, c, 1)), P(u.d).slice(0, c) === P(o.d).slice(0, c)) {
                            t = h;
                            while (t--) o = U(o.times(o), c, 1);
                            if (null != e) return l.precision = g, o;
                            if (!(f < 3 && T(o.d, c - r, d, f))) return U(o, l.precision = g, d, p = !0);
                            l.precision = c += 10, i = s = u = new l(1), a = 0, f++
                        }
                        o = u
                    }
                }

                function z(n, e) {
                    var i, r, t, s, o, u, c, f, a, h, l, d = 1,
                        g = 10,
                        w = n,
                        m = w.d,
                        v = w.constructor,
                        N = v.rounding,
                        b = v.precision;
                    if (w.s < 0 || !m || !m[0] || !w.e && 1 == m[0] && 1 == m.length) return new v(m && !m[0] ? -1 / 0 : 1 != w.s ? NaN : m ? 0 : w);
                    if (null == e ? (p = !1, a = b) : a = e, v.precision = a += g, i = P(m), r = i.charAt(0), !(Math.abs(s = w.e) < 15e14)) return f = H(v, a + 2, b).times(s + ""), w = z(new v(r + "." + i.slice(1)), a - g).plus(f), v.precision = b, null == e ? U(w, b, N, p = !0) : w;
                    while (r < 7 && 1 != r || 1 == r && i.charAt(1) > 3) w = w.times(n), i = P(w.d), r = i.charAt(0), d++;
                    for (s = w.e, r > 1 ? (w = new v("0." + i), s++) : w = new v(r + "." + i.slice(1)), h = w, c = o = w = L(w.minus(1), w.plus(1), a, 1), l = U(w.times(w), a, 1), t = 3;;) {
                        if (o = U(o.times(l), a, 1), f = c.plus(L(o, new v(t), a, 1)), P(f.d).slice(0, a) === P(c.d).slice(0, a)) {
                            if (c = c.times(2), 0 !== s && (c = c.plus(H(v, a + 2, b).times(s + ""))), c = L(c, new v(d), a, 1), null != e) return v.precision = b, c;
                            if (!T(c.d, a - g, N, u)) return U(c, v.precision = b, N, p = !0);
                            v.precision = a += g, f = o = w = L(h.minus(1), h.plus(1), a, 1), l = U(w.times(w), a, 1), t = u = 1
                        }
                        c = f, t += 2
                    }
                }

                function G(n) {
                    return String(n.s * n.s / 0)
                }

                function K(n, e) {
                    var i, r, t;
                    for ((i = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (i < 0 && (i = r), i += +e.slice(r + 1), e = e.substring(0, r)) : i < 0 && (i = e.length), r = 0; 48 === e.charCodeAt(r); r++);
                    for (t = e.length; 48 === e.charCodeAt(t - 1); --t);
                    if (e = e.slice(r, t), e) {
                        if (t -= r, n.e = i = i - r - 1, n.d = [], r = (i + 1) % F, i < 0 && (r += F), r < t) {
                            for (r && n.d.push(+e.slice(0, r)), t -= F; r < t;) n.d.push(+e.slice(r, r += F));
                            e = e.slice(r), r = F - e.length
                        } else r -= t;
                        for (; r--;) e += "0";
                        n.d.push(+e), p && (n.e > n.constructor.maxE ? (n.d = null, n.e = NaN) : n.e < n.constructor.minE && (n.e = 0, n.d = [0]))
                    } else n.e = 0, n.d = [0];
                    return n
                }

                function Q(n, e) {
                    var i, r, t, o, u, c, f, a, h;
                    if (e.indexOf("_") > -1) {
                        if (e = e.replace(/(\d)_(?=\d)/g, "$1"), q.test(e)) return K(n, e)
                    } else if ("Infinity" === e || "NaN" === e) return +e || (n.s = NaN), n.e = NaN, n.d = null, n;
                    if (y.test(e)) i = 16, e = e.toLowerCase();
                    else if (x.test(e)) i = 2;
                    else {
                        if (!M.test(e)) throw Error(w + e);
                        i = 8
                    }
                    for (o = e.search(/p/i), o > 0 ? (f = +e.slice(o + 1), e = e.substring(2, o)) : e = e.slice(2), o = e.indexOf("."), u = o >= 0, r = n.constructor, u && (e = e.replace(".", ""), c = e.length, o = c - o, t = W(r, new r(i), o, 2 * o)), a = _(e, i, O), h = a.length - 1, o = h; 0 === a[o]; --o) a.pop();
                    return o < 0 ? new r(0 * n.s) : (n.e = I(a, h), n.d = a, p = !1, u && (n = L(n, t, 4 * c)), f && (n = n.times(Math.abs(f) < 54 ? E(2, f) : s.pow(2, f))), p = !0, n)
                }

                function Y(n, e) {
                    var i, r = e.d.length;
                    if (r < 3) return e.isZero() ? e : nn(n, 2, e, e);
                    i = 1.4 * Math.sqrt(r), i = i > 16 ? 16 : 0 | i, e = e.times(1 / en(5, i)), e = nn(n, 2, e, e);
                    for (var t, s = new n(5), o = new n(16), u = new n(20); i--;) t = e.times(e), e = e.times(s.plus(t.times(o.times(t).minus(u))));
                    return e
                }

                function nn(n, e, i, r, t) {
                    var s, o, u, c, f = n.precision,
                        a = Math.ceil(f / F);
                    for (p = !1, c = i.times(i), u = new n(r);;) {
                        if (o = L(u.times(c), new n(e++ * e++), f, 1), u = t ? r.plus(o) : r.minus(o), r = L(o.times(c), new n(e++ * e++), f, 1), o = u.plus(r), void 0 !== o.d[a]) {
                            for (s = a; o.d[s] === u.d[s] && s--;);
                            if (-1 == s) break
                        }
                        s = u, u = r, r = o, o = s
                    }
                    return p = !0, o.d.length = a + 1, o
                }

                function en(n, e) {
                    var i = n;
                    while (--e) i *= n;
                    return i
                }

                function rn(n, e) {
                    var i, r = e.s < 0,
                        t = B(n, n.precision, 1),
                        s = t.times(.5);
                    if (e = e.abs(), e.lte(s)) return u = r ? 4 : 1, e;
                    if (i = e.divToInt(t), i.isZero()) u = r ? 3 : 2;
                    else {
                        if (e = e.minus(i.times(t)), e.lte(s)) return u = j(i) ? r ? 2 : 3 : r ? 4 : 1, e;
                        u = j(i) ? r ? 1 : 4 : r ? 3 : 2
                    }
                    return e.minus(t).abs()
                }

                function tn(n, e, i, r) {
                    var t, s, u, c, h, l, d, p, g, w = n.constructor,
                        m = void 0 !== i;
                    if (m ? (R(i, 1, f), void 0 === r ? r = w.rounding : R(r, 0, 8)) : (i = w.precision, r = w.rounding), n.isFinite()) {
                        for (d = C(n), u = d.indexOf("."), m ? (t = 2, 16 == e ? i = 4 * i - 3 : 8 == e && (i = 3 * i - 2)) : t = e, u >= 0 && (d = d.replace(".", ""), g = new w(1), g.e = d.length - u, g.d = _(C(g), 10, t), g.e = g.d.length), p = _(d, 10, t), s = h = p.length; 0 == p[--h];) p.pop();
                        if (p[0]) {
                            if (u < 0 ? s-- : (n = new w(n), n.d = p, n.e = s, n = L(n, g, i, r, 0, t), p = n.d, s = n.e, l = o), u = p[i], c = t / 2, l = l || void 0 !== p[i + 1], l = r < 4 ? (void 0 !== u || l) && (0 === r || r === (n.s < 0 ? 3 : 2)) : u > c || u === c && (4 === r || l || 6 === r && 1 & p[i - 1] || r === (n.s < 0 ? 8 : 7)), p.length = i, l)
                                for (; ++p[--i] > t - 1;) p[i] = 0, i || (++s, p.unshift(1));
                            for (h = p.length; !p[h - 1]; --h);
                            for (u = 0, d = ""; u < h; u++) d += a.charAt(p[u]);
                            if (m) {
                                if (h > 1)
                                    if (16 == e || 8 == e) {
                                        for (u = 16 == e ? 4 : 3, --h; h % u; h++) d += "0";
                                        for (p = _(d, t, e), h = p.length; !p[h - 1]; --h);
                                        for (u = 1, d = "1."; u < h; u++) d += a.charAt(p[u])
                                    } else d = d.charAt(0) + "." + d.slice(1);
                                d = d + (s < 0 ? "p" : "p+") + s
                            } else if (s < 0) {
                                for (; ++s;) d = "0" + d;
                                d = "0." + d
                            } else if (++s > h)
                                for (s -= h; s--;) d += "0";
                            else s < h && (d = d.slice(0, s) + "." + d.slice(s))
                        } else d = m ? "0p+0" : "0";
                        d = (16 == e ? "0x" : 2 == e ? "0b" : 8 == e ? "0o" : "") + d
                    } else d = G(n);
                    return n.s < 0 ? "-" + d : d
                }

                function sn(n, e) {
                    if (n.length > e) return n.length = e, !0
                }

                function on(n) {
                    return new this(n).abs()
                }

                function un(n) {
                    return new this(n).acos()
                }

                function cn(n) {
                    return new this(n).acosh()
                }

                function fn(n, e) {
                    return new this(n).plus(e)
                }

                function an(n) {
                    return new this(n).asin()
                }

                function hn(n) {
                    return new this(n).asinh()
                }

                function ln(n) {
                    return new this(n).atan()
                }

                function dn(n) {
                    return new this(n).atanh()
                }

                function pn(n, e) {
                    n = new this(n), e = new this(e);
                    var i, r = this.precision,
                        t = this.rounding,
                        s = r + 4;
                    return n.s && e.s ? n.d || e.d ? !e.d || n.isZero() ? (i = e.s < 0 ? B(this, r, t) : new this(0), i.s = n.s) : !n.d || e.isZero() ? (i = B(this, s, 1).times(.5), i.s = n.s) : e.s < 0 ? (this.precision = s, this.rounding = 1, i = this.atan(L(n, e, s, 1)), e = B(this, s, 1), this.precision = r, this.rounding = t, i = n.s < 0 ? i.minus(e) : i.plus(e)) : i = this.atan(L(n, e, s, 1)) : (i = B(this, s, 1).times(e.s > 0 ? .25 : .75), i.s = n.s) : i = new this(NaN), i
                }

                function gn(n) {
                    return new this(n).cbrt()
                }

                function wn(n) {
                    return U(n = new this(n), n.e + 1, 2)
                }

                function mn(n, e, i) {
                    return new this(n).clamp(e, i)
                }

                function vn(n) {
                    if (!n || "object" !== typeof n) throw Error(g + "Object expected");
                    var e, i, r, t = !0 === n.defaults,
                        s = ["precision", 1, f, "rounding", 0, 8, "toExpNeg", -c, 0, "toExpPos", 0, c, "maxE", 0, c, "minE", -c, 0, "modulo", 0, 9];
                    for (e = 0; e < s.length; e += 3)
                        if (i = s[e], t && (this[i] = d[i]), void 0 !== (r = n[i])) {
                            if (!(b(r) === r && r >= s[e + 1] && r <= s[e + 2])) throw Error(w + i + ": " + r);
                            this[i] = r
                        }
                    if (i = "crypto", t && (this[i] = d[i]), void 0 !== (r = n[i])) {
                        if (!0 !== r && !1 !== r && 0 !== r && 1 !== r) throw Error(w + i + ": " + r);
                        if (r) {
                            if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(v);
                            this[i] = !0
                        } else this[i] = !1
                    }
                    return this
                }

                function Nn(n) {
                    return new this(n).cos()
                }

                function bn(n) {
                    return new this(n).cosh()
                }

                function En(n) {
                    var e, i, r;

                    function t(n) {
                        var e, i, r, s = this;
                        if (!(s instanceof t)) return new t(n);
                        if (s.constructor = t, On(n)) return s.s = n.s, void(p ? !n.d || n.e > t.maxE ? (s.e = NaN, s.d = null) : n.e < t.minE ? (s.e = 0, s.d = [0]) : (s.e = n.e, s.d = n.d.slice()) : (s.e = n.e, s.d = n.d ? n.d.slice() : n.d));
                        if (r = typeof n, "number" === r) {
                            if (0 === n) return s.s = 1 / n < 0 ? -1 : 1, s.e = 0, void(s.d = [0]);
                            if (n < 0 ? (n = -n, s.s = -1) : s.s = 1, n === ~~n && n < 1e7) {
                                for (e = 0, i = n; i >= 10; i /= 10) e++;
                                return void(p ? e > t.maxE ? (s.e = NaN, s.d = null) : e < t.minE ? (s.e = 0, s.d = [0]) : (s.e = e, s.d = [n]) : (s.e = e, s.d = [n]))
                            }
                            return 0 * n !== 0 ? (n || (s.s = NaN), s.e = NaN, void(s.d = null)) : K(s, n.toString())
                        }
                        if ("string" !== r) throw Error(w + n);
                        return 45 === (i = n.charCodeAt(0)) ? (n = n.slice(1), s.s = -1) : (43 === i && (n = n.slice(1)), s.s = 1), q.test(n) ? K(s, n) : Q(s, n)
                    }
                    if (t.prototype = k, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = vn, t.clone = En, t.isDecimal = On, t.abs = on, t.acos = un, t.acosh = cn, t.add = fn, t.asin = an, t.asinh = hn, t.atan = ln, t.atanh = dn, t.atan2 = pn, t.cbrt = gn, t.ceil = wn, t.clamp = mn, t.cos = Nn, t.cosh = bn, t.div = xn, t.exp = yn, t.floor = Mn, t.hypot = qn, t.ln = Fn, t.log = An, t.log10 = Dn, t.log2 = Zn, t.max = kn, t.min = Pn, t.mod = Rn, t.mul = Tn, t.pow = _n, t.random = Sn, t.round = Ln, t.sign = Un, t.sin = Cn, t.sinh = In, t.sqrt = Hn, t.sub = Bn, t.sum = Vn, t.tan = $n, t.tanh = Wn, t.trunc = jn, void 0 === n && (n = {}), n && !0 !== n.defaults)
                        for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], e = 0; e < r.length;) n.hasOwnProperty(i = r[e++]) || (n[i] = this[i]);
                    return t.config(n), t
                }

                function xn(n, e) {
                    return new this(n).div(e)
                }

                function yn(n) {
                    return new this(n).exp()
                }

                function Mn(n) {
                    return U(n = new this(n), n.e + 1, 3)
                }

                function qn() {
                    var n, e, i = new this(0);
                    for (p = !1, n = 0; n < arguments.length;)
                        if (e = new this(arguments[n++]), e.d) i.d && (i = i.plus(e.times(e)));
                        else {
                            if (e.s) return p = !0, new this(1 / 0);
                            i = e
                        }
                    return p = !0, i.sqrt()
                }

                function On(n) {
                    return n instanceof s || n && n.toStringTag === N || !1
                }

                function Fn(n) {
                    return new this(n).ln()
                }

                function An(n, e) {
                    return new this(n).log(e)
                }

                function Zn(n) {
                    return new this(n).log(2)
                }

                function Dn(n) {
                    return new this(n).log(10)
                }

                function kn() {
                    return X(this, arguments, "lt")
                }

                function Pn() {
                    return X(this, arguments, "gt")
                }

                function Rn(n, e) {
                    return new this(n).mod(e)
                }

                function Tn(n, e) {
                    return new this(n).mul(e)
                }

                function _n(n, e) {
                    return new this(n).pow(e)
                }

                function Sn(n) {
                    var e, i, r, t, s = 0,
                        o = new this(1),
                        u = [];
                    if (void 0 === n ? n = this.precision : R(n, 1, f), r = Math.ceil(n / F), this.crypto)
                        if (crypto.getRandomValues)
                            for (e = crypto.getRandomValues(new Uint32Array(r)); s < r;) t = e[s], t >= 429e7 ? e[s] = crypto.getRandomValues(new Uint32Array(1))[0] : u[s++] = t % 1e7;
                        else {
                            if (!crypto.randomBytes) throw Error(v);
                            for (e = crypto.randomBytes(r *= 4); s < r;) t = e[s] + (e[s + 1] << 8) + (e[s + 2] << 16) + ((127 & e[s + 3]) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(e, s) : (u.push(t % 1e7), s += 4);
                            s = r / 4
                        }
                    else
                        for (; s < r;) u[s++] = 1e7 * Math.random() | 0;
                    for (r = u[--s], n %= F, r && n && (t = E(10, F - n), u[s] = (r / t | 0) * t); 0 === u[s]; s--) u.pop();
                    if (s < 0) i = 0, u = [0];
                    else {
                        for (i = -1; 0 === u[0]; i -= F) u.shift();
                        for (r = 1, t = u[0]; t >= 10; t /= 10) r++;
                        r < F && (i -= F - r)
                    }
                    return o.e = i, o.d = u, o
                }

                function Ln(n) {
                    return U(n = new this(n), n.e + 1, this.rounding)
                }

                function Un(n) {
                    return n = new this(n), n.d ? n.d[0] ? n.s : 0 * n.s : n.s || NaN
                }

                function Cn(n) {
                    return new this(n).sin()
                }

                function In(n) {
                    return new this(n).sinh()
                }

                function Hn(n) {
                    return new this(n).sqrt()
                }

                function Bn(n, e) {
                    return new this(n).sub(e)
                }

                function Vn() {
                    var n = 0,
                        e = arguments,
                        i = new this(e[n]);
                    for (p = !1; i.s && ++n < e.length;) i = i.plus(e[n]);
                    return p = !0, U(i, this.precision, this.rounding)
                }

                function $n(n) {
                    return new this(n).tan()
                }

                function Wn(n) {
                    return new this(n).tanh()
                }

                function jn(n) {
                    return U(n = new this(n), n.e + 1, 1)
                }
                s = En(d), s.prototype.constructor = s, s["default"] = s.Decimal = s, h = new s(h), l = new s(l), r = function() {
                    return s
                }.call(e, i, e, n), void 0 === r || (n.exports = r)
            })()
        }
    }
]);