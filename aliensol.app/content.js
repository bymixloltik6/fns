var J = Object.defineProperty;
var K = n => {
    throw TypeError(n)
}
;
var X = (n, e, t) => e in n ? J(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t;
var V = (n, e, t) => X(n, typeof e != "symbol" ? e + "" : e, t)
  , q = (n, e, t) => e.has(n) || K("Cannot " + t);
var i = (n, e, t) => (q(n, e, "read from private field"),
t ? t.call(n) : e.get(n))
  , w = (n, e, t) => e.has(n) ? K("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t)
  , W = (n, e, t, r) => (q(n, e, "write to private field"),
r ? r.call(n, t) : e.set(n, t),
t);
import {P as Y} from "./assets/index.browser.esm-BX9dCcla.js";
import {S as $} from "./assets/index-D35yGMKh.js";
var ee = function(n, e, t, r) {
    if (t === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? n !== e || !r : !e.has(n))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return t === "m" ? r : t === "a" ? r.call(n) : r ? r.value : e.get(n)
}, te = function(n, e, t, r, s) {
    if (r === "m")
        throw new TypeError("Private method is not writable");
    if (r === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof e == "function" ? n !== e || !s : !e.has(n))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? s.call(n, t) : s ? s.value = t : e.set(n, t),
    t
}, x;
function ne(n) {
    const e = ({register: t}) => t(n);
    try {
        window.dispatchEvent(new re(e))
    } catch (t) {
        console.error(`wallet-standard:register-wallet event could not be dispatched
`, t)
    }
    try {
        window.addEventListener("wallet-standard:app-ready", ({detail: t}) => e(t))
    } catch (t) {
        console.error(`wallet-standard:app-ready event listener could not be added
`, t)
    }
}
class re extends Event {
    get detail() {
        return ee(this, x, "f")
    }
    get type() {
        return "wallet-standard:register-wallet"
    }
    constructor(e) {
        super("wallet-standard:register-wallet", {
            bubbles: !1,
            cancelable: !1,
            composed: !1
        }),
        x.set(this, void 0),
        te(this, x, e, "f")
    }
    preventDefault() {
        throw new Error("preventDefault cannot be called")
    }
    stopImmediatePropagation() {
        throw new Error("stopImmediatePropagation cannot be called")
    }
    stopPropagation() {
        throw new Error("stopPropagation cannot be called")
    }
}
x = new WeakMap;
var M = function(n, e, t, r) {
    if (t === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? n !== e || !r : !e.has(n))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return t === "m" ? r : t === "a" ? r.call(n) : r ? r.value : e.get(n)
}, v = function(n, e, t, r, s) {
    if (r === "m")
        throw new TypeError("Private method is not writable");
    if (r === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof e == "function" ? n !== e || !s : !e.has(n))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? s.call(n, t) : s ? s.value = t : e.set(n, t),
    t
}, N, D, S, j, z, O;
class T {
    get address() {
        return M(this, N, "f")
    }
    get publicKey() {
        return M(this, D, "f").slice()
    }
    get chains() {
        return M(this, S, "f").slice()
    }
    get features() {
        return M(this, j, "f").slice()
    }
    get label() {
        return M(this, z, "f")
    }
    get icon() {
        return M(this, O, "f")
    }
    constructor(e) {
        N.set(this, void 0),
        D.set(this, void 0),
        S.set(this, void 0),
        j.set(this, void 0),
        z.set(this, void 0),
        O.set(this, void 0),
        new.target === T && Object.freeze(this),
        v(this, N, e.address, "f"),
        v(this, D, e.publicKey.slice(), "f"),
        v(this, S, e.chains.slice(), "f"),
        v(this, j, e.features.slice(), "f"),
        v(this, z, e.label, "f"),
        v(this, O, e.icon, "f")
    }
}
N = new WeakMap,
D = new WeakMap,
S = new WeakMap,
j = new WeakMap,
z = new WeakMap,
O = new WeakMap;
function ae(n) {
    if (n.length >= 255)
        throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let a = 0; a < e.length; a++)
        e[a] = 255;
    for (let a = 0; a < n.length; a++) {
        const o = n.charAt(a)
          , g = o.charCodeAt(0);
        if (e[g] !== 255)
            throw new TypeError(o + " is ambiguous");
        e[g] = a
    }
    const t = n.length
      , r = n.charAt(0)
      , s = Math.log(t) / Math.log(256)
      , l = Math.log(256) / Math.log(t);
    function F(a) {
        if (a instanceof Uint8Array || (ArrayBuffer.isView(a) ? a = new Uint8Array(a.buffer,a.byteOffset,a.byteLength) : Array.isArray(a) && (a = Uint8Array.from(a))),
        !(a instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (a.length === 0)
            return "";
        let o = 0
          , g = 0
          , d = 0;
        const f = a.length;
        for (; d !== f && a[d] === 0; )
            d++,
            o++;
        const u = (f - d) * l + 1 >>> 0
          , h = new Uint8Array(u);
        for (; d !== f; ) {
            let c = a[d]
              , E = 0;
            for (let p = u - 1; (c !== 0 || E < g) && p !== -1; p--,
            E++)
                c += 256 * h[p] >>> 0,
                h[p] = c % t >>> 0,
                c = c / t >>> 0;
            if (c !== 0)
                throw new Error("Non-zero carry");
            g = E,
            d++
        }
        let y = u - g;
        for (; y !== u && h[y] === 0; )
            y++;
        let C = r.repeat(o);
        for (; y < u; ++y)
            C += n.charAt(h[y]);
        return C
    }
    function b(a) {
        if (typeof a != "string")
            throw new TypeError("Expected String");
        if (a.length === 0)
            return new Uint8Array;
        let o = 0
          , g = 0
          , d = 0;
        for (; a[o] === r; )
            g++,
            o++;
        const f = (a.length - o) * s + 1 >>> 0
          , u = new Uint8Array(f);
        for (; a[o]; ) {
            let c = e[a.charCodeAt(o)];
            if (c === 255)
                return;
            let E = 0;
            for (let p = f - 1; (c !== 0 || E < d) && p !== -1; p--,
            E++)
                c += t * u[p] >>> 0,
                u[p] = c % 256 >>> 0,
                c = c / 256 >>> 0;
            if (c !== 0)
                throw new Error("Non-zero carry");
            d = E,
            o++
        }
        let h = f - d;
        for (; h !== f && u[h] === 0; )
            h++;
        const y = new Uint8Array(g + (f - h));
        let C = g;
        for (; h !== f; )
            y[C++] = u[h++];
        return y
    }
    function H(a) {
        const o = b(a);
        if (o)
            return o;
        throw new Error("Non-base" + t + " character")
    }
    return {
        encode: F,
        decodeUnsafe: b,
        decode: H
    }
}
var se = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const ie = ae(se)
  , I = async (n, e) => new Promise(t => chrome.runtime.sendMessage(n, e, r => t(r)))
  , oe = "DAOS Wallet (Beta)"
  , ce = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwNC4yMTggNDIuNzkwNUw2My4zNDgzIDYzLjk3NzVMMTAzLjk1NSA4My43MjI3Qzk2LjQ1ODUgOTguMTQ3MyA4MS4zNzk5IDEwOCA2NCAxMDhDMzkuMTQ3MiAxMDggMTkgODcuODUyOCAxOSA2M0MxOSAzOC4xNDcyIDM5LjE0NzIgMTggNjQgMThDODEuNTg1MiAxOCA5Ni44MTQ1IDI4LjA4NjkgMTA0LjIxOCA0Mi43OTA1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
  , le = $
  , de = ["solana:signAndSendTransaction", "solana:signTransaction", "solana:signMessage"];
var P, U, A, m, _, k, Z, L, R, G;
const B = class B {
    constructor(e) {
        w(this, P, oe);
        w(this, U, ce);
        w(this, A, null);
        w(this, m, {});
        w(this, _);
        V(this, "_on", (e, t) => (i(this, m)[e] ? i(this, m)[e].push(t) : i(this, m)[e] = [t],
        () => this._off(e, t)));
        w(this, k, async ({silent: e}={}) => {
            const t = await I(i(this, _), {
                type: "connect_request"
            });
            if (t.ok) {
                const r = new Y(t.account_pubkey);
                return W(this, A, new T({
                    address: r.toBase58(),
                    publicKey: r.toBytes(),
                    chains: le,
                    features: de
                })),
                {
                    accounts: [i(this, A)]
                }
            } else
                throw new Error(`Wallet connection rejected: ${t.message}`)
        }
        );
        w(this, Z, async () => {
            W(this, A, null)
        }
        );
        w(this, L, async (...e) => {
            const t = [];
            for (const {transaction: r, account: s, chain: l, options: F} of e) {
                if (!(s instanceof T))
                    throw new Error("invalid account");
                if (!s.features.includes("solana:signAndSendTransaction"))
                    throw new Error("invalid feature");
                if (!this.chains.includes(l))
                    throw new Error("invalid chain");
                const b = await I(i(this, _), {
                    type: "sign_send_tx_request",
                    tx: Array.from(r),
                    chain: l,
                    options: F ?? {}
                });
                if (b.ok)
                    t.push({
                        signature: ie.decode(b.tx_signature)
                    });
                else
                    throw new Error(`Wallet message sign rejected: ${b.message}`)
            }
            return t
        }
        );
        w(this, R, async (...e) => {
            for (const {account: s, chain: l} of e) {
                if (!(s instanceof T))
                    throw new Error("invalid account");
                if (!s.features.includes("solana:signTransaction"))
                    throw new Error("invalid feature");
                if (l && !this.chains.includes(l))
                    throw new Error("invalid chain")
            }
            const t = e.map( ({transaction: s}) => Array.from(s))
              , r = await I(i(this, _), {
                type: "sign_tx_request",
                txs: t
            });
            if (r.ok)
                return r.value.map(s => ({
                    signedTransaction: Uint8Array.from(s)
                }));
            throw new Error(`Wallet message sign rejected: ${r.message}`)
        }
        );
        w(this, G, async (...e) => {
            const t = [];
            for (const {account: r, message: s} of e) {
                if (!(r instanceof T))
                    throw new Error("invalid account");
                if (!r.features.includes("solana:signMessage"))
                    throw new Error("invalid feature");
                const l = await I(i(this, _), {
                    type: "sign_msg_request",
                    msg: Array.from(s)
                });
                if (l.ok)
                    t.push({
                        signature: Uint8Array.from(l.signature),
                        signedMessage: Uint8Array.from(l.signed_msg)
                    });
                else
                    throw new Error(`Wallet message sign rejected: ${l.message}`)
            }
            return t
        }
        );
        W(this, _, e),
        new.target === B && Object.freeze(this)
    }
    get version() {
        return "1.0.0"
    }
    get name() {
        return i(this, P)
    }
    get icon() {
        return i(this, U)
    }
    get chains() {
        return $.slice()
    }
    get accounts() {
        return i(this, A) ? [i(this, A)] : []
    }
    get features() {
        return {
            "standard:connect": {
                version: "1.0.0",
                connect: i(this, k)
            },
            "standard:disconnect": {
                version: "1.0.0",
                disconnect: i(this, Z)
            },
            "standard:events": {
                version: "1.0.0",
                on: this._on
            },
            "solana:signAndSendTransaction": {
                version: "1.0.0",
                supportedTransactionVersions: ["legacy"],
                signAndSendTransaction: i(this, L)
            },
            "solana:signTransaction": {
                version: "1.0.0",
                supportedTransactionVersions: ["legacy"],
                signTransaction: i(this, R)
            },
            "solana:signMessage": {
                version: "1.0.0",
                signMessage: i(this, G)
            }
        }
    }
    _emit(e, ...t) {
        var r;
        (r = i(this, m)[e]) == null || r.forEach(s => s.apply(null, t))
    }
    _off(e, t) {
        var r;
        i(this, m)[e] = (r = i(this, m)[e]) == null ? void 0 : r.filter(s => t !== s)
    }
}
;
P = new WeakMap,
U = new WeakMap,
A = new WeakMap,
m = new WeakMap,
_ = new WeakMap,
k = new WeakMap,
Z = new WeakMap,
L = new WeakMap,
R = new WeakMap,
G = new WeakMap;
let Q = B;
{
    const n = document.querySelector("script[data-extension-id]").getAttribute("data-extension-id");
    ne(new Q(n));
    const e = {
        getEoaDelegate: async () => {
            const t = await I(n, {
                type: "get_delegate_eoa"
            });
            if (!t.ok)
                throw new Error(t.error);
            return t.value
        }
        ,
        linkDao: async t => await I(n, {
            type: "link_dao",
            dao_mint: t
        })
    };
    window.daos = e
}
