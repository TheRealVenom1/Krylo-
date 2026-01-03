(function() {
    const l = document.createElement("link").relList;
    if (l && l.supports && l.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        o(c);
    new MutationObserver(c => {
        for (const d of c)
            if (d.type === "childList")
                for (const h of d.addedNodes)
                    h.tagName === "LINK" && h.rel === "modulepreload" && o(h)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function u(c) {
        const d = {};
        return c.integrity && (d.integrity = c.integrity),
        c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? d.credentials = "include" : c.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
        d
    }
    function o(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const d = u(c);
        fetch(c.href, d)
    }
}
)();
function A0(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var Cr = {
    exports: {}
}
  , ol = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $m;
function R1() {
    if ($m)
        return ol;
    $m = 1;
    var a = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.fragment");
    function u(o, c, d) {
        var h = null;
        if (d !== void 0 && (h = "" + d),
        c.key !== void 0 && (h = "" + c.key),
        "key"in c) {
            d = {};
            for (var y in c)
                y !== "key" && (d[y] = c[y])
        } else
            d = c;
        return c = d.ref,
        {
            $$typeof: a,
            type: o,
            key: h,
            ref: c !== void 0 ? c : null,
            props: d
        }
    }
    return ol.Fragment = l,
    ol.jsx = u,
    ol.jsxs = u,
    ol
}
var Im;
function O1() {
    return Im || (Im = 1,
    Cr.exports = R1()),
    Cr.exports
}
var S = O1()
  , zr = {
    exports: {}
}
  , at = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp;
function _1() {
    if (tp)
        return at;
    tp = 1;
    var a = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.portal")
      , u = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , d = Symbol.for("react.consumer")
      , h = Symbol.for("react.context")
      , y = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , b = Symbol.for("react.activity")
      , T = Symbol.iterator;
    function w(E) {
        return E === null || typeof E != "object" ? null : (E = T && E[T] || E["@@iterator"],
        typeof E == "function" ? E : null)
    }
    var U = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , B = Object.assign
      , Y = {};
    function H(E, V, X) {
        this.props = E,
        this.context = V,
        this.refs = Y,
        this.updater = X || U
    }
    H.prototype.isReactComponent = {},
    H.prototype.setState = function(E, V) {
        if (typeof E != "object" && typeof E != "function" && E != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, V, "setState")
    }
    ,
    H.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate")
    }
    ;
    function Z() {}
    Z.prototype = H.prototype;
    function G(E, V, X) {
        this.props = E,
        this.context = V,
        this.refs = Y,
        this.updater = X || U
    }
    var et = G.prototype = new Z;
    et.constructor = G,
    B(et, H.prototype),
    et.isPureReactComponent = !0;
    var J = Array.isArray;
    function I() {}
    var K = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , P = Object.prototype.hasOwnProperty;
    function bt(E, V, X) {
        var k = X.ref;
        return {
            $$typeof: a,
            type: E,
            key: V,
            ref: k !== void 0 ? k : null,
            props: X
        }
    }
    function Rt(E, V) {
        return bt(E.type, V, E.props)
    }
    function Kt(E) {
        return typeof E == "object" && E !== null && E.$$typeof === a
    }
    function Ft(E) {
        var V = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + E.replace(/[=:]/g, function(X) {
            return V[X]
        })
    }
    var $e = /\/+/g;
    function Ce(E, V) {
        return typeof E == "object" && E !== null && E.key != null ? Ft("" + E.key) : V.toString(36)
    }
    function ue(E) {
        switch (E.status) {
        case "fulfilled":
            return E.value;
        case "rejected":
            throw E.reason;
        default:
            switch (typeof E.status == "string" ? E.then(I, I) : (E.status = "pending",
            E.then(function(V) {
                E.status === "pending" && (E.status = "fulfilled",
                E.value = V)
            }, function(V) {
                E.status === "pending" && (E.status = "rejected",
                E.reason = V)
            })),
            E.status) {
            case "fulfilled":
                return E.value;
            case "rejected":
                throw E.reason
            }
        }
        throw E
    }
    function R(E, V, X, k, it) {
        var ut = typeof E;
        (ut === "undefined" || ut === "boolean") && (E = null);
        var vt = !1;
        if (E === null)
            vt = !0;
        else
            switch (ut) {
            case "bigint":
            case "string":
            case "number":
                vt = !0;
                break;
            case "object":
                switch (E.$$typeof) {
                case a:
                case l:
                    vt = !0;
                    break;
                case v:
                    return vt = E._init,
                    R(vt(E._payload), V, X, k, it)
                }
            }
        if (vt)
            return it = it(E),
            vt = k === "" ? "." + Ce(E, 0) : k,
            J(it) ? (X = "",
            vt != null && (X = vt.replace($e, "$&/") + "/"),
            R(it, V, X, "", function(pi) {
                return pi
            })) : it != null && (Kt(it) && (it = Rt(it, X + (it.key == null || E && E.key === it.key ? "" : ("" + it.key).replace($e, "$&/") + "/") + vt)),
            V.push(it)),
            1;
        vt = 0;
        var ie = k === "" ? "." : k + ":";
        if (J(E))
            for (var Ut = 0; Ut < E.length; Ut++)
                k = E[Ut],
                ut = ie + Ce(k, Ut),
                vt += R(k, V, X, ut, it);
        else if (Ut = w(E),
        typeof Ut == "function")
            for (E = Ut.call(E),
            Ut = 0; !(k = E.next()).done; )
                k = k.value,
                ut = ie + Ce(k, Ut++),
                vt += R(k, V, X, ut, it);
        else if (ut === "object") {
            if (typeof E.then == "function")
                return R(ue(E), V, X, k, it);
            throw V = String(E),
            Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.")
        }
        return vt
    }
    function L(E, V, X) {
        if (E == null)
            return E;
        var k = []
          , it = 0;
        return R(E, k, "", "", function(ut) {
            return V.call(X, ut, it++)
        }),
        k
    }
    function F(E) {
        if (E._status === -1) {
            var V = E._result;
            V = V(),
            V.then(function(X) {
                (E._status === 0 || E._status === -1) && (E._status = 1,
                E._result = X)
            }, function(X) {
                (E._status === 0 || E._status === -1) && (E._status = 2,
                E._result = X)
            }),
            E._status === -1 && (E._status = 0,
            E._result = V)
        }
        if (E._status === 1)
            return E._result.default;
        throw E._result
    }
    var ct = typeof reportError == "function" ? reportError : function(E) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var V = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                error: E
            });
            if (!window.dispatchEvent(V))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", E);
            return
        }
        console.error(E)
    }
      , mt = {
        map: L,
        forEach: function(E, V, X) {
            L(E, function() {
                V.apply(this, arguments)
            }, X)
        },
        count: function(E) {
            var V = 0;
            return L(E, function() {
                V++
            }),
            V
        },
        toArray: function(E) {
            return L(E, function(V) {
                return V
            }) || []
        },
        only: function(E) {
            if (!Kt(E))
                throw Error("React.Children.only expected to receive a single React element child.");
            return E
        }
    };
    return at.Activity = b,
    at.Children = mt,
    at.Component = H,
    at.Fragment = u,
    at.Profiler = c,
    at.PureComponent = G,
    at.StrictMode = o,
    at.Suspense = p,
    at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K,
    at.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(E) {
            return K.H.useMemoCache(E)
        }
    },
    at.cache = function(E) {
        return function() {
            return E.apply(null, arguments)
        }
    }
    ,
    at.cacheSignal = function() {
        return null
    }
    ,
    at.cloneElement = function(E, V, X) {
        if (E == null)
            throw Error("The argument must be a React element, but you passed " + E + ".");
        var k = B({}, E.props)
          , it = E.key;
        if (V != null)
            for (ut in V.key !== void 0 && (it = "" + V.key),
            V)
                !P.call(V, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && V.ref === void 0 || (k[ut] = V[ut]);
        var ut = arguments.length - 2;
        if (ut === 1)
            k.children = X;
        else if (1 < ut) {
            for (var vt = Array(ut), ie = 0; ie < ut; ie++)
                vt[ie] = arguments[ie + 2];
            k.children = vt
        }
        return bt(E.type, it, k)
    }
    ,
    at.createContext = function(E) {
        return E = {
            $$typeof: h,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        E.Provider = E,
        E.Consumer = {
            $$typeof: d,
            _context: E
        },
        E
    }
    ,
    at.createElement = function(E, V, X) {
        var k, it = {}, ut = null;
        if (V != null)
            for (k in V.key !== void 0 && (ut = "" + V.key),
            V)
                P.call(V, k) && k !== "key" && k !== "__self" && k !== "__source" && (it[k] = V[k]);
        var vt = arguments.length - 2;
        if (vt === 1)
            it.children = X;
        else if (1 < vt) {
            for (var ie = Array(vt), Ut = 0; Ut < vt; Ut++)
                ie[Ut] = arguments[Ut + 2];
            it.children = ie
        }
        if (E && E.defaultProps)
            for (k in vt = E.defaultProps,
            vt)
                it[k] === void 0 && (it[k] = vt[k]);
        return bt(E, ut, it)
    }
    ,
    at.createRef = function() {
        return {
            current: null
        }
    }
    ,
    at.forwardRef = function(E) {
        return {
            $$typeof: y,
            render: E
        }
    }
    ,
    at.isValidElement = Kt,
    at.lazy = function(E) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: E
            },
            _init: F
        }
    }
    ,
    at.memo = function(E, V) {
        return {
            $$typeof: m,
            type: E,
            compare: V === void 0 ? null : V
        }
    }
    ,
    at.startTransition = function(E) {
        var V = K.T
          , X = {};
        K.T = X;
        try {
            var k = E()
              , it = K.S;
            it !== null && it(X, k),
            typeof k == "object" && k !== null && typeof k.then == "function" && k.then(I, ct)
        } catch (ut) {
            ct(ut)
        } finally {
            V !== null && X.types !== null && (V.types = X.types),
            K.T = V
        }
    }
    ,
    at.unstable_useCacheRefresh = function() {
        return K.H.useCacheRefresh()
    }
    ,
    at.use = function(E) {
        return K.H.use(E)
    }
    ,
    at.useActionState = function(E, V, X) {
        return K.H.useActionState(E, V, X)
    }
    ,
    at.useCallback = function(E, V) {
        return K.H.useCallback(E, V)
    }
    ,
    at.useContext = function(E) {
        return K.H.useContext(E)
    }
    ,
    at.useDebugValue = function() {}
    ,
    at.useDeferredValue = function(E, V) {
        return K.H.useDeferredValue(E, V)
    }
    ,
    at.useEffect = function(E, V) {
        return K.H.useEffect(E, V)
    }
    ,
    at.useEffectEvent = function(E) {
        return K.H.useEffectEvent(E)
    }
    ,
    at.useId = function() {
        return K.H.useId()
    }
    ,
    at.useImperativeHandle = function(E, V, X) {
        return K.H.useImperativeHandle(E, V, X)
    }
    ,
    at.useInsertionEffect = function(E, V) {
        return K.H.useInsertionEffect(E, V)
    }
    ,
    at.useLayoutEffect = function(E, V) {
        return K.H.useLayoutEffect(E, V)
    }
    ,
    at.useMemo = function(E, V) {
        return K.H.useMemo(E, V)
    }
    ,
    at.useOptimistic = function(E, V) {
        return K.H.useOptimistic(E, V)
    }
    ,
    at.useReducer = function(E, V, X) {
        return K.H.useReducer(E, V, X)
    }
    ,
    at.useRef = function(E) {
        return K.H.useRef(E)
    }
    ,
    at.useState = function(E) {
        return K.H.useState(E)
    }
    ,
    at.useSyncExternalStore = function(E, V, X) {
        return K.H.useSyncExternalStore(E, V, X)
    }
    ,
    at.useTransition = function() {
        return K.H.useTransition()
    }
    ,
    at.version = "19.2.3",
    at
}
var ep;
function yc() {
    return ep || (ep = 1,
    zr.exports = _1()),
    zr.exports
}
var q = yc();
const V1 = A0(q);
var jr = {
    exports: {}
}
  , rl = {}
  , wr = {
    exports: {}
}
  , Nr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np;
function U1() {
    return np || (np = 1,
    (function(a) {
        function l(R, L) {
            var F = R.length;
            R.push(L);
            t: for (; 0 < F; ) {
                var ct = F - 1 >>> 1
                  , mt = R[ct];
                if (0 < c(mt, L))
                    R[ct] = L,
                    R[F] = mt,
                    F = ct;
                else
                    break t
            }
        }
        function u(R) {
            return R.length === 0 ? null : R[0]
        }
        function o(R) {
            if (R.length === 0)
                return null;
            var L = R[0]
              , F = R.pop();
            if (F !== L) {
                R[0] = F;
                t: for (var ct = 0, mt = R.length, E = mt >>> 1; ct < E; ) {
                    var V = 2 * (ct + 1) - 1
                      , X = R[V]
                      , k = V + 1
                      , it = R[k];
                    if (0 > c(X, F))
                        k < mt && 0 > c(it, X) ? (R[ct] = it,
                        R[k] = F,
                        ct = k) : (R[ct] = X,
                        R[V] = F,
                        ct = V);
                    else if (k < mt && 0 > c(it, F))
                        R[ct] = it,
                        R[k] = F,
                        ct = k;
                    else
                        break t
                }
            }
            return L
        }
        function c(R, L) {
            var F = R.sortIndex - L.sortIndex;
            return F !== 0 ? F : R.id - L.id
        }
        if (a.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            a.unstable_now = function() {
                return d.now()
            }
        } else {
            var h = Date
              , y = h.now();
            a.unstable_now = function() {
                return h.now() - y
            }
        }
        var p = []
          , m = []
          , v = 1
          , b = null
          , T = 3
          , w = !1
          , U = !1
          , B = !1
          , Y = !1
          , H = typeof setTimeout == "function" ? setTimeout : null
          , Z = typeof clearTimeout == "function" ? clearTimeout : null
          , G = typeof setImmediate < "u" ? setImmediate : null;
        function et(R) {
            for (var L = u(m); L !== null; ) {
                if (L.callback === null)
                    o(m);
                else if (L.startTime <= R)
                    o(m),
                    L.sortIndex = L.expirationTime,
                    l(p, L);
                else
                    break;
                L = u(m)
            }
        }
        function J(R) {
            if (B = !1,
            et(R),
            !U)
                if (u(p) !== null)
                    U = !0,
                    I || (I = !0,
                    Ft());
                else {
                    var L = u(m);
                    L !== null && ue(J, L.startTime - R)
                }
        }
        var I = !1
          , K = -1
          , P = 5
          , bt = -1;
        function Rt() {
            return Y ? !0 : !(a.unstable_now() - bt < P)
        }
        function Kt() {
            if (Y = !1,
            I) {
                var R = a.unstable_now();
                bt = R;
                var L = !0;
                try {
                    t: {
                        U = !1,
                        B && (B = !1,
                        Z(K),
                        K = -1),
                        w = !0;
                        var F = T;
                        try {
                            e: {
                                for (et(R),
                                b = u(p); b !== null && !(b.expirationTime > R && Rt()); ) {
                                    var ct = b.callback;
                                    if (typeof ct == "function") {
                                        b.callback = null,
                                        T = b.priorityLevel;
                                        var mt = ct(b.expirationTime <= R);
                                        if (R = a.unstable_now(),
                                        typeof mt == "function") {
                                            b.callback = mt,
                                            et(R),
                                            L = !0;
                                            break e
                                        }
                                        b === u(p) && o(p),
                                        et(R)
                                    } else
                                        o(p);
                                    b = u(p)
                                }
                                if (b !== null)
                                    L = !0;
                                else {
                                    var E = u(m);
                                    E !== null && ue(J, E.startTime - R),
                                    L = !1
                                }
                            }
                            break t
                        } finally {
                            b = null,
                            T = F,
                            w = !1
                        }
                        L = void 0
                    }
                } finally {
                    L ? Ft() : I = !1
                }
            }
        }
        var Ft;
        if (typeof G == "function")
            Ft = function() {
                G(Kt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var $e = new MessageChannel
              , Ce = $e.port2;
            $e.port1.onmessage = Kt,
            Ft = function() {
                Ce.postMessage(null)
            }
        } else
            Ft = function() {
                H(Kt, 0)
            }
            ;
        function ue(R, L) {
            K = H(function() {
                R(a.unstable_now())
            }, L)
        }
        a.unstable_IdlePriority = 5,
        a.unstable_ImmediatePriority = 1,
        a.unstable_LowPriority = 4,
        a.unstable_NormalPriority = 3,
        a.unstable_Profiling = null,
        a.unstable_UserBlockingPriority = 2,
        a.unstable_cancelCallback = function(R) {
            R.callback = null
        }
        ,
        a.unstable_forceFrameRate = function(R) {
            0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < R ? Math.floor(1e3 / R) : 5
        }
        ,
        a.unstable_getCurrentPriorityLevel = function() {
            return T
        }
        ,
        a.unstable_next = function(R) {
            switch (T) {
            case 1:
            case 2:
            case 3:
                var L = 3;
                break;
            default:
                L = T
            }
            var F = T;
            T = L;
            try {
                return R()
            } finally {
                T = F
            }
        }
        ,
        a.unstable_requestPaint = function() {
            Y = !0
        }
        ,
        a.unstable_runWithPriority = function(R, L) {
            switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                R = 3
            }
            var F = T;
            T = R;
            try {
                return L()
            } finally {
                T = F
            }
        }
        ,
        a.unstable_scheduleCallback = function(R, L, F) {
            var ct = a.unstable_now();
            switch (typeof F == "object" && F !== null ? (F = F.delay,
            F = typeof F == "number" && 0 < F ? ct + F : ct) : F = ct,
            R) {
            case 1:
                var mt = -1;
                break;
            case 2:
                mt = 250;
                break;
            case 5:
                mt = 1073741823;
                break;
            case 4:
                mt = 1e4;
                break;
            default:
                mt = 5e3
            }
            return mt = F + mt,
            R = {
                id: v++,
                callback: L,
                priorityLevel: R,
                startTime: F,
                expirationTime: mt,
                sortIndex: -1
            },
            F > ct ? (R.sortIndex = F,
            l(m, R),
            u(p) === null && R === u(m) && (B ? (Z(K),
            K = -1) : B = !0,
            ue(J, F - ct))) : (R.sortIndex = mt,
            l(p, R),
            U || w || (U = !0,
            I || (I = !0,
            Ft()))),
            R
        }
        ,
        a.unstable_shouldYield = Rt,
        a.unstable_wrapCallback = function(R) {
            var L = T;
            return function() {
                var F = T;
                T = L;
                try {
                    return R.apply(this, arguments)
                } finally {
                    T = F
                }
            }
        }
    }
    )(Nr)),
    Nr
}
var ap;
function B1() {
    return ap || (ap = 1,
    wr.exports = U1()),
    wr.exports
}
var Rr = {
    exports: {}
}
  , ne = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip;
function L1() {
    if (ip)
        return ne;
    ip = 1;
    var a = yc();
    function l(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++)
                m += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u() {}
    var o = {
        d: {
            f: u,
            r: function() {
                throw Error(l(522))
            },
            D: u,
            C: u,
            L: u,
            m: u,
            X: u,
            S: u,
            M: u
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function d(p, m, v) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: b == null ? null : "" + b,
            children: p,
            containerInfo: m,
            implementation: v
        }
    }
    var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function y(p, m) {
        if (p === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    ne.createPortal = function(p, m) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(l(299));
        return d(p, m, null, v)
    }
    ,
    ne.flushSync = function(p) {
        var m = h.T
          , v = o.p;
        try {
            if (h.T = null,
            o.p = 2,
            p)
                return p()
        } finally {
            h.T = m,
            o.p = v,
            o.d.f()
        }
    }
    ,
    ne.preconnect = function(p, m) {
        typeof p == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        o.d.C(p, m))
    }
    ,
    ne.prefetchDNS = function(p) {
        typeof p == "string" && o.d.D(p)
    }
    ,
    ne.preinit = function(p, m) {
        if (typeof p == "string" && m && typeof m.as == "string") {
            var v = m.as
              , b = y(v, m.crossOrigin)
              , T = typeof m.integrity == "string" ? m.integrity : void 0
              , w = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            v === "style" ? o.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: b,
                integrity: T,
                fetchPriority: w
            }) : v === "script" && o.d.X(p, {
                crossOrigin: b,
                integrity: T,
                fetchPriority: w,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    ne.preinitModule = function(p, m) {
        if (typeof p == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var v = y(m.as, m.crossOrigin);
                    o.d.M(p, {
                        crossOrigin: v,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && o.d.M(p)
    }
    ,
    ne.preload = function(p, m) {
        if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var v = m.as
              , b = y(v, m.crossOrigin);
            o.d.L(p, v, {
                crossOrigin: b,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    ne.preloadModule = function(p, m) {
        if (typeof p == "string")
            if (m) {
                var v = y(m.as, m.crossOrigin);
                o.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: v,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                o.d.m(p)
    }
    ,
    ne.requestFormReset = function(p) {
        o.d.r(p)
    }
    ,
    ne.unstable_batchedUpdates = function(p, m) {
        return p(m)
    }
    ,
    ne.useFormState = function(p, m, v) {
        return h.H.useFormState(p, m, v)
    }
    ,
    ne.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }
    ,
    ne.version = "19.2.3",
    ne
}
var lp;
function H1() {
    if (lp)
        return Rr.exports;
    lp = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (l) {
                console.error(l)
            }
    }
    return a(),
    Rr.exports = L1(),
    Rr.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp;
function Y1() {
    if (sp)
        return rl;
    sp = 1;
    var a = B1()
      , l = yc()
      , u = H1();
    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function d(t) {
        var e = t
          , n = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (n = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? n : null
    }
    function h(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function y(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function p(t) {
        if (d(t) !== t)
            throw Error(o(188))
    }
    function m(t) {
        var e = t.alternate;
        if (!e) {
            if (e = d(t),
            e === null)
                throw Error(o(188));
            return e !== t ? null : t
        }
        for (var n = t, i = e; ; ) {
            var s = n.return;
            if (s === null)
                break;
            var r = s.alternate;
            if (r === null) {
                if (i = s.return,
                i !== null) {
                    n = i;
                    continue
                }
                break
            }
            if (s.child === r.child) {
                for (r = s.child; r; ) {
                    if (r === n)
                        return p(s),
                        t;
                    if (r === i)
                        return p(s),
                        e;
                    r = r.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== i.return)
                n = s,
                i = r;
            else {
                for (var f = !1, g = s.child; g; ) {
                    if (g === n) {
                        f = !0,
                        n = s,
                        i = r;
                        break
                    }
                    if (g === i) {
                        f = !0,
                        i = s,
                        n = r;
                        break
                    }
                    g = g.sibling
                }
                if (!f) {
                    for (g = r.child; g; ) {
                        if (g === n) {
                            f = !0,
                            n = r,
                            i = s;
                            break
                        }
                        if (g === i) {
                            f = !0,
                            i = r,
                            n = s;
                            break
                        }
                        g = g.sibling
                    }
                    if (!f)
                        throw Error(o(189))
                }
            }
            if (n.alternate !== i)
                throw Error(o(190))
        }
        if (n.tag !== 3)
            throw Error(o(188));
        return n.stateNode.current === n ? t : e
    }
    function v(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = v(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var b = Object.assign
      , T = Symbol.for("react.element")
      , w = Symbol.for("react.transitional.element")
      , U = Symbol.for("react.portal")
      , B = Symbol.for("react.fragment")
      , Y = Symbol.for("react.strict_mode")
      , H = Symbol.for("react.profiler")
      , Z = Symbol.for("react.consumer")
      , G = Symbol.for("react.context")
      , et = Symbol.for("react.forward_ref")
      , J = Symbol.for("react.suspense")
      , I = Symbol.for("react.suspense_list")
      , K = Symbol.for("react.memo")
      , P = Symbol.for("react.lazy")
      , bt = Symbol.for("react.activity")
      , Rt = Symbol.for("react.memo_cache_sentinel")
      , Kt = Symbol.iterator;
    function Ft(t) {
        return t === null || typeof t != "object" ? null : (t = Kt && t[Kt] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var $e = Symbol.for("react.client.reference");
    function Ce(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === $e ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case B:
            return "Fragment";
        case H:
            return "Profiler";
        case Y:
            return "StrictMode";
        case J:
            return "Suspense";
        case I:
            return "SuspenseList";
        case bt:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case U:
                return "Portal";
            case G:
                return t.displayName || "Context";
            case Z:
                return (t._context.displayName || "Context") + ".Consumer";
            case et:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case K:
                return e = t.displayName || null,
                e !== null ? e : Ce(t.type) || "Memo";
            case P:
                e = t._payload,
                t = t._init;
                try {
                    return Ce(t(e))
                } catch {}
            }
        return null
    }
    var ue = Array.isArray
      , R = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , L = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , F = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ct = []
      , mt = -1;
    function E(t) {
        return {
            current: t
        }
    }
    function V(t) {
        0 > mt || (t.current = ct[mt],
        ct[mt] = null,
        mt--)
    }
    function X(t, e) {
        mt++,
        ct[mt] = t.current,
        t.current = e
    }
    var k = E(null)
      , it = E(null)
      , ut = E(null)
      , vt = E(null);
    function ie(t, e) {
        switch (X(ut, e),
        X(it, t),
        X(k, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? Sm(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = Sm(e),
                t = Tm(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        V(k),
        X(k, t)
    }
    function Ut() {
        V(k),
        V(it),
        V(ut)
    }
    function pi(t) {
        t.memoizedState !== null && X(vt, t);
        var e = k.current
          , n = Tm(e, t.type);
        e !== n && (X(it, t),
        X(k, n))
    }
    function Ml(t) {
        it.current === t && (V(k),
        V(it)),
        vt.current === t && (V(vt),
        il._currentValue = F)
    }
    var ou, Wc;
    function Fn(t) {
        if (ou === void 0)
            try {
                throw Error()
            } catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                ou = e && e[1] || "",
                Wc = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ou + t + Wc
    }
    var ru = !1;
    function cu(t, e) {
        if (!t || ru)
            return "";
        ru = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var _ = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(_.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(_, [])
                                } catch (j) {
                                    var z = j
                                }
                                Reflect.construct(t, [], _)
                            } else {
                                try {
                                    _.call()
                                } catch (j) {
                                    z = j
                                }
                                t.call(_.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (j) {
                                z = j
                            }
                            (_ = t()) && typeof _.catch == "function" && _.catch(function() {})
                        }
                    } catch (j) {
                        if (j && z && typeof j.stack == "string")
                            return [j.stack, z.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var r = i.DetermineComponentFrameRoot()
              , f = r[0]
              , g = r[1];
            if (f && g) {
                var x = f.split(`
`)
                  , C = g.split(`
`);
                for (s = i = 0; i < x.length && !x[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                for (; s < C.length && !C[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (i === x.length || s === C.length)
                    for (i = x.length - 1,
                    s = C.length - 1; 1 <= i && 0 <= s && x[i] !== C[s]; )
                        s--;
                for (; 1 <= i && 0 <= s; i--,
                s--)
                    if (x[i] !== C[s]) {
                        if (i !== 1 || s !== 1)
                            do
                                if (i--,
                                s--,
                                0 > s || x[i] !== C[s]) {
                                    var N = `
` + x[i].replace(" at new ", " at ");
                                    return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)),
                                    N
                                }
                            while (1 <= i && 0 <= s);
                        break
                    }
            }
        } finally {
            ru = !1,
            Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? Fn(n) : ""
    }
    function rg(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Fn(t.type);
        case 16:
            return Fn("Lazy");
        case 13:
            return t.child !== e && e !== null ? Fn("Suspense Fallback") : Fn("Suspense");
        case 19:
            return Fn("SuspenseList");
        case 0:
        case 15:
            return cu(t.type, !1);
        case 11:
            return cu(t.type.render, !1);
        case 1:
            return cu(t.type, !0);
        case 31:
            return Fn("Activity");
        default:
            return ""
        }
    }
    function Pc(t) {
        try {
            var e = ""
              , n = null;
            do
                e += rg(t, n),
                n = t,
                t = t.return;
            while (t);
            return e
        } catch (i) {
            return `
Error generating stack: ` + i.message + `
` + i.stack
        }
    }
    var fu = Object.prototype.hasOwnProperty
      , hu = a.unstable_scheduleCallback
      , du = a.unstable_cancelCallback
      , cg = a.unstable_shouldYield
      , fg = a.unstable_requestPaint
      , ge = a.unstable_now
      , hg = a.unstable_getCurrentPriorityLevel
      , $c = a.unstable_ImmediatePriority
      , Ic = a.unstable_UserBlockingPriority
      , Dl = a.unstable_NormalPriority
      , dg = a.unstable_LowPriority
      , tf = a.unstable_IdlePriority
      , mg = a.log
      , pg = a.unstable_setDisableYieldValue
      , yi = null
      , ve = null;
    function xn(t) {
        if (typeof mg == "function" && pg(t),
        ve && typeof ve.setStrictMode == "function")
            try {
                ve.setStrictMode(yi, t)
            } catch {}
    }
    var be = Math.clz32 ? Math.clz32 : vg
      , yg = Math.log
      , gg = Math.LN2;
    function vg(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (yg(t) / gg | 0) | 0
    }
    var Cl = 256
      , zl = 262144
      , jl = 4194304;
    function Wn(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function wl(t, e, n) {
        var i = t.pendingLanes;
        if (i === 0)
            return 0;
        var s = 0
          , r = t.suspendedLanes
          , f = t.pingedLanes;
        t = t.warmLanes;
        var g = i & 134217727;
        return g !== 0 ? (i = g & ~r,
        i !== 0 ? s = Wn(i) : (f &= g,
        f !== 0 ? s = Wn(f) : n || (n = g & ~t,
        n !== 0 && (s = Wn(n))))) : (g = i & ~r,
        g !== 0 ? s = Wn(g) : f !== 0 ? s = Wn(f) : n || (n = i & ~t,
        n !== 0 && (s = Wn(n)))),
        s === 0 ? 0 : e !== 0 && e !== s && (e & r) === 0 && (r = s & -s,
        n = e & -e,
        r >= n || r === 32 && (n & 4194048) !== 0) ? e : s
    }
    function gi(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function bg(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function ef() {
        var t = jl;
        return jl <<= 1,
        (jl & 62914560) === 0 && (jl = 4194304),
        t
    }
    function mu(t) {
        for (var e = [], n = 0; 31 > n; n++)
            e.push(t);
        return e
    }
    function vi(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function xg(t, e, n, i, s, r) {
        var f = t.pendingLanes;
        t.pendingLanes = n,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= n,
        t.entangledLanes &= n,
        t.errorRecoveryDisabledLanes &= n,
        t.shellSuspendCounter = 0;
        var g = t.entanglements
          , x = t.expirationTimes
          , C = t.hiddenUpdates;
        for (n = f & ~n; 0 < n; ) {
            var N = 31 - be(n)
              , _ = 1 << N;
            g[N] = 0,
            x[N] = -1;
            var z = C[N];
            if (z !== null)
                for (C[N] = null,
                N = 0; N < z.length; N++) {
                    var j = z[N];
                    j !== null && (j.lane &= -536870913)
                }
            n &= ~_
        }
        i !== 0 && nf(t, i, 0),
        r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e))
    }
    function nf(t, e, n) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var i = 31 - be(e);
        t.entangledLanes |= e,
        t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930
    }
    function af(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n; ) {
            var i = 31 - be(n)
              , s = 1 << i;
            s & e | t[i] & e && (t[i] |= e),
            n &= ~s
        }
    }
    function lf(t, e) {
        var n = e & -e;
        return n = (n & 42) !== 0 ? 1 : pu(n),
        (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    }
    function pu(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function yu(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function sf() {
        var t = L.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Zm(t.type))
    }
    function uf(t, e) {
        var n = L.p;
        try {
            return L.p = t,
            e()
        } finally {
            L.p = n
        }
    }
    var Sn = Math.random().toString(36).slice(2)
      , Wt = "__reactFiber$" + Sn
      , oe = "__reactProps$" + Sn
      , xa = "__reactContainer$" + Sn
      , gu = "__reactEvents$" + Sn
      , Sg = "__reactListeners$" + Sn
      , Tg = "__reactHandles$" + Sn
      , of = "__reactResources$" + Sn
      , bi = "__reactMarker$" + Sn;
    function vu(t) {
        delete t[Wt],
        delete t[oe],
        delete t[gu],
        delete t[Sg],
        delete t[Tg]
    }
    function Sa(t) {
        var e = t[Wt];
        if (e)
            return e;
        for (var n = t.parentNode; n; ) {
            if (e = n[xa] || n[Wt]) {
                if (n = e.alternate,
                e.child !== null || n !== null && n.child !== null)
                    for (t = jm(t); t !== null; ) {
                        if (n = t[Wt])
                            return n;
                        t = jm(t)
                    }
                return e
            }
            t = n,
            n = t.parentNode
        }
        return null
    }
    function Ta(t) {
        if (t = t[Wt] || t[xa]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function xi(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(o(33))
    }
    function Aa(t) {
        var e = t[of];
        return e || (e = t[of] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function kt(t) {
        t[bi] = !0
    }
    var rf = new Set
      , cf = {};
    function Pn(t, e) {
        Ea(t, e),
        Ea(t + "Capture", e)
    }
    function Ea(t, e) {
        for (cf[t] = e,
        t = 0; t < e.length; t++)
            rf.add(e[t])
    }
    var Ag = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , ff = {}
      , hf = {};
    function Eg(t) {
        return fu.call(hf, t) ? !0 : fu.call(ff, t) ? !1 : Ag.test(t) ? hf[t] = !0 : (ff[t] = !0,
        !1)
    }
    function Nl(t, e, n) {
        if (Eg(e))
            if (n === null)
                t.removeAttribute(e);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var i = e.toLowerCase().slice(0, 5);
                    if (i !== "data-" && i !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + n)
            }
    }
    function Rl(t, e, n) {
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + n)
        }
    }
    function Ie(t, e, n, i) {
        if (i === null)
            t.removeAttribute(n);
        else {
            switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttributeNS(e, n, "" + i)
        }
    }
    function ze(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function df(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function Mg(t, e, n) {
        var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var s = i.get
              , r = i.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(f) {
                    n = "" + f,
                    r.call(this, f)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: i.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(f) {
                    n = "" + f
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function bu(t) {
        if (!t._valueTracker) {
            var e = df(t) ? "checked" : "value";
            t._valueTracker = Mg(t, e, "" + t[e])
        }
    }
    function mf(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var n = e.getValue()
          , i = "";
        return t && (i = df(t) ? t.checked ? "true" : "false" : t.value),
        t = i,
        t !== n ? (e.setValue(t),
        !0) : !1
    }
    function Ol(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var Dg = /[\n"\\]/g;
    function je(t) {
        return t.replace(Dg, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function xu(t, e, n, i, s, r, f, g) {
        t.name = "",
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"),
        e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ze(e)) : t.value !== "" + ze(e) && (t.value = "" + ze(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"),
        e != null ? Su(t, f, ze(e)) : n != null ? Su(t, f, ze(n)) : i != null && t.removeAttribute("value"),
        s == null && r != null && (t.defaultChecked = !!r),
        s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.name = "" + ze(g) : t.removeAttribute("name")
    }
    function pf(t, e, n, i, s, r, f, g) {
        if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r),
        e != null || n != null) {
            if (!(r !== "submit" && r !== "reset" || e != null)) {
                bu(t);
                return
            }
            n = n != null ? "" + ze(n) : "",
            e = e != null ? "" + ze(e) : n,
            g || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        i = i ?? s,
        i = typeof i != "function" && typeof i != "symbol" && !!i,
        t.checked = g ? t.checked : !!i,
        t.defaultChecked = !!i,
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f),
        bu(t)
    }
    function Su(t, e, n) {
        e === "number" && Ol(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }
    function Ma(t, e, n, i) {
        if (t = t.options,
        e) {
            e = {};
            for (var s = 0; s < n.length; s++)
                e["$" + n[s]] = !0;
            for (n = 0; n < t.length; n++)
                s = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== s && (t[n].selected = s),
                s && i && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + ze(n),
            e = null,
            s = 0; s < t.length; s++) {
                if (t[s].value === n) {
                    t[s].selected = !0,
                    i && (t[s].defaultSelected = !0);
                    return
                }
                e !== null || t[s].disabled || (e = t[s])
            }
            e !== null && (e.selected = !0)
        }
    }
    function yf(t, e, n) {
        if (e != null && (e = "" + ze(e),
        e !== t.value && (t.value = e),
        n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + ze(n) : ""
    }
    function gf(t, e, n, i) {
        if (e == null) {
            if (i != null) {
                if (n != null)
                    throw Error(o(92));
                if (ue(i)) {
                    if (1 < i.length)
                        throw Error(o(93));
                    i = i[0]
                }
                n = i
            }
            n == null && (n = ""),
            e = n
        }
        n = ze(e),
        t.defaultValue = n,
        i = t.textContent,
        i === n && i !== "" && i !== null && (t.value = i),
        bu(t)
    }
    function Da(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var Cg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function vf(t, e, n) {
        var i = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Cg.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }
    function bf(t, e, n) {
        if (e != null && typeof e != "object")
            throw Error(o(62));
        if (t = t.style,
        n != null) {
            for (var i in n)
                !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
            for (var s in e)
                i = e[s],
                e.hasOwnProperty(s) && n[s] !== i && vf(t, s, i)
        } else
            for (var r in e)
                e.hasOwnProperty(r) && vf(t, r, e[r])
    }
    function Tu(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var zg = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , jg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function _l(t) {
        return jg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function tn() {}
    var Au = null;
    function Eu(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Ca = null
      , za = null;
    function xf(t) {
        var e = Ta(t);
        if (e && (t = e.stateNode)) {
            var n = t[oe] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (xu(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                e = n.name,
                n.type === "radio" && e != null) {
                    for (n = t; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + je("" + e) + '"][type="radio"]'),
                    e = 0; e < n.length; e++) {
                        var i = n[e];
                        if (i !== t && i.form === t.form) {
                            var s = i[oe] || null;
                            if (!s)
                                throw Error(o(90));
                            xu(i, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (e = 0; e < n.length; e++)
                        i = n[e],
                        i.form === t.form && mf(i)
                }
                break t;
            case "textarea":
                yf(t, n.value, n.defaultValue);
                break t;
            case "select":
                e = n.value,
                e != null && Ma(t, !!n.multiple, e, !1)
            }
        }
    }
    var Mu = !1;
    function Sf(t, e, n) {
        if (Mu)
            return t(e, n);
        Mu = !0;
        try {
            var i = t(e);
            return i
        } finally {
            if (Mu = !1,
            (Ca !== null || za !== null) && (Ss(),
            Ca && (e = Ca,
            t = za,
            za = Ca = null,
            xf(e),
            t)))
                for (e = 0; e < t.length; e++)
                    xf(t[e])
        }
    }
    function Si(t, e) {
        var n = t.stateNode;
        if (n === null)
            return null;
        var i = n[oe] || null;
        if (i === null)
            return null;
        n = i[e];
        t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (i = !i.disabled) || (t = t.type,
            i = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !i;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (n && typeof n != "function")
            throw Error(o(231, e, typeof n));
        return n
    }
    var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Du = !1;
    if (en)
        try {
            var Ti = {};
            Object.defineProperty(Ti, "passive", {
                get: function() {
                    Du = !0
                }
            }),
            window.addEventListener("test", Ti, Ti),
            window.removeEventListener("test", Ti, Ti)
        } catch {
            Du = !1
        }
    var Tn = null
      , Cu = null
      , Vl = null;
    function Tf() {
        if (Vl)
            return Vl;
        var t, e = Cu, n = e.length, i, s = "value"in Tn ? Tn.value : Tn.textContent, r = s.length;
        for (t = 0; t < n && e[t] === s[t]; t++)
            ;
        var f = n - t;
        for (i = 1; i <= f && e[n - i] === s[r - i]; i++)
            ;
        return Vl = s.slice(t, 1 < i ? 1 - i : void 0)
    }
    function Ul(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Bl() {
        return !0
    }
    function Af() {
        return !1
    }
    function re(t) {
        function e(n, i, s, r, f) {
            this._reactName = n,
            this._targetInst = s,
            this.type = i,
            this.nativeEvent = r,
            this.target = f,
            this.currentTarget = null;
            for (var g in t)
                t.hasOwnProperty(g) && (n = t[g],
                this[g] = n ? n(r) : r[g]);
            return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Bl : Af,
            this.isPropagationStopped = Af,
            this
        }
        return b(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Bl)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Bl)
            },
            persist: function() {},
            isPersistent: Bl
        }),
        e
    }
    var $n = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Ll = re($n), Ai = b({}, $n, {
        view: 0,
        detail: 0
    }), wg = re(Ai), zu, ju, Ei, Hl = b({}, Ai, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Nu,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== Ei && (Ei && t.type === "mousemove" ? (zu = t.screenX - Ei.screenX,
            ju = t.screenY - Ei.screenY) : ju = zu = 0,
            Ei = t),
            zu)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : ju
        }
    }), Ef = re(Hl), Ng = b({}, Hl, {
        dataTransfer: 0
    }), Rg = re(Ng), Og = b({}, Ai, {
        relatedTarget: 0
    }), wu = re(Og), _g = b({}, $n, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Vg = re(_g), Ug = b({}, $n, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Bg = re(Ug), Lg = b({}, $n, {
        data: 0
    }), Mf = re(Lg), Hg = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Yg = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, qg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Gg(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = qg[t]) ? !!e[t] : !1
    }
    function Nu() {
        return Gg
    }
    var Xg = b({}, Ai, {
        key: function(t) {
            if (t.key) {
                var e = Hg[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = Ul(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Yg[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Nu,
        charCode: function(t) {
            return t.type === "keypress" ? Ul(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Ul(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Kg = re(Xg)
      , Zg = b({}, Hl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Df = re(Zg)
      , Qg = b({}, Ai, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Nu
    })
      , kg = re(Qg)
      , Jg = b({}, $n, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Fg = re(Jg)
      , Wg = b({}, Hl, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Pg = re(Wg)
      , $g = b({}, $n, {
        newState: 0,
        oldState: 0
    })
      , Ig = re($g)
      , tv = [9, 13, 27, 32]
      , Ru = en && "CompositionEvent"in window
      , Mi = null;
    en && "documentMode"in document && (Mi = document.documentMode);
    var ev = en && "TextEvent"in window && !Mi
      , Cf = en && (!Ru || Mi && 8 < Mi && 11 >= Mi)
      , zf = " "
      , jf = !1;
    function wf(t, e) {
        switch (t) {
        case "keyup":
            return tv.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Nf(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var ja = !1;
    function nv(t, e) {
        switch (t) {
        case "compositionend":
            return Nf(e);
        case "keypress":
            return e.which !== 32 ? null : (jf = !0,
            zf);
        case "textInput":
            return t = e.data,
            t === zf && jf ? null : t;
        default:
            return null
        }
    }
    function av(t, e) {
        if (ja)
            return t === "compositionend" || !Ru && wf(t, e) ? (t = Tf(),
            Vl = Cu = Tn = null,
            ja = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return Cf && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var iv = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Rf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!iv[t.type] : e === "textarea"
    }
    function Of(t, e, n, i) {
        Ca ? za ? za.push(i) : za = [i] : Ca = i,
        e = zs(e, "onChange"),
        0 < e.length && (n = new Ll("onChange","change",null,n,i),
        t.push({
            event: n,
            listeners: e
        }))
    }
    var Di = null
      , Ci = null;
    function lv(t) {
        pm(t, 0)
    }
    function Yl(t) {
        var e = xi(t);
        if (mf(e))
            return t
    }
    function _f(t, e) {
        if (t === "change")
            return e
    }
    var Vf = !1;
    if (en) {
        var Ou;
        if (en) {
            var _u = "oninput"in document;
            if (!_u) {
                var Uf = document.createElement("div");
                Uf.setAttribute("oninput", "return;"),
                _u = typeof Uf.oninput == "function"
            }
            Ou = _u
        } else
            Ou = !1;
        Vf = Ou && (!document.documentMode || 9 < document.documentMode)
    }
    function Bf() {
        Di && (Di.detachEvent("onpropertychange", Lf),
        Ci = Di = null)
    }
    function Lf(t) {
        if (t.propertyName === "value" && Yl(Ci)) {
            var e = [];
            Of(e, Ci, t, Eu(t)),
            Sf(lv, e)
        }
    }
    function sv(t, e, n) {
        t === "focusin" ? (Bf(),
        Di = e,
        Ci = n,
        Di.attachEvent("onpropertychange", Lf)) : t === "focusout" && Bf()
    }
    function uv(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Yl(Ci)
    }
    function ov(t, e) {
        if (t === "click")
            return Yl(e)
    }
    function rv(t, e) {
        if (t === "input" || t === "change")
            return Yl(e)
    }
    function cv(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var xe = typeof Object.is == "function" ? Object.is : cv;
    function zi(t, e) {
        if (xe(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var n = Object.keys(t)
          , i = Object.keys(e);
        if (n.length !== i.length)
            return !1;
        for (i = 0; i < n.length; i++) {
            var s = n[i];
            if (!fu.call(e, s) || !xe(t[s], e[s]))
                return !1
        }
        return !0
    }
    function Hf(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Yf(t, e) {
        var n = Hf(t);
        t = 0;
        for (var i; n; ) {
            if (n.nodeType === 3) {
                if (i = t + n.textContent.length,
                t <= e && i >= e)
                    return {
                        node: n,
                        offset: e - t
                    };
                t = i
            }
            t: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Hf(n)
        }
    }
    function qf(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? qf(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Gf(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Ol(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                t = e.contentWindow;
            else
                break;
            e = Ol(t.document)
        }
        return e
    }
    function Vu(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var fv = en && "documentMode"in document && 11 >= document.documentMode
      , wa = null
      , Uu = null
      , ji = null
      , Bu = !1;
    function Xf(t, e, n) {
        var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Bu || wa == null || wa !== Ol(i) || (i = wa,
        "selectionStart"in i && Vu(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
        i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }),
        ji && zi(ji, i) || (ji = i,
        i = zs(Uu, "onSelect"),
        0 < i.length && (e = new Ll("onSelect","select",null,e,n),
        t.push({
            event: e,
            listeners: i
        }),
        e.target = wa)))
    }
    function In(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n
    }
    var Na = {
        animationend: In("Animation", "AnimationEnd"),
        animationiteration: In("Animation", "AnimationIteration"),
        animationstart: In("Animation", "AnimationStart"),
        transitionrun: In("Transition", "TransitionRun"),
        transitionstart: In("Transition", "TransitionStart"),
        transitioncancel: In("Transition", "TransitionCancel"),
        transitionend: In("Transition", "TransitionEnd")
    }
      , Lu = {}
      , Kf = {};
    en && (Kf = document.createElement("div").style,
    "AnimationEvent"in window || (delete Na.animationend.animation,
    delete Na.animationiteration.animation,
    delete Na.animationstart.animation),
    "TransitionEvent"in window || delete Na.transitionend.transition);
    function ta(t) {
        if (Lu[t])
            return Lu[t];
        if (!Na[t])
            return t;
        var e = Na[t], n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in Kf)
                return Lu[t] = e[n];
        return t
    }
    var Zf = ta("animationend")
      , Qf = ta("animationiteration")
      , kf = ta("animationstart")
      , hv = ta("transitionrun")
      , dv = ta("transitionstart")
      , mv = ta("transitioncancel")
      , Jf = ta("transitionend")
      , Ff = new Map
      , Hu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Hu.push("scrollEnd");
    function qe(t, e) {
        Ff.set(t, e),
        Pn(e, [t])
    }
    var ql = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , we = []
      , Ra = 0
      , Yu = 0;
    function Gl() {
        for (var t = Ra, e = Yu = Ra = 0; e < t; ) {
            var n = we[e];
            we[e++] = null;
            var i = we[e];
            we[e++] = null;
            var s = we[e];
            we[e++] = null;
            var r = we[e];
            if (we[e++] = null,
            i !== null && s !== null) {
                var f = i.pending;
                f === null ? s.next = s : (s.next = f.next,
                f.next = s),
                i.pending = s
            }
            r !== 0 && Wf(n, s, r)
        }
    }
    function Xl(t, e, n, i) {
        we[Ra++] = t,
        we[Ra++] = e,
        we[Ra++] = n,
        we[Ra++] = i,
        Yu |= i,
        t.lanes |= i,
        t = t.alternate,
        t !== null && (t.lanes |= i)
    }
    function qu(t, e, n, i) {
        return Xl(t, e, n, i),
        Kl(t)
    }
    function ea(t, e) {
        return Xl(t, null, null, e),
        Kl(t)
    }
    function Wf(t, e, n) {
        t.lanes |= n;
        var i = t.alternate;
        i !== null && (i.lanes |= n);
        for (var s = !1, r = t.return; r !== null; )
            r.childLanes |= n,
            i = r.alternate,
            i !== null && (i.childLanes |= n),
            r.tag === 22 && (t = r.stateNode,
            t === null || t._visibility & 1 || (s = !0)),
            t = r,
            r = r.return;
        return t.tag === 3 ? (r = t.stateNode,
        s && e !== null && (s = 31 - be(n),
        t = r.hiddenUpdates,
        i = t[s],
        i === null ? t[s] = [e] : i.push(e),
        e.lane = n | 536870912),
        r) : null
    }
    function Kl(t) {
        if (50 < Pi)
            throw Pi = 0,
            Po = null,
            Error(o(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Oa = {};
    function pv(t, e, n, i) {
        this.tag = t,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = i,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Se(t, e, n, i) {
        return new pv(t,e,n,i)
    }
    function Gu(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function nn(t, e) {
        var n = t.alternate;
        return n === null ? (n = Se(t.tag, e, t.key, t.mode),
        n.elementType = t.elementType,
        n.type = t.type,
        n.stateNode = t.stateNode,
        n.alternate = t,
        t.alternate = n) : (n.pendingProps = e,
        n.type = t.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = t.flags & 65011712,
        n.childLanes = t.childLanes,
        n.lanes = t.lanes,
        n.child = t.child,
        n.memoizedProps = t.memoizedProps,
        n.memoizedState = t.memoizedState,
        n.updateQueue = t.updateQueue,
        e = t.dependencies,
        n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        n.sibling = t.sibling,
        n.index = t.index,
        n.ref = t.ref,
        n.refCleanup = t.refCleanup,
        n
    }
    function Pf(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = n.childLanes,
        t.lanes = n.lanes,
        t.child = n.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = n.memoizedProps,
        t.memoizedState = n.memoizedState,
        t.updateQueue = n.updateQueue,
        t.type = n.type,
        e = n.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function Zl(t, e, n, i, s, r) {
        var f = 0;
        if (i = t,
        typeof t == "function")
            Gu(t) && (f = 1);
        else if (typeof t == "string")
            f = x1(t, n, k.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case bt:
                return t = Se(31, n, e, s),
                t.elementType = bt,
                t.lanes = r,
                t;
            case B:
                return na(n.children, s, r, e);
            case Y:
                f = 8,
                s |= 24;
                break;
            case H:
                return t = Se(12, n, e, s | 2),
                t.elementType = H,
                t.lanes = r,
                t;
            case J:
                return t = Se(13, n, e, s),
                t.elementType = J,
                t.lanes = r,
                t;
            case I:
                return t = Se(19, n, e, s),
                t.elementType = I,
                t.lanes = r,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case G:
                        f = 10;
                        break t;
                    case Z:
                        f = 9;
                        break t;
                    case et:
                        f = 11;
                        break t;
                    case K:
                        f = 14;
                        break t;
                    case P:
                        f = 16,
                        i = null;
                        break t
                    }
                f = 29,
                n = Error(o(130, t === null ? "null" : typeof t, "")),
                i = null
            }
        return e = Se(f, n, e, s),
        e.elementType = t,
        e.type = i,
        e.lanes = r,
        e
    }
    function na(t, e, n, i) {
        return t = Se(7, t, i, e),
        t.lanes = n,
        t
    }
    function Xu(t, e, n) {
        return t = Se(6, t, null, e),
        t.lanes = n,
        t
    }
    function $f(t) {
        var e = Se(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function Ku(t, e, n) {
        return e = Se(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = n,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var If = new WeakMap;
    function Ne(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = If.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: Pc(e)
            },
            If.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: Pc(e)
        }
    }
    var _a = []
      , Va = 0
      , Ql = null
      , wi = 0
      , Re = []
      , Oe = 0
      , An = null
      , Qe = 1
      , ke = "";
    function an(t, e) {
        _a[Va++] = wi,
        _a[Va++] = Ql,
        Ql = t,
        wi = e
    }
    function th(t, e, n) {
        Re[Oe++] = Qe,
        Re[Oe++] = ke,
        Re[Oe++] = An,
        An = t;
        var i = Qe;
        t = ke;
        var s = 32 - be(i) - 1;
        i &= ~(1 << s),
        n += 1;
        var r = 32 - be(e) + s;
        if (30 < r) {
            var f = s - s % 5;
            r = (i & (1 << f) - 1).toString(32),
            i >>= f,
            s -= f,
            Qe = 1 << 32 - be(e) + s | n << s | i,
            ke = r + t
        } else
            Qe = 1 << r | n << s | i,
            ke = t
    }
    function Zu(t) {
        t.return !== null && (an(t, 1),
        th(t, 1, 0))
    }
    function Qu(t) {
        for (; t === Ql; )
            Ql = _a[--Va],
            _a[Va] = null,
            wi = _a[--Va],
            _a[Va] = null;
        for (; t === An; )
            An = Re[--Oe],
            Re[Oe] = null,
            ke = Re[--Oe],
            Re[Oe] = null,
            Qe = Re[--Oe],
            Re[Oe] = null
    }
    function eh(t, e) {
        Re[Oe++] = Qe,
        Re[Oe++] = ke,
        Re[Oe++] = An,
        Qe = e.id,
        ke = e.overflow,
        An = t
    }
    var Pt = null
      , Dt = null
      , dt = !1
      , En = null
      , _e = !1
      , ku = Error(o(519));
    function Mn(t) {
        var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Ni(Ne(e, t)),
        ku
    }
    function nh(t) {
        var e = t.stateNode
          , n = t.type
          , i = t.memoizedProps;
        switch (e[Wt] = t,
        e[oe] = i,
        n) {
        case "dialog":
            rt("cancel", e),
            rt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            rt("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Ii.length; n++)
                rt(Ii[n], e);
            break;
        case "source":
            rt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            rt("error", e),
            rt("load", e);
            break;
        case "details":
            rt("toggle", e);
            break;
        case "input":
            rt("invalid", e),
            pf(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0);
            break;
        case "select":
            rt("invalid", e);
            break;
        case "textarea":
            rt("invalid", e),
            gf(e, i.value, i.defaultValue, i.children)
        }
        n = i.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || bm(e.textContent, n) ? (i.popover != null && (rt("beforetoggle", e),
        rt("toggle", e)),
        i.onScroll != null && rt("scroll", e),
        i.onScrollEnd != null && rt("scrollend", e),
        i.onClick != null && (e.onclick = tn),
        e = !0) : e = !1,
        e || Mn(t, !0)
    }
    function ah(t) {
        for (Pt = t.return; Pt; )
            switch (Pt.tag) {
            case 5:
            case 31:
            case 13:
                _e = !1;
                return;
            case 27:
            case 3:
                _e = !0;
                return;
            default:
                Pt = Pt.return
            }
    }
    function Ua(t) {
        if (t !== Pt)
            return !1;
        if (!dt)
            return ah(t),
            dt = !0,
            !1;
        var e = t.tag, n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type,
        n = !(n !== "form" && n !== "button") || hr(t.type, t.memoizedProps)),
        n = !n),
        n && Dt && Mn(t),
        ah(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            Dt = zm(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            Dt = zm(t)
        } else
            e === 27 ? (e = Dt,
            Hn(t.type) ? (t = gr,
            gr = null,
            Dt = t) : Dt = e) : Dt = Pt ? Ue(t.stateNode.nextSibling) : null;
        return !0
    }
    function aa() {
        Dt = Pt = null,
        dt = !1
    }
    function Ju() {
        var t = En;
        return t !== null && (de === null ? de = t : de.push.apply(de, t),
        En = null),
        t
    }
    function Ni(t) {
        En === null ? En = [t] : En.push(t)
    }
    var Fu = E(null)
      , ia = null
      , ln = null;
    function Dn(t, e, n) {
        X(Fu, e._currentValue),
        e._currentValue = n
    }
    function sn(t) {
        t._currentValue = Fu.current,
        V(Fu)
    }
    function Wu(t, e, n) {
        for (; t !== null; ) {
            var i = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
            t === n)
                break;
            t = t.return
        }
    }
    function Pu(t, e, n, i) {
        var s = t.child;
        for (s !== null && (s.return = t); s !== null; ) {
            var r = s.dependencies;
            if (r !== null) {
                var f = s.child;
                r = r.firstContext;
                t: for (; r !== null; ) {
                    var g = r;
                    r = s;
                    for (var x = 0; x < e.length; x++)
                        if (g.context === e[x]) {
                            r.lanes |= n,
                            g = r.alternate,
                            g !== null && (g.lanes |= n),
                            Wu(r.return, n, t),
                            i || (f = null);
                            break t
                        }
                    r = g.next
                }
            } else if (s.tag === 18) {
                if (f = s.return,
                f === null)
                    throw Error(o(341));
                f.lanes |= n,
                r = f.alternate,
                r !== null && (r.lanes |= n),
                Wu(f, n, t),
                f = null
            } else
                f = s.child;
            if (f !== null)
                f.return = s;
            else
                for (f = s; f !== null; ) {
                    if (f === t) {
                        f = null;
                        break
                    }
                    if (s = f.sibling,
                    s !== null) {
                        s.return = f.return,
                        f = s;
                        break
                    }
                    f = f.return
                }
            s = f
        }
    }
    function Ba(t, e, n, i) {
        t = null;
        for (var s = e, r = !1; s !== null; ) {
            if (!r) {
                if ((s.flags & 524288) !== 0)
                    r = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var f = s.alternate;
                if (f === null)
                    throw Error(o(387));
                if (f = f.memoizedProps,
                f !== null) {
                    var g = s.type;
                    xe(s.pendingProps.value, f.value) || (t !== null ? t.push(g) : t = [g])
                }
            } else if (s === vt.current) {
                if (f = s.alternate,
                f === null)
                    throw Error(o(387));
                f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(il) : t = [il])
            }
            s = s.return
        }
        t !== null && Pu(e, t, n, i),
        e.flags |= 262144
    }
    function kl(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!xe(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function la(t) {
        ia = t,
        ln = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function $t(t) {
        return ih(ia, t)
    }
    function Jl(t, e) {
        return ia === null && la(t),
        ih(t, e)
    }
    function ih(t, e) {
        var n = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        ln === null) {
            if (t === null)
                throw Error(o(308));
            ln = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            ln = ln.next = e;
        return n
    }
    var yv = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(n, i) {
                t.push(i)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(n) {
                return n()
            })
        }
    }
      , gv = a.unstable_scheduleCallback
      , vv = a.unstable_NormalPriority
      , Ht = {
        $$typeof: G,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function $u() {
        return {
            controller: new yv,
            data: new Map,
            refCount: 0
        }
    }
    function Ri(t) {
        t.refCount--,
        t.refCount === 0 && gv(vv, function() {
            t.controller.abort()
        })
    }
    var Oi = null
      , Iu = 0
      , La = 0
      , Ha = null;
    function bv(t, e) {
        if (Oi === null) {
            var n = Oi = [];
            Iu = 0,
            La = ar(),
            Ha = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    n.push(i)
                }
            }
        }
        return Iu++,
        e.then(lh, lh),
        e
    }
    function lh() {
        if (--Iu === 0 && Oi !== null) {
            Ha !== null && (Ha.status = "fulfilled");
            var t = Oi;
            Oi = null,
            La = 0,
            Ha = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function xv(t, e) {
        var n = []
          , i = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                n.push(s)
            }
        };
        return t.then(function() {
            i.status = "fulfilled",
            i.value = e;
            for (var s = 0; s < n.length; s++)
                (0,
                n[s])(e)
        }, function(s) {
            for (i.status = "rejected",
            i.reason = s,
            s = 0; s < n.length; s++)
                (0,
                n[s])(void 0)
        }),
        i
    }
    var sh = R.S;
    R.S = function(t, e) {
        Xd = ge(),
        typeof e == "object" && e !== null && typeof e.then == "function" && bv(t, e),
        sh !== null && sh(t, e)
    }
    ;
    var sa = E(null);
    function to() {
        var t = sa.current;
        return t !== null ? t : Mt.pooledCache
    }
    function Fl(t, e) {
        e === null ? X(sa, sa.current) : X(sa, e.pool)
    }
    function uh() {
        var t = to();
        return t === null ? null : {
            parent: Ht._currentValue,
            pool: t
        }
    }
    var Ya = Error(o(460))
      , eo = Error(o(474))
      , Wl = Error(o(542))
      , Pl = {
        then: function() {}
    };
    function oh(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function rh(t, e, n) {
        switch (n = t[n],
        n === void 0 ? t.push(e) : n !== e && (e.then(tn, tn),
        e = n),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            fh(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(tn, tn);
            else {
                if (t = Mt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(o(482));
                t = e,
                t.status = "pending",
                t.then(function(i) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "fulfilled",
                        s.value = i
                    }
                }, function(i) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "rejected",
                        s.reason = i
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                fh(t),
                t
            }
            throw oa = e,
            Ya
        }
    }
    function ua(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (oa = n,
            Ya) : n
        }
    }
    var oa = null;
    function ch() {
        if (oa === null)
            throw Error(o(459));
        var t = oa;
        return oa = null,
        t
    }
    function fh(t) {
        if (t === Ya || t === Wl)
            throw Error(o(483))
    }
    var qa = null
      , _i = 0;
    function $l(t) {
        var e = _i;
        return _i += 1,
        qa === null && (qa = []),
        rh(qa, t, e)
    }
    function Vi(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function Il(t, e) {
        throw e.$$typeof === T ? Error(o(525)) : (t = Object.prototype.toString.call(e),
        Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function hh(t) {
        function e(M, A) {
            if (t) {
                var D = M.deletions;
                D === null ? (M.deletions = [A],
                M.flags |= 16) : D.push(A)
            }
        }
        function n(M, A) {
            if (!t)
                return null;
            for (; A !== null; )
                e(M, A),
                A = A.sibling;
            return null
        }
        function i(M) {
            for (var A = new Map; M !== null; )
                M.key !== null ? A.set(M.key, M) : A.set(M.index, M),
                M = M.sibling;
            return A
        }
        function s(M, A) {
            return M = nn(M, A),
            M.index = 0,
            M.sibling = null,
            M
        }
        function r(M, A, D) {
            return M.index = D,
            t ? (D = M.alternate,
            D !== null ? (D = D.index,
            D < A ? (M.flags |= 67108866,
            A) : D) : (M.flags |= 67108866,
            A)) : (M.flags |= 1048576,
            A)
        }
        function f(M) {
            return t && M.alternate === null && (M.flags |= 67108866),
            M
        }
        function g(M, A, D, O) {
            return A === null || A.tag !== 6 ? (A = Xu(D, M.mode, O),
            A.return = M,
            A) : (A = s(A, D),
            A.return = M,
            A)
        }
        function x(M, A, D, O) {
            var $ = D.type;
            return $ === B ? N(M, A, D.props.children, O, D.key) : A !== null && (A.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === P && ua($) === A.type) ? (A = s(A, D.props),
            Vi(A, D),
            A.return = M,
            A) : (A = Zl(D.type, D.key, D.props, null, M.mode, O),
            Vi(A, D),
            A.return = M,
            A)
        }
        function C(M, A, D, O) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== D.containerInfo || A.stateNode.implementation !== D.implementation ? (A = Ku(D, M.mode, O),
            A.return = M,
            A) : (A = s(A, D.children || []),
            A.return = M,
            A)
        }
        function N(M, A, D, O, $) {
            return A === null || A.tag !== 7 ? (A = na(D, M.mode, O, $),
            A.return = M,
            A) : (A = s(A, D),
            A.return = M,
            A)
        }
        function _(M, A, D) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return A = Xu("" + A, M.mode, D),
                A.return = M,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case w:
                    return D = Zl(A.type, A.key, A.props, null, M.mode, D),
                    Vi(D, A),
                    D.return = M,
                    D;
                case U:
                    return A = Ku(A, M.mode, D),
                    A.return = M,
                    A;
                case P:
                    return A = ua(A),
                    _(M, A, D)
                }
                if (ue(A) || Ft(A))
                    return A = na(A, M.mode, D, null),
                    A.return = M,
                    A;
                if (typeof A.then == "function")
                    return _(M, $l(A), D);
                if (A.$$typeof === G)
                    return _(M, Jl(M, A), D);
                Il(M, A)
            }
            return null
        }
        function z(M, A, D, O) {
            var $ = A !== null ? A.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
                return $ !== null ? null : g(M, A, "" + D, O);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case w:
                    return D.key === $ ? x(M, A, D, O) : null;
                case U:
                    return D.key === $ ? C(M, A, D, O) : null;
                case P:
                    return D = ua(D),
                    z(M, A, D, O)
                }
                if (ue(D) || Ft(D))
                    return $ !== null ? null : N(M, A, D, O, null);
                if (typeof D.then == "function")
                    return z(M, A, $l(D), O);
                if (D.$$typeof === G)
                    return z(M, A, Jl(M, D), O);
                Il(M, D)
            }
            return null
        }
        function j(M, A, D, O, $) {
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
                return M = M.get(D) || null,
                g(A, M, "" + O, $);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case w:
                    return M = M.get(O.key === null ? D : O.key) || null,
                    x(A, M, O, $);
                case U:
                    return M = M.get(O.key === null ? D : O.key) || null,
                    C(A, M, O, $);
                case P:
                    return O = ua(O),
                    j(M, A, D, O, $)
                }
                if (ue(O) || Ft(O))
                    return M = M.get(D) || null,
                    N(A, M, O, $, null);
                if (typeof O.then == "function")
                    return j(M, A, D, $l(O), $);
                if (O.$$typeof === G)
                    return j(M, A, D, Jl(A, O), $);
                Il(A, O)
            }
            return null
        }
        function Q(M, A, D, O) {
            for (var $ = null, pt = null, W = A, st = A = 0, ht = null; W !== null && st < D.length; st++) {
                W.index > st ? (ht = W,
                W = null) : ht = W.sibling;
                var yt = z(M, W, D[st], O);
                if (yt === null) {
                    W === null && (W = ht);
                    break
                }
                t && W && yt.alternate === null && e(M, W),
                A = r(yt, A, st),
                pt === null ? $ = yt : pt.sibling = yt,
                pt = yt,
                W = ht
            }
            if (st === D.length)
                return n(M, W),
                dt && an(M, st),
                $;
            if (W === null) {
                for (; st < D.length; st++)
                    W = _(M, D[st], O),
                    W !== null && (A = r(W, A, st),
                    pt === null ? $ = W : pt.sibling = W,
                    pt = W);
                return dt && an(M, st),
                $
            }
            for (W = i(W); st < D.length; st++)
                ht = j(W, M, st, D[st], O),
                ht !== null && (t && ht.alternate !== null && W.delete(ht.key === null ? st : ht.key),
                A = r(ht, A, st),
                pt === null ? $ = ht : pt.sibling = ht,
                pt = ht);
            return t && W.forEach(function(Kn) {
                return e(M, Kn)
            }),
            dt && an(M, st),
            $
        }
        function tt(M, A, D, O) {
            if (D == null)
                throw Error(o(151));
            for (var $ = null, pt = null, W = A, st = A = 0, ht = null, yt = D.next(); W !== null && !yt.done; st++,
            yt = D.next()) {
                W.index > st ? (ht = W,
                W = null) : ht = W.sibling;
                var Kn = z(M, W, yt.value, O);
                if (Kn === null) {
                    W === null && (W = ht);
                    break
                }
                t && W && Kn.alternate === null && e(M, W),
                A = r(Kn, A, st),
                pt === null ? $ = Kn : pt.sibling = Kn,
                pt = Kn,
                W = ht
            }
            if (yt.done)
                return n(M, W),
                dt && an(M, st),
                $;
            if (W === null) {
                for (; !yt.done; st++,
                yt = D.next())
                    yt = _(M, yt.value, O),
                    yt !== null && (A = r(yt, A, st),
                    pt === null ? $ = yt : pt.sibling = yt,
                    pt = yt);
                return dt && an(M, st),
                $
            }
            for (W = i(W); !yt.done; st++,
            yt = D.next())
                yt = j(W, M, st, yt.value, O),
                yt !== null && (t && yt.alternate !== null && W.delete(yt.key === null ? st : yt.key),
                A = r(yt, A, st),
                pt === null ? $ = yt : pt.sibling = yt,
                pt = yt);
            return t && W.forEach(function(N1) {
                return e(M, N1)
            }),
            dt && an(M, st),
            $
        }
        function Et(M, A, D, O) {
            if (typeof D == "object" && D !== null && D.type === B && D.key === null && (D = D.props.children),
            typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case w:
                    t: {
                        for (var $ = D.key; A !== null; ) {
                            if (A.key === $) {
                                if ($ = D.type,
                                $ === B) {
                                    if (A.tag === 7) {
                                        n(M, A.sibling),
                                        O = s(A, D.props.children),
                                        O.return = M,
                                        M = O;
                                        break t
                                    }
                                } else if (A.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === P && ua($) === A.type) {
                                    n(M, A.sibling),
                                    O = s(A, D.props),
                                    Vi(O, D),
                                    O.return = M,
                                    M = O;
                                    break t
                                }
                                n(M, A);
                                break
                            } else
                                e(M, A);
                            A = A.sibling
                        }
                        D.type === B ? (O = na(D.props.children, M.mode, O, D.key),
                        O.return = M,
                        M = O) : (O = Zl(D.type, D.key, D.props, null, M.mode, O),
                        Vi(O, D),
                        O.return = M,
                        M = O)
                    }
                    return f(M);
                case U:
                    t: {
                        for ($ = D.key; A !== null; ) {
                            if (A.key === $)
                                if (A.tag === 4 && A.stateNode.containerInfo === D.containerInfo && A.stateNode.implementation === D.implementation) {
                                    n(M, A.sibling),
                                    O = s(A, D.children || []),
                                    O.return = M,
                                    M = O;
                                    break t
                                } else {
                                    n(M, A);
                                    break
                                }
                            else
                                e(M, A);
                            A = A.sibling
                        }
                        O = Ku(D, M.mode, O),
                        O.return = M,
                        M = O
                    }
                    return f(M);
                case P:
                    return D = ua(D),
                    Et(M, A, D, O)
                }
                if (ue(D))
                    return Q(M, A, D, O);
                if (Ft(D)) {
                    if ($ = Ft(D),
                    typeof $ != "function")
                        throw Error(o(150));
                    return D = $.call(D),
                    tt(M, A, D, O)
                }
                if (typeof D.then == "function")
                    return Et(M, A, $l(D), O);
                if (D.$$typeof === G)
                    return Et(M, A, Jl(M, D), O);
                Il(M, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D,
            A !== null && A.tag === 6 ? (n(M, A.sibling),
            O = s(A, D),
            O.return = M,
            M = O) : (n(M, A),
            O = Xu(D, M.mode, O),
            O.return = M,
            M = O),
            f(M)) : n(M, A)
        }
        return function(M, A, D, O) {
            try {
                _i = 0;
                var $ = Et(M, A, D, O);
                return qa = null,
                $
            } catch (W) {
                if (W === Ya || W === Wl)
                    throw W;
                var pt = Se(29, W, null, M.mode);
                return pt.lanes = O,
                pt.return = M,
                pt
            } finally {}
        }
    }
    var ra = hh(!0)
      , dh = hh(!1)
      , Cn = !1;
    function no(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function ao(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function zn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function jn(t, e, n) {
        var i = t.updateQueue;
        if (i === null)
            return null;
        if (i = i.shared,
        (gt & 2) !== 0) {
            var s = i.pending;
            return s === null ? e.next = e : (e.next = s.next,
            s.next = e),
            i.pending = e,
            e = Kl(t),
            Wf(t, null, n),
            e
        }
        return Xl(t, i, e, n),
        Kl(t)
    }
    function Ui(t, e, n) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (n & 4194048) !== 0)) {
            var i = e.lanes;
            i &= t.pendingLanes,
            n |= i,
            e.lanes = n,
            af(t, n)
        }
    }
    function io(t, e) {
        var n = t.updateQueue
          , i = t.alternate;
        if (i !== null && (i = i.updateQueue,
        n === i)) {
            var s = null
              , r = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var f = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    r === null ? s = r = f : r = r.next = f,
                    n = n.next
                } while (n !== null);
                r === null ? s = r = e : r = r.next = e
            } else
                s = r = e;
            n = {
                baseState: i.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: r,
                shared: i.shared,
                callbacks: i.callbacks
            },
            t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate,
        t === null ? n.firstBaseUpdate = e : t.next = e,
        n.lastBaseUpdate = e
    }
    var lo = !1;
    function Bi() {
        if (lo) {
            var t = Ha;
            if (t !== null)
                throw t
        }
    }
    function Li(t, e, n, i) {
        lo = !1;
        var s = t.updateQueue;
        Cn = !1;
        var r = s.firstBaseUpdate
          , f = s.lastBaseUpdate
          , g = s.shared.pending;
        if (g !== null) {
            s.shared.pending = null;
            var x = g
              , C = x.next;
            x.next = null,
            f === null ? r = C : f.next = C,
            f = x;
            var N = t.alternate;
            N !== null && (N = N.updateQueue,
            g = N.lastBaseUpdate,
            g !== f && (g === null ? N.firstBaseUpdate = C : g.next = C,
            N.lastBaseUpdate = x))
        }
        if (r !== null) {
            var _ = s.baseState;
            f = 0,
            N = C = x = null,
            g = r;
            do {
                var z = g.lane & -536870913
                  , j = z !== g.lane;
                if (j ? (ft & z) === z : (i & z) === z) {
                    z !== 0 && z === La && (lo = !0),
                    N !== null && (N = N.next = {
                        lane: 0,
                        tag: g.tag,
                        payload: g.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var Q = t
                          , tt = g;
                        z = e;
                        var Et = n;
                        switch (tt.tag) {
                        case 1:
                            if (Q = tt.payload,
                            typeof Q == "function") {
                                _ = Q.call(Et, _, z);
                                break t
                            }
                            _ = Q;
                            break t;
                        case 3:
                            Q.flags = Q.flags & -65537 | 128;
                        case 0:
                            if (Q = tt.payload,
                            z = typeof Q == "function" ? Q.call(Et, _, z) : Q,
                            z == null)
                                break t;
                            _ = b({}, _, z);
                            break t;
                        case 2:
                            Cn = !0
                        }
                    }
                    z = g.callback,
                    z !== null && (t.flags |= 64,
                    j && (t.flags |= 8192),
                    j = s.callbacks,
                    j === null ? s.callbacks = [z] : j.push(z))
                } else
                    j = {
                        lane: z,
                        tag: g.tag,
                        payload: g.payload,
                        callback: g.callback,
                        next: null
                    },
                    N === null ? (C = N = j,
                    x = _) : N = N.next = j,
                    f |= z;
                if (g = g.next,
                g === null) {
                    if (g = s.shared.pending,
                    g === null)
                        break;
                    j = g,
                    g = j.next,
                    j.next = null,
                    s.lastBaseUpdate = j,
                    s.shared.pending = null
                }
            } while (!0);
            N === null && (x = _),
            s.baseState = x,
            s.firstBaseUpdate = C,
            s.lastBaseUpdate = N,
            r === null && (s.shared.lanes = 0),
            _n |= f,
            t.lanes = f,
            t.memoizedState = _
        }
    }
    function mh(t, e) {
        if (typeof t != "function")
            throw Error(o(191, t));
        t.call(e)
    }
    function ph(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null,
            t = 0; t < n.length; t++)
                mh(n[t], e)
    }
    var Ga = E(null)
      , ts = E(0);
    function yh(t, e) {
        t = pn,
        X(ts, t),
        X(Ga, e),
        pn = t | e.baseLanes
    }
    function so() {
        X(ts, pn),
        X(Ga, Ga.current)
    }
    function uo() {
        pn = ts.current,
        V(Ga),
        V(ts)
    }
    var Te = E(null)
      , Ve = null;
    function wn(t) {
        var e = t.alternate;
        X(Bt, Bt.current & 1),
        X(Te, t),
        Ve === null && (e === null || Ga.current !== null || e.memoizedState !== null) && (Ve = t)
    }
    function oo(t) {
        X(Bt, Bt.current),
        X(Te, t),
        Ve === null && (Ve = t)
    }
    function gh(t) {
        t.tag === 22 ? (X(Bt, Bt.current),
        X(Te, t),
        Ve === null && (Ve = t)) : Nn()
    }
    function Nn() {
        X(Bt, Bt.current),
        X(Te, Te.current)
    }
    function Ae(t) {
        V(Te),
        Ve === t && (Ve = null),
        V(Bt)
    }
    var Bt = E(0);
    function es(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || pr(n) || yr(n)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var un = 0
      , lt = null
      , Tt = null
      , Yt = null
      , ns = !1
      , Xa = !1
      , ca = !1
      , as = 0
      , Hi = 0
      , Ka = null
      , Sv = 0;
    function Ot() {
        throw Error(o(321))
    }
    function ro(t, e) {
        if (e === null)
            return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!xe(t[n], e[n]))
                return !1;
        return !0
    }
    function co(t, e, n, i, s, r) {
        return un = r,
        lt = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        R.H = t === null || t.memoizedState === null ? td : Do,
        ca = !1,
        r = n(i, s),
        ca = !1,
        Xa && (r = bh(e, n, i, s)),
        vh(t),
        r
    }
    function vh(t) {
        R.H = Gi;
        var e = Tt !== null && Tt.next !== null;
        if (un = 0,
        Yt = Tt = lt = null,
        ns = !1,
        Hi = 0,
        Ka = null,
        e)
            throw Error(o(300));
        t === null || qt || (t = t.dependencies,
        t !== null && kl(t) && (qt = !0))
    }
    function bh(t, e, n, i) {
        lt = t;
        var s = 0;
        do {
            if (Xa && (Ka = null),
            Hi = 0,
            Xa = !1,
            25 <= s)
                throw Error(o(301));
            if (s += 1,
            Yt = Tt = null,
            t.updateQueue != null) {
                var r = t.updateQueue;
                r.lastEffect = null,
                r.events = null,
                r.stores = null,
                r.memoCache != null && (r.memoCache.index = 0)
            }
            R.H = ed,
            r = e(n, i)
        } while (Xa);
        return r
    }
    function Tv() {
        var t = R.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? Yi(e) : e,
        t = t.useState()[0],
        (Tt !== null ? Tt.memoizedState : null) !== t && (lt.flags |= 1024),
        e
    }
    function fo() {
        var t = as !== 0;
        return as = 0,
        t
    }
    function ho(t, e, n) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~n
    }
    function mo(t) {
        if (ns) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            ns = !1
        }
        un = 0,
        Yt = Tt = lt = null,
        Xa = !1,
        Hi = as = 0,
        Ka = null
    }
    function le() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Yt === null ? lt.memoizedState = Yt = t : Yt = Yt.next = t,
        Yt
    }
    function Lt() {
        if (Tt === null) {
            var t = lt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = Tt.next;
        var e = Yt === null ? lt.memoizedState : Yt.next;
        if (e !== null)
            Yt = e,
            Tt = t;
        else {
            if (t === null)
                throw lt.alternate === null ? Error(o(467)) : Error(o(310));
            Tt = t,
            t = {
                memoizedState: Tt.memoizedState,
                baseState: Tt.baseState,
                baseQueue: Tt.baseQueue,
                queue: Tt.queue,
                next: null
            },
            Yt === null ? lt.memoizedState = Yt = t : Yt = Yt.next = t
        }
        return Yt
    }
    function is() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Yi(t) {
        var e = Hi;
        return Hi += 1,
        Ka === null && (Ka = []),
        t = rh(Ka, t, e),
        e = lt,
        (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate,
        R.H = e === null || e.memoizedState === null ? td : Do),
        t
    }
    function ls(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return Yi(t);
            if (t.$$typeof === G)
                return $t(t)
        }
        throw Error(o(438, String(t)))
    }
    function po(t) {
        var e = null
          , n = lt.updateQueue;
        if (n !== null && (e = n.memoCache),
        e == null) {
            var i = lt.alternate;
            i !== null && (i = i.updateQueue,
            i !== null && (i = i.memoCache,
            i != null && (e = {
                data: i.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        n === null && (n = is(),
        lt.updateQueue = n),
        n.memoCache = e,
        n = e.data[e.index],
        n === void 0)
            for (n = e.data[e.index] = Array(t),
            i = 0; i < t; i++)
                n[i] = Rt;
        return e.index++,
        n
    }
    function on(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function ss(t) {
        var e = Lt();
        return yo(e, Tt, t)
    }
    function yo(t, e, n) {
        var i = t.queue;
        if (i === null)
            throw Error(o(311));
        i.lastRenderedReducer = n;
        var s = t.baseQueue
          , r = i.pending;
        if (r !== null) {
            if (s !== null) {
                var f = s.next;
                s.next = r.next,
                r.next = f
            }
            e.baseQueue = s = r,
            i.pending = null
        }
        if (r = t.baseState,
        s === null)
            t.memoizedState = r;
        else {
            e = s.next;
            var g = f = null
              , x = null
              , C = e
              , N = !1;
            do {
                var _ = C.lane & -536870913;
                if (_ !== C.lane ? (ft & _) === _ : (un & _) === _) {
                    var z = C.revertLane;
                    if (z === 0)
                        x !== null && (x = x.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: C.action,
                            hasEagerState: C.hasEagerState,
                            eagerState: C.eagerState,
                            next: null
                        }),
                        _ === La && (N = !0);
                    else if ((un & z) === z) {
                        C = C.next,
                        z === La && (N = !0);
                        continue
                    } else
                        _ = {
                            lane: 0,
                            revertLane: C.revertLane,
                            gesture: null,
                            action: C.action,
                            hasEagerState: C.hasEagerState,
                            eagerState: C.eagerState,
                            next: null
                        },
                        x === null ? (g = x = _,
                        f = r) : x = x.next = _,
                        lt.lanes |= z,
                        _n |= z;
                    _ = C.action,
                    ca && n(r, _),
                    r = C.hasEagerState ? C.eagerState : n(r, _)
                } else
                    z = {
                        lane: _,
                        revertLane: C.revertLane,
                        gesture: C.gesture,
                        action: C.action,
                        hasEagerState: C.hasEagerState,
                        eagerState: C.eagerState,
                        next: null
                    },
                    x === null ? (g = x = z,
                    f = r) : x = x.next = z,
                    lt.lanes |= _,
                    _n |= _;
                C = C.next
            } while (C !== null && C !== e);
            if (x === null ? f = r : x.next = g,
            !xe(r, t.memoizedState) && (qt = !0,
            N && (n = Ha,
            n !== null)))
                throw n;
            t.memoizedState = r,
            t.baseState = f,
            t.baseQueue = x,
            i.lastRenderedState = r
        }
        return s === null && (i.lanes = 0),
        [t.memoizedState, i.dispatch]
    }
    function go(t) {
        var e = Lt()
          , n = e.queue;
        if (n === null)
            throw Error(o(311));
        n.lastRenderedReducer = t;
        var i = n.dispatch
          , s = n.pending
          , r = e.memoizedState;
        if (s !== null) {
            n.pending = null;
            var f = s = s.next;
            do
                r = t(r, f.action),
                f = f.next;
            while (f !== s);
            xe(r, e.memoizedState) || (qt = !0),
            e.memoizedState = r,
            e.baseQueue === null && (e.baseState = r),
            n.lastRenderedState = r
        }
        return [r, i]
    }
    function xh(t, e, n) {
        var i = lt
          , s = Lt()
          , r = dt;
        if (r) {
            if (n === void 0)
                throw Error(o(407));
            n = n()
        } else
            n = e();
        var f = !xe((Tt || s).memoizedState, n);
        if (f && (s.memoizedState = n,
        qt = !0),
        s = s.queue,
        xo(Ah.bind(null, i, s, t), [t]),
        s.getSnapshot !== e || f || Yt !== null && Yt.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            Za(9, {
                destroy: void 0
            }, Th.bind(null, i, s, n, e), null),
            Mt === null)
                throw Error(o(349));
            r || (un & 127) !== 0 || Sh(i, e, n)
        }
        return n
    }
    function Sh(t, e, n) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: n
        },
        e = lt.updateQueue,
        e === null ? (e = is(),
        lt.updateQueue = e,
        e.stores = [t]) : (n = e.stores,
        n === null ? e.stores = [t] : n.push(t))
    }
    function Th(t, e, n, i) {
        e.value = n,
        e.getSnapshot = i,
        Eh(e) && Mh(t)
    }
    function Ah(t, e, n) {
        return n(function() {
            Eh(e) && Mh(t)
        })
    }
    function Eh(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !xe(t, n)
        } catch {
            return !0
        }
    }
    function Mh(t) {
        var e = ea(t, 2);
        e !== null && me(e, t, 2)
    }
    function vo(t) {
        var e = le();
        if (typeof t == "function") {
            var n = t;
            if (t = n(),
            ca) {
                xn(!0);
                try {
                    n()
                } finally {
                    xn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: on,
            lastRenderedState: t
        },
        e
    }
    function Dh(t, e, n, i) {
        return t.baseState = n,
        yo(t, Tt, typeof i == "function" ? i : on)
    }
    function Av(t, e, n, i, s) {
        if (rs(t))
            throw Error(o(485));
        if (t = e.action,
        t !== null) {
            var r = {
                payload: s,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(f) {
                    r.listeners.push(f)
                }
            };
            R.T !== null ? n(!0) : r.isTransition = !1,
            i(r),
            n = e.pending,
            n === null ? (r.next = e.pending = r,
            Ch(e, r)) : (r.next = n.next,
            e.pending = n.next = r)
        }
    }
    function Ch(t, e) {
        var n = e.action
          , i = e.payload
          , s = t.state;
        if (e.isTransition) {
            var r = R.T
              , f = {};
            R.T = f;
            try {
                var g = n(s, i)
                  , x = R.S;
                x !== null && x(f, g),
                zh(t, e, g)
            } catch (C) {
                bo(t, e, C)
            } finally {
                r !== null && f.types !== null && (r.types = f.types),
                R.T = r
            }
        } else
            try {
                r = n(s, i),
                zh(t, e, r)
            } catch (C) {
                bo(t, e, C)
            }
    }
    function zh(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
            jh(t, e, i)
        }, function(i) {
            return bo(t, e, i)
        }) : jh(t, e, n)
    }
    function jh(t, e, n) {
        e.status = "fulfilled",
        e.value = n,
        wh(e),
        t.state = n,
        e = t.pending,
        e !== null && (n = e.next,
        n === e ? t.pending = null : (n = n.next,
        e.next = n,
        Ch(t, n)))
    }
    function bo(t, e, n) {
        var i = t.pending;
        if (t.pending = null,
        i !== null) {
            i = i.next;
            do
                e.status = "rejected",
                e.reason = n,
                wh(e),
                e = e.next;
            while (e !== i)
        }
        t.action = null
    }
    function wh(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function Nh(t, e) {
        return e
    }
    function Rh(t, e) {
        if (dt) {
            var n = Mt.formState;
            if (n !== null) {
                t: {
                    var i = lt;
                    if (dt) {
                        if (Dt) {
                            e: {
                                for (var s = Dt, r = _e; s.nodeType !== 8; ) {
                                    if (!r) {
                                        s = null;
                                        break e
                                    }
                                    if (s = Ue(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                r = s.data,
                                s = r === "F!" || r === "F" ? s : null
                            }
                            if (s) {
                                Dt = Ue(s.nextSibling),
                                i = s.data === "F!";
                                break t
                            }
                        }
                        Mn(i)
                    }
                    i = !1
                }
                i && (e = n[0])
            }
        }
        return n = le(),
        n.memoizedState = n.baseState = e,
        i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Nh,
            lastRenderedState: e
        },
        n.queue = i,
        n = Ph.bind(null, lt, i),
        i.dispatch = n,
        i = vo(!1),
        r = Mo.bind(null, lt, !1, i.queue),
        i = le(),
        s = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        i.queue = s,
        n = Av.bind(null, lt, s, r, n),
        s.dispatch = n,
        i.memoizedState = t,
        [e, n, !1]
    }
    function Oh(t) {
        var e = Lt();
        return _h(e, Tt, t)
    }
    function _h(t, e, n) {
        if (e = yo(t, e, Nh)[0],
        t = ss(on)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var i = Yi(e)
            } catch (f) {
                throw f === Ya ? Wl : f
            }
        else
            i = e;
        e = Lt();
        var s = e.queue
          , r = s.dispatch;
        return n !== e.memoizedState && (lt.flags |= 2048,
        Za(9, {
            destroy: void 0
        }, Ev.bind(null, s, n), null)),
        [i, r, t]
    }
    function Ev(t, e) {
        t.action = e
    }
    function Vh(t) {
        var e = Lt()
          , n = Tt;
        if (n !== null)
            return _h(e, n, t);
        Lt(),
        e = e.memoizedState,
        n = Lt();
        var i = n.queue.dispatch;
        return n.memoizedState = t,
        [e, i, !1]
    }
    function Za(t, e, n, i) {
        return t = {
            tag: t,
            create: n,
            deps: i,
            inst: e,
            next: null
        },
        e = lt.updateQueue,
        e === null && (e = is(),
        lt.updateQueue = e),
        n = e.lastEffect,
        n === null ? e.lastEffect = t.next = t : (i = n.next,
        n.next = t,
        t.next = i,
        e.lastEffect = t),
        t
    }
    function Uh() {
        return Lt().memoizedState
    }
    function us(t, e, n, i) {
        var s = le();
        lt.flags |= t,
        s.memoizedState = Za(1 | e, {
            destroy: void 0
        }, n, i === void 0 ? null : i)
    }
    function os(t, e, n, i) {
        var s = Lt();
        i = i === void 0 ? null : i;
        var r = s.memoizedState.inst;
        Tt !== null && i !== null && ro(i, Tt.memoizedState.deps) ? s.memoizedState = Za(e, r, n, i) : (lt.flags |= t,
        s.memoizedState = Za(1 | e, r, n, i))
    }
    function Bh(t, e) {
        us(8390656, 8, t, e)
    }
    function xo(t, e) {
        os(2048, 8, t, e)
    }
    function Mv(t) {
        lt.flags |= 4;
        var e = lt.updateQueue;
        if (e === null)
            e = is(),
            lt.updateQueue = e,
            e.events = [t];
        else {
            var n = e.events;
            n === null ? e.events = [t] : n.push(t)
        }
    }
    function Lh(t) {
        var e = Lt().memoizedState;
        return Mv({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((gt & 2) !== 0)
                throw Error(o(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function Hh(t, e) {
        return os(4, 2, t, e)
    }
    function Yh(t, e) {
        return os(4, 4, t, e)
    }
    function qh(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Gh(t, e, n) {
        n = n != null ? n.concat([t]) : null,
        os(4, 4, qh.bind(null, e, t), n)
    }
    function So() {}
    function Xh(t, e) {
        var n = Lt();
        e = e === void 0 ? null : e;
        var i = n.memoizedState;
        return e !== null && ro(e, i[1]) ? i[0] : (n.memoizedState = [t, e],
        t)
    }
    function Kh(t, e) {
        var n = Lt();
        e = e === void 0 ? null : e;
        var i = n.memoizedState;
        if (e !== null && ro(e, i[1]))
            return i[0];
        if (i = t(),
        ca) {
            xn(!0);
            try {
                t()
            } finally {
                xn(!1)
            }
        }
        return n.memoizedState = [i, e],
        i
    }
    function To(t, e, n) {
        return n === void 0 || (un & 1073741824) !== 0 && (ft & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n,
        t = Zd(),
        lt.lanes |= t,
        _n |= t,
        n)
    }
    function Zh(t, e, n, i) {
        return xe(n, e) ? n : Ga.current !== null ? (t = To(t, n, i),
        xe(t, e) || (qt = !0),
        t) : (un & 42) === 0 || (un & 1073741824) !== 0 && (ft & 261930) === 0 ? (qt = !0,
        t.memoizedState = n) : (t = Zd(),
        lt.lanes |= t,
        _n |= t,
        e)
    }
    function Qh(t, e, n, i, s) {
        var r = L.p;
        L.p = r !== 0 && 8 > r ? r : 8;
        var f = R.T
          , g = {};
        R.T = g,
        Mo(t, !1, e, n);
        try {
            var x = s()
              , C = R.S;
            if (C !== null && C(g, x),
            x !== null && typeof x == "object" && typeof x.then == "function") {
                var N = xv(x, i);
                qi(t, e, N, De(t))
            } else
                qi(t, e, i, De(t))
        } catch (_) {
            qi(t, e, {
                then: function() {},
                status: "rejected",
                reason: _
            }, De())
        } finally {
            L.p = r,
            f !== null && g.types !== null && (f.types = g.types),
            R.T = f
        }
    }
    function Dv() {}
    function Ao(t, e, n, i) {
        if (t.tag !== 5)
            throw Error(o(476));
        var s = kh(t).queue;
        Qh(t, s, e, F, n === null ? Dv : function() {
            return Jh(t),
            n(i)
        }
        )
    }
    function kh(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: F,
            baseState: F,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: on,
                lastRenderedState: F
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: on,
                lastRenderedState: n
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Jh(t) {
        var e = kh(t);
        e.next === null && (e = t.alternate.memoizedState),
        qi(t, e.next.queue, {}, De())
    }
    function Eo() {
        return $t(il)
    }
    function Fh() {
        return Lt().memoizedState
    }
    function Wh() {
        return Lt().memoizedState
    }
    function Cv(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var n = De();
                t = zn(n);
                var i = jn(e, t, n);
                i !== null && (me(i, e, n),
                Ui(i, e, n)),
                e = {
                    cache: $u()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function zv(t, e, n) {
        var i = De();
        n = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        rs(t) ? $h(e, n) : (n = qu(t, e, n, i),
        n !== null && (me(n, t, i),
        Ih(n, e, i)))
    }
    function Ph(t, e, n) {
        var i = De();
        qi(t, e, n, i)
    }
    function qi(t, e, n, i) {
        var s = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (rs(t))
            $h(e, s);
        else {
            var r = t.alternate;
            if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer,
            r !== null))
                try {
                    var f = e.lastRenderedState
                      , g = r(f, n);
                    if (s.hasEagerState = !0,
                    s.eagerState = g,
                    xe(g, f))
                        return Xl(t, e, s, 0),
                        Mt === null && Gl(),
                        !1
                } catch {} finally {}
            if (n = qu(t, e, s, i),
            n !== null)
                return me(n, t, i),
                Ih(n, e, i),
                !0
        }
        return !1
    }
    function Mo(t, e, n, i) {
        if (i = {
            lane: 2,
            revertLane: ar(),
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        rs(t)) {
            if (e)
                throw Error(o(479))
        } else
            e = qu(t, n, i, 2),
            e !== null && me(e, t, 2)
    }
    function rs(t) {
        var e = t.alternate;
        return t === lt || e !== null && e === lt
    }
    function $h(t, e) {
        Xa = ns = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        t.pending = e
    }
    function Ih(t, e, n) {
        if ((n & 4194048) !== 0) {
            var i = e.lanes;
            i &= t.pendingLanes,
            n |= i,
            e.lanes = n,
            af(t, n)
        }
    }
    var Gi = {
        readContext: $t,
        use: ls,
        useCallback: Ot,
        useContext: Ot,
        useEffect: Ot,
        useImperativeHandle: Ot,
        useLayoutEffect: Ot,
        useInsertionEffect: Ot,
        useMemo: Ot,
        useReducer: Ot,
        useRef: Ot,
        useState: Ot,
        useDebugValue: Ot,
        useDeferredValue: Ot,
        useTransition: Ot,
        useSyncExternalStore: Ot,
        useId: Ot,
        useHostTransitionStatus: Ot,
        useFormState: Ot,
        useActionState: Ot,
        useOptimistic: Ot,
        useMemoCache: Ot,
        useCacheRefresh: Ot
    };
    Gi.useEffectEvent = Ot;
    var td = {
        readContext: $t,
        use: ls,
        useCallback: function(t, e) {
            return le().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: $t,
        useEffect: Bh,
        useImperativeHandle: function(t, e, n) {
            n = n != null ? n.concat([t]) : null,
            us(4194308, 4, qh.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return us(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            us(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = le();
            e = e === void 0 ? null : e;
            var i = t();
            if (ca) {
                xn(!0);
                try {
                    t()
                } finally {
                    xn(!1)
                }
            }
            return n.memoizedState = [i, e],
            i
        },
        useReducer: function(t, e, n) {
            var i = le();
            if (n !== void 0) {
                var s = n(e);
                if (ca) {
                    xn(!0);
                    try {
                        n(e)
                    } finally {
                        xn(!1)
                    }
                }
            } else
                s = e;
            return i.memoizedState = i.baseState = s,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: s
            },
            i.queue = t,
            t = t.dispatch = zv.bind(null, lt, t),
            [i.memoizedState, t]
        },
        useRef: function(t) {
            var e = le();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = vo(t);
            var e = t.queue
              , n = Ph.bind(null, lt, e);
            return e.dispatch = n,
            [t.memoizedState, n]
        },
        useDebugValue: So,
        useDeferredValue: function(t, e) {
            var n = le();
            return To(n, t, e)
        },
        useTransition: function() {
            var t = vo(!1);
            return t = Qh.bind(null, lt, t.queue, !0, !1),
            le().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, n) {
            var i = lt
              , s = le();
            if (dt) {
                if (n === void 0)
                    throw Error(o(407));
                n = n()
            } else {
                if (n = e(),
                Mt === null)
                    throw Error(o(349));
                (ft & 127) !== 0 || Sh(i, e, n)
            }
            s.memoizedState = n;
            var r = {
                value: n,
                getSnapshot: e
            };
            return s.queue = r,
            Bh(Ah.bind(null, i, r, t), [t]),
            i.flags |= 2048,
            Za(9, {
                destroy: void 0
            }, Th.bind(null, i, r, n, e), null),
            n
        },
        useId: function() {
            var t = le()
              , e = Mt.identifierPrefix;
            if (dt) {
                var n = ke
                  , i = Qe;
                n = (i & ~(1 << 32 - be(i) - 1)).toString(32) + n,
                e = "_" + e + "R_" + n,
                n = as++,
                0 < n && (e += "H" + n.toString(32)),
                e += "_"
            } else
                n = Sv++,
                e = "_" + e + "r_" + n.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: Eo,
        useFormState: Rh,
        useActionState: Rh,
        useOptimistic: function(t) {
            var e = le();
            e.memoizedState = e.baseState = t;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = n,
            e = Mo.bind(null, lt, !0, n),
            n.dispatch = e,
            [t, e]
        },
        useMemoCache: po,
        useCacheRefresh: function() {
            return le().memoizedState = Cv.bind(null, lt)
        },
        useEffectEvent: function(t) {
            var e = le()
              , n = {
                impl: t
            };
            return e.memoizedState = n,
            function() {
                if ((gt & 2) !== 0)
                    throw Error(o(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , Do = {
        readContext: $t,
        use: ls,
        useCallback: Xh,
        useContext: $t,
        useEffect: xo,
        useImperativeHandle: Gh,
        useInsertionEffect: Hh,
        useLayoutEffect: Yh,
        useMemo: Kh,
        useReducer: ss,
        useRef: Uh,
        useState: function() {
            return ss(on)
        },
        useDebugValue: So,
        useDeferredValue: function(t, e) {
            var n = Lt();
            return Zh(n, Tt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = ss(on)[0]
              , e = Lt().memoizedState;
            return [typeof t == "boolean" ? t : Yi(t), e]
        },
        useSyncExternalStore: xh,
        useId: Fh,
        useHostTransitionStatus: Eo,
        useFormState: Oh,
        useActionState: Oh,
        useOptimistic: function(t, e) {
            var n = Lt();
            return Dh(n, Tt, t, e)
        },
        useMemoCache: po,
        useCacheRefresh: Wh
    };
    Do.useEffectEvent = Lh;
    var ed = {
        readContext: $t,
        use: ls,
        useCallback: Xh,
        useContext: $t,
        useEffect: xo,
        useImperativeHandle: Gh,
        useInsertionEffect: Hh,
        useLayoutEffect: Yh,
        useMemo: Kh,
        useReducer: go,
        useRef: Uh,
        useState: function() {
            return go(on)
        },
        useDebugValue: So,
        useDeferredValue: function(t, e) {
            var n = Lt();
            return Tt === null ? To(n, t, e) : Zh(n, Tt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = go(on)[0]
              , e = Lt().memoizedState;
            return [typeof t == "boolean" ? t : Yi(t), e]
        },
        useSyncExternalStore: xh,
        useId: Fh,
        useHostTransitionStatus: Eo,
        useFormState: Vh,
        useActionState: Vh,
        useOptimistic: function(t, e) {
            var n = Lt();
            return Tt !== null ? Dh(n, Tt, t, e) : (n.baseState = t,
            [t, n.queue.dispatch])
        },
        useMemoCache: po,
        useCacheRefresh: Wh
    };
    ed.useEffectEvent = Lh;
    function Co(t, e, n, i) {
        e = t.memoizedState,
        n = n(i, e),
        n = n == null ? e : b({}, e, n),
        t.memoizedState = n,
        t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var zo = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var i = De()
              , s = zn(i);
            s.payload = e,
            n != null && (s.callback = n),
            e = jn(t, s, i),
            e !== null && (me(e, t, i),
            Ui(e, t, i))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var i = De()
              , s = zn(i);
            s.tag = 1,
            s.payload = e,
            n != null && (s.callback = n),
            e = jn(t, s, i),
            e !== null && (me(e, t, i),
            Ui(e, t, i))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = De()
              , i = zn(n);
            i.tag = 2,
            e != null && (i.callback = e),
            e = jn(t, i, n),
            e !== null && (me(e, t, n),
            Ui(e, t, n))
        }
    };
    function nd(t, e, n, i, s, r, f) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, r, f) : e.prototype && e.prototype.isPureReactComponent ? !zi(n, i) || !zi(s, r) : !0
    }
    function ad(t, e, n, i) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i),
        e.state !== t && zo.enqueueReplaceState(e, e.state, null)
    }
    function fa(t, e) {
        var n = e;
        if ("ref"in e) {
            n = {};
            for (var i in e)
                i !== "ref" && (n[i] = e[i])
        }
        if (t = t.defaultProps) {
            n === e && (n = b({}, n));
            for (var s in t)
                n[s] === void 0 && (n[s] = t[s])
        }
        return n
    }
    function id(t) {
        ql(t)
    }
    function ld(t) {
        console.error(t)
    }
    function sd(t) {
        ql(t)
    }
    function cs(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    function ud(t, e, n) {
        try {
            var i = t.onCaughtError;
            i(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function jo(t, e, n) {
        return n = zn(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            cs(t, e)
        }
        ,
        n
    }
    function od(t) {
        return t = zn(t),
        t.tag = 3,
        t
    }
    function rd(t, e, n, i) {
        var s = n.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var r = i.value;
            t.payload = function() {
                return s(r)
            }
            ,
            t.callback = function() {
                ud(e, n, i)
            }
        }
        var f = n.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
            ud(e, n, i),
            typeof s != "function" && (Vn === null ? Vn = new Set([this]) : Vn.add(this));
            var g = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: g !== null ? g : ""
            })
        }
        )
    }
    function jv(t, e, n, i, s) {
        if (n.flags |= 32768,
        i !== null && typeof i == "object" && typeof i.then == "function") {
            if (e = n.alternate,
            e !== null && Ba(e, n, s, !0),
            n = Te.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return Ve === null ? Ts() : n.alternate === null && _t === 0 && (_t = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = s,
                    i === Pl ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? n.updateQueue = new Set([i]) : e.add(i),
                    tr(t, i, s)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    i === Pl ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i])
                    },
                    n.updateQueue = e) : (n = e.retryQueue,
                    n === null ? e.retryQueue = new Set([i]) : n.add(i)),
                    tr(t, i, s)),
                    !1
                }
                throw Error(o(435, n.tag))
            }
            return tr(t, i, s),
            Ts(),
            !1
        }
        if (dt)
            return e = Te.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = s,
            i !== ku && (t = Error(o(422), {
                cause: i
            }),
            Ni(Ne(t, n)))) : (i !== ku && (e = Error(o(423), {
                cause: i
            }),
            Ni(Ne(e, n))),
            t = t.current.alternate,
            t.flags |= 65536,
            s &= -s,
            t.lanes |= s,
            i = Ne(i, n),
            s = jo(t.stateNode, i, s),
            io(t, s),
            _t !== 4 && (_t = 2)),
            !1;
        var r = Error(o(520), {
            cause: i
        });
        if (r = Ne(r, n),
        Wi === null ? Wi = [r] : Wi.push(r),
        _t !== 4 && (_t = 2),
        e === null)
            return !0;
        i = Ne(i, n),
        n = e;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                t = s & -s,
                n.lanes |= t,
                t = jo(n.stateNode, i, t),
                io(n, t),
                !1;
            case 1:
                if (e = n.type,
                r = n.stateNode,
                (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Vn === null || !Vn.has(r))))
                    return n.flags |= 65536,
                    s &= -s,
                    n.lanes |= s,
                    s = od(s),
                    rd(s, t, n, i),
                    io(n, s),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var wo = Error(o(461))
      , qt = !1;
    function It(t, e, n, i) {
        e.child = t === null ? dh(e, null, n, i) : ra(e, t.child, n, i)
    }
    function cd(t, e, n, i, s) {
        n = n.render;
        var r = e.ref;
        if ("ref"in i) {
            var f = {};
            for (var g in i)
                g !== "ref" && (f[g] = i[g])
        } else
            f = i;
        return la(e),
        i = co(t, e, n, f, r, s),
        g = fo(),
        t !== null && !qt ? (ho(t, e, s),
        rn(t, e, s)) : (dt && g && Zu(e),
        e.flags |= 1,
        It(t, e, i, s),
        e.child)
    }
    function fd(t, e, n, i, s) {
        if (t === null) {
            var r = n.type;
            return typeof r == "function" && !Gu(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15,
            e.type = r,
            hd(t, e, r, i, s)) : (t = Zl(n.type, null, i, e, e.mode, s),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (r = t.child,
        !Lo(t, s)) {
            var f = r.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : zi,
            n(f, i) && t.ref === e.ref)
                return rn(t, e, s)
        }
        return e.flags |= 1,
        t = nn(r, i),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function hd(t, e, n, i, s) {
        if (t !== null) {
            var r = t.memoizedProps;
            if (zi(r, i) && t.ref === e.ref)
                if (qt = !1,
                e.pendingProps = i = r,
                Lo(t, s))
                    (t.flags & 131072) !== 0 && (qt = !0);
                else
                    return e.lanes = t.lanes,
                    rn(t, e, s)
        }
        return No(t, e, n, i, s)
    }
    function dd(t, e, n, i) {
        var s = i.children
          , r = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        i.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (r = r !== null ? r.baseLanes | n : n,
                t !== null) {
                    for (i = e.child = t.child,
                    s = 0; i !== null; )
                        s = s | i.lanes | i.childLanes,
                        i = i.sibling;
                    i = s & ~r
                } else
                    i = 0,
                    e.child = null;
                return md(t, e, r, n, i)
            }
            if ((n & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Fl(e, r !== null ? r.cachePool : null),
                r !== null ? yh(e, r) : so(),
                gh(e);
            else
                return i = e.lanes = 536870912,
                md(t, e, r !== null ? r.baseLanes | n : n, n, i)
        } else
            r !== null ? (Fl(e, r.cachePool),
            yh(e, r),
            Nn(),
            e.memoizedState = null) : (t !== null && Fl(e, null),
            so(),
            Nn());
        return It(t, e, s, n),
        e.child
    }
    function Xi(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function md(t, e, n, i, s) {
        var r = to();
        return r = r === null ? null : {
            parent: Ht._currentValue,
            pool: r
        },
        e.memoizedState = {
            baseLanes: n,
            cachePool: r
        },
        t !== null && Fl(e, null),
        so(),
        gh(e),
        t !== null && Ba(t, e, i, !0),
        e.childLanes = s,
        null
    }
    function fs(t, e) {
        return e = ds({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function pd(t, e, n) {
        return ra(e, t.child, null, n),
        t = fs(e, e.pendingProps),
        t.flags |= 2,
        Ae(e),
        e.memoizedState = null,
        t
    }
    function wv(t, e, n) {
        var i = e.pendingProps
          , s = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (dt) {
                if (i.mode === "hidden")
                    return t = fs(e, i),
                    e.lanes = 536870912,
                    Xi(null, t);
                if (oo(e),
                (t = Dt) ? (t = Cm(t, _e),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: An !== null ? {
                        id: Qe,
                        overflow: ke
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = $f(t),
                n.return = e,
                e.child = n,
                Pt = e,
                Dt = null)) : t = null,
                t === null)
                    throw Mn(e);
                return e.lanes = 536870912,
                null
            }
            return fs(e, i)
        }
        var r = t.memoizedState;
        if (r !== null) {
            var f = r.dehydrated;
            if (oo(e),
            s)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = pd(t, e, n);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(o(558));
            else if (qt || Ba(t, e, n, !1),
            s = (n & t.childLanes) !== 0,
            qt || s) {
                if (i = Mt,
                i !== null && (f = lf(i, n),
                f !== 0 && f !== r.retryLane))
                    throw r.retryLane = f,
                    ea(t, f),
                    me(i, t, f),
                    wo;
                Ts(),
                e = pd(t, e, n)
            } else
                t = r.treeContext,
                Dt = Ue(f.nextSibling),
                Pt = e,
                dt = !0,
                En = null,
                _e = !1,
                t !== null && eh(e, t),
                e = fs(e, i),
                e.flags |= 4096;
            return e
        }
        return t = nn(t.child, {
            mode: i.mode,
            children: i.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function hs(t, e) {
        var n = e.ref;
        if (n === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(o(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }
    function No(t, e, n, i, s) {
        return la(e),
        n = co(t, e, n, i, void 0, s),
        i = fo(),
        t !== null && !qt ? (ho(t, e, s),
        rn(t, e, s)) : (dt && i && Zu(e),
        e.flags |= 1,
        It(t, e, n, s),
        e.child)
    }
    function yd(t, e, n, i, s, r) {
        return la(e),
        e.updateQueue = null,
        n = bh(e, i, n, s),
        vh(t),
        i = fo(),
        t !== null && !qt ? (ho(t, e, r),
        rn(t, e, r)) : (dt && i && Zu(e),
        e.flags |= 1,
        It(t, e, n, r),
        e.child)
    }
    function gd(t, e, n, i, s) {
        if (la(e),
        e.stateNode === null) {
            var r = Oa
              , f = n.contextType;
            typeof f == "object" && f !== null && (r = $t(f)),
            r = new n(i,r),
            e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
            r.updater = zo,
            e.stateNode = r,
            r._reactInternals = e,
            r = e.stateNode,
            r.props = i,
            r.state = e.memoizedState,
            r.refs = {},
            no(e),
            f = n.contextType,
            r.context = typeof f == "object" && f !== null ? $t(f) : Oa,
            r.state = e.memoizedState,
            f = n.getDerivedStateFromProps,
            typeof f == "function" && (Co(e, n, f, i),
            r.state = e.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state,
            typeof r.componentWillMount == "function" && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
            f !== r.state && zo.enqueueReplaceState(r, r.state, null),
            Li(e, i, r, s),
            Bi(),
            r.state = e.memoizedState),
            typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            i = !0
        } else if (t === null) {
            r = e.stateNode;
            var g = e.memoizedProps
              , x = fa(n, g);
            r.props = x;
            var C = r.context
              , N = n.contextType;
            f = Oa,
            typeof N == "object" && N !== null && (f = $t(N));
            var _ = n.getDerivedStateFromProps;
            N = typeof _ == "function" || typeof r.getSnapshotBeforeUpdate == "function",
            g = e.pendingProps !== g,
            N || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || C !== f) && ad(e, r, i, f),
            Cn = !1;
            var z = e.memoizedState;
            r.state = z,
            Li(e, i, r, s),
            Bi(),
            C = e.memoizedState,
            g || z !== C || Cn ? (typeof _ == "function" && (Co(e, n, _, i),
            C = e.memoizedState),
            (x = Cn || nd(e, n, x, i, z, C, f)) ? (N || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()),
            typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = i,
            e.memoizedState = C),
            r.props = i,
            r.state = C,
            r.context = f,
            i = x) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            i = !1)
        } else {
            r = e.stateNode,
            ao(t, e),
            f = e.memoizedProps,
            N = fa(n, f),
            r.props = N,
            _ = e.pendingProps,
            z = r.context,
            C = n.contextType,
            x = Oa,
            typeof C == "object" && C !== null && (x = $t(C)),
            g = n.getDerivedStateFromProps,
            (C = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== _ || z !== x) && ad(e, r, i, x),
            Cn = !1,
            z = e.memoizedState,
            r.state = z,
            Li(e, i, r, s),
            Bi();
            var j = e.memoizedState;
            f !== _ || z !== j || Cn || t !== null && t.dependencies !== null && kl(t.dependencies) ? (typeof g == "function" && (Co(e, n, g, i),
            j = e.memoizedState),
            (N = Cn || nd(e, n, N, i, z, j, x) || t !== null && t.dependencies !== null && kl(t.dependencies)) ? (C || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, j, x),
            typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(i, j, x)),
            typeof r.componentDidUpdate == "function" && (e.flags |= 4),
            typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && z === t.memoizedState || (e.flags |= 4),
            typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = i,
            e.memoizedState = j),
            r.props = i,
            r.state = j,
            r.context = x,
            i = N) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && z === t.memoizedState || (e.flags |= 4),
            typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024),
            i = !1)
        }
        return r = i,
        hs(t, e),
        i = (e.flags & 128) !== 0,
        r || i ? (r = e.stateNode,
        n = i && typeof n.getDerivedStateFromError != "function" ? null : r.render(),
        e.flags |= 1,
        t !== null && i ? (e.child = ra(e, t.child, null, s),
        e.child = ra(e, null, n, s)) : It(t, e, n, s),
        e.memoizedState = r.state,
        t = e.child) : t = rn(t, e, s),
        t
    }
    function vd(t, e, n, i) {
        return aa(),
        e.flags |= 256,
        It(t, e, n, i),
        e.child
    }
    var Ro = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Oo(t) {
        return {
            baseLanes: t,
            cachePool: uh()
        }
    }
    function _o(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0,
        e && (t |= Me),
        t
    }
    function bd(t, e, n) {
        var i = e.pendingProps, s = !1, r = (e.flags & 128) !== 0, f;
        if ((f = r) || (f = t !== null && t.memoizedState === null ? !1 : (Bt.current & 2) !== 0),
        f && (s = !0,
        e.flags &= -129),
        f = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (dt) {
                if (s ? wn(e) : Nn(),
                (t = Dt) ? (t = Cm(t, _e),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: An !== null ? {
                        id: Qe,
                        overflow: ke
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = $f(t),
                n.return = e,
                e.child = n,
                Pt = e,
                Dt = null)) : t = null,
                t === null)
                    throw Mn(e);
                return yr(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var g = i.children;
            return i = i.fallback,
            s ? (Nn(),
            s = e.mode,
            g = ds({
                mode: "hidden",
                children: g
            }, s),
            i = na(i, s, n, null),
            g.return = e,
            i.return = e,
            g.sibling = i,
            e.child = g,
            i = e.child,
            i.memoizedState = Oo(n),
            i.childLanes = _o(t, f, n),
            e.memoizedState = Ro,
            Xi(null, i)) : (wn(e),
            Vo(e, g))
        }
        var x = t.memoizedState;
        if (x !== null && (g = x.dehydrated,
        g !== null)) {
            if (r)
                e.flags & 256 ? (wn(e),
                e.flags &= -257,
                e = Uo(t, e, n)) : e.memoizedState !== null ? (Nn(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (Nn(),
                g = i.fallback,
                s = e.mode,
                i = ds({
                    mode: "visible",
                    children: i.children
                }, s),
                g = na(g, s, n, null),
                g.flags |= 2,
                i.return = e,
                g.return = e,
                i.sibling = g,
                e.child = i,
                ra(e, t.child, null, n),
                i = e.child,
                i.memoizedState = Oo(n),
                i.childLanes = _o(t, f, n),
                e.memoizedState = Ro,
                e = Xi(null, i));
            else if (wn(e),
            yr(g)) {
                if (f = g.nextSibling && g.nextSibling.dataset,
                f)
                    var C = f.dgst;
                f = C,
                i = Error(o(419)),
                i.stack = "",
                i.digest = f,
                Ni({
                    value: i,
                    source: null,
                    stack: null
                }),
                e = Uo(t, e, n)
            } else if (qt || Ba(t, e, n, !1),
            f = (n & t.childLanes) !== 0,
            qt || f) {
                if (f = Mt,
                f !== null && (i = lf(f, n),
                i !== 0 && i !== x.retryLane))
                    throw x.retryLane = i,
                    ea(t, i),
                    me(f, t, i),
                    wo;
                pr(g) || Ts(),
                e = Uo(t, e, n)
            } else
                pr(g) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = x.treeContext,
                Dt = Ue(g.nextSibling),
                Pt = e,
                dt = !0,
                En = null,
                _e = !1,
                t !== null && eh(e, t),
                e = Vo(e, i.children),
                e.flags |= 4096);
            return e
        }
        return s ? (Nn(),
        g = i.fallback,
        s = e.mode,
        x = t.child,
        C = x.sibling,
        i = nn(x, {
            mode: "hidden",
            children: i.children
        }),
        i.subtreeFlags = x.subtreeFlags & 65011712,
        C !== null ? g = nn(C, g) : (g = na(g, s, n, null),
        g.flags |= 2),
        g.return = e,
        i.return = e,
        i.sibling = g,
        e.child = i,
        Xi(null, i),
        i = e.child,
        g = t.child.memoizedState,
        g === null ? g = Oo(n) : (s = g.cachePool,
        s !== null ? (x = Ht._currentValue,
        s = s.parent !== x ? {
            parent: x,
            pool: x
        } : s) : s = uh(),
        g = {
            baseLanes: g.baseLanes | n,
            cachePool: s
        }),
        i.memoizedState = g,
        i.childLanes = _o(t, f, n),
        e.memoizedState = Ro,
        Xi(t.child, i)) : (wn(e),
        n = t.child,
        t = n.sibling,
        n = nn(n, {
            mode: "visible",
            children: i.children
        }),
        n.return = e,
        n.sibling = null,
        t !== null && (f = e.deletions,
        f === null ? (e.deletions = [t],
        e.flags |= 16) : f.push(t)),
        e.child = n,
        e.memoizedState = null,
        n)
    }
    function Vo(t, e) {
        return e = ds({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function ds(t, e) {
        return t = Se(22, t, null, e),
        t.lanes = 0,
        t
    }
    function Uo(t, e, n) {
        return ra(e, t.child, null, n),
        t = Vo(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function xd(t, e, n) {
        t.lanes |= e;
        var i = t.alternate;
        i !== null && (i.lanes |= e),
        Wu(t.return, e, n)
    }
    function Bo(t, e, n, i, s, r) {
        var f = t.memoizedState;
        f === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: n,
            tailMode: s,
            treeForkCount: r
        } : (f.isBackwards = e,
        f.rendering = null,
        f.renderingStartTime = 0,
        f.last = i,
        f.tail = n,
        f.tailMode = s,
        f.treeForkCount = r)
    }
    function Sd(t, e, n) {
        var i = e.pendingProps
          , s = i.revealOrder
          , r = i.tail;
        i = i.children;
        var f = Bt.current
          , g = (f & 2) !== 0;
        if (g ? (f = f & 1 | 2,
        e.flags |= 128) : f &= 1,
        X(Bt, f),
        It(t, e, i, n),
        i = dt ? wi : 0,
        !g && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && xd(t, n, e);
                else if (t.tag === 19)
                    xd(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (s) {
        case "forwards":
            for (n = e.child,
            s = null; n !== null; )
                t = n.alternate,
                t !== null && es(t) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = e.child,
            e.child = null) : (s = n.sibling,
            n.sibling = null),
            Bo(e, !1, s, n, r, i);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (n = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && es(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = n,
                n = s,
                s = t
            }
            Bo(e, !0, n, null, r, i);
            break;
        case "together":
            Bo(e, !1, null, null, void 0, i);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function rn(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies),
        _n |= e.lanes,
        (n & e.childLanes) === 0)
            if (t !== null) {
                if (Ba(t, e, n, !1),
                (n & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child,
            n = nn(t, t.pendingProps),
            e.child = n,
            n.return = e; t.sibling !== null; )
                t = t.sibling,
                n = n.sibling = nn(t, t.pendingProps),
                n.return = e;
            n.sibling = null
        }
        return e.child
    }
    function Lo(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && kl(t)))
    }
    function Nv(t, e, n) {
        switch (e.tag) {
        case 3:
            ie(e, e.stateNode.containerInfo),
            Dn(e, Ht, t.memoizedState.cache),
            aa();
            break;
        case 27:
        case 5:
            pi(e);
            break;
        case 4:
            ie(e, e.stateNode.containerInfo);
            break;
        case 10:
            Dn(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                oo(e),
                null;
            break;
        case 13:
            var i = e.memoizedState;
            if (i !== null)
                return i.dehydrated !== null ? (wn(e),
                e.flags |= 128,
                null) : (n & e.child.childLanes) !== 0 ? bd(t, e, n) : (wn(e),
                t = rn(t, e, n),
                t !== null ? t.sibling : null);
            wn(e);
            break;
        case 19:
            var s = (t.flags & 128) !== 0;
            if (i = (n & e.childLanes) !== 0,
            i || (Ba(t, e, n, !1),
            i = (n & e.childLanes) !== 0),
            s) {
                if (i)
                    return Sd(t, e, n);
                e.flags |= 128
            }
            if (s = e.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            X(Bt, Bt.current),
            i)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            dd(t, e, n, e.pendingProps);
        case 24:
            Dn(e, Ht, t.memoizedState.cache)
        }
        return rn(t, e, n)
    }
    function Td(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                qt = !0;
            else {
                if (!Lo(t, n) && (e.flags & 128) === 0)
                    return qt = !1,
                    Nv(t, e, n);
                qt = (t.flags & 131072) !== 0
            }
        else
            qt = !1,
            dt && (e.flags & 1048576) !== 0 && th(e, wi, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var i = e.pendingProps;
                if (t = ua(e.elementType),
                e.type = t,
                typeof t == "function")
                    Gu(t) ? (i = fa(t, i),
                    e.tag = 1,
                    e = gd(null, e, t, i, n)) : (e.tag = 0,
                    e = No(null, e, t, i, n));
                else {
                    if (t != null) {
                        var s = t.$$typeof;
                        if (s === et) {
                            e.tag = 11,
                            e = cd(null, e, t, i, n);
                            break t
                        } else if (s === K) {
                            e.tag = 14,
                            e = fd(null, e, t, i, n);
                            break t
                        }
                    }
                    throw e = Ce(t) || t,
                    Error(o(306, e, ""))
                }
            }
            return e;
        case 0:
            return No(t, e, e.type, e.pendingProps, n);
        case 1:
            return i = e.type,
            s = fa(i, e.pendingProps),
            gd(t, e, i, s, n);
        case 3:
            t: {
                if (ie(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(o(387));
                i = e.pendingProps;
                var r = e.memoizedState;
                s = r.element,
                ao(t, e),
                Li(e, i, null, n);
                var f = e.memoizedState;
                if (i = f.cache,
                Dn(e, Ht, i),
                i !== r.cache && Pu(e, [Ht], n, !0),
                Bi(),
                i = f.element,
                r.isDehydrated)
                    if (r = {
                        element: i,
                        isDehydrated: !1,
                        cache: f.cache
                    },
                    e.updateQueue.baseState = r,
                    e.memoizedState = r,
                    e.flags & 256) {
                        e = vd(t, e, i, n);
                        break t
                    } else if (i !== s) {
                        s = Ne(Error(o(424)), e),
                        Ni(s),
                        e = vd(t, e, i, n);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Dt = Ue(t.firstChild),
                        Pt = e,
                        dt = !0,
                        En = null,
                        _e = !0,
                        n = dh(e, null, i, n),
                        e.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    }
                else {
                    if (aa(),
                    i === s) {
                        e = rn(t, e, n);
                        break t
                    }
                    It(t, e, i, n)
                }
                e = e.child
            }
            return e;
        case 26:
            return hs(t, e),
            t === null ? (n = Om(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : dt || (n = e.type,
            t = e.pendingProps,
            i = js(ut.current).createElement(n),
            i[Wt] = e,
            i[oe] = t,
            te(i, n, t),
            kt(i),
            e.stateNode = i) : e.memoizedState = Om(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return pi(e),
            t === null && dt && (i = e.stateNode = wm(e.type, e.pendingProps, ut.current),
            Pt = e,
            _e = !0,
            s = Dt,
            Hn(e.type) ? (gr = s,
            Dt = Ue(i.firstChild)) : Dt = s),
            It(t, e, e.pendingProps.children, n),
            hs(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && dt && ((s = i = Dt) && (i = u1(i, e.type, e.pendingProps, _e),
            i !== null ? (e.stateNode = i,
            Pt = e,
            Dt = Ue(i.firstChild),
            _e = !1,
            s = !0) : s = !1),
            s || Mn(e)),
            pi(e),
            s = e.type,
            r = e.pendingProps,
            f = t !== null ? t.memoizedProps : null,
            i = r.children,
            hr(s, r) ? i = null : f !== null && hr(s, f) && (e.flags |= 32),
            e.memoizedState !== null && (s = co(t, e, Tv, null, null, n),
            il._currentValue = s),
            hs(t, e),
            It(t, e, i, n),
            e.child;
        case 6:
            return t === null && dt && ((t = n = Dt) && (n = o1(n, e.pendingProps, _e),
            n !== null ? (e.stateNode = n,
            Pt = e,
            Dt = null,
            t = !0) : t = !1),
            t || Mn(e)),
            null;
        case 13:
            return bd(t, e, n);
        case 4:
            return ie(e, e.stateNode.containerInfo),
            i = e.pendingProps,
            t === null ? e.child = ra(e, null, i, n) : It(t, e, i, n),
            e.child;
        case 11:
            return cd(t, e, e.type, e.pendingProps, n);
        case 7:
            return It(t, e, e.pendingProps, n),
            e.child;
        case 8:
            return It(t, e, e.pendingProps.children, n),
            e.child;
        case 12:
            return It(t, e, e.pendingProps.children, n),
            e.child;
        case 10:
            return i = e.pendingProps,
            Dn(e, e.type, i.value),
            It(t, e, i.children, n),
            e.child;
        case 9:
            return s = e.type._context,
            i = e.pendingProps.children,
            la(e),
            s = $t(s),
            i = i(s),
            e.flags |= 1,
            It(t, e, i, n),
            e.child;
        case 14:
            return fd(t, e, e.type, e.pendingProps, n);
        case 15:
            return hd(t, e, e.type, e.pendingProps, n);
        case 19:
            return Sd(t, e, n);
        case 31:
            return wv(t, e, n);
        case 22:
            return dd(t, e, n, e.pendingProps);
        case 24:
            return la(e),
            i = $t(Ht),
            t === null ? (s = to(),
            s === null && (s = Mt,
            r = $u(),
            s.pooledCache = r,
            r.refCount++,
            r !== null && (s.pooledCacheLanes |= n),
            s = r),
            e.memoizedState = {
                parent: i,
                cache: s
            },
            no(e),
            Dn(e, Ht, s)) : ((t.lanes & n) !== 0 && (ao(t, e),
            Li(e, null, null, n),
            Bi()),
            s = t.memoizedState,
            r = e.memoizedState,
            s.parent !== i ? (s = {
                parent: i,
                cache: i
            },
            e.memoizedState = s,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
            Dn(e, Ht, i)) : (i = r.cache,
            Dn(e, Ht, i),
            i !== s.cache && Pu(e, [Ht], n, !0))),
            It(t, e, e.pendingProps.children, n),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }
    function cn(t) {
        t.flags |= 4
    }
    function Ho(t, e, n, i, s) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (s & 335544128) === s)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (Fd())
                    t.flags |= 8192;
                else
                    throw oa = Pl,
                    eo
        } else
            t.flags &= -16777217
    }
    function Ad(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Lm(e))
            if (Fd())
                t.flags |= 8192;
            else
                throw oa = Pl,
                eo
    }
    function ms(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? ef() : 536870912,
        t.lanes |= e,
        Fa |= e)
    }
    function Ki(t, e) {
        if (!dt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e),
                    e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var i = null; n !== null; )
                    n.alternate !== null && (i = n),
                    n = n.sibling;
                i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
            }
    }
    function Ct(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , n = 0
          , i = 0;
        if (e)
            for (var s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                i |= s.subtreeFlags & 65011712,
                i |= s.flags & 65011712,
                s.return = t,
                s = s.sibling;
        else
            for (s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                i |= s.subtreeFlags,
                i |= s.flags,
                s.return = t,
                s = s.sibling;
        return t.subtreeFlags |= i,
        t.childLanes = n,
        e
    }
    function Rv(t, e, n) {
        var i = e.pendingProps;
        switch (Qu(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ct(e),
            null;
        case 1:
            return Ct(e),
            null;
        case 3:
            return n = e.stateNode,
            i = null,
            t !== null && (i = t.memoizedState.cache),
            e.memoizedState.cache !== i && (e.flags |= 2048),
            sn(Ht),
            Ut(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (t === null || t.child === null) && (Ua(e) ? cn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Ju())),
            Ct(e),
            null;
        case 26:
            var s = e.type
              , r = e.memoizedState;
            return t === null ? (cn(e),
            r !== null ? (Ct(e),
            Ad(e, r)) : (Ct(e),
            Ho(e, s, null, i, n))) : r ? r !== t.memoizedState ? (cn(e),
            Ct(e),
            Ad(e, r)) : (Ct(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== i && cn(e),
            Ct(e),
            Ho(e, s, t, i, n)),
            null;
        case 27:
            if (Ml(e),
            n = ut.current,
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== i && cn(e);
            else {
                if (!i) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Ct(e),
                    null
                }
                t = k.current,
                Ua(e) ? nh(e) : (t = wm(s, i, n),
                e.stateNode = t,
                cn(e))
            }
            return Ct(e),
            null;
        case 5:
            if (Ml(e),
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== i && cn(e);
            else {
                if (!i) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Ct(e),
                    null
                }
                if (r = k.current,
                Ua(e))
                    nh(e);
                else {
                    var f = js(ut.current);
                    switch (r) {
                    case 1:
                        r = f.createElementNS("http://www.w3.org/2000/svg", s);
                        break;
                    case 2:
                        r = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                        break;
                    default:
                        switch (s) {
                        case "svg":
                            r = f.createElementNS("http://www.w3.org/2000/svg", s);
                            break;
                        case "math":
                            r = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                            break;
                        case "script":
                            r = f.createElement("div"),
                            r.innerHTML = "<script><\/script>",
                            r = r.removeChild(r.firstChild);
                            break;
                        case "select":
                            r = typeof i.is == "string" ? f.createElement("select", {
                                is: i.is
                            }) : f.createElement("select"),
                            i.multiple ? r.multiple = !0 : i.size && (r.size = i.size);
                            break;
                        default:
                            r = typeof i.is == "string" ? f.createElement(s, {
                                is: i.is
                            }) : f.createElement(s)
                        }
                    }
                    r[Wt] = e,
                    r[oe] = i;
                    t: for (f = e.child; f !== null; ) {
                        if (f.tag === 5 || f.tag === 6)
                            r.appendChild(f.stateNode);
                        else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                            f.child.return = f,
                            f = f.child;
                            continue
                        }
                        if (f === e)
                            break t;
                        for (; f.sibling === null; ) {
                            if (f.return === null || f.return === e)
                                break t;
                            f = f.return
                        }
                        f.sibling.return = f.return,
                        f = f.sibling
                    }
                    e.stateNode = r;
                    t: switch (te(r, s, i),
                    s) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break t;
                    case "img":
                        i = !0;
                        break t;
                    default:
                        i = !1
                    }
                    i && cn(e)
                }
            }
            return Ct(e),
            Ho(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== i && cn(e);
            else {
                if (typeof i != "string" && e.stateNode === null)
                    throw Error(o(166));
                if (t = ut.current,
                Ua(e)) {
                    if (t = e.stateNode,
                    n = e.memoizedProps,
                    i = null,
                    s = Pt,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            i = s.memoizedProps
                        }
                    t[Wt] = e,
                    t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || bm(t.nodeValue, n)),
                    t || Mn(e, !0)
                } else
                    t = js(t).createTextNode(i),
                    t[Wt] = e,
                    e.stateNode = t
            }
            return Ct(e),
            null;
        case 31:
            if (n = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (i = Ua(e),
                n !== null) {
                    if (t === null) {
                        if (!i)
                            throw Error(o(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(o(557));
                        t[Wt] = e
                    } else
                        aa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Ct(e),
                    t = !1
                } else
                    n = Ju(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (Ae(e),
                    e) : (Ae(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(o(558))
            }
            return Ct(e),
            null;
        case 13:
            if (i = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (s = Ua(e),
                i !== null && i.dehydrated !== null) {
                    if (t === null) {
                        if (!s)
                            throw Error(o(318));
                        if (s = e.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(o(317));
                        s[Wt] = e
                    } else
                        aa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Ct(e),
                    s = !1
                } else
                    s = Ju(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return e.flags & 256 ? (Ae(e),
                    e) : (Ae(e),
                    null)
            }
            return Ae(e),
            (e.flags & 128) !== 0 ? (e.lanes = n,
            e) : (n = i !== null,
            t = t !== null && t.memoizedState !== null,
            n && (i = e.child,
            s = null,
            i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool),
            r = null,
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool),
            r !== s && (i.flags |= 2048)),
            n !== t && n && (e.child.flags |= 8192),
            ms(e, e.updateQueue),
            Ct(e),
            null);
        case 4:
            return Ut(),
            t === null && ur(e.stateNode.containerInfo),
            Ct(e),
            null;
        case 10:
            return sn(e.type),
            Ct(e),
            null;
        case 19:
            if (V(Bt),
            i = e.memoizedState,
            i === null)
                return Ct(e),
                null;
            if (s = (e.flags & 128) !== 0,
            r = i.rendering,
            r === null)
                if (s)
                    Ki(i, !1);
                else {
                    if (_t !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (r = es(t),
                            r !== null) {
                                for (e.flags |= 128,
                                Ki(i, !1),
                                t = r.updateQueue,
                                e.updateQueue = t,
                                ms(e, t),
                                e.subtreeFlags = 0,
                                t = n,
                                n = e.child; n !== null; )
                                    Pf(n, t),
                                    n = n.sibling;
                                return X(Bt, Bt.current & 1 | 2),
                                dt && an(e, i.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    i.tail !== null && ge() > bs && (e.flags |= 128,
                    s = !0,
                    Ki(i, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!s)
                    if (t = es(r),
                    t !== null) {
                        if (e.flags |= 128,
                        s = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        ms(e, t),
                        Ki(i, !0),
                        i.tail === null && i.tailMode === "hidden" && !r.alternate && !dt)
                            return Ct(e),
                            null
                    } else
                        2 * ge() - i.renderingStartTime > bs && n !== 536870912 && (e.flags |= 128,
                        s = !0,
                        Ki(i, !1),
                        e.lanes = 4194304);
                i.isBackwards ? (r.sibling = e.child,
                e.child = r) : (t = i.last,
                t !== null ? t.sibling = r : e.child = r,
                i.last = r)
            }
            return i.tail !== null ? (t = i.tail,
            i.rendering = t,
            i.tail = t.sibling,
            i.renderingStartTime = ge(),
            t.sibling = null,
            n = Bt.current,
            X(Bt, s ? n & 1 | 2 : n & 1),
            dt && an(e, i.treeForkCount),
            t) : (Ct(e),
            null);
        case 22:
        case 23:
            return Ae(e),
            uo(),
            i = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192),
            i ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Ct(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Ct(e),
            n = e.updateQueue,
            n !== null && ms(e, n.retryQueue),
            n = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            i = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
            i !== n && (e.flags |= 2048),
            t !== null && V(sa),
            null;
        case 24:
            return n = null,
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            sn(Ht),
            Ct(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, e.tag))
    }
    function Ov(t, e) {
        switch (Qu(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return sn(Ht),
            Ut(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return Ml(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (Ae(e),
                e.alternate === null)
                    throw Error(o(340));
                aa()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (Ae(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(o(340));
                aa()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return V(Bt),
            null;
        case 4:
            return Ut(),
            null;
        case 10:
            return sn(e.type),
            null;
        case 22:
        case 23:
            return Ae(e),
            uo(),
            t !== null && V(sa),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return sn(Ht),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Ed(t, e) {
        switch (Qu(e),
        e.tag) {
        case 3:
            sn(Ht),
            Ut();
            break;
        case 26:
        case 27:
        case 5:
            Ml(e);
            break;
        case 4:
            Ut();
            break;
        case 31:
            e.memoizedState !== null && Ae(e);
            break;
        case 13:
            Ae(e);
            break;
        case 19:
            V(Bt);
            break;
        case 10:
            sn(e.type);
            break;
        case 22:
        case 23:
            Ae(e),
            uo(),
            t !== null && V(sa);
            break;
        case 24:
            sn(Ht)
        }
    }
    function Zi(t, e) {
        try {
            var n = e.updateQueue
              , i = n !== null ? n.lastEffect : null;
            if (i !== null) {
                var s = i.next;
                n = s;
                do {
                    if ((n.tag & t) === t) {
                        i = void 0;
                        var r = n.create
                          , f = n.inst;
                        i = r(),
                        f.destroy = i
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (g) {
            St(e, e.return, g)
        }
    }
    function Rn(t, e, n) {
        try {
            var i = e.updateQueue
              , s = i !== null ? i.lastEffect : null;
            if (s !== null) {
                var r = s.next;
                i = r;
                do {
                    if ((i.tag & t) === t) {
                        var f = i.inst
                          , g = f.destroy;
                        if (g !== void 0) {
                            f.destroy = void 0,
                            s = e;
                            var x = n
                              , C = g;
                            try {
                                C()
                            } catch (N) {
                                St(s, x, N)
                            }
                        }
                    }
                    i = i.next
                } while (i !== r)
            }
        } catch (N) {
            St(e, e.return, N)
        }
    }
    function Md(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                ph(e, n)
            } catch (i) {
                St(t, t.return, i)
            }
        }
    }
    function Dd(t, e, n) {
        n.props = fa(t.type, t.memoizedProps),
        n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (i) {
            St(t, e, i)
        }
    }
    function Qi(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var i = t.stateNode;
                    break;
                case 30:
                    i = t.stateNode;
                    break;
                default:
                    i = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(i) : n.current = i
            }
        } catch (s) {
            St(t, e, s)
        }
    }
    function Je(t, e) {
        var n = t.ref
          , i = t.refCleanup;
        if (n !== null)
            if (typeof i == "function")
                try {
                    i()
                } catch (s) {
                    St(t, e, s)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (s) {
                    St(t, e, s)
                }
            else
                n.current = null
    }
    function Cd(t) {
        var e = t.type
          , n = t.memoizedProps
          , i = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && i.focus();
                break t;
            case "img":
                n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet)
            }
        } catch (s) {
            St(t, t.return, s)
        }
    }
    function Yo(t, e, n) {
        try {
            var i = t.stateNode;
            e1(i, t.type, n, e),
            i[oe] = e
        } catch (s) {
            St(t, t.return, s)
        }
    }
    function zd(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hn(t.type) || t.tag === 4
    }
    function qo(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || zd(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && Hn(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Go(t, e, n) {
        var i = t.tag;
        if (i === 5 || i === 6)
            t = t.stateNode,
            e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            e.appendChild(t),
            n = n._reactRootContainer,
            n != null || e.onclick !== null || (e.onclick = tn));
        else if (i !== 4 && (i === 27 && Hn(t.type) && (n = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Go(t, e, n),
            t = t.sibling; t !== null; )
                Go(t, e, n),
                t = t.sibling
    }
    function ps(t, e, n) {
        var i = t.tag;
        if (i === 5 || i === 6)
            t = t.stateNode,
            e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (i !== 4 && (i === 27 && Hn(t.type) && (n = t.stateNode),
        t = t.child,
        t !== null))
            for (ps(t, e, n),
            t = t.sibling; t !== null; )
                ps(t, e, n),
                t = t.sibling
    }
    function jd(t) {
        var e = t.stateNode
          , n = t.memoizedProps;
        try {
            for (var i = t.type, s = e.attributes; s.length; )
                e.removeAttributeNode(s[0]);
            te(e, i, n),
            e[Wt] = t,
            e[oe] = n
        } catch (r) {
            St(t, t.return, r)
        }
    }
    var fn = !1
      , Gt = !1
      , Xo = !1
      , wd = typeof WeakSet == "function" ? WeakSet : Set
      , Jt = null;
    function _v(t, e) {
        if (t = t.containerInfo,
        cr = Us,
        t = Gf(t),
        Vu(t)) {
            if ("selectionStart"in t)
                var n = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    n = (n = t.ownerDocument) && n.defaultView || window;
                    var i = n.getSelection && n.getSelection();
                    if (i && i.rangeCount !== 0) {
                        n = i.anchorNode;
                        var s = i.anchorOffset
                          , r = i.focusNode;
                        i = i.focusOffset;
                        try {
                            n.nodeType,
                            r.nodeType
                        } catch {
                            n = null;
                            break t
                        }
                        var f = 0
                          , g = -1
                          , x = -1
                          , C = 0
                          , N = 0
                          , _ = t
                          , z = null;
                        e: for (; ; ) {
                            for (var j; _ !== n || s !== 0 && _.nodeType !== 3 || (g = f + s),
                            _ !== r || i !== 0 && _.nodeType !== 3 || (x = f + i),
                            _.nodeType === 3 && (f += _.nodeValue.length),
                            (j = _.firstChild) !== null; )
                                z = _,
                                _ = j;
                            for (; ; ) {
                                if (_ === t)
                                    break e;
                                if (z === n && ++C === s && (g = f),
                                z === r && ++N === i && (x = f),
                                (j = _.nextSibling) !== null)
                                    break;
                                _ = z,
                                z = _.parentNode
                            }
                            _ = j
                        }
                        n = g === -1 || x === -1 ? null : {
                            start: g,
                            end: x
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (fr = {
            focusedElem: t,
            selectionRange: n
        },
        Us = !1,
        Jt = e; Jt !== null; )
            if (e = Jt,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                Jt = t;
            else
                for (; Jt !== null; ) {
                    switch (e = Jt,
                    r = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (n = 0; n < t.length; n++)
                                s = t[n],
                                s.ref.impl = s.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && r !== null) {
                            t = void 0,
                            n = e,
                            s = r.memoizedProps,
                            r = r.memoizedState,
                            i = n.stateNode;
                            try {
                                var Q = fa(n.type, s);
                                t = i.getSnapshotBeforeUpdate(Q, r),
                                i.__reactInternalSnapshotBeforeUpdate = t
                            } catch (tt) {
                                St(n, n.return, tt)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            n = t.nodeType,
                            n === 9)
                                mr(t);
                            else if (n === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    mr(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        Jt = t;
                        break
                    }
                    Jt = e.return
                }
    }
    function Nd(t, e, n) {
        var i = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            dn(t, n),
            i & 4 && Zi(5, n);
            break;
        case 1:
            if (dn(t, n),
            i & 4)
                if (t = n.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (f) {
                        St(n, n.return, f)
                    }
                else {
                    var s = fa(n.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (f) {
                        St(n, n.return, f)
                    }
                }
            i & 64 && Md(n),
            i & 512 && Qi(n, n.return);
            break;
        case 3:
            if (dn(t, n),
            i & 64 && (t = n.updateQueue,
            t !== null)) {
                if (e = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                try {
                    ph(t, e)
                } catch (f) {
                    St(n, n.return, f)
                }
            }
            break;
        case 27:
            e === null && i & 4 && jd(n);
        case 26:
        case 5:
            dn(t, n),
            e === null && i & 4 && Cd(n),
            i & 512 && Qi(n, n.return);
            break;
        case 12:
            dn(t, n);
            break;
        case 31:
            dn(t, n),
            i & 4 && _d(t, n);
            break;
        case 13:
            dn(t, n),
            i & 4 && Vd(t, n),
            i & 64 && (t = n.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (n = Xv.bind(null, n),
            r1(t, n))));
            break;
        case 22:
            if (i = n.memoizedState !== null || fn,
            !i) {
                e = e !== null && e.memoizedState !== null || Gt,
                s = fn;
                var r = Gt;
                fn = i,
                (Gt = e) && !r ? mn(t, n, (n.subtreeFlags & 8772) !== 0) : dn(t, n),
                fn = s,
                Gt = r
            }
            break;
        case 30:
            break;
        default:
            dn(t, n)
        }
    }
    function Rd(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        Rd(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && vu(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var zt = null
      , ce = !1;
    function hn(t, e, n) {
        for (n = n.child; n !== null; )
            Od(t, e, n),
            n = n.sibling
    }
    function Od(t, e, n) {
        if (ve && typeof ve.onCommitFiberUnmount == "function")
            try {
                ve.onCommitFiberUnmount(yi, n)
            } catch {}
        switch (n.tag) {
        case 26:
            Gt || Je(n, e),
            hn(t, e, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            Gt || Je(n, e);
            var i = zt
              , s = ce;
            Hn(n.type) && (zt = n.stateNode,
            ce = !1),
            hn(t, e, n),
            el(n.stateNode),
            zt = i,
            ce = s;
            break;
        case 5:
            Gt || Je(n, e);
        case 6:
            if (i = zt,
            s = ce,
            zt = null,
            hn(t, e, n),
            zt = i,
            ce = s,
            zt !== null)
                if (ce)
                    try {
                        (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(n.stateNode)
                    } catch (r) {
                        St(n, e, r)
                    }
                else
                    try {
                        zt.removeChild(n.stateNode)
                    } catch (r) {
                        St(n, e, r)
                    }
            break;
        case 18:
            zt !== null && (ce ? (t = zt,
            Mm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
            ai(t)) : Mm(zt, n.stateNode));
            break;
        case 4:
            i = zt,
            s = ce,
            zt = n.stateNode.containerInfo,
            ce = !0,
            hn(t, e, n),
            zt = i,
            ce = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Rn(2, n, e),
            Gt || Rn(4, n, e),
            hn(t, e, n);
            break;
        case 1:
            Gt || (Je(n, e),
            i = n.stateNode,
            typeof i.componentWillUnmount == "function" && Dd(n, e, i)),
            hn(t, e, n);
            break;
        case 21:
            hn(t, e, n);
            break;
        case 22:
            Gt = (i = Gt) || n.memoizedState !== null,
            hn(t, e, n),
            Gt = i;
            break;
        default:
            hn(t, e, n)
        }
    }
    function _d(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                ai(t)
            } catch (n) {
                St(e, e.return, n)
            }
        }
    }
    function Vd(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                ai(t)
            } catch (n) {
                St(e, e.return, n)
            }
    }
    function Vv(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new wd),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new wd),
            e;
        default:
            throw Error(o(435, t.tag))
        }
    }
    function ys(t, e) {
        var n = Vv(t);
        e.forEach(function(i) {
            if (!n.has(i)) {
                n.add(i);
                var s = Kv.bind(null, t, i);
                i.then(s, s)
            }
        })
    }
    function fe(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var i = 0; i < n.length; i++) {
                var s = n[i]
                  , r = t
                  , f = e
                  , g = f;
                t: for (; g !== null; ) {
                    switch (g.tag) {
                    case 27:
                        if (Hn(g.type)) {
                            zt = g.stateNode,
                            ce = !1;
                            break t
                        }
                        break;
                    case 5:
                        zt = g.stateNode,
                        ce = !1;
                        break t;
                    case 3:
                    case 4:
                        zt = g.stateNode.containerInfo,
                        ce = !0;
                        break t
                    }
                    g = g.return
                }
                if (zt === null)
                    throw Error(o(160));
                Od(r, f, s),
                zt = null,
                ce = !1,
                r = s.alternate,
                r !== null && (r.return = null),
                s.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                Ud(e, t),
                e = e.sibling
    }
    var Ge = null;
    function Ud(t, e) {
        var n = t.alternate
          , i = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            fe(e, t),
            he(t),
            i & 4 && (Rn(3, t, t.return),
            Zi(3, t),
            Rn(5, t, t.return));
            break;
        case 1:
            fe(e, t),
            he(t),
            i & 512 && (Gt || n === null || Je(n, n.return)),
            i & 64 && fn && (t = t.updateQueue,
            t !== null && (i = t.callbacks,
            i !== null && (n = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
            break;
        case 26:
            var s = Ge;
            if (fe(e, t),
            he(t),
            i & 512 && (Gt || n === null || Je(n, n.return)),
            i & 4) {
                var r = n !== null ? n.memoizedState : null;
                if (i = t.memoizedState,
                n === null)
                    if (i === null)
                        if (t.stateNode === null) {
                            t: {
                                i = t.type,
                                n = t.memoizedProps,
                                s = s.ownerDocument || s;
                                e: switch (i) {
                                case "title":
                                    r = s.getElementsByTagName("title")[0],
                                    (!r || r[bi] || r[Wt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(i),
                                    s.head.insertBefore(r, s.querySelector("head > title"))),
                                    te(r, i, n),
                                    r[Wt] = t,
                                    kt(r),
                                    i = r;
                                    break t;
                                case "link":
                                    var f = Um("link", "href", s).get(i + (n.href || ""));
                                    if (f) {
                                        for (var g = 0; g < f.length; g++)
                                            if (r = f[g],
                                            r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                f.splice(g, 1);
                                                break e
                                            }
                                    }
                                    r = s.createElement(i),
                                    te(r, i, n),
                                    s.head.appendChild(r);
                                    break;
                                case "meta":
                                    if (f = Um("meta", "content", s).get(i + (n.content || ""))) {
                                        for (g = 0; g < f.length; g++)
                                            if (r = f[g],
                                            r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                f.splice(g, 1);
                                                break e
                                            }
                                    }
                                    r = s.createElement(i),
                                    te(r, i, n),
                                    s.head.appendChild(r);
                                    break;
                                default:
                                    throw Error(o(468, i))
                                }
                                r[Wt] = t,
                                kt(r),
                                i = r
                            }
                            t.stateNode = i
                        } else
                            Bm(s, t.type, t.stateNode);
                    else
                        t.stateNode = Vm(s, i, t.memoizedProps);
                else
                    r !== i ? (r === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : r.count--,
                    i === null ? Bm(s, t.type, t.stateNode) : Vm(s, i, t.memoizedProps)) : i === null && t.stateNode !== null && Yo(t, t.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            fe(e, t),
            he(t),
            i & 512 && (Gt || n === null || Je(n, n.return)),
            n !== null && i & 4 && Yo(t, t.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (fe(e, t),
            he(t),
            i & 512 && (Gt || n === null || Je(n, n.return)),
            t.flags & 32) {
                s = t.stateNode;
                try {
                    Da(s, "")
                } catch (Q) {
                    St(t, t.return, Q)
                }
            }
            i & 4 && t.stateNode != null && (s = t.memoizedProps,
            Yo(t, s, n !== null ? n.memoizedProps : s)),
            i & 1024 && (Xo = !0);
            break;
        case 6:
            if (fe(e, t),
            he(t),
            i & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                i = t.memoizedProps,
                n = t.stateNode;
                try {
                    n.nodeValue = i
                } catch (Q) {
                    St(t, t.return, Q)
                }
            }
            break;
        case 3:
            if (Rs = null,
            s = Ge,
            Ge = ws(e.containerInfo),
            fe(e, t),
            Ge = s,
            he(t),
            i & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    ai(e.containerInfo)
                } catch (Q) {
                    St(t, t.return, Q)
                }
            Xo && (Xo = !1,
            Bd(t));
            break;
        case 4:
            i = Ge,
            Ge = ws(t.stateNode.containerInfo),
            fe(e, t),
            he(t),
            Ge = i;
            break;
        case 12:
            fe(e, t),
            he(t);
            break;
        case 31:
            fe(e, t),
            he(t),
            i & 4 && (i = t.updateQueue,
            i !== null && (t.updateQueue = null,
            ys(t, i)));
            break;
        case 13:
            fe(e, t),
            he(t),
            t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (vs = ge()),
            i & 4 && (i = t.updateQueue,
            i !== null && (t.updateQueue = null,
            ys(t, i)));
            break;
        case 22:
            s = t.memoizedState !== null;
            var x = n !== null && n.memoizedState !== null
              , C = fn
              , N = Gt;
            if (fn = C || s,
            Gt = N || x,
            fe(e, t),
            Gt = N,
            fn = C,
            he(t),
            i & 8192)
                t: for (e = t.stateNode,
                e._visibility = s ? e._visibility & -2 : e._visibility | 1,
                s && (n === null || x || fn || Gt || ha(t)),
                n = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            x = n = e;
                            try {
                                if (r = x.stateNode,
                                s)
                                    f = r.style,
                                    typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                else {
                                    g = x.stateNode;
                                    var _ = x.memoizedProps.style
                                      , z = _ != null && _.hasOwnProperty("display") ? _.display : null;
                                    g.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim()
                                }
                            } catch (Q) {
                                St(x, x.return, Q)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            x = e;
                            try {
                                x.stateNode.nodeValue = s ? "" : x.memoizedProps
                            } catch (Q) {
                                St(x, x.return, Q)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (n === null) {
                            x = e;
                            try {
                                var j = x.stateNode;
                                s ? Dm(j, !0) : Dm(x.stateNode, !1)
                            } catch (Q) {
                                St(x, x.return, Q)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        n === e && (n = null),
                        e = e.return
                    }
                    n === e && (n = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            i & 4 && (i = t.updateQueue,
            i !== null && (n = i.retryQueue,
            n !== null && (i.retryQueue = null,
            ys(t, n))));
            break;
        case 19:
            fe(e, t),
            he(t),
            i & 4 && (i = t.updateQueue,
            i !== null && (t.updateQueue = null,
            ys(t, i)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            fe(e, t),
            he(t)
        }
    }
    function he(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, i = t.return; i !== null; ) {
                    if (zd(i)) {
                        n = i;
                        break
                    }
                    i = i.return
                }
                if (n == null)
                    throw Error(o(160));
                switch (n.tag) {
                case 27:
                    var s = n.stateNode
                      , r = qo(t);
                    ps(t, r, s);
                    break;
                case 5:
                    var f = n.stateNode;
                    n.flags & 32 && (Da(f, ""),
                    n.flags &= -33);
                    var g = qo(t);
                    ps(t, g, f);
                    break;
                case 3:
                case 4:
                    var x = n.stateNode.containerInfo
                      , C = qo(t);
                    Go(t, C, x);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (N) {
                St(t, t.return, N)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function Bd(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                Bd(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function dn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Nd(t, e.alternate, e),
                e = e.sibling
    }
    function ha(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Rn(4, e, e.return),
                ha(e);
                break;
            case 1:
                Je(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && Dd(e, e.return, n),
                ha(e);
                break;
            case 27:
                el(e.stateNode);
            case 26:
            case 5:
                Je(e, e.return),
                ha(e);
                break;
            case 22:
                e.memoizedState === null && ha(e);
                break;
            case 30:
                ha(e);
                break;
            default:
                ha(e)
            }
            t = t.sibling
        }
    }
    function mn(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var i = e.alternate
              , s = t
              , r = e
              , f = r.flags;
            switch (r.tag) {
            case 0:
            case 11:
            case 15:
                mn(s, r, n),
                Zi(4, r);
                break;
            case 1:
                if (mn(s, r, n),
                i = r,
                s = i.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (C) {
                        St(i, i.return, C)
                    }
                if (i = r,
                s = i.updateQueue,
                s !== null) {
                    var g = i.stateNode;
                    try {
                        var x = s.shared.hiddenCallbacks;
                        if (x !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < x.length; s++)
                                mh(x[s], g)
                    } catch (C) {
                        St(i, i.return, C)
                    }
                }
                n && f & 64 && Md(r),
                Qi(r, r.return);
                break;
            case 27:
                jd(r);
            case 26:
            case 5:
                mn(s, r, n),
                n && i === null && f & 4 && Cd(r),
                Qi(r, r.return);
                break;
            case 12:
                mn(s, r, n);
                break;
            case 31:
                mn(s, r, n),
                n && f & 4 && _d(s, r);
                break;
            case 13:
                mn(s, r, n),
                n && f & 4 && Vd(s, r);
                break;
            case 22:
                r.memoizedState === null && mn(s, r, n),
                Qi(r, r.return);
                break;
            case 30:
                break;
            default:
                mn(s, r, n)
            }
            e = e.sibling
        }
    }
    function Ko(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== n && (t != null && t.refCount++,
        n != null && Ri(n))
    }
    function Zo(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && Ri(t))
    }
    function Xe(t, e, n, i) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Ld(t, e, n, i),
                e = e.sibling
    }
    function Ld(t, e, n, i) {
        var s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Xe(t, e, n, i),
            s & 2048 && Zi(9, e);
            break;
        case 1:
            Xe(t, e, n, i);
            break;
        case 3:
            Xe(t, e, n, i),
            s & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && Ri(t)));
            break;
        case 12:
            if (s & 2048) {
                Xe(t, e, n, i),
                t = e.stateNode;
                try {
                    var r = e.memoizedProps
                      , f = r.id
                      , g = r.onPostCommit;
                    typeof g == "function" && g(f, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (x) {
                    St(e, e.return, x)
                }
            } else
                Xe(t, e, n, i);
            break;
        case 31:
            Xe(t, e, n, i);
            break;
        case 13:
            Xe(t, e, n, i);
            break;
        case 23:
            break;
        case 22:
            r = e.stateNode,
            f = e.alternate,
            e.memoizedState !== null ? r._visibility & 2 ? Xe(t, e, n, i) : ki(t, e) : r._visibility & 2 ? Xe(t, e, n, i) : (r._visibility |= 2,
            Qa(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || !1)),
            s & 2048 && Ko(f, e);
            break;
        case 24:
            Xe(t, e, n, i),
            s & 2048 && Zo(e.alternate, e);
            break;
        default:
            Xe(t, e, n, i)
        }
    }
    function Qa(t, e, n, i, s) {
        for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var r = t
              , f = e
              , g = n
              , x = i
              , C = f.flags;
            switch (f.tag) {
            case 0:
            case 11:
            case 15:
                Qa(r, f, g, x, s),
                Zi(8, f);
                break;
            case 23:
                break;
            case 22:
                var N = f.stateNode;
                f.memoizedState !== null ? N._visibility & 2 ? Qa(r, f, g, x, s) : ki(r, f) : (N._visibility |= 2,
                Qa(r, f, g, x, s)),
                s && C & 2048 && Ko(f.alternate, f);
                break;
            case 24:
                Qa(r, f, g, x, s),
                s && C & 2048 && Zo(f.alternate, f);
                break;
            default:
                Qa(r, f, g, x, s)
            }
            e = e.sibling
        }
    }
    function ki(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var n = t
                  , i = e
                  , s = i.flags;
                switch (i.tag) {
                case 22:
                    ki(n, i),
                    s & 2048 && Ko(i.alternate, i);
                    break;
                case 24:
                    ki(n, i),
                    s & 2048 && Zo(i.alternate, i);
                    break;
                default:
                    ki(n, i)
                }
                e = e.sibling
            }
    }
    var Ji = 8192;
    function ka(t, e, n) {
        if (t.subtreeFlags & Ji)
            for (t = t.child; t !== null; )
                Hd(t, e, n),
                t = t.sibling
    }
    function Hd(t, e, n) {
        switch (t.tag) {
        case 26:
            ka(t, e, n),
            t.flags & Ji && t.memoizedState !== null && S1(n, Ge, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            ka(t, e, n);
            break;
        case 3:
        case 4:
            var i = Ge;
            Ge = ws(t.stateNode.containerInfo),
            ka(t, e, n),
            Ge = i;
            break;
        case 22:
            t.memoizedState === null && (i = t.alternate,
            i !== null && i.memoizedState !== null ? (i = Ji,
            Ji = 16777216,
            ka(t, e, n),
            Ji = i) : ka(t, e, n));
            break;
        default:
            ka(t, e, n)
        }
    }
    function Yd(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function Fi(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    Jt = i,
                    Gd(i, t)
                }
            Yd(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                qd(t),
                t = t.sibling
    }
    function qd(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Fi(t),
            t.flags & 2048 && Rn(9, t, t.return);
            break;
        case 3:
            Fi(t);
            break;
        case 12:
            Fi(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            gs(t)) : Fi(t);
            break;
        default:
            Fi(t)
        }
    }
    function gs(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    Jt = i,
                    Gd(i, t)
                }
            Yd(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Rn(8, e, e.return),
                gs(e);
                break;
            case 22:
                n = e.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                gs(e));
                break;
            default:
                gs(e)
            }
            t = t.sibling
        }
    }
    function Gd(t, e) {
        for (; Jt !== null; ) {
            var n = Jt;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Rn(8, n, e);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var i = n.memoizedState.cachePool.pool;
                    i != null && i.refCount++
                }
                break;
            case 24:
                Ri(n.memoizedState.cache)
            }
            if (i = n.child,
            i !== null)
                i.return = n,
                Jt = i;
            else
                t: for (n = t; Jt !== null; ) {
                    i = Jt;
                    var s = i.sibling
                      , r = i.return;
                    if (Rd(i),
                    i === n) {
                        Jt = null;
                        break t
                    }
                    if (s !== null) {
                        s.return = r,
                        Jt = s;
                        break t
                    }
                    Jt = r
                }
        }
    }
    var Uv = {
        getCacheForType: function(t) {
            var e = $t(Ht)
              , n = e.data.get(t);
            return n === void 0 && (n = t(),
            e.data.set(t, n)),
            n
        },
        cacheSignal: function() {
            return $t(Ht).controller.signal
        }
    }
      , Bv = typeof WeakMap == "function" ? WeakMap : Map
      , gt = 0
      , Mt = null
      , ot = null
      , ft = 0
      , xt = 0
      , Ee = null
      , On = !1
      , Ja = !1
      , Qo = !1
      , pn = 0
      , _t = 0
      , _n = 0
      , da = 0
      , ko = 0
      , Me = 0
      , Fa = 0
      , Wi = null
      , de = null
      , Jo = !1
      , vs = 0
      , Xd = 0
      , bs = 1 / 0
      , xs = null
      , Vn = null
      , Zt = 0
      , Un = null
      , Wa = null
      , yn = 0
      , Fo = 0
      , Wo = null
      , Kd = null
      , Pi = 0
      , Po = null;
    function De() {
        return (gt & 2) !== 0 && ft !== 0 ? ft & -ft : R.T !== null ? ar() : sf()
    }
    function Zd() {
        if (Me === 0)
            if ((ft & 536870912) === 0 || dt) {
                var t = zl;
                zl <<= 1,
                (zl & 3932160) === 0 && (zl = 262144),
                Me = t
            } else
                Me = 536870912;
        return t = Te.current,
        t !== null && (t.flags |= 32),
        Me
    }
    function me(t, e, n) {
        (t === Mt && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null) && (Pa(t, 0),
        Bn(t, ft, Me, !1)),
        vi(t, n),
        ((gt & 2) === 0 || t !== Mt) && (t === Mt && ((gt & 2) === 0 && (da |= n),
        _t === 4 && Bn(t, ft, Me, !1)),
        Fe(t))
    }
    function Qd(t, e, n) {
        if ((gt & 6) !== 0)
            throw Error(o(327));
        var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || gi(t, e)
          , s = i ? Yv(t, e) : Io(t, e, !0)
          , r = i;
        do {
            if (s === 0) {
                Ja && !i && Bn(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate,
                r && !Lv(n)) {
                    s = Io(t, e, !1),
                    r = !1;
                    continue
                }
                if (s === 2) {
                    if (r = e,
                    t.errorRecoveryDisabledLanes & r)
                        var f = 0;
                    else
                        f = t.pendingLanes & -536870913,
                        f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        e = f;
                        t: {
                            var g = t;
                            s = Wi;
                            var x = g.current.memoizedState.isDehydrated;
                            if (x && (Pa(g, f).flags |= 256),
                            f = Io(g, f, !1),
                            f !== 2) {
                                if (Qo && !x) {
                                    g.errorRecoveryDisabledLanes |= r,
                                    da |= r,
                                    s = 4;
                                    break t
                                }
                                r = de,
                                de = s,
                                r !== null && (de === null ? de = r : de.push.apply(de, r))
                            }
                            s = f
                        }
                        if (r = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    Pa(t, 0),
                    Bn(t, e, 0, !0);
                    break
                }
                t: {
                    switch (i = t,
                    r = s,
                    r) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        Bn(i, e, Me, !On);
                        break t;
                    case 2:
                        de = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((e & 62914560) === e && (s = vs + 300 - ge(),
                    10 < s)) {
                        if (Bn(i, e, Me, !On),
                        wl(i, 0, !0) !== 0)
                            break t;
                        yn = e,
                        i.timeoutHandle = Am(kd.bind(null, i, n, de, xs, Jo, e, Me, da, Fa, On, r, "Throttled", -0, 0), s);
                        break t
                    }
                    kd(i, n, de, xs, Jo, e, Me, da, Fa, On, r, null, -0, 0)
                }
            }
            break
        } while (!0);
        Fe(t)
    }
    function kd(t, e, n, i, s, r, f, g, x, C, N, _, z, j) {
        if (t.timeoutHandle = -1,
        _ = e.subtreeFlags,
        _ & 8192 || (_ & 16785408) === 16785408) {
            _ = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: tn
            },
            Hd(e, r, _);
            var Q = (r & 62914560) === r ? vs - ge() : (r & 4194048) === r ? Xd - ge() : 0;
            if (Q = T1(_, Q),
            Q !== null) {
                yn = r,
                t.cancelPendingCommit = Q(em.bind(null, t, e, r, n, i, s, f, g, x, N, _, null, z, j)),
                Bn(t, r, f, !C);
                return
            }
        }
        em(t, e, r, n, i, s, f, g, x)
    }
    function Lv(t) {
        for (var e = t; ; ) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var i = 0; i < n.length; i++) {
                    var s = n[i]
                      , r = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!xe(r(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child,
            e.subtreeFlags & 16384 && n !== null)
                n.return = e,
                e = n;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function Bn(t, e, n, i) {
        e &= ~ko,
        e &= ~da,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        i && (t.warmLanes |= e),
        i = t.expirationTimes;
        for (var s = e; 0 < s; ) {
            var r = 31 - be(s)
              , f = 1 << r;
            i[r] = -1,
            s &= ~f
        }
        n !== 0 && nf(t, n, e)
    }
    function Ss() {
        return (gt & 6) === 0 ? ($i(0),
        !1) : !0
    }
    function $o() {
        if (ot !== null) {
            if (xt === 0)
                var t = ot.return;
            else
                t = ot,
                ln = ia = null,
                mo(t),
                qa = null,
                _i = 0,
                t = ot;
            for (; t !== null; )
                Ed(t.alternate, t),
                t = t.return;
            ot = null
        }
    }
    function Pa(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1,
        i1(n)),
        n = t.cancelPendingCommit,
        n !== null && (t.cancelPendingCommit = null,
        n()),
        yn = 0,
        $o(),
        Mt = t,
        ot = n = nn(t.current, null),
        ft = e,
        xt = 0,
        Ee = null,
        On = !1,
        Ja = gi(t, e),
        Qo = !1,
        Fa = Me = ko = da = _n = _t = 0,
        de = Wi = null,
        Jo = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var i = t.entangledLanes;
        if (i !== 0)
            for (t = t.entanglements,
            i &= e; 0 < i; ) {
                var s = 31 - be(i)
                  , r = 1 << s;
                e |= t[s],
                i &= ~r
            }
        return pn = e,
        Gl(),
        n
    }
    function Jd(t, e) {
        lt = null,
        R.H = Gi,
        e === Ya || e === Wl ? (e = ch(),
        xt = 3) : e === eo ? (e = ch(),
        xt = 4) : xt = e === wo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Ee = e,
        ot === null && (_t = 1,
        cs(t, Ne(e, t.current)))
    }
    function Fd() {
        var t = Te.current;
        return t === null ? !0 : (ft & 4194048) === ft ? Ve === null : (ft & 62914560) === ft || (ft & 536870912) !== 0 ? t === Ve : !1
    }
    function Wd() {
        var t = R.H;
        return R.H = Gi,
        t === null ? Gi : t
    }
    function Pd() {
        var t = R.A;
        return R.A = Uv,
        t
    }
    function Ts() {
        _t = 4,
        On || (ft & 4194048) !== ft && Te.current !== null || (Ja = !0),
        (_n & 134217727) === 0 && (da & 134217727) === 0 || Mt === null || Bn(Mt, ft, Me, !1)
    }
    function Io(t, e, n) {
        var i = gt;
        gt |= 2;
        var s = Wd()
          , r = Pd();
        (Mt !== t || ft !== e) && (xs = null,
        Pa(t, e)),
        e = !1;
        var f = _t;
        t: do
            try {
                if (xt !== 0 && ot !== null) {
                    var g = ot
                      , x = Ee;
                    switch (xt) {
                    case 8:
                        $o(),
                        f = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Te.current === null && (e = !0);
                        var C = xt;
                        if (xt = 0,
                        Ee = null,
                        $a(t, g, x, C),
                        n && Ja) {
                            f = 0;
                            break t
                        }
                        break;
                    default:
                        C = xt,
                        xt = 0,
                        Ee = null,
                        $a(t, g, x, C)
                    }
                }
                Hv(),
                f = _t;
                break
            } catch (N) {
                Jd(t, N)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        ln = ia = null,
        gt = i,
        R.H = s,
        R.A = r,
        ot === null && (Mt = null,
        ft = 0,
        Gl()),
        f
    }
    function Hv() {
        for (; ot !== null; )
            $d(ot)
    }
    function Yv(t, e) {
        var n = gt;
        gt |= 2;
        var i = Wd()
          , s = Pd();
        Mt !== t || ft !== e ? (xs = null,
        bs = ge() + 500,
        Pa(t, e)) : Ja = gi(t, e);
        t: do
            try {
                if (xt !== 0 && ot !== null) {
                    e = ot;
                    var r = Ee;
                    e: switch (xt) {
                    case 1:
                        xt = 0,
                        Ee = null,
                        $a(t, e, r, 1);
                        break;
                    case 2:
                    case 9:
                        if (oh(r)) {
                            xt = 0,
                            Ee = null,
                            Id(e);
                            break
                        }
                        e = function() {
                            xt !== 2 && xt !== 9 || Mt !== t || (xt = 7),
                            Fe(t)
                        }
                        ,
                        r.then(e, e);
                        break t;
                    case 3:
                        xt = 7;
                        break t;
                    case 4:
                        xt = 5;
                        break t;
                    case 7:
                        oh(r) ? (xt = 0,
                        Ee = null,
                        Id(e)) : (xt = 0,
                        Ee = null,
                        $a(t, e, r, 7));
                        break;
                    case 5:
                        var f = null;
                        switch (ot.tag) {
                        case 26:
                            f = ot.memoizedState;
                        case 5:
                        case 27:
                            var g = ot;
                            if (f ? Lm(f) : g.stateNode.complete) {
                                xt = 0,
                                Ee = null;
                                var x = g.sibling;
                                if (x !== null)
                                    ot = x;
                                else {
                                    var C = g.return;
                                    C !== null ? (ot = C,
                                    As(C)) : ot = null
                                }
                                break e
                            }
                        }
                        xt = 0,
                        Ee = null,
                        $a(t, e, r, 5);
                        break;
                    case 6:
                        xt = 0,
                        Ee = null,
                        $a(t, e, r, 6);
                        break;
                    case 8:
                        $o(),
                        _t = 6;
                        break t;
                    default:
                        throw Error(o(462))
                    }
                }
                qv();
                break
            } catch (N) {
                Jd(t, N)
            }
        while (!0);
        return ln = ia = null,
        R.H = i,
        R.A = s,
        gt = n,
        ot !== null ? 0 : (Mt = null,
        ft = 0,
        Gl(),
        _t)
    }
    function qv() {
        for (; ot !== null && !cg(); )
            $d(ot)
    }
    function $d(t) {
        var e = Td(t.alternate, t, pn);
        t.memoizedProps = t.pendingProps,
        e === null ? As(t) : ot = e
    }
    function Id(t) {
        var e = t
          , n = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = yd(n, e, e.pendingProps, e.type, void 0, ft);
            break;
        case 11:
            e = yd(n, e, e.pendingProps, e.type.render, e.ref, ft);
            break;
        case 5:
            mo(e);
        default:
            Ed(n, e),
            e = ot = Pf(e, pn),
            e = Td(n, e, pn)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? As(t) : ot = e
    }
    function $a(t, e, n, i) {
        ln = ia = null,
        mo(e),
        qa = null,
        _i = 0;
        var s = e.return;
        try {
            if (jv(t, s, e, n, ft)) {
                _t = 1,
                cs(t, Ne(n, t.current)),
                ot = null;
                return
            }
        } catch (r) {
            if (s !== null)
                throw ot = s,
                r;
            _t = 1,
            cs(t, Ne(n, t.current)),
            ot = null;
            return
        }
        e.flags & 32768 ? (dt || i === 1 ? t = !0 : Ja || (ft & 536870912) !== 0 ? t = !1 : (On = t = !0,
        (i === 2 || i === 9 || i === 3 || i === 6) && (i = Te.current,
        i !== null && i.tag === 13 && (i.flags |= 16384))),
        tm(e, t)) : As(e)
    }
    function As(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                tm(e, On);
                return
            }
            t = e.return;
            var n = Rv(e.alternate, e, pn);
            if (n !== null) {
                ot = n;
                return
            }
            if (e = e.sibling,
            e !== null) {
                ot = e;
                return
            }
            ot = e = t
        } while (e !== null);
        _t === 0 && (_t = 5)
    }
    function tm(t, e) {
        do {
            var n = Ov(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767,
                ot = n;
                return
            }
            if (n = t.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                ot = t;
                return
            }
            ot = t = n
        } while (t !== null);
        _t = 6,
        ot = null
    }
    function em(t, e, n, i, s, r, f, g, x) {
        t.cancelPendingCommit = null;
        do
            Es();
        while (Zt !== 0);
        if ((gt & 6) !== 0)
            throw Error(o(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(o(177));
            if (r = e.lanes | e.childLanes,
            r |= Yu,
            xg(t, n, r, f, g, x),
            t === Mt && (ot = Mt = null,
            ft = 0),
            Wa = e,
            Un = t,
            yn = n,
            Fo = r,
            Wo = s,
            Kd = i,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            Zv(Dl, function() {
                return sm(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            i = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || i) {
                i = R.T,
                R.T = null,
                s = L.p,
                L.p = 2,
                f = gt,
                gt |= 4;
                try {
                    _v(t, e, n)
                } finally {
                    gt = f,
                    L.p = s,
                    R.T = i
                }
            }
            Zt = 1,
            nm(),
            am(),
            im()
        }
    }
    function nm() {
        if (Zt === 1) {
            Zt = 0;
            var t = Un
              , e = Wa
              , n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = R.T,
                R.T = null;
                var i = L.p;
                L.p = 2;
                var s = gt;
                gt |= 4;
                try {
                    Ud(e, t);
                    var r = fr
                      , f = Gf(t.containerInfo)
                      , g = r.focusedElem
                      , x = r.selectionRange;
                    if (f !== g && g && g.ownerDocument && qf(g.ownerDocument.documentElement, g)) {
                        if (x !== null && Vu(g)) {
                            var C = x.start
                              , N = x.end;
                            if (N === void 0 && (N = C),
                            "selectionStart"in g)
                                g.selectionStart = C,
                                g.selectionEnd = Math.min(N, g.value.length);
                            else {
                                var _ = g.ownerDocument || document
                                  , z = _ && _.defaultView || window;
                                if (z.getSelection) {
                                    var j = z.getSelection()
                                      , Q = g.textContent.length
                                      , tt = Math.min(x.start, Q)
                                      , Et = x.end === void 0 ? tt : Math.min(x.end, Q);
                                    !j.extend && tt > Et && (f = Et,
                                    Et = tt,
                                    tt = f);
                                    var M = Yf(g, tt)
                                      , A = Yf(g, Et);
                                    if (M && A && (j.rangeCount !== 1 || j.anchorNode !== M.node || j.anchorOffset !== M.offset || j.focusNode !== A.node || j.focusOffset !== A.offset)) {
                                        var D = _.createRange();
                                        D.setStart(M.node, M.offset),
                                        j.removeAllRanges(),
                                        tt > Et ? (j.addRange(D),
                                        j.extend(A.node, A.offset)) : (D.setEnd(A.node, A.offset),
                                        j.addRange(D))
                                    }
                                }
                            }
                        }
                        for (_ = [],
                        j = g; j = j.parentNode; )
                            j.nodeType === 1 && _.push({
                                element: j,
                                left: j.scrollLeft,
                                top: j.scrollTop
                            });
                        for (typeof g.focus == "function" && g.focus(),
                        g = 0; g < _.length; g++) {
                            var O = _[g];
                            O.element.scrollLeft = O.left,
                            O.element.scrollTop = O.top
                        }
                    }
                    Us = !!cr,
                    fr = cr = null
                } finally {
                    gt = s,
                    L.p = i,
                    R.T = n
                }
            }
            t.current = e,
            Zt = 2
        }
    }
    function am() {
        if (Zt === 2) {
            Zt = 0;
            var t = Un
              , e = Wa
              , n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = R.T,
                R.T = null;
                var i = L.p;
                L.p = 2;
                var s = gt;
                gt |= 4;
                try {
                    Nd(t, e.alternate, e)
                } finally {
                    gt = s,
                    L.p = i,
                    R.T = n
                }
            }
            Zt = 3
        }
    }
    function im() {
        if (Zt === 4 || Zt === 3) {
            Zt = 0,
            fg();
            var t = Un
              , e = Wa
              , n = yn
              , i = Kd;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Zt = 5 : (Zt = 0,
            Wa = Un = null,
            lm(t, t.pendingLanes));
            var s = t.pendingLanes;
            if (s === 0 && (Vn = null),
            yu(n),
            e = e.stateNode,
            ve && typeof ve.onCommitFiberRoot == "function")
                try {
                    ve.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (i !== null) {
                e = R.T,
                s = L.p,
                L.p = 2,
                R.T = null;
                try {
                    for (var r = t.onRecoverableError, f = 0; f < i.length; f++) {
                        var g = i[f];
                        r(g.value, {
                            componentStack: g.stack
                        })
                    }
                } finally {
                    R.T = e,
                    L.p = s
                }
            }
            (yn & 3) !== 0 && Es(),
            Fe(t),
            s = t.pendingLanes,
            (n & 261930) !== 0 && (s & 42) !== 0 ? t === Po ? Pi++ : (Pi = 0,
            Po = t) : Pi = 0,
            $i(0)
        }
    }
    function lm(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        Ri(e)))
    }
    function Es() {
        return nm(),
        am(),
        im(),
        sm()
    }
    function sm() {
        if (Zt !== 5)
            return !1;
        var t = Un
          , e = Fo;
        Fo = 0;
        var n = yu(yn)
          , i = R.T
          , s = L.p;
        try {
            L.p = 32 > n ? 32 : n,
            R.T = null,
            n = Wo,
            Wo = null;
            var r = Un
              , f = yn;
            if (Zt = 0,
            Wa = Un = null,
            yn = 0,
            (gt & 6) !== 0)
                throw Error(o(331));
            var g = gt;
            if (gt |= 4,
            qd(r.current),
            Ld(r, r.current, f, n),
            gt = g,
            $i(0, !1),
            ve && typeof ve.onPostCommitFiberRoot == "function")
                try {
                    ve.onPostCommitFiberRoot(yi, r)
                } catch {}
            return !0
        } finally {
            L.p = s,
            R.T = i,
            lm(t, e)
        }
    }
    function um(t, e, n) {
        e = Ne(n, e),
        e = jo(t.stateNode, e, 2),
        t = jn(t, e, 2),
        t !== null && (vi(t, 2),
        Fe(t))
    }
    function St(t, e, n) {
        if (t.tag === 3)
            um(t, t, n);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    um(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var i = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Vn === null || !Vn.has(i))) {
                        t = Ne(n, t),
                        n = od(2),
                        i = jn(e, n, 2),
                        i !== null && (rd(n, i, e, t),
                        vi(i, 2),
                        Fe(i));
                        break
                    }
                }
                e = e.return
            }
    }
    function tr(t, e, n) {
        var i = t.pingCache;
        if (i === null) {
            i = t.pingCache = new Bv;
            var s = new Set;
            i.set(e, s)
        } else
            s = i.get(e),
            s === void 0 && (s = new Set,
            i.set(e, s));
        s.has(n) || (Qo = !0,
        s.add(n),
        t = Gv.bind(null, t, e, n),
        e.then(t, t))
    }
    function Gv(t, e, n) {
        var i = t.pingCache;
        i !== null && i.delete(e),
        t.pingedLanes |= t.suspendedLanes & n,
        t.warmLanes &= ~n,
        Mt === t && (ft & n) === n && (_t === 4 || _t === 3 && (ft & 62914560) === ft && 300 > ge() - vs ? (gt & 2) === 0 && Pa(t, 0) : ko |= n,
        Fa === ft && (Fa = 0)),
        Fe(t)
    }
    function om(t, e) {
        e === 0 && (e = ef()),
        t = ea(t, e),
        t !== null && (vi(t, e),
        Fe(t))
    }
    function Xv(t) {
        var e = t.memoizedState
          , n = 0;
        e !== null && (n = e.retryLane),
        om(t, n)
    }
    function Kv(t, e) {
        var n = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var i = t.stateNode
              , s = t.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            i = t.stateNode;
            break;
        case 22:
            i = t.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        i !== null && i.delete(e),
        om(t, n)
    }
    function Zv(t, e) {
        return hu(t, e)
    }
    var Ms = null
      , Ia = null
      , er = !1
      , Ds = !1
      , nr = !1
      , Ln = 0;
    function Fe(t) {
        t !== Ia && t.next === null && (Ia === null ? Ms = Ia = t : Ia = Ia.next = t),
        Ds = !0,
        er || (er = !0,
        kv())
    }
    function $i(t, e) {
        if (!nr && Ds) {
            nr = !0;
            do
                for (var n = !1, i = Ms; i !== null; ) {
                    if (t !== 0) {
                        var s = i.pendingLanes;
                        if (s === 0)
                            var r = 0;
                        else {
                            var f = i.suspendedLanes
                              , g = i.pingedLanes;
                            r = (1 << 31 - be(42 | t) + 1) - 1,
                            r &= s & ~(f & ~g),
                            r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0
                        }
                        r !== 0 && (n = !0,
                        hm(i, r))
                    } else
                        r = ft,
                        r = wl(i, i === Mt ? r : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1),
                        (r & 3) === 0 || gi(i, r) || (n = !0,
                        hm(i, r));
                    i = i.next
                }
            while (n);
            nr = !1
        }
    }
    function Qv() {
        rm()
    }
    function rm() {
        Ds = er = !1;
        var t = 0;
        Ln !== 0 && a1() && (t = Ln);
        for (var e = ge(), n = null, i = Ms; i !== null; ) {
            var s = i.next
              , r = cm(i, e);
            r === 0 ? (i.next = null,
            n === null ? Ms = s : n.next = s,
            s === null && (Ia = n)) : (n = i,
            (t !== 0 || (r & 3) !== 0) && (Ds = !0)),
            i = s
        }
        Zt !== 0 && Zt !== 5 || $i(t),
        Ln !== 0 && (Ln = 0)
    }
    function cm(t, e) {
        for (var n = t.suspendedLanes, i = t.pingedLanes, s = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
            var f = 31 - be(r)
              , g = 1 << f
              , x = s[f];
            x === -1 ? ((g & n) === 0 || (g & i) !== 0) && (s[f] = bg(g, e)) : x <= e && (t.expiredLanes |= g),
            r &= ~g
        }
        if (e = Mt,
        n = ft,
        n = wl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        i = t.callbackNode,
        n === 0 || t === e && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null)
            return i !== null && i !== null && du(i),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((n & 3) === 0 || gi(t, n)) {
            if (e = n & -n,
            e === t.callbackPriority)
                return e;
            switch (i !== null && du(i),
            yu(n)) {
            case 2:
            case 8:
                n = Ic;
                break;
            case 32:
                n = Dl;
                break;
            case 268435456:
                n = tf;
                break;
            default:
                n = Dl
            }
            return i = fm.bind(null, t),
            n = hu(n, i),
            t.callbackPriority = e,
            t.callbackNode = n,
            e
        }
        return i !== null && i !== null && du(i),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function fm(t, e) {
        if (Zt !== 0 && Zt !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var n = t.callbackNode;
        if (Es() && t.callbackNode !== n)
            return null;
        var i = ft;
        return i = wl(t, t === Mt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        i === 0 ? null : (Qd(t, i, e),
        cm(t, ge()),
        t.callbackNode != null && t.callbackNode === n ? fm.bind(null, t) : null)
    }
    function hm(t, e) {
        if (Es())
            return null;
        Qd(t, e, !0)
    }
    function kv() {
        l1(function() {
            (gt & 6) !== 0 ? hu($c, Qv) : rm()
        })
    }
    function ar() {
        if (Ln === 0) {
            var t = La;
            t === 0 && (t = Cl,
            Cl <<= 1,
            (Cl & 261888) === 0 && (Cl = 256)),
            Ln = t
        }
        return Ln
    }
    function dm(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : _l("" + t)
    }
    function mm(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name,
        n.value = e.value,
        t.id && n.setAttribute("form", t.id),
        e.parentNode.insertBefore(n, e),
        t = new FormData(t),
        n.parentNode.removeChild(n),
        t
    }
    function Jv(t, e, n, i, s) {
        if (e === "submit" && n && n.stateNode === s) {
            var r = dm((s[oe] || null).action)
              , f = i.submitter;
            f && (e = (e = f[oe] || null) ? dm(e.formAction) : f.getAttribute("formAction"),
            e !== null && (r = e,
            f = null));
            var g = new Ll("action","action",null,i,s);
            t.push({
                event: g,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (Ln !== 0) {
                                var x = f ? mm(s, f) : new FormData(s);
                                Ao(n, {
                                    pending: !0,
                                    data: x,
                                    method: s.method,
                                    action: r
                                }, null, x)
                            }
                        } else
                            typeof r == "function" && (g.preventDefault(),
                            x = f ? mm(s, f) : new FormData(s),
                            Ao(n, {
                                pending: !0,
                                data: x,
                                method: s.method,
                                action: r
                            }, r, x))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var ir = 0; ir < Hu.length; ir++) {
        var lr = Hu[ir]
          , Fv = lr.toLowerCase()
          , Wv = lr[0].toUpperCase() + lr.slice(1);
        qe(Fv, "on" + Wv)
    }
    qe(Zf, "onAnimationEnd"),
    qe(Qf, "onAnimationIteration"),
    qe(kf, "onAnimationStart"),
    qe("dblclick", "onDoubleClick"),
    qe("focusin", "onFocus"),
    qe("focusout", "onBlur"),
    qe(hv, "onTransitionRun"),
    qe(dv, "onTransitionStart"),
    qe(mv, "onTransitionCancel"),
    qe(Jf, "onTransitionEnd"),
    Ea("onMouseEnter", ["mouseout", "mouseover"]),
    Ea("onMouseLeave", ["mouseout", "mouseover"]),
    Ea("onPointerEnter", ["pointerout", "pointerover"]),
    Ea("onPointerLeave", ["pointerout", "pointerover"]),
    Pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Pv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ii));
    function pm(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var i = t[n]
              , s = i.event;
            i = i.listeners;
            t: {
                var r = void 0;
                if (e)
                    for (var f = i.length - 1; 0 <= f; f--) {
                        var g = i[f]
                          , x = g.instance
                          , C = g.currentTarget;
                        if (g = g.listener,
                        x !== r && s.isPropagationStopped())
                            break t;
                        r = g,
                        s.currentTarget = C;
                        try {
                            r(s)
                        } catch (N) {
                            ql(N)
                        }
                        s.currentTarget = null,
                        r = x
                    }
                else
                    for (f = 0; f < i.length; f++) {
                        if (g = i[f],
                        x = g.instance,
                        C = g.currentTarget,
                        g = g.listener,
                        x !== r && s.isPropagationStopped())
                            break t;
                        r = g,
                        s.currentTarget = C;
                        try {
                            r(s)
                        } catch (N) {
                            ql(N)
                        }
                        s.currentTarget = null,
                        r = x
                    }
            }
        }
    }
    function rt(t, e) {
        var n = e[gu];
        n === void 0 && (n = e[gu] = new Set);
        var i = t + "__bubble";
        n.has(i) || (ym(e, t, 2, !1),
        n.add(i))
    }
    function sr(t, e, n) {
        var i = 0;
        e && (i |= 4),
        ym(n, t, i, e)
    }
    var Cs = "_reactListening" + Math.random().toString(36).slice(2);
    function ur(t) {
        if (!t[Cs]) {
            t[Cs] = !0,
            rf.forEach(function(n) {
                n !== "selectionchange" && (Pv.has(n) || sr(n, !1, t),
                sr(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Cs] || (e[Cs] = !0,
            sr("selectionchange", !1, e))
        }
    }
    function ym(t, e, n, i) {
        switch (Zm(e)) {
        case 2:
            var s = M1;
            break;
        case 8:
            s = D1;
            break;
        default:
            s = Tr
        }
        n = s.bind(null, e, n, t),
        s = void 0,
        !Du || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
        i ? s !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: s
        }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
            passive: s
        }) : t.addEventListener(e, n, !1)
    }
    function or(t, e, n, i, s) {
        var r = i;
        if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
            t: for (; ; ) {
                if (i === null)
                    return;
                var f = i.tag;
                if (f === 3 || f === 4) {
                    var g = i.stateNode.containerInfo;
                    if (g === s)
                        break;
                    if (f === 4)
                        for (f = i.return; f !== null; ) {
                            var x = f.tag;
                            if ((x === 3 || x === 4) && f.stateNode.containerInfo === s)
                                return;
                            f = f.return
                        }
                    for (; g !== null; ) {
                        if (f = Sa(g),
                        f === null)
                            return;
                        if (x = f.tag,
                        x === 5 || x === 6 || x === 26 || x === 27) {
                            i = r = f;
                            continue t
                        }
                        g = g.parentNode
                    }
                }
                i = i.return
            }
        Sf(function() {
            var C = r
              , N = Eu(n)
              , _ = [];
            t: {
                var z = Ff.get(t);
                if (z !== void 0) {
                    var j = Ll
                      , Q = t;
                    switch (t) {
                    case "keypress":
                        if (Ul(n) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        j = Kg;
                        break;
                    case "focusin":
                        Q = "focus",
                        j = wu;
                        break;
                    case "focusout":
                        Q = "blur",
                        j = wu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        j = wu;
                        break;
                    case "click":
                        if (n.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        j = Ef;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        j = Rg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        j = kg;
                        break;
                    case Zf:
                    case Qf:
                    case kf:
                        j = Vg;
                        break;
                    case Jf:
                        j = Fg;
                        break;
                    case "scroll":
                    case "scrollend":
                        j = wg;
                        break;
                    case "wheel":
                        j = Pg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        j = Bg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        j = Df;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        j = Ig
                    }
                    var tt = (e & 4) !== 0
                      , Et = !tt && (t === "scroll" || t === "scrollend")
                      , M = tt ? z !== null ? z + "Capture" : null : z;
                    tt = [];
                    for (var A = C, D; A !== null; ) {
                        var O = A;
                        if (D = O.stateNode,
                        O = O.tag,
                        O !== 5 && O !== 26 && O !== 27 || D === null || M === null || (O = Si(A, M),
                        O != null && tt.push(tl(A, O, D))),
                        Et)
                            break;
                        A = A.return
                    }
                    0 < tt.length && (z = new j(z,Q,null,n,N),
                    _.push({
                        event: z,
                        listeners: tt
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (z = t === "mouseover" || t === "pointerover",
                    j = t === "mouseout" || t === "pointerout",
                    z && n !== Au && (Q = n.relatedTarget || n.fromElement) && (Sa(Q) || Q[xa]))
                        break t;
                    if ((j || z) && (z = N.window === N ? N : (z = N.ownerDocument) ? z.defaultView || z.parentWindow : window,
                    j ? (Q = n.relatedTarget || n.toElement,
                    j = C,
                    Q = Q ? Sa(Q) : null,
                    Q !== null && (Et = d(Q),
                    tt = Q.tag,
                    Q !== Et || tt !== 5 && tt !== 27 && tt !== 6) && (Q = null)) : (j = null,
                    Q = C),
                    j !== Q)) {
                        if (tt = Ef,
                        O = "onMouseLeave",
                        M = "onMouseEnter",
                        A = "mouse",
                        (t === "pointerout" || t === "pointerover") && (tt = Df,
                        O = "onPointerLeave",
                        M = "onPointerEnter",
                        A = "pointer"),
                        Et = j == null ? z : xi(j),
                        D = Q == null ? z : xi(Q),
                        z = new tt(O,A + "leave",j,n,N),
                        z.target = Et,
                        z.relatedTarget = D,
                        O = null,
                        Sa(N) === C && (tt = new tt(M,A + "enter",Q,n,N),
                        tt.target = D,
                        tt.relatedTarget = Et,
                        O = tt),
                        Et = O,
                        j && Q)
                            e: {
                                for (tt = $v,
                                M = j,
                                A = Q,
                                D = 0,
                                O = M; O; O = tt(O))
                                    D++;
                                O = 0;
                                for (var $ = A; $; $ = tt($))
                                    O++;
                                for (; 0 < D - O; )
                                    M = tt(M),
                                    D--;
                                for (; 0 < O - D; )
                                    A = tt(A),
                                    O--;
                                for (; D--; ) {
                                    if (M === A || A !== null && M === A.alternate) {
                                        tt = M;
                                        break e
                                    }
                                    M = tt(M),
                                    A = tt(A)
                                }
                                tt = null
                            }
                        else
                            tt = null;
                        j !== null && gm(_, z, j, tt, !1),
                        Q !== null && Et !== null && gm(_, Et, Q, tt, !0)
                    }
                }
                t: {
                    if (z = C ? xi(C) : window,
                    j = z.nodeName && z.nodeName.toLowerCase(),
                    j === "select" || j === "input" && z.type === "file")
                        var pt = _f;
                    else if (Rf(z))
                        if (Vf)
                            pt = rv;
                        else {
                            pt = uv;
                            var W = sv
                        }
                    else
                        j = z.nodeName,
                        !j || j.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? C && Tu(C.elementType) && (pt = _f) : pt = ov;
                    if (pt && (pt = pt(t, C))) {
                        Of(_, pt, n, N);
                        break t
                    }
                    W && W(t, z, C),
                    t === "focusout" && C && z.type === "number" && C.memoizedProps.value != null && Su(z, "number", z.value)
                }
                switch (W = C ? xi(C) : window,
                t) {
                case "focusin":
                    (Rf(W) || W.contentEditable === "true") && (wa = W,
                    Uu = C,
                    ji = null);
                    break;
                case "focusout":
                    ji = Uu = wa = null;
                    break;
                case "mousedown":
                    Bu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Bu = !1,
                    Xf(_, n, N);
                    break;
                case "selectionchange":
                    if (fv)
                        break;
                case "keydown":
                case "keyup":
                    Xf(_, n, N)
                }
                var st;
                if (Ru)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var ht = "onCompositionStart";
                            break t;
                        case "compositionend":
                            ht = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            ht = "onCompositionUpdate";
                            break t
                        }
                        ht = void 0
                    }
                else
                    ja ? wf(t, n) && (ht = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ht = "onCompositionStart");
                ht && (Cf && n.locale !== "ko" && (ja || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && ja && (st = Tf()) : (Tn = N,
                Cu = "value"in Tn ? Tn.value : Tn.textContent,
                ja = !0)),
                W = zs(C, ht),
                0 < W.length && (ht = new Mf(ht,t,null,n,N),
                _.push({
                    event: ht,
                    listeners: W
                }),
                st ? ht.data = st : (st = Nf(n),
                st !== null && (ht.data = st)))),
                (st = ev ? nv(t, n) : av(t, n)) && (ht = zs(C, "onBeforeInput"),
                0 < ht.length && (W = new Mf("onBeforeInput","beforeinput",null,n,N),
                _.push({
                    event: W,
                    listeners: ht
                }),
                W.data = st)),
                Jv(_, t, C, n, N)
            }
            pm(_, e)
        })
    }
    function tl(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }
    function zs(t, e) {
        for (var n = e + "Capture", i = []; t !== null; ) {
            var s = t
              , r = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || r === null || (s = Si(t, n),
            s != null && i.unshift(tl(t, s, r)),
            s = Si(t, e),
            s != null && i.push(tl(t, s, r))),
            t.tag === 3)
                return i;
            t = t.return
        }
        return []
    }
    function $v(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function gm(t, e, n, i, s) {
        for (var r = e._reactName, f = []; n !== null && n !== i; ) {
            var g = n
              , x = g.alternate
              , C = g.stateNode;
            if (g = g.tag,
            x !== null && x === i)
                break;
            g !== 5 && g !== 26 && g !== 27 || C === null || (x = C,
            s ? (C = Si(n, r),
            C != null && f.unshift(tl(n, C, x))) : s || (C = Si(n, r),
            C != null && f.push(tl(n, C, x)))),
            n = n.return
        }
        f.length !== 0 && t.push({
            event: e,
            listeners: f
        })
    }
    var Iv = /\r\n?/g
      , t1 = /\u0000|\uFFFD/g;
    function vm(t) {
        return (typeof t == "string" ? t : "" + t).replace(Iv, `
`).replace(t1, "")
    }
    function bm(t, e) {
        return e = vm(e),
        vm(t) === e
    }
    function At(t, e, n, i, s, r) {
        switch (n) {
        case "children":
            typeof i == "string" ? e === "body" || e === "textarea" && i === "" || Da(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Da(t, "" + i);
            break;
        case "className":
            Rl(t, "class", i);
            break;
        case "tabIndex":
            Rl(t, "tabindex", i);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Rl(t, n, i);
            break;
        case "style":
            bf(t, i, r);
            break;
        case "data":
            if (e !== "object") {
                Rl(t, "data", i);
                break
            }
        case "src":
        case "href":
            if (i === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break
            }
            if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                t.removeAttribute(n);
                break
            }
            i = _l("" + i),
            t.setAttribute(n, i);
            break;
        case "action":
        case "formAction":
            if (typeof i == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof r == "function" && (n === "formAction" ? (e !== "input" && At(t, e, "name", s.name, s, null),
                At(t, e, "formEncType", s.formEncType, s, null),
                At(t, e, "formMethod", s.formMethod, s, null),
                At(t, e, "formTarget", s.formTarget, s, null)) : (At(t, e, "encType", s.encType, s, null),
                At(t, e, "method", s.method, s, null),
                At(t, e, "target", s.target, s, null)));
            if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                t.removeAttribute(n);
                break
            }
            i = _l("" + i),
            t.setAttribute(n, i);
            break;
        case "onClick":
            i != null && (t.onclick = tn);
            break;
        case "onScroll":
            i != null && rt("scroll", t);
            break;
        case "onScrollEnd":
            i != null && rt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(o(61));
                if (n = i.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "multiple":
            t.multiple = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "muted":
            t.muted = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            n = _l("" + i),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "" + i) : t.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
        case "capture":
        case "download":
            i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
            break;
        case "popover":
            rt("beforetoggle", t),
            rt("toggle", t),
            Nl(t, "popover", i);
            break;
        case "xlinkActuate":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
            break;
        case "xlinkArcrole":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
            break;
        case "xlinkRole":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
            break;
        case "xlinkShow":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
            break;
        case "xlinkTitle":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
            break;
        case "xlinkType":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
            break;
        case "xmlBase":
            Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
            break;
        case "xmlLang":
            Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
            break;
        case "xmlSpace":
            Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
            break;
        case "is":
            Nl(t, "is", i);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = zg.get(n) || n,
            Nl(t, n, i))
        }
    }
    function rr(t, e, n, i, s, r) {
        switch (n) {
        case "style":
            bf(t, i, r);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(o(61));
                if (n = i.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "children":
            typeof i == "string" ? Da(t, i) : (typeof i == "number" || typeof i == "bigint") && Da(t, "" + i);
            break;
        case "onScroll":
            i != null && rt("scroll", t);
            break;
        case "onScrollEnd":
            i != null && rt("scrollend", t);
            break;
        case "onClick":
            i != null && (t.onclick = tn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!cf.hasOwnProperty(n))
                t: {
                    if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"),
                    e = n.slice(2, s ? n.length - 7 : void 0),
                    r = t[oe] || null,
                    r = r != null ? r[n] : null,
                    typeof r == "function" && t.removeEventListener(e, r, s),
                    typeof i == "function")) {
                        typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)),
                        t.addEventListener(e, i, s);
                        break t
                    }
                    n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : Nl(t, n, i)
                }
        }
    }
    function te(t, e, n) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            rt("error", t),
            rt("load", t);
            var i = !1, s = !1, r;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var f = n[r];
                    if (f != null)
                        switch (r) {
                        case "src":
                            i = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            At(t, e, r, f, n, null)
                        }
                }
            s && At(t, e, "srcSet", n.srcSet, n, null),
            i && At(t, e, "src", n.src, n, null);
            return;
        case "input":
            rt("invalid", t);
            var g = r = f = s = null
              , x = null
              , C = null;
            for (i in n)
                if (n.hasOwnProperty(i)) {
                    var N = n[i];
                    if (N != null)
                        switch (i) {
                        case "name":
                            s = N;
                            break;
                        case "type":
                            f = N;
                            break;
                        case "checked":
                            x = N;
                            break;
                        case "defaultChecked":
                            C = N;
                            break;
                        case "value":
                            r = N;
                            break;
                        case "defaultValue":
                            g = N;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (N != null)
                                throw Error(o(137, e));
                            break;
                        default:
                            At(t, e, i, N, n, null)
                        }
                }
            pf(t, r, g, x, C, f, s, !1);
            return;
        case "select":
            rt("invalid", t),
            i = f = r = null;
            for (s in n)
                if (n.hasOwnProperty(s) && (g = n[s],
                g != null))
                    switch (s) {
                    case "value":
                        r = g;
                        break;
                    case "defaultValue":
                        f = g;
                        break;
                    case "multiple":
                        i = g;
                    default:
                        At(t, e, s, g, n, null)
                    }
            e = r,
            n = f,
            t.multiple = !!i,
            e != null ? Ma(t, !!i, e, !1) : n != null && Ma(t, !!i, n, !0);
            return;
        case "textarea":
            rt("invalid", t),
            r = s = i = null;
            for (f in n)
                if (n.hasOwnProperty(f) && (g = n[f],
                g != null))
                    switch (f) {
                    case "value":
                        i = g;
                        break;
                    case "defaultValue":
                        s = g;
                        break;
                    case "children":
                        r = g;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (g != null)
                            throw Error(o(91));
                        break;
                    default:
                        At(t, e, f, g, n, null)
                    }
            gf(t, i, s, r);
            return;
        case "option":
            for (x in n)
                if (n.hasOwnProperty(x) && (i = n[x],
                i != null))
                    switch (x) {
                    case "selected":
                        t.selected = i && typeof i != "function" && typeof i != "symbol";
                        break;
                    default:
                        At(t, e, x, i, n, null)
                    }
            return;
        case "dialog":
            rt("beforetoggle", t),
            rt("toggle", t),
            rt("cancel", t),
            rt("close", t);
            break;
        case "iframe":
        case "object":
            rt("load", t);
            break;
        case "video":
        case "audio":
            for (i = 0; i < Ii.length; i++)
                rt(Ii[i], t);
            break;
        case "image":
            rt("error", t),
            rt("load", t);
            break;
        case "details":
            rt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            rt("error", t),
            rt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (C in n)
                if (n.hasOwnProperty(C) && (i = n[C],
                i != null))
                    switch (C) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, e));
                    default:
                        At(t, e, C, i, n, null)
                    }
            return;
        default:
            if (Tu(e)) {
                for (N in n)
                    n.hasOwnProperty(N) && (i = n[N],
                    i !== void 0 && rr(t, e, N, i, n, void 0));
                return
            }
        }
        for (g in n)
            n.hasOwnProperty(g) && (i = n[g],
            i != null && At(t, e, g, i, n, null))
    }
    function e1(t, e, n, i) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , r = null
              , f = null
              , g = null
              , x = null
              , C = null
              , N = null;
            for (j in n) {
                var _ = n[j];
                if (n.hasOwnProperty(j) && _ != null)
                    switch (j) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        x = _;
                    default:
                        i.hasOwnProperty(j) || At(t, e, j, null, i, _)
                    }
            }
            for (var z in i) {
                var j = i[z];
                if (_ = n[z],
                i.hasOwnProperty(z) && (j != null || _ != null))
                    switch (z) {
                    case "type":
                        r = j;
                        break;
                    case "name":
                        s = j;
                        break;
                    case "checked":
                        C = j;
                        break;
                    case "defaultChecked":
                        N = j;
                        break;
                    case "value":
                        f = j;
                        break;
                    case "defaultValue":
                        g = j;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (j != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        j !== _ && At(t, e, z, j, i, _)
                    }
            }
            xu(t, f, g, x, C, N, r, s);
            return;
        case "select":
            j = f = g = z = null;
            for (r in n)
                if (x = n[r],
                n.hasOwnProperty(r) && x != null)
                    switch (r) {
                    case "value":
                        break;
                    case "multiple":
                        j = x;
                    default:
                        i.hasOwnProperty(r) || At(t, e, r, null, i, x)
                    }
            for (s in i)
                if (r = i[s],
                x = n[s],
                i.hasOwnProperty(s) && (r != null || x != null))
                    switch (s) {
                    case "value":
                        z = r;
                        break;
                    case "defaultValue":
                        g = r;
                        break;
                    case "multiple":
                        f = r;
                    default:
                        r !== x && At(t, e, s, r, i, x)
                    }
            e = g,
            n = f,
            i = j,
            z != null ? Ma(t, !!n, z, !1) : !!i != !!n && (e != null ? Ma(t, !!n, e, !0) : Ma(t, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            j = z = null;
            for (g in n)
                if (s = n[g],
                n.hasOwnProperty(g) && s != null && !i.hasOwnProperty(g))
                    switch (g) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        At(t, e, g, null, i, s)
                    }
            for (f in i)
                if (s = i[f],
                r = n[f],
                i.hasOwnProperty(f) && (s != null || r != null))
                    switch (f) {
                    case "value":
                        z = s;
                        break;
                    case "defaultValue":
                        j = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(o(91));
                        break;
                    default:
                        s !== r && At(t, e, f, s, i, r)
                    }
            yf(t, z, j);
            return;
        case "option":
            for (var Q in n)
                if (z = n[Q],
                n.hasOwnProperty(Q) && z != null && !i.hasOwnProperty(Q))
                    switch (Q) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        At(t, e, Q, null, i, z)
                    }
            for (x in i)
                if (z = i[x],
                j = n[x],
                i.hasOwnProperty(x) && z !== j && (z != null || j != null))
                    switch (x) {
                    case "selected":
                        t.selected = z && typeof z != "function" && typeof z != "symbol";
                        break;
                    default:
                        At(t, e, x, z, i, j)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var tt in n)
                z = n[tt],
                n.hasOwnProperty(tt) && z != null && !i.hasOwnProperty(tt) && At(t, e, tt, null, i, z);
            for (C in i)
                if (z = i[C],
                j = n[C],
                i.hasOwnProperty(C) && z !== j && (z != null || j != null))
                    switch (C) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (z != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        At(t, e, C, z, i, j)
                    }
            return;
        default:
            if (Tu(e)) {
                for (var Et in n)
                    z = n[Et],
                    n.hasOwnProperty(Et) && z !== void 0 && !i.hasOwnProperty(Et) && rr(t, e, Et, void 0, i, z);
                for (N in i)
                    z = i[N],
                    j = n[N],
                    !i.hasOwnProperty(N) || z === j || z === void 0 && j === void 0 || rr(t, e, N, z, i, j);
                return
            }
        }
        for (var M in n)
            z = n[M],
            n.hasOwnProperty(M) && z != null && !i.hasOwnProperty(M) && At(t, e, M, null, i, z);
        for (_ in i)
            z = i[_],
            j = n[_],
            !i.hasOwnProperty(_) || z === j || z == null && j == null || At(t, e, _, z, i, j)
    }
    function xm(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function n1() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
                var s = n[i]
                  , r = s.transferSize
                  , f = s.initiatorType
                  , g = s.duration;
                if (r && g && xm(f)) {
                    for (f = 0,
                    g = s.responseEnd,
                    i += 1; i < n.length; i++) {
                        var x = n[i]
                          , C = x.startTime;
                        if (C > g)
                            break;
                        var N = x.transferSize
                          , _ = x.initiatorType;
                        N && xm(_) && (x = x.responseEnd,
                        f += N * (x < g ? 1 : (g - C) / (x - C)))
                    }
                    if (--i,
                    e += 8 * (r + f) / (s.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var cr = null
      , fr = null;
    function js(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function Sm(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Tm(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function hr(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var dr = null;
    function a1() {
        var t = window.event;
        return t && t.type === "popstate" ? t === dr ? !1 : (dr = t,
        !0) : (dr = null,
        !1)
    }
    var Am = typeof setTimeout == "function" ? setTimeout : void 0
      , i1 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Em = typeof Promise == "function" ? Promise : void 0
      , l1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Em < "u" ? function(t) {
        return Em.resolve(null).then(t).catch(s1)
    }
    : Am;
    function s1(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Hn(t) {
        return t === "head"
    }
    function Mm(t, e) {
        var n = e
          , i = 0;
        do {
            var s = n.nextSibling;
            if (t.removeChild(n),
            s && s.nodeType === 8)
                if (n = s.data,
                n === "/$" || n === "/&") {
                    if (i === 0) {
                        t.removeChild(s),
                        ai(e);
                        return
                    }
                    i--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                    i++;
                else if (n === "html")
                    el(t.ownerDocument.documentElement);
                else if (n === "head") {
                    n = t.ownerDocument.head,
                    el(n);
                    for (var r = n.firstChild; r; ) {
                        var f = r.nextSibling
                          , g = r.nodeName;
                        r[bi] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r),
                        r = f
                    }
                } else
                    n === "body" && el(t.ownerDocument.body);
            n = s
        } while (n);
        ai(e)
    }
    function Dm(t, e) {
        var n = t;
        t = 0;
        do {
            var i = n.nextSibling;
            if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display,
            n.style.display = "none") : (n.style.display = n._stashedDisplay || "",
            n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue,
            n.nodeValue = "") : n.nodeValue = n._stashedText || ""),
            i && i.nodeType === 8)
                if (n = i.data,
                n === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
            n = i
        } while (n)
    }
    function mr(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var n = e;
            switch (e = e.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                mr(n),
                vu(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(n)
        }
    }
    function u1(t, e, n, i) {
        for (; t.nodeType === 1; ) {
            var s = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (i) {
                if (!t[bi])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (r = t.getAttribute("rel"),
                        r === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (r !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (r = t.getAttribute("src"),
                        (r !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var r = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && t.getAttribute("name") === r)
                    return t
            } else
                return t;
            if (t = Ue(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function o1(t, e, n) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ue(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function Cm(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ue(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function pr(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function yr(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function r1(t, e) {
        var n = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || n.readyState !== "loading")
            e();
        else {
            var i = function() {
                e(),
                n.removeEventListener("DOMContentLoaded", i)
            };
            n.addEventListener("DOMContentLoaded", i),
            t._reactRetry = i
        }
    }
    function Ue(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return t
    }
    var gr = null;
    function zm(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "/$" || n === "/&") {
                    if (e === 0)
                        return Ue(t.nextSibling);
                    e--
                } else
                    n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function jm(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    n !== "/$" && n !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function wm(t, e, n) {
        switch (e = js(n),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(o(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(o(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(o(454));
            return t;
        default:
            throw Error(o(451))
        }
    }
    function el(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        vu(t)
    }
    var Be = new Map
      , Nm = new Set;
    function ws(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var gn = L.d;
    L.d = {
        f: c1,
        r: f1,
        D: h1,
        C: d1,
        L: m1,
        m: p1,
        X: g1,
        S: y1,
        M: v1
    };
    function c1() {
        var t = gn.f()
          , e = Ss();
        return t || e
    }
    function f1(t) {
        var e = Ta(t);
        e !== null && e.tag === 5 && e.type === "form" ? Jh(e) : gn.r(t)
    }
    var ti = typeof document > "u" ? null : document;
    function Rm(t, e, n) {
        var i = ti;
        if (i && typeof e == "string" && e) {
            var s = je(e);
            s = 'link[rel="' + t + '"][href="' + s + '"]',
            typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
            Nm.has(s) || (Nm.add(s),
            t = {
                rel: t,
                crossOrigin: n,
                href: e
            },
            i.querySelector(s) === null && (e = i.createElement("link"),
            te(e, "link", t),
            kt(e),
            i.head.appendChild(e)))
        }
    }
    function h1(t) {
        gn.D(t),
        Rm("dns-prefetch", t, null)
    }
    function d1(t, e) {
        gn.C(t, e),
        Rm("preconnect", t, e)
    }
    function m1(t, e, n) {
        gn.L(t, e, n);
        var i = ti;
        if (i && t && e) {
            var s = 'link[rel="preload"][as="' + je(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + je(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (s += '[imagesizes="' + je(n.imageSizes) + '"]')) : s += '[href="' + je(t) + '"]';
            var r = s;
            switch (e) {
            case "style":
                r = ei(t);
                break;
            case "script":
                r = ni(t)
            }
            Be.has(r) || (t = b({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n),
            Be.set(r, t),
            i.querySelector(s) !== null || e === "style" && i.querySelector(nl(r)) || e === "script" && i.querySelector(al(r)) || (e = i.createElement("link"),
            te(e, "link", t),
            kt(e),
            i.head.appendChild(e)))
        }
    }
    function p1(t, e) {
        gn.m(t, e);
        var n = ti;
        if (n && t) {
            var i = e && typeof e.as == "string" ? e.as : "script"
              , s = 'link[rel="modulepreload"][as="' + je(i) + '"][href="' + je(t) + '"]'
              , r = s;
            switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                r = ni(t)
            }
            if (!Be.has(r) && (t = b({
                rel: "modulepreload",
                href: t
            }, e),
            Be.set(r, t),
            n.querySelector(s) === null)) {
                switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(al(r)))
                        return
                }
                i = n.createElement("link"),
                te(i, "link", t),
                kt(i),
                n.head.appendChild(i)
            }
        }
    }
    function y1(t, e, n) {
        gn.S(t, e, n);
        var i = ti;
        if (i && t) {
            var s = Aa(i).hoistableStyles
              , r = ei(t);
            e = e || "default";
            var f = s.get(r);
            if (!f) {
                var g = {
                    loading: 0,
                    preload: null
                };
                if (f = i.querySelector(nl(r)))
                    g.loading = 5;
                else {
                    t = b({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n),
                    (n = Be.get(r)) && vr(t, n);
                    var x = f = i.createElement("link");
                    kt(x),
                    te(x, "link", t),
                    x._p = new Promise(function(C, N) {
                        x.onload = C,
                        x.onerror = N
                    }
                    ),
                    x.addEventListener("load", function() {
                        g.loading |= 1
                    }),
                    x.addEventListener("error", function() {
                        g.loading |= 2
                    }),
                    g.loading |= 4,
                    Ns(f, e, i)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: g
                },
                s.set(r, f)
            }
        }
    }
    function g1(t, e) {
        gn.X(t, e);
        var n = ti;
        if (n && t) {
            var i = Aa(n).hoistableScripts
              , s = ni(t)
              , r = i.get(s);
            r || (r = n.querySelector(al(s)),
            r || (t = b({
                src: t,
                async: !0
            }, e),
            (e = Be.get(s)) && br(t, e),
            r = n.createElement("script"),
            kt(r),
            te(r, "link", t),
            n.head.appendChild(r)),
            r = {
                type: "script",
                instance: r,
                count: 1,
                state: null
            },
            i.set(s, r))
        }
    }
    function v1(t, e) {
        gn.M(t, e);
        var n = ti;
        if (n && t) {
            var i = Aa(n).hoistableScripts
              , s = ni(t)
              , r = i.get(s);
            r || (r = n.querySelector(al(s)),
            r || (t = b({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Be.get(s)) && br(t, e),
            r = n.createElement("script"),
            kt(r),
            te(r, "link", t),
            n.head.appendChild(r)),
            r = {
                type: "script",
                instance: r,
                count: 1,
                state: null
            },
            i.set(s, r))
        }
    }
    function Om(t, e, n, i) {
        var s = (s = ut.current) ? ws(s) : null;
        if (!s)
            throw Error(o(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ei(n.href),
            n = Aa(s).hoistableStyles,
            i = n.get(e),
            i || (i = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = ei(n.href);
                var r = Aa(s).hoistableStyles
                  , f = r.get(t);
                if (f || (s = s.ownerDocument || s,
                f = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                r.set(t, f),
                (r = s.querySelector(nl(t))) && !r._p && (f.instance = r,
                f.state.loading = 5),
                Be.has(t) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Be.set(t, n),
                r || b1(s, t, n, f.state))),
                e && i === null)
                    throw Error(o(528, ""));
                return f
            }
            if (e && i !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return e = n.async,
            n = n.src,
            typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ni(n),
            n = Aa(s).hoistableScripts,
            i = n.get(e),
            i || (i = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, t))
        }
    }
    function ei(t) {
        return 'href="' + je(t) + '"'
    }
    function nl(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function _m(t) {
        return b({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function b1(t, e, n, i) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"),
        i.preload = e,
        e.addEventListener("load", function() {
            return i.loading |= 1
        }),
        e.addEventListener("error", function() {
            return i.loading |= 2
        }),
        te(e, "link", n),
        kt(e),
        t.head.appendChild(e))
    }
    function ni(t) {
        return '[src="' + je(t) + '"]'
    }
    function al(t) {
        return "script[async]" + t
    }
    function Vm(t, e, n) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var i = t.querySelector('style[data-href~="' + je(n.href) + '"]');
                if (i)
                    return e.instance = i,
                    kt(i),
                    i;
                var s = b({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return i = (t.ownerDocument || t).createElement("style"),
                kt(i),
                te(i, "style", s),
                Ns(i, n.precedence, t),
                e.instance = i;
            case "stylesheet":
                s = ei(n.href);
                var r = t.querySelector(nl(s));
                if (r)
                    return e.state.loading |= 4,
                    e.instance = r,
                    kt(r),
                    r;
                i = _m(n),
                (s = Be.get(s)) && vr(i, s),
                r = (t.ownerDocument || t).createElement("link"),
                kt(r);
                var f = r;
                return f._p = new Promise(function(g, x) {
                    f.onload = g,
                    f.onerror = x
                }
                ),
                te(r, "link", i),
                e.state.loading |= 4,
                Ns(r, n.precedence, t),
                e.instance = r;
            case "script":
                return r = ni(n.src),
                (s = t.querySelector(al(r))) ? (e.instance = s,
                kt(s),
                s) : (i = n,
                (s = Be.get(r)) && (i = b({}, n),
                br(i, s)),
                t = t.ownerDocument || t,
                s = t.createElement("script"),
                kt(s),
                te(s, "link", i),
                t.head.appendChild(s),
                e.instance = s);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance,
            e.state.loading |= 4,
            Ns(i, n.precedence, t));
        return e.instance
    }
    function Ns(t, e, n) {
        for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = i.length ? i[i.length - 1] : null, r = s, f = 0; f < i.length; f++) {
            var g = i[f];
            if (g.dataset.precedence === e)
                r = g;
            else if (r !== s)
                break
        }
        r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = n.nodeType === 9 ? n.head : n,
        e.insertBefore(t, e.firstChild))
    }
    function vr(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function br(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Rs = null;
    function Um(t, e, n) {
        if (Rs === null) {
            var i = new Map
              , s = Rs = new Map;
            s.set(n, i)
        } else
            s = Rs,
            i = s.get(n),
            i || (i = new Map,
            s.set(n, i));
        if (i.has(t))
            return i;
        for (i.set(t, null),
        n = n.getElementsByTagName(t),
        s = 0; s < n.length; s++) {
            var r = n[s];
            if (!(r[bi] || r[Wt] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = r.getAttribute(e) || "";
                f = t + f;
                var g = i.get(f);
                g ? g.push(r) : i.set(f, [r])
            }
        }
        return i
    }
    function Bm(t, e, n) {
        t = t.ownerDocument || t,
        t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }
    function x1(t, e, n) {
        if (n === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function Lm(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function S1(t, e, n, i) {
        if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var s = ei(i.href)
                  , r = e.querySelector(nl(s));
                if (r) {
                    e = r._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = Os.bind(t),
                    e.then(t, t)),
                    n.state.loading |= 4,
                    n.instance = r,
                    kt(r);
                    return
                }
                r = e.ownerDocument || e,
                i = _m(i),
                (s = Be.get(s)) && vr(i, s),
                r = r.createElement("link"),
                kt(r);
                var f = r;
                f._p = new Promise(function(g, x) {
                    f.onload = g,
                    f.onerror = x
                }
                ),
                te(r, "link", i),
                n.instance = r
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(n, e),
            (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++,
            n = Os.bind(t),
            e.addEventListener("load", n),
            e.addEventListener("error", n))
        }
    }
    var xr = 0;
    function T1(t, e) {
        return t.stylesheets && t.count === 0 && Vs(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(n) {
            var i = setTimeout(function() {
                if (t.stylesheets && Vs(t, t.stylesheets),
                t.unsuspend) {
                    var r = t.unsuspend;
                    t.unsuspend = null,
                    r()
                }
            }, 6e4 + e);
            0 < t.imgBytes && xr === 0 && (xr = 62500 * n1());
            var s = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && Vs(t, t.stylesheets),
                t.unsuspend)) {
                    var r = t.unsuspend;
                    t.unsuspend = null,
                    r()
                }
            }, (t.imgBytes > xr ? 50 : 800) + e);
            return t.unsuspend = n,
            function() {
                t.unsuspend = null,
                clearTimeout(i),
                clearTimeout(s)
            }
        }
        : null
    }
    function Os() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Vs(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var _s = null;
    function Vs(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        _s = new Map,
        e.forEach(A1, t),
        _s = null,
        Os.call(t))
    }
    function A1(t, e) {
        if (!(e.state.loading & 4)) {
            var n = _s.get(t);
            if (n)
                var i = n.get(null);
            else {
                n = new Map,
                _s.set(t, n);
                for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < s.length; r++) {
                    var f = s[r];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f),
                    i = f)
                }
                i && n.set(null, i)
            }
            s = e.instance,
            f = s.getAttribute("data-precedence"),
            r = n.get(f) || i,
            r === i && n.set(null, s),
            n.set(f, s),
            this.count++,
            i = Os.bind(this),
            s.addEventListener("load", i),
            s.addEventListener("error", i),
            r ? r.parentNode.insertBefore(s, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(s, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var il = {
        $$typeof: G,
        Provider: null,
        Consumer: null,
        _currentValue: F,
        _currentValue2: F,
        _threadCount: 0
    };
    function E1(t, e, n, i, s, r, f, g, x) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = mu(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = mu(0),
        this.hiddenUpdates = mu(null),
        this.identifierPrefix = i,
        this.onUncaughtError = s,
        this.onCaughtError = r,
        this.onRecoverableError = f,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = x,
        this.incompleteTransitions = new Map
    }
    function Hm(t, e, n, i, s, r, f, g, x, C, N, _) {
        return t = new E1(t,e,n,f,x,C,N,_,g),
        e = 1,
        r === !0 && (e |= 24),
        r = Se(3, null, null, e),
        t.current = r,
        r.stateNode = t,
        e = $u(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        r.memoizedState = {
            element: i,
            isDehydrated: n,
            cache: e
        },
        no(r),
        t
    }
    function Ym(t) {
        return t ? (t = Oa,
        t) : Oa
    }
    function qm(t, e, n, i, s, r) {
        s = Ym(s),
        i.context === null ? i.context = s : i.pendingContext = s,
        i = zn(e),
        i.payload = {
            element: n
        },
        r = r === void 0 ? null : r,
        r !== null && (i.callback = r),
        n = jn(t, i, e),
        n !== null && (me(n, t, e),
        Ui(n, t, e))
    }
    function Gm(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }
    function Sr(t, e) {
        Gm(t, e),
        (t = t.alternate) && Gm(t, e)
    }
    function Xm(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ea(t, 67108864);
            e !== null && me(e, t, 67108864),
            Sr(t, 67108864)
        }
    }
    function Km(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = De();
            e = pu(e);
            var n = ea(t, e);
            n !== null && me(n, t, e),
            Sr(t, e)
        }
    }
    var Us = !0;
    function M1(t, e, n, i) {
        var s = R.T;
        R.T = null;
        var r = L.p;
        try {
            L.p = 2,
            Tr(t, e, n, i)
        } finally {
            L.p = r,
            R.T = s
        }
    }
    function D1(t, e, n, i) {
        var s = R.T;
        R.T = null;
        var r = L.p;
        try {
            L.p = 8,
            Tr(t, e, n, i)
        } finally {
            L.p = r,
            R.T = s
        }
    }
    function Tr(t, e, n, i) {
        if (Us) {
            var s = Ar(i);
            if (s === null)
                or(t, e, i, Bs, n),
                Qm(t, i);
            else if (z1(s, t, e, n, i))
                i.stopPropagation();
            else if (Qm(t, i),
            e & 4 && -1 < C1.indexOf(t)) {
                for (; s !== null; ) {
                    var r = Ta(s);
                    if (r !== null)
                        switch (r.tag) {
                        case 3:
                            if (r = r.stateNode,
                            r.current.memoizedState.isDehydrated) {
                                var f = Wn(r.pendingLanes);
                                if (f !== 0) {
                                    var g = r;
                                    for (g.pendingLanes |= 2,
                                    g.entangledLanes |= 2; f; ) {
                                        var x = 1 << 31 - be(f);
                                        g.entanglements[1] |= x,
                                        f &= ~x
                                    }
                                    Fe(r),
                                    (gt & 6) === 0 && (bs = ge() + 500,
                                    $i(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            g = ea(r, 2),
                            g !== null && me(g, r, 2),
                            Ss(),
                            Sr(r, 2)
                        }
                    if (r = Ar(i),
                    r === null && or(t, e, i, Bs, n),
                    r === s)
                        break;
                    s = r
                }
                s !== null && i.stopPropagation()
            } else
                or(t, e, i, null, n)
        }
    }
    function Ar(t) {
        return t = Eu(t),
        Er(t)
    }
    var Bs = null;
    function Er(t) {
        if (Bs = null,
        t = Sa(t),
        t !== null) {
            var e = d(t);
            if (e === null)
                t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = h(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 31) {
                    if (t = y(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return Bs = t,
        null
    }
    function Zm(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (hg()) {
            case $c:
                return 2;
            case Ic:
                return 8;
            case Dl:
            case dg:
                return 32;
            case tf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Mr = !1
      , Yn = null
      , qn = null
      , Gn = null
      , ll = new Map
      , sl = new Map
      , Xn = []
      , C1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Qm(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            Yn = null;
            break;
        case "dragenter":
        case "dragleave":
            qn = null;
            break;
        case "mouseover":
        case "mouseout":
            Gn = null;
            break;
        case "pointerover":
        case "pointerout":
            ll.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            sl.delete(e.pointerId)
        }
    }
    function ul(t, e, n, i, s, r) {
        return t === null || t.nativeEvent !== r ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: i,
            nativeEvent: r,
            targetContainers: [s]
        },
        e !== null && (e = Ta(e),
        e !== null && Xm(e)),
        t) : (t.eventSystemFlags |= i,
        e = t.targetContainers,
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t)
    }
    function z1(t, e, n, i, s) {
        switch (e) {
        case "focusin":
            return Yn = ul(Yn, t, e, n, i, s),
            !0;
        case "dragenter":
            return qn = ul(qn, t, e, n, i, s),
            !0;
        case "mouseover":
            return Gn = ul(Gn, t, e, n, i, s),
            !0;
        case "pointerover":
            var r = s.pointerId;
            return ll.set(r, ul(ll.get(r) || null, t, e, n, i, s)),
            !0;
        case "gotpointercapture":
            return r = s.pointerId,
            sl.set(r, ul(sl.get(r) || null, t, e, n, i, s)),
            !0
        }
        return !1
    }
    function km(t) {
        var e = Sa(t.target);
        if (e !== null) {
            var n = d(e);
            if (n !== null) {
                if (e = n.tag,
                e === 13) {
                    if (e = h(n),
                    e !== null) {
                        t.blockedOn = e,
                        uf(t.priority, function() {
                            Km(n)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = y(n),
                    e !== null) {
                        t.blockedOn = e,
                        uf(t.priority, function() {
                            Km(n)
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Ls(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var n = Ar(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var i = new n.constructor(n.type,n);
                Au = i,
                n.target.dispatchEvent(i),
                Au = null
            } else
                return e = Ta(n),
                e !== null && Xm(e),
                t.blockedOn = n,
                !1;
            e.shift()
        }
        return !0
    }
    function Jm(t, e, n) {
        Ls(t) && n.delete(e)
    }
    function j1() {
        Mr = !1,
        Yn !== null && Ls(Yn) && (Yn = null),
        qn !== null && Ls(qn) && (qn = null),
        Gn !== null && Ls(Gn) && (Gn = null),
        ll.forEach(Jm),
        sl.forEach(Jm)
    }
    function Hs(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        Mr || (Mr = !0,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, j1)))
    }
    var Ys = null;
    function Fm(t) {
        Ys !== t && (Ys = t,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            Ys === t && (Ys = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e]
                  , i = t[e + 1]
                  , s = t[e + 2];
                if (typeof i != "function") {
                    if (Er(i || n) === null)
                        continue;
                    break
                }
                var r = Ta(n);
                r !== null && (t.splice(e, 3),
                e -= 3,
                Ao(r, {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: i
                }, i, s))
            }
        }))
    }
    function ai(t) {
        function e(x) {
            return Hs(x, t)
        }
        Yn !== null && Hs(Yn, t),
        qn !== null && Hs(qn, t),
        Gn !== null && Hs(Gn, t),
        ll.forEach(e),
        sl.forEach(e);
        for (var n = 0; n < Xn.length; n++) {
            var i = Xn[n];
            i.blockedOn === t && (i.blockedOn = null)
        }
        for (; 0 < Xn.length && (n = Xn[0],
        n.blockedOn === null); )
            km(n),
            n.blockedOn === null && Xn.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay,
        n != null)
            for (i = 0; i < n.length; i += 3) {
                var s = n[i]
                  , r = n[i + 1]
                  , f = s[oe] || null;
                if (typeof r == "function")
                    f || Fm(n);
                else if (f) {
                    var g = null;
                    if (r && r.hasAttribute("formAction")) {
                        if (s = r,
                        f = r[oe] || null)
                            g = f.formAction;
                        else if (Er(s) !== null)
                            continue
                    } else
                        g = f.action;
                    typeof g == "function" ? n[i + 1] = g : (n.splice(i, 3),
                    i -= 3),
                    Fm(n)
                }
            }
    }
    function Wm() {
        function t(r) {
            r.canIntercept && r.info === "react-transition" && r.intercept({
                handler: function() {
                    return new Promise(function(f) {
                        return s = f
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            s !== null && (s(),
            s = null),
            i || setTimeout(n, 20)
        }
        function n() {
            if (!i && !navigation.transition) {
                var r = navigation.currentEntry;
                r && r.url != null && navigation.navigate(r.url, {
                    state: r.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var i = !1
              , s = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(n, 100),
            function() {
                i = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                s !== null && (s(),
                s = null)
            }
        }
    }
    function Dr(t) {
        this._internalRoot = t
    }
    qs.prototype.render = Dr.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(o(409));
        var n = e.current
          , i = De();
        qm(n, i, t, e, null, null)
    }
    ,
    qs.prototype.unmount = Dr.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            qm(t.current, 2, null, t, null, null),
            Ss(),
            e[xa] = null
        }
    }
    ;
    function qs(t) {
        this._internalRoot = t
    }
    qs.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = sf();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < Xn.length && e !== 0 && e < Xn[n].priority; n++)
                ;
            Xn.splice(n, 0, t),
            n === 0 && km(t)
        }
    }
    ;
    var Pm = l.version;
    if (Pm !== "19.2.3")
        throw Error(o(527, Pm, "19.2.3"));
    L.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
            Error(o(268, t)));
        return t = m(e),
        t = t !== null ? v(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var w1 = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: R,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Gs.isDisabled && Gs.supportsFiber)
            try {
                yi = Gs.inject(w1),
                ve = Gs
            } catch {}
    }
    return rl.createRoot = function(t, e) {
        if (!c(t))
            throw Error(o(299));
        var n = !1
          , i = ""
          , s = id
          , r = ld
          , f = sd;
        return e != null && (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
        e.onCaughtError !== void 0 && (r = e.onCaughtError),
        e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        e = Hm(t, 1, !1, null, null, n, i, null, s, r, f, Wm),
        t[xa] = e.current,
        ur(t),
        new Dr(e)
    }
    ,
    rl.hydrateRoot = function(t, e, n) {
        if (!c(t))
            throw Error(o(299));
        var i = !1
          , s = ""
          , r = id
          , f = ld
          , g = sd
          , x = null;
        return n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
        n.onCaughtError !== void 0 && (f = n.onCaughtError),
        n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
        n.formState !== void 0 && (x = n.formState)),
        e = Hm(t, 1, !0, e, n ?? null, i, s, x, r, f, g, Wm),
        e.context = Ym(null),
        n = e.current,
        i = De(),
        i = pu(i),
        s = zn(i),
        s.callback = null,
        jn(n, s, i),
        n = i,
        e.current.lanes = n,
        vi(e, n),
        Fe(e),
        t[xa] = e.current,
        ur(t),
        new qs(e)
    }
    ,
    rl.version = "19.2.3",
    rl
}
var up;
function q1() {
    if (up)
        return jr.exports;
    up = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (l) {
                console.error(l)
            }
    }
    return a(),
    jr.exports = Y1(),
    jr.exports
}
var G1 = q1();
const X1 = A0(G1);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K1 = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Z1 = a => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, u, o) => o ? o.toUpperCase() : u.toLowerCase())
  , op = a => {
    const l = Z1(a);
    return l.charAt(0).toUpperCase() + l.slice(1)
}
  , E0 = (...a) => a.filter( (l, u, o) => !!l && l.trim() !== "" && o.indexOf(l) === u).join(" ").trim()
  , Q1 = a => {
    for (const l in a)
        if (l.startsWith("aria-") || l === "role" || l === "title")
            return !0
}
;
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var k1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J1 = q.forwardRef( ({color: a="currentColor", size: l=24, strokeWidth: u=2, absoluteStrokeWidth: o, className: c="", children: d, iconNode: h, ...y}, p) => q.createElement("svg", {
    ref: p,
    ...k1,
    width: l,
    height: l,
    stroke: a,
    strokeWidth: o ? Number(u) * 24 / Number(l) : u,
    className: E0("lucide", c),
    ...!d && !Q1(y) && {
        "aria-hidden": "true"
    },
    ...y
}, [...h.map( ([m,v]) => q.createElement(m, v)), ...Array.isArray(d) ? d : [d]]));
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = (a, l) => {
    const u = q.forwardRef( ({className: o, ...c}, d) => q.createElement(J1, {
        ref: d,
        iconNode: l,
        className: E0(`lucide-${K1(op(a))}`, `lucide-${a}`, o),
        ...c
    }));
    return u.displayName = op(a),
    u
}
;
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F1 = [["path", {
    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
    key: "169zse"
}]]
  , M0 = ye("activity", F1);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W1 = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , P1 = ye("arrow-right", W1);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $1 = [["path", {
    d: "M7 7h10v10",
    key: "1tivn9"
}], ["path", {
    d: "M7 17 17 7",
    key: "1vkiza"
}]]
  , Ps = ye("arrow-up-right", $1);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I1 = [["path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
    key: "hh9hay"
}], ["path", {
    d: "m3.3 7 8.7 5 8.7-5",
    key: "g66t2b"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}]]
  , tb = ye("box", I1);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eb = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , D0 = ye("check", eb);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nb = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]
  , ab = ye("circle-alert", nb);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ib = [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]
  , lb = ye("copy", ib);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sb = [["path", {
    d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
    key: "1vdc57"
}], ["path", {
    d: "M5 21h14",
    key: "11awu3"
}]]
  , ub = ye("crown", sb);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ob = [["path", {
    d: "M4 5h16",
    key: "1tepv9"
}], ["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 19h16",
    key: "1djgab"
}]]
  , rb = ye("menu", ob);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cb = [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]
  , fb = ye("rocket", cb);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]
  , db = ye("server", hb);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mb = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
  , pb = ye("star", mb);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yb = [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["path", {
    d: "M16 3.128a4 4 0 0 1 0 7.744",
    key: "16gr8j"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}]]
  , C0 = ye("users", yb);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , vb = ye("x", gb)
  , gc = q.createContext({});
function vc(a) {
    const l = q.useRef(null);
    return l.current === null && (l.current = a()),
    l.current
}
const bc = typeof window < "u"
  , z0 = bc ? q.useLayoutEffect : q.useEffect
  , iu = q.createContext(null);
function xc(a, l) {
    a.indexOf(l) === -1 && a.push(l)
}
function Sc(a, l) {
    const u = a.indexOf(l);
    u > -1 && a.splice(u, 1)
}
const vn = (a, l, u) => u > l ? l : u < a ? a : u;
let Tc = () => {}
;
const bn = {}
  , j0 = a => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
function w0(a) {
    return typeof a == "object" && a !== null
}
const N0 = a => /^0[^.\s]+$/u.test(a);
function Ac(a) {
    let l;
    return () => (l === void 0 && (l = a()),
    l)
}
const Ye = a => a
  , bb = (a, l) => u => l(a(u))
  , Sl = (...a) => a.reduce(bb)
  , yl = (a, l, u) => {
    const o = l - a;
    return o === 0 ? 1 : (u - a) / o
}
;
class Ec {
    constructor() {
        this.subscriptions = []
    }
    add(l) {
        return xc(this.subscriptions, l),
        () => Sc(this.subscriptions, l)
    }
    notify(l, u, o) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](l, u, o);
            else
                for (let d = 0; d < c; d++) {
                    const h = this.subscriptions[d];
                    h && h(l, u, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const We = a => a * 1e3
  , He = a => a / 1e3;
function R0(a, l) {
    return l ? a * (1e3 / l) : 0
}
const O0 = (a, l, u) => (((1 - 3 * u + 3 * l) * a + (3 * u - 6 * l)) * a + 3 * l) * a
  , xb = 1e-7
  , Sb = 12;
function Tb(a, l, u, o, c) {
    let d, h, y = 0;
    do
        h = l + (u - l) / 2,
        d = O0(h, o, c) - a,
        d > 0 ? u = h : l = h;
    while (Math.abs(d) > xb && ++y < Sb);
    return h
}
function Tl(a, l, u, o) {
    if (a === l && u === o)
        return Ye;
    const c = d => Tb(d, 0, 1, a, u);
    return d => d === 0 || d === 1 ? d : O0(c(d), l, o)
}
const _0 = a => l => l <= .5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2
  , V0 = a => l => 1 - a(1 - l)
  , U0 = Tl(.33, 1.53, .69, .99)
  , Mc = V0(U0)
  , B0 = _0(Mc)
  , L0 = a => (a *= 2) < 1 ? .5 * Mc(a) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
  , Dc = a => 1 - Math.sin(Math.acos(a))
  , H0 = V0(Dc)
  , Y0 = _0(Dc)
  , Ab = Tl(.42, 0, 1, 1)
  , Eb = Tl(0, 0, .58, 1)
  , q0 = Tl(.42, 0, .58, 1)
  , Mb = a => Array.isArray(a) && typeof a[0] != "number"
  , G0 = a => Array.isArray(a) && typeof a[0] == "number"
  , Db = {
    linear: Ye,
    easeIn: Ab,
    easeInOut: q0,
    easeOut: Eb,
    circIn: Dc,
    circInOut: Y0,
    circOut: H0,
    backIn: Mc,
    backInOut: B0,
    backOut: U0,
    anticipate: L0
}
  , Cb = a => typeof a == "string"
  , rp = a => {
    if (G0(a)) {
        Tc(a.length === 4);
        const [l,u,o,c] = a;
        return Tl(l, u, o, c)
    } else if (Cb(a))
        return Db[a];
    return a
}
  , Xs = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function zb(a, l) {
    let u = new Set
      , o = new Set
      , c = !1
      , d = !1;
    const h = new WeakSet;
    let y = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function p(v) {
        h.has(v) && (m.schedule(v),
        a()),
        v(y)
    }
    const m = {
        schedule: (v, b=!1, T=!1) => {
            const U = T && c ? u : o;
            return b && h.add(v),
            U.has(v) || U.add(v),
            v
        }
        ,
        cancel: v => {
            o.delete(v),
            h.delete(v)
        }
        ,
        process: v => {
            if (y = v,
            c) {
                d = !0;
                return
            }
            c = !0,
            [u,o] = [o, u],
            u.forEach(p),
            u.clear(),
            c = !1,
            d && (d = !1,
            m.process(v))
        }
    };
    return m
}
const jb = 40;
function X0(a, l) {
    let u = !1
      , o = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , d = () => u = !0
      , h = Xs.reduce( (G, et) => (G[et] = zb(d),
    G), {})
      , {setup: y, read: p, resolveKeyframes: m, preUpdate: v, update: b, preRender: T, render: w, postRender: U} = h
      , B = () => {
        const G = bn.useManualTiming ? c.timestamp : performance.now();
        u = !1,
        bn.useManualTiming || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(G - c.timestamp, jb), 1)),
        c.timestamp = G,
        c.isProcessing = !0,
        y.process(c),
        p.process(c),
        m.process(c),
        v.process(c),
        b.process(c),
        T.process(c),
        w.process(c),
        U.process(c),
        c.isProcessing = !1,
        u && l && (o = !1,
        a(B))
    }
      , Y = () => {
        u = !0,
        o = !0,
        c.isProcessing || a(B)
    }
    ;
    return {
        schedule: Xs.reduce( (G, et) => {
            const J = h[et];
            return G[et] = (I, K=!1, P=!1) => (u || Y(),
            J.schedule(I, K, P)),
            G
        }
        , {}),
        cancel: G => {
            for (let et = 0; et < Xs.length; et++)
                h[Xs[et]].cancel(G)
        }
        ,
        state: c,
        steps: h
    }
}
const {schedule: jt, cancel: Qn, state: ee, steps: Or} = X0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ye, !0);
let ks;
function wb() {
    ks = void 0
}
const pe = {
    now: () => (ks === void 0 && pe.set(ee.isProcessing || bn.useManualTiming ? ee.timestamp : performance.now()),
    ks),
    set: a => {
        ks = a,
        queueMicrotask(wb)
    }
}
  , K0 = a => l => typeof l == "string" && l.startsWith(a)
  , Z0 = K0("--")
  , Nb = K0("var(--")
  , Cc = a => Nb(a) ? Rb.test(a.split("/*")[0].trim()) : !1
  , Rb = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , hi = {
    test: a => typeof a == "number",
    parse: parseFloat,
    transform: a => a
}
  , gl = {
    ...hi,
    transform: a => vn(0, 1, a)
}
  , Ks = {
    ...hi,
    default: 1
}
  , hl = a => Math.round(a * 1e5) / 1e5
  , zc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ob(a) {
    return a == null
}
const _b = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , jc = (a, l) => u => !!(typeof u == "string" && _b.test(u) && u.startsWith(a) || l && !Ob(u) && Object.prototype.hasOwnProperty.call(u, l))
  , Q0 = (a, l, u) => o => {
    if (typeof o != "string")
        return o;
    const [c,d,h,y] = o.match(zc);
    return {
        [a]: parseFloat(c),
        [l]: parseFloat(d),
        [u]: parseFloat(h),
        alpha: y !== void 0 ? parseFloat(y) : 1
    }
}
  , Vb = a => vn(0, 255, a)
  , _r = {
    ...hi,
    transform: a => Math.round(Vb(a))
}
  , ya = {
    test: jc("rgb", "red"),
    parse: Q0("red", "green", "blue"),
    transform: ({red: a, green: l, blue: u, alpha: o=1}) => "rgba(" + _r.transform(a) + ", " + _r.transform(l) + ", " + _r.transform(u) + ", " + hl(gl.transform(o)) + ")"
};
function Ub(a) {
    let l = ""
      , u = ""
      , o = ""
      , c = "";
    return a.length > 5 ? (l = a.substring(1, 3),
    u = a.substring(3, 5),
    o = a.substring(5, 7),
    c = a.substring(7, 9)) : (l = a.substring(1, 2),
    u = a.substring(2, 3),
    o = a.substring(3, 4),
    c = a.substring(4, 5),
    l += l,
    u += u,
    o += o,
    c += c),
    {
        red: parseInt(l, 16),
        green: parseInt(u, 16),
        blue: parseInt(o, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const Jr = {
    test: jc("#"),
    parse: Ub,
    transform: ya.transform
}
  , Al = a => ({
    test: l => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: l => `${l}${a}`
})
  , Zn = Al("deg")
  , Pe = Al("%")
  , nt = Al("px")
  , Bb = Al("vh")
  , Lb = Al("vw")
  , cp = {
    ...Pe,
    parse: a => Pe.parse(a) / 100,
    transform: a => Pe.transform(a * 100)
}
  , ii = {
    test: jc("hsl", "hue"),
    parse: Q0("hue", "saturation", "lightness"),
    transform: ({hue: a, saturation: l, lightness: u, alpha: o=1}) => "hsla(" + Math.round(a) + ", " + Pe.transform(hl(l)) + ", " + Pe.transform(hl(u)) + ", " + hl(gl.transform(o)) + ")"
}
  , Xt = {
    test: a => ya.test(a) || Jr.test(a) || ii.test(a),
    parse: a => ya.test(a) ? ya.parse(a) : ii.test(a) ? ii.parse(a) : Jr.parse(a),
    transform: a => typeof a == "string" ? a : a.hasOwnProperty("red") ? ya.transform(a) : ii.transform(a),
    getAnimatableNone: a => {
        const l = Xt.parse(a);
        return l.alpha = 0,
        Xt.transform(l)
    }
}
  , Hb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Yb(a) {
    var l, u;
    return isNaN(a) && typeof a == "string" && (((l = a.match(zc)) == null ? void 0 : l.length) || 0) + (((u = a.match(Hb)) == null ? void 0 : u.length) || 0) > 0
}
const k0 = "number"
  , J0 = "color"
  , qb = "var"
  , Gb = "var("
  , fp = "${}"
  , Xb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vl(a) {
    const l = a.toString()
      , u = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let d = 0;
    const y = l.replace(Xb, p => (Xt.test(p) ? (o.color.push(d),
    c.push(J0),
    u.push(Xt.parse(p))) : p.startsWith(Gb) ? (o.var.push(d),
    c.push(qb),
    u.push(p)) : (o.number.push(d),
    c.push(k0),
    u.push(parseFloat(p))),
    ++d,
    fp)).split(fp);
    return {
        values: u,
        split: y,
        indexes: o,
        types: c
    }
}
function F0(a) {
    return vl(a).values
}
function W0(a) {
    const {split: l, types: u} = vl(a)
      , o = l.length;
    return c => {
        let d = "";
        for (let h = 0; h < o; h++)
            if (d += l[h],
            c[h] !== void 0) {
                const y = u[h];
                y === k0 ? d += hl(c[h]) : y === J0 ? d += Xt.transform(c[h]) : d += c[h]
            }
        return d
    }
}
const Kb = a => typeof a == "number" ? 0 : Xt.test(a) ? Xt.getAnimatableNone(a) : a;
function Zb(a) {
    const l = F0(a);
    return W0(a)(l.map(Kb))
}
const kn = {
    test: Yb,
    parse: F0,
    createTransformer: W0,
    getAnimatableNone: Zb
};
function Vr(a, l, u) {
    return u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6 ? a + (l - a) * 6 * u : u < 1 / 2 ? l : u < 2 / 3 ? a + (l - a) * (2 / 3 - u) * 6 : a
}
function Qb({hue: a, saturation: l, lightness: u, alpha: o}) {
    a /= 360,
    l /= 100,
    u /= 100;
    let c = 0
      , d = 0
      , h = 0;
    if (!l)
        c = d = h = u;
    else {
        const y = u < .5 ? u * (1 + l) : u + l - u * l
          , p = 2 * u - y;
        c = Vr(p, y, a + 1 / 3),
        d = Vr(p, y, a),
        h = Vr(p, y, a - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(d * 255),
        blue: Math.round(h * 255),
        alpha: o
    }
}
function $s(a, l) {
    return u => u > 0 ? l : a
}
const Nt = (a, l, u) => a + (l - a) * u
  , Ur = (a, l, u) => {
    const o = a * a
      , c = u * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , kb = [Jr, ya, ii]
  , Jb = a => kb.find(l => l.test(a));
function hp(a) {
    const l = Jb(a);
    if (!l)
        return !1;
    let u = l.parse(a);
    return l === ii && (u = Qb(u)),
    u
}
const dp = (a, l) => {
    const u = hp(a)
      , o = hp(l);
    if (!u || !o)
        return $s(a, l);
    const c = {
        ...u
    };
    return d => (c.red = Ur(u.red, o.red, d),
    c.green = Ur(u.green, o.green, d),
    c.blue = Ur(u.blue, o.blue, d),
    c.alpha = Nt(u.alpha, o.alpha, d),
    ya.transform(c))
}
  , Fr = new Set(["none", "hidden"]);
function Fb(a, l) {
    return Fr.has(a) ? u => u <= 0 ? a : l : u => u >= 1 ? l : a
}
function Wb(a, l) {
    return u => Nt(a, l, u)
}
function wc(a) {
    return typeof a == "number" ? Wb : typeof a == "string" ? Cc(a) ? $s : Xt.test(a) ? dp : Ib : Array.isArray(a) ? P0 : typeof a == "object" ? Xt.test(a) ? dp : Pb : $s
}
function P0(a, l) {
    const u = [...a]
      , o = u.length
      , c = a.map( (d, h) => wc(d)(d, l[h]));
    return d => {
        for (let h = 0; h < o; h++)
            u[h] = c[h](d);
        return u
    }
}
function Pb(a, l) {
    const u = {
        ...a,
        ...l
    }
      , o = {};
    for (const c in u)
        a[c] !== void 0 && l[c] !== void 0 && (o[c] = wc(a[c])(a[c], l[c]));
    return c => {
        for (const d in o)
            u[d] = o[d](c);
        return u
    }
}
function $b(a, l) {
    const u = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let c = 0; c < l.values.length; c++) {
        const d = l.types[c]
          , h = a.indexes[d][o[d]]
          , y = a.values[h] ?? 0;
        u[c] = y,
        o[d]++
    }
    return u
}
const Ib = (a, l) => {
    const u = kn.createTransformer(l)
      , o = vl(a)
      , c = vl(l);
    return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? Fr.has(a) && !c.values.length || Fr.has(l) && !o.values.length ? Fb(a, l) : Sl(P0($b(o, c), c.values), u) : $s(a, l)
}
;
function $0(a, l, u) {
    return typeof a == "number" && typeof l == "number" && typeof u == "number" ? Nt(a, l, u) : wc(a)(a, l)
}
const tx = a => {
    const l = ({timestamp: u}) => a(u);
    return {
        start: (u=!0) => jt.update(l, u),
        stop: () => Qn(l),
        now: () => ee.isProcessing ? ee.timestamp : pe.now()
    }
}
  , I0 = (a, l, u=10) => {
    let o = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let d = 0; d < c; d++)
        o += Math.round(a(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , Is = 2e4;
function Nc(a) {
    let l = 0;
    const u = 50;
    let o = a.next(l);
    for (; !o.done && l < Is; )
        l += u,
        o = a.next(l);
    return l >= Is ? 1 / 0 : l
}
function ex(a, l=100, u) {
    const o = u({
        ...a,
        keyframes: [0, l]
    })
      , c = Math.min(Nc(o), Is);
    return {
        type: "keyframes",
        ease: d => o.next(c * d).value / l,
        duration: He(c)
    }
}
const nx = 5;
function ty(a, l, u) {
    const o = Math.max(l - nx, 0);
    return R0(u - a(o), l - o)
}
const Vt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Br = .001;
function ax({duration: a=Vt.duration, bounce: l=Vt.bounce, velocity: u=Vt.velocity, mass: o=Vt.mass}) {
    let c, d, h = 1 - l;
    h = vn(Vt.minDamping, Vt.maxDamping, h),
    a = vn(Vt.minDuration, Vt.maxDuration, He(a)),
    h < 1 ? (c = m => {
        const v = m * h
          , b = v * a
          , T = v - u
          , w = Wr(m, h)
          , U = Math.exp(-b);
        return Br - T / w * U
    }
    ,
    d = m => {
        const b = m * h * a
          , T = b * u + u
          , w = Math.pow(h, 2) * Math.pow(m, 2) * a
          , U = Math.exp(-b)
          , B = Wr(Math.pow(m, 2), h);
        return (-c(m) + Br > 0 ? -1 : 1) * ((T - w) * U) / B
    }
    ) : (c = m => {
        const v = Math.exp(-m * a)
          , b = (m - u) * a + 1;
        return -Br + v * b
    }
    ,
    d = m => {
        const v = Math.exp(-m * a)
          , b = (u - m) * (a * a);
        return v * b
    }
    );
    const y = 5 / a
      , p = lx(c, d, y);
    if (a = We(a),
    isNaN(p))
        return {
            stiffness: Vt.stiffness,
            damping: Vt.damping,
            duration: a
        };
    {
        const m = Math.pow(p, 2) * o;
        return {
            stiffness: m,
            damping: h * 2 * Math.sqrt(o * m),
            duration: a
        }
    }
}
const ix = 12;
function lx(a, l, u) {
    let o = u;
    for (let c = 1; c < ix; c++)
        o = o - a(o) / l(o);
    return o
}
function Wr(a, l) {
    return a * Math.sqrt(1 - l * l)
}
const sx = ["duration", "bounce"]
  , ux = ["stiffness", "damping", "mass"];
function mp(a, l) {
    return l.some(u => a[u] !== void 0)
}
function ox(a) {
    let l = {
        velocity: Vt.velocity,
        stiffness: Vt.stiffness,
        damping: Vt.damping,
        mass: Vt.mass,
        isResolvedFromDuration: !1,
        ...a
    };
    if (!mp(a, ux) && mp(a, sx))
        if (a.visualDuration) {
            const u = a.visualDuration
              , o = 2 * Math.PI / (u * 1.2)
              , c = o * o
              , d = 2 * vn(.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
            l = {
                ...l,
                mass: Vt.mass,
                stiffness: c,
                damping: d
            }
        } else {
            const u = ax(a);
            l = {
                ...l,
                ...u,
                mass: Vt.mass
            },
            l.isResolvedFromDuration = !0
        }
    return l
}
function tu(a=Vt.visualDuration, l=Vt.bounce) {
    const u = typeof a != "object" ? {
        visualDuration: a,
        keyframes: [0, 1],
        bounce: l
    } : a;
    let {restSpeed: o, restDelta: c} = u;
    const d = u.keyframes[0]
      , h = u.keyframes[u.keyframes.length - 1]
      , y = {
        done: !1,
        value: d
    }
      , {stiffness: p, damping: m, mass: v, duration: b, velocity: T, isResolvedFromDuration: w} = ox({
        ...u,
        velocity: -He(u.velocity || 0)
    })
      , U = T || 0
      , B = m / (2 * Math.sqrt(p * v))
      , Y = h - d
      , H = He(Math.sqrt(p / v))
      , Z = Math.abs(Y) < 5;
    o || (o = Z ? Vt.restSpeed.granular : Vt.restSpeed.default),
    c || (c = Z ? Vt.restDelta.granular : Vt.restDelta.default);
    let G;
    if (B < 1) {
        const J = Wr(H, B);
        G = I => {
            const K = Math.exp(-B * H * I);
            return h - K * ((U + B * H * Y) / J * Math.sin(J * I) + Y * Math.cos(J * I))
        }
    } else if (B === 1)
        G = J => h - Math.exp(-H * J) * (Y + (U + H * Y) * J);
    else {
        const J = H * Math.sqrt(B * B - 1);
        G = I => {
            const K = Math.exp(-B * H * I)
              , P = Math.min(J * I, 300);
            return h - K * ((U + B * H * Y) * Math.sinh(P) + J * Y * Math.cosh(P)) / J
        }
    }
    const et = {
        calculatedDuration: w && b || null,
        next: J => {
            const I = G(J);
            if (w)
                y.done = J >= b;
            else {
                let K = J === 0 ? U : 0;
                B < 1 && (K = J === 0 ? We(U) : ty(G, J, I));
                const P = Math.abs(K) <= o
                  , bt = Math.abs(h - I) <= c;
                y.done = P && bt
            }
            return y.value = y.done ? h : I,
            y
        }
        ,
        toString: () => {
            const J = Math.min(Nc(et), Is)
              , I = I0(K => et.next(J * K).value, J, 30);
            return J + "ms " + I
        }
        ,
        toTransition: () => {}
    };
    return et
}
tu.applyToOptions = a => {
    const l = ex(a, 100, tu);
    return a.ease = l.ease,
    a.duration = We(l.duration),
    a.type = "keyframes",
    a
}
;
function Pr({keyframes: a, velocity: l=0, power: u=.8, timeConstant: o=325, bounceDamping: c=10, bounceStiffness: d=500, modifyTarget: h, min: y, max: p, restDelta: m=.5, restSpeed: v}) {
    const b = a[0]
      , T = {
        done: !1,
        value: b
    }
      , w = P => y !== void 0 && P < y || p !== void 0 && P > p
      , U = P => y === void 0 ? p : p === void 0 || Math.abs(y - P) < Math.abs(p - P) ? y : p;
    let B = u * l;
    const Y = b + B
      , H = h === void 0 ? Y : h(Y);
    H !== Y && (B = H - b);
    const Z = P => -B * Math.exp(-P / o)
      , G = P => H + Z(P)
      , et = P => {
        const bt = Z(P)
          , Rt = G(P);
        T.done = Math.abs(bt) <= m,
        T.value = T.done ? H : Rt
    }
    ;
    let J, I;
    const K = P => {
        w(T.value) && (J = P,
        I = tu({
            keyframes: [T.value, U(T.value)],
            velocity: ty(G, P, T.value),
            damping: c,
            stiffness: d,
            restDelta: m,
            restSpeed: v
        }))
    }
    ;
    return K(0),
    {
        calculatedDuration: null,
        next: P => {
            let bt = !1;
            return !I && J === void 0 && (bt = !0,
            et(P),
            K(P)),
            J !== void 0 && P >= J ? I.next(P - J) : (!bt && et(P),
            T)
        }
    }
}
function rx(a, l, u) {
    const o = []
      , c = u || bn.mix || $0
      , d = a.length - 1;
    for (let h = 0; h < d; h++) {
        let y = c(a[h], a[h + 1]);
        if (l) {
            const p = Array.isArray(l) ? l[h] || Ye : l;
            y = Sl(p, y)
        }
        o.push(y)
    }
    return o
}
function cx(a, l, {clamp: u=!0, ease: o, mixer: c}={}) {
    const d = a.length;
    if (Tc(d === l.length),
    d === 1)
        return () => l[0];
    if (d === 2 && l[0] === l[1])
        return () => l[1];
    const h = a[0] === a[1];
    a[0] > a[d - 1] && (a = [...a].reverse(),
    l = [...l].reverse());
    const y = rx(l, o, c)
      , p = y.length
      , m = v => {
        if (h && v < a[0])
            return l[0];
        let b = 0;
        if (p > 1)
            for (; b < a.length - 2 && !(v < a[b + 1]); b++)
                ;
        const T = yl(a[b], a[b + 1], v);
        return y[b](T)
    }
    ;
    return u ? v => m(vn(a[0], a[d - 1], v)) : m
}
function fx(a, l) {
    const u = a[a.length - 1];
    for (let o = 1; o <= l; o++) {
        const c = yl(0, l, o);
        a.push(Nt(u, 1, c))
    }
}
function hx(a) {
    const l = [0];
    return fx(l, a.length - 1),
    l
}
function dx(a, l) {
    return a.map(u => u * l)
}
function mx(a, l) {
    return a.map( () => l || q0).splice(0, a.length - 1)
}
function dl({duration: a=300, keyframes: l, times: u, ease: o="easeInOut"}) {
    const c = Mb(o) ? o.map(rp) : rp(o)
      , d = {
        done: !1,
        value: l[0]
    }
      , h = dx(u && u.length === l.length ? u : hx(l), a)
      , y = cx(h, l, {
        ease: Array.isArray(c) ? c : mx(l, c)
    });
    return {
        calculatedDuration: a,
        next: p => (d.value = y(p),
        d.done = p >= a,
        d)
    }
}
const px = a => a !== null;
function Rc(a, {repeat: l, repeatType: u="loop"}, o, c=1) {
    const d = a.filter(px)
      , y = c < 0 || l && u !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
    return !y || o === void 0 ? d[y] : o
}
const yx = {
    decay: Pr,
    inertia: Pr,
    tween: dl,
    keyframes: dl,
    spring: tu
};
function ey(a) {
    typeof a.type == "string" && (a.type = yx[a.type])
}
class Oc {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(l => {
            this.resolve = l
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(l, u) {
        return this.finished.then(l, u)
    }
}
const gx = a => a / 100;
class _c extends Oc {
    constructor(l) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var o, c;
            const {motionValue: u} = this.options;
            u && u.updatedAt !== pe.now() && this.tick(pe.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (c = (o = this.options).onStop) == null || c.call(o))
        }
        ,
        this.options = l,
        this.initAnimation(),
        this.play(),
        l.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: l} = this;
        ey(l);
        const {type: u=dl, repeat: o=0, repeatDelay: c=0, repeatType: d, velocity: h=0} = l;
        let {keyframes: y} = l;
        const p = u || dl;
        p !== dl && typeof y[0] != "number" && (this.mixKeyframes = Sl(gx, $0(y[0], y[1])),
        y = [0, 100]);
        const m = p({
            ...l,
            keyframes: y
        });
        d === "mirror" && (this.mirroredGenerator = p({
            ...l,
            keyframes: [...y].reverse(),
            velocity: -h
        })),
        m.calculatedDuration === null && (m.calculatedDuration = Nc(m));
        const {calculatedDuration: v} = m;
        this.calculatedDuration = v,
        this.resolvedDuration = v + c,
        this.totalDuration = this.resolvedDuration * (o + 1) - c,
        this.generator = m
    }
    updateTime(l) {
        const u = Math.round(l - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = u
    }
    tick(l, u=!1) {
        const {generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: h, resolvedDuration: y, calculatedDuration: p} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: m=0, keyframes: v, repeat: b, repeatType: T, repeatDelay: w, type: U, onUpdate: B, finalKeyframe: Y} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)),
        u ? this.currentTime = l : this.updateTime(l);
        const H = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1)
          , Z = this.playbackSpeed >= 0 ? H < 0 : H > c;
        this.currentTime = Math.max(H, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let G = this.currentTime
          , et = o;
        if (b) {
            const P = Math.min(this.currentTime, c) / y;
            let bt = Math.floor(P)
              , Rt = P % 1;
            !Rt && P >= 1 && (Rt = 1),
            Rt === 1 && bt--,
            bt = Math.min(bt, b + 1),
            !!(bt % 2) && (T === "reverse" ? (Rt = 1 - Rt,
            w && (Rt -= w / y)) : T === "mirror" && (et = h)),
            G = vn(0, 1, Rt) * y
        }
        const J = Z ? {
            done: !1,
            value: v[0]
        } : et.next(G);
        d && (J.value = d(J.value));
        let {done: I} = J;
        !Z && p !== null && (I = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const K = this.holdTime === null && (this.state === "finished" || this.state === "running" && I);
        return K && U !== Pr && (J.value = Rc(v, this.options, Y, this.speed)),
        B && B(J.value),
        K && this.finish(),
        J
    }
    then(l, u) {
        return this.finished.then(l, u)
    }
    get duration() {
        return He(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: l=0} = this.options || {};
        return this.duration + He(l)
    }
    get time() {
        return He(this.currentTime)
    }
    set time(l) {
        var u;
        l = We(l),
        this.currentTime = l,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed),
        (u = this.driver) == null || u.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(l) {
        this.updateTime(pe.now());
        const u = this.playbackSpeed !== l;
        this.playbackSpeed = l,
        u && (this.time = He(this.currentTime))
    }
    play() {
        var c, d;
        if (this.isStopped)
            return;
        const {driver: l=tx, startTime: u} = this.options;
        this.driver || (this.driver = l(h => this.tick(h))),
        (d = (c = this.options).onPlay) == null || d.call(c);
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = u ?? o),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(pe.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var l, u;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (u = (l = this.options).onComplete) == null || u.call(l)
    }
    cancel() {
        var l, u;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (u = (l = this.options).onCancel) == null || u.call(l)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(l) {
        return this.startTime = 0,
        this.tick(l, !0)
    }
    attachTimeline(l) {
        var u;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (u = this.driver) == null || u.stop(),
        l.observe(this)
    }
}
function vx(a) {
    for (let l = 1; l < a.length; l++)
        a[l] ?? (a[l] = a[l - 1])
}
const ga = a => a * 180 / Math.PI
  , $r = a => {
    const l = ga(Math.atan2(a[1], a[0]));
    return Ir(l)
}
  , bx = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: a => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: $r,
    rotateZ: $r,
    skewX: a => ga(Math.atan(a[1])),
    skewY: a => ga(Math.atan(a[2])),
    skew: a => (Math.abs(a[1]) + Math.abs(a[2])) / 2
}
  , Ir = a => (a = a % 360,
a < 0 && (a += 360),
a)
  , pp = $r
  , yp = a => Math.sqrt(a[0] * a[0] + a[1] * a[1])
  , gp = a => Math.sqrt(a[4] * a[4] + a[5] * a[5])
  , xx = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: yp,
    scaleY: gp,
    scale: a => (yp(a) + gp(a)) / 2,
    rotateX: a => Ir(ga(Math.atan2(a[6], a[5]))),
    rotateY: a => Ir(ga(Math.atan2(-a[2], a[0]))),
    rotateZ: pp,
    rotate: pp,
    skewX: a => ga(Math.atan(a[4])),
    skewY: a => ga(Math.atan(a[1])),
    skew: a => (Math.abs(a[1]) + Math.abs(a[4])) / 2
};
function tc(a) {
    return a.includes("scale") ? 1 : 0
}
function ec(a, l) {
    if (!a || a === "none")
        return tc(l);
    const u = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, c;
    if (u)
        o = xx,
        c = u;
    else {
        const y = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = bx,
        c = y
    }
    if (!c)
        return tc(l);
    const d = o[l]
      , h = c[1].split(",").map(Tx);
    return typeof d == "function" ? d(h) : h[d]
}
const Sx = (a, l) => {
    const {transform: u="none"} = getComputedStyle(a);
    return ec(u, l)
}
;
function Tx(a) {
    return parseFloat(a.trim())
}
const di = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , mi = new Set(di)
  , vp = a => a === hi || a === nt
  , Ax = new Set(["x", "y", "z"])
  , Ex = di.filter(a => !Ax.has(a));
function Mx(a) {
    const l = [];
    return Ex.forEach(u => {
        const o = a.getValue(u);
        o !== void 0 && (l.push([u, o.get()]),
        o.set(u.startsWith("scale") ? 1 : 0))
    }
    ),
    l
}
const va = {
    width: ({x: a}, {paddingLeft: l="0", paddingRight: u="0"}) => a.max - a.min - parseFloat(l) - parseFloat(u),
    height: ({y: a}, {paddingTop: l="0", paddingBottom: u="0"}) => a.max - a.min - parseFloat(l) - parseFloat(u),
    top: (a, {top: l}) => parseFloat(l),
    left: (a, {left: l}) => parseFloat(l),
    bottom: ({y: a}, {top: l}) => parseFloat(l) + (a.max - a.min),
    right: ({x: a}, {left: l}) => parseFloat(l) + (a.max - a.min),
    x: (a, {transform: l}) => ec(l, "x"),
    y: (a, {transform: l}) => ec(l, "y")
};
va.translateX = va.x;
va.translateY = va.y;
const ba = new Set;
let nc = !1
  , ac = !1
  , ic = !1;
function ny() {
    if (ac) {
        const a = Array.from(ba).filter(o => o.needsMeasurement)
          , l = new Set(a.map(o => o.element))
          , u = new Map;
        l.forEach(o => {
            const c = Mx(o);
            c.length && (u.set(o, c),
            o.render())
        }
        ),
        a.forEach(o => o.measureInitialState()),
        l.forEach(o => {
            o.render();
            const c = u.get(o);
            c && c.forEach( ([d,h]) => {
                var y;
                (y = o.getValue(d)) == null || y.set(h)
            }
            )
        }
        ),
        a.forEach(o => o.measureEndState()),
        a.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        }
        )
    }
    ac = !1,
    nc = !1,
    ba.forEach(a => a.complete(ic)),
    ba.clear()
}
function ay() {
    ba.forEach(a => {
        a.readKeyframes(),
        a.needsMeasurement && (ac = !0)
    }
    )
}
function Dx() {
    ic = !0,
    ay(),
    ny(),
    ic = !1
}
class Vc {
    constructor(l, u, o, c, d, h=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...l],
        this.onComplete = u,
        this.name = o,
        this.motionValue = c,
        this.element = d,
        this.isAsync = h
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (ba.add(this),
        nc || (nc = !0,
        jt.read(ay),
        jt.resolveKeyframes(ny))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, name: u, element: o, motionValue: c} = this;
        if (l[0] === null) {
            const d = c == null ? void 0 : c.get()
              , h = l[l.length - 1];
            if (d !== void 0)
                l[0] = d;
            else if (o && u) {
                const y = o.readValue(u, h);
                y != null && (l[0] = y)
            }
            l[0] === void 0 && (l[0] = h),
            c && d === void 0 && c.set(l[0])
        }
        vx(l)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(l=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
        ba.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (ba.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const Cx = a => a.startsWith("--");
function zx(a, l, u) {
    Cx(l) ? a.style.setProperty(l, u) : a.style[l] = u
}
const jx = Ac( () => window.ScrollTimeline !== void 0)
  , wx = {};
function Nx(a, l) {
    const u = Ac(a);
    return () => wx[l] ?? u()
}
const iy = Nx( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , fl = ([a,l,u,o]) => `cubic-bezier(${a}, ${l}, ${u}, ${o})`
  , bp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fl([0, .65, .55, 1]),
    circOut: fl([.55, 0, 1, .45]),
    backIn: fl([.31, .01, .66, -.59]),
    backOut: fl([.33, 1.53, .69, .99])
};
function ly(a, l) {
    if (a)
        return typeof a == "function" ? iy() ? I0(a, l) : "ease-out" : G0(a) ? fl(a) : Array.isArray(a) ? a.map(u => ly(u, l) || bp.easeOut) : bp[a]
}
function Rx(a, l, u, {delay: o=0, duration: c=300, repeat: d=0, repeatType: h="loop", ease: y="easeOut", times: p}={}, m=void 0) {
    const v = {
        [l]: u
    };
    p && (v.offset = p);
    const b = ly(y, c);
    Array.isArray(b) && (v.easing = b);
    const T = {
        delay: o,
        duration: c,
        easing: Array.isArray(b) ? "linear" : b,
        fill: "both",
        iterations: d + 1,
        direction: h === "reverse" ? "alternate" : "normal"
    };
    return m && (T.pseudoElement = m),
    a.animate(v, T)
}
function sy(a) {
    return typeof a == "function" && "applyToOptions"in a
}
function Ox({type: a, ...l}) {
    return sy(a) && iy() ? a.applyToOptions(l) : (l.duration ?? (l.duration = 300),
    l.ease ?? (l.ease = "easeOut"),
    l)
}
class _x extends Oc {
    constructor(l) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !l)
            return;
        const {element: u, name: o, keyframes: c, pseudoElement: d, allowFlatten: h=!1, finalKeyframe: y, onComplete: p} = l;
        this.isPseudoElement = !!d,
        this.allowFlatten = h,
        this.options = l,
        Tc(typeof l.type != "string");
        const m = Ox(l);
        this.animation = Rx(u, o, c, m, d),
        m.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !d) {
                const v = Rc(c, this.options, y, this.speed);
                this.updateMotionValue ? this.updateMotionValue(v) : zx(u, o, v),
                this.animation.cancel()
            }
            p == null || p(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var l, u;
        (u = (l = this.animation).finish) == null || u.call(l)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: l} = this;
        l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var l, u;
        this.isPseudoElement || (u = (l = this.animation).commitStyles) == null || u.call(l)
    }
    get duration() {
        var u, o;
        const l = ((o = (u = this.animation.effect) == null ? void 0 : u.getComputedTiming) == null ? void 0 : o.call(u).duration) || 0;
        return He(Number(l))
    }
    get iterationDuration() {
        const {delay: l=0} = this.options || {};
        return this.duration + He(l)
    }
    get time() {
        return He(Number(this.animation.currentTime) || 0)
    }
    set time(l) {
        this.finishedTime = null,
        this.animation.currentTime = We(l)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(l) {
        l < 0 && (this.finishedTime = null),
        this.animation.playbackRate = l
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(l) {
        this.animation.startTime = l
    }
    attachTimeline({timeline: l, observe: u}) {
        var o;
        return this.allowFlatten && ((o = this.animation.effect) == null || o.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        l && jx() ? (this.animation.timeline = l,
        Ye) : u(this)
    }
}
const uy = {
    anticipate: L0,
    backInOut: B0,
    circInOut: Y0
};
function Vx(a) {
    return a in uy
}
function Ux(a) {
    typeof a.ease == "string" && Vx(a.ease) && (a.ease = uy[a.ease])
}
const xp = 10;
class Bx extends _x {
    constructor(l) {
        Ux(l),
        ey(l),
        super(l),
        l.startTime && (this.startTime = l.startTime),
        this.options = l
    }
    updateMotionValue(l) {
        const {motionValue: u, onUpdate: o, onComplete: c, element: d, ...h} = this.options;
        if (!u)
            return;
        if (l !== void 0) {
            u.set(l);
            return
        }
        const y = new _c({
            ...h,
            autoplay: !1
        })
          , p = We(this.finishedTime ?? this.time);
        u.setWithVelocity(y.sample(p - xp).value, y.sample(p).value, xp),
        y.stop()
    }
}
const Sp = (a, l) => l === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && (kn.test(a) || a === "0") && !a.startsWith("url("));
function Lx(a) {
    const l = a[0];
    if (a.length === 1)
        return !0;
    for (let u = 0; u < a.length; u++)
        if (a[u] !== l)
            return !0
}
function Hx(a, l, u, o) {
    const c = a[0];
    if (c === null)
        return !1;
    if (l === "display" || l === "visibility")
        return !0;
    const d = a[a.length - 1]
      , h = Sp(c, l)
      , y = Sp(d, l);
    return !h || !y ? !1 : Lx(a) || (u === "spring" || sy(u)) && o
}
function lc(a) {
    a.duration = 0,
    a.type = "keyframes"
}
const Yx = new Set(["opacity", "clipPath", "filter", "transform"])
  , qx = Ac( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Gx(a) {
    var v;
    const {motionValue: l, name: u, repeatDelay: o, repeatType: c, damping: d, type: h} = a;
    if (!(((v = l == null ? void 0 : l.owner) == null ? void 0 : v.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: p, transformTemplate: m} = l.owner.getProps();
    return qx() && u && Yx.has(u) && (u !== "transform" || !m) && !p && !o && c !== "mirror" && d !== 0 && h !== "inertia"
}
const Xx = 40;
class Kx extends Oc {
    constructor({autoplay: l=!0, delay: u=0, type: o="keyframes", repeat: c=0, repeatDelay: d=0, repeatType: h="loop", keyframes: y, name: p, motionValue: m, element: v, ...b}) {
        var U;
        super(),
        this.stop = () => {
            var B, Y;
            this._animation && (this._animation.stop(),
            (B = this.stopTimeline) == null || B.call(this)),
            (Y = this.keyframeResolver) == null || Y.cancel()
        }
        ,
        this.createdAt = pe.now();
        const T = {
            autoplay: l,
            delay: u,
            type: o,
            repeat: c,
            repeatDelay: d,
            repeatType: h,
            name: p,
            motionValue: m,
            element: v,
            ...b
        }
          , w = (v == null ? void 0 : v.KeyframeResolver) || Vc;
        this.keyframeResolver = new w(y, (B, Y, H) => this.onKeyframesResolved(B, Y, T, !H),p,m,v),
        (U = this.keyframeResolver) == null || U.scheduleResolve()
    }
    onKeyframesResolved(l, u, o, c) {
        this.keyframeResolver = void 0;
        const {name: d, type: h, velocity: y, delay: p, isHandoff: m, onUpdate: v} = o;
        this.resolvedAt = pe.now(),
        Hx(l, d, h, y) || ((bn.instantAnimations || !p) && (v == null || v(Rc(l, o, u))),
        l[0] = l[l.length - 1],
        lc(o),
        o.repeat = 0);
        const T = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > Xx ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: u,
            ...o,
            keyframes: l
        }
          , w = !m && Gx(T) ? new Bx({
            ...T,
            element: T.motionValue.owner.current
        }) : new _c(T);
        w.finished.then( () => this.notifyFinished()).catch(Ye),
        this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = w
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(l, u) {
        return this.finished.finally(l).then( () => {}
        )
    }
    get animation() {
        var l;
        return this._animation || ((l = this.keyframeResolver) == null || l.resume(),
        Dx()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(l) {
        this.animation.time = l
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(l) {
        this.animation.speed = l
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(l) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var l;
        this._animation && this.animation.cancel(),
        (l = this.keyframeResolver) == null || l.cancel()
    }
}
const Zx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Qx(a) {
    const l = Zx.exec(a);
    if (!l)
        return [, ];
    const [,u,o,c] = l;
    return [`--${u ?? o}`, c]
}
function oy(a, l, u=1) {
    const [o,c] = Qx(a);
    if (!o)
        return;
    const d = window.getComputedStyle(l).getPropertyValue(o);
    if (d) {
        const h = d.trim();
        return j0(h) ? parseFloat(h) : h
    }
    return Cc(c) ? oy(c, l, u + 1) : c
}
function Uc(a, l) {
    return (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a
}
const ry = new Set(["width", "height", "top", "left", "right", "bottom", ...di])
  , kx = {
    test: a => a === "auto",
    parse: a => a
}
  , cy = a => l => l.test(a)
  , fy = [hi, nt, Pe, Zn, Lb, Bb, kx]
  , Tp = a => fy.find(cy(a));
function Jx(a) {
    return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || N0(a) : !0
}
const Fx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Wx(a) {
    const [l,u] = a.slice(0, -1).split("(");
    if (l === "drop-shadow")
        return a;
    const [o] = u.match(zc) || [];
    if (!o)
        return a;
    const c = u.replace(o, "");
    let d = Fx.has(l) ? 1 : 0;
    return o !== u && (d *= 100),
    l + "(" + d + c + ")"
}
const Px = /\b([a-z-]*)\(.*?\)/gu
  , sc = {
    ...kn,
    getAnimatableNone: a => {
        const l = a.match(Px);
        return l ? l.map(Wx).join(" ") : a
    }
}
  , Ap = {
    ...hi,
    transform: Math.round
}
  , $x = {
    rotate: Zn,
    rotateX: Zn,
    rotateY: Zn,
    rotateZ: Zn,
    scale: Ks,
    scaleX: Ks,
    scaleY: Ks,
    scaleZ: Ks,
    skew: Zn,
    skewX: Zn,
    skewY: Zn,
    distance: nt,
    translateX: nt,
    translateY: nt,
    translateZ: nt,
    x: nt,
    y: nt,
    z: nt,
    perspective: nt,
    transformPerspective: nt,
    opacity: gl,
    originX: cp,
    originY: cp,
    originZ: nt
}
  , Bc = {
    borderWidth: nt,
    borderTopWidth: nt,
    borderRightWidth: nt,
    borderBottomWidth: nt,
    borderLeftWidth: nt,
    borderRadius: nt,
    radius: nt,
    borderTopLeftRadius: nt,
    borderTopRightRadius: nt,
    borderBottomRightRadius: nt,
    borderBottomLeftRadius: nt,
    width: nt,
    maxWidth: nt,
    height: nt,
    maxHeight: nt,
    top: nt,
    right: nt,
    bottom: nt,
    left: nt,
    padding: nt,
    paddingTop: nt,
    paddingRight: nt,
    paddingBottom: nt,
    paddingLeft: nt,
    margin: nt,
    marginTop: nt,
    marginRight: nt,
    marginBottom: nt,
    marginLeft: nt,
    backgroundPositionX: nt,
    backgroundPositionY: nt,
    ...$x,
    zIndex: Ap,
    fillOpacity: gl,
    strokeOpacity: gl,
    numOctaves: Ap
}
  , Ix = {
    ...Bc,
    color: Xt,
    backgroundColor: Xt,
    outlineColor: Xt,
    fill: Xt,
    stroke: Xt,
    borderColor: Xt,
    borderTopColor: Xt,
    borderRightColor: Xt,
    borderBottomColor: Xt,
    borderLeftColor: Xt,
    filter: sc,
    WebkitFilter: sc
}
  , hy = a => Ix[a];
function dy(a, l) {
    let u = hy(a);
    return u !== sc && (u = kn),
    u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
}
const tS = new Set(["auto", "none", "0"]);
function eS(a, l, u) {
    let o = 0, c;
    for (; o < a.length && !c; ) {
        const d = a[o];
        typeof d == "string" && !tS.has(d) && vl(d).values.length && (c = a[o]),
        o++
    }
    if (c && u)
        for (const d of l)
            a[d] = dy(u, c)
}
class nS extends Vc {
    constructor(l, u, o, c, d) {
        super(l, u, o, c, d, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, element: u, name: o} = this;
        if (!u || !u.current)
            return;
        super.readKeyframes();
        for (let p = 0; p < l.length; p++) {
            let m = l[p];
            if (typeof m == "string" && (m = m.trim(),
            Cc(m))) {
                const v = oy(m, u.current);
                v !== void 0 && (l[p] = v),
                p === l.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !ry.has(o) || l.length !== 2)
            return;
        const [c,d] = l
          , h = Tp(c)
          , y = Tp(d);
        if (h !== y)
            if (vp(h) && vp(y))
                for (let p = 0; p < l.length; p++) {
                    const m = l[p];
                    typeof m == "string" && (l[p] = parseFloat(m))
                }
            else
                va[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: l, name: u} = this
          , o = [];
        for (let c = 0; c < l.length; c++)
            (l[c] === null || Jx(l[c])) && o.push(c);
        o.length && eS(l, o, u)
    }
    measureInitialState() {
        const {element: l, unresolvedKeyframes: u, name: o} = this;
        if (!l || !l.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = va[o](l.measureViewportBox(), window.getComputedStyle(l.current)),
        u[0] = this.measuredOrigin;
        const c = u[u.length - 1];
        c !== void 0 && l.getValue(o, c).jump(c, !1)
    }
    measureEndState() {
        var y;
        const {element: l, name: u, unresolvedKeyframes: o} = this;
        if (!l || !l.current)
            return;
        const c = l.getValue(u);
        c && c.jump(this.measuredOrigin, !1);
        const d = o.length - 1
          , h = o[d];
        o[d] = va[u](l.measureViewportBox(), window.getComputedStyle(l.current)),
        h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
        (y = this.removedTransforms) != null && y.length && this.removedTransforms.forEach( ([p,m]) => {
            l.getValue(p).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function aS(a, l, u) {
    if (a instanceof EventTarget)
        return [a];
    if (typeof a == "string") {
        let o = document;
        const c = (u == null ? void 0 : u[a]) ?? o.querySelectorAll(a);
        return c ? Array.from(c) : []
    }
    return Array.from(a)
}
const my = (a, l) => l && typeof a == "number" ? l.transform(a) : a;
function py(a) {
    return w0(a) && "offsetHeight"in a
}
const Ep = 30
  , iS = a => !isNaN(parseFloat(a));
class lS {
    constructor(l, u={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = o => {
            var d;
            const c = pe.now();
            if (this.updatedAt !== c && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current),
            this.dependents))
                for (const h of this.dependents)
                    h.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(l),
        this.owner = u.owner
    }
    setCurrent(l) {
        this.current = l,
        this.updatedAt = pe.now(),
        this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = iS(this.current))
    }
    setPrevFrameValue(l=this.current) {
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(l) {
        return this.on("change", l)
    }
    on(l, u) {
        this.events[l] || (this.events[l] = new Ec);
        const o = this.events[l].add(u);
        return l === "change" ? () => {
            o(),
            jt.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : o
    }
    clearListeners() {
        for (const l in this.events)
            this.events[l].clear()
    }
    attach(l, u) {
        this.passiveEffect = l,
        this.stopPassiveEffect = u
    }
    set(l) {
        this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l)
    }
    setWithVelocity(l, u, o) {
        this.set(u),
        this.prev = void 0,
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt - o
    }
    jump(l, u=!0) {
        this.updateAndNotify(l),
        this.prev = l,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        u && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var l;
        (l = this.events.change) == null || l.notify(this.current)
    }
    addDependent(l) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(l)
    }
    removeDependent(l) {
        this.dependents && this.dependents.delete(l)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const l = pe.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Ep)
            return 0;
        const u = Math.min(this.updatedAt - this.prevUpdatedAt, Ep);
        return R0(parseFloat(this.current) - parseFloat(this.prevFrameValue), u)
    }
    start(l) {
        return this.stop(),
        new Promise(u => {
            this.hasAnimated = !0,
            this.animation = l(u),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var l, u;
        (l = this.dependents) == null || l.clear(),
        (u = this.events.destroy) == null || u.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function ci(a, l) {
    return new lS(a,l)
}
const {schedule: Lc} = X0(queueMicrotask, !1)
  , Ze = {
    x: !1,
    y: !1
};
function yy() {
    return Ze.x || Ze.y
}
function sS(a) {
    return a === "x" || a === "y" ? Ze[a] ? null : (Ze[a] = !0,
    () => {
        Ze[a] = !1
    }
    ) : Ze.x || Ze.y ? null : (Ze.x = Ze.y = !0,
    () => {
        Ze.x = Ze.y = !1
    }
    )
}
function gy(a, l) {
    const u = aS(a)
      , o = new AbortController
      , c = {
        passive: !0,
        ...l,
        signal: o.signal
    };
    return [u, c, () => o.abort()]
}
function Mp(a) {
    return !(a.pointerType === "touch" || yy())
}
function uS(a, l, u={}) {
    const [o,c,d] = gy(a, u)
      , h = y => {
        if (!Mp(y))
            return;
        const {target: p} = y
          , m = l(p, y);
        if (typeof m != "function" || !p)
            return;
        const v = b => {
            Mp(b) && (m(b),
            p.removeEventListener("pointerleave", v))
        }
        ;
        p.addEventListener("pointerleave", v, c)
    }
    ;
    return o.forEach(y => {
        y.addEventListener("pointerenter", h, c)
    }
    ),
    d
}
const vy = (a, l) => l ? a === l ? !0 : vy(a, l.parentElement) : !1
  , Hc = a => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1
  , oS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function rS(a) {
    return oS.has(a.tagName) || a.tabIndex !== -1
}
const Js = new WeakSet;
function Dp(a) {
    return l => {
        l.key === "Enter" && a(l)
    }
}
function Lr(a, l) {
    a.dispatchEvent(new PointerEvent("pointer" + l,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const cS = (a, l) => {
    const u = a.currentTarget;
    if (!u)
        return;
    const o = Dp( () => {
        if (Js.has(u))
            return;
        Lr(u, "down");
        const c = Dp( () => {
            Lr(u, "up")
        }
        )
          , d = () => Lr(u, "cancel");
        u.addEventListener("keyup", c, l),
        u.addEventListener("blur", d, l)
    }
    );
    u.addEventListener("keydown", o, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", o), l)
}
;
function Cp(a) {
    return Hc(a) && !yy()
}
function fS(a, l, u={}) {
    const [o,c,d] = gy(a, u)
      , h = y => {
        const p = y.currentTarget;
        if (!Cp(y))
            return;
        Js.add(p);
        const m = l(p, y)
          , v = (w, U) => {
            window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", T),
            Js.has(p) && Js.delete(p),
            Cp(w) && typeof m == "function" && m(w, {
                success: U
            })
        }
          , b = w => {
            v(w, p === window || p === document || u.useGlobalTarget || vy(p, w.target))
        }
          , T = w => {
            v(w, !1)
        }
        ;
        window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", T, c)
    }
    ;
    return o.forEach(y => {
        (u.useGlobalTarget ? window : y).addEventListener("pointerdown", h, c),
        py(y) && (y.addEventListener("focus", m => cS(m, c)),
        !rS(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0))
    }
    ),
    d
}
function by(a) {
    return w0(a) && "ownerSVGElement"in a
}
function hS(a) {
    return by(a) && a.tagName === "svg"
}
const ae = a => !!(a && a.getVelocity)
  , dS = [...fy, Xt, kn]
  , mS = a => dS.find(cy(a))
  , Yc = q.createContext({
    transformPagePoint: a => a,
    isStatic: !1,
    reducedMotion: "never"
});
function zp(a, l) {
    if (typeof a == "function")
        return a(l);
    a != null && (a.current = l)
}
function pS(...a) {
    return l => {
        let u = !1;
        const o = a.map(c => {
            const d = zp(c, l);
            return !u && typeof d == "function" && (u = !0),
            d
        }
        );
        if (u)
            return () => {
                for (let c = 0; c < o.length; c++) {
                    const d = o[c];
                    typeof d == "function" ? d() : zp(a[c], null)
                }
            }
    }
}
function yS(...a) {
    return q.useCallback(pS(...a), a)
}
class gS extends q.Component {
    getSnapshotBeforeUpdate(l) {
        const u = this.props.childRef.current;
        if (u && l.isPresent && !this.props.isPresent) {
            const o = u.offsetParent
              , c = py(o) && o.offsetWidth || 0
              , d = this.props.sizeRef.current;
            d.height = u.offsetHeight || 0,
            d.width = u.offsetWidth || 0,
            d.top = u.offsetTop,
            d.left = u.offsetLeft,
            d.right = c - d.width - d.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function vS({children: a, isPresent: l, anchorX: u, root: o}) {
    const c = q.useId()
      , d = q.useRef(null)
      , h = q.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: y} = q.useContext(Yc)
      , p = yS(d, a == null ? void 0 : a.ref);
    return q.useInsertionEffect( () => {
        const {width: m, height: v, top: b, left: T, right: w} = h.current;
        if (l || !d.current || !m || !v)
            return;
        const U = u === "left" ? `left: ${T}` : `right: ${w}`;
        d.current.dataset.motionPopId = c;
        const B = document.createElement("style");
        y && (B.nonce = y);
        const Y = o ?? document.head;
        return Y.appendChild(B),
        B.sheet && B.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${v}px !important;
            ${U}px !important;
            top: ${b}px !important;
          }
        `),
        () => {
            Y.contains(B) && Y.removeChild(B)
        }
    }
    , [l]),
    S.jsx(gS, {
        isPresent: l,
        childRef: d,
        sizeRef: h,
        children: q.cloneElement(a, {
            ref: p
        })
    })
}
const bS = ({children: a, initial: l, isPresent: u, onExitComplete: o, custom: c, presenceAffectsLayout: d, mode: h, anchorX: y, root: p}) => {
    const m = vc(xS)
      , v = q.useId();
    let b = !0
      , T = q.useMemo( () => (b = !1,
    {
        id: v,
        initial: l,
        isPresent: u,
        custom: c,
        onExitComplete: w => {
            m.set(w, !0);
            for (const U of m.values())
                if (!U)
                    return;
            o && o()
        }
        ,
        register: w => (m.set(w, !1),
        () => m.delete(w))
    }), [u, m, o]);
    return d && b && (T = {
        ...T
    }),
    q.useMemo( () => {
        m.forEach( (w, U) => m.set(U, !1))
    }
    , [u]),
    q.useEffect( () => {
        !u && !m.size && o && o()
    }
    , [u]),
    h === "popLayout" && (a = S.jsx(vS, {
        isPresent: u,
        anchorX: y,
        root: p,
        children: a
    })),
    S.jsx(iu.Provider, {
        value: T,
        children: a
    })
}
;
function xS() {
    return new Map
}
function xy(a=!0) {
    const l = q.useContext(iu);
    if (l === null)
        return [!0, null];
    const {isPresent: u, onExitComplete: o, register: c} = l
      , d = q.useId();
    q.useEffect( () => {
        if (a)
            return c(d)
    }
    , [a]);
    const h = q.useCallback( () => a && o && o(d), [d, o, a]);
    return !u && o ? [!1, h] : [!0]
}
const Zs = a => a.key || "";
function jp(a) {
    const l = [];
    return q.Children.forEach(a, u => {
        q.isValidElement(u) && l.push(u)
    }
    ),
    l
}
const Sy = ({children: a, custom: l, initial: u=!0, onExitComplete: o, presenceAffectsLayout: c=!0, mode: d="sync", propagate: h=!1, anchorX: y="left", root: p}) => {
    const [m,v] = xy(h)
      , b = q.useMemo( () => jp(a), [a])
      , T = h && !m ? [] : b.map(Zs)
      , w = q.useRef(!0)
      , U = q.useRef(b)
      , B = vc( () => new Map)
      , [Y,H] = q.useState(b)
      , [Z,G] = q.useState(b);
    z0( () => {
        w.current = !1,
        U.current = b;
        for (let I = 0; I < Z.length; I++) {
            const K = Zs(Z[I]);
            T.includes(K) ? B.delete(K) : B.get(K) !== !0 && B.set(K, !1)
        }
    }
    , [Z, T.length, T.join("-")]);
    const et = [];
    if (b !== Y) {
        let I = [...b];
        for (let K = 0; K < Z.length; K++) {
            const P = Z[K]
              , bt = Zs(P);
            T.includes(bt) || (I.splice(K, 0, P),
            et.push(P))
        }
        return d === "wait" && et.length && (I = et),
        G(jp(I)),
        H(b),
        null
    }
    const {forceRender: J} = q.useContext(gc);
    return S.jsx(S.Fragment, {
        children: Z.map(I => {
            const K = Zs(I)
              , P = h && !m ? !1 : b === Z || T.includes(K)
              , bt = () => {
                if (B.has(K))
                    B.set(K, !0);
                else
                    return;
                let Rt = !0;
                B.forEach(Kt => {
                    Kt || (Rt = !1)
                }
                ),
                Rt && (J == null || J(),
                G(U.current),
                h && (v == null || v()),
                o && o())
            }
            ;
            return S.jsx(bS, {
                isPresent: P,
                initial: !w.current || u ? void 0 : !1,
                custom: l,
                presenceAffectsLayout: c,
                mode: d,
                root: p,
                onExitComplete: P ? void 0 : bt,
                anchorX: y,
                children: I
            }, K)
        }
        )
    })
}
  , Ty = q.createContext({
    strict: !1
})
  , wp = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , fi = {};
for (const a in wp)
    fi[a] = {
        isEnabled: l => wp[a].some(u => !!l[u])
    };
function SS(a) {
    for (const l in a)
        fi[l] = {
            ...fi[l],
            ...a[l]
        }
}
const TS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function eu(a) {
    return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || TS.has(a)
}
let Ay = a => !eu(a);
function AS(a) {
    typeof a == "function" && (Ay = l => l.startsWith("on") ? !eu(l) : a(l))
}
try {
    AS(require("@emotion/is-prop-valid").default)
} catch {}
function ES(a, l, u) {
    const o = {};
    for (const c in a)
        c === "values" && typeof a.values == "object" || (Ay(c) || u === !0 && eu(c) || !l && !eu(c) || a.draggable && c.startsWith("onDrag")) && (o[c] = a[c]);
    return o
}
const lu = q.createContext({});
function su(a) {
    return a !== null && typeof a == "object" && typeof a.start == "function"
}
function bl(a) {
    return typeof a == "string" || Array.isArray(a)
}
const qc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Gc = ["initial", ...qc];
function uu(a) {
    return su(a.animate) || Gc.some(l => bl(a[l]))
}
function Ey(a) {
    return !!(uu(a) || a.variants)
}
function MS(a, l) {
    if (uu(a)) {
        const {initial: u, animate: o} = a;
        return {
            initial: u === !1 || bl(u) ? u : void 0,
            animate: bl(o) ? o : void 0
        }
    }
    return a.inherit !== !1 ? l : {}
}
function DS(a) {
    const {initial: l, animate: u} = MS(a, q.useContext(lu));
    return q.useMemo( () => ({
        initial: l,
        animate: u
    }), [Np(l), Np(u)])
}
function Np(a) {
    return Array.isArray(a) ? a.join(" ") : a
}
function Rp(a, l) {
    return l.max === l.min ? 0 : a / (l.max - l.min) * 100
}
const cl = {
    correct: (a, l) => {
        if (!l.target)
            return a;
        if (typeof a == "string")
            if (nt.test(a))
                a = parseFloat(a);
            else
                return a;
        const u = Rp(a, l.target.x)
          , o = Rp(a, l.target.y);
        return `${u}% ${o}%`
    }
}
  , CS = {
    correct: (a, {treeScale: l, projectionDelta: u}) => {
        const o = a
          , c = kn.parse(a);
        if (c.length > 5)
            return o;
        const d = kn.createTransformer(a)
          , h = typeof c[0] != "number" ? 1 : 0
          , y = u.x.scale * l.x
          , p = u.y.scale * l.y;
        c[0 + h] /= y,
        c[1 + h] /= p;
        const m = Nt(y, p, .5);
        return typeof c[2 + h] == "number" && (c[2 + h] /= m),
        typeof c[3 + h] == "number" && (c[3 + h] /= m),
        d(c)
    }
}
  , uc = {
    borderRadius: {
        ...cl,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: cl,
    borderTopRightRadius: cl,
    borderBottomLeftRadius: cl,
    borderBottomRightRadius: cl,
    boxShadow: CS
};
function My(a, {layout: l, layoutId: u}) {
    return mi.has(a) || a.startsWith("origin") || (l || u !== void 0) && (!!uc[a] || a === "opacity")
}
const zS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , jS = di.length;
function wS(a, l, u) {
    let o = ""
      , c = !0;
    for (let d = 0; d < jS; d++) {
        const h = di[d]
          , y = a[h];
        if (y === void 0)
            continue;
        let p = !0;
        if (typeof y == "number" ? p = y === (h.startsWith("scale") ? 1 : 0) : p = parseFloat(y) === 0,
        !p || u) {
            const m = my(y, Bc[h]);
            if (!p) {
                c = !1;
                const v = zS[h] || h;
                o += `${v}(${m}) `
            }
            u && (l[h] = m)
        }
    }
    return o = o.trim(),
    u ? o = u(l, c ? "" : o) : c && (o = "none"),
    o
}
function Xc(a, l, u) {
    const {style: o, vars: c, transformOrigin: d} = a;
    let h = !1
      , y = !1;
    for (const p in l) {
        const m = l[p];
        if (mi.has(p)) {
            h = !0;
            continue
        } else if (Z0(p)) {
            c[p] = m;
            continue
        } else {
            const v = my(m, Bc[p]);
            p.startsWith("origin") ? (y = !0,
            d[p] = v) : o[p] = v
        }
    }
    if (l.transform || (h || u ? o.transform = wS(l, a.transform, u) : o.transform && (o.transform = "none")),
    y) {
        const {originX: p="50%", originY: m="50%", originZ: v=0} = d;
        o.transformOrigin = `${p} ${m} ${v}`
    }
}
const Kc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Dy(a, l, u) {
    for (const o in l)
        !ae(l[o]) && !My(o, u) && (a[o] = l[o])
}
function NS({transformTemplate: a}, l) {
    return q.useMemo( () => {
        const u = Kc();
        return Xc(u, l, a),
        Object.assign({}, u.vars, u.style)
    }
    , [l])
}
function RS(a, l) {
    const u = a.style || {}
      , o = {};
    return Dy(o, u, a),
    Object.assign(o, NS(a, l)),
    o
}
function OS(a, l) {
    const u = {}
      , o = RS(a, l);
    return a.drag && a.dragListener !== !1 && (u.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`),
    a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (u.tabIndex = 0),
    u.style = o,
    u
}
const _S = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , VS = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function US(a, l, u=1, o=0, c=!0) {
    a.pathLength = 1;
    const d = c ? _S : VS;
    a[d.offset] = nt.transform(-o);
    const h = nt.transform(l)
      , y = nt.transform(u);
    a[d.array] = `${h} ${y}`
}
function Cy(a, {attrX: l, attrY: u, attrScale: o, pathLength: c, pathSpacing: d=1, pathOffset: h=0, ...y}, p, m, v) {
    if (Xc(a, y, m),
    p) {
        a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
        return
    }
    a.attrs = a.style,
    a.style = {};
    const {attrs: b, style: T} = a;
    b.transform && (T.transform = b.transform,
    delete b.transform),
    (T.transform || b.transformOrigin) && (T.transformOrigin = b.transformOrigin ?? "50% 50%",
    delete b.transformOrigin),
    T.transform && (T.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box",
    delete b.transformBox),
    l !== void 0 && (b.x = l),
    u !== void 0 && (b.y = u),
    o !== void 0 && (b.scale = o),
    c !== void 0 && US(b, c, d, h, !1)
}
const zy = () => ({
    ...Kc(),
    attrs: {}
})
  , jy = a => typeof a == "string" && a.toLowerCase() === "svg";
function BS(a, l, u, o) {
    const c = q.useMemo( () => {
        const d = zy();
        return Cy(d, l, jy(o), a.transformTemplate, a.style),
        {
            ...d.attrs,
            style: {
                ...d.style
            }
        }
    }
    , [l]);
    if (a.style) {
        const d = {};
        Dy(d, a.style, a),
        c.style = {
            ...d,
            ...c.style
        }
    }
    return c
}
const LS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Zc(a) {
    return typeof a != "string" || a.includes("-") ? !1 : !!(LS.indexOf(a) > -1 || /[A-Z]/u.test(a))
}
function HS(a, l, u, {latestValues: o}, c, d=!1) {
    const y = (Zc(a) ? BS : OS)(l, o, c, a)
      , p = ES(l, typeof a == "string", d)
      , m = a !== q.Fragment ? {
        ...p,
        ...y,
        ref: u
    } : {}
      , {children: v} = l
      , b = q.useMemo( () => ae(v) ? v.get() : v, [v]);
    return q.createElement(a, {
        ...m,
        children: b
    })
}
function Op(a) {
    const l = [{}, {}];
    return a == null || a.values.forEach( (u, o) => {
        l[0][o] = u.get(),
        l[1][o] = u.getVelocity()
    }
    ),
    l
}
function Qc(a, l, u, o) {
    if (typeof l == "function") {
        const [c,d] = Op(o);
        l = l(u !== void 0 ? u : a.custom, c, d)
    }
    if (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function") {
        const [c,d] = Op(o);
        l = l(u !== void 0 ? u : a.custom, c, d)
    }
    return l
}
function Fs(a) {
    return ae(a) ? a.get() : a
}
function YS({scrapeMotionValuesFromProps: a, createRenderState: l}, u, o, c) {
    return {
        latestValues: qS(u, o, c, a),
        renderState: l()
    }
}
function qS(a, l, u, o) {
    const c = {}
      , d = o(a, {});
    for (const T in d)
        c[T] = Fs(d[T]);
    let {initial: h, animate: y} = a;
    const p = uu(a)
      , m = Ey(a);
    l && m && !p && a.inherit !== !1 && (h === void 0 && (h = l.initial),
    y === void 0 && (y = l.animate));
    let v = u ? u.initial === !1 : !1;
    v = v || h === !1;
    const b = v ? y : h;
    if (b && typeof b != "boolean" && !su(b)) {
        const T = Array.isArray(b) ? b : [b];
        for (let w = 0; w < T.length; w++) {
            const U = Qc(a, T[w]);
            if (U) {
                const {transitionEnd: B, transition: Y, ...H} = U;
                for (const Z in H) {
                    let G = H[Z];
                    if (Array.isArray(G)) {
                        const et = v ? G.length - 1 : 0;
                        G = G[et]
                    }
                    G !== null && (c[Z] = G)
                }
                for (const Z in B)
                    c[Z] = B[Z]
            }
        }
    }
    return c
}
const wy = a => (l, u) => {
    const o = q.useContext(lu)
      , c = q.useContext(iu)
      , d = () => YS(a, l, o, c);
    return u ? d() : vc(d)
}
;
function kc(a, l, u) {
    var d;
    const {style: o} = a
      , c = {};
    for (const h in o)
        (ae(o[h]) || l.style && ae(l.style[h]) || My(h, a) || ((d = u == null ? void 0 : u.getValue(h)) == null ? void 0 : d.liveStyle) !== void 0) && (c[h] = o[h]);
    return c
}
const GS = wy({
    scrapeMotionValuesFromProps: kc,
    createRenderState: Kc
});
function Ny(a, l, u) {
    const o = kc(a, l, u);
    for (const c in a)
        if (ae(a[c]) || ae(l[c])) {
            const d = di.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            o[d] = a[c]
        }
    return o
}
const XS = wy({
    scrapeMotionValuesFromProps: Ny,
    createRenderState: zy
})
  , KS = Symbol.for("motionComponentSymbol");
function li(a) {
    return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current")
}
function ZS(a, l, u) {
    return q.useCallback(o => {
        o && a.onMount && a.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        u && (typeof u == "function" ? u(o) : li(u) && (u.current = o))
    }
    , [l])
}
const Jc = a => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , QS = "framerAppearId"
  , Ry = "data-" + Jc(QS)
  , Oy = q.createContext({});
function kS(a, l, u, o, c) {
    var B, Y;
    const {visualElement: d} = q.useContext(lu)
      , h = q.useContext(Ty)
      , y = q.useContext(iu)
      , p = q.useContext(Yc).reducedMotion
      , m = q.useRef(null);
    o = o || h.renderer,
    !m.current && o && (m.current = o(a, {
        visualState: l,
        parent: d,
        props: u,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: p
    }));
    const v = m.current
      , b = q.useContext(Oy);
    v && !v.projection && c && (v.type === "html" || v.type === "svg") && JS(m.current, u, c, b);
    const T = q.useRef(!1);
    q.useInsertionEffect( () => {
        v && T.current && v.update(u, y)
    }
    );
    const w = u[Ry]
      , U = q.useRef(!!w && !((B = window.MotionHandoffIsComplete) != null && B.call(window, w)) && ((Y = window.MotionHasOptimisedAnimation) == null ? void 0 : Y.call(window, w)));
    return z0( () => {
        v && (T.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        U.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    q.useEffect( () => {
        v && (!U.current && v.animationState && v.animationState.animateChanges(),
        U.current && (queueMicrotask( () => {
            var H;
            (H = window.MotionHandoffMarkAsComplete) == null || H.call(window, w)
        }
        ),
        U.current = !1),
        v.enteringChildren = void 0)
    }
    ),
    v
}
function JS(a, l, u, o) {
    const {layoutId: c, layout: d, drag: h, dragConstraints: y, layoutScroll: p, layoutRoot: m, layoutCrossfade: v} = l;
    a.projection = new u(a.latestValues,l["data-framer-portal-id"] ? void 0 : _y(a.parent)),
    a.projection.setOptions({
        layoutId: c,
        layout: d,
        alwaysMeasureLayout: !!h || y && li(y),
        visualElement: a,
        animationType: typeof d == "string" ? d : "both",
        initialPromotionConfig: o,
        crossfade: v,
        layoutScroll: p,
        layoutRoot: m
    })
}
function _y(a) {
    if (a)
        return a.options.allowProjection !== !1 ? a.projection : _y(a.parent)
}
function Hr(a, {forwardMotionProps: l=!1}={}, u, o) {
    u && SS(u);
    const c = Zc(a) ? XS : GS;
    function d(y, p) {
        let m;
        const v = {
            ...q.useContext(Yc),
            ...y,
            layoutId: FS(y)
        }
          , {isStatic: b} = v
          , T = DS(y)
          , w = c(y, b);
        if (!b && bc) {
            WS();
            const U = PS(v);
            m = U.MeasureLayout,
            T.visualElement = kS(a, w, v, o, U.ProjectionNode)
        }
        return S.jsxs(lu.Provider, {
            value: T,
            children: [m && T.visualElement ? S.jsx(m, {
                visualElement: T.visualElement,
                ...v
            }) : null, HS(a, y, ZS(w, T.visualElement, p), w, b, l)]
        })
    }
    d.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
    const h = q.forwardRef(d);
    return h[KS] = a,
    h
}
function FS({layoutId: a}) {
    const l = q.useContext(gc).id;
    return l && a !== void 0 ? l + "-" + a : a
}
function WS(a, l) {
    q.useContext(Ty).strict
}
function PS(a) {
    const {drag: l, layout: u} = fi;
    if (!l && !u)
        return {};
    const o = {
        ...l,
        ...u
    };
    return {
        MeasureLayout: l != null && l.isEnabled(a) || u != null && u.isEnabled(a) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
function $S(a, l) {
    if (typeof Proxy > "u")
        return Hr;
    const u = new Map
      , o = (d, h) => Hr(d, h, a, l)
      , c = (d, h) => o(d, h);
    return new Proxy(c,{
        get: (d, h) => h === "create" ? o : (u.has(h) || u.set(h, Hr(h, void 0, a, l)),
        u.get(h))
    })
}
function Vy({top: a, left: l, right: u, bottom: o}) {
    return {
        x: {
            min: l,
            max: u
        },
        y: {
            min: a,
            max: o
        }
    }
}
function IS({x: a, y: l}) {
    return {
        top: l.min,
        right: a.max,
        bottom: l.max,
        left: a.min
    }
}
function t2(a, l) {
    if (!l)
        return a;
    const u = l({
        x: a.left,
        y: a.top
    })
      , o = l({
        x: a.right,
        y: a.bottom
    });
    return {
        top: u.y,
        left: u.x,
        bottom: o.y,
        right: o.x
    }
}
function Yr(a) {
    return a === void 0 || a === 1
}
function oc({scale: a, scaleX: l, scaleY: u}) {
    return !Yr(a) || !Yr(l) || !Yr(u)
}
function pa(a) {
    return oc(a) || Uy(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY
}
function Uy(a) {
    return _p(a.x) || _p(a.y)
}
function _p(a) {
    return a && a !== "0%"
}
function nu(a, l, u) {
    const o = a - u
      , c = l * o;
    return u + c
}
function Vp(a, l, u, o, c) {
    return c !== void 0 && (a = nu(a, c, o)),
    nu(a, u, o) + l
}
function rc(a, l=0, u=1, o, c) {
    a.min = Vp(a.min, l, u, o, c),
    a.max = Vp(a.max, l, u, o, c)
}
function By(a, {x: l, y: u}) {
    rc(a.x, l.translate, l.scale, l.originPoint),
    rc(a.y, u.translate, u.scale, u.originPoint)
}
const Up = .999999999999
  , Bp = 1.0000000000001;
function e2(a, l, u, o=!1) {
    const c = u.length;
    if (!c)
        return;
    l.x = l.y = 1;
    let d, h;
    for (let y = 0; y < c; y++) {
        d = u[y],
        h = d.projectionDelta;
        const {visualElement: p} = d.options;
        p && p.props.style && p.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && ui(a, {
            x: -d.scroll.offset.x,
            y: -d.scroll.offset.y
        }),
        h && (l.x *= h.x.scale,
        l.y *= h.y.scale,
        By(a, h)),
        o && pa(d.latestValues) && ui(a, d.latestValues))
    }
    l.x < Bp && l.x > Up && (l.x = 1),
    l.y < Bp && l.y > Up && (l.y = 1)
}
function si(a, l) {
    a.min = a.min + l,
    a.max = a.max + l
}
function Lp(a, l, u, o, c=.5) {
    const d = Nt(a.min, a.max, c);
    rc(a, l, u, d, o)
}
function ui(a, l) {
    Lp(a.x, l.x, l.scaleX, l.scale, l.originX),
    Lp(a.y, l.y, l.scaleY, l.scale, l.originY)
}
function Ly(a, l) {
    return Vy(t2(a.getBoundingClientRect(), l))
}
function n2(a, l, u) {
    const o = Ly(a, u)
      , {scroll: c} = l;
    return c && (si(o.x, c.offset.x),
    si(o.y, c.offset.y)),
    o
}
const Hp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , oi = () => ({
    x: Hp(),
    y: Hp()
})
  , Yp = () => ({
    min: 0,
    max: 0
})
  , Qt = () => ({
    x: Yp(),
    y: Yp()
})
  , cc = {
    current: null
}
  , Hy = {
    current: !1
};
function a2() {
    if (Hy.current = !0,
    !!bc)
        if (window.matchMedia) {
            const a = window.matchMedia("(prefers-reduced-motion)")
              , l = () => cc.current = a.matches;
            a.addEventListener("change", l),
            l()
        } else
            cc.current = !1
}
const i2 = new WeakMap;
function l2(a, l, u) {
    for (const o in l) {
        const c = l[o]
          , d = u[o];
        if (ae(c))
            a.addValue(o, c);
        else if (ae(d))
            a.addValue(o, ci(c, {
                owner: a
            }));
        else if (d !== c)
            if (a.hasValue(o)) {
                const h = a.getValue(o);
                h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c)
            } else {
                const h = a.getStaticValue(o);
                a.addValue(o, ci(h !== void 0 ? h : c, {
                    owner: a
                }))
            }
    }
    for (const o in u)
        l[o] === void 0 && a.removeValue(o);
    return l
}
const qp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class s2 {
    scrapeMotionValuesFromProps(l, u, o) {
        return {}
    }
    constructor({parent: l, props: u, presenceContext: o, reducedMotionConfig: c, blockInitialAnimation: d, visualState: h}, y={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Vc,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const T = pe.now();
            this.renderScheduledAt < T && (this.renderScheduledAt = T,
            jt.render(this.render, !1, !0))
        }
        ;
        const {latestValues: p, renderState: m} = h;
        this.latestValues = p,
        this.baseTarget = {
            ...p
        },
        this.initialValues = u.initial ? {
            ...p
        } : {},
        this.renderState = m,
        this.parent = l,
        this.props = u,
        this.presenceContext = o,
        this.depth = l ? l.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.options = y,
        this.blockInitialAnimation = !!d,
        this.isControllingVariants = uu(u),
        this.isVariantNode = Ey(u),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(l && l.current);
        const {willChange: v, ...b} = this.scrapeMotionValuesFromProps(u, {}, this);
        for (const T in b) {
            const w = b[T];
            p[T] !== void 0 && ae(w) && w.set(p[T])
        }
    }
    mount(l) {
        var u;
        this.current = l,
        i2.set(l, this),
        this.projection && !this.projection.instance && this.projection.mount(l),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (o, c) => this.bindToMotionValue(c, o)),
        Hy.current || a2(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : cc.current,
        (u = this.parent) == null || u.addChild(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        var l;
        this.projection && this.projection.unmount(),
        Qn(this.notifyUpdate),
        Qn(this.render),
        this.valueSubscriptions.forEach(u => u()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (l = this.parent) == null || l.removeChild(this);
        for (const u in this.events)
            this.events[u].clear();
        for (const u in this.features) {
            const o = this.features[u];
            o && (o.unmount(),
            o.isMounted = !1)
        }
        this.current = null
    }
    addChild(l) {
        this.children.add(l),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(l)
    }
    removeChild(l) {
        this.children.delete(l),
        this.enteringChildren && this.enteringChildren.delete(l)
    }
    bindToMotionValue(l, u) {
        this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
        const o = mi.has(l);
        o && this.onBindTransform && this.onBindTransform();
        const c = u.on("change", h => {
            this.latestValues[l] = h,
            this.props.onUpdate && jt.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, u)),
        this.valueSubscriptions.set(l, () => {
            c(),
            d && d(),
            u.owner && u.stop()
        }
        )
    }
    sortNodePosition(l) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current)
    }
    updateFeatures() {
        let l = "animation";
        for (l in fi) {
            const u = fi[l];
            if (!u)
                continue;
            const {isEnabled: o, Feature: c} = u;
            if (!this.features[l] && c && o(this.props) && (this.features[l] = new c(this)),
            this.features[l]) {
                const d = this.features[l];
                d.isMounted ? d.update() : (d.mount(),
                d.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Qt()
    }
    getStaticValue(l) {
        return this.latestValues[l]
    }
    setStaticValue(l, u) {
        this.latestValues[l] = u
    }
    update(l, u) {
        (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = l,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = u;
        for (let o = 0; o < qp.length; o++) {
            const c = qp[o];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const d = "on" + c
              , h = l[d];
            h && (this.propEventSubscriptions[c] = this.on(c, h))
        }
        this.prevMotionValues = l2(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(l) {
        return this.props.variants ? this.props.variants[l] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(l) {
        const u = this.getClosestVariantNode();
        if (u)
            return u.variantChildren && u.variantChildren.add(l),
            () => u.variantChildren.delete(l)
    }
    addValue(l, u) {
        const o = this.values.get(l);
        u !== o && (o && this.removeValue(l),
        this.bindToMotionValue(l, u),
        this.values.set(l, u),
        this.latestValues[l] = u.get())
    }
    removeValue(l) {
        this.values.delete(l);
        const u = this.valueSubscriptions.get(l);
        u && (u(),
        this.valueSubscriptions.delete(l)),
        delete this.latestValues[l],
        this.removeValueFromRenderState(l, this.renderState)
    }
    hasValue(l) {
        return this.values.has(l)
    }
    getValue(l, u) {
        if (this.props.values && this.props.values[l])
            return this.props.values[l];
        let o = this.values.get(l);
        return o === void 0 && u !== void 0 && (o = ci(u === null ? void 0 : u, {
            owner: this
        }),
        this.addValue(l, o)),
        o
    }
    readValue(l, u) {
        let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
        return o != null && (typeof o == "string" && (j0(o) || N0(o)) ? o = parseFloat(o) : !mS(o) && kn.test(u) && (o = dy(l, u)),
        this.setBaseTarget(l, ae(o) ? o.get() : o)),
        ae(o) ? o.get() : o
    }
    setBaseTarget(l, u) {
        this.baseTarget[l] = u
    }
    getBaseTarget(l) {
        var d;
        const {initial: u} = this.props;
        let o;
        if (typeof u == "string" || typeof u == "object") {
            const h = Qc(this.props, u, (d = this.presenceContext) == null ? void 0 : d.custom);
            h && (o = h[l])
        }
        if (u && o !== void 0)
            return o;
        const c = this.getBaseTargetFromProps(this.props, l);
        return c !== void 0 && !ae(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l]
    }
    on(l, u) {
        return this.events[l] || (this.events[l] = new Ec),
        this.events[l].add(u)
    }
    notify(l, ...u) {
        this.events[l] && this.events[l].notify(...u)
    }
    scheduleRenderMicrotask() {
        Lc.render(this.render)
    }
}
class Yy extends s2 {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = nS
    }
    sortInstanceNodePosition(l, u) {
        return l.compareDocumentPosition(u) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(l, u) {
        return l.style ? l.style[u] : void 0
    }
    removeValueFromRenderState(l, {vars: u, style: o}) {
        delete u[l],
        delete o[l]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: l} = this.props;
        ae(l) && (this.childSubscription = l.on("change", u => {
            this.current && (this.current.textContent = `${u}`)
        }
        ))
    }
}
function qy(a, {style: l, vars: u}, o, c) {
    const d = a.style;
    let h;
    for (h in l)
        d[h] = l[h];
    c == null || c.applyProjectionStyles(d, o);
    for (h in u)
        d.setProperty(h, u[h])
}
function u2(a) {
    return window.getComputedStyle(a)
}
class o2 extends Yy {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = qy
    }
    readValueFromInstance(l, u) {
        var o;
        if (mi.has(u))
            return (o = this.projection) != null && o.isProjecting ? tc(u) : Sx(l, u);
        {
            const c = u2(l)
              , d = (Z0(u) ? c.getPropertyValue(u) : c[u]) || 0;
            return typeof d == "string" ? d.trim() : d
        }
    }
    measureInstanceViewportBox(l, {transformPagePoint: u}) {
        return Ly(l, u)
    }
    build(l, u, o) {
        Xc(l, u, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(l, u, o) {
        return kc(l, u, o)
    }
}
const Gy = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function r2(a, l, u, o) {
    qy(a, l, void 0, o);
    for (const c in l.attrs)
        a.setAttribute(Gy.has(c) ? c : Jc(c), l.attrs[c])
}
class c2 extends Yy {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Qt
    }
    getBaseTargetFromProps(l, u) {
        return l[u]
    }
    readValueFromInstance(l, u) {
        if (mi.has(u)) {
            const o = hy(u);
            return o && o.default || 0
        }
        return u = Gy.has(u) ? u : Jc(u),
        l.getAttribute(u)
    }
    scrapeMotionValuesFromProps(l, u, o) {
        return Ny(l, u, o)
    }
    build(l, u, o) {
        Cy(l, u, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(l, u, o, c) {
        r2(l, u, o, c)
    }
    mount(l) {
        this.isSVGTag = jy(l.tagName),
        super.mount(l)
    }
}
const f2 = (a, l) => Zc(a) ? new c2(l) : new o2(l,{
    allowProjection: a !== q.Fragment
});
function ri(a, l, u) {
    const o = a.getProps();
    return Qc(o, l, u !== void 0 ? u : o.custom, a)
}
const fc = a => Array.isArray(a);
function h2(a, l, u) {
    a.hasValue(l) ? a.getValue(l).set(u) : a.addValue(l, ci(u))
}
function d2(a) {
    return fc(a) ? a[a.length - 1] || 0 : a
}
function m2(a, l) {
    const u = ri(a, l);
    let {transitionEnd: o={}, transition: c={}, ...d} = u || {};
    d = {
        ...d,
        ...o
    };
    for (const h in d) {
        const y = d2(d[h]);
        h2(a, h, y)
    }
}
function p2(a) {
    return !!(ae(a) && a.add)
}
function hc(a, l) {
    const u = a.getValue("willChange");
    if (p2(u))
        return u.add(l);
    if (!u && bn.WillChange) {
        const o = new bn.WillChange("auto");
        a.addValue("willChange", o),
        o.add(l)
    }
}
function Xy(a) {
    return a.props[Ry]
}
const y2 = a => a !== null;
function g2(a, {repeat: l, repeatType: u="loop"}, o) {
    const c = a.filter(y2)
      , d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
    return c[d]
}
const v2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , b2 = a => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , x2 = {
    type: "keyframes",
    duration: .8
}
  , S2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , T2 = (a, {keyframes: l}) => l.length > 2 ? x2 : mi.has(a) ? a.startsWith("scale") ? b2(l[1]) : v2 : S2;
function A2({when: a, delay: l, delayChildren: u, staggerChildren: o, staggerDirection: c, repeat: d, repeatType: h, repeatDelay: y, from: p, elapsed: m, ...v}) {
    return !!Object.keys(v).length
}
const Fc = (a, l, u, o={}, c, d) => h => {
    const y = Uc(o, a) || {}
      , p = y.delay || o.delay || 0;
    let {elapsed: m=0} = o;
    m = m - We(p);
    const v = {
        keyframes: Array.isArray(u) ? u : [null, u],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...y,
        delay: -m,
        onUpdate: T => {
            l.set(T),
            y.onUpdate && y.onUpdate(T)
        }
        ,
        onComplete: () => {
            h(),
            y.onComplete && y.onComplete()
        }
        ,
        name: a,
        motionValue: l,
        element: d ? void 0 : c
    };
    A2(y) || Object.assign(v, T2(a, v)),
    v.duration && (v.duration = We(v.duration)),
    v.repeatDelay && (v.repeatDelay = We(v.repeatDelay)),
    v.from !== void 0 && (v.keyframes[0] = v.from);
    let b = !1;
    if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (lc(v),
    v.delay === 0 && (b = !0)),
    (bn.instantAnimations || bn.skipAnimations) && (b = !0,
    lc(v),
    v.delay = 0),
    v.allowFlatten = !y.type && !y.ease,
    b && !d && l.get() !== void 0) {
        const T = g2(v.keyframes, y);
        if (T !== void 0) {
            jt.update( () => {
                v.onUpdate(T),
                v.onComplete()
            }
            );
            return
        }
    }
    return y.isSync ? new _c(v) : new Kx(v)
}
;
function E2({protectedKeys: a, needsAnimating: l}, u) {
    const o = a.hasOwnProperty(u) && l[u] !== !0;
    return l[u] = !1,
    o
}
function Ky(a, l, {delay: u=0, transitionOverride: o, type: c}={}) {
    let {transition: d=a.getDefaultTransition(), transitionEnd: h, ...y} = l;
    o && (d = o);
    const p = []
      , m = c && a.animationState && a.animationState.getState()[c];
    for (const v in y) {
        const b = a.getValue(v, a.latestValues[v] ?? null)
          , T = y[v];
        if (T === void 0 || m && E2(m, v))
            continue;
        const w = {
            delay: u,
            ...Uc(d || {}, v)
        }
          , U = b.get();
        if (U !== void 0 && !b.isAnimating && !Array.isArray(T) && T === U && !w.velocity)
            continue;
        let B = !1;
        if (window.MotionHandoffAnimation) {
            const H = Xy(a);
            if (H) {
                const Z = window.MotionHandoffAnimation(H, v, jt);
                Z !== null && (w.startTime = Z,
                B = !0)
            }
        }
        hc(a, v),
        b.start(Fc(v, b, T, a.shouldReduceMotion && ry.has(v) ? {
            type: !1
        } : w, a, B));
        const Y = b.animation;
        Y && p.push(Y)
    }
    return h && Promise.all(p).then( () => {
        jt.update( () => {
            h && m2(a, h)
        }
        )
    }
    ),
    p
}
function Zy(a, l, u, o=0, c=1) {
    const d = Array.from(a).sort( (m, v) => m.sortNodePosition(v)).indexOf(l)
      , h = a.size
      , y = (h - 1) * o;
    return typeof u == "function" ? u(d, h) : c === 1 ? d * o : y - d * o
}
function dc(a, l, u={}) {
    var p;
    const o = ri(a, l, u.type === "exit" ? (p = a.presenceContext) == null ? void 0 : p.custom : void 0);
    let {transition: c=a.getDefaultTransition() || {}} = o || {};
    u.transitionOverride && (c = u.transitionOverride);
    const d = o ? () => Promise.all(Ky(a, o, u)) : () => Promise.resolve()
      , h = a.variantChildren && a.variantChildren.size ? (m=0) => {
        const {delayChildren: v=0, staggerChildren: b, staggerDirection: T} = c;
        return M2(a, l, m, v, b, T, u)
    }
    : () => Promise.resolve()
      , {when: y} = c;
    if (y) {
        const [m,v] = y === "beforeChildren" ? [d, h] : [h, d];
        return m().then( () => v())
    } else
        return Promise.all([d(), h(u.delay)])
}
function M2(a, l, u=0, o=0, c=0, d=1, h) {
    const y = [];
    for (const p of a.variantChildren)
        p.notify("AnimationStart", l),
        y.push(dc(p, l, {
            ...h,
            delay: u + (typeof o == "function" ? 0 : o) + Zy(a.variantChildren, p, o, c, d)
        }).then( () => p.notify("AnimationComplete", l)));
    return Promise.all(y)
}
function D2(a, l, u={}) {
    a.notify("AnimationStart", l);
    let o;
    if (Array.isArray(l)) {
        const c = l.map(d => dc(a, d, u));
        o = Promise.all(c)
    } else if (typeof l == "string")
        o = dc(a, l, u);
    else {
        const c = typeof l == "function" ? ri(a, l, u.custom) : l;
        o = Promise.all(Ky(a, c, u))
    }
    return o.then( () => {
        a.notify("AnimationComplete", l)
    }
    )
}
function Qy(a, l) {
    if (!Array.isArray(l))
        return !1;
    const u = l.length;
    if (u !== a.length)
        return !1;
    for (let o = 0; o < u; o++)
        if (l[o] !== a[o])
            return !1;
    return !0
}
const C2 = Gc.length;
function ky(a) {
    if (!a)
        return;
    if (!a.isControllingVariants) {
        const u = a.parent ? ky(a.parent) || {} : {};
        return a.props.initial !== void 0 && (u.initial = a.props.initial),
        u
    }
    const l = {};
    for (let u = 0; u < C2; u++) {
        const o = Gc[u]
          , c = a.props[o];
        (bl(c) || c === !1) && (l[o] = c)
    }
    return l
}
const z2 = [...qc].reverse()
  , j2 = qc.length;
function w2(a) {
    return l => Promise.all(l.map( ({animation: u, options: o}) => D2(a, u, o)))
}
function N2(a) {
    let l = w2(a)
      , u = Gp()
      , o = !0;
    const c = p => (m, v) => {
        var T;
        const b = ri(a, v, p === "exit" ? (T = a.presenceContext) == null ? void 0 : T.custom : void 0);
        if (b) {
            const {transition: w, transitionEnd: U, ...B} = b;
            m = {
                ...m,
                ...B,
                ...U
            }
        }
        return m
    }
    ;
    function d(p) {
        l = p(a)
    }
    function h(p) {
        const {props: m} = a
          , v = ky(a.parent) || {}
          , b = []
          , T = new Set;
        let w = {}
          , U = 1 / 0;
        for (let Y = 0; Y < j2; Y++) {
            const H = z2[Y]
              , Z = u[H]
              , G = m[H] !== void 0 ? m[H] : v[H]
              , et = bl(G)
              , J = H === p ? Z.isActive : null;
            J === !1 && (U = Y);
            let I = G === v[H] && G !== m[H] && et;
            if (I && o && a.manuallyAnimateOnMount && (I = !1),
            Z.protectedKeys = {
                ...w
            },
            !Z.isActive && J === null || !G && !Z.prevProp || su(G) || typeof G == "boolean")
                continue;
            const K = R2(Z.prevProp, G);
            let P = K || H === p && Z.isActive && !I && et || Y > U && et
              , bt = !1;
            const Rt = Array.isArray(G) ? G : [G];
            let Kt = Rt.reduce(c(H), {});
            J === !1 && (Kt = {});
            const {prevResolvedValues: Ft={}} = Z
              , $e = {
                ...Ft,
                ...Kt
            }
              , Ce = L => {
                P = !0,
                T.has(L) && (bt = !0,
                T.delete(L)),
                Z.needsAnimating[L] = !0;
                const F = a.getValue(L);
                F && (F.liveStyle = !1)
            }
            ;
            for (const L in $e) {
                const F = Kt[L]
                  , ct = Ft[L];
                if (w.hasOwnProperty(L))
                    continue;
                let mt = !1;
                fc(F) && fc(ct) ? mt = !Qy(F, ct) : mt = F !== ct,
                mt ? F != null ? Ce(L) : T.add(L) : F !== void 0 && T.has(L) ? Ce(L) : Z.protectedKeys[L] = !0
            }
            Z.prevProp = G,
            Z.prevResolvedValues = Kt,
            Z.isActive && (w = {
                ...w,
                ...Kt
            }),
            o && a.blockInitialAnimation && (P = !1);
            const ue = I && K;
            P && (!ue || bt) && b.push(...Rt.map(L => {
                const F = {
                    type: H
                };
                if (typeof L == "string" && o && !ue && a.manuallyAnimateOnMount && a.parent) {
                    const {parent: ct} = a
                      , mt = ri(ct, L);
                    if (ct.enteringChildren && mt) {
                        const {delayChildren: E} = mt.transition || {};
                        F.delay = Zy(ct.enteringChildren, a, E)
                    }
                }
                return {
                    animation: L,
                    options: F
                }
            }
            ))
        }
        if (T.size) {
            const Y = {};
            if (typeof m.initial != "boolean") {
                const H = ri(a, Array.isArray(m.initial) ? m.initial[0] : m.initial);
                H && H.transition && (Y.transition = H.transition)
            }
            T.forEach(H => {
                const Z = a.getBaseTarget(H)
                  , G = a.getValue(H);
                G && (G.liveStyle = !0),
                Y[H] = Z ?? null
            }
            ),
            b.push({
                animation: Y
            })
        }
        let B = !!b.length;
        return o && (m.initial === !1 || m.initial === m.animate) && !a.manuallyAnimateOnMount && (B = !1),
        o = !1,
        B ? l(b) : Promise.resolve()
    }
    function y(p, m) {
        var b;
        if (u[p].isActive === m)
            return Promise.resolve();
        (b = a.variantChildren) == null || b.forEach(T => {
            var w;
            return (w = T.animationState) == null ? void 0 : w.setActive(p, m)
        }
        ),
        u[p].isActive = m;
        const v = h(p);
        for (const T in u)
            u[T].protectedKeys = {};
        return v
    }
    return {
        animateChanges: h,
        setActive: y,
        setAnimateFunction: d,
        getState: () => u,
        reset: () => {
            u = Gp()
        }
    }
}
function R2(a, l) {
    return typeof l == "string" ? l !== a : Array.isArray(l) ? !Qy(l, a) : !1
}
function ma(a=!1) {
    return {
        isActive: a,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Gp() {
    return {
        animate: ma(!0),
        whileInView: ma(),
        whileHover: ma(),
        whileTap: ma(),
        whileDrag: ma(),
        whileFocus: ma(),
        exit: ma()
    }
}
class Jn {
    constructor(l) {
        this.isMounted = !1,
        this.node = l
    }
    update() {}
}
class O2 extends Jn {
    constructor(l) {
        super(l),
        l.animationState || (l.animationState = N2(l))
    }
    updateAnimationControlsSubscription() {
        const {animate: l} = this.node.getProps();
        su(l) && (this.unmountControls = l.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: l} = this.node.getProps()
          , {animate: u} = this.node.prevProps || {};
        l !== u && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var l;
        this.node.animationState.reset(),
        (l = this.unmountControls) == null || l.call(this)
    }
}
let _2 = 0;
class V2 extends Jn {
    constructor() {
        super(...arguments),
        this.id = _2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: l, onExitComplete: u} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || l === o)
            return;
        const c = this.node.animationState.setActive("exit", !l);
        u && !l && c.then( () => {
            u(this.id)
        }
        )
    }
    mount() {
        const {register: l, onExitComplete: u} = this.node.presenceContext || {};
        u && u(this.id),
        l && (this.unmount = l(this.id))
    }
    unmount() {}
}
const U2 = {
    animation: {
        Feature: O2
    },
    exit: {
        Feature: V2
    }
};
function xl(a, l, u, o={
    passive: !0
}) {
    return a.addEventListener(l, u, o),
    () => a.removeEventListener(l, u)
}
function El(a) {
    return {
        point: {
            x: a.pageX,
            y: a.pageY
        }
    }
}
const B2 = a => l => Hc(l) && a(l, El(l));
function ml(a, l, u, o) {
    return xl(a, l, B2(u), o)
}
const Jy = 1e-4
  , L2 = 1 - Jy
  , H2 = 1 + Jy
  , Fy = .01
  , Y2 = 0 - Fy
  , q2 = 0 + Fy;
function se(a) {
    return a.max - a.min
}
function G2(a, l, u) {
    return Math.abs(a - l) <= u
}
function Xp(a, l, u, o=.5) {
    a.origin = o,
    a.originPoint = Nt(l.min, l.max, a.origin),
    a.scale = se(u) / se(l),
    a.translate = Nt(u.min, u.max, a.origin) - a.originPoint,
    (a.scale >= L2 && a.scale <= H2 || isNaN(a.scale)) && (a.scale = 1),
    (a.translate >= Y2 && a.translate <= q2 || isNaN(a.translate)) && (a.translate = 0)
}
function pl(a, l, u, o) {
    Xp(a.x, l.x, u.x, o ? o.originX : void 0),
    Xp(a.y, l.y, u.y, o ? o.originY : void 0)
}
function Kp(a, l, u) {
    a.min = u.min + l.min,
    a.max = a.min + se(l)
}
function X2(a, l, u) {
    Kp(a.x, l.x, u.x),
    Kp(a.y, l.y, u.y)
}
function Zp(a, l, u) {
    a.min = l.min - u.min,
    a.max = a.min + se(l)
}
function au(a, l, u) {
    Zp(a.x, l.x, u.x),
    Zp(a.y, l.y, u.y)
}
function Le(a) {
    return [a("x"), a("y")]
}
const Wy = ({current: a}) => a ? a.ownerDocument.defaultView : null
  , Qp = (a, l) => Math.abs(a - l);
function K2(a, l) {
    const u = Qp(a.x, l.x)
      , o = Qp(a.y, l.y);
    return Math.sqrt(u ** 2 + o ** 2)
}
class Py {
    constructor(l, u, {transformPagePoint: o, contextWindow: c=window, dragSnapToOrigin: d=!1, distanceThreshold: h=3}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const T = Gr(this.lastMoveEventInfo, this.history)
              , w = this.startEvent !== null
              , U = K2(T.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!w && !U)
                return;
            const {point: B} = T
              , {timestamp: Y} = ee;
            this.history.push({
                ...B,
                timestamp: Y
            });
            const {onStart: H, onMove: Z} = this.handlers;
            w || (H && H(this.lastMoveEvent, T),
            this.startEvent = this.lastMoveEvent),
            Z && Z(this.lastMoveEvent, T)
        }
        ,
        this.handlePointerMove = (T, w) => {
            this.lastMoveEvent = T,
            this.lastMoveEventInfo = qr(w, this.transformPagePoint),
            jt.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (T, w) => {
            this.end();
            const {onEnd: U, onSessionEnd: B, resumeAnimation: Y} = this.handlers;
            if (this.dragSnapToOrigin && Y && Y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const H = Gr(T.type === "pointercancel" ? this.lastMoveEventInfo : qr(w, this.transformPagePoint), this.history);
            this.startEvent && U && U(T, H),
            B && B(T, H)
        }
        ,
        !Hc(l))
            return;
        this.dragSnapToOrigin = d,
        this.handlers = u,
        this.transformPagePoint = o,
        this.distanceThreshold = h,
        this.contextWindow = c || window;
        const y = El(l)
          , p = qr(y, this.transformPagePoint)
          , {point: m} = p
          , {timestamp: v} = ee;
        this.history = [{
            ...m,
            timestamp: v
        }];
        const {onSessionStart: b} = u;
        b && b(l, Gr(p, this.history)),
        this.removeListeners = Sl(ml(this.contextWindow, "pointermove", this.handlePointerMove), ml(this.contextWindow, "pointerup", this.handlePointerUp), ml(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(l) {
        this.handlers = l
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Qn(this.updatePoint)
    }
}
function qr(a, l) {
    return l ? {
        point: l(a.point)
    } : a
}
function kp(a, l) {
    return {
        x: a.x - l.x,
        y: a.y - l.y
    }
}
function Gr({point: a}, l) {
    return {
        point: a,
        delta: kp(a, $y(l)),
        offset: kp(a, Z2(l)),
        velocity: Q2(l, .1)
    }
}
function Z2(a) {
    return a[0]
}
function $y(a) {
    return a[a.length - 1]
}
function Q2(a, l) {
    if (a.length < 2)
        return {
            x: 0,
            y: 0
        };
    let u = a.length - 1
      , o = null;
    const c = $y(a);
    for (; u >= 0 && (o = a[u],
    !(c.timestamp - o.timestamp > We(l))); )
        u--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    const d = He(c.timestamp - o.timestamp);
    if (d === 0)
        return {
            x: 0,
            y: 0
        };
    const h = {
        x: (c.x - o.x) / d,
        y: (c.y - o.y) / d
    };
    return h.x === 1 / 0 && (h.x = 0),
    h.y === 1 / 0 && (h.y = 0),
    h
}
function k2(a, {min: l, max: u}, o) {
    return l !== void 0 && a < l ? a = o ? Nt(l, a, o.min) : Math.max(a, l) : u !== void 0 && a > u && (a = o ? Nt(u, a, o.max) : Math.min(a, u)),
    a
}
function Jp(a, l, u) {
    return {
        min: l !== void 0 ? a.min + l : void 0,
        max: u !== void 0 ? a.max + u - (a.max - a.min) : void 0
    }
}
function J2(a, {top: l, left: u, bottom: o, right: c}) {
    return {
        x: Jp(a.x, u, c),
        y: Jp(a.y, l, o)
    }
}
function Fp(a, l) {
    let u = l.min - a.min
      , o = l.max - a.max;
    return l.max - l.min < a.max - a.min && ([u,o] = [o, u]),
    {
        min: u,
        max: o
    }
}
function F2(a, l) {
    return {
        x: Fp(a.x, l.x),
        y: Fp(a.y, l.y)
    }
}
function W2(a, l) {
    let u = .5;
    const o = se(a)
      , c = se(l);
    return c > o ? u = yl(l.min, l.max - o, a.min) : o > c && (u = yl(a.min, a.max - c, l.min)),
    vn(0, 1, u)
}
function P2(a, l) {
    const u = {};
    return l.min !== void 0 && (u.min = l.min - a.min),
    l.max !== void 0 && (u.max = l.max - a.min),
    u
}
const mc = .35;
function $2(a=mc) {
    return a === !1 ? a = 0 : a === !0 && (a = mc),
    {
        x: Wp(a, "left", "right"),
        y: Wp(a, "top", "bottom")
    }
}
function Wp(a, l, u) {
    return {
        min: Pp(a, l),
        max: Pp(a, u)
    }
}
function Pp(a, l) {
    return typeof a == "number" ? a : a[l] || 0
}
const I2 = new WeakMap;
class tT {
    constructor(l) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Qt(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = l
    }
    start(l, {snapToCursor: u=!1, distanceThreshold: o}={}) {
        const {presenceContext: c} = this.visualElement;
        if (c && c.isPresent === !1)
            return;
        const d = b => {
            const {dragSnapToOrigin: T} = this.getProps();
            T ? this.pauseAnimation() : this.stopAnimation(),
            u && this.snapToCursor(El(b).point)
        }
          , h = (b, T) => {
            const {drag: w, dragPropagation: U, onDragStart: B} = this.getProps();
            if (w && !U && (this.openDragLock && this.openDragLock(),
            this.openDragLock = sS(w),
            !this.openDragLock))
                return;
            this.latestPointerEvent = b,
            this.latestPanInfo = T,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Le(H => {
                let Z = this.getAxisMotionValue(H).get() || 0;
                if (Pe.test(Z)) {
                    const {projection: G} = this.visualElement;
                    if (G && G.layout) {
                        const et = G.layout.layoutBox[H];
                        et && (Z = se(et) * (parseFloat(Z) / 100))
                    }
                }
                this.originPoint[H] = Z
            }
            ),
            B && jt.postRender( () => B(b, T)),
            hc(this.visualElement, "transform");
            const {animationState: Y} = this.visualElement;
            Y && Y.setActive("whileDrag", !0)
        }
          , y = (b, T) => {
            this.latestPointerEvent = b,
            this.latestPanInfo = T;
            const {dragPropagation: w, dragDirectionLock: U, onDirectionLock: B, onDrag: Y} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: H} = T;
            if (U && this.currentDirection === null) {
                this.currentDirection = eT(H),
                this.currentDirection !== null && B && B(this.currentDirection);
                return
            }
            this.updateAxis("x", T.point, H),
            this.updateAxis("y", T.point, H),
            this.visualElement.render(),
            Y && Y(b, T)
        }
          , p = (b, T) => {
            this.latestPointerEvent = b,
            this.latestPanInfo = T,
            this.stop(b, T),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , m = () => Le(b => {
            var T;
            return this.getAnimationState(b) === "paused" && ((T = this.getAxisMotionValue(b).animation) == null ? void 0 : T.play())
        }
        )
          , {dragSnapToOrigin: v} = this.getProps();
        this.panSession = new Py(l,{
            onSessionStart: d,
            onStart: h,
            onMove: y,
            onSessionEnd: p,
            resumeAnimation: m
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: v,
            distanceThreshold: o,
            contextWindow: Wy(this.visualElement)
        })
    }
    stop(l, u) {
        const o = l || this.latestPointerEvent
          , c = u || this.latestPanInfo
          , d = this.isDragging;
        if (this.cancel(),
        !d || !c || !o)
            return;
        const {velocity: h} = c;
        this.startAnimation(h);
        const {onDragEnd: y} = this.getProps();
        y && jt.postRender( () => y(o, c))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: l, animationState: u} = this.visualElement;
        l && (l.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: o} = this.getProps();
        !o && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        u && u.setActive("whileDrag", !1)
    }
    updateAxis(l, u, o) {
        const {drag: c} = this.getProps();
        if (!o || !Qs(l, c, this.currentDirection))
            return;
        const d = this.getAxisMotionValue(l);
        let h = this.originPoint[l] + o[l];
        this.constraints && this.constraints[l] && (h = k2(h, this.constraints[l], this.elastic[l])),
        d.set(h)
    }
    resolveConstraints() {
        var d;
        const {dragConstraints: l, dragElastic: u} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (d = this.visualElement.projection) == null ? void 0 : d.layout
          , c = this.constraints;
        l && li(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = J2(o.layoutBox, l) : this.constraints = !1,
        this.elastic = $2(u),
        c !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Le(h => {
            this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = P2(o.layoutBox[h], this.constraints[h]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: l, onMeasureDragConstraints: u} = this.getProps();
        if (!l || !li(l))
            return !1;
        const o = l.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const d = n2(o, c.root, this.visualElement.getTransformPagePoint());
        let h = F2(c.layout.layoutBox, d);
        if (u) {
            const y = u(IS(h));
            this.hasMutatedConstraints = !!y,
            y && (h = Vy(y))
        }
        return h
    }
    startAnimation(l) {
        const {drag: u, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: h, onDragTransitionEnd: y} = this.getProps()
          , p = this.constraints || {}
          , m = Le(v => {
            if (!Qs(v, u, this.currentDirection))
                return;
            let b = p && p[v] || {};
            h && (b = {
                min: 0,
                max: 0
            });
            const T = c ? 200 : 1e6
              , w = c ? 40 : 1e7
              , U = {
                type: "inertia",
                velocity: o ? l[v] : 0,
                bounceStiffness: T,
                bounceDamping: w,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...d,
                ...b
            };
            return this.startAxisValueAnimation(v, U)
        }
        );
        return Promise.all(m).then(y)
    }
    startAxisValueAnimation(l, u) {
        const o = this.getAxisMotionValue(l);
        return hc(this.visualElement, l),
        o.start(Fc(l, o, 0, u, this.visualElement, !1))
    }
    stopAnimation() {
        Le(l => this.getAxisMotionValue(l).stop())
    }
    pauseAnimation() {
        Le(l => {
            var u;
            return (u = this.getAxisMotionValue(l).animation) == null ? void 0 : u.pause()
        }
        )
    }
    getAnimationState(l) {
        var u;
        return (u = this.getAxisMotionValue(l).animation) == null ? void 0 : u.state
    }
    getAxisMotionValue(l) {
        const u = `_drag${l.toUpperCase()}`
          , o = this.visualElement.getProps()
          , c = o[u];
        return c || this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0)
    }
    snapToCursor(l) {
        Le(u => {
            const {drag: o} = this.getProps();
            if (!Qs(u, o, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , d = this.getAxisMotionValue(u);
            if (c && c.layout) {
                const {min: h, max: y} = c.layout.layoutBox[u];
                d.set(l[u] - Nt(h, y, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: l, dragConstraints: u} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!li(u) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        Le(h => {
            const y = this.getAxisMotionValue(h);
            if (y && this.constraints !== !1) {
                const p = y.get();
                c[h] = W2({
                    min: p,
                    max: p
                }, this.constraints[h])
            }
        }
        );
        const {transformTemplate: d} = this.visualElement.getProps();
        this.visualElement.current.style.transform = d ? d({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        Le(h => {
            if (!Qs(h, l, null))
                return;
            const y = this.getAxisMotionValue(h)
              , {min: p, max: m} = this.constraints[h];
            y.set(Nt(p, m, c[h]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        I2.set(this.visualElement, this);
        const l = this.visualElement.current
          , u = ml(l, "pointerdown", p => {
            const {drag: m, dragListener: v=!0} = this.getProps();
            m && v && this.start(p)
        }
        )
          , o = () => {
            const {dragConstraints: p} = this.getProps();
            li(p) && p.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , d = c.addEventListener("measure", o);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        jt.read(o);
        const h = xl(window, "resize", () => this.scalePositionWithinConstraints())
          , y = c.addEventListener("didUpdate", ( ({delta: p, hasLayoutChanged: m}) => {
            this.isDragging && m && (Le(v => {
                const b = this.getAxisMotionValue(v);
                b && (this.originPoint[v] += p[v].translate,
                b.set(b.get() + p[v].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            h(),
            u(),
            d(),
            y && y()
        }
    }
    getProps() {
        const l = this.visualElement.getProps()
          , {drag: u=!1, dragDirectionLock: o=!1, dragPropagation: c=!1, dragConstraints: d=!1, dragElastic: h=mc, dragMomentum: y=!0} = l;
        return {
            ...l,
            drag: u,
            dragDirectionLock: o,
            dragPropagation: c,
            dragConstraints: d,
            dragElastic: h,
            dragMomentum: y
        }
    }
}
function Qs(a, l, u) {
    return (l === !0 || l === a) && (u === null || u === a)
}
function eT(a, l=10) {
    let u = null;
    return Math.abs(a.y) > l ? u = "y" : Math.abs(a.x) > l && (u = "x"),
    u
}
class nT extends Jn {
    constructor(l) {
        super(l),
        this.removeGroupControls = Ye,
        this.removeListeners = Ye,
        this.controls = new tT(l)
    }
    mount() {
        const {dragControls: l} = this.node.getProps();
        l && (this.removeGroupControls = l.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ye
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const $p = a => (l, u) => {
    a && jt.postRender( () => a(l, u))
}
;
class aT extends Jn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ye
    }
    onPointerDown(l) {
        this.session = new Py(l,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Wy(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: l, onPanStart: u, onPan: o, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: $p(l),
            onStart: $p(u),
            onMove: o,
            onEnd: (d, h) => {
                delete this.session,
                c && jt.postRender( () => c(d, h))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ml(this.node.current, "pointerdown", l => this.onPointerDown(l))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Ws = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
let Xr = !1;
class iT extends q.Component {
    componentDidMount() {
        const {visualElement: l, layoutGroup: u, switchLayoutGroup: o, layoutId: c} = this.props
          , {projection: d} = l;
        d && (u.group && u.group.add(d),
        o && o.register && c && o.register(d),
        Xr && d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        d.setOptions({
            ...d.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Ws.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(l) {
        const {layoutDependency: u, visualElement: o, drag: c, isPresent: d} = this.props
          , {projection: h} = o;
        return h && (h.isPresent = d,
        Xr = !0,
        c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d ? h.willUpdate() : this.safeToRemove(),
        l.isPresent !== d && (d ? h.promote() : h.relegate() || jt.postRender( () => {
            const y = h.getStack();
            (!y || !y.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: l} = this.props.visualElement;
        l && (l.root.didUpdate(),
        Lc.postRender( () => {
            !l.currentAnimation && l.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: l, layoutGroup: u, switchLayoutGroup: o} = this.props
          , {projection: c} = l;
        Xr = !0,
        c && (c.scheduleCheckAfterUnmount(),
        u && u.group && u.group.remove(c),
        o && o.deregister && o.deregister(c))
    }
    safeToRemove() {
        const {safeToRemove: l} = this.props;
        l && l()
    }
    render() {
        return null
    }
}
function Iy(a) {
    const [l,u] = xy()
      , o = q.useContext(gc);
    return S.jsx(iT, {
        ...a,
        layoutGroup: o,
        switchLayoutGroup: q.useContext(Oy),
        isPresent: l,
        safeToRemove: u
    })
}
function lT(a, l, u) {
    const o = ae(a) ? a : ci(a);
    return o.start(Fc("", o, l, u)),
    o.animation
}
const sT = (a, l) => a.depth - l.depth;
class uT {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(l) {
        xc(this.children, l),
        this.isDirty = !0
    }
    remove(l) {
        Sc(this.children, l),
        this.isDirty = !0
    }
    forEach(l) {
        this.isDirty && this.children.sort(sT),
        this.isDirty = !1,
        this.children.forEach(l)
    }
}
function oT(a, l) {
    const u = pe.now()
      , o = ({timestamp: c}) => {
        const d = c - u;
        d >= l && (Qn(o),
        a(d - l))
    }
    ;
    return jt.setup(o, !0),
    () => Qn(o)
}
const tg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , rT = tg.length
  , Ip = a => typeof a == "string" ? parseFloat(a) : a
  , t0 = a => typeof a == "number" || nt.test(a);
function cT(a, l, u, o, c, d) {
    c ? (a.opacity = Nt(0, u.opacity ?? 1, fT(o)),
    a.opacityExit = Nt(l.opacity ?? 1, 0, hT(o))) : d && (a.opacity = Nt(l.opacity ?? 1, u.opacity ?? 1, o));
    for (let h = 0; h < rT; h++) {
        const y = `border${tg[h]}Radius`;
        let p = e0(l, y)
          , m = e0(u, y);
        if (p === void 0 && m === void 0)
            continue;
        p || (p = 0),
        m || (m = 0),
        p === 0 || m === 0 || t0(p) === t0(m) ? (a[y] = Math.max(Nt(Ip(p), Ip(m), o), 0),
        (Pe.test(m) || Pe.test(p)) && (a[y] += "%")) : a[y] = m
    }
    (l.rotate || u.rotate) && (a.rotate = Nt(l.rotate || 0, u.rotate || 0, o))
}
function e0(a, l) {
    return a[l] !== void 0 ? a[l] : a.borderRadius
}
const fT = eg(0, .5, H0)
  , hT = eg(.5, .95, Ye);
function eg(a, l, u) {
    return o => o < a ? 0 : o > l ? 1 : u(yl(a, l, o))
}
function n0(a, l) {
    a.min = l.min,
    a.max = l.max
}
function Ke(a, l) {
    n0(a.x, l.x),
    n0(a.y, l.y)
}
function a0(a, l) {
    a.translate = l.translate,
    a.scale = l.scale,
    a.originPoint = l.originPoint,
    a.origin = l.origin
}
function i0(a, l, u, o, c) {
    return a -= l,
    a = nu(a, 1 / u, o),
    c !== void 0 && (a = nu(a, 1 / c, o)),
    a
}
function dT(a, l=0, u=1, o=.5, c, d=a, h=a) {
    if (Pe.test(l) && (l = parseFloat(l),
    l = Nt(h.min, h.max, l / 100) - h.min),
    typeof l != "number")
        return;
    let y = Nt(d.min, d.max, o);
    a === d && (y -= l),
    a.min = i0(a.min, l, u, y, c),
    a.max = i0(a.max, l, u, y, c)
}
function l0(a, l, [u,o,c], d, h) {
    dT(a, l[u], l[o], l[c], l.scale, d, h)
}
const mT = ["x", "scaleX", "originX"]
  , pT = ["y", "scaleY", "originY"];
function s0(a, l, u, o) {
    l0(a.x, l, mT, u ? u.x : void 0, o ? o.x : void 0),
    l0(a.y, l, pT, u ? u.y : void 0, o ? o.y : void 0)
}
function u0(a) {
    return a.translate === 0 && a.scale === 1
}
function ng(a) {
    return u0(a.x) && u0(a.y)
}
function o0(a, l) {
    return a.min === l.min && a.max === l.max
}
function yT(a, l) {
    return o0(a.x, l.x) && o0(a.y, l.y)
}
function r0(a, l) {
    return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max)
}
function ag(a, l) {
    return r0(a.x, l.x) && r0(a.y, l.y)
}
function c0(a) {
    return se(a.x) / se(a.y)
}
function f0(a, l) {
    return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint
}
class gT {
    constructor() {
        this.members = []
    }
    add(l) {
        xc(this.members, l),
        l.scheduleRender()
    }
    remove(l) {
        if (Sc(this.members, l),
        l === this.prevLead && (this.prevLead = void 0),
        l === this.lead) {
            const u = this.members[this.members.length - 1];
            u && this.promote(u)
        }
    }
    relegate(l) {
        const u = this.members.findIndex(c => l === c);
        if (u === 0)
            return !1;
        let o;
        for (let c = u; c >= 0; c--) {
            const d = this.members[c];
            if (d.isPresent !== !1) {
                o = d;
                break
            }
        }
        return o ? (this.promote(o),
        !0) : !1
    }
    promote(l, u) {
        const o = this.lead;
        if (l !== o && (this.prevLead = o,
        this.lead = l,
        l.show(),
        o)) {
            o.instance && o.scheduleRender(),
            l.scheduleRender(),
            l.resumeFrom = o,
            u && (l.resumeFrom.preserveOpacity = !0),
            o.snapshot && (l.snapshot = o.snapshot,
            l.snapshot.latestValues = o.animationValues || o.latestValues),
            l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
            const {crossfade: c} = l.options;
            c === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(l => {
            const {options: u, resumingFrom: o} = l;
            u.onExitComplete && u.onExitComplete(),
            o && o.options.onExitComplete && o.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(l => {
            l.instance && l.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function vT(a, l, u) {
    let o = "";
    const c = a.x.translate / l.x
      , d = a.y.translate / l.y
      , h = (u == null ? void 0 : u.z) || 0;
    if ((c || d || h) && (o = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    u) {
        const {transformPerspective: m, rotate: v, rotateX: b, rotateY: T, skewX: w, skewY: U} = u;
        m && (o = `perspective(${m}px) ${o}`),
        v && (o += `rotate(${v}deg) `),
        b && (o += `rotateX(${b}deg) `),
        T && (o += `rotateY(${T}deg) `),
        w && (o += `skewX(${w}deg) `),
        U && (o += `skewY(${U}deg) `)
    }
    const y = a.x.scale * l.x
      , p = a.y.scale * l.y;
    return (y !== 1 || p !== 1) && (o += `scale(${y}, ${p})`),
    o || "none"
}
const Kr = ["", "X", "Y", "Z"]
  , bT = 1e3;
let xT = 0;
function Zr(a, l, u, o) {
    const {latestValues: c} = l;
    c[a] && (u[a] = c[a],
    l.setStaticValue(a, 0),
    o && (o[a] = 0))
}
function ig(a) {
    if (a.hasCheckedOptimisedAppear = !0,
    a.root === a)
        return;
    const {visualElement: l} = a.options;
    if (!l)
        return;
    const u = Xy(l);
    if (window.MotionHasOptimisedAnimation(u, "transform")) {
        const {layout: c, layoutId: d} = a.options;
        window.MotionCancelOptimisedAnimation(u, "transform", jt, !(c || d))
    }
    const {parent: o} = a;
    o && !o.hasCheckedOptimisedAppear && ig(o)
}
function lg({attachResizeListener: a, defaultParent: l, measureScroll: u, checkIsScrollRoot: o, resetTransform: c}) {
    return class {
        constructor(h={}, y=l == null ? void 0 : l()) {
            this.id = xT++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(AT),
                this.nodes.forEach(CT),
                this.nodes.forEach(zT),
                this.nodes.forEach(ET)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = h,
            this.root = y ? y.root || y : this,
            this.path = y ? [...y.path, y] : [],
            this.parent = y,
            this.depth = y ? y.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new uT)
        }
        addEventListener(h, y) {
            return this.eventHandlers.has(h) || this.eventHandlers.set(h, new Ec),
            this.eventHandlers.get(h).add(y)
        }
        notifyListeners(h, ...y) {
            const p = this.eventHandlers.get(h);
            p && p.notify(...y)
        }
        hasListeners(h) {
            return this.eventHandlers.has(h)
        }
        mount(h) {
            if (this.instance)
                return;
            this.isSVG = by(h) && !hS(h),
            this.instance = h;
            const {layoutId: y, layout: p, visualElement: m} = this.options;
            if (m && !m.current && m.mount(h),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (p || y) && (this.isLayoutDirty = !0),
            a) {
                let v, b = 0;
                const T = () => this.root.updateBlockedByResize = !1;
                jt.read( () => {
                    b = window.innerWidth
                }
                ),
                a(h, () => {
                    const w = window.innerWidth;
                    w !== b && (b = w,
                    this.root.updateBlockedByResize = !0,
                    v && v(),
                    v = oT(T, 250),
                    Ws.hasAnimatedSinceResize && (Ws.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(m0)))
                }
                )
            }
            y && this.root.registerSharedNode(y, this),
            this.options.animate !== !1 && m && (y || p) && this.addEventListener("didUpdate", ({delta: v, hasLayoutChanged: b, hasRelativeLayoutChanged: T, layout: w}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const U = this.options.transition || m.getDefaultTransition() || OT
                  , {onLayoutAnimationStart: B, onLayoutAnimationComplete: Y} = m.getProps()
                  , H = !this.targetLayout || !ag(this.targetLayout, w)
                  , Z = !b && T;
                if (this.options.layoutRoot || this.resumeFrom || Z || b && (H || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const G = {
                        ...Uc(U, "layout"),
                        onPlay: B,
                        onComplete: Y
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (G.delay = 0,
                    G.type = !1),
                    this.startAnimation(G),
                    this.setAnimationOrigin(v, Z)
                } else
                    b || m0(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = w
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const h = this.getStack();
            h && h.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Qn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(jT),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: h} = this.options;
            return h && h.getProps().transformTemplate
        }
        willUpdate(h=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ig(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let v = 0; v < this.path.length; v++) {
                const b = this.path[v];
                b.shouldResetTransform = !0,
                b.updateScroll("snapshot"),
                b.options.layoutRoot && b.willUpdate(!1)
            }
            const {layoutId: y, layout: p} = this.options;
            if (y === void 0 && !p)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            h && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(h0);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(d0);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(DT),
            this.nodes.forEach(ST),
            this.nodes.forEach(TT)) : this.nodes.forEach(d0),
            this.clearAllSnapshots();
            const y = pe.now();
            ee.delta = vn(0, 1e3 / 60, y - ee.timestamp),
            ee.timestamp = y,
            ee.isProcessing = !0,
            Or.update.process(ee),
            Or.preRender.process(ee),
            Or.render.process(ee),
            ee.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Lc.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(MT),
            this.sharedNodes.forEach(wT)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            jt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            jt.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !se(this.snapshot.measuredBox.x) && !se(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++)
                    this.path[p].updateScroll();
            const h = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = Qt(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: y} = this.options;
            y && y.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0)
        }
        updateScroll(h="measure") {
            let y = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (y = !1),
            y && this.instance) {
                const p = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: h,
                    isRoot: p,
                    offset: u(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , y = this.projectionDelta && !ng(this.projectionDelta)
              , p = this.getTransformTemplate()
              , m = p ? p(this.latestValues, "") : void 0
              , v = m !== this.prevTransformTemplateValue;
            h && this.instance && (y || pa(this.latestValues) || v) && (c(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(h=!0) {
            const y = this.measurePageBox();
            let p = this.removeElementScroll(y);
            return h && (p = this.removeTransform(p)),
            _T(p),
            {
                animationId: this.root.animationId,
                measuredBox: y,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var m;
            const {visualElement: h} = this.options;
            if (!h)
                return Qt();
            const y = h.measureViewportBox();
            if (!(((m = this.scroll) == null ? void 0 : m.wasRoot) || this.path.some(VT))) {
                const {scroll: v} = this.root;
                v && (si(y.x, v.offset.x),
                si(y.y, v.offset.y))
            }
            return y
        }
        removeElementScroll(h) {
            var p;
            const y = Qt();
            if (Ke(y, h),
            (p = this.scroll) != null && p.wasRoot)
                return y;
            for (let m = 0; m < this.path.length; m++) {
                const v = this.path[m]
                  , {scroll: b, options: T} = v;
                v !== this.root && b && T.layoutScroll && (b.wasRoot && Ke(y, h),
                si(y.x, b.offset.x),
                si(y.y, b.offset.y))
            }
            return y
        }
        applyTransform(h, y=!1) {
            const p = Qt();
            Ke(p, h);
            for (let m = 0; m < this.path.length; m++) {
                const v = this.path[m];
                !y && v.options.layoutScroll && v.scroll && v !== v.root && ui(p, {
                    x: -v.scroll.offset.x,
                    y: -v.scroll.offset.y
                }),
                pa(v.latestValues) && ui(p, v.latestValues)
            }
            return pa(this.latestValues) && ui(p, this.latestValues),
            p
        }
        removeTransform(h) {
            const y = Qt();
            Ke(y, h);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                if (!m.instance || !pa(m.latestValues))
                    continue;
                oc(m.latestValues) && m.updateSnapshot();
                const v = Qt()
                  , b = m.measurePageBox();
                Ke(v, b),
                s0(y, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, v)
            }
            return pa(this.latestValues) && s0(y, this.latestValues),
            y
        }
        setTargetDelta(h) {
            this.targetDelta = h,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(h) {
            this.options = {
                ...this.options,
                ...h,
                crossfade: h.crossfade !== void 0 ? h.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ee.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(h=!1) {
            var w;
            const y = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== y;
            if (!(h || p && this.isSharedProjectionDirty || this.isProjectionDirty || (w = this.parent) != null && w.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: v, layoutId: b} = this.options;
            if (!this.layout || !(v || b))
                return;
            this.resolvedRelativeTargetAt = ee.timestamp;
            const T = this.getClosestProjectingParent();
            T && this.linkedParentVersion !== T.layoutVersion && !T.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (T && T.layout ? this.createRelativeTarget(T, this.layout.layoutBox, T.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Qt(),
            this.targetWithTransforms = Qt()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            X2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ke(this.target, this.layout.layoutBox),
            By(this.target, this.targetDelta)) : Ke(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            T && !!T.resumingFrom == !!this.resumingFrom && !T.options.layoutScroll && T.target && this.animationProgress !== 1 ? this.createRelativeTarget(T, this.target, T.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || oc(this.parent.latestValues) || Uy(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(h, y, p) {
            this.relativeParent = h,
            this.linkedParentVersion = h.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Qt(),
            this.relativeTargetOrigin = Qt(),
            au(this.relativeTargetOrigin, y, p),
            Ke(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var U;
            const h = this.getLead()
              , y = !!this.resumingFrom || this !== h;
            let p = !0;
            if ((this.isProjectionDirty || (U = this.parent) != null && U.isProjectionDirty) && (p = !1),
            y && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === ee.timestamp && (p = !1),
            p)
                return;
            const {layout: m, layoutId: v} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(m || v))
                return;
            Ke(this.layoutCorrected, this.layout.layoutBox);
            const b = this.treeScale.x
              , T = this.treeScale.y;
            e2(this.layoutCorrected, this.treeScale, this.path, y),
            h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox,
            h.targetWithTransforms = Qt());
            const {target: w} = h;
            if (!w) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (a0(this.prevProjectionDelta.x, this.projectionDelta.x),
            a0(this.prevProjectionDelta.y, this.projectionDelta.y)),
            pl(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
            (this.treeScale.x !== b || this.treeScale.y !== T || !f0(this.projectionDelta.x, this.prevProjectionDelta.x) || !f0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", w))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(h=!0) {
            var y;
            if ((y = this.options.visualElement) == null || y.scheduleRender(),
            h) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = oi(),
            this.projectionDelta = oi(),
            this.projectionDeltaWithTransform = oi()
        }
        setAnimationOrigin(h, y=!1) {
            const p = this.snapshot
              , m = p ? p.latestValues : {}
              , v = {
                ...this.latestValues
            }
              , b = oi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !y;
            const T = Qt()
              , w = p ? p.source : void 0
              , U = this.layout ? this.layout.source : void 0
              , B = w !== U
              , Y = this.getStack()
              , H = !Y || Y.members.length <= 1
              , Z = !!(B && !H && this.options.crossfade === !0 && !this.path.some(RT));
            this.animationProgress = 0;
            let G;
            this.mixTargetDelta = et => {
                const J = et / 1e3;
                p0(b.x, h.x, J),
                p0(b.y, h.y, J),
                this.setTargetDelta(b),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (au(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                NT(this.relativeTarget, this.relativeTargetOrigin, T, J),
                G && yT(this.relativeTarget, G) && (this.isProjectionDirty = !1),
                G || (G = Qt()),
                Ke(G, this.relativeTarget)),
                B && (this.animationValues = v,
                cT(v, m, this.latestValues, J, Z, H)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = J
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(h) {
            var y, p, m;
            this.notifyListeners("animationStart"),
            (y = this.currentAnimation) == null || y.stop(),
            (m = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) == null || m.stop(),
            this.pendingAnimation && (Qn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = jt.update( () => {
                Ws.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = ci(0)),
                this.currentAnimation = lT(this.motionValue, [0, 1e3], {
                    ...h,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: v => {
                        this.mixTargetDelta(v),
                        h.onUpdate && h.onUpdate(v)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        h.onComplete && h.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const h = this.getStack();
            h && h.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(bT),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const h = this.getLead();
            let {targetWithTransforms: y, target: p, layout: m, latestValues: v} = h;
            if (!(!y || !p || !m)) {
                if (this !== h && this.layout && m && sg(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    p = this.target || Qt();
                    const b = se(this.layout.layoutBox.x);
                    p.x.min = h.target.x.min,
                    p.x.max = p.x.min + b;
                    const T = se(this.layout.layoutBox.y);
                    p.y.min = h.target.y.min,
                    p.y.max = p.y.min + T
                }
                Ke(y, p),
                ui(y, v),
                pl(this.projectionDeltaWithTransform, this.layoutCorrected, y, v)
            }
        }
        registerSharedNode(h, y) {
            this.sharedNodes.has(h) || this.sharedNodes.set(h, new gT),
            this.sharedNodes.get(h).add(y);
            const m = y.options.initialPromotionConfig;
            y.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(y) : void 0
            })
        }
        isLead() {
            const h = this.getStack();
            return h ? h.lead === this : !0
        }
        getLead() {
            var y;
            const {layoutId: h} = this.options;
            return h ? ((y = this.getStack()) == null ? void 0 : y.lead) || this : this
        }
        getPrevLead() {
            var y;
            const {layoutId: h} = this.options;
            return h ? (y = this.getStack()) == null ? void 0 : y.prevLead : void 0
        }
        getStack() {
            const {layoutId: h} = this.options;
            if (h)
                return this.root.sharedNodes.get(h)
        }
        promote({needsReset: h, transition: y, preserveFollowOpacity: p}={}) {
            const m = this.getStack();
            m && m.promote(this, p),
            h && (this.projectionDelta = void 0,
            this.needsReset = !0),
            y && this.setOptions({
                transition: y
            })
        }
        relegate() {
            const h = this.getStack();
            return h ? h.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: h} = this.options;
            if (!h)
                return;
            let y = !1;
            const {latestValues: p} = h;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (y = !0),
            !y)
                return;
            const m = {};
            p.z && Zr("z", h, m, this.animationValues);
            for (let v = 0; v < Kr.length; v++)
                Zr(`rotate${Kr[v]}`, h, m, this.animationValues),
                Zr(`skew${Kr[v]}`, h, m, this.animationValues);
            h.render();
            for (const v in m)
                h.setStaticValue(v, m[v]),
                this.animationValues && (this.animationValues[v] = m[v]);
            h.scheduleRender()
        }
        applyProjectionStyles(h, y) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                h.visibility = "hidden";
                return
            }
            const p = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                h.visibility = "",
                h.opacity = "",
                h.pointerEvents = Fs(y == null ? void 0 : y.pointerEvents) || "",
                h.transform = p ? p(this.latestValues, "") : "none";
                return
            }
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                h.pointerEvents = Fs(y == null ? void 0 : y.pointerEvents) || ""),
                this.hasProjected && !pa(this.latestValues) && (h.transform = p ? p({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            h.visibility = "";
            const v = m.animationValues || m.latestValues;
            this.applyTransformsToTarget();
            let b = vT(this.projectionDeltaWithTransform, this.treeScale, v);
            p && (b = p(v, b)),
            h.transform = b;
            const {x: T, y: w} = this.projectionDelta;
            h.transformOrigin = `${T.origin * 100}% ${w.origin * 100}% 0`,
            m.animationValues ? h.opacity = m === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = m === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const U in uc) {
                if (v[U] === void 0)
                    continue;
                const {correct: B, applyTo: Y, isCSSVariable: H} = uc[U]
                  , Z = b === "none" ? v[U] : B(v[U], m);
                if (Y) {
                    const G = Y.length;
                    for (let et = 0; et < G; et++)
                        h[Y[et]] = Z
                } else
                    H ? this.options.visualElement.renderState.vars[U] = Z : h[U] = Z
            }
            this.options.layoutId && (h.pointerEvents = m === this ? Fs(y == null ? void 0 : y.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(h => {
                var y;
                return (y = h.currentAnimation) == null ? void 0 : y.stop()
            }
            ),
            this.root.nodes.forEach(h0),
            this.root.sharedNodes.clear()
        }
    }
}
function ST(a) {
    a.updateLayout()
}
function TT(a) {
    var u;
    const l = ((u = a.resumeFrom) == null ? void 0 : u.snapshot) || a.snapshot;
    if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: c} = a.layout
          , {animationType: d} = a.options
          , h = l.source !== a.layout.source;
        d === "size" ? Le(b => {
            const T = h ? l.measuredBox[b] : l.layoutBox[b]
              , w = se(T);
            T.min = o[b].min,
            T.max = T.min + w
        }
        ) : sg(d, l.layoutBox, o) && Le(b => {
            const T = h ? l.measuredBox[b] : l.layoutBox[b]
              , w = se(o[b]);
            T.max = T.min + w,
            a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0,
            a.relativeTarget[b].max = a.relativeTarget[b].min + w)
        }
        );
        const y = oi();
        pl(y, o, l.layoutBox);
        const p = oi();
        h ? pl(p, a.applyTransform(c, !0), l.measuredBox) : pl(p, o, l.layoutBox);
        const m = !ng(y);
        let v = !1;
        if (!a.resumeFrom) {
            const b = a.getClosestProjectingParent();
            if (b && !b.resumeFrom) {
                const {snapshot: T, layout: w} = b;
                if (T && w) {
                    const U = Qt();
                    au(U, l.layoutBox, T.layoutBox);
                    const B = Qt();
                    au(B, o, w.layoutBox),
                    ag(U, B) || (v = !0),
                    b.options.layoutRoot && (a.relativeTarget = B,
                    a.relativeTargetOrigin = U,
                    a.relativeParent = b)
                }
            }
        }
        a.notifyListeners("didUpdate", {
            layout: o,
            snapshot: l,
            delta: p,
            layoutDelta: y,
            hasLayoutChanged: m,
            hasRelativeLayoutChanged: v
        })
    } else if (a.isLead()) {
        const {onExitComplete: o} = a.options;
        o && o()
    }
    a.options.transition = void 0
}
function AT(a) {
    a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty))
}
function ET(a) {
    a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1
}
function MT(a) {
    a.clearSnapshot()
}
function h0(a) {
    a.clearMeasurements()
}
function d0(a) {
    a.isLayoutDirty = !1
}
function DT(a) {
    const {visualElement: l} = a.options;
    l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform()
}
function m0(a) {
    a.finishAnimation(),
    a.targetDelta = a.relativeTarget = a.target = void 0,
    a.isProjectionDirty = !0
}
function CT(a) {
    a.resolveTargetDelta()
}
function zT(a) {
    a.calcProjection()
}
function jT(a) {
    a.resetSkewAndRotation()
}
function wT(a) {
    a.removeLeadSnapshot()
}
function p0(a, l, u) {
    a.translate = Nt(l.translate, 0, u),
    a.scale = Nt(l.scale, 1, u),
    a.origin = l.origin,
    a.originPoint = l.originPoint
}
function y0(a, l, u, o) {
    a.min = Nt(l.min, u.min, o),
    a.max = Nt(l.max, u.max, o)
}
function NT(a, l, u, o) {
    y0(a.x, l.x, u.x, o),
    y0(a.y, l.y, u.y, o)
}
function RT(a) {
    return a.animationValues && a.animationValues.opacityExit !== void 0
}
const OT = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , g0 = a => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a)
  , v0 = g0("applewebkit/") && !g0("chrome/") ? Math.round : Ye;
function b0(a) {
    a.min = v0(a.min),
    a.max = v0(a.max)
}
function _T(a) {
    b0(a.x),
    b0(a.y)
}
function sg(a, l, u) {
    return a === "position" || a === "preserve-aspect" && !G2(c0(l), c0(u), .2)
}
function VT(a) {
    var l;
    return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot)
}
const UT = lg({
    attachResizeListener: (a, l) => xl(a, "resize", l),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Qr = {
    current: void 0
}
  , ug = lg({
    measureScroll: a => ({
        x: a.scrollLeft,
        y: a.scrollTop
    }),
    defaultParent: () => {
        if (!Qr.current) {
            const a = new UT({});
            a.mount(window),
            a.setOptions({
                layoutScroll: !0
            }),
            Qr.current = a
        }
        return Qr.current
    }
    ,
    resetTransform: (a, l) => {
        a.style.transform = l !== void 0 ? l : "none"
    }
    ,
    checkIsScrollRoot: a => window.getComputedStyle(a).position === "fixed"
})
  , BT = {
    pan: {
        Feature: aT
    },
    drag: {
        Feature: nT,
        ProjectionNode: ug,
        MeasureLayout: Iy
    }
};
function x0(a, l, u) {
    const {props: o} = a;
    a.animationState && o.whileHover && a.animationState.setActive("whileHover", u === "Start");
    const c = "onHover" + u
      , d = o[c];
    d && jt.postRender( () => d(l, El(l)))
}
class LT extends Jn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = uS(l, (u, o) => (x0(this.node, o, "Start"),
        c => x0(this.node, c, "End"))))
    }
    unmount() {}
}
class HT extends Jn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let l = !1;
        try {
            l = this.node.current.matches(":focus-visible")
        } catch {
            l = !0
        }
        !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Sl(xl(this.node.current, "focus", () => this.onFocus()), xl(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function S0(a, l, u) {
    const {props: o} = a;
    if (a.current instanceof HTMLButtonElement && a.current.disabled)
        return;
    a.animationState && o.whileTap && a.animationState.setActive("whileTap", u === "Start");
    const c = "onTap" + (u === "End" ? "" : u)
      , d = o[c];
    d && jt.postRender( () => d(l, El(l)))
}
class YT extends Jn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = fS(l, (u, o) => (S0(this.node, o, "Start"),
        (c, {success: d}) => S0(this.node, c, d ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const pc = new WeakMap
  , kr = new WeakMap
  , qT = a => {
    const l = pc.get(a.target);
    l && l(a)
}
  , GT = a => {
    a.forEach(qT)
}
;
function XT({root: a, ...l}) {
    const u = a || document;
    kr.has(u) || kr.set(u, {});
    const o = kr.get(u)
      , c = JSON.stringify(l);
    return o[c] || (o[c] = new IntersectionObserver(GT,{
        root: a,
        ...l
    })),
    o[c]
}
function KT(a, l, u) {
    const o = XT(l);
    return pc.set(a, u),
    o.observe(a),
    () => {
        pc.delete(a),
        o.unobserve(a)
    }
}
const ZT = {
    some: 0,
    all: 1
};
class QT extends Jn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: l={}} = this.node.getProps()
          , {root: u, margin: o, amount: c="some", once: d} = l
          , h = {
            root: u ? u.current : void 0,
            rootMargin: o,
            threshold: typeof c == "number" ? c : ZT[c]
        }
          , y = p => {
            const {isIntersecting: m} = p;
            if (this.isInView === m || (this.isInView = m,
            d && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: v, onViewportLeave: b} = this.node.getProps()
              , T = m ? v : b;
            T && T(p)
        }
        ;
        return KT(this.node.current, h, y)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: l, prevProps: u} = this.node;
        ["amount", "margin", "root"].some(kT(l, u)) && this.startObserver()
    }
    unmount() {}
}
function kT({viewport: a={}}, {viewport: l={}}={}) {
    return u => a[u] !== l[u]
}
const JT = {
    inView: {
        Feature: QT
    },
    tap: {
        Feature: YT
    },
    focus: {
        Feature: HT
    },
    hover: {
        Feature: LT
    }
}
  , FT = {
    layout: {
        ProjectionNode: ug,
        MeasureLayout: Iy
    }
}
  , WT = {
    ...U2,
    ...JT,
    ...BT,
    ...FT
}
  , wt = $S(WT, f2)
  , PT = () => {
    const [a,l] = q.useState(!1)
      , [u,o] = q.useState(!1)
      , [c,d] = q.useState(window.location.hash.slice(1) || "/");
    q.useEffect( () => {
        const m = () => o(window.scrollY > 20)
          , v = () => d(window.location.hash.slice(1) || "/");
        return window.addEventListener("scroll", m),
        window.addEventListener("hashchange", v),
        () => {
            window.removeEventListener("scroll", m),
            window.removeEventListener("hashchange", v)
        }
    }
    , []);
    const h = [{
        path: "/",
        label: "HOME"
    }, {
        path: "/rules",
        label: "RULES"
    }, {
        path: "/minecraft",
        label: "MINECRAFT"
    }, {
        path: "/roles",
        label: "ROLES"
    }, {
        path: "/creators",
        label: "CREATORS"
    }]
      , y = m => m === "/" ? c === "/" || c === "" : c === m
      , p = (m, v) => {
        m.preventDefault(),
        window.location.hash = v,
        l(!1)
    }
    ;
    return S.jsxs(S.Fragment, {
        children: [S.jsx("nav", {
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${u ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`,
            children: S.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 flex items-center justify-between",
                children: [S.jsxs("a", {
                    href: "#/",
                    onClick: m => p(m, "/"),
                    className: "flex items-center gap-3 relative z-50 group",
                    children: [S.jsx("img", {
                        src: "https://i.ibb.co/Zz5Szn4b/63cc366bdd57.png",
                        alt: "KrYlo Logo",
                        className: "h-9 w-9 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                    }), S.jsx("span", {
                        className: "font-bold text-lg tracking-widest text-white uppercase group-hover:text-gray-300 transition-colors",
                        children: "KrYlo"
                    })]
                }), S.jsxs("div", {
                    className: "hidden md:flex items-center gap-10",
                    children: [S.jsx("div", {
                        className: "flex items-center gap-8",
                        children: h.map(m => S.jsxs("a", {
                            href: `#${m.path}`,
                            onClick: v => p(v, m.path),
                            className: `relative text-xs font-bold tracking-widest transition-colors duration-300 uppercase ${y(m.path) ? "text-white" : "text-gray-500 hover:text-white"}`,
                            children: [m.label, y(m.path) && S.jsx(wt.div, {
                                layoutId: "nav-indicator",
                                className: "absolute -bottom-2 left-0 right-0 h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]",
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }
                            })]
                        }, m.path))
                    }), S.jsx("div", {
                        className: "w-px h-5 bg-white/10"
                    }), S.jsxs("a", {
                        href: "https://discord.gg/vKGba6xjwT",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: m => {
                            m.preventDefault(),
                            window.open("https://discord.gg/vKGba6xjwT", "_blank")
                        }
                        ,
                        className: "group flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors",
                        children: [S.jsx("span", {
                            children: "Join"
                        }), S.jsx(Ps, {
                            size: 14,
                            className: "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                        })]
                    })]
                }), S.jsx("button", {
                    onClick: () => l(!0),
                    className: "md:hidden p-2 text-white relative z-50 hover:bg-white/10 transition-colors",
                    children: S.jsx(rb, {
                        size: 24
                    })
                })]
            })
        }), S.jsx(Sy, {
            children: a && S.jsxs(S.Fragment, {
                children: [S.jsx(wt.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: () => l(!1),
                    className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                }), S.jsxs(wt.div, {
                    initial: {
                        x: "100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: "100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 200
                    },
                    className: "fixed inset-y-0 right-0 w-[280px] bg-black border-l border-white/10 z-[70] p-8 flex flex-col",
                    children: [S.jsxs("div", {
                        className: "flex items-center justify-between mb-12",
                        children: [S.jsx("span", {
                            className: "text-lg font-bold text-white tracking-widest uppercase",
                            children: "Menu"
                        }), S.jsx("button", {
                            onClick: () => l(!1),
                            className: "text-gray-500 hover:text-white transition-colors",
                            children: S.jsx(vb, {
                                size: 24
                            })
                        })]
                    }), S.jsx("div", {
                        className: "flex flex-col gap-6",
                        children: h.map(m => S.jsx("a", {
                            href: `#${m.path}`,
                            onClick: v => p(v, m.path),
                            className: `text-sm font-bold tracking-widest uppercase transition-all flex items-center gap-3 ${y(m.path) ? "text-white pl-4 border-l-2 border-white" : "text-gray-500 hover:text-white"}`,
                            children: m.label
                        }, m.path))
                    }), S.jsx("div", {
                        className: "mt-auto pt-8 border-t border-white/10",
                        children: S.jsxs("a", {
                            href: "https://discord.gg/vKGba6xjwT",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: m => {
                                m.preventDefault(),
                                window.open("https://discord.gg/vKGba6xjwT", "_blank")
                            }
                            ,
                            className: "flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors",
                            children: ["Join Discord", S.jsx(Ps, {
                                size: 14
                            })]
                        })
                    })]
                })]
            })
        })]
    })
}
  , $T = () => S.jsx("footer", {
    className: "border-t border-white/5 py-12 bg-black",
    children: S.jsxs("div", {
        className: "max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6",
        children: [S.jsxs("div", {
            className: "flex items-center gap-3",
            children: [S.jsx("img", {
                src: "https://i.ibb.co/Zz5Szn4b/63cc366bdd57.png",
                alt: "KrYlo Logo",
                className: "w-8 h-8 rounded-full grayscale hover:grayscale-0 transition-all duration-500"
            }), S.jsx("span", {
                className: "text-gray-500 text-sm font-medium",
                children: "© Powered By Feia For KrYlo 2026"
            })]
        }), S.jsxs("div", {
            className: "flex gap-6 text-sm text-gray-600 items-center",
            children: [S.jsx("span", {
                children: "KrYlo Developers"
            }), S.jsx("span", {
                children: "•"
            }), S.jsx("a", {
                href: "https://discord.gg/vKGba6xjwT",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-white transition-colors",
                children: "Discord"
            })]
        })]
    })
})
  , IT = ({children: a}) => (q.useEffect( () => {
    const l = p => p.preventDefault()
      , u = p => p.preventDefault()
      , o = p => (p.preventDefault(),
    !1)
      , c = p => {
        p.preventDefault()
    }
      , d = p => {
        if (p.key === "F12") {
            p.preventDefault();
            return
        }
        if (p.ctrlKey || p.metaKey)
            switch (p.key.toLowerCase()) {
            case "s":
            case "p":
            case "u":
            case "i":
            case "c":
            case "x":
            case "v":
                p.preventDefault();
                break;
            case "shift":
                p.preventDefault();
                break
            }
    }
      , y = setInterval( () => {
        debugger
    }
    , 1e3);
    return document.addEventListener("contextmenu", l),
    document.addEventListener("dragstart", u),
    document.addEventListener("keydown", d),
    document.addEventListener("copy", o),
    document.addEventListener("cut", o),
    document.addEventListener("selectstart", c),
    () => {
        document.removeEventListener("contextmenu", l),
        document.removeEventListener("dragstart", u),
        document.removeEventListener("keydown", d),
        document.removeEventListener("copy", o),
        document.removeEventListener("cut", o),
        document.removeEventListener("selectstart", c),
        clearInterval(y)
    }
}
, []),
S.jsxs("div", {
    className: "flex flex-col min-h-screen bg-background text-gray-100 select-none",
    children: [S.jsx(PT, {}), S.jsx("main", {
        className: "flex-grow",
        children: a
    }), S.jsx($T, {})]
}))
  , T0 = () => {
    const a = (l, u) => {
        l.preventDefault(),
        window.location.hash = u
    }
    ;
    return S.jsxs("div", {
        className: "relative min-h-screen bg-black overflow-hidden flex flex-col items-center",
        children: [S.jsxs("div", {
            className: "absolute inset-0 pointer-events-none",
            children: [S.jsx("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full opacity-50"
            }), S.jsx("div", {
                className: "absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full opacity-30"
            })]
        }), S.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 w-full pt-32 md:pt-48 pb-20 z-10",
            children: [S.jsxs("div", {
                className: "flex flex-col items-center text-center mb-24",
                children: [S.jsxs(wt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-8 backdrop-blur-sm",
                    children: [S.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                    }), S.jsx("span", {
                        children: "KrYlo Community On Top"
                    })]
                }), S.jsx(wt.h1, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .1
                    },
                    className: "text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 tracking-tight leading-tight mb-6",
                    children: "KRYLO"
                }), S.jsxs(wt.p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    className: "text-lg md:text-xl text-gray-400 max-w-2xl font-light mb-10 leading-relaxed",
                    children: ["We are defining the standard for Egyptian Discord communities.", S.jsx("br", {
                        className: "hidden md:block"
                    }), "Join the elite circle of gamers and creators."]
                }), S.jsxs(wt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .3
                    },
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [S.jsxs("a", {
                        href: "https://discord.gg/vKGba6xjwT",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: l => {
                            l.preventDefault(),
                            window.open("https://discord.gg/vKGba6xjwT", "_blank")
                        }
                        ,
                        className: "group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase overflow-hidden rounded-sm transition-all hover:pr-10 cursor-pointer",
                        children: [S.jsxs("span", {
                            className: "relative z-10 flex items-center gap-2",
                            children: ["Join Server ", S.jsx(P1, {
                                size: 16
                            })]
                        }), S.jsx("div", {
                            className: "absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                        })]
                    }), S.jsx("a", {
                        href: "#/minecraft",
                        onClick: l => a(l, "/minecraft"),
                        className: "px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-all rounded-sm cursor-pointer",
                        children: "View Status"
                    })]
                })]
            }), S.jsx(wt.div, {
                initial: {
                    scaleX: 0
                },
                whileInView: {
                    scaleX: 1
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: 1.5,
                    ease: "circOut"
                },
                className: "w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-24"
            }), S.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-12 text-left",
                children: [{
                    title: "Vibrant Community",
                    desc: "Join Egypt's most active social hub. Daily events, active voice channels, and a welcoming atmosphere for everyone.",
                    icon: S.jsx(C0, {
                        size: 32,
                        className: "text-white"
                    })
                }, {
                    title: "High-Performance Gaming",
                    desc: "Experience our custom Minecraft server with zero lag, 24/7 uptime, and unique features designed for competitive play.",
                    icon: S.jsx(db, {
                        size: 32,
                        className: "text-white"
                    })
                }, {
                    title: "Exclusive Privileges",
                    desc: "Stand out with unique roles, custom badges, and special permissions available through our varied membership tiers.",
                    icon: S.jsx(ub, {
                        size: 32,
                        className: "text-white"
                    })
                }].map( (l, u) => S.jsxs(wt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: u * .2
                    },
                    className: "group p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-all duration-300",
                    children: [S.jsx("div", {
                        className: "mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-colors",
                        children: l.icon
                    }), S.jsx("h3", {
                        className: "text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors",
                        children: l.title
                    }), S.jsx("p", {
                        className: "text-gray-500 leading-relaxed text-sm",
                        children: l.desc
                    })]
                }, u))
            }), S.jsxs(wt.div, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                className: "mt-32 p-12 bg-[#050505] border border-white/5 rounded-2xl text-center relative overflow-hidden",
                children: [S.jsx("div", {
                    className: "absolute top-0 right-0 p-32 bg-white/5 blur-[100px] rounded-full pointer-events-none"
                }), S.jsxs("div", {
                    className: "relative z-10 flex flex-col items-center",
                    children: [S.jsx("div", {
                        className: "mb-6 p-4 bg-white/5 rounded-full",
                        children: S.jsx(fb, {
                            size: 40,
                            className: "text-white"
                        })
                    }), S.jsx("h2", {
                        className: "text-3xl font-bold text-white mb-4",
                        children: "Start Your Journey"
                    }), S.jsx("p", {
                        className: "text-gray-400 mb-8 max-w-lg mx-auto",
                        children: "There is a place for everyone here. Whether you are a builder, a fighter, or a chatter."
                    }), S.jsx("a", {
                        href: "https://discord.gg/vKGba6xjwT",
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: l => {
                            l.preventDefault(),
                            window.open("https://discord.gg/vKGba6xjwT", "_blank")
                        }
                        ,
                        className: "inline-block text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors cursor-pointer",
                        children: "discord.gg/KrYlo"
                    })]
                })]
            })]
        })]
    })
}
  , tA = () => {
    const [a,l] = q.useState("ar")
      , [u,o] = q.useState("discord")
      , h = u === "discord" ? [{
        id: 1,
        ar: "احترام الجميع وعدم الإساءة لأي عضو بأي شكل من الأشكال.",
        en: "Respect everyone and do not insult any member in any way."
    }, {
        id: 2,
        ar: "يمنع السبام (تكرار الرسائل) والفلود في الشات.",
        en: "Spamming (repeating messages) and flooding the chat is prohibited."
    }, {
        id: 3,
        ar: "يمنع نشر الروابط أو الإعلانات لسيرفرات أخرى دون إذن.",
        en: "Posting links or advertisements for other servers without permission is prohibited."
    }, {
        id: 4,
        ar: "يمنع التحدث في السياسة أو الدين لتجنب المشاكل.",
        en: "Discussion of politics or religion is prohibited to avoid conflicts."
    }, {
        id: 5,
        ar: "يمنع نشر المحتوى غير اللائق أو الإباحي (NSFW).",
        en: "Posting inappropriate or pornographic content (NSFW) is strictly prohibited."
    }, {
        id: 6,
        ar: "احترام طاقم الإدارة وقراراتهم.",
        en: "Respect the staff team and their decisions."
    }, {
        id: 7,
        ar: "يمنع طلب الرتب أو الصلاحيات من الإدارة.",
        en: "Asking for roles or permissions from the staff is prohibited."
    }, {
        id: 8,
        ar: "استخدام القنوات الصوتية والكتابية في الغرض المخصص لها.",
        en: "Use voice and text channels for their intended purpose."
    }, {
        id: 9,
        ar: "يمنع انتحال شخصية أي عضو أو إداري.",
        en: "Impersonating any member or staff is prohibited."
    }, {
        id: 10,
        ar: "الالتزام بقوانين وشروط خدمة ديسكورد.",
        en: "Adhere to Discord's Terms of Service and Community Guidelines."
    }] : [{
        id: 1,
        ar: "**الاحترام المتبادل**: لازم كل اللاعبين يحترموا بعض. ممنوع تمامًا أي شتيمة، سباب، أو كلام وحش في الشات العام أو الخاص. التعامل باحترام بيخلي اللعبة أحلى لينا كلنا.",
        en: "**Mutual Respect**: All players must respect each other. Insults, profanity, or bad language in public or private chat are strictly prohibited. Treating each other with respect makes the game better for everyone."
    }, {
        id: 2,
        ar: "**حماية ممتلكات اللاعبين**: ممنوع تسرق، أو تبوظ، أو تبني في أرض مش أرضك. كل لاعب ليه بيته ومنطقته الخاصة، لازم نحترمها ومحدش يقرب منها غير بإذنه.",
        en: "**Property Protection**: Stealing, griefing, or building on land that isn't yours is prohibited. Every player has their own home and area; we must respect it and not interfere without permission."
    }, {
        id: 3,
        ar: "**ممنوع الغش (Hacks & Exploits)**: ممنوع تستخدم أي برامج غش (Hacks) أو تستغل أي ثغرات في اللعبة عشان تاخد ميزة مش من حقك. اللي هيعمل كدا الإدارة هتمنعه من السيرفر على طول.",
        en: "**No Cheating (Hacks & Exploits)**: Using hack clients or exploiting game bugs to gain an unfair advantage is strictly prohibited. Offenders will be banned from the server immediately."
    }, {
        id: 4,
        ar: "**التعامل مع الموارد**: عادي تجمع الموارد من أي مكان في العالم، بس ياريت بلاش تبوظ شكل الأرض حوالين بيوت الناس التانية. خلينا نحافظ على جمال العالم اللي بنلعب فيه.",
        en: "**Resource Gathering**: You are free to gather resources from anywhere, but please avoid defacing the landscape near other players' homes. Let's maintain the beauty of our world."
    }, {
        id: 5,
        ar: "**الـ PVP (القتال بين اللاعبين)**: الـ PVP مسموح في الأماكن المخصصة ليه بس. ممنوع تقتل حد عند بيته أو في منطقة الـ Spawn.",
        en: "**PVP (Player vs Player)**: PVP is only allowed in designated areas. Killing players at their homes or in the Spawn area is prohibited."
    }, {
        id: 6,
        ar: "**المزارع الأوتوماتيكية (Farms)**: ممكن تعمل مزارع أوتوماتيكية براحتك، بس خليها خفيفة على السيرفر وماتسببش أي لاج. لو المزرعة بتاعتك بتعمل مشاكل، الإدارة هتضطر تشيلها.",
        en: "**Automatic Farms**: You may build auto-farms, but they must be server-friendly and not cause lag. If your farm causes performance issues, staff may remove it."
    }, {
        id: 7,
        ar: "**لغة الدردشة**: اللغة الأساسية في الشات هي العربي أو الإنجليزي. يفضل نتكلم عربي عشان كلنا نفهم بعض بسهولة.",
        en: "**Chat Language**: The primary languages in chat are Arabic and English. Arabic is preferred so everyone can understand each other easily."
    }, {
        id: 8,
        ar: "**الإعلانات**: ممنوع تحط أي إعلانات لسيرفرات تانية أو أي لينكات لمواقع خارجية من غير موافقة الإدارة.",
        en: "**Advertising**: Advertising other servers or posting external links without staff approval is prohibited."
    }]
      , y = p => p.split(/(\*\*.*?\*\*)/g).map( (v, b) => v.startsWith("**") && v.endsWith("**") ? S.jsx("span", {
        className: "text-white font-bold",
        children: v.slice(2, -2)
    }, b) : S.jsx("span", {
        children: v
    }, b));
    return S.jsxs("div", {
        className: "min-h-screen pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center",
        children: [S.jsx("div", {
            className: "fixed inset-0 pointer-events-none",
            children: S.jsx("div", {
                className: "absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full opacity-20"
            })
        }), S.jsxs("div", {
            className: "text-center mb-20 relative z-10 w-full",
            children: [S.jsxs(wt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: [S.jsx("h1", {
                    className: "text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 tracking-tight leading-tight mb-6 uppercase",
                    children: "RULES"
                }), S.jsx("p", {
                    className: "text-lg text-gray-400 font-light tracking-wide uppercase",
                    children: "KrYlo Rules, Discord / Minecraft"
                })]
            }), S.jsx(wt.div, {
                initial: {
                    scaleX: 0
                },
                animate: {
                    scaleX: 1
                },
                transition: {
                    delay: .5,
                    duration: 1,
                    ease: "circOut"
                },
                className: "h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-8"
            })]
        }), S.jsxs("div", {
            className: "w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-16 relative z-10",
            children: [S.jsx("div", {
                className: "flex bg-[#050505] border border-white/5 p-1",
                children: ["discord", "minecraft"].map(p => S.jsx("button", {
                    onClick: () => o(p),
                    className: `px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all ${u === p ? "bg-white text-black" : "text-gray-500 hover:text-white"}`,
                    children: p
                }, p))
            }), S.jsx("div", {
                className: "flex gap-4",
                children: ["ar", "en"].map(p => S.jsx("button", {
                    onClick: () => l(p),
                    className: `text-xs font-bold uppercase tracking-widest transition-colors ${a === p ? "text-white border-b border-white" : "text-gray-600 hover:text-gray-400"}`,
                    children: p === "ar" ? "Arabic" : "English"
                }, p))
            })]
        }), S.jsx("div", {
            className: "w-full relative z-10",
            children: S.jsx(Sy, {
                mode: "wait",
                children: S.jsx(wt.div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    className: "grid grid-cols-1 gap-4",
                    dir: a === "ar" ? "rtl" : "ltr",
                    children: h.map( (p, m) => S.jsxs(wt.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: m * .05
                        },
                        className: "group flex gap-8 p-8 border border-white/5 bg-[#050505] hover:border-white/20 transition-all duration-300 relative overflow-hidden",
                        children: [S.jsx("div", {
                            className: `absolute top-0 bottom-0 w-1 ${a === "ar" ? "right-0" : "left-0"} ${u === "minecraft" ? "bg-green-900 group-hover:bg-green-500" : "bg-white/10 group-hover:bg-white"} transition-colors duration-300`
                        }), S.jsx("span", {
                            className: "text-2xl font-black text-white/10 font-mono select-none",
                            children: p.id.toString().padStart(2, "0")
                        }), S.jsx("p", {
                            className: `text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed text-lg ${a === "ar" ? "font-[Cairo]" : ""}`,
                            children: y(a === "ar" ? p.ar : p.en)
                        })]
                    }, p.id))
                }, `${u}-${a}`)
            })
        }), S.jsx("div", {
            className: "mt-20 pt-10 border-t border-white/5 w-full text-center relative z-10",
            children: S.jsxs("div", {
                className: "inline-flex items-center gap-3 text-gray-500",
                children: [S.jsx(ab, {
                    size: 16
                }), S.jsx("p", {
                    className: `text-xs uppercase tracking-widest ${a === "ar" ? "font-[Cairo]" : ""}`,
                    children: u === "discord" ? a === "ar" ? "الانضمام يعني الموافقة على الشروط" : "Joining implies acceptance of terms" : a === "ar" ? "اكتب /help للمزيد" : "Type /help for more"
                })]
            })
        })]
    })
}
  , eA = () => {
    const [a,l] = q.useState(null)
      , [u,o] = q.useState(!0)
      , [c,d] = q.useState(!1)
      , h = "krylo.mineplay.pro"
      , y = `https://api.mcstatus.io/v2/status/java/${h}`;
    q.useEffect( () => {
        const m = async () => {
            var b, T, w, U;
            try {
                const Y = await (await fetch(y)).json();
                l({
                    online: Y.online,
                    players: {
                        online: ((b = Y.players) == null ? void 0 : b.online) || 0,
                        max: ((T = Y.players) == null ? void 0 : T.max) || 0
                    },
                    motd: {
                        clean: (w = Y.motd) != null && w.clean ? [Y.motd.clean] : ["No MOTD"]
                    },
                    ip: h,
                    icon: Y.icon,
                    version: ((U = Y.version) == null ? void 0 : U.name_clean) || "Unknown"
                })
            } catch {
                l({
                    online: !1,
                    players: {
                        online: 0,
                        max: 0
                    },
                    motd: {
                        clean: ["Signal Lost"]
                    },
                    ip: h,
                    version: "-"
                })
            } finally {
                o(!1)
            }
        }
        ;
        m();
        const v = setInterval(m, 3e4);
        return () => clearInterval(v)
    }
    , []);
    const p = () => {
        navigator.clipboard.writeText(h),
        d(!0),
        setTimeout( () => d(!1), 2e3)
    }
    ;
    return S.jsxs("div", {
        className: "min-h-screen pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center",
        children: [S.jsx("div", {
            className: "fixed inset-0 pointer-events-none",
            children: S.jsx("div", {
                className: "absolute bottom-0 left-0 w-[800px] h-[600px] bg-green-900/10 blur-[150px] rounded-full opacity-20"
            })
        }), S.jsx("div", {
            className: "text-center mb-24 relative z-10 w-full",
            children: S.jsxs(wt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: [S.jsxs("div", {
                    className: "inline-flex items-center gap-2 mb-6",
                    children: [S.jsx("span", {
                        className: `w-2 h-2 rounded-full ${a != null && a.online ? "bg-green-500 animate-pulse" : "bg-red-500"}`
                    }), S.jsx("span", {
                        className: "text-xs font-mono text-gray-400 uppercase tracking-widest",
                        children: a != null && a.online ? "Status" : "Offline"
                    })]
                }), S.jsx("h1", {
                    className: "text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 tracking-tight leading-tight mb-6 uppercase",
                    children: "STATUS"
                }), S.jsx("p", {
                    className: "text-lg text-gray-400 font-light tracking-wide uppercase",
                    children: "Status KrYlo Server."
                })]
            })
        }), S.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8 w-full relative z-10",
            children: [S.jsxs(wt.div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    delay: .2
                },
                className: "lg:col-span-2 bg-[#050505] border border-white/5 p-10 flex flex-col justify-between min-h-[300px] relative overflow-hidden group",
                children: [S.jsx("div", {
                    className: "absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 opacity-20 pointer-events-none bg-[length:100%_2px,3px_100%]"
                }), S.jsxs("div", {
                    className: "relative z-10",
                    children: [S.jsx("h2", {
                        className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-8",
                        children: "Connection Endpoint"
                    }), S.jsxs("div", {
                        onClick: p,
                        className: "cursor-pointer group/copy",
                        children: [S.jsxs("div", {
                            className: "flex items-baseline gap-4 mb-2",
                            children: [S.jsx("code", {
                                className: "text-3xl md:text-5xl text-white font-mono tracking-tighter group-hover/copy:text-gray-200 transition-colors",
                                children: "coming soon"
                            }), S.jsx("span", {
                                className: "text-xl md:text-2xl text-gray-600 font-mono"
                            })]
                        }), S.jsxs("div", {
                            className: "flex items-center gap-2 text-xs text-accent uppercase tracking-widest opacity-0 group-hover/copy:opacity-100 transition-opacity transform translate-y-2 group-hover/copy:translate-y-0 duration-300",
                            children: [c ? S.jsx(D0, {
                                size: 12
                            }) : S.jsx(lb, {
                                size: 12
                            }), S.jsx("span", {
                                children: c ? "Address Copied" : "Click to Copy"
                            })]
                        })]
                    })]
                }), S.jsxs("div", {
                    className: "relative z-10 flex items-end justify-between mt-12 border-t border-white/5 pt-8",
                    children: [S.jsxs("div", {
                        children: [S.jsx("p", {
                            className: "text-xs text-gray-500 font-bold uppercase tracking-widest mb-2",
                            children: "System Message"
                        }), S.jsx("p", {
                            className: "text-gray-300 font-mono text-sm max-w-md line-clamp-2",
                            children: u ? "Analyzing..." : (a == null ? void 0 : a.motd.clean.join(" ")) || "No Data"
                        })]
                    }), (a == null ? void 0 : a.icon) && S.jsx("img", {
                        src: a.icon,
                        alt: "Icon",
                        className: "w-16 h-16 grayscale opacity-50"
                    })]
                })]
            }), S.jsx("div", {
                className: "grid grid-cols-1 gap-4",
                children: [{
                    label: "Players",
                    value: a == null ? void 0 : a.players.online,
                    max: a == null ? void 0 : a.players.max,
                    icon: S.jsx(C0, {
                        size: 16
                    })
                }, {
                    label: "Version",
                    value: a == null ? void 0 : a.version,
                    icon: S.jsx(tb, {
                        size: 16
                    })
                }, {
                    label: "Uptime",
                    value: a != null && a.online ? "99.9%" : "0%",
                    icon: S.jsx(M0, {
                        size: 16
                    })
                }].map( (m, v) => S.jsx(wt.div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: .3 + v * .1
                    },
                    className: "bg-[#050505] border border-white/5 p-6 flex items-center justify-between group hover:border-white/20 transition-all",
                    children: S.jsxs("div", {
                        children: [S.jsxs("div", {
                            className: "flex items-center gap-2 text-gray-500 mb-2",
                            children: [m.icon, S.jsx("span", {
                                className: "text-[10px] font-bold uppercase tracking-widest",
                                children: m.label
                            })]
                        }), S.jsxs("div", {
                            className: "flex items-baseline gap-1",
                            children: [S.jsx("span", {
                                className: "text-2xl font-light text-white font-mono",
                                children: u ? "-" : m.value
                            }), m.max && S.jsxs("span", {
                                className: "text-sm text-gray-600 font-mono",
                                children: ["/ ", m.max]
                            })]
                        })]
                    })
                }, v))
            })]
        })]
    })
}
  , nA = () => {
    const a = [{
        name: "King Of Hell",
        price: 3900,
        features: ["Send Images & Files", "Reaction Mode", "External Emojis", "Private Threads", "Exclusive Badge"]
    }, {
        name: "Dark King",
        price: 2500,
        features: ["Send Images & Files", "Reaction Mode", "External Emojis", "Public Threads", "Color"]
    }, {
        name: "Super Star",
        price: 2200,
        features: ["Send Images", "Reaction Mode", "External Emojis", "Private Threads", "Color"]
    }, {
        name: "Emperor",
        price: 1900,
        features: ["Send Images", "Reaction Mode", "External Emojis", "Voice Access", "Color"]
    }, {
        name: "Darkness",
        price: 1600,
        features: ["Send Images", "Reaction Mode", "External Emojis", "Color"]
    }, {
        name: "Vexr",
        price: 1300,
        features: ["Send Images", "External Stickers", "Color"]
    }, {
        name: "Pluton",
        price: 1e3,
        features: ["Send Images", "External Emojis", "Color"]
    }]
      , l = "https://discord.com/channels/1351311779229073449/1391920240685875311";
    return S.jsxs("div", {
        className: "min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center",
        children: [S.jsx("div", {
            className: "fixed inset-0 pointer-events-none",
            children: S.jsx("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-900/5 blur-[150px] rounded-full opacity-30"
            })
        }), S.jsxs("div", {
            className: "text-center mb-24 relative z-10 w-full",
            children: [S.jsxs(wt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: [S.jsx("h1", {
                    className: "text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 tracking-tight leading-tight mb-6 uppercase",
                    children: "ROLES"
                }), S.jsx("p", {
                    className: "text-lg text-gray-400 font-light tracking-wide uppercase",
                    children: "Upgrade Your Profile"
                })]
            }), S.jsx(wt.div, {
                initial: {
                    scaleX: 0
                },
                animate: {
                    scaleX: 1
                },
                transition: {
                    delay: .5,
                    duration: 1,
                    ease: "circOut"
                },
                className: "h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-8"
            })]
        }), S.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full relative z-10",
            children: a.map( (u, o) => S.jsxs(wt.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: o * .05
                },
                className: `
              flex flex-col p-8 transition-all duration-300 group relative overflow-hidden
              ${o === 0 ? "bg-[#080808] border border-white/20" : "bg-[#050505] border border-white/5"}
            `,
                children: [o === 0 && S.jsx("div", {
                    className: "absolute top-0 left-0 right-0 h-1 bg-white"
                }), S.jsxs("div", {
                    className: "mb-8",
                    children: [S.jsxs("div", {
                        className: "flex justify-between items-start mb-4",
                        children: [S.jsx("h3", {
                            className: `text-sm font-bold uppercase tracking-widest ${o === 0 ? "text-white" : "text-gray-400"}`,
                            children: u.name
                        }), o === 0 && S.jsx(pb, {
                            size: 14,
                            className: "text-white fill-white"
                        })]
                    }), S.jsx("div", {
                        className: "flex items-baseline gap-1",
                        children: S.jsx("span", {
                            className: "text-4xl font-light text-white font-mono",
                            children: u.price
                        })
                    }), S.jsx("span", {
                        className: "text-[10px] text-gray-600 font-bold uppercase tracking-widest",
                        children: "ProBot Credits"
                    })]
                }), S.jsx("ul", {
                    className: "flex-1 space-y-4 mb-10",
                    children: u.features.map( (c, d) => S.jsxs("li", {
                        className: "flex items-start gap-3 text-xs text-gray-400 uppercase tracking-wide",
                        children: [S.jsx("span", {
                            className: "mt-0.5 text-white/30 shrink-0",
                            children: S.jsx(D0, {
                                size: 12
                            })
                        }), c]
                    }, d))
                }), S.jsxs("a", {
                    href: l,
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: c => {
                        c.preventDefault(),
                        window.open(l, "_blank")
                    }
                    ,
                    className: "group/btn relative w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-widest overflow-hidden transition-all hover:pr-6 cursor-pointer",
                    children: [S.jsxs("span", {
                        className: "relative z-10 flex items-center justify-center gap-2",
                        children: ["Acquire ", S.jsx(Ps, {
                            size: 14
                        })]
                    }), S.jsx("div", {
                        className: "absolute inset-0 bg-gray-200 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"
                    })]
                })]
            }, u.name))
        })]
    })
}
  , aA = a => {
    const [l,u] = q.useState(null);
    return q.useEffect( () => {
        let o = !0;
        const c = async () => {
            try {
                const y = await (await fetch(`https://api.lanyard.rest/v1/users/${a}`)).json();
                o && y.success && y.data && u(y.data)
            } catch {}
        }
        ;
        c();
        const d = setInterval(c, 3e4);
        return () => {
            o = !1,
            clearInterval(d)
        }
    }
    , [a]),
    {
        data: l
    }
}
  , iA = ({creator: a, index: l}) => {
    var d;
    const {data: u} = aA(a.id)
      , o = {
        online: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]",
        idle: "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]",
        dnd: "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]",
        offline: "bg-gray-600"
    }[(u == null ? void 0 : u.discord_status) || "offline"]
      , c = (d = u == null ? void 0 : u.activities) == null ? void 0 : d.find(h => h.type === 0);
    return S.jsxs(wt.div, {
        initial: {
            opacity: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: l * .15,
            duration: .6
        },
        className: "group relative w-full bg-[#050505] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col",
        children: [S.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        }), S.jsxs("div", {
            className: "relative z-10 p-8 md:p-10 flex flex-col h-full items-center text-center",
            children: [S.jsx("div", {
                className: "mb-8 relative",
                children: S.jsxs("div", {
                    className: "relative w-32 h-32 md:w-40 md:h-40",
                    children: [S.jsx("div", {
                        className: "absolute inset-0 rounded-full blur-2xl opacity-20 bg-white group-hover:opacity-30 transition-opacity duration-500"
                    }), S.jsx("img", {
                        src: a.customImage,
                        alt: a.name,
                        onError: h => {
                            h.currentTarget.src = "https://cdn.discordapp.com/embed/avatars/0.png"
                        }
                        ,
                        className: "relative w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10"
                    }), S.jsx("div", {
                        className: `absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-[#050505] ${o}`
                    })]
                })
            }), S.jsx("h2", {
                className: "text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-3 uppercase tracking-tight",
                children: a.name
            }), S.jsxs("div", {
                className: "flex items-center gap-2 mb-6",
                children: [S.jsx("span", {
                    className: "h-px w-4 bg-white/20"
                }), S.jsx("span", {
                    className: "text-xs font-bold text-white uppercase tracking-[0.2em]",
                    children: a.role
                }), S.jsx("span", {
                    className: "h-px w-4 bg-white/20"
                })]
            }), S.jsx("p", {
                className: "text-gray-500 text-sm leading-relaxed max-w-sm mb-10",
                children: a.description
            }), S.jsx("div", {
                className: "w-full mt-auto mb-8 border-t border-white/5 pt-6",
                children: c ? S.jsxs("div", {
                    className: "flex flex-col items-center gap-1",
                    children: [S.jsxs("div", {
                        className: "flex items-center gap-2 text-xs text-white/70",
                        children: [S.jsx(M0, {
                            size: 12,
                            className: "animate-pulse"
                        }), S.jsx("span", {
                            className: "uppercase tracking-widest font-bold",
                            children: "Currently Playing"
                        })]
                    }), S.jsx("span", {
                        className: "text-sm text-white font-medium truncate max-w-full",
                        children: c.name
                    })]
                }) : S.jsx("div", {
                    className: "text-xs text-gray-600 uppercase tracking-widest font-mono",
                    children: "System Standby"
                })
            }), S.jsxs("a", {
                href: `https://discord.com/users/${a.id}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group/btn relative w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-widest overflow-hidden transition-all hover:pr-6 cursor-pointer",
                children: [S.jsxs("span", {
                    className: "relative z-10 flex items-center justify-center gap-2",
                    children: ["View Profile ", S.jsx(Ps, {
                        size: 14
                    })]
                }), S.jsx("div", {
                    className: "absolute inset-0 bg-gray-200 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"
                })]
            })]
        })]
    })
}
  , lA = () => {
    const a = [{
        id: "725466717718970438",
        name: "Kevy",
        role: "Developer Server",
        description: "BackEnd Programmer & Server Owner",
        customImage: "https://i.ibb.co/Kj3rDSDF/b8fa534d28ac.jpg",
        bannerColor: "#000000"
    }, {
        id: "1308904166705598478",
        name: "Gio",
        role: "Founder & Lead",
        description: "Server Creator & The Honey",
        customImage: "https://i.ibb.co/JRgyQbsN/29e398328f6c.png",
        bannerColor: "#3e3939"
    }];
    return S.jsxs("div", {
        className: "min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center overflow-hidden bg-black text-white",
        children: [S.jsx("div", {
            className: "fixed inset-0 pointer-events-none",
            children: S.jsx("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full opacity-30"
            })
        }), S.jsxs("div", {
            className: "text-center mb-24 relative z-10",
            children: [S.jsxs(wt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: [S.jsx("h1", {
                    className: "text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 tracking-tight leading-tight mb-6",
                    children: "CREATORS"
                }), S.jsx("p", {
                    className: "text-lg text-gray-400 font-light tracking-wide uppercase",
                    children: "Creators KrYlo Community."
                })]
            }), S.jsx(wt.div, {
                initial: {
                    scaleX: 0
                },
                animate: {
                    scaleX: 1
                },
                transition: {
                    delay: .5,
                    duration: 1,
                    ease: "circOut"
                },
                className: "h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-8"
            })]
        }), S.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl relative z-10",
            children: a.map( (l, u) => S.jsx(iA, {
                creator: l,
                index: u
            }, l.id))
        })]
    })
}
  , sA = () => {
    const [a,l] = q.useState(window.location.hash.slice(1) || "/");
    q.useEffect( () => {
        const o = () => {
            const c = window.location.hash.slice(1) || "/";
            l(c),
            window.scrollTo(0, 0)
        }
        ;
        return o(),
        window.addEventListener("hashchange", o),
        () => window.removeEventListener("hashchange", o)
    }
    , []);
    const u = () => {
        switch (a) {
        case "/":
        case "":
            return S.jsx(T0, {});
        case "/rules":
            return S.jsx(tA, {});
        case "/minecraft":
            return S.jsx(eA, {});
        case "/roles":
            return S.jsx(nA, {});
        case "/creators":
            return S.jsx(lA, {});
        default:
            return S.jsx(T0, {})
        }
    }
    ;
    return S.jsx(IT, {
        children: u()
    })
}
  , og = document.getElementById("root");
if (!og)
    throw new Error("Could not find root element to mount to");
const uA = X1.createRoot(og);
uA.render(S.jsx(V1.StrictMode, {
    children: S.jsx(sA, {})
}));
