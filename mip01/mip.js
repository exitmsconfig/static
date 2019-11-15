window._mipStartTiming = Date.now(),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t()
}(0, function() {
    "use strict";
    function e(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    function Se(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
    function Pe(r, i, e) {
        if (Se(r),
        void 0 === i)
            return r;
        switch (e) {
        case 1:
            return function(e) {
                return r.call(i, e)
            }
            ;
        case 2:
            return function(e, t) {
                return r.call(i, e, t)
            }
            ;
        case 3:
            return function(e, t, n) {
                return r.call(i, e, t, n)
            }
        }
        return function() {
            return r.apply(i, arguments)
        }
    }
    function i(e) {
        return n.call(e).slice(8, -1)
    }
    function _e(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + a).toString(36))
    }
    function t(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), s)) ? n : c ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
    function xe(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
    function Ie(e) {
        if (!xe(e))
            throw TypeError(e + " is not an object!");
        return e
    }
    function Le(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
    function Ae(e) {
        return l ? u.createElement(e) : {}
    }
    function Te(e, t) {
        if (!xe(e))
            return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !xe(r = n.call(e)))
            return r;
        if ("function" == typeof (n = e.valueOf) && !xe(r = n.call(e)))
            return r;
        if (!t && "function" == typeof (n = e.toString) && !xe(r = n.call(e)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
    function Ce(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
    function Me(e, t) {
        return d.call(e, t)
    }
    var Oe = e(function(e) {
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
    })
      , n = {}.toString
      , je = e(function(e) {
        var t = e.exports = {
            version: "2.6.5"
        };
        "number" == typeof __e && (__e = t)
    })
      , o = (je.version,
    e(function(e) {
        var t = "__core-js_shared__"
          , n = Oe[t] || (Oe[t] = {});
        (e.exports = function(e, t) {
            return n[e] || (n[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: je.version,
            mode: "global",
            copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
        })
    }))
      , r = 0
      , a = Math.random()
      , He = e(function(e) {
        var t = o("wks")
          , n = Oe.Symbol
          , r = "function" == typeof n;
        (e.exports = function(e) {
            return t[e] || (t[e] = r && n[e] || (r ? n : _e)("Symbol." + e))
        }
        ).store = t
    })
      , s = He("toStringTag")
      , c = "Arguments" == i(function() {
        return arguments
    }())
      , Ne = !Le(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , u = Oe.document
      , l = xe(u) && xe(u.createElement)
      , Re = !Ne && !Le(function() {
        return 7 != Object.defineProperty(Ae("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , f = Object.defineProperty
      , De = {
        f: Ne ? Object.defineProperty : function(e, t, n) {
            if (Ie(e),
            t = Te(t, !0),
            Ie(n),
            Re)
                try {
                    return f(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
      , Fe = Ne ? function(e, t, n) {
        return De.f(e, t, Ce(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
      , d = {}.hasOwnProperty
      , h = o("native-function-to-string", Function.toString)
      , qe = e(function(e) {
        var o = _e("src")
          , t = "toString"
          , a = ("" + h).split(t);
        je.inspectSource = function(e) {
            return h.call(e)
        }
        ,
        (e.exports = function(e, t, n, r) {
            var i = "function" == typeof n;
            i && (Me(n, "name") || Fe(n, "name", t)),
            e[t] !== n && (i && (Me(n, o) || Fe(n, o, e[t] ? "" + e[t] : a.join(String(t)))),
            e === Oe ? e[t] = n : r ? e[t] ? e[t] = n : Fe(e, t, n) : (delete e[t],
            Fe(e, t, n)))
        }
        )(Function.prototype, t, function() {
            return "function" == typeof this && this[o] || h.call(this)
        })
    })
      , v = "prototype"
      , m = function(e, t, n) {
        var r, i, o, a, s = e & m.F, c = e & m.G, u = e & m.S, l = e & m.P, f = e & m.B, d = c ? Oe : u ? Oe[t] || (Oe[t] = {}) : (Oe[t] || {})[v], h = c ? je : je[t] || (je[t] = {}), p = h[v] || (h[v] = {});
        for (r in c && (n = t),
        n)
            o = ((i = !s && d && void 0 !== d[r]) ? d : n)[r],
            a = f && i ? Pe(o, Oe) : l && "function" == typeof o ? Pe(Function.call, o) : o,
            d && qe(d, r, o, e & m.U),
            h[r] != o && Fe(h, r, a),
            l && p[r] != o && (p[r] = o)
    };
    Oe.core = je,
    m.F = 1,
    m.G = 2,
    m.S = 4,
    m.P = 8,
    m.B = 16,
    m.W = 32,
    m.U = 64,
    m.R = 128;
    function y(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e)
            throw TypeError(n + ": incorrect invocation!");
        return e
    }
    function p(t, e, n, r) {
        try {
            return r ? e(Ie(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && Ie(i.call(t)),
            e
        }
    }
    function g(e) {
        return void 0 !== e && (_.Array === e || I[x] === e)
    }
    function Be(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? A : L)(e)
    }
    function Ue(e) {
        return 0 < e ? T(Be(e), 9007199254740991) : 0
    }
    function w(e, t) {
        var n, r = Ie(e).constructor;
        return void 0 === r || null == (n = Ie(r)[j]) ? t : Se(n)
    }
    function b() {
        var e = +this;
        if (z.hasOwnProperty(e)) {
            var t = z[e];
            delete z[e],
            t()
        }
    }
    function E(e) {
        b.call(e.data)
    }
    var k, S, P, ze = m, _ = {}, x = He("iterator"), I = Array.prototype, L = Math.ceil, A = Math.floor, T = Math.min, C = He("iterator"), M = je.getIteratorMethod = function(e) {
        if (null != e)
            return e[C] || e["@@iterator"] || _[t(e)]
    }
    , O = e(function(e) {
        var d = {}
          , h = {}
          , t = e.exports = function(e, t, n, r, i) {
            var o, a, s, c, u = i ? function() {
                return e
            }
            : M(e), l = Pe(n, r, t ? 2 : 1), f = 0;
            if ("function" != typeof u)
                throw TypeError(e + " is not iterable!");
            if (g(u)) {
                for (o = Ue(e.length); f < o; f++)
                    if ((c = t ? l(Ie(a = e[f])[0], a[1]) : l(e[f])) === d || c === h)
                        return c
            } else
                for (s = u.call(e); !(a = s.next()).done; )
                    if ((c = p(s, l, a.value, t)) === d || c === h)
                        return c
        }
        ;
        t.BREAK = d,
        t.RETURN = h
    }), j = He("species"), H = Oe.document, N = H && H.documentElement, R = Oe.process, D = Oe.setImmediate, F = Oe.clearImmediate, q = Oe.MessageChannel, B = Oe.Dispatch, U = 0, z = {}, W = "onreadystatechange";
    D && F || (D = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return z[++U] = function() {
            !function(e, t, n) {
                var r = void 0 === n;
                switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
                }
                e.apply(n, t)
            }("function" == typeof e ? e : Function(e), t)
        }
        ,
        k(U),
        U
    }
    ,
    F = function(e) {
        delete z[e]
    }
    ,
    "process" == i(R) ? k = function(e) {
        R.nextTick(Pe(b, e, 1))
    }
    : B && B.now ? k = function(e) {
        B.now(Pe(b, e, 1))
    }
    : q ? (P = (S = new q).port2,
    S.port1.onmessage = E,
    k = Pe(P.postMessage, P, 1)) : Oe.addEventListener && "function" == typeof postMessage && !Oe.importScripts ? (k = function(e) {
        Oe.postMessage(e + "", "*")
    }
    ,
    Oe.addEventListener("message", E, !1)) : k = W in Ae("script") ? function(e) {
        N.appendChild(Ae("script"))[W] = function() {
            N.removeChild(this),
            b.call(e)
        }
    }
    : function(e) {
        setTimeout(Pe(b, e, 1), 0)
    }
    );
    var V = {
        set: D,
        clear: F
    }
      , $ = V.set
      , G = Oe.MutationObserver || Oe.WebKitMutationObserver
      , X = Oe.process
      , Q = Oe.Promise
      , J = "process" == i(X);
    function Y(e) {
        var n, r;
        this.promise = new e(function(e, t) {
            if (void 0 !== n || void 0 !== r)
                throw TypeError("Bad Promise constructor");
            n = e,
            r = t
        }
        ),
        this.resolve = Se(n),
        this.reject = Se(r)
    }
    function Z(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
    function K(e, t) {
        if (Ie(e),
        xe(t) && t.constructor === e)
            return t;
        var n = re.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }
    function ee(e, t, n) {
        for (var r in t)
            qe(e, r, t[r], n);
        return e
    }
    function te(e, t, n) {
        e && !Me(e = n ? e : e.prototype, se) && ae(e, se, {
            configurable: !0,
            value: t
        })
    }
    function ne(e) {
        var t = Oe[e];
        Ne && t && !t[ce] && De.f(t, ce, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
    var re = {
        f: function(e) {
            return new Y(e)
        }
    }
      , ie = Oe.navigator
      , oe = ie && ie.userAgent || ""
      , ae = De.f
      , se = He("toStringTag")
      , ce = He("species")
      , ue = He("iterator")
      , le = !1;
    try {
        [7][ue]().return = function() {
            le = !0
        }
    } catch (e) {}
    function fe(e, t) {
        if (!t && !le)
            return !1;
        var n = !1;
        try {
            var r = [7]
              , i = r[ue]();
            i.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            r[ue] = function() {
                return i
            }
            ,
            e(r)
        } catch (e) {}
        return n
    }
    function de() {}
    function he(e) {
        var t;
        return !(!xe(e) || "function" != typeof (t = e.then)) && t
    }
    function pe(l, n) {
        if (!l._n) {
            l._n = !0;
            var r = l._c;
            Ee(function() {
                for (var c = l._v, u = 1 == l._s, e = 0, t = function(e) {
                    var t, n, r, i = u ? e.ok : e.fail, o = e.resolve, a = e.reject, s = e.domain;
                    try {
                        i ? (u || (2 == l._h && et(l),
                        l._h = 1),
                        !0 === i ? t = c : (s && s.enter(),
                        t = i(c),
                        s && (s.exit(),
                        r = !0)),
                        t === e.promise ? a(We("Promise-chain cycle")) : (n = he(t)) ? n.call(t, o, a) : o(t)) : a(c)
                    } catch (e) {
                        s && !r && s.exit(),
                        a(e)
                    }
                }; r.length > e; )
                    t(r[e++]);
                l._c = [],
                l._n = !1,
                n && !l._h && Ze(l)
            })
        }
    }
    function ve(e) {
        var t = this;
        t._d || (t._d = !0,
        (t = t._w || t)._v = e,
        t._s = 2,
        t._a || (t._a = t._c.slice()),
        pe(t, !0))
    }
    var me, ye, ge, we, be = V.set, Ee = function() {
        function e() {
            var e, t;
            for (J && (e = X.domain) && e.exit(); n; ) {
                t = n.fn,
                n = n.next;
                try {
                    t()
                } catch (e) {
                    throw n ? i() : r = void 0,
                    e
                }
            }
            r = void 0,
            e && e.enter()
        }
        var n, r, i;
        if (J)
            i = function() {
                X.nextTick(e)
            }
            ;
        else if (!G || Oe.navigator && Oe.navigator.standalone)
            if (Q && Q.resolve) {
                var t = Q.resolve(void 0);
                i = function() {
                    t.then(e)
                }
            } else
                i = function() {
                    $.call(Oe, e)
                }
                ;
        else {
            var o = !0
              , a = document.createTextNode("");
            new G(e).observe(a, {
                characterData: !0
            }),
            i = function() {
                a.data = o = !o
            }
        }
        return function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            r && (r.next = t),
            n || (n = t,
            i()),
            r = t
        }
    }(), ke = "Promise", We = Oe.TypeError, Ve = Oe.process, $e = Ve && Ve.versions, Ge = $e && $e.v8 || "", Xe = Oe[ke], Qe = "process" == t(Ve), Je = ye = re.f, Ye = !!function() {
        try {
            var e = Xe.resolve(1)
              , t = (e.constructor = {})[He("species")] = function(e) {
                e(de, de)
            }
            ;
            return (Qe || "function" == typeof PromiseRejectionEvent) && e.then(de)instanceof t && 0 !== Ge.indexOf("6.6") && -1 === oe.indexOf("Chrome/66")
        } catch (e) {}
    }(), Ze = function(o) {
        be.call(Oe, function() {
            var e, t, n, r = o._v, i = Ke(o);
            if (i && (e = Z(function() {
                Qe ? Ve.emit("unhandledRejection", r, o) : (t = Oe.onunhandledrejection) ? t({
                    promise: o,
                    reason: r
                }) : (n = Oe.console) && n.error && n.error("Unhandled promise rejection", r)
            }),
            o._h = Qe || Ke(o) ? 2 : 1),
            o._a = void 0,
            i && e.e)
                throw e.v
        })
    }, Ke = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
    }, et = function(t) {
        be.call(Oe, function() {
            var e;
            Qe ? Ve.emit("rejectionHandled", t) : (e = Oe.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        })
    }, tt = function(e) {
        var n, r = this;
        if (!r._d) {
            r._d = !0,
            r = r._w || r;
            try {
                if (r === e)
                    throw We("Promise can't be resolved itself");
                (n = he(e)) ? Ee(function() {
                    var t = {
                        _w: r,
                        _d: !1
                    };
                    try {
                        n.call(e, Pe(tt, t, 1), Pe(ve, t, 1))
                    } catch (e) {
                        ve.call(t, e)
                    }
                }) : (r._v = e,
                r._s = 1,
                pe(r, !1))
            } catch (e) {
                ve.call({
                    _w: r,
                    _d: !1
                }, e)
            }
        }
    };
    Ye || (Xe = function(e) {
        y(this, Xe, ke, "_h"),
        Se(e),
        me.call(this);
        try {
            e(Pe(tt, this, 1), Pe(ve, this, 1))
        } catch (e) {
            ve.call(this, e)
        }
    }
    ,
    (me = function(e) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ).prototype = ee(Xe.prototype, {
        then: function(e, t) {
            var n = Je(w(this, Xe));
            return n.ok = "function" != typeof e || e,
            n.fail = "function" == typeof t && t,
            n.domain = Qe ? Ve.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && pe(this, !1),
            n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    ge = function() {
        var e = new me;
        this.promise = e,
        this.resolve = Pe(tt, e, 1),
        this.reject = Pe(ve, e, 1)
    }
    ,
    re.f = Je = function(e) {
        return e === Xe || e === we ? new ge(e) : ye(e)
    }
    ),
    ze(ze.G + ze.W + ze.F * !Ye, {
        Promise: Xe
    }),
    te(Xe, ke),
    ne(ke),
    we = je[ke],
    ze(ze.S + ze.F * !Ye, ke, {
        reject: function(e) {
            var t = Je(this);
            return (0,
            t.reject)(e),
            t.promise
        }
    }),
    ze(ze.S + ze.F * !Ye, ke, {
        resolve: function(e) {
            return K(this, e)
        }
    }),
    ze(ze.S + ze.F * !(Ye && fe(function(e) {
        Xe.all(e).catch(de)
    })), ke, {
        all: function(e) {
            var a = this
              , t = Je(a)
              , s = t.resolve
              , c = t.reject
              , n = Z(function() {
                var r = []
                  , i = 0
                  , o = 1;
                O(e, !1, function(e) {
                    var t = i++
                      , n = !1;
                    r.push(void 0),
                    o++,
                    a.resolve(e).then(function(e) {
                        n || (n = !0,
                        r[t] = e,
                        --o || s(r))
                    }, c)
                }),
                --o || s(r)
            });
            return n.e && c(n.v),
            t.promise
        },
        race: function(e) {
            var t = this
              , n = Je(t)
              , r = n.reject
              , i = Z(function() {
                O(e, !1, function(e) {
                    t.resolve(e).then(n.resolve, r)
                })
            });
            return i.e && r(i.v),
            n.promise
        }
    });
    function nt(e) {
        if (null == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
    function rt(e) {
        return wt(nt(e))
    }
    function it(e) {
        return kt[e] || (kt[e] = _e(e))
    }
    function ot(e, t) {
        var n, r = rt(e), i = 0, o = [];
        for (n in r)
            n != Pt && Me(r, n) && o.push(n);
        for (; t.length > i; )
            Me(r, n = t[i++]) && (~St(o, n) || o.push(n));
        return o
    }
    function at() {}
    function st(e) {
        var t = tn[e] = jt(Gt[Jt]);
        return t._k = e,
        t
    }
    function ct(e, t) {
        Ie(e);
        for (var n, r = function(e) {
            var t = xt(e)
              , n = It.f;
            if (n)
                for (var r, i = n(e), o = Lt.f, a = 0; i.length > a; )
                    o.call(e, r = i[a++]) && t.push(r);
            return t
        }(t = rt(t)), i = 0, o = r.length; i < o; )
            ln(e, n = r[i++], t[n]);
        return e
    }
    function ut(e) {
        var t = Kt.call(this, e = Te(e, !0));
        return !(this === rn && Me(tn, e) && !Me(nn, e)) && (!(t || !Me(this, e) || !Me(tn, e) || Me(this, Yt) && this[Yt][e]) || t)
    }
    function lt(e, t) {
        if (e = rt(e),
        t = Te(t, !0),
        e !== rn || !Me(tn, t) || Me(nn, t)) {
            var n = Wt(e, t);
            return !n || !Me(tn, t) || Me(e, Yt) && e[Yt][t] || (n.enumerable = !0),
            n
        }
    }
    function ft(e) {
        for (var t, n = $t(rt(e)), r = [], i = 0; n.length > i; )
            Me(tn, t = n[i++]) || t == Yt || t == zt || r.push(t);
        return r
    }
    function dt(e) {
        for (var t, n = e === rn, r = $t(n ? nn : rt(e)), i = [], o = 0; r.length > o; )
            !Me(tn, t = r[o++]) || n && !Me(rn, t) || i.push(tn[t]);
        return i
    }
    var ht, pt, vt, mt = e(function(e) {
        function n(e) {
            t(e, r, {
                value: {
                    i: "O" + ++i,
                    w: {}
                }
            })
        }
        var r = _e("meta")
          , t = De.f
          , i = 0
          , o = Object.isExtensible || function() {
            return !0
        }
          , a = !Le(function() {
            return o(Object.preventExtensions({}))
        })
          , s = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(e, t) {
                if (!xe(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!Me(e, r)) {
                    if (!o(e))
                        return "F";
                    if (!t)
                        return "E";
                    n(e)
                }
                return e[r].i
            },
            getWeak: function(e, t) {
                if (!Me(e, r)) {
                    if (!o(e))
                        return !0;
                    if (!t)
                        return !1;
                    n(e)
                }
                return e[r].w
            },
            onFreeze: function(e) {
                return a && s.NEED && o(e) && !Me(e, r) && n(e),
                e
            }
        }
    }), yt = (mt.KEY,
    mt.NEED,
    mt.fastKey,
    mt.getWeak,
    mt.onFreeze,
    {
        f: He
    }), gt = De.f, wt = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == i(e) ? e.split("") : Object(e)
    }
    , bt = Math.max, Et = Math.min, kt = o("keys"), St = (ht = !1,
    function(e, t, n) {
        var r, i = rt(e), o = Ue(i.length), a = function(e, t) {
            return (e = Be(e)) < 0 ? bt(e + t, 0) : Et(e, t)
        }(n, o);
        if (ht && t != t) {
            for (; a < o; )
                if ((r = i[a++]) != r)
                    return !0
        } else
            for (; a < o; a++)
                if ((ht || a in i) && i[a] === t)
                    return ht || a || 0;
        return !ht && -1
    }
    ), Pt = it("IE_PROTO"), _t = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), xt = Object.keys || function(e) {
        return ot(e, _t)
    }
    , It = {
        f: Object.getOwnPropertySymbols
    }, Lt = {
        f: {}.propertyIsEnumerable
    }, At = Array.isArray || function(e) {
        return "Array" == i(e)
    }
    , Tt = Ne ? Object.defineProperties : function(e, t) {
        Ie(e);
        for (var n, r = xt(t), i = r.length, o = 0; o < i; )
            De.f(e, n = r[o++], t[n]);
        return e
    }
    , Ct = it("IE_PROTO"), Mt = "prototype", Ot = function() {
        var e, t = Ae("iframe"), n = _t.length;
        for (t.style.display = "none",
        N.appendChild(t),
        t.src = "javascript:",
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        Ot = e.F; n--; )
            delete Ot[Mt][_t[n]];
        return Ot()
    }, jt = Object.create || function(e, t) {
        var n;
        return null !== e ? (at[Mt] = Ie(e),
        n = new at,
        at[Mt] = null,
        n[Ct] = e) : n = Ot(),
        void 0 === t ? n : Tt(n, t)
    }
    , Ht = _t.concat("length", "prototype"), Nt = {
        f: Object.getOwnPropertyNames || function(e) {
            return ot(e, Ht)
        }
    }, Rt = Nt.f, Dt = {}.toString, Ft = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], qt = {
        f: function(e) {
            return Ft && "[object Window]" == Dt.call(e) ? function(e) {
                try {
                    return Rt(e)
                } catch (e) {
                    return Ft.slice()
                }
            }(e) : Rt(rt(e))
        }
    }, Bt = Object.getOwnPropertyDescriptor, Ut = {
        f: Ne ? Bt : function(e, t) {
            if (e = rt(e),
            t = Te(t, !0),
            Re)
                try {
                    return Bt(e, t)
                } catch (e) {}
            if (Me(e, t))
                return Ce(!Lt.f.call(e, t), e[t])
        }
    }, zt = mt.KEY, Wt = Ut.f, Vt = De.f, $t = qt.f, Gt = Oe.Symbol, Xt = Oe.JSON, Qt = Xt && Xt.stringify, Jt = "prototype", Yt = He("_hidden"), Zt = He("toPrimitive"), Kt = {}.propertyIsEnumerable, en = o("symbol-registry"), tn = o("symbols"), nn = o("op-symbols"), rn = Object[Jt], on = "function" == typeof Gt, an = Oe.QObject, sn = !an || !an[Jt] || !an[Jt].findChild, cn = Ne && Le(function() {
        return 7 != jt(Vt({}, "a", {
            get: function() {
                return Vt(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ? function(e, t, n) {
        var r = Wt(rn, t);
        r && delete rn[t],
        Vt(e, t, n),
        r && e !== rn && Vt(rn, t, r)
    }
    : Vt, un = on && "symbol" == typeof Gt.iterator ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        return e instanceof Gt
    }
    , ln = function(e, t, n) {
        return e === rn && ln(nn, t, n),
        Ie(e),
        t = Te(t, !0),
        Ie(n),
        Me(tn, t) ? (n.enumerable ? (Me(e, Yt) && e[Yt][t] && (e[Yt][t] = !1),
        n = jt(n, {
            enumerable: Ce(0, !1)
        })) : (Me(e, Yt) || Vt(e, Yt, Ce(1, {})),
        e[Yt][t] = !0),
        cn(e, t, n)) : Vt(e, t, n)
    };
    on || (qe((Gt = function() {
        if (this instanceof Gt)
            throw TypeError("Symbol is not a constructor!");
        var t = _e(0 < arguments.length ? arguments[0] : void 0)
          , n = function(e) {
            this === rn && n.call(nn, e),
            Me(this, Yt) && Me(this[Yt], t) && (this[Yt][t] = !1),
            cn(this, t, Ce(1, e))
        };
        return Ne && sn && cn(rn, t, {
            configurable: !0,
            set: n
        }),
        st(t)
    }
    )[Jt], "toString", function() {
        return this._k
    }),
    Ut.f = lt,
    De.f = ln,
    Nt.f = qt.f = ft,
    Lt.f = ut,
    It.f = dt,
    Ne && qe(rn, "propertyIsEnumerable", ut, !0),
    yt.f = function(e) {
        return st(He(e))
    }
    ),
    ze(ze.G + ze.W + ze.F * !on, {
        Symbol: Gt
    });
    for (var fn = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), dn = 0; fn.length > dn; )
        He(fn[dn++]);
    for (var hn = xt(He.store), pn = 0; hn.length > pn; )
        pt = hn[pn++],
        void 0,
        vt = je.Symbol || (je.Symbol = Oe.Symbol || {}),
        "_" == pt.charAt(0) || pt in vt || gt(vt, pt, {
            value: yt.f(pt)
        });
    ze(ze.S + ze.F * !on, "Symbol", {
        for: function(e) {
            return Me(en, e += "") ? en[e] : en[e] = Gt(e)
        },
        keyFor: function(e) {
            if (!un(e))
                throw TypeError(e + " is not a symbol!");
            for (var t in en)
                if (en[t] === e)
                    return t
        },
        useSetter: function() {
            sn = !0
        },
        useSimple: function() {
            sn = !1
        }
    }),
    ze(ze.S + ze.F * !on, "Object", {
        create: function(e, t) {
            return void 0 === t ? jt(e) : ct(jt(e), t)
        },
        defineProperty: ln,
        defineProperties: ct,
        getOwnPropertyDescriptor: lt,
        getOwnPropertyNames: ft,
        getOwnPropertySymbols: dt
    }),
    Xt && ze(ze.S + ze.F * (!on || Le(function() {
        var e = Gt();
        return "[null]" != Qt([e]) || "{}" != Qt({
            a: e
        }) || "{}" != Qt(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var t, n, r = [e], i = 1; arguments.length > i; )
                r.push(arguments[i++]);
            if (n = t = r[1],
            (xe(t) || void 0 !== e) && !un(e))
                return At(t) || (t = function(e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)),
                    !un(t))
                        return t
                }
                ),
                r[1] = t,
                Qt.apply(Xt, r)
        }
    }),
    Gt[Jt][Zt] || Fe(Gt[Jt], Zt, Gt[Jt].valueOf),
    te(Gt, "Symbol"),
    te(Math, "Math", !0),
    te(Oe.JSON, "JSON", !0);
    function vn(e) {
        return Object(nt(e))
    }
    function mn(e, t) {
        return new (function(e) {
            var t;
            return At(e) && ("function" != typeof (t = e.constructor) || t !== Array && !At(t.prototype) || (t = void 0),
            xe(t) && null === (t = t[yn]) && (t = void 0)),
            void 0 === t ? Array : t
        }(e))(t)
    }
    var yn = He("species")
      , gn = He("unscopables")
      , wn = Array.prototype;
    null == wn[gn] && Fe(wn, gn, {});
    function bn(e) {
        wn[gn][e] = !0
    }
    var En, kn, Sn, Pn, _n, xn, In, Ln, An, Tn = (Sn = 1 == (En = 5),
    Pn = 2 == En,
    _n = 3 == En,
    xn = 4 == En,
    In = 6 == En,
    Ln = 5 == En || In,
    An = kn || mn,
    function(e, t, n) {
        for (var r, i, o = vn(e), a = wt(o), s = Pe(t, n, 3), c = Ue(a.length), u = 0, l = Sn ? An(e, c) : Pn ? An(e, 0) : void 0; u < c; u++)
            if ((Ln || u in a) && (i = s(r = a[u], u, o),
            En))
                if (Sn)
                    l[u] = i;
                else if (i)
                    switch (En) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return u;
                    case 2:
                        l.push(r)
                    }
                else if (xn)
                    return !1;
        return In ? -1 : _n || xn ? xn : l
    }
    ), Cn = "find", Mn = !0;
    Cn in [] && Array(1)[Cn](function() {
        Mn = !1
    }),
    ze(ze.P + ze.F * Mn, "Array", {
        find: function(e) {
            return Tn(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    bn(Cn);
    var On = Object.assign
      , jn = !On || Le(function() {
        var e = {}
          , t = {}
          , n = Symbol()
          , r = "abcdefghijklmnopqrst";
        return e[n] = 7,
        r.split("").forEach(function(e) {
            t[e] = e
        }),
        7 != On({}, e)[n] || Object.keys(On({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = vn(e), r = arguments.length, i = 1, o = It.f, a = Lt.f; i < r; )
            for (var s, c = wt(arguments[i++]), u = o ? xt(c).concat(o(c)) : xt(c), l = u.length, f = 0; f < l; )
                a.call(c, s = u[f++]) && (n[s] = c[s]);
        return n
    }
    : On;
    ze(ze.S + ze.F, "Object", {
        assign: jn
    }),
    function(i, e) {
        var c = i.document
          , u = i.Object
          , r = function(e) {
            function n(e, t) {
                (t = t.toLowerCase())in s || (s[e] = (s[e] || []).concat(t),
                s[t] = s[t.toUpperCase()] = e)
            }
            var t, r, i, o, a = /^[A-Z]+[a-z]/, s = (u.create || u)(null), c = {};
            for (r in e)
                for (o in e[r])
                    for (i = e[r][o],
                    s[o] = i,
                    t = 0; t < i.length; t++)
                        s[i[t].toLowerCase()] = s[i[t].toUpperCase()] = o;
            return c.get = function(e) {
                return "string" == typeof e ? s[e] || (a.test(e) ? [] : "") : function(e) {
                    var t, n = [];
                    for (t in s)
                        e.test(t) && n.push(t);
                    return n
                }(e)
            }
            ,
            c.set = function(e, t) {
                return a.test(e) ? n(e, t) : n(t, e),
                c
            }
            ,
            c
        }({
            collections: {
                HTMLAllCollection: ["all"],
                HTMLCollection: ["forms"],
                HTMLFormControlsCollection: ["elements"],
                HTMLOptionsCollection: ["options"]
            },
            elements: {
                Element: ["element"],
                HTMLAnchorElement: ["a"],
                HTMLAppletElement: ["applet"],
                HTMLAreaElement: ["area"],
                HTMLAttachmentElement: ["attachment"],
                HTMLAudioElement: ["audio"],
                HTMLBRElement: ["br"],
                HTMLBaseElement: ["base"],
                HTMLBodyElement: ["body"],
                HTMLButtonElement: ["button"],
                HTMLCanvasElement: ["canvas"],
                HTMLContentElement: ["content"],
                HTMLDListElement: ["dl"],
                HTMLDataElement: ["data"],
                HTMLDataListElement: ["datalist"],
                HTMLDetailsElement: ["details"],
                HTMLDialogElement: ["dialog"],
                HTMLDirectoryElement: ["dir"],
                HTMLDivElement: ["div"],
                HTMLDocument: ["document"],
                HTMLElement: ["element", "abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "command", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "i", "kbd", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"],
                HTMLEmbedElement: ["embed"],
                HTMLFieldSetElement: ["fieldset"],
                HTMLFontElement: ["font"],
                HTMLFormElement: ["form"],
                HTMLFrameElement: ["frame"],
                HTMLFrameSetElement: ["frameset"],
                HTMLHRElement: ["hr"],
                HTMLHeadElement: ["head"],
                HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"],
                HTMLHtmlElement: ["html"],
                HTMLIFrameElement: ["iframe"],
                HTMLImageElement: ["img"],
                HTMLInputElement: ["input"],
                HTMLKeygenElement: ["keygen"],
                HTMLLIElement: ["li"],
                HTMLLabelElement: ["label"],
                HTMLLegendElement: ["legend"],
                HTMLLinkElement: ["link"],
                HTMLMapElement: ["map"],
                HTMLMarqueeElement: ["marquee"],
                HTMLMediaElement: ["media"],
                HTMLMenuElement: ["menu"],
                HTMLMenuItemElement: ["menuitem"],
                HTMLMetaElement: ["meta"],
                HTMLMeterElement: ["meter"],
                HTMLModElement: ["del", "ins"],
                HTMLOListElement: ["ol"],
                HTMLObjectElement: ["object"],
                HTMLOptGroupElement: ["optgroup"],
                HTMLOptionElement: ["option"],
                HTMLOutputElement: ["output"],
                HTMLParagraphElement: ["p"],
                HTMLParamElement: ["param"],
                HTMLPictureElement: ["picture"],
                HTMLPreElement: ["pre"],
                HTMLProgressElement: ["progress"],
                HTMLQuoteElement: ["blockquote", "q", "quote"],
                HTMLScriptElement: ["script"],
                HTMLSelectElement: ["select"],
                HTMLShadowElement: ["shadow"],
                HTMLSlotElement: ["slot"],
                HTMLSourceElement: ["source"],
                HTMLSpanElement: ["span"],
                HTMLStyleElement: ["style"],
                HTMLTableCaptionElement: ["caption"],
                HTMLTableCellElement: ["td", "th"],
                HTMLTableColElement: ["col", "colgroup"],
                HTMLTableElement: ["table"],
                HTMLTableRowElement: ["tr"],
                HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
                HTMLTemplateElement: ["template"],
                HTMLTextAreaElement: ["textarea"],
                HTMLTimeElement: ["time"],
                HTMLTitleElement: ["title"],
                HTMLTrackElement: ["track"],
                HTMLUListElement: ["ul"],
                HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"],
                HTMLVideoElement: ["video"]
            },
            nodes: {
                Attr: ["node"],
                Audio: ["audio"],
                CDATASection: ["node"],
                CharacterData: ["node"],
                Comment: ["#comment"],
                Document: ["#document"],
                DocumentFragment: ["#document-fragment"],
                DocumentType: ["node"],
                HTMLDocument: ["#document"],
                Image: ["img"],
                Option: ["option"],
                ProcessingInstruction: ["node"],
                ShadowRoot: ["#shadow-root"],
                Text: ["#text"],
                XMLDocument: ["xml"]
            }
        });
        "object" != typeof e && (e = {
            type: e || "auto"
        });
        var l, n, o, a, f, d, s, h, p, v = "registerElement", m = "__" + v + (1e5 * i.Math.random() >> 0), y = "addEventListener", g = "attached", w = "Callback", b = "detached", E = "extends", k = "attributeChanged" + w, S = g + w, P = "connected" + w, _ = "disconnected" + w, x = "created" + w, I = b + w, L = "ADDITION", A = "MODIFICATION", T = "REMOVAL", C = "DOMAttrModified", M = "DOMContentLoaded", O = "<", j = "=", H = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/, N = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"], R = [], D = [], F = "", q = c.documentElement, B = R.indexOf || function(e) {
            for (var t = this.length; t-- && this[t] !== e; )
                ;
            return t
        }
        , U = u.prototype, z = U.hasOwnProperty, W = U.isPrototypeOf, V = u.defineProperty, $ = [], G = u.getOwnPropertyDescriptor, X = u.getOwnPropertyNames, Q = u.getPrototypeOf, t = u.setPrototypeOf, J = !!u.__proto__, Y = "__dreCEv1", Z = i.customElements, K = !/^force/.test(e.type) && !!(Z && Z.define && Z.get && Z.whenDefined), ee = u.create || u, te = i.Map || function() {
            var n, r = [], i = [];
            return {
                get: function(e) {
                    return i[B.call(r, e)]
                },
                set: function(e, t) {
                    (n = B.call(r, e)) < 0 ? i[r.push(e) - 1] = t : i[n] = t
                }
            }
        }
        , ne = i.Promise || function(e) {
            var t = []
              , n = !1
              , r = {
                catch: function() {
                    return r
                },
                then: function(e) {
                    return t.push(e),
                    n && setTimeout(i, 1),
                    r
                }
            };
            function i(e) {
                for (n = !0; t.length; )
                    t.shift()(e)
            }
            return e(i),
            r
        }
        , re = !1, ie = ee(null), oe = ee(null), ae = new te, se = function(e) {
            return e.toLowerCase()
        }, ce = u.create || function e(t) {
            return t ? (e.prototype = t,
            new e) : this
        }
        , ue = t || (J ? function(e, t) {
            return e.__proto__ = t,
            e
        }
        : X && G ? function() {
            function n(e, t) {
                for (var n, r = X(t), i = 0, o = r.length; i < o; i++)
                    n = r[i],
                    z.call(e, n) || V(e, n, G(t, n))
            }
            return function(e, t) {
                for (; n(e, t),
                (t = Q(t)) && !W.call(t, e); )
                    ;
                return e
            }
        }() : function(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        ), le = i.MutationObserver || i.WebKitMutationObserver, fe = i.HTMLAnchorElement, de = (i.HTMLElement || i.Element || i.Node).prototype, he = !W.call(de, q), pe = he ? function(e, t, n) {
            return e[t] = n.value,
            e
        }
        : V, ve = he ? function(e) {
            return 1 === e.nodeType
        }
        : function(e) {
            return W.call(de, e)
        }
        , me = he && [], ye = de.attachShadow, ge = de.cloneNode, we = de.dispatchEvent, be = de.getAttribute, Ee = de.hasAttribute, ke = de.removeAttribute, Se = de.setAttribute, Pe = c.createElement, _e = c.importNode, xe = Pe, Ie = le && {
            attributes: !0,
            characterData: !0,
            attributeOldValue: !0
        }, Le = le || function(e) {
            Oe = !1,
            q.removeEventListener(C, Le)
        }
        , Ae = 0, Te = v in c && !/^force-all/.test(e.type), Ce = !0, Me = !1, Oe = !0, je = !0, He = !0;
        function Ne() {
            var e = l.splice(0, l.length);
            for (Ae = 0; e.length; )
                e.shift().call(null, e.shift())
        }
        function Re(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                Xe(e[n], t)
        }
        function De(t) {
            return function(e) {
                ve(e) && (Xe(e, t),
                F.length && Re(e.querySelectorAll(F), t))
            }
        }
        function Fe(e) {
            var t = be.call(e, "is")
              , n = e.nodeName.toUpperCase()
              , r = B.call(R, t ? j + t.toUpperCase() : O + n);
            return t && -1 < r && !qe(n, t) ? -1 : r
        }
        function qe(e, t) {
            return -1 < F.indexOf(e + '[is="' + t + '"]')
        }
        function Be(e) {
            var t = e.currentTarget
              , n = e.attrChange
              , r = e.attrName
              , i = e.target
              , o = e[L] || 2
              , a = e[T] || 3;
            !He || i && i !== t || !t[k] || "style" === r || e.prevValue === e.newValue && ("" !== e.newValue || n !== o && n !== a) || t[k](r, n === o ? null : e.prevValue, n === a ? null : e.newValue)
        }
        function Ue(e) {
            var t = De(e);
            return function(e) {
                l.push(t, e.target),
                Ae && clearTimeout(Ae),
                Ae = setTimeout(Ne, 1)
            }
        }
        function ze(e) {
            je && (je = !1,
            e.currentTarget.removeEventListener(M, ze)),
            F.length && Re((e.target || c).querySelectorAll(F), e.detail === b ? b : g),
            he && function() {
                for (var e, t = 0, n = me.length; t < n; t++)
                    e = me[t],
                    q.contains(e) || (n--,
                    me.splice(t--, 1),
                    Xe(e, b))
            }()
        }
        function We(e, t) {
            Se.call(this, e, t),
            n.call(this, {
                target: this
            })
        }
        function Ve(e, t, n) {
            var r = t.apply(e, n)
              , i = Fe(r);
            return -1 < i && h(r, D[i]),
            n.pop() && F.length && function(e) {
                for (var t, n = 0, r = e.length; n < r; n++)
                    t = e[n],
                    h(t, D[Fe(t)])
            }(r.querySelectorAll(F)),
            r
        }
        function $e(e, t) {
            ue(e, t),
            f ? f.observe(e, Ie) : (Oe && (e.setAttribute = We,
            e[m] = a(e),
            e[y]("DOMSubtreeModified", n)),
            e[y](C, Be)),
            e[x] && He && (e.created = !0,
            e[x](),
            e.created = !1)
        }
        function Ge(e) {
            throw new Error("A " + e + " type is already registered")
        }
        function Xe(e, t) {
            var n, r, i = Fe(e);
            -1 < i && (s(e, D[i]),
            i = 0,
            t !== g || e[g] ? t !== b || e[b] || (e[g] = !1,
            e[b] = !0,
            r = "disconnected",
            i = 1) : (e[b] = !1,
            e[g] = !0,
            r = "connected",
            i = 1,
            he && B.call(me, e) < 0 && me.push(e)),
            i && (n = e[t + w] || e[r + w]) && n.call(e))
        }
        function Qe() {}
        function Je(e, t, n) {
            var r = n && n[E] || ""
              , i = t.prototype
              , o = ce(i)
              , a = t.observedAttributes || $
              , s = {
                prototype: o
            };
            pe(o, x, {
                value: function() {
                    if (re)
                        re = !1;
                    else if (!this[Y]) {
                        this[Y] = !0,
                        new t(this),
                        i[x] && i[x].call(this);
                        var e = ie[ae.get(t)];
                        (!K || 1 < e.create.length) && Ke(this)
                    }
                }
            }),
            pe(o, k, {
                value: function(e) {
                    -1 < B.call(a, e) && i[k] && i[k].apply(this, arguments)
                }
            }),
            i[P] && pe(o, S, {
                value: i[P]
            }),
            i[_] && pe(o, I, {
                value: i[_]
            }),
            r && (s[E] = r),
            e = e.toUpperCase(),
            ie[e] = {
                constructor: t,
                create: r ? [r, se(e)] : [e]
            },
            ae.set(t, e),
            c[v](e.toLowerCase(), s),
            et(e),
            oe[e].r()
        }
        function Ye(e) {
            var t = ie[e.toUpperCase()];
            return t && t.constructor
        }
        function Ze(e) {
            return "string" == typeof e ? e : e && e.is || ""
        }
        function Ke(e) {
            for (var t, n = e[k], r = n ? e.attributes : $, i = r.length; i--; )
                t = r[i],
                n.call(e, t.name || t.nodeName, null, t.value || t.nodeValue)
        }
        function et(t) {
            return (t = t.toUpperCase())in oe || (oe[t] = {},
            oe[t].p = new ne(function(e) {
                oe[t].r = e
            }
            )),
            oe[t].p
        }
        function tt() {
            Z && delete i.customElements,
            V(i, "customElements", {
                configurable: !0,
                value: new Qe
            }),
            V(i, "CustomElementRegistry", {
                configurable: !0,
                value: Qe
            });
            for (var e = function(t) {
                var r = i[t];
                if (r) {
                    i[t] = function(e) {
                        var t, n;
                        return e || (e = this),
                        e[Y] || (re = !0,
                        t = ie[ae.get(e.constructor)],
                        (e = (n = K && 1 === t.create.length) ? Reflect.construct(r, $, t.constructor) : c.createElement.apply(c, t.create))[Y] = !0,
                        re = !1,
                        n || Ke(e)),
                        e
                    }
                    ,
                    i[t].prototype = r.prototype;
                    try {
                        r.prototype.constructor = i[t]
                    } catch (e) {
                        V(r, Y, {
                            value: i[t]
                        })
                    }
                }
            }, t = r.get(/^HTML[A-Z]*[a-z]/), n = t.length; n--; e(t[n]))
                ;
            c.createElement = function(e, t) {
                var n = Ze(t);
                return n ? xe.call(this, e, se(n)) : xe.call(this, e)
            }
            ,
            Te || (Me = !0,
            c[v](""))
        }
        if (le && ((p = c.createElement("div")).innerHTML = "<div><div></div></div>",
        new le(function(e, t) {
            if (e[0] && "childList" == e[0].type && !e[0].removedNodes[0].childNodes.length) {
                var n = (p = G(de, "innerHTML")) && p.set;
                n && V(de, "innerHTML", {
                    set: function(e) {
                        for (; this.lastChild; )
                            this.removeChild(this.lastChild);
                        n.call(this, e)
                    }
                })
            }
            t.disconnect(),
            p = null
        }
        ).observe(p, {
            childList: !0,
            subtree: !0
        }),
        p.innerHTML = ""),
        Te || (h = t || J ? (s = function(e, t) {
            W.call(t, e) || $e(e, t)
        }
        ,
        $e) : s = function(e, t) {
            e[m] || (e[m] = u(!0),
            $e(e, t))
        }
        ,
        he ? (Oe = !1,
        function() {
            function r(e) {
                var t = new CustomEvent(C,{
                    bubbles: !0
                });
                t.attrName = e,
                t.prevValue = be.call(this, e),
                t.newValue = null,
                t[T] = t.attrChange = 2,
                ke.call(this, e),
                we.call(this, t)
            }
            function i(e, t) {
                var n = Ee.call(this, e)
                  , r = n && be.call(this, e)
                  , i = new CustomEvent(C,{
                    bubbles: !0
                });
                Se.call(this, e, t),
                i.attrName = e,
                i.prevValue = n ? r : null,
                i.newValue = t,
                n ? i[A] = i.attrChange = 1 : i[L] = i.attrChange = 0,
                we.call(this, i)
            }
            function o(e) {
                var t, n = e.currentTarget, r = n[m], i = e.propertyName;
                r.hasOwnProperty(i) && (r = r[i],
                (t = new CustomEvent(C,{
                    bubbles: !0
                })).attrName = r.name,
                t.prevValue = r.value || null,
                t.newValue = r.value = n[i] || null,
                null == t.prevValue ? t[L] = t.attrChange = 0 : t[A] = t.attrChange = 1,
                we.call(n, t))
            }
            var e = G(de, y)
              , a = e.value;
            e.value = function(e, t, n) {
                e === C && this[k] && this.setAttribute !== i && (this[m] = {
                    className: {
                        name: "class",
                        value: this.className
                    }
                },
                this.setAttribute = i,
                this.removeAttribute = r,
                a.call(this, "propertychange", o)),
                a.call(this, e, t, n)
            }
            ,
            V(de, y, e)
        }()) : le || (q[y](C, Le),
        q.setAttribute(m, 1),
        q.removeAttribute(m),
        Oe && (n = function(e) {
            var t, n, r, i = this;
            if (i === e.target) {
                for (r in t = i[m],
                i[m] = n = a(i),
                n) {
                    if (!(r in t))
                        return o(0, i, r, t[r], n[r], L);
                    if (n[r] !== t[r])
                        return o(1, i, r, t[r], n[r], A)
                }
                for (r in t)
                    if (!(r in n))
                        return o(2, i, r, t[r], n[r], T)
            }
        }
        ,
        o = function(e, t, n, r, i, o) {
            var a = {
                attrChange: e,
                currentTarget: t,
                attrName: n,
                prevValue: r,
                newValue: i
            };
            a[o] = e,
            Be(a)
        }
        ,
        a = function(e) {
            for (var t, n, r = {}, i = e.attributes, o = 0, a = i.length; o < a; o++)
                "setAttribute" !== (n = (t = i[o]).name) && (r[n] = t.value);
            return r
        }
        )),
        c[v] = function(e, t) {
            if (r = e.toUpperCase(),
            Ce && (Ce = !1,
            le ? (f = function(a, s) {
                function c(e, t) {
                    for (var n = 0, r = e.length; n < r; t(e[n++]))
                        ;
                }
                return new le(function(e) {
                    for (var t, n, r, i = 0, o = e.length; i < o; i++)
                        "childList" === (t = e[i]).type ? (c(t.addedNodes, a),
                        c(t.removedNodes, s)) : (n = t.target,
                        He && n[k] && "style" !== t.attributeName && (r = be.call(n, t.attributeName)) !== t.oldValue && n[k](t.attributeName, t.oldValue, r))
                }
                )
            }(De(g), De(b)),
            (d = function(e) {
                return f.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                e
            }
            )(c),
            ye && (de.attachShadow = function() {
                return d(ye.apply(this, arguments))
            }
            )) : (l = [],
            c[y]("DOMNodeInserted", Ue(g)),
            c[y]("DOMNodeRemoved", Ue(b))),
            c[y](M, ze),
            c[y]("readystatechange", ze),
            c.importNode = function(e, t) {
                switch (e.nodeType) {
                case 1:
                    return Ve(c, _e, [e, !!t]);
                case 11:
                    for (var n = c.createDocumentFragment(), r = e.childNodes, i = r.length, o = 0; o < i; o++)
                        n.appendChild(c.importNode(r[o], !!t));
                    return n;
                default:
                    return ge.call(e, !!t)
                }
            }
            ,
            de.cloneNode = function(e) {
                return Ve(this, ge, [!!e])
            }
            ),
            Me)
                return Me = !1;
            if (-2 < B.call(R, j + r) + B.call(R, O + r) && Ge(e),
            !H.test(r) || -1 < B.call(N, r))
                throw new Error("The type " + e + " is invalid");
            function n() {
                return a ? c.createElement(s, r) : c.createElement(s)
            }
            var r, i, o = t || U, a = z.call(o, E), s = a ? t[E].toUpperCase() : r;
            return a && -1 < B.call(R, O + s) && Ge(s),
            i = R.push((a ? j : O) + r) - 1,
            F = F.concat(F.length ? "," : "", a ? s + '[is="' + e.toLowerCase() + '"]' : s),
            n.prototype = D[i] = z.call(o, "prototype") ? o.prototype : ce(de),
            F.length && Re(c.querySelectorAll(F), g),
            n
        }
        ,
        c.createElement = xe = function(e, t) {
            var n = Ze(t)
              , r = n ? Pe.call(c, e, se(n)) : Pe.call(c, e)
              , i = "" + e
              , o = B.call(R, (n ? j : O) + (n || i).toUpperCase())
              , a = -1 < o;
            return n && (r.setAttribute("is", n = n.toLowerCase()),
            a && (a = qe(i.toUpperCase(), n))),
            He = !c.createElement.innerHTMLHelper,
            a && h(r, D[o]),
            r
        }
        ),
        Qe.prototype = {
            constructor: Qe,
            define: K ? function(e, t, n) {
                if (n)
                    Je(e, t, n);
                else {
                    var r = e.toUpperCase();
                    ie[r] = {
                        constructor: t,
                        create: [r]
                    },
                    ae.set(t, r),
                    Z.define(e, t)
                }
            }
            : Je,
            get: K ? function(e) {
                return Z.get(e) || Ye(e)
            }
            : Ye,
            whenDefined: K ? function(e) {
                return ne.race([Z.whenDefined(e), et(e)])
            }
            : et
        },
        !Z || /^force/.test(e.type))
            tt();
        else if (!e.noBuiltIn)
            try {
                !function(e, t, n) {
                    var r = new RegExp("^<a\\s+is=('|\")" + n + "\\1></a>$");
                    if (t[E] = "a",
                    (e.prototype = ce(fe.prototype)).constructor = e,
                    i.customElements.define(n, e, t),
                    !r.test(c.createElement("a", {
                        is: n
                    }).outerHTML) || !r.test((new e).outerHTML))
                        throw t
                }(function e() {
                    return Reflect.construct(fe, [], e)
                }, {}, "document-register-element-a")
            } catch (e) {
                tt()
            }
        if (!e.noBuiltIn)
            try {
                if (Pe.call(c, "a", "a").outerHTML.indexOf("is") < 0)
                    throw {}
            } catch (e) {
                se = function(e) {
                    return {
                        is: e.toLowerCase()
                    }
                }
            }
    }(window);
    var Hn = 5e3
      , Nn = "callback";
    function Rn(t) {
        try {
            delete window[t]
        } catch (e) {
            window[t] = void 0
        }
    }
    function Dn(e) {
        var t = document.getElementById(e);
        t && document.getElementsByTagName("head")[0].removeChild(t)
    }
    window.fetchJsonp = function(o) {
        var a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
          , s = o
          , c = a.timeout || Hn
          , u = a.jsonpCallback || Nn
          , l = void 0;
        return new Promise(function(t, e) {
            var n = a.jsonpCallbackFunction || "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
              , r = u + "_" + n;
            window[n] = function(e) {
                t({
                    ok: !0,
                    json: function() {
                        return Promise.resolve(e)
                    }
                }),
                l && clearTimeout(l),
                Dn(r),
                Rn(n)
            }
            ,
            s += -1 === s.indexOf("?") ? "?" : "&";
            var i = document.createElement("script");
            i.setAttribute("src", "" + s + u + "=" + n),
            a.charset && i.setAttribute("charset", a.charset),
            i.id = r,
            document.getElementsByTagName("head")[0].appendChild(i),
            l = setTimeout(function() {
                e(new Error("JSONP request to " + o + " timed out")),
                Rn(n),
                Dn(r),
                window[n] = function() {
                    Rn(n)
                }
            }, c),
            i.onerror = function() {
                e(new Error("JSONP request to " + o + " failed")),
                Rn(n),
                Dn(r),
                l && clearTimeout(l)
            }
        }
        )
    }
    ;
    var Fn = "URLSearchParams"in self
      , qn = "Symbol"in self && "iterator"in Symbol
      , Bn = "FileReader"in self && "Blob"in self && function() {
        try {
            return new Blob,
            !0
        } catch (e) {
            return !1
        }
    }()
      , Un = "FormData"in self
      , zn = "ArrayBuffer"in self;
    if (zn)
        var Wn = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
          , Vn = ArrayBuffer.isView || function(e) {
            return e && -1 < Wn.indexOf(Object.prototype.toString.call(e))
        }
        ;
    function $n(e) {
        if ("string" != typeof e && (e = String(e)),
        /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
            throw new TypeError("Invalid character in header field name");
        return e.toLowerCase()
    }
    function Gn(e) {
        return "string" != typeof e && (e = String(e)),
        e
    }
    function Xn(t) {
        var e = {
            next: function() {
                var e = t.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        };
        return qn && (e[Symbol.iterator] = function() {
            return e
        }
        ),
        e
    }
    function Qn(t) {
        this.map = {},
        t instanceof Qn ? t.forEach(function(e, t) {
            this.append(t, e)
        }, this) : Array.isArray(t) ? t.forEach(function(e) {
            this.append(e[0], e[1])
        }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
            this.append(e, t[e])
        }, this)
    }
    function Jn(e) {
        if (e.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }
    function Yn(n) {
        return new Promise(function(e, t) {
            n.onload = function() {
                e(n.result)
            }
            ,
            n.onerror = function() {
                t(n.error)
            }
        }
        )
    }
    function Zn(e) {
        var t = new FileReader
          , n = Yn(t);
        return t.readAsArrayBuffer(e),
        n
    }
    function Kn(e) {
        if (e.slice)
            return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)),
        t.buffer
    }
    function er() {
        return this.bodyUsed = !1,
        this._initBody = function(e) {
            (this._bodyInit = e) ? "string" == typeof e ? this._bodyText = e : Bn && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Un && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Fn && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : zn && Bn && function(e) {
                return e && DataView.prototype.isPrototypeOf(e)
            }(e) ? (this._bodyArrayBuffer = Kn(e.buffer),
            this._bodyInit = new Blob([this._bodyArrayBuffer])) : zn && (ArrayBuffer.prototype.isPrototypeOf(e) || Vn(e)) ? this._bodyArrayBuffer = Kn(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
            this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Fn && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }
        ,
        Bn && (this.blob = function() {
            var e = Jn(this);
            if (e)
                return e;
            if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }
        ,
        this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? Jn(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(Zn)
        }
        ),
        this.text = function() {
            var e = Jn(this);
            if (e)
                return e;
            if (this._bodyBlob)
                return function(e) {
                    var t = new FileReader
                      , n = Yn(t);
                    return t.readAsText(e),
                    n
                }(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
                        n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }
        ,
        Un && (this.formData = function() {
            return this.text().then(rr)
        }
        ),
        this.json = function() {
            return this.text().then(JSON.parse)
        }
        ,
        this
    }
    Qn.prototype.append = function(e, t) {
        e = $n(e),
        t = Gn(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t
    }
    ,
    Qn.prototype.delete = function(e) {
        delete this.map[$n(e)]
    }
    ,
    Qn.prototype.get = function(e) {
        return e = $n(e),
        this.has(e) ? this.map[e] : null
    }
    ,
    Qn.prototype.has = function(e) {
        return this.map.hasOwnProperty($n(e))
    }
    ,
    Qn.prototype.set = function(e, t) {
        this.map[$n(e)] = Gn(t)
    }
    ,
    Qn.prototype.forEach = function(e, t) {
        for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }
    ,
    Qn.prototype.keys = function() {
        var n = [];
        return this.forEach(function(e, t) {
            n.push(t)
        }),
        Xn(n)
    }
    ,
    Qn.prototype.values = function() {
        var t = [];
        return this.forEach(function(e) {
            t.push(e)
        }),
        Xn(t)
    }
    ,
    Qn.prototype.entries = function() {
        var n = [];
        return this.forEach(function(e, t) {
            n.push([t, e])
        }),
        Xn(n)
    }
    ,
    qn && (Qn.prototype[Symbol.iterator] = Qn.prototype.entries);
    var tr = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function nr(e, t) {
        var n = (t = t || {}).body;
        if (e instanceof nr) {
            if (e.bodyUsed)
                throw new TypeError("Already read");
            this.url = e.url,
            this.credentials = e.credentials,
            t.headers || (this.headers = new Qn(e.headers)),
            this.method = e.method,
            this.mode = e.mode,
            this.signal = e.signal,
            n || null == e._bodyInit || (n = e._bodyInit,
            e.bodyUsed = !0)
        } else
            this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin",
        !t.headers && this.headers || (this.headers = new Qn(t.headers)),
        this.method = function(e) {
            var t = e.toUpperCase();
            return -1 < tr.indexOf(t) ? t : e
        }(t.method || this.method || "GET"),
        this.mode = t.mode || this.mode || null,
        this.signal = t.signal || this.signal,
        this.referrer = null,
        ("GET" === this.method || "HEAD" === this.method) && n)
            throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n)
    }
    function rr(e) {
        var i = new FormData;
        return e.trim().split("&").forEach(function(e) {
            if (e) {
                var t = e.split("=")
                  , n = t.shift().replace(/\+/g, " ")
                  , r = t.join("=").replace(/\+/g, " ");
                i.append(decodeURIComponent(n), decodeURIComponent(r))
            }
        }),
        i
    }
    function ir(e, t) {
        t || (t = {}),
        this.type = "default",
        this.status = void 0 === t.status ? 200 : t.status,
        this.ok = 200 <= this.status && this.status < 300,
        this.statusText = "statusText"in t ? t.statusText : "OK",
        this.headers = new Qn(t.headers),
        this.url = t.url || "",
        this._initBody(e)
    }
    nr.prototype.clone = function() {
        return new nr(this,{
            body: this._bodyInit
        })
    }
    ,
    er.call(nr.prototype),
    er.call(ir.prototype),
    ir.prototype.clone = function() {
        return new ir(this._bodyInit,{
            status: this.status,
            statusText: this.statusText,
            headers: new Qn(this.headers),
            url: this.url
        })
    }
    ,
    ir.error = function() {
        var e = new ir(null,{
            status: 0,
            statusText: ""
        });
        return e.type = "error",
        e
    }
    ;
    var or = [301, 302, 303, 307, 308];
    ir.redirect = function(e, t) {
        if (-1 === or.indexOf(t))
            throw new RangeError("Invalid status code");
        return new ir(null,{
            status: t,
            headers: {
                location: e
            }
        })
    }
    ;
    var ar = self.DOMException;
    try {
        new ar
    } catch (e) {
        (ar = function(e, t) {
            this.message = e,
            this.name = t;
            var n = Error(e);
            this.stack = n.stack
        }
        ).prototype = Object.create(Error.prototype),
        ar.prototype.constructor = ar
    }
    function sr(o, a) {
        return new Promise(function(n, e) {
            var t = new nr(o,a);
            if (t.signal && t.signal.aborted)
                return e(new ar("Aborted","AbortError"));
            var r = new XMLHttpRequest;
            function i() {
                r.abort()
            }
            r.onload = function() {
                var e = {
                    status: r.status,
                    statusText: r.statusText,
                    headers: function(e) {
                        var i = new Qn;
                        return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                            var t = e.split(":")
                              , n = t.shift().trim();
                            if (n) {
                                var r = t.join(":").trim();
                                i.append(n, r)
                            }
                        }),
                        i
                    }(r.getAllResponseHeaders() || "")
                };
                e.url = "responseURL"in r ? r.responseURL : e.headers.get("X-Request-URL");
                var t = "response"in r ? r.response : r.responseText;
                n(new ir(t,e))
            }
            ,
            r.onerror = function() {
                e(new TypeError("Network request failed"))
            }
            ,
            r.ontimeout = function() {
                e(new TypeError("Network request failed"))
            }
            ,
            r.onabort = function() {
                e(new ar("Aborted","AbortError"))
            }
            ,
            r.open(t.method, t.url, !0),
            "include" === t.credentials ? r.withCredentials = !0 : "omit" === t.credentials && (r.withCredentials = !1),
            "responseType"in r && Bn && (r.responseType = "blob"),
            t.headers.forEach(function(e, t) {
                r.setRequestHeader(t, e)
            }),
            t.signal && (t.signal.addEventListener("abort", i),
            r.onreadystatechange = function() {
                4 === r.readyState && t.signal.removeEventListener("abort", i)
            }
            ),
            r.send(void 0 === t._bodyInit ? null : t._bodyInit)
        }
        )
    }
    sr.polyfill = !0,
    self.fetch || (self.fetch = sr,
    self.Headers = Qn,
    self.Request = nr,
    self.Response = ir);
    var cr = e(function(t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function r(e) {
            return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(e) {
                return n(e)
            }
            : t.exports = r = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
            }
            ,
            r(e)
        }
        t.exports = r
    });
    var ur = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    };
    function lr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var fr = function(e, t, n) {
        return t && lr(e.prototype, t),
        n && lr(e, n),
        e
    }
      , dr = /\s+/
      , hr = function() {
        function o(e) {
            ur(this, o),
            e && (e.context && this.setEventContext(e.context),
            e.createEventCallback && (this._createEventCallback = e.createEventCallback),
            e.removeEventCallback && (this._removeEventCallback = e.removeEventCallback),
            e.bindEventCallback && (this._bindEventCallback = e.bindEventCallback))
        }
        return fr(o, [{
            key: "on",
            value: function(e, t) {
                return pr(this, this.on, e, t) || (this._getEvent(e).push(t),
                this._bindEventCallback(e, t)),
                this
            }
        }, {
            key: "off",
            value: function(e, t) {
                if (!e)
                    return t || this.off(Object.keys(this.__events).join(" "), t),
                    null;
                if (pr(this, this.off, e, t))
                    return null;
                var n;
                if (t) {
                    var r = (n = this._getEvent(e)).indexOf(t);
                    -1 < r && n.splice(r, 1)
                }
                return (!t || n && 0 === n.length) && (delete this.__events[e],
                this._removeEventCallback(e)),
                e ? this.__events && this.__events[e] : null
            }
        }, {
            key: "once",
            value: function(e, t) {
                var n = t.bind(this)
                  , r = this;
                return n.__once = !0,
                this.on(e, n),
                function() {
                    r.off(e, n),
                    n = r = null
                }
            }
        }, {
            key: "trigger",
            value: function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                if (!pr(this, this.trigger, e, t))
                    for (var n = this._getEvent(e), r = this.__eventContext || this, i = 0; i < n.length; i++)
                        n[i].apply(r, t),
                        n[i].__once && n.splice(i, 1)
            }
        }, {
            key: "setEventContext",
            value: function(e) {
                this.__eventContext = e || this
            }
        }, {
            key: "_getEvent",
            value: function(e) {
                return this.__events || (this.__events = {}),
                this.__events[e] || (this.__events[e] = [],
                this._createEventCallback(e, this.__events[e])),
                this.__events[e]
            }
        }, {
            key: "_createEventCallback",
            value: function(e, t) {}
        }, {
            key: "_removeEventCallback",
            value: function(e) {}
        }, {
            key: "_bindEventCallback",
            value: function(e, t) {}
        }], [{
            key: "mixin",
            value: function(e) {
                for (var t = ["on", "off", "once", "trigger", "setEventContext", "_bindEventCallback", "_createEventCallback", "_getEvent", "_removeEventCallback"], n = 0, r = t.length; n < r; n++) {
                    var i = t[n];
                    e[i] || (e[i] = o.prototype[i])
                }
                return e
            }
        }]),
        o
    }();
    function pr(e, t, n, r) {
        if (dr.test(n)) {
            for (var i = n.split(dr), o = "function" != typeof r, a = 0; a < i.length; a++)
                o ? t.apply(e, [i[a]].concat(r)) : t.call(e, i[a], r);
            return !0
        }
        return !1
    }
    var vr = function() {
        function t(e) {
            ur(this, t),
            this.element = e,
            this.init && this.init()
        }
        return fr(t, [{
            key: "connectedCallback",
            value: function() {}
        }, {
            key: "disconnectedCallback",
            value: function() {}
        }, {
            key: "attributeChangedCallback",
            value: function() {}
        }, {
            key: "firstInviewCallback",
            value: function() {}
        }, {
            key: "viewportCallback",
            value: function() {}
        }, {
            key: "prerenderAllowed",
            value: function() {
                return !1
            }
        }, {
            key: "hasResources",
            value: function() {
                return !1
            }
        }, {
            key: "build",
            value: function() {
                this.buildCallback()
            }
        }, {
            key: "buildCallback",
            value: function() {}
        }, {
            key: "unlayoutCallback",
            value: function() {
                return !1
            }
        }, {
            key: "createPlaceholderCallback",
            value: function() {
                return null
            }
        }, {
            key: "layoutCallback",
            value: function() {
                return Promise.resolve()
            }
        }, {
            key: "firstLayoutCompleted",
            value: function() {}
        }, {
            key: "togglePlaceholder",
            value: function(e) {
                this.element.togglePlaceholder(e)
            }
        }, {
            key: "isLoadingEnabled",
            value: function() {
                return !1
            }
        }, {
            key: "applyFillContent",
            value: function(e, t) {
                e.classList.add("mip-fill-content"),
                t && e.classList.add("mip-replaced-content")
            }
        }, {
            key: "expendAttr",
            value: function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (this.element.hasAttribute(r)) {
                        var i = this.element.getAttribute(r);
                        t.setAttribute ? t.setAttribute(r, i) : t[r] = i
                    }
                }
                return t
            }
        }, {
            key: "addEventAction",
            value: function() {
                var e = this._actionEvent;
                e || (e = this._actionEvent = new hr).setEventContext(this),
                e.on.apply(e, arguments)
            }
        }, {
            key: "executeEventAction",
            value: function(e) {
                var t = this._actionEvent;
                return !!e && (!(!t || !t.__events[e.handler]) && (t.trigger(e.handler, e.event, e.arg),
                !0))
            }
        }, {
            key: "resourcesComplete",
            value: function() {
                this.element.resourcesComplete()
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return []
            }
        }]),
        t
    }();
    var mr = function(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    };
    var yr = function(e, t) {
        return !t || "object" !== cr(t) && "function" != typeof t ? mr(e) : t
    }
      , gr = e(function(t) {
        function n(e) {
            return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            n(e)
        }
        t.exports = n
    })
      , wr = e(function(n) {
        function r(e, t) {
            return n.exports = r = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            r(e, t)
        }
        n.exports = r
    });
    var br = function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && wr(e, t)
    };
    function Er(e, t) {
        var n, r, i, o = 0;
        function a() {
            i = 0,
            o = Date.now(),
            e.apply(n, r)
        }
        return !t && (t = 10),
        function() {
            var e = Date.now() - o;
            n = this,
            r = arguments,
            clearTimeout(i),
            t <= e ? a() : i = setTimeout(a, t - e)
        }
    }
    function kr(t) {
        var r, i, o, a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, s = 0;
        function c() {
            o = 0;
            var e = a - (Date.now() - s);
            0 < e ? o = setTimeout(c, e) : t.apply(r, i)
        }
        return function() {
            s = Date.now(),
            r = this;
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            i = t,
            o || (o = setTimeout(c, a))
        }
    }
    function Sr(e) {
        for (var t = Object.keys(e), n = t.length, r = [], i = 0; i < n; i++)
            r.push(e[t[i]]);
        return r
    }
    function Pr(e) {
        return !!e && "object" === cr(e) && Object.getPrototypeOf(e) === Object.prototype
    }
    function _r(e) {
        return "[object Object]" === Ir(e)
    }
    function xr(e) {
        return 0 === Object.keys(e).length
    }
    function Ir(e) {
        return Object.prototype.toString.call(e)
    }
    function Lr(e, t, n) {
        for (var r in t)
            if (n) {
                if (Pr(t[r]))
                    !Pr(e[r]) && (e[r] = {});
                else {
                    if (!Array.isArray(t[r])) {
                        void 0 !== t[r] && (e[r] = t[r]);
                        continue
                    }
                    !Array.isArray(e[r]) && (e[r] = [])
                }
                Lr(e[r], t[r], n)
            } else
                void 0 !== t[r] && (e[r] = t[r])
    }
    function Ar(e) {
        var t = "boolean" == typeof e
          , n = !1;
        t && (n = e,
        e = arguments[1]);
        for (var r = t ? 2 : 1; r < arguments.length; r++)
            Lr(e, arguments[r], n);
        return e
    }
    function Tr(e) {
        return "[object String]" === Ir(e)
    }
    function Cr(t, n) {
        if (t && t[n])
            try {
                delete t[n]
            } catch (e) {
                t[n] = void 0
            }
    }
    function Mr() {
        return "ontouchstart"in window || void 0 !== window.navigator.maxTouchPoints && 0 < window.navigator.maxTouchPoints || void 0 !== window.DocumentTouch
    }
    function Or(e) {
        return /mipcache.bdstatic.com/.test(e) || /^(\/\/|http:\/\/|https:\/\/)[^.]+.mipcdn.com\/(stati)?c\//.test(e)
    }
    function jr(t) {
        if (!t)
            return "";
        if (/^iframe-shell/.test(t))
            return t;
        try {
            return JSON.parse(t).rootName
        } catch (e) {
            return t
        }
    }
    function Hr(r) {
        var i = Object.create(null);
        return function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return i[t[0]] || (i[t[0]] = r.apply(this, t))
        }
    }
    var Nr = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout.bind(window);
    function Rr() {}
    function Dr(e, t) {
        for (var n = [e]; n.length; ) {
            var r = t(n.pop());
            if (Array.isArray(r)) {
                var i = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var s, c = r[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                        var u = s.value;
                        n.push(u)
                    }
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
            }
        }
    }
    function Fr(e, t) {
        if (e === t)
            return !0;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (var i = 0, o = n; i < o.length; i++) {
            var a = o[i];
            if (e[a] !== t[a])
                return !1
        }
        return !0
    }
    function qr(e, t) {
        if (!t.length)
            return e;
        for (var n = {}, r = 0, i = Object.keys(e); r < i.length; r++) {
            var o = i[r];
            -1 === t.indexOf(o) && (n[o] = e[o])
        }
        return n
    }
    function Br(e, t) {
        return e.slice(0, t.length) === t
    }
    var Ur = Object.freeze({
        throttle: Er,
        debounce: kr,
        values: Sr,
        isPlainObject: Pr,
        isObject: _r,
        isEmptyObject: xr,
        getType: Ir,
        extend: Ar,
        pick: function(e) {
            var t = arguments[1]
              , n = {};
            Array.isArray(t) || (t = Array.prototype.slice.call(arguments, 1));
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i in e && (n[i] = e[i])
            }
            return n
        },
        isString: Tr,
        del: Cr,
        hasTouch: Mr,
        isCacheUrl: Or,
        getRootName: jr,
        raf: Nr,
        memoize: Hr,
        noop: Rr,
        traverse: Dr,
        isPlainObjectEqual: Fr,
        complement: qr,
        startsWith: Br
    })
      , zr = new (function() {
        function e() {
            ur(this, e),
            this.isIos = !1,
            this.isIOS = !1,
            this.isAndroid = !1,
            this.isWechatApp = !1,
            this.isBaiduApp = !1,
            this.isWeiboApp = !1,
            this.isQQApp = !1,
            this.isAlipayApp = !1,
            this.isUc = !1,
            this.isBaidu = !1,
            this.isQQ = !1,
            this.isAdr = !1,
            this.isSafari = !1,
            this.isChrome = !1,
            this.isFireFox = !1,
            this.isFirefox = !1,
            this.isTrident = !1,
            this.isGecko = !1,
            this.isWebkit = !1,
            this.start()
        }
        return fr(e, [{
            key: "_matchOs",
            value: function() {
                /iPhone|iPad|iPod/i.test(this._ua()) ? (this.isIos = !0,
                this.isIOS = !0) : /Android/i.test(this._ua()) && (this.isAndroid = !0)
            }
        }, {
            key: "_matchBrowser",
            value: function() {
                var e = this._ua().split("Mobile")
                  , t = e && 1 < e.length ? e[1] : null;
                /\bmicromessenger\/([\d.]+)/i.test(t) ? this.isWechatApp = !0 : /baiduboxapp/i.test(t) ? this.isBaiduApp = !0 : /weibo/i.test(t) ? this.isWeiboApp = !0 : /\sQQ/i.test(t) ? this.isQQApp = !0 : /\sAlipay/i.test(t) ? this.isAlipayApp = !0 : /UCBrowser/i.test(this._ua()) ? this.isUc = !0 : /baidubrowser/i.test(this._ua()) ? this.isBaidu = !0 : /qqbrowser\/([0-9.]+)/i.test(this._ua()) ? this.isQQ = !0 : !/android/i.test(this._ua()) && /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//i.test(this._ua()) ? this.isSafari = !0 : /(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/i.test(this._ua()) && !/samsung/i.test(this._ua()) ? this.isChrome = !0 : /(firefox|FxiOS+)\/([0-9.ab]+)/i.test(this._ua()) ? (this.isFireFox = !0,
                this.isFirefox = !0) : /android/i.test(this._ua()) && /Android[\s_\-/i686]?[\s_\-/](\d+[.\-_]\d+[.\-_]?\d*)/i.test(this._ua()) && (this.isAdr = !0)
            }
        }, {
            key: "_matchEngine",
            value: function() {
                /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/i.test(this._ua()) ? this.isTrident = !0 : /\brv:([\d\w.]+).*\bgecko\/(\d+)/i.test(this._ua()) ? this.isGecko = !0 : /\bapplewebkit[/]?([0-9.+]+)/i.test(this._ua()) && (this.isWebkit = !0)
            }
        }, {
            key: "getOsVersion",
            value: function() {
                var e, t;
                return this.isAndroid() ? (t = /Android ([._\d]+)/.exec(this._ua()) || /Android\/([\d.]+)/.exec(this._ua())) && 1 < t.length && (e = t[1]) : this.isIOS() && (t = /OS (\d+)_(\d+)_?(\d+)?/.exec(this._appVersion())) && 3 < t.length && (e = t[1] + "." + t[2] + "." + (0 | t[3])),
                e
            }
        }, {
            key: "_wrapFun",
            value: function() {
                var e = this;
                for (var t in e)
                    if (e.hasOwnProperty(t) && "function" != typeof e[t]) {
                        var n = function(e) {
                            return e
                        }
                        .bind(null, e[t]);
                        e[t] = n
                    }
                e.needSpecialScroll = e.isIOS() && window !== top
            }
        }, {
            key: "_ua",
            value: function() {
                return navigator.userAgent
            }
        }, {
            key: "_appVersion",
            value: function() {
                return navigator.appVersion
            }
        }, {
            key: "_start",
            value: function() {
                return this._matchOs(),
                this._matchBrowser(),
                this._matchEngine(),
                this._wrapFun(),
                this
            }
        }, {
            key: "start",
            value: function() {
                this._start()
            }
        }]),
        e
    }())
      , Wr = document.documentElement
      , Vr = /^mip-/
      , $r = Wr.matches || Wr.webkitMatchesSelector || Wr.mozMatchesSelector || Wr.oMatchesSelector || Wr.msMatchesSelector || Wr.matchesSelector;
    function Gr(e, t) {
        return !(!e || 1 !== e.nodeType) && $r.call(e, t)
    }
    var Xr = Wr.closest ? function(e, t) {
        return e.closest(t)
    }
    : function(e, t) {
        for (; e; ) {
            if (Gr(e, t))
                return e;
            e = e.parentNode
        }
        return null
    }
      , Qr = Wr.contains ? function(e, t) {
        return e && e.contains(t)
    }
    : function(e, t) {
        for (e === document && (e = document.documentElement || document.body.parentElement); t; ) {
            if (e === t)
                return !0;
            t = t.parentElement
        }
        return !1
    }
    ;
    var Jr = document.createElement("div");
    function Yr(e) {
        return function(e, t, n) {
            if (t(e))
                n();
            else {
                var r = e.ownerDocument.defaultView;
                if (r.MutationObserver) {
                    var i = new r.MutationObserver(function() {
                        t(e) && (i.disconnect(),
                        n())
                    }
                    );
                    i.observe(e, {
                        childList: !0
                    })
                } else
                    var o = r.setInterval(function() {
                        t(e) && (r.clearInterval(o),
                        n())
                    }, 5)
            }
        }(document.documentElement, function(e) {
            return !!e.ownerDocument.body
        }, e)
    }
    function Zr(t) {
        return new Promise(function(e) {
            return function(t, n, r) {
                var i = n(t);
                i ? r(t) : t.addEventListener("readystatechange", function e() {
                    n(t) && (i || (i = !0,
                    r(t)),
                    t.removeEventListener("readystatechange", e))
                })
            }(t, function(e) {
                return "loading" !== e.readyState
            }, e)
        }
        )
    }
    var Kr, ei, ti, ni, ri = {
        closest: Xr,
        closestTo: function(e, t, n) {
            var r = Xr(e, t);
            return Qr(n, r) ? r : null
        },
        matches: Gr,
        contains: Qr,
        create: function(e) {
            if (Jr.innerHTML = e,
            !Jr.children.length)
                return null;
            var t = Array.prototype.slice.call(Jr.children);
            return Jr.innerHTML = "",
            1 < t.length ? t : t[0]
        },
        insert: function(e, t) {
            if (e && t) {
                var n = Array.prototype.slice.call(t);
                0 === n.length && n.push(t);
                for (var r = 0; r < n.length; r++)
                    this.contains(n[r], e) || n[r] !== e && e.appendChild && e.appendChild(n[r])
            }
        },
        whenBodyAvailable: Yr,
        waitDocumentReady: Yr
    }, ii = document.documentElement, oi = Math.round;
    function ai(e) {
        if (zr.needSpecialScroll && window !== window.top) {
            var t = document.createElement("div");
            return t.style.cssText = e ? "position:absolute;width:0;height:0;visibility:hidden;" : "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;",
            Kr.appendChild(t),
            t
        }
        return null
    }
    Yr(function() {
        Kr = document.body,
        ei = ai(),
        ti = ai(),
        ni = ai(!0)
    });
    var si = {
        get: function(e, t, n, r) {
            return {
                left: e = oi(e),
                top: t = oi(t),
                width: n = oi(n),
                height: r = oi(r),
                right: e + n,
                bottom: t + r
            }
        },
        scrollingElement: document.scrollingElement || zr.isWebkit() && Kr || ii,
        getElementRect: function(e) {
            var t = e.getBoundingClientRect();
            return this.get(t.left + this.getScrollLeft(), t.top + this.getScrollTop(), t.width, t.height)
        },
        getElementOffset: function(e) {
            var t = e.getBoundingClientRect();
            return {
                left: oi(t.left),
                top: oi(t.top),
                width: oi(t.width),
                height: oi(t.height)
            }
        },
        getScrollLeft: function() {
            return oi(ei && -ei.getBoundingClientRect().left || this.scrollingElement.scrollLeft || window.pageXOffset || 0)
        },
        getScrollTop: function() {
            return oi(ei && -ei.getBoundingClientRect().top || this.scrollingElement.scrollTop || window.pageYOffset || 0)
        },
        setScrollTop: function(e) {
            ti ? (ti.style.top = e + "px",
            setTimeout(function() {
                return ti.scrollIntoView(!0)
            }, 0)) : this.scrollingElement.scrollTop = e
        },
        getScrollHeight: function() {
            return ni && ni !== Kr.lastElementChild && Kr.appendChild(ni),
            oi(ni ? ni.offsetTop : this.scrollingElement.scrollHeight)
        },
        getScrollWidth: function() {
            return window.innerWidth
        },
        overlapping: function(e, t) {
            return e.top <= t.bottom && t.top <= e.bottom && e.left <= t.right && t.left <= e.right
        }
    };
    var ci = new (function() {
        function n() {
            ur(this, n),
            this.ssEnabled = function() {
                var e = !1;
                try {
                    window.sessionStorage.setItem("_t", 1),
                    window.sessionStorage.removeItem("_t"),
                    e = !0
                } catch (e) {}
                return e
            }(),
            this.pageId = window.location.href.split("#").shift();
            var e = window.location.hash;
            this.ssEnabled && (e = (window.sessionStorage.getItem(this.pageId) || "") + e);
            if (this.hashTree = this._getHashObj(e),
            e) {
                var t = this._getHashValue();
                this.ssEnabled && window.sessionStorage.setItem(this.pageId, t),
                window.location.hash = t
            }
            this.bindAnchor()
        }
        return fr(n, [{
            key: "get",
            value: function(e) {
                var t = this.hashTree[e];
                return t && t.value ? t.value : ""
            }
        }, {
            key: "bindAnchor",
            value: function() {
                var e = this.hashTree.mipanchor;
                if (e && e.value)
                    if ("loading" !== document.readyState)
                        this.scrollToAnchor(e);
                    else {
                        var t = this.scrollToAnchor.bind(null, e);
                        document.addEventListener("DOMContentLoaded", t, !1)
                    }
            }
        }, {
            key: "scrollToAnchor",
            value: function(e) {
                var t = document.getElementById(e.value);
                if (t) {
                    var n = si.getElementOffset(t);
                    t && n.top && si.setScrollTop(n.top)
                }
            }
        }, {
            key: "refreshHashTree",
            value: function() {
                var e = window.location.hash;
                this.hashTree = this._getHashObj(e)
            }
        }, {
            key: "_getHashObj",
            value: function(e) {
                var t = {};
                if (!e)
                    return t;
                var n = e.slice(e.indexOf("#") + 1).split("&");
                for (var r in n)
                    if (n.hasOwnProperty(r)) {
                        var i = n[r]
                          , o = i
                          , a = ""
                          , s = i.indexOf("=");
                        if (0 === s)
                            continue;
                        -1 !== s && (o = i.substring(0, s),
                        a = i.slice(s + 1)),
                        t[o] = {
                            value: a,
                            sep: -1 !== s ? "=" : ""
                        }
                    }
                return t
            }
        }, {
            key: "_getHashValue",
            value: function() {
                var e = []
                  , t = this.hashTree;
                for (var n in t)
                    if ("prerender" !== n && t.hasOwnProperty(n)) {
                        var r = t[n].value;
                        r = n + t[n].sep + r,
                        e.push(r)
                    }
                return e.join("&")
            }
        }]),
        n
    }());
    var ui = {};
    function li(e, t, n, r) {
        return e.addEventListener(t, n, r),
        function() {
            return e.removeEventListener(t, n)
        }
    }
    function fi(e, t, n, r) {
        var i = li(e, t, function(e) {
            i(),
            n(e)
        }, r);
        return i
    }
    ui.click = ui.mousedown = ui.mouseup = ui.mousemove = "MouseEvents";
    var di = {
        delegate: function(e, r, t, i, n) {
            function o(e) {
                var t = e.target
                  , n = ri.closestTo(t, r, this);
                n && i.call(n, e)
            }
            return n = !!n,
            e.addEventListener(t, o, n),
            function() {
                e.removeEventListener(t, o),
                o = e = i = null
            }
        },
        create: function(e, t) {
            var n = document.createEvent(ui[e] || "Event");
            return n.initEvent(e, !0, !0),
            t && (n.data = t),
            n
        },
        loadPromise: function(r) {
            return function(e) {
                return !!(e.complete || "complete" === e.readyState || e.document && "complete" === e.document.readyState)
            }(r) ? Promise.resolve(r) : new Promise(function(e, t) {
                var n = r.tagName;
                fi(r, "AUDIO" === n || "VIDEO" === n ? "loadstart" : "load", e),
                n && fi(r, "error", t)
            }
            )
        },
        listenOnce: fi,
        listen: li
    };
    var hi = function(e) {
        if (Array.isArray(e))
            return e
    };
    var pi = function(e, t) {
        var n = []
          , r = !0
          , i = !1
          , o = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
            !t || n.length !== t); r = !0)
                ;
        } catch (e) {
            i = !0,
            o = e
        } finally {
            try {
                r || null == s.return || s.return()
            } finally {
                if (i)
                    throw o
            }
        }
        return n
    };
    var vi = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    };
    var mi = function(e, t) {
        return hi(e) || pi(e, t) || vi()
    }
      , yi = Hr(function(e) {
        return e.replace(/-[a-z]/g, function(e) {
            return e[1].toUpperCase()
        })
    })
      , gi = Hr(function(e) {
        return e.replace(/^[a-z]/, function(e) {
            return e.toUpperCase()
        })
    })
      , wi = Hr(function(e) {
        return e.replace(/\B[A-Z]/g, function(e) {
            return "-".concat(e.toLowerCase())
        })
    })
      , bi = Hr(function(e) {
        return e.replace(/[A-Z]/g, function(e) {
            return "-".concat(e.toLowerCase())
        })
    })
      , Ei = Object.freeze({
        camelize: yi,
        capitalize: gi,
        hyphenate: wi,
        kebabize: bi
    })
      , ki = /(?:(^-)|-)+(.)?/g
      , Si = document.createElement("div")
      , Pi = ["webkit", "moz", "ms", "o", "Webkit", "Moz", "O"]
      , _i = {};
    function xi(e) {
        if (e = e.replace(ki, function(e, t, n) {
            return t ? n : n.toUpperCase()
        }),
        _i[e])
            return _i[e];
        var t;
        if (!(e in Si.style))
            for (var n = 0; n < Pi.length; n++) {
                var r = Pi[n] + e.charAt(0).toUpperCase() + e.slice(1);
                if (r in Si.style) {
                    t = r;
                    break
                }
            }
        return _i[e] = t || e,
        _i[e]
    }
    var Ii = /^\d+([a-zA-Z]+)/
      , Li = {};
    function Ai(e, t) {
        if (t !== +t)
            return t;
        if (Li[e])
            return t + Li[e];
        Si.style[e] = 0;
        var n = Si.style[e]
          , r = n.match && n.match(Ii);
        return r ? t + (Li[e] = r[1]) : t
    }
    function Ti(e, t, n) {
        if (!t || !e)
            return e;
        if (e.length && e[0]) {
            if (t && void 0 !== n) {
                for (var r = 0; r < e.length; r++) {
                    Ti(e[r], t, n)
                }
                return e
            }
            for (var i = [], o = 0; o < e.length; o++)
                i.push(Ti(e[o], t));
            return i
        }
        if (!e.nodeType)
            return e;
        var a, s = e;
        if ("string" == typeof t && void 0 === n)
            return t = xi(t),
            s.style[t] || document.defaultView.getComputedStyle(s)[t];
        if ("string" == typeof t)
            a = xi(t),
            s.style[a] = Ai(a, n);
        else
            for (var c in t)
                n = t[c],
                a = xi(c),
                s.style[a] = Ai(a, n);
        return s
    }
    function Ci(e) {
        return /^[A-Z]/.test(e)
    }
    function Mi(t) {
        var e = Object.keys(t).map(function(e) {
            return function(t, e) {
                if (Array.isArray(e))
                    return e.map(function(e) {
                        return "".concat(t, ":").concat(e)
                    }).join(";");
                return "".concat(t, ":").concat(e)
            }(function(e) {
                if (!Ci(e))
                    for (var t = 0, n = Pi; t < n.length; t++) {
                        var r = n[t];
                        if (Br(e, r) && Ci(e[r.length])) {
                            e = gi(e);
                            break
                        }
                    }
                return bi(e)
            }(e), t[e])
        }).join(";");
        return e && e + ";" || e
    }
    var Oi, ji, Hi, Ni, Ri, Di, Fi, qi = function(e) {
        function r() {
            var e;
            return ur(this, r),
            (e = yr(this, gr(r).call(this))).steps = [],
            e._index = -1,
            e.canceled = !1,
            e
        }
        return br(r, hr),
        fr(r, [{
            key: "start",
            value: function(e) {
                return e && this.on("end", e),
                this.trigger("start"),
                this.next(),
                this
            }
        }, {
            key: "next",
            value: function() {
                this.canceled || (this._index++,
                this._index >= this.steps.length ? this.trigger("end") : this.steps[this._index].call(this))
            }
        }, {
            key: "cancel",
            value: function() {
                this.canceled = !0
            }
        }], [{
            key: "register",
            value: function(t, n) {
                r[t] = function() {
                    var e = new r;
                    return e[t].apply(e, arguments),
                    e
                }
                ,
                r.prototype[t] = function() {
                    var e = this
                      , t = Array.prototype.slice.call(arguments, 0);
                    return t.unshift(this.next.bind(this)),
                    this.steps.push(function() {
                        return n.apply(e, t)
                    }),
                    this
                }
            }
        }]),
        r
    }();
    qi.register("p", function(t) {
        var e = Array.prototype.slice.call(arguments, 1)
          , n = e.length;
        e.forEach(function(e) {
            return e.start(function() {
                return 0 == n-- && t()
            })
        })
    }),
    qi.register("done", function(e, t) {
        t(e)
    }),
    qi.tool = function() {
        var e = ""
          , t = ""
          , i = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
        }
          , o = document.createElement("div");
        function a(e) {
            return e.replace(/([A-Z])/g, "-$1").toLowerCase()
        }
        if (void 0 === o.style.transform)
            for (var n in i)
                if (void 0 !== o.style[n + "TransitionProperty"]) {
                    e = "-" + n.toLowerCase() + "-",
                    t = i[n];
                    break
                }
        return {
            prefix: e,
            dasherize: a,
            normalizeEvent: function(e) {
                return t ? t + e : e.toLowerCase()
            },
            off: void 0 === t && void 0 === o.style.transitionProperty,
            setCss: function(e, t) {
                var n = "";
                for (var r in t)
                    t[r] || 0 === t[r] ? n += a(r) + ":" + t[r] + ";" : e.style.removeProperty(a(r));
                e.style.cssText += ";" + n
            },
            handleUnit: function(e, t) {
                if (t !== +t)
                    return t;
                o.style[e] = 0;
                var n = o.style[e]
                  , r = n.match && n.match(/^\d+([a-zA-Z]+)/);
                return r ? t + r[1] : t
            },
            getPropName: function(e) {
                var t;
                if (void 0 !== o.style[e])
                    t = e;
                else
                    for (var n in i) {
                        var r = "-" + i[n] + "-";
                        if (void 0 !== o.style[r + e]) {
                            t = r + e;
                            break
                        }
                    }
                return t
            }
        }
    }(),
    qi.transition = (Oi = qi.tool.prefix,
    ji = Oi + "transition-property",
    Hi = Oi + "transition-duration",
    Ni = Oi + "transition-delay",
    Ri = Oi + "transition-timing-function",
    Di = qi.tool.normalizeEvent("TransitionEnd"),
    (Fi = {})[ji] = "",
    Fi[Hi] = "",
    Fi[Ni] = "",
    Fi[Ri] = "",
    function(n, e) {
        var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        if (n && "[object Object]" === Object.prototype.toString.call(e)) {
            t = t || {};
            var r = parseInt(t.duration, 10) || 400
              , i = -1 < ["ease", "linear", "ease-in", "ease-out", "ease-in-out"].indexOf(t.ease) ? t.ease : "ease"
              , o = parseInt(t.delay, 10) || 0
              , a = "function" == typeof t.cb ? t.cb : function() {}
              , s = n.getAttribute("data-naboo");
            s !== +s && (s = 0),
            n.setAttribute("data-naboo", s + 1),
            qi.tool.off && (r = 0),
            r = Math.max(r, 0),
            r /= 1e3,
            o /= 1e3;
            var c = []
              , u = {};
            for (var l in e)
                if (e.hasOwnProperty(l)) {
                    var f = l;
                    l = qi.tool.getPropName(l);
                    var d = qi.tool.handleUnit(l, e[f]);
                    u[l] = d,
                    c.push(qi.tool.dasherize(l))
                }
            if (0 < r) {
                var h = n.style[ji];
                h && (h += ", "),
                u[ji] = h + c.join(", ");
                var p = n.style[Hi];
                (p || 0 === parseInt(p, 10)) && (p += ", "),
                u[Hi] = p + r + "s";
                var v = n.style[Ri];
                v && (v += ", "),
                u[Ri] = v + i;
                var m = n.style[Ni];
                (m || 0 === parseInt(m, 10)) && (m += ", "),
                u[Ni] = m + o + "s"
            }
            var y = !1
              , g = qi.tool.setCss
              , w = function e(t) {
                if (!t || t.elapsedTime === r + o) {
                    if (void 0 !== t) {
                        if (t.target !== t.currentTarget)
                            return;
                        t.target.removeEventListener(Di, e)
                    } else
                        n.removeEventListener(Di, e);
                    y = !0,
                    n.setAttribute("data-naboo", +n.getAttribute("data-naboo") - 1),
                    0 == +n.getAttribute("data-naboo") && g(n, Fi),
                    a && a()
                }
            };
            0 < r && n.addEventListener(Di, w),
            setTimeout(function() {
                return !y && w()
            }, 1e3 * (r + o) + 25),
            n.clientLeft,
            g(n, u)
        }
    }
    ),
    qi.register("animate", function(e, t, n, r) {
        var i = (r = r || {}).cb;
        r.cb = function() {
            i && i(),
            e()
        }
        ,
        r.mode = -1 < ["transition"].indexOf(r.mode) ? r.mode : "transition",
        qi[r.mode](t, n, r)
    });
    var Bi = 4
      , Ui = {
        start: 1,
        wait: 2,
        pending: 3,
        end: Bi,
        hold: 5
    }
      , zi = {
        0: "",
        1: "up",
        2: "right",
        3: "down",
        4: "left"
    }
      , Wi = {}
      , Vi = {}
      , $i = function() {
        function n(e) {
            ur(this, n),
            this._state = 1,
            this.gesture = e,
            this.conflictList = {},
            this.name = "",
            this.needAutoReset = !0,
            this.level = 0
        }
        return fr(n, [{
            key: "recognize",
            value: function(e) {
                if ("start" === e.eventState && 5 === this._state && (this._state = 1,
                this.needAutoReset && this.reset()),
                5 !== this._state) {
                    var t = this.process(e);
                    5 !== this._state && (this._state = t,
                    this.emitCheck() && this.emit(e))
                }
            }
        }, {
            key: "isState",
            value: function() {
                for (var e = arguments, t = 0; t < e.length; t++) {
                    if (("string" == typeof e[t] ? Ui[e[t]] : e[t]) === this._state)
                        return !0
                }
                return !1
            }
        }, {
            key: "setState",
            value: function(e) {
                return 0 < (e = "string" == typeof e ? Ui[e] : e) && e < 6 && (this._state = e),
                this._state
            }
        }, {
            key: "emitCheck",
            value: function() {
                if (1 === this._state || 5 === this._state)
                    return !1;
                for (var e in this.conflictList) {
                    if (this.conflictList[e].level > this.level && 5 !== this.conflictList[e].state)
                        return !1
                }
                return !0
            }
        }, {
            key: "process",
            value: function(e) {
                return this._state
            }
        }, {
            key: "emit",
            value: function(e) {}
        }, {
            key: "reset",
            value: function() {}
        }, {
            key: "hold",
            value: function() {
                return this._state = 5,
                this._state
            }
        }, {
            key: "trigger",
            value: function(e) {
                this.gesture.trigger(e.type, e.event, e)
            }
        }, {
            key: "eventList",
            get: function() {
                return this._eventList || []
            },
            set: function(e) {
                this._eventList = e
            }
        }], [{
            key: "register",
            value: function(e, t) {
                !e.conflictList && (e.conflictList = []),
                e.recName = e.prototype.recName = t;
                for (var n = (Wi[t] = e).prototype.eventList, r = 0; r < n.length; r++)
                    Vi[n[r]] = e
            }
        }, {
            key: "getConflictList",
            value: function(e) {
                return Wi[e] && Wi[e].conflictList
            }
        }, {
            key: "get",
            value: function(e) {
                return Wi[e]
            }
        }, {
            key: "getByEventname",
            value: function(e) {
                return Vi[e]
            }
        }, {
            key: "conflict",
            value: function(e, t) {
                "string" == typeof e && (e = n.get(e),
                t = n.get(t)),
                e && t && (e.conflictList.push(t.recName),
                t.conflictList.push(e.recName))
            }
        }]),
        n
    }();
    var Gi = function(e) {
        function n(e) {
            var t;
            return ur(this, n),
            (t = yr(this, gr(n).call(this, e))).boundHoldTimeFn = function() {
                this._state = Bi,
                this.emit()
            }
            .bind(mr(t)),
            t.taps = 1,
            t.count = 0,
            t.holdTime = 300,
            t.time = 250,
            t.moveRange = 10,
            t.level = 1,
            t.needAutoReset = !1,
            t
        }
        return br(n, $i),
        fr(n, [{
            key: "process",
            value: function(e) {
                if (e.deltaTime > this.time || e.distance > this.moveRange || 1 < e.pointers.length)
                    return this.reset(),
                    this.hold();
                if ("start" === e.eventState && clearTimeout(this.holdTimer),
                "end" !== e.eventState)
                    return 2;
                var t = this.preTime && e.timeStamp - this.preTime;
                return this.preTime = e.timeStamp,
                t < this.holdTime ? this.count++ : this.count = 1,
                this._data = e,
                this.count === this.taps ? this.emitCheck() ? Bi : (this.holdTimer = setTimeout(this.boundHoldTimeFn, this.holdTime),
                2) : void 0
            }
        }, {
            key: "reset",
            value: function() {
                this.preTime = null,
                this.count = 0,
                this._state = 1,
                clearTimeout(this.holdTimer)
            }
        }, {
            key: "emit",
            value: function() {
                if (this._state === Bi) {
                    var e = this._data
                      , t = Object.create(e);
                    t.type = this.eventList[0],
                    this._data = null,
                    this.trigger(t),
                    this.reset()
                }
            }
        }, {
            key: "eventList",
            get: function() {
                return this._eventList || ["tap"]
            }
        }]),
        n
    }()
      , Xi = function(e) {
        function n(e) {
            var t;
            return ur(this, n),
            (t = yr(this, gr(n).call(this, e))).taps = 2,
            t.level = 2,
            t
        }
        return br(n, Gi),
        fr(n, [{
            key: "eventList",
            get: function() {
                return this._eventList || ["doubletap"]
            }
        }]),
        n
    }()
      , Qi = function(e) {
        function n(e) {
            var t;
            return ur(this, n),
            (t = yr(this, gr(n).call(this, e))).velocity = .03,
            t.distance = 30,
            t.duration = 1e3,
            t
        }
        return br(n, $i),
        fr(n, [{
            key: "process",
            value: function(e) {
                return 1 < e.pointers.length || e.deltaTime > this.duration ? 5 : "end" === e.eventState && e.velocity >= this.velocity && e.distance > this.distance ? Bi : void 0
            }
        }, {
            key: "emit",
            value: function(e) {
                if (this._state === Bi) {
                    var t = Object.create(e);
                    t.type = "swipe",
                    t.swipeDirection = zi[e.direction],
                    this.trigger(t);
                    var n = Object.create(e);
                    n.type = "swipe" + zi[e.direction],
                    n.swipeDirection = zi[e.direction],
                    this.trigger(n)
                }
            }
        }, {
            key: "eventList",
            get: function() {
                return this._eventList || ["swipe", "swipeup", "swiperight", "swipeleft", "swipedown"]
            }
        }]),
        n
    }();
    $i.register(Xi, "doubletap"),
    $i.register(Gi, "tap"),
    $i.register(Qi, "swipe"),
    $i.conflict(Xi, Gi);
    var Ji = Math.round
      , Yi = Math.max
      , Zi = Math.abs
      , Ki = {
        startCenter: null,
        lastCenter: null,
        startTime: null,
        process: function(e, t, n) {
            var r = {}
              , i = Date.now()
              , o = e.touches.length ? e.touches : e.changedTouches;
            "touchstart" === e.type && (this.startCenter = this.getCenter(o),
            this.startTime = i,
            this.startData = r,
            this.preData = null);
            var a = this.startCenter
              , s = this.getCenter(o)
              , c = r.deltaTime = i - this.startTime;
            r.pointers = o,
            r.x = s.x,
            r.y = s.y;
            var u = r.deltaX = s.x - a.x
              , l = r.deltaY = s.y - a.y;
            if (r.velocityX = u / c || 0,
            r.velocityY = l / c || 0,
            r.velocity = Yi(Zi(r.velocityX), Zi(r.velocityY)),
            r.angle = this.getAngle(a, s),
            r.distance = this.getDistance(a, s),
            r.direction = this.getDirection(u, l),
            r.eventState = e.type.replace("touch", ""),
            r.timeStamp = i,
            this.preData) {
                var f = r.instantDeltaTime = i - this.preData.timeStamp
                  , d = r.instantVelocityX = (r.x - this.preData.x) / f || 0
                  , h = r.instantVelocityY = (r.y - this.preData.y) / f || 0;
                if ("move" === r.eventState && (t || n)) {
                    var p = Zi(d) > Zi(h);
                    (t && p || n && !p) && e.preventDefault()
                }
            } else
                r.instantDeltaTime = r.instantVelocityX = r.instantVelocityY = 0;
            return (this.preData = r).event = e,
            Object.freeze(r)
        },
        getCenter: function(e) {
            return {
                x: Ji(e[0].clientX),
                y: Ji(e[0].clientY)
            }
        },
        getAngle: function(e, t) {
            return 180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI
        },
        getDistance: function(e, t) {
            var n = t.x - e.x
              , r = t.y - e.y;
            return Math.sqrt(n * n + r * r)
        },
        getDirection: function(e, t) {
            return e === t ? 0 : Zi(e) >= Zi(t) ? 0 < e ? 2 : 4 : t < 0 ? 1 : 3
        }
    }
      , eo = function(e) {
        function r(e, t) {
            var n;
            return ur(this, r),
            (n = yr(this, gr(r).call(this)))._opt = {
                preventDefault: !1,
                stopPropagation: !1,
                preventX: !0,
                preventY: !1
            },
            t && (n._opt = Ar({}, n._opt, t)),
            n.__eventContext = n._element = e,
            n._boundTouchEvent = function(e) {
                var t = this._opt;
                if (t.preventDefault && e.preventDefault(),
                t.stopPropagation && e.stopPropagation(),
                "touchstart" !== e.type && !Ki.startTime)
                    return;
                var n = Ki.process(e, t.preventX, t.preventY);
                this._recognize(n),
                this.trigger(e.type, e, n)
            }
            .bind(mr(n)),
            to(e, "touchstart touchmove touchend touchcancel", n._boundTouchEvent),
            n._recognizers = {},
            n
        }
        return br(r, hr),
        fr(r, [{
            key: "cleanup",
            value: function() {
                to(this._element, "touchstart touchmove touchend touchcancel", this._boundTouchEvent, !1),
                this.off()
            }
        }, {
            key: "_createEventCallback",
            value: function(e) {
                if (!this._hasRegister(e)) {
                    var t = $i.getByEventname(e);
                    if (t) {
                        e = t.recName;
                        for (var n = this._recognizers[e] = new t(this), r = $i.getConflictList(n.recName), i = 0, o = r.length; i < o; i++) {
                            var a = r[i]
                              , s = this._recognizers[a];
                            s && ((s.conflictList[n.recName] = n).conflictList[s.recName] = s)
                        }
                    }
                }
            }
        }, {
            key: "_removeEventCallback",
            value: function(e) {
                var t;
                if (void 0 === e)
                    this._recognizers = {};
                else if (t = this._recognizers[e]) {
                    for (var n in t.conflictList)
                        delete t.conflictList[n][e];
                    delete this._recognizers[e]
                }
            }
        }, {
            key: "_hasRegister",
            value: function(e) {
                return !!this._recognizers[$i.getByEventname(e)]
            }
        }, {
            key: "_recognize",
            value: function(e) {
                var t = this._recognizers;
                for (var n in t) {
                    t[n].recognize(e)
                }
            }
        }]),
        r
    }();
    function to(e, t, n, r) {
        for (var i = t.split(" "), o = 0, a = i.length; o < a; o++) {
            var s = i[o];
            !1 === r ? e.removeEventListener(s, n) : e.addEventListener(s, n, !1)
        }
    }
    function no(e, t) {
        for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), i = 2; i < n; i++)
            r[i - 2] = arguments[i];
        var o = function(e, t) {
            var n, r = {
                bubbles: !1,
                cancelable: !1,
                detail: t
            };
            return "function" == typeof window.CustomEvent ? n = new CustomEvent(e,r) : (n = document.createEvent("CustomEvent")).initCustomEvent(e, r.bubbles, r.cancelable, r.detail),
            n
        }(t, [].concat(r));
        e.dispatchEvent(o)
    }
    var ro = 0
      , io = 1
      , oo = 2
      , ao = 21
      , so = 22
      , co = {}
      , uo = window.location.href
      , lo = uo.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g)
      , fo = lo && 1 < lo.length ? lo[1] : ""
      , ho = function() {
        function e() {
            ur(this, e)
        }
        return fr(e, [{
            key: "_isCachePage",
            value: function() {
                return Or(uo)
            }
        }, {
            key: "_supportLs",
            value: function() {
                var t = !1;
                try {
                    window.localStorage.setItem("lsExisted", "1"),
                    window.localStorage.removeItem("lsExisted"),
                    t = !0
                } catch (e) {
                    t = !1
                }
                return t
            }
        }, {
            key: "_getLocalStorage",
            value: function() {
                var e = this._supportLs() ? localStorage.getItem(fo) : co[fo];
                return function(e) {
                    e.u = (new Date).getTime()
                }(e = e ? mo(e) : {}),
                e
            }
        }, {
            key: "_rmLocalStorage",
            value: function(e) {
                e || (e = fo),
                this._supportLs() ? localStorage.removeItem(e) : Cr(co, e)
            }
        }, {
            key: "set",
            value: function(e, t, n, r) {
                if (e && t)
                    if (r = "function" == typeof n ? n : r,
                    this._isCachePage()) {
                        var i = this._getLocalStorage();
                        if (i[e] = t,
                        n = parseInt(n, 10),
                        !isNaN(n) && 0 < n ? i.e = (new Date).getTime() + n : Cr(i, "e"),
                        4096 < (i = JSON.stringify(i)).length)
                            throw r && r(go(ao, yo(ao))),
                            yo(ao);
                        this._setLocalStorage(fo, i, n, r)
                    } else
                        this._setLocalStorage(e, t, n, r)
            }
        }, {
            key: "_setLocalStorage",
            value: function(t, n, r, i) {
                var o = yo(so, t);
                if (i = "function" == typeof r ? r : i,
                this._supportLs())
                    try {
                        localStorage.setItem(t, n)
                    } catch (e) {
                        if (this._isExceed(e) && this._isCachePage())
                            this._exceedHandler(t, n, r);
                        else if (this._isExceed(e) && !this._isCachePage())
                            throw i && i(go(so, o)),
                            o
                    }
                else {
                    var e = n.length / 1024 / 1024;
                    for (var a in co)
                        co[a] && (e += co[a].length / 1024 / 1024);
                    if (5 < e)
                        throw i && i(so, o),
                        o;
                    co[t] = n
                }
            }
        }, {
            key: "get",
            value: function(e) {
                if (Tr(e)) {
                    var t;
                    if (this._isCachePage()) {
                        var n = this._getLocalStorage();
                        n && n[e] && (t = n[e])
                    } else
                        t = this._supportLs() ? localStorage.getItem(e) : co[e];
                    return t
                }
            }
        }, {
            key: "rm",
            value: function(e) {
                if (Tr(e))
                    if (this._isCachePage()) {
                        var t = this._getLocalStorage();
                        t && t[e] && (Cr(t, e),
                        this._setLocalStorage(fo, JSON.stringify(t)))
                    } else
                        this._supportLs() ? localStorage.removeItem(e) : Cr(co, e)
            }
        }, {
            key: "clear",
            value: function() {
                this._isCachePage() ? this._rmLocalStorage() : this._supportLs() ? localStorage.clear() : co = {}
            }
        }, {
            key: "rmExpires",
            value: function() {
                var e = !1;
                if (this._isCachePage()) {
                    var t = this._supportLs() ? localStorage : co;
                    for (var n in t)
                        if (t[n]) {
                            var r = void 0;
                            if ("string" == typeof t[n] && (r = mo(t[n])),
                            r && r.e) {
                                var i = parseInt(mo(t[n]).e, 10);
                                i && (new Date).getTime() >= i && (e = !0,
                                this._rmLocalStorage(n))
                            }
                        }
                }
                return e
            }
        }, {
            key: "_isExceed",
            value: function(e) {
                var t = !1;
                if (e && e.code)
                    switch (e.code) {
                    case 22:
                        t = !0;
                        break;
                    case 1014:
                        t = "NS_ERROR_DOM_QUOTA_REACHED" === e.name
                    }
                else
                    e && -2147024882 === e.number && (t = !0);
                return t
            }
        }, {
            key: "_exceedHandler",
            value: function(e, t, n) {
                var r, i;
                if (!this.rmExpires()) {
                    var o = localStorage;
                    for (var a in o)
                        if (o[a]) {
                            var s = mo(o[a]).u;
                            (!i || parseInt(s, 10) < r) && (i = a,
                            r = parseInt(s, 10))
                        }
                    this._rmLocalStorage(i)
                }
                this.set(e, t, n)
            }
        }]),
        e
    }()
      , po = function() {
        function e() {
            ur(this, e)
        }
        return fr(e, [{
            key: "request",
            value: function(t) {
                if (t && t.url) {
                    var e = {};
                    e.mode = t.mode ? t.mode : null,
                    e.method = t.method ? t.method : "GET",
                    e.credentials = t.credentials ? t.credentials : "omit",
                    e.cache = t.cache ? t.cache : "default",
                    t.headers && (e.headers = t.headers),
                    t.body && (e.body = t.body),
                    fetch(t.url, e).then(function(e) {
                        e.ok ? e.text().then(function(e) {
                            return t.success && t.success(mo(e))
                        }) : t.error && t.error(e)
                    }).catch(function(e) {
                        return t.error && t.error(e)
                    })
                }
            }
        }]),
        e
    }()
      , vo = function() {
        function e() {
            ur(this, e)
        }
        return fr(e, [{
            key: "delExceedCookie",
            value: function() {
                if (!this._notIframed()) {
                    var e = window.location.hostname
                      , t = document.cookie;
                    if (!(document.cookie.length < 5120))
                        for (var n = t.split(";"), r = 0; r < n.length; r++) {
                            var i = n[r].split("=");
                            if (i && 1 < i.length) {
                                var o = new Date
                                  , a = i[0].trim()
                                  , s = i[1].trim();
                                o.setMilliseconds(o.getMilliseconds() - 864e5),
                                this._set({
                                    key: a,
                                    value: s,
                                    expires: o,
                                    domain: e
                                }),
                                this._get(a) && this._set({
                                    key: a,
                                    value: s,
                                    expires: o,
                                    domain: e.split(".").slice(-2).join(".")
                                })
                            }
                            if (document.cookie.length <= 3072)
                                break
                        }
                }
            }
        }, {
            key: "_notIframed",
            value: function() {
                return window === top
            }
        }, {
            key: "_get",
            value: function(e) {
                e = e.trim();
                for (var t = document.cookie, n = t ? t.split(";") : [], r = 0, i = n.length; r < i; r++) {
                    var o = n[r].split("=");
                    if (o[0].trim() === e)
                        return o[1]
                }
            }
        }, {
            key: "_set",
            value: function(e) {
                document.cookie = [e.key, "=", "; expires=" + e.expires.toGMTString(), "; path=/", "; domain=" + e.domain].join("")
            }
        }]),
        e
    }();
    function mo(e) {
        try {
            e = JSON.parse(e)
        } catch (e) {}
        return e
    }
    function yo(e, t) {
        var n;
        switch (e) {
        case ao:
            n = "storage space need less than 4k";
            break;
        case so:
            n = "Uncaught DOMException: Failed to execute setItem on Storage: Setting the value of " + t + " exceeded the quota at " + window.location.href
        }
        return n
    }
    function go(e, t) {
        return {
            errCode: e,
            errMess: t
        }
    }
    function wo(e) {
        var t = (e = e.replace(/(["'])((\\{2})*|(.*?[^\\](\\{2})*))\1/g, function(e) {
            return e.replace(/[/*]/g, function(e) {
                return "\\" + e
            })
        }).replace(/\/\/.*\n?/g, "").replace(/\/\*.*\*\//g, "")).replace(/\\(?:["'\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\n\r]*"|'[^'\n\r]*'|[+-]?(Infinity|NaN)|([\u2e80-\u9fff]+|[_\w$][_\w\d$]*)\s*:|true|false|null|[+-]?\.?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?([xX][0-9a-fA-F]{1,2})?/g, function(e) {
            return "]" + (/:$/.test(e) ? ":" : "")
        }).replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(t))
            try {
                return (0,
                eval)("(" + e + ")")
            } catch (e) {
                throw e
            }
        throw new Error(e + " Content should be a valid JSON string!")
    }
    function bo(e) {
        return new xo(e)
    }
    var Eo = "_mip_template_cached"
      , ko = function() {
        function e() {
            ur(this, e)
        }
        return fr(e, [{
            key: "cache",
            value: function() {}
        }, {
            key: "render",
            value: function() {}
        }]),
        e
    }()
      , So = new (function() {
        function e() {
            ur(this, e),
            this._templates = {},
            this._solverList = {},
            this.Template = ko
        }
        return fr(e, [{
            key: "_create",
            value: function(e) {
                var t;
                this._templates[e] || (this._templates[e] = new Promise(function(e) {
                    t = e
                }
                ),
                this._solverList[e] = t);
                return this._templates[e]
            }
        }, {
            key: "_getTemplate",
            value: function(e) {
                return this._create(e)
            }
        }, {
            key: "register",
            value: function(e, t) {
                this._create(e),
                (0,
                this._solverList[e])(new t)
            }
        }, {
            key: "isTemplateClass",
            value: function(e) {
                return !(!e || !e.prototype) && ko.prototype.isPrototypeOf(e.prototype)
            }
        }, {
            key: "render",
            value: function(e, n, r) {
                var i = this
                  , o = this.find(e);
                if (o) {
                    var t = o.getAttribute("type")
                      , a = o.innerHTML;
                    return this._getTemplate(t).then(function(t) {
                        return o[Eo] || (o[Eo] = !0,
                        t.cache(a)),
                        n = i.extendFun(n),
                        Array.isArray(n) ? 0 === n.length ? Promise.resolve([]) : n.map(function(e) {
                            return t.render(a, e)
                        }) : r ? {
                            element: e,
                            html: t.render(a, n)
                        } : t.render(a, n)
                    })
                }
            }
        }, {
            key: "find",
            value: function(e) {
                if (!e || 1 !== e.nodeType)
                    return console.error("Template parent element must be a node element");
                if ("TEMPLATE" === e.tagName)
                    return e;
                var t = e.getAttribute("template");
                return (t ? document.getElementById(t) : e.querySelector("template")) || console.error("Can not find template element")
            }
        }, {
            key: "extendFun",
            value: function(e) {
                try {
                    e.escape2Html = function() {
                        return function(e, t) {
                            return t(e).replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&#x2F;/gi, "/")
                        }
                    }
                    ,
                    e.isSF = function() {
                        return "sf" === this.urltype
                    }
                } catch (e) {}
                return e
            }
        }, {
            key: "inheritTemplate",
            value: function() {
                return function(e) {
                    function t() {
                        return ur(this, t),
                        yr(this, gr(t).apply(this, arguments))
                    }
                    return br(t, ko),
                    t
                }()
            }
        }]),
        e
    }())
      , Po = function e() {
        var n = this;
        ur(this, e),
        this.promise = new Promise(function(e, t) {
            n.resolve = e,
            n.reject = t
        }
        )
    }
      , _o = ["info", "log", "warn", "error"]
      , xo = function e(o) {
        var t = this;
        ur(this, e),
        _o.forEach(function(i) {
            t[i] = function() {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                (e = console)[i].apply(e, ["[".concat(o, "]")].concat(n))
            }
        })
    }
      , Io = function() {
        function t(e) {
            ur(this, t),
            this.str = e,
            this.index = 0,
            this.length = e.length,
            this.records = []
        }
        return fr(t, [{
            key: "end",
            value: function() {
                return this.index === this.length
            }
        }, {
            key: "matchText",
            value: function(e) {
                var t = e.length
                  , n = this.str.substr(this.index, t) === e;
                return n && (this.index += t),
                n
            }
        }, {
            key: "matchRegExp",
            value: function(e) {
                var t = e.exec(this.rest());
                if (t && 0 === t.index)
                    return this.index += t[0].length,
                    t
            }
        }, {
            key: "record",
            value: function(e, t, n, r) {
                this.records.push([e, t, n, r])
            }
        }, {
            key: "query",
            value: function(e, t) {
                var n = !0
                  , r = !1
                  , i = void 0;
                try {
                    for (var o, a = this.records[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                        var s = o.value;
                        if (s[0] === e && s[1] === t)
                            return this.index = s[2],
                            s
                    }
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (r)
                            throw i
                    }
                }
            }
        }, {
            key: "rest",
            value: function() {
                return this.str.slice(this.index)
            }
        }]),
        t
    }();
    var Lo = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
    };
    var Ao = function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
            return Array.from(e)
    };
    var To = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    };
    var Co = function(e) {
        return Lo(e) || Ao(e) || To()
    }
      , Mo = function() {
        function t(e) {
            ur(this, t),
            e ? (this.map = e,
            this.names = Object.keys(e)) : (this.map = {},
            this.names = null)
        }
        return fr(t, [{
            key: "setParent",
            value: function(e) {
                e instanceof t ? this.parents = e.list() : "object" === cr(e) && (this.parents = [new t(e)])
            }
        }, {
            key: "list",
            value: function() {
                return this.parents ? [].concat(Co(this.parents), [this]) : [this]
            }
        }, {
            key: "declare",
            value: function(e) {
                this.names = e
            }
        }, {
            key: "set",
            value: function(e, t, n) {
                if ("global" === n && this.parents)
                    this.parents[0].set(e, t);
                else if ("parent" === n && this.parents)
                    this.parents[this.parents.length - 1].set(e, t);
                else
                    for (var r = 0; r < e.length; r++)
                        this.map[e[r]] = t[r]
            }
        }, {
            key: "get",
            value: function(e) {
                if (this.has(e, !1))
                    return this.map[e];
                if (this.parents)
                    for (var t = this.parents.length - 1; -1 < t; t--)
                        if (this.parents[t].has(e, !1))
                            return this.parents[t].map[e]
            }
        }, {
            key: "has",
            value: function(e) {
                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                if (null != this.names) {
                    var n = !0
                      , r = !1
                      , i = void 0;
                    try {
                        for (var o, a = this.names[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            if (o.value === e)
                                return !0
                        }
                    } catch (e) {
                        r = !0,
                        i = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r)
                                throw i
                        }
                    }
                }
                if (!t)
                    return !1;
                if (this.parents) {
                    var s = !0
                      , c = !1
                      , u = void 0;
                    try {
                        for (var l, f = this.parents[Symbol.iterator](); !(s = (l = f.next()).done); s = !0) {
                            if (l.value.has(e, t))
                                return !0
                        }
                    } catch (e) {
                        c = !0,
                        u = e
                    } finally {
                        try {
                            s || null == f.return || f.return()
                        } finally {
                            if (c)
                                throw u
                        }
                    }
                }
                return !1
            }
        }]),
        t
    }()
      , Oo = function() {
        function t() {
            ur(this, t),
            this.parent = null,
            this.instance = null,
            this.created = !1
        }
        return fr(t, [{
            key: "create",
            value: function() {
                return this.created || (this.created = !0,
                this.instance = new Mo,
                this.parent && this.instance.setParent(this.parent)),
                this.instance
            }
        }, {
            key: "setParent",
            value: function(e) {
                this.parent || (this.parent = e instanceof t ? e.getInstance() : e instanceof Mo ? e : new Mo(e),
                this.created ? this.instance.setParent(this.parent) : this.instance = this.parent)
            }
        }, {
            key: "getInstance",
            value: function() {
                return this.instance
            }
        }]),
        t
    }();
    function jo(o) {
        return function(e, t) {
            var n = e.index
              , r = e.query(t, n);
            if (r)
                return r[3];
            var i = o(e, t);
            return e.record(t, n, e.index, i),
            i
        }
    }
    function Ho(i) {
        return function(e, t) {
            var n = e.index
              , r = i(e, t);
            return void 0 !== r && !1 !== r || (e.index = n),
            r
        }
    }
    function No(e, t) {
        return t[0](e, t[1])
    }
    function Ro(e, t) {
        var n = e.index
          , r = !0
          , i = !1
          , o = void 0;
        try {
            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                var c = No(e, a.value);
                if (!1 !== c)
                    return c;
                e.index = n
            }
        } catch (e) {
            i = !0,
            o = e
        } finally {
            try {
                r || null == s.return || s.return()
            } finally {
                if (i)
                    throw o
            }
        }
        return !1
    }
    function Do(e, t) {
        for (var n = []; !e.end(); ) {
            var r = Wo(e, t);
            if (!1 === r)
                break;
            n.push(r)
        }
        return n
    }
    function Fo(e, t) {
        for (var n = []; !e.end(); ) {
            var r = Wo(e, t);
            if (!1 === r)
                break;
            n.push(r)
        }
        return !!n.length && n
    }
    function qo(e, t) {
        return Wo(e, t) || void 0
    }
    var Bo, Uo, zo, Wo = Ho(function(e, t) {
        if ("function" == typeof t[0])
            return No(e, t);
        var n = []
          , r = !0
          , i = !1
          , o = void 0;
        try {
            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                var c = No(e, a.value);
                if (!1 === c)
                    return !1;
                n.push(c)
            }
        } catch (e) {
            i = !0,
            o = e
        } finally {
            try {
                r || null == s.return || s.return()
            } finally {
                if (i)
                    throw o
            }
        }
        return n
    }), Vo = Ho(function(e, t) {
        return !1 === Wo(e, t) && void 0
    }), $o = jo((Bo = function(e, t) {
        var n = e.index
          , r = t.rule
          , i = t.match
          , o = t.type
          , a = t.fallback
          , s = Wo(e, r);
        return !1 !== s && i && (s = i(s, e)),
        !1 === s && a ? (e.index = n,
        Wo(e, a)) : (s && !s.type && (s.type = o),
        s)
    }
    ,
    Uo = ["rule", "fallback"],
    zo = {},
    function(e, t) {
        var n = zo[t.type];
        if (!n) {
            n = t;
            var r = !0
              , i = !1
              , o = void 0;
            try {
                for (var a, s = Uo[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                    var c = a.value;
                    "function" == typeof n[c] && (n[c] = n[c]())
                }
            } catch (e) {
                i = !0,
                o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i)
                        throw o
                }
            }
            zo[t.type] = n
        }
        return Bo(e, n)
    }
    )), Go = jo(function(e, t) {
        return !!e.matchText(t) && {
            raw: t
        }
    }), Xo = jo(function(e, t) {
        var n = e.matchRegExp(t);
        return !!n && {
            raw: n[0]
        }
    }), Qo = function() {
        function e() {
            ur(this, e),
            this.types = {}
        }
        return fr(e, [{
            key: "set",
            value: function(e) {
                var t = [$o, e];
                return this.types[e.type] = t
            }
        }, {
            key: "get",
            value: function(e) {
                return this.types[e]
            }
        }]),
        e
    }(), Jo = function() {
        function i(e) {
            var t = e.lexer
              , n = e.visitor
              , r = e.type;
            ur(this, i),
            this.lexer = t,
            this.visitor = n,
            this.type = r
        }
        return fr(i, [{
            key: "parse",
            value: function(e, t) {
                t = t || this.type;
                var n = this.lexer.get(t)
                  , r = new Io(e)
                  , i = No(r, n);
                if (!1 !== i && r.end())
                    return i;
                throw new Error(r.rest())
            }
        }, {
            key: "generate",
            value: function(e) {
                return function r(i, o, e) {
                    var a, s = new Oo, t = {
                        node: o,
                        parent: e,
                        traverse: function(e, t) {
                            var n = r(i, e, t || o);
                            return function() {
                                return n(a, s)
                            }
                        },
                        scopeManager: s
                    }, n = i[o.type](t);
                    return function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                          , t = 1 < arguments.length ? arguments[1] : void 0;
                        return a = e,
                        s.setParent(t),
                        n(e)
                    }
                }(this.visitor, e)
            }
        }, {
            key: "transform",
            value: function(e, t) {
                var n = this.parse(e, t);
                return this.generate(n)
            }
        }]),
        i
    }(), Yo = new Qo, Zo = [Xo, /^\s*/], Ko = [Xo, /^\s+/], ea = [Go, "?"], ta = [Go, ":"], na = [Go, ","], ra = [Go, ";"], ia = [Go, "."], oa = [Go, "{"], aa = [Go, "}"], sa = [Go, "["], ca = [Go, "]"], ua = [Go, "("], la = [Go, ")"], fa = [Go, "'"], da = [Go, '"'], ha = [Go, "true"], pa = [Go, "false"], va = [Go, "null"], ma = [Ro, [va, ha, pa]];
    function ya(e) {
        var t = mi(e, 2)
          , n = t[0];
        return t[1].reduce(function(e, t) {
            return {
                type: "Binary",
                operator: t[1].raw,
                left: e,
                right: t[3]
            }
        }, n)
    }
    var ga = Yo.set({
        type: "Number",
        rule: [Xo, /^(0|[1-9]\d*)(\.\d+)?(e[+-]?\d+)?/i],
        match: function(e) {
            return e.value = +e.raw,
            e.type = "Literal",
            e
        }
    })
      , wa = Yo.set({
        type: "Boolean",
        rule: [Ro, [ha, pa]],
        match: function(e) {
            return e.value = "true" === e.raw,
            e.type = "Literal",
            e
        }
    })
      , ba = Yo.set({
        type: "Null",
        rule: va,
        match: function(e) {
            return e.value = null,
            e.type = "Literal",
            e
        }
    })
      , Ea = Yo.set({
        type: "Escape",
        rule: [[Go, "\\"], [Xo, /^["'\\/bfnrt]/]],
        match: function(e) {
            var t, n = e[0], r = e[1];
            switch (r.raw) {
            case '"':
            case "'":
            case "\\":
            case "/":
                t = r.raw;
                break;
            case "b":
                t = "\b";
                break;
            case "f":
                t = "\f";
                break;
            case "n":
                t = "\n";
                break;
            case "r":
                t = "\r";
                break;
            case "t":
                t = "\t"
            }
            return {
                raw: n.raw + r.raw,
                value: t
            }
        }
    })
      , ka = Yo.set({
        type: "String",
        rule: [Ro, [[Wo, [da, [Do, [Ro, [Ea, [Xo, /^[^"]/]]]], da]], [Wo, [fa, [Do, [Ro, [Ea, [Xo, /^[^']/]]]], fa]]]],
        match: function(e) {
            var t = e[1];
            return {
                type: "Literal",
                raw: e[0].raw + t.map(function(e) {
                    return e.raw
                }).join("") + e[2].raw,
                value: t.map(function(e) {
                    return null == e.value ? e.raw : e.value
                }).join("")
            }
        }
    })
      , Sa = Yo.set({
        type: "Literal",
        rule: [Ro, [ka, ga, wa, ba]]
    })
      , Pa = Yo.set({
        type: "Grouping",
        rule: function() {
            return [ua, Zo, $a, Zo, la]
        },
        match: function(e) {
            return e[2]
        }
    })
      , _a = Yo.set({
        type: "Identifier",
        rule: [Ro, [[Wo, [ma, [Xo, /^[0-9a-z_$]+/i]]], [Wo, [[Vo, ma], [Xo, /^[a-z$_][0-9a-z_$]*/i]]]]],
        match: function(e) {
            return {
                name: (e[0] && e[0].raw || "") + e[1].raw
            }
        }
    })
      , xa = Yo.set({
        type: "Variable",
        rule: _a,
        match: function(e) {
            return {
                name: e.name
            }
        }
    })
      , Ia = Yo.set({
        type: "ComputedProperty",
        rule: function() {
            return [sa, Zo, $a, Zo, ca]
        },
        match: function(e) {
            return {
                type: "Member",
                computed: !0,
                property: e[2]
            }
        }
    })
      , La = Yo.set({
        type: "Property",
        rule: function() {
            return [[Ro, [Ia, _a, ka, ga]], Zo, ta, Zo, $a]
        },
        match: function(e) {
            var t = e[0]
              , n = {
                value: e[4]
            };
            return t.computed ? (n.computed = !0,
            n.key = t.property) : n.key = t,
            n
        }
    })
      , Aa = Yo.set({
        type: "ObjectLiteral",
        rule: [oa, [Do, [Zo, La, Zo, na]], Zo, [qo, La], Zo, aa],
        match: function(e) {
            var t = e[1].map(function(e) {
                return e[1]
            });
            return e[3] && t.push(e[3]),
            {
                properties: t
            }
        }
    })
      , Ta = Yo.set({
        type: "ArrayLiteral",
        rule: function() {
            return [sa, [Do, [Zo, [qo, $a], Zo, na]], Zo, [qo, $a], Zo, ca]
        },
        match: function(e) {
            var t = e[1].map(function(e) {
                return e[1]
            });
            return e[3] && t.push(e[3]),
            {
                elements: t
            }
        }
    })
      , Ca = Yo.set({
        type: "Primary",
        rule: [Ro, [xa, Sa, Ta, Aa, Pa]]
    })
      , Ma = Yo.set({
        type: "IdentifierProperty",
        rule: [ia, Zo, _a],
        match: function(e) {
            return {
                type: "Member",
                computed: !1,
                property: e[2]
            }
        }
    })
      , Oa = Yo.set({
        type: "Member",
        rule: [[Ro, [xa, ka, Ta, Pa]], [Fo, [Zo, [Ro, [Ia, Ma]]]]],
        match: function(e) {
            var t = e[0];
            return e[1].reduce(function(e, t) {
                return {
                    type: "Member",
                    object: e,
                    property: t[1].property,
                    computed: t[1].computed
                }
            }, t)
        },
        fallback: Ca
    })
      , ja = Yo.set({
        type: "Params",
        rule: [Ro, [[Wo, [ua, [Do, [Zo, _a, Zo, na]], Zo, [qo, _a], Zo, la]], _a]],
        match: function(e) {
            if ("Identifier" === e.type)
                return {
                    params: [e]
                };
            var t = e[1]
              , n = e[3]
              , r = t.map(function(e) {
                return e[1]
            });
            return n && r.push(n),
            {
                params: r
            }
        }
    })
      , Ha = Yo.set({
        type: "ArrowFunction",
        rule: function() {
            return [ja, Zo, [Go, "=>"], Zo, [Vo, [Go, "{"]], $a]
        },
        match: function(e) {
            return {
                params: e[0].params,
                body: e[5]
            }
        }
    })
      , Na = Yo.set({
        type: "Arguments",
        rule: function() {
            return [ua, [Do, [Zo, [Ro, [Ha, $a]], Zo, na]], Zo, [qo, [Ro, [Ha, $a]]], Zo, la]
        },
        match: function(e) {
            var t = e[1]
              , n = e[3]
              , r = t.map(function(e) {
                return e[1]
            });
            return (0 < r.length || n) && r.push(n),
            {
                type: "Call",
                arguments: r
            }
        }
    })
      , Ra = Yo.set({
        type: "Call",
        rule: [Oa, Zo, Na, [Do, [Zo, [Ro, [Na, Ia, Ma]]]]],
        match: function(e) {
            var t = {
                type: "Call",
                callee: e[0],
                arguments: e[2].arguments
            };
            return e[3].reduce(function(e, t) {
                var n = t[1];
                return "Member" === n.type ? n.object = e : n.callee = e,
                n
            }, t)
        },
        fallback: Oa
    })
      , Da = Yo.set({
        type: "Unary",
        rule: [[Xo, /^[+\-!~]/], Zo, Ra],
        match: function(e) {
            return {
                operator: e[0].raw,
                argument: e[2]
            }
        },
        fallback: Ra
    })
      , Fa = Yo.set({
        type: "Multiplicative",
        rule: [Da, [Fo, [Zo, [Ro, [[Go, "*"], [Go, "/"], [Go, "%"]]], Zo, Da]]],
        match: ya,
        fallback: Da
    })
      , qa = Yo.set({
        type: "Additive",
        rule: [Fa, [Fo, [Zo, [Ro, [[Go, "+"], [Go, "-"]]], Zo, Fa]]],
        match: ya,
        fallback: Fa
    })
      , Ba = Yo.set({
        type: "Relational",
        rule: [qa, [Fo, [Zo, [Ro, [[Go, "<="], [Go, "<"], [Go, ">="], [Go, ">"]]], Zo, qa]]],
        match: ya,
        fallback: qa
    })
      , Ua = Yo.set({
        type: "Equality",
        rule: [Ba, [Fo, [Zo, [Ro, [[Go, "==="], [Go, "=="], [Go, "!=="], [Go, "!="]]], Zo, Ba]]],
        match: ya,
        fallback: Ba
    })
      , za = Yo.set({
        type: "LogicalAnd",
        rule: [Ua, [Fo, [Zo, [Go, "&&"], Zo, Ua]]],
        match: ya,
        fallback: Ua
    })
      , Wa = Yo.set({
        type: "LogicalOr",
        rule: [za, [Fo, [Zo, [Go, "||"], Zo, za]]],
        match: ya,
        fallback: za
    })
      , Va = Yo.set({
        type: "Binary",
        rule: Wa
    })
      , $a = Yo.set({
        type: "Conditional",
        rule: function() {
            return [Va, Zo, ea, Zo, $a, Zo, ta, Zo, $a]
        },
        match: function(e) {
            return {
                test: e[0],
                consequent: e[4],
                alternate: e[8]
            }
        },
        fallback: Va
    })
      , Ga = Yo.set({
        type: "MIPArgumentContentWithBracket",
        rule: function() {
            return [ua, [Do, Xa], la]
        },
        match: function(e) {
            return {
                raw: e[0].raw + e[1].map(function(e) {
                    return e.raw
                }).join("") + e[2].raw
            }
        }
    })
      , Xa = Yo.set({
        type: "MIPArgumentContent",
        rule: [Ro, [Ga, ka, [Xo, /^[^()'"]+/]]],
        match: function(e) {
            return {
                raw: e.raw
            }
        }
    })
      , Qa = Yo.set({
        type: "MIPArgumentText",
        rule: [ua, [Do, Xa], la],
        match: function(e) {
            return {
                raw: e[1].map(function(e) {
                    return e.raw
                }).join("")
            }
        }
    })
      , Ja = Yo.set({
        type: "HTMLEIdentifier",
        rule: [Xo, /^[a-z][\w-]*/i],
        match: function(e) {
            return {
                type: "Identifier",
                name: e.raw
            }
        }
    })
      , Ya = Yo.set({
        type: "MIPAction",
        rule: [[Ro, [[Go, "MIP"], Ja]], ia, _a, [qo, Qa]],
        match: function(e) {
            return {
                object: e[0].name || e[0].raw,
                property: e[2].name,
                argumentText: e[3] ? e[3].raw : null
            }
        }
    })
      , Za = Yo.set({
        type: "MIPActions",
        rule: [Ya, [Do, [Zo, na, Zo, Ya]], [qo, [Zo, na]]],
        match: function(e) {
            var t = [e[0]]
              , n = !0
              , r = !1
              , i = void 0;
            try {
                for (var o, a = e[1][Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                    var s = o.value;
                    t.push(s[3])
                }
            } catch (e) {
                r = !0,
                i = e
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r)
                        throw i
                }
            }
            return t
        }
    })
      , Ka = Yo.set({
        type: "MIPEventHandler",
        rule: [[Xo, /^[a-z][\w$-]*/i], Zo, ta, Zo, Za],
        match: function(e) {
            return {
                event: e[0].raw,
                actions: e[4]
            }
        }
    })
      , es = Yo.set({
        type: "MIPEventNewHanlers",
        rule: [Ka, [Fo, [Zo, ra, Zo, Ka]], [qo, ra]],
        match: function(e) {
            var t = [e[0]]
              , n = !0
              , r = !1
              , i = void 0;
            try {
                for (var o, a = e[1][Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                    var s = o.value;
                    t.push(s[3])
                }
            } catch (e) {
                r = !0,
                i = e
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r)
                        throw i
                }
            }
            return {
                type: "MIPEventHandlers",
                handlers: t
            }
        }
    })
      , ts = Yo.set({
        type: "MIPEventOldHandlers",
        rule: [Ka, [Fo, [Ko, Ka]]],
        match: function(e) {
            var t = [e[0]]
              , n = !0
              , r = !1
              , i = void 0;
            try {
                for (var o, a = e[1][Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                    var s = o.value;
                    t.push(s[1])
                }
            } catch (e) {
                r = !0,
                i = e
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r)
                        throw i
                }
            }
            return {
                type: "MIPEventHandlers",
                handlers: t
            }
        }
    })
      , ns = (Yo.set({
        type: "MIPEventHandlers",
        rule: [Zo, [Ro, [es, ts, Ka]], Zo],
        match: function(e) {
            return e[1]
        }
    }),
    {
        "+": function(e, t) {
            return e() + t()
        },
        "-": function(e, t) {
            return e() - t()
        },
        "*": function(e, t) {
            return e() * t()
        },
        "/": function(e, t) {
            return e() / t()
        },
        "%": function(e, t) {
            return e() % t()
        },
        ">": function(e, t) {
            return e() > t()
        },
        "<": function(e, t) {
            return e() < t()
        },
        ">=": function(e, t) {
            return e() >= t()
        },
        "<=": function(e, t) {
            return e() <= t()
        },
        "==": function(e, t) {
            return e() == t()
        },
        "===": function(e, t) {
            return e() === t()
        },
        "!=": function(e, t) {
            return e() != t()
        },
        "!==": function(e, t) {
            return e() !== t()
        },
        "&&": function(e, t) {
            return e() && t()
        },
        "||": function(e, t) {
            return e() || t()
        }
    })
      , rs = {
        "+": function(e) {
            return +e()
        },
        "-": function(e) {
            return -e()
        },
        "!": function(e) {
            return !e()
        },
        "~": function(e) {
            return ~e()
        }
    };
    var is = {
        "[object Array]": {
            concat: Array.prototype.concat,
            filter: Array.prototype.filter,
            indexOf: Array.prototype.indexOf,
            join: Array.prototype.join,
            lastIndexOf: Array.prototype.lastIndexOf,
            map: Array.prototype.map,
            reduce: Array.prototype.reduce,
            slice: Array.prototype.slice,
            some: Array.prototype.some,
            every: Array.prototype.every,
            find: Array.prototype.find,
            sort: function() {
                var e;
                return (e = this.slice()).sort.apply(e, arguments)
            },
            splice: function() {
                var e = this.slice();
                return e.splice.apply(e, arguments),
                e
            }
        },
        "[object Number]": {
            toExponential: Number.prototype.toExponential,
            toFixed: Number.prototype.toFixed,
            toPrecision: Number.prototype.toPrecision,
            toString: Number.prototype.toString
        },
        "[object String]": {
            charAt: String.prototype.charAt,
            charCodeAt: String.prototype.charCodeAt,
            concat: String.prototype.concat,
            indexOf: String.prototype.indexOf,
            lastIndexOf: String.prototype.lastIndexOf,
            slice: String.prototype.slice,
            split: String.prototype.split,
            substr: String.prototype.substr,
            substring: String.prototype.substring,
            toLowerCase: String.prototype.toLowerCase,
            toUpperCase: String.prototype.toUpperCase,
            trim: String.prototype.trim
        }
    }
      , os = {
        encodeURI: encodeURI,
        encodeURIComponent: encodeURIComponent,
        abs: Math.abs,
        ceil: Math.ceil,
        floor: Math.floor,
        sqrt: Math.sqrt,
        log: Math.log,
        max: Math.max,
        min: Math.min,
        random: Math.random,
        round: Math.round,
        sign: Math.sign,
        keys: Object.keys,
        values: Object.values,
        assign: Object.assign,
        decodeURI: decodeURI,
        decodeURIComponent: decodeURIComponent,
        isNaN: isNaN,
        isFinite: isFinite,
        parseFloat: parseFloat,
        parseInt: parseInt,
        Number: Number,
        Date: Date,
        Boolean: Boolean,
        String: String
    }
      , as = {
        event: {
            root: !0,
            object: function(e) {
                return e.options.event
            }
        },
        DOM: {
            object: function(e) {
                return e.options.target
            },
            property: function(e, t) {
                if ("dataset" !== t)
                    return "object" !== cr(e[t]) ? e[t] : null == e[t] ? e[t] : void 0;
                for (var n = {}, r = 0, i = Object.keys(e.dataset); r < i.length; r++) {
                    var o = i[r];
                    n[o] = e.dataset[o]
                }
                return n
            }
        },
        undefined: {
            object: function() {}
        }
    }
      , ss = Object.assign({
        m: {
            object: function(e) {
                return e.options.data || window.m
            }
        },
        Math: {
            object: function() {
                return Math
            }
        },
        Number: {
            object: function() {
                return Number
            }
        },
        Date: {
            object: function() {
                return Date
            }
        },
        Object: {
            object: function() {
                return Object
            }
        },
        Array: {
            object: function() {
                return Array
            }
        },
        String: {
            object: function() {
                return String
            }
        }
    }, as);
    function cs(e, t) {
        var n = Object.prototype.toString.call(e)
          , r = is[n] && is[n][t];
        if (!r)
            throw Error("\u4e0d\u652f\u6301 ".concat(n, ".").concat(t, " \u65b9\u6cd5"));
        return r.bind(e)
    }
    function us(e, t) {
        return e[t]
    }
    var ls = Yo.set({
        type: "MIPActionAllowed",
        rule: [xa, [Do, [Zo, ia, Zo, _a]]],
        match: function(e) {
            var t = e[0]
              , n = t.name
              , r = as[n];
            if (!r)
                return !1;
            var i = e[1];
            return i.length ? i.reduce(function(e, t) {
                return {
                    type: "Member",
                    object: e,
                    property: t[3],
                    computed: !1
                }
            }, t) : !!r.root && t
        }
    })
      , fs = Yo.set({
        type: "Minus",
        rule: [[Go, "-"], Zo, ga],
        match: function(e) {
            return {
                type: "Literal",
                value: -e[2].value,
                raw: "-" + e[2].raw
            }
        }
    })
      , ds = Yo.set({
        type: "MIPValue",
        rule: [Ro, [ls, Sa, fs]]
    })
      , hs = Yo.set({
        type: "MIPActionAssignment",
        rule: [_a, Zo, [Go, "="], Zo, $a],
        match: function(e) {
            return {
                type: "Property",
                key: e[0],
                value: e[4],
                computed: !1
            }
        }
    })
      , ps = Yo.set({
        type: "MIPActionNewArguments",
        rule: [hs, [Do, [Zo, na, Zo, hs]], Zo, [qo, na]],
        match: function(e) {
            var t = [e[0]].concat(e[1].map(function(e) {
                return e[3]
            }));
            return e[3] && t.push(void 0),
            {
                arguments: [{
                    type: "ObjectLiteral",
                    properties: t
                }]
            }
        }
    })
      , vs = Yo.set({
        type: "MIPActionOldArguments",
        rule: [ds, [Do, [Zo, na, Zo, ds]], Zo, [qo, na]],
        match: function(e) {
            var t = [e[0]].concat(e[1].map(function(e) {
                return e[3]
            }));
            return e[3] && t.push(void 0),
            {
                arguments: t
            }
        }
    })
      , ms = Yo.set({
        type: "MIPActionObjectArguments",
        rule: Aa,
        match: function(e) {
            return {
                arguments: [e]
            }
        }
    });
    Yo.set({
        type: "MIPActionArguments",
        rule: [Zo, [qo, [Ro, [ms, vs, ps]]], Zo],
        match: function(e) {
            return {
                arguments: e[1] && e[1].arguments || []
            }
        }
    });
    function ys(e, t) {
        return e && "Call" === e.type && e.callee === t
    }
    function gs() {
        return Ss.innerWidth || ks.clientWidth
    }
    function ws() {
        return zr.isIOS() ? ks.clientHeight || Ss.innerHeight : Ss.innerHeight || ks.clientHeight
    }
    var bs, Es = {
        Conditional: function(e) {
            var t = e.traverse(e.node.test)
              , n = e.traverse(e.node.consequent)
              , r = e.traverse(e.node.alternate);
            return function() {
                return t() ? n() : r()
            }
        },
        Binary: function(e) {
            var t = e.node
              , n = ns[t.operator]
              , r = e.traverse(t.left)
              , i = e.traverse(t.right);
            return function() {
                return n(r, i)
            }
        },
        Unary: function(e) {
            var t = e.node
              , n = rs[t.operator]
              , r = e.traverse(t.argument);
            return function() {
                return n(r)
            }
        },
        ArrayLiteral: function(t) {
            var n = []
              , e = !0
              , r = !1
              , i = void 0;
            try {
                for (var o, a = function() {
                    var e = o.value;
                    null == e ? n.push(function() {
                        return e
                    }) : n.push(t.traverse(e))
                }, s = t.node.elements[Symbol.iterator](); !(e = (o = s.next()).done); e = !0)
                    a()
            } catch (e) {
                r = !0,
                i = e
            } finally {
                try {
                    e || null == s.return || s.return()
                } finally {
                    if (r)
                        throw i
                }
            }
            return function() {
                return n.map(function(e) {
                    return e()
                })
            }
        },
        ObjectLiteral: function(e) {
            var t = []
              , n = !0
              , r = !1
              , i = void 0;
            try {
                for (var o, a = e.node.properties[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                    var s = o.value;
                    t.push(e.traverse(s))
                }
            } catch (e) {
                r = !0,
                i = e
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r)
                        throw i
                }
            }
            return function() {
                return t.reduce(function(e, t) {
                    var n = t()
                      , r = mi(n, 2)
                      , i = r[0]
                      , o = r[1];
                    return e[i] = o,
                    e
                }, {})
            }
        },
        Property: function(e) {
            var t = e.traverse(e.node.key)
              , n = e.traverse(e.node.value);
            return function() {
                return [t(), n()]
            }
        },
        Variable: function(e) {
            var t = e.parent
              , n = e.node
              , r = n.name;
            if (ys(t, n)) {
                var i = os[r];
                return function() {
                    return i
                }
            }
            var o = ss[r]
              , a = o && o.object
              , s = e.scopeManager;
            return function(e) {
                var t = s.getInstance();
                if (t.has(r))
                    return t.get(r);
                var n = {
                    options: e
                };
                return a && a(n) || us(ss.m.object(n), r)
            }
        },
        Identifier: function(e) {
            var t = e.node.name;
            return function() {
                return t
            }
        },
        Literal: function(e) {
            var t = e.node.value;
            return function() {
                return t
            }
        },
        Member: function(e) {
            var t = e.node
              , n = e.parent
              , r = e.traverse(t.property)
              , i = e.traverse(t.object)
              , o = us
              , a = !1;
            if ("Variable" === t.object.type) {
                var s = ss[t.object.name];
                (a = !!s) && s.property && (o = s.property)
            }
            return !a && ys(n, t) && (o = cs),
            function() {
                return o(i(), r())
            }
        },
        Call: function(e) {
            var t = e.node
              , n = []
              , r = !0
              , i = !1
              , o = void 0;
            try {
                for (var a, s = e.node.arguments[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                    var c = a.value;
                    n.push(e.traverse(c))
                }
            } catch (e) {
                i = !0,
                o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i)
                        throw o
                }
            }
            var u = e.traverse(t.callee);
            return function() {
                return u().apply(void 0, Co(n.map(function(e) {
                    return e()
                })))
            }
        },
        ArrowFunction: function(e) {
            var t = e.node
              , r = t.params.map(function(e) {
                return e.name
            })
              , i = e.scopeManager.create();
            i.declare(r);
            var o = e.traverse(t.body);
            return function() {
                return function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return i.set(r, t),
                    o()
                }
            }
        }
    }, ks = document.documentElement, Ss = window, Ps = Er(function(e) {
        this.trigger("scroll", e)
    }, 1e3 / 60), _s = Er(function(e) {
        this.trigger("changed", e)
    }, 200), xs = null, Is = null, Ls = Er(function(e) {
        (bs = gs()) !== xs && (this.trigger("resize", e),
        xs = bs),
        Is = ws()
    }, 200), As = {
        init: function() {
            this.scroller = zr.needSpecialScroll ? document.body : Ss,
            this.scroller.addEventListener("scroll", function(e) {
                Ps.call(this, e),
                _s.call(this, e)
            }
            .bind(this), !1),
            zr.isIOS() && (xs = this.getWidth()),
            Ss.addEventListener("resize", Ls.bind(this))
        },
        getScrollTop: function() {
            return si.getScrollTop()
        },
        getScrollLeft: function() {
            return si.getScrollLeft()
        },
        setScrollTop: function(e) {
            si.setScrollTop(e || 1)
        },
        getWidth: function() {
            return null == xs && (xs = gs()),
            xs
        },
        getHeight: function() {
            return null == Is && (Is = ws()),
            Is
        },
        getScrollWidth: function() {
            return si.getScrollWidth()
        },
        getScrollHeight: function() {
            return si.getScrollHeight()
        },
        getRect: function() {
            return si.get(this.getScrollLeft(), this.getScrollTop(), this.getWidth(), this.getHeight())
        },
        isPortrait: function() {
            return this.getHeight() > this.getWidth()
        }
    };
    function Ts(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , n = t.duration
          , r = void 0 === n ? 500 : n
          , i = t.scrollTop
          , o = void 0 === i ? 0 : i
          , a = e;
        if (a === o)
            return Promise.resolve();
        var s = a - o
          , c = 0 < s;
        return new Promise(function(e) {
            !function(a, s, c) {
                var u = Date.now();
                Nr(function e() {
                    var t = Date.now() - u;
                    s((n = t,
                    r = 0,
                    i = 1,
                    o = a,
                    1.0042954579734844 * Math.exp(-6.404173895841566 * Math.exp(-7.290824133098134 * n / o)) * i + r)) ? Nr(e) : c();
                    var n, r, i, o
                })
            }(r, function(e) {
                var t = Math.ceil(e * s) + o;
                return c && a <= t || !c && t <= a ? (Cs(a),
                !1) : (Cs(t),
                !0)
            }, function() {
                Cs(a),
                e()
            })
        }
        )
    }
    function Cs(e) {
        As.setScrollTop(e)
    }
    function Ms(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , n = t.duration
          , r = void 0 === n ? 0 : n
          , i = t.position
          , o = void 0 === i ? "top" : i;
        if (e && !1 != !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)) {
            "number" == typeof r && isFinite(r) || (r = 0);
            var a = si.getElementRect(e)
              , s = -As.getHeight() + a.height;
            switch (o) {
            case "bottom":
                break;
            case "center":
                s /= 2;
                break;
            default:
                s = 0
            }
            var c = As.getScrollTop();
            Ts(a.top + s, {
                duration: r,
                scrollTop: c
            })
        }
    }
    hr.mixin(As);
    var Os = "mip-i-space"
      , js = {
        NODISPLAY: "nodisplay",
        FIXED: "fixed",
        FIXED_HEIGHT: "fixed-height",
        RESPONSIVE: "responsive",
        CONTAINER: "container",
        FILL: "fill",
        FLEX_ITEM: "flex-item",
        INTRINSIC: "intrinsic"
    }
      , Hs = {
        "mip-pix": {
            width: "1px",
            height: "1px"
        },
        "mip-stats": {
            width: "1px",
            height: "1px"
        },
        "mip-audio": null
    };
    function Ns(e) {
        return parseFloat(e)
    }
    function Rs(e) {
        return "number" == typeof e ? e + "px" : e && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(e) ? /^\d+(\.\d+)?$/.test(e) ? e + "px" : e : void 0
    }
    function Ds(e) {
        var t, n, r, i = e.getAttribute("layout"), o = e.getAttribute("width"), a = e.getAttribute("height"), s = e.getAttribute("sizes"), c = e.getAttribute("heights"), u = i ? function(e) {
            for (var t in js)
                if (js[t] === e)
                    return e
        }(i) : null, l = o && "auto" !== o ? Rs(o) : o, f = a ? Rs(a) : null;
        if (u && u !== js.FIXED && u !== js.FIXED_HEIGHT || l && f || !function(e) {
            return e = e.toLowerCase(),
            void 0 !== Hs[e]
        }(e.tagName))
            t = l,
            n = f;
        else {
            var d = function(e) {
                var t = e.tagName.toLowerCase();
                if (!Hs[t]) {
                    var n = e.ownerDocument
                      , r = t.replace(/^mip-/, "")
                      , i = n.createElement(r);
                    i.controls = !0,
                    i.style.position = "absolute",
                    i.style.visibility = "hidden",
                    n.body.appendChild(i),
                    Hs[t] = {
                        width: (i.offsetWidth || 1) + "px",
                        height: (i.offsetHeight || 1) + "px"
                    },
                    n.body.removeChild(i)
                }
                return Hs[t]
            }(e);
            t = l || u === js.FIXED_HEIGHT ? l : d.width,
            n = f || d.height
        }
        switch (r = u || (t || n ? !n || t && "auto" !== t ? n && t && (s || c) ? js.RESPONSIVE : js.FIXED : js.FIXED_HEIGHT : js.CONTAINER),
        e.classList.add(function(e) {
            return "mip-layout-" + e
        }(r)),
        function(e) {
            return e === js.FIXED || e === js.FIXED_HEIGHT || e === js.RESPONSIVE || e === js.FILL || e === js.FLEX_ITEM || e === js.INTRINSIC
        }(r) && e.classList.add("mip-layout-size-defined"),
        r) {
        case js.NODISPLAY:
            Ti(e, {
                display: "none"
            });
            break;
        case js.FIXED:
            Ti(e, {
                width: t,
                height: n
            });
            break;
        case js.FIXED_HEIGHT:
            Ti(e, {
                height: n
            });
            break;
        case js.RESPONSIVE:
            var h = e.spaceElement || e.ownerDocument.createElement(Os);
            h.innerHTML = "space",
            Ti(h, {
                display: "block",
                paddingTop: Ns(n) / Ns(t) * 100 + "%"
            }),
            e.insertBefore(h, e.firstChild),
            e.spaceElement = h;
            break;
        case js.INTRINSIC:
            var p = e.spaceElement || ri.create('\n        <mip-i-space class="mip-i-space">\n          <img class="mip-i-intrinsic-space" />\n        </mip-i-space>');
            p.firstElementChild.setAttribute("src", 'data:image/svg+xml;charset=utf-8,<svg height="'.concat(n, '" width="').concat(t, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')),
            e.insertBefore(p, e.firstChild),
            e.spaceElement = p;
            break;
        case js.FILL:
        case js.CONTAINER:
            break;
        case js.FLEX_ITEM:
            t && Ti(e, {
                width: t
            }),
            n && Ti(e, {
                height: n
            })
        }
        return e.classList.contains("mip-hidden") && e.classList.remove("mip-hidden"),
        r
    }
    var Fs = bo("Element-Action");
    function qs(e, t) {
        void 0 === t && (t = e.hasAttribute("hidden")),
        t ? e.removeAttribute("hidden") : e.setAttribute("hidden", "")
    }
    function Bs(e) {
        var t = e.target;
        if (t.getAttribute("layout") !== js.NODISPLAY)
            if (t.hasAttribute("hidden") || "none" !== getComputedStyle(t).display) {
                var n = function(e) {
                    return e.hasAttribute("autofocus") ? e : e.querySelector("[autofocus]")
                }(t);
                qs(t, !0),
                n && zs({
                    target: n
                })
            } else
                Fs.warn("\b\u4e0d\u662f\u901a\u8fc7 hidden \u5c5e\u6027\u9690\u85cf\u7684\u5143\u7d20\u4e0d\u80fd\u88ab\u52a8\u6001 show");
        else
            Fs.warn("layout=nodisplay \u7684\u5143\u7d20\u4e0d\u80fd\u88ab\u52a8\u6001 show")
    }
    function Us(e) {
        qs(e.target, !1)
    }
    function zs(e) {
        e.target.focus()
    }
    var Ws = {
        show: Bs,
        hide: Us,
        focus: zs,
        scrollTo: function(e) {
            var t = e.args;
            Ms(e.target, t)
        },
        toggleClass: function(e) {
            var t = e.args
              , n = e.target
              , r = t.class
              , i = t.force;
            if (r && "string" == typeof r)
                return void 0 !== i ? ("boolean" != typeof i && Fs.warn("force \u5fc5\u987b\u662f boolean \u7c7b\u578b"),
                void n.classList.toggle(r, i)) : void n.classList.toggle(r);
            Fs.warn("class \u4e0d\u80fd\u4e3a\u7a7a\u4e14\u5fc5\u987b\u662f string \u7c7b\u578b")
        },
        toggleVisibility: function(e) {
            var t = e.target;
            t.hasAttribute("hidden") ? Bs({
                target: t
            }) : Us({
                target: t
            })
        }
    };
    function Vs(e) {
        var t = e.object
          , n = e.property
          , r = e.options
          , i = e.argumentText
          , o = document.getElementById(t);
        if (o) {
            var a, s = {
                handler: n,
                event: r.event,
                target: o,
                arg: i || ""
            };
            if (i)
                try {
                    a = Uu(i, "MIPActionArguments")(r),
                    s.args = a[0]
                } catch (e) {}
            if (function(e) {
                return e && e.tagName && Vr.test(e.tagName.toLowerCase())
            }(o))
                if (s.args && (s.arg = a.map(function(e) {
                    return JSON.stringify(e)
                }).join(",")),
                o.executeEventAction(s))
                    return;
            if (Ws[n])
                return Ws[n](s);
            Fs.warn("\u627e\u4e0d\u5230\u540d\u4e3a ".concat(n, " \u7684\u65b9\u6cd5"))
        } else
            Fs.warn("\u627e\u4e0d\u5230 id \u4e3a ".concat(t, " \u7684 element"))
    }
    var $s = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , Gs = function() {
        function e() {
            ur(this, e),
            this.attr = "on"
        }
        return fr(e, [{
            key: "execute",
            value: function(e, t, n) {
                if (t) {
                    var r, i = "[" + this.attr + "]";
                    do {
                        if (r = t.getAttribute(this.attr))
                            if (Uu(r)({
                                event: n,
                                eventName: e,
                                target: t
                            }),
                            !(t = t.parentElement))
                                return;
                        t = ri.closest(t, i)
                    } while (t)
                }
            }
        }]),
        e
    }()
      , Xs = !1;
    try {
        var Qs = Object.defineProperty({}, "passive", {
            get: function() {
                Xs = !0
            }
        });
        window.addEventListener("testPassive", null, Qs),
        window.removeEventListener("testPassive", null, Qs)
    } catch (e) {}
    var Js = Xs
      , Ys = "transitionend"
      , Zs = "animationend";
    void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ys = "webkitTransitionEnd"),
    void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Zs = "webkitAnimationEnd");
    function Ks(e) {
        return "%" + e.charCodeAt(0).toString(16)
    }
    var ec = Ys
      , tc = Zs
      , nc = "mip-page__iframe"
      , rc = {
        header: {
            title: "",
            logo: "",
            buttonGroup: [],
            show: !1
        },
        view: {
            isIndex: !1
        }
    }
      , ic = "router-push"
      , oc = "router-replace"
      , ac = "router-back"
      , sc = "router-forward"
      , cc = "page-cross-origin"
      , uc = "page-broadcast-event"
      , lc = "page-resize"
      , fc = "page-active"
      , dc = "non-exists-page-id"
      , hc = "resize-page"
      , pc = "scroll-to-anchor"
      , vc = "show-page"
      , mc = "hide-page"
      , yc = "mippageload"
      , gc = "performance-update"
      , wc = "stability-log"
      , bc = "push-state"
      , Ec = "replace-state"
      , kc = /[!'()*]/g
      , Sc = /%2C/g
      , Pc = function(e) {
        return encodeURIComponent(e).replace(kc, Ks).replace(Sc, ",")
    }
      , _c = decodeURIComponent;
    function xc(e) {
        var t;
        try {
            t = function(e) {
                var i = {};
                return (e = e.trim().replace(/^(\?|#|&)/, "")) && e.split("&").forEach(function(e) {
                    var t = e.replace(/\+/g, " ").split("=")
                      , n = _c(t.shift())
                      , r = 0 < t.length ? _c(t.join("=")) : null;
                    void 0 === i[n] ? i[n] = r : Array.isArray(i[n]) ? i[n].push(r) : i[n] = [i[n], r]
                }),
                i
            }(e || "")
        } catch (e) {
            t = {}
        }
        return t
    }
    function Ic(r) {
        var e = r ? Object.keys(r).map(function(t) {
            var e = r[t];
            if (void 0 === e)
                return "";
            if (null === e)
                return Pc(t);
            if (Array.isArray(e)) {
                var n = [];
                return e.forEach(function(e) {
                    void 0 !== e && (null === e ? n.push(Pc(t)) : n.push(Pc(t) + "=" + Pc(e)))
                }),
                n.join("&")
            }
            return Pc(t) + "=" + Pc(e)
        }).filter(function(e) {
            return 0 < e.length
        }).join("&") : null;
        return e ? "?".concat(e) : ""
    }
    function Lc(e, t, n) {
        var r = e.charAt(0);
        if ("/" === r)
            return e;
        if ("?" === r || "#" === r)
            return t + e;
        var i = t.split("/");
        n && i[i.length - 1] || i.pop();
        for (var o = e.replace(/^\//, "").split("/"), a = 0; a < o.length; a++) {
            var s = o[a];
            ".." === s ? i.pop() : "." !== s && i.push(s)
        }
        return "" !== i[0] && i.unshift(""),
        i.join("/")
    }
    function Ac(e) {
        var t = ""
          , n = ""
          , r = e.indexOf("#");
        0 <= r && (t = e.slice(r),
        e = e.slice(0, r));
        var i = e.indexOf("?");
        return 0 <= i && (n = e.slice(i + 1),
        e = e.slice(0, i)),
        {
            path: e,
            query: n,
            hash: t
        }
    }
    function Tc() {
        return window.location.href
    }
    function Cc(e) {
        return e && e.replace(/#.*$/, "")
    }
    var Mc = /\/?$/
      , Oc = /^(http(?:s?):\/\/[^/]+)(.*)/;
    function jc(e, t) {
        var n = e;
        "string" == typeof e && (n = {
            path: e
        });
        var r = n.path.match(Oc);
        r && (n.origin = r[1],
        n.path = r[2]);
        var i = n.origin || t.origin
          , o = t && t.path || "/"
          , a = Ac(n.path || "")
          , s = a.path ? Lc(a.path, o) : o
          , c = xc(a.query)
          , u = n.hash || a.hash;
        return u && "#" !== u.charAt(0) && (u = "#".concat(u)),
        {
            origin: i,
            path: s,
            query: c,
            hash: u,
            meta: n.meta || {},
            fullPath: Fc({
                origin: i,
                path: s,
                query: c,
                hash: u
            })
        }
    }
    var Hc, Nc, Rc, Dc = (Nc = {
        origin: (Hc = {
            path: "/"
        }).origin || window.location.origin,
        path: Hc.path || Hc.pathname,
        query: Hc.query || xc(Hc.search),
        hash: Hc.hash,
        meta: Hc.meta || {}
    },
    Rc = Fc(Nc),
    Nc.fullPath = Rc,
    Object.freeze(Nc));
    function Fc(e) {
        var t = e.href
          , n = e.origin
          , r = void 0 === n ? window.location.origin : n
          , i = e.path
          , o = void 0 === i ? "/" : i
          , a = e.query
          , s = void 0 === a ? {} : a
          , c = e.hash
          , u = void 0 === c ? "" : c;
        return t || r + o + Ic(s) + u
    }
    function qc(e, t, n) {
        return t === Dc ? e === t : !!t && (e.origin === t.origin && (!(!e.path || !t.path) && (e.path.replace(Mc, "") === t.path.replace(Mc, "") && (n || e.hash === t.hash) && function r() {
            var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (!i || !o)
                return i === o;
            var e = Object.keys(i);
            var t = Object.keys(o);
            if (e.length !== t.length)
                return !1;
            return e.every(function(e) {
                var t = i[e]
                  , n = o[e];
                return "object" === cr(t) && "object" === cr(n) ? r(t, n) : String(t) === String(n)
            })
        }(e.query, t.query))))
    }
    var Bc = Nr
      , Uc = "mip-shell-header"
      , zc = "mip-page-loading-wrapper"
      , Wc = "mip-page-fade-header-wrapper"
      , Vc = ['<svg t="1530857979993" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3173"', 'xmlns:xlink="http://www.w3.org/1999/xlink">', '<path  fill="currentColor" d="M348.949333 511.829333L774.250667 105.728C783.978667 96 789.333333 83.712 789.333333 71.104c0-12.629333-5.354667-24.917333-15.082666-34.645333-9.728-9.728-22.037333-15.082667-34.645334-15.082667-12.586667 0-24.917333 5.333333-34.624 15.082667L249.557333 471.616A62.570667 62.570667 0 0 0 234.666667 512c0 10.410667 1.130667 25.408 14.890666 40.042667l455.424 435.605333c9.706667 9.728 22.016 15.082667 34.624 15.082667s24.917333-5.354667 34.645334-15.082667c9.728-9.728 15.082667-22.037333 15.082666-34.645333 0-12.608-5.354667-24.917333-15.082666-34.645334L348.949333 511.829333z"', 'p-id="3174"></path>', "</svg>"].join("");
    function $c(e) {
        var t = e.fullpath
          , n = e.pageId
          , r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , i = r.onLoad
          , o = r.onError
          , a = document.querySelector(".".concat(nc, '[data-page-id="').concat(n, '"]'));
        a && a.parentNode.removeChild(a),
        (a = document.createElement("iframe")).onload = function() {
            "function" == typeof i && i(a)
        }
        ,
        a.onerror = function() {
            "function" == typeof o && o(a)
        }
        ;
        var s = jc(n).origin
          , c = JSON.stringify({
            standalone: window.MIP.standalone,
            isRootPage: !1,
            isCrossOrigin: s !== window.location.origin,
            rootName: window.MIP.viewer.rootName
        });
        return a.setAttribute("name", c),
        window.MIP.standalone || (-1 === t.indexOf("#") ? t += "#mipservice=" + window.mipService : t += "&mipservice=" + window.mipService),
        a.setAttribute("src", t),
        a.setAttribute("class", nc),
        a.style.height = "".concat(As.getHeight(), "px"),
        a.setAttribute("width", "100%"),
        a.setAttribute("scrolling", zr.isIos() ? "no" : "yes"),
        a.setAttribute("data-page-id", n),
        a.setAttribute("sandbox", "allow-top-navigation allow-popups allow-scripts allow-forms allow-pointer-lock allow-popups-to-escape-sandbox allow-same-origin allow-modals"),
        document.body.appendChild(a),
        a
    }
    function Gc(e) {
        return "string" == typeof e ? document.querySelector(".".concat(nc, '[data-page-id="').concat(e, '"]')) : e
    }
    function Xc() {
        var e = document.querySelectorAll(".".concat(nc));
        if (e)
            for (var t = 0; t < e.length; t++)
                Ti(e[t], {
                    display: "none",
                    opacity: 0
                })
    }
    function Qc(e, t) {
        return ['<div class="'.concat(Uc, '">'), "<span ".concat(t ? "" : "mip-header-btn", ' class="back-button">'), Vc, "</span>", '<div class="'.concat(Uc, '-logo-title">'), '<img class="'.concat(Uc, '-logo" src="').concat(e, '">'), '<span class="'.concat(Uc, '-title"></span>'), "</div>", "</div>"].join("")
    }
    function Jc(e) {
        var t = document.querySelector("#" + zc);
        if (t)
            return t;
        var n = e && e.header.logo || "";
        return (t = document.createElement("mip-fixed")).id = zc,
        t.setAttribute("class", zc),
        t.innerHTML = Qc(n, !1),
        document.body.appendChild(t),
        t
    }
    function Yc(e, t, n, r, i) {
        Ti(e, "background-color", r),
        Ti(t.querySelectorAll("svg"), "fill", n),
        Ti(t.querySelector(".".concat(Uc, "-title")), "color", n),
        Ti(t.querySelector(".".concat(Uc, "-logo")), "border-color", i),
        Ti(t.querySelector(".".concat(Uc, "-button-group")), "border-color", i),
        Ti(t.querySelector(".".concat(Uc, "-button-group .split")), "background-color", i)
    }
    function Zc(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , n = t.onlyHeader
          , r = t.transitionContainsHeader
          , i = "#" + zc
          , o = document.querySelector(i);
        if (o || (Jc(),
        o = document.querySelector(i)),
        !e)
            return o;
        if (!r && n)
            return Ti(o, "display", "none"),
            o;
        o.classList.toggle("transition-without-header", !r),
        r && o.classList.toggle("only-header", !!n);
        var a = o.querySelector("." + Uc);
        r && e.header.show ? Ti(a, "display", "flex") : Ti(a, "display", "none");
        var s = o.querySelector(".".concat(Uc, "-logo"));
        if (e.header.logo ? (s.setAttribute("src", e.header.logo),
        Ti(s, "display", "block")) : Ti(s, "display", "none"),
        e.header.title && (o.querySelector(".".concat(Uc, "-title")).innerHTML = e.header.title),
        Ti(o.querySelector(".back-button"), "display", e.view.isIndex ? "none" : "flex"),
        r && e.header.show) {
            var c = e.header
              , u = c.color
              , l = void 0 === u ? "#000000" : u
              , f = c.borderColor
              , d = c.backgroundColor
              , h = void 0 === d ? "#ffffff" : d;
            Yc(o.querySelector("." + Uc), o, l, h, f)
        }
        return o
    }
    function Kc(e, t) {
        var n = "#" + Wc
          , r = document.querySelector(n);
        if (r || (function(e) {
            var t = document.querySelector("#" + Wc);
            if (t)
                return;
            var n = e && e.header.logo || "";
            (t = document.createElement("mip-fixed")).id = Wc,
            t.setAttribute("class", Wc),
            t.innerHTML = Qc(n, !0),
            document.body.appendChild(t)
        }(),
        r = document.querySelector(n)),
        !e)
            return r;
        var i = r.querySelector(".".concat(Uc, "-logo"));
        e.header.logo ? (i.setAttribute("src", e.header.logo),
        Ti(i, "display", "block")) : Ti(i, "display", "none"),
        e.header.title && (r.querySelector(".".concat(Uc, "-title")).innerHTML = e.header.title),
        Ti(r.querySelector(".back-button"), "display", e.view.isIndex ? "none" : "flex");
        var o = t ? t.header : {}
          , a = o.color
          , s = void 0 === a ? "#000000" : a
          , c = o.borderColor
          , u = void 0 === c ? "#e1e1e1" : c
          , l = o.backgroundColor
          , f = void 0 === l ? "#ffffff" : l;
        return Yc(r.querySelector("." + Uc), r, s, f, u),
        r
    }
    function eu(e, t) {
        var n = Kc(t);
        e ? (Ti(n, "display", "block"),
        n.classList.add("fade-enter", "fade-enter-active"),
        n.offsetWidth,
        ru(n, "transition", function() {
            n.classList.remove("fade-enter-to", "fade-enter")
        }),
        nu(function() {
            n.classList.add("fade-enter-to"),
            n.classList.remove("fade-enter")
        })) : Ti(n, "display", "none")
    }
    function tu() {
        return !(!window.MIP.standalone || !document.querySelector("mip-shell[disabled]"))
    }
    function nu(e) {
        Bc(function() {
            Bc(e)
        })
    }
    function ru(t, e, n) {
        if (!e)
            return n();
        function r(e) {
            e.target === t && o()
        }
        var i = "transition" === e ? ec : tc
          , o = function() {
            t.removeEventListener(i, r),
            n()
        };
        t.addEventListener(i, r)
    }
    var iu = []
      , ou = [];
    function au(e) {
        if ("HTML" === e.tagName)
            return "html.1";
        if (e === document.body)
            return "html.1/body.1";
        for (var t = 0, n = e.parentNode.childNodes, r = 0; r < n.length; r++) {
            var i = n[r];
            if (i === e)
                return au(e.parentNode) + "/" + e.tagName.toLowerCase() + "." + (t + 1);
            1 === i.nodeType && i.tagName === e.tagName && t++
        }
    }
    var su = {
        sendLog: function() {
            var e = Co(document.querySelectorAll("mip-img[firstscreen]"))
              , t = Co(document.querySelectorAll("mip-img[mip-firstscreen-element]"));
            e.forEach(function(e) {
                e.hasAttribute("mip-firstscreen-element") || ou.push(au(e))
            }),
            t.forEach(function(e) {
                e.hasAttribute("firstscreen") || iu.push(au(e))
            });
            var n = iu.join(",") + "!!" + ou.join(",");
            Cu.sendMessage("performance-analysis-log", {
                type: "fslabel",
                info: n
            })
        }
    }
      , cu = "two-way"
      , uu = "PM_REQUEST"
      , lu = "PM_RESPONSE"
      , fu = {};
    function du(e) {
        var t = fu[e.data.name];
        if (t)
            t.processMessageEvent(e);
        else
            for (var n in fu)
                fu[n].processMessageEvent(e)
    }
    var hu = function() {
        function t() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            ur(this, t),
            hr.mixin(this),
            this.targetWindow = e.targetWindow || top,
            this.targetOrigin = e.targetOrigin || "*",
            this.sourceOrigins = e.sourceOrigins || ["*"],
            this.timeout = e.timeout || 500,
            this.name = e.name || window.name,
            this.defers = {},
            this.handlers = {},
            fu[this.name],
            fu[this.name] = this,
            t.bindHandler()
        }
        return fr(t, [{
            key: "processMessageEvent",
            value: function(e) {
                for (var t = e.origin || e.originalEvent.origin, n = this, r = !1, i = 0; i < n.sourceOrigins.length; i++) {
                    var o = n.sourceOrigins[i];
                    if ("*" === o) {
                        r = !0;
                        break
                    }
                    if (o === t) {
                        r = !0;
                        break
                    }
                }
                if (r) {
                    var a = e.data;
                    if (a)
                        if (a.type === cu) {
                            if (!a.sentinel || !a.sessionId)
                                return;
                            if (a.sentinel === uu) {
                                var s = {};
                                if (n.handlers[a.event])
                                    try {
                                        s = n.handlers[a.event].call(n, a)
                                    } catch (e) {
                                        s = {
                                            error: e
                                        }
                                    }
                                var c = function(e) {
                                    Ar(e = e || {}, {
                                        type: cu,
                                        sentinel: lu,
                                        sessionId: a.sessionId,
                                        name: n.name
                                    }),
                                    n.getWindow().postMessage(e, n.targetOrigin)
                                };
                                s && "function" == typeof s.then ? s.then(function(e) {
                                    return c(e)
                                }).catch(function(e) {
                                    return c({
                                        error: e
                                    })
                                }) : c(s)
                            } else if (a.sentinel === lu) {
                                var u = n.defers[a.sessionId];
                                if (delete n.defers[a.sessionId],
                                !u)
                                    return;
                                clearTimeout(u.timer),
                                a.error ? u.reject(a.error) : u.resolve(a)
                            }
                        } else {
                            if (!a || !a.event)
                                return;
                            n.trigger(a.event, a.data)
                        }
                }
            }
        }, {
            key: "sendMessage",
            value: function(i, o, a) {
                var s = this
                  , c = this;
                return new Promise(function(e, t) {
                    var n = {
                        name: c.name,
                        event: i,
                        sender: "mip/2",
                        data: o
                    }
                      , r = (1e3 * (new Date).getTime() + Math.ceil(1e3 * Math.random())).toString(36);
                    a ? (Ar(n, {
                        type: cu,
                        sentinel: uu,
                        sessionId: r
                    }),
                    c.defers[r] = {
                        resolve: e.bind(s),
                        reject: t.bind(s),
                        timer: setTimeout(function() {
                            delete c.defers[r],
                            t(new Error("timeout"))
                        }, c.timeout)
                    }) : setTimeout(e, 0),
                    c.getWindow().postMessage(n, c.targetOrigin)
                }
                )
            }
        }, {
            key: "setHandler",
            value: function(e, t) {
                if ("function" != typeof t)
                    throw new Error("Invalid handler for event " + e);
                this.handlers[e] = t
            }
        }, {
            key: "removeHandler",
            value: function(e) {
                this.handlers[e] = void 0
            }
        }, {
            key: "destory",
            value: function() {
                delete fu[this.name]
            }
        }, {
            key: "getWindow",
            value: function() {
                return this.targetWindow instanceof HTMLIFrameElement ? this.targetWindow.contentWindow : this.targetWindow
            }
        }], [{
            key: "bindHandler",
            value: function() {
                window.removeEventListener("message", du),
                window.addEventListener("message", du)
            }
        }]),
        t
    }()
      , pu = new (function() {
        function e() {
            var t = this;
            ur(this, e),
            this.isPrerendering = !1,
            this.isPrerendered = !1,
            this.queue = [],
            this.messager = new hu({
                name: jr(window.name)
            }),
            "1" === ci.get("prerender") && (this.isPrerendering = !0,
            new Promise(function(e) {
                t.messager.on(fc, function() {
                    t.isPrerendering = !1,
                    function() {
                        var e = window
                          , t = e.location
                          , n = t.hash.replace(/prerender=1&?/, "");
                        e.history.replaceState("", document.title, t.pathname + t.search + n)
                    }(),
                    e()
                }),
                t.messager.sendMessage("prerender-interactive", {
                    time: Date.now()
                })
            }
            ).then(function() {
                var e;
                for (t.isPrerendered = !0,
                xu.recordTiming("MIPPageShow"),
                xu.lockFirstScreen(),
                xu.recordTiming("MIPElementBuildStart"); e = t.queue.shift(); )
                    e()
            }).then(function() {
                xu.recordTiming("MIPElementBuildEnd")
            }))
        }
        return fr(e, [{
            key: "getPrerenderState",
            value: function() {
                return {
                    prerendering: this.isPrerendering,
                    prerendered: this.isPrerendered
                }
            }
        }, {
            key: "execute",
            value: function(e, t) {
                this.isPrerendering && !function(e) {
                    if (!e || !e.getAttribute)
                        return !1;
                    var t = e.getAttribute("prerender");
                    return null != e.getAttribute("firstscreen") || null != t && "false" !== t
                }(t) ? this.queue.push(e) : e()
            }
        }]),
        e
    }())
      , vu = []
      , mu = !1
      , yu = !1
      , gu = {}
      , wu = new hr
      , bu = !1;
    function Eu() {
        var e = window.performance;
        return Ar(e && e.timing ? e.timing.toJSON ? e.timing.toJSON() : Ar({}, e.timing) : {}, gu)
    }
    function ku(e, t) {
        gu[e] = parseInt(t, 10) || Date.now(),
        wu.trigger("update", Eu())
    }
    function Su() {
        gu.MIPFirstScreen || 0 === vu.length && ku("MIPFirstScreen")
    }
    function Pu() {
        if (!pu.isPrerendering) {
            var t = As.getRect();
            vu = vu.filter(function(e) {
                return pu.isPrerendered ? e._resources.isInViewport(e, t) : e.inViewport()
            }).map(function(e) {
                return e.setAttribute("mip-firstscreen-element", ""),
                e
            }),
            mu = !0,
            Su(),
            !pu.isPrerendered && su.sendLog()
        }
    }
    function _u() {
        bu || (ku("MIPDomContentLoaded"),
        setTimeout(function() {
            Pu()
        }, 10),
        bu = !0)
    }
    var xu = {
        start: function(e) {
            yu || (yu = !0,
            ku("MIPStart", e),
            Cu.on("show", function(e) {
                ku("MIPPageShow", e)
            }),
            document.addEventListener("DOMContentLoaded", _u, !1),
            document.onreadystatechange = function() {
                "complete" === document.readyState && _u()
            }
            )
        },
        addFsElement: function(e) {
            mu || vu.push(e)
        },
        fsElementLoaded: function(e) {
            !function(e) {
                var t = vu.indexOf(e);
                -1 !== t && vu.splice(t, 1)
            }(e),
            Su()
        },
        getTiming: Eu,
        recordTiming: ku,
        lockFirstScreen: Pu,
        on: function() {
            wu.on.apply(wu, arguments)
        }
    }
      , Iu = function() {
        function e() {
            ur(this, e),
            Object.assign(this, window.MIP.viewer.pageMeta),
            this.pageId = void 0,
            this.fullpath = void 0,
            this.pageMeta = void 0,
            this.currentPageId = void 0,
            this.targetWindow = window,
            this.children = []
        }
        return fr(e, [{
            key: "initPageId",
            value: function() {
                this.fullpath = window.location.href,
                this.pageId = Cc(this.fullpath),
                this.currentPageId = this.pageId
            }
        }, {
            key: "scrollToHash",
            value: function(e) {
                if ("string" == typeof e && "#" === e[0]) {
                    var t = e.slice(1);
                    try {
                        var n = document.getElementById(t) || document.getElementById(decodeURIComponent(t)) || document.querySelector('a[name="'.concat(t, '"]'));
                        n && Ms(n, {
                            duration: 500,
                            position: "top"
                        })
                    } catch (e) {}
                }
            }
        }, {
            key: "notifyRootPage",
            value: function(e) {
                this.isRootPage ? window.postMessage(e, window.location.origin) : window.parent.postMessage(e, this.isCrossOrigin ? "*" : window.location.origin)
            }
        }, {
            key: "destroy",
            value: function() {}
        }, {
            key: "start",
            value: function() {
                var t = this;
                !function() {
                    if (!document.querySelector("mip-shell") && !document.querySelector("[mip-shell]")) {
                        var e = document.createElement("mip-shell")
                          , t = document.createElement("script");
                        t.setAttribute("type", "application/json"),
                        t.innerHTML = '{"ignoreWarning": true}',
                        e.appendChild(t),
                        document.body.appendChild(e)
                    }
                }(),
                this.initPageId(),
                xu.on("update", function(e) {
                    e.MIPFirstScreen && t.scrollToHash(window.location.hash)
                }),
                window.addEventListener(pc, function(e) {
                    t.scrollToHash(e.detail[0])
                }),
                this.emitEventInCurrentPage({
                    name: vc
                });
                var e = window.location.hash.match(/mipservice=(\d)/);
                window.mipService = e ? e[1] : "1"
            }
        }, {
            key: "togglePageMask",
            value: function(e, t) {
                this.isRootPage || this.emitCustomEvent(window.parent, !0, {
                    name: "mipShellEvents",
                    data: {
                        type: "togglePageMask",
                        data: {
                            toggle: e,
                            options: t
                        }
                    }
                })
            }
        }, {
            key: "toggleDropdown",
            value: function(e) {
                no(this.isRootPage ? window : window.parent, "mipShellEvents", {
                    type: "toggleDropdown",
                    data: {
                        toggle: e
                    }
                })
            }
        }, {
            key: "toggleFadeHeader",
            value: function(e, t) {
                eu(e, t)
            }
        }, {
            key: "emitCustomEvent",
            value: function(e, t, n) {
                t ? e.postMessage({
                    type: cc,
                    data: n
                }, "*") : no(e, n.name, n.data)
            }
        }, {
            key: "broadcastCustomEvent",
            value: function(t) {
                this.isRootPage ? (no(window, t.name, t.data),
                this.children.forEach(function(e) {
                    e.targetWindow && e.targetWindow.postMessage({
                        type: cc,
                        data: t
                    }, "*")
                })) : window.parent.postMessage({
                    type: uc,
                    data: t
                }, "*")
            }
        }, {
            key: "back",
            value: function() {
                this.notifyRootPage({
                    type: ac
                })
            }
        }, {
            key: "forward",
            value: function() {
                this.notifyRootPage({
                    type: sc
                })
            }
        }, {
            key: "push",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                this.notifyRootPage({
                    type: ic,
                    data: {
                        route: e,
                        options: t
                    }
                })
            }
        }, {
            key: "replace",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                this.notifyRootPage({
                    type: oc,
                    data: {
                        route: e,
                        options: t
                    }
                })
            }
        }, {
            key: "prerender",
            value: function(e) {
                if (!this.isCrossOrigin)
                    return (this.isRootPage ? this : window.parent.MIP.viewer.page).prerenderPages(e);
                console.warn("\u8de8\u57df MIP \u9875\u9762\u6682\u4e0d\u652f\u6301\u9884\u6e32\u67d3")
            }
        }, {
            key: "emitEventInCurrentPage",
            value: function(e) {
                var t = this.getPageById(this.currentPageId);
                this.emitCustomEvent(t.targetWindow, t.isCrossOrigin, e)
            }
        }, {
            key: "addChild",
            value: function(e) {
                for (var t = 0; t < this.children.length; t++)
                    if (this.children[t].pageId === e.pageId) {
                        this.children.splice(t, 1);
                        break
                    }
                this.children.push(e)
            }
        }, {
            key: "checkIfExceedsMaxPageNum",
            value: function(e) {
                if (this.isRootPage) {
                    if (6 <= this.children.length) {
                        for (var t, n = [], r = !1, i = 0; i < this.children.length; i++)
                            if ((t = this.children[i]).pageId === e || t.pageId === this.currentPageId)
                                ;
                            else {
                                var o = Gc(t.pageId);
                                if ("1" !== o.getAttribute("prerender"))
                                    return void (o && o.parentNode && (o.parentNode.removeChild(o),
                                    this.children.splice(i, 1),
                                    r = !0));
                                n.push({
                                    iframe: o,
                                    index: i
                                })
                            }
                        if (!r)
                            for (var a = 0; a < n.length; a++) {
                                var s = n[a].iframe;
                                if (s && s.parentNode)
                                    return s.parentNode.removeChild(s),
                                    void this.children.splice(n[a].index, 1)
                            }
                    }
                } else
                    console.warn("\u8be5\u65b9\u6cd5\u53ea\u80fd\u5728 rootPage \u8c03\u7528")
            }
        }, {
            key: "getPageById",
            value: function(e) {
                if (!e)
                    return this;
                for (var t = 0; t < this.children.length; t++)
                    if (this.children[t].pageId === e)
                        return this.children[t];
                return e === this.pageId ? this : null
            }
        }, {
            key: "getElementsInRootPage",
            value: function() {
                var e = [".mip-page__iframe", ".mip-page-loading-wrapper", ".mip-page-fade-header-wrapper", "mip-shell", "[mip-shell]", "[mip-shell-inner]", ".mip-shell-header-wrapper", ".mip-shell-more-button-mask", ".mip-shell-more-button-wrapper", ".mip-shell-header-mask", "[mip-global-component]"].map(function(e) {
                    return ":not(".concat(e, ")")
                }).join("");
                return Co(document.querySelectorAll("body > ".concat(e)))
            }
        }, {
            key: "prerenderPages",
            value: function(e) {
                var a = this;
                if (!this.isRootPage)
                    return console.warn("\u8be5\u65b9\u6cd5\u53ea\u80fd\u5728 rootPage \u8c03\u7528"),
                    Promise.reject();
                if ("string" == typeof e && (e = [e]),
                !Array.isArray(e))
                    return Promise.reject("\u9884\u6e32\u67d3\u53c2\u6570\u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u7ec4");
                var s = function(e) {
                    var t;
                    if ((t = a.isRootPage || a.isCrossOrigin ? window : window.parent).MIP_PAGE_META_CACHE[e])
                        return t.MIP_PAGE_META_CACHE[e];
                    for (var n = 0; n < t.MIP_SHELL_CONFIG.length; n++) {
                        var r = t.MIP_SHELL_CONFIG[n];
                        if (r.regexp.test(e))
                            return t.MIP_PAGE_META_CACHE[e] = r.meta,
                            r.meta
                    }
                    return console.warn("Cannot find MIP Shell Config for current page. Use default instead."),
                    Object.assign({}, rc)
                };
                return Promise.all(e.map(function(e) {
                    if (window.MIP.viewer._isCrossOrigin(e))
                        return console.warn("\u8de8\u57df MIP \u9875\u9762\u6682\u4e0d\u652f\u6301\u9884\u6e32\u67d3", e),
                        Promise.resolve();
                    var t = Ac(e);
                    if (t.query) {
                        var n = Ic(xc(t.query));
                        "?" === n.charAt(0) && (n = n.substring(1, n.length)),
                        e = e.replace(t.query, n)
                    }
                    return function(e) {
                        var i = e.fullpath
                          , o = e.pageId;
                        return new Promise(function(n, t) {
                            var r = a
                              , e = Gc(o);
                            if (e) {
                                if ("2" === e.contentWindow.MIP.version)
                                    return void n(e);
                                e.parentNode.removeChild(e)
                            }
                            $c({
                                fullpath: i + "#prerender=1",
                                pageId: o
                            }, {
                                onLoad: function(e) {
                                    e.setAttribute("prerender", "1");
                                    var t = {
                                        pageId: o,
                                        pageMeta: Ar(!0, {}, s(o)),
                                        fullpath: i,
                                        standalone: window.MIP.standalone,
                                        isRootPage: !1,
                                        isCrossOrigin: !1,
                                        isPrerender: !0
                                    };
                                    t.targetWindow = e.contentWindow,
                                    r.addChild(t),
                                    r.checkIfExceedsMaxPageNum(o),
                                    n(e)
                                },
                                onError: function(e) {
                                    t(e)
                                }
                            })
                        }
                        )
                    }({
                        fullpath: e,
                        pageId: Cc(e)
                    })
                }))
            }
        }]),
        e
    }()
      , Lu = new (function() {
        function e() {
            ur(this, e),
            this._fixedLayer = null,
            this._count = 0,
            this._isAndroidUc = zr.isUc() && !zr.isIos(),
            this._fixedElements = []
        }
        return fr(e, [{
            key: "init",
            value: function() {
                var e = document.body.querySelectorAll("mip-fixed, mip-semi-fixed");
                this.setFixedElement(e);
                var t = this._fixedElements.length
                  , n = window.MIP.viewer.isIframed;
                if (zr.isIos() && n) {
                    this.getFixedLayer();
                    for (var r = 0; r < t; r++) {
                        var i = this._fixedElements[r];
                        if ("mip-semi-fixed" === i.element.tagName.toLowerCase()) {
                            var o = i.element
                              , a = o.parentNode
                              , s = o.nextElementSibling
                              , c = o.cloneNode(!0);
                            s ? a.insertBefore(c, s) : a.appendChild(c)
                        }
                        i.element.hasAttribute("still") || this.moveToFixedLayer(i, r)
                    }
                }
                window.MIP.standalone || this.doCustomElements()
            }
        }, {
            key: "setFixedElement",
            value: function(e, t) {
                for (var n = {}, r = 0; r < e.length; r++) {
                    var i = e[r]
                      , o = i.getAttribute("type")
                      , a = Rs(i.getAttribute("bottom"))
                      , s = Rs(i.getAttribute("top"));
                    if ("left" === o && !s && !a || "gototop" === o && "mip-gototop" !== i.firstElementChild.tagName.toLowerCase() || "mip-semi-fixed" !== i.tagName.toLowerCase() && "mip-fixed" !== i.tagName.toLowerCase())
                        i.parentElement && i.parentElement.removeChild(i);
                    else {
                        "mip-semi-fixed" === i.tagName.toLowerCase() && (i.id || (i.id = "mip-semi-fixed" + this._count),
                        o = "semi-fixed"),
                        Ti(i, {
                            "z-index": 1e4 - this._count
                        }),
                        this._isAndroidUc && Ti(i, {
                            position: "absolute"
                        }),
                        this.setFixedElementRule(i, o);
                        var c = "Fixed" + this._count;
                        if ((n = {
                            id: c,
                            element: i
                        }).element.setAttribute("mipdata-fixedIdx", c),
                        this._count++,
                        this._fixedElements.push(n),
                        t)
                            return this.moveToFixedLayer(n, this._count),
                            1e4 - this._count
                    }
                }
            }
        }, {
            key: "getFixedLayer",
            value: function() {
                if (this._fixedLayer)
                    return this._fixedLayer;
                this._fixedLayer = document.createElement("body"),
                this._fixedLayer.className = "mip-fixedlayer";
                var e = this._isAndroidUc ? "100%" : 0
                  , t = this._isAndroidUc ? "100%" : 0;
                return Ti(this._fixedLayer, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: e,
                    width: t,
                    "pointer-events": "none",
                    overflow: "hidden",
                    animation: "none",
                    "-webkit-animation": "none",
                    border: "none",
                    "box-sizing": "border-box",
                    "box-shadow": "none",
                    display: "block",
                    float: "none",
                    margin: 0,
                    opacity: 1,
                    outline: "none",
                    transform: "none",
                    transition: "none",
                    visibility: "visible",
                    background: "none"
                }),
                document.getElementsByTagName("html")[0].appendChild(this._fixedLayer),
                this._fixedLayer
            }
        }, {
            key: "moveToFixedLayer",
            value: function(e, t) {
                var n = e.element;
                n.parentElement !== this._fixedLayer && (e.placeholder || (Ti(n, {
                    "pointer-events": "initial"
                }),
                e.placeholder = document.createElement("mip-i-ph"),
                e.placeholder.setAttribute("mipdata-fixedIdx", e.id),
                e.placeholder.style.display = "none"),
                n.parentElement.replaceChild(e.placeholder, n),
                this.getFixedLayer().appendChild(n))
            }
        }, {
            key: "doCustomElements",
            value: function() {
                var e = document.styleSheets;
                if (e)
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        n.disabled || !n.ownerNode || "STYLE" !== n.ownerNode.tagName || n.ownerNode.hasAttribute("mip-extension") || this._findFixedSelectors(n.cssRules)
                    }
            }
        }, {
            key: "_findFixedSelectors",
            value: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t]
                      , r = n.type;
                    if (1 === r) {
                        if ("*" !== n.selectorText && "fixed" === n.style.position)
                            try {
                                for (var i = n.selectorText, o = document.querySelectorAll(i), a = 0; a < o.length; a++) {
                                    var s = o[a];
                                    "MIP-FIXED" !== s.tagName && (s.style.cssText = "display: none!important",
                                    console.warn(s, "\u53d1\u73b0 position: fixed \u6837\u5f0f, \u8bf7\u4f7f\u7528 mip-fixed \u7ec4\u4ef6\u4ee3\u66ff"))
                                }
                            } catch (e) {
                                console.warn("Cannot find the selector of custom fixed elements")
                            }
                    } else
                        4 === r ? this._findFixedSelectors(n.cssRules) : 12 === r && this._findFixedSelectors(n.cssRules)
                }
            }
        }, {
            key: "setFixedElementRule",
            value: function(e, t) {
                switch (t) {
                case "top":
                case "bottom":
                    break;
                case "right":
                case "left":
                    this.setStyle(e);
                    break;
                case "semi-fixed":
                    break;
                case "gototop":
                    e.style.bottom = "90px",
                    e.style.right = "10%";
                    break;
                default:
                    e.style.display = "none"
                }
            }
        }, {
            key: "setStyle",
            value: function(e) {
                var t = Rs(e.getAttribute("bottom"));
                if (t)
                    e.style.bottom = t;
                else {
                    var n = Rs(e.getAttribute("top"));
                    n && (e.style.top = n)
                }
            }
        }, {
            key: "showFixedLayer",
            value: function(e) {
                e && Ti(e, {
                    display: "block"
                })
            }
        }, {
            key: "hideFixedLayer",
            value: function(e) {
                e && Ti(e, {
                    display: "none"
                })
            }
        }, {
            key: "setPlaceholder",
            value: function(e) {
                var t = document.body.querySelector("div[mip-fixed-placeholder]");
                t || ((t = document.createElement("div")).setAttribute("mip-fixed-placeholder", ""),
                Gu.css(t, {
                    position: "relative",
                    display: "none"
                }),
                document.body.appendChild(t)),
                e && Gu.css(t, {
                    display: "block",
                    height: e + "px"
                })
            }
        }]),
        e
    }())
      , Au = window
      , Tu = !!Js && {
        passive: !0
    }
      , Cu = {
        init: function() {
            var e = this;
            this.rootName = jr(window.name),
            this.rootName = jr(window.name);
            var t = pu.messager;
            this.messager = t || new hu({
                name: this.rootName
            }),
            this._gesture = new eo(document,{
                preventX: !1
            }),
            this.setupEventAction(),
            this.page = new Iu,
            this.handleBrowserQuirks(),
            this.page.start(),
            this.isShow = !0,
            this._showTiming = Date.now(),
            this.trigger("show", this._showTiming),
            (this.fixedElement = Lu).init(),
            tu() || setTimeout(function() {
                return e._proxyLink(e.page)
            })
        },
        isIframed: Au !== top,
        show: function() {
            document.body.setAttribute("mip-ready", ""),
            Au.MIP.viewer.page.isRootPage && this.sendMessage(yc, {
                time: Date.now(),
                title: encodeURIComponent(document.title)
            })
        },
        sendMessage: function(e) {
            var t = this
              , n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            Au.MIP.standalone || pu.execute(function() {
                pu.isPrerendered && n.time && (n.time = Date.now()),
                t.messager.sendMessage(e, n)
            }),
            this.sendMessageToBaiduApp(e, n)
        },
        sendMessageToBaiduApp: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (zr.isBaiduApp()) {
                var n, r = ($s(n = {}, yc, "hideloading"),
                $s(n, gc, "perf"),
                $s(n, bc, "click"),
                $s(n, Ec, "click"),
                n)[e];
                if (zr.isAndroid() && r && window._flyflowNative && window._flyflowNative.exec("bd_mip", "onMessage", JSON.stringify({
                    type: 5,
                    act: r,
                    data: t
                }), ""),
                zr.isIOS()) {
                    var i = document.createElement("iframe")
                      , o = encodeURIComponent(JSON.stringify({
                        act: r,
                        data: t
                    }));
                    i.style.display = "none",
                    document.body.appendChild(i),
                    i.src = "baiduboxapp://mipPageShow?service=bd_mip&action=onMeessage&args=".concat(o, "&callbackId=''"),
                    setTimeout(function() {
                        return i.parentNode.removeChild(i)
                    })
                }
            }
        },
        onMessage: function(e, t) {
            Au.MIP.standalone || this.messager.on(e, t)
        },
        setupEventAction: function() {
            var e = Mr()
              , t = this.eventAction = new Gs
              , n = kr(function(e) {
                e.value = e.target.value,
                t.execute("input-debounced", e.target, e)
            }, 300)
              , r = Er(function(e) {
                e.value = e.target.value,
                t.execute("input-throttled", e.target, e)
            }, 100);
            e ? this._gesture.on("tap", function(e) {
                t.execute("tap", e.target, e)
            }) : document.addEventListener("click", function(e) {
                t.execute("tap", e.target, e)
            }, !1),
            document.addEventListener("click", function(e) {
                t.execute("click", e.target, e)
            }, !1),
            document.addEventListener("input", function(e) {
                n(e),
                r(e)
            }, !1),
            di.delegate(document, "input", "change", function(e) {
                e.value = e.target.value,
                t.execute("change", e.target, e)
            })
        },
        navigateTo: function(e, t, n) {
            -1 !== ["_blank", "_top"].indexOf(t) && ("_blank" === t ? this.openWindow(e, t, n) : this.open(e, {
                replace: !0,
                isMipLink: !1
            }))
        },
        openWindow: function(e, t, n) {
            var r, i;
            !zr.isIOS() && zr.isChrome() || !1 !== n || (r = "noopener");
            try {
                i = window.open(e, t, r)
            } catch (e) {}
            return i || "_top" === t || (i = window.open(e, "_top")),
            i && !1 === n && (i.opener = null),
            i
        },
        open: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.isMipLink
              , r = void 0 === n || n
              , i = t.replace
              , o = void 0 !== i && i
              , a = t.state
              , s = t.cacheFirst;
            a || (a = {
                click: void 0,
                title: void 0,
                defaultTitle: void 0
            });
            var c = "";
            -1 < e.lastIndexOf("#") && (c = e.substring(e.lastIndexOf("#")));
            var u = c && -1 < e.indexOf(window.location.origin + window.location.pathname);
            if (e)
                if ((this._isCrossOrigin(e) || tu()) && window.MIP.standalone && !window.MIP.util.isCacheUrl(location.href) || !r && !u)
                    o ? window.top.location.replace(e) : window.top.location.href = e;
                else {
                    var l = {
                        url: Wu(/^\/\//.test(e) ? location.protocol + e : "/" === e.charAt(0) || "." === e.charAt(0) ? location.origin + Lc(e, location.pathname) : e),
                        state: a,
                        click: Date.now()
                    };
                    this.sendMessage(o ? Ec : bc, l);
                    var f, d = window.MIP.standalone && !window.MIP.util.isCacheUrl(location.href) ? e : zu(e), h = d.split("#"), p = "#", v = MIP.hash._getHashObj(h[1] || ""), m = MIP.hash._getHashObj(location.hash), y = !0;
                    for (var g in m)
                        "=" !== m[g].sep && delete m[g];
                    for (var w in v)
                        if ("=" !== v[w].sep) {
                            y = !1;
                            break
                        }
                    for (var b in f = y ? Object.assign({}, m, v) : v)
                        "cambrian" !== b && (p += "".concat(b).concat(f[b].sep).concat(f[b].value, "&"));
                    var E = {
                        path: d = h[0] + p.substr(0, p.length - 1)
                    };
                    r && (E.meta = {
                        reload: !0,
                        cacheFirst: s,
                        header: {
                            title: l.state.title,
                            defaultTitle: l.state.defaultTitle
                        }
                    }),
                    u || o ? this.page.replace(E, {
                        allowTransition: !0
                    }) : this.page.push(E, {
                        allowTransition: !0
                    })
                }
        },
        _bindEventCallback: function(e, t) {
            "show" === e && this.isShow && "function" == typeof t && t.call(this, this._showTiming)
        },
        viewportScroll: function() {
            var t = this
              , n = 0
              , r = 0
              , i = As.getScrollTop()
              , o = As.getScrollHeight()
              , a = 0
              , e = As.scroller;
            function s(e) {
                i = As.getScrollTop(),
                o = As.getScrollHeight(),
                0 < i && i < o ? (a < i ? r = 1 : i < a && (r = -1),
                n = a - i,
                a = i,
                (10 < n || n < -10) && t.sendMessage("mipscroll", {
                    direct: r,
                    dist: n
                })) : 0 === i && t.sendMessage("mipscroll", {
                    direct: 0
                })
            }
            e.addEventListener("touchstart", function(e) {
                i = As.getScrollTop(),
                o = As.getScrollHeight()
            }, Tu),
            e.addEventListener("touchmove", function(e) {
                return s()
            }, Tu),
            e.addEventListener("touchend", function(e) {
                return s()
            })
        },
        _proxyLink: function() {
            var s = this
              , c = /^http/
              , u = /^tel:/;
            di.delegate(document, "a", "click", function(e) {
                var t = this.hasAttribute("mip-link") || "mip" === this.getAttribute("data-type");
                if (t || "_blank" !== this.getAttribute("target")) {
                    var n = this.href
                      , r = this.hasAttribute("replace")
                      , i = this.hasAttribute("cache-first")
                      , o = s._getMipLinkData.call(this);
                    if (!zr.isUc() || !u.test(n))
                        if (c.test(n)) {
                            if (window.MIP.standalone || "2" === window.mipService)
                                s.open(n, {
                                    isMipLink: t,
                                    replace: r,
                                    state: o,
                                    cacheFirst: i
                                });
                            else if (t) {
                                var a = s._getMessageData.call(this);
                                s.sendMessage(a.messageKey, a.messageData)
                            } else
                                top.location.href = this.href;
                            e.preventDefault()
                        } else
                            this.setAttribute("target", "_top")
                }
            }, !1)
        },
        _getMipLinkData: function() {
            var e = this.parentNode;
            return {
                click: this.getAttribute("data-click") || e.getAttribute("data-click") || void 0,
                title: this.getAttribute("data-title") || e.getAttribute("title") || void 0,
                defaultTitle: this.innerText.trim().split("\n")[0] || void 0
            }
        },
        _getMessageData: function() {
            var e = {};
            if (e.url = this.href,
            this.hasAttribute("no-head") && (e.nohead = !0),
            this.hasAttribute("mip-link")) {
                var t = this.parentNode;
                e.title = t.getAttribute("title") || t.innerText.trim().split("\n")[0],
                e.click = t.getAttribute("data-click")
            } else
                e.title = this.getAttribute("data-title") || this.innerText.trim().split("\n")[0],
                e.click = this.getAttribute("data-click");
            return {
                messageKey: "loadiframe",
                messageData: e
            }
        },
        handleBrowserQuirks: function() {
            var e = this;
            if (zr.needSpecialScroll || setTimeout(function() {
                document.documentElement.classList.add("mip-i-android-scroll"),
                document.body.classList.add("mip-i-android-scroll")
            }, 0),
            zr.isIos()) {
                var t = zr.getOsVersion();
                if (t = t ? t.split(".")[0] : "",
                setTimeout(function() {
                    document.documentElement.classList.add("mip-i-ios-scroll"),
                    document.documentElement.classList.add("mip-i-ios-width"),
                    window.addEventListener("orientationchange", function() {
                        document.documentElement.classList.remove("mip-i-ios-scroll"),
                        setTimeout(function() {
                            document.documentElement.classList.add("mip-i-ios-scroll")
                        })
                    })
                }, 0),
                this.page.isRootPage || this.fixIOSPageFreeze(),
                this.isIframed)
                    setTimeout(function() {
                        e.fixSoftKeyboard(),
                        e.viewportScroll()
                    }, 0),
                    this.lockBodyScroll(),
                    ("8" === t && zr.isUc() && 320 === screen.width || ("9" === t || "10" === t) && zr.isSafari() || ("8" === t || "9" === t || "10" === t) && (zr.isUc() || zr.isBaiduApp() || zr.isBaidu())) && window.addEventListener("pageshow", function(e) {
                        e.persisted && (document.body.style.display = "none",
                        location.reload())
                    })
            }
            zr.isAndroid() && setTimeout(function() {
                document.documentElement.classList.add("trigger-layout"),
                document.body.classList.add("trigger-layout")
            })
        },
        fixIOSPageFreeze: function() {
            var t = document.createElement("style")
              , n = document.head || document.getElementsByTagName("head")[0];
            t.setAttribute("mip-bouncy-scrolling", ""),
            t.textContent = "* {-webkit-overflow-scrolling: auto!important;}",
            zr.isSafari() || zr.isChrome() || (window.addEventListener(vc, function(e) {
                try {
                    n.removeChild(t)
                } catch (e) {}
            }),
            window.addEventListener(mc, function(e) {
                n.appendChild(t)
            }))
        },
        fixSoftKeyboard: function() {
            zr.isAndroid() && window.addEventListener("resize", function() {
                var e = document.activeElement
                  , t = e.tagName.toLowerCase();
                !e || "input" !== t && "textarea" !== t || setTimeout(function() {
                    "function" == typeof e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded() : "function" == typeof e.scrollIntoView && (e.scrollIntoView(),
                    document.body.scrollTop -= 44)
                }, 250)
            })
        },
        lockBodyScroll: function() {
            As.on("scroll", function() {
                var e = As.getScrollTop()
                  , t = As.getScrollHeight();
                0 === e ? As.setScrollTop(1) : e === t && As.setScrollTop(e - 1)
            }, Tu),
            document.documentElement.classList.add("trigger-layout"),
            document.body.classList.add("trigger-layout"),
            As.setScrollTop(1)
        },
        _isCrossOrigin: function(e) {
            var t = e;
            if (1 === t.length || "/" === t.charAt(0) && "/" !== t.charAt(1) || "." === t.charAt(0))
                return !1;
            if (/^http(s?):\/\//i.test(t)) {
                if (!new RegExp("^" + location.protocol,"i").test(t))
                    return !0;
                t = t.replace(/^http(s?):\/\//i, "")
            } else
                /^\/\//.test(t) && (t = t.substring(2, t.length));
            var n = t.split("/")[0];
            return location.host !== n
        }
    };
    hr.mixin(Cu);
    var Mu = bo("MIP-Action");
    function Ou(e) {
        var t = e.url
          , n = e.target
          , r = e.opener;
        Cu.navigateTo(t, n, r)
    }
    var ju = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,m".split(",")
      , Hu = {};
    var Nu = {
        setData: function(e) {
            MIP.setData(e)
        },
        $set: function(e) {
            MIP.$set(e)
        },
        scrollTo: function(e) {
            var t = e.id
              , n = e.duration
              , r = e.position;
            t && Ms(document.getElementById(t), {
                duration: n,
                position: r
            })
        },
        navigateTo: Ou,
        closeOrNavigateTo: function(e) {
            var t = window.parent !== window
              , n = !1;
            window.opener && !t && (window.close(),
            n = window.closed),
            n || Ou(e)
        },
        goBack: function() {
            window.history.back()
        },
        print: function() {
            window.print()
        }
    };
    function Ru(e) {
        var t = e.property
          , n = e.argumentText
          , r = e.options
          , i = Nu[t];
        if (!i)
            throw new Error("\u4e0d\u652f\u6301\u5728 on \u8868\u8fbe\u5f0f\u4e2d\u4f7f\u7528 MIP.".concat(t, " \u5168\u5c40\u65b9\u6cd5"));
        if (n)
            if ("setData" !== t && "$set" !== t) {
                i(Uu(n, "MIPActionArguments")(r)[0])
            } else {
                var o, a;
                try {
                    a = (o = Uu(n, "ObjectLiteral"))(r)
                } catch (e) {
                    o && Mu.error(e),
                    a = function(e) {
                        var t = e.argumentText
                          , n = e.options;
                        e.deprecate && !Hu[t] && (Hu[t] = new Function("DOM","with(this){return ".concat(t, "}")),
                        Mu.warn("\u5f53\u524d\u7684 setData \u53c2\u6570\u5b58\u5728\u4e0d\u7b26\u5408 MIP-bind \u89c4\u8303\u8981\u6c42\u7684\u5730\u65b9\uff0c\u8bf7\u53ca\u65f6\u8fdb\u884c\u4fee\u6539:"),
                        Mu.warn(t));
                        var r = Hu[t]
                          , i = "undefined" != typeof Proxy ? new Proxy({
                            DOM: n.target
                        },{
                            has: function(e, t) {
                                return e[t] || ju.indexOf(t) < 0
                            }
                        }) : {};
                        return r.call(Object.assign(i, {
                            event: n.event
                        }))
                    }({
                        argumentText: n,
                        options: r,
                        deprecate: !o
                    })
                }
                i(a)
            }
        else
            i()
    }
    var Du = bo("Event-Action")
      , Fu = {
        MIPEventHandlers: function(e) {
            var n = []
              , t = !0
              , r = !1
              , i = void 0;
            try {
                for (var o, a = e.node.handlers[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                    var s = o.value;
                    n.push(e.traverse(s))
                }
            } catch (e) {
                r = !0,
                i = e
            } finally {
                try {
                    t || null == a.return || a.return()
                } finally {
                    if (r)
                        throw i
                }
            }
            return function() {
                for (var e = 0, t = n; e < t.length; e++) {
                    (0,
                    t[e])()
                }
            }
        },
        MIPEventHandler: function(e) {
            var i = e.node.event
              , o = []
              , t = !0
              , n = !1
              , r = void 0;
            try {
                for (var a, s = e.node.actions[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                    var c = a.value;
                    o.push(e.traverse(c))
                }
            } catch (e) {
                n = !0,
                r = e
            } finally {
                try {
                    t || null == s.return || s.return()
                } finally {
                    if (n)
                        throw r
                }
            }
            return function(e) {
                if (e.eventName === i)
                    for (var t = 0, n = o; t < n.length; t++) {
                        var r = n[t];
                        try {
                            r()
                        } catch (e) {
                            Du.error(e)
                        }
                    }
            }
        },
        MIPAction: function(e) {
            var t = e.node
              , n = t.object
              , r = t.property
              , i = t.argumentText;
            return "MIP" === n ? function(e) {
                return Ru({
                    options: e,
                    object: n,
                    property: r,
                    argumentText: i
                })
            }
            : function(e) {
                return Vs({
                    options: e,
                    object: n,
                    property: r,
                    argumentText: i
                })
            }
        },
        MIPActionArguments: function(e) {
            var t = []
              , n = !0
              , r = !1
              , i = void 0;
            try {
                for (var o, a = e.node.arguments[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                    var s = o.value;
                    t.push(e.traverse(s))
                }
            } catch (e) {
                r = !0,
                i = e
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r)
                        throw i
                }
            }
            return function() {
                return Co(t.map(function(e) {
                    return e()
                }))
            }
        }
    }
      , qu = new Jo({
        lexer: Yo,
        visitor: Object.assign({}, Fu, Es),
        type: "MIPEventHandlers"
    })
      , Bu = {};
    function Uu(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "MIPEventHandlers";
        if (Bu[n] || (Bu[n] = {}),
        !Bu[n][t])
            try {
                var e = qu.transform(t, n);
                Bu[n][t] = e
            } catch (e) {
                Bu[n][t] = e
            }
        if (Bu[n][t]instanceof Error)
            throw Bu[n][t];
        return Bu[n][t]
    }
    function zu(e, t, n) {
        if (Or(e) || !Or(location.href) || e && e.length < 8 || 0 !== e.indexOf("http") && 0 !== e.indexOf("//"))
            return e;
        var r = "img" === t ? "/i/" : "/c/";
        0 !== e.indexOf("//") && 0 !== e.indexOf("https") || (r += "s/");
        var i = e.split("//");
        i.shift();
        var o = i[0].substring(0, i[0].indexOf("/"))
          , a = r + (e = i.join("//"));
        return n && (a = location.protocol + "//" + o.replace(/-/g, "--").replace(/\./g, "-") + ".mipcdn.com" + a),
        a
    }
    function Wu(e) {
        if (!e)
            return e;
        if (0 !== e.indexOf("http") && 0 !== e.indexOf("/"))
            return e;
        var t = new RegExp("^(http(?:s?):)?(//([^/]+))?/[ic](/s)?/(.*)$","g").exec(e);
        if (!t)
            return e;
        var n = t[4] ? "https:" : "http:";
        n += t[5] ? "//" + t[5] : "";
        return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/.test(n) ? n : e
    }
    function Vu(e, t) {
        return $u.call(e, t)
    }
    var $u = Object.prototype.hasOwnProperty
      , Gu = {
        fn: Ur,
        dom: ri,
        event: di,
        rect: si,
        css: Ti,
        hash: ci,
        platform: zr,
        parseCacheUrl: Wu,
        makeCacheUrl: zu,
        getOriginalUrl: function(e) {
            e || (e = window.location.href);
            var t = Wu(e);
            if (t === e)
                return t;
            var n = t.split("#")[0]
              , r = ci.get("mipanchor");
            return n + (r.length ? "#" : "") + r
        },
        isCacheUrl: function(e) {
            return Or(e)
        },
        EventEmitter: hr,
        Gesture: eo,
        customEmit: no,
        customStorage: function(e) {
            switch (e) {
            case io:
                return new po;
            case ro:
                return new ho;
            case oo:
                return new vo
            }
        },
        naboo: qi,
        jsonParse: wo,
        templates: So,
        Deferred: Po,
        log: bo,
        string: Ei,
        parse: Uu
    }
      , Xu = function() {
        function e() {
            ur(this, e)
        }
        return fr(e, null, [{
            key: "extensions",
            value: function() {
                return Ju.getService("extensions")
            }
        }, {
            key: "timer",
            value: function() {
                return Ju.getService("timer")
            }
        }, {
            key: "vueCompat",
            value: function() {
                return Ju.getService("vue-compat")
            }
        }]),
        e
    }()
      , Qu = function() {
        function e() {
            ur(this, e)
        }
        return fr(e, null, [{
            key: "getServices",
            value: function(e) {
                var t = e.services;
                return t || (t = e.services = {}),
                t
            }
        }, {
            key: "instantiateService",
            value: function(e) {
                var t = e.instance;
                if (t)
                    return t;
                var n = e.resolve
                  , r = e.context;
                return t = new e.Constructor(r),
                e.instance = t,
                e.context = null,
                e.Constructor = null,
                n && n(t),
                t
            }
        }, {
            key: "registerService",
            value: function(e, t, n, r, i) {
                var o = this.getServices(e)
                  , a = o[t];
                return a || (a = o[t] = {
                    instance: null,
                    promise: null,
                    resolve: null,
                    context: null,
                    Constructor: null
                }),
                a.instance || a.Constructor || (a.context = n,
                a.Constructor = r,
                (a.resolve || i) && this.instantiateService(a)),
                a
            }
        }, {
            key: "registerPendingService",
            value: function(e, t) {
                var n = this.getServices(e)[t] = {
                    instance: null,
                    context: null,
                    Constructor: null
                }
                  , r = new Po
                  , i = r.promise
                  , o = r.resolve;
                return n.promise = i,
                n.resolve = o,
                n
            }
        }, {
            key: "getService",
            value: function(e, t) {
                var n = this.getServices(e)[t];
                return this.instantiateService(n)
            }
        }, {
            key: "getServiceOrNull",
            value: function(e, t) {
                var n = this.getServices(e)[t];
                return n && (n.instance || n.Constructor) ? this.instantiateService(n) : null
            }
        }, {
            key: "getServicePromiseOrNull",
            value: function(e, t) {
                var n = this.getServices(e)[t];
                return n ? (n.promise || (n.promise = Promise.resolve(this.instantiateService(n))),
                n.promise) : null
            }
        }, {
            key: "getServicePromise",
            value: function(e, t) {
                var n = this.getServicePromiseOrNull(e, t);
                return n || this.registerPendingService(e, t).promise
            }
        }]),
        e
    }()
      , Ju = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        return br(t, Xu),
        fr(t, null, [{
            key: "registerService",
            value: function(e, t, n) {
                Qu.registerService(window, e, window, t, n)
            }
        }, {
            key: "getService",
            value: function(e) {
                return Qu.getService(window, e)
            }
        }, {
            key: "getServiceOrNull",
            value: function(e) {
                return Qu.getServiceOrNull(window, e)
            }
        }, {
            key: "getServicePromiseOrNull",
            value: function(e) {
                return Qu.getServicePromiseOrNull(window, e)
            }
        }, {
            key: "getServicePromise",
            value: function(e) {
                return Qu.getServicePromise(window, e)
            }
        }]),
        t
    }();
    var Yu, Zu = {
        insertStyleElement: function(e, t, n, r, i) {
            var o = e.createElement("style")
              , a = null;
            return o.textContent = n,
            i ? o.setAttribute("mip-main", "") : (o.setAttribute("mip-extension", r || ""),
            a = t.querySelector("style[mip-main]")),
            function(e, t, n) {
                n ? n.nextSibling ? e.insertBefore(t, n.nextSibling) : e.appendChild(t) : e.insertBefore(t, e.firstChild)
            }(t, o, a),
            o
        }
    }, Ku = {}, el = 0, tl = new (function() {
        function e() {
            ur(this, e),
            this._rid = el++,
            this._eid = 0,
            Ku[this._rid] = {},
            this.updateState = this._update.bind(this),
            this._viewport = As,
            this._rafId = null,
            this._gesture = new eo(document,{
                preventX: !1
            }),
            this._bindEvent()
        }
        return fr(e, [{
            key: "_bindEvent",
            value: function() {
                var r, i = this;
                this._viewport.on("changed resize", this.updateState),
                this._gesture.on("swipe", function(e, t) {
                    var n = Math.round(600 * t.velocity);
                    n < 100 && (n = 100),
                    600 < n && (n = 600),
                    clearTimeout(r),
                    r = setTimeout(i.updateState, n)
                })
            }
        }, {
            key: "add",
            value: function(e) {
                var t = this;
                e._eid = this._eid++,
                Ku[this._rid][e._eid] = e,
                pu.execute(function() {
                    e.build(),
                    t.updateState()
                }, e)
            }
        }, {
            key: "remove",
            value: function(e) {
                var t = e._eid || e;
                return !(!isFinite(+t) || !Ku[this._rid][t]) && (e.unlayoutCallback && e.unlayoutCallback(),
                delete Ku[this._rid][t],
                !0)
            }
        }, {
            key: "getResources",
            value: function() {
                return Ku[this._rid]
            }
        }, {
            key: "getResourcesList",
            value: function() {
                return Sr(this.getResources())
            }
        }, {
            key: "setInViewport",
            value: function(e, t) {
                e.inViewport() !== t && e.viewportCallback(t)
            }
        }, {
            key: "isInViewport",
            value: function(e, t) {
                var n = si.getElementRect(e);
                return e.prerenderAllowed(n, t) || si.overlapping(n, t) || 0 === n.bottom && 0 === n.top && 1 === t.top
            }
        }, {
            key: "_update",
            value: function() {
                var e = this;
                return this._rafId || (this._rafId = Nr(function() {
                    return e._doRealUpdate()
                })),
                this._rafId
            }
        }, {
            key: "_doRealUpdate",
            value: function() {
                for (var e = this.getResources(), t = this._viewport.getRect(), n = []; ; ) {
                    var r = Object.keys(e)
                      , i = r.filter(function(e) {
                        return n.indexOf(e) < 0
                    });
                    if (n = r,
                    !i.length)
                        break;
                    for (var o = 0, a = i.length; o < a; o++) {
                        var s = e[i[o]];
                        if (s && s.isBuilt())
                            try {
                                var c = this.isInViewport(s, t);
                                this.setInViewport(s, c)
                            } catch (e) {
                                console.warn(e)
                            }
                    }
                }
                this._rafId = null
            }
        }, {
            key: "prerenderElement",
            value: function(e) {
                e.inViewport && !e.inViewport() && e.viewportCallback && e.viewportCallback(!0)
            }
        }]),
        e
    }()), nl = {
        mip1: {},
        mip2: {}
    }, rl = {
        get: function(e, t) {
            switch (e = e.toLowerCase(),
            t) {
            case "mip1":
                return nl.mip1[e];
            case "mip2":
                return nl.mip2[e];
            default:
                return nl.mip2[e] || nl.mip1[e] || void 0
            }
        },
        set: function(e, t, n) {
            if ("mip2" !== n && "mip1" !== n)
                throw new Error("type: ".concat(n, " must be mip1 or mip2"));
            nl[n][e.toLowerCase()] = t
        }
    };
    function il(e) {
        var t = Object.create(function() {
            if (Yu)
                return Yu;
            var e = Object.create(HTMLElement.prototype);
            return e.createdCallback = function() {
                var e = rl.get(this.tagName, "mip1");
                this.classList.add("mip-element"),
                this._inViewport = !1,
                this._firstInViewport = !1,
                this._resources = tl;
                var t = this.customElement = new e(this);
                t.createdCallback(),
                t.hasResources() && xu.addFsElement(this)
            }
            ,
            e.attachedCallback = function() {
                this._layout = Ds(this),
                this.customElement.attachedCallback(),
                this._resources.add(this)
            }
            ,
            e.detachedCallback = function() {
                this.customElement.detachedCallback(),
                this._resources.remove(this),
                xu.fsElementLoaded(this)
            }
            ,
            e.attributeChangedCallback = function(e, t, n, r) {
                var i = arguments
                  , o = this.customElement;
                pu.execute(function() {
                    o.attributeChangedCallback.apply(o, Co(i))
                }, this)
            }
            ,
            e.inViewport = function() {
                return this._inViewport
            }
            ,
            e.viewportCallback = function(e) {
                this._inViewport = e,
                this._firstInViewport || (this._firstInViewport = !0,
                this.customElement.firstInviewCallback()),
                this.customElement.viewportCallback(e)
            }
            ,
            e.isBuilt = function() {
                return this._built
            }
            ,
            e.prerenderAllowed = function() {
                return this.customElement.prerenderAllowed()
            }
            ,
            e.build = function() {
                if (!this.isBuilt())
                    try {
                        this.customElement.build(),
                        this._built = !0,
                        no(this, "build")
                    } catch (e) {
                        no(this, "build-error", e),
                        console.error(e)
                    }
            }
            ,
            e.executeEventAction = function(e) {
                return this.customElement.executeEventAction(e)
            }
            ,
            e.resourcesComplete = function() {
                xu.fsElementLoaded(this)
            }
            ,
            Yu = e
        }());
        return t.name = e,
        t
    }
    function ol(e, t, n) {
        if (!rl.get(e)) {
            rl.set(e, t, "mip1");
            var r = []
              , i = il(e)
              , o = i.createdCallback;
            return i.createdCallback = function() {
                o.call(this),
                r.push(this)
            }
            ,
            function(e, t) {
                e && Zu.insertStyleElement(document, document.head, e, t, !1)
            }(n, e),
            document.registerElement(e, {
                prototype: i
            }),
            r
        }
    }
    var al = function(e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]")
    }
      , sl = e(function(r) {
        function i(e, t, n) {
            return !function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }() ? r.exports = i = function(e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r));
                return n && wr(i, n.prototype),
                i
            }
            : r.exports = i = Reflect.construct,
            i.apply(null, arguments)
        }
        r.exports = i
    })
      , cl = e(function(t) {
        function r(e) {
            var n = "function" == typeof Map ? new Map : void 0;
            return t.exports = r = function(e) {
                if (null === e || !al(e))
                    return e;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== n) {
                    if (n.has(e))
                        return n.get(e);
                    n.set(e, t)
                }
                function t() {
                    return sl(e, arguments, gr(this).constructor)
                }
                return t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                wr(t, e)
            }
            ,
            r(e)
        }
        t.exports = r
    });
    function ul(e, l) {
        var t = e.split(",")
          , f = [];
        return t.forEach(function(e) {
            if (0 !== (e = e.replace(/\s+/g, " ").trim()).length) {
                var t, n, r, i = !1;
                if (")" === e.charAt(e.length - 1)) {
                    i = !0;
                    var o = 1;
                    for (r = e.length - 2; 0 <= r; r--) {
                        var a = e.charAt(r);
                        if ("(" === a ? o-- : ")" === a && o++,
                        0 === o)
                            break
                    }
                    var s = r - 1;
                    if (0 < r)
                        for (r--; 0 <= r; r--) {
                            var c = e.charAt(r);
                            if (!("%" === c || "-" === c || "_" === c || "a" <= c && c <= "z" || "A" <= c && c <= "Z" || "0" <= c && c <= "9"))
                                break
                        }
                    if (s <= r)
                        throw new Error('Invalid CSS function in "'.concat(e, '"'))
                } else
                    for (r = e.length - 2; 0 <= r; r--) {
                        var u = e.charAt(r);
                        if (!("%" === u || "." === u || "a" <= u && u <= "z" || "A" <= u && u <= "Z" || "0" <= u && u <= "9"))
                            break
                    }
                if (0 <= r ? (t = e.substring(0, r + 1).trim(),
                n = e.substring(r + 1).trim()) : (n = e,
                t = void 0),
                !i) {
                    if (l && !/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(n))
                        throw new Error("Invalid length or percent value: ".concat(n));
                    if (!l && !/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(n))
                        throw new Error("Invalid length value: ".concat(n))
                }
                f.push({
                    mediaQuery: t,
                    size: n
                })
            }
        }),
        new ll(f)
    }
    var ll = function() {
        function r(e) {
            if (ur(this, r),
            !(0 < e.length))
                throw new Error("SizeList must have at least one option");
            this._sizes = e;
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (t < e.length - 1) {
                    if (!n.mediaQuery)
                        throw new Error("All options except for the last must have a media condition")
                } else if (n.mediaQuery)
                    throw new Error("The last option must not have a media condition")
            }
        }
        return fr(r, [{
            key: "select",
            value: function(e) {
                for (var t = this._sizes, n = t.length - 1, r = 0; r < n; r++) {
                    var i = t[r]
                      , o = i.mediaQuery;
                    if (e.matchMedia(o).matches)
                        return i.size
                }
                return t[n].size
            }
        }]),
        r
    }();
    var fl = function(e) {
        function r(e) {
            var t;
            ur(this, r),
            (t = yr(this, gr(r).call(this, e))).name = t.tagName.toLowerCase(),
            t._inViewport = !1,
            t._firstInViewport = !1,
            t._resources = tl,
            t._loadingContainer = null,
            t._loadingElement = null,
            t._loadingDisabled = void 0,
            t._mediaQuery = void 0,
            t._sizeList = void 0,
            t._heightsList = void 0,
            t._layout = js.NODISPLAY,
            t.spaceElement = void 0;
            var n = rl.get(t.name, "mip2");
            return t.vueCompat = Ju.vueCompat(),
            t.customElement = new n(mr(t)),
            t.propTypes = t.vueCompat.getPropTypes(t.name, n),
            t.defaultProps = t.vueCompat.getDefaultProps(t.name, n),
            t.customElement.props = {},
            t.customElement.hasResources() && xu.addFsElement(mr(t)),
            t
        }
        return br(r, e),
        fr(r, [{
            key: "connectedCallback",
            value: function() {
                this.customElement.props = this.getProps(),
                this.classList.add("mip-element"),
                this._layout = Ds(this),
                this.applySizesAndMediaQuery(),
                this.customElement.connectedCallback(),
                this._resources.add(this)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                this.customElement.disconnectedCallback(),
                this._resources && this._resources.remove(this)
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, t, n) {
                var r = yi(e);
                if (this.isBuilt() && Vu(this.propTypes, r) && t !== n) {
                    var i = this.customElement.props[r]
                      , o = this.vueCompat.parseAttribute(n, this.propTypes[r])
                      , a = "handle".concat(gi(r), "Change");
                    this.customElement.props[r] = o,
                    "function" != typeof this.customElement[a] || null === t && o === this.defaultProps[r] || this.customElement[a](i, o)
                }
                this.customElement.attributeChangedCallback(e, t, n)
            }
        }, {
            key: "layoutCallback",
            value: function() {
                return this.toggleLoading(!0),
                this.customElement.layoutCallback()
            }
        }, {
            key: "unlayoutCallback",
            value: function() {
                return this.customElement.unlayoutCallback()
            }
        }, {
            key: "createPlaceholder",
            value: function() {
                return this.customElement.createPlaceholderCallback()
            }
        }, {
            key: "getPlaceholder",
            value: function() {
                return this.hasAttribute("placeholder") ? null : function(e, t) {
                    for (var n = e.lastElementChild; n; n = n.previousElementSibling)
                        if (t(n))
                            return n;
                    return null
                }(this, function(e) {
                    return e.hasAttribute("placeholder") && !function(e) {
                        return "placeholder"in e
                    }(e)
                })
            }
        }, {
            key: "togglePlaceholder",
            value: function(e) {
                var t = this.getPlaceholder();
                t && (e ? t.classList.remove("mip-hidden") : t.classList.add("mip-hidden"))
            }
        }, {
            key: "toggleFallback",
            value: function(e) {
                this.classList.toggle("mip-notsupported", e)
            }
        }, {
            key: "isLoadingEnabled",
            value: function() {
                return !this.hasAttribute("placeholder") && (!!this.classList.contains("mip-layout-size-defined") && (void 0 === this._loadingDisabled && (this._loadingDisabled = this.hasAttribute("noloading")),
                !this._loadingDisabled && this.customElement.isLoadingEnabled()))
            }
        }, {
            key: "prepareLoading",
            value: function() {
                if (this.isLoadingEnabled() && !this._loadingContainer) {
                    var e = ri.create('\n        <div class="mip-loading-container mip-fill-content mip-hidden">\n        </div>\n      ')
                      , t = ri.create('\n        <div class="mip-loader">\n          <div class="mip-loader-dot"></div>\n          <div class="mip-loader-dot"></div>\n          <div class="mip-loader-dot"></div>\n        </div>\n      ');
                    e.appendChild(t),
                    this.appendChild(e),
                    this._loadingContainer = e,
                    this._loadingElement = t
                }
            }
        }, {
            key: "toggleLoading",
            value: function(e, t) {
                var n = t && t.cleanup;
                if (this.isLoadingEnabled() && (this.prepareLoading(),
                this._loadingContainer && (this._loadingContainer.classList.toggle("mip-hidden", !e),
                this._loadingElement.classList.toggle("mip-active", e),
                !e && n))) {
                    var r = this._loadingContainer;
                    this._loadingContainer = null,
                    this._loadingElement = null,
                    this.removeChild(r)
                }
            }
        }, {
            key: "build",
            value: function() {
                if (!this.isBuilt())
                    try {
                        if (!this.getPlaceholder()) {
                            var e = this.createPlaceholder();
                            e && this.appendChild(e)
                        }
                        this.customElement.build(),
                        this._built = !0,
                        no(this, "build")
                    } catch (e) {
                        this.error = e,
                        no(this, "build-error", e),
                        console.error(e)
                    }
            }
        }, {
            key: "isBuilt",
            value: function() {
                return this._built
            }
        }, {
            key: "getProps",
            value: function() {
                for (var e = this.propTypes, t = this.defaultProps, n = this.vueCompat.getProps(this, e), r = Object.keys(e), i = 0; i < r.length; i++) {
                    var o = r[i];
                    if (void 0 === n[o] && Vu(t, o)) {
                        var a = t[o];
                        n[o] = "function" == typeof a ? a() : a
                    }
                }
                return n
            }
        }, {
            key: "_getSpace",
            value: function() {
                return void 0 === this.spaceElement && this._layout === js.RESPONSIVE && (this.spaceElement = this.querySelector("mip-i-space")),
                this.spaceElement || null
            }
        }, {
            key: "applySizesAndMediaQuery",
            value: function() {
                var e = this.ownerDocument.defaultView;
                if (void 0 === this._mediaQuery && (this._mediaQuery = this.getAttribute("media") || null),
                this._mediaQuery && this.classList.toggle("mip-hidden-by-media-query", !e.matchMedia(this._mediaQuery).matches),
                void 0 === this._sizeList) {
                    var t = this.getAttribute("sizes");
                    this._sizeList = t ? ul(t) : null
                }
                if (this._sizeList && Ti(this, "width", this._sizeList.select(e)),
                void 0 === this._heightsList && this._layout === js.RESPONSIVE) {
                    var n = this.getAttribute("heights");
                    this._heightsList = n ? ul(n, !0) : null
                }
                if (this._heightsList) {
                    var r = this._getSpace();
                    r && Ti(r, "paddingTop", this._heightsList.select(e))
                }
            }
        }, {
            key: "getRealChildNodes",
            value: function() {
                return Co(this.childNodes).filter(function(e) {
                    return !function(e) {
                        var t = "string" == typeof e ? e : e.tagName;
                        return !(!t || 0 !== t.toLowerCase().indexOf("mip-i-")) || !(!e.tagName || !(e.hasAttribute("placeholder") || e.hasAttribute("fallback") || e.hasAttribute("overflow")))
                    }(e)
                })
            }
        }, {
            key: "inViewport",
            value: function() {
                return this._inViewport
            }
        }, {
            key: "viewportCallback",
            value: function(e) {
                var t = this;
                this.customElement.viewportCallback(e),
                this._inViewport = e;
                function n() {
                    t.togglePlaceholder(!1),
                    t.toggleLoading(!1, {
                        cleanup: !0
                    })
                }
                e && !this._firstInViewport && (this.layoutCallback().then(function() {
                    t.customElement.firstLayoutCompleted(),
                    n()
                }, function() {
                    t.toggleFallback(!0),
                    n()
                }),
                this._firstInViewport = !0,
                this.customElement.firstInviewCallback())
            }
        }, {
            key: "executeEventAction",
            value: function(e) {
                return this.customElement.executeEventAction(e)
            }
        }, {
            key: "prerenderAllowed",
            value: function(e, t) {
                return this.customElement.prerenderAllowed(e, t)
            }
        }, {
            key: "resourcesComplete",
            value: function() {
                xu.fsElementLoaded(this)
            }
        }]),
        r
    }(cl(HTMLElement));
    function dl(e, t, n) {
        if (!rl.get(e)) {
            rl.set(e, t, "mip2");
            var a = [];
            return function(e, t) {
                e && Zu.insertStyleElement(document, document.head, e, t, !1)
            }(n, e),
            window.customElements.define(e, function(e) {
                function o() {
                    var e, t;
                    ur(this, o);
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                        r[i] = arguments[i];
                    return t = yr(this, (e = gr(o)).call.apply(e, [this].concat(r))),
                    a.push(mr(t)),
                    t
                }
                return br(o, fl),
                fr(o, null, [{
                    key: "observedAttributes",
                    get: function() {
                        return t.observedAttributes
                    }
                }]),
                o
            }()),
            a
        }
    }
    var hl = di.listen;
    var pl = function() {
        function e() {
            ur(this, e),
            this.extensions = {},
            this.currentExtensionId = null,
            this.timer = Ju.timer(),
            this.installExtension = this.installExtension.bind(this),
            this.registerElement = this.registerElement.bind(this),
            this.registerService = this.registerService.bind(this),
            this.registerTemplate = this.registerTemplate.bind(this)
        }
        return fr(e, [{
            key: "getExtensionHolder",
            value: function(e) {
                var t = this.extensions[e];
                if (!t) {
                    t = this.extensions[e] = {
                        extension: {
                            elements: {},
                            services: {}
                        },
                        elementInstances: [],
                        promise: null,
                        resolve: null,
                        reject: null,
                        loaded: null,
                        error: null,
                        script: null
                    }
                }
                return t
            }
        }, {
            key: "getCurrentExtensionHolder",
            value: function() {
                return this.getExtensionHolder(this.currentExtensionId || "unknown")
            }
        }, {
            key: "waitFor",
            value: function(e) {
                if (!e.promise)
                    if (e.loaded)
                        e.promise = Promise.resolve(e.extension);
                    else if (e.error)
                        e.promise = Promise.reject(e.error);
                    else {
                        var t = new Po
                          , n = t.promise
                          , r = t.resolve
                          , i = t.reject;
                        e.promise = n,
                        e.resolve = r,
                        e.reject = i
                    }
                return e.promise
            }
        }, {
            key: "waitForExtension",
            value: function(e) {
                return this.waitFor(this.getExtensionHolder(e))
            }
        }, {
            key: "registerExtension",
            value: function(e, t) {
                for (var n = this, r = arguments.length, i = new Array(2 < r ? r - 2 : 0), o = 2; o < r; o++)
                    i[o - 2] = arguments[o];
                var a = this.getExtensionHolder(e);
                try {
                    if (this.currentExtensionId = e,
                    t.apply(void 0, i),
                    document.documentElement.hasAttribute("mip-vue") && !Ju.getServiceOrNull("mip-vue"))
                        return document.querySelector('script[src*="mip-vue.js"]') || function(e) {
                            var t = document.createElement("script");
                            t.async = !0,
                            t.src = e,
                            document.head.appendChild(t)
                        }("https://c.mipcdn.com/static/v2/mip-vue.js"),
                        void Ju.getServicePromise("mip-vue").then(function() {
                            return n.registerExtension.apply(n, [e, t].concat(i))
                        });
                    this.timer.then(function() {
                        return n.tryToResolveExtension(a)
                    })
                } catch (e) {
                    throw this.tryToRejectError(a, e),
                    e
                } finally {
                    this.currentExtensionId = null
                }
            }
        }, {
            key: "tryToResolveExtension",
            value: function(e) {
                e.elementInstances.every(function(e) {
                    return e.isBuilt()
                }) && (e.elementInstances.length = 0,
                e.loaded = !0,
                e.resolve && e.resolve(e.extension))
            }
        }, {
            key: "tryToRejectError",
            value: function(e, t) {
                e.error = t,
                e.reject && e.reject(t)
            }
        }, {
            key: "installExtension",
            value: function(e) {
                var t = this;
                Zr(document).then(function() {
                    return t.registerExtension(e.name, e.func, window.MIP)
                })
            }
        }, {
            key: "getElementRegistrator",
            value: function(e) {
                if ("object" !== cr(e.implementation))
                    return e.version && "1" === e.version.split(".")[0] ? ol : dl;
                var t = Ju.getServiceOrNull("mip-vue");
                return document.documentElement.setAttribute("mip-vue", ""),
                t && t.registerElement
            }
        }, {
            key: "registerElement",
            value: function(e, t, n, r) {
                var o = this
                  , a = this.getCurrentExtensionHolder()
                  , i = {
                    implementation: t,
                    css: n
                }
                  , s = r && r.version && "" + r.version;
                s && (i.version = s),
                a.extension.elements[e] || (a.extension.elements[e] = i);
                var c = this.getElementRegistrator(i);
                if (c) {
                    var u = c(e, t, n);
                    if (u && u.length) {
                        a.elementInstances = a.elementInstances.concat(u);
                        var l = function(e, t) {
                            var n = u[e];
                            if (n.isBuilt())
                                return "continue";
                            if (n.error)
                                return o.tryToRejectError(a, n.error),
                                "break";
                            var r = hl(n, "build", function() {
                                o.tryToResolveExtension(a),
                                r(),
                                i()
                            })
                              , i = hl(n, "build-error", function(e) {
                                o.tryToRejectError(a, e.detail[0]),
                                r(),
                                i()
                            })
                        };
                        e: for (var f = 0, d = u.length; f < d; f++) {
                            switch (l(f)) {
                            case "continue":
                                continue;
                            case "break":
                                break e
                            }
                        }
                    }
                }
            }
        }, {
            key: "registerService",
            value: function(e, t) {
                this.getCurrentExtensionHolder().extension.services[e] = {
                    implementation: t
                },
                Ju.registerService(e, t, !0)
            }
        }, {
            key: "registerTemplate",
            value: function(e, t, n) {
                So.register(e, t)
            }
        }]),
        e
    }();
    var vl = function() {
        function e() {
            ur(this, e),
            this.resolved = Promise.resolve(),
            this.timeoutId = 0,
            this.canceled = {},
            this.startTime = Date.now()
        }
        return fr(e, [{
            key: "timeSinceStart",
            value: function() {
                return Date.now() - this.startTime
            }
        }, {
            key: "then",
            value: function(e) {
                return this.resolved.then(e)
            }
        }, {
            key: "cancelableThen",
            value: function(e) {
                var t = this;
                return this.timeoutId++,
                this.resolved.then(function() {
                    t.canceled[t.timeoutId] ? delete t.canceled[t.timeoutId] : e()
                }),
                "" + this.timeoutId
            }
        }, {
            key: "delay",
            value: function(e, t) {
                return setTimeout(e, t)
            }
        }, {
            key: "cancel",
            value: function(e) {
                "string" != typeof e ? clearTimeout(e) : this.canceled[e] = !0
            }
        }, {
            key: "sleep",
            value: function(t) {
                var n = this;
                return new Promise(function(e) {
                    return n.delay(e, t)
                }
                )
            }
        }, {
            key: "timeout",
            value: function(n, e) {
                var r, i = this, o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "timeout", t = new Promise(function(e, t) {
                    r = i.delay(function() {
                        return t(new Error(o))
                    }, n)
                }
                );
                if (!e)
                    return t;
                function a() {
                    return i.cancel(r)
                }
                return e.then(a, a),
                Promise.race([t, e])
            }
        }, {
            key: "poll",
            value: function(n, r) {
                return new Promise(function(e) {
                    var t = setInterval(function() {
                        n() && (clearInterval(t),
                        e())
                    }, r)
                }
                )
            }
        }]),
        e
    }();
    var ml = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}
              , r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            r.forEach(function(e) {
                $s(t, e, n[e])
            })
        }
        return t
    }
      , yl = function() {
        function e() {
            ur(this, e),
            this.getPropsMetadata = Hr(this.getPropsMetadata).bind(this)
        }
        return fr(e, [{
            key: "getPropType",
            value: function(e) {
                return "function" == typeof e ? e : Array.isArray(e) ? e[0] : e && "object" === cr(e) ? this.getPropType(e.type) : String
            }
        }, {
            key: "getVueExtraPropTypes",
            value: function(e) {
                var n = this
                  , t = e.extends
                  , r = void 0 === t ? {} : t
                  , i = e.mixins
                  , o = void 0 === i ? [] : i;
                return ml({}, this.getPropTypes(r.name, r), o.reduce(function(e, t) {
                    return ml({}, e, n.getPropTypes(t.name, t))
                }, {}))
            }
        }, {
            key: "getPropsMetadata",
            value: function(e, t) {
                var n = {
                    propTypes: {},
                    defaultProps: {}
                };
                if (!e || !t)
                    return n;
                "object" === cr(t) && (n.propTypes = this.getVueExtraPropTypes(t));
                var r = t.props;
                if (Array.isArray(r)) {
                    for (var i = 0; i < r.length; i++)
                        n.propTypes[r[i]] = String;
                    return n
                }
                if (!r || "object" !== cr(r))
                    return n;
                for (var o = Object.keys(r), a = 0; a < o.length; a++) {
                    var s = o[a]
                      , c = r[s];
                    n.propTypes[s] = this.getPropType(c),
                    c && "object" === cr(c) && Vu(c, "default") && (n.defaultProps[s] = c.default)
                }
                return n
            }
        }, {
            key: "getPropTypes",
            value: function(e, t) {
                return this.getPropsMetadata(e, t).propTypes
            }
        }, {
            key: "getDefaultProps",
            value: function(e, t) {
                return this.getPropsMetadata(e, t).defaultProps
            }
        }, {
            key: "parseAttribute",
            value: function(e, t) {
                if (null != e) {
                    if (t === Number)
                        return parseFloat(e, 10);
                    if (t === Boolean)
                        return "false" !== e;
                    if (t === Array || t === Object)
                        try {
                            return wo(e)
                        } catch (e) {
                            return
                        }
                    return t !== Date && t !== Function && "function" == typeof t ? this.parseAttribute(e, t(e)) : e
                }
            }
        }, {
            key: "getPropsFromAttributes",
            value: function(e, t) {
                for (var n = {}, r = Object.keys(t), i = 0; i < r.length; i++) {
                    var o = r[i]
                      , a = e.getAttribute(wi(o));
                    n[o] = this.parseAttribute(a, t[o])
                }
                return n
            }
        }, {
            key: "getPropsFromJSON",
            value: function(e, t) {
                var n = e.querySelector("script[type*=json]");
                if (!n)
                    return null;
                try {
                    for (var r = wo(n.innerHTML), i = Object.keys(r), o = 0; o < i.length; o++) {
                        var a = i[o];
                        "string" == typeof r[a] && (r[a] = this.parseAttribute(r[a], t[a]))
                    }
                    return r
                } catch (e) {
                    return null
                }
            }
        }, {
            key: "getProps",
            value: function(e, t) {
                return ml({}, this.getPropsFromAttributes(e, t), this.getPropsFromJSON(e, t))
            }
        }]),
        e
    }();
    function gl(e) {
        return "*" === e ? /.*/ : new RegExp(e)
    }
    function wl(e) {
        e ? e.pattern ? e.meta ? e.meta.header ? e.meta.view || bl("meta.view", "meta.view", e) : bl("meta.header", "meta.header", e) : bl("meta", "meta", e) : bl("pattern", "*", e) : console.warn("\u68c0\u6d4b\u5230\u7a7a\u7684\u8def\u7531\u914d\u7f6e\uff0cMIP \u5c06\u8df3\u8fc7\u8fd9\u6761\u914d\u7f6e")
    }
    function bl(e, t, n) {
        console.warn("\u68c0\u6d4b\u5230\u4e00\u6761\u8def\u7531\u914d\u7f6e\u4e2d\u6ca1\u6709\u8bbe\u7f6e ".concat(e, " \u9009\u9879\uff0cMIP \u5c06\u4f7f\u7528 ").concat(t, " \u4ee3\u66ff\u3002\n"), n)
    }
    var El = ['<svg t="1530857985972" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3393"', 'xmlns:xlink="http://www.w3.org/1999/xlink">', '<path d="M128 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" p-id="3394" fill="currentColor"></path>', '<path d="M512 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" p-id="3395" fill="currentColor"></path>', '<path d="M896 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" p-id="3396" fill="currentColor"></path>', "</svg>"].join("")
      , kl = ['<svg t="1530857971603" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2953"', 'xmlns:xlink="http://www.w3.org/1999/xlink">', '<path  fill="currentColor" d="M586.026667 533.248l208.789333-208.576c9.856-8.874667 15.488-21.248 15.850667-34.858667a53.717333 53.717333 0 0 0-15.829334-39.146666 48.042667 48.042667 0 0 0-36.224-15.872c-14.165333 0-27.584 5.632-37.802666 15.850666L512 459.221333l-208.789333-208.576a48.042667 48.042667 0 0 0-36.245334-15.850666c-14.144 0-27.562667 5.632-37.781333 15.850666A48.085333 48.085333 0 0 0 213.333333 285.504a53.717333 53.717333 0 0 0 15.850667 39.168l208.789333 208.576-208.576 208.853333a48.085333 48.085333 0 0 0-15.850666 34.88 53.717333 53.717333 0 0 0 15.850666 39.146667c9.194667 10.24 22.058667 15.872 36.224 15.872 14.144 0 27.562667-5.632 37.802667-15.850667L512 607.274667l208.597333 208.853333c9.216 10.24 22.08 15.872 36.224 15.872s27.584-5.632 37.802667-15.850667c9.856-8.874667 15.488-21.269333 15.850667-34.88a53.717333 53.717333 0 0 0-15.850667-39.146666l-208.597333-208.853334z"', 'p-id="2954"></path>', "</svg>"].join("")
      , Sl = "mip-shell-header"
      , Pl = Sl + "-button-group"
      , _l = Pl + "-standalone"
      , xl = "mip-header-btn"
      , Il = "data-button-name";
    function Ll(e, t) {
        return t ? ['<div class="'.concat(_l, '" ').concat(xl, " ").concat(Il, '="').concat(e, '">'), "more" === e ? El : kl, "</div>"].join("") : ['<div class="button '.concat(e, '" ').concat(xl, " ").concat(Il, '="').concat(e, '">'), "more" === e ? El : kl, "</div>"].join("")
    }
    function Al(t) {
        Array.isArray(t) || (t = []);
        function e(e) {
            var n = [];
            t.forEach(function(e) {
                var t = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.name
                      , n = e.text
                      , r = e.link;
                    if (t && n)
                        return ['<div class="mip-shell-button" mip-header-btn data-button-name="'.concat(t, '">'), "".concat(r ? '<a mip-link href="'.concat(r, '">').concat(n, "</a>") : n), "</div>"].join("")
                }(e);
                t && n.push(t)
            }),
            Ti(e, "height", 48 * n.length),
            e.innerHTML = n.join("")
        }
        var n = document.querySelector(".mip-shell-more-button-mask")
          , r = document.querySelector(".mip-shell-more-button-wrapper");
        return n || r ? e(r) : ((n = document.createElement("mip-fixed")).classList.add("mip-shell-more-button-mask"),
        document.body.appendChild(n),
        (r = document.createElement("mip-fixed")).classList.add("mip-shell-more-button-wrapper"),
        e(r),
        document.body.appendChild(r)),
        {
            mask: n,
            buttonWrapper: r
        }
    }
    function Tl(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
          , r = n.skipTransition
          , i = n.transitionName
          , o = void 0 === i ? "fade" : i;
        if (r)
            Ti(e, "display", t ? "block" : "none");
        else {
            var a = e.style.display;
            if (!(t && "block" === a || !t && "none" === a)) {
                var s = t ? "enter" : "leave";
                e.classList.add("".concat(o, "-").concat(s), "".concat(o, "-").concat(s, "-active")),
                Ti(e, "display", "block"),
                e.offsetWidth,
                ru(e, "transition", function() {
                    e.classList.remove("".concat(o, "-").concat(s, "-to"), "".concat(o, "-").concat(s, "-active")),
                    Ti(e, "display", t ? "block" : "none")
                }),
                nu(function() {
                    e.classList.add("".concat(o, "-").concat(s, "-to")),
                    e.classList.remove("".concat(o, "-").concat(s))
                })
            }
        }
    }
    var Cl, Ml, Ol = 1e4;
    function jl(e, t) {
        As.isPortrait() && window.MIP_SHELL_OPTION.allowTransition ? t.newPage ? t.isForward ? function(t, n) {
            var e, r, i = n.sourcePageId, o = n.targetPageId, a = n.targetPageMeta, s = n.onComplete, c = Zc(a, {
                transitionContainsHeader: t.transitionContainsHeader
            });
            c.classList.add("slide-enter", "slide-enter-active"),
            Ti(c, "display", "block"),
            t.transitionContainsHeader || ((e = document.querySelector(".mip-shell-header-wrapper .mip-shell-header-logo-title")) && e.classList.add("fade-out"),
            (r = Kc(a)).classList.add("fade-enter", "fade-enter-active"),
            Ti(r, "display", "block"));
            ru(c, "transition", function() {
                c.classList.remove("slide-enter-to", "slide-enter-active"),
                t.transitionContainsHeader || r.classList.remove("fade-enter-to", "fade-enter-active"),
                Xc(),
                Nl(t, {
                    sourcePageId: i,
                    targetPageId: o
                }),
                s && s();
                var e = Gc(o);
                Ti(e, "z-index", Ol++),
                t.afterSwitchPage(n)
            }),
            nu(function() {
                c.classList.add("slide-enter-to"),
                c.classList.remove("slide-enter"),
                t.transitionContainsHeader || (r.classList.add("fade-enter-to"),
                r.classList.remove("fade-enter"))
            })
        }(e, t) : function(t, n) {
            var r = n.targetPageId
              , e = n.targetPageMeta
              , i = n.sourcePageId
              , o = n.sourcePageMeta
              , a = n.onComplete
              , s = 0;
            Nl(t, {
                targetPageId: r
            }),
            r === window.MIP.viewer.page.pageId && (s = t.rootPageScrollPosition);
            var c = Gc(i);
            if (!c) {
                document.documentElement.classList.add("mip-no-scroll"),
                window.MIP.viewer.page.getElementsInRootPage().forEach(function(e) {
                    return e.classList.add("hide")
                }),
                a && a();
                var u = Gc(r);
                return u && (Ol -= 2,
                Ti(u, "z-index", Ol++)),
                t.afterSwitchPage(n)
            }
            var l, f, d = Zc(o, {
                onlyHeader: !0,
                transitionContainsHeader: t.transitionContainsHeader
            });
            t.transitionContainsHeader ? Ti(d, "display", "block") : ((l = document.querySelector(".mip-shell-header-wrapper .mip-shell-header-logo-title")) && l.classList.add("fade-out"),
            Ti(f = Kc(e, o), "display", "block"));
            c.classList.add("slide-leave", "slide-leave-active"),
            t.transitionContainsHeader ? d.classList.add("slide-leave", "slide-leave-active") : f.classList.add("fade-enter", "fade-enter-active");
            Ti(c, {
                opacity: 1,
                top: s + "px"
            }),
            ru(c, "transition", function() {
                Ti(c, {
                    display: "none",
                    "z-index": 1e4,
                    top: 0
                }),
                c.classList.remove("slide-leave-to", "slide-leave-active"),
                t.transitionContainsHeader ? (d.classList.remove("slide-leave-to", "slide-leave-active"),
                Ti(d, "display", "none")) : f.classList.remove("fade-enter-to", "fade-enter"),
                a && a();
                var e = Gc(r);
                e && (Ol -= 2,
                Ti(e, "z-index", Ol++)),
                t.afterSwitchPage(n)
            }),
            nu(function() {
                c.classList.add("slide-leave-to"),
                c.classList.remove("slide-leave"),
                t.transitionContainsHeader ? (d.classList.add("slide-leave-to"),
                d.classList.remove("slide-leave")) : (f.classList.add("fade-enter-to"),
                f.classList.remove("fade-enter"))
            })
        }(e, t) : t.isForward ? function(e, t) {
            var n, r, i = t.sourcePageId, o = t.targetPageId, a = t.targetPageMeta, s = t.onComplete, c = Gc(o), u = 0;
            i === window.MIP.viewer.page.pageId && (u = e.rootPageScrollPosition);
            Ti(c, {
                display: "block",
                opacity: 1,
                "z-index": Ol++,
                top: u + "px"
            }),
            c.classList.add("slide-enter", "slide-enter-active"),
            e.transitionContainsHeader || ((n = document.querySelector(".mip-shell-header-wrapper .mip-shell-header-logo-title")) && n.classList.add("fade-out"),
            (r = Kc(a)).classList.add("fade-enter", "fade-enter-active"),
            Ti(r, "display", "block"));
            ru(c, "transition", function() {
                c.classList.remove("slide-enter-to", "slide-enter-active"),
                e.transitionContainsHeader || r.classList.remove("fade-enter-to", "fade-enter-active"),
                Xc(),
                Nl(e, {
                    sourcePageId: i,
                    targetPageId: o
                }),
                Ti(c, "top", 0),
                s && s(),
                e.afterSwitchPage(t)
            }),
            nu(function() {
                c.classList.add("slide-enter-to"),
                c.classList.remove("slide-enter"),
                e.transitionContainsHeader || (r.classList.add("fade-enter-to"),
                r.classList.remove("fade-enter"))
            })
        }(e, t) : function(e, t) {
            var n = t.targetPageId
              , r = t.targetPageMeta
              , i = t.sourcePageId
              , o = t.sourcePageMeta
              , a = t.onComplete
              , s = Gc(n);
            s && (Ol -= 2,
            Ti(s, {
                opacity: 1,
                display: "block",
                "z-index": Ol++
            }));
            var c = 0;
            Nl(e, {
                targetPageId: n
            }),
            n === window.MIP.viewer.page.pageId && (c = e.rootPageScrollPosition);
            var u = Gc(i);
            if (!u)
                return document.documentElement.classList.add("mip-no-scroll"),
                window.MIP.viewer.page.getElementsInRootPage().forEach(function(e) {
                    return e.classList.add("mip-hide")
                }),
                a && a(),
                e.afterSwitchPage(t);
            var l, f, d = Zc(o, {
                onlyHeader: !0,
                transitionContainsHeader: e.transitionContainsHeader
            });
            e.transitionContainsHeader ? Ti(d, "display", "block") : ((l = document.querySelector(".mip-shell-header-wrapper .mip-shell-header-logo-title")) && l.classList.add("fade-out"),
            Ti(f = Kc(r, o), "display", "block"));
            u.classList.add("slide-leave", "slide-leave-active"),
            e.transitionContainsHeader ? d.classList.add("slide-leave", "slide-leave-active") : f.classList.add("fade-enter", "fade-enter-active");
            Ti(u, {
                opacity: 1,
                top: c + "px"
            }),
            ru(u, "transition", function() {
                Ti(u, {
                    display: "none",
                    "z-index": 1e4,
                    top: 0
                }),
                u.classList.remove("slide-leave-to", "slide-leave-active"),
                e.transitionContainsHeader ? (d.classList.remove("slide-leave-to", "slide-leave-active"),
                Ti(d, "display", "none")) : f.classList.remove("fade-enter-to", "fade-enter"),
                a && a(),
                e.afterSwitchPage(t)
            }),
            nu(function() {
                u.classList.add("slide-leave-to"),
                u.classList.remove("slide-leave"),
                e.transitionContainsHeader ? (d.classList.add("slide-leave-to"),
                d.classList.remove("slide-leave")) : (f.classList.add("fade-enter-to"),
                f.classList.remove("fade-enter"))
            })
        }(e, t) : t.newPage ? Hl(e, t) : function(e, t) {
            Hl(e, t)
        }(e, t)
    }
    function Hl(e, t) {
        var n = t.sourcePageId
          , r = t.targetPageId
          , i = t.onComplete;
        Xc(),
        Nl(e, {
            sourcePageId: n,
            targetPageId: r
        }),
        i && i(),
        Ti(Gc(r), "z-index", Ol++),
        e.afterSwitchPage(t)
    }
    function Nl(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , n = t.sourcePageId
          , r = t.targetPageId
          , i = window.MIP.viewer.page;
        n === i.pageId && (document.documentElement.classList.add("mip-no-scroll"),
        i.getElementsInRootPage().forEach(function(e) {
            return e.classList.add("mip-hide")
        })),
        r === i.pageId && (document.documentElement.classList.remove("mip-no-scroll"),
        i.getElementsInRootPage().forEach(function(e) {
            return e.classList.remove("mip-hide")
        }),
        e.restoreScrollPosition())
    }
    function Rl(t, e, n) {
        var r = window.MIP.viewer.page;
        if (t.resizeAllPages(),
        qc(e, n, !0))
            r.emitEventInCurrentPage({
                name: pc,
                data: n.hash
            });
        else {
            var i, o = r.getPageById(r.currentPageId), a = Fc(n), s = Cc(a), c = r.getPageById(s), u = Gc(s), l = !!c && c.isRootPage, f = Ar(!0, {}, t.findMetaByPageId(s));
            t.priorTitle = n.meta.header && n.meta.header.title,
            document.title = f.header.title = n.meta.header ? n.meta.header.title || f.header.title || n.meta.header.defaultTitle : f.header.title,
            i = !f.view.isIndex && window.MIP_SHELL_OPTION.isForward,
            t.togglePageMask(!1, {
                skipTransition: !0
            });
            var d = {
                targetPageId: s,
                targetPageMeta: f,
                sourcePageId: r.currentPageId,
                sourcePageMeta: o.pageMeta,
                isForward: i
            };
            r.currentPageId === r.pageId && t.saveScrollPosition();
            var h = l || u && c
              , p = n.meta && n.meta.cacheFirst && !l;
            if (!h || n.meta && n.meta.reload && !p) {
                r.pageId === s && (r.pageId = dc,
                r.getElementsInRootPage().forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                })),
                c || r.checkIfExceedsMaxPageNum(s);
                var v, m = {
                    pageId: s,
                    pageMeta: f,
                    fullpath: a,
                    standalone: window.MIP.standalone,
                    isRootPage: !1,
                    isCrossOrigin: n.origin !== window.location.origin
                }, y = !1;
                Ml = Cl = 0;
                var g = function() {
                    if (!m.isCrossOrigin && zr.isAndroid())
                        var t = v.contentWindow.document
                          , n = 0
                          , r = function() {
                            var e = document.createElement("div");
                            return e.classList.add("hack-for-android-scroll-mask"),
                            document.body.appendChild(e),
                            e
                        }()
                          , i = setInterval(function() {
                            n++;
                            var e = t.body.clientHeight;
                            t.body.clientHeight !== Cl ? (Cl = e,
                            Ml = 0,
                            function(e) {
                                Ti(e, {
                                    opacity: "0.01",
                                    display: "block"
                                }),
                                setTimeout(function() {
                                    Ti(e, {
                                        display: "none",
                                        opacity: ""
                                    })
                                }, 20)
                            }(r)) : Ml++,
                            (10 <= Ml || 20 <= n) && clearInterval(i)
                        }, 500)
                };
                (zr.isQQ() || zr.isQQApp()) && (v = $c(m, {
                    onLoad: g
                }),
                m.targetWindow = v.contentWindow,
                y = !0,
                window.MIP_SHELL_OPTION.allowTransition = !1),
                r.addChild(m),
                d.newPage = !0,
                t.beforeSwitchPage(d),
                d.onComplete = function() {
                    t.currentPageMeta = f,
                    window.MIP_SHELL_OPTION.allowTransition = !1,
                    window.MIP_SHELL_OPTION.isForward = !0,
                    y || (v = $c(m, {
                        onLoad: g
                    }),
                    m.targetWindow = v.contentWindow),
                    Ti(v, {
                        display: "block",
                        opacity: 1
                    });
                    var e = document.querySelector("mip-shell") || document.querySelector("[mip-shell]");
                    e && window.MIP.viewer.eventAction.execute("active", e, {}),
                    r.emitEventInCurrentPage({
                        name: mc
                    }),
                    r.currentPageId = s,
                    r.emitEventInCurrentPage({
                        name: vc
                    })
                }
                ,
                jl(t, d)
            } else
                (zr.isQQ() || zr.isQQApp()) && (window.MIP_SHELL_OPTION.allowTransition = !1),
                t.transitionContainsHeader && t.refreshShell({
                    pageMeta: f
                }),
                (c.isPrerender || u && "1" === u.getAttribute("prerender")) && (d.isPrerender = !0,
                u.contentWindow.postMessage({
                    name: window.name,
                    event: fc
                }, "*"),
                c.isPrerender = !1,
                u.removeAttribute("prerender"),
                s === r.pageId && (r.pageId = dc,
                r.getElementsInRootPage().forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                }))),
                d.newPage = !1,
                d.cacheFirst = n.meta && n.meta.cacheFirst,
                t.beforeSwitchPage(d),
                d.onComplete = function() {
                    t.currentPageMeta = f,
                    window.MIP_SHELL_OPTION.allowTransition = !1,
                    window.MIP_SHELL_OPTION.isForward = !0,
                    Ti(u, {
                        display: "block",
                        opacity: 1
                    }),
                    t.transitionContainsHeader ? Ti(t.$loading, "display", "none") : t.refreshShell({
                        pageMeta: f
                    });
                    var e = document.querySelector("mip-shell") || document.querySelector("[mip-shell]");
                    e && window.MIP.viewer.eventAction.execute("active", e, {}),
                    r.emitEventInCurrentPage({
                        name: mc
                    }),
                    r.currentPageId = s,
                    r.emitEventInCurrentPage({
                        name: vc
                    })
                }
                ,
                jl(t, d)
        }
    }
    window.history && window.history;
    var Dl = window.performance && window.performance.now ? window.performance : Date
      , Fl = ql();
    function ql() {
        return Dl.now().toFixed(3)
    }
    function Bl(t, n) {
        var e = window.history;
        try {
            n ? e.replaceState({
                key: Fl
            }, "", t) : (Fl = ql(),
            e.pushState({
                key: Fl
            }, "", t))
        } catch (e) {
            window.MIP.standalone && window.location[n ? "replace" : "assign"](t)
        }
    }
    var Ul = function() {
        function t(e) {
            var n = this;
            ur(this, t),
            this.router = e,
            this.current = Dc,
            this.cb = null;
            var r = Tc();
            window.addEventListener("popstate", function(e) {
                var t = Tc();
                n.current === Dc && t === r || n.transitionTo(t)
            })
        }
        return fr(t, [{
            key: "listen",
            value: function(e) {
                this.cb = e
            }
        }, {
            key: "go",
            value: function(e) {
                window.history.go(e)
            }
        }, {
            key: "push",
            value: function(e) {
                this.transitionTo(e, function(e) {
                    Bl(e.fullPath)
                })
            }
        }, {
            key: "replace",
            value: function(e) {
                this.transitionTo(e, function(e) {
                    !function(e) {
                        Bl(e, !0)
                    }(e.fullPath)
                })
            }
        }, {
            key: "getCurrentLocation",
            value: function() {
                return Tc()
            }
        }, {
            key: "transitionTo",
            value: function(e, t) {
                var n = jc(e, this.current);
                zr.isAndroid() && (zr.isQQ() || zr.isQQApp()) ? (t && t(n),
                this.updateRoute(n)) : (this.updateRoute(n),
                t && t(n))
            }
        }, {
            key: "updateRoute",
            value: function(e) {
                var t = this.current;
                this.current = e,
                this.cb && this.cb(t, e)
            }
        }]),
        t
    }()
      , zl = function() {
        function t() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            ur(this, t),
            this.options = e,
            this.history = new Ul(this)
        }
        return fr(t, [{
            key: "init",
            value: function() {
                var e = this.history
                  , t = e.getCurrentLocation();
                e.transitionTo(t)
            }
        }, {
            key: "listen",
            value: function(e) {
                this.history.listen(e)
            }
        }, {
            key: "push",
            value: function(e) {
                window.MIP.standalone ? this.history.push(e) : this.history.replace(e)
            }
        }, {
            key: "replace",
            value: function(e) {
                this.history.replace(e)
            }
        }, {
            key: "go",
            value: function(e) {
                window.MIP.standalone ? this.history.go(e) : window.MIP.viewer.sendMessage("history-navigate", {
                    step: e
                })
            }
        }, {
            key: "back",
            value: function() {
                this.go(-1)
            }
        }, {
            key: "forward",
            value: function() {
                this.go(1)
            }
        }]),
        t
    }()
      , Wl = null
      , Vl = null
      , $l = !1;
    window.MIP_PAGE_META_CACHE = Object.create(null),
    window.MIP_SHELL_CONFIG = null,
    window.MIP_SHELL_ROUTES_AUTO_GENERATED = !1;
    var Gl, Xl, Ql, Jl = function(e) {
        function o() {
            var e, t;
            ur(this, o);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                r[i] = arguments[i];
            return (t = yr(this, (e = gr(o)).call.apply(e, [this].concat(r)))).messageHandlers = [],
            t.alwaysReadConfigOnLoad = !0,
            t.alwaysUseTitleInShellConfig = !1,
            t.transitionContainsHeader = !0,
            t.ignoreWarning = !1,
            t
        }
        return br(o, vr),
        fr(o, [{
            key: "build",
            value: function() {
                var t = this;
                Wl = window.MIP.viewer,
                Vl = Wl.page;
                var n, e = this.element.querySelector('script[type="application/json"]');
                if (e)
                    try {
                        n = JSON.parse(e.textContent.toString()) || {},
                        ["alwaysReadConfigOnLoad", "transitionContainsHeader", "ignoreWarning"].forEach(function(e) {
                            void 0 !== n[e] && (t[e] = n[e])
                        }),
                        n.routes || (!this.ignoreWarning && console.warn("\u68c0\u6d4b\u5230 MIP Shell \u914d\u7f6e\u6ca1\u6709\u5305\u542b `routes` \u6570\u7ec4\uff0cMIP \u5c06\u81ea\u52a8\u751f\u6210\u4e00\u6761\u9ed8\u8ba4\u7684\u8def\u7531\u914d\u7f6e\u3002"),
                        n.routes = [{
                            pattern: "*",
                            meta: rc
                        }],
                        window.MIP_SHELL_ROUTES_AUTO_GENERATED = !0)
                    } catch (e) {
                        !this.ignoreWarning && console.warn("\u68c0\u6d4b\u5230\u683c\u5f0f\u975e\u6cd5\u7684 MIP Shell \u914d\u7f6e\uff0cMIP \u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684\u914d\u7f6e\u4ee3\u66ff\u3002"),
                        n = {
                            routes: [{
                                pattern: "*",
                                meta: rc
                            }]
                        },
                        window.MIP_SHELL_ROUTES_AUTO_GENERATED = !0
                    }
                else
                    !this.ignoreWarning && console.warn("\u6ca1\u6709\u68c0\u6d4b\u5230 MIP Shell \u914d\u7f6e\uff0cMIP \u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684\u914d\u7f6e\u4ee3\u66ff\u3002"),
                    n = {
                        routes: [{
                            pattern: "*",
                            meta: rc
                        }]
                    },
                    window.MIP_SHELL_ROUTES_AUTO_GENERATED = !0;
                if (this.mergeCambrianData(n),
                Vl.isRootPage) {
                    n.routes.forEach(function(e) {
                        !t.ignoreWarning && wl(e),
                        e.meta = Ar(!0, {}, rc, e.meta || {}),
                        e.regexp = gl(e.pattern || "*"),
                        e.meta.header.title || (e.meta.header.title = (document.querySelector("title") || {}).innerHTML || "")
                    }),
                    this.processShellConfig(n),
                    window.MIP_SHELL_CONFIG = n.routes;
                    var r = this.element.children
                      , i = [].slice.call(r).slice(1, r.length);
                    0 < i.length && i.forEach(function(e) {
                        e.setAttribute("mip-shell-inner", ""),
                        document.body.appendChild(e)
                    })
                } else {
                    var o, a = Vl.pageId;
                    if (Vl.isCrossOrigin)
                        n.routes.forEach(function(e) {
                            !t.ignoreWarning && wl(e),
                            e.meta = Ar(!0, {}, rc, e.meta || {}),
                            e.regexp = gl(e.pattern || "*"),
                            e.meta.header.title || (e.meta.header.title = (document.querySelector("title") || {}).innerHTML || ""),
                            e.regexp.test(a) && (o = window.MIP_PAGE_META_CACHE[a] = e.meta)
                        }),
                        window.MIP_SHELL_CONFIG = n.routes,
                        window.MIP_PAGE_META_CACHE = Object.create(null);
                    else if (this.alwaysReadConfigOnLoad) {
                        o = rc;
                        for (var s = 0; s < n.routes.length; s++) {
                            var c = n.routes[s];
                            if (!this.ignoreWarning && wl(c),
                            c.regexp = gl(c.pattern || "*"),
                            c.regexp.test(a)) {
                                c.meta = Ar(!0, {}, rc, c.meta || {}),
                                c.meta.header.title || (c.meta.header.title = (document.querySelector("title") || {}).innerHTML || ""),
                                this.processShellConfigInLeaf(n, s),
                                o = window.parent.MIP_PAGE_META_CACHE[a] = c.meta;
                                break
                            }
                        }
                    }
                    o || (o = this.findMetaByPageId(a)),
                    window.parent.MIP_SHELL_ROUTES_AUTO_GENERATED && (window.parent.document.title = o.header.title = (document.querySelector("title") || {}).innerHTML || ""),
                    Vl.emitCustomEvent(window.parent, Vl.isCrossOrigin, {
                        name: "mipShellEvents",
                        data: {
                            type: "updateShell",
                            data: {
                                pageMeta: o
                            }
                        }
                    })
                }
            }
        }, {
            key: "mergeCambrianData",
            value: function(e) {
                var t, n = {};
                location.hash && location.hash.replace("#", "").split("&").forEach(function(e) {
                    var t = e.split("=");
                    n[t[0]] = t[1] || ""
                });
                if (n.cambrian)
                    try {
                        t = JSON.parse(decodeURIComponent(n.cambrian))
                    } catch (e) {}
                if (t && t.title) {
                    var r = {
                        pattern: location.pathname,
                        meta: {
                            header: {
                                show: !0,
                                title: t.title || "",
                                logo: t.logo || ""
                            },
                            view: {
                                isIndex: !0
                            }
                        }
                    };
                    if (e.routes && e.routes.length) {
                        for (var i = !0, o = 0; o < e.routes.length; o++) {
                            var a = e.routes[o]
                              , s = gl(a.pattern);
                            if ("*" !== a.pattern && s.test(Vl.pageId)) {
                                e.routes[o] = Ar(!0, {}, r, a),
                                i = !1;
                                break
                            }
                        }
                        i && e.routes.unshift(r)
                    } else
                        e.routes = r
                }
            }
        }, {
            key: "prerenderAllowed",
            value: function() {
                return !0
            }
        }, {
            key: "firstInviewCallback",
            value: function() {
                var e = this;
                this.currentPageMeta = this.findMetaByPageId(Vl.pageId),
                Vl.isRootPage && (Vl.pageMeta = this.currentPageMeta,
                this.initShell(),
                this.initRouter()),
                setTimeout(function() {
                    Vl.isRootPage && e.bindRootEvents(),
                    e.bindAllEvents()
                }, 0)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                Vl.isRootPage && this.unbindHeaderEvents()
            }
        }, {
            key: "initShell",
            value: function() {
                var r = this;
                this.currentPageMeta.header && this.currentPageMeta.header.show ? ($l = !0,
                this.createHeader(!0)) : $l = !1,
                this.renderOtherParts(),
                setTimeout(function() {
                    $l || r.createHeader(!1);
                    var e = Al(r.currentPageMeta.header.buttonGroup)
                      , t = e.mask
                      , n = e.buttonWrapper;
                    r.$buttonMask = t,
                    r.$buttonWrapper = n,
                    r.$pageMask = function() {
                        var e = document.createElement("mip-fixed");
                        return e.classList.add(Sl + "-mask"),
                        document.body.appendChild(e),
                        e
                    }(),
                    r.$loading = Jc(r.currentPageMeta),
                    r.renderOtherPartsAsync()
                }, 0)
            }
        }, {
            key: "createHeader",
            value: function(e) {
                this.$wrapper = document.createElement("mip-fixed"),
                this.$wrapper.setAttribute("type", "top"),
                this.$wrapper.classList.add("mip-shell-header-wrapper"),
                e || Ti(this.$wrapper, "display", "none"),
                this.$el = document.createElement("div"),
                this.$el.classList.add("mip-shell-header", "transition"),
                this.renderHeader(this.$el),
                this.$wrapper.insertBefore(this.$el, this.$wrapper.firstChild),
                document.body.insertBefore(this.$wrapper, document.body.firstChild)
            }
        }, {
            key: "initRouter",
            value: function() {
                var n = new zl;
                n.init(),
                n.listen(this.render.bind(this)),
                this.router = n,
                Wl.onMessage("changeState", function(e) {
                    var t = e.url;
                    n.replace(zu(t, "url", !0))
                }),
                Wl.onMessage("change-state", function(e) {
                    var t = e.url;
                    n.replace(zu(t, "url", !0))
                }),
                window.MIP_SHELL_OPTION = {
                    allowTransition: !1,
                    isForward: !0
                },
                this.messageHandlers.push(function(e, t) {
                    e === ic ? (t.options.allowTransition && (window.MIP_SHELL_OPTION.allowTransition = !0),
                    n.push(t.route)) : e === oc ? (t.options.allowTransition && (window.MIP_SHELL_OPTION.allowTransition = !0),
                    n.replace(t.route)) : e === ac ? (window.MIP_SHELL_OPTION.allowTransition = !0,
                    window.MIP_SHELL_OPTION.isForward = !1,
                    n.back()) : e === sc && (window.MIP_SHELL_OPTION.allowTransition = !0,
                    n.forward())
                })
            }
        }, {
            key: "bindRootEvents",
            value: function() {
                var i = this;
                this.currentViewportHeight = As.getHeight(),
                this.currentViewportWidth = As.getWidth(),
                this.messageHandlers.push(function(e, t) {
                    e === uc ? Vl.broadcastCustomEvent(t) : e === lc && i.resizeAllPages()
                });
                setInterval(function() {
                    var e = As.getHeight();
                    i.currentViewportHeight !== e && (i.currentViewportWidth = As.getWidth(),
                    i.currentViewportHeight = e,
                    i.resizeAllPages())
                }, 250),
                window.addEventListener("mipShellEvents", function(e) {
                    var t = e.detail[0]
                      , n = t.type
                      , r = t.data;
                    switch (n) {
                    case "updateShell":
                        i.refreshShell({
                            pageMeta: r.pageMeta
                        });
                        break;
                    case "togglePageMask":
                        i.togglePageMask(r.toggle, r.options);
                        break;
                    case "toggleDropdown":
                        i.toggleDropdown(r.toggle);
                        break;
                    case "toggleTransition":
                        i.toggleTransition(r.toggle)
                    }
                }),
                this.bindHeaderEvents(),
                window.MIP.viewer.eventAction.execute("active", this.element, {})
            }
        }, {
            key: "render",
            value: function(e, t) {
                Rl(this, e, t)
            }
        }, {
            key: "renderHeader",
            value: function(e) {
                !function(e, t) {
                    var n = e.currentPageMeta
                      , r = n.header
                      , i = r.buttonGroup
                      , o = r.title
                      , a = void 0 === o ? "" : o
                      , s = r.logo
                      , c = r.color
                      , u = void 0 === c ? "#000000" : c
                      , l = r.borderColor
                      , f = r.backgroundColor
                      , d = void 0 === f ? "#ffffff" : f;
                    e.priorTitle && !e.alwaysUseTitleInShellConfig && (a = n.header.title = e.priorTitle);
                    var h = "";
                    !n.view.isIndex && (h += ['<a href="javascript:void(0)" class="back-button" '.concat(xl, " ").concat(Il, '="back">'), Vc, "</a>"].join("")),
                    h += ['<div class="'.concat(Sl, '-logo-title">'), "".concat(s ? '<img class="'.concat(Sl, '-logo" src="').concat(s, '">') : ""), '<span class="'.concat(Sl, '-title">').concat(a, "</span>"), "</div>"].join("");
                    var p = Array.isArray(i) && 0 < i.length
                      , v = !window.MIP.standalone && e.showHeaderCloseButton();
                    p && v ? h += ['<div class="'.concat(Pl, '">'), Ll("more"), '<div class="split"></div>', Ll("close"), "</div>"].join("") : p && !v ? h += Ll("more", !0) : !p && v && (h += Ll("close", !0)),
                    t.innerHTML = h,
                    Yc(t, t, u, d, l)
                }(this, e)
            }
        }, {
            key: "saveScrollPosition",
            value: function() {
                this.rootPageScrollPosition = As.getScrollTop()
            }
        }, {
            key: "restoreScrollPosition",
            value: function() {
                As.setScrollTop(this.rootPageScrollPosition)
            }
        }, {
            key: "resizeAllPages",
            value: function() {
                var t = this;
                Array.prototype.slice.call(document.querySelectorAll(".mip-page__iframe")).forEach(function(e) {
                    e.style.height = "".concat(t.currentViewportHeight, "px")
                }),
                Vl.broadcastCustomEvent({
                    name: hc,
                    data: {
                        height: this.currentViewportHeight
                    }
                })
            }
        }, {
            key: "bindHeaderEvents",
            value: function() {
                !function(r) {
                    r.headerEventHandler = di.delegate(r.$el, "[mip-header-btn]", "click", function(e) {
                        var t = this.dataset.buttonName;
                        r.handleClickHeaderButton(t)
                    }),
                    r.buttonEventHandler = di.delegate(r.$buttonWrapper, "[mip-header-btn]", "click", function(e) {
                        var t = this.dataset.buttonName;
                        r.handleClickHeaderButton(t);
                        var n = this.children && this.children[0];
                        n && "a" === n.tagName.toLowerCase() && n.hasAttribute("mip-link") && r.toggleDropdown(!1)
                    });
                    var e = document.querySelector("#mip-page-fade-header-wrapper");
                    e && (r.fadeHeaderEventHandler = di.delegate(e, "[mip-header-btn]", "click", function(e) {
                        "back" === this.dataset.buttonName && (window.MIP_SHELL_OPTION.allowTransition = !0,
                        window.MIP_SHELL_OPTION.isForward = !1,
                        window.MIP.viewer.page.back())
                    })),
                    r.$buttonMask && (r.$buttonMask.addEventListener("click", function() {
                        return r.toggleDropdown(!1)
                    }),
                    r.$buttonMask.addEventListener("touchmove", function(e) {
                        return e.preventDefault()
                    }, !!Js && {
                        passive: !1
                    }))
                }(this)
            }
        }, {
            key: "unbindHeaderEvents",
            value: function() {
                !function(e) {
                    e.headerEventHandler && (e.headerEventHandler(),
                    e.headerEventHandler = void 0),
                    e.buttonEventHandler && (e.buttonEventHandler(),
                    e.buttonEventHandler = void 0),
                    e.fadeHeaderEventHandler && (e.fadeHeaderEventHandler(),
                    e.fadeHeaderEventHandler = void 0)
                }(this)
            }
        }, {
            key: "handleClickHeaderButton",
            value: function(e) {
                "back" === e ? (window.MIP_SHELL_OPTION.allowTransition = !0,
                window.MIP_SHELL_OPTION.isForward = !1,
                Vl.back()) : "more" === e ? this.toggleDropdown(!0) : "close" === e ? window.MIP.viewer.sendMessage("close") : "cancel" === e && this.toggleDropdown(!1),
                this.handleShellCustomButton(e),
                Vl.emitEventInCurrentPage({
                    name: "shell-header:click-".concat(e)
                })
            }
        }, {
            key: "refreshShell",
            value: function() {
                var e = this
                  , t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = t.pageMeta
                  , r = t.pageId
                  , i = t.asyncRefresh;
                if (this.unbindHeaderEvents(),
                r && (n = this.findMetaByPageId(r)),
                (this.currentPageMeta = n).header && n.header.show) {
                    i ? (eu(!0, n),
                    setTimeout(function() {
                        e.renderHeader(e.$el),
                        eu(!1),
                        e.bindHeaderEvents()
                    }, 350)) : (this.renderHeader(this.$el),
                    Ti(this.$loading, "display", "none")),
                    this.updateOtherParts();
                    var o = Al(n.header.buttonGroup)
                      , a = o.mask
                      , s = o.buttonWrapper;
                    if (this.$buttonMask = a,
                    this.$buttonWrapper = s,
                    Ti(this.$wrapper, "display", ""),
                    !i) {
                        if (!this.transitionContainsHeader) {
                            var c = this.$el.querySelector(".mip-shell-header-logo-title");
                            c && c.classList.remove("fade-out"),
                            eu(!1)
                        }
                        this.bindHeaderEvents()
                    }
                } else if (Ti(this.$wrapper, "display", "none"),
                Ti(this.$loading, "display", "none"),
                !this.transitionContainsHeader) {
                    var u = this.$el.querySelector(".mip-shell-header-logo-title");
                    u && u.classList.remove("fade-out"),
                    eu(!1)
                }
            }
        }, {
            key: "toggleDropdown",
            value: function(e) {
                Tl(this.$buttonMask, e),
                Tl(this.$buttonWrapper, e, {
                    transitionName: "slide"
                })
            }
        }, {
            key: "togglePageMask",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.skipTransition
                  , r = t.extraClass;
                $l && (r && (e ? this.$pageMask.classList.add(r) : this.$pageMask.classList.remove(r)),
                Tl(this.$pageMask, e, {
                    skipTransition: n
                }))
            }
        }, {
            key: "toggleDOM",
            value: function(e, t, n) {
                Tl(e, t, n)
            }
        }, {
            key: "toggleTransition",
            value: function(e) {
                e ? this.$el.classList.add("transition") : this.$el.classList.remove("transition")
            }
        }, {
            key: "bindAllEvents",
            value: function() {
                var n = this;
                !window.MIP.standalone && "scrollRestoration"in window.history && (window.history.scrollRestoration = "manual"),
                this.currentPageMeta.header.show && document.body.classList.add("with-header"),
                this.messageHandlers.push(function(e, t) {
                    e === cc && no(window, t.name, t.data)
                }),
                window.addEventListener("message", function(t) {
                    try {
                        n.messageHandlers.forEach(function(e) {
                            e.call(n, t.data.type, t.data.data || {})
                        })
                    } catch (t) {}
                }, !1)
            }
        }, {
            key: "updateShellConfig",
            value: function(e) {
                Vl.isRootPage && (window.MIP_SHELL_CONFIG = e.routes,
                window.MIP_PAGE_META_CACHE = Object.create(null),
                Vl.notifyRootPage({
                    type: "set-mip-shell-config",
                    data: {
                        shellConfig: e.routes,
                        update: !0
                    }
                }))
            }
        }, {
            key: "findMetaByPageId",
            value: function(e) {
                var t;
                if ((t = Vl.isRootPage || Vl.isCrossOrigin ? window : window.parent).MIP_PAGE_META_CACHE[e])
                    return t.MIP_PAGE_META_CACHE[e];
                for (var n = 0; n < t.MIP_SHELL_CONFIG.length; n++) {
                    var r = t.MIP_SHELL_CONFIG[n];
                    if (r.regexp.test(e))
                        return t.MIP_PAGE_META_CACHE[e] = r.meta,
                        r.meta
                }
                return console.warn("Cannot find MIP Shell Config for current page. Use default instead."),
                Object.assign({}, rc)
            }
        }, {
            key: "processShellConfig",
            value: function(e) {}
        }, {
            key: "processShellConfigInLeaf",
            value: function(e, t) {}
        }, {
            key: "handleShellCustomButton",
            value: function(e) {}
        }, {
            key: "renderOtherParts",
            value: function() {}
        }, {
            key: "renderOtherPartsAsync",
            value: function() {}
        }, {
            key: "updateOtherParts",
            value: function() {}
        }, {
            key: "showHeaderCloseButton",
            value: function() {
                return !0
            }
        }, {
            key: "beforeSwitchPage",
            value: function(e) {}
        }, {
            key: "afterSwitchPage",
            value: function(e) {}
        }]),
        o
    }();
    function Yl(e) {
        this.element = e,
        this.init && this.init()
    }
    !function(f) {
        function d(e, t) {
            p(e, t) || (q[e] = Math.max(q[e] || 0, t))
        }
        function e(e, t) {
            function n(e) {
                0 === e.indexOf(".") && r.push(e)
            }
            var r = [];
            if ("string" == typeof e ? n(e) : M(e, function(e) {
                n(e)
            }),
            0 < r.length)
                throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: " + r.join(", "));
            var i = W.waitSeconds;
            return i && e instanceof Array && (j && clearTimeout(j),
            j = setTimeout(o, 1e3 * i)),
            z(e, t)
        }
        function o() {
            function r(e, t) {
                if (!c[e] && !p(e, F)) {
                    c[e] = 1;
                    var n = H[e];
                    n ? (t || !p(e, D) || n.hang) && (a[e] || (a[e] = 1,
                    i.push(e)),
                    M(n.depMs, function(e) {
                        r(e.absId, e.hard)
                    })) : s[e] || (s[e] = 1,
                    o.push(e))
                }
            }
            var i = []
              , o = []
              , a = {}
              , s = {}
              , c = {};
            for (var e in q)
                q[e] >= F && r(e, 1);
            if (i.length || o.length)
                throw new Error("[MODULE_TIMEOUT]Hang: " + (i.join(", ") || "none") + "; Miss: " + (o.join(", ") || "none"))
        }
        function a(e) {
            M(G, function(t) {
                M(e, function(e) {
                    u(e, t.deps, t.factory)
                })
            }),
            G.length = 0
        }
        function s(e, t, n) {
            if (null == n && (null == t ? (n = e,
            e = null) : (n = t,
            t = null,
            e instanceof Array && (t = e,
            e = null))),
            null != n) {
                var r, i = window.opera;
                if (!e && document.attachEvent && (!i || "[object Opera]" !== i.toString())) {
                    var o = function() {
                        if (re)
                            return re;
                        if (ie && "interactive" === ie.readyState)
                            return ie;
                        for (var e = document.getElementsByTagName("script"), t = e.length; t--; ) {
                            var n = e[t];
                            if ("interactive" === n.readyState)
                                return ie = n
                        }
                    }();
                    r = o && J[o.getAttribute("data-src")]
                }
                e ? u(e, t, n) : r ? M(r, function(e) {
                    u(e, t, n)
                }) : G[0] = {
                    deps: t,
                    factory: n
                }
            }
        }
        function c() {
            var e = W.config[this.id];
            return e && "object" == cr(e) ? e : {}
        }
        function u(e, t, n) {
            H[e] || (H[e] = {
                id: e,
                depsDec: t,
                deps: t || ["require", "exports", "module"],
                factoryDeps: [],
                factory: n,
                exports: {},
                config: c,
                state: 0,
                require: r(e),
                depMs: [],
                depMkv: {},
                depRs: [],
                hang: 0
            },
            g(e, N))
        }
        function l(a) {
            var s = H[a];
            if (s && !p(a, R)) {
                var r = s.deps
                  , e = s.factory
                  , c = 0;
                "function" == typeof e && (c = Math.min(e.length, r.length),
                !s.depsDec && e.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, "").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g, function(e, t, n) {
                    r.push(n)
                }));
                var u = []
                  , l = [];
                M(r, function(e, t) {
                    var n, r, i = T(e), o = L(i.mod, a);
                    o && !U[o] ? (i.res && (r = {
                        id: e,
                        mod: o,
                        res: i.res
                    },
                    l.push(e),
                    s.depRs.push(r)),
                    (n = s.depMkv[o]) || (n = {
                        id: i.mod,
                        absId: o,
                        hard: t < c
                    },
                    s.depMs.push(n),
                    s.depMkv[o] = n,
                    u.push(o))) : n = {
                        absId: o
                    },
                    t < c && s.factoryDeps.push(r || n)
                }),
                g(a, R),
                function(i) {
                    var o, a = H[i];
                    a.invokeFactory = function() {
                        if (!o && a.state === D) {
                            var n = o = 1;
                            if (M(a.factoryDeps, function(e) {
                                var t = e.absId;
                                return U[t] ? void 0 : (v(t),
                                n = p(t, F))
                            }),
                            n) {
                                try {
                                    var e = a.factory
                                      , t = "function" == typeof e ? e.apply(f, m(a.factoryDeps, {
                                        require: a.require,
                                        exports: a.exports,
                                        module: a
                                    })) : e;
                                    null != t && (a.exports = t),
                                    a.invokeFactory = null
                                } catch (e) {
                                    if (/^\[MODULE_MISS\]"([^"]+)/.test(e.message)) {
                                        var r = a.depMkv[RegExp.$1];
                                        return r && (r.hard = 1),
                                        void (o = 0)
                                    }
                                    throw a.hang = 1,
                                    e
                                }
                                w(i)
                            }
                        }
                    }
                }(a),
                E(u),
                l.length && s.require(l, function() {
                    M(s.depRs, function(e) {
                        e.absId || (e.absId = L(e.id, a))
                    }),
                    h()
                })
            }
        }
        function h() {
            for (var e in q) {
                var t = q[e];
                D <= t && (l(e),
                n(e)),
                F <= t && v(e)
            }
        }
        function n(e) {
            var i = {};
            !function t(e) {
                if (l(e),
                !p(e, R))
                    return !1;
                if (p(e, D) || i[e])
                    return !0;
                i[e] = 1;
                var n = H[e]
                  , r = !0;
                return M(n.depMs, function(e) {
                    r = t(e.absId) && r
                }),
                r && M(n.depRs, function(e) {
                    return r = !!e.absId
                }),
                r && (g(e, D),
                i[e] = 0),
                r
            }(e)
        }
        function p(e, t) {
            return H[e] && H[e].state >= t
        }
        function v(e) {
            var t = H[e];
            t && t.invokeFactory && t.invokeFactory()
        }
        function m(e, n) {
            var r = [];
            return M(e, function(e, t) {
                "object" == cr(e) && (e = e.absId),
                r[t] = n[e] || H[e].exports
            }),
            r
        }
        function y(e, t, n) {
            if (p(e, t))
                n();
            else {
                var r = X[t][e];
                r || (r = X[t][e] = []),
                r.push(n)
            }
        }
        function g(e, t) {
            if (!p(e, t)) {
                var n = H[e];
                n.state = t;
                var r = X[t][e];
                X[t][e] = null,
                M(r, function(e) {
                    e()
                });
                var i = W[X[t][":hook"]];
                "function" == typeof i && i(n.id, n.deps, n.factory),
                M((r = V[e]) && r[t], function(e) {
                    e(n.id, n.deps, n.factory)
                })
            }
        }
        function w(e) {
            delete q[e],
            g(e, F)
        }
        function b(e) {
            return H[e] ? H[e].state : B[e] ? i : t
        }
        function E(e, n, i) {
            function o() {
                if ("function" == typeof n && !r) {
                    var t = 1;
                    M(e, function(e) {
                        return U[e] ? void 0 : t = !!p(e, F)
                    }),
                    t && (r = 1,
                    n.apply(f, m(e, U)))
                }
            }
            var r = 0;
            M(e, function(t) {
                if (!U[t] && !p(t, F)) {
                    y(t, F, o);
                    var n, r = {
                        id: t,
                        load: function(e) {
                            B[t] || H[t] || k(t, e)
                        },
                        getModuleState: b
                    };
                    B[t] || H[t] || (M($, function(e) {
                        return void 0 === (n = e(r, h))
                    }),
                    "string" == typeof n ? k(t, n) : !1 !== n && (0 < t.indexOf("!") ? function(n, r) {
                        function i(e) {
                            t.exports = e || !0,
                            w(n)
                        }
                        var e = _(n);
                        if (e)
                            return k(e);
                        var o = T(n)
                          , t = {
                            id: n,
                            state: R
                        };
                        H[n] = t,
                        i.fromText = function(e, t) {
                            new Function(t)(),
                            a([e])
                        }
                        ,
                        function(e) {
                            var t = r ? H[r].require : z;
                            e.load(o.res, t, i, c.call({
                                id: n
                            }))
                        }(z(o.mod))
                    }(t, i) : k(t)))
                }
            }),
            o()
        }
        function k(e, n) {
            function t() {
                J[n] || (J[n] = []),
                J[n].push(e),
                function(e, t, n) {
                    function r() {
                        var e = i.readyState;
                        (void 0 === e || /^(loaded|complete)$/.test(e)) && (i.onload = i.onreadystatechange = null,
                        i = null,
                        n())
                    }
                    if (!Q[e]) {
                        Q[e] = 1;
                        var i = document.createElement("script");
                        i.setAttribute("data-src", e),
                        i.src = e,
                        i.async = !0,
                        i.readyState ? i.onreadystatechange = r : i.onload = r;
                        var o = W.onNodeCreated;
                        "function" == typeof o && o(i, W, t, e),
                        re = i,
                        se ? ae.insertBefore(i, se) : ae.appendChild(i),
                        re = null
                    }
                }(n, e, function() {
                    var t;
                    i ? ("function" == typeof i.init && (t = i.init.apply(f, m(o, U))),
                    null == t && i.exports && (t = f,
                    M(i.exports.split("."), function(e) {
                        return !!(t = t[e])
                    })),
                    s(e, o, function() {
                        return t || {}
                    })) : a(J[n]);
                    h()
                })
            }
            B[e] = 1;
            var r = _(e) || e;
            n = n || I(r + ".js");
            var i = W.shim[e];
            i instanceof Array && (W.shim[e] = i = {
                deps: i
            });
            var o = i && (i.deps || []);
            o ? (M(o, function(e) {
                W.shim[e] || (W.shim[e] = {})
            }),
            z(o, t)) : t()
        }
        function S(e, t) {
            var n = [];
            for (var r in e)
                e.hasOwnProperty(r) && n.push({
                    k: r,
                    v: e[r],
                    reg: "*" === r && t ? /^/ : C(r)
                });
            return n.sort(O),
            n
        }
        function P() {
            function e(e) {
                e instanceof RegExp ? te.push([e, a]) : ee[A(e)] = L(a)
            }
            W.baseUrl = W.baseUrl.replace(/\/$/, "") + "/",
            Y = S(W.paths),
            M(K = S(W.map, 1), function(e) {
                e.v = S(e.v)
            });
            var t = K[K.length - 1];
            t && "*" === t.k && M(K, function(e) {
                e !== t && (e.v = e.v.concat(t.v))
            });
            var n = {}
              , r = W.packages.length;
            for (Z = []; r--; ) {
                var i, o = W.packages[r];
                switch (cr(o)) {
                case "string":
                    i = {
                        name: o.split("/")[0],
                        location: o
                    };
                    break;
                case "object":
                    i = {
                        name: o.name,
                        location: o.location,
                        main: o.main
                    }
                }
                n[i.name] || (n[i.name] = 1,
                i.location = i.location || i.name,
                i.main = (i.main || "main").replace(/\.js$/i, ""),
                i.reg = C(i.name),
                Z.push(i))
            }
            for (var a in Z.sort(O),
            ne = S(W.urlArgs, 1),
            ee = {},
            te = [],
            W.bundles)
                M(W.bundles[a], e)
        }
        function _(t) {
            var n = ee[t];
            return n || M(te, function(e) {
                return e[0].test(t) ? (n = e[1],
                !1) : void 0
            }),
            n
        }
        function x(t, e, n) {
            M(e, function(e) {
                return e.reg.test(t) ? (n(e.v, e.k, e),
                !1) : void 0
            })
        }
        function I(e, t) {
            var n = /(\.[a-z0-9]+)$/i
              , r = /(\?[^#]*)$/
              , i = ""
              , o = e
              , a = "";
            r.test(e) && (a = RegExp.$1,
            e = e.replace(r, "")),
            n.test(e) && (i = RegExp.$1,
            o = e.replace(n, "")),
            null != t && (o = L(o, t));
            var s, c = o;
            return x(o, Y, function(e, t) {
                c = c.replace(t, e),
                s = 1
            }),
            s || x(o, Z, function(e, t, n) {
                c = c.replace(n.name, n.location)
            }),
            /^([a-z]{2,10}:\/)?\//i.test(c) || (c = W.baseUrl + c),
            c += i + a,
            x(o, ne, function(e) {
                c += (0 < c.indexOf("?") ? "&" : "?") + e
            }),
            c
        }
        function r(l) {
            function o(e, s) {
                var c = []
                  , u = [];
                return M(e, function(e, t) {
                    var n = T(e)
                      , r = L(n.mod, l)
                      , i = n.res
                      , o = r;
                    if (i) {
                        var a = r + "!" + i;
                        0 !== i.indexOf(".") && _(a) ? r = o = a : o = null
                    }
                    u[t] = o,
                    d(r, s),
                    c.push(r)
                }),
                {
                    mods: c,
                    ids: u
                }
            }
            function e(n, e) {
                if ("string" == typeof n) {
                    if (!i[n]) {
                        var t = L(n, l);
                        if (v(t),
                        !p(t, F))
                            throw new Error('[MODULE_MISS]"' + t + '" is not exists!');
                        i[n] = H[t].exports
                    }
                    return i[n]
                }
                if (n instanceof Array) {
                    var r = o(n, F);
                    E(r.mods, function() {
                        M(r.ids, function(e, t) {
                            null == e && d(e = r.ids[t] = L(n[t], l), F)
                        }),
                        E(r.ids, e, l),
                        h()
                    }, l),
                    h()
                }
            }
            var i = {};
            return e.toUrl = function(e) {
                return I(e, l || "")
            }
            ,
            e.fetch = function(e, t) {
                function n() {
                    ++r >= e.length && t()
                }
                var r = 0
                  , i = o(e, D);
                M(i.mods, function(e) {
                    y(e, D, n)
                }),
                E(i.mods),
                h()
            }
            ,
            e
        }
        function L(e, t) {
            if (!e)
                return "";
            t = t || "";
            var n = T(e);
            if (!n)
                return e;
            var r = n.res
              , i = function(e, t) {
                if (0 !== e.indexOf("."))
                    return e;
                for (var n = t.split("/").slice(0, -1).concat(e.split("/")), r = [], i = 0; i < n.length; i++) {
                    var o = n[i];
                    switch (o) {
                    case ".":
                        break;
                    case "..":
                        r.length && ".." !== r[r.length - 1] ? r.pop() : r.push(o);
                        break;
                    default:
                        o && r.push(o)
                    }
                }
                return r.join("/")
            }(n.mod, t);
            if (x(t, K, function(e) {
                x(i, e, function(e, t) {
                    i = i.replace(t, e)
                })
            }),
            i = A(i),
            r) {
                var o = p(i, F) && z(i);
                r = o && o.normalize ? o.normalize(r, function(e) {
                    return L(e, t)
                }) : L(r, t),
                i += "!" + r
            }
            return i
        }
        function A(n) {
            return M(Z, function(e) {
                var t = e.name;
                return t === n ? (n = t + "/" + e.main,
                !1) : void 0
            }),
            n
        }
        function T(e) {
            var t = e.split("!");
            return t[0] ? {
                mod: t[0],
                res: t[1]
            } : void 0
        }
        function C(e) {
            return new RegExp("^" + e + "(/|$)")
        }
        function M(e, t) {
            if (e instanceof Array)
                for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++)
                    ;
        }
        function O(e, t) {
            var n = e.k || e.name
              , r = t.k || t.name;
            return "*" === r ? -1 : "*" === n ? 1 : r.length - n.length
        }
        var j, H = {}, t = -1, i = 0, N = 1, R = 2, D = 3, F = 4, q = {}, B = {}, U = {
            require: e,
            exports: 1,
            module: 1
        }, z = r(), W = {
            baseUrl: "./",
            paths: {},
            config: {},
            map: {},
            packages: [],
            shim: {},
            waitSeconds: 0,
            bundles: {},
            urlArgs: {}
        };
        e.version = "2.2.1",
        e.toUrl = z.toUrl,
        e.fetch = z.fetch,
        e.ModuleState = {
            NOT_FOUND: t,
            LOADING: i,
            PRE_DEFINED: N,
            ANALYZED: R,
            PREPARED: D,
            DEFINED: F
        };
        var V = {};
        e.listenModuleStateChange = function(e, t, n) {
            if ("function" == typeof n && N <= t && t <= F)
                if (p(e, t)) {
                    var r = H[e];
                    n(r.id, r.deps, r.factory)
                } else {
                    var i = V[e];
                    i || (i = V[e] = {}),
                    i[t] = i[t] || [],
                    i[t].push(n)
                }
        }
        ,
        e.unlistenModuleStateChange = function(e, t, n) {
            var r = V[e];
            if (r)
                if (n)
                    for (var i = r[t], o = i && i.length; o--; )
                        i[o] === n && i.splice(o, 1);
                else
                    r[t] = null
        }
        ,
        e.undef = function(e) {
            delete B[e],
            delete H[e]
        }
        ;
        var $ = [];
        e.addLoader = function(e) {
            "function" == typeof e && $.push(e)
        }
        ,
        e.removeLoader = function(e) {
            for (var t = $.length; t--; )
                e === $[t] && $.splice(t, 1)
        }
        ;
        var G = [];
        s.amd = {};
        var X = {};
        X[R] = {
            ":hook": "onModuleAnalyzed"
        },
        X[F] = {
            ":hook": "onModuleDefined"
        },
        X[N] = {
            ":hook": "onModulePreDefined"
        },
        X[D] = {
            ":hook": "onModulePrepared"
        };
        var Q = {}
          , J = {};
        e.config = function(e) {
            if (e) {
                for (var t in e) {
                    var n = e[t]
                      , r = W[t];
                    if (0 === t.indexOf("on"))
                        W[t] = n;
                    else if ("urlArgs" === t && "string" == typeof n)
                        W.urlArgs["*"] = n;
                    else if (r instanceof Array)
                        r.push.apply(r, n);
                    else if (null != r)
                        if ("object" == cr(r))
                            for (var i in n)
                                r[i] = n[i];
                        else
                            W[t] = n
                }
                P()
            }
        }
        ,
        P();
        var Y, Z, K, ee, te, ne, re, ie, oe, ae = document.getElementsByTagName("head")[0], se = document.getElementsByTagName("base")[0];
        se && (ae = se.parentNode),
        Gl || (Gl = s,
        "function" != typeof Xl && (e.config(Xl),
        Xl = e),
        "function" != typeof Ql && (e.config(Ql),
        Ql = e),
        "undefined" != typeof requirejs && "function" != typeof requirejs && e.config(requirejs)),
        function() {
            for (var e = document.getElementsByTagName("script"), t = e.length; t--; ) {
                var n = e[t];
                if (oe = n.getAttribute("data-main"))
                    break
            }
        }(),
        oe && setTimeout(function() {
            e([oe])
        }, 4)
    }(window),
    window.define = Gl,
    window.require = Xl,
    window.esl = Ql,
    Yl.prototype.applyFillContent = function(e, t) {
        e.classList.add("mip-fill-content"),
        t && e.classList.add("mip-replaced-content")
    }
    ,
    Yl.prototype.createdCallback = function() {}
    ,
    Yl.prototype.attachedCallback = function() {}
    ,
    Yl.prototype.detachedCallback = function() {}
    ,
    Yl.prototype.attributeChangedCallback = function() {}
    ,
    Yl.prototype.firstInviewCallback = function() {}
    ,
    Yl.prototype.viewportCallback = function() {}
    ,
    Yl.prototype.prerenderAllowed = function() {
        return !1
    }
    ,
    Yl.prototype.hasResources = function() {
        return !1
    }
    ,
    Yl.prototype.build = function() {}
    ,
    Yl.prototype.expendAttr = function(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (this.element.hasAttribute(r)) {
                var i = this.element.getAttribute(r);
                t.setAttribute ? t.setAttribute(r, i) : t[r] = i
            }
        }
        return t
    }
    ,
    Yl.prototype.addEventAction = function() {
        var e = this._actionEvent;
        e || (e = this._actionEvent = new hr).setEventContext(this),
        e.on.apply(e, arguments)
    }
    ,
    Yl.prototype.executeEventAction = function(e) {
        if (!e)
            return !1;
        var t = this._actionEvent;
        return !(!t || !t.__events[e.handler]) && (t.trigger(e.handler, e.event, e.arg),
        !0)
    }
    ,
    Yl.prototype.resourcesComplete = function() {
        this.element.resourcesComplete()
    }
    ;
    var Zl = {
        create: function() {
            function e(e) {
                Yl.call(this, e)
            }
            return e.prototype = Object.create(Yl.prototype),
            e
        }
    };
    window.require.config({
        paths: {
            "searchbox/openjs/aio": "https://m.baidu.com/static/searchbox/openjs/aio.js?v=201606",
            jquery: "https://c.mipcdn.com/static/deps/jquery",
            zepto: "https://c.mipcdn.com/static/deps/zepto"
        }
    }),
    window.define("util", function() {
        return Gu
    }),
    window.define("viewer", function() {
        return Cu
    }),
    window.define("viewport", function() {
        return As
    }),
    window.define("templates", function() {
        return So
    }),
    window.define("customElement", function() {
        return Zl
    }),
    window.define("performance", function() {
        return xu
    }),
    window.define("utils/customStorage", function() {
        return Gu.customStorage
    }),
    window.define("fetch-jsonp", function() {
        return window.fetchJsonp
    }),
    window.define("fixed-element", function() {
        return Lu
    }),
    window.define("hash", function() {
        return ci
    }),
    window.define("dom/event", function() {
        return Gu.event
    }),
    window.define("mip", function() {
        return window.MIP
    }),
    window.define("naboo", function() {
        return Gu.naboo
    }),
    window.define("dom/css-loader", function() {
        return Zu
    }),
    window.define("dom/css", function() {
        return Gu.css
    }),
    window.define("dom/dom", function() {
        return Gu.dom
    }),
    window.define("dom/rect", function() {
        return Gu.rect
    }),
    window.define("utils/event-action", function() {
        return Gs
    }),
    window.define("utils/event-emitter", function() {
        return Gu.EventEmitter
    }),
    window.define("utils/fn", function() {
        return Gu.fn
    }),
    window.define("utils/platform", function() {
        return Gu.platform
    }),
    window.define("utils/gesture", function() {
        return Gu.Gesture
    }),
    ze(ze.P + ze.R, "Promise", {
        finally: function(t) {
            var n = w(this, je.Promise || Oe.Promise)
              , e = "function" == typeof t;
            return this.then(e ? function(e) {
                return K(n, t()).then(function() {
                    return e
                })
            }
            : t, e ? function(e) {
                return K(n, t()).then(function() {
                    throw e
                })
            }
            : t)
        }
    });
    function Kl(e, t, n) {
        t in e ? De.f(e, t, Ce(0, n)) : e[t] = n
    }
    ze(ze.S + ze.F * !fe(function(e) {}), "Array", {
        from: function(e) {
            var t, n, r, i, o = vn(e), a = "function" == typeof this ? this : Array, s = arguments.length, c = 1 < s ? arguments[1] : void 0, u = void 0 !== c, l = 0, f = M(o);
            if (u && (c = Pe(c, 2 < s ? arguments[2] : void 0, 2)),
            null == f || a == Array && g(f))
                for (n = new a(t = Ue(o.length)); l < t; l++)
                    Kl(n, l, u ? c(o[l], l) : o[l]);
            else
                for (i = f.call(o),
                n = new a; !(r = i.next()).done; l++)
                    Kl(n, l, u ? p(i, c, [r.value, l], !0) : r.value);
            return n.length = l,
            n
        }
    });
    function ef(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
    var tf = {};
    Fe(tf, He("iterator"), function() {
        return this
    });
    function nf() {
        return this
    }
    function rf(e, t, n, r, i, o, a) {
        function s(e) {
            if (!uf && e in p)
                return p[e];
            switch (e) {
            case "keys":
            case lf:
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this,e)
            }
        }
        !function(e, t, n) {
            e.prototype = jt(tf, {
                next: Ce(1, n)
            }),
            te(e, t + " Iterator")
        }(n, t, r);
        var c, u, l, f = t + " Iterator", d = i == lf, h = !1, p = e.prototype, v = p[cf] || p["@@iterator"] || i && p[i], m = v || s(i), y = i ? d ? s("entries") : m : void 0, g = "Array" == t && p.entries || v;
        if (g && (l = sf(g.call(new e))) !== Object.prototype && l.next && (te(l, f, !0),
        "function" != typeof l[cf] && Fe(l, cf, nf)),
        d && v && v.name !== lf && (h = !0,
        m = function() {
            return v.call(this)
        }
        ),
        (uf || h || !p[cf]) && Fe(p, cf, m),
        _[t] = m,
        _[f] = nf,
        i)
            if (c = {
                values: d ? m : s(lf),
                keys: o ? m : s("keys"),
                entries: y
            },
            a)
                for (u in c)
                    u in p || qe(p, u, c[u]);
            else
                ze(ze.P + ze.F * (uf || h), t, c);
        return c
    }
    var of = it("IE_PROTO")
      , af = Object.prototype
      , sf = Object.getPrototypeOf || function(e) {
        return e = vn(e),
        Me(e, of) ? e[of] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? af : null
    }
      , cf = He("iterator")
      , uf = !([].keys && "next"in [].keys())
      , lf = "values"
      , ff = rf(Array, "Array", function(e, t) {
        this._t = rt(e),
        this._i = 0,
        this._k = t
    }, function() {
        var e = this._t
          , t = this._k
          , n = this._i++;
        return !e || n >= e.length ? (this._t = void 0,
        ef(1)) : ef(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values");
    _.Arguments = _.Array,
    bn("keys"),
    bn("values"),
    bn("entries"),
    ze(ze.S, "Object", {
        create: jt
    });
    function df(e, t) {
        var n = (je.Object || {})[e] || Object[e]
          , r = {};
        r[e] = t(n),
        ze(ze.S + ze.F * Le(function() {
            n(1)
        }), "Object", r)
    }
    var hf = mt.onFreeze;
    df("freeze", function(t) {
        return function(e) {
            return t && xe(e) ? t(hf(e)) : e
        }
    }),
    df("getPrototypeOf", function() {
        return function(e) {
            return sf(vn(e))
        }
    }),
    df("keys", function() {
        return function(e) {
            return xt(vn(e))
        }
    });
    function pf(e, t) {
        if (!xe(e) || e._t !== t)
            throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
    function vf(e, t) {
        var n, r = gf(t);
        if ("F" !== r)
            return e._i[r];
        for (n = e._f; n; n = n.n)
            if (n.k == t)
                return n
    }
    function mf(e, t) {
        if (Ie(e),
        !xe(t) && null !== t)
            throw TypeError(t + ": can't set as prototype!")
    }
    var yf = De.f
      , gf = mt.fastKey
      , wf = Ne ? "_s" : "size"
      , bf = {
        getConstructor: function(e, o, n, r) {
            var i = e(function(e, t) {
                y(e, i, o, "_i"),
                e._t = o,
                e._i = jt(null),
                e._f = void 0,
                e._l = void 0,
                e[wf] = 0,
                null != t && O(t, n, e[r], e)
            });
            return ee(i.prototype, {
                clear: function() {
                    for (var e = pf(this, o), t = e._i, n = e._f; n; n = n.n)
                        n.r = !0,
                        n.p && (n.p = n.p.n = void 0),
                        delete t[n.i];
                    e._f = e._l = void 0,
                    e[wf] = 0
                },
                delete: function(e) {
                    var t = pf(this, o)
                      , n = vf(t, e);
                    if (n) {
                        var r = n.n
                          , i = n.p;
                        delete t._i[n.i],
                        n.r = !0,
                        i && (i.n = r),
                        r && (r.p = i),
                        t._f == n && (t._f = r),
                        t._l == n && (t._l = i),
                        t[wf]--
                    }
                    return !!n
                },
                forEach: function(e) {
                    pf(this, o);
                    for (var t, n = Pe(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.n : this._f; )
                        for (n(t.v, t.k, this); t && t.r; )
                            t = t.p
                },
                has: function(e) {
                    return !!vf(pf(this, o), e)
                }
            }),
            Ne && yf(i.prototype, "size", {
                get: function() {
                    return pf(this, o)[wf]
                }
            }),
            i
        },
        def: function(e, t, n) {
            var r, i, o = vf(e, t);
            return o ? o.v = n : (e._l = o = {
                i: i = gf(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            },
            e._f || (e._f = o),
            r && (r.n = o),
            e[wf]++,
            "F" !== i && (e._i[i] = o)),
            e
        },
        getEntry: vf,
        setStrong: function(e, n, t) {
            rf(e, n, function(e, t) {
                this._t = pf(e, n),
                this._k = t,
                this._l = void 0
            }, function() {
                for (var e = this._k, t = this._l; t && t.r; )
                    t = t.p;
                return this._t && (this._l = t = t ? t.n : this._t._f) ? ef(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0,
                ef(1))
            }, t ? "entries" : "values", !t, !0),
            ne(n)
        }
    }
      , Ef = {
        set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, n, r) {
            try {
                (r = Pe(Function.call, Ut.f(Object.prototype, "__proto__").set, 2))(e, []),
                n = !(e instanceof Array)
            } catch (e) {
                n = !0
            }
            return function(e, t) {
                return mf(e, t),
                n ? e.__proto__ = t : r(e, t),
                e
            }
        }({}, !1) : void 0),
        check: mf
    }.set;
    !function(r, e, t, n, i, o) {
        function a(e) {
            var n = l[e];
            qe(l, e, "delete" == e ? function(e) {
                return !(o && !xe(e)) && n.call(this, 0 === e ? 0 : e)
            }
            : "has" == e ? function(e) {
                return !(o && !xe(e)) && n.call(this, 0 === e ? 0 : e)
            }
            : "get" == e ? function(e) {
                return o && !xe(e) ? void 0 : n.call(this, 0 === e ? 0 : e)
            }
            : "add" == e ? function(e) {
                return n.call(this, 0 === e ? 0 : e),
                this
            }
            : function(e, t) {
                return n.call(this, 0 === e ? 0 : e, t),
                this
            }
            )
        }
        var s = Oe[r]
          , c = s
          , u = i ? "set" : "add"
          , l = c && c.prototype
          , f = {};
        if ("function" == typeof c && (o || l.forEach && !Le(function() {
            (new c).entries().next()
        }))) {
            var d = new c
              , h = d[u](o ? {} : -0, 1) != d
              , p = Le(function() {
                d.has(1)
            })
              , v = fe(function(e) {
                new c(e)
            })
              , m = !o && Le(function() {
                for (var e = new c, t = 5; t--; )
                    e[u](t, t);
                return !e.has(-0)
            });
            v || (((c = e(function(e, t) {
                y(e, c, r);
                var n = function(e, t, n) {
                    var r, i = t.constructor;
                    return i !== n && "function" == typeof i && (r = i.prototype) !== n.prototype && xe(r) && Ef && Ef(e, r),
                    e
                }(new s, e, c);
                return null != t && O(t, i, n[u], n),
                n
            })).prototype = l).constructor = c),
            (p || m) && (a("delete"),
            a("has"),
            i && a("get")),
            (m || h) && a(u),
            o && l.clear && delete l.clear
        } else
            c = n.getConstructor(e, r, i, u),
            ee(c.prototype, t),
            mt.NEED = !0;
        te(c, r),
        f[r] = c,
        ze(ze.G + ze.W + ze.F * (c != s), f),
        o || n.setStrong(c, r, i)
    }("Set", function(e) {
        return function() {
            return e(this, 0 < arguments.length ? arguments[0] : void 0)
        }
    }, {
        add: function(e) {
            return bf.def(pf(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, bf);
    ze(ze.S, "Promise", {
        try: function(e) {
            var t = re.f(this)
              , n = Z(e);
            return (n.e ? t.reject : t.resolve)(n.v),
            t.promise
        }
    });
    for (var kf = He("iterator"), Sf = He("toStringTag"), Pf = _.Array, _f = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, xf = xt(_f), If = 0; If < xf.length; If++) {
        var Lf, Af = xf[If], Tf = _f[Af], Cf = Oe[Af], Mf = Cf && Cf.prototype;
        if (Mf && (Mf[kf] || Fe(Mf, kf, Pf),
        Mf[Sf] || Fe(Mf, Sf, Af),
        _[Af] = Pf,
        Tf))
            for (Lf in ff)
                Mf[Lf] || qe(Mf, Lf, ff[Lf], !0)
    }
    function Of(e) {
        return {
            __esModule: !0,
            default: e
        }
    }
    function jf(o) {
        var a, s;
        function c(e, t) {
            try {
                var n = o[e](t)
                  , r = n.value
                  , i = r instanceof function(e) {
                    this.wrapped = e
                }
                ;
                Promise.resolve(i ? r.wrapped : r).then(function(e) {
                    i ? c("next", e) : u(n.done ? "return" : "normal", e)
                }, function(e) {
                    c("throw", e)
                })
            } catch (e) {
                u("throw", e)
            }
        }
        function u(e, t) {
            switch (e) {
            case "return":
                a.resolve({
                    value: t,
                    done: !0
                });
                break;
            case "throw":
                a.reject(t);
                break;
            default:
                a.resolve({
                    value: t,
                    done: !1
                })
            }
            (a = a.next) ? c(a.key, a.arg) : s = null
        }
        this._invoke = function(r, i) {
            return new Promise(function(e, t) {
                var n = {
                    key: r,
                    arg: i,
                    resolve: e,
                    reject: t,
                    next: null
                };
                s ? s = s.next = n : (a = s = n,
                c(r, i))
            }
            )
        }
        ,
        "function" != typeof o.return && (this.return = void 0)
    }
    function Hf(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
    }
    function Nf(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function Rf(r, e) {
        var t = {}
          , i = !1;
        function n(t, n) {
            return i = !0,
            n = new Promise(function(e) {
                e(r[t](n))
            }
            ),
            {
                done: !1,
                value: e(n)
            }
        }
        return "function" == typeof Symbol && Symbol.iterator && (t[Symbol.iterator] = function() {
            return this
        }
        ),
        t.next = function(e) {
            return i ? (i = !1,
            e) : n("next", e)
        }
        ,
        "function" == typeof r.throw && (t.throw = function(e) {
            if (i)
                throw i = !1,
                e;
            return n("throw", e)
        }
        ),
        "function" == typeof r.return && (t.return = function(e) {
            return n("return", e)
        }
        ),
        t
    }
    function Df(e) {
        var t;
        if ("function" == typeof Symbol) {
            if (Symbol.asyncIterator && null != (t = e[Symbol.asyncIterator]))
                return t.call(e);
            if (Symbol.iterator && null != (t = e[Symbol.iterator]))
                return t.call(e)
        }
        throw new TypeError("Object is not async iterable")
    }
    function Ff(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function qf(s) {
        return function() {
            var e = this
              , a = arguments;
            return new Promise(function(t, n) {
                var r = s.apply(e, a);
                function i(e) {
                    Ff(r, t, n, i, o, "next", e)
                }
                function o(e) {
                    Ff(r, t, n, i, o, "throw", e)
                }
                i(void 0)
            }
            )
        }
    }
    function Bf(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function Uf(e, t) {
        return (Uf = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function zf(e, t, n) {
        return (zf = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r));
            return n && Uf(i, n.prototype),
            i
        }
        ).apply(null, arguments)
    }
    function Wf(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function Vf(e, t, n) {
        return t && Wf(e.prototype, t),
        n && Wf(e, n),
        e
    }
    function $f(e, t) {
        for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
            var i = n[r]
              , o = Object.getOwnPropertyDescriptor(t, i);
            o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o)
        }
        return e
    }
    function Gf(e, t) {
        for (var n in t) {
            (o = t[n]).configurable = o.enumerable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(e, n, o)
        }
        if (Object.getOwnPropertySymbols)
            for (var r = Object.getOwnPropertySymbols(t), i = 0; i < r.length; i++) {
                var o, a = r[i];
                (o = t[a]).configurable = o.enumerable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, a, o)
            }
        return e
    }
    function Xf(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Qf() {
        return (Qf = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function Jf(e) {
        return (Jf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function Yf(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Jf(e)); )
            ;
        return e
    }
    function Zf(e, t, n) {
        return (Zf = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = Yf(e, t);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value
            }
        }
        )(e, t, n || e)
    }
    function Kf(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && Uf(e, t)
    }
    function ed(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
    }
    function td(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function nd(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e,
        t
    }
    function rd(e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]")
    }
    function id(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
            return Array.from(e)
    }
    function od(e, t) {
        if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function")
    }
    function ad() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
    function sd(e) {
        if (null == e)
            throw new TypeError("Cannot destructure undefined")
    }
    function cd(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}
              , r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            r.forEach(function(e) {
                Xf(t, e, n[e])
            })
        }
        return t
    }
    function ud(e, t) {
        if (null == e)
            return {};
        var n, r, i = function(e, t) {
            if (null == e)
                return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                0 <= t.indexOf(n) || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }
    function ld(e) {
        return (ld = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function fd(e) {
        return (fd = "function" == typeof Symbol && "symbol" === ld(Symbol.iterator) ? function(e) {
            return ld(e)
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : ld(e)
        }
        )(e)
    }
    function dd(e, t) {
        return !t || "object" !== fd(t) && "function" != typeof t ? Nf(e) : t
    }
    function hd(e, t, n, r) {
        return (hd = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(e, t, n, r) {
            var i, o = Yf(e, t);
            if (o) {
                if ((i = Object.getOwnPropertyDescriptor(o, t)).set)
                    return i.set.call(r, n),
                    !0;
                if (!i.writable)
                    return !1
            }
            if (i = Object.getOwnPropertyDescriptor(r, t)) {
                if (!i.writable)
                    return !1;
                i.value = n,
                Object.defineProperty(r, t, i)
            } else
                Xf(r, t, n);
            return !0
        }
        )(e, t, n, r)
    }
    function pd(e, t, n, r, i) {
        if (!hd(e, t, n, r || e) && i)
            throw new Error("failed to set property");
        return n
    }
    function vd(e) {
        if (Array.isArray(e))
            return e
    }
    function md() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    function yd(e, t) {
        return vd(e) || function(e, t) {
            for (var n, r = [], i = e[Symbol.iterator](); !(n = i.next()).done && (r.push(n.value),
            !t || r.length !== t); )
                ;
            return r
        }(e, t) || md()
    }
    function gd(e, t) {
        return vd(e) || function(e, t) {
            var n = []
              , r = !0
              , i = !1
              , o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                i = !0,
                o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i)
                        throw o
                }
            }
            return n
        }(e, t) || md()
    }
    function wd(e, t) {
        return t || (t = e.slice(0)),
        e.raw = t,
        e
    }
    function bd(e, t) {
        return t || (t = e.slice(0)),
        Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    "function" == typeof Symbol && Symbol.asyncIterator && (jf.prototype[Symbol.asyncIterator] = function() {
        return this
    }
    ),
    jf.prototype.next = function(e) {
        return this._invoke("next", e)
    }
    ,
    jf.prototype.throw = function(e) {
        return this._invoke("throw", e)
    }
    ,
    jf.prototype.return = function(e) {
        return this._invoke("return", e)
    }
    ;
    var Ed = {};
    function kd(e, t) {
        if (e === Ed)
            throw new ReferenceError(t + " is not defined - temporal dead zone");
        return e
    }
    function Sd(e) {
        return vd(e) || id(e) || md()
    }
    function Pd(e) {
        return Hf(e) || id(e) || ad()
    }
    function _d(e) {
        var n = "function" == typeof Map ? new Map : void 0;
        return (_d = function(e) {
            if (null === e || !rd(e))
                return e;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(e))
                    return n.get(e);
                n.set(e, t)
            }
            function t() {
                return zf(e, arguments, Jf(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            Uf(t, e)
        }
        )(e)
    }
    var xd = e(function(C) {
        !function(e) {
            var c, t = Object.prototype, u = t.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {}, i = n.iterator || "@@iterator", r = n.asyncIterator || "@@asyncIterator", o = n.toStringTag || "@@toStringTag", a = e.regeneratorRuntime;
            if (a)
                C.exports = a;
            else {
                (a = e.regeneratorRuntime = C.exports).wrap = g;
                var l = "suspendedStart"
                  , f = "suspendedYield"
                  , d = "executing"
                  , h = "completed"
                  , p = {}
                  , s = {};
                s[i] = function() {
                    return this
                }
                ;
                var v = Object.getPrototypeOf
                  , m = v && v(v(A([])));
                m && m !== t && u.call(m, i) && (s = m);
                var y = k.prototype = b.prototype = Object.create(s);
                E.prototype = y.constructor = k,
                k.constructor = E,
                k[o] = E.displayName = "GeneratorFunction",
                a.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === E || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                a.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k,
                    o in e || (e[o] = "GeneratorFunction")),
                    e.prototype = Object.create(y),
                    e
                }
                ,
                a.awrap = function(e) {
                    return {
                        __await: e
                    }
                }
                ,
                S(P.prototype),
                P.prototype[r] = function() {
                    return this
                }
                ,
                a.AsyncIterator = P,
                a.async = function(e, t, n, r) {
                    var i = new P(g(e, t, n, r));
                    return a.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next()
                    })
                }
                ,
                S(y),
                y[o] = "Generator",
                y[i] = function() {
                    return this
                }
                ,
                y.toString = function() {
                    return "[object Generator]"
                }
                ,
                a.keys = function(n) {
                    var r = [];
                    for (var e in n)
                        r.push(e);
                    return r.reverse(),
                    function e() {
                        for (; r.length; ) {
                            var t = r.pop();
                            if (t in n)
                                return e.value = t,
                                e.done = !1,
                                e
                        }
                        return e.done = !0,
                        e
                    }
                }
                ,
                a.values = A,
                L.prototype = {
                    constructor: L,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = c,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = c,
                        this.tryEntries.forEach(I),
                        !e)
                            for (var t in this)
                                "t" === t.charAt(0) && u.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = c)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(n) {
                        if (this.done)
                            throw n;
                        var r = this;
                        function e(e, t) {
                            return o.type = "throw",
                            o.arg = n,
                            r.next = e,
                            t && (r.method = "next",
                            r.arg = c),
                            !!t
                        }
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var i = this.tryEntries[t]
                              , o = i.completion;
                            if ("root" === i.tryLoc)
                                return e("end");
                            if (i.tryLoc <= this.prev) {
                                var a = u.call(i, "catchLoc")
                                  , s = u.call(i, "finallyLoc");
                                if (a && s) {
                                    if (this.prev < i.catchLoc)
                                        return e(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc)
                                        return e(i.finallyLoc)
                                } else if (a) {
                                    if (this.prev < i.catchLoc)
                                        return e(i.catchLoc, !0)
                                } else {
                                    if (!s)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc)
                                        return e(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e,
                        o.arg = t,
                        i ? (this.method = "next",
                        this.next = i.finallyLoc,
                        p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === e.type && t && (this.next = t),
                        p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return this.complete(n.completion, n.afterLoc),
                                I(n),
                                p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    I(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: A(e),
                            resultName: t,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = c),
                        p
                    }
                }
            }
            function g(e, t, n, r) {
                var i = t && t.prototype instanceof b ? t : b
                  , o = Object.create(i.prototype)
                  , a = new L(r || []);
                return o._invoke = function(o, a, s) {
                    var c = l;
                    return function(e, t) {
                        if (c === d)
                            throw new Error("Generator is already running");
                        if (c === h) {
                            if ("throw" === e)
                                throw t;
                            return T()
                        }
                        for (s.method = e,
                        s.arg = t; ; ) {
                            var n = s.delegate;
                            if (n) {
                                var r = _(n, s);
                                if (r) {
                                    if (r === p)
                                        continue;
                                    return r
                                }
                            }
                            if ("next" === s.method)
                                s.sent = s._sent = s.arg;
                            else if ("throw" === s.method) {
                                if (c === l)
                                    throw c = h,
                                    s.arg;
                                s.dispatchException(s.arg)
                            } else
                                "return" === s.method && s.abrupt("return", s.arg);
                            c = d;
                            var i = w(o, a, s);
                            if ("normal" === i.type) {
                                if (c = s.done ? h : f,
                                i.arg === p)
                                    continue;
                                return {
                                    value: i.arg,
                                    done: s.done
                                }
                            }
                            "throw" === i.type && (c = h,
                            s.method = "throw",
                            s.arg = i.arg)
                        }
                    }
                }(e, n, a),
                o
            }
            function w(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            function b() {}
            function E() {}
            function k() {}
            function S(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }
            function P(c) {
                var t;
                this._invoke = function(n, r) {
                    function e() {
                        return new Promise(function(e, t) {
                            !function t(e, n, r, i) {
                                var o = w(c[e], c, n);
                                if ("throw" !== o.type) {
                                    var a = o.arg
                                      , s = a.value;
                                    return s && "object" == typeof s && u.call(s, "__await") ? Promise.resolve(s.__await).then(function(e) {
                                        t("next", e, r, i)
                                    }, function(e) {
                                        t("throw", e, r, i)
                                    }) : Promise.resolve(s).then(function(e) {
                                        a.value = e,
                                        r(a)
                                    }, function(e) {
                                        return t("throw", e, r, i)
                                    })
                                }
                                i(o.arg)
                            }(n, r, e, t)
                        }
                        )
                    }
                    return t = t ? t.then(e, e) : e()
                }
            }
            function _(e, t) {
                var n = e.iterator[t.method];
                if (n === c) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return",
                        t.arg = c,
                        _(e, t),
                        "throw" === t.method))
                            return p;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var r = w(n, e.iterator, t.arg);
                if ("throw" === r.type)
                    return t.method = "throw",
                    t.arg = r.arg,
                    t.delegate = null,
                    p;
                var i = r.arg;
                return i ? i.done ? (t[e.resultName] = i.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = c),
                t.delegate = null,
                p) : i : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                p)
            }
            function x(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function I(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function L(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(x, this),
                this.reset(!0)
            }
            function A(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , r = function e() {
                            for (; ++n < t.length; )
                                if (u.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = c,
                            e.done = !0,
                            e
                        };
                        return r.next = r
                    }
                }
                return {
                    next: T
                }
            }
            function T() {
                return {
                    value: c,
                    done: !0
                }
            }
        }(function() {
            return this || "object" == typeof self && self
        }() || Function("return this")())
    })
      , Id = function() {
        return this || "object" == typeof self && self
    }() || Function("return this")()
      , Ld = Id.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(Id).indexOf("regeneratorRuntime")
      , Ad = Ld && Id.regeneratorRuntime;
    Id.regeneratorRuntime = void 0;
    var Td = xd;
    if (Ld)
        Id.regeneratorRuntime = Ad;
    else
        try {
            delete Id.regeneratorRuntime
        } catch (e) {
            Id.regeneratorRuntime = void 0
        }
    function Cd(n) {
        var a = [];
        return a.toString = function() {
            return this.map(function(e) {
                var t = function(e, t) {
                    var n = e[1] || ""
                      , r = e[3];
                    if (!r)
                        return n;
                    if (t && "function" == typeof btoa) {
                        var i = function(e) {
                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                        }(r)
                          , o = r.sources.map(function(e) {
                            return "/*# sourceURL=" + r.sourceRoot + e + " */"
                        });
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    return [n].join("\n")
                }(e, n);
                return e[2] ? "@media " + e[2] + "{" + t + "}" : t
            }).join("")
        }
        ,
        a.i = function(e, t) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var n = {}, r = 0; r < this.length; r++) {
                var i = this[r][0];
                "number" == typeof i && (n[i] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var o = e[r];
                "number" == typeof o[0] && n[o[0]] || (t && !o[2] ? o[2] = t : t && (o[2] = "(" + o[2] + ") and (" + t + ")"),
                a.push(o))
            }
        }
        ,
        a
    }
    var Md = Td;
    function Od(e, t, n, r, i, o, a, s) {
        var c, u = "function" == typeof e ? e.options : e;
        if (t && (u.render = t,
        u.staticRenderFns = n,
        u._compiled = !0),
        r && (u.functional = !0),
        o && (u._scopeId = "data-v-" + o),
        a ? (c = function(e) {
            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
            i && i.call(this, e),
            e && e._registeredComponents && e._registeredComponents.add(a)
        }
        ,
        u._ssrRegister = c) : i && (c = s ? function() {
            i.call(this, this.$root.$options.shadowRoot)
        }
        : i),
        c)
            if (u.functional) {
                u._injectStyles = c;
                var l = u.render;
                u.render = function(e, t) {
                    return c.call(t),
                    l(e, t)
                }
            } else {
                var f = u.beforeCreate;
                u.beforeCreate = f ? [].concat(f, c) : [c]
            }
        return {
            exports: e,
            options: u
        }
    }
    function jd(e, t) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
            var o = t[i]
              , a = o[0]
              , s = {
                id: e + ":" + i,
                css: o[1],
                media: o[2],
                sourceMap: o[3]
            };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }
    var Hd = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !Hd)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var Nd, Rd = {}, Dd = Hd && (document.head || document.getElementsByTagName("head")[0]);
    function Fd(a, e, t, n) {
        var s = jd(a, e);
        return qd(s),
        function(e) {
            for (var t = [], n = 0; n < s.length; n++) {
                var r = s[n];
                (i = Rd[r.id]).refs--,
                t.push(i)
            }
            e ? qd(s = jd(a, e)) : s = [];
            for (n = 0; n < t.length; n++) {
                var i;
                if (0 === (i = t[n]).refs) {
                    for (var o = 0; o < i.parts.length; o++)
                        i.parts[o]();
                    delete Rd[i.id]
                }
            }
        }
    }
    function qd(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t]
              , r = Rd[n.id];
            if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++)
                    r.parts[i](n.parts[i]);
                for (; i < n.parts.length; i++)
                    r.parts.push(Bd(n.parts[i]));
                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
            } else {
                var o = [];
                for (i = 0; i < n.parts.length; i++)
                    o.push(Bd(n.parts[i]));
                Rd[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }
    function Bd(t) {
        var n = function() {
            var e = document.createElement("style");
            return e.type = "text/css",
            Nd = Nd || Dd.querySelector('link[rel=stylesheet][href*="/mip.css"]'),
            Dd.insertBefore(e, Nd && Nd.nextSibling || Dd.firstChild),
            e
        }()
          , r = function(e, t) {
            var n = t.css
              , r = t.media
              , i = t.sourceMap;
            r && e.setAttribute("media", r);
            i && (n += "\n/*# sourceURL=" + i.sources[0] + " */",
            n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            if (e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        .bind(null, n);
        return r(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                r(t = e)
            } else
                n.parentNode.removeChild(n)
        }
    }
    var Ud = function() {
        function e() {
            ur(this, e),
            this.installServices(),
            this.extensions = Ju.extensions()
        }
        return fr(e, [{
            key: "installServices",
            value: function() {
                Ju.registerService("extensions", pl),
                Ju.registerService("timer", vl),
                Ju.registerService("vue-compat", yl)
            }
        }, {
            key: "getPageMetadata",
            value: function() {
                var t, n, e = !1;
                try {
                    if (t = JSON.parse(window.name),
                    "object" !== cr(t) || null === t)
                        throw new Error;
                    e = !0
                } catch (e) {
                    t = {
                        standalone: !1,
                        isRootPage: !0,
                        isCrossOrigin: !1
                    }
                }
                if (e)
                    n = t.standalone;
                else {
                    try {
                        n = t.standalone || !Cu.isIframed || void 0 !== window.top.MIP
                    } catch (e) {
                        n = !1
                    }
                    t.standalone = n
                }
                return {
                    pageMeta: t,
                    standalone: n
                }
            }
        }, {
            key: "get",
            value: function() {
                var e = this.getPageMetadata()
                  , t = e.pageMeta
                  , n = e.standalone;
                Cu.pageMeta = t;
                var r = this.extensions
                  , i = r.installExtension
                  , o = r.registerElement
                  , a = r.registerService
                  , s = r.registerTemplate
                  , c = {
                    version: "2",
                    CustomElement: vr,
                    Services: Ju,
                    builtinComponents: {
                        MipShell: Jl,
                        MIPShell: Jl
                    },
                    css: {},
                    hash: Gu.hash,
                    performance: xu,
                    prerenderElement: tl.prerenderElement,
                    push: i,
                    registerElement: o,
                    registerService: a,
                    registerTemplate: s,
                    registerCustomElement: o,
                    registerVueCustomElement: o,
                    standalone: n,
                    templates: Gu.templates,
                    util: Gu,
                    viewer: Cu,
                    viewport: As,
                    prerender: {
                        getPrerenderState: pu.getPrerenderState.bind(pu)
                    }
                };
                return function(r) {
                    Object.assign(r, {
                        registerMipElement: function(e, t, n) {
                            So.isTemplateClass(t) ? r.registerTemplate(e, t, {
                                version: "1"
                            }) : r.registerElement(e, t, n, {
                                version: "1"
                            })
                        }
                    })
                }(c),
                function() {
                    var e = window.__mipComponentsWebpackHelpers__ = []
                      , t = Of(jf)
                      , n = Of(Hf)
                      , r = Of(Nf)
                      , i = Of(Rf)
                      , o = Of(Df)
                      , a = Of(qf)
                      , s = Of(Bf)
                      , c = Of(zf)
                      , u = Of(Vf)
                      , l = Of($f)
                      , f = Of(Gf)
                      , d = Of(Xf)
                      , h = Of(Qf)
                      , p = Of(Jf)
                      , v = Of(Zf)
                      , m = Of(Kf)
                      , y = Of(ed)
                      , g = Of(td)
                      , w = Of(nd)
                      , b = Of(rd)
                      , E = Of(id)
                      , k = Of(od)
                      , S = Of(ad)
                      , P = Of(sd)
                      , _ = Of(cd)
                      , x = Of(ud)
                      , I = Of(dd)
                      , L = Of(Uf)
                      , A = Of(pd)
                      , T = Of(yd)
                      , C = Of(gd)
                      , M = Of(wd)
                      , O = Of(bd)
                      , j = Of(kd)
                      , H = Of(Ed)
                      , N = Of(Sd)
                      , R = Of(Pd)
                      , D = Of(fd)
                      , F = Of(_d)
                      , q = Of(xd)
                      , B = Of(Od)
                      , U = Of(Fd)
                      , z = Of(jd)
                      , W = "@babel/runtime/helpers/esm/"
                      , V = "arrayWithoutHoles"
                      , $ = "assertThisInitialized"
                      , G = "asyncGeneratorDelegate"
                      , X = "asyncIterator"
                      , Q = "asyncToGenerator"
                      , J = "babel-runtime/helpers/"
                      , Y = "classCallCheck"
                      , Z = "core-js/modules/_"
                      , K = "createClass"
                      , ee = "defineEnumerableProperties"
                      , te = "defineProperty"
                      , ne = "getPrototypeOf"
                      , re = "instanceof"
                      , ie = "interopRequireDefault"
                      , oe = "interopRequireWildcard"
                      , ae = "isNativeFunction"
                      , se = "iterableToArray"
                      , ce = "newArrowCheck"
                      , ue = "nonIterableSpread"
                      , le = "objectDestructuringEmpty"
                      , fe = "objectSpread"
                      , de = "objectWithoutProperties"
                      , he = "possibleConstructorReturn"
                      , pe = "setPrototypeOf"
                      , ve = "slicedToArrayLoose"
                      , me = "slicedToArray"
                      , ye = "taggedTemplateLiteralLoose"
                      , ge = "taggedTemplateLiteral"
                      , we = "temporalRef"
                      , be = "temporalUndefined"
                      , Ee = "toConsumableArray"
                      , ke = "wrapNativeSuper";
                    e["@babel/runtime/helpers/esm/AsyncGenerator"] = t,
                    e["@babel/runtime/regenerator/index"] = Md,
                    e["babel-runtime/helpers/asyncGenerator"] = t,
                    e["babel-runtime/regenerator"] = Md,
                    e["css-loader/lib/css-base"] = Cd,
                    e["regenerator-runtime/runtime"] = q,
                    e["vue-loader/lib/runtime/componentNormalizer"] = B,
                    e["vue-style-loader/lib/addStylesClient"] = U,
                    e["vue-style-loader/lib/listToStyles"] = z,
                    e[W + V] = n,
                    e[W + $] = r,
                    e[W + G] = i,
                    e[W + X] = o,
                    e[W + Q] = a,
                    e[W + Y] = s,
                    e[W + "construct"] = c,
                    e[W + K] = u,
                    e[W + "defaults"] = l,
                    e[W + ee] = f,
                    e[W + te] = d,
                    e[W + "extends"] = h,
                    e[W + ne] = p,
                    e[W + "get"] = v,
                    e[W + "inherits"] = m,
                    e[W + re] = y,
                    e[W + ie] = g,
                    e[W + oe] = w,
                    e[W + ae] = b,
                    e[W + se] = E,
                    e[W + ce] = k,
                    e[W + ue] = S,
                    e[W + le] = P,
                    e[W + fe] = _,
                    e[W + de] = x,
                    e[W + he] = I,
                    e[W + pe] = L,
                    e[W + "set"] = A,
                    e[W + ve] = T,
                    e[W + me] = C,
                    e[W + ye] = M,
                    e[W + ge] = O,
                    e[W + we] = j,
                    e[W + be] = H,
                    e[W + "toArray"] = N,
                    e[W + Ee] = R,
                    e[W + "typeof"] = D,
                    e[W + ke] = F,
                    e[J + V] = n,
                    e[J + $] = r,
                    e[J + G] = i,
                    e[J + X] = o,
                    e[J + Q] = a,
                    e[J + Y] = s,
                    e[J + "construct"] = c,
                    e[J + K] = u,
                    e[J + "defaults"] = l,
                    e[J + ee] = f,
                    e[J + te] = d,
                    e[J + "extends"] = h,
                    e[J + ne] = p,
                    e[J + "get"] = v,
                    e[J + "inherits"] = m,
                    e[J + re] = y,
                    e[J + ie] = g,
                    e[J + oe] = w,
                    e[J + ae] = b,
                    e[J + se] = E,
                    e[J + ce] = k,
                    e[J + ue] = S,
                    e[J + le] = P,
                    e[J + fe] = _,
                    e[J + de] = x,
                    e[J + he] = I,
                    e[J + pe] = L,
                    e[J + "set"] = A,
                    e[J + ve] = T,
                    e[J + me] = C,
                    e[J + ye] = M,
                    e[J + ge] = O,
                    e[J + we] = j,
                    e[J + be] = H,
                    e[J + "toArray"] = N,
                    e[J + Ee] = R,
                    e[J + "typeof"] = D,
                    e[J + ke] = F,
                    e[Z + "a-function"] = Se,
                    e[Z + "an-object"] = Ie,
                    e[Z + "core"] = je,
                    e[Z + "ctx"] = Pe,
                    e[Z + "defined"] = nt,
                    e[Z + "descriptors"] = Ne,
                    e[Z + "dom-create"] = Ae,
                    e[Z + "export"] = ze,
                    e[Z + "fails"] = Le,
                    e[Z + "global"] = Oe,
                    e[Z + "has"] = Me,
                    e[Z + "hide"] = Fe,
                    e[Z + "ie8-dom-define"] = Re,
                    e[Z + "is-object"] = xe,
                    e[Z + "library"] = !1,
                    e[Z + "object-dp"] = De,
                    e[Z + "property-desc"] = Ce,
                    e[Z + "redefine"] = qe,
                    e[Z + "shared-key"] = it,
                    e[Z + "to-integer"] = Be,
                    e[Z + "to-length"] = Ue,
                    e[Z + "to-object"] = vn,
                    e[Z + "to-primitive"] = Te,
                    e[Z + "uid"] = _e,
                    e[Z + "wks"] = He
                }(),
                c
            }
        }]),
        e
    }();
    function zd(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    var Wd = function(s) {
        return function() {
            var e = this
              , a = arguments;
            return new Promise(function(t, n) {
                var r = s.apply(e, a);
                function i(e) {
                    zd(r, t, n, i, o, "next", e)
                }
                function o(e) {
                    zd(r, t, n, i, o, "throw", e)
                }
                i(void 0)
            }
            )
        }
    }
      , Vd = Gu.css
      , $d = Gu.rect
      , Gd = Gu.event
      , Xd = Gu.naboo
      , Qd = Gu.platform
      , Jd = Gu.dom
      , Yd = ["alt", "ismap", "src", "sizes", "srcset", "usemap", "title"];
    function Zd(e, t) {
        var n = As.getWidth()
          , r = As.getHeight();
        if (r / n < t / e) {
            var i = Math.round(r * e / t);
            return {
                height: r,
                width: i,
                left: (n - i) / 2,
                top: 0
            }
        }
        var o = Math.round(n * t / e);
        return {
            height: o,
            width: n,
            left: 0,
            top: (r - o) / 2
        }
    }
    function Kd(e) {
        var t = {};
        return Array.prototype.slice.apply(e).forEach(function(e) {
            t[e.name] = e.value
        }),
        t
    }
    function eh(e) {
        return $d.getElementOffset(e)
    }
    function th(e) {
        var t = Co(document.querySelectorAll("mip-img[popup]")).filter(function(e) {
            return !e.classList.contains("mip-carousel-extra-img")
        })
          , n = t.indexOf(e);
        return -1 === n ? {
            imgsSrcArray: [],
            index: n
        } : {
            imgsSrcArray: t.map(function(e) {
                var t = e.querySelector("img");
                return t ? t.src : e.getAttribute("src")
            }),
            index: n
        }
    }
    function nh(r, v) {
        var m = r.customElement.carouselOutside;
        v.addEventListener("click", function(e) {
            e.stopPropagation();
            var t = v.currentSrc || v.src;
            if (t && 0 !== v.naturalWidth) {
                window.MIP.viewer.page.togglePageMask(!0, {
                    skipTransition: !0,
                    extraClass: "black"
                });
                var f = function(e) {
                    var t = th(e)
                      , n = t.imgsSrcArray
                      , r = t.index;
                    if (0 !== n.length && -1 !== r) {
                        var i = document.createElement("div");
                        Vd(i, "display", "block"),
                        i.className = "mip-img-popUp-wrapper",
                        i.setAttribute("data-name", "mip-img-popUp-name");
                        var o = document.createElement("div")
                          , a = document.createElement("div");
                        Vd(a, {
                            position: "absolute",
                            width: As.getWidth(),
                            height: As.getHeight(),
                            left: 0,
                            top: 0
                        });
                        var s = document.createElement("mip-carousel");
                        s.setAttribute("layout", "responsive"),
                        s.setAttribute("index", r + 1),
                        s.setAttribute("width", As.getWidth()),
                        s.setAttribute("height", As.getHeight());
                        for (var c = 0; c < n.length; c++) {
                            var u = document.createElement("div");
                            u.className = "div-mip-img",
                            u.setAttribute("data-src", n[c]),
                            Vd(u, {
                                "background-image": "url(".concat(n[c], ")"),
                                "background-repeat": "no-repeat",
                                "background-size": "contain",
                                "background-position": "center"
                            }),
                            s.appendChild(u)
                        }
                        return o.className = "mip-img-popUp-bg",
                        a.appendChild(s),
                        i.appendChild(o),
                        i.appendChild(a),
                        document.body.appendChild(i),
                        i
                    }
                }(r);
                if (f) {
                    m && no(m, "open-popup");
                    var d = f.querySelector(".mip-img-popUp-bg")
                      , h = f.querySelector("mip-carousel")
                      , p = new Image;
                    p.setAttribute("src", t),
                    f.appendChild(p),
                    Xd.animate(d, {
                        opacity: 1
                    }).start();
                    var n = eh(v);
                    f.addEventListener("click", function e() {
                        window.MIP.viewer.page.togglePageMask(!1, {
                            skipTransition: !0,
                            extraClass: "black"
                        });
                        var t = f.querySelector(".mip-carousel-wrapper");
                        if (null == t)
                            return;
                        var n = (r = t,
                        i = h,
                        o = r.style.webkitTransform || r.style.transform,
                        a = /translate3d\(-?([0-9]+)/i.exec(o),
                        s = i.getAttribute("width"),
                        c = parseInt(a[1], 10) / s,
                        r.querySelectorAll(".div-mip-img")[c]);
                        var r, i, o, a, s, c;
                        p.setAttribute("src", n.getAttribute("data-src"));
                        var u = eh(v);
                        var l = eh(n);
                        l.top < 0 && (u.top -= l.top);
                        l.left < 0 && (u.left -= l.left);
                        Vd(p, Zd(p.naturalWidth, p.naturalHeight));
                        Vd(p, "display", "block");
                        Vd(h, "display", "none");
                        Xd.animate(d, {
                            opacity: 0
                        }).start();
                        Xd.animate(f, {
                            display: "none"
                        });
                        Xd.animate(p, u).start(function() {
                            Vd(v, "visibility", "visible"),
                            Vd(f, "display", "none"),
                            f.removeEventListener("click", e, !1),
                            f.remove()
                        });
                        m && no(m, "close-popup")
                    }, !1);
                    window.addEventListener("resize", function() {
                        n = eh(v),
                        Vd(p, n),
                        Xd.animate(p, Zd(v.naturalWidth, v.naturalHeight)).start()
                    }),
                    Vd(p, n),
                    Vd(h, "visibility", "hidden"),
                    Vd(d, "opacity", 1),
                    Xd.animate(p, Zd(v.naturalWidth, v.naturalHeight)).start(function() {
                        Vd(p, "display", "none"),
                        Vd(h, "visibility", "visible")
                    }),
                    Vd(v, "visibility", "hidden"),
                    Vd(v.parentNode, "zIndex", "inherit")
                }
            }
        }, !1)
    }
    function rh(a, s) {
        var e;
        Cu.isIframed && Qd.isIOS() && (s.addEventListener("touchstart", function() {
            e = setTimeout(t, 300)
        }),
        s.addEventListener("touchmove", function() {
            clearTimeout(e)
        }),
        s.addEventListener("touchend", function() {
            clearTimeout(e)
        }));
        function t(e) {
            var t = s.currentSrc || s.src;
            if (t && 0 !== s.naturalWidth) {
                var n = [t];
                e && (n = th(a).imgsSrcArray || [t]);
                var r = "baiduboxapp://v19/utils/previewImage?params=" + encodeURIComponent(JSON.stringify({
                    urls: n,
                    current: t
                }))
                  , i = document.createElement("iframe");
                i.style.display = "none",
                i.src = r;
                var o = document.body;
                o.appendChild(i),
                setTimeout(function() {
                    o.removeChild(i),
                    i = null
                }, 0)
            }
        }
        a.hasAttribute("popup") && s.addEventListener("click", function(e) {
            e.stopPropagation(),
            t(!0)
        })
    }
    var ih = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        var n;
        return br(t, vr),
        fr(t, [{
            key: "isLoadingEnabled",
            value: function() {
                return !0
            }
        }, {
            key: "prerenderAllowed",
            value: function(e, t) {
                var n = t.height;
                return t.top + t.height + n >= e.top && e.top + e.height + n >= t.top
            }
        }, {
            key: "build",
            value: function() {
                this.carouselOutside = Jd.closest(this.element, "mip-carousel"),
                this.createPlaceholder()
            }
        }, {
            key: "createPlaceholder",
            value: function() {
                if (!this.element.classList.contains("mip-layout-size-defined") && !this.element.querySelector(".mip-default-placeholder")) {
                    var e = document.createElement("mip-i-space");
                    e.classList.add("mip-default-placeholder"),
                    this.element.appendChild(Vd(e, {
                        "padding-bottom": "75%",
                        background: "rgba(0, 0, 0, 0.08)",
                        opacity: "1"
                    }))
                }
            }
        }, {
            key: "removePlaceholder",
            value: function() {
                var e = this.element.querySelector(".mip-default-placeholder");
                e && this.element.removeChild(e)
            }
        }, {
            key: "layoutCallback",
            value: (n = Wd(Md.mark(function e() {
                var t, n, r, i, o, a, s;
                return Md.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            for (r in t = this.element,
                            n = new Image,
                            this.applyFillContent(n, !0),
                            this.attributes = Kd(t.attributes),
                            this.attributes)
                                this.attributes.hasOwnProperty(r) && -1 < Yd.indexOf(r) && n.setAttribute(r, this.attributes[r]);
                            return (i = Co(t.querySelectorAll("source"))).length ? (o = document.createElement("picture"),
                            i.forEach(function(e) {
                                o.appendChild(e)
                            }),
                            o.appendChild(n),
                            t.appendChild(o)) : t.appendChild(n),
                            Qd.isBaiduApp() ? rh(t, n) : t.hasAttribute("popup") && nh(t, n),
                            t.classList.add("mip-img-loading"),
                            e.prev = 9,
                            e.next = 12,
                            Gd.loadPromise(n);
                        case 12:
                            this.resourcesComplete(),
                            this.removePlaceholder(),
                            t.classList.remove("mip-img-loading"),
                            t.classList.add("mip-img-loaded"),
                            no(t, "load"),
                            e.next = 26;
                            break;
                        case 19:
                            if (e.prev = 19,
                            e.t0 = e.catch(9),
                            Cu.isIframed) {
                                e.next = 23;
                                break
                            }
                            return e.abrupt("return");
                        case 23:
                            (a = document.createElement("a")).href = n.src,
                            /(\?|&)mip_img_ori=1(&|$)/.test(a.search) || (s = a.search || "?",
                            a.search += (/[?&]$/.test(s) ? "" : "&") + "mip_img_ori=1",
                            n.src = a.href);
                        case 26:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[9, 19]])
            })),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "attributeChangedCallback",
            value: function(e, t, n, r) {
                var i = this;
                if ("src" === e && t !== n) {
                    var o = this.element.querySelector("img");
                    if (!o)
                        return;
                    Gd.loadPromise(o).then(function() {
                        i.element.toggleFallback(!1)
                    }),
                    o.src = n
                }
            }
        }, {
            key: "hasResources",
            value: function() {
                return !0
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return Yd
            }
        }]),
        t
    }()
      , oh = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        return br(t, vr),
        fr(t, [{
            key: "connectedCallback",
            value: function() {
                this.changeHtmlFontSize(),
                window.addEventListener("resize", this.changeHtmlFontSize.bind(this), !1)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                document.documentElement.style.fontSize = ""
            }
        }, {
            key: "changeHtmlFontSize",
            value: function() {
                var t = this.element.getAttribute("font-size") || ""
                  , e = As.getWidth();
                try {
                    t = JSON.parse(t)
                } catch (e) {
                    t = "",
                    console.warn("mip-rem \u7684 font-size \u5c5e\u6027\u503c\u683c\u5f0f\u4e0d\u5bf9\uff01")
                }
                for (var n = "", r = t.length - 1; 0 <= r; r--)
                    if (!(t[r].maxWidth && t[r].maxWidth < e || t[r].minWidth && t[r].minWidth > e)) {
                        n = t[r].size || "";
                        break
                    }
                document.documentElement.style.fontSize = n + "px"
            }
        }]),
        t
    }()
      , ah = ["ads", "src", "controls", "loop", "autoplay", "autobuffer", "crossorigin", "height", "muted", "preload", "poster", "width", "currenttime"];
    var sh = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        return br(t, vr),
        fr(t, [{
            key: "layoutCallback",
            value: function() {
                var e = this;
                this.attributes = function(e) {
                    var t = {};
                    return Array.prototype.slice.apply(e).forEach(function(e) {
                        t[e.name] = e.value
                    }),
                    t
                }(this.element.attributes),
                this.sourceDoms = Co(this.element.querySelectorAll("source"));
                var n = this.renderVideo();
                return window.addEventListener(vc, function() {
                    n.parentElement.removeChild(n),
                    n = e.renderVideo(),
                    e.applyFillContent(n, !0)
                }),
                window.addEventListener(mc, function() {
                    n.pause && n.pause()
                }),
                this.addEventAction("seekTo", function(e, t) {
                    n.currentTime = t
                }),
                this.addEventAction("play", function() {
                    n.play && n.play()
                }),
                this.addEventAction("pause", function() {
                    n.pause && n.pause()
                }),
                this.applyFillContent(n, !0),
                Promise.resolve()
            }
        }, {
            key: "renderInView",
            value: function() {
                var t = document.createElement("video");
                for (var e in this.attributes)
                    this.attributes.hasOwnProperty(e) && -1 < ah.indexOf(e) && t.setAttribute(e, this.attributes[e]);
                var n = this.attributes.currenttime;
                return t.setAttribute("playsinline", "playsinline"),
                t.setAttribute("x5-playsinline", "x5-playsinline"),
                t.setAttribute("webkit-playsinline", "webkit-playsinline"),
                t.setAttribute("t7-video-player-type", "inline"),
                Array.prototype.slice.apply(this.element.childNodes).forEach(function(e) {
                    "mip-i-space" !== e.nodeName.toLowerCase() && t.appendChild(e)
                }),
                t.addEventListener("loadedmetadata", function() {
                    n && (this.currentTime = +n)
                }),
                this.element.appendChild(t),
                t
            }
        }, {
            key: "renderError",
            value: function() {
                var e = document.createElement("div");
                e.setAttribute("class", "mip-video-poster"),
                this.attributes.poster && (e.style.backgroundImage = "url(" + this.attributes.poster + ")",
                e.style.backgroundSize = "cover");
                var t = document.createElement("span");
                return t.setAttribute("class", "mip-video-error"),
                e.appendChild(t),
                this.element.appendChild(e),
                e
            }
        }, {
            key: "renderPlayElsewhere",
            value: function() {
                var e, t = document.createElement("div");
                t.setAttribute("class", "mip-video-poster"),
                this.attributes.poster && (t.style.backgroundImage = "url(" + this.attributes.poster + ")",
                t.style.backgroundSize = "cover");
                var n = document.createElement("span");
                n.setAttribute("class", "mip-video-playbtn"),
                t.appendChild(n),
                t.dataset.videoSrc = this.attributes.src,
                t.dataset.videoPoster = Gu.parseCacheUrl(this.attributes.poster),
                t.addEventListener("click", function() {
                    Cu.isIframed && Cu.sendMessage("mip-video-jump", {
                        poster: t.dataset.videoPoster,
                        src: e
                    })
                }, !1);
                var r = this.sourceDoms.map(function(e) {
                    var t = e.type
                      , n = e.src;
                    return $s({}, t, n)
                });
                return e = r.length ? JSON.stringify([t.dataset.videoSrc, r]) : t.dataset.videoSrc,
                this.element.appendChild(t),
                t
            }
        }, {
            key: "renderVideo",
            value: function() {
                function t(e) {
                    return /^https:|^\/\//.test(e)
                }
                var e = this.attributes.src
                  , n = this.sourceDoms
                  , r = t(window.location.protocol)
                  , i = n.length && n.every(function(e) {
                    return t(e.src)
                })
                  , o = t(e) || i;
                return Cu.isIframed && !o && r ? window.MIP.standalone ? this.renderError() : this.renderPlayElsewhere() : this.renderInView()
            }
        }]),
        t
    }()
      , ch = tl.prerenderElement
      , uh = "mip-carousel-container"
      , lh = "mip-carousel-wrapper"
      , fh = "mip-carousel-slideBox"
      , dh = "mip-carousel-activeitem"
      , hh = .2;
    function ph(e, t, n, r) {
        for (var i = Math.max(t - n, 0), o = Math.min(t + n + 1, e.length), a = i; a < o; a++)
            if ("MIP-IMG" === e[a].tagName) {
                e[a].setAttribute("src", r[a]);
                for (var s = Co(e[a].querySelectorAll("img")), c = 0; c < s.length; c++)
                    s[c].setAttribute("src", r[a])
            } else {
                var u = e[a].querySelector("mip-img");
                u && u.setAttribute("src", r[a])
            }
    }
    function vh(e, t, n) {
        var r = e.querySelectorAll(".mip-carousel-slideBox")[t].querySelector("img");
        !function(e, t, n) {
            Gu.css(n, {
                height: e,
                transition: "height ".concat(t, "s")
            })
        }(function(e, t) {
            return e * t.naturalHeight / t.naturalWidth
        }(parseInt(window.getComputedStyle(e, null).getPropertyValue("width"), 10), r), n, e)
    }
    function mh(e, t) {
        t = t || "div";
        var n = document.createElement(t);
        return n.className = e || "",
        n
    }
    function yh(e, t, n) {
        n.style.webkitTransform = "translate3d(" + e + "px, 0px, 0px)",
        n.style.transitionDuration = t
    }
    function gh(e, t) {
        if (e) {
            var n = e.className;
            e.className = n.replace(t, "").replace(/(^\s*)|(\s*$)/g, "")
        }
    }
    function wh(e, t) {
        if (e) {
            var n = e.className;
            e.className = n ? n + " " + t : t
        }
    }
    var bh = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        return br(t, vr),
        fr(t, [{
            key: "layoutCallback",
            value: function() {
                var i, s = this.element, a = this, c = s.clientWidth, u = [], o = s.hasAttribute("autoplay"), e = s.getAttribute("defer") || 4e3, l = s.hasAttribute("indicator"), t = s.hasAttribute("buttonController"), n = s.getAttribute("indicatorId"), f = s.getAttribute("index"), r = parseInt(f) || 1, d = {
                    stop: 1
                }, h = {
                    stop: 1
                }, p = 0, v = -c, m = r, y = {}, g = {}, w = function(n) {
                    var e = n.children
                      , t = Array.prototype.slice.call(e)
                      , r = [];
                    if (t.map(function(e, t) {
                        "mip-i-space" !== e.tagName.toLowerCase() && (r.push(e),
                        n.removeChild(e))
                    }),
                    0 < r.length) {
                        var i = r[0].cloneNode(!0)
                          , o = r[r.length - 1].cloneNode(!0);
                        i.classList.add("mip-carousel-extra-img"),
                        o.classList.add("mip-carousel-extra-img"),
                        r.unshift(o),
                        r.push(i)
                    }
                    return r
                }(s), b = function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        if ("MIP-IMG" === e[n].tagName)
                            t.push(e[n].getAttribute("src"));
                        else {
                            var r = e[n].querySelector("mip-img");
                            r ? t.push(r.getAttribute("src")) : t.push("no-src")
                        }
                    return t
                }(w), E = (w = function(e, t, n) {
                    for (var r = "no-src" !== n[t] ? n[t] : "?mip_img_ori=1", i = 0; i < e.length; i++)
                        if ("MIP-IMG" === e[i].tagName)
                            e[i].setAttribute("src", r);
                        else {
                            var o = e[i].querySelector("mip-img");
                            o && o.setAttribute("src", r)
                        }
                    return e
                }(w, m, b)).length;
                if (0 === E)
                    return Promise.resolve();
                var k = mh(uh)
                  , S = mh(lh);
                w.map(function(e, t) {
                    var n = mh(fh);
                    n.appendChild(e),
                    n.style.width = 100 / E + "%",
                    S.appendChild(n),
                    a.applyFillContent(e, !0),
                    ch(e);
                    for (var r = e.querySelectorAll("mip-img"), i = r.length, o = 0; o < i; o++)
                        a.applyFillContent(r[o], !0),
                        ch(r[o])
                }),
                S.style.width = 100 * E + "%",
                k.appendChild(S),
                s.appendChild(k);
                var P = f ? -c * r : -c;
                v = P,
                ph(w, r, 1, b),
                S.style.webkitTransform = "translate3d(" + P + "px, 0, 0)";
                var _ = s.hasAttribute("autoheight");
                _ && function(e, t) {
                    var n = new Image;
                    n.src = e.querySelectorAll(".mip-carousel-slideBox")[t].querySelector("img").src,
                    n.onload = function() {
                        Co(e.querySelectorAll(".mip-placeholder")).map(function(e) {
                            return e.parentNode.removeChild(e)
                        }),
                        vh(e, t, 0)
                    }
                }(s, r);
                var x, I, L, A, T = 0;
                function C() {
                    i = setInterval(function() {
                        M(S, m, m + 1)
                    }, e)
                }
                function M(e, t, n, r) {
                    if (e) {
                        c !== s.clientWidth && (c = s.clientWidth);
                        var i = -c * (m = n);
                        r ? (yh(i, "0ms", e),
                        e.style.transitionDuration = "0ms") : (yh(i, "300ms", e),
                        e.style.transitionDuration = "300ms");
                        var o = function(e, t, n, r) {
                            var i = {
                                endPos: 0,
                                endIndex: e
                            };
                            return e === t - 1 ? (i.endPos = -n,
                            i.endIndex = 1) : 0 === e ? (i.endPos = -(t - 2) * n,
                            i.endIndex = t - 2) : i.endPos = r,
                            i
                        }(m, E, c, i);
                        if (v = o.endPos,
                        n = o.endIndex,
                        m = n,
                        0 < u.length && function(e, t, n) {
                            gh(e, n),
                            wh(t, n)
                        }(u[t - 1], u[n - 1], dh),
                        v !== i && setTimeout(function() {
                            yh(v, "0ms", e),
                            h.stop = 1
                        }, 400),
                        h.stop = 1,
                        function(e) {
                            l && (s.querySelector(".mip-carousel-indicatornow").innerHTML = e)
                        }(m),
                        Cu.eventAction.execute("switchCompleted", s, {
                            currIndex: m,
                            currCarouselItem: w[m],
                            carouselChildrenLength: E
                        }),
                        ph(w, m, 1, b),
                        _) {
                            var a = .3;
                            r && (a = 0),
                            vh(e.parentNode.parentNode, m, a)
                        }
                    }
                }
                return S.addEventListener("touchstart", function(e) {
                    var t = e.targetTouches[0];
                    y = {
                        x: t.pageX,
                        y: t.pageY,
                        time: Date.now()
                    },
                    0,
                    p = t.pageX,
                    clearInterval(i)
                }, !1),
                S.addEventListener("touchmove", function(e) {
                    var t = e.targetTouches[0];
                    g = {
                        x: t.pageX - y.x,
                        y: t.pageY - y.y
                    },
                    0 === (Math.abs(g.x) < Math.abs(g.y) ? 1 : 0) && e.preventDefault(),
                    yh((T = e.targetTouches[0].pageX - p) + v, "0ms", S),
                    d.stop = 0
                }, !1),
                S.addEventListener("touchend", function(e) {
                    if (!d.stop) {
                        var t = m
                          , n = t;
                        Math.abs(T) > c * hh && (n = 0 < T ? m - 1 : m + 1),
                        M(S, t, n),
                        d.stop = 1
                    }
                    o && (clearInterval(i),
                    C())
                }, !1),
                s.addEventListener("open-popup", function(e) {
                    e.stopPropagation(),
                    clearInterval(i)
                }),
                s.addEventListener("close-popup", function(e) {
                    e.stopPropagation(),
                    o && C()
                }),
                o && C(),
                l && (x = mh("mip-carousel-indicatorbox"),
                I = mh("mip-carousel-indicatorBoxwrap", "p"),
                L = mh("mip-carousel-indicatornow", "span"),
                (A = mh("", "span")).innerHTML = "/" + (E - 2),
                L.innerHTML = m,
                I.appendChild(L),
                I.appendChild(A),
                x.appendChild(I),
                s.appendChild(x)),
                t && function() {
                    var e = document.createElement("p");
                    e.className = "mip-carousel-preBtn";
                    var t = document.createElement("p");
                    t.className = "mip-carousel-nextBtn",
                    s.appendChild(e),
                    s.appendChild(t),
                    s.querySelector(".mip-carousel-preBtn").addEventListener("click", function(e) {
                        h.stop && (h.stop = 0,
                        m -= 1,
                        clearInterval(i),
                        M(S, m + 1, m),
                        o && C())
                    }, !1),
                    s.querySelector(".mip-carousel-nextBtn").addEventListener("click", function(e) {
                        h.stop && (h.stop = 0,
                        m += 1,
                        clearInterval(i),
                        M(S, m - 1, m),
                        o && C())
                    }, !1)
                }(),
                n && function(e) {
                    var t = document.getElementById(e);
                    if (!t)
                        return;
                    var n = (u = t.children).length;
                    f && ((u = Array.prototype.slice.call(u)).forEach(function(e) {
                        gh(e, dh)
                    }),
                    wh(u[m - 1], dh));
                    if (n === E - 2)
                        for (var r = 0; r < n; r++)
                            u[r].count = r,
                            u[r].addEventListener("click", function(e) {
                                var t = this.count;
                                clearInterval(i),
                                M(S, m, t + 1),
                                o && C()
                            });
                    else
                        wh(t, "mip-hide"),
                        u = []
                }(n),
                window.addEventListener("resize", function() {
                    c = s.clientWidth,
                    M(S, m, m, "0ms")
                }, !1),
                this.addEventAction("go", function(e, t) {
                    clearInterval(i),
                    M(S, m, parseInt(t)),
                    o && C()
                }),
                Promise.resolve()
            }
        }]),
        t
    }()
      , Eh = Gu.css
      , kh = Gu.event
      , Sh = ["allowfullscreen", "allowtransparency", "sandbox"]
      , Ph = function(e) {
        function o() {
            var e, t;
            ur(this, o);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                r[i] = arguments[i];
            return (t = yr(this, (e = gr(o)).call.apply(e, [this].concat(r)))).iframe = void 0,
            t
        }
        return br(o, vr),
        fr(o, [{
            key: "isLoadingEnabled",
            value: function() {
                return !0
            }
        }, {
            key: "layoutCallback",
            value: function() {
                var t = this;
                this.handlePageResize = this.handlePageResize.bind(this),
                this.notifyRootPage = this.notifyRootPage.bind(this);
                var e = this.element
                  , n = e.getAttribute("src")
                  , r = e.getAttribute("srcdoc");
                r && (n = "data:text/html;charset=utf-8;base64," + window.btoa(r));
                var i = e.getAttribute("height")
                  , o = e.getAttribute("width") || "100%";
                if (!n || !i)
                    return Promise.resolve();
                if (this.iframe = document.createElement("iframe"),
                this.iframe.frameBorder = "0",
                this.iframe.scrolling = "no",
                this.applyFillContent(this.iframe),
                this.element.appendChild(this.iframe),
                window.addEventListener("message", this.notifyRootPage.bind(this)),
                Eh(this.iframe, {
                    width: o,
                    height: i
                }),
                this.iframe.src = n,
                this.expendAttr(Sh, this.iframe),
                e.appendChild(this.iframe),
                "100%" === i) {
                    this.fullscreen = !0;
                    var a = setInterval(function() {
                        var e = As.getHeight();
                        0 !== e && (t.setIframeHeight(e),
                        clearInterval(a))
                    }, 500)
                }
                return kh.loadPromise(this.iframe)
            }
        }, {
            key: "firstInviewCallback",
            value: function() {
                window.addEventListener(hc, this.handlePageResize.bind(this))
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                window.removeEventListener(hc, this.handlePageResize.bind(this)),
                window.removeEventListener("message", this.notifyRootPage.bind(this))
            }
        }, {
            key: "notifyRootPage",
            value: function(e) {
                "mip-iframe-resize" === e.data.type && window.MIP.viewer.page.notifyRootPage({
                    type: lc
                })
            }
        }, {
            key: "handlePageResize",
            value: function(e) {
                e.detail && e.detail.length && this.setIframeHeight(e.detail[0].height || As.getHeight())
            }
        }, {
            key: "setIframeHeight",
            value: function(e) {
                this.fullscreen && e !== this.height && (Eh(this.iframe, {
                    height: e
                }),
                this.height = e)
            }
        }]),
        o
    }()
      , _h = {
        TIME: "t",
        TITLE: "title",
        HOST: "host"
    };
    function xh(e, t, n) {
        var r = new RegExp("\\$?{" + t + "}","g");
        return -1 < e.search(r) ? e.replace(r, n) : (e += -1 < e.indexOf("?") ? "&" : "?") + (t = _h[t] || t) + "=" + n
    }
    var Ih = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        return br(t, vr),
        fr(t, [{
            key: "layoutCallback",
            value: function() {
                var e, t = this.element, n = t.getAttribute("src"), r = window.location.href, i = (document.querySelector("title") || {}).innerHTML || "", o = (n = xh(n = xh(n = xh(n, "TIME", Date.now()), "TITLE", encodeURIComponent(i)), "HOST", encodeURIComponent(r))).match(/MIP-X-((\w|-|\d|_)+)/g);
                for (var a in o) {
                    var s = o[a];
                    n = xh(n, s, (e = s,
                    document.getElementsByTagName("body")[0].getAttribute(e) || "default"))
                }
                n = (n = n.replace(/\$?{.+?}/g, "")).replace(/\$?{|}/g, "");
                var c = new Image;
                return c.src = n,
                c.setAttribute("width", 0),
                c.setAttribute("height", 0),
                t.setAttribute("width", ""),
                t.setAttribute("height", ""),
                t.appendChild(c),
                Gu.css(t, {
                    display: "none"
                }),
                Promise.resolve()
            }
        }]),
        t
    }();
    function Lh(e, t, n) {
        Object.defineProperty(e, t, {
            get: function() {
                return n
            },
            set: Rr,
            enumerable: !0,
            configurable: !1
        })
    }
    function Ah(e, t) {
        var d = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]
          , h = [];
        return Dr({
            oldVal: e,
            newVal: t,
            key: ""
        }, function(e) {
            for (var t = e.oldVal, n = e.newVal, r = e.key, i = [], o = 0, a = Object.keys(n); o < a.length; o++) {
                var s = a[o]
                  , c = t[s]
                  , u = n[s];
                if (u !== c) {
                    var l = "" === r ? s : "".concat(r, ".").concat(s)
                      , f = Ir(u);
                    "[object Object]" !== f || f !== Ir(c) ? (d || void 0 === c) && (h.push({
                        expr: l,
                        oldVal: c,
                        newVal: u
                    }),
                    t[s] = n[s]) : i.push({
                        oldVal: c,
                        newVal: u,
                        key: l
                    })
                }
            }
            return i
        }),
        h
    }
    function Th(e, t) {
        var n = t.split(".")
          , r = e
          , i = !0
          , o = !1
          , a = void 0;
        try {
            for (var s, c = n[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                var u = s.value;
                if (null == r)
                    return;
                r = r[u]
            }
        } catch (e) {
            o = !0,
            a = e
        } finally {
            try {
                i || null == c.return || c.return()
            } finally {
                if (o)
                    throw a
            }
        }
        return r
    }
    var Ch = []
      , Mh = Promise.resolve()
      , Oh = !1;
    function jh() {
        Oh = !1;
        var e = Ch.slice()
          , t = !(Ch.length = 0)
          , n = !1
          , r = void 0;
        try {
            for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                (0,
                i.value)()
            }
        } catch (e) {
            n = !0,
            r = e
        } finally {
            try {
                t || null == o.return || o.return()
            } finally {
                if (n)
                    throw r
            }
        }
    }
    function Hh(e) {
        Ch.push(function() {
            try {
                e()
            } catch (e) {
                console.error(e)
            }
        }),
        Oh || (Oh = !0,
        Mh.then(jh),
        zr.isIOS && setTimeout(Rr))
    }
    var Nh = bo("MIP-bind Watcher")
      , Rh = function() {
        function t(e) {
            ur(this, t),
            this.data = e,
            this.watches = {},
            this.globalWatches = [],
            this.changes = [],
            this.pending = !1,
            this.flush = this._flush.bind(this)
        }
        return fr(t, [{
            key: "notify",
            value: function(e) {
                e.length && (this.merge(e),
                this.pending || (this.pending = !0,
                Hh(this.flush)))
            }
        }, {
            key: "merge",
            value: function(e) {
                var t = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        var a = i.value
                          , s = void 0
                          , c = this.changes.length;
                        for (s = 0; s < c; s++) {
                            var u = this.changes[s];
                            if (a.expr === u.expr) {
                                u.newVal = a.newVal;
                                break
                            }
                            if (0 === a.expr.indexOf(u.expr))
                                break;
                            if (0 === u.expr.indexOf(a.expr)) {
                                this.changes.splice(s, 1),
                                this.changes.push(a);
                                break
                            }
                        }
                        s === c && this.changes.push(a)
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
            }
        }, {
            key: "watch",
            value: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                if ("function" != typeof t[0]) {
                    var r = t[0]
                      , i = t[1]
                      , o = Array.isArray(r) ? r : [r]
                      , a = !0
                      , s = !1
                      , c = void 0;
                    try {
                        for (var u, l = o[Symbol.iterator](); !(a = (u = l.next()).done); a = !0) {
                            var f = u.value;
                            this.watches[f] = this.watches[f] || [],
                            this.watches[f].push(i)
                        }
                    } catch (e) {
                        s = !0,
                        c = e
                    } finally {
                        try {
                            a || null == l.return || l.return()
                        } finally {
                            if (s)
                                throw c
                        }
                    }
                } else
                    this.globalWatches.push(t[0])
            }
        }, {
            key: "_flush",
            value: function() {
                this.pending = !1;
                var e = this.changes.slice();
                this.changes.length = 0;
                for (var t = Object.keys(this.watches).reverse(), n = 0; n < e.length; n++)
                    for (var r = e[n], i = r.expr, o = r.oldVal, a = r.newVal, s = t.length - 1; -1 < s; s--) {
                        var c = t[s];
                        if (0 === c.indexOf(i)) {
                            t.splice(s, 1);
                            var u = this.watches[c]
                              , l = void 0
                              , f = void 0;
                            if (c === i)
                                l = o,
                                f = a;
                            else {
                                var d = c.slice(i.length + 1);
                                l = Th(o, d),
                                f = Th(a, d)
                            }
                            var h = !0
                              , p = !1
                              , v = void 0;
                            try {
                                for (var m, y = u[Symbol.iterator](); !(h = (m = y.next()).done); h = !0) {
                                    var g = m.value;
                                    try {
                                        g(f, l)
                                    } catch (e) {
                                        Nh.error(e)
                                    }
                                }
                            } catch (e) {
                                p = !0,
                                v = e
                            } finally {
                                try {
                                    h || null == y.return || y.return()
                                } finally {
                                    if (p)
                                        throw v
                                }
                            }
                        }
                    }
                var w = !0
                  , b = !1
                  , E = void 0;
                try {
                    for (var k, S = this.globalWatches[Symbol.iterator](); !(w = (k = S.next()).done); w = !0) {
                        var P = k.value;
                        try {
                            P()
                        } catch (e) {
                            Nh.error(e)
                        }
                    }
                } catch (e) {
                    b = !0,
                    E = e
                } finally {
                    try {
                        w || null == S.return || S.return()
                    } finally {
                        if (b)
                            throw E
                    }
                }
            }
        }]),
        t
    }()
      , Dh = function() {
        function t() {
            ur(this, t);
            var e = window.MIP.viewer.page;
            this.isRoot = e.isRootPage || e.isCrossOrigin,
            this.rootWin = this.isRoot ? window : window.parent,
            this.isRoot && (window.g = {}),
            this.data = this.rootWin.g
        }
        return fr(t, [{
            key: "update",
            value: function(e) {
                var t = this;
                if (!xr(e)) {
                    var n = location.href.replace(location.hash, "");
                    Hh(function() {
                        !t.isRoot && t.rootWin.MIP.setData(e),
                        Ah(t.data, e),
                        t.broadcast(e, n)
                    })
                }
            }
        }, {
            key: "broadcast",
            value: function(e, t) {
                for (var n = this.rootWin.document.getElementsByTagName("iframe"), r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getAttribute("data-page-id");
                    if (i.classList.contains("mip-page__iframe") && o && t !== o) {
                        var a = i.contentWindow;
                        a && a.MIP && a.MIP.setData(e)
                    }
                }
            }
        }, {
            key: "classify",
            value: function(r) {
                return Object.keys(r).reduce(function(e, t) {
                    if ("function" == typeof r[t])
                        throw "setData method MUST NOT be Function: ".concat(t);
                    var n;
                    return "#" === t[0] ? (n = t.substr(1),
                    e.global[n] = r[t]) : n = t,
                    e.page[n] = r[t],
                    e
                }, {
                    global: {},
                    page: {}
                })
            }
        }]),
        t
    }()
      , Fh = function() {
        function t() {
            ur(this, t);
            var e = {};
            this.data = e,
            this.watcher = new Rh(e),
            this.global = new Dh
        }
        return fr(t, [{
            key: "set",
            value: function(e) {
                if (!_r(e))
                    throw new Error("setData method MUST accept an object! Check your input:" + e);
                var t = this.global.classify(e)
                  , n = t.global
                  , r = t.page
                  , i = Ah(this.data, r);
                this.watcher.notify(i),
                this.global.update(n)
            }
        }, {
            key: "get",
            value: function(e) {
                return Th(this.data, e)
            }
        }]),
        t
    }();
    var qh = "m-bind:"
      , Bh = qh.length;
    function Uh(e) {
        return e.length > Bh && e.slice(0, Bh) === qh
    }
    var zh, Wh = ["checked", "selected", "autofocus", "controls", "disabled", "hidden", "multiple", "readonly"];
    function Vh(e, t, n, r) {
        if (Uh(t)) {
            var i = t.slice(Bh)
              , o = "object" === cr(n) ? JSON.stringify(n) : n;
            return o === r || ("" === o || void 0 === o ? e.removeAttribute(i) : e.setAttribute(i, o),
            "value" === i ? e[i] = o : -1 < Wh.indexOf(i) && (e[i] = !!o)),
            o
        }
    }
    var $h = ($s(zh = {}, "m-bind:class", function(e, t, n, r) {
        var i;
        i = null == r ? {} : Object.keys(r).filter(function(e) {
            return r[e]
        }).reduce(function(e, t) {
            return e[t] = !1,
            e
        }, {});
        var o = function n(r) {
            return null == r ? {} : Array.isArray(r) ? r.reduce(function(e, t) {
                return Object.assign(e, n(t))
            }, {}) : "string" == typeof r ? (r = r.trim()) && r.split(/\s+/).reduce(function(e, t) {
                return e[t] = !0,
                e
            }, {}) || {} : "[object Object]" === Ir(r) ? Object.keys(r).reduce(function(e, t) {
                return e[t] = !!r[t],
                e
            }, {}) : {}
        }(n);
        Object.assign(i, o);
        for (var a = 0, s = Object.keys(i); a < s.length; a++) {
            var c = s[a];
            e.classList.toggle(c, i[c])
        }
        return o
    }),
    $s(zh, "m-bind:style", function(e, t, n, r) {
        r = r || {};
        var i = function n(e) {
            if (null == e)
                return {};
            if (Array.isArray(e))
                return e.reduce(function(e, t) {
                    return Object.assign(e, n(t))
                }, {});
            if ("[object Object]" !== Ir(e))
                return {};
            for (var t = {}, r = 0, i = Object.keys(e); r < i.length; r++) {
                var o = i[r]
                  , a = xi(o);
                a && (t[a] = e[o])
            }
            return t
        }(n);
        if (Fr(r, i))
            return i;
        var o = function(e) {
            if (!e)
                return {};
            var t, n = e.split(/\s*;[;\s]*/).filter(function(e) {
                return 0 < e.indexOf(":")
            }), r = {}, i = !0, o = !1, a = void 0;
            try {
                for (var s, c = n[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                    var u = s.value.split(/\s*:\s*/)
                      , l = mi(u, 2)
                      , f = l[0]
                      , d = l[1];
                    r[(Br(t = f, "-") && (t = t.slice(1)),
                    yi(t))] = d
                }
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    i || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return r
        }(e.getAttribute("style"));
        return o = qr(o, Object.keys(r)),
        Object.assign(o, i),
        e.setAttribute("style", Mi(o)),
        i
    }),
    $s(zh, "m-text", function(e, t, n, r) {
        return null == n && (n = ""),
        n !== r && (e.textContent = n),
        n
    }),
    zh)
      , Gh = Object.keys($h);
    function Xh(e, t) {
        var n = e.node
          , r = e.attrs
          , i = e.keys
          , o = !0
          , a = !1
          , s = void 0;
        try {
            for (var c, u = i[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
                var l = c.value
                  , f = r[l]
                  , d = f.expr
                  , h = f.value
                  , p = void 0;
                try {
                    p = Uu(d, "Conditional")
                } catch (e) {
                    continue
                }
                var v = void 0;
                try {
                    v = p({
                        data: t
                    })
                } catch (e) {}
                var m = $h[l] || Vh;
                r[l].value = m(n, l, v, h)
            }
        } catch (e) {
            a = !0,
            s = e
        } finally {
            try {
                o || null == u.return || u.return()
            } finally {
                if (a)
                    throw s
            }
        }
    }
    function Qh(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = e.length
              , i = 0;
            for (i = 0; i < r && e[i].node !== t[n].node; i++)
                ;
            i === r && e.push(t[n])
        }
        return e
    }
    function Jh(e) {
        var n = [];
        return Dr(e, function(e) {
            if (function(e) {
                return 1 === e.nodeType
            }(e)) {
                var t = function(e) {
                    for (var t, n = 0; n < e.attributes.length; n++) {
                        var r = e.attributes[n];
                        (i = r.name,
                        -1 < Gh.indexOf(i) || Uh(i)) && ((t = t || {})[r.name] = {
                            expr: r.value
                        })
                    }
                    var i;
                    return t
                }(e);
                return t && n.push(function(e, t) {
                    var n = {
                        node: e,
                        attrs: t
                    };
                    return t && (n.keys = Object.keys(t)),
                    n
                }(e, t)),
                e.children ? Array.from(e.children) : void 0
            }
        }),
        n
    }
    var Yh = new (function() {
        function e() {
            ur(this, e),
            this.doms = [],
            this.watchers = []
        }
        return fr(e, [{
            key: "watch",
            value: function(e) {
                this.watchers.push(e)
            }
        }, {
            key: "add",
            value: function(e) {
                var t = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        var a = i.value;
                        this.doms.push(a)
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
            }
        }, {
            key: "remove",
            value: function(e) {
                for (var t = e.slice(), n = this.doms.length - 1; -1 < n; n--)
                    for (var r = t.length - 1; -1 < r; r--)
                        if (this.doms[n].node === t[r].node) {
                            this.doms.splice(n, 1),
                            t.splice(r, 1);
                            break
                        }
            }
        }, {
            key: "update",
            value: function(e) {
                var t = e.add
                  , n = []
                  , r = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                        Qh(n, Jh(a.value))
                    }
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                var c = function(e, t) {
                    for (var n = {
                        removed: [],
                        add: t.slice()
                    }, r = e.length - 1; -1 < r; r--) {
                        var i = e[r];
                        if (document.contains(i.node)) {
                            for (var o = n.add.length - 1; -1 < o; o--)
                                if (i.node === t[o].node) {
                                    n.add.splice(o, 1);
                                    break
                                }
                        } else
                            n.removed.push(i)
                    }
                    return n
                }(this.doms, n);
                this.remove(c.removed),
                this.add(c.add);
                var u = !0
                  , l = !1
                  , f = void 0;
                try {
                    for (var d, h = this.watchers[Symbol.iterator](); !(u = (d = h.next()).done); u = !0) {
                        (0,
                        d.value)(c, this.doms)
                    }
                } catch (e) {
                    l = !0,
                    f = e
                } finally {
                    try {
                        u || null == h.return || h.return()
                    } finally {
                        if (l)
                            throw f
                    }
                }
            }
        }]),
        e
    }());
    function Zh(e, a) {
        var s = "m-bind:value"
          , c = ["INPUT", "TEXTAREA", "SELECT"]
          , t = !0
          , n = !1
          , r = void 0;
        try {
            for (var u, i = function() {
                var e = u.value
                  , t = e.node
                  , n = e.attrs;
                if (-1 === c.indexOf(t.tagName))
                    return "continue";
                var r = n[s] && n[s].expr;
                if (!r)
                    return "continue";
                var i = r.split(".")
                  , o = Er(function(e) {
                    var t = function(e, t) {
                        for (var n = t, r = e.length - 1; -1 < r; r--)
                            n = $s({}, e[r], n);
                        return n
                    }(i, e.target.value);
                    a.set(t)
                }, 100);
                t.addEventListener("input", o)
            }, o = e[Symbol.iterator](); !(t = (u = o.next()).done); t = !0)
                i()
        } catch (e) {
            n = !0,
            r = e
        } finally {
            try {
                t || null == o.return || o.return()
            } finally {
                if (n)
                    throw r
            }
        }
    }
    var Kh = bo("MIP-bind");
    var ep = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        return br(t, vr),
        fr(t, [{
            key: "build",
            value: function() {
                var n = this
                  , e = this.element.getAttribute("watch");
                e && MIP.watch(e, function(e, t) {
                    Cu.eventAction.execute("change", n.element, {
                        oldValue: t,
                        newValue: e
                    })
                })
            }
        }, {
            key: "prerenderAllowed",
            value: function() {
                return !0
            }
        }]),
        t
    }()
      , tp = bo("MIP-data")
      , np = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        var n;
        return br(t, vr),
        fr(t, [{
            key: "handleSrcChange",
            value: function() {
                this.fetch()
            }
        }, {
            key: "build",
            value: function() {
                var e = this;
                this.addEventAction("refresh", function() {
                    e.fetch()
                }),
                this.props.src ? this.fetch() : this.sync()
            }
        }, {
            key: "sync",
            value: function() {
                var e = this.element.querySelector('script[type="application/json"]');
                if (e) {
                    var t = e.textContent.toString();
                    t && this.assign(wo(t))
                }
            }
        }, {
            key: "request",
            value: function(t) {
                var e = this.props
                  , n = e.credentials
                  , r = e.timeout;
                return Promise.race([fetch(t, {
                    credentials: n
                }), function(n) {
                    var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    return new Promise(function(e, t) {
                        setTimeout(function() {
                            r ? e("timeout") : t(new Error("timeout"))
                        }, n)
                    }
                    )
                }(r)]).then(function(e) {
                    if (!e.ok)
                        throw Error("Fetch request failed: ".concat(t));
                    return e.json()
                })
            }
        }, {
            key: "fetch",
            value: (n = Wd(Md.mark(function e() {
                var t, n, r, i, o, a, s, c;
                return Md.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = this.props.src) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return n = new Po,
                            r = n.promise,
                            i = n.resolve,
                            o = n.reject,
                            mipDataPromises.push(r),
                            a = i,
                            e.prev = 6,
                            e.next = 9,
                            this.request(t);
                        case 9:
                            s = e.sent,
                            this.assign(s),
                            e.next = 18;
                            break;
                        case 13:
                            e.prev = 13,
                            e.t0 = e.catch(6),
                            tp.error(e.t0),
                            a = o,
                            MIP.viewer.eventAction.execute("fetch-error", this.element, e.t0);
                        case 18:
                            -1 < (c = mipDataPromises.indexOf(r)) && mipDataPromises.splice(c, 1),
                            a();
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[6, 13]])
            })),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "assign",
            value: function(e) {
                var t = this.props
                  , n = t.id
                  , r = t.scope;
                MIP.$set(n && r ? $s({}, n, e) : e)
            }
        }, {
            key: "prerenderAllowed",
            value: function() {
                return !0
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["src"]
            }
        }]),
        t
    }();
    np.props = {
        src: {
            type: String,
            default: ""
        },
        credentials: {
            type: String,
            default: "omit"
        },
        timeout: {
            type: Number,
            default: 5e3
        },
        id: {
            type: String,
            default: ""
        },
        scope: {
            type: Boolean,
            default: !1
        }
    };
    function rp(e, t) {
        return t ? e.filter(function(e) {
            return "string" == typeof e
        }) : e.map(function(e) {
            return "string" == typeof e ? e : e.name
        })
    }
    function ip(t) {
        return function(e) {
            return e === window ? t : e === document ? t.document : e
        }
    }
    var op = new (function() {
        function e() {
            ur(this, e),
            this.initialized = !1,
            this.firstScroll = !0,
            this.animations = [],
            this.position = {
                top: "mip-fixed-hide-top",
                bottom: "mip-fixed-hide-bottom",
                in: function(e, t, n) {
                    e.classList.remove(t || n)
                },
                out: function(e, t, n) {
                    e.classList.add(t || n)
                }
            }
        }
        return fr(e, [{
            key: "handleScroll",
            value: function(e) {
                var r = this;
                if (e) {
                    var i = 0 < e ? "out" : "in";
                    this.animations.forEach(function(e) {
                        var t = r.position[i]
                          , n = r.position[e.position];
                        n && t(e.element, e.slide, n)
                    })
                }
            }
        }, {
            key: "getDirection",
            value: function(e, t, n) {
                return e + window.innerHeight >= n ? 1 : 1 < e ? e - t : -1
            }
        }, {
            key: "init",
            value: function(e) {
                this.animations.push(e),
                this.initialized || (this.initialized = !0,
                this.bindScrollEvent())
            }
        }, {
            key: "bindScrollEvent",
            value: function() {
                function e() {
                    t = i.getScrollTop(),
                    n = i.getScrollHeight(),
                    o = r.getDirection(t, a, n),
                    r.handleScroll(o),
                    a = t
                }
                var t, n, r = this, i = window.MIP.viewport, o = 0, a = 0;
                window.addEventListener("touchstart", function() {
                    t = i.getScrollTop(),
                    n = i.getScrollHeight()
                }),
                window.addEventListener("touchmove", e),
                window.addEventListener("touchend", e),
                i.on("scroll", function() {
                    r.firstScroll ? r.firstScroll = !1 : e()
                })
            }
        }]),
        e
    }())
      , ap = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        return br(t, vr),
        fr(t, [{
            key: "connectedCallback",
            value: function() {
                var e = window.MIP.viewer
                  , t = window.MIP.util.platform;
                if ((this.element.classList.remove("mip-layout-container"),
                !this.element.getAttribute("mipdata-fixedidx")) && !this.element.hasAttribute("still")) {
                    var n = t.isIos() && e.isIframed;
                    e.fixedElement.setFixedElement([this.element], n)
                }
            }
        }, {
            key: "build",
            value: function() {
                var t = this.element;
                this.addEventAction("close", function(e) {
                    e && e.preventDefault && e.preventDefault(),
                    Gu.css(t, "display", "none")
                });
                var e = t.getAttribute("type");
                !t.hasAttribute("data-slide") || "top" !== e && "bottom" !== e || op.init({
                    element: t,
                    position: e,
                    slide: t.getAttribute("data-slide")
                })
            }
        }]),
        t
    }()
      , sp = function(e) {
        function t() {
            return ur(this, t),
            yr(this, gr(t).apply(this, arguments))
        }
        return br(t, vr),
        fr(t, [{
            key: "build",
            value: function() {
                var t = this.element.ownerDocument.createElement("div");
                this.applyFillContent(t),
                this.element.getRealChildNodes().forEach(function(e) {
                    return t.appendChild(e)
                }),
                this.element.appendChild(t)
            }
        }, {
            key: "prerenderAllowed",
            value: function() {
                return !0
            }
        }]),
        t
    }()
      , cp = function() {
        dl("mip-layout", sp),
        dl("mip-pix", Ih),
        dl("mip-img", ih),
        dl("mip-rem", oh),
        dl("mip-carousel", bh),
        dl("mip-iframe", Ph),
        dl("mip-video", sh),
        dl("mip-fixed", ap),
        function() {
            function t(e) {
                var t = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        var a = i.value;
                        try {
                            Xh(a, s.data)
                        } catch (e) {
                            Kh.error(e)
                        }
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
            }
            var s = new Fh
              , e = s.get.bind(s)
              , n = s.set.bind(s)
              , r = s.watcher.watch.bind(s.watcher);
            Yh.watch(function(e) {
                Zh(e.add, s),
                t(e.add)
            }),
            document.addEventListener("dom-change", function(e) {
                var t = e.detail && e.detail[0];
                t && Array.isArray(t.add) && Yh.update(t)
            }),
            s.watcher.watch(function() {
                t(Yh.doms)
            }),
            Lh(MIP, "setData", n),
            Lh(MIP, "$set", function(e) {
                Yh.update({
                    add: [document.documentElement]
                }),
                n(e)
            }),
            Lh(MIP, "getData", e),
            Lh(MIP, "watch", r),
            window.mipDataPromises = [],
            window.m = s.data,
            MIP.$update = s.global.broadcast.bind(s.global),
            MIP.$set(s.global.data)
        }(),
        dl("mip-data-watch", ep),
        dl("mip-data", np),
        tu() || dl("mip-shell", Jl)
    }
      , up = {
        PROPS: !1,
        FUNCTION: !0
    }
      , lp = {
        READONLY: !1,
        READWRITE: !0
    }
      , fp = up.PROPS
      , dp = up.FUNCTION
      , hp = lp.READONLY
      , pp = lp.READWRITE;
    function vp(e) {
        return function(e) {
            return Array.prototype.concat.apply([], e)
        }(e.map(function(e) {
            return e.props
        }))
    }
    var mp = up.PROPS
      , yp = up.FUNCTION
      , gp = lp.READONLY;
    function wp() {}
    function bp() {
        return window
    }
    function Ep(e, t) {
        return function() {
            return t()[e]
        }
    }
    function kp(t, e, n, r, i) {
        return {
            get: "function" == typeof e.getter ? e.getter : e.properties ? function(e, t, n) {
                var s = {}
                  , c = !1
                  , u = t.properties
                  , l = t.origin || Ep(e, n);
                return function() {
                    if (c)
                        return s;
                    for (var e = 0; e < u.length; e++)
                        for (var t = u[e], n = t.type, r = t.access, i = t.props, o = 0; o < i.length; o++) {
                            var a = i[o];
                            Sp(s, a.name || a, a, n, r, l)
                        }
                    return c = !0,
                    s
                }
            }(t, e, i) : function(e, t, n) {
                return t === yp ? function(n, r) {
                    return function() {
                        var e = r()
                          , t = e[n];
                        return t && t.bind(e)
                    }
                }(e, n) : Ep(e, n)
            }(t, n, i),
            set: "function" == typeof e.setter ? e.setter : r === gp ? wp : function(e) {
                i()[t] = e
            }
        }
    }
    function Sp(e, t, n, r, i, o) {
        var a = function(e, t, n, r, i) {
            if (t.descriptor)
                return t.descriptor;
            var o = {
                enumerable: !0,
                configurable: !1
            };
            if ("function" == typeof t)
                return o.get = t,
                o.set = wp,
                o;
            var a = kp(e, t, t.type || n || mp, t.access || r || gp, i || bp);
            return o.get = a.get,
            o.set = a.set,
            o
        }(t, n, r, i, o);
        return e && Object.defineProperty(e, t, a),
        a
    }
    function Pp(e) {
        var t = function() {
            var e = [{
                type: fp,
                access: hp,
                props: ["Array", "ArrayBuffer", "Blob", "Boolean", "DOMError", "DOMException", "DataView", "Date", "Error", "Float32Array", "Float64Array", "FormData", "Headers", "Infinity", "Int16Array", "Int32Array", "Int8Array", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "ReadableStream", "ReferenceError", "Reflect", "RegExp", "Request", "Response", "Set", "String", "Symbol", "SyntaxError", "TextDecoder", "TextEncoder", "TypeError", "URIError", "URL", "URLSearchParams", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WebSocket", "WritableStream", "crypto", "console", "decodeURI", "decodeURIComponent", "localStorage", "navigator", "sessionStorage", "screen", "undefined"]
            }, {
                type: fp,
                access: hp,
                props: ["devicePixelRatio", "innerHeight", "innerWidth", "isSecureContext", "length", "outerHeight", "outerWidth", "screenLeft", "screenTop", "screenX", "screenY", "scrollX", "scrollY", "mipDataPromises"]
            }, {
                type: dp,
                access: hp,
                props: ["atob", "clearInterval", "clearTimeout", "encodeURI", "encodeURIComponent", "escape", "fetch", "getComputedStyle", "isFinite", "isNaN", "matchMedia", "parseFloat", "parseInt", "setInterval", "setTimeout", "unescape", "fetchJsonp"]
            }]
              , t = ["arguments", "require", "module", "exports", "define", "import", "process"]
              , n = {
                name: "strict",
                access: hp,
                origin: function() {
                    return window
                },
                properties: e.concat([{
                    type: fp,
                    access: hp,
                    props: [{
                        name: "document",
                        origin: function() {
                            return document
                        },
                        properties: [{
                            type: fp,
                            access: pp,
                            props: ["cookie", "domain"]
                        }, {
                            type: fp,
                            access: hp,
                            props: ["title"]
                        }]
                    }, {
                        name: "location",
                        origin: function() {
                            return location
                        },
                        properties: [{
                            type: fp,
                            access: hp,
                            props: ["href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin"]
                        }]
                    }, {
                        name: "MIP",
                        origin: function() {
                            return MIP
                        },
                        properties: [{
                            type: fp,
                            access: hp,
                            props: ["viewport", {
                                name: "util",
                                origin: function() {
                                    return MIP.util
                                },
                                properties: [{
                                    type: fp,
                                    access: hp,
                                    props: ["platform", "customStorage", "jsonParse", "string"]
                                }]
                            }, {
                                name: "sandbox",
                                getter: function() {
                                    return MIP.sandbox.strict
                                }
                            }, {
                                name: "viewer",
                                origin: function() {
                                    return MIP.viewer
                                },
                                properties: [{
                                    type: fp,
                                    access: hp,
                                    props: ["isIframed"]
                                }, {
                                    type: dp,
                                    access: hp,
                                    props: ["sendMessage", "open"]
                                }]
                            }]
                        }, {
                            type: fp,
                            access: hp,
                            props: ["MIP_ROOT_PAGE"]
                        }, {
                            type: dp,
                            access: hp,
                            props: ["watch", "setData", "getData"]
                        }]
                    }, {
                        name: "window",
                        getter: function() {
                            return MIP.sandbox.strict
                        }
                    }, {
                        name: "strict",
                        getter: function() {
                            return MIP.sandbox.strict
                        }
                    }]
                }, {
                    type: dp,
                    access: hp,
                    props: [{
                        name: "this",
                        getter: function() {
                            return ip(MIP.sandbox.strict)
                        }
                    }]
                }])
            }
              , r = {
                name: "sandbox",
                access: hp,
                origin: function() {
                    return window
                },
                properties: e.concat([{
                    type: fp,
                    access: pp,
                    props: ["BMap", "BMapLib"]
                }, {
                    type: fp,
                    access: hp,
                    props: ["CustomEvent", "File", "FileList", "FileReader", "Image", "ImageBitmap", "MutationObserver", "Notification", "history", "location", "scrollbars", "swan", {
                        name: "document",
                        origin: function() {
                            return document
                        },
                        properties: [{
                            type: fp,
                            access: pp,
                            props: ["domain", "head", "body", "title", "cookie", "referrer", "readyState", "documentElement"]
                        }, {
                            type: dp,
                            access: hp,
                            props: [{
                                name: "createElement",
                                getter: function() {
                                    return function(e, t) {
                                        return "string" == typeof e && "script" === e.toLowerCase() && console.error("[MIP] \u7981\u6b62\u521b\u5efa SCRIPT \u6807\u7b7e\u5f15\u5165\u7b2c\u4e09\u65b9 JS \u811a\u672c"),
                                        document.createElement(e, t)
                                    }
                                }
                            }, "createDocumentFragment", "execCommand", "getElementById", "getElementsByClassName", "getElementsByTagName", "querySelector", "querySelectorAll"]
                        }]
                    }, {
                        name: "window",
                        getter: function() {
                            return MIP.sandbox
                        }
                    }, {
                        name: "MIP",
                        getter: function() {
                            return MIP
                        }
                    }, n]
                }, {
                    type: dp,
                    access: hp,
                    props: ["addEventListener", "cancelAnimationFrame", "createImageBitmap", "removeEventListener", "requestAnimationFrame", "scrollBy", "scrollTo", "scroll", "webkitCancelAnimationFrame", "webkitRequestAnimationFrame", {
                        name: "this",
                        getter: function() {
                            return ip(MIP.sandbox)
                        }
                    }]
                }])
            }
              , i = vp(r.properties)
              , o = vp(n.properties)
              , a = rp(i).concat(t)
              , s = rp(o).concat(t)
              , c = rp(i, !0).concat(t)
              , u = rp(o, !0).concat(t)
              , l = {
                type: fp,
                access: hp,
                props: [{
                    name: "WHITELIST",
                    getter: function() {
                        return a.slice()
                    }
                }, {
                    name: "WHITELIST_STRICT",
                    getter: function() {
                        return s.slice()
                    }
                }, {
                    name: "WHITELIST_RESERVED",
                    getter: function() {
                        return c.slice()
                    }
                }, {
                    name: "WHITELIST_STRICT_RESERVED",
                    getter: function() {
                        return u.slice()
                    }
                }]
            };
            return r.properties = r.properties.concat(l),
            n.properties = n.properties.concat(l),
            {
                ORIGINAL: e,
                RESERVED: t,
                SANDBOX: r,
                SANDBOX_STRICT: n,
                WHITELIST: a,
                WHITELIST_STRICT: s,
                WHITELIST_RESERVED: c,
                WHITELIST_STRICT_RESERVED: u
            }
        }()
          , n = _p(e, t.SANDBOX.name, t.SANDBOX);
        if (!e)
            return n.get()
    }
    var _p = Sp
      , xp = new (function() {
        function e() {
            ur(this, e),
            this._domObj = {},
            this._isAlreadyWake = {}
        }
        return fr(e, [{
            key: "init",
            value: function() {
                var e = "";
                try {
                    var t = document.querySelector("#mip-sleep-wake-module");
                    e = JSON.parse(t.textContent)
                } catch (e) {
                    return
                }
                if (e)
                    for (var n in this._initConf("||", e),
                    e)
                        this._stateChange(n, !0)
            }
        }, {
            key: "_initConf",
            value: function(e, t) {
                for (var n in e = e || "||",
                t) {
                    var r = t[n].split(e)
                      , i = r.length;
                    this._domObj[n] = [];
                    for (var o = 0; o < i; o++)
                        try {
                            var a = o
                              , s = document.querySelector(r[o])
                              , c = {
                                par: s.parentNode,
                                cln: "mip-sleep-wake-textarea-" + n + "-" + a
                            };
                            s.setAttribute("data-cln", c.cln),
                            this._domObj[n].push(c)
                        } catch (e) {
                            continue
                        }
                }
            }
        }, {
            key: "wake",
            value: function(e) {
                this._stateChange(e),
                this._close(e)
            }
        }, {
            key: "reset",
            value: function(e) {
                this._isAlreadyWake[e] = 0
            }
        }, {
            key: "_close",
            value: function(e) {
                this._isAlreadyWake[e] = 1
            }
        }, {
            key: "_stateChange",
            value: function(e, t) {
                if (e) {
                    var n = this._domObj[e];
                    if (n) {
                        var r = n.length;
                        if (!(r < 1))
                            for (var i = 0; i < r; i++) {
                                var o = n[i];
                                if (t && !this._isAlreadyWake[e]) {
                                    var a = o.par && o.cln ? o.par.querySelector("[data-cln=" + o.cln + "]") : null
                                      , s = document.createElement("textarea");
                                    if (a && "textarea" === a.tagName.toLowerCase())
                                        continue;
                                    if (!a)
                                        continue;
                                    s.textContent = a.outerHTML,
                                    s.style.display = "none",
                                    s.setAttribute("data-cln", o.cln),
                                    a.outerHTML = s.outerHTML
                                }
                                if (!t && !this._isAlreadyWake[e]) {
                                    var c = o.par;
                                    if (c) {
                                        var u = c.querySelector("[data-cln=" + o.cln + "]");
                                        u && "textarea" === u.tagName.toLowerCase() && (u.outerHTML = u.textContent)
                                    }
                                }
                            }
                    }
                }
            }
        }]),
        e
    }())
      , Ip = ["mip-carousel", "mip-iframe", "mip-img", "mip-pix", "mip-video", "mip-access", "mip-accordion", "mip-ad", "mip-analytics", "mip-anim", "mip-app-banner", "mip-appdl", "mip-audio", "mip-bind", "mip-custom", "mip-experiment", "mip-filter", "mip-fixed", "mip-form", "mip-gototop", "mip-history", "mip-infinitescroll", "mip-install-serviceworker", "mip-lightbox", "mip-link", "mip-list", "mip-login-done", "mip-map", "mip-mustache", "mip-nav-slidedown", "mip-sample", "mip-semi-fixed", "mip-share", "mip-showmore", "mip-sidebar", "mip-stats-baidu", "mip-stats-bidu", "mip-stats-cnzz", "mip-vd-baidu", "mip-vd-tabs"]
      , Lp = .1
      , Ap = Array.isArray(Ip) ? Ip.filter(function() {
        return !!(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "").trim()
    }) : [];
    function Tp() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          , t = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).rate || Lp
          , n = e.filename;
        if (n && /(c\.mipcdn\.com|mipcache\.bdstatic\.com|\S+\.sm-tc\.cn|\S+\.transcode\.cn)\/static/.test(n)) {
            var r = e.message || ""
              , i = e.lineno || ""
              , o = e.colno || window.event && window.event.errorCharacter || 0
              , a = (/\/(mip-.+)\//g.exec(n) || [])[1] || ""
              , s = Math.random() <= t;
            if ((n.match(/(mip\.js)/g) || -1 < Ap.indexOf(a)) && s) {
                var c = {
                    file: n,
                    msg: r,
                    ln: i,
                    col: o,
                    href: window.location.href
                };
                Cu.sendMessage(wc, c)
            }
        }
    }
    var Cp, Mp = 864e5, Op = {};
    function jp(e, t) {
        var n = new Date(e || Date.now()).getTime()
          , r = new Date(t || "2099-01-01").getTime()
          , i = Date.now();
        return !(!n || !r || r < n) && (n <= i && i <= r)
    }
    function Hp(e, t, n) {
        var r = document.domain
          , i = new Date;
        i.setTime(Date.now() + n),
        document.cookie = "".concat(e, "=").concat(escape(t), ";path=/;expires=").concat(i.toGMTString(), ";domain=").concat(r, ";")
    }
    function Np(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , n = []
          , r = t.startTime
          , i = t.endTime
          , o = t.ratio;
        if (Hp(e, "", -1),
        !o || "number" != typeof o || o < 0 || !jp(r, i))
            return !1;
        for (var a = 0; a < 100; a++)
            n[a] = a < o;
        if (n[parseInt(100 * Math.random(), 10)]) {
            var s = new Date(i).getTime()
              , c = Date.now()
              , u = s ? s - c : Mp;
            return Hp(e, JSON.stringify(t), 0 < u ? u : Mp),
            !0
        }
        return !1
    }
    if (void 0 === window.MIP || void 0 === window.MIP.version) {
        window.removeEventListener("error", Tp),
        window.addEventListener("error", Tp);
        var Rp = (new Ud).get()
          , Dp = (Cp = [],
        Object.keys(Op.abTest || {}).forEach(function(e) {
            var t = (Op.abTest || {})[e];
            jp(t.startTime, t.endTime) || Hp(e, "", -1);
            var n = function(e) {
                var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)")
                  , n = document.cookie.match(t);
                return n && n[2] ? unescape(n[2]) : ""
            }(e);
            n && n === JSON.stringify(t) ? Cp.push(e) : Np(e, t) && Cp.push(e)
        }),
        Cp);
        Gu.dom.waitDocumentReady(function() {
            As.init(),
            xp.init();
            var e = window.MIP || [];
            window.MIP = Rp,
            Pp(window.MIP),
            Cu.init();
            var t = Array.prototype.slice.call(document.getElementsByClassName("mip-hidden"))
              , n = /mip-/i;
            t.forEach(function(e) {
                return -1 < e.tagName.search(n) && Ds(e)
            }),
            Zr(document).then(cp),
            Array.isArray(e) && e.forEach(window.MIP.push),
            xu.start(window._mipStartTiming),
            xu.on("update", function(e) {
                e.msids = Dp.join(","),
                Cu.sendMessage(gc, e)
            }),
            Cu.show(),
            Gu.customStorage(2).delExceedCookie()
        })
    }
});
