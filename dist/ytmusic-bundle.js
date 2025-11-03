var sn = Object.defineProperty;
var nn = (a, e, t) => e in a ? sn(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var Fa = (a, e, t) => nn(a, typeof e != "symbol" ? e + "" : e, t);
function es(a, e) {
  return function() {
    return a.apply(e, arguments);
  };
}
const { toString: rn } = Object.prototype, { getPrototypeOf: qt } = Object, { iterator: it, toStringTag: as } = Symbol, rt = /* @__PURE__ */ ((a) => (e) => {
  const t = rn.call(e);
  return a[t] || (a[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ge = (a) => (a = a.toLowerCase(), (e) => rt(e) === a), ct = (a) => (e) => typeof e === a, { isArray: ba } = Array, da = ct("undefined");
function Pa(a) {
  return a !== null && !da(a) && a.constructor !== null && !da(a.constructor) && se(a.constructor.isBuffer) && a.constructor.isBuffer(a);
}
const ts = ge("ArrayBuffer");
function cn(a) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(a) : e = a && a.buffer && ts(a.buffer), e;
}
const un = ct("string"), se = ct("function"), os = ct("number"), Da = (a) => a !== null && typeof a == "object", ln = (a) => a === !0 || a === !1, Ba = (a) => {
  if (rt(a) !== "object")
    return !1;
  const e = qt(a);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(as in a) && !(it in a);
}, mn = (a) => {
  if (!Da(a) || Pa(a))
    return !1;
  try {
    return Object.keys(a).length === 0 && Object.getPrototypeOf(a) === Object.prototype;
  } catch {
    return !1;
  }
}, pn = ge("Date"), dn = ge("File"), hn = ge("Blob"), gn = ge("FileList"), fn = (a) => Da(a) && se(a.pipe), kn = (a) => {
  let e;
  return a && (typeof FormData == "function" && a instanceof FormData || se(a.append) && ((e = rt(a)) === "formdata" || // detect form-data instance
  e === "object" && se(a.toString) && a.toString() === "[object FormData]"));
}, bn = ge("URLSearchParams"), [yn, wn, jn, vn] = ["ReadableStream", "Request", "Response", "Headers"].map(ge), zn = (a) => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function La(a, e, { allOwnKeys: t = !1 } = {}) {
  if (a === null || typeof a > "u")
    return;
  let o, s;
  if (typeof a != "object" && (a = [a]), ba(a))
    for (o = 0, s = a.length; o < s; o++)
      e.call(null, a[o], o, a);
  else {
    if (Pa(a))
      return;
    const n = t ? Object.getOwnPropertyNames(a) : Object.keys(a), i = n.length;
    let r;
    for (o = 0; o < i; o++)
      r = n[o], e.call(null, a[r], r, a);
  }
}
function ss(a, e) {
  if (Pa(a))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(a);
  let o = t.length, s;
  for (; o-- > 0; )
    if (s = t[o], e === s.toLowerCase())
      return s;
  return null;
}
const Ye = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ns = (a) => !da(a) && a !== Ye;
function zt() {
  const { caseless: a, skipUndefined: e } = ns(this) && this || {}, t = {}, o = (s, n) => {
    const i = a && ss(t, n) || n;
    Ba(t[i]) && Ba(s) ? t[i] = zt(t[i], s) : Ba(s) ? t[i] = zt({}, s) : ba(s) ? t[i] = s.slice() : (!e || !da(s)) && (t[i] = s);
  };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && La(arguments[s], o);
  return t;
}
const xn = (a, e, t, { allOwnKeys: o } = {}) => (La(e, (s, n) => {
  t && se(s) ? a[n] = es(s, t) : a[n] = s;
}, { allOwnKeys: o }), a), _n = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a), Sn = (a, e, t, o) => {
  a.prototype = Object.create(e.prototype, o), a.prototype.constructor = a, Object.defineProperty(a, "super", {
    value: e.prototype
  }), t && Object.assign(a.prototype, t);
}, An = (a, e, t, o) => {
  let s, n, i;
  const r = {};
  if (e = e || {}, a == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(a), n = s.length; n-- > 0; )
      i = s[n], (!o || o(i, a, e)) && !r[i] && (e[i] = a[i], r[i] = !0);
    a = t !== !1 && qt(a);
  } while (a && (!t || t(a, e)) && a !== Object.prototype);
  return e;
}, Cn = (a, e, t) => {
  a = String(a), (t === void 0 || t > a.length) && (t = a.length), t -= e.length;
  const o = a.indexOf(e, t);
  return o !== -1 && o === t;
}, En = (a) => {
  if (!a) return null;
  if (ba(a)) return a;
  let e = a.length;
  if (!os(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = a[e];
  return t;
}, On = /* @__PURE__ */ ((a) => (e) => a && e instanceof a)(typeof Uint8Array < "u" && qt(Uint8Array)), In = (a, e) => {
  const o = (a && a[it]).call(a);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const n = s.value;
    e.call(a, n[0], n[1]);
  }
}, Tn = (a, e) => {
  let t;
  const o = [];
  for (; (t = a.exec(e)) !== null; )
    o.push(t);
  return o;
}, Rn = ge("HTMLFormElement"), Nn = (a) => a.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, o, s) {
    return o.toUpperCase() + s;
  }
), uo = (({ hasOwnProperty: a }) => (e, t) => a.call(e, t))(Object.prototype), Pn = ge("RegExp"), is = (a, e) => {
  const t = Object.getOwnPropertyDescriptors(a), o = {};
  La(t, (s, n) => {
    let i;
    (i = e(s, n, a)) !== !1 && (o[n] = i || s);
  }), Object.defineProperties(a, o);
}, Dn = (a) => {
  is(a, (e, t) => {
    if (se(a) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const o = a[t];
    if (se(o)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Ln = (a, e) => {
  const t = {}, o = (s) => {
    s.forEach((n) => {
      t[n] = !0;
    });
  };
  return ba(a) ? o(a) : o(String(a).split(e)), t;
}, Mn = () => {
}, $n = (a, e) => a != null && Number.isFinite(a = +a) ? a : e;
function Un(a) {
  return !!(a && se(a.append) && a[as] === "FormData" && a[it]);
}
const qn = (a) => {
  const e = new Array(10), t = (o, s) => {
    if (Da(o)) {
      if (e.indexOf(o) >= 0)
        return;
      if (Pa(o))
        return o;
      if (!("toJSON" in o)) {
        e[s] = o;
        const n = ba(o) ? [] : {};
        return La(o, (i, r) => {
          const u = t(i, s + 1);
          !da(u) && (n[r] = u);
        }), e[s] = void 0, n;
      }
    }
    return o;
  };
  return t(a, 0);
}, Fn = ge("AsyncFunction"), Zn = (a) => a && (Da(a) || se(a)) && se(a.then) && se(a.catch), rs = ((a, e) => a ? setImmediate : e ? ((t, o) => (Ye.addEventListener("message", ({ source: s, data: n }) => {
  s === Ye && n === t && o.length && o.shift()();
}, !1), (s) => {
  o.push(s), Ye.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  se(Ye.postMessage)
), Bn = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ye) : typeof process < "u" && process.nextTick || rs, Vn = (a) => a != null && se(a[it]), m = {
  isArray: ba,
  isArrayBuffer: ts,
  isBuffer: Pa,
  isFormData: kn,
  isArrayBufferView: cn,
  isString: un,
  isNumber: os,
  isBoolean: ln,
  isObject: Da,
  isPlainObject: Ba,
  isEmptyObject: mn,
  isReadableStream: yn,
  isRequest: wn,
  isResponse: jn,
  isHeaders: vn,
  isUndefined: da,
  isDate: pn,
  isFile: dn,
  isBlob: hn,
  isRegExp: Pn,
  isFunction: se,
  isStream: fn,
  isURLSearchParams: bn,
  isTypedArray: On,
  isFileList: gn,
  forEach: La,
  merge: zt,
  extend: xn,
  trim: zn,
  stripBOM: _n,
  inherits: Sn,
  toFlatObject: An,
  kindOf: rt,
  kindOfTest: ge,
  endsWith: Cn,
  toArray: En,
  forEachEntry: In,
  matchAll: Tn,
  isHTMLForm: Rn,
  hasOwnProperty: uo,
  hasOwnProp: uo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: is,
  freezeMethods: Dn,
  toObjectSet: Ln,
  toCamelCase: Nn,
  noop: Mn,
  toFiniteNumber: $n,
  findKey: ss,
  global: Ye,
  isContextDefined: ns,
  isSpecCompliantForm: Un,
  toJSONObject: qn,
  isAsyncFn: Fn,
  isThenable: Zn,
  setImmediate: rs,
  asap: Bn,
  isIterable: Vn
};
function O(a, e, t, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = a, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), o && (this.request = o), s && (this.response = s, this.status = s.status ? s.status : null);
}
m.inherits(O, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const cs = O.prototype, us = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((a) => {
  us[a] = { value: a };
});
Object.defineProperties(O, us);
Object.defineProperty(cs, "isAxiosError", { value: !0 });
O.from = (a, e, t, o, s, n) => {
  const i = Object.create(cs);
  m.toFlatObject(a, i, function(l) {
    return l !== Error.prototype;
  }, (c) => c !== "isAxiosError");
  const r = a && a.message ? a.message : "Error", u = e == null && a ? a.code : e;
  return O.call(i, r, u, t, o, s), a && i.cause == null && Object.defineProperty(i, "cause", { value: a, configurable: !0 }), i.name = a && a.name || "Error", n && Object.assign(i, n), i;
};
const Hn = null;
function xt(a) {
  return m.isPlainObject(a) || m.isArray(a);
}
function ls(a) {
  return m.endsWith(a, "[]") ? a.slice(0, -2) : a;
}
function lo(a, e, t) {
  return a ? a.concat(e).map(function(s, n) {
    return s = ls(s), !t && n ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function Wn(a) {
  return m.isArray(a) && !a.some(xt);
}
const Jn = m.toFlatObject(m, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ut(a, e, t) {
  if (!m.isObject(a))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = m.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(k, d) {
    return !m.isUndefined(d[k]);
  });
  const o = t.metaTokens, s = t.visitor || l, n = t.dots, i = t.indexes, u = (t.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(e);
  if (!m.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null) return "";
    if (m.isDate(h))
      return h.toISOString();
    if (m.isBoolean(h))
      return h.toString();
    if (!u && m.isBlob(h))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(h) || m.isTypedArray(h) ? u && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function l(h, k, d) {
    let v = h;
    if (h && !d && typeof h == "object") {
      if (m.endsWith(k, "{}"))
        k = o ? k : k.slice(0, -2), h = JSON.stringify(h);
      else if (m.isArray(h) && Wn(h) || (m.isFileList(h) || m.endsWith(k, "[]")) && (v = m.toArray(h)))
        return k = ls(k), v.forEach(function(z, T) {
          !(m.isUndefined(z) || z === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? lo([k], T, n) : i === null ? k : k + "[]",
            c(z)
          );
        }), !1;
    }
    return xt(h) ? !0 : (e.append(lo(d, k, n), c(h)), !1);
  }
  const p = [], w = Object.assign(Jn, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: xt
  });
  function A(h, k) {
    if (!m.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + k.join("."));
      p.push(h), m.forEach(h, function(v, I) {
        (!(m.isUndefined(v) || v === null) && s.call(
          e,
          v,
          m.isString(I) ? I.trim() : I,
          k,
          w
        )) === !0 && A(v, k ? k.concat(I) : [I]);
      }), p.pop();
    }
  }
  if (!m.isObject(a))
    throw new TypeError("data must be an object");
  return A(a), e;
}
function mo(a) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function(o) {
    return e[o];
  });
}
function Ft(a, e) {
  this._pairs = [], a && ut(a, this, e);
}
const ms = Ft.prototype;
ms.append = function(e, t) {
  this._pairs.push([e, t]);
};
ms.toString = function(e) {
  const t = e ? function(o) {
    return e.call(this, o, mo);
  } : mo;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function Gn(a) {
  return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ps(a, e, t) {
  if (!e)
    return a;
  const o = t && t.encode || Gn;
  m.isFunction(t) && (t = {
    serialize: t
  });
  const s = t && t.serialize;
  let n;
  if (s ? n = s(e, t) : n = m.isURLSearchParams(e) ? e.toString() : new Ft(e, t).toString(o), n) {
    const i = a.indexOf("#");
    i !== -1 && (a = a.slice(0, i)), a += (a.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return a;
}
class po {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, t, o) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    m.forEach(this.handlers, function(o) {
      o !== null && e(o);
    });
  }
}
const ds = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yn = typeof URLSearchParams < "u" ? URLSearchParams : Ft, Kn = typeof FormData < "u" ? FormData : null, Xn = typeof Blob < "u" ? Blob : null, Qn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Yn,
    FormData: Kn,
    Blob: Xn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Zt = typeof window < "u" && typeof document < "u", _t = typeof navigator == "object" && navigator || void 0, ei = Zt && (!_t || ["ReactNative", "NativeScript", "NS"].indexOf(_t.product) < 0), ai = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ti = Zt && window.location.href || "http://localhost", oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Zt,
  hasStandardBrowserEnv: ei,
  hasStandardBrowserWebWorkerEnv: ai,
  navigator: _t,
  origin: ti
}, Symbol.toStringTag, { value: "Module" })), Q = {
  ...oi,
  ...Qn
};
function si(a, e) {
  return ut(a, new Q.classes.URLSearchParams(), {
    visitor: function(t, o, s, n) {
      return Q.isNode && m.isBuffer(t) ? (this.append(o, t.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function ni(a) {
  return m.matchAll(/\w+|\[(\w*)]/g, a).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ii(a) {
  const e = {}, t = Object.keys(a);
  let o;
  const s = t.length;
  let n;
  for (o = 0; o < s; o++)
    n = t[o], e[n] = a[n];
  return e;
}
function hs(a) {
  function e(t, o, s, n) {
    let i = t[n++];
    if (i === "__proto__") return !0;
    const r = Number.isFinite(+i), u = n >= t.length;
    return i = !i && m.isArray(s) ? s.length : i, u ? (m.hasOwnProp(s, i) ? s[i] = [s[i], o] : s[i] = o, !r) : ((!s[i] || !m.isObject(s[i])) && (s[i] = []), e(t, o, s[i], n) && m.isArray(s[i]) && (s[i] = ii(s[i])), !r);
  }
  if (m.isFormData(a) && m.isFunction(a.entries)) {
    const t = {};
    return m.forEachEntry(a, (o, s) => {
      e(ni(o), s, t, 0);
    }), t;
  }
  return null;
}
function ri(a, e, t) {
  if (m.isString(a))
    try {
      return (e || JSON.parse)(a), m.trim(a);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (t || JSON.stringify)(a);
}
const Ma = {
  transitional: ds,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const o = t.getContentType() || "", s = o.indexOf("application/json") > -1, n = m.isObject(e);
    if (n && m.isHTMLForm(e) && (e = new FormData(e)), m.isFormData(e))
      return s ? JSON.stringify(hs(e)) : e;
    if (m.isArrayBuffer(e) || m.isBuffer(e) || m.isStream(e) || m.isFile(e) || m.isBlob(e) || m.isReadableStream(e))
      return e;
    if (m.isArrayBufferView(e))
      return e.buffer;
    if (m.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let r;
    if (n) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return si(e, this.formSerializer).toString();
      if ((r = m.isFileList(e)) || o.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ut(
          r ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return n || s ? (t.setContentType("application/json", !1), ri(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || Ma.transitional, o = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (m.isResponse(e) || m.isReadableStream(e))
      return e;
    if (e && m.isString(e) && (o && !this.responseType || s)) {
      const i = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (r) {
        if (i)
          throw r.name === "SyntaxError" ? O.from(r, O.ERR_BAD_RESPONSE, this, null, this.response) : r;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Q.classes.FormData,
    Blob: Q.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (a) => {
  Ma.headers[a] = {};
});
const ci = m.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ui = (a) => {
  const e = {};
  let t, o, s;
  return a && a.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), t = i.substring(0, s).trim().toLowerCase(), o = i.substring(s + 1).trim(), !(!t || e[t] && ci[t]) && (t === "set-cookie" ? e[t] ? e[t].push(o) : e[t] = [o] : e[t] = e[t] ? e[t] + ", " + o : o);
  }), e;
}, ho = Symbol("internals");
function za(a) {
  return a && String(a).trim().toLowerCase();
}
function Va(a) {
  return a === !1 || a == null ? a : m.isArray(a) ? a.map(Va) : String(a);
}
function li(a) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = t.exec(a); )
    e[o[1]] = o[2];
  return e;
}
const mi = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function gt(a, e, t, o, s) {
  if (m.isFunction(o))
    return o.call(this, e, t);
  if (s && (e = t), !!m.isString(e)) {
    if (m.isString(o))
      return e.indexOf(o) !== -1;
    if (m.isRegExp(o))
      return o.test(e);
  }
}
function pi(a) {
  return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, o) => t.toUpperCase() + o);
}
function di(a, e) {
  const t = m.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(a, o + t, {
      value: function(s, n, i) {
        return this[o].call(this, e, s, n, i);
      },
      configurable: !0
    });
  });
}
let ne = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, o) {
    const s = this;
    function n(r, u, c) {
      const l = za(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = m.findKey(s, l);
      (!p || s[p] === void 0 || c === !0 || c === void 0 && s[p] !== !1) && (s[p || u] = Va(r));
    }
    const i = (r, u) => m.forEach(r, (c, l) => n(c, l, u));
    if (m.isPlainObject(e) || e instanceof this.constructor)
      i(e, t);
    else if (m.isString(e) && (e = e.trim()) && !mi(e))
      i(ui(e), t);
    else if (m.isObject(e) && m.isIterable(e)) {
      let r = {}, u, c;
      for (const l of e) {
        if (!m.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        r[c = l[0]] = (u = r[c]) ? m.isArray(u) ? [...u, l[1]] : [u, l[1]] : l[1];
      }
      i(r, t);
    } else
      e != null && n(t, e, o);
    return this;
  }
  get(e, t) {
    if (e = za(e), e) {
      const o = m.findKey(this, e);
      if (o) {
        const s = this[o];
        if (!t)
          return s;
        if (t === !0)
          return li(s);
        if (m.isFunction(t))
          return t.call(this, s, o);
        if (m.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = za(e), e) {
      const o = m.findKey(this, e);
      return !!(o && this[o] !== void 0 && (!t || gt(this, this[o], o, t)));
    }
    return !1;
  }
  delete(e, t) {
    const o = this;
    let s = !1;
    function n(i) {
      if (i = za(i), i) {
        const r = m.findKey(o, i);
        r && (!t || gt(o, o[r], r, t)) && (delete o[r], s = !0);
      }
    }
    return m.isArray(e) ? e.forEach(n) : n(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let o = t.length, s = !1;
    for (; o--; ) {
      const n = t[o];
      (!e || gt(this, this[n], n, e, !0)) && (delete this[n], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, o = {};
    return m.forEach(this, (s, n) => {
      const i = m.findKey(o, n);
      if (i) {
        t[i] = Va(s), delete t[n];
        return;
      }
      const r = e ? pi(n) : String(n).trim();
      r !== n && delete t[n], t[r] = Va(s), o[r] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (o, s) => {
      o != null && o !== !1 && (t[s] = e && m.isArray(o) ? o.join(", ") : o);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const o = new this(e);
    return t.forEach((s) => o.set(s)), o;
  }
  static accessor(e) {
    const o = (this[ho] = this[ho] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function n(i) {
      const r = za(i);
      o[r] || (di(s, i), o[r] = !0);
    }
    return m.isArray(e) ? e.forEach(n) : n(e), this;
  }
};
ne.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(ne.prototype, ({ value: a }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => a,
    set(o) {
      this[t] = o;
    }
  };
});
m.freezeMethods(ne);
function ft(a, e) {
  const t = this || Ma, o = e || t, s = ne.from(o.headers);
  let n = o.data;
  return m.forEach(a, function(r) {
    n = r.call(t, n, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), n;
}
function gs(a) {
  return !!(a && a.__CANCEL__);
}
function ya(a, e, t) {
  O.call(this, a ?? "canceled", O.ERR_CANCELED, e, t), this.name = "CanceledError";
}
m.inherits(ya, O, {
  __CANCEL__: !0
});
function fs(a, e, t) {
  const o = t.config.validateStatus;
  !t.status || !o || o(t.status) ? a(t) : e(new O(
    "Request failed with status code " + t.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function hi(a) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
  return e && e[1] || "";
}
function gi(a, e) {
  a = a || 10;
  const t = new Array(a), o = new Array(a);
  let s = 0, n = 0, i;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), l = o[n];
    i || (i = c), t[s] = u, o[s] = c;
    let p = n, w = 0;
    for (; p !== s; )
      w += t[p++], p = p % a;
    if (s = (s + 1) % a, s === n && (n = (n + 1) % a), c - i < e)
      return;
    const A = l && c - l;
    return A ? Math.round(w * 1e3 / A) : void 0;
  };
}
function fi(a, e) {
  let t = 0, o = 1e3 / e, s, n;
  const i = (c, l = Date.now()) => {
    t = l, s = null, n && (clearTimeout(n), n = null), a(...c);
  };
  return [(...c) => {
    const l = Date.now(), p = l - t;
    p >= o ? i(c, l) : (s = c, n || (n = setTimeout(() => {
      n = null, i(s);
    }, o - p)));
  }, () => s && i(s)];
}
const Ja = (a, e, t = 3) => {
  let o = 0;
  const s = gi(50, 250);
  return fi((n) => {
    const i = n.loaded, r = n.lengthComputable ? n.total : void 0, u = i - o, c = s(u), l = i <= r;
    o = i;
    const p = {
      loaded: i,
      total: r,
      progress: r ? i / r : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && r && l ? (r - i) / c : void 0,
      event: n,
      lengthComputable: r != null,
      [e ? "download" : "upload"]: !0
    };
    a(p);
  }, t);
}, go = (a, e) => {
  const t = a != null;
  return [(o) => e[0]({
    lengthComputable: t,
    total: a,
    loaded: o
  }), e[1]];
}, fo = (a) => (...e) => m.asap(() => a(...e)), ki = Q.hasStandardBrowserEnv ? /* @__PURE__ */ ((a, e) => (t) => (t = new URL(t, Q.origin), a.protocol === t.protocol && a.host === t.host && (e || a.port === t.port)))(
  new URL(Q.origin),
  Q.navigator && /(msie|trident)/i.test(Q.navigator.userAgent)
) : () => !0, bi = Q.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(a, e, t, o, s, n, i) {
      if (typeof document > "u") return;
      const r = [`${a}=${encodeURIComponent(e)}`];
      m.isNumber(t) && r.push(`expires=${new Date(t).toUTCString()}`), m.isString(o) && r.push(`path=${o}`), m.isString(s) && r.push(`domain=${s}`), n === !0 && r.push("secure"), m.isString(i) && r.push(`SameSite=${i}`), document.cookie = r.join("; ");
    },
    read(a) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + a + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(a) {
      this.write(a, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function yi(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function wi(a, e) {
  return e ? a.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : a;
}
function ks(a, e, t) {
  let o = !yi(e);
  return a && (o || t == !1) ? wi(a, e) : e;
}
const ko = (a) => a instanceof ne ? { ...a } : a;
function Qe(a, e) {
  e = e || {};
  const t = {};
  function o(c, l, p, w) {
    return m.isPlainObject(c) && m.isPlainObject(l) ? m.merge.call({ caseless: w }, c, l) : m.isPlainObject(l) ? m.merge({}, l) : m.isArray(l) ? l.slice() : l;
  }
  function s(c, l, p, w) {
    if (m.isUndefined(l)) {
      if (!m.isUndefined(c))
        return o(void 0, c, p, w);
    } else return o(c, l, p, w);
  }
  function n(c, l) {
    if (!m.isUndefined(l))
      return o(void 0, l);
  }
  function i(c, l) {
    if (m.isUndefined(l)) {
      if (!m.isUndefined(c))
        return o(void 0, c);
    } else return o(void 0, l);
  }
  function r(c, l, p) {
    if (p in e)
      return o(c, l);
    if (p in a)
      return o(void 0, c);
  }
  const u = {
    url: n,
    method: n,
    data: n,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: r,
    headers: (c, l, p) => s(ko(c), ko(l), p, !0)
  };
  return m.forEach(Object.keys({ ...a, ...e }), function(l) {
    const p = u[l] || s, w = p(a[l], e[l], l);
    m.isUndefined(w) && p !== r || (t[l] = w);
  }), t;
}
const bs = (a) => {
  const e = Qe({}, a);
  let { data: t, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: n, headers: i, auth: r } = e;
  if (e.headers = i = ne.from(i), e.url = ps(ks(e.baseURL, e.url, e.allowAbsoluteUrls), a.params, a.paramsSerializer), r && i.set(
    "Authorization",
    "Basic " + btoa((r.username || "") + ":" + (r.password ? unescape(encodeURIComponent(r.password)) : ""))
  ), m.isFormData(t)) {
    if (Q.hasStandardBrowserEnv || Q.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (m.isFunction(t.getHeaders)) {
      const u = t.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(u).forEach(([l, p]) => {
        c.includes(l.toLowerCase()) && i.set(l, p);
      });
    }
  }
  if (Q.hasStandardBrowserEnv && (o && m.isFunction(o) && (o = o(e)), o || o !== !1 && ki(e.url))) {
    const u = s && n && bi.read(n);
    u && i.set(s, u);
  }
  return e;
}, ji = typeof XMLHttpRequest < "u", vi = ji && function(a) {
  return new Promise(function(t, o) {
    const s = bs(a);
    let n = s.data;
    const i = ne.from(s.headers).normalize();
    let { responseType: r, onUploadProgress: u, onDownloadProgress: c } = s, l, p, w, A, h;
    function k() {
      A && A(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let d = new XMLHttpRequest();
    d.open(s.method.toUpperCase(), s.url, !0), d.timeout = s.timeout;
    function v() {
      if (!d)
        return;
      const z = ne.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), H = {
        data: !r || r === "text" || r === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: z,
        config: a,
        request: d
      };
      fs(function(Z) {
        t(Z), k();
      }, function(Z) {
        o(Z), k();
      }, H), d = null;
    }
    "onloadend" in d ? d.onloadend = v : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, d.onabort = function() {
      d && (o(new O("Request aborted", O.ECONNABORTED, a, d)), d = null);
    }, d.onerror = function(T) {
      const H = T && T.message ? T.message : "Network Error", K = new O(H, O.ERR_NETWORK, a, d);
      K.event = T || null, o(K), d = null;
    }, d.ontimeout = function() {
      let T = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const H = s.transitional || ds;
      s.timeoutErrorMessage && (T = s.timeoutErrorMessage), o(new O(
        T,
        H.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        a,
        d
      )), d = null;
    }, n === void 0 && i.setContentType(null), "setRequestHeader" in d && m.forEach(i.toJSON(), function(T, H) {
      d.setRequestHeader(H, T);
    }), m.isUndefined(s.withCredentials) || (d.withCredentials = !!s.withCredentials), r && r !== "json" && (d.responseType = s.responseType), c && ([w, h] = Ja(c, !0), d.addEventListener("progress", w)), u && d.upload && ([p, A] = Ja(u), d.upload.addEventListener("progress", p), d.upload.addEventListener("loadend", A)), (s.cancelToken || s.signal) && (l = (z) => {
      d && (o(!z || z.type ? new ya(null, a, d) : z), d.abort(), d = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const I = hi(s.url);
    if (I && Q.protocols.indexOf(I) === -1) {
      o(new O("Unsupported protocol " + I + ":", O.ERR_BAD_REQUEST, a));
      return;
    }
    d.send(n || null);
  });
}, zi = (a, e) => {
  const { length: t } = a = a ? a.filter(Boolean) : [];
  if (e || t) {
    let o = new AbortController(), s;
    const n = function(c) {
      if (!s) {
        s = !0, r();
        const l = c instanceof Error ? c : this.reason;
        o.abort(l instanceof O ? l : new ya(l instanceof Error ? l.message : l));
      }
    };
    let i = e && setTimeout(() => {
      i = null, n(new O(`timeout ${e} of ms exceeded`, O.ETIMEDOUT));
    }, e);
    const r = () => {
      a && (i && clearTimeout(i), i = null, a.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(n) : c.removeEventListener("abort", n);
      }), a = null);
    };
    a.forEach((c) => c.addEventListener("abort", n));
    const { signal: u } = o;
    return u.unsubscribe = () => m.asap(r), u;
  }
}, xi = function* (a, e) {
  let t = a.byteLength;
  if (t < e) {
    yield a;
    return;
  }
  let o = 0, s;
  for (; o < t; )
    s = o + e, yield a.slice(o, s), o = s;
}, _i = async function* (a, e) {
  for await (const t of Si(a))
    yield* xi(t, e);
}, Si = async function* (a) {
  if (a[Symbol.asyncIterator]) {
    yield* a;
    return;
  }
  const e = a.getReader();
  try {
    for (; ; ) {
      const { done: t, value: o } = await e.read();
      if (t)
        break;
      yield o;
    }
  } finally {
    await e.cancel();
  }
}, bo = (a, e, t, o) => {
  const s = _i(a, e);
  let n = 0, i, r = (u) => {
    i || (i = !0, o && o(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: c, value: l } = await s.next();
        if (c) {
          r(), u.close();
          return;
        }
        let p = l.byteLength;
        if (t) {
          let w = n += p;
          t(w);
        }
        u.enqueue(new Uint8Array(l));
      } catch (c) {
        throw r(c), c;
      }
    },
    cancel(u) {
      return r(u), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, yo = 64 * 1024, { isFunction: Za } = m, Ai = (({ Request: a, Response: e }) => ({
  Request: a,
  Response: e
}))(m.global), {
  ReadableStream: wo,
  TextEncoder: jo
} = m.global, vo = (a, ...e) => {
  try {
    return !!a(...e);
  } catch {
    return !1;
  }
}, Ci = (a) => {
  a = m.merge.call({
    skipUndefined: !0
  }, Ai, a);
  const { fetch: e, Request: t, Response: o } = a, s = e ? Za(e) : typeof fetch == "function", n = Za(t), i = Za(o);
  if (!s)
    return !1;
  const r = s && Za(wo), u = s && (typeof jo == "function" ? /* @__PURE__ */ ((h) => (k) => h.encode(k))(new jo()) : async (h) => new Uint8Array(await new t(h).arrayBuffer())), c = n && r && vo(() => {
    let h = !1;
    const k = new t(Q.origin, {
      body: new wo(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !k;
  }), l = i && r && vo(() => m.isReadableStream(new o("").body)), p = {
    stream: l && ((h) => h.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !p[h] && (p[h] = (k, d) => {
      let v = k && k[h];
      if (v)
        return v.call(k);
      throw new O(`Response type '${h}' is not supported`, O.ERR_NOT_SUPPORT, d);
    });
  });
  const w = async (h) => {
    if (h == null)
      return 0;
    if (m.isBlob(h))
      return h.size;
    if (m.isSpecCompliantForm(h))
      return (await new t(Q.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (m.isArrayBufferView(h) || m.isArrayBuffer(h))
      return h.byteLength;
    if (m.isURLSearchParams(h) && (h = h + ""), m.isString(h))
      return (await u(h)).byteLength;
  }, A = async (h, k) => {
    const d = m.toFiniteNumber(h.getContentLength());
    return d ?? w(k);
  };
  return async (h) => {
    let {
      url: k,
      method: d,
      data: v,
      signal: I,
      cancelToken: z,
      timeout: T,
      onDownloadProgress: H,
      onUploadProgress: K,
      responseType: Z,
      headers: ae,
      withCredentials: sa = "same-origin",
      fetchOptions: $a
    } = bs(h), Ua = e || fetch;
    Z = Z ? (Z + "").toLowerCase() : "text";
    let na = zi([I, z && z.toAbortSignal()], T), Ae = null;
    const X = na && na.unsubscribe && (() => {
      na.unsubscribe();
    });
    let ia;
    try {
      if (K && c && d !== "get" && d !== "head" && (ia = await A(ae, v)) !== 0) {
        let be = new t(k, {
          method: "POST",
          body: v,
          duplex: "half"
        }), Ce;
        if (m.isFormData(v) && (Ce = be.headers.get("content-type")) && ae.setContentType(Ce), be.body) {
          const [ra, We] = go(
            ia,
            Ja(fo(K))
          );
          v = bo(be.body, yo, ra, We);
        }
      }
      m.isString(sa) || (sa = sa ? "include" : "omit");
      const W = n && "credentials" in t.prototype, qa = {
        ...$a,
        signal: na,
        method: d.toUpperCase(),
        headers: ae.normalize().toJSON(),
        body: v,
        duplex: "half",
        credentials: W ? sa : void 0
      };
      Ae = n && new t(k, qa);
      let ue = await (n ? Ua(Ae, $a) : Ua(k, qa));
      const wa = l && (Z === "stream" || Z === "response");
      if (l && (H || wa && X)) {
        const be = {};
        ["status", "statusText", "headers"].forEach((ja) => {
          be[ja] = ue[ja];
        });
        const Ce = m.toFiniteNumber(ue.headers.get("content-length")), [ra, We] = H && go(
          Ce,
          Ja(fo(H), !0)
        ) || [];
        ue = new o(
          bo(ue.body, yo, ra, () => {
            We && We(), X && X();
          }),
          be
        );
      }
      Z = Z || "text";
      let ht = await p[m.findKey(p, Z) || "text"](ue, h);
      return !wa && X && X(), await new Promise((be, Ce) => {
        fs(be, Ce, {
          data: ht,
          headers: ne.from(ue.headers),
          status: ue.status,
          statusText: ue.statusText,
          config: h,
          request: Ae
        });
      });
    } catch (W) {
      throw X && X(), W && W.name === "TypeError" && /Load failed|fetch/i.test(W.message) ? Object.assign(
        new O("Network Error", O.ERR_NETWORK, h, Ae),
        {
          cause: W.cause || W
        }
      ) : O.from(W, W && W.code, h, Ae);
    }
  };
}, Ei = /* @__PURE__ */ new Map(), ys = (a) => {
  let e = a && a.env || {};
  const { fetch: t, Request: o, Response: s } = e, n = [
    o,
    s,
    t
  ];
  let i = n.length, r = i, u, c, l = Ei;
  for (; r--; )
    u = n[r], c = l.get(u), c === void 0 && l.set(u, c = r ? /* @__PURE__ */ new Map() : Ci(e)), l = c;
  return c;
};
ys();
const Bt = {
  http: Hn,
  xhr: vi,
  fetch: {
    get: ys
  }
};
m.forEach(Bt, (a, e) => {
  if (a) {
    try {
      Object.defineProperty(a, "name", { value: e });
    } catch {
    }
    Object.defineProperty(a, "adapterName", { value: e });
  }
});
const zo = (a) => `- ${a}`, Oi = (a) => m.isFunction(a) || a === null || a === !1;
function Ii(a, e) {
  a = m.isArray(a) ? a : [a];
  const { length: t } = a;
  let o, s;
  const n = {};
  for (let i = 0; i < t; i++) {
    o = a[i];
    let r;
    if (s = o, !Oi(o) && (s = Bt[(r = String(o)).toLowerCase()], s === void 0))
      throw new O(`Unknown adapter '${r}'`);
    if (s && (m.isFunction(s) || (s = s.get(e))))
      break;
    n[r || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(n).map(
      ([u, c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let r = t ? i.length > 1 ? `since :
` + i.map(zo).join(`
`) : " " + zo(i[0]) : "as no adapter specified";
    throw new O(
      "There is no suitable adapter to dispatch the request " + r,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const ws = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ii,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Bt
};
function kt(a) {
  if (a.cancelToken && a.cancelToken.throwIfRequested(), a.signal && a.signal.aborted)
    throw new ya(null, a);
}
function xo(a) {
  return kt(a), a.headers = ne.from(a.headers), a.data = ft.call(
    a,
    a.transformRequest
  ), ["post", "put", "patch"].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", !1), ws.getAdapter(a.adapter || Ma.adapter, a)(a).then(function(o) {
    return kt(a), o.data = ft.call(
      a,
      a.transformResponse,
      o
    ), o.headers = ne.from(o.headers), o;
  }, function(o) {
    return gs(o) || (kt(a), o && o.response && (o.response.data = ft.call(
      a,
      a.transformResponse,
      o.response
    ), o.response.headers = ne.from(o.response.headers))), Promise.reject(o);
  });
}
const js = "1.13.1", lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((a, e) => {
  lt[a] = function(o) {
    return typeof o === a || "a" + (e < 1 ? "n " : " ") + a;
  };
});
const _o = {};
lt.transitional = function(e, t, o) {
  function s(n, i) {
    return "[Axios v" + js + "] Transitional option '" + n + "'" + i + (o ? ". " + o : "");
  }
  return (n, i, r) => {
    if (e === !1)
      throw new O(
        s(i, " has been removed" + (t ? " in " + t : "")),
        O.ERR_DEPRECATED
      );
    return t && !_o[i] && (_o[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(n, i, r) : !0;
  };
};
lt.spelling = function(e) {
  return (t, o) => (console.warn(`${o} is likely a misspelling of ${e}`), !0);
};
function Ti(a, e, t) {
  if (typeof a != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(a);
  let s = o.length;
  for (; s-- > 0; ) {
    const n = o[s], i = e[n];
    if (i) {
      const r = a[n], u = r === void 0 || i(r, n, a);
      if (u !== !0)
        throw new O("option " + n + " must be " + u, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new O("Unknown option " + n, O.ERR_BAD_OPTION);
  }
}
const Ha = {
  assertOptions: Ti,
  validators: lt
}, ye = Ha.validators;
let Ke = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new po(),
      response: new po()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (o) {
      if (o instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const n = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? n && !String(o.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + n) : o.stack = n;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Qe(this.defaults, t);
    const { transitional: o, paramsSerializer: s, headers: n } = t;
    o !== void 0 && Ha.assertOptions(o, {
      silentJSONParsing: ye.transitional(ye.boolean),
      forcedJSONParsing: ye.transitional(ye.boolean),
      clarifyTimeoutError: ye.transitional(ye.boolean)
    }, !1), s != null && (m.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : Ha.assertOptions(s, {
      encode: ye.function,
      serialize: ye.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Ha.assertOptions(t, {
      baseUrl: ye.spelling("baseURL"),
      withXsrfToken: ye.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let i = n && m.merge(
      n.common,
      n[t.method]
    );
    n && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete n[h];
      }
    ), t.headers = ne.concat(i, n);
    const r = [];
    let u = !0;
    this.interceptors.request.forEach(function(k) {
      typeof k.runWhen == "function" && k.runWhen(t) === !1 || (u = u && k.synchronous, r.unshift(k.fulfilled, k.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(k) {
      c.push(k.fulfilled, k.rejected);
    });
    let l, p = 0, w;
    if (!u) {
      const h = [xo.bind(this), void 0];
      for (h.unshift(...r), h.push(...c), w = h.length, l = Promise.resolve(t); p < w; )
        l = l.then(h[p++], h[p++]);
      return l;
    }
    w = r.length;
    let A = t;
    for (; p < w; ) {
      const h = r[p++], k = r[p++];
      try {
        A = h(A);
      } catch (d) {
        k.call(this, d);
        break;
      }
    }
    try {
      l = xo.call(this, A);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, w = c.length; p < w; )
      l = l.then(c[p++], c[p++]);
    return l;
  }
  getUri(e) {
    e = Qe(this.defaults, e);
    const t = ks(e.baseURL, e.url, e.allowAbsoluteUrls);
    return ps(t, e.params, e.paramsSerializer);
  }
};
m.forEach(["delete", "get", "head", "options"], function(e) {
  Ke.prototype[e] = function(t, o) {
    return this.request(Qe(o || {}, {
      method: e,
      url: t,
      data: (o || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(e) {
  function t(o) {
    return function(n, i, r) {
      return this.request(Qe(r || {}, {
        method: e,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: n,
        data: i
      }));
    };
  }
  Ke.prototype[e] = t(), Ke.prototype[e + "Form"] = t(!0);
});
let Ri = class vs {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(n) {
      t = n;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners) return;
      let n = o._listeners.length;
      for (; n-- > 0; )
        o._listeners[n](s);
      o._listeners = null;
    }), this.promise.then = (s) => {
      let n;
      const i = new Promise((r) => {
        o.subscribe(r), n = r;
      }).then(s);
      return i.cancel = function() {
        o.unsubscribe(n);
      }, i;
    }, e(function(n, i, r) {
      o.reason || (o.reason = new ya(n, i, r), t(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), t = (o) => {
      e.abort(o);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new vs(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function Ni(a) {
  return function(t) {
    return a.apply(null, t);
  };
}
function Pi(a) {
  return m.isObject(a) && a.isAxiosError === !0;
}
const St = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(St).forEach(([a, e]) => {
  St[e] = a;
});
function zs(a) {
  const e = new Ke(a), t = es(Ke.prototype.request, e);
  return m.extend(t, Ke.prototype, e, { allOwnKeys: !0 }), m.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return zs(Qe(a, s));
  }, t;
}
const F = zs(Ma);
F.Axios = Ke;
F.CanceledError = ya;
F.CancelToken = Ri;
F.isCancel = gs;
F.VERSION = js;
F.toFormData = ut;
F.AxiosError = O;
F.Cancel = F.CanceledError;
F.all = function(e) {
  return Promise.all(e);
};
F.spread = Ni;
F.isAxiosError = Pi;
F.mergeConfig = Qe;
F.AxiosHeaders = ne;
F.formToJSON = (a) => hs(m.isHTMLForm(a) ? new FormData(a) : a);
F.getAdapter = ws.getAdapter;
F.HttpStatusCode = St;
F.default = F;
const {
  Axios: Ou,
  AxiosError: Iu,
  CanceledError: Tu,
  isCancel: Ru,
  CancelToken: Nu,
  VERSION: Pu,
  all: Du,
  Cancel: Lu,
  isAxiosError: Mu,
  spread: $u,
  toFormData: Uu,
  AxiosHeaders: qu,
  HttpStatusCode: Fu,
  formToJSON: Zu,
  getAdapter: Bu,
  mergeConfig: Vu
} = F;
var So = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xs(a) {
  if (a.__esModule) return a;
  var e = a.default;
  if (typeof e == "function") {
    var t = function o() {
      return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(a).forEach(function(o) {
    var s = Object.getOwnPropertyDescriptor(a, o);
    Object.defineProperty(t, o, s.get ? s : {
      enumerable: !0,
      get: function() {
        return a[o];
      }
    });
  }), t;
}
const la = 2147483647, we = 36, Vt = 1, Oa = 26, Di = 38, Li = 700, _s = 72, Ss = 128, As = "-", Mi = /^xn--/, $i = /[^\0-\x7F]/, Ui = /[\x2E\u3002\uFF0E\uFF61]/g, qi = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, bt = we - Vt, je = Math.floor, yt = String.fromCharCode;
function Ue(a) {
  throw new RangeError(qi[a]);
}
function Fi(a, e) {
  const t = [];
  let o = a.length;
  for (; o--; )
    t[o] = e(a[o]);
  return t;
}
function Cs(a, e) {
  const t = a.split("@");
  let o = "";
  t.length > 1 && (o = t[0] + "@", a = t[1]), a = a.replace(Ui, ".");
  const s = a.split("."), n = Fi(s, e).join(".");
  return o + n;
}
function Ht(a) {
  const e = [];
  let t = 0;
  const o = a.length;
  for (; t < o; ) {
    const s = a.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < o) {
      const n = a.charCodeAt(t++);
      (n & 64512) == 56320 ? e.push(((s & 1023) << 10) + (n & 1023) + 65536) : (e.push(s), t--);
    } else
      e.push(s);
  }
  return e;
}
const Es = (a) => String.fromCodePoint(...a), Zi = function(a) {
  return a >= 48 && a < 58 ? 26 + (a - 48) : a >= 65 && a < 91 ? a - 65 : a >= 97 && a < 123 ? a - 97 : we;
}, Ao = function(a, e) {
  return a + 22 + 75 * (a < 26) - ((e != 0) << 5);
}, Os = function(a, e, t) {
  let o = 0;
  for (a = t ? je(a / Li) : a >> 1, a += je(a / e); a > bt * Oa >> 1; o += we)
    a = je(a / bt);
  return je(o + (bt + 1) * a / (a + Di));
}, Wt = function(a) {
  const e = [], t = a.length;
  let o = 0, s = Ss, n = _s, i = a.lastIndexOf(As);
  i < 0 && (i = 0);
  for (let r = 0; r < i; ++r)
    a.charCodeAt(r) >= 128 && Ue("not-basic"), e.push(a.charCodeAt(r));
  for (let r = i > 0 ? i + 1 : 0; r < t; ) {
    const u = o;
    for (let l = 1, p = we; ; p += we) {
      r >= t && Ue("invalid-input");
      const w = Zi(a.charCodeAt(r++));
      w >= we && Ue("invalid-input"), w > je((la - o) / l) && Ue("overflow"), o += w * l;
      const A = p <= n ? Vt : p >= n + Oa ? Oa : p - n;
      if (w < A)
        break;
      const h = we - A;
      l > je(la / h) && Ue("overflow"), l *= h;
    }
    const c = e.length + 1;
    n = Os(o - u, c, u == 0), je(o / c) > la - s && Ue("overflow"), s += je(o / c), o %= c, e.splice(o++, 0, s);
  }
  return String.fromCodePoint(...e);
}, Jt = function(a) {
  const e = [];
  a = Ht(a);
  const t = a.length;
  let o = Ss, s = 0, n = _s;
  for (const u of a)
    u < 128 && e.push(yt(u));
  const i = e.length;
  let r = i;
  for (i && e.push(As); r < t; ) {
    let u = la;
    for (const l of a)
      l >= o && l < u && (u = l);
    const c = r + 1;
    u - o > je((la - s) / c) && Ue("overflow"), s += (u - o) * c, o = u;
    for (const l of a)
      if (l < o && ++s > la && Ue("overflow"), l === o) {
        let p = s;
        for (let w = we; ; w += we) {
          const A = w <= n ? Vt : w >= n + Oa ? Oa : w - n;
          if (p < A)
            break;
          const h = p - A, k = we - A;
          e.push(
            yt(Ao(A + h % k, 0))
          ), p = je(h / k);
        }
        e.push(yt(Ao(p, 0))), n = Os(s, c, r === i), s = 0, ++r;
      }
    ++s, ++o;
  }
  return e.join("");
}, Is = function(a) {
  return Cs(a, function(e) {
    return Mi.test(e) ? Wt(e.slice(4).toLowerCase()) : e;
  });
}, Ts = function(a) {
  return Cs(a, function(e) {
    return $i.test(e) ? "xn--" + Jt(e) : e;
  });
}, Bi = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Ht,
    encode: Es
  },
  decode: Wt,
  encode: Jt,
  toASCII: Ts,
  toUnicode: Is
}, Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Wt,
  default: Bi,
  encode: Jt,
  toASCII: Ts,
  toUnicode: Is,
  ucs2decode: Ht,
  ucs2encode: Es
}, Symbol.toStringTag, { value: "Module" })), Hi = /* @__PURE__ */ xs(Vi);
var Wi = function(e, t) {
  if (t = t.split(":")[0], e = +e, !e) return !1;
  switch (t) {
    case "http":
    case "ws":
      return e !== 80;
    case "https":
    case "wss":
      return e !== 443;
    case "ftp":
      return e !== 21;
    case "gopher":
      return e !== 70;
    case "file":
      return !1;
  }
  return e !== 0;
}, Gt = {}, Ji = Object.prototype.hasOwnProperty, Gi;
function Co(a) {
  try {
    return decodeURIComponent(a.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function Eo(a) {
  try {
    return encodeURIComponent(a);
  } catch {
    return null;
  }
}
function Yi(a) {
  for (var e = /([^=?#&]+)=?([^&]*)/g, t = {}, o; o = e.exec(a); ) {
    var s = Co(o[1]), n = Co(o[2]);
    s === null || n === null || s in t || (t[s] = n);
  }
  return t;
}
function Ki(a, e) {
  e = e || "";
  var t = [], o, s;
  typeof e != "string" && (e = "?");
  for (s in a)
    if (Ji.call(a, s)) {
      if (o = a[s], !o && (o === null || o === Gi || isNaN(o)) && (o = ""), s = Eo(s), o = Eo(o), s === null || o === null) continue;
      t.push(s + "=" + o);
    }
  return t.length ? e + t.join("&") : "";
}
Gt.stringify = Ki;
Gt.parse = Yi;
var Rs = Wi, mt = Gt, Xi = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, Ns = /[\n\r\t]/g, Qi = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, Ps = /:\d+$/, er = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, ar = /^[a-zA-Z]:/;
function Yt(a) {
  return (a || "").toString().replace(Xi, "");
}
var At = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(e, t) {
    return ve(t.protocol) ? e.replace(/\\/g, "/") : e;
  },
  ["/", "pathname"],
  // Extract from the back.
  ["@", "auth", 1],
  // Extract from the front.
  [NaN, "host", void 0, 1, 1],
  // Set left over value.
  [/:(\d*)$/, "port", void 0, 1],
  // RegExp the back.
  [NaN, "hostname", void 0, 1, 1]
  // Set left over.
], Oo = { hash: 1, query: 1 };
function Ds(a) {
  var e;
  typeof window < "u" ? e = window : typeof So < "u" ? e = So : typeof self < "u" ? e = self : e = {};
  var t = e.location || {};
  a = a || t;
  var o = {}, s = typeof a, n;
  if (a.protocol === "blob:")
    o = new xe(unescape(a.pathname), {});
  else if (s === "string") {
    o = new xe(a, {});
    for (n in Oo) delete o[n];
  } else if (s === "object") {
    for (n in a)
      n in Oo || (o[n] = a[n]);
    o.slashes === void 0 && (o.slashes = Qi.test(a.href));
  }
  return o;
}
function ve(a) {
  return a === "file:" || a === "ftp:" || a === "http:" || a === "https:" || a === "ws:" || a === "wss:";
}
function Ls(a, e) {
  a = Yt(a), a = a.replace(Ns, ""), e = e || {};
  var t = er.exec(a), o = t[1] ? t[1].toLowerCase() : "", s = !!t[2], n = !!t[3], i = 0, r;
  return s ? n ? (r = t[2] + t[3] + t[4], i = t[2].length + t[3].length) : (r = t[2] + t[4], i = t[2].length) : n ? (r = t[3] + t[4], i = t[3].length) : r = t[4], o === "file:" ? i >= 2 && (r = r.slice(2)) : ve(o) ? r = t[4] : o ? s && (r = r.slice(2)) : i >= 2 && ve(e.protocol) && (r = t[4]), {
    protocol: o,
    slashes: s || ve(o),
    slashesCount: i,
    rest: r
  };
}
function tr(a, e) {
  if (a === "") return e;
  for (var t = (e || "/").split("/").slice(0, -1).concat(a.split("/")), o = t.length, s = t[o - 1], n = !1, i = 0; o--; )
    t[o] === "." ? t.splice(o, 1) : t[o] === ".." ? (t.splice(o, 1), i++) : i && (o === 0 && (n = !0), t.splice(o, 1), i--);
  return n && t.unshift(""), (s === "." || s === "..") && t.push(""), t.join("/");
}
function xe(a, e, t) {
  if (a = Yt(a), a = a.replace(Ns, ""), !(this instanceof xe))
    return new xe(a, e, t);
  var o, s, n, i, r, u, c = At.slice(), l = typeof e, p = this, w = 0;
  for (l !== "object" && l !== "string" && (t = e, e = null), t && typeof t != "function" && (t = mt.parse), e = Ds(e), s = Ls(a || "", e), o = !s.protocol && !s.slashes, p.slashes = s.slashes || o && e.slashes, p.protocol = s.protocol || e.protocol || "", a = s.rest, (s.protocol === "file:" && (s.slashesCount !== 2 || ar.test(a)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !ve(p.protocol))) && (c[3] = [/(.*)/, "pathname"]); w < c.length; w++) {
    if (i = c[w], typeof i == "function") {
      a = i(a, p);
      continue;
    }
    n = i[0], u = i[1], n !== n ? p[u] = a : typeof n == "string" ? (r = n === "@" ? a.lastIndexOf(n) : a.indexOf(n), ~r && (typeof i[2] == "number" ? (p[u] = a.slice(0, r), a = a.slice(r + i[2])) : (p[u] = a.slice(r), a = a.slice(0, r)))) : (r = n.exec(a)) && (p[u] = r[1], a = a.slice(0, r.index)), p[u] = p[u] || o && i[3] && e[u] || "", i[4] && (p[u] = p[u].toLowerCase());
  }
  t && (p.query = t(p.query)), o && e.slashes && p.pathname.charAt(0) !== "/" && (p.pathname !== "" || e.pathname !== "") && (p.pathname = tr(p.pathname, e.pathname)), p.pathname.charAt(0) !== "/" && ve(p.protocol) && (p.pathname = "/" + p.pathname), Rs(p.port, p.protocol) || (p.host = p.hostname, p.port = ""), p.username = p.password = "", p.auth && (r = p.auth.indexOf(":"), ~r ? (p.username = p.auth.slice(0, r), p.username = encodeURIComponent(decodeURIComponent(p.username)), p.password = p.auth.slice(r + 1), p.password = encodeURIComponent(decodeURIComponent(p.password))) : p.username = encodeURIComponent(decodeURIComponent(p.auth)), p.auth = p.password ? p.username + ":" + p.password : p.username), p.origin = p.protocol !== "file:" && ve(p.protocol) && p.host ? p.protocol + "//" + p.host : "null", p.href = p.toString();
}
function or(a, e, t) {
  var o = this;
  switch (a) {
    case "query":
      typeof e == "string" && e.length && (e = (t || mt.parse)(e)), o[a] = e;
      break;
    case "port":
      o[a] = e, Rs(e, o.protocol) ? e && (o.host = o.hostname + ":" + e) : (o.host = o.hostname, o[a] = "");
      break;
    case "hostname":
      o[a] = e, o.port && (e += ":" + o.port), o.host = e;
      break;
    case "host":
      o[a] = e, Ps.test(e) ? (e = e.split(":"), o.port = e.pop(), o.hostname = e.join(":")) : (o.hostname = e, o.port = "");
      break;
    case "protocol":
      o.protocol = e.toLowerCase(), o.slashes = !t;
      break;
    case "pathname":
    case "hash":
      if (e) {
        var s = a === "pathname" ? "/" : "#";
        o[a] = e.charAt(0) !== s ? s + e : e;
      } else
        o[a] = e;
      break;
    case "username":
    case "password":
      o[a] = encodeURIComponent(e);
      break;
    case "auth":
      var n = e.indexOf(":");
      ~n ? (o.username = e.slice(0, n), o.username = encodeURIComponent(decodeURIComponent(o.username)), o.password = e.slice(n + 1), o.password = encodeURIComponent(decodeURIComponent(o.password))) : o.username = encodeURIComponent(decodeURIComponent(e));
  }
  for (var i = 0; i < At.length; i++) {
    var r = At[i];
    r[4] && (o[r[1]] = o[r[1]].toLowerCase());
  }
  return o.auth = o.password ? o.username + ":" + o.password : o.username, o.origin = o.protocol !== "file:" && ve(o.protocol) && o.host ? o.protocol + "//" + o.host : "null", o.href = o.toString(), o;
}
function sr(a) {
  (!a || typeof a != "function") && (a = mt.stringify);
  var e, t = this, o = t.host, s = t.protocol;
  s && s.charAt(s.length - 1) !== ":" && (s += ":");
  var n = s + (t.protocol && t.slashes || ve(t.protocol) ? "//" : "");
  return t.username ? (n += t.username, t.password && (n += ":" + t.password), n += "@") : t.password ? (n += ":" + t.password, n += "@") : t.protocol !== "file:" && ve(t.protocol) && !o && t.pathname !== "/" && (n += "@"), (o[o.length - 1] === ":" || Ps.test(t.hostname) && !t.port) && (o += ":"), n += o + t.pathname, e = typeof t.query == "object" ? a(t.query) : t.query, e && (n += e.charAt(0) !== "?" ? "?" + e : e), t.hash && (n += t.hash), n;
}
xe.prototype = { set: or, toString: sr };
xe.extractProtocol = Ls;
xe.location = Ds;
xe.trimLeft = Yt;
xe.qs = mt;
var nr = xe, Kt = {}, Ms = {};
(function(a) {
  Object.defineProperties(a, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } });
  function e(d) {
    return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
  }
  var t, o;
  function s() {
    if (o) return t;
    o = 1;
    const d = 2147483647, v = 36, I = 1, z = 26, T = 38, H = 700, K = 72, Z = 128, ae = "-", sa = /^xn--/, $a = /[^\0-\x7F]/, Ua = /[\x2E\u3002\uFF0E\uFF61]/g, na = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, Ae = v - I, X = Math.floor, ia = String.fromCharCode;
    function W(S) {
      throw new RangeError(na[S]);
    }
    function qa(S, D) {
      const J = [];
      let $ = S.length;
      for (; $--; ) J[$] = D(S[$]);
      return J;
    }
    function ue(S, D) {
      const J = S.split("@");
      let $ = "";
      J.length > 1 && ($ = J[0] + "@", S = J[1]), S = S.replace(Ua, ".");
      const G = S.split("."), te = qa(G, D).join(".");
      return $ + te;
    }
    function wa(S) {
      const D = [];
      let J = 0;
      const $ = S.length;
      for (; J < $; ) {
        const G = S.charCodeAt(J++);
        if (G >= 55296 && G <= 56319 && J < $) {
          const te = S.charCodeAt(J++);
          (te & 64512) == 56320 ? D.push(((G & 1023) << 10) + (te & 1023) + 65536) : (D.push(G), J--);
        } else D.push(G);
      }
      return D;
    }
    const ht = (S) => String.fromCodePoint(...S), be = function(S) {
      return S >= 48 && S < 58 ? 26 + (S - 48) : S >= 65 && S < 91 ? S - 65 : S >= 97 && S < 123 ? S - 97 : v;
    }, Ce = function(S, D) {
      return S + 22 + 75 * (S < 26) - ((D != 0) << 5);
    }, ra = function(S, D, J) {
      let $ = 0;
      for (S = J ? X(S / H) : S >> 1, S += X(S / D); S > Ae * z >> 1; $ += v) S = X(S / Ae);
      return X($ + (Ae + 1) * S / (S + T));
    }, We = function(S) {
      const D = [], J = S.length;
      let $ = 0, G = Z, te = K, Ee = S.lastIndexOf(ae);
      Ee < 0 && (Ee = 0);
      for (let ie = 0; ie < Ee; ++ie) S.charCodeAt(ie) >= 128 && W("not-basic"), D.push(S.charCodeAt(ie));
      for (let ie = Ee > 0 ? Ee + 1 : 0; ie < J; ) {
        const le = $;
        for (let me = 1, Oe = v; ; Oe += v) {
          ie >= J && W("invalid-input");
          const Ie = be(S.charCodeAt(ie++));
          Ie >= v && W("invalid-input"), Ie > X((d - $) / me) && W("overflow"), $ += Ie * me;
          const Je = Oe <= te ? I : Oe >= te + z ? z : Oe - te;
          if (Ie < Je) break;
          const va = v - Je;
          me > X(d / va) && W("overflow"), me *= va;
        }
        const Me = D.length + 1;
        te = ra($ - le, Me, le == 0), X($ / Me) > d - G && W("overflow"), G += X($ / Me), $ %= Me, D.splice($++, 0, G);
      }
      return String.fromCodePoint(...D);
    }, ja = function(S) {
      const D = [];
      S = wa(S);
      const J = S.length;
      let $ = Z, G = 0, te = K;
      for (const le of S) le < 128 && D.push(ia(le));
      const Ee = D.length;
      let ie = Ee;
      for (Ee && D.push(ae); ie < J; ) {
        let le = d;
        for (const me of S) me >= $ && me < le && (le = me);
        const Me = ie + 1;
        le - $ > X((d - G) / Me) && W("overflow"), G += (le - $) * Me, $ = le;
        for (const me of S) if (me < $ && ++G > d && W("overflow"), me === $) {
          let Oe = G;
          for (let Ie = v; ; Ie += v) {
            const Je = Ie <= te ? I : Ie >= te + z ? z : Ie - te;
            if (Oe < Je) break;
            const va = Oe - Je, co = v - Je;
            D.push(ia(Ce(Je + va % co, 0))), Oe = X(va / co);
          }
          D.push(ia(Ce(Oe, 0))), te = ra(G, Me, ie === Ee), G = 0, ++ie;
        }
        ++G, ++$;
      }
      return D.join("");
    };
    return t = { version: "2.3.1", ucs2: { decode: wa, encode: ht }, decode: We, encode: ja, toASCII: function(S) {
      return ue(S, function(D) {
        return $a.test(D) ? "xn--" + ja(D) : D;
      });
    }, toUnicode: function(S) {
      return ue(S, function(D) {
        return sa.test(D) ? We(D.slice(4).toLowerCase()) : D;
      });
    } }, t;
  }
  var n = s();
  const i = e(n), r = ["ac", "com.ac", "edu.ac", "gov.ac", "mil.ac", "net.ac", "org.ac", "ad", "ae", "ac.ae", "co.ae", "gov.ae", "mil.ae", "net.ae", "org.ae", "sch.ae", "aero", "airline.aero", "airport.aero", "accident-investigation.aero", "accident-prevention.aero", "aerobatic.aero", "aeroclub.aero", "aerodrome.aero", "agents.aero", "air-surveillance.aero", "air-traffic-control.aero", "aircraft.aero", "airtraffic.aero", "ambulance.aero", "association.aero", "author.aero", "ballooning.aero", "broker.aero", "caa.aero", "cargo.aero", "catering.aero", "certification.aero", "championship.aero", "charter.aero", "civilaviation.aero", "club.aero", "conference.aero", "consultant.aero", "consulting.aero", "control.aero", "council.aero", "crew.aero", "design.aero", "dgca.aero", "educator.aero", "emergency.aero", "engine.aero", "engineer.aero", "entertainment.aero", "equipment.aero", "exchange.aero", "express.aero", "federation.aero", "flight.aero", "freight.aero", "fuel.aero", "gliding.aero", "government.aero", "groundhandling.aero", "group.aero", "hanggliding.aero", "homebuilt.aero", "insurance.aero", "journal.aero", "journalist.aero", "leasing.aero", "logistics.aero", "magazine.aero", "maintenance.aero", "marketplace.aero", "media.aero", "microlight.aero", "modelling.aero", "navigation.aero", "parachuting.aero", "paragliding.aero", "passenger-association.aero", "pilot.aero", "press.aero", "production.aero", "recreation.aero", "repbody.aero", "res.aero", "research.aero", "rotorcraft.aero", "safety.aero", "scientist.aero", "services.aero", "show.aero", "skydiving.aero", "software.aero", "student.aero", "taxi.aero", "trader.aero", "trading.aero", "trainer.aero", "union.aero", "workinggroup.aero", "works.aero", "af", "com.af", "edu.af", "gov.af", "net.af", "org.af", "ag", "co.ag", "com.ag", "net.ag", "nom.ag", "org.ag", "ai", "com.ai", "net.ai", "off.ai", "org.ai", "al", "com.al", "edu.al", "gov.al", "mil.al", "net.al", "org.al", "am", "co.am", "com.am", "commune.am", "net.am", "org.am", "ao", "co.ao", "ed.ao", "edu.ao", "gov.ao", "gv.ao", "it.ao", "og.ao", "org.ao", "pb.ao", "aq", "ar", "bet.ar", "com.ar", "coop.ar", "edu.ar", "gob.ar", "gov.ar", "int.ar", "mil.ar", "musica.ar", "mutual.ar", "net.ar", "org.ar", "senasa.ar", "tur.ar", "arpa", "e164.arpa", "home.arpa", "in-addr.arpa", "ip6.arpa", "iris.arpa", "uri.arpa", "urn.arpa", "as", "gov.as", "asia", "at", "ac.at", "sth.ac.at", "co.at", "gv.at", "or.at", "au", "asn.au", "com.au", "edu.au", "gov.au", "id.au", "net.au", "org.au", "conf.au", "oz.au", "act.au", "nsw.au", "nt.au", "qld.au", "sa.au", "tas.au", "vic.au", "wa.au", "act.edu.au", "catholic.edu.au", "nsw.edu.au", "nt.edu.au", "qld.edu.au", "sa.edu.au", "tas.edu.au", "vic.edu.au", "wa.edu.au", "qld.gov.au", "sa.gov.au", "tas.gov.au", "vic.gov.au", "wa.gov.au", "schools.nsw.edu.au", "aw", "com.aw", "ax", "az", "biz.az", "com.az", "edu.az", "gov.az", "info.az", "int.az", "mil.az", "name.az", "net.az", "org.az", "pp.az", "pro.az", "ba", "com.ba", "edu.ba", "gov.ba", "mil.ba", "net.ba", "org.ba", "bb", "biz.bb", "co.bb", "com.bb", "edu.bb", "gov.bb", "info.bb", "net.bb", "org.bb", "store.bb", "tv.bb", "*.bd", "be", "ac.be", "bf", "gov.bf", "bg", "0.bg", "1.bg", "2.bg", "3.bg", "4.bg", "5.bg", "6.bg", "7.bg", "8.bg", "9.bg", "a.bg", "b.bg", "c.bg", "d.bg", "e.bg", "f.bg", "g.bg", "h.bg", "i.bg", "j.bg", "k.bg", "l.bg", "m.bg", "n.bg", "o.bg", "p.bg", "q.bg", "r.bg", "s.bg", "t.bg", "u.bg", "v.bg", "w.bg", "x.bg", "y.bg", "z.bg", "bh", "com.bh", "edu.bh", "gov.bh", "net.bh", "org.bh", "bi", "co.bi", "com.bi", "edu.bi", "or.bi", "org.bi", "biz", "bj", "africa.bj", "agro.bj", "architectes.bj", "assur.bj", "avocats.bj", "co.bj", "com.bj", "eco.bj", "econo.bj", "edu.bj", "info.bj", "loisirs.bj", "money.bj", "net.bj", "org.bj", "ote.bj", "restaurant.bj", "resto.bj", "tourism.bj", "univ.bj", "bm", "com.bm", "edu.bm", "gov.bm", "net.bm", "org.bm", "bn", "com.bn", "edu.bn", "gov.bn", "net.bn", "org.bn", "bo", "com.bo", "edu.bo", "gob.bo", "int.bo", "mil.bo", "net.bo", "org.bo", "tv.bo", "web.bo", "academia.bo", "agro.bo", "arte.bo", "blog.bo", "bolivia.bo", "ciencia.bo", "cooperativa.bo", "democracia.bo", "deporte.bo", "ecologia.bo", "economia.bo", "empresa.bo", "indigena.bo", "industria.bo", "info.bo", "medicina.bo", "movimiento.bo", "musica.bo", "natural.bo", "nombre.bo", "noticias.bo", "patria.bo", "plurinacional.bo", "politica.bo", "profesional.bo", "pueblo.bo", "revista.bo", "salud.bo", "tecnologia.bo", "tksat.bo", "transporte.bo", "wiki.bo", "br", "9guacu.br", "abc.br", "adm.br", "adv.br", "agr.br", "aju.br", "am.br", "anani.br", "aparecida.br", "app.br", "arq.br", "art.br", "ato.br", "b.br", "barueri.br", "belem.br", "bet.br", "bhz.br", "bib.br", "bio.br", "blog.br", "bmd.br", "boavista.br", "bsb.br", "campinagrande.br", "campinas.br", "caxias.br", "cim.br", "cng.br", "cnt.br", "com.br", "contagem.br", "coop.br", "coz.br", "cri.br", "cuiaba.br", "curitiba.br", "def.br", "des.br", "det.br", "dev.br", "ecn.br", "eco.br", "edu.br", "emp.br", "enf.br", "eng.br", "esp.br", "etc.br", "eti.br", "far.br", "feira.br", "flog.br", "floripa.br", "fm.br", "fnd.br", "fortal.br", "fot.br", "foz.br", "fst.br", "g12.br", "geo.br", "ggf.br", "goiania.br", "gov.br", "ac.gov.br", "al.gov.br", "am.gov.br", "ap.gov.br", "ba.gov.br", "ce.gov.br", "df.gov.br", "es.gov.br", "go.gov.br", "ma.gov.br", "mg.gov.br", "ms.gov.br", "mt.gov.br", "pa.gov.br", "pb.gov.br", "pe.gov.br", "pi.gov.br", "pr.gov.br", "rj.gov.br", "rn.gov.br", "ro.gov.br", "rr.gov.br", "rs.gov.br", "sc.gov.br", "se.gov.br", "sp.gov.br", "to.gov.br", "gru.br", "imb.br", "ind.br", "inf.br", "jab.br", "jampa.br", "jdf.br", "joinville.br", "jor.br", "jus.br", "leg.br", "leilao.br", "lel.br", "log.br", "londrina.br", "macapa.br", "maceio.br", "manaus.br", "maringa.br", "mat.br", "med.br", "mil.br", "morena.br", "mp.br", "mus.br", "natal.br", "net.br", "niteroi.br", "*.nom.br", "not.br", "ntr.br", "odo.br", "ong.br", "org.br", "osasco.br", "palmas.br", "poa.br", "ppg.br", "pro.br", "psc.br", "psi.br", "pvh.br", "qsl.br", "radio.br", "rec.br", "recife.br", "rep.br", "ribeirao.br", "rio.br", "riobranco.br", "riopreto.br", "salvador.br", "sampa.br", "santamaria.br", "santoandre.br", "saobernardo.br", "saogonca.br", "seg.br", "sjc.br", "slg.br", "slz.br", "sorocaba.br", "srv.br", "taxi.br", "tc.br", "tec.br", "teo.br", "the.br", "tmp.br", "trd.br", "tur.br", "tv.br", "udi.br", "vet.br", "vix.br", "vlog.br", "wiki.br", "zlg.br", "bs", "com.bs", "edu.bs", "gov.bs", "net.bs", "org.bs", "bt", "com.bt", "edu.bt", "gov.bt", "net.bt", "org.bt", "bv", "bw", "co.bw", "org.bw", "by", "gov.by", "mil.by", "com.by", "of.by", "bz", "co.bz", "com.bz", "edu.bz", "gov.bz", "net.bz", "org.bz", "ca", "ab.ca", "bc.ca", "mb.ca", "nb.ca", "nf.ca", "nl.ca", "ns.ca", "nt.ca", "nu.ca", "on.ca", "pe.ca", "qc.ca", "sk.ca", "yk.ca", "gc.ca", "cat", "cc", "cd", "gov.cd", "cf", "cg", "ch", "ci", "ac.ci", "aéroport.ci", "asso.ci", "co.ci", "com.ci", "ed.ci", "edu.ci", "go.ci", "gouv.ci", "int.ci", "net.ci", "or.ci", "org.ci", "*.ck", "!www.ck", "cl", "co.cl", "gob.cl", "gov.cl", "mil.cl", "cm", "co.cm", "com.cm", "gov.cm", "net.cm", "cn", "ac.cn", "com.cn", "edu.cn", "gov.cn", "mil.cn", "net.cn", "org.cn", "公司.cn", "網絡.cn", "网络.cn", "ah.cn", "bj.cn", "cq.cn", "fj.cn", "gd.cn", "gs.cn", "gx.cn", "gz.cn", "ha.cn", "hb.cn", "he.cn", "hi.cn", "hk.cn", "hl.cn", "hn.cn", "jl.cn", "js.cn", "jx.cn", "ln.cn", "mo.cn", "nm.cn", "nx.cn", "qh.cn", "sc.cn", "sd.cn", "sh.cn", "sn.cn", "sx.cn", "tj.cn", "tw.cn", "xj.cn", "xz.cn", "yn.cn", "zj.cn", "co", "com.co", "edu.co", "gov.co", "mil.co", "net.co", "nom.co", "org.co", "com", "coop", "cr", "ac.cr", "co.cr", "ed.cr", "fi.cr", "go.cr", "or.cr", "sa.cr", "cu", "com.cu", "edu.cu", "gob.cu", "inf.cu", "nat.cu", "net.cu", "org.cu", "cv", "com.cv", "edu.cv", "id.cv", "int.cv", "net.cv", "nome.cv", "org.cv", "publ.cv", "cw", "com.cw", "edu.cw", "net.cw", "org.cw", "cx", "gov.cx", "cy", "ac.cy", "biz.cy", "com.cy", "ekloges.cy", "gov.cy", "ltd.cy", "mil.cy", "net.cy", "org.cy", "press.cy", "pro.cy", "tm.cy", "cz", "de", "dj", "dk", "dm", "co.dm", "com.dm", "edu.dm", "gov.dm", "net.dm", "org.dm", "do", "art.do", "com.do", "edu.do", "gob.do", "gov.do", "mil.do", "net.do", "org.do", "sld.do", "web.do", "dz", "art.dz", "asso.dz", "com.dz", "edu.dz", "gov.dz", "net.dz", "org.dz", "pol.dz", "soc.dz", "tm.dz", "ec", "com.ec", "edu.ec", "fin.ec", "gob.ec", "gov.ec", "info.ec", "k12.ec", "med.ec", "mil.ec", "net.ec", "org.ec", "pro.ec", "edu", "ee", "aip.ee", "com.ee", "edu.ee", "fie.ee", "gov.ee", "lib.ee", "med.ee", "org.ee", "pri.ee", "riik.ee", "eg", "ac.eg", "com.eg", "edu.eg", "eun.eg", "gov.eg", "info.eg", "me.eg", "mil.eg", "name.eg", "net.eg", "org.eg", "sci.eg", "sport.eg", "tv.eg", "*.er", "es", "com.es", "edu.es", "gob.es", "nom.es", "org.es", "et", "biz.et", "com.et", "edu.et", "gov.et", "info.et", "name.et", "net.et", "org.et", "eu", "fi", "aland.fi", "fj", "ac.fj", "biz.fj", "com.fj", "gov.fj", "info.fj", "mil.fj", "name.fj", "net.fj", "org.fj", "pro.fj", "*.fk", "fm", "com.fm", "edu.fm", "net.fm", "org.fm", "fo", "fr", "asso.fr", "com.fr", "gouv.fr", "nom.fr", "prd.fr", "tm.fr", "avoues.fr", "cci.fr", "greta.fr", "huissier-justice.fr", "ga", "gb", "gd", "edu.gd", "gov.gd", "ge", "com.ge", "edu.ge", "gov.ge", "net.ge", "org.ge", "pvt.ge", "school.ge", "gf", "gg", "co.gg", "net.gg", "org.gg", "gh", "com.gh", "edu.gh", "gov.gh", "mil.gh", "org.gh", "gi", "com.gi", "edu.gi", "gov.gi", "ltd.gi", "mod.gi", "org.gi", "gl", "co.gl", "com.gl", "edu.gl", "net.gl", "org.gl", "gm", "gn", "ac.gn", "com.gn", "edu.gn", "gov.gn", "net.gn", "org.gn", "gov", "gp", "asso.gp", "com.gp", "edu.gp", "mobi.gp", "net.gp", "org.gp", "gq", "gr", "com.gr", "edu.gr", "gov.gr", "net.gr", "org.gr", "gs", "gt", "com.gt", "edu.gt", "gob.gt", "ind.gt", "mil.gt", "net.gt", "org.gt", "gu", "com.gu", "edu.gu", "gov.gu", "guam.gu", "info.gu", "net.gu", "org.gu", "web.gu", "gw", "gy", "co.gy", "com.gy", "edu.gy", "gov.gy", "net.gy", "org.gy", "hk", "com.hk", "edu.hk", "gov.hk", "idv.hk", "net.hk", "org.hk", "个人.hk", "個人.hk", "公司.hk", "政府.hk", "敎育.hk", "教育.hk", "箇人.hk", "組織.hk", "組织.hk", "網絡.hk", "網络.hk", "组織.hk", "组织.hk", "网絡.hk", "网络.hk", "hm", "hn", "com.hn", "edu.hn", "gob.hn", "mil.hn", "net.hn", "org.hn", "hr", "com.hr", "from.hr", "iz.hr", "name.hr", "ht", "adult.ht", "art.ht", "asso.ht", "com.ht", "coop.ht", "edu.ht", "firm.ht", "gouv.ht", "info.ht", "med.ht", "net.ht", "org.ht", "perso.ht", "pol.ht", "pro.ht", "rel.ht", "shop.ht", "hu", "2000.hu", "agrar.hu", "bolt.hu", "casino.hu", "city.hu", "co.hu", "erotica.hu", "erotika.hu", "film.hu", "forum.hu", "games.hu", "hotel.hu", "info.hu", "ingatlan.hu", "jogasz.hu", "konyvelo.hu", "lakas.hu", "media.hu", "news.hu", "org.hu", "priv.hu", "reklam.hu", "sex.hu", "shop.hu", "sport.hu", "suli.hu", "szex.hu", "tm.hu", "tozsde.hu", "utazas.hu", "video.hu", "id", "ac.id", "biz.id", "co.id", "desa.id", "go.id", "mil.id", "my.id", "net.id", "or.id", "ponpes.id", "sch.id", "web.id", "ie", "gov.ie", "il", "ac.il", "co.il", "gov.il", "idf.il", "k12.il", "muni.il", "net.il", "org.il", "ישראל", "אקדמיה.ישראל", "ישוב.ישראל", "צהל.ישראל", "ממשל.ישראל", "im", "ac.im", "co.im", "ltd.co.im", "plc.co.im", "com.im", "net.im", "org.im", "tt.im", "tv.im", "in", "5g.in", "6g.in", "ac.in", "ai.in", "am.in", "bihar.in", "biz.in", "business.in", "ca.in", "cn.in", "co.in", "com.in", "coop.in", "cs.in", "delhi.in", "dr.in", "edu.in", "er.in", "firm.in", "gen.in", "gov.in", "gujarat.in", "ind.in", "info.in", "int.in", "internet.in", "io.in", "me.in", "mil.in", "net.in", "nic.in", "org.in", "pg.in", "post.in", "pro.in", "res.in", "travel.in", "tv.in", "uk.in", "up.in", "us.in", "info", "int", "eu.int", "io", "co.io", "com.io", "edu.io", "gov.io", "mil.io", "net.io", "nom.io", "org.io", "iq", "com.iq", "edu.iq", "gov.iq", "mil.iq", "net.iq", "org.iq", "ir", "ac.ir", "co.ir", "gov.ir", "id.ir", "net.ir", "org.ir", "sch.ir", "ایران.ir", "ايران.ir", "is", "it", "edu.it", "gov.it", "abr.it", "abruzzo.it", "aosta-valley.it", "aostavalley.it", "bas.it", "basilicata.it", "cal.it", "calabria.it", "cam.it", "campania.it", "emilia-romagna.it", "emiliaromagna.it", "emr.it", "friuli-v-giulia.it", "friuli-ve-giulia.it", "friuli-vegiulia.it", "friuli-venezia-giulia.it", "friuli-veneziagiulia.it", "friuli-vgiulia.it", "friuliv-giulia.it", "friulive-giulia.it", "friulivegiulia.it", "friulivenezia-giulia.it", "friuliveneziagiulia.it", "friulivgiulia.it", "fvg.it", "laz.it", "lazio.it", "lig.it", "liguria.it", "lom.it", "lombardia.it", "lombardy.it", "lucania.it", "mar.it", "marche.it", "mol.it", "molise.it", "piedmont.it", "piemonte.it", "pmn.it", "pug.it", "puglia.it", "sar.it", "sardegna.it", "sardinia.it", "sic.it", "sicilia.it", "sicily.it", "taa.it", "tos.it", "toscana.it", "trentin-sud-tirol.it", "trentin-süd-tirol.it", "trentin-sudtirol.it", "trentin-südtirol.it", "trentin-sued-tirol.it", "trentin-suedtirol.it", "trentino.it", "trentino-a-adige.it", "trentino-aadige.it", "trentino-alto-adige.it", "trentino-altoadige.it", "trentino-s-tirol.it", "trentino-stirol.it", "trentino-sud-tirol.it", "trentino-süd-tirol.it", "trentino-sudtirol.it", "trentino-südtirol.it", "trentino-sued-tirol.it", "trentino-suedtirol.it", "trentinoa-adige.it", "trentinoaadige.it", "trentinoalto-adige.it", "trentinoaltoadige.it", "trentinos-tirol.it", "trentinostirol.it", "trentinosud-tirol.it", "trentinosüd-tirol.it", "trentinosudtirol.it", "trentinosüdtirol.it", "trentinosued-tirol.it", "trentinosuedtirol.it", "trentinsud-tirol.it", "trentinsüd-tirol.it", "trentinsudtirol.it", "trentinsüdtirol.it", "trentinsued-tirol.it", "trentinsuedtirol.it", "tuscany.it", "umb.it", "umbria.it", "val-d-aosta.it", "val-daosta.it", "vald-aosta.it", "valdaosta.it", "valle-aosta.it", "valle-d-aosta.it", "valle-daosta.it", "valleaosta.it", "valled-aosta.it", "valledaosta.it", "vallee-aoste.it", "vallée-aoste.it", "vallee-d-aoste.it", "vallée-d-aoste.it", "valleeaoste.it", "valléeaoste.it", "valleedaoste.it", "valléedaoste.it", "vao.it", "vda.it", "ven.it", "veneto.it", "ag.it", "agrigento.it", "al.it", "alessandria.it", "alto-adige.it", "altoadige.it", "an.it", "ancona.it", "andria-barletta-trani.it", "andria-trani-barletta.it", "andriabarlettatrani.it", "andriatranibarletta.it", "ao.it", "aosta.it", "aoste.it", "ap.it", "aq.it", "aquila.it", "ar.it", "arezzo.it", "ascoli-piceno.it", "ascolipiceno.it", "asti.it", "at.it", "av.it", "avellino.it", "ba.it", "balsan.it", "balsan-sudtirol.it", "balsan-südtirol.it", "balsan-suedtirol.it", "bari.it", "barletta-trani-andria.it", "barlettatraniandria.it", "belluno.it", "benevento.it", "bergamo.it", "bg.it", "bi.it", "biella.it", "bl.it", "bn.it", "bo.it", "bologna.it", "bolzano.it", "bolzano-altoadige.it", "bozen.it", "bozen-sudtirol.it", "bozen-südtirol.it", "bozen-suedtirol.it", "br.it", "brescia.it", "brindisi.it", "bs.it", "bt.it", "bulsan.it", "bulsan-sudtirol.it", "bulsan-südtirol.it", "bulsan-suedtirol.it", "bz.it", "ca.it", "cagliari.it", "caltanissetta.it", "campidano-medio.it", "campidanomedio.it", "campobasso.it", "carbonia-iglesias.it", "carboniaiglesias.it", "carrara-massa.it", "carraramassa.it", "caserta.it", "catania.it", "catanzaro.it", "cb.it", "ce.it", "cesena-forli.it", "cesena-forlì.it", "cesenaforli.it", "cesenaforlì.it", "ch.it", "chieti.it", "ci.it", "cl.it", "cn.it", "co.it", "como.it", "cosenza.it", "cr.it", "cremona.it", "crotone.it", "cs.it", "ct.it", "cuneo.it", "cz.it", "dell-ogliastra.it", "dellogliastra.it", "en.it", "enna.it", "fc.it", "fe.it", "fermo.it", "ferrara.it", "fg.it", "fi.it", "firenze.it", "florence.it", "fm.it", "foggia.it", "forli-cesena.it", "forlì-cesena.it", "forlicesena.it", "forlìcesena.it", "fr.it", "frosinone.it", "ge.it", "genoa.it", "genova.it", "go.it", "gorizia.it", "gr.it", "grosseto.it", "iglesias-carbonia.it", "iglesiascarbonia.it", "im.it", "imperia.it", "is.it", "isernia.it", "kr.it", "la-spezia.it", "laquila.it", "laspezia.it", "latina.it", "lc.it", "le.it", "lecce.it", "lecco.it", "li.it", "livorno.it", "lo.it", "lodi.it", "lt.it", "lu.it", "lucca.it", "macerata.it", "mantova.it", "massa-carrara.it", "massacarrara.it", "matera.it", "mb.it", "mc.it", "me.it", "medio-campidano.it", "mediocampidano.it", "messina.it", "mi.it", "milan.it", "milano.it", "mn.it", "mo.it", "modena.it", "monza.it", "monza-brianza.it", "monza-e-della-brianza.it", "monzabrianza.it", "monzaebrianza.it", "monzaedellabrianza.it", "ms.it", "mt.it", "na.it", "naples.it", "napoli.it", "no.it", "novara.it", "nu.it", "nuoro.it", "og.it", "ogliastra.it", "olbia-tempio.it", "olbiatempio.it", "or.it", "oristano.it", "ot.it", "pa.it", "padova.it", "padua.it", "palermo.it", "parma.it", "pavia.it", "pc.it", "pd.it", "pe.it", "perugia.it", "pesaro-urbino.it", "pesarourbino.it", "pescara.it", "pg.it", "pi.it", "piacenza.it", "pisa.it", "pistoia.it", "pn.it", "po.it", "pordenone.it", "potenza.it", "pr.it", "prato.it", "pt.it", "pu.it", "pv.it", "pz.it", "ra.it", "ragusa.it", "ravenna.it", "rc.it", "re.it", "reggio-calabria.it", "reggio-emilia.it", "reggiocalabria.it", "reggioemilia.it", "rg.it", "ri.it", "rieti.it", "rimini.it", "rm.it", "rn.it", "ro.it", "roma.it", "rome.it", "rovigo.it", "sa.it", "salerno.it", "sassari.it", "savona.it", "si.it", "siena.it", "siracusa.it", "so.it", "sondrio.it", "sp.it", "sr.it", "ss.it", "südtirol.it", "suedtirol.it", "sv.it", "ta.it", "taranto.it", "te.it", "tempio-olbia.it", "tempioolbia.it", "teramo.it", "terni.it", "tn.it", "to.it", "torino.it", "tp.it", "tr.it", "trani-andria-barletta.it", "trani-barletta-andria.it", "traniandriabarletta.it", "tranibarlettaandria.it", "trapani.it", "trento.it", "treviso.it", "trieste.it", "ts.it", "turin.it", "tv.it", "ud.it", "udine.it", "urbino-pesaro.it", "urbinopesaro.it", "va.it", "varese.it", "vb.it", "vc.it", "ve.it", "venezia.it", "venice.it", "verbania.it", "vercelli.it", "verona.it", "vi.it", "vibo-valentia.it", "vibovalentia.it", "vicenza.it", "viterbo.it", "vr.it", "vs.it", "vt.it", "vv.it", "je", "co.je", "net.je", "org.je", "*.jm", "jo", "agri.jo", "ai.jo", "com.jo", "edu.jo", "eng.jo", "fm.jo", "gov.jo", "mil.jo", "net.jo", "org.jo", "per.jo", "phd.jo", "sch.jo", "tv.jo", "jobs", "jp", "ac.jp", "ad.jp", "co.jp", "ed.jp", "go.jp", "gr.jp", "lg.jp", "ne.jp", "or.jp", "aichi.jp", "akita.jp", "aomori.jp", "chiba.jp", "ehime.jp", "fukui.jp", "fukuoka.jp", "fukushima.jp", "gifu.jp", "gunma.jp", "hiroshima.jp", "hokkaido.jp", "hyogo.jp", "ibaraki.jp", "ishikawa.jp", "iwate.jp", "kagawa.jp", "kagoshima.jp", "kanagawa.jp", "kochi.jp", "kumamoto.jp", "kyoto.jp", "mie.jp", "miyagi.jp", "miyazaki.jp", "nagano.jp", "nagasaki.jp", "nara.jp", "niigata.jp", "oita.jp", "okayama.jp", "okinawa.jp", "osaka.jp", "saga.jp", "saitama.jp", "shiga.jp", "shimane.jp", "shizuoka.jp", "tochigi.jp", "tokushima.jp", "tokyo.jp", "tottori.jp", "toyama.jp", "wakayama.jp", "yamagata.jp", "yamaguchi.jp", "yamanashi.jp", "三重.jp", "京都.jp", "佐賀.jp", "兵庫.jp", "北海道.jp", "千葉.jp", "和歌山.jp", "埼玉.jp", "大分.jp", "大阪.jp", "奈良.jp", "宮城.jp", "宮崎.jp", "富山.jp", "山口.jp", "山形.jp", "山梨.jp", "岐阜.jp", "岡山.jp", "岩手.jp", "島根.jp", "広島.jp", "徳島.jp", "愛媛.jp", "愛知.jp", "新潟.jp", "東京.jp", "栃木.jp", "沖縄.jp", "滋賀.jp", "熊本.jp", "石川.jp", "神奈川.jp", "福井.jp", "福岡.jp", "福島.jp", "秋田.jp", "群馬.jp", "茨城.jp", "長崎.jp", "長野.jp", "青森.jp", "静岡.jp", "香川.jp", "高知.jp", "鳥取.jp", "鹿児島.jp", "*.kawasaki.jp", "!city.kawasaki.jp", "*.kitakyushu.jp", "!city.kitakyushu.jp", "*.kobe.jp", "!city.kobe.jp", "*.nagoya.jp", "!city.nagoya.jp", "*.sapporo.jp", "!city.sapporo.jp", "*.sendai.jp", "!city.sendai.jp", "*.yokohama.jp", "!city.yokohama.jp", "aisai.aichi.jp", "ama.aichi.jp", "anjo.aichi.jp", "asuke.aichi.jp", "chiryu.aichi.jp", "chita.aichi.jp", "fuso.aichi.jp", "gamagori.aichi.jp", "handa.aichi.jp", "hazu.aichi.jp", "hekinan.aichi.jp", "higashiura.aichi.jp", "ichinomiya.aichi.jp", "inazawa.aichi.jp", "inuyama.aichi.jp", "isshiki.aichi.jp", "iwakura.aichi.jp", "kanie.aichi.jp", "kariya.aichi.jp", "kasugai.aichi.jp", "kira.aichi.jp", "kiyosu.aichi.jp", "komaki.aichi.jp", "konan.aichi.jp", "kota.aichi.jp", "mihama.aichi.jp", "miyoshi.aichi.jp", "nishio.aichi.jp", "nisshin.aichi.jp", "obu.aichi.jp", "oguchi.aichi.jp", "oharu.aichi.jp", "okazaki.aichi.jp", "owariasahi.aichi.jp", "seto.aichi.jp", "shikatsu.aichi.jp", "shinshiro.aichi.jp", "shitara.aichi.jp", "tahara.aichi.jp", "takahama.aichi.jp", "tobishima.aichi.jp", "toei.aichi.jp", "togo.aichi.jp", "tokai.aichi.jp", "tokoname.aichi.jp", "toyoake.aichi.jp", "toyohashi.aichi.jp", "toyokawa.aichi.jp", "toyone.aichi.jp", "toyota.aichi.jp", "tsushima.aichi.jp", "yatomi.aichi.jp", "akita.akita.jp", "daisen.akita.jp", "fujisato.akita.jp", "gojome.akita.jp", "hachirogata.akita.jp", "happou.akita.jp", "higashinaruse.akita.jp", "honjo.akita.jp", "honjyo.akita.jp", "ikawa.akita.jp", "kamikoani.akita.jp", "kamioka.akita.jp", "katagami.akita.jp", "kazuno.akita.jp", "kitaakita.akita.jp", "kosaka.akita.jp", "kyowa.akita.jp", "misato.akita.jp", "mitane.akita.jp", "moriyoshi.akita.jp", "nikaho.akita.jp", "noshiro.akita.jp", "odate.akita.jp", "oga.akita.jp", "ogata.akita.jp", "semboku.akita.jp", "yokote.akita.jp", "yurihonjo.akita.jp", "aomori.aomori.jp", "gonohe.aomori.jp", "hachinohe.aomori.jp", "hashikami.aomori.jp", "hiranai.aomori.jp", "hirosaki.aomori.jp", "itayanagi.aomori.jp", "kuroishi.aomori.jp", "misawa.aomori.jp", "mutsu.aomori.jp", "nakadomari.aomori.jp", "noheji.aomori.jp", "oirase.aomori.jp", "owani.aomori.jp", "rokunohe.aomori.jp", "sannohe.aomori.jp", "shichinohe.aomori.jp", "shingo.aomori.jp", "takko.aomori.jp", "towada.aomori.jp", "tsugaru.aomori.jp", "tsuruta.aomori.jp", "abiko.chiba.jp", "asahi.chiba.jp", "chonan.chiba.jp", "chosei.chiba.jp", "choshi.chiba.jp", "chuo.chiba.jp", "funabashi.chiba.jp", "futtsu.chiba.jp", "hanamigawa.chiba.jp", "ichihara.chiba.jp", "ichikawa.chiba.jp", "ichinomiya.chiba.jp", "inzai.chiba.jp", "isumi.chiba.jp", "kamagaya.chiba.jp", "kamogawa.chiba.jp", "kashiwa.chiba.jp", "katori.chiba.jp", "katsuura.chiba.jp", "kimitsu.chiba.jp", "kisarazu.chiba.jp", "kozaki.chiba.jp", "kujukuri.chiba.jp", "kyonan.chiba.jp", "matsudo.chiba.jp", "midori.chiba.jp", "mihama.chiba.jp", "minamiboso.chiba.jp", "mobara.chiba.jp", "mutsuzawa.chiba.jp", "nagara.chiba.jp", "nagareyama.chiba.jp", "narashino.chiba.jp", "narita.chiba.jp", "noda.chiba.jp", "oamishirasato.chiba.jp", "omigawa.chiba.jp", "onjuku.chiba.jp", "otaki.chiba.jp", "sakae.chiba.jp", "sakura.chiba.jp", "shimofusa.chiba.jp", "shirako.chiba.jp", "shiroi.chiba.jp", "shisui.chiba.jp", "sodegaura.chiba.jp", "sosa.chiba.jp", "tako.chiba.jp", "tateyama.chiba.jp", "togane.chiba.jp", "tohnosho.chiba.jp", "tomisato.chiba.jp", "urayasu.chiba.jp", "yachimata.chiba.jp", "yachiyo.chiba.jp", "yokaichiba.chiba.jp", "yokoshibahikari.chiba.jp", "yotsukaido.chiba.jp", "ainan.ehime.jp", "honai.ehime.jp", "ikata.ehime.jp", "imabari.ehime.jp", "iyo.ehime.jp", "kamijima.ehime.jp", "kihoku.ehime.jp", "kumakogen.ehime.jp", "masaki.ehime.jp", "matsuno.ehime.jp", "matsuyama.ehime.jp", "namikata.ehime.jp", "niihama.ehime.jp", "ozu.ehime.jp", "saijo.ehime.jp", "seiyo.ehime.jp", "shikokuchuo.ehime.jp", "tobe.ehime.jp", "toon.ehime.jp", "uchiko.ehime.jp", "uwajima.ehime.jp", "yawatahama.ehime.jp", "echizen.fukui.jp", "eiheiji.fukui.jp", "fukui.fukui.jp", "ikeda.fukui.jp", "katsuyama.fukui.jp", "mihama.fukui.jp", "minamiechizen.fukui.jp", "obama.fukui.jp", "ohi.fukui.jp", "ono.fukui.jp", "sabae.fukui.jp", "sakai.fukui.jp", "takahama.fukui.jp", "tsuruga.fukui.jp", "wakasa.fukui.jp", "ashiya.fukuoka.jp", "buzen.fukuoka.jp", "chikugo.fukuoka.jp", "chikuho.fukuoka.jp", "chikujo.fukuoka.jp", "chikushino.fukuoka.jp", "chikuzen.fukuoka.jp", "chuo.fukuoka.jp", "dazaifu.fukuoka.jp", "fukuchi.fukuoka.jp", "hakata.fukuoka.jp", "higashi.fukuoka.jp", "hirokawa.fukuoka.jp", "hisayama.fukuoka.jp", "iizuka.fukuoka.jp", "inatsuki.fukuoka.jp", "kaho.fukuoka.jp", "kasuga.fukuoka.jp", "kasuya.fukuoka.jp", "kawara.fukuoka.jp", "keisen.fukuoka.jp", "koga.fukuoka.jp", "kurate.fukuoka.jp", "kurogi.fukuoka.jp", "kurume.fukuoka.jp", "minami.fukuoka.jp", "miyako.fukuoka.jp", "miyama.fukuoka.jp", "miyawaka.fukuoka.jp", "mizumaki.fukuoka.jp", "munakata.fukuoka.jp", "nakagawa.fukuoka.jp", "nakama.fukuoka.jp", "nishi.fukuoka.jp", "nogata.fukuoka.jp", "ogori.fukuoka.jp", "okagaki.fukuoka.jp", "okawa.fukuoka.jp", "oki.fukuoka.jp", "omuta.fukuoka.jp", "onga.fukuoka.jp", "onojo.fukuoka.jp", "oto.fukuoka.jp", "saigawa.fukuoka.jp", "sasaguri.fukuoka.jp", "shingu.fukuoka.jp", "shinyoshitomi.fukuoka.jp", "shonai.fukuoka.jp", "soeda.fukuoka.jp", "sue.fukuoka.jp", "tachiarai.fukuoka.jp", "tagawa.fukuoka.jp", "takata.fukuoka.jp", "toho.fukuoka.jp", "toyotsu.fukuoka.jp", "tsuiki.fukuoka.jp", "ukiha.fukuoka.jp", "umi.fukuoka.jp", "usui.fukuoka.jp", "yamada.fukuoka.jp", "yame.fukuoka.jp", "yanagawa.fukuoka.jp", "yukuhashi.fukuoka.jp", "aizubange.fukushima.jp", "aizumisato.fukushima.jp", "aizuwakamatsu.fukushima.jp", "asakawa.fukushima.jp", "bandai.fukushima.jp", "date.fukushima.jp", "fukushima.fukushima.jp", "furudono.fukushima.jp", "futaba.fukushima.jp", "hanawa.fukushima.jp", "higashi.fukushima.jp", "hirata.fukushima.jp", "hirono.fukushima.jp", "iitate.fukushima.jp", "inawashiro.fukushima.jp", "ishikawa.fukushima.jp", "iwaki.fukushima.jp", "izumizaki.fukushima.jp", "kagamiishi.fukushima.jp", "kaneyama.fukushima.jp", "kawamata.fukushima.jp", "kitakata.fukushima.jp", "kitashiobara.fukushima.jp", "koori.fukushima.jp", "koriyama.fukushima.jp", "kunimi.fukushima.jp", "miharu.fukushima.jp", "mishima.fukushima.jp", "namie.fukushima.jp", "nango.fukushima.jp", "nishiaizu.fukushima.jp", "nishigo.fukushima.jp", "okuma.fukushima.jp", "omotego.fukushima.jp", "ono.fukushima.jp", "otama.fukushima.jp", "samegawa.fukushima.jp", "shimogo.fukushima.jp", "shirakawa.fukushima.jp", "showa.fukushima.jp", "soma.fukushima.jp", "sukagawa.fukushima.jp", "taishin.fukushima.jp", "tamakawa.fukushima.jp", "tanagura.fukushima.jp", "tenei.fukushima.jp", "yabuki.fukushima.jp", "yamato.fukushima.jp", "yamatsuri.fukushima.jp", "yanaizu.fukushima.jp", "yugawa.fukushima.jp", "anpachi.gifu.jp", "ena.gifu.jp", "gifu.gifu.jp", "ginan.gifu.jp", "godo.gifu.jp", "gujo.gifu.jp", "hashima.gifu.jp", "hichiso.gifu.jp", "hida.gifu.jp", "higashishirakawa.gifu.jp", "ibigawa.gifu.jp", "ikeda.gifu.jp", "kakamigahara.gifu.jp", "kani.gifu.jp", "kasahara.gifu.jp", "kasamatsu.gifu.jp", "kawaue.gifu.jp", "kitagata.gifu.jp", "mino.gifu.jp", "minokamo.gifu.jp", "mitake.gifu.jp", "mizunami.gifu.jp", "motosu.gifu.jp", "nakatsugawa.gifu.jp", "ogaki.gifu.jp", "sakahogi.gifu.jp", "seki.gifu.jp", "sekigahara.gifu.jp", "shirakawa.gifu.jp", "tajimi.gifu.jp", "takayama.gifu.jp", "tarui.gifu.jp", "toki.gifu.jp", "tomika.gifu.jp", "wanouchi.gifu.jp", "yamagata.gifu.jp", "yaotsu.gifu.jp", "yoro.gifu.jp", "annaka.gunma.jp", "chiyoda.gunma.jp", "fujioka.gunma.jp", "higashiagatsuma.gunma.jp", "isesaki.gunma.jp", "itakura.gunma.jp", "kanna.gunma.jp", "kanra.gunma.jp", "katashina.gunma.jp", "kawaba.gunma.jp", "kiryu.gunma.jp", "kusatsu.gunma.jp", "maebashi.gunma.jp", "meiwa.gunma.jp", "midori.gunma.jp", "minakami.gunma.jp", "naganohara.gunma.jp", "nakanojo.gunma.jp", "nanmoku.gunma.jp", "numata.gunma.jp", "oizumi.gunma.jp", "ora.gunma.jp", "ota.gunma.jp", "shibukawa.gunma.jp", "shimonita.gunma.jp", "shinto.gunma.jp", "showa.gunma.jp", "takasaki.gunma.jp", "takayama.gunma.jp", "tamamura.gunma.jp", "tatebayashi.gunma.jp", "tomioka.gunma.jp", "tsukiyono.gunma.jp", "tsumagoi.gunma.jp", "ueno.gunma.jp", "yoshioka.gunma.jp", "asaminami.hiroshima.jp", "daiwa.hiroshima.jp", "etajima.hiroshima.jp", "fuchu.hiroshima.jp", "fukuyama.hiroshima.jp", "hatsukaichi.hiroshima.jp", "higashihiroshima.hiroshima.jp", "hongo.hiroshima.jp", "jinsekikogen.hiroshima.jp", "kaita.hiroshima.jp", "kui.hiroshima.jp", "kumano.hiroshima.jp", "kure.hiroshima.jp", "mihara.hiroshima.jp", "miyoshi.hiroshima.jp", "naka.hiroshima.jp", "onomichi.hiroshima.jp", "osakikamijima.hiroshima.jp", "otake.hiroshima.jp", "saka.hiroshima.jp", "sera.hiroshima.jp", "seranishi.hiroshima.jp", "shinichi.hiroshima.jp", "shobara.hiroshima.jp", "takehara.hiroshima.jp", "abashiri.hokkaido.jp", "abira.hokkaido.jp", "aibetsu.hokkaido.jp", "akabira.hokkaido.jp", "akkeshi.hokkaido.jp", "asahikawa.hokkaido.jp", "ashibetsu.hokkaido.jp", "ashoro.hokkaido.jp", "assabu.hokkaido.jp", "atsuma.hokkaido.jp", "bibai.hokkaido.jp", "biei.hokkaido.jp", "bifuka.hokkaido.jp", "bihoro.hokkaido.jp", "biratori.hokkaido.jp", "chippubetsu.hokkaido.jp", "chitose.hokkaido.jp", "date.hokkaido.jp", "ebetsu.hokkaido.jp", "embetsu.hokkaido.jp", "eniwa.hokkaido.jp", "erimo.hokkaido.jp", "esan.hokkaido.jp", "esashi.hokkaido.jp", "fukagawa.hokkaido.jp", "fukushima.hokkaido.jp", "furano.hokkaido.jp", "furubira.hokkaido.jp", "haboro.hokkaido.jp", "hakodate.hokkaido.jp", "hamatonbetsu.hokkaido.jp", "hidaka.hokkaido.jp", "higashikagura.hokkaido.jp", "higashikawa.hokkaido.jp", "hiroo.hokkaido.jp", "hokuryu.hokkaido.jp", "hokuto.hokkaido.jp", "honbetsu.hokkaido.jp", "horokanai.hokkaido.jp", "horonobe.hokkaido.jp", "ikeda.hokkaido.jp", "imakane.hokkaido.jp", "ishikari.hokkaido.jp", "iwamizawa.hokkaido.jp", "iwanai.hokkaido.jp", "kamifurano.hokkaido.jp", "kamikawa.hokkaido.jp", "kamishihoro.hokkaido.jp", "kamisunagawa.hokkaido.jp", "kamoenai.hokkaido.jp", "kayabe.hokkaido.jp", "kembuchi.hokkaido.jp", "kikonai.hokkaido.jp", "kimobetsu.hokkaido.jp", "kitahiroshima.hokkaido.jp", "kitami.hokkaido.jp", "kiyosato.hokkaido.jp", "koshimizu.hokkaido.jp", "kunneppu.hokkaido.jp", "kuriyama.hokkaido.jp", "kuromatsunai.hokkaido.jp", "kushiro.hokkaido.jp", "kutchan.hokkaido.jp", "kyowa.hokkaido.jp", "mashike.hokkaido.jp", "matsumae.hokkaido.jp", "mikasa.hokkaido.jp", "minamifurano.hokkaido.jp", "mombetsu.hokkaido.jp", "moseushi.hokkaido.jp", "mukawa.hokkaido.jp", "muroran.hokkaido.jp", "naie.hokkaido.jp", "nakagawa.hokkaido.jp", "nakasatsunai.hokkaido.jp", "nakatombetsu.hokkaido.jp", "nanae.hokkaido.jp", "nanporo.hokkaido.jp", "nayoro.hokkaido.jp", "nemuro.hokkaido.jp", "niikappu.hokkaido.jp", "niki.hokkaido.jp", "nishiokoppe.hokkaido.jp", "noboribetsu.hokkaido.jp", "numata.hokkaido.jp", "obihiro.hokkaido.jp", "obira.hokkaido.jp", "oketo.hokkaido.jp", "okoppe.hokkaido.jp", "otaru.hokkaido.jp", "otobe.hokkaido.jp", "otofuke.hokkaido.jp", "otoineppu.hokkaido.jp", "oumu.hokkaido.jp", "ozora.hokkaido.jp", "pippu.hokkaido.jp", "rankoshi.hokkaido.jp", "rebun.hokkaido.jp", "rikubetsu.hokkaido.jp", "rishiri.hokkaido.jp", "rishirifuji.hokkaido.jp", "saroma.hokkaido.jp", "sarufutsu.hokkaido.jp", "shakotan.hokkaido.jp", "shari.hokkaido.jp", "shibecha.hokkaido.jp", "shibetsu.hokkaido.jp", "shikabe.hokkaido.jp", "shikaoi.hokkaido.jp", "shimamaki.hokkaido.jp", "shimizu.hokkaido.jp", "shimokawa.hokkaido.jp", "shinshinotsu.hokkaido.jp", "shintoku.hokkaido.jp", "shiranuka.hokkaido.jp", "shiraoi.hokkaido.jp", "shiriuchi.hokkaido.jp", "sobetsu.hokkaido.jp", "sunagawa.hokkaido.jp", "taiki.hokkaido.jp", "takasu.hokkaido.jp", "takikawa.hokkaido.jp", "takinoue.hokkaido.jp", "teshikaga.hokkaido.jp", "tobetsu.hokkaido.jp", "tohma.hokkaido.jp", "tomakomai.hokkaido.jp", "tomari.hokkaido.jp", "toya.hokkaido.jp", "toyako.hokkaido.jp", "toyotomi.hokkaido.jp", "toyoura.hokkaido.jp", "tsubetsu.hokkaido.jp", "tsukigata.hokkaido.jp", "urakawa.hokkaido.jp", "urausu.hokkaido.jp", "uryu.hokkaido.jp", "utashinai.hokkaido.jp", "wakkanai.hokkaido.jp", "wassamu.hokkaido.jp", "yakumo.hokkaido.jp", "yoichi.hokkaido.jp", "aioi.hyogo.jp", "akashi.hyogo.jp", "ako.hyogo.jp", "amagasaki.hyogo.jp", "aogaki.hyogo.jp", "asago.hyogo.jp", "ashiya.hyogo.jp", "awaji.hyogo.jp", "fukusaki.hyogo.jp", "goshiki.hyogo.jp", "harima.hyogo.jp", "himeji.hyogo.jp", "ichikawa.hyogo.jp", "inagawa.hyogo.jp", "itami.hyogo.jp", "kakogawa.hyogo.jp", "kamigori.hyogo.jp", "kamikawa.hyogo.jp", "kasai.hyogo.jp", "kasuga.hyogo.jp", "kawanishi.hyogo.jp", "miki.hyogo.jp", "minamiawaji.hyogo.jp", "nishinomiya.hyogo.jp", "nishiwaki.hyogo.jp", "ono.hyogo.jp", "sanda.hyogo.jp", "sannan.hyogo.jp", "sasayama.hyogo.jp", "sayo.hyogo.jp", "shingu.hyogo.jp", "shinonsen.hyogo.jp", "shiso.hyogo.jp", "sumoto.hyogo.jp", "taishi.hyogo.jp", "taka.hyogo.jp", "takarazuka.hyogo.jp", "takasago.hyogo.jp", "takino.hyogo.jp", "tamba.hyogo.jp", "tatsuno.hyogo.jp", "toyooka.hyogo.jp", "yabu.hyogo.jp", "yashiro.hyogo.jp", "yoka.hyogo.jp", "yokawa.hyogo.jp", "ami.ibaraki.jp", "asahi.ibaraki.jp", "bando.ibaraki.jp", "chikusei.ibaraki.jp", "daigo.ibaraki.jp", "fujishiro.ibaraki.jp", "hitachi.ibaraki.jp", "hitachinaka.ibaraki.jp", "hitachiomiya.ibaraki.jp", "hitachiota.ibaraki.jp", "ibaraki.ibaraki.jp", "ina.ibaraki.jp", "inashiki.ibaraki.jp", "itako.ibaraki.jp", "iwama.ibaraki.jp", "joso.ibaraki.jp", "kamisu.ibaraki.jp", "kasama.ibaraki.jp", "kashima.ibaraki.jp", "kasumigaura.ibaraki.jp", "koga.ibaraki.jp", "miho.ibaraki.jp", "mito.ibaraki.jp", "moriya.ibaraki.jp", "naka.ibaraki.jp", "namegata.ibaraki.jp", "oarai.ibaraki.jp", "ogawa.ibaraki.jp", "omitama.ibaraki.jp", "ryugasaki.ibaraki.jp", "sakai.ibaraki.jp", "sakuragawa.ibaraki.jp", "shimodate.ibaraki.jp", "shimotsuma.ibaraki.jp", "shirosato.ibaraki.jp", "sowa.ibaraki.jp", "suifu.ibaraki.jp", "takahagi.ibaraki.jp", "tamatsukuri.ibaraki.jp", "tokai.ibaraki.jp", "tomobe.ibaraki.jp", "tone.ibaraki.jp", "toride.ibaraki.jp", "tsuchiura.ibaraki.jp", "tsukuba.ibaraki.jp", "uchihara.ibaraki.jp", "ushiku.ibaraki.jp", "yachiyo.ibaraki.jp", "yamagata.ibaraki.jp", "yawara.ibaraki.jp", "yuki.ibaraki.jp", "anamizu.ishikawa.jp", "hakui.ishikawa.jp", "hakusan.ishikawa.jp", "kaga.ishikawa.jp", "kahoku.ishikawa.jp", "kanazawa.ishikawa.jp", "kawakita.ishikawa.jp", "komatsu.ishikawa.jp", "nakanoto.ishikawa.jp", "nanao.ishikawa.jp", "nomi.ishikawa.jp", "nonoichi.ishikawa.jp", "noto.ishikawa.jp", "shika.ishikawa.jp", "suzu.ishikawa.jp", "tsubata.ishikawa.jp", "tsurugi.ishikawa.jp", "uchinada.ishikawa.jp", "wajima.ishikawa.jp", "fudai.iwate.jp", "fujisawa.iwate.jp", "hanamaki.iwate.jp", "hiraizumi.iwate.jp", "hirono.iwate.jp", "ichinohe.iwate.jp", "ichinoseki.iwate.jp", "iwaizumi.iwate.jp", "iwate.iwate.jp", "joboji.iwate.jp", "kamaishi.iwate.jp", "kanegasaki.iwate.jp", "karumai.iwate.jp", "kawai.iwate.jp", "kitakami.iwate.jp", "kuji.iwate.jp", "kunohe.iwate.jp", "kuzumaki.iwate.jp", "miyako.iwate.jp", "mizusawa.iwate.jp", "morioka.iwate.jp", "ninohe.iwate.jp", "noda.iwate.jp", "ofunato.iwate.jp", "oshu.iwate.jp", "otsuchi.iwate.jp", "rikuzentakata.iwate.jp", "shiwa.iwate.jp", "shizukuishi.iwate.jp", "sumita.iwate.jp", "tanohata.iwate.jp", "tono.iwate.jp", "yahaba.iwate.jp", "yamada.iwate.jp", "ayagawa.kagawa.jp", "higashikagawa.kagawa.jp", "kanonji.kagawa.jp", "kotohira.kagawa.jp", "manno.kagawa.jp", "marugame.kagawa.jp", "mitoyo.kagawa.jp", "naoshima.kagawa.jp", "sanuki.kagawa.jp", "tadotsu.kagawa.jp", "takamatsu.kagawa.jp", "tonosho.kagawa.jp", "uchinomi.kagawa.jp", "utazu.kagawa.jp", "zentsuji.kagawa.jp", "akune.kagoshima.jp", "amami.kagoshima.jp", "hioki.kagoshima.jp", "isa.kagoshima.jp", "isen.kagoshima.jp", "izumi.kagoshima.jp", "kagoshima.kagoshima.jp", "kanoya.kagoshima.jp", "kawanabe.kagoshima.jp", "kinko.kagoshima.jp", "kouyama.kagoshima.jp", "makurazaki.kagoshima.jp", "matsumoto.kagoshima.jp", "minamitane.kagoshima.jp", "nakatane.kagoshima.jp", "nishinoomote.kagoshima.jp", "satsumasendai.kagoshima.jp", "soo.kagoshima.jp", "tarumizu.kagoshima.jp", "yusui.kagoshima.jp", "aikawa.kanagawa.jp", "atsugi.kanagawa.jp", "ayase.kanagawa.jp", "chigasaki.kanagawa.jp", "ebina.kanagawa.jp", "fujisawa.kanagawa.jp", "hadano.kanagawa.jp", "hakone.kanagawa.jp", "hiratsuka.kanagawa.jp", "isehara.kanagawa.jp", "kaisei.kanagawa.jp", "kamakura.kanagawa.jp", "kiyokawa.kanagawa.jp", "matsuda.kanagawa.jp", "minamiashigara.kanagawa.jp", "miura.kanagawa.jp", "nakai.kanagawa.jp", "ninomiya.kanagawa.jp", "odawara.kanagawa.jp", "oi.kanagawa.jp", "oiso.kanagawa.jp", "sagamihara.kanagawa.jp", "samukawa.kanagawa.jp", "tsukui.kanagawa.jp", "yamakita.kanagawa.jp", "yamato.kanagawa.jp", "yokosuka.kanagawa.jp", "yugawara.kanagawa.jp", "zama.kanagawa.jp", "zushi.kanagawa.jp", "aki.kochi.jp", "geisei.kochi.jp", "hidaka.kochi.jp", "higashitsuno.kochi.jp", "ino.kochi.jp", "kagami.kochi.jp", "kami.kochi.jp", "kitagawa.kochi.jp", "kochi.kochi.jp", "mihara.kochi.jp", "motoyama.kochi.jp", "muroto.kochi.jp", "nahari.kochi.jp", "nakamura.kochi.jp", "nankoku.kochi.jp", "nishitosa.kochi.jp", "niyodogawa.kochi.jp", "ochi.kochi.jp", "okawa.kochi.jp", "otoyo.kochi.jp", "otsuki.kochi.jp", "sakawa.kochi.jp", "sukumo.kochi.jp", "susaki.kochi.jp", "tosa.kochi.jp", "tosashimizu.kochi.jp", "toyo.kochi.jp", "tsuno.kochi.jp", "umaji.kochi.jp", "yasuda.kochi.jp", "yusuhara.kochi.jp", "amakusa.kumamoto.jp", "arao.kumamoto.jp", "aso.kumamoto.jp", "choyo.kumamoto.jp", "gyokuto.kumamoto.jp", "kamiamakusa.kumamoto.jp", "kikuchi.kumamoto.jp", "kumamoto.kumamoto.jp", "mashiki.kumamoto.jp", "mifune.kumamoto.jp", "minamata.kumamoto.jp", "minamioguni.kumamoto.jp", "nagasu.kumamoto.jp", "nishihara.kumamoto.jp", "oguni.kumamoto.jp", "ozu.kumamoto.jp", "sumoto.kumamoto.jp", "takamori.kumamoto.jp", "uki.kumamoto.jp", "uto.kumamoto.jp", "yamaga.kumamoto.jp", "yamato.kumamoto.jp", "yatsushiro.kumamoto.jp", "ayabe.kyoto.jp", "fukuchiyama.kyoto.jp", "higashiyama.kyoto.jp", "ide.kyoto.jp", "ine.kyoto.jp", "joyo.kyoto.jp", "kameoka.kyoto.jp", "kamo.kyoto.jp", "kita.kyoto.jp", "kizu.kyoto.jp", "kumiyama.kyoto.jp", "kyotamba.kyoto.jp", "kyotanabe.kyoto.jp", "kyotango.kyoto.jp", "maizuru.kyoto.jp", "minami.kyoto.jp", "minamiyamashiro.kyoto.jp", "miyazu.kyoto.jp", "muko.kyoto.jp", "nagaokakyo.kyoto.jp", "nakagyo.kyoto.jp", "nantan.kyoto.jp", "oyamazaki.kyoto.jp", "sakyo.kyoto.jp", "seika.kyoto.jp", "tanabe.kyoto.jp", "uji.kyoto.jp", "ujitawara.kyoto.jp", "wazuka.kyoto.jp", "yamashina.kyoto.jp", "yawata.kyoto.jp", "asahi.mie.jp", "inabe.mie.jp", "ise.mie.jp", "kameyama.mie.jp", "kawagoe.mie.jp", "kiho.mie.jp", "kisosaki.mie.jp", "kiwa.mie.jp", "komono.mie.jp", "kumano.mie.jp", "kuwana.mie.jp", "matsusaka.mie.jp", "meiwa.mie.jp", "mihama.mie.jp", "minamiise.mie.jp", "misugi.mie.jp", "miyama.mie.jp", "nabari.mie.jp", "shima.mie.jp", "suzuka.mie.jp", "tado.mie.jp", "taiki.mie.jp", "taki.mie.jp", "tamaki.mie.jp", "toba.mie.jp", "tsu.mie.jp", "udono.mie.jp", "ureshino.mie.jp", "watarai.mie.jp", "yokkaichi.mie.jp", "furukawa.miyagi.jp", "higashimatsushima.miyagi.jp", "ishinomaki.miyagi.jp", "iwanuma.miyagi.jp", "kakuda.miyagi.jp", "kami.miyagi.jp", "kawasaki.miyagi.jp", "marumori.miyagi.jp", "matsushima.miyagi.jp", "minamisanriku.miyagi.jp", "misato.miyagi.jp", "murata.miyagi.jp", "natori.miyagi.jp", "ogawara.miyagi.jp", "ohira.miyagi.jp", "onagawa.miyagi.jp", "osaki.miyagi.jp", "rifu.miyagi.jp", "semine.miyagi.jp", "shibata.miyagi.jp", "shichikashuku.miyagi.jp", "shikama.miyagi.jp", "shiogama.miyagi.jp", "shiroishi.miyagi.jp", "tagajo.miyagi.jp", "taiwa.miyagi.jp", "tome.miyagi.jp", "tomiya.miyagi.jp", "wakuya.miyagi.jp", "watari.miyagi.jp", "yamamoto.miyagi.jp", "zao.miyagi.jp", "aya.miyazaki.jp", "ebino.miyazaki.jp", "gokase.miyazaki.jp", "hyuga.miyazaki.jp", "kadogawa.miyazaki.jp", "kawaminami.miyazaki.jp", "kijo.miyazaki.jp", "kitagawa.miyazaki.jp", "kitakata.miyazaki.jp", "kitaura.miyazaki.jp", "kobayashi.miyazaki.jp", "kunitomi.miyazaki.jp", "kushima.miyazaki.jp", "mimata.miyazaki.jp", "miyakonojo.miyazaki.jp", "miyazaki.miyazaki.jp", "morotsuka.miyazaki.jp", "nichinan.miyazaki.jp", "nishimera.miyazaki.jp", "nobeoka.miyazaki.jp", "saito.miyazaki.jp", "shiiba.miyazaki.jp", "shintomi.miyazaki.jp", "takaharu.miyazaki.jp", "takanabe.miyazaki.jp", "takazaki.miyazaki.jp", "tsuno.miyazaki.jp", "achi.nagano.jp", "agematsu.nagano.jp", "anan.nagano.jp", "aoki.nagano.jp", "asahi.nagano.jp", "azumino.nagano.jp", "chikuhoku.nagano.jp", "chikuma.nagano.jp", "chino.nagano.jp", "fujimi.nagano.jp", "hakuba.nagano.jp", "hara.nagano.jp", "hiraya.nagano.jp", "iida.nagano.jp", "iijima.nagano.jp", "iiyama.nagano.jp", "iizuna.nagano.jp", "ikeda.nagano.jp", "ikusaka.nagano.jp", "ina.nagano.jp", "karuizawa.nagano.jp", "kawakami.nagano.jp", "kiso.nagano.jp", "kisofukushima.nagano.jp", "kitaaiki.nagano.jp", "komagane.nagano.jp", "komoro.nagano.jp", "matsukawa.nagano.jp", "matsumoto.nagano.jp", "miasa.nagano.jp", "minamiaiki.nagano.jp", "minamimaki.nagano.jp", "minamiminowa.nagano.jp", "minowa.nagano.jp", "miyada.nagano.jp", "miyota.nagano.jp", "mochizuki.nagano.jp", "nagano.nagano.jp", "nagawa.nagano.jp", "nagiso.nagano.jp", "nakagawa.nagano.jp", "nakano.nagano.jp", "nozawaonsen.nagano.jp", "obuse.nagano.jp", "ogawa.nagano.jp", "okaya.nagano.jp", "omachi.nagano.jp", "omi.nagano.jp", "ookuwa.nagano.jp", "ooshika.nagano.jp", "otaki.nagano.jp", "otari.nagano.jp", "sakae.nagano.jp", "sakaki.nagano.jp", "saku.nagano.jp", "sakuho.nagano.jp", "shimosuwa.nagano.jp", "shinanomachi.nagano.jp", "shiojiri.nagano.jp", "suwa.nagano.jp", "suzaka.nagano.jp", "takagi.nagano.jp", "takamori.nagano.jp", "takayama.nagano.jp", "tateshina.nagano.jp", "tatsuno.nagano.jp", "togakushi.nagano.jp", "togura.nagano.jp", "tomi.nagano.jp", "ueda.nagano.jp", "wada.nagano.jp", "yamagata.nagano.jp", "yamanouchi.nagano.jp", "yasaka.nagano.jp", "yasuoka.nagano.jp", "chijiwa.nagasaki.jp", "futsu.nagasaki.jp", "goto.nagasaki.jp", "hasami.nagasaki.jp", "hirado.nagasaki.jp", "iki.nagasaki.jp", "isahaya.nagasaki.jp", "kawatana.nagasaki.jp", "kuchinotsu.nagasaki.jp", "matsuura.nagasaki.jp", "nagasaki.nagasaki.jp", "obama.nagasaki.jp", "omura.nagasaki.jp", "oseto.nagasaki.jp", "saikai.nagasaki.jp", "sasebo.nagasaki.jp", "seihi.nagasaki.jp", "shimabara.nagasaki.jp", "shinkamigoto.nagasaki.jp", "togitsu.nagasaki.jp", "tsushima.nagasaki.jp", "unzen.nagasaki.jp", "ando.nara.jp", "gose.nara.jp", "heguri.nara.jp", "higashiyoshino.nara.jp", "ikaruga.nara.jp", "ikoma.nara.jp", "kamikitayama.nara.jp", "kanmaki.nara.jp", "kashiba.nara.jp", "kashihara.nara.jp", "katsuragi.nara.jp", "kawai.nara.jp", "kawakami.nara.jp", "kawanishi.nara.jp", "koryo.nara.jp", "kurotaki.nara.jp", "mitsue.nara.jp", "miyake.nara.jp", "nara.nara.jp", "nosegawa.nara.jp", "oji.nara.jp", "ouda.nara.jp", "oyodo.nara.jp", "sakurai.nara.jp", "sango.nara.jp", "shimoichi.nara.jp", "shimokitayama.nara.jp", "shinjo.nara.jp", "soni.nara.jp", "takatori.nara.jp", "tawaramoto.nara.jp", "tenkawa.nara.jp", "tenri.nara.jp", "uda.nara.jp", "yamatokoriyama.nara.jp", "yamatotakada.nara.jp", "yamazoe.nara.jp", "yoshino.nara.jp", "aga.niigata.jp", "agano.niigata.jp", "gosen.niigata.jp", "itoigawa.niigata.jp", "izumozaki.niigata.jp", "joetsu.niigata.jp", "kamo.niigata.jp", "kariwa.niigata.jp", "kashiwazaki.niigata.jp", "minamiuonuma.niigata.jp", "mitsuke.niigata.jp", "muika.niigata.jp", "murakami.niigata.jp", "myoko.niigata.jp", "nagaoka.niigata.jp", "niigata.niigata.jp", "ojiya.niigata.jp", "omi.niigata.jp", "sado.niigata.jp", "sanjo.niigata.jp", "seiro.niigata.jp", "seirou.niigata.jp", "sekikawa.niigata.jp", "shibata.niigata.jp", "tagami.niigata.jp", "tainai.niigata.jp", "tochio.niigata.jp", "tokamachi.niigata.jp", "tsubame.niigata.jp", "tsunan.niigata.jp", "uonuma.niigata.jp", "yahiko.niigata.jp", "yoita.niigata.jp", "yuzawa.niigata.jp", "beppu.oita.jp", "bungoono.oita.jp", "bungotakada.oita.jp", "hasama.oita.jp", "hiji.oita.jp", "himeshima.oita.jp", "hita.oita.jp", "kamitsue.oita.jp", "kokonoe.oita.jp", "kuju.oita.jp", "kunisaki.oita.jp", "kusu.oita.jp", "oita.oita.jp", "saiki.oita.jp", "taketa.oita.jp", "tsukumi.oita.jp", "usa.oita.jp", "usuki.oita.jp", "yufu.oita.jp", "akaiwa.okayama.jp", "asakuchi.okayama.jp", "bizen.okayama.jp", "hayashima.okayama.jp", "ibara.okayama.jp", "kagamino.okayama.jp", "kasaoka.okayama.jp", "kibichuo.okayama.jp", "kumenan.okayama.jp", "kurashiki.okayama.jp", "maniwa.okayama.jp", "misaki.okayama.jp", "nagi.okayama.jp", "niimi.okayama.jp", "nishiawakura.okayama.jp", "okayama.okayama.jp", "satosho.okayama.jp", "setouchi.okayama.jp", "shinjo.okayama.jp", "shoo.okayama.jp", "soja.okayama.jp", "takahashi.okayama.jp", "tamano.okayama.jp", "tsuyama.okayama.jp", "wake.okayama.jp", "yakage.okayama.jp", "aguni.okinawa.jp", "ginowan.okinawa.jp", "ginoza.okinawa.jp", "gushikami.okinawa.jp", "haebaru.okinawa.jp", "higashi.okinawa.jp", "hirara.okinawa.jp", "iheya.okinawa.jp", "ishigaki.okinawa.jp", "ishikawa.okinawa.jp", "itoman.okinawa.jp", "izena.okinawa.jp", "kadena.okinawa.jp", "kin.okinawa.jp", "kitadaito.okinawa.jp", "kitanakagusuku.okinawa.jp", "kumejima.okinawa.jp", "kunigami.okinawa.jp", "minamidaito.okinawa.jp", "motobu.okinawa.jp", "nago.okinawa.jp", "naha.okinawa.jp", "nakagusuku.okinawa.jp", "nakijin.okinawa.jp", "nanjo.okinawa.jp", "nishihara.okinawa.jp", "ogimi.okinawa.jp", "okinawa.okinawa.jp", "onna.okinawa.jp", "shimoji.okinawa.jp", "taketomi.okinawa.jp", "tarama.okinawa.jp", "tokashiki.okinawa.jp", "tomigusuku.okinawa.jp", "tonaki.okinawa.jp", "urasoe.okinawa.jp", "uruma.okinawa.jp", "yaese.okinawa.jp", "yomitan.okinawa.jp", "yonabaru.okinawa.jp", "yonaguni.okinawa.jp", "zamami.okinawa.jp", "abeno.osaka.jp", "chihayaakasaka.osaka.jp", "chuo.osaka.jp", "daito.osaka.jp", "fujiidera.osaka.jp", "habikino.osaka.jp", "hannan.osaka.jp", "higashiosaka.osaka.jp", "higashisumiyoshi.osaka.jp", "higashiyodogawa.osaka.jp", "hirakata.osaka.jp", "ibaraki.osaka.jp", "ikeda.osaka.jp", "izumi.osaka.jp", "izumiotsu.osaka.jp", "izumisano.osaka.jp", "kadoma.osaka.jp", "kaizuka.osaka.jp", "kanan.osaka.jp", "kashiwara.osaka.jp", "katano.osaka.jp", "kawachinagano.osaka.jp", "kishiwada.osaka.jp", "kita.osaka.jp", "kumatori.osaka.jp", "matsubara.osaka.jp", "minato.osaka.jp", "minoh.osaka.jp", "misaki.osaka.jp", "moriguchi.osaka.jp", "neyagawa.osaka.jp", "nishi.osaka.jp", "nose.osaka.jp", "osakasayama.osaka.jp", "sakai.osaka.jp", "sayama.osaka.jp", "sennan.osaka.jp", "settsu.osaka.jp", "shijonawate.osaka.jp", "shimamoto.osaka.jp", "suita.osaka.jp", "tadaoka.osaka.jp", "taishi.osaka.jp", "tajiri.osaka.jp", "takaishi.osaka.jp", "takatsuki.osaka.jp", "tondabayashi.osaka.jp", "toyonaka.osaka.jp", "toyono.osaka.jp", "yao.osaka.jp", "ariake.saga.jp", "arita.saga.jp", "fukudomi.saga.jp", "genkai.saga.jp", "hamatama.saga.jp", "hizen.saga.jp", "imari.saga.jp", "kamimine.saga.jp", "kanzaki.saga.jp", "karatsu.saga.jp", "kashima.saga.jp", "kitagata.saga.jp", "kitahata.saga.jp", "kiyama.saga.jp", "kouhoku.saga.jp", "kyuragi.saga.jp", "nishiarita.saga.jp", "ogi.saga.jp", "omachi.saga.jp", "ouchi.saga.jp", "saga.saga.jp", "shiroishi.saga.jp", "taku.saga.jp", "tara.saga.jp", "tosu.saga.jp", "yoshinogari.saga.jp", "arakawa.saitama.jp", "asaka.saitama.jp", "chichibu.saitama.jp", "fujimi.saitama.jp", "fujimino.saitama.jp", "fukaya.saitama.jp", "hanno.saitama.jp", "hanyu.saitama.jp", "hasuda.saitama.jp", "hatogaya.saitama.jp", "hatoyama.saitama.jp", "hidaka.saitama.jp", "higashichichibu.saitama.jp", "higashimatsuyama.saitama.jp", "honjo.saitama.jp", "ina.saitama.jp", "iruma.saitama.jp", "iwatsuki.saitama.jp", "kamiizumi.saitama.jp", "kamikawa.saitama.jp", "kamisato.saitama.jp", "kasukabe.saitama.jp", "kawagoe.saitama.jp", "kawaguchi.saitama.jp", "kawajima.saitama.jp", "kazo.saitama.jp", "kitamoto.saitama.jp", "koshigaya.saitama.jp", "kounosu.saitama.jp", "kuki.saitama.jp", "kumagaya.saitama.jp", "matsubushi.saitama.jp", "minano.saitama.jp", "misato.saitama.jp", "miyashiro.saitama.jp", "miyoshi.saitama.jp", "moroyama.saitama.jp", "nagatoro.saitama.jp", "namegawa.saitama.jp", "niiza.saitama.jp", "ogano.saitama.jp", "ogawa.saitama.jp", "ogose.saitama.jp", "okegawa.saitama.jp", "omiya.saitama.jp", "otaki.saitama.jp", "ranzan.saitama.jp", "ryokami.saitama.jp", "saitama.saitama.jp", "sakado.saitama.jp", "satte.saitama.jp", "sayama.saitama.jp", "shiki.saitama.jp", "shiraoka.saitama.jp", "soka.saitama.jp", "sugito.saitama.jp", "toda.saitama.jp", "tokigawa.saitama.jp", "tokorozawa.saitama.jp", "tsurugashima.saitama.jp", "urawa.saitama.jp", "warabi.saitama.jp", "yashio.saitama.jp", "yokoze.saitama.jp", "yono.saitama.jp", "yorii.saitama.jp", "yoshida.saitama.jp", "yoshikawa.saitama.jp", "yoshimi.saitama.jp", "aisho.shiga.jp", "gamo.shiga.jp", "higashiomi.shiga.jp", "hikone.shiga.jp", "koka.shiga.jp", "konan.shiga.jp", "kosei.shiga.jp", "koto.shiga.jp", "kusatsu.shiga.jp", "maibara.shiga.jp", "moriyama.shiga.jp", "nagahama.shiga.jp", "nishiazai.shiga.jp", "notogawa.shiga.jp", "omihachiman.shiga.jp", "otsu.shiga.jp", "ritto.shiga.jp", "ryuoh.shiga.jp", "takashima.shiga.jp", "takatsuki.shiga.jp", "torahime.shiga.jp", "toyosato.shiga.jp", "yasu.shiga.jp", "akagi.shimane.jp", "ama.shimane.jp", "gotsu.shimane.jp", "hamada.shimane.jp", "higashiizumo.shimane.jp", "hikawa.shimane.jp", "hikimi.shimane.jp", "izumo.shimane.jp", "kakinoki.shimane.jp", "masuda.shimane.jp", "matsue.shimane.jp", "misato.shimane.jp", "nishinoshima.shimane.jp", "ohda.shimane.jp", "okinoshima.shimane.jp", "okuizumo.shimane.jp", "shimane.shimane.jp", "tamayu.shimane.jp", "tsuwano.shimane.jp", "unnan.shimane.jp", "yakumo.shimane.jp", "yasugi.shimane.jp", "yatsuka.shimane.jp", "arai.shizuoka.jp", "atami.shizuoka.jp", "fuji.shizuoka.jp", "fujieda.shizuoka.jp", "fujikawa.shizuoka.jp", "fujinomiya.shizuoka.jp", "fukuroi.shizuoka.jp", "gotemba.shizuoka.jp", "haibara.shizuoka.jp", "hamamatsu.shizuoka.jp", "higashiizu.shizuoka.jp", "ito.shizuoka.jp", "iwata.shizuoka.jp", "izu.shizuoka.jp", "izunokuni.shizuoka.jp", "kakegawa.shizuoka.jp", "kannami.shizuoka.jp", "kawanehon.shizuoka.jp", "kawazu.shizuoka.jp", "kikugawa.shizuoka.jp", "kosai.shizuoka.jp", "makinohara.shizuoka.jp", "matsuzaki.shizuoka.jp", "minamiizu.shizuoka.jp", "mishima.shizuoka.jp", "morimachi.shizuoka.jp", "nishiizu.shizuoka.jp", "numazu.shizuoka.jp", "omaezaki.shizuoka.jp", "shimada.shizuoka.jp", "shimizu.shizuoka.jp", "shimoda.shizuoka.jp", "shizuoka.shizuoka.jp", "susono.shizuoka.jp", "yaizu.shizuoka.jp", "yoshida.shizuoka.jp", "ashikaga.tochigi.jp", "bato.tochigi.jp", "haga.tochigi.jp", "ichikai.tochigi.jp", "iwafune.tochigi.jp", "kaminokawa.tochigi.jp", "kanuma.tochigi.jp", "karasuyama.tochigi.jp", "kuroiso.tochigi.jp", "mashiko.tochigi.jp", "mibu.tochigi.jp", "moka.tochigi.jp", "motegi.tochigi.jp", "nasu.tochigi.jp", "nasushiobara.tochigi.jp", "nikko.tochigi.jp", "nishikata.tochigi.jp", "nogi.tochigi.jp", "ohira.tochigi.jp", "ohtawara.tochigi.jp", "oyama.tochigi.jp", "sakura.tochigi.jp", "sano.tochigi.jp", "shimotsuke.tochigi.jp", "shioya.tochigi.jp", "takanezawa.tochigi.jp", "tochigi.tochigi.jp", "tsuga.tochigi.jp", "ujiie.tochigi.jp", "utsunomiya.tochigi.jp", "yaita.tochigi.jp", "aizumi.tokushima.jp", "anan.tokushima.jp", "ichiba.tokushima.jp", "itano.tokushima.jp", "kainan.tokushima.jp", "komatsushima.tokushima.jp", "matsushige.tokushima.jp", "mima.tokushima.jp", "minami.tokushima.jp", "miyoshi.tokushima.jp", "mugi.tokushima.jp", "nakagawa.tokushima.jp", "naruto.tokushima.jp", "sanagochi.tokushima.jp", "shishikui.tokushima.jp", "tokushima.tokushima.jp", "wajiki.tokushima.jp", "adachi.tokyo.jp", "akiruno.tokyo.jp", "akishima.tokyo.jp", "aogashima.tokyo.jp", "arakawa.tokyo.jp", "bunkyo.tokyo.jp", "chiyoda.tokyo.jp", "chofu.tokyo.jp", "chuo.tokyo.jp", "edogawa.tokyo.jp", "fuchu.tokyo.jp", "fussa.tokyo.jp", "hachijo.tokyo.jp", "hachioji.tokyo.jp", "hamura.tokyo.jp", "higashikurume.tokyo.jp", "higashimurayama.tokyo.jp", "higashiyamato.tokyo.jp", "hino.tokyo.jp", "hinode.tokyo.jp", "hinohara.tokyo.jp", "inagi.tokyo.jp", "itabashi.tokyo.jp", "katsushika.tokyo.jp", "kita.tokyo.jp", "kiyose.tokyo.jp", "kodaira.tokyo.jp", "koganei.tokyo.jp", "kokubunji.tokyo.jp", "komae.tokyo.jp", "koto.tokyo.jp", "kouzushima.tokyo.jp", "kunitachi.tokyo.jp", "machida.tokyo.jp", "meguro.tokyo.jp", "minato.tokyo.jp", "mitaka.tokyo.jp", "mizuho.tokyo.jp", "musashimurayama.tokyo.jp", "musashino.tokyo.jp", "nakano.tokyo.jp", "nerima.tokyo.jp", "ogasawara.tokyo.jp", "okutama.tokyo.jp", "ome.tokyo.jp", "oshima.tokyo.jp", "ota.tokyo.jp", "setagaya.tokyo.jp", "shibuya.tokyo.jp", "shinagawa.tokyo.jp", "shinjuku.tokyo.jp", "suginami.tokyo.jp", "sumida.tokyo.jp", "tachikawa.tokyo.jp", "taito.tokyo.jp", "tama.tokyo.jp", "toshima.tokyo.jp", "chizu.tottori.jp", "hino.tottori.jp", "kawahara.tottori.jp", "koge.tottori.jp", "kotoura.tottori.jp", "misasa.tottori.jp", "nanbu.tottori.jp", "nichinan.tottori.jp", "sakaiminato.tottori.jp", "tottori.tottori.jp", "wakasa.tottori.jp", "yazu.tottori.jp", "yonago.tottori.jp", "asahi.toyama.jp", "fuchu.toyama.jp", "fukumitsu.toyama.jp", "funahashi.toyama.jp", "himi.toyama.jp", "imizu.toyama.jp", "inami.toyama.jp", "johana.toyama.jp", "kamiichi.toyama.jp", "kurobe.toyama.jp", "nakaniikawa.toyama.jp", "namerikawa.toyama.jp", "nanto.toyama.jp", "nyuzen.toyama.jp", "oyabe.toyama.jp", "taira.toyama.jp", "takaoka.toyama.jp", "tateyama.toyama.jp", "toga.toyama.jp", "tonami.toyama.jp", "toyama.toyama.jp", "unazuki.toyama.jp", "uozu.toyama.jp", "yamada.toyama.jp", "arida.wakayama.jp", "aridagawa.wakayama.jp", "gobo.wakayama.jp", "hashimoto.wakayama.jp", "hidaka.wakayama.jp", "hirogawa.wakayama.jp", "inami.wakayama.jp", "iwade.wakayama.jp", "kainan.wakayama.jp", "kamitonda.wakayama.jp", "katsuragi.wakayama.jp", "kimino.wakayama.jp", "kinokawa.wakayama.jp", "kitayama.wakayama.jp", "koya.wakayama.jp", "koza.wakayama.jp", "kozagawa.wakayama.jp", "kudoyama.wakayama.jp", "kushimoto.wakayama.jp", "mihama.wakayama.jp", "misato.wakayama.jp", "nachikatsuura.wakayama.jp", "shingu.wakayama.jp", "shirahama.wakayama.jp", "taiji.wakayama.jp", "tanabe.wakayama.jp", "wakayama.wakayama.jp", "yuasa.wakayama.jp", "yura.wakayama.jp", "asahi.yamagata.jp", "funagata.yamagata.jp", "higashine.yamagata.jp", "iide.yamagata.jp", "kahoku.yamagata.jp", "kaminoyama.yamagata.jp", "kaneyama.yamagata.jp", "kawanishi.yamagata.jp", "mamurogawa.yamagata.jp", "mikawa.yamagata.jp", "murayama.yamagata.jp", "nagai.yamagata.jp", "nakayama.yamagata.jp", "nanyo.yamagata.jp", "nishikawa.yamagata.jp", "obanazawa.yamagata.jp", "oe.yamagata.jp", "oguni.yamagata.jp", "ohkura.yamagata.jp", "oishida.yamagata.jp", "sagae.yamagata.jp", "sakata.yamagata.jp", "sakegawa.yamagata.jp", "shinjo.yamagata.jp", "shirataka.yamagata.jp", "shonai.yamagata.jp", "takahata.yamagata.jp", "tendo.yamagata.jp", "tozawa.yamagata.jp", "tsuruoka.yamagata.jp", "yamagata.yamagata.jp", "yamanobe.yamagata.jp", "yonezawa.yamagata.jp", "yuza.yamagata.jp", "abu.yamaguchi.jp", "hagi.yamaguchi.jp", "hikari.yamaguchi.jp", "hofu.yamaguchi.jp", "iwakuni.yamaguchi.jp", "kudamatsu.yamaguchi.jp", "mitou.yamaguchi.jp", "nagato.yamaguchi.jp", "oshima.yamaguchi.jp", "shimonoseki.yamaguchi.jp", "shunan.yamaguchi.jp", "tabuse.yamaguchi.jp", "tokuyama.yamaguchi.jp", "toyota.yamaguchi.jp", "ube.yamaguchi.jp", "yuu.yamaguchi.jp", "chuo.yamanashi.jp", "doshi.yamanashi.jp", "fuefuki.yamanashi.jp", "fujikawa.yamanashi.jp", "fujikawaguchiko.yamanashi.jp", "fujiyoshida.yamanashi.jp", "hayakawa.yamanashi.jp", "hokuto.yamanashi.jp", "ichikawamisato.yamanashi.jp", "kai.yamanashi.jp", "kofu.yamanashi.jp", "koshu.yamanashi.jp", "kosuge.yamanashi.jp", "minami-alps.yamanashi.jp", "minobu.yamanashi.jp", "nakamichi.yamanashi.jp", "nanbu.yamanashi.jp", "narusawa.yamanashi.jp", "nirasaki.yamanashi.jp", "nishikatsura.yamanashi.jp", "oshino.yamanashi.jp", "otsuki.yamanashi.jp", "showa.yamanashi.jp", "tabayama.yamanashi.jp", "tsuru.yamanashi.jp", "uenohara.yamanashi.jp", "yamanakako.yamanashi.jp", "yamanashi.yamanashi.jp", "ke", "ac.ke", "co.ke", "go.ke", "info.ke", "me.ke", "mobi.ke", "ne.ke", "or.ke", "sc.ke", "kg", "com.kg", "edu.kg", "gov.kg", "mil.kg", "net.kg", "org.kg", "*.kh", "ki", "biz.ki", "com.ki", "edu.ki", "gov.ki", "info.ki", "net.ki", "org.ki", "km", "ass.km", "com.km", "edu.km", "gov.km", "mil.km", "nom.km", "org.km", "prd.km", "tm.km", "asso.km", "coop.km", "gouv.km", "medecin.km", "notaires.km", "pharmaciens.km", "presse.km", "veterinaire.km", "kn", "edu.kn", "gov.kn", "net.kn", "org.kn", "kp", "com.kp", "edu.kp", "gov.kp", "org.kp", "rep.kp", "tra.kp", "kr", "ac.kr", "co.kr", "es.kr", "go.kr", "hs.kr", "kg.kr", "mil.kr", "ms.kr", "ne.kr", "or.kr", "pe.kr", "re.kr", "sc.kr", "busan.kr", "chungbuk.kr", "chungnam.kr", "daegu.kr", "daejeon.kr", "gangwon.kr", "gwangju.kr", "gyeongbuk.kr", "gyeonggi.kr", "gyeongnam.kr", "incheon.kr", "jeju.kr", "jeonbuk.kr", "jeonnam.kr", "seoul.kr", "ulsan.kr", "kw", "com.kw", "edu.kw", "emb.kw", "gov.kw", "ind.kw", "net.kw", "org.kw", "ky", "com.ky", "edu.ky", "net.ky", "org.ky", "kz", "com.kz", "edu.kz", "gov.kz", "mil.kz", "net.kz", "org.kz", "la", "com.la", "edu.la", "gov.la", "info.la", "int.la", "net.la", "org.la", "per.la", "lb", "com.lb", "edu.lb", "gov.lb", "net.lb", "org.lb", "lc", "co.lc", "com.lc", "edu.lc", "gov.lc", "net.lc", "org.lc", "li", "lk", "ac.lk", "assn.lk", "com.lk", "edu.lk", "gov.lk", "grp.lk", "hotel.lk", "int.lk", "ltd.lk", "net.lk", "ngo.lk", "org.lk", "sch.lk", "soc.lk", "web.lk", "lr", "com.lr", "edu.lr", "gov.lr", "net.lr", "org.lr", "ls", "ac.ls", "biz.ls", "co.ls", "edu.ls", "gov.ls", "info.ls", "net.ls", "org.ls", "sc.ls", "lt", "gov.lt", "lu", "lv", "asn.lv", "com.lv", "conf.lv", "edu.lv", "gov.lv", "id.lv", "mil.lv", "net.lv", "org.lv", "ly", "com.ly", "edu.ly", "gov.ly", "id.ly", "med.ly", "net.ly", "org.ly", "plc.ly", "sch.ly", "ma", "ac.ma", "co.ma", "gov.ma", "net.ma", "org.ma", "press.ma", "mc", "asso.mc", "tm.mc", "md", "me", "ac.me", "co.me", "edu.me", "gov.me", "its.me", "net.me", "org.me", "priv.me", "mg", "co.mg", "com.mg", "edu.mg", "gov.mg", "mil.mg", "nom.mg", "org.mg", "prd.mg", "mh", "mil", "mk", "com.mk", "edu.mk", "gov.mk", "inf.mk", "name.mk", "net.mk", "org.mk", "ml", "com.ml", "edu.ml", "gouv.ml", "gov.ml", "net.ml", "org.ml", "presse.ml", "*.mm", "mn", "edu.mn", "gov.mn", "org.mn", "mo", "com.mo", "edu.mo", "gov.mo", "net.mo", "org.mo", "mobi", "mp", "mq", "mr", "gov.mr", "ms", "com.ms", "edu.ms", "gov.ms", "net.ms", "org.ms", "mt", "com.mt", "edu.mt", "net.mt", "org.mt", "mu", "ac.mu", "co.mu", "com.mu", "gov.mu", "net.mu", "or.mu", "org.mu", "museum", "mv", "aero.mv", "biz.mv", "com.mv", "coop.mv", "edu.mv", "gov.mv", "info.mv", "int.mv", "mil.mv", "museum.mv", "name.mv", "net.mv", "org.mv", "pro.mv", "mw", "ac.mw", "biz.mw", "co.mw", "com.mw", "coop.mw", "edu.mw", "gov.mw", "int.mw", "net.mw", "org.mw", "mx", "com.mx", "edu.mx", "gob.mx", "net.mx", "org.mx", "my", "biz.my", "com.my", "edu.my", "gov.my", "mil.my", "name.my", "net.my", "org.my", "mz", "ac.mz", "adv.mz", "co.mz", "edu.mz", "gov.mz", "mil.mz", "net.mz", "org.mz", "na", "alt.na", "co.na", "com.na", "gov.na", "net.na", "org.na", "name", "nc", "asso.nc", "nom.nc", "ne", "net", "nf", "arts.nf", "com.nf", "firm.nf", "info.nf", "net.nf", "other.nf", "per.nf", "rec.nf", "store.nf", "web.nf", "ng", "com.ng", "edu.ng", "gov.ng", "i.ng", "mil.ng", "mobi.ng", "name.ng", "net.ng", "org.ng", "sch.ng", "ni", "ac.ni", "biz.ni", "co.ni", "com.ni", "edu.ni", "gob.ni", "in.ni", "info.ni", "int.ni", "mil.ni", "net.ni", "nom.ni", "org.ni", "web.ni", "nl", "no", "fhs.no", "folkebibl.no", "fylkesbibl.no", "idrett.no", "museum.no", "priv.no", "vgs.no", "dep.no", "herad.no", "kommune.no", "mil.no", "stat.no", "aa.no", "ah.no", "bu.no", "fm.no", "hl.no", "hm.no", "jan-mayen.no", "mr.no", "nl.no", "nt.no", "of.no", "ol.no", "oslo.no", "rl.no", "sf.no", "st.no", "svalbard.no", "tm.no", "tr.no", "va.no", "vf.no", "gs.aa.no", "gs.ah.no", "gs.bu.no", "gs.fm.no", "gs.hl.no", "gs.hm.no", "gs.jan-mayen.no", "gs.mr.no", "gs.nl.no", "gs.nt.no", "gs.of.no", "gs.ol.no", "gs.oslo.no", "gs.rl.no", "gs.sf.no", "gs.st.no", "gs.svalbard.no", "gs.tm.no", "gs.tr.no", "gs.va.no", "gs.vf.no", "akrehamn.no", "åkrehamn.no", "algard.no", "ålgård.no", "arna.no", "bronnoysund.no", "brønnøysund.no", "brumunddal.no", "bryne.no", "drobak.no", "drøbak.no", "egersund.no", "fetsund.no", "floro.no", "florø.no", "fredrikstad.no", "hokksund.no", "honefoss.no", "hønefoss.no", "jessheim.no", "jorpeland.no", "jørpeland.no", "kirkenes.no", "kopervik.no", "krokstadelva.no", "langevag.no", "langevåg.no", "leirvik.no", "mjondalen.no", "mjøndalen.no", "mo-i-rana.no", "mosjoen.no", "mosjøen.no", "nesoddtangen.no", "orkanger.no", "osoyro.no", "osøyro.no", "raholt.no", "råholt.no", "sandnessjoen.no", "sandnessjøen.no", "skedsmokorset.no", "slattum.no", "spjelkavik.no", "stathelle.no", "stavern.no", "stjordalshalsen.no", "stjørdalshalsen.no", "tananger.no", "tranby.no", "vossevangen.no", "aarborte.no", "aejrie.no", "afjord.no", "åfjord.no", "agdenes.no", "nes.akershus.no", "aknoluokta.no", "ákŋoluokta.no", "al.no", "ål.no", "alaheadju.no", "álaheadju.no", "alesund.no", "ålesund.no", "alstahaug.no", "alta.no", "áltá.no", "alvdal.no", "amli.no", "åmli.no", "amot.no", "åmot.no", "andasuolo.no", "andebu.no", "andoy.no", "andøy.no", "ardal.no", "årdal.no", "aremark.no", "arendal.no", "ås.no", "aseral.no", "åseral.no", "asker.no", "askim.no", "askoy.no", "askøy.no", "askvoll.no", "asnes.no", "åsnes.no", "audnedaln.no", "aukra.no", "aure.no", "aurland.no", "aurskog-holand.no", "aurskog-høland.no", "austevoll.no", "austrheim.no", "averoy.no", "averøy.no", "badaddja.no", "bådåddjå.no", "bærum.no", "bahcavuotna.no", "báhcavuotna.no", "bahccavuotna.no", "báhccavuotna.no", "baidar.no", "báidár.no", "bajddar.no", "bájddar.no", "balat.no", "bálát.no", "balestrand.no", "ballangen.no", "balsfjord.no", "bamble.no", "bardu.no", "barum.no", "batsfjord.no", "båtsfjord.no", "bearalvahki.no", "bearalváhki.no", "beardu.no", "beiarn.no", "berg.no", "bergen.no", "berlevag.no", "berlevåg.no", "bievat.no", "bievát.no", "bindal.no", "birkenes.no", "bjarkoy.no", "bjarkøy.no", "bjerkreim.no", "bjugn.no", "bodo.no", "bodø.no", "bokn.no", "bomlo.no", "bømlo.no", "bremanger.no", "bronnoy.no", "brønnøy.no", "budejju.no", "nes.buskerud.no", "bygland.no", "bykle.no", "cahcesuolo.no", "čáhcesuolo.no", "davvenjarga.no", "davvenjárga.no", "davvesiida.no", "deatnu.no", "dielddanuorri.no", "divtasvuodna.no", "divttasvuotna.no", "donna.no", "dønna.no", "dovre.no", "drammen.no", "drangedal.no", "dyroy.no", "dyrøy.no", "eid.no", "eidfjord.no", "eidsberg.no", "eidskog.no", "eidsvoll.no", "eigersund.no", "elverum.no", "enebakk.no", "engerdal.no", "etne.no", "etnedal.no", "evenassi.no", "evenášši.no", "evenes.no", "evje-og-hornnes.no", "farsund.no", "fauske.no", "fedje.no", "fet.no", "finnoy.no", "finnøy.no", "fitjar.no", "fjaler.no", "fjell.no", "fla.no", "flå.no", "flakstad.no", "flatanger.no", "flekkefjord.no", "flesberg.no", "flora.no", "folldal.no", "forde.no", "førde.no", "forsand.no", "fosnes.no", "fræna.no", "frana.no", "frei.no", "frogn.no", "froland.no", "frosta.no", "froya.no", "frøya.no", "fuoisku.no", "fuossko.no", "fusa.no", "fyresdal.no", "gaivuotna.no", "gáivuotna.no", "galsa.no", "gálsá.no", "gamvik.no", "gangaviika.no", "gáŋgaviika.no", "gaular.no", "gausdal.no", "giehtavuoatna.no", "gildeskal.no", "gildeskål.no", "giske.no", "gjemnes.no", "gjerdrum.no", "gjerstad.no", "gjesdal.no", "gjovik.no", "gjøvik.no", "gloppen.no", "gol.no", "gran.no", "grane.no", "granvin.no", "gratangen.no", "grimstad.no", "grong.no", "grue.no", "gulen.no", "guovdageaidnu.no", "ha.no", "hå.no", "habmer.no", "hábmer.no", "hadsel.no", "hægebostad.no", "hagebostad.no", "halden.no", "halsa.no", "hamar.no", "hamaroy.no", "hammarfeasta.no", "hámmárfeasta.no", "hammerfest.no", "hapmir.no", "hápmir.no", "haram.no", "hareid.no", "harstad.no", "hasvik.no", "hattfjelldal.no", "haugesund.no", "os.hedmark.no", "valer.hedmark.no", "våler.hedmark.no", "hemne.no", "hemnes.no", "hemsedal.no", "hitra.no", "hjartdal.no", "hjelmeland.no", "hobol.no", "hobøl.no", "hof.no", "hol.no", "hole.no", "holmestrand.no", "holtalen.no", "holtålen.no", "os.hordaland.no", "hornindal.no", "horten.no", "hoyanger.no", "høyanger.no", "hoylandet.no", "høylandet.no", "hurdal.no", "hurum.no", "hvaler.no", "hyllestad.no", "ibestad.no", "inderoy.no", "inderøy.no", "iveland.no", "ivgu.no", "jevnaker.no", "jolster.no", "jølster.no", "jondal.no", "kafjord.no", "kåfjord.no", "karasjohka.no", "kárášjohka.no", "karasjok.no", "karlsoy.no", "karmoy.no", "karmøy.no", "kautokeino.no", "klabu.no", "klæbu.no", "klepp.no", "kongsberg.no", "kongsvinger.no", "kraanghke.no", "kråanghke.no", "kragero.no", "kragerø.no", "kristiansand.no", "kristiansund.no", "krodsherad.no", "krødsherad.no", "kvæfjord.no", "kvænangen.no", "kvafjord.no", "kvalsund.no", "kvam.no", "kvanangen.no", "kvinesdal.no", "kvinnherad.no", "kviteseid.no", "kvitsoy.no", "kvitsøy.no", "laakesvuemie.no", "lærdal.no", "lahppi.no", "láhppi.no", "lardal.no", "larvik.no", "lavagis.no", "lavangen.no", "leangaviika.no", "leaŋgaviika.no", "lebesby.no", "leikanger.no", "leirfjord.no", "leka.no", "leksvik.no", "lenvik.no", "lerdal.no", "lesja.no", "levanger.no", "lier.no", "lierne.no", "lillehammer.no", "lillesand.no", "lindas.no", "lindås.no", "lindesnes.no", "loabat.no", "loabát.no", "lodingen.no", "lødingen.no", "lom.no", "loppa.no", "lorenskog.no", "lørenskog.no", "loten.no", "løten.no", "lund.no", "lunner.no", "luroy.no", "lurøy.no", "luster.no", "lyngdal.no", "lyngen.no", "malatvuopmi.no", "málatvuopmi.no", "malselv.no", "målselv.no", "malvik.no", "mandal.no", "marker.no", "marnardal.no", "masfjorden.no", "masoy.no", "måsøy.no", "matta-varjjat.no", "mátta-várjjat.no", "meland.no", "meldal.no", "melhus.no", "meloy.no", "meløy.no", "meraker.no", "meråker.no", "midsund.no", "midtre-gauldal.no", "moareke.no", "moåreke.no", "modalen.no", "modum.no", "molde.no", "heroy.more-og-romsdal.no", "sande.more-og-romsdal.no", "herøy.møre-og-romsdal.no", "sande.møre-og-romsdal.no", "moskenes.no", "moss.no", "mosvik.no", "muosat.no", "muosát.no", "naamesjevuemie.no", "nååmesjevuemie.no", "nærøy.no", "namdalseid.no", "namsos.no", "namsskogan.no", "nannestad.no", "naroy.no", "narviika.no", "narvik.no", "naustdal.no", "navuotna.no", "návuotna.no", "nedre-eiker.no", "nesna.no", "nesodden.no", "nesseby.no", "nesset.no", "nissedal.no", "nittedal.no", "nord-aurdal.no", "nord-fron.no", "nord-odal.no", "norddal.no", "nordkapp.no", "bo.nordland.no", "bø.nordland.no", "heroy.nordland.no", "herøy.nordland.no", "nordre-land.no", "nordreisa.no", "nore-og-uvdal.no", "notodden.no", "notteroy.no", "nøtterøy.no", "odda.no", "oksnes.no", "øksnes.no", "omasvuotna.no", "oppdal.no", "oppegard.no", "oppegård.no", "orkdal.no", "orland.no", "ørland.no", "orskog.no", "ørskog.no", "orsta.no", "ørsta.no", "osen.no", "osteroy.no", "osterøy.no", "valer.ostfold.no", "våler.østfold.no", "ostre-toten.no", "østre-toten.no", "overhalla.no", "ovre-eiker.no", "øvre-eiker.no", "oyer.no", "øyer.no", "oygarden.no", "øygarden.no", "oystre-slidre.no", "øystre-slidre.no", "porsanger.no", "porsangu.no", "porsáŋgu.no", "porsgrunn.no", "rade.no", "råde.no", "radoy.no", "radøy.no", "rælingen.no", "rahkkeravju.no", "ráhkkerávju.no", "raisa.no", "ráisa.no", "rakkestad.no", "ralingen.no", "rana.no", "randaberg.no", "rauma.no", "rendalen.no", "rennebu.no", "rennesoy.no", "rennesøy.no", "rindal.no", "ringebu.no", "ringerike.no", "ringsaker.no", "risor.no", "risør.no", "rissa.no", "roan.no", "rodoy.no", "rødøy.no", "rollag.no", "romsa.no", "romskog.no", "rømskog.no", "roros.no", "røros.no", "rost.no", "røst.no", "royken.no", "røyken.no", "royrvik.no", "røyrvik.no", "ruovat.no", "rygge.no", "salangen.no", "salat.no", "sálat.no", "sálát.no", "saltdal.no", "samnanger.no", "sandefjord.no", "sandnes.no", "sandoy.no", "sandøy.no", "sarpsborg.no", "sauda.no", "sauherad.no", "sel.no", "selbu.no", "selje.no", "seljord.no", "siellak.no", "sigdal.no", "siljan.no", "sirdal.no", "skanit.no", "skánit.no", "skanland.no", "skånland.no", "skaun.no", "skedsmo.no", "ski.no", "skien.no", "skierva.no", "skiervá.no", "skiptvet.no", "skjak.no", "skjåk.no", "skjervoy.no", "skjervøy.no", "skodje.no", "smola.no", "smøla.no", "snaase.no", "snåase.no", "snasa.no", "snåsa.no", "snillfjord.no", "snoasa.no", "sogndal.no", "sogne.no", "søgne.no", "sokndal.no", "sola.no", "solund.no", "somna.no", "sømna.no", "sondre-land.no", "søndre-land.no", "songdalen.no", "sor-aurdal.no", "sør-aurdal.no", "sor-fron.no", "sør-fron.no", "sor-odal.no", "sør-odal.no", "sor-varanger.no", "sør-varanger.no", "sorfold.no", "sørfold.no", "sorreisa.no", "sørreisa.no", "sortland.no", "sorum.no", "sørum.no", "spydeberg.no", "stange.no", "stavanger.no", "steigen.no", "steinkjer.no", "stjordal.no", "stjørdal.no", "stokke.no", "stor-elvdal.no", "stord.no", "stordal.no", "storfjord.no", "strand.no", "stranda.no", "stryn.no", "sula.no", "suldal.no", "sund.no", "sunndal.no", "surnadal.no", "sveio.no", "svelvik.no", "sykkylven.no", "tana.no", "bo.telemark.no", "bø.telemark.no", "time.no", "tingvoll.no", "tinn.no", "tjeldsund.no", "tjome.no", "tjøme.no", "tokke.no", "tolga.no", "tonsberg.no", "tønsberg.no", "torsken.no", "træna.no", "trana.no", "tranoy.no", "tranøy.no", "troandin.no", "trogstad.no", "trøgstad.no", "tromsa.no", "tromso.no", "tromsø.no", "trondheim.no", "trysil.no", "tvedestrand.no", "tydal.no", "tynset.no", "tysfjord.no", "tysnes.no", "tysvær.no", "tysvar.no", "ullensaker.no", "ullensvang.no", "ulvik.no", "unjarga.no", "unjárga.no", "utsira.no", "vaapste.no", "vadso.no", "vadsø.no", "værøy.no", "vaga.no", "vågå.no", "vagan.no", "vågan.no", "vagsoy.no", "vågsøy.no", "vaksdal.no", "valle.no", "vang.no", "vanylven.no", "vardo.no", "vardø.no", "varggat.no", "várggát.no", "varoy.no", "vefsn.no", "vega.no", "vegarshei.no", "vegårshei.no", "vennesla.no", "verdal.no", "verran.no", "vestby.no", "sande.vestfold.no", "vestnes.no", "vestre-slidre.no", "vestre-toten.no", "vestvagoy.no", "vestvågøy.no", "vevelstad.no", "vik.no", "vikna.no", "vindafjord.no", "voagat.no", "volda.no", "voss.no", "*.np", "nr", "biz.nr", "com.nr", "edu.nr", "gov.nr", "info.nr", "net.nr", "org.nr", "nu", "nz", "ac.nz", "co.nz", "cri.nz", "geek.nz", "gen.nz", "govt.nz", "health.nz", "iwi.nz", "kiwi.nz", "maori.nz", "māori.nz", "mil.nz", "net.nz", "org.nz", "parliament.nz", "school.nz", "om", "co.om", "com.om", "edu.om", "gov.om", "med.om", "museum.om", "net.om", "org.om", "pro.om", "onion", "org", "pa", "abo.pa", "ac.pa", "com.pa", "edu.pa", "gob.pa", "ing.pa", "med.pa", "net.pa", "nom.pa", "org.pa", "sld.pa", "pe", "com.pe", "edu.pe", "gob.pe", "mil.pe", "net.pe", "nom.pe", "org.pe", "pf", "com.pf", "edu.pf", "org.pf", "*.pg", "ph", "com.ph", "edu.ph", "gov.ph", "i.ph", "mil.ph", "net.ph", "ngo.ph", "org.ph", "pk", "ac.pk", "biz.pk", "com.pk", "edu.pk", "fam.pk", "gkp.pk", "gob.pk", "gog.pk", "gok.pk", "gon.pk", "gop.pk", "gos.pk", "gov.pk", "net.pk", "org.pk", "web.pk", "pl", "com.pl", "net.pl", "org.pl", "agro.pl", "aid.pl", "atm.pl", "auto.pl", "biz.pl", "edu.pl", "gmina.pl", "gsm.pl", "info.pl", "mail.pl", "media.pl", "miasta.pl", "mil.pl", "nieruchomosci.pl", "nom.pl", "pc.pl", "powiat.pl", "priv.pl", "realestate.pl", "rel.pl", "sex.pl", "shop.pl", "sklep.pl", "sos.pl", "szkola.pl", "targi.pl", "tm.pl", "tourism.pl", "travel.pl", "turystyka.pl", "gov.pl", "ap.gov.pl", "griw.gov.pl", "ic.gov.pl", "is.gov.pl", "kmpsp.gov.pl", "konsulat.gov.pl", "kppsp.gov.pl", "kwp.gov.pl", "kwpsp.gov.pl", "mup.gov.pl", "mw.gov.pl", "oia.gov.pl", "oirm.gov.pl", "oke.gov.pl", "oow.gov.pl", "oschr.gov.pl", "oum.gov.pl", "pa.gov.pl", "pinb.gov.pl", "piw.gov.pl", "po.gov.pl", "pr.gov.pl", "psp.gov.pl", "psse.gov.pl", "pup.gov.pl", "rzgw.gov.pl", "sa.gov.pl", "sdn.gov.pl", "sko.gov.pl", "so.gov.pl", "sr.gov.pl", "starostwo.gov.pl", "ug.gov.pl", "ugim.gov.pl", "um.gov.pl", "umig.gov.pl", "upow.gov.pl", "uppo.gov.pl", "us.gov.pl", "uw.gov.pl", "uzs.gov.pl", "wif.gov.pl", "wiih.gov.pl", "winb.gov.pl", "wios.gov.pl", "witd.gov.pl", "wiw.gov.pl", "wkz.gov.pl", "wsa.gov.pl", "wskr.gov.pl", "wsse.gov.pl", "wuoz.gov.pl", "wzmiuw.gov.pl", "zp.gov.pl", "zpisdn.gov.pl", "augustow.pl", "babia-gora.pl", "bedzin.pl", "beskidy.pl", "bialowieza.pl", "bialystok.pl", "bielawa.pl", "bieszczady.pl", "boleslawiec.pl", "bydgoszcz.pl", "bytom.pl", "cieszyn.pl", "czeladz.pl", "czest.pl", "dlugoleka.pl", "elblag.pl", "elk.pl", "glogow.pl", "gniezno.pl", "gorlice.pl", "grajewo.pl", "ilawa.pl", "jaworzno.pl", "jelenia-gora.pl", "jgora.pl", "kalisz.pl", "karpacz.pl", "kartuzy.pl", "kaszuby.pl", "katowice.pl", "kazimierz-dolny.pl", "kepno.pl", "ketrzyn.pl", "klodzko.pl", "kobierzyce.pl", "kolobrzeg.pl", "konin.pl", "konskowola.pl", "kutno.pl", "lapy.pl", "lebork.pl", "legnica.pl", "lezajsk.pl", "limanowa.pl", "lomza.pl", "lowicz.pl", "lubin.pl", "lukow.pl", "malbork.pl", "malopolska.pl", "mazowsze.pl", "mazury.pl", "mielec.pl", "mielno.pl", "mragowo.pl", "naklo.pl", "nowaruda.pl", "nysa.pl", "olawa.pl", "olecko.pl", "olkusz.pl", "olsztyn.pl", "opoczno.pl", "opole.pl", "ostroda.pl", "ostroleka.pl", "ostrowiec.pl", "ostrowwlkp.pl", "pila.pl", "pisz.pl", "podhale.pl", "podlasie.pl", "polkowice.pl", "pomorskie.pl", "pomorze.pl", "prochowice.pl", "pruszkow.pl", "przeworsk.pl", "pulawy.pl", "radom.pl", "rawa-maz.pl", "rybnik.pl", "rzeszow.pl", "sanok.pl", "sejny.pl", "skoczow.pl", "slask.pl", "slupsk.pl", "sosnowiec.pl", "stalowa-wola.pl", "starachowice.pl", "stargard.pl", "suwalki.pl", "swidnica.pl", "swiebodzin.pl", "swinoujscie.pl", "szczecin.pl", "szczytno.pl", "tarnobrzeg.pl", "tgory.pl", "turek.pl", "tychy.pl", "ustka.pl", "walbrzych.pl", "warmia.pl", "warszawa.pl", "waw.pl", "wegrow.pl", "wielun.pl", "wlocl.pl", "wloclawek.pl", "wodzislaw.pl", "wolomin.pl", "wroclaw.pl", "zachpomor.pl", "zagan.pl", "zarow.pl", "zgora.pl", "zgorzelec.pl", "pm", "pn", "co.pn", "edu.pn", "gov.pn", "net.pn", "org.pn", "post", "pr", "biz.pr", "com.pr", "edu.pr", "gov.pr", "info.pr", "isla.pr", "name.pr", "net.pr", "org.pr", "pro.pr", "ac.pr", "est.pr", "prof.pr", "pro", "aaa.pro", "aca.pro", "acct.pro", "avocat.pro", "bar.pro", "cpa.pro", "eng.pro", "jur.pro", "law.pro", "med.pro", "recht.pro", "ps", "com.ps", "edu.ps", "gov.ps", "net.ps", "org.ps", "plo.ps", "sec.ps", "pt", "com.pt", "edu.pt", "gov.pt", "int.pt", "net.pt", "nome.pt", "org.pt", "publ.pt", "pw", "belau.pw", "co.pw", "ed.pw", "go.pw", "or.pw", "py", "com.py", "coop.py", "edu.py", "gov.py", "mil.py", "net.py", "org.py", "qa", "com.qa", "edu.qa", "gov.qa", "mil.qa", "name.qa", "net.qa", "org.qa", "sch.qa", "re", "asso.re", "com.re", "ro", "arts.ro", "com.ro", "firm.ro", "info.ro", "nom.ro", "nt.ro", "org.ro", "rec.ro", "store.ro", "tm.ro", "www.ro", "rs", "ac.rs", "co.rs", "edu.rs", "gov.rs", "in.rs", "org.rs", "ru", "rw", "ac.rw", "co.rw", "coop.rw", "gov.rw", "mil.rw", "net.rw", "org.rw", "sa", "com.sa", "edu.sa", "gov.sa", "med.sa", "net.sa", "org.sa", "pub.sa", "sch.sa", "sb", "com.sb", "edu.sb", "gov.sb", "net.sb", "org.sb", "sc", "com.sc", "edu.sc", "gov.sc", "net.sc", "org.sc", "sd", "com.sd", "edu.sd", "gov.sd", "info.sd", "med.sd", "net.sd", "org.sd", "tv.sd", "se", "a.se", "ac.se", "b.se", "bd.se", "brand.se", "c.se", "d.se", "e.se", "f.se", "fh.se", "fhsk.se", "fhv.se", "g.se", "h.se", "i.se", "k.se", "komforb.se", "kommunalforbund.se", "komvux.se", "l.se", "lanbib.se", "m.se", "n.se", "naturbruksgymn.se", "o.se", "org.se", "p.se", "parti.se", "pp.se", "press.se", "r.se", "s.se", "t.se", "tm.se", "u.se", "w.se", "x.se", "y.se", "z.se", "sg", "com.sg", "edu.sg", "gov.sg", "net.sg", "org.sg", "sh", "com.sh", "gov.sh", "mil.sh", "net.sh", "org.sh", "si", "sj", "sk", "sl", "com.sl", "edu.sl", "gov.sl", "net.sl", "org.sl", "sm", "sn", "art.sn", "com.sn", "edu.sn", "gouv.sn", "org.sn", "perso.sn", "univ.sn", "so", "com.so", "edu.so", "gov.so", "me.so", "net.so", "org.so", "sr", "ss", "biz.ss", "co.ss", "com.ss", "edu.ss", "gov.ss", "me.ss", "net.ss", "org.ss", "sch.ss", "st", "co.st", "com.st", "consulado.st", "edu.st", "embaixada.st", "mil.st", "net.st", "org.st", "principe.st", "saotome.st", "store.st", "su", "sv", "com.sv", "edu.sv", "gob.sv", "org.sv", "red.sv", "sx", "gov.sx", "sy", "com.sy", "edu.sy", "gov.sy", "mil.sy", "net.sy", "org.sy", "sz", "ac.sz", "co.sz", "org.sz", "tc", "td", "tel", "tf", "tg", "th", "ac.th", "co.th", "go.th", "in.th", "mi.th", "net.th", "or.th", "tj", "ac.tj", "biz.tj", "co.tj", "com.tj", "edu.tj", "go.tj", "gov.tj", "int.tj", "mil.tj", "name.tj", "net.tj", "nic.tj", "org.tj", "test.tj", "web.tj", "tk", "tl", "gov.tl", "tm", "co.tm", "com.tm", "edu.tm", "gov.tm", "mil.tm", "net.tm", "nom.tm", "org.tm", "tn", "com.tn", "ens.tn", "fin.tn", "gov.tn", "ind.tn", "info.tn", "intl.tn", "mincom.tn", "nat.tn", "net.tn", "org.tn", "perso.tn", "tourism.tn", "to", "com.to", "edu.to", "gov.to", "mil.to", "net.to", "org.to", "tr", "av.tr", "bbs.tr", "bel.tr", "biz.tr", "com.tr", "dr.tr", "edu.tr", "gen.tr", "gov.tr", "info.tr", "k12.tr", "kep.tr", "mil.tr", "name.tr", "net.tr", "org.tr", "pol.tr", "tel.tr", "tsk.tr", "tv.tr", "web.tr", "nc.tr", "gov.nc.tr", "tt", "biz.tt", "co.tt", "com.tt", "edu.tt", "gov.tt", "info.tt", "mil.tt", "name.tt", "net.tt", "org.tt", "pro.tt", "tv", "tw", "club.tw", "com.tw", "ebiz.tw", "edu.tw", "game.tw", "gov.tw", "idv.tw", "mil.tw", "net.tw", "org.tw", "tz", "ac.tz", "co.tz", "go.tz", "hotel.tz", "info.tz", "me.tz", "mil.tz", "mobi.tz", "ne.tz", "or.tz", "sc.tz", "tv.tz", "ua", "com.ua", "edu.ua", "gov.ua", "in.ua", "net.ua", "org.ua", "cherkassy.ua", "cherkasy.ua", "chernigov.ua", "chernihiv.ua", "chernivtsi.ua", "chernovtsy.ua", "ck.ua", "cn.ua", "cr.ua", "crimea.ua", "cv.ua", "dn.ua", "dnepropetrovsk.ua", "dnipropetrovsk.ua", "donetsk.ua", "dp.ua", "if.ua", "ivano-frankivsk.ua", "kh.ua", "kharkiv.ua", "kharkov.ua", "kherson.ua", "khmelnitskiy.ua", "khmelnytskyi.ua", "kiev.ua", "kirovograd.ua", "km.ua", "kr.ua", "kropyvnytskyi.ua", "krym.ua", "ks.ua", "kv.ua", "kyiv.ua", "lg.ua", "lt.ua", "lugansk.ua", "luhansk.ua", "lutsk.ua", "lv.ua", "lviv.ua", "mk.ua", "mykolaiv.ua", "nikolaev.ua", "od.ua", "odesa.ua", "odessa.ua", "pl.ua", "poltava.ua", "rivne.ua", "rovno.ua", "rv.ua", "sb.ua", "sebastopol.ua", "sevastopol.ua", "sm.ua", "sumy.ua", "te.ua", "ternopil.ua", "uz.ua", "uzhgorod.ua", "uzhhorod.ua", "vinnica.ua", "vinnytsia.ua", "vn.ua", "volyn.ua", "yalta.ua", "zakarpattia.ua", "zaporizhzhe.ua", "zaporizhzhia.ua", "zhitomir.ua", "zhytomyr.ua", "zp.ua", "zt.ua", "ug", "ac.ug", "co.ug", "com.ug", "go.ug", "ne.ug", "or.ug", "org.ug", "sc.ug", "uk", "ac.uk", "co.uk", "gov.uk", "ltd.uk", "me.uk", "net.uk", "nhs.uk", "org.uk", "plc.uk", "police.uk", "*.sch.uk", "us", "dni.us", "fed.us", "isa.us", "kids.us", "nsn.us", "ak.us", "al.us", "ar.us", "as.us", "az.us", "ca.us", "co.us", "ct.us", "dc.us", "de.us", "fl.us", "ga.us", "gu.us", "hi.us", "ia.us", "id.us", "il.us", "in.us", "ks.us", "ky.us", "la.us", "ma.us", "md.us", "me.us", "mi.us", "mn.us", "mo.us", "ms.us", "mt.us", "nc.us", "nd.us", "ne.us", "nh.us", "nj.us", "nm.us", "nv.us", "ny.us", "oh.us", "ok.us", "or.us", "pa.us", "pr.us", "ri.us", "sc.us", "sd.us", "tn.us", "tx.us", "ut.us", "va.us", "vi.us", "vt.us", "wa.us", "wi.us", "wv.us", "wy.us", "k12.ak.us", "k12.al.us", "k12.ar.us", "k12.as.us", "k12.az.us", "k12.ca.us", "k12.co.us", "k12.ct.us", "k12.dc.us", "k12.fl.us", "k12.ga.us", "k12.gu.us", "k12.ia.us", "k12.id.us", "k12.il.us", "k12.in.us", "k12.ks.us", "k12.ky.us", "k12.la.us", "k12.ma.us", "k12.md.us", "k12.me.us", "k12.mi.us", "k12.mn.us", "k12.mo.us", "k12.ms.us", "k12.mt.us", "k12.nc.us", "k12.ne.us", "k12.nh.us", "k12.nj.us", "k12.nm.us", "k12.nv.us", "k12.ny.us", "k12.oh.us", "k12.ok.us", "k12.or.us", "k12.pa.us", "k12.pr.us", "k12.sc.us", "k12.tn.us", "k12.tx.us", "k12.ut.us", "k12.va.us", "k12.vi.us", "k12.vt.us", "k12.wa.us", "k12.wi.us", "cc.ak.us", "lib.ak.us", "cc.al.us", "lib.al.us", "cc.ar.us", "lib.ar.us", "cc.as.us", "lib.as.us", "cc.az.us", "lib.az.us", "cc.ca.us", "lib.ca.us", "cc.co.us", "lib.co.us", "cc.ct.us", "lib.ct.us", "cc.dc.us", "lib.dc.us", "cc.de.us", "cc.fl.us", "cc.ga.us", "cc.gu.us", "cc.hi.us", "cc.ia.us", "cc.id.us", "cc.il.us", "cc.in.us", "cc.ks.us", "cc.ky.us", "cc.la.us", "cc.ma.us", "cc.md.us", "cc.me.us", "cc.mi.us", "cc.mn.us", "cc.mo.us", "cc.ms.us", "cc.mt.us", "cc.nc.us", "cc.nd.us", "cc.ne.us", "cc.nh.us", "cc.nj.us", "cc.nm.us", "cc.nv.us", "cc.ny.us", "cc.oh.us", "cc.ok.us", "cc.or.us", "cc.pa.us", "cc.pr.us", "cc.ri.us", "cc.sc.us", "cc.sd.us", "cc.tn.us", "cc.tx.us", "cc.ut.us", "cc.va.us", "cc.vi.us", "cc.vt.us", "cc.wa.us", "cc.wi.us", "cc.wv.us", "cc.wy.us", "k12.wy.us", "lib.fl.us", "lib.ga.us", "lib.gu.us", "lib.hi.us", "lib.ia.us", "lib.id.us", "lib.il.us", "lib.in.us", "lib.ks.us", "lib.ky.us", "lib.la.us", "lib.ma.us", "lib.md.us", "lib.me.us", "lib.mi.us", "lib.mn.us", "lib.mo.us", "lib.ms.us", "lib.mt.us", "lib.nc.us", "lib.nd.us", "lib.ne.us", "lib.nh.us", "lib.nj.us", "lib.nm.us", "lib.nv.us", "lib.ny.us", "lib.oh.us", "lib.ok.us", "lib.or.us", "lib.pa.us", "lib.pr.us", "lib.ri.us", "lib.sc.us", "lib.sd.us", "lib.tn.us", "lib.tx.us", "lib.ut.us", "lib.va.us", "lib.vi.us", "lib.vt.us", "lib.wa.us", "lib.wi.us", "lib.wy.us", "chtr.k12.ma.us", "paroch.k12.ma.us", "pvt.k12.ma.us", "ann-arbor.mi.us", "cog.mi.us", "dst.mi.us", "eaton.mi.us", "gen.mi.us", "mus.mi.us", "tec.mi.us", "washtenaw.mi.us", "uy", "com.uy", "edu.uy", "gub.uy", "mil.uy", "net.uy", "org.uy", "uz", "co.uz", "com.uz", "net.uz", "org.uz", "va", "vc", "com.vc", "edu.vc", "gov.vc", "mil.vc", "net.vc", "org.vc", "ve", "arts.ve", "bib.ve", "co.ve", "com.ve", "e12.ve", "edu.ve", "firm.ve", "gob.ve", "gov.ve", "info.ve", "int.ve", "mil.ve", "net.ve", "nom.ve", "org.ve", "rar.ve", "rec.ve", "store.ve", "tec.ve", "web.ve", "vg", "vi", "co.vi", "com.vi", "k12.vi", "net.vi", "org.vi", "vn", "ac.vn", "ai.vn", "biz.vn", "com.vn", "edu.vn", "gov.vn", "health.vn", "id.vn", "info.vn", "int.vn", "io.vn", "name.vn", "net.vn", "org.vn", "pro.vn", "angiang.vn", "bacgiang.vn", "backan.vn", "baclieu.vn", "bacninh.vn", "baria-vungtau.vn", "bentre.vn", "binhdinh.vn", "binhduong.vn", "binhphuoc.vn", "binhthuan.vn", "camau.vn", "cantho.vn", "caobang.vn", "daklak.vn", "daknong.vn", "danang.vn", "dienbien.vn", "dongnai.vn", "dongthap.vn", "gialai.vn", "hagiang.vn", "haiduong.vn", "haiphong.vn", "hanam.vn", "hanoi.vn", "hatinh.vn", "haugiang.vn", "hoabinh.vn", "hungyen.vn", "khanhhoa.vn", "kiengiang.vn", "kontum.vn", "laichau.vn", "lamdong.vn", "langson.vn", "laocai.vn", "longan.vn", "namdinh.vn", "nghean.vn", "ninhbinh.vn", "ninhthuan.vn", "phutho.vn", "phuyen.vn", "quangbinh.vn", "quangnam.vn", "quangngai.vn", "quangninh.vn", "quangtri.vn", "soctrang.vn", "sonla.vn", "tayninh.vn", "thaibinh.vn", "thainguyen.vn", "thanhhoa.vn", "thanhphohochiminh.vn", "thuathienhue.vn", "tiengiang.vn", "travinh.vn", "tuyenquang.vn", "vinhlong.vn", "vinhphuc.vn", "yenbai.vn", "vu", "com.vu", "edu.vu", "net.vu", "org.vu", "wf", "ws", "com.ws", "edu.ws", "gov.ws", "net.ws", "org.ws", "yt", "امارات", "հայ", "বাংলা", "бг", "البحرين", "бел", "中国", "中國", "الجزائر", "مصر", "ею", "ευ", "موريتانيا", "გე", "ελ", "香港", "個人.香港", "公司.香港", "政府.香港", "教育.香港", "組織.香港", "網絡.香港", "ಭಾರತ", "ଭାରତ", "ভাৰত", "भारतम्", "भारोत", "ڀارت", "ഭാരതം", "भारत", "بارت", "بھارت", "భారత్", "ભારત", "ਭਾਰਤ", "ভারত", "இந்தியா", "ایران", "ايران", "عراق", "الاردن", "한국", "қаз", "ລາວ", "ලංකා", "இலங்கை", "المغرب", "мкд", "мон", "澳門", "澳门", "مليسيا", "عمان", "پاکستان", "پاكستان", "فلسطين", "срб", "ак.срб", "обр.срб", "од.срб", "орг.срб", "пр.срб", "упр.срб", "рф", "قطر", "السعودية", "السعودیة", "السعودیۃ", "السعوديه", "سودان", "新加坡", "சிங்கப்பூர்", "سورية", "سوريا", "ไทย", "ทหาร.ไทย", "ธุรกิจ.ไทย", "เน็ต.ไทย", "รัฐบาล.ไทย", "ศึกษา.ไทย", "องค์กร.ไทย", "تونس", "台灣", "台湾", "臺灣", "укр", "اليمن", "xxx", "ye", "com.ye", "edu.ye", "gov.ye", "mil.ye", "net.ye", "org.ye", "ac.za", "agric.za", "alt.za", "co.za", "edu.za", "gov.za", "grondar.za", "law.za", "mil.za", "net.za", "ngo.za", "nic.za", "nis.za", "nom.za", "org.za", "school.za", "tm.za", "web.za", "zm", "ac.zm", "biz.zm", "co.zm", "com.zm", "edu.zm", "gov.zm", "info.zm", "mil.zm", "net.zm", "org.zm", "sch.zm", "zw", "ac.zw", "co.zw", "gov.zw", "mil.zw", "org.zw", "aaa", "aarp", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ads", "adult", "aeg", "aetna", "afl", "africa", "agakhan", "agency", "aig", "airbus", "airforce", "airtel", "akdn", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "amazon", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "aol", "apartments", "app", "apple", "aquarelle", "arab", "aramco", "archi", "army", "art", "arte", "asda", "associates", "athleta", "attorney", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "aws", "axa", "azure", "baby", "baidu", "banamex", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bbc", "bbt", "bbva", "bcg", "bcn", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bharti", "bible", "bid", "bike", "bing", "bingo", "bio", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bms", "bmw", "bnpparibas", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "build", "builders", "business", "buy", "buzz", "bzh", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "cash", "casino", "catering", "catholic", "cba", "cbn", "cbre", "center", "ceo", "cern", "cfa", "cfd", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "coach", "codes", "coffee", "college", "cologne", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "corsica", "country", "coupon", "coupons", "courses", "cpa", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "cuisinella", "cymru", "cyou", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dnp", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "dunlop", "dupont", "durban", "dvag", "dvr", "earth", "eat", "eco", "edeka", "education", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "ericsson", "erni", "esq", "estate", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "flickr", "flights", "flir", "florist", "flowers", "fly", "foo", "food", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "free", "fresenius", "frl", "frogans", "frontier", "ftr", "fujitsu", "fun", "fund", "furniture", "futbol", "fyi", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gbiz", "gdn", "gea", "gent", "genting", "george", "ggee", "gift", "gifts", "gives", "giving", "glass", "gle", "global", "globo", "gmail", "gmbh", "gmo", "gmx", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gucci", "guge", "guide", "guitars", "guru", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hiphop", "hisamitsu", "hitachi", "hiv", "hkt", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hotels", "hotmail", "house", "how", "hsbc", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "ieee", "ifm", "ikano", "imamat", "imdb", "immo", "immobilien", "inc", "industries", "infiniti", "ing", "ink", "institute", "insurance", "insure", "international", "intuit", "investments", "ipiranga", "irish", "ismaili", "ist", "istanbul", "itau", "itv", "jaguar", "java", "jcb", "jeep", "jetzt", "jewelry", "jio", "jll", "jmp", "jnj", "joburg", "jot", "joy", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kia", "kids", "kim", "kindle", "kitchen", "kiwi", "koeln", "komatsu", "kosher", "kpmg", "kpn", "krd", "kred", "kuokgroup", "kyoto", "lacaixa", "lamborghini", "lamer", "lancaster", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "link", "lipsy", "live", "living", "llc", "llp", "loan", "loans", "locker", "locus", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "ltd", "ltda", "lundbeck", "luxe", "luxury", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "mattel", "mba", "mckinsey", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merck", "merckmsd", "miami", "microsoft", "mini", "mint", "mit", "mitsubishi", "mlb", "mls", "mma", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "msd", "mtn", "mtr", "music", "nab", "nagoya", "navy", "nba", "nec", "netbank", "netflix", "network", "neustar", "new", "news", "next", "nextdirect", "nexus", "nfl", "ngo", "nhk", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nokia", "norton", "now", "nowruz", "nowtv", "nra", "nrw", "ntt", "nyc", "obi", "observer", "office", "okinawa", "olayan", "olayangroup", "ollo", "omega", "one", "ong", "onl", "online", "ooo", "open", "oracle", "orange", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "pay", "pccw", "pet", "pfizer", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "place", "play", "playstation", "plumbing", "plus", "pnc", "pohl", "poker", "politie", "porn", "pramerica", "praxi", "press", "prime", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "pub", "pwc", "qpon", "quebec", "quest", "racing", "radio", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "ril", "rio", "rip", "rocks", "rodeo", "rogers", "room", "rsvp", "rugby", "ruhr", "run", "rwe", "ryukyu", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sbi", "sbs", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scot", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "seven", "sew", "sex", "sexy", "sfr", "shangrila", "sharp", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "silk", "sina", "singles", "site", "ski", "skin", "sky", "skype", "sling", "smart", "smile", "sncf", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "spa", "space", "sport", "spot", "srl", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "swatch", "swiss", "sydney", "systems", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tci", "tdk", "team", "tech", "technology", "temasek", "tennis", "teva", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tips", "tires", "tirol", "tjmaxx", "tjx", "tkmaxx", "tmall", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "trade", "trading", "training", "travel", "travelers", "travelersinsurance", "trust", "trv", "tube", "tui", "tunes", "tushu", "tvs", "ubank", "ubs", "unicom", "university", "uno", "uol", "ups", "vacations", "vana", "vanguard", "vegas", "ventures", "verisign", "versicherung", "vet", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "viva", "vivo", "vlaanderen", "vodka", "volvo", "vote", "voting", "voto", "voyage", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "wtc", "wtf", "xbox", "xerox", "xihuan", "xin", "कॉम", "セール", "佛山", "慈善", "集团", "在线", "点看", "คอม", "八卦", "موقع", "公益", "公司", "香格里拉", "网站", "移动", "我爱你", "москва", "католик", "онлайн", "сайт", "联通", "קום", "时尚", "微博", "淡马锡", "ファッション", "орг", "नेट", "ストア", "アマゾン", "삼성", "商标", "商店", "商城", "дети", "ポイント", "新闻", "家電", "كوم", "中文网", "中信", "娱乐", "谷歌", "電訊盈科", "购物", "クラウド", "通販", "网店", "संगठन", "餐厅", "网络", "ком", "亚马逊", "食品", "飞利浦", "手机", "ارامكو", "العليان", "بازار", "ابوظبي", "كاثوليك", "همراه", "닷컴", "政府", "شبكة", "بيتك", "عرب", "机构", "组织机构", "健康", "招聘", "рус", "大拿", "みんな", "グーグル", "世界", "書籍", "网址", "닷넷", "コム", "天主教", "游戏", "vermögensberater", "vermögensberatung", "企业", "信息", "嘉里大酒店", "嘉里", "广东", "政务", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "yodobashi", "yoga", "yokohama", "you", "youtube", "yun", "zappos", "zara", "zero", "zip", "zone", "zuerich", "co.krd", "edu.krd", "art.pl", "gliwice.pl", "krakow.pl", "poznan.pl", "wroc.pl", "zakopane.pl", "lib.de.us", "12chars.dev", "12chars.it", "12chars.pro", "cc.ua", "inf.ua", "ltd.ua", "611.to", "a2hosted.com", "cpserver.com", "aaa.vodka", "*.on-acorn.io", "activetrail.biz", "adaptable.app", "adobeaemcloud.com", "*.dev.adobeaemcloud.com", "aem.live", "hlx.live", "adobeaemcloud.net", "aem.page", "hlx.page", "hlx3.page", "adobeio-static.net", "adobeioruntime.net", "africa.com", "beep.pl", "airkitapps.com", "airkitapps-au.com", "airkitapps.eu", "aivencloud.com", "akadns.net", "akamai.net", "akamai-staging.net", "akamaiedge.net", "akamaiedge-staging.net", "akamaihd.net", "akamaihd-staging.net", "akamaiorigin.net", "akamaiorigin-staging.net", "akamaized.net", "akamaized-staging.net", "edgekey.net", "edgekey-staging.net", "edgesuite.net", "edgesuite-staging.net", "barsy.ca", "*.compute.estate", "*.alces.network", "kasserver.com", "altervista.org", "alwaysdata.net", "myamaze.net", "execute-api.cn-north-1.amazonaws.com.cn", "execute-api.cn-northwest-1.amazonaws.com.cn", "execute-api.af-south-1.amazonaws.com", "execute-api.ap-east-1.amazonaws.com", "execute-api.ap-northeast-1.amazonaws.com", "execute-api.ap-northeast-2.amazonaws.com", "execute-api.ap-northeast-3.amazonaws.com", "execute-api.ap-south-1.amazonaws.com", "execute-api.ap-south-2.amazonaws.com", "execute-api.ap-southeast-1.amazonaws.com", "execute-api.ap-southeast-2.amazonaws.com", "execute-api.ap-southeast-3.amazonaws.com", "execute-api.ap-southeast-4.amazonaws.com", "execute-api.ap-southeast-5.amazonaws.com", "execute-api.ca-central-1.amazonaws.com", "execute-api.ca-west-1.amazonaws.com", "execute-api.eu-central-1.amazonaws.com", "execute-api.eu-central-2.amazonaws.com", "execute-api.eu-north-1.amazonaws.com", "execute-api.eu-south-1.amazonaws.com", "execute-api.eu-south-2.amazonaws.com", "execute-api.eu-west-1.amazonaws.com", "execute-api.eu-west-2.amazonaws.com", "execute-api.eu-west-3.amazonaws.com", "execute-api.il-central-1.amazonaws.com", "execute-api.me-central-1.amazonaws.com", "execute-api.me-south-1.amazonaws.com", "execute-api.sa-east-1.amazonaws.com", "execute-api.us-east-1.amazonaws.com", "execute-api.us-east-2.amazonaws.com", "execute-api.us-gov-east-1.amazonaws.com", "execute-api.us-gov-west-1.amazonaws.com", "execute-api.us-west-1.amazonaws.com", "execute-api.us-west-2.amazonaws.com", "cloudfront.net", "auth.af-south-1.amazoncognito.com", "auth.ap-east-1.amazoncognito.com", "auth.ap-northeast-1.amazoncognito.com", "auth.ap-northeast-2.amazoncognito.com", "auth.ap-northeast-3.amazoncognito.com", "auth.ap-south-1.amazoncognito.com", "auth.ap-south-2.amazoncognito.com", "auth.ap-southeast-1.amazoncognito.com", "auth.ap-southeast-2.amazoncognito.com", "auth.ap-southeast-3.amazoncognito.com", "auth.ap-southeast-4.amazoncognito.com", "auth.ca-central-1.amazoncognito.com", "auth.ca-west-1.amazoncognito.com", "auth.eu-central-1.amazoncognito.com", "auth.eu-central-2.amazoncognito.com", "auth.eu-north-1.amazoncognito.com", "auth.eu-south-1.amazoncognito.com", "auth.eu-south-2.amazoncognito.com", "auth.eu-west-1.amazoncognito.com", "auth.eu-west-2.amazoncognito.com", "auth.eu-west-3.amazoncognito.com", "auth.il-central-1.amazoncognito.com", "auth.me-central-1.amazoncognito.com", "auth.me-south-1.amazoncognito.com", "auth.sa-east-1.amazoncognito.com", "auth.us-east-1.amazoncognito.com", "auth-fips.us-east-1.amazoncognito.com", "auth.us-east-2.amazoncognito.com", "auth-fips.us-east-2.amazoncognito.com", "auth-fips.us-gov-west-1.amazoncognito.com", "auth.us-west-1.amazoncognito.com", "auth-fips.us-west-1.amazoncognito.com", "auth.us-west-2.amazoncognito.com", "auth-fips.us-west-2.amazoncognito.com", "*.compute.amazonaws.com.cn", "*.compute.amazonaws.com", "*.compute-1.amazonaws.com", "us-east-1.amazonaws.com", "emrappui-prod.cn-north-1.amazonaws.com.cn", "emrnotebooks-prod.cn-north-1.amazonaws.com.cn", "emrstudio-prod.cn-north-1.amazonaws.com.cn", "emrappui-prod.cn-northwest-1.amazonaws.com.cn", "emrnotebooks-prod.cn-northwest-1.amazonaws.com.cn", "emrstudio-prod.cn-northwest-1.amazonaws.com.cn", "emrappui-prod.af-south-1.amazonaws.com", "emrnotebooks-prod.af-south-1.amazonaws.com", "emrstudio-prod.af-south-1.amazonaws.com", "emrappui-prod.ap-east-1.amazonaws.com", "emrnotebooks-prod.ap-east-1.amazonaws.com", "emrstudio-prod.ap-east-1.amazonaws.com", "emrappui-prod.ap-northeast-1.amazonaws.com", "emrnotebooks-prod.ap-northeast-1.amazonaws.com", "emrstudio-prod.ap-northeast-1.amazonaws.com", "emrappui-prod.ap-northeast-2.amazonaws.com", "emrnotebooks-prod.ap-northeast-2.amazonaws.com", "emrstudio-prod.ap-northeast-2.amazonaws.com", "emrappui-prod.ap-northeast-3.amazonaws.com", "emrnotebooks-prod.ap-northeast-3.amazonaws.com", "emrstudio-prod.ap-northeast-3.amazonaws.com", "emrappui-prod.ap-south-1.amazonaws.com", "emrnotebooks-prod.ap-south-1.amazonaws.com", "emrstudio-prod.ap-south-1.amazonaws.com", "emrappui-prod.ap-south-2.amazonaws.com", "emrnotebooks-prod.ap-south-2.amazonaws.com", "emrstudio-prod.ap-south-2.amazonaws.com", "emrappui-prod.ap-southeast-1.amazonaws.com", "emrnotebooks-prod.ap-southeast-1.amazonaws.com", "emrstudio-prod.ap-southeast-1.amazonaws.com", "emrappui-prod.ap-southeast-2.amazonaws.com", "emrnotebooks-prod.ap-southeast-2.amazonaws.com", "emrstudio-prod.ap-southeast-2.amazonaws.com", "emrappui-prod.ap-southeast-3.amazonaws.com", "emrnotebooks-prod.ap-southeast-3.amazonaws.com", "emrstudio-prod.ap-southeast-3.amazonaws.com", "emrappui-prod.ap-southeast-4.amazonaws.com", "emrnotebooks-prod.ap-southeast-4.amazonaws.com", "emrstudio-prod.ap-southeast-4.amazonaws.com", "emrappui-prod.ca-central-1.amazonaws.com", "emrnotebooks-prod.ca-central-1.amazonaws.com", "emrstudio-prod.ca-central-1.amazonaws.com", "emrappui-prod.ca-west-1.amazonaws.com", "emrnotebooks-prod.ca-west-1.amazonaws.com", "emrstudio-prod.ca-west-1.amazonaws.com", "emrappui-prod.eu-central-1.amazonaws.com", "emrnotebooks-prod.eu-central-1.amazonaws.com", "emrstudio-prod.eu-central-1.amazonaws.com", "emrappui-prod.eu-central-2.amazonaws.com", "emrnotebooks-prod.eu-central-2.amazonaws.com", "emrstudio-prod.eu-central-2.amazonaws.com", "emrappui-prod.eu-north-1.amazonaws.com", "emrnotebooks-prod.eu-north-1.amazonaws.com", "emrstudio-prod.eu-north-1.amazonaws.com", "emrappui-prod.eu-south-1.amazonaws.com", "emrnotebooks-prod.eu-south-1.amazonaws.com", "emrstudio-prod.eu-south-1.amazonaws.com", "emrappui-prod.eu-south-2.amazonaws.com", "emrnotebooks-prod.eu-south-2.amazonaws.com", "emrstudio-prod.eu-south-2.amazonaws.com", "emrappui-prod.eu-west-1.amazonaws.com", "emrnotebooks-prod.eu-west-1.amazonaws.com", "emrstudio-prod.eu-west-1.amazonaws.com", "emrappui-prod.eu-west-2.amazonaws.com", "emrnotebooks-prod.eu-west-2.amazonaws.com", "emrstudio-prod.eu-west-2.amazonaws.com", "emrappui-prod.eu-west-3.amazonaws.com", "emrnotebooks-prod.eu-west-3.amazonaws.com", "emrstudio-prod.eu-west-3.amazonaws.com", "emrappui-prod.il-central-1.amazonaws.com", "emrnotebooks-prod.il-central-1.amazonaws.com", "emrstudio-prod.il-central-1.amazonaws.com", "emrappui-prod.me-central-1.amazonaws.com", "emrnotebooks-prod.me-central-1.amazonaws.com", "emrstudio-prod.me-central-1.amazonaws.com", "emrappui-prod.me-south-1.amazonaws.com", "emrnotebooks-prod.me-south-1.amazonaws.com", "emrstudio-prod.me-south-1.amazonaws.com", "emrappui-prod.sa-east-1.amazonaws.com", "emrnotebooks-prod.sa-east-1.amazonaws.com", "emrstudio-prod.sa-east-1.amazonaws.com", "emrappui-prod.us-east-1.amazonaws.com", "emrnotebooks-prod.us-east-1.amazonaws.com", "emrstudio-prod.us-east-1.amazonaws.com", "emrappui-prod.us-east-2.amazonaws.com", "emrnotebooks-prod.us-east-2.amazonaws.com", "emrstudio-prod.us-east-2.amazonaws.com", "emrappui-prod.us-gov-east-1.amazonaws.com", "emrnotebooks-prod.us-gov-east-1.amazonaws.com", "emrstudio-prod.us-gov-east-1.amazonaws.com", "emrappui-prod.us-gov-west-1.amazonaws.com", "emrnotebooks-prod.us-gov-west-1.amazonaws.com", "emrstudio-prod.us-gov-west-1.amazonaws.com", "emrappui-prod.us-west-1.amazonaws.com", "emrnotebooks-prod.us-west-1.amazonaws.com", "emrstudio-prod.us-west-1.amazonaws.com", "emrappui-prod.us-west-2.amazonaws.com", "emrnotebooks-prod.us-west-2.amazonaws.com", "emrstudio-prod.us-west-2.amazonaws.com", "*.cn-north-1.airflow.amazonaws.com.cn", "*.cn-northwest-1.airflow.amazonaws.com.cn", "*.af-south-1.airflow.amazonaws.com", "*.ap-east-1.airflow.amazonaws.com", "*.ap-northeast-1.airflow.amazonaws.com", "*.ap-northeast-2.airflow.amazonaws.com", "*.ap-northeast-3.airflow.amazonaws.com", "*.ap-south-1.airflow.amazonaws.com", "*.ap-south-2.airflow.amazonaws.com", "*.ap-southeast-1.airflow.amazonaws.com", "*.ap-southeast-2.airflow.amazonaws.com", "*.ap-southeast-3.airflow.amazonaws.com", "*.ap-southeast-4.airflow.amazonaws.com", "*.ca-central-1.airflow.amazonaws.com", "*.ca-west-1.airflow.amazonaws.com", "*.eu-central-1.airflow.amazonaws.com", "*.eu-central-2.airflow.amazonaws.com", "*.eu-north-1.airflow.amazonaws.com", "*.eu-south-1.airflow.amazonaws.com", "*.eu-south-2.airflow.amazonaws.com", "*.eu-west-1.airflow.amazonaws.com", "*.eu-west-2.airflow.amazonaws.com", "*.eu-west-3.airflow.amazonaws.com", "*.il-central-1.airflow.amazonaws.com", "*.me-central-1.airflow.amazonaws.com", "*.me-south-1.airflow.amazonaws.com", "*.sa-east-1.airflow.amazonaws.com", "*.us-east-1.airflow.amazonaws.com", "*.us-east-2.airflow.amazonaws.com", "*.us-west-1.airflow.amazonaws.com", "*.us-west-2.airflow.amazonaws.com", "s3.dualstack.cn-north-1.amazonaws.com.cn", "s3-accesspoint.dualstack.cn-north-1.amazonaws.com.cn", "s3-website.dualstack.cn-north-1.amazonaws.com.cn", "s3.cn-north-1.amazonaws.com.cn", "s3-accesspoint.cn-north-1.amazonaws.com.cn", "s3-deprecated.cn-north-1.amazonaws.com.cn", "s3-object-lambda.cn-north-1.amazonaws.com.cn", "s3-website.cn-north-1.amazonaws.com.cn", "s3.dualstack.cn-northwest-1.amazonaws.com.cn", "s3-accesspoint.dualstack.cn-northwest-1.amazonaws.com.cn", "s3.cn-northwest-1.amazonaws.com.cn", "s3-accesspoint.cn-northwest-1.amazonaws.com.cn", "s3-object-lambda.cn-northwest-1.amazonaws.com.cn", "s3-website.cn-northwest-1.amazonaws.com.cn", "s3.dualstack.af-south-1.amazonaws.com", "s3-accesspoint.dualstack.af-south-1.amazonaws.com", "s3-website.dualstack.af-south-1.amazonaws.com", "s3.af-south-1.amazonaws.com", "s3-accesspoint.af-south-1.amazonaws.com", "s3-object-lambda.af-south-1.amazonaws.com", "s3-website.af-south-1.amazonaws.com", "s3.dualstack.ap-east-1.amazonaws.com", "s3-accesspoint.dualstack.ap-east-1.amazonaws.com", "s3.ap-east-1.amazonaws.com", "s3-accesspoint.ap-east-1.amazonaws.com", "s3-object-lambda.ap-east-1.amazonaws.com", "s3-website.ap-east-1.amazonaws.com", "s3.dualstack.ap-northeast-1.amazonaws.com", "s3-accesspoint.dualstack.ap-northeast-1.amazonaws.com", "s3-website.dualstack.ap-northeast-1.amazonaws.com", "s3.ap-northeast-1.amazonaws.com", "s3-accesspoint.ap-northeast-1.amazonaws.com", "s3-object-lambda.ap-northeast-1.amazonaws.com", "s3-website.ap-northeast-1.amazonaws.com", "s3.dualstack.ap-northeast-2.amazonaws.com", "s3-accesspoint.dualstack.ap-northeast-2.amazonaws.com", "s3-website.dualstack.ap-northeast-2.amazonaws.com", "s3.ap-northeast-2.amazonaws.com", "s3-accesspoint.ap-northeast-2.amazonaws.com", "s3-object-lambda.ap-northeast-2.amazonaws.com", "s3-website.ap-northeast-2.amazonaws.com", "s3.dualstack.ap-northeast-3.amazonaws.com", "s3-accesspoint.dualstack.ap-northeast-3.amazonaws.com", "s3-website.dualstack.ap-northeast-3.amazonaws.com", "s3.ap-northeast-3.amazonaws.com", "s3-accesspoint.ap-northeast-3.amazonaws.com", "s3-object-lambda.ap-northeast-3.amazonaws.com", "s3-website.ap-northeast-3.amazonaws.com", "s3.dualstack.ap-south-1.amazonaws.com", "s3-accesspoint.dualstack.ap-south-1.amazonaws.com", "s3-website.dualstack.ap-south-1.amazonaws.com", "s3.ap-south-1.amazonaws.com", "s3-accesspoint.ap-south-1.amazonaws.com", "s3-object-lambda.ap-south-1.amazonaws.com", "s3-website.ap-south-1.amazonaws.com", "s3.dualstack.ap-south-2.amazonaws.com", "s3-accesspoint.dualstack.ap-south-2.amazonaws.com", "s3-website.dualstack.ap-south-2.amazonaws.com", "s3.ap-south-2.amazonaws.com", "s3-accesspoint.ap-south-2.amazonaws.com", "s3-object-lambda.ap-south-2.amazonaws.com", "s3-website.ap-south-2.amazonaws.com", "s3.dualstack.ap-southeast-1.amazonaws.com", "s3-accesspoint.dualstack.ap-southeast-1.amazonaws.com", "s3-website.dualstack.ap-southeast-1.amazonaws.com", "s3.ap-southeast-1.amazonaws.com", "s3-accesspoint.ap-southeast-1.amazonaws.com", "s3-object-lambda.ap-southeast-1.amazonaws.com", "s3-website.ap-southeast-1.amazonaws.com", "s3.dualstack.ap-southeast-2.amazonaws.com", "s3-accesspoint.dualstack.ap-southeast-2.amazonaws.com", "s3-website.dualstack.ap-southeast-2.amazonaws.com", "s3.ap-southeast-2.amazonaws.com", "s3-accesspoint.ap-southeast-2.amazonaws.com", "s3-object-lambda.ap-southeast-2.amazonaws.com", "s3-website.ap-southeast-2.amazonaws.com", "s3.dualstack.ap-southeast-3.amazonaws.com", "s3-accesspoint.dualstack.ap-southeast-3.amazonaws.com", "s3-website.dualstack.ap-southeast-3.amazonaws.com", "s3.ap-southeast-3.amazonaws.com", "s3-accesspoint.ap-southeast-3.amazonaws.com", "s3-object-lambda.ap-southeast-3.amazonaws.com", "s3-website.ap-southeast-3.amazonaws.com", "s3.dualstack.ap-southeast-4.amazonaws.com", "s3-accesspoint.dualstack.ap-southeast-4.amazonaws.com", "s3-website.dualstack.ap-southeast-4.amazonaws.com", "s3.ap-southeast-4.amazonaws.com", "s3-accesspoint.ap-southeast-4.amazonaws.com", "s3-object-lambda.ap-southeast-4.amazonaws.com", "s3-website.ap-southeast-4.amazonaws.com", "s3.dualstack.ap-southeast-5.amazonaws.com", "s3-accesspoint.dualstack.ap-southeast-5.amazonaws.com", "s3-website.dualstack.ap-southeast-5.amazonaws.com", "s3.ap-southeast-5.amazonaws.com", "s3-accesspoint.ap-southeast-5.amazonaws.com", "s3-deprecated.ap-southeast-5.amazonaws.com", "s3-object-lambda.ap-southeast-5.amazonaws.com", "s3-website.ap-southeast-5.amazonaws.com", "s3.dualstack.ca-central-1.amazonaws.com", "s3-accesspoint.dualstack.ca-central-1.amazonaws.com", "s3-accesspoint-fips.dualstack.ca-central-1.amazonaws.com", "s3-fips.dualstack.ca-central-1.amazonaws.com", "s3-website.dualstack.ca-central-1.amazonaws.com", "s3.ca-central-1.amazonaws.com", "s3-accesspoint.ca-central-1.amazonaws.com", "s3-accesspoint-fips.ca-central-1.amazonaws.com", "s3-fips.ca-central-1.amazonaws.com", "s3-object-lambda.ca-central-1.amazonaws.com", "s3-website.ca-central-1.amazonaws.com", "s3.dualstack.ca-west-1.amazonaws.com", "s3-accesspoint.dualstack.ca-west-1.amazonaws.com", "s3-accesspoint-fips.dualstack.ca-west-1.amazonaws.com", "s3-fips.dualstack.ca-west-1.amazonaws.com", "s3-website.dualstack.ca-west-1.amazonaws.com", "s3.ca-west-1.amazonaws.com", "s3-accesspoint.ca-west-1.amazonaws.com", "s3-accesspoint-fips.ca-west-1.amazonaws.com", "s3-fips.ca-west-1.amazonaws.com", "s3-object-lambda.ca-west-1.amazonaws.com", "s3-website.ca-west-1.amazonaws.com", "s3.dualstack.eu-central-1.amazonaws.com", "s3-accesspoint.dualstack.eu-central-1.amazonaws.com", "s3-website.dualstack.eu-central-1.amazonaws.com", "s3.eu-central-1.amazonaws.com", "s3-accesspoint.eu-central-1.amazonaws.com", "s3-object-lambda.eu-central-1.amazonaws.com", "s3-website.eu-central-1.amazonaws.com", "s3.dualstack.eu-central-2.amazonaws.com", "s3-accesspoint.dualstack.eu-central-2.amazonaws.com", "s3-website.dualstack.eu-central-2.amazonaws.com", "s3.eu-central-2.amazonaws.com", "s3-accesspoint.eu-central-2.amazonaws.com", "s3-object-lambda.eu-central-2.amazonaws.com", "s3-website.eu-central-2.amazonaws.com", "s3.dualstack.eu-north-1.amazonaws.com", "s3-accesspoint.dualstack.eu-north-1.amazonaws.com", "s3.eu-north-1.amazonaws.com", "s3-accesspoint.eu-north-1.amazonaws.com", "s3-object-lambda.eu-north-1.amazonaws.com", "s3-website.eu-north-1.amazonaws.com", "s3.dualstack.eu-south-1.amazonaws.com", "s3-accesspoint.dualstack.eu-south-1.amazonaws.com", "s3-website.dualstack.eu-south-1.amazonaws.com", "s3.eu-south-1.amazonaws.com", "s3-accesspoint.eu-south-1.amazonaws.com", "s3-object-lambda.eu-south-1.amazonaws.com", "s3-website.eu-south-1.amazonaws.com", "s3.dualstack.eu-south-2.amazonaws.com", "s3-accesspoint.dualstack.eu-south-2.amazonaws.com", "s3-website.dualstack.eu-south-2.amazonaws.com", "s3.eu-south-2.amazonaws.com", "s3-accesspoint.eu-south-2.amazonaws.com", "s3-object-lambda.eu-south-2.amazonaws.com", "s3-website.eu-south-2.amazonaws.com", "s3.dualstack.eu-west-1.amazonaws.com", "s3-accesspoint.dualstack.eu-west-1.amazonaws.com", "s3-website.dualstack.eu-west-1.amazonaws.com", "s3.eu-west-1.amazonaws.com", "s3-accesspoint.eu-west-1.amazonaws.com", "s3-deprecated.eu-west-1.amazonaws.com", "s3-object-lambda.eu-west-1.amazonaws.com", "s3-website.eu-west-1.amazonaws.com", "s3.dualstack.eu-west-2.amazonaws.com", "s3-accesspoint.dualstack.eu-west-2.amazonaws.com", "s3.eu-west-2.amazonaws.com", "s3-accesspoint.eu-west-2.amazonaws.com", "s3-object-lambda.eu-west-2.amazonaws.com", "s3-website.eu-west-2.amazonaws.com", "s3.dualstack.eu-west-3.amazonaws.com", "s3-accesspoint.dualstack.eu-west-3.amazonaws.com", "s3-website.dualstack.eu-west-3.amazonaws.com", "s3.eu-west-3.amazonaws.com", "s3-accesspoint.eu-west-3.amazonaws.com", "s3-object-lambda.eu-west-3.amazonaws.com", "s3-website.eu-west-3.amazonaws.com", "s3.dualstack.il-central-1.amazonaws.com", "s3-accesspoint.dualstack.il-central-1.amazonaws.com", "s3-website.dualstack.il-central-1.amazonaws.com", "s3.il-central-1.amazonaws.com", "s3-accesspoint.il-central-1.amazonaws.com", "s3-object-lambda.il-central-1.amazonaws.com", "s3-website.il-central-1.amazonaws.com", "s3.dualstack.me-central-1.amazonaws.com", "s3-accesspoint.dualstack.me-central-1.amazonaws.com", "s3-website.dualstack.me-central-1.amazonaws.com", "s3.me-central-1.amazonaws.com", "s3-accesspoint.me-central-1.amazonaws.com", "s3-object-lambda.me-central-1.amazonaws.com", "s3-website.me-central-1.amazonaws.com", "s3.dualstack.me-south-1.amazonaws.com", "s3-accesspoint.dualstack.me-south-1.amazonaws.com", "s3.me-south-1.amazonaws.com", "s3-accesspoint.me-south-1.amazonaws.com", "s3-object-lambda.me-south-1.amazonaws.com", "s3-website.me-south-1.amazonaws.com", "s3.amazonaws.com", "s3-1.amazonaws.com", "s3-ap-east-1.amazonaws.com", "s3-ap-northeast-1.amazonaws.com", "s3-ap-northeast-2.amazonaws.com", "s3-ap-northeast-3.amazonaws.com", "s3-ap-south-1.amazonaws.com", "s3-ap-southeast-1.amazonaws.com", "s3-ap-southeast-2.amazonaws.com", "s3-ca-central-1.amazonaws.com", "s3-eu-central-1.amazonaws.com", "s3-eu-north-1.amazonaws.com", "s3-eu-west-1.amazonaws.com", "s3-eu-west-2.amazonaws.com", "s3-eu-west-3.amazonaws.com", "s3-external-1.amazonaws.com", "s3-fips-us-gov-east-1.amazonaws.com", "s3-fips-us-gov-west-1.amazonaws.com", "mrap.accesspoint.s3-global.amazonaws.com", "s3-me-south-1.amazonaws.com", "s3-sa-east-1.amazonaws.com", "s3-us-east-2.amazonaws.com", "s3-us-gov-east-1.amazonaws.com", "s3-us-gov-west-1.amazonaws.com", "s3-us-west-1.amazonaws.com", "s3-us-west-2.amazonaws.com", "s3-website-ap-northeast-1.amazonaws.com", "s3-website-ap-southeast-1.amazonaws.com", "s3-website-ap-southeast-2.amazonaws.com", "s3-website-eu-west-1.amazonaws.com", "s3-website-sa-east-1.amazonaws.com", "s3-website-us-east-1.amazonaws.com", "s3-website-us-gov-west-1.amazonaws.com", "s3-website-us-west-1.amazonaws.com", "s3-website-us-west-2.amazonaws.com", "s3.dualstack.sa-east-1.amazonaws.com", "s3-accesspoint.dualstack.sa-east-1.amazonaws.com", "s3-website.dualstack.sa-east-1.amazonaws.com", "s3.sa-east-1.amazonaws.com", "s3-accesspoint.sa-east-1.amazonaws.com", "s3-object-lambda.sa-east-1.amazonaws.com", "s3-website.sa-east-1.amazonaws.com", "s3.dualstack.us-east-1.amazonaws.com", "s3-accesspoint.dualstack.us-east-1.amazonaws.com", "s3-accesspoint-fips.dualstack.us-east-1.amazonaws.com", "s3-fips.dualstack.us-east-1.amazonaws.com", "s3-website.dualstack.us-east-1.amazonaws.com", "s3.us-east-1.amazonaws.com", "s3-accesspoint.us-east-1.amazonaws.com", "s3-accesspoint-fips.us-east-1.amazonaws.com", "s3-deprecated.us-east-1.amazonaws.com", "s3-fips.us-east-1.amazonaws.com", "s3-object-lambda.us-east-1.amazonaws.com", "s3-website.us-east-1.amazonaws.com", "s3.dualstack.us-east-2.amazonaws.com", "s3-accesspoint.dualstack.us-east-2.amazonaws.com", "s3-accesspoint-fips.dualstack.us-east-2.amazonaws.com", "s3-fips.dualstack.us-east-2.amazonaws.com", "s3-website.dualstack.us-east-2.amazonaws.com", "s3.us-east-2.amazonaws.com", "s3-accesspoint.us-east-2.amazonaws.com", "s3-accesspoint-fips.us-east-2.amazonaws.com", "s3-deprecated.us-east-2.amazonaws.com", "s3-fips.us-east-2.amazonaws.com", "s3-object-lambda.us-east-2.amazonaws.com", "s3-website.us-east-2.amazonaws.com", "s3.dualstack.us-gov-east-1.amazonaws.com", "s3-accesspoint.dualstack.us-gov-east-1.amazonaws.com", "s3-accesspoint-fips.dualstack.us-gov-east-1.amazonaws.com", "s3-fips.dualstack.us-gov-east-1.amazonaws.com", "s3.us-gov-east-1.amazonaws.com", "s3-accesspoint.us-gov-east-1.amazonaws.com", "s3-accesspoint-fips.us-gov-east-1.amazonaws.com", "s3-fips.us-gov-east-1.amazonaws.com", "s3-object-lambda.us-gov-east-1.amazonaws.com", "s3-website.us-gov-east-1.amazonaws.com", "s3.dualstack.us-gov-west-1.amazonaws.com", "s3-accesspoint.dualstack.us-gov-west-1.amazonaws.com", "s3-accesspoint-fips.dualstack.us-gov-west-1.amazonaws.com", "s3-fips.dualstack.us-gov-west-1.amazonaws.com", "s3.us-gov-west-1.amazonaws.com", "s3-accesspoint.us-gov-west-1.amazonaws.com", "s3-accesspoint-fips.us-gov-west-1.amazonaws.com", "s3-fips.us-gov-west-1.amazonaws.com", "s3-object-lambda.us-gov-west-1.amazonaws.com", "s3-website.us-gov-west-1.amazonaws.com", "s3.dualstack.us-west-1.amazonaws.com", "s3-accesspoint.dualstack.us-west-1.amazonaws.com", "s3-accesspoint-fips.dualstack.us-west-1.amazonaws.com", "s3-fips.dualstack.us-west-1.amazonaws.com", "s3-website.dualstack.us-west-1.amazonaws.com", "s3.us-west-1.amazonaws.com", "s3-accesspoint.us-west-1.amazonaws.com", "s3-accesspoint-fips.us-west-1.amazonaws.com", "s3-fips.us-west-1.amazonaws.com", "s3-object-lambda.us-west-1.amazonaws.com", "s3-website.us-west-1.amazonaws.com", "s3.dualstack.us-west-2.amazonaws.com", "s3-accesspoint.dualstack.us-west-2.amazonaws.com", "s3-accesspoint-fips.dualstack.us-west-2.amazonaws.com", "s3-fips.dualstack.us-west-2.amazonaws.com", "s3-website.dualstack.us-west-2.amazonaws.com", "s3.us-west-2.amazonaws.com", "s3-accesspoint.us-west-2.amazonaws.com", "s3-accesspoint-fips.us-west-2.amazonaws.com", "s3-deprecated.us-west-2.amazonaws.com", "s3-fips.us-west-2.amazonaws.com", "s3-object-lambda.us-west-2.amazonaws.com", "s3-website.us-west-2.amazonaws.com", "labeling.ap-northeast-1.sagemaker.aws", "labeling.ap-northeast-2.sagemaker.aws", "labeling.ap-south-1.sagemaker.aws", "labeling.ap-southeast-1.sagemaker.aws", "labeling.ap-southeast-2.sagemaker.aws", "labeling.ca-central-1.sagemaker.aws", "labeling.eu-central-1.sagemaker.aws", "labeling.eu-west-1.sagemaker.aws", "labeling.eu-west-2.sagemaker.aws", "labeling.us-east-1.sagemaker.aws", "labeling.us-east-2.sagemaker.aws", "labeling.us-west-2.sagemaker.aws", "notebook.af-south-1.sagemaker.aws", "notebook.ap-east-1.sagemaker.aws", "notebook.ap-northeast-1.sagemaker.aws", "notebook.ap-northeast-2.sagemaker.aws", "notebook.ap-northeast-3.sagemaker.aws", "notebook.ap-south-1.sagemaker.aws", "notebook.ap-south-2.sagemaker.aws", "notebook.ap-southeast-1.sagemaker.aws", "notebook.ap-southeast-2.sagemaker.aws", "notebook.ap-southeast-3.sagemaker.aws", "notebook.ap-southeast-4.sagemaker.aws", "notebook.ca-central-1.sagemaker.aws", "notebook-fips.ca-central-1.sagemaker.aws", "notebook.ca-west-1.sagemaker.aws", "notebook-fips.ca-west-1.sagemaker.aws", "notebook.eu-central-1.sagemaker.aws", "notebook.eu-central-2.sagemaker.aws", "notebook.eu-north-1.sagemaker.aws", "notebook.eu-south-1.sagemaker.aws", "notebook.eu-south-2.sagemaker.aws", "notebook.eu-west-1.sagemaker.aws", "notebook.eu-west-2.sagemaker.aws", "notebook.eu-west-3.sagemaker.aws", "notebook.il-central-1.sagemaker.aws", "notebook.me-central-1.sagemaker.aws", "notebook.me-south-1.sagemaker.aws", "notebook.sa-east-1.sagemaker.aws", "notebook.us-east-1.sagemaker.aws", "notebook-fips.us-east-1.sagemaker.aws", "notebook.us-east-2.sagemaker.aws", "notebook-fips.us-east-2.sagemaker.aws", "notebook.us-gov-east-1.sagemaker.aws", "notebook-fips.us-gov-east-1.sagemaker.aws", "notebook.us-gov-west-1.sagemaker.aws", "notebook-fips.us-gov-west-1.sagemaker.aws", "notebook.us-west-1.sagemaker.aws", "notebook-fips.us-west-1.sagemaker.aws", "notebook.us-west-2.sagemaker.aws", "notebook-fips.us-west-2.sagemaker.aws", "notebook.cn-north-1.sagemaker.com.cn", "notebook.cn-northwest-1.sagemaker.com.cn", "studio.af-south-1.sagemaker.aws", "studio.ap-east-1.sagemaker.aws", "studio.ap-northeast-1.sagemaker.aws", "studio.ap-northeast-2.sagemaker.aws", "studio.ap-northeast-3.sagemaker.aws", "studio.ap-south-1.sagemaker.aws", "studio.ap-southeast-1.sagemaker.aws", "studio.ap-southeast-2.sagemaker.aws", "studio.ap-southeast-3.sagemaker.aws", "studio.ca-central-1.sagemaker.aws", "studio.eu-central-1.sagemaker.aws", "studio.eu-north-1.sagemaker.aws", "studio.eu-south-1.sagemaker.aws", "studio.eu-south-2.sagemaker.aws", "studio.eu-west-1.sagemaker.aws", "studio.eu-west-2.sagemaker.aws", "studio.eu-west-3.sagemaker.aws", "studio.il-central-1.sagemaker.aws", "studio.me-central-1.sagemaker.aws", "studio.me-south-1.sagemaker.aws", "studio.sa-east-1.sagemaker.aws", "studio.us-east-1.sagemaker.aws", "studio.us-east-2.sagemaker.aws", "studio.us-gov-east-1.sagemaker.aws", "studio-fips.us-gov-east-1.sagemaker.aws", "studio.us-gov-west-1.sagemaker.aws", "studio-fips.us-gov-west-1.sagemaker.aws", "studio.us-west-1.sagemaker.aws", "studio.us-west-2.sagemaker.aws", "studio.cn-north-1.sagemaker.com.cn", "studio.cn-northwest-1.sagemaker.com.cn", "*.experiments.sagemaker.aws", "analytics-gateway.ap-northeast-1.amazonaws.com", "analytics-gateway.ap-northeast-2.amazonaws.com", "analytics-gateway.ap-south-1.amazonaws.com", "analytics-gateway.ap-southeast-1.amazonaws.com", "analytics-gateway.ap-southeast-2.amazonaws.com", "analytics-gateway.eu-central-1.amazonaws.com", "analytics-gateway.eu-west-1.amazonaws.com", "analytics-gateway.us-east-1.amazonaws.com", "analytics-gateway.us-east-2.amazonaws.com", "analytics-gateway.us-west-2.amazonaws.com", "amplifyapp.com", "*.awsapprunner.com", "webview-assets.aws-cloud9.af-south-1.amazonaws.com", "vfs.cloud9.af-south-1.amazonaws.com", "webview-assets.cloud9.af-south-1.amazonaws.com", "webview-assets.aws-cloud9.ap-east-1.amazonaws.com", "vfs.cloud9.ap-east-1.amazonaws.com", "webview-assets.cloud9.ap-east-1.amazonaws.com", "webview-assets.aws-cloud9.ap-northeast-1.amazonaws.com", "vfs.cloud9.ap-northeast-1.amazonaws.com", "webview-assets.cloud9.ap-northeast-1.amazonaws.com", "webview-assets.aws-cloud9.ap-northeast-2.amazonaws.com", "vfs.cloud9.ap-northeast-2.amazonaws.com", "webview-assets.cloud9.ap-northeast-2.amazonaws.com", "webview-assets.aws-cloud9.ap-northeast-3.amazonaws.com", "vfs.cloud9.ap-northeast-3.amazonaws.com", "webview-assets.cloud9.ap-northeast-3.amazonaws.com", "webview-assets.aws-cloud9.ap-south-1.amazonaws.com", "vfs.cloud9.ap-south-1.amazonaws.com", "webview-assets.cloud9.ap-south-1.amazonaws.com", "webview-assets.aws-cloud9.ap-southeast-1.amazonaws.com", "vfs.cloud9.ap-southeast-1.amazonaws.com", "webview-assets.cloud9.ap-southeast-1.amazonaws.com", "webview-assets.aws-cloud9.ap-southeast-2.amazonaws.com", "vfs.cloud9.ap-southeast-2.amazonaws.com", "webview-assets.cloud9.ap-southeast-2.amazonaws.com", "webview-assets.aws-cloud9.ca-central-1.amazonaws.com", "vfs.cloud9.ca-central-1.amazonaws.com", "webview-assets.cloud9.ca-central-1.amazonaws.com", "webview-assets.aws-cloud9.eu-central-1.amazonaws.com", "vfs.cloud9.eu-central-1.amazonaws.com", "webview-assets.cloud9.eu-central-1.amazonaws.com", "webview-assets.aws-cloud9.eu-north-1.amazonaws.com", "vfs.cloud9.eu-north-1.amazonaws.com", "webview-assets.cloud9.eu-north-1.amazonaws.com", "webview-assets.aws-cloud9.eu-south-1.amazonaws.com", "vfs.cloud9.eu-south-1.amazonaws.com", "webview-assets.cloud9.eu-south-1.amazonaws.com", "webview-assets.aws-cloud9.eu-west-1.amazonaws.com", "vfs.cloud9.eu-west-1.amazonaws.com", "webview-assets.cloud9.eu-west-1.amazonaws.com", "webview-assets.aws-cloud9.eu-west-2.amazonaws.com", "vfs.cloud9.eu-west-2.amazonaws.com", "webview-assets.cloud9.eu-west-2.amazonaws.com", "webview-assets.aws-cloud9.eu-west-3.amazonaws.com", "vfs.cloud9.eu-west-3.amazonaws.com", "webview-assets.cloud9.eu-west-3.amazonaws.com", "webview-assets.aws-cloud9.il-central-1.amazonaws.com", "vfs.cloud9.il-central-1.amazonaws.com", "webview-assets.aws-cloud9.me-south-1.amazonaws.com", "vfs.cloud9.me-south-1.amazonaws.com", "webview-assets.cloud9.me-south-1.amazonaws.com", "webview-assets.aws-cloud9.sa-east-1.amazonaws.com", "vfs.cloud9.sa-east-1.amazonaws.com", "webview-assets.cloud9.sa-east-1.amazonaws.com", "webview-assets.aws-cloud9.us-east-1.amazonaws.com", "vfs.cloud9.us-east-1.amazonaws.com", "webview-assets.cloud9.us-east-1.amazonaws.com", "webview-assets.aws-cloud9.us-east-2.amazonaws.com", "vfs.cloud9.us-east-2.amazonaws.com", "webview-assets.cloud9.us-east-2.amazonaws.com", "webview-assets.aws-cloud9.us-west-1.amazonaws.com", "vfs.cloud9.us-west-1.amazonaws.com", "webview-assets.cloud9.us-west-1.amazonaws.com", "webview-assets.aws-cloud9.us-west-2.amazonaws.com", "vfs.cloud9.us-west-2.amazonaws.com", "webview-assets.cloud9.us-west-2.amazonaws.com", "awsapps.com", "cn-north-1.eb.amazonaws.com.cn", "cn-northwest-1.eb.amazonaws.com.cn", "elasticbeanstalk.com", "af-south-1.elasticbeanstalk.com", "ap-east-1.elasticbeanstalk.com", "ap-northeast-1.elasticbeanstalk.com", "ap-northeast-2.elasticbeanstalk.com", "ap-northeast-3.elasticbeanstalk.com", "ap-south-1.elasticbeanstalk.com", "ap-southeast-1.elasticbeanstalk.com", "ap-southeast-2.elasticbeanstalk.com", "ap-southeast-3.elasticbeanstalk.com", "ca-central-1.elasticbeanstalk.com", "eu-central-1.elasticbeanstalk.com", "eu-north-1.elasticbeanstalk.com", "eu-south-1.elasticbeanstalk.com", "eu-west-1.elasticbeanstalk.com", "eu-west-2.elasticbeanstalk.com", "eu-west-3.elasticbeanstalk.com", "il-central-1.elasticbeanstalk.com", "me-south-1.elasticbeanstalk.com", "sa-east-1.elasticbeanstalk.com", "us-east-1.elasticbeanstalk.com", "us-east-2.elasticbeanstalk.com", "us-gov-east-1.elasticbeanstalk.com", "us-gov-west-1.elasticbeanstalk.com", "us-west-1.elasticbeanstalk.com", "us-west-2.elasticbeanstalk.com", "*.elb.amazonaws.com.cn", "*.elb.amazonaws.com", "awsglobalaccelerator.com", "*.private.repost.aws", "eero.online", "eero-stage.online", "apigee.io", "panel.dev", "siiites.com", "appspacehosted.com", "appspaceusercontent.com", "appudo.net", "on-aptible.com", "f5.si", "arvanedge.ir", "user.aseinet.ne.jp", "gv.vc", "d.gv.vc", "user.party.eus", "pimienta.org", "poivron.org", "potager.org", "sweetpepper.org", "myasustor.com", "cdn.prod.atlassian-dev.net", "translated.page", "myfritz.link", "myfritz.net", "onavstack.net", "*.awdev.ca", "*.advisor.ws", "ecommerce-shop.pl", "b-data.io", "balena-devices.com", "base.ec", "official.ec", "buyshop.jp", "fashionstore.jp", "handcrafted.jp", "kawaiishop.jp", "supersale.jp", "theshop.jp", "shopselect.net", "base.shop", "beagleboard.io", "*.beget.app", "pages.gay", "bnr.la", "bitbucket.io", "blackbaudcdn.net", "of.je", "bluebite.io", "boomla.net", "boutir.com", "boxfuse.io", "square7.ch", "bplaced.com", "bplaced.de", "square7.de", "bplaced.net", "square7.net", "*.s.brave.io", "shop.brendly.hr", "shop.brendly.rs", "browsersafetymark.io", "radio.am", "radio.fm", "uk0.bigv.io", "dh.bytemark.co.uk", "vm.bytemark.co.uk", "cafjs.com", "canva-apps.cn", "*.my.canvasite.cn", "canva-apps.com", "*.my.canva.site", "drr.ac", "uwu.ai", "carrd.co", "crd.co", "ju.mp", "api.gov.uk", "cdn77-storage.com", "rsc.contentproxy9.cz", "r.cdn77.net", "cdn77-ssl.net", "c.cdn77.org", "rsc.cdn77.org", "ssl.origin.cdn77-secure.org", "za.bz", "br.com", "cn.com", "de.com", "eu.com", "jpn.com", "mex.com", "ru.com", "sa.com", "uk.com", "us.com", "za.com", "com.de", "gb.net", "hu.net", "jp.net", "se.net", "uk.net", "ae.org", "com.se", "cx.ua", "discourse.group", "discourse.team", "clerk.app", "clerkstage.app", "*.lcl.dev", "*.lclstage.dev", "*.stg.dev", "*.stgstage.dev", "cleverapps.cc", "*.services.clever-cloud.com", "cleverapps.io", "cleverapps.tech", "clickrising.net", "cloudns.asia", "cloudns.be", "cloud-ip.biz", "cloudns.biz", "cloudns.cc", "cloudns.ch", "cloudns.cl", "cloudns.club", "dnsabr.com", "ip-ddns.com", "cloudns.cx", "cloudns.eu", "cloudns.in", "cloudns.info", "ddns-ip.net", "dns-cloud.net", "dns-dynamic.net", "cloudns.nz", "cloudns.org", "ip-dynamic.org", "cloudns.ph", "cloudns.pro", "cloudns.pw", "cloudns.us", "c66.me", "cloud66.ws", "cloud66.zone", "jdevcloud.com", "wpdevcloud.com", "cloudaccess.host", "freesite.host", "cloudaccess.net", "*.cloudera.site", "cf-ipfs.com", "cloudflare-ipfs.com", "trycloudflare.com", "pages.dev", "r2.dev", "workers.dev", "cloudflare.net", "cdn.cloudflare.net", "cdn.cloudflareanycast.net", "cdn.cloudflarecn.net", "cdn.cloudflareglobal.net", "cust.cloudscale.ch", "objects.lpg.cloudscale.ch", "objects.rma.cloudscale.ch", "wnext.app", "cnpy.gdn", "*.otap.co", "co.ca", "co.com", "codeberg.page", "csb.app", "preview.csb.app", "co.nl", "co.no", "webhosting.be", "hosting-cluster.nl", "ctfcloud.net", "convex.site", "ac.ru", "edu.ru", "gov.ru", "int.ru", "mil.ru", "test.ru", "dyn.cosidns.de", "dnsupdater.de", "dynamisches-dns.de", "internet-dns.de", "l-o-g-i-n.de", "dynamic-dns.info", "feste-ip.net", "knx-server.net", "static-access.net", "craft.me", "realm.cz", "on.crisp.email", "*.cryptonomic.net", "curv.dev", "cfolks.pl", "cyon.link", "cyon.site", "platform0.app", "fnwk.site", "folionetwork.site", "biz.dk", "co.dk", "firm.dk", "reg.dk", "store.dk", "dyndns.dappnode.io", "builtwithdark.com", "darklang.io", "demo.datadetect.com", "instance.datadetect.com", "edgestack.me", "dattolocal.com", "dattorelay.com", "dattoweb.com", "mydatto.com", "dattolocal.net", "mydatto.net", "ddnss.de", "dyn.ddnss.de", "dyndns.ddnss.de", "dyn-ip24.de", "dyndns1.de", "home-webserver.de", "dyn.home-webserver.de", "myhome-server.de", "ddnss.org", "debian.net", "definima.io", "definima.net", "deno.dev", "deno-staging.dev", "dedyn.io", "deta.app", "deta.dev", "dfirma.pl", "dkonto.pl", "you2.pl", "ondigitalocean.app", "*.digitaloceanspaces.com", "us.kg", "rss.my.id", "diher.solutions", "discordsays.com", "discordsez.com", "jozi.biz", "dnshome.de", "online.th", "shop.th", "drayddns.com", "shoparena.pl", "dreamhosters.com", "durumis.com", "mydrobo.com", "drud.io", "drud.us", "duckdns.org", "dy.fi", "tunk.org", "dyndns.biz", "for-better.biz", "for-more.biz", "for-some.biz", "for-the.biz", "selfip.biz", "webhop.biz", "ftpaccess.cc", "game-server.cc", "myphotos.cc", "scrapping.cc", "blogdns.com", "cechire.com", "dnsalias.com", "dnsdojo.com", "doesntexist.com", "dontexist.com", "doomdns.com", "dyn-o-saur.com", "dynalias.com", "dyndns-at-home.com", "dyndns-at-work.com", "dyndns-blog.com", "dyndns-free.com", "dyndns-home.com", "dyndns-ip.com", "dyndns-mail.com", "dyndns-office.com", "dyndns-pics.com", "dyndns-remote.com", "dyndns-server.com", "dyndns-web.com", "dyndns-wiki.com", "dyndns-work.com", "est-a-la-maison.com", "est-a-la-masion.com", "est-le-patron.com", "est-mon-blogueur.com", "from-ak.com", "from-al.com", "from-ar.com", "from-ca.com", "from-ct.com", "from-dc.com", "from-de.com", "from-fl.com", "from-ga.com", "from-hi.com", "from-ia.com", "from-id.com", "from-il.com", "from-in.com", "from-ks.com", "from-ky.com", "from-ma.com", "from-md.com", "from-mi.com", "from-mn.com", "from-mo.com", "from-ms.com", "from-mt.com", "from-nc.com", "from-nd.com", "from-ne.com", "from-nh.com", "from-nj.com", "from-nm.com", "from-nv.com", "from-oh.com", "from-ok.com", "from-or.com", "from-pa.com", "from-pr.com", "from-ri.com", "from-sc.com", "from-sd.com", "from-tn.com", "from-tx.com", "from-ut.com", "from-va.com", "from-vt.com", "from-wa.com", "from-wi.com", "from-wv.com", "from-wy.com", "getmyip.com", "gotdns.com", "hobby-site.com", "homelinux.com", "homeunix.com", "iamallama.com", "is-a-anarchist.com", "is-a-blogger.com", "is-a-bookkeeper.com", "is-a-bulls-fan.com", "is-a-caterer.com", "is-a-chef.com", "is-a-conservative.com", "is-a-cpa.com", "is-a-cubicle-slave.com", "is-a-democrat.com", "is-a-designer.com", "is-a-doctor.com", "is-a-financialadvisor.com", "is-a-geek.com", "is-a-green.com", "is-a-guru.com", "is-a-hard-worker.com", "is-a-hunter.com", "is-a-landscaper.com", "is-a-lawyer.com", "is-a-liberal.com", "is-a-libertarian.com", "is-a-llama.com", "is-a-musician.com", "is-a-nascarfan.com", "is-a-nurse.com", "is-a-painter.com", "is-a-personaltrainer.com", "is-a-photographer.com", "is-a-player.com", "is-a-republican.com", "is-a-rockstar.com", "is-a-socialist.com", "is-a-student.com", "is-a-teacher.com", "is-a-techie.com", "is-a-therapist.com", "is-an-accountant.com", "is-an-actor.com", "is-an-actress.com", "is-an-anarchist.com", "is-an-artist.com", "is-an-engineer.com", "is-an-entertainer.com", "is-certified.com", "is-gone.com", "is-into-anime.com", "is-into-cars.com", "is-into-cartoons.com", "is-into-games.com", "is-leet.com", "is-not-certified.com", "is-slick.com", "is-uberleet.com", "is-with-theband.com", "isa-geek.com", "isa-hockeynut.com", "issmarterthanyou.com", "likes-pie.com", "likescandy.com", "neat-url.com", "saves-the-whales.com", "selfip.com", "sells-for-less.com", "sells-for-u.com", "servebbs.com", "simple-url.com", "space-to-rent.com", "teaches-yoga.com", "writesthisblog.com", "ath.cx", "fuettertdasnetz.de", "isteingeek.de", "istmein.de", "lebtimnetz.de", "leitungsen.de", "traeumtgerade.de", "barrel-of-knowledge.info", "barrell-of-knowledge.info", "dyndns.info", "for-our.info", "groks-the.info", "groks-this.info", "here-for-more.info", "knowsitall.info", "selfip.info", "webhop.info", "forgot.her.name", "forgot.his.name", "at-band-camp.net", "blogdns.net", "broke-it.net", "buyshouses.net", "dnsalias.net", "dnsdojo.net", "does-it.net", "dontexist.net", "dynalias.net", "dynathome.net", "endofinternet.net", "from-az.net", "from-co.net", "from-la.net", "from-ny.net", "gets-it.net", "ham-radio-op.net", "homeftp.net", "homeip.net", "homelinux.net", "homeunix.net", "in-the-band.net", "is-a-chef.net", "is-a-geek.net", "isa-geek.net", "kicks-ass.net", "office-on-the.net", "podzone.net", "scrapper-site.net", "selfip.net", "sells-it.net", "servebbs.net", "serveftp.net", "thruhere.net", "webhop.net", "merseine.nu", "mine.nu", "shacknet.nu", "blogdns.org", "blogsite.org", "boldlygoingnowhere.org", "dnsalias.org", "dnsdojo.org", "doesntexist.org", "dontexist.org", "doomdns.org", "dvrdns.org", "dynalias.org", "dyndns.org", "go.dyndns.org", "home.dyndns.org", "endofinternet.org", "endoftheinternet.org", "from-me.org", "game-host.org", "gotdns.org", "hobby-site.org", "homedns.org", "homeftp.org", "homelinux.org", "homeunix.org", "is-a-bruinsfan.org", "is-a-candidate.org", "is-a-celticsfan.org", "is-a-chef.org", "is-a-geek.org", "is-a-knight.org", "is-a-linux-user.org", "is-a-patsfan.org", "is-a-soxfan.org", "is-found.org", "is-lost.org", "is-saved.org", "is-very-bad.org", "is-very-evil.org", "is-very-good.org", "is-very-nice.org", "is-very-sweet.org", "isa-geek.org", "kicks-ass.org", "misconfused.org", "podzone.org", "readmyblog.org", "selfip.org", "sellsyourhome.org", "servebbs.org", "serveftp.org", "servegame.org", "stuff-4-sale.org", "webhop.org", "better-than.tv", "dyndns.tv", "on-the-web.tv", "worse-than.tv", "is-by.us", "land-4-sale.us", "stuff-4-sale.us", "dyndns.ws", "mypets.ws", "ddnsfree.com", "ddnsgeek.com", "giize.com", "gleeze.com", "kozow.com", "loseyourip.com", "ooguy.com", "theworkpc.com", "casacam.net", "dynu.net", "accesscam.org", "camdvr.org", "freeddns.org", "mywire.org", "webredirect.org", "myddns.rocks", "dynv6.net", "e4.cz", "easypanel.app", "easypanel.host", "*.ewp.live", "twmail.cc", "twmail.net", "twmail.org", "mymailer.com.tw", "url.tw", "at.emf.camp", "rt.ht", "elementor.cloud", "elementor.cool", "en-root.fr", "mytuleap.com", "tuleap-partners.com", "encr.app", "encoreapi.com", "eu.encoway.cloud", "eu.org", "al.eu.org", "asso.eu.org", "at.eu.org", "au.eu.org", "be.eu.org", "bg.eu.org", "ca.eu.org", "cd.eu.org", "ch.eu.org", "cn.eu.org", "cy.eu.org", "cz.eu.org", "de.eu.org", "dk.eu.org", "edu.eu.org", "ee.eu.org", "es.eu.org", "fi.eu.org", "fr.eu.org", "gr.eu.org", "hr.eu.org", "hu.eu.org", "ie.eu.org", "il.eu.org", "in.eu.org", "int.eu.org", "is.eu.org", "it.eu.org", "jp.eu.org", "kr.eu.org", "lt.eu.org", "lu.eu.org", "lv.eu.org", "me.eu.org", "mk.eu.org", "mt.eu.org", "my.eu.org", "net.eu.org", "ng.eu.org", "nl.eu.org", "no.eu.org", "nz.eu.org", "pl.eu.org", "pt.eu.org", "ro.eu.org", "ru.eu.org", "se.eu.org", "si.eu.org", "sk.eu.org", "tr.eu.org", "uk.eu.org", "us.eu.org", "eurodir.ru", "eu-1.evennode.com", "eu-2.evennode.com", "eu-3.evennode.com", "eu-4.evennode.com", "us-1.evennode.com", "us-2.evennode.com", "us-3.evennode.com", "us-4.evennode.com", "relay.evervault.app", "relay.evervault.dev", "expo.app", "staging.expo.app", "onfabrica.com", "ru.net", "adygeya.ru", "bashkiria.ru", "bir.ru", "cbg.ru", "com.ru", "dagestan.ru", "grozny.ru", "kalmykia.ru", "kustanai.ru", "marine.ru", "mordovia.ru", "msk.ru", "mytis.ru", "nalchik.ru", "nov.ru", "pyatigorsk.ru", "spb.ru", "vladikavkaz.ru", "vladimir.ru", "abkhazia.su", "adygeya.su", "aktyubinsk.su", "arkhangelsk.su", "armenia.su", "ashgabad.su", "azerbaijan.su", "balashov.su", "bashkiria.su", "bryansk.su", "bukhara.su", "chimkent.su", "dagestan.su", "east-kazakhstan.su", "exnet.su", "georgia.su", "grozny.su", "ivanovo.su", "jambyl.su", "kalmykia.su", "kaluga.su", "karacol.su", "karaganda.su", "karelia.su", "khakassia.su", "krasnodar.su", "kurgan.su", "kustanai.su", "lenug.su", "mangyshlak.su", "mordovia.su", "msk.su", "murmansk.su", "nalchik.su", "navoi.su", "north-kazakhstan.su", "nov.su", "obninsk.su", "penza.su", "pokrovsk.su", "sochi.su", "spb.su", "tashkent.su", "termez.su", "togliatti.su", "troitsk.su", "tselinograd.su", "tula.su", "tuva.su", "vladikavkaz.su", "vladimir.su", "vologda.su", "channelsdvr.net", "u.channelsdvr.net", "edgecompute.app", "fastly-edge.com", "fastly-terrarium.com", "freetls.fastly.net", "map.fastly.net", "a.prod.fastly.net", "global.prod.fastly.net", "a.ssl.fastly.net", "b.ssl.fastly.net", "global.ssl.fastly.net", "fastlylb.net", "map.fastlylb.net", "*.user.fm", "fastvps-server.com", "fastvps.host", "myfast.host", "fastvps.site", "myfast.space", "conn.uk", "copro.uk", "hosp.uk", "fedorainfracloud.org", "fedorapeople.org", "cloud.fedoraproject.org", "app.os.fedoraproject.org", "app.os.stg.fedoraproject.org", "mydobiss.com", "fh-muenster.io", "filegear.me", "firebaseapp.com", "fldrv.com", "flutterflow.app", "fly.dev", "shw.io", "edgeapp.net", "forgeblocks.com", "id.forgerock.io", "framer.ai", "framer.app", "framercanvas.com", "framer.media", "framer.photos", "framer.website", "framer.wiki", "0e.vc", "freebox-os.com", "freeboxos.com", "fbx-os.fr", "fbxos.fr", "freebox-os.fr", "freeboxos.fr", "freedesktop.org", "freemyip.com", "*.frusky.de", "wien.funkfeuer.at", "daemon.asia", "dix.asia", "mydns.bz", "0am.jp", "0g0.jp", "0j0.jp", "0t0.jp", "mydns.jp", "pgw.jp", "wjg.jp", "keyword-on.net", "live-on.net", "server-on.net", "mydns.tw", "mydns.vc", "*.futurecms.at", "*.ex.futurecms.at", "*.in.futurecms.at", "futurehosting.at", "futuremailing.at", "*.ex.ortsinfo.at", "*.kunden.ortsinfo.at", "*.statics.cloud", "aliases121.com", "campaign.gov.uk", "service.gov.uk", "independent-commission.uk", "independent-inquest.uk", "independent-inquiry.uk", "independent-panel.uk", "independent-review.uk", "public-inquiry.uk", "royal-commission.uk", "gehirn.ne.jp", "usercontent.jp", "gentapps.com", "gentlentapis.com", "lab.ms", "cdn-edges.net", "localcert.net", "localhostcert.net", "gsj.bz", "githubusercontent.com", "githubpreview.dev", "github.io", "gitlab.io", "gitapp.si", "gitpage.si", "glitch.me", "nog.community", "co.ro", "shop.ro", "lolipop.io", "angry.jp", "babyblue.jp", "babymilk.jp", "backdrop.jp", "bambina.jp", "bitter.jp", "blush.jp", "boo.jp", "boy.jp", "boyfriend.jp", "but.jp", "candypop.jp", "capoo.jp", "catfood.jp", "cheap.jp", "chicappa.jp", "chillout.jp", "chips.jp", "chowder.jp", "chu.jp", "ciao.jp", "cocotte.jp", "coolblog.jp", "cranky.jp", "cutegirl.jp", "daa.jp", "deca.jp", "deci.jp", "digick.jp", "egoism.jp", "fakefur.jp", "fem.jp", "flier.jp", "floppy.jp", "fool.jp", "frenchkiss.jp", "girlfriend.jp", "girly.jp", "gloomy.jp", "gonna.jp", "greater.jp", "hacca.jp", "heavy.jp", "her.jp", "hiho.jp", "hippy.jp", "holy.jp", "hungry.jp", "icurus.jp", "itigo.jp", "jellybean.jp", "kikirara.jp", "kill.jp", "kilo.jp", "kuron.jp", "littlestar.jp", "lolipopmc.jp", "lolitapunk.jp", "lomo.jp", "lovepop.jp", "lovesick.jp", "main.jp", "mods.jp", "mond.jp", "mongolian.jp", "moo.jp", "namaste.jp", "nikita.jp", "nobushi.jp", "noor.jp", "oops.jp", "parallel.jp", "parasite.jp", "pecori.jp", "peewee.jp", "penne.jp", "pepper.jp", "perma.jp", "pigboat.jp", "pinoko.jp", "punyu.jp", "pupu.jp", "pussycat.jp", "pya.jp", "raindrop.jp", "readymade.jp", "sadist.jp", "schoolbus.jp", "secret.jp", "staba.jp", "stripper.jp", "sub.jp", "sunnyday.jp", "thick.jp", "tonkotsu.jp", "under.jp", "upper.jp", "velvet.jp", "verse.jp", "versus.jp", "vivian.jp", "watson.jp", "weblike.jp", "whitesnow.jp", "zombie.jp", "heteml.net", "graphic.design", "goip.de", "blogspot.ae", "blogspot.al", "blogspot.am", "*.hosted.app", "*.run.app", "web.app", "blogspot.com.ar", "blogspot.co.at", "blogspot.com.au", "blogspot.ba", "blogspot.be", "blogspot.bg", "blogspot.bj", "blogspot.com.br", "blogspot.com.by", "blogspot.ca", "blogspot.cf", "blogspot.ch", "blogspot.cl", "blogspot.com.co", "*.0emm.com", "appspot.com", "*.r.appspot.com", "blogspot.com", "codespot.com", "googleapis.com", "googlecode.com", "pagespeedmobilizer.com", "withgoogle.com", "withyoutube.com", "blogspot.cv", "blogspot.com.cy", "blogspot.cz", "blogspot.de", "*.gateway.dev", "blogspot.dk", "blogspot.com.ee", "blogspot.com.eg", "blogspot.com.es", "blogspot.fi", "blogspot.fr", "cloud.goog", "translate.goog", "*.usercontent.goog", "blogspot.gr", "blogspot.hk", "blogspot.hr", "blogspot.hu", "blogspot.co.id", "blogspot.ie", "blogspot.co.il", "blogspot.in", "blogspot.is", "blogspot.it", "blogspot.jp", "blogspot.co.ke", "blogspot.kr", "blogspot.li", "blogspot.lt", "blogspot.lu", "blogspot.md", "blogspot.mk", "blogspot.com.mt", "blogspot.mx", "blogspot.my", "cloudfunctions.net", "blogspot.com.ng", "blogspot.nl", "blogspot.no", "blogspot.co.nz", "blogspot.pe", "blogspot.pt", "blogspot.qa", "blogspot.re", "blogspot.ro", "blogspot.rs", "blogspot.ru", "blogspot.se", "blogspot.sg", "blogspot.si", "blogspot.sk", "blogspot.sn", "blogspot.td", "blogspot.com.tr", "blogspot.tw", "blogspot.ug", "blogspot.co.uk", "blogspot.com.uy", "blogspot.vn", "blogspot.co.za", "goupile.fr", "pymnt.uk", "cloudapps.digital", "london.cloudapps.digital", "gov.nl", "grafana-dev.net", "grayjayleagues.com", "günstigbestellen.de", "günstigliefern.de", "fin.ci", "free.hr", "caa.li", "ua.rs", "conf.se", "häkkinen.fi", "hrsn.dev", "hashbang.sh", "hasura.app", "hasura-app.io", "hatenablog.com", "hatenadiary.com", "hateblo.jp", "hatenablog.jp", "hatenadiary.jp", "hatenadiary.org", "pages.it.hs-heilbronn.de", "pages-research.it.hs-heilbronn.de", "heiyu.space", "helioho.st", "heliohost.us", "hepforge.org", "herokuapp.com", "herokussl.com", "heyflow.page", "heyflow.site", "ravendb.cloud", "ravendb.community", "development.run", "ravendb.run", "homesklep.pl", "*.kin.one", "*.id.pub", "*.kin.pub", "secaas.hk", "hoplix.shop", "orx.biz", "biz.gl", "biz.ng", "co.biz.ng", "dl.biz.ng", "go.biz.ng", "lg.biz.ng", "on.biz.ng", "col.ng", "firm.ng", "gen.ng", "ltd.ng", "ngo.ng", "plc.ng", "ie.ua", "hostyhosting.io", "hf.space", "static.hf.space", "hypernode.io", "iobb.net", "co.cz", "*.moonscale.io", "moonscale.net", "gr.com", "iki.fi", "ibxos.it", "iliadboxos.it", "smushcdn.com", "wphostedmail.com", "wpmucdn.com", "tempurl.host", "wpmudev.host", "dyn-berlin.de", "in-berlin.de", "in-brb.de", "in-butter.de", "in-dsl.de", "in-vpn.de", "in-dsl.net", "in-vpn.net", "in-dsl.org", "in-vpn.org", "biz.at", "info.at", "info.cx", "ac.leg.br", "al.leg.br", "am.leg.br", "ap.leg.br", "ba.leg.br", "ce.leg.br", "df.leg.br", "es.leg.br", "go.leg.br", "ma.leg.br", "mg.leg.br", "ms.leg.br", "mt.leg.br", "pa.leg.br", "pb.leg.br", "pe.leg.br", "pi.leg.br", "pr.leg.br", "rj.leg.br", "rn.leg.br", "ro.leg.br", "rr.leg.br", "rs.leg.br", "sc.leg.br", "se.leg.br", "sp.leg.br", "to.leg.br", "pixolino.com", "na4u.ru", "apps-1and1.com", "live-website.com", "apps-1and1.net", "websitebuilder.online", "app-ionos.space", "iopsys.se", "*.dweb.link", "ipifony.net", "ir.md", "is-a-good.dev", "is-a.dev", "iservschule.de", "mein-iserv.de", "schulplattform.de", "schulserver.de", "test-iserv.de", "iserv.dev", "mel.cloudlets.com.au", "cloud.interhostsolutions.be", "alp1.ae.flow.ch", "appengine.flow.ch", "es-1.axarnet.cloud", "diadem.cloud", "vip.jelastic.cloud", "jele.cloud", "it1.eur.aruba.jenv-aruba.cloud", "it1.jenv-aruba.cloud", "keliweb.cloud", "cs.keliweb.cloud", "oxa.cloud", "tn.oxa.cloud", "uk.oxa.cloud", "primetel.cloud", "uk.primetel.cloud", "ca.reclaim.cloud", "uk.reclaim.cloud", "us.reclaim.cloud", "ch.trendhosting.cloud", "de.trendhosting.cloud", "jele.club", "dopaas.com", "paas.hosted-by-previder.com", "rag-cloud.hosteur.com", "rag-cloud-ch.hosteur.com", "jcloud.ik-server.com", "jcloud-ver-jpc.ik-server.com", "demo.jelastic.com", "paas.massivegrid.com", "jed.wafaicloud.com", "ryd.wafaicloud.com", "j.scaleforce.com.cy", "jelastic.dogado.eu", "fi.cloudplatform.fi", "demo.datacenter.fi", "paas.datacenter.fi", "jele.host", "mircloud.host", "paas.beebyte.io", "sekd1.beebyteapp.io", "jele.io", "jc.neen.it", "jcloud.kz", "cloudjiffy.net", "fra1-de.cloudjiffy.net", "west1-us.cloudjiffy.net", "jls-sto1.elastx.net", "jls-sto2.elastx.net", "jls-sto3.elastx.net", "fr-1.paas.massivegrid.net", "lon-1.paas.massivegrid.net", "lon-2.paas.massivegrid.net", "ny-1.paas.massivegrid.net", "ny-2.paas.massivegrid.net", "sg-1.paas.massivegrid.net", "jelastic.saveincloud.net", "nordeste-idc.saveincloud.net", "j.scaleforce.net", "sdscloud.pl", "unicloud.pl", "mircloud.ru", "enscaled.sg", "jele.site", "jelastic.team", "orangecloud.tn", "j.layershift.co.uk", "phx.enscaled.us", "mircloud.us", "myjino.ru", "*.hosting.myjino.ru", "*.landing.myjino.ru", "*.spectrum.myjino.ru", "*.vps.myjino.ru", "jotelulu.cloud", "webadorsite.com", "jouwweb.site", "*.cns.joyent.com", "*.triton.zone", "js.org", "kaas.gg", "khplay.nl", "kapsi.fi", "ezproxy.kuleuven.be", "kuleuven.cloud", "keymachine.de", "kinghost.net", "uni5.net", "knightpoint.systems", "koobin.events", "webthings.io", "krellian.net", "oya.to", "git-repos.de", "lcube-server.de", "svn-repos.de", "leadpages.co", "lpages.co", "lpusercontent.com", "lelux.site", "libp2p.direct", "runcontainers.dev", "co.business", "co.education", "co.events", "co.financial", "co.network", "co.place", "co.technology", "linkyard-cloud.ch", "linkyard.cloud", "members.linode.com", "*.nodebalancer.linode.com", "*.linodeobjects.com", "ip.linodeusercontent.com", "we.bs", "filegear-sg.me", "ggff.net", "*.user.localcert.dev", "lodz.pl", "pabianice.pl", "plock.pl", "sieradz.pl", "skierniewice.pl", "zgierz.pl", "loginline.app", "loginline.dev", "loginline.io", "loginline.services", "loginline.site", "lohmus.me", "servers.run", "krasnik.pl", "leczna.pl", "lubartow.pl", "lublin.pl", "poniatowa.pl", "swidnik.pl", "glug.org.uk", "lug.org.uk", "lugs.org.uk", "barsy.bg", "barsy.club", "barsycenter.com", "barsyonline.com", "barsy.de", "barsy.dev", "barsy.eu", "barsy.gr", "barsy.in", "barsy.info", "barsy.io", "barsy.me", "barsy.menu", "barsyonline.menu", "barsy.mobi", "barsy.net", "barsy.online", "barsy.org", "barsy.pro", "barsy.pub", "barsy.ro", "barsy.rs", "barsy.shop", "barsyonline.shop", "barsy.site", "barsy.store", "barsy.support", "barsy.uk", "barsy.co.uk", "barsyonline.co.uk", "*.magentosite.cloud", "hb.cldmail.ru", "matlab.cloud", "modelscape.com", "mwcloudnonprod.com", "polyspace.com", "mayfirst.info", "mayfirst.org", "mazeplay.com", "mcdir.me", "mcdir.ru", "vps.mcdir.ru", "mcpre.ru", "mediatech.by", "mediatech.dev", "hra.health", "medusajs.app", "miniserver.com", "memset.net", "messerli.app", "atmeta.com", "apps.fbsbx.com", "*.cloud.metacentrum.cz", "custom.metacentrum.cz", "flt.cloud.muni.cz", "usr.cloud.muni.cz", "meteorapp.com", "eu.meteorapp.com", "co.pl", "*.azurecontainer.io", "azure-api.net", "azure-mobile.net", "azureedge.net", "azurefd.net", "azurestaticapps.net", "1.azurestaticapps.net", "2.azurestaticapps.net", "3.azurestaticapps.net", "4.azurestaticapps.net", "5.azurestaticapps.net", "6.azurestaticapps.net", "7.azurestaticapps.net", "centralus.azurestaticapps.net", "eastasia.azurestaticapps.net", "eastus2.azurestaticapps.net", "westeurope.azurestaticapps.net", "westus2.azurestaticapps.net", "azurewebsites.net", "cloudapp.net", "trafficmanager.net", "blob.core.windows.net", "servicebus.windows.net", "routingthecloud.com", "sn.mynetname.net", "routingthecloud.net", "routingthecloud.org", "csx.cc", "mydbserver.com", "webspaceconfig.de", "mittwald.info", "mittwaldserver.info", "typo3server.info", "project.space", "modx.dev", "bmoattachments.org", "net.ru", "org.ru", "pp.ru", "hostedpi.com", "caracal.mythic-beasts.com", "customer.mythic-beasts.com", "fentiger.mythic-beasts.com", "lynx.mythic-beasts.com", "ocelot.mythic-beasts.com", "oncilla.mythic-beasts.com", "onza.mythic-beasts.com", "sphinx.mythic-beasts.com", "vs.mythic-beasts.com", "x.mythic-beasts.com", "yali.mythic-beasts.com", "cust.retrosnub.co.uk", "ui.nabu.casa", "cloud.nospamproxy.com", "netfy.app", "netlify.app", "4u.com", "nfshost.com", "ipfs.nftstorage.link", "ngo.us", "ngrok.app", "ngrok-free.app", "ngrok.dev", "ngrok-free.dev", "ngrok.io", "ap.ngrok.io", "au.ngrok.io", "eu.ngrok.io", "in.ngrok.io", "jp.ngrok.io", "sa.ngrok.io", "us.ngrok.io", "ngrok.pizza", "ngrok.pro", "torun.pl", "nh-serv.co.uk", "nimsite.uk", "mmafan.biz", "myftp.biz", "no-ip.biz", "no-ip.ca", "fantasyleague.cc", "gotdns.ch", "3utilities.com", "blogsyte.com", "ciscofreak.com", "damnserver.com", "ddnsking.com", "ditchyourip.com", "dnsiskinky.com", "dynns.com", "geekgalaxy.com", "health-carereform.com", "homesecuritymac.com", "homesecuritypc.com", "myactivedirectory.com", "mysecuritycamera.com", "myvnc.com", "net-freaks.com", "onthewifi.com", "point2this.com", "quicksytes.com", "securitytactics.com", "servebeer.com", "servecounterstrike.com", "serveexchange.com", "serveftp.com", "servegame.com", "servehalflife.com", "servehttp.com", "servehumour.com", "serveirc.com", "servemp3.com", "servep2p.com", "servepics.com", "servequake.com", "servesarcasm.com", "stufftoread.com", "unusualperson.com", "workisboring.com", "dvrcam.info", "ilovecollege.info", "no-ip.info", "brasilia.me", "ddns.me", "dnsfor.me", "hopto.me", "loginto.me", "noip.me", "webhop.me", "bounceme.net", "ddns.net", "eating-organic.net", "mydissent.net", "myeffect.net", "mymediapc.net", "mypsx.net", "mysecuritycamera.net", "nhlfan.net", "no-ip.net", "pgafan.net", "privatizehealthinsurance.net", "redirectme.net", "serveblog.net", "serveminecraft.net", "sytes.net", "cable-modem.org", "collegefan.org", "couchpotatofries.org", "hopto.org", "mlbfan.org", "myftp.org", "mysecuritycamera.org", "nflfan.org", "no-ip.org", "read-books.org", "ufcfan.org", "zapto.org", "no-ip.co.uk", "golffan.us", "noip.us", "pointto.us", "stage.nodeart.io", "*.developer.app", "noop.app", "*.northflank.app", "*.build.run", "*.code.run", "*.database.run", "*.migration.run", "noticeable.news", "notion.site", "dnsking.ch", "mypi.co", "n4t.co", "001www.com", "myiphost.com", "forumz.info", "soundcast.me", "tcp4.me", "dnsup.net", "hicam.net", "now-dns.net", "ownip.net", "vpndns.net", "dynserv.org", "now-dns.org", "x443.pw", "now-dns.top", "ntdll.top", "freeddns.us", "nsupdate.info", "nerdpol.ovh", "nyc.mn", "prvcy.page", "obl.ong", "observablehq.cloud", "static.observableusercontent.com", "omg.lol", "cloudycluster.net", "omniwe.site", "123webseite.at", "123website.be", "simplesite.com.br", "123website.ch", "simplesite.com", "123webseite.de", "123hjemmeside.dk", "123miweb.es", "123kotisivu.fi", "123siteweb.fr", "simplesite.gr", "123homepage.it", "123website.lu", "123website.nl", "123hjemmeside.no", "service.one", "simplesite.pl", "123paginaweb.pt", "123minsida.se", "is-a-fullstack.dev", "is-cool.dev", "is-not-a.dev", "localplayer.dev", "is-local.org", "opensocial.site", "opencraft.hosting", "16-b.it", "32-b.it", "64-b.it", "orsites.com", "operaunite.com", "*.customer-oci.com", "*.oci.customer-oci.com", "*.ocp.customer-oci.com", "*.ocs.customer-oci.com", "*.oraclecloudapps.com", "*.oraclegovcloudapps.com", "*.oraclegovcloudapps.uk", "tech.orange", "can.re", "authgear-staging.com", "authgearapps.com", "skygearapp.com", "outsystemscloud.com", "*.hosting.ovh.net", "*.webpaas.ovh.net", "ownprovider.com", "own.pm", "*.owo.codes", "ox.rs", "oy.lc", "pgfog.com", "pagexl.com", "gotpantheon.com", "pantheonsite.io", "*.paywhirl.com", "*.xmit.co", "xmit.dev", "madethis.site", "srv.us", "gh.srv.us", "gl.srv.us", "lk3.ru", "mypep.link", "perspecta.cloud", "on-web.fr", "*.upsun.app", "upsunapp.com", "ent.platform.sh", "eu.platform.sh", "us.platform.sh", "*.platformsh.site", "*.tst.site", "platter-app.com", "platter-app.dev", "platterp.us", "pley.games", "onporter.run", "co.bn", "postman-echo.com", "pstmn.io", "mock.pstmn.io", "httpbin.org", "prequalifyme.today", "xen.prgmr.com", "priv.at", "protonet.io", "chirurgiens-dentistes-en-france.fr", "byen.site", "pubtls.org", "pythonanywhere.com", "eu.pythonanywhere.com", "qa2.com", "qcx.io", "*.sys.qcx.io", "myqnapcloud.cn", "alpha-myqnapcloud.com", "dev-myqnapcloud.com", "mycloudnas.com", "mynascloud.com", "myqnapcloud.com", "qoto.io", "qualifioapp.com", "ladesk.com", "qbuser.com", "*.quipelements.com", "vapor.cloud", "vaporcloud.io", "rackmaze.com", "rackmaze.net", "cloudsite.builders", "myradweb.net", "servername.us", "web.in", "in.net", "myrdbx.io", "site.rb-hosting.io", "*.on-rancher.cloud", "*.on-k3s.io", "*.on-rio.io", "ravpage.co.il", "readthedocs-hosted.com", "readthedocs.io", "rhcloud.com", "instances.spawn.cc", "onrender.com", "app.render.com", "replit.app", "id.replit.app", "firewalledreplit.co", "id.firewalledreplit.co", "repl.co", "id.repl.co", "replit.dev", "archer.replit.dev", "bones.replit.dev", "canary.replit.dev", "global.replit.dev", "hacker.replit.dev", "id.replit.dev", "janeway.replit.dev", "kim.replit.dev", "kira.replit.dev", "kirk.replit.dev", "odo.replit.dev", "paris.replit.dev", "picard.replit.dev", "pike.replit.dev", "prerelease.replit.dev", "reed.replit.dev", "riker.replit.dev", "sisko.replit.dev", "spock.replit.dev", "staging.replit.dev", "sulu.replit.dev", "tarpit.replit.dev", "teams.replit.dev", "tucker.replit.dev", "wesley.replit.dev", "worf.replit.dev", "repl.run", "resindevice.io", "devices.resinstaging.io", "hzc.io", "adimo.co.uk", "itcouldbewor.se", "aus.basketball", "nz.basketball", "git-pages.rit.edu", "rocky.page", "rub.de", "ruhr-uni-bochum.de", "io.noc.ruhr-uni-bochum.de", "биз.рус", "ком.рус", "крым.рус", "мир.рус", "мск.рус", "орг.рус", "самара.рус", "сочи.рус", "спб.рус", "я.рус", "ras.ru", "nyat.app", "180r.com", "dojin.com", "sakuratan.com", "sakuraweb.com", "x0.com", "2-d.jp", "bona.jp", "crap.jp", "daynight.jp", "eek.jp", "flop.jp", "halfmoon.jp", "jeez.jp", "matrix.jp", "mimoza.jp", "ivory.ne.jp", "mail-box.ne.jp", "mints.ne.jp", "mokuren.ne.jp", "opal.ne.jp", "sakura.ne.jp", "sumomo.ne.jp", "topaz.ne.jp", "netgamers.jp", "nyanta.jp", "o0o0.jp", "rdy.jp", "rgr.jp", "rulez.jp", "s3.isk01.sakurastorage.jp", "s3.isk02.sakurastorage.jp", "saloon.jp", "sblo.jp", "skr.jp", "tank.jp", "uh-oh.jp", "undo.jp", "rs.webaccel.jp", "user.webaccel.jp", "websozai.jp", "xii.jp", "squares.net", "jpn.org", "kirara.st", "x0.to", "from.tv", "sakura.tv", "*.builder.code.com", "*.dev-builder.code.com", "*.stg-builder.code.com", "*.001.test.code-builder-stg.platform.salesforce.com", "*.d.crm.dev", "*.w.crm.dev", "*.wa.crm.dev", "*.wb.crm.dev", "*.wc.crm.dev", "*.wd.crm.dev", "*.we.crm.dev", "*.wf.crm.dev", "sandcats.io", "logoip.com", "logoip.de", "fr-par-1.baremetal.scw.cloud", "fr-par-2.baremetal.scw.cloud", "nl-ams-1.baremetal.scw.cloud", "cockpit.fr-par.scw.cloud", "fnc.fr-par.scw.cloud", "functions.fnc.fr-par.scw.cloud", "k8s.fr-par.scw.cloud", "nodes.k8s.fr-par.scw.cloud", "s3.fr-par.scw.cloud", "s3-website.fr-par.scw.cloud", "whm.fr-par.scw.cloud", "priv.instances.scw.cloud", "pub.instances.scw.cloud", "k8s.scw.cloud", "cockpit.nl-ams.scw.cloud", "k8s.nl-ams.scw.cloud", "nodes.k8s.nl-ams.scw.cloud", "s3.nl-ams.scw.cloud", "s3-website.nl-ams.scw.cloud", "whm.nl-ams.scw.cloud", "cockpit.pl-waw.scw.cloud", "k8s.pl-waw.scw.cloud", "nodes.k8s.pl-waw.scw.cloud", "s3.pl-waw.scw.cloud", "s3-website.pl-waw.scw.cloud", "scalebook.scw.cloud", "smartlabeling.scw.cloud", "dedibox.fr", "schokokeks.net", "gov.scot", "service.gov.scot", "scrysec.com", "client.scrypted.io", "firewall-gateway.com", "firewall-gateway.de", "my-gateway.de", "my-router.de", "spdns.de", "spdns.eu", "firewall-gateway.net", "my-firewall.org", "myfirewall.org", "spdns.org", "seidat.net", "sellfy.store", "minisite.ms", "senseering.net", "servebolt.cloud", "biz.ua", "co.ua", "pp.ua", "as.sh.cn", "sheezy.games", "shiftedit.io", "myshopblocks.com", "myshopify.com", "shopitsite.com", "shopware.shop", "shopware.store", "mo-siemens.io", "1kapp.com", "appchizi.com", "applinzi.com", "sinaapp.com", "vipsinaapp.com", "siteleaf.net", "small-web.org", "aeroport.fr", "avocat.fr", "chambagri.fr", "chirurgiens-dentistes.fr", "experts-comptables.fr", "medecin.fr", "notaires.fr", "pharmacien.fr", "port.fr", "veterinaire.fr", "vp4.me", "*.snowflake.app", "*.privatelink.snowflake.app", "streamlit.app", "streamlitapp.com", "try-snowplow.com", "mafelo.net", "playstation-cloud.com", "srht.site", "apps.lair.io", "*.stolos.io", "spacekit.io", "ind.mom", "customer.speedpartner.de", "myspreadshop.at", "myspreadshop.com.au", "myspreadshop.be", "myspreadshop.ca", "myspreadshop.ch", "myspreadshop.com", "myspreadshop.de", "myspreadshop.dk", "myspreadshop.es", "myspreadshop.fi", "myspreadshop.fr", "myspreadshop.ie", "myspreadshop.it", "myspreadshop.net", "myspreadshop.nl", "myspreadshop.no", "myspreadshop.pl", "myspreadshop.se", "myspreadshop.co.uk", "w-corp-staticblitz.com", "w-credentialless-staticblitz.com", "w-staticblitz.com", "stackhero-network.com", "runs.onstackit.cloud", "stackit.gg", "stackit.rocks", "stackit.run", "stackit.zone", "musician.io", "novecore.site", "api.stdlib.com", "feedback.ac", "forms.ac", "assessments.cx", "calculators.cx", "funnels.cx", "paynow.cx", "quizzes.cx", "researched.cx", "tests.cx", "surveys.so", "storebase.store", "storipress.app", "storj.farm", "strapiapp.com", "media.strapiapp.com", "vps-host.net", "atl.jelastic.vps-host.net", "njs.jelastic.vps-host.net", "ric.jelastic.vps-host.net", "streak-link.com", "streaklinks.com", "streakusercontent.com", "soc.srcf.net", "user.srcf.net", "utwente.io", "temp-dns.com", "supabase.co", "supabase.in", "supabase.net", "syncloud.it", "dscloud.biz", "direct.quickconnect.cn", "dsmynas.com", "familyds.com", "diskstation.me", "dscloud.me", "i234.me", "myds.me", "synology.me", "dscloud.mobi", "dsmynas.net", "familyds.net", "dsmynas.org", "familyds.org", "direct.quickconnect.to", "vpnplus.to", "mytabit.com", "mytabit.co.il", "tabitorder.co.il", "taifun-dns.de", "ts.net", "*.c.ts.net", "gda.pl", "gdansk.pl", "gdynia.pl", "med.pl", "sopot.pl", "taveusercontent.com", "p.tawk.email", "p.tawkto.email", "site.tb-hosting.com", "edugit.io", "s3.teckids.org", "telebit.app", "telebit.io", "*.telebit.xyz", "*.firenet.ch", "*.svc.firenet.ch", "reservd.com", "thingdustdata.com", "cust.dev.thingdust.io", "reservd.dev.thingdust.io", "cust.disrec.thingdust.io", "reservd.disrec.thingdust.io", "cust.prod.thingdust.io", "cust.testing.thingdust.io", "reservd.testing.thingdust.io", "tickets.io", "arvo.network", "azimuth.network", "tlon.network", "torproject.net", "pages.torproject.net", "townnews-staging.com", "12hp.at", "2ix.at", "4lima.at", "lima-city.at", "12hp.ch", "2ix.ch", "4lima.ch", "lima-city.ch", "trafficplex.cloud", "de.cool", "12hp.de", "2ix.de", "4lima.de", "lima-city.de", "1337.pictures", "clan.rip", "lima-city.rocks", "webspace.rocks", "lima.zone", "*.transurl.be", "*.transurl.eu", "site.transip.me", "*.transurl.nl", "tuxfamily.org", "dd-dns.de", "dray-dns.de", "draydns.de", "dyn-vpn.de", "dynvpn.de", "mein-vigor.de", "my-vigor.de", "my-wan.de", "syno-ds.de", "synology-diskstation.de", "synology-ds.de", "diskstation.eu", "diskstation.org", "typedream.app", "pro.typeform.com", "*.uberspace.de", "uber.space", "hk.com", "inc.hk", "ltd.hk", "hk.org", "it.com", "unison-services.cloud", "virtual-user.de", "virtualuser.de", "name.pm", "sch.tf", "biz.wf", "sch.wf", "org.yt", "rs.ba", "bielsko.pl", "upli.io", "urown.cloud", "dnsupdate.info", "us.org", "v.ua", "express.val.run", "web.val.run", "vercel.app", "v0.build", "vercel.dev", "vusercontent.net", "now.sh", "2038.io", "router.management", "v-info.info", "voorloper.cloud", "*.vultrobjects.com", "wafflecell.com", "webflow.io", "webflowtest.io", "*.webhare.dev", "bookonline.app", "hotelwithflight.com", "reserve-online.com", "reserve-online.net", "cprapid.com", "pleskns.com", "wp2.host", "pdns.page", "plesk.page", "wpsquared.site", "*.wadl.top", "remotewd.com", "box.ca", "pages.wiardweb.com", "toolforge.org", "wmcloud.org", "wmflabs.org", "wdh.app", "panel.gg", "daemon.panel.gg", "wixsite.com", "wixstudio.com", "editorx.io", "wixstudio.io", "wix.run", "messwithdns.com", "woltlab-demo.com", "myforum.community", "community-pro.de", "diskussionsbereich.de", "community-pro.net", "meinforum.net", "affinitylottery.org.uk", "raffleentry.org.uk", "weeklylottery.org.uk", "wpenginepowered.com", "js.wpenginepowered.com", "half.host", "xnbay.com", "u2.xnbay.com", "u2-local.xnbay.com", "cistron.nl", "demon.nl", "xs4all.space", "yandexcloud.net", "storage.yandexcloud.net", "website.yandexcloud.net", "official.academy", "yolasite.com", "yombo.me", "ynh.fr", "nohost.me", "noho.st", "za.net", "za.org", "zap.cloud", "zeabur.app", "bss.design", "basicserver.io", "virtualserver.io", "enterprisecloud.nu"], u = r.reduce((d, v) => {
    const I = v.replace(/^(\*\.|\!)/, ""), z = i.toASCII(I), T = v.charAt(0);
    if (d.has(z)) throw new Error(`Multiple rules found for ${v} (${z})`);
    return d.set(z, { rule: v, suffix: I, punySuffix: z, wildcard: T === "*", exception: T === "!" }), d;
  }, /* @__PURE__ */ new Map()), c = (d) => {
    const v = i.toASCII(d).split(".");
    for (let I = 0; I < v.length; I++) {
      const z = v.slice(I).join("."), T = u.get(z);
      if (T) return T;
    }
    return null;
  }, l = { DOMAIN_TOO_SHORT: "Domain name too short.", DOMAIN_TOO_LONG: "Domain name too long. It should be no more than 255 chars.", LABEL_STARTS_WITH_DASH: "Domain name label can not start with a dash.", LABEL_ENDS_WITH_DASH: "Domain name label can not end with a dash.", LABEL_TOO_LONG: "Domain name label should be at most 63 chars long.", LABEL_TOO_SHORT: "Domain name label should be at least 1 character long.", LABEL_INVALID_CHARS: "Domain name label can only contain alphanumeric characters or dashes." }, p = (d) => {
    const v = i.toASCII(d);
    if (v.length < 1) return "DOMAIN_TOO_SHORT";
    if (v.length > 255) return "DOMAIN_TOO_LONG";
    const I = v.split(".");
    let z;
    for (let T = 0; T < I.length; ++T) {
      if (z = I[T], !z.length) return "LABEL_TOO_SHORT";
      if (z.length > 63) return "LABEL_TOO_LONG";
      if (z.charAt(0) === "-") return "LABEL_STARTS_WITH_DASH";
      if (z.charAt(z.length - 1) === "-") return "LABEL_ENDS_WITH_DASH";
      if (!/^[a-z0-9\-_]+$/.test(z)) return "LABEL_INVALID_CHARS";
    }
  }, w = (d) => {
    if (typeof d != "string") throw new TypeError("Domain name must be a string.");
    let v = d.slice(0).toLowerCase();
    v.charAt(v.length - 1) === "." && (v = v.slice(0, v.length - 1));
    const I = p(v);
    if (I) return { input: d, error: { message: l[I], code: I } };
    const z = { input: d, tld: null, sld: null, domain: null, subdomain: null, listed: !1 }, T = v.split(".");
    if (T[T.length - 1] === "local") return z;
    const H = () => (/xn--/.test(v) && (z.domain && (z.domain = i.toASCII(z.domain)), z.subdomain && (z.subdomain = i.toASCII(z.subdomain))), z), K = c(v);
    if (!K) return T.length < 2 ? z : (z.tld = T.pop(), z.sld = T.pop(), z.domain = [z.sld, z.tld].join("."), T.length && (z.subdomain = T.pop()), H());
    z.listed = !0;
    const Z = K.suffix.split("."), ae = T.slice(0, T.length - Z.length);
    return K.exception && ae.push(Z.shift()), z.tld = Z.join("."), !ae.length || (K.wildcard && (Z.unshift(ae.pop()), z.tld = Z.join(".")), !ae.length) || (z.sld = ae.pop(), z.domain = [z.sld, z.tld].join("."), ae.length && (z.subdomain = ae.join("."))), H();
  }, A = (d) => d && w(d).domain || null, h = (d) => {
    const v = w(d);
    return !!(v.domain && v.listed);
  }, k = { parse: w, get: A, isValid: h };
  a.default = k, a.errorCodes = l, a.get = A, a.isValid = h, a.parse = w;
})(Ms);
/*!
 * Copyright (c) 2018, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const ir = Ms, Io = [
  "local",
  "example",
  "invalid",
  "localhost",
  "test"
], rr = ["localhost", "invalid"];
function cr(a, e = {}) {
  const t = a.split("."), o = t[t.length - 1], s = !!e.allowSpecialUseDomain, n = !!e.ignoreError;
  if (s && Io.includes(o)) {
    if (t.length > 1)
      return `${t[t.length - 2]}.${o}`;
    if (rr.includes(o))
      return `${o}`;
  }
  if (!n && Io.includes(o))
    throw new Error(
      `Cookie has domain set to the public suffix "${o}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain:true, rejectPublicSuffixes: false}.`
    );
  return ir.get(a);
}
Kt.getPublicSuffix = cr;
var Xt = {};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
let ur = class {
  constructor() {
    this.synchronous = !1;
  }
  findCookie(e, t, o, s) {
    throw new Error("findCookie is not implemented");
  }
  findCookies(e, t, o, s) {
    throw new Error("findCookies is not implemented");
  }
  putCookie(e, t) {
    throw new Error("putCookie is not implemented");
  }
  updateCookie(e, t, o) {
    throw new Error("updateCookie is not implemented");
  }
  removeCookie(e, t, o, s) {
    throw new Error("removeCookie is not implemented");
  }
  removeCookies(e, t, o) {
    throw new Error("removeCookies is not implemented");
  }
  removeAllCookies(e) {
    throw new Error("removeAllCookies is not implemented");
  }
  getAllCookies(e) {
    throw new Error(
      "getAllCookies is not implemented (therefore jar cannot be serialized)"
    );
  }
};
Xt.Store = ur;
var Qt = {}, pt = {};
pt.fromCallback = function(a) {
  return Object.defineProperty(function() {
    if (typeof arguments[arguments.length - 1] == "function") a.apply(this, arguments);
    else
      return new Promise((e, t) => {
        arguments[arguments.length] = (o, s) => {
          if (o) return t(o);
          e(s);
        }, arguments.length++, a.apply(this, arguments);
      });
  }, "name", { value: a.name });
};
pt.fromPromise = function(a) {
  return Object.defineProperty(function() {
    const e = arguments[arguments.length - 1];
    if (typeof e != "function") return a.apply(this, arguments);
    delete arguments[arguments.length - 1], arguments.length--, a.apply(this, arguments).then((t) => e(null, t), e);
  }, "name", { value: a.name });
};
var $s = {};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const lr = Kt;
function mr(a, e) {
  const t = lr.getPublicSuffix(a, {
    allowSpecialUseDomain: e
  });
  if (!t)
    return null;
  if (t == a)
    return [a];
  a.slice(-1) == "." && (a = a.slice(0, -1));
  const s = a.slice(0, -(t.length + 1)).split(".").reverse();
  let n = t;
  const i = [n];
  for (; s.length; )
    n = `${s.shift()}.${n}`, i.push(n);
  return i;
}
$s.permuteDomain = mr;
var eo = {};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
function pr(a, e) {
  return e === a || a.indexOf(e) === 0 && (e.substr(-1) === "/" || a.substr(e.length, 1) === "/");
}
eo.pathMatch = pr;
var dt = {};
const dr = {}, hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" })), gr = /* @__PURE__ */ xs(hr);
function Us() {
  try {
    return gr;
  } catch {
    return null;
  }
}
function fr() {
  return Symbol.for("nodejs.util.inspect.custom");
}
function kr(a) {
  const t = (a.requireUtil || Us)();
  return t ? t.inspect.custom : null;
}
dt.getUtilInspect = function(e, t = {}) {
  const s = (t.requireUtil || Us)();
  return function(i, r, u) {
    return s ? s.inspect(i, r, u) : e(i);
  };
};
dt.getCustomInspectSymbol = function(e = {}) {
  return (e.lookupCustomInspectSymbol || fr)() || kr(e);
};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const { fromCallback: br } = pt, yr = Xt.Store, wr = $s.permuteDomain, jr = eo.pathMatch, { getCustomInspectSymbol: vr, getUtilInspect: zr } = dt;
let Ct = class extends yr {
  constructor() {
    super(), this.synchronous = !0, this.idx = /* @__PURE__ */ Object.create(null);
    const e = vr();
    e && (this[e] = this.inspect);
  }
  inspect() {
    return `{ idx: ${{ inspect: zr(qs) }.inspect(this.idx, !1, 2)} }`;
  }
  findCookie(e, t, o, s) {
    return !this.idx[e] || !this.idx[e][t] ? s(null, void 0) : s(null, this.idx[e][t][o] || null);
  }
  findCookies(e, t, o, s) {
    const n = [];
    if (typeof o == "function" && (s = o, o = !0), !e)
      return s(null, []);
    let i;
    t ? i = function(l) {
      Object.keys(l).forEach((p) => {
        if (jr(t, p)) {
          const w = l[p];
          for (const A in w)
            n.push(w[A]);
        }
      });
    } : i = function(l) {
      for (const p in l) {
        const w = l[p];
        for (const A in w)
          n.push(w[A]);
      }
    };
    const r = wr(e, o) || [e], u = this.idx;
    r.forEach((c) => {
      const l = u[c];
      l && i(l);
    }), s(null, n);
  }
  putCookie(e, t) {
    this.idx[e.domain] || (this.idx[e.domain] = /* @__PURE__ */ Object.create(null)), this.idx[e.domain][e.path] || (this.idx[e.domain][e.path] = /* @__PURE__ */ Object.create(null)), this.idx[e.domain][e.path][e.key] = e, t(null);
  }
  updateCookie(e, t, o) {
    this.putCookie(t, o);
  }
  removeCookie(e, t, o, s) {
    this.idx[e] && this.idx[e][t] && this.idx[e][t][o] && delete this.idx[e][t][o], s(null);
  }
  removeCookies(e, t, o) {
    return this.idx[e] && (t ? delete this.idx[e][t] : delete this.idx[e]), o(null);
  }
  removeAllCookies(e) {
    return this.idx = /* @__PURE__ */ Object.create(null), e(null);
  }
  getAllCookies(e) {
    const t = [], o = this.idx;
    Object.keys(o).forEach((n) => {
      Object.keys(o[n]).forEach((r) => {
        Object.keys(o[n][r]).forEach((c) => {
          c !== null && t.push(o[n][r][c]);
        });
      });
    }), t.sort((n, i) => (n.creationIndex || 0) - (i.creationIndex || 0)), e(null, t);
  }
};
[
  "findCookie",
  "findCookies",
  "putCookie",
  "updateCookie",
  "removeCookie",
  "removeCookies",
  "removeAllCookies",
  "getAllCookies"
].forEach((a) => {
  Ct.prototype[a] = br(
    Ct.prototype[a]
  );
});
Qt.MemoryCookieStore = Ct;
function qs(a) {
  const e = Object.keys(a);
  if (e.length === 0)
    return "[Object: null prototype] {}";
  let t = `[Object: null prototype] {
`;
  return Object.keys(a).forEach((o, s) => {
    t += xr(o, a[o]), s < e.length - 1 && (t += ","), t += `
`;
  }), t += "}", t;
}
function xr(a, e) {
  const t = "  ";
  let o = `${t}'${a}': [Object: null prototype] {
`;
  return Object.keys(e).forEach((s, n, i) => {
    o += _r(s, e[s]), n < i.length - 1 && (o += ","), o += `
`;
  }), o += `${t}}`, o;
}
function _r(a, e) {
  const t = "    ";
  let o = `${t}'${a}': [Object: null prototype] {
`;
  return Object.keys(e).forEach((s, n, i) => {
    const r = e[s];
    o += `      ${s}: ${r.inspect()}`, n < i.length - 1 && (o += ","), o += `
`;
  }), o += `${t}}`, o;
}
Qt.inspectFallback = qs;
var Se = {};
const Sr = Object.prototype.toString;
function Fs(a) {
  return typeof a == "function";
}
function Zs(a) {
  return Bs(a) && a !== "";
}
function Ar(a) {
  return Vs(a, Date) && Or(a.getTime());
}
function Cr(a) {
  return a === "" || a instanceof String && a.toString() === "";
}
function Bs(a) {
  return typeof a == "string" || a instanceof String;
}
function ao(a) {
  return Sr.call(a) === "[object Object]";
}
function Vs(a, e) {
  try {
    return a instanceof e;
  } catch {
    return !1;
  }
}
function Er(a) {
  return Zs(a) || ao(a) && "hostname" in a && "pathname" in a && "protocol" in a || Vs(a, URL);
}
function Or(a) {
  return typeof a == "number" && a % 1 === 0;
}
function Ir(a, e, t) {
  if (Fs(e) || (t = e, e = null), ao(t) || (t = { Error: "Failed Check" }), !a)
    if (e)
      e(new Et(t));
    else
      throw new Et(t);
}
class Et extends Error {
  constructor(...e) {
    super(...e);
  }
}
Se.ParameterError = Et;
Se.isFunction = Fs;
Se.isNonEmptyString = Zs;
Se.isDate = Ar;
Se.isEmptyString = Cr;
Se.isString = Bs;
Se.isObject = ao;
Se.isUrlStringOrObject = Er;
Se.validate = Ir;
var Tr = "4.1.4";
/*!
 * Copyright (c) 2015-2020, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const To = Hi, Rr = nr, to = Kt, Nr = Xt.Store, Pr = Qt.MemoryCookieStore, Dr = eo.pathMatch, C = Se, Lr = Tr, { fromCallback: Hs } = pt, { getCustomInspectSymbol: Mr } = dt, $r = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, Ro = /[\x00-\x1F]/, No = [`
`, "\r", "\0"], Ur = /[\x20-\x3A\x3C-\x7E]+/, qr = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, Fr = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
}, Ot = 2147483647e3, Zr = 0, Po = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function Do(a) {
  C.validate(C.isNonEmptyString(a), a);
  const e = String(a).toLowerCase();
  return e === "none" || e === "lax" || e === "strict" ? e : null;
}
const ua = Object.freeze({
  SILENT: "silent",
  STRICT: "strict",
  DISABLED: "unsafe-disabled"
}), Br = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/, Vr = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), Ws = new RegExp(`^${Vr}$`);
function It(a, e, t, o) {
  let s = 0;
  for (; s < a.length; ) {
    const n = a.charCodeAt(s);
    if (n <= 47 || n >= 58)
      break;
    s++;
  }
  return s < e || s > t || !o && s != a.length ? null : parseInt(a.substr(0, s), 10);
}
function Hr(a) {
  const e = a.split(":"), t = [0, 0, 0];
  if (e.length !== 3)
    return null;
  for (let o = 0; o < 3; o++) {
    const s = o == 2, n = It(e[o], 1, 2, s);
    if (n === null)
      return null;
    t[o] = n;
  }
  return t;
}
function Wr(a) {
  a = String(a).substr(0, 3).toLowerCase();
  const e = Fr[a];
  return e >= 0 ? e : null;
}
function Wa(a) {
  if (!a)
    return;
  const e = a.split(qr);
  if (!e)
    return;
  let t = null, o = null, s = null, n = null, i = null, r = null;
  for (let u = 0; u < e.length; u++) {
    const c = e[u].trim();
    if (!c.length)
      continue;
    let l;
    if (s === null && (l = Hr(c), l)) {
      t = l[0], o = l[1], s = l[2];
      continue;
    }
    if (n === null && (l = It(c, 1, 2, !0), l !== null)) {
      n = l;
      continue;
    }
    if (i === null && (l = Wr(c), l !== null)) {
      i = l;
      continue;
    }
    r === null && (l = It(c, 2, 4, !0), l !== null && (r = l, r >= 70 && r <= 99 ? r += 1900 : r >= 0 && r <= 69 && (r += 2e3)));
  }
  if (!(n === null || i === null || r === null || s === null || n < 1 || n > 31 || r < 1601 || t > 23 || o > 59 || s > 59))
    return new Date(Date.UTC(r, i, n, t, o, s));
}
function Jr(a) {
  return C.validate(C.isDate(a), a), a.toUTCString();
}
function Ia(a) {
  return a == null ? null : (a = a.trim().replace(/^\./, ""), Ws.test(a) && (a = a.replace("[", "").replace("]", "")), To && /[^\u0001-\u007f]/.test(a) && (a = To.toASCII(a)), a.toLowerCase());
}
function Lo(a, e, t) {
  if (a == null || e == null)
    return null;
  if (t !== !1 && (a = Ia(a), e = Ia(e)), a == e)
    return !0;
  const o = a.lastIndexOf(e);
  return !(o <= 0 || a.length !== e.length + o || a.substr(o - 1, 1) !== "." || Br.test(a));
}
function Gr(a) {
  if (!a || a.substr(0, 1) !== "/")
    return "/";
  if (a === "/")
    return a;
  const e = a.lastIndexOf("/");
  return e === 0 ? "/" : a.slice(0, e);
}
function Yr(a) {
  if (C.isEmptyString(a)) return a;
  for (let e = 0; e < No.length; e++) {
    const t = a.indexOf(No[e]);
    t !== -1 && (a = a.substr(0, t));
  }
  return a;
}
function Kr(a, e) {
  a = Yr(a), C.validate(C.isString(a), a);
  let t = a.indexOf("=");
  if (e)
    t === 0 && (a = a.substr(1), t = a.indexOf("="));
  else if (t <= 0)
    return;
  let o, s;
  if (t <= 0 ? (o = "", s = a.trim()) : (o = a.substr(0, t).trim(), s = a.substr(t + 1).trim()), Ro.test(o) || Ro.test(s))
    return;
  const n = new V();
  return n.key = o, n.value = s, n;
}
function Xr(a, e) {
  if ((!e || typeof e != "object") && (e = {}), C.isEmptyString(a) || !C.isString(a))
    return null;
  a = a.trim();
  const t = a.indexOf(";"), o = t === -1 ? a : a.substr(0, t), s = Kr(o, !!e.loose);
  if (!s)
    return;
  if (t === -1)
    return s;
  const n = a.slice(t + 1).trim();
  if (n.length === 0)
    return s;
  const i = n.split(";");
  for (; i.length; ) {
    const r = i.shift().trim();
    if (r.length === 0)
      continue;
    const u = r.indexOf("=");
    let c, l;
    switch (u === -1 ? (c = r, l = null) : (c = r.substr(0, u), l = r.substr(u + 1)), c = c.trim().toLowerCase(), l && (l = l.trim()), c) {
      case "expires":
        if (l) {
          const w = Wa(l);
          w && (s.expires = w);
        }
        break;
      case "max-age":
        if (l && /^-?[0-9]+$/.test(l)) {
          const w = parseInt(l, 10);
          s.setMaxAge(w);
        }
        break;
      case "domain":
        if (l) {
          const w = l.trim().replace(/^\./, "");
          w && (s.domain = w.toLowerCase());
        }
        break;
      case "path":
        s.path = l && l[0] === "/" ? l : null;
        break;
      case "secure":
        s.secure = !0;
        break;
      case "httponly":
        s.httpOnly = !0;
        break;
      case "samesite":
        switch (l ? l.toLowerCase() : "") {
          case "strict":
            s.sameSite = "strict";
            break;
          case "lax":
            s.sameSite = "lax";
            break;
          case "none":
            s.sameSite = "none";
            break;
          default:
            s.sameSite = void 0;
            break;
        }
        break;
      default:
        s.extensions = s.extensions || [], s.extensions.push(r);
        break;
    }
  }
  return s;
}
function Qr(a) {
  return C.validate(C.isObject(a), a), !a.key.startsWith("__Secure-") || a.secure;
}
function ec(a) {
  return C.validate(C.isObject(a)), !a.key.startsWith("__Host-") || a.secure && a.hostOnly && a.path != null && a.path === "/";
}
function Js(a) {
  let e;
  try {
    e = JSON.parse(a);
  } catch (t) {
    return t;
  }
  return e;
}
function oo(a) {
  if (!a || C.isEmptyString(a))
    return null;
  let e;
  if (typeof a == "string") {
    if (e = Js(a), e instanceof Error)
      return null;
  } else
    e = a;
  const t = new V();
  for (let o = 0; o < V.serializableProperties.length; o++) {
    const s = V.serializableProperties[o];
    e[s] === void 0 || e[s] === Sa[s] || (s === "expires" || s === "creation" || s === "lastAccessed" ? e[s] === null ? t[s] = null : t[s] = e[s] == "Infinity" ? "Infinity" : new Date(e[s]) : t[s] = e[s]);
  }
  return t;
}
function Mo(a, e) {
  C.validate(C.isObject(a), a), C.validate(C.isObject(e), e);
  let t = 0;
  const o = a.path ? a.path.length : 0;
  if (t = (e.path ? e.path.length : 0) - o, t !== 0)
    return t;
  const n = a.creation ? a.creation.getTime() : Ot, i = e.creation ? e.creation.getTime() : Ot;
  return t = n - i, t !== 0 || (t = a.creationIndex - e.creationIndex), t;
}
function $o(a) {
  if (a instanceof Object)
    return a;
  try {
    a = decodeURI(a);
  } catch {
  }
  return Rr(a);
}
const Sa = {
  // the order in which the RFC has them:
  key: "",
  value: "",
  expires: "Infinity",
  maxAge: null,
  domain: null,
  path: null,
  secure: !1,
  httpOnly: !1,
  extensions: null,
  // set by the CookieJar:
  hostOnly: null,
  pathIsDefault: null,
  creation: null,
  lastAccessed: null,
  sameSite: void 0
};
class V {
  constructor(e = {}) {
    const t = Mr();
    t && (this[t] = this.inspect), Object.assign(this, Sa, e), this.creation = this.creation || /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", {
      configurable: !1,
      enumerable: !1,
      // important for assert.deepEqual checks
      writable: !0,
      value: ++V.cookiesCreated
    });
  }
  inspect() {
    const e = Date.now(), t = this.hostOnly != null ? this.hostOnly : "?", o = this.creation ? `${e - this.creation.getTime()}ms` : "?", s = this.lastAccessed ? `${e - this.lastAccessed.getTime()}ms` : "?";
    return `Cookie="${this.toString()}; hostOnly=${t}; aAge=${s}; cAge=${o}"`;
  }
  toJSON() {
    const e = {};
    for (const t of V.serializableProperties)
      this[t] !== Sa[t] && (t === "expires" || t === "creation" || t === "lastAccessed" ? this[t] === null ? e[t] = null : e[t] = this[t] == "Infinity" ? "Infinity" : this[t].toISOString() : t === "maxAge" ? this[t] !== null && (e[t] = this[t] == 1 / 0 || this[t] == -1 / 0 ? this[t].toString() : this[t]) : this[t] !== Sa[t] && (e[t] = this[t]));
    return e;
  }
  clone() {
    return oo(this.toJSON());
  }
  validate() {
    if (!$r.test(this.value) || this.expires != 1 / 0 && !(this.expires instanceof Date) && !Wa(this.expires) || this.maxAge != null && this.maxAge <= 0 || this.path != null && !Ur.test(this.path))
      return !1;
    const e = this.cdomain();
    return !(e && (e.match(/\.$/) || to.getPublicSuffix(e) == null));
  }
  setExpires(e) {
    e instanceof Date ? this.expires = e : this.expires = Wa(e) || "Infinity";
  }
  setMaxAge(e) {
    e === 1 / 0 || e === -1 / 0 ? this.maxAge = e.toString() : this.maxAge = e;
  }
  cookieString() {
    let e = this.value;
    return e == null && (e = ""), this.key === "" ? e : `${this.key}=${e}`;
  }
  // gives Set-Cookie header format
  toString() {
    let e = this.cookieString();
    if (this.expires != 1 / 0 && (this.expires instanceof Date ? e += `; Expires=${Jr(this.expires)}` : e += `; Expires=${this.expires}`), this.maxAge != null && this.maxAge != 1 / 0 && (e += `; Max-Age=${this.maxAge}`), this.domain && !this.hostOnly && (e += `; Domain=${this.domain}`), this.path && (e += `; Path=${this.path}`), this.secure && (e += "; Secure"), this.httpOnly && (e += "; HttpOnly"), this.sameSite && this.sameSite !== "none") {
      const t = V.sameSiteCanonical[this.sameSite.toLowerCase()];
      e += `; SameSite=${t || this.sameSite}`;
    }
    return this.extensions && this.extensions.forEach((t) => {
      e += `; ${t}`;
    }), e;
  }
  // TTL() partially replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere)
  // S5.3 says to give the "latest representable date" for which we use Infinity
  // For "expired" we use 0
  TTL(e) {
    if (this.maxAge != null)
      return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
    let t = this.expires;
    return t != 1 / 0 ? (t instanceof Date || (t = Wa(t) || 1 / 0), t == 1 / 0 ? 1 / 0 : t.getTime() - (e || Date.now())) : 1 / 0;
  }
  // expiryTime() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere)
  expiryTime(e) {
    if (this.maxAge != null) {
      const t = e || this.creation || /* @__PURE__ */ new Date(), o = this.maxAge <= 0 ? -1 / 0 : this.maxAge * 1e3;
      return t.getTime() + o;
    }
    return this.expires == 1 / 0 ? 1 / 0 : this.expires.getTime();
  }
  // expiryDate() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere), except it returns a Date
  expiryDate(e) {
    const t = this.expiryTime(e);
    return t == 1 / 0 ? new Date(Ot) : t == -1 / 0 ? new Date(Zr) : new Date(t);
  }
  // This replaces the "persistent-flag" parts of S5.3 step 3
  isPersistent() {
    return this.maxAge != null || this.expires != 1 / 0;
  }
  // Mostly S5.1.2 and S5.2.3:
  canonicalizedDomain() {
    return this.domain == null ? null : Ia(this.domain);
  }
  cdomain() {
    return this.canonicalizedDomain();
  }
}
V.cookiesCreated = 0;
V.parse = Xr;
V.fromJSON = oo;
V.serializableProperties = Object.keys(Sa);
V.sameSiteLevel = {
  strict: 3,
  lax: 2,
  none: 1
};
V.sameSiteCanonical = {
  strict: "Strict",
  lax: "Lax"
};
function Uo(a) {
  if (a != null) {
    const e = a.toLowerCase();
    switch (e) {
      case ua.STRICT:
      case ua.SILENT:
      case ua.DISABLED:
        return e;
    }
  }
  return ua.SILENT;
}
class he {
  constructor(e, t = { rejectPublicSuffixes: !0 }) {
    typeof t == "boolean" && (t = { rejectPublicSuffixes: t }), C.validate(C.isObject(t), t), this.rejectPublicSuffixes = t.rejectPublicSuffixes, this.enableLooseMode = !!t.looseMode, this.allowSpecialUseDomain = typeof t.allowSpecialUseDomain == "boolean" ? t.allowSpecialUseDomain : !0, this.store = e || new Pr(), this.prefixSecurity = Uo(t.prefixSecurity), this._cloneSync = $e("clone"), this._importCookiesSync = $e("_importCookies"), this.getCookiesSync = $e("getCookies"), this.getCookieStringSync = $e("getCookieString"), this.getSetCookieStringsSync = $e("getSetCookieStrings"), this.removeAllCookiesSync = $e("removeAllCookies"), this.setCookieSync = $e("setCookie"), this.serializeSync = $e("serialize");
  }
  setCookie(e, t, o, s) {
    C.validate(C.isUrlStringOrObject(t), s, o);
    let n;
    if (C.isFunction(t))
      return s = t, s(new Error("No URL was specified"));
    const i = $o(t);
    if (C.isFunction(o) && (s = o, o = {}), C.validate(C.isFunction(s), s), !C.isNonEmptyString(e) && !C.isObject(e) && e instanceof String && e.length == 0)
      return s(null);
    const r = Ia(i.hostname), u = o.loose || this.enableLooseMode;
    let c = null;
    if (o.sameSiteContext && (c = Do(o.sameSiteContext), !c))
      return s(new Error(Po));
    if (typeof e == "string" || e instanceof String) {
      if (e = V.parse(e, { loose: u }), !e)
        return n = new Error("Cookie failed to parse"), s(o.ignoreError ? null : n);
    } else if (!(e instanceof V))
      return n = new Error(
        "First argument to setCookie must be a Cookie object or string"
      ), s(o.ignoreError ? null : n);
    const l = o.now || /* @__PURE__ */ new Date();
    if (this.rejectPublicSuffixes && e.domain && to.getPublicSuffix(e.cdomain(), {
      allowSpecialUseDomain: this.allowSpecialUseDomain,
      ignoreError: o.ignoreError
    }) == null && !Ws.test(e.domain))
      return n = new Error("Cookie has domain set to a public suffix"), s(o.ignoreError ? null : n);
    if (e.domain) {
      if (!Lo(r, e.cdomain(), !1))
        return n = new Error(
          `Cookie not in this host's domain. Cookie:${e.cdomain()} Request:${r}`
        ), s(o.ignoreError ? null : n);
      e.hostOnly == null && (e.hostOnly = !1);
    } else
      e.hostOnly = !0, e.domain = r;
    if ((!e.path || e.path[0] !== "/") && (e.path = Gr(i.pathname), e.pathIsDefault = !0), o.http === !1 && e.httpOnly)
      return n = new Error("Cookie is HttpOnly and this isn't an HTTP API"), s(o.ignoreError ? null : n);
    if (e.sameSite !== "none" && e.sameSite !== void 0 && c && c === "none")
      return n = new Error(
        "Cookie is SameSite but this is a cross-origin request"
      ), s(o.ignoreError ? null : n);
    const p = this.prefixSecurity === ua.SILENT;
    if (!(this.prefixSecurity === ua.DISABLED)) {
      let k = !1, d;
      if (Qr(e) ? ec(e) || (k = !0, d = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'") : (k = !0, d = "Cookie has __Secure prefix but Secure attribute is not set"), k)
        return s(
          o.ignoreError || p ? null : new Error(d)
        );
    }
    const A = this.store;
    A.updateCookie || (A.updateCookie = function(k, d, v) {
      this.putCookie(d, v);
    });
    function h(k, d) {
      if (k)
        return s(k);
      const v = function(I) {
        if (I)
          return s(I);
        s(null, e);
      };
      if (d) {
        if (o.http === !1 && d.httpOnly)
          return k = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), s(o.ignoreError ? null : k);
        e.creation = d.creation, e.creationIndex = d.creationIndex, e.lastAccessed = l, A.updateCookie(d, e, v);
      } else
        e.creation = e.lastAccessed = l, A.putCookie(e, v);
    }
    A.findCookie(e.domain, e.path, e.key, h);
  }
  // RFC6365 S5.4
  getCookies(e, t, o) {
    C.validate(C.isUrlStringOrObject(e), o, e);
    const s = $o(e);
    C.isFunction(t) && (o = t, t = {}), C.validate(C.isObject(t), o, t), C.validate(C.isFunction(o), o);
    const n = Ia(s.hostname), i = s.pathname || "/";
    let r = t.secure;
    r == null && s.protocol && (s.protocol == "https:" || s.protocol == "wss:") && (r = !0);
    let u = 0;
    if (t.sameSiteContext) {
      const k = Do(t.sameSiteContext);
      if (u = V.sameSiteLevel[k], !u)
        return o(new Error(Po));
    }
    let c = t.http;
    c == null && (c = !0);
    const l = t.now || Date.now(), p = t.expire !== !1, w = !!t.allPaths, A = this.store;
    function h(k) {
      if (k.hostOnly) {
        if (k.domain != n)
          return !1;
      } else if (!Lo(n, k.domain, !1))
        return !1;
      return !w && !Dr(i, k.path) || k.secure && !r || k.httpOnly && !c || u && V.sameSiteLevel[k.sameSite || "none"] > u ? !1 : p && k.expiryTime() <= l ? (A.removeCookie(k.domain, k.path, k.key, () => {
      }), !1) : !0;
    }
    A.findCookies(
      n,
      w ? null : i,
      this.allowSpecialUseDomain,
      (k, d) => {
        if (k)
          return o(k);
        d = d.filter(h), t.sort !== !1 && (d = d.sort(Mo));
        const v = /* @__PURE__ */ new Date();
        for (const I of d)
          I.lastAccessed = v;
        o(null, d);
      }
    );
  }
  getCookieString(...e) {
    const t = e.pop();
    C.validate(C.isFunction(t), t);
    const o = function(s, n) {
      s ? t(s) : t(
        null,
        n.sort(Mo).map((i) => i.cookieString()).join("; ")
      );
    };
    e.push(o), this.getCookies.apply(this, e);
  }
  getSetCookieStrings(...e) {
    const t = e.pop();
    C.validate(C.isFunction(t), t);
    const o = function(s, n) {
      s ? t(s) : t(
        null,
        n.map((i) => i.toString())
      );
    };
    e.push(o), this.getCookies.apply(this, e);
  }
  serialize(e) {
    C.validate(C.isFunction(e), e);
    let t = this.store.constructor.name;
    C.isObject(t) && (t = null);
    const o = {
      // The version of tough-cookie that serialized this jar. Generally a good
      // practice since future versions can make data import decisions based on
      // known past behavior. When/if this matters, use `semver`.
      version: `tough-cookie@${Lr}`,
      // add the store type, to make humans happy:
      storeType: t,
      // CookieJar configuration:
      rejectPublicSuffixes: !!this.rejectPublicSuffixes,
      enableLooseMode: !!this.enableLooseMode,
      allowSpecialUseDomain: !!this.allowSpecialUseDomain,
      prefixSecurity: Uo(this.prefixSecurity),
      // this gets filled from getAllCookies:
      cookies: []
    };
    if (!(this.store.getAllCookies && typeof this.store.getAllCookies == "function"))
      return e(
        new Error(
          "store does not support getAllCookies and cannot be serialized"
        )
      );
    this.store.getAllCookies((s, n) => s ? e(s) : (o.cookies = n.map((i) => (i = i instanceof V ? i.toJSON() : i, delete i.creationIndex, i)), e(null, o)));
  }
  toJSON() {
    return this.serializeSync();
  }
  // use the class method CookieJar.deserialize instead of calling this directly
  _importCookies(e, t) {
    let o = e.cookies;
    if (!o || !Array.isArray(o))
      return t(new Error("serialized jar has no cookies array"));
    o = o.slice();
    const s = (n) => {
      if (n)
        return t(n);
      if (!o.length)
        return t(n, this);
      let i;
      try {
        i = oo(o.shift());
      } catch (r) {
        return t(r);
      }
      if (i === null)
        return s(null);
      this.store.putCookie(i, s);
    };
    s();
  }
  clone(e, t) {
    arguments.length === 1 && (t = e, e = null), this.serialize((o, s) => {
      if (o)
        return t(o);
      he.deserialize(s, e, t);
    });
  }
  cloneSync(e) {
    if (arguments.length === 0)
      return this._cloneSync();
    if (!e.synchronous)
      throw new Error(
        "CookieJar clone destination store is not synchronous; use async API instead."
      );
    return this._cloneSync(e);
  }
  removeAllCookies(e) {
    C.validate(C.isFunction(e), e);
    const t = this.store;
    if (typeof t.removeAllCookies == "function" && t.removeAllCookies !== Nr.prototype.removeAllCookies)
      return t.removeAllCookies(e);
    t.getAllCookies((o, s) => {
      if (o)
        return e(o);
      if (s.length === 0)
        return e(null);
      let n = 0;
      const i = [];
      function r(u) {
        if (u && i.push(u), n++, n === s.length)
          return e(i.length ? i[0] : null);
      }
      s.forEach((u) => {
        t.removeCookie(
          u.domain,
          u.path,
          u.key,
          r
        );
      });
    });
  }
  static deserialize(e, t, o) {
    arguments.length !== 3 && (o = t, t = null), C.validate(C.isFunction(o), o);
    let s;
    if (typeof e == "string") {
      if (s = Js(e), s instanceof Error)
        return o(s);
    } else
      s = e;
    const n = new he(t, {
      rejectPublicSuffixes: s.rejectPublicSuffixes,
      looseMode: s.enableLooseMode,
      allowSpecialUseDomain: s.allowSpecialUseDomain,
      prefixSecurity: s.prefixSecurity
    });
    n._importCookies(s, (i) => {
      if (i)
        return o(i);
      o(null, n);
    });
  }
  static deserializeSync(e, t) {
    const o = typeof e == "string" ? JSON.parse(e) : e, s = new he(t, {
      rejectPublicSuffixes: o.rejectPublicSuffixes,
      looseMode: o.enableLooseMode
    });
    if (!s.store.synchronous)
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    return s._importCookiesSync(o), s;
  }
}
he.fromJSON = he.deserializeSync;
[
  "_importCookies",
  "clone",
  "getCookies",
  "getCookieString",
  "getSetCookieStrings",
  "removeAllCookies",
  "serialize",
  "setCookie"
].forEach((a) => {
  he.prototype[a] = Hs(he.prototype[a]);
});
he.deserialize = Hs(he.deserialize);
function $e(a) {
  return function(...e) {
    if (!this.store.synchronous)
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    let t, o;
    if (this[a](...e, (s, n) => {
      t = s, o = n;
    }), t)
      throw t;
    return o;
  };
}
var ac = he, qo = V;
to.getPublicSuffix;
C.ParameterError;
var P;
(function(a) {
  a.assertEqual = (s) => {
  };
  function e(s) {
  }
  a.assertIs = e;
  function t(s) {
    throw new Error();
  }
  a.assertNever = t, a.arrayToEnum = (s) => {
    const n = {};
    for (const i of s)
      n[i] = i;
    return n;
  }, a.getValidEnumValues = (s) => {
    const n = a.objectKeys(s).filter((r) => typeof s[s[r]] != "number"), i = {};
    for (const r of n)
      i[r] = s[r];
    return a.objectValues(i);
  }, a.objectValues = (s) => a.objectKeys(s).map(function(n) {
    return s[n];
  }), a.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const n = [];
    for (const i in s)
      Object.prototype.hasOwnProperty.call(s, i) && n.push(i);
    return n;
  }, a.find = (s, n) => {
    for (const i of s)
      if (n(i))
        return i;
  }, a.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function o(s, n = " | ") {
    return s.map((i) => typeof i == "string" ? `'${i}'` : i).join(n);
  }
  a.joinValues = o, a.jsonStringifyReplacer = (s, n) => typeof n == "bigint" ? n.toString() : n;
})(P || (P = {}));
var Fo;
(function(a) {
  a.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Fo || (Fo = {}));
const x = P.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), qe = (a) => {
  switch (typeof a) {
    case "undefined":
      return x.undefined;
    case "string":
      return x.string;
    case "number":
      return Number.isNaN(a) ? x.nan : x.number;
    case "boolean":
      return x.boolean;
    case "function":
      return x.function;
    case "bigint":
      return x.bigint;
    case "symbol":
      return x.symbol;
    case "object":
      return Array.isArray(a) ? x.array : a === null ? x.null : a.then && typeof a.then == "function" && a.catch && typeof a.catch == "function" ? x.promise : typeof Map < "u" && a instanceof Map ? x.map : typeof Set < "u" && a instanceof Set ? x.set : typeof Date < "u" && a instanceof Date ? x.date : x.object;
    default:
      return x.unknown;
  }
}, g = P.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class De extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (o) => {
      this.issues = [...this.issues, o];
    }, this.addIssues = (o = []) => {
      this.issues = [...this.issues, ...o];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const t = e || function(n) {
      return n.message;
    }, o = { _errors: [] }, s = (n) => {
      for (const i of n.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(s);
        else if (i.code === "invalid_return_type")
          s(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          s(i.argumentsError);
        else if (i.path.length === 0)
          o._errors.push(t(i));
        else {
          let r = o, u = 0;
          for (; u < i.path.length; ) {
            const c = i.path[u];
            u === i.path.length - 1 ? (r[c] = r[c] || { _errors: [] }, r[c]._errors.push(t(i))) : r[c] = r[c] || { _errors: [] }, r = r[c], u++;
          }
        }
    };
    return s(this), o;
  }
  static assert(e) {
    if (!(e instanceof De))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, P.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, o = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const n = s.path[0];
        t[n] = t[n] || [], t[n].push(e(s));
      } else
        o.push(e(s));
    return { formErrors: o, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
De.create = (a) => new De(a);
const Tt = (a, e) => {
  let t;
  switch (a.code) {
    case g.invalid_type:
      a.received === x.undefined ? t = "Required" : t = `Expected ${a.expected}, received ${a.received}`;
      break;
    case g.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(a.expected, P.jsonStringifyReplacer)}`;
      break;
    case g.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${P.joinValues(a.keys, ", ")}`;
      break;
    case g.invalid_union:
      t = "Invalid input";
      break;
    case g.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${P.joinValues(a.options)}`;
      break;
    case g.invalid_enum_value:
      t = `Invalid enum value. Expected ${P.joinValues(a.options)}, received '${a.received}'`;
      break;
    case g.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case g.invalid_return_type:
      t = "Invalid function return type";
      break;
    case g.invalid_date:
      t = "Invalid date";
      break;
    case g.invalid_string:
      typeof a.validation == "object" ? "includes" in a.validation ? (t = `Invalid input: must include "${a.validation.includes}"`, typeof a.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${a.validation.position}`)) : "startsWith" in a.validation ? t = `Invalid input: must start with "${a.validation.startsWith}"` : "endsWith" in a.validation ? t = `Invalid input: must end with "${a.validation.endsWith}"` : P.assertNever(a.validation) : a.validation !== "regex" ? t = `Invalid ${a.validation}` : t = "Invalid";
      break;
    case g.too_small:
      a.type === "array" ? t = `Array must contain ${a.exact ? "exactly" : a.inclusive ? "at least" : "more than"} ${a.minimum} element(s)` : a.type === "string" ? t = `String must contain ${a.exact ? "exactly" : a.inclusive ? "at least" : "over"} ${a.minimum} character(s)` : a.type === "number" ? t = `Number must be ${a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than "}${a.minimum}` : a.type === "bigint" ? t = `Number must be ${a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than "}${a.minimum}` : a.type === "date" ? t = `Date must be ${a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(a.minimum))}` : t = "Invalid input";
      break;
    case g.too_big:
      a.type === "array" ? t = `Array must contain ${a.exact ? "exactly" : a.inclusive ? "at most" : "less than"} ${a.maximum} element(s)` : a.type === "string" ? t = `String must contain ${a.exact ? "exactly" : a.inclusive ? "at most" : "under"} ${a.maximum} character(s)` : a.type === "number" ? t = `Number must be ${a.exact ? "exactly" : a.inclusive ? "less than or equal to" : "less than"} ${a.maximum}` : a.type === "bigint" ? t = `BigInt must be ${a.exact ? "exactly" : a.inclusive ? "less than or equal to" : "less than"} ${a.maximum}` : a.type === "date" ? t = `Date must be ${a.exact ? "exactly" : a.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(a.maximum))}` : t = "Invalid input";
      break;
    case g.custom:
      t = "Invalid input";
      break;
    case g.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case g.not_multiple_of:
      t = `Number must be a multiple of ${a.multipleOf}`;
      break;
    case g.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, P.assertNever(a);
  }
  return { message: t };
};
let tc = Tt;
function oc() {
  return tc;
}
const sc = (a) => {
  const { data: e, path: t, errorMaps: o, issueData: s } = a, n = [...t, ...s.path || []], i = {
    ...s,
    path: n
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: n,
      message: s.message
    };
  let r = "";
  const u = o.filter((c) => !!c).slice().reverse();
  for (const c of u)
    r = c(i, { data: e, defaultError: r }).message;
  return {
    ...s,
    path: n,
    message: r
  };
};
function y(a, e) {
  const t = oc(), o = sc({
    issueData: e,
    data: a.data,
    path: a.path,
    errorMaps: [
      a.common.contextualErrorMap,
      // contextual error map is first priority
      a.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === Tt ? void 0 : Tt
      // then global default map
    ].filter((s) => !!s)
  });
  a.common.issues.push(o);
}
class re {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const o = [];
    for (const s of t) {
      if (s.status === "aborted")
        return E;
      s.status === "dirty" && e.dirty(), o.push(s.value);
    }
    return { status: e.value, value: o };
  }
  static async mergeObjectAsync(e, t) {
    const o = [];
    for (const s of t) {
      const n = await s.key, i = await s.value;
      o.push({
        key: n,
        value: i
      });
    }
    return re.mergeObjectSync(e, o);
  }
  static mergeObjectSync(e, t) {
    const o = {};
    for (const s of t) {
      const { key: n, value: i } = s;
      if (n.status === "aborted" || i.status === "aborted")
        return E;
      n.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), n.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (o[n.value] = i.value);
    }
    return { status: e.value, value: o };
  }
}
const E = Object.freeze({
  status: "aborted"
}), xa = (a) => ({ status: "dirty", value: a }), ce = (a) => ({ status: "valid", value: a }), Zo = (a) => a.status === "aborted", Bo = (a) => a.status === "dirty", ha = (a) => a.status === "valid", Ga = (a) => typeof Promise < "u" && a instanceof Promise;
var _;
(function(a) {
  a.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, a.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(_ || (_ = {}));
class Ve {
  constructor(e, t, o, s) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = o, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Vo = (a, e) => {
  if (ha(e))
    return { success: !0, data: e.value };
  if (!a.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new De(a.common.issues);
      return this._error = t, this._error;
    }
  };
};
function R(a) {
  if (!a)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: o, description: s } = a;
  if (e && (t || o))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (i, r) => {
    const { message: u } = a;
    return i.code === "invalid_enum_value" ? { message: u ?? r.defaultError } : typeof r.data > "u" ? { message: u ?? o ?? r.defaultError } : i.code !== "invalid_type" ? { message: r.defaultError } : { message: u ?? t ?? r.defaultError };
  }, description: s };
}
class N {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return qe(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: qe(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new re(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: qe(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Ga(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const o = this.safeParse(e, t);
    if (o.success)
      return o.data;
    throw o.error;
  }
  safeParse(e, t) {
    const o = {
      common: {
        issues: [],
        async: (t == null ? void 0 : t.async) ?? !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: qe(e)
    }, s = this._parseSync({ data: e, path: o.path, parent: o });
    return Vo(o, s);
  }
  "~validate"(e) {
    var o, s;
    const t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: qe(e)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return ha(n) ? {
          value: n.value
        } : {
          issues: t.common.issues
        };
      } catch (n) {
        (s = (o = n == null ? void 0 : n.message) == null ? void 0 : o.toLowerCase()) != null && s.includes("encountered") && (this["~standard"].async = !0), t.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) => ha(n) ? {
      value: n.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    const o = await this.safeParseAsync(e, t);
    if (o.success)
      return o.data;
    throw o.error;
  }
  async safeParseAsync(e, t) {
    const o = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: qe(e)
    }, s = this._parse({ data: e, path: o.path, parent: o }), n = await (Ga(s) ? s : Promise.resolve(s));
    return Vo(o, n);
  }
  refine(e, t) {
    const o = (s) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(s) : t;
    return this._refinement((s, n) => {
      const i = e(s), r = () => n.addIssue({
        code: g.custom,
        ...o(s)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((u) => u ? !0 : (r(), !1)) : i ? !0 : (r(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((o, s) => e(o) ? !0 : (s.addIssue(typeof t == "function" ? t(o, s) : t), !1));
  }
  _refinement(e) {
    return new ta({
      schema: this,
      typeName: f.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (t) => this["~validate"](t)
    };
  }
  optional() {
    return Ne.create(this, this._def);
  }
  nullable() {
    return oa.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ze.create(this);
  }
  promise() {
    return et.create(this, this._def);
  }
  or(e) {
    return Ka.create([this, e], this._def);
  }
  and(e) {
    return Xa.create(this, e, this._def);
  }
  transform(e) {
    return new ta({
      ...R(this._def),
      schema: this,
      typeName: f.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new at({
      ...R(this._def),
      innerType: this,
      defaultValue: t,
      typeName: f.ZodDefault
    });
  }
  brand() {
    return new Xs({
      typeName: f.ZodBranded,
      type: this,
      ...R(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new tt({
      ...R(this._def),
      innerType: this,
      catchValue: t,
      typeName: f.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return no.create(this, e);
  }
  readonly() {
    return ot.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const nc = /^c[^\s-]{8,}$/i, ic = /^[0-9a-z]+$/, rc = /^[0-9A-HJKMNP-TV-Z]{26}$/i, cc = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, uc = /^[a-z0-9_-]{21}$/i, lc = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, mc = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, pc = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, dc = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let wt;
const hc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, gc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, fc = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, kc = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, bc = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, yc = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Gs = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", wc = new RegExp(`^${Gs}$`);
function Ys(a) {
  let e = "[0-5]\\d";
  a.precision ? e = `${e}\\.\\d{${a.precision}}` : a.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = a.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function jc(a) {
  return new RegExp(`^${Ys(a)}$`);
}
function vc(a) {
  let e = `${Gs}T${Ys(a)}`;
  const t = [];
  return t.push(a.local ? "Z?" : "Z"), a.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function zc(a, e) {
  return !!((e === "v4" || !e) && hc.test(a) || (e === "v6" || !e) && fc.test(a));
}
function xc(a, e) {
  if (!lc.test(a))
    return !1;
  try {
    const [t] = a.split(".");
    if (!t)
      return !1;
    const o = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), s = JSON.parse(atob(o));
    return !(typeof s != "object" || s === null || "typ" in s && (s == null ? void 0 : s.typ) !== "JWT" || !s.alg || e && s.alg !== e);
  } catch {
    return !1;
  }
}
function _c(a, e) {
  return !!((e === "v4" || !e) && gc.test(a) || (e === "v6" || !e) && kc.test(a));
}
class Fe extends N {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== x.string) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: g.invalid_type,
        expected: x.string,
        received: n.parsedType
      }), E;
    }
    const o = new re();
    let s;
    for (const n of this._def.checks)
      if (n.kind === "min")
        e.data.length < n.value && (s = this._getOrReturnCtx(e, s), y(s, {
          code: g.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), o.dirty());
      else if (n.kind === "max")
        e.data.length > n.value && (s = this._getOrReturnCtx(e, s), y(s, {
          code: g.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), o.dirty());
      else if (n.kind === "length") {
        const i = e.data.length > n.value, r = e.data.length < n.value;
        (i || r) && (s = this._getOrReturnCtx(e, s), i ? y(s, {
          code: g.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }) : r && y(s, {
          code: g.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }), o.dirty());
      } else if (n.kind === "email")
        pc.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
          validation: "email",
          code: g.invalid_string,
          message: n.message
        }), o.dirty());
      else if (n.kind === "emoji")
        wt || (wt = new RegExp(dc, "u")), wt.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
          validation: "emoji",
          code: g.invalid_string,
          message: n.message
        }), o.dirty());
      else if (n.kind === "uuid")
        cc.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
          validation: "uuid",
          code: g.invalid_string,
          message: n.message
        }), o.dirty());
      else if (n.kind === "nanoid")
        uc.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
          validation: "nanoid",
          code: g.invalid_string,
          message: n.message
        }), o.dirty());
      else if (n.kind === "cuid")
        nc.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
          validation: "cuid",
          code: g.invalid_string,
          message: n.message
        }), o.dirty());
      else if (n.kind === "cuid2")
        ic.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
          validation: "cuid2",
          code: g.invalid_string,
          message: n.message
        }), o.dirty());
      else if (n.kind === "ulid")
        rc.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
          validation: "ulid",
          code: g.invalid_string,
          message: n.message
        }), o.dirty());
      else if (n.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), y(s, {
            validation: "url",
            code: g.invalid_string,
            message: n.message
          }), o.dirty();
        }
      else n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
        validation: "regex",
        code: g.invalid_string,
        message: n.message
      }), o.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (s = this._getOrReturnCtx(e, s), y(s, {
        code: g.invalid_string,
        validation: { includes: n.value, position: n.position },
        message: n.message
      }), o.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (s = this._getOrReturnCtx(e, s), y(s, {
        code: g.invalid_string,
        validation: { startsWith: n.value },
        message: n.message
      }), o.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (s = this._getOrReturnCtx(e, s), y(s, {
        code: g.invalid_string,
        validation: { endsWith: n.value },
        message: n.message
      }), o.dirty()) : n.kind === "datetime" ? vc(n).test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
        code: g.invalid_string,
        validation: "datetime",
        message: n.message
      }), o.dirty()) : n.kind === "date" ? wc.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
        code: g.invalid_string,
        validation: "date",
        message: n.message
      }), o.dirty()) : n.kind === "time" ? jc(n).test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
        code: g.invalid_string,
        validation: "time",
        message: n.message
      }), o.dirty()) : n.kind === "duration" ? mc.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
        validation: "duration",
        code: g.invalid_string,
        message: n.message
      }), o.dirty()) : n.kind === "ip" ? zc(e.data, n.version) || (s = this._getOrReturnCtx(e, s), y(s, {
        validation: "ip",
        code: g.invalid_string,
        message: n.message
      }), o.dirty()) : n.kind === "jwt" ? xc(e.data, n.alg) || (s = this._getOrReturnCtx(e, s), y(s, {
        validation: "jwt",
        code: g.invalid_string,
        message: n.message
      }), o.dirty()) : n.kind === "cidr" ? _c(e.data, n.version) || (s = this._getOrReturnCtx(e, s), y(s, {
        validation: "cidr",
        code: g.invalid_string,
        message: n.message
      }), o.dirty()) : n.kind === "base64" ? bc.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
        validation: "base64",
        code: g.invalid_string,
        message: n.message
      }), o.dirty()) : n.kind === "base64url" ? yc.test(e.data) || (s = this._getOrReturnCtx(e, s), y(s, {
        validation: "base64url",
        code: g.invalid_string,
        message: n.message
      }), o.dirty()) : P.assertNever(n);
    return { status: o.value, value: e.data };
  }
  _regex(e, t, o) {
    return this.refinement((s) => e.test(s), {
      validation: t,
      code: g.invalid_string,
      ..._.errToObj(o)
    });
  }
  _addCheck(e) {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ..._.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ..._.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ..._.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ..._.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ..._.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ..._.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ..._.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ..._.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ..._.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ..._.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ..._.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ..._.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ..._.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (e == null ? void 0 : e.offset) ?? !1,
      local: (e == null ? void 0 : e.local) ?? !1,
      ..._.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ..._.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ..._.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ..._.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ..._.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ..._.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ..._.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ..._.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ..._.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ..._.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, _.errToObj(e));
  }
  trim() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Fe.create = (a) => new Fe({
  checks: [],
  typeName: f.ZodString,
  coerce: (a == null ? void 0 : a.coerce) ?? !1,
  ...R(a)
});
function Sc(a, e) {
  const t = (a.toString().split(".")[1] || "").length, o = (e.toString().split(".")[1] || "").length, s = t > o ? t : o, n = Number.parseInt(a.toFixed(s).replace(".", "")), i = Number.parseInt(e.toFixed(s).replace(".", ""));
  return n % i / 10 ** s;
}
class ga extends N {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== x.number) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: g.invalid_type,
        expected: x.number,
        received: n.parsedType
      }), E;
    }
    let o;
    const s = new re();
    for (const n of this._def.checks)
      n.kind === "int" ? P.isInteger(e.data) || (o = this._getOrReturnCtx(e, o), y(o, {
        code: g.invalid_type,
        expected: "integer",
        received: "float",
        message: n.message
      }), s.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (o = this._getOrReturnCtx(e, o), y(o, {
        code: g.too_small,
        minimum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), s.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (o = this._getOrReturnCtx(e, o), y(o, {
        code: g.too_big,
        maximum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), s.dirty()) : n.kind === "multipleOf" ? Sc(e.data, n.value) !== 0 && (o = this._getOrReturnCtx(e, o), y(o, {
        code: g.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), s.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (o = this._getOrReturnCtx(e, o), y(o, {
        code: g.not_finite,
        message: n.message
      }), s.dirty()) : P.assertNever(n);
    return { status: s.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, _.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, _.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, _.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, _.toString(t));
  }
  setLimit(e, t, o, s) {
    return new ga({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: o,
          message: _.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ga({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: _.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: _.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: _.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: _.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: _.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: _.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: _.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: _.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: _.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && P.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const o of this._def.checks) {
      if (o.kind === "finite" || o.kind === "int" || o.kind === "multipleOf")
        return !0;
      o.kind === "min" ? (t === null || o.value > t) && (t = o.value) : o.kind === "max" && (e === null || o.value < e) && (e = o.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
ga.create = (a) => new ga({
  checks: [],
  typeName: f.ZodNumber,
  coerce: (a == null ? void 0 : a.coerce) || !1,
  ...R(a)
});
class Ta extends N {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== x.bigint)
      return this._getInvalidInput(e);
    let o;
    const s = new re();
    for (const n of this._def.checks)
      n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (o = this._getOrReturnCtx(e, o), y(o, {
        code: g.too_small,
        type: "bigint",
        minimum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), s.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (o = this._getOrReturnCtx(e, o), y(o, {
        code: g.too_big,
        type: "bigint",
        maximum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), s.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (o = this._getOrReturnCtx(e, o), y(o, {
        code: g.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), s.dirty()) : P.assertNever(n);
    return { status: s.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return y(t, {
      code: g.invalid_type,
      expected: x.bigint,
      received: t.parsedType
    }), E;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, _.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, _.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, _.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, _.toString(t));
  }
  setLimit(e, t, o, s) {
    return new Ta({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: o,
          message: _.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ta({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: _.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: _.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: _.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: _.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: _.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Ta.create = (a) => new Ta({
  checks: [],
  typeName: f.ZodBigInt,
  coerce: (a == null ? void 0 : a.coerce) ?? !1,
  ...R(a)
});
class Rt extends N {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== x.boolean) {
      const o = this._getOrReturnCtx(e);
      return y(o, {
        code: g.invalid_type,
        expected: x.boolean,
        received: o.parsedType
      }), E;
    }
    return ce(e.data);
  }
}
Rt.create = (a) => new Rt({
  typeName: f.ZodBoolean,
  coerce: (a == null ? void 0 : a.coerce) || !1,
  ...R(a)
});
class Ya extends N {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== x.date) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: g.invalid_type,
        expected: x.date,
        received: n.parsedType
      }), E;
    }
    if (Number.isNaN(e.data.getTime())) {
      const n = this._getOrReturnCtx(e);
      return y(n, {
        code: g.invalid_date
      }), E;
    }
    const o = new re();
    let s;
    for (const n of this._def.checks)
      n.kind === "min" ? e.data.getTime() < n.value && (s = this._getOrReturnCtx(e, s), y(s, {
        code: g.too_small,
        message: n.message,
        inclusive: !0,
        exact: !1,
        minimum: n.value,
        type: "date"
      }), o.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (s = this._getOrReturnCtx(e, s), y(s, {
        code: g.too_big,
        message: n.message,
        inclusive: !0,
        exact: !1,
        maximum: n.value,
        type: "date"
      }), o.dirty()) : P.assertNever(n);
    return {
      status: o.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Ya({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: _.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: _.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
Ya.create = (a) => new Ya({
  checks: [],
  coerce: (a == null ? void 0 : a.coerce) || !1,
  typeName: f.ZodDate,
  ...R(a)
});
class Ho extends N {
  _parse(e) {
    if (this._getType(e) !== x.symbol) {
      const o = this._getOrReturnCtx(e);
      return y(o, {
        code: g.invalid_type,
        expected: x.symbol,
        received: o.parsedType
      }), E;
    }
    return ce(e.data);
  }
}
Ho.create = (a) => new Ho({
  typeName: f.ZodSymbol,
  ...R(a)
});
class Nt extends N {
  _parse(e) {
    if (this._getType(e) !== x.undefined) {
      const o = this._getOrReturnCtx(e);
      return y(o, {
        code: g.invalid_type,
        expected: x.undefined,
        received: o.parsedType
      }), E;
    }
    return ce(e.data);
  }
}
Nt.create = (a) => new Nt({
  typeName: f.ZodUndefined,
  ...R(a)
});
class Pt extends N {
  _parse(e) {
    if (this._getType(e) !== x.null) {
      const o = this._getOrReturnCtx(e);
      return y(o, {
        code: g.invalid_type,
        expected: x.null,
        received: o.parsedType
      }), E;
    }
    return ce(e.data);
  }
}
Pt.create = (a) => new Pt({
  typeName: f.ZodNull,
  ...R(a)
});
class Dt extends N {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ce(e.data);
  }
}
Dt.create = (a) => new Dt({
  typeName: f.ZodAny,
  ...R(a)
});
class Wo extends N {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ce(e.data);
  }
}
Wo.create = (a) => new Wo({
  typeName: f.ZodUnknown,
  ...R(a)
});
class He extends N {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return y(t, {
      code: g.invalid_type,
      expected: x.never,
      received: t.parsedType
    }), E;
  }
}
He.create = (a) => new He({
  typeName: f.ZodNever,
  ...R(a)
});
class Jo extends N {
  _parse(e) {
    if (this._getType(e) !== x.undefined) {
      const o = this._getOrReturnCtx(e);
      return y(o, {
        code: g.invalid_type,
        expected: x.void,
        received: o.parsedType
      }), E;
    }
    return ce(e.data);
  }
}
Jo.create = (a) => new Jo({
  typeName: f.ZodVoid,
  ...R(a)
});
class ze extends N {
  _parse(e) {
    const { ctx: t, status: o } = this._processInputParams(e), s = this._def;
    if (t.parsedType !== x.array)
      return y(t, {
        code: g.invalid_type,
        expected: x.array,
        received: t.parsedType
      }), E;
    if (s.exactLength !== null) {
      const i = t.data.length > s.exactLength.value, r = t.data.length < s.exactLength.value;
      (i || r) && (y(t, {
        code: i ? g.too_big : g.too_small,
        minimum: r ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), o.dirty());
    }
    if (s.minLength !== null && t.data.length < s.minLength.value && (y(t, {
      code: g.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), o.dirty()), s.maxLength !== null && t.data.length > s.maxLength.value && (y(t, {
      code: g.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), o.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, r) => s.type._parseAsync(new Ve(t, i, t.path, r)))).then((i) => re.mergeArray(o, i));
    const n = [...t.data].map((i, r) => s.type._parseSync(new Ve(t, i, t.path, r)));
    return re.mergeArray(o, n);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new ze({
      ...this._def,
      minLength: { value: e, message: _.toString(t) }
    });
  }
  max(e, t) {
    return new ze({
      ...this._def,
      maxLength: { value: e, message: _.toString(t) }
    });
  }
  length(e, t) {
    return new ze({
      ...this._def,
      exactLength: { value: e, message: _.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ze.create = (a, e) => new ze({
  type: a,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: f.ZodArray,
  ...R(e)
});
function ca(a) {
  if (a instanceof B) {
    const e = {};
    for (const t in a.shape) {
      const o = a.shape[t];
      e[t] = Ne.create(ca(o));
    }
    return new B({
      ...a._def,
      shape: () => e
    });
  } else return a instanceof ze ? new ze({
    ...a._def,
    type: ca(a.element)
  }) : a instanceof Ne ? Ne.create(ca(a.unwrap())) : a instanceof oa ? oa.create(ca(a.unwrap())) : a instanceof ea ? ea.create(a.items.map((e) => ca(e))) : a;
}
class B extends N {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = P.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== x.object) {
      const c = this._getOrReturnCtx(e);
      return y(c, {
        code: g.invalid_type,
        expected: x.object,
        received: c.parsedType
      }), E;
    }
    const { status: o, ctx: s } = this._processInputParams(e), { shape: n, keys: i } = this._getCached(), r = [];
    if (!(this._def.catchall instanceof He && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        i.includes(c) || r.push(c);
    const u = [];
    for (const c of i) {
      const l = n[c], p = s.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: l._parse(new Ve(s, p, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof He) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const l of r)
          u.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: s.data[l] }
          });
      else if (c === "strict")
        r.length > 0 && (y(s, {
          code: g.unrecognized_keys,
          keys: r
        }), o.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const l of r) {
        const p = s.data[l];
        u.push({
          key: { status: "valid", value: l },
          value: c._parse(
            new Ve(s, p, s.path, l)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: l in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const l of u) {
        const p = await l.key, w = await l.value;
        c.push({
          key: p,
          value: w,
          alwaysSet: l.alwaysSet
        });
      }
      return c;
    }).then((c) => re.mergeObjectSync(o, c)) : re.mergeObjectSync(o, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return _.errToObj, new B({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, o) => {
          var n, i;
          const s = ((i = (n = this._def).errorMap) == null ? void 0 : i.call(n, t, o).message) ?? o.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: _.errToObj(e).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new B({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new B({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new B({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new B({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: f.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new B({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const o of P.objectKeys(e))
      e[o] && this.shape[o] && (t[o] = this.shape[o]);
    return new B({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const o of P.objectKeys(this.shape))
      e[o] || (t[o] = this.shape[o]);
    return new B({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ca(this);
  }
  partial(e) {
    const t = {};
    for (const o of P.objectKeys(this.shape)) {
      const s = this.shape[o];
      e && !e[o] ? t[o] = s : t[o] = s.optional();
    }
    return new B({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const o of P.objectKeys(this.shape))
      if (e && !e[o])
        t[o] = this.shape[o];
      else {
        let n = this.shape[o];
        for (; n instanceof Ne; )
          n = n._def.innerType;
        t[o] = n;
      }
    return new B({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ks(P.objectKeys(this.shape));
  }
}
B.create = (a, e) => new B({
  shape: () => a,
  unknownKeys: "strip",
  catchall: He.create(),
  typeName: f.ZodObject,
  ...R(e)
});
B.strictCreate = (a, e) => new B({
  shape: () => a,
  unknownKeys: "strict",
  catchall: He.create(),
  typeName: f.ZodObject,
  ...R(e)
});
B.lazycreate = (a, e) => new B({
  shape: a,
  unknownKeys: "strip",
  catchall: He.create(),
  typeName: f.ZodObject,
  ...R(e)
});
class Ka extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), o = this._def.options;
    function s(n) {
      for (const r of n)
        if (r.result.status === "valid")
          return r.result;
      for (const r of n)
        if (r.result.status === "dirty")
          return t.common.issues.push(...r.ctx.common.issues), r.result;
      const i = n.map((r) => new De(r.ctx.common.issues));
      return y(t, {
        code: g.invalid_union,
        unionErrors: i
      }), E;
    }
    if (t.common.async)
      return Promise.all(o.map(async (n) => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await n._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(s);
    {
      let n;
      const i = [];
      for (const u of o) {
        const c = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, l = u._parseSync({
          data: t.data,
          path: t.path,
          parent: c
        });
        if (l.status === "valid")
          return l;
        l.status === "dirty" && !n && (n = { result: l, ctx: c }), c.common.issues.length && i.push(c.common.issues);
      }
      if (n)
        return t.common.issues.push(...n.ctx.common.issues), n.result;
      const r = i.map((u) => new De(u));
      return y(t, {
        code: g.invalid_union,
        unionErrors: r
      }), E;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ka.create = (a, e) => new Ka({
  options: a,
  typeName: f.ZodUnion,
  ...R(e)
});
const Te = (a) => a instanceof Mt ? Te(a.schema) : a instanceof ta ? Te(a.innerType()) : a instanceof Qa ? [a.value] : a instanceof aa ? a.options : a instanceof $t ? P.objectValues(a.enum) : a instanceof at ? Te(a._def.innerType) : a instanceof Nt ? [void 0] : a instanceof Pt ? [null] : a instanceof Ne ? [void 0, ...Te(a.unwrap())] : a instanceof oa ? [null, ...Te(a.unwrap())] : a instanceof Xs || a instanceof ot ? Te(a.unwrap()) : a instanceof tt ? Te(a._def.innerType) : [];
class so extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== x.object)
      return y(t, {
        code: g.invalid_type,
        expected: x.object,
        received: t.parsedType
      }), E;
    const o = this.discriminator, s = t.data[o], n = this.optionsMap.get(s);
    return n ? t.common.async ? n._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : n._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (y(t, {
      code: g.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [o]
    }), E);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, t, o) {
    const s = /* @__PURE__ */ new Map();
    for (const n of t) {
      const i = Te(n.shape[e]);
      if (!i.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const r of i) {
        if (s.has(r))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(r)}`);
        s.set(r, n);
      }
    }
    return new so({
      typeName: f.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: s,
      ...R(o)
    });
  }
}
function Lt(a, e) {
  const t = qe(a), o = qe(e);
  if (a === e)
    return { valid: !0, data: a };
  if (t === x.object && o === x.object) {
    const s = P.objectKeys(e), n = P.objectKeys(a).filter((r) => s.indexOf(r) !== -1), i = { ...a, ...e };
    for (const r of n) {
      const u = Lt(a[r], e[r]);
      if (!u.valid)
        return { valid: !1 };
      i[r] = u.data;
    }
    return { valid: !0, data: i };
  } else if (t === x.array && o === x.array) {
    if (a.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let n = 0; n < a.length; n++) {
      const i = a[n], r = e[n], u = Lt(i, r);
      if (!u.valid)
        return { valid: !1 };
      s.push(u.data);
    }
    return { valid: !0, data: s };
  } else return t === x.date && o === x.date && +a == +e ? { valid: !0, data: a } : { valid: !1 };
}
class Xa extends N {
  _parse(e) {
    const { status: t, ctx: o } = this._processInputParams(e), s = (n, i) => {
      if (Zo(n) || Zo(i))
        return E;
      const r = Lt(n.value, i.value);
      return r.valid ? ((Bo(n) || Bo(i)) && t.dirty(), { status: t.value, value: r.data }) : (y(o, {
        code: g.invalid_intersection_types
      }), E);
    };
    return o.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: o.data,
        path: o.path,
        parent: o
      }),
      this._def.right._parseAsync({
        data: o.data,
        path: o.path,
        parent: o
      })
    ]).then(([n, i]) => s(n, i)) : s(this._def.left._parseSync({
      data: o.data,
      path: o.path,
      parent: o
    }), this._def.right._parseSync({
      data: o.data,
      path: o.path,
      parent: o
    }));
  }
}
Xa.create = (a, e, t) => new Xa({
  left: a,
  right: e,
  typeName: f.ZodIntersection,
  ...R(t)
});
class ea extends N {
  _parse(e) {
    const { status: t, ctx: o } = this._processInputParams(e);
    if (o.parsedType !== x.array)
      return y(o, {
        code: g.invalid_type,
        expected: x.array,
        received: o.parsedType
      }), E;
    if (o.data.length < this._def.items.length)
      return y(o, {
        code: g.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), E;
    !this._def.rest && o.data.length > this._def.items.length && (y(o, {
      code: g.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const n = [...o.data].map((i, r) => {
      const u = this._def.items[r] || this._def.rest;
      return u ? u._parse(new Ve(o, i, o.path, r)) : null;
    }).filter((i) => !!i);
    return o.common.async ? Promise.all(n).then((i) => re.mergeArray(t, i)) : re.mergeArray(t, n);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ea({
      ...this._def,
      rest: e
    });
  }
}
ea.create = (a, e) => {
  if (!Array.isArray(a))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ea({
    items: a,
    typeName: f.ZodTuple,
    rest: null,
    ...R(e)
  });
};
class Go extends N {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: o } = this._processInputParams(e);
    if (o.parsedType !== x.map)
      return y(o, {
        code: g.invalid_type,
        expected: x.map,
        received: o.parsedType
      }), E;
    const s = this._def.keyType, n = this._def.valueType, i = [...o.data.entries()].map(([r, u], c) => ({
      key: s._parse(new Ve(o, r, o.path, [c, "key"])),
      value: n._parse(new Ve(o, u, o.path, [c, "value"]))
    }));
    if (o.common.async) {
      const r = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of i) {
          const c = await u.key, l = await u.value;
          if (c.status === "aborted" || l.status === "aborted")
            return E;
          (c.status === "dirty" || l.status === "dirty") && t.dirty(), r.set(c.value, l.value);
        }
        return { status: t.value, value: r };
      });
    } else {
      const r = /* @__PURE__ */ new Map();
      for (const u of i) {
        const c = u.key, l = u.value;
        if (c.status === "aborted" || l.status === "aborted")
          return E;
        (c.status === "dirty" || l.status === "dirty") && t.dirty(), r.set(c.value, l.value);
      }
      return { status: t.value, value: r };
    }
  }
}
Go.create = (a, e, t) => new Go({
  valueType: e,
  keyType: a,
  typeName: f.ZodMap,
  ...R(t)
});
class Ra extends N {
  _parse(e) {
    const { status: t, ctx: o } = this._processInputParams(e);
    if (o.parsedType !== x.set)
      return y(o, {
        code: g.invalid_type,
        expected: x.set,
        received: o.parsedType
      }), E;
    const s = this._def;
    s.minSize !== null && o.data.size < s.minSize.value && (y(o, {
      code: g.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), t.dirty()), s.maxSize !== null && o.data.size > s.maxSize.value && (y(o, {
      code: g.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), t.dirty());
    const n = this._def.valueType;
    function i(u) {
      const c = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l.status === "aborted")
          return E;
        l.status === "dirty" && t.dirty(), c.add(l.value);
      }
      return { status: t.value, value: c };
    }
    const r = [...o.data.values()].map((u, c) => n._parse(new Ve(o, u, o.path, c)));
    return o.common.async ? Promise.all(r).then((u) => i(u)) : i(r);
  }
  min(e, t) {
    return new Ra({
      ...this._def,
      minSize: { value: e, message: _.toString(t) }
    });
  }
  max(e, t) {
    return new Ra({
      ...this._def,
      maxSize: { value: e, message: _.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ra.create = (a, e) => new Ra({
  valueType: a,
  minSize: null,
  maxSize: null,
  typeName: f.ZodSet,
  ...R(e)
});
class Mt extends N {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Mt.create = (a, e) => new Mt({
  getter: a,
  typeName: f.ZodLazy,
  ...R(e)
});
class Qa extends N {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return y(t, {
        received: t.data,
        code: g.invalid_literal,
        expected: this._def.value
      }), E;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Qa.create = (a, e) => new Qa({
  value: a,
  typeName: f.ZodLiteral,
  ...R(e)
});
function Ks(a, e) {
  return new aa({
    values: a,
    typeName: f.ZodEnum,
    ...R(e)
  });
}
class aa extends N {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), o = this._def.values;
      return y(t, {
        expected: P.joinValues(o),
        received: t.parsedType,
        code: g.invalid_type
      }), E;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), o = this._def.values;
      return y(t, {
        received: t.data,
        code: g.invalid_enum_value,
        options: o
      }), E;
    }
    return ce(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return aa.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return aa.create(this.options.filter((o) => !e.includes(o)), {
      ...this._def,
      ...t
    });
  }
}
aa.create = Ks;
class $t extends N {
  _parse(e) {
    const t = P.getValidEnumValues(this._def.values), o = this._getOrReturnCtx(e);
    if (o.parsedType !== x.string && o.parsedType !== x.number) {
      const s = P.objectValues(t);
      return y(o, {
        expected: P.joinValues(s),
        received: o.parsedType,
        code: g.invalid_type
      }), E;
    }
    if (this._cache || (this._cache = new Set(P.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const s = P.objectValues(t);
      return y(o, {
        received: o.data,
        code: g.invalid_enum_value,
        options: s
      }), E;
    }
    return ce(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
$t.create = (a, e) => new $t({
  values: a,
  typeName: f.ZodNativeEnum,
  ...R(e)
});
class et extends N {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== x.promise && t.common.async === !1)
      return y(t, {
        code: g.invalid_type,
        expected: x.promise,
        received: t.parsedType
      }), E;
    const o = t.parsedType === x.promise ? t.data : Promise.resolve(t.data);
    return ce(o.then((s) => this._def.type.parseAsync(s, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
et.create = (a, e) => new et({
  type: a,
  typeName: f.ZodPromise,
  ...R(e)
});
class ta extends N {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === f.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: o } = this._processInputParams(e), s = this._def.effect || null, n = {
      addIssue: (i) => {
        y(o, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return o.path;
      }
    };
    if (n.addIssue = n.addIssue.bind(n), s.type === "preprocess") {
      const i = s.transform(o.data, n);
      if (o.common.async)
        return Promise.resolve(i).then(async (r) => {
          if (t.value === "aborted")
            return E;
          const u = await this._def.schema._parseAsync({
            data: r,
            path: o.path,
            parent: o
          });
          return u.status === "aborted" ? E : u.status === "dirty" || t.value === "dirty" ? xa(u.value) : u;
        });
      {
        if (t.value === "aborted")
          return E;
        const r = this._def.schema._parseSync({
          data: i,
          path: o.path,
          parent: o
        });
        return r.status === "aborted" ? E : r.status === "dirty" || t.value === "dirty" ? xa(r.value) : r;
      }
    }
    if (s.type === "refinement") {
      const i = (r) => {
        const u = s.refinement(r, n);
        if (o.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return r;
      };
      if (o.common.async === !1) {
        const r = this._def.schema._parseSync({
          data: o.data,
          path: o.path,
          parent: o
        });
        return r.status === "aborted" ? E : (r.status === "dirty" && t.dirty(), i(r.value), { status: t.value, value: r.value });
      } else
        return this._def.schema._parseAsync({ data: o.data, path: o.path, parent: o }).then((r) => r.status === "aborted" ? E : (r.status === "dirty" && t.dirty(), i(r.value).then(() => ({ status: t.value, value: r.value }))));
    }
    if (s.type === "transform")
      if (o.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: o.data,
          path: o.path,
          parent: o
        });
        if (!ha(i))
          return E;
        const r = s.transform(i.value, n);
        if (r instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: r };
      } else
        return this._def.schema._parseAsync({ data: o.data, path: o.path, parent: o }).then((i) => ha(i) ? Promise.resolve(s.transform(i.value, n)).then((r) => ({
          status: t.value,
          value: r
        })) : E);
    P.assertNever(s);
  }
}
ta.create = (a, e, t) => new ta({
  schema: a,
  typeName: f.ZodEffects,
  effect: e,
  ...R(t)
});
ta.createWithPreprocess = (a, e, t) => new ta({
  schema: e,
  effect: { type: "preprocess", transform: a },
  typeName: f.ZodEffects,
  ...R(t)
});
class Ne extends N {
  _parse(e) {
    return this._getType(e) === x.undefined ? ce(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ne.create = (a, e) => new Ne({
  innerType: a,
  typeName: f.ZodOptional,
  ...R(e)
});
class oa extends N {
  _parse(e) {
    return this._getType(e) === x.null ? ce(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
oa.create = (a, e) => new oa({
  innerType: a,
  typeName: f.ZodNullable,
  ...R(e)
});
class at extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let o = t.data;
    return t.parsedType === x.undefined && (o = this._def.defaultValue()), this._def.innerType._parse({
      data: o,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
at.create = (a, e) => new at({
  innerType: a,
  typeName: f.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...R(e)
});
class tt extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), o = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: o.data,
      path: o.path,
      parent: {
        ...o
      }
    });
    return Ga(s) ? s.then((n) => ({
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new De(o.common.issues);
        },
        input: o.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new De(o.common.issues);
        },
        input: o.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
tt.create = (a, e) => new tt({
  innerType: a,
  typeName: f.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...R(e)
});
class Yo extends N {
  _parse(e) {
    if (this._getType(e) !== x.nan) {
      const o = this._getOrReturnCtx(e);
      return y(o, {
        code: g.invalid_type,
        expected: x.nan,
        received: o.parsedType
      }), E;
    }
    return { status: "valid", value: e.data };
  }
}
Yo.create = (a) => new Yo({
  typeName: f.ZodNaN,
  ...R(a)
});
class Xs extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), o = t.data;
    return this._def.type._parse({
      data: o,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class no extends N {
  _parse(e) {
    const { status: t, ctx: o } = this._processInputParams(e);
    if (o.common.async)
      return (async () => {
        const n = await this._def.in._parseAsync({
          data: o.data,
          path: o.path,
          parent: o
        });
        return n.status === "aborted" ? E : n.status === "dirty" ? (t.dirty(), xa(n.value)) : this._def.out._parseAsync({
          data: n.value,
          path: o.path,
          parent: o
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: o.data,
        path: o.path,
        parent: o
      });
      return s.status === "aborted" ? E : s.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: o.path,
        parent: o
      });
    }
  }
  static create(e, t) {
    return new no({
      in: e,
      out: t,
      typeName: f.ZodPipeline
    });
  }
}
class ot extends N {
  _parse(e) {
    const t = this._def.innerType._parse(e), o = (s) => (ha(s) && (s.value = Object.freeze(s.value)), s);
    return Ga(t) ? t.then((s) => o(s)) : o(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ot.create = (a, e) => new ot({
  innerType: a,
  typeName: f.ZodReadonly,
  ...R(e)
});
var f;
(function(a) {
  a.ZodString = "ZodString", a.ZodNumber = "ZodNumber", a.ZodNaN = "ZodNaN", a.ZodBigInt = "ZodBigInt", a.ZodBoolean = "ZodBoolean", a.ZodDate = "ZodDate", a.ZodSymbol = "ZodSymbol", a.ZodUndefined = "ZodUndefined", a.ZodNull = "ZodNull", a.ZodAny = "ZodAny", a.ZodUnknown = "ZodUnknown", a.ZodNever = "ZodNever", a.ZodVoid = "ZodVoid", a.ZodArray = "ZodArray", a.ZodObject = "ZodObject", a.ZodUnion = "ZodUnion", a.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", a.ZodIntersection = "ZodIntersection", a.ZodTuple = "ZodTuple", a.ZodRecord = "ZodRecord", a.ZodMap = "ZodMap", a.ZodSet = "ZodSet", a.ZodFunction = "ZodFunction", a.ZodLazy = "ZodLazy", a.ZodLiteral = "ZodLiteral", a.ZodEnum = "ZodEnum", a.ZodEffects = "ZodEffects", a.ZodNativeEnum = "ZodNativeEnum", a.ZodOptional = "ZodOptional", a.ZodNullable = "ZodNullable", a.ZodDefault = "ZodDefault", a.ZodCatch = "ZodCatch", a.ZodPromise = "ZodPromise", a.ZodBranded = "ZodBranded", a.ZodPipeline = "ZodPipeline", a.ZodReadonly = "ZodReadonly";
})(f || (f = {}));
const M = Fe.create, _e = ga.create, jt = Rt.create, Ko = Dt.create;
He.create;
const q = ze.create, ee = B.create, Ac = Ka.create, Cc = so.create;
Xa.create;
ea.create;
const fe = Qa.create;
aa.create;
et.create;
Ne.create;
const fa = oa.create;
var Ec = "FEmusic_home", ke = ee({
  url: M(),
  width: _e(),
  height: _e()
}).strict(), Le = ee({
  artistId: fa(M()),
  name: M()
}).strict(), Oc = ee({
  albumId: M(),
  name: M()
}).strict(), Ze = ee({
  type: fe("SONG"),
  videoId: M(),
  name: M(),
  artist: Le,
  album: fa(Oc),
  duration: fa(_e()),
  thumbnails: q(ke)
}).strict(), io = ee({
  type: fe("VIDEO"),
  videoId: M(),
  name: M(),
  artist: Le,
  duration: fa(_e()),
  thumbnails: q(ke)
}).strict(), st = ee({
  artistId: M(),
  name: M(),
  type: fe("ARTIST"),
  thumbnails: q(ke)
}).strict(), Be = ee({
  type: fe("ALBUM"),
  albumId: M(),
  playlistId: M(),
  name: M(),
  artist: Le,
  year: fa(_e()),
  thumbnails: q(ke)
}).strict(), ma = ee({
  type: fe("PLAYLIST"),
  playlistId: M(),
  name: M(),
  artist: Le,
  thumbnails: q(ke)
}).strict(), Ic = ee({
  type: fe("SONG"),
  videoId: M(),
  name: M(),
  artist: Le,
  duration: _e(),
  thumbnails: q(ke),
  formats: q(Ko()),
  adaptiveFormats: q(Ko())
}).strict();
ee({
  type: fe("VIDEO"),
  videoId: M(),
  name: M(),
  artist: Le,
  duration: _e(),
  thumbnails: q(ke),
  unlisted: jt(),
  familySafe: jt(),
  paid: jt(),
  tags: q(M())
}).strict();
ee({
  type: fe("SONG"),
  videoId: M(),
  title: M(),
  artists: Le,
  duration: _e(),
  thumbnails: q(ke)
}).strict();
var Tc = ee({
  artistId: M(),
  name: M(),
  type: fe("ARTIST"),
  thumbnails: q(ke),
  topSongs: q(Ze),
  topAlbums: q(Be),
  topSingles: q(Be),
  topVideos: q(io),
  featuredOn: q(ma),
  similarArtists: q(st)
}).strict(), Rc = ee({
  type: fe("ALBUM"),
  albumId: M(),
  playlistId: M(),
  name: M(),
  artist: Le,
  year: fa(_e()),
  thumbnails: q(ke),
  songs: q(Ze)
}).strict(), Nc = ee({
  type: fe("PLAYLIST"),
  playlistId: M(),
  name: M(),
  artist: Le,
  videoCount: _e(),
  thumbnails: q(ke)
}).strict();
Cc("type", [
  Ze,
  io,
  Be,
  st,
  ma
]);
var Pc = ee({
  title: M(),
  contents: q(Ac([Be, ma, Ze]))
}).strict(), Dc = Symbol("Let zodToJsonSchema decide on which parser to use"), Lc = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: !1,
  definitions: {},
  errorMessages: !1,
  markdownDescription: !1,
  patternStrategy: "escape",
  applyRegexFlags: !1,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
}, Mc = (a) => ({
  ...Lc,
  name: a
}), $c = (a) => {
  const e = Mc(a), t = [...e.basePath, e.definitionPath, e.name];
  return {
    ...e,
    currentPath: t,
    propertyPath: void 0,
    seen: new Map(Object.entries(e.definitions).map(([o, s]) => [
      s._def,
      {
        def: s._def,
        path: [...e.basePath, e.definitionPath, o],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
};
function Qs(a, e, t, o) {
  o != null && o.errorMessages && t && (a.errorMessage = {
    ...a.errorMessage,
    [e]: t
  });
}
function U(a, e, t, o, s) {
  a[e] = t, Qs(a, e, o, s);
}
function Uc() {
  return {};
}
function qc(a, e) {
  var o, s;
  const t = {
    type: "array"
  };
  return ((s = (o = a.type) == null ? void 0 : o._def) == null ? void 0 : s.typeName) !== f.ZodAny && (t.items = L(a.type._def, {
    ...e,
    currentPath: [...e.currentPath, "items"]
  })), a.minLength && U(t, "minItems", a.minLength.value, a.minLength.message, e), a.maxLength && U(t, "maxItems", a.maxLength.value, a.maxLength.message, e), a.exactLength && (U(t, "minItems", a.exactLength.value, a.exactLength.message, e), U(t, "maxItems", a.exactLength.value, a.exactLength.message, e)), t;
}
function Fc(a, e) {
  const t = {
    type: "integer",
    format: "int64"
  };
  if (!a.checks)
    return t;
  for (const o of a.checks)
    switch (o.kind) {
      case "min":
        e.target === "jsonSchema7" ? o.inclusive ? U(t, "minimum", o.value, o.message, e) : U(t, "exclusiveMinimum", o.value, o.message, e) : (o.inclusive || (t.exclusiveMinimum = !0), U(t, "minimum", o.value, o.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? o.inclusive ? U(t, "maximum", o.value, o.message, e) : U(t, "exclusiveMaximum", o.value, o.message, e) : (o.inclusive || (t.exclusiveMaximum = !0), U(t, "maximum", o.value, o.message, e));
        break;
      case "multipleOf":
        U(t, "multipleOf", o.value, o.message, e);
        break;
    }
  return t;
}
function Zc() {
  return {
    type: "boolean"
  };
}
function Bc(a, e) {
  return L(a.type._def, e);
}
var Vc = (a, e) => L(a.innerType._def, e);
function en(a, e, t) {
  const o = t ?? e.dateStrategy;
  if (Array.isArray(o))
    return {
      anyOf: o.map((s, n) => en(a, e, s))
    };
  switch (o) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return Hc(a, e);
  }
}
var Hc = (a, e) => {
  const t = {
    type: "integer",
    format: "unix-time"
  };
  if (e.target === "openApi3")
    return t;
  for (const o of a.checks)
    switch (o.kind) {
      case "min":
        U(
          t,
          "minimum",
          o.value,
          // This is in milliseconds
          o.message,
          e
        );
        break;
      case "max":
        U(
          t,
          "maximum",
          o.value,
          // This is in milliseconds
          o.message,
          e
        );
        break;
    }
  return t;
};
function Wc(a, e) {
  return {
    ...L(a.innerType._def, e),
    default: a.defaultValue()
  };
}
function Jc(a, e) {
  return e.effectStrategy === "input" ? L(a.schema._def, e) : {};
}
function Gc(a) {
  return {
    type: "string",
    enum: a.values
  };
}
var Yc = (a) => "type" in a && a.type === "string" ? !1 : "allOf" in a;
function Kc(a, e) {
  const t = [
    L(a.left._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "0"]
    }),
    L(a.right._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "1"]
    })
  ].filter((n) => !!n);
  let o = e.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const s = [];
  return t.forEach((n) => {
    if (Yc(n))
      s.push(...n.allOf), n.unevaluatedProperties === void 0 && (o = void 0);
    else {
      let i = n;
      if ("additionalProperties" in n && n.additionalProperties === !1) {
        const { additionalProperties: r, ...u } = n;
        i = u;
      } else
        o = void 0;
      s.push(i);
    }
  }), s.length ? {
    allOf: s,
    ...o
  } : void 0;
}
function Xc(a, e) {
  const t = typeof a.value;
  return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
    type: Array.isArray(a.value) ? "array" : "object"
  } : e.target === "openApi3" ? {
    type: t === "bigint" ? "integer" : t,
    enum: [a.value]
  } : {
    type: t === "bigint" ? "integer" : t,
    const: a.value
  };
}
var Ge = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   */
  emoji: RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"),
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/
};
function an(a, e) {
  const t = {
    type: "string"
  };
  function o(s) {
    return e.patternStrategy === "escape" ? Qc(s) : s;
  }
  if (a.checks)
    for (const s of a.checks)
      switch (s.kind) {
        case "min":
          U(t, "minLength", typeof t.minLength == "number" ? Math.max(t.minLength, s.value) : s.value, s.message, e);
          break;
        case "max":
          U(t, "maxLength", typeof t.maxLength == "number" ? Math.min(t.maxLength, s.value) : s.value, s.message, e);
          break;
        case "email":
          switch (e.emailStrategy) {
            case "format:email":
              pe(t, "email", s.message, e);
              break;
            case "format:idn-email":
              pe(t, "idn-email", s.message, e);
              break;
            case "pattern:zod":
              de(t, Ge.email, s.message, e);
              break;
          }
          break;
        case "url":
          pe(t, "uri", s.message, e);
          break;
        case "uuid":
          pe(t, "uuid", s.message, e);
          break;
        case "regex":
          de(t, s.regex, s.message, e);
          break;
        case "cuid":
          de(t, Ge.cuid, s.message, e);
          break;
        case "cuid2":
          de(t, Ge.cuid2, s.message, e);
          break;
        case "startsWith":
          de(t, RegExp(`^${o(s.value)}`), s.message, e);
          break;
        case "endsWith":
          de(t, RegExp(`${o(s.value)}$`), s.message, e);
          break;
        case "datetime":
          pe(t, "date-time", s.message, e);
          break;
        case "date":
          pe(t, "date", s.message, e);
          break;
        case "time":
          pe(t, "time", s.message, e);
          break;
        case "duration":
          pe(t, "duration", s.message, e);
          break;
        case "length":
          U(t, "minLength", typeof t.minLength == "number" ? Math.max(t.minLength, s.value) : s.value, s.message, e), U(t, "maxLength", typeof t.maxLength == "number" ? Math.min(t.maxLength, s.value) : s.value, s.message, e);
          break;
        case "includes": {
          de(t, RegExp(o(s.value)), s.message, e);
          break;
        }
        case "ip": {
          s.version !== "v6" && pe(t, "ipv4", s.message, e), s.version !== "v4" && pe(t, "ipv6", s.message, e);
          break;
        }
        case "emoji":
          de(t, Ge.emoji, s.message, e);
          break;
        case "ulid": {
          de(t, Ge.ulid, s.message, e);
          break;
        }
        case "base64": {
          switch (e.base64Strategy) {
            case "format:binary": {
              pe(t, "binary", s.message, e);
              break;
            }
            case "contentEncoding:base64": {
              U(t, "contentEncoding", "base64", s.message, e);
              break;
            }
            case "pattern:zod": {
              de(t, Ge.base64, s.message, e);
              break;
            }
          }
          break;
        }
        case "nanoid":
          de(t, Ge.nanoid, s.message, e);
      }
  return t;
}
var Qc = (a) => Array.from(a).map((e) => /[a-zA-Z0-9]/.test(e) ? e : `\\${e}`).join(""), pe = (a, e, t, o) => {
  var s;
  a.format || (s = a.anyOf) != null && s.some((n) => n.format) ? (a.anyOf || (a.anyOf = []), a.format && (a.anyOf.push({
    format: a.format,
    ...a.errorMessage && o.errorMessages && {
      errorMessage: { format: a.errorMessage.format }
    }
  }), delete a.format, a.errorMessage && (delete a.errorMessage.format, Object.keys(a.errorMessage).length === 0 && delete a.errorMessage)), a.anyOf.push({
    format: e,
    ...t && o.errorMessages && { errorMessage: { format: t } }
  })) : U(a, "format", e, t, o);
}, de = (a, e, t, o) => {
  var s;
  a.pattern || (s = a.allOf) != null && s.some((n) => n.pattern) ? (a.allOf || (a.allOf = []), a.pattern && (a.allOf.push({
    pattern: a.pattern,
    ...a.errorMessage && o.errorMessages && {
      errorMessage: { pattern: a.errorMessage.pattern }
    }
  }), delete a.pattern, a.errorMessage && (delete a.errorMessage.pattern, Object.keys(a.errorMessage).length === 0 && delete a.errorMessage)), a.allOf.push({
    pattern: Xo(e, o),
    ...t && o.errorMessages && { errorMessage: { pattern: t } }
  })) : U(a, "pattern", Xo(e, o), t, o);
}, Xo = (a, e) => {
  var u;
  if (!e.applyRegexFlags || !a.flags)
    return a.source;
  const t = {
    i: a.flags.includes("i"),
    m: a.flags.includes("m"),
    s: a.flags.includes("s")
    // `.` matches newlines
  }, o = t.i ? a.source.toLowerCase() : a.source;
  let s = "", n = !1, i = !1, r = !1;
  for (let c = 0; c < o.length; c++) {
    if (n) {
      s += o[c], n = !1;
      continue;
    }
    if (t.i) {
      if (i) {
        if (o[c].match(/[a-z]/)) {
          r ? (s += o[c], s += `${o[c - 2]}-${o[c]}`.toUpperCase(), r = !1) : o[c + 1] === "-" && ((u = o[c + 2]) != null && u.match(/[a-z]/)) ? (s += o[c], r = !0) : s += `${o[c]}${o[c].toUpperCase()}`;
          continue;
        }
      } else if (o[c].match(/[a-z]/)) {
        s += `[${o[c]}${o[c].toUpperCase()}]`;
        continue;
      }
    }
    if (t.m) {
      if (o[c] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (o[c] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (t.s && o[c] === ".") {
      s += i ? `${o[c]}\r
` : `[${o[c]}\r
]`;
      continue;
    }
    s += o[c], o[c] === "\\" ? n = !0 : i && o[c] === "]" ? i = !1 : !i && o[c] === "[" && (i = !0);
  }
  try {
    const c = new RegExp(s);
  } catch {
    return console.warn(`Could not convert regex pattern at ${e.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), a.source;
  }
  return s;
};
function tn(a, e) {
  var o, s, n, i;
  if (e.target === "openApi3" && ((o = a.keyType) == null ? void 0 : o._def.typeName) === f.ZodEnum)
    return {
      type: "object",
      required: a.keyType._def.values,
      properties: a.keyType._def.values.reduce((r, u) => ({
        ...r,
        [u]: L(a.valueType._def, {
          ...e,
          currentPath: [...e.currentPath, "properties", u]
        }) ?? {}
      }), {}),
      additionalProperties: !1
    };
  const t = {
    type: "object",
    additionalProperties: L(a.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalProperties"]
    }) ?? {}
  };
  if (e.target === "openApi3")
    return t;
  if (((s = a.keyType) == null ? void 0 : s._def.typeName) === f.ZodString && ((n = a.keyType._def.checks) != null && n.length)) {
    const r = Object.entries(an(a.keyType._def, e)).reduce((u, [c, l]) => c === "type" ? u : { ...u, [c]: l }, {});
    return {
      ...t,
      propertyNames: r
    };
  } else if (((i = a.keyType) == null ? void 0 : i._def.typeName) === f.ZodEnum)
    return {
      ...t,
      propertyNames: {
        enum: a.keyType._def.values
      }
    };
  return t;
}
function eu(a, e) {
  if (e.mapStrategy === "record")
    return tn(a, e);
  const t = L(a.keyType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "0"]
  }) || {}, o = L(a.valueType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "1"]
  }) || {};
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [t, o],
      minItems: 2,
      maxItems: 2
    }
  };
}
function au(a) {
  const e = a.values, o = Object.keys(a.values).filter((n) => typeof e[e[n]] != "number").map((n) => e[n]), s = Array.from(new Set(o.map((n) => typeof n)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: o
  };
}
function tu() {
  return {
    not: {}
  };
}
function ou(a) {
  return a.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
var nt = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function su(a, e) {
  if (e.target === "openApi3")
    return Qo(a, e);
  const t = a.options instanceof Map ? Array.from(a.options.values()) : a.options;
  if (t.every((o) => o._def.typeName in nt && (!o._def.checks || !o._def.checks.length))) {
    const o = t.reduce((s, n) => {
      const i = nt[n._def.typeName];
      return i && !s.includes(i) ? [...s, i] : s;
    }, []);
    return {
      type: o.length > 1 ? o : o[0]
    };
  } else if (t.every((o) => o._def.typeName === "ZodLiteral" && !o.description)) {
    const o = t.reduce((s, n) => {
      const i = typeof n._def.value;
      switch (i) {
        case "string":
        case "number":
        case "boolean":
          return [...s, i];
        case "bigint":
          return [...s, "integer"];
        case "object":
          if (n._def.value === null)
            return [...s, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return s;
      }
    }, []);
    if (o.length === t.length) {
      const s = o.filter((n, i, r) => r.indexOf(n) === i);
      return {
        type: s.length > 1 ? s : s[0],
        enum: t.reduce((n, i) => n.includes(i._def.value) ? n : [...n, i._def.value], [])
      };
    }
  } else if (t.every((o) => o._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: t.reduce((o, s) => [
        ...o,
        ...s._def.values.filter((n) => !o.includes(n))
      ], [])
    };
  return Qo(a, e);
}
var Qo = (a, e) => {
  const t = (a.options instanceof Map ? Array.from(a.options.values()) : a.options).map((o, s) => L(o._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", `${s}`]
  })).filter((o) => !!o && (!e.strictUnions || typeof o == "object" && Object.keys(o).length > 0));
  return t.length ? { anyOf: t } : void 0;
};
function nu(a, e) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(a.innerType._def.typeName) && (!a.innerType._def.checks || !a.innerType._def.checks.length))
    return e.target === "openApi3" ? {
      type: nt[a.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        nt[a.innerType._def.typeName],
        "null"
      ]
    };
  if (e.target === "openApi3") {
    const o = L(a.innerType._def, {
      ...e,
      currentPath: [...e.currentPath]
    });
    return o && "$ref" in o ? { allOf: [o], nullable: !0 } : o && { ...o, nullable: !0 };
  }
  const t = L(a.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "0"]
  });
  return t && { anyOf: [t, { type: "null" }] };
}
function iu(a, e) {
  const t = {
    type: "number"
  };
  if (!a.checks)
    return t;
  for (const o of a.checks)
    switch (o.kind) {
      case "int":
        t.type = "integer", Qs(t, "type", o.message, e);
        break;
      case "min":
        e.target === "jsonSchema7" ? o.inclusive ? U(t, "minimum", o.value, o.message, e) : U(t, "exclusiveMinimum", o.value, o.message, e) : (o.inclusive || (t.exclusiveMinimum = !0), U(t, "minimum", o.value, o.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? o.inclusive ? U(t, "maximum", o.value, o.message, e) : U(t, "exclusiveMaximum", o.value, o.message, e) : (o.inclusive || (t.exclusiveMaximum = !0), U(t, "maximum", o.value, o.message, e));
        break;
      case "multipleOf":
        U(t, "multipleOf", o.value, o.message, e);
        break;
    }
  return t;
}
function ru(a, e) {
  return e.removeAdditionalStrategy === "strict" ? a.catchall._def.typeName === "ZodNever" ? a.unknownKeys !== "strict" : L(a.catchall._def, {
    ...e,
    currentPath: [...e.currentPath, "additionalProperties"]
  }) ?? !0 : a.catchall._def.typeName === "ZodNever" ? a.unknownKeys === "passthrough" : L(a.catchall._def, {
    ...e,
    currentPath: [...e.currentPath, "additionalProperties"]
  }) ?? !0;
}
function cu(a, e) {
  const t = {
    type: "object",
    ...Object.entries(a.shape()).reduce((o, [s, n]) => {
      if (n === void 0 || n._def === void 0)
        return o;
      const i = L(n._def, {
        ...e,
        currentPath: [...e.currentPath, "properties", s],
        propertyPath: [...e.currentPath, "properties", s]
      });
      return i === void 0 ? o : {
        properties: { ...o.properties, [s]: i },
        required: n.isOptional() ? o.required : [...o.required, s]
      };
    }, { properties: {}, required: [] }),
    additionalProperties: ru(a, e)
  };
  return t.required.length || delete t.required, t;
}
var uu = (a, e) => {
  var o;
  if (e.currentPath.toString() === ((o = e.propertyPath) == null ? void 0 : o.toString()))
    return L(a.innerType._def, e);
  const t = L(a.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "1"]
  });
  return t ? {
    anyOf: [
      {
        not: {}
      },
      t
    ]
  } : {};
}, lu = (a, e) => {
  if (e.pipeStrategy === "input")
    return L(a.in._def, e);
  if (e.pipeStrategy === "output")
    return L(a.out._def, e);
  const t = L(a.in._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", "0"]
  }), o = L(a.out._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", t ? "1" : "0"]
  });
  return {
    allOf: [t, o].filter((s) => s !== void 0)
  };
};
function mu(a, e) {
  return L(a.type._def, e);
}
function pu(a, e) {
  const o = {
    type: "array",
    uniqueItems: !0,
    items: L(a.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "items"]
    })
  };
  return a.minSize && U(o, "minItems", a.minSize.value, a.minSize.message, e), a.maxSize && U(o, "maxItems", a.maxSize.value, a.maxSize.message, e), o;
}
function du(a, e) {
  return a.rest ? {
    type: "array",
    minItems: a.items.length,
    items: a.items.map((t, o) => L(t._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${o}`]
    })).reduce((t, o) => o === void 0 ? t : [...t, o], []),
    additionalItems: L(a.rest._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: a.items.length,
    maxItems: a.items.length,
    items: a.items.map((t, o) => L(t._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${o}`]
    })).reduce((t, o) => o === void 0 ? t : [...t, o], [])
  };
}
function hu() {
  return {
    not: {}
  };
}
function gu() {
  return {};
}
var fu = (a, e) => L(a.innerType._def, e);
function L(a, e, t = !1) {
  var i;
  const o = e.seen.get(a);
  if (e.override) {
    const r = (i = e.override) == null ? void 0 : i.call(e, a, e, o, t);
    if (r !== Dc)
      return r;
  }
  if (o && !t) {
    const r = ku(o, e);
    if (r !== void 0)
      return r;
  }
  const s = { def: a, path: e.currentPath, jsonSchema: void 0 };
  e.seen.set(a, s);
  const n = yu(a, a.typeName, e);
  return n && wu(a, e, n), s.jsonSchema = n, n;
}
var ku = (a, e) => {
  switch (e.$refStrategy) {
    case "root":
      return { $ref: a.path.join("/") };
    case "relative":
      return { $ref: bu(e.currentPath, a.path) };
    case "none":
    case "seen":
      return a.path.length < e.currentPath.length && a.path.every((t, o) => e.currentPath[o] === t) ? (console.warn(`Recursive reference detected at ${e.currentPath.join("/")}! Defaulting to any`), {}) : e.$refStrategy === "seen" ? {} : void 0;
  }
}, bu = (a, e) => {
  let t = 0;
  for (; t < a.length && t < e.length && a[t] === e[t]; t++)
    ;
  return [(a.length - t).toString(), ...e.slice(t)].join("/");
}, yu = (a, e, t) => {
  switch (e) {
    case f.ZodString:
      return an(a, t);
    case f.ZodNumber:
      return iu(a, t);
    case f.ZodObject:
      return cu(a, t);
    case f.ZodBigInt:
      return Fc(a, t);
    case f.ZodBoolean:
      return Zc();
    case f.ZodDate:
      return en(a, t);
    case f.ZodUndefined:
      return hu();
    case f.ZodNull:
      return ou(t);
    case f.ZodArray:
      return qc(a, t);
    case f.ZodUnion:
    case f.ZodDiscriminatedUnion:
      return su(a, t);
    case f.ZodIntersection:
      return Kc(a, t);
    case f.ZodTuple:
      return du(a, t);
    case f.ZodRecord:
      return tn(a, t);
    case f.ZodLiteral:
      return Xc(a, t);
    case f.ZodEnum:
      return Gc(a);
    case f.ZodNativeEnum:
      return au(a);
    case f.ZodNullable:
      return nu(a, t);
    case f.ZodOptional:
      return uu(a, t);
    case f.ZodMap:
      return eu(a, t);
    case f.ZodSet:
      return pu(a, t);
    case f.ZodLazy:
      return L(a.getter()._def, t);
    case f.ZodPromise:
      return mu(a, t);
    case f.ZodNaN:
    case f.ZodNever:
      return tu();
    case f.ZodEffects:
      return Jc(a, t);
    case f.ZodAny:
      return Uc();
    case f.ZodUnknown:
      return gu();
    case f.ZodDefault:
      return Wc(a, t);
    case f.ZodBranded:
      return Bc(a, t);
    case f.ZodReadonly:
      return fu(a, t);
    case f.ZodCatch:
      return Vc(a, t);
    case f.ZodPipeline:
      return lu(a, t);
    case f.ZodFunction:
    case f.ZodVoid:
    case f.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((o) => {
      })();
  }
}, wu = (a, e, t) => (a.description && (t.description = a.description, e.markdownDescription && (t.markdownDescription = a.description)), t), ju = (a, e) => {
  const t = $c(e), o = void 0, s = e, n = L(a._def, {
    ...t,
    currentPath: [...t.basePath, t.definitionPath, s]
  }, !1) ?? {}, i = s === void 0 ? o ? {
    ...n,
    [t.definitionPath]: o
  } : n : {
    $ref: [
      ...t.$refStrategy === "relative" ? [] : t.basePath,
      t.definitionPath,
      s
    ].join("/"),
    [t.definitionPath]: {
      ...o,
      [s]: n
    }
  };
  return t.target === "jsonSchema7" ? i.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "jsonSchema2019-09" && (i.$schema = "https://json-schema.org/draft/2019-09/schema#"), i;
}, Y = (a, e) => {
  const t = e.safeParse(a);
  return t.error && console.error(
    "Invalid data type, please report to https://github.com/zS1L3NT/ts-npm-ytmusic-api/issues/new/choose",
    JSON.stringify(
      {
        data: a,
        schema: ju(e, "schema"),
        error: t.error
      },
      null,
      2
    )
  ), a;
}, oe = (a, ...e) => {
  const t = (n, i, r = !1) => {
    const u = [];
    return n instanceof Object && i in n && (u.push(n[i]), r) || (n instanceof Array ? u.push(...n.map((c) => t(c, i)).flat()) : n instanceof Object && u.push(
      ...Object.keys(n).map((c) => t(n[c], i)).flat()
    )), u.length === 1 ? u[0] : u;
  };
  let o = a;
  const s = e.at(-1);
  for (const n of e)
    o = t(o, n, s === n);
  return o;
}, j = (a, ...e) => [oe(a, ...e)].flat(), b = (a, ...e) => j(a, ...e).at(0) || "", Aa = (a) => b(a, "musicVideoType").startsWith("MUSIC_VIDEO_TYPE_"), Na = (a) => ["MUSIC_PAGE_TYPE_USER_CHANNEL", "MUSIC_PAGE_TYPE_ARTIST"].includes(
  b(a, "pageType")
), vt = (a) => b(a, "pageType") === "MUSIC_PAGE_TYPE_ALBUM", Ca = (a) => b(a, "text").match(/(\d{1,2}:)?\d{1,2}:\d{1,2}/), ka = class {
  static parse(a, e) {
    const t = oe(a, "tabs", "straplineTextOne");
    return Y(
      {
        type: "PLAYLIST",
        playlistId: e,
        name: b(a, "tabs", "title", "text"),
        artist: {
          name: b(t, "text"),
          artistId: b(t, "browseId") || null
        },
        videoCount: +j(a, "tabs", "secondSubtitle", "text").at(2).split(" ").at(0).replaceAll(",", ""),
        thumbnails: j(a, "tabs", "thumbnails")
      },
      Nc
    );
  }
  static parseSearchResult(a) {
    const e = j(a, "flexColumns", "runs").flat(), t = e[0], o = e.find(Na) || e[3];
    return Y(
      {
        type: "PLAYLIST",
        playlistId: b(a, "overlay", "playlistId"),
        name: b(t, "text"),
        artist: {
          name: b(o, "text"),
          artistId: b(o, "browseId") || null
        },
        thumbnails: j(a, "thumbnails")
      },
      ma
    );
  }
  static parseArtistFeaturedOn(a, e) {
    return Y(
      {
        type: "PLAYLIST",
        playlistId: b(a, "navigationEndpoint", "browseId"),
        name: b(a, "runs", "text"),
        artist: e,
        thumbnails: j(a, "thumbnails")
      },
      ma
    );
  }
  static parseHomeSection(a) {
    const e = oe(a, "subtitle", "runs");
    return Y(
      {
        type: "PLAYLIST",
        playlistId: b(a, "navigationEndpoint", "playlistId"),
        name: b(a, "runs", "text"),
        artist: {
          name: b(e, "text"),
          artistId: b(e, "browseId") || null
        },
        thumbnails: j(a, "thumbnails")
      },
      ma
    );
  }
}, pa = class {
  static parseDuration(a) {
    if (!a) return null;
    const [e, t, o] = a.split(":").reverse().map((s) => +s);
    return (e || 0) + (t || 0) * 60 + (o || 0) * 60 * 60;
  }
  static parseNumber(a) {
    if (a.at(-1).match(/^[A-Z]+$/)) {
      const e = +a.slice(0, -1), t = a.at(-1);
      return {
        K: e * 1e3,
        M: e * 1e3 * 1e3,
        B: e * 1e3 * 1e3 * 1e3,
        T: e * 1e3 * 1e3 * 1e3 * 1e3
      }[t] || NaN;
    } else
      return +a;
  }
  static parseHomeSection(a) {
    const e = b(a, "contents", "title", "browseEndpoint", "pageType"), t = b(
      a,
      "navigationEndpoint",
      "watchPlaylistEndpoint",
      "playlistId"
    );
    return Y(
      {
        title: b(a, "header", "title", "text"),
        contents: j(a, "contents").map((o) => {
          switch (e) {
            case "MUSIC_PAGE_TYPE_ALBUM":
              return Pe.parseHomeSection(o);
            case "MUSIC_PAGE_TYPE_PLAYLIST":
              return ka.parseHomeSection(o);
            case "":
              return t ? ka.parseHomeSection(o) : Xe.parseHomeSection(o);
            default:
              return null;
          }
        })
      },
      Pc
    );
  }
}, Xe = class on {
  static parse(e) {
    return Y(
      {
        type: "SONG",
        videoId: b(e, "videoDetails", "videoId"),
        name: b(e, "videoDetails", "title"),
        artist: {
          name: b(e, "author"),
          artistId: b(e, "videoDetails", "channelId")
        },
        duration: +b(e, "videoDetails", "lengthSeconds"),
        thumbnails: j(e, "videoDetails", "thumbnails"),
        formats: j(e, "streamingData", "formats"),
        adaptiveFormats: j(e, "streamingData", "adaptiveFormats")
      },
      Ic
    );
  }
  static parseSearchResult(e) {
    const t = j(e, "flexColumns", "runs"), o = t[0], s = t.find(Na) || t[3], n = t.find(vt) ?? null, i = t.find(Ca);
    return Y(
      {
        type: "SONG",
        videoId: b(e, "playlistItemData", "videoId"),
        name: b(o, "text"),
        artist: {
          name: b(s, "text"),
          artistId: b(s, "browseId") || null
        },
        album: n ? {
          name: b(n, "text"),
          albumId: b(n, "browseId")
        } : null,
        duration: pa.parseDuration(i == null ? void 0 : i.text),
        thumbnails: j(e, "thumbnails")
      },
      Ze
    );
  }
  static parseArtistSong(e, t) {
    const o = j(e, "flexColumns", "runs").flat(), s = o.find(Aa), n = o.find(vt), i = o.find(Ca);
    return Y(
      {
        type: "SONG",
        videoId: b(e, "playlistItemData", "videoId"),
        name: b(s, "text"),
        artist: t,
        album: n ? {
          name: b(n, "text"),
          albumId: b(n, "browseId")
        } : null,
        duration: pa.parseDuration(i == null ? void 0 : i.text),
        thumbnails: j(e, "thumbnails")
      },
      Ze
    );
  }
  static parseArtistTopSong(e, t) {
    const o = j(e, "flexColumns", "runs").flat(), s = o.find(Aa), n = o.find(vt);
    return Y(
      {
        type: "SONG",
        videoId: b(e, "playlistItemData", "videoId"),
        name: b(s, "text"),
        artist: t,
        album: {
          name: b(n, "text"),
          albumId: b(n, "browseId")
        },
        duration: null,
        thumbnails: j(e, "thumbnails")
      },
      Ze
    );
  }
  static parseAlbumSong(e, t, o, s) {
    const n = j(e, "flexColumns", "runs").find(Aa), i = j(e, "fixedColumns", "runs").find(Ca);
    return Y(
      {
        type: "SONG",
        videoId: b(e, "playlistItemData", "videoId"),
        name: b(n, "text"),
        artist: t,
        album: o,
        duration: pa.parseDuration(i == null ? void 0 : i.text),
        thumbnails: s
      },
      Ze
    );
  }
  static parseHomeSection(e) {
    return on.parseSearchResult(e);
  }
}, Pe = class _a {
  static parse(e, t) {
    const o = {
      albumId: t,
      name: b(e, "tabs", "title", "text")
    }, s = oe(e, "tabs", "straplineTextOne", "runs"), n = {
      artistId: b(s, "browseId") || null,
      name: b(s, "text")
    }, i = j(e, "background", "thumbnails");
    return Y(
      {
        type: "ALBUM",
        ...o,
        playlistId: b(e, "musicPlayButtonRenderer", "playlistId"),
        artist: n,
        year: _a.processYear(
          j(e, "tabs", "subtitle", "text").at(-1)
        ),
        thumbnails: i,
        songs: j(e, "musicResponsiveListItemRenderer").map(
          (r) => Xe.parseAlbumSong(r, n, o, i)
        )
      },
      Rc
    );
  }
  static parseSearchResult(e) {
    var i;
    const t = j(e, "flexColumns", "runs").flat(), o = t[0], s = t.find(Na) || t[3], n = b(e, "overlay", "playlistId") || b(e, "thumbnailOverlay", "playlistId");
    return Y(
      {
        type: "ALBUM",
        albumId: j(e, "browseId").at(-1),
        playlistId: n,
        artist: {
          name: b(s, "text"),
          artistId: b(s, "browseId") || null
        },
        year: _a.processYear((i = t.at(-1)) == null ? void 0 : i.text),
        name: b(o, "text"),
        thumbnails: j(e, "thumbnails")
      },
      Be
    );
  }
  static parseArtistAlbum(e, t) {
    return Y(
      {
        type: "ALBUM",
        albumId: j(e, "browseId").at(-1),
        playlistId: b(e, "thumbnailOverlay", "playlistId"),
        name: b(e, "title", "text"),
        artist: t,
        year: _a.processYear(j(e, "subtitle", "text").at(-1)),
        thumbnails: j(e, "thumbnails")
      },
      Be
    );
  }
  static parseArtistTopAlbum(e, t) {
    return Y(
      {
        type: "ALBUM",
        albumId: j(e, "browseId").at(-1),
        playlistId: b(e, "musicPlayButtonRenderer", "playlistId"),
        name: b(e, "title", "text"),
        artist: t,
        year: _a.processYear(j(e, "subtitle", "text").at(-1)),
        thumbnails: j(e, "thumbnails")
      },
      Be
    );
  }
  static parseHomeSection(e) {
    const t = oe(e, "subtitle", "runs").at(-1);
    return Y(
      {
        type: "ALBUM",
        albumId: b(e, "title", "browseId"),
        playlistId: b(e, "thumbnailOverlay", "playlistId"),
        name: b(e, "title", "text"),
        artist: {
          name: b(t, "text"),
          artistId: b(t, "browseId") || null
        },
        year: null,
        thumbnails: j(e, "thumbnails")
      },
      Be
    );
  }
  static processYear(e) {
    return e && e.match(/^\d{4}$/) ? +e : null;
  }
}, Ea = class {
  static parse(a) {
    return {
      type: "VIDEO",
      videoId: b(a, "videoDetails", "videoId"),
      name: b(a, "videoDetails", "title"),
      artist: {
        artistId: b(a, "videoDetails", "channelId"),
        name: b(a, "author")
      },
      duration: +b(a, "videoDetails", "lengthSeconds"),
      thumbnails: j(a, "videoDetails", "thumbnails"),
      unlisted: oe(a, "unlisted"),
      familySafe: oe(a, "familySafe"),
      paid: oe(a, "paid"),
      tags: j(a, "tags")
    };
  }
  static parseSearchResult(a) {
    const e = j(a, "flexColumns", "runs").flat(), t = e.find(Aa), o = e.find(Na) || e[1], s = e.find(Ca);
    return {
      type: "VIDEO",
      videoId: b(a, "playNavigationEndpoint", "videoId"),
      name: b(t, "text"),
      artist: {
        artistId: b(o, "browseId") || null,
        name: b(o, "text")
      },
      duration: pa.parseDuration(s == null ? void 0 : s.text),
      thumbnails: j(a, "thumbnails")
    };
  }
  static parseArtistTopVideo(a, e) {
    return {
      type: "VIDEO",
      videoId: b(a, "videoId"),
      name: b(a, "runs", "text"),
      artist: e,
      duration: null,
      thumbnails: j(a, "thumbnails")
    };
  }
  static parsePlaylistVideo(a) {
    const e = j(a, "flexColumns", "runs").flat(), t = j(a, "fixedColumns", "runs").flat(), o = e.find(Aa) || e[0], s = e.find(Na) || e[1], n = t.find(Ca), i = b(a, "playNavigationEndpoint", "videoId"), r = j(a, "thumbnails")[0].url.match(/https:\/\/i\.ytimg\.com\/vi\/(.+)\//);
    if (!(i == "" && r == null))
      return Y(
        {
          type: "VIDEO",
          videoId: i || r[1],
          name: b(o, "text"),
          artist: {
            name: b(s, "text"),
            artistId: b(s, "browseId") || null
          },
          duration: pa.parseDuration(n == null ? void 0 : n.text),
          thumbnails: j(a, "thumbnails")
        },
        io
      );
  }
}, Ut = class {
  static parse(a, e) {
    var o, s, n, i, r, u, c, l, p, w;
    const t = {
      artistId: e,
      name: b(a, "header", "title", "text")
    };
    return Y(
      {
        type: "ARTIST",
        ...t,
        thumbnails: j(a, "header", "thumbnails"),
        topSongs: j(a, "musicShelfRenderer", "contents").map(
          (A) => Xe.parseArtistTopSong(A, t)
        ),
        topAlbums: ((s = (o = j(a, "musicCarouselShelfRenderer")) == null ? void 0 : o.at(0)) == null ? void 0 : s.contents.map(
          (A) => Pe.parseArtistTopAlbum(A, t)
        )) ?? [],
        topSingles: ((i = (n = j(a, "musicCarouselShelfRenderer")) == null ? void 0 : n.at(1)) == null ? void 0 : i.contents.map(
          (A) => Pe.parseArtistTopAlbum(A, t)
        )) ?? [],
        topVideos: ((u = (r = j(a, "musicCarouselShelfRenderer")) == null ? void 0 : r.at(2)) == null ? void 0 : u.contents.map(
          (A) => Ea.parseArtistTopVideo(A, t)
        )) ?? [],
        featuredOn: ((l = (c = j(a, "musicCarouselShelfRenderer")) == null ? void 0 : c.at(3)) == null ? void 0 : l.contents.map(
          (A) => ka.parseArtistFeaturedOn(A, t)
        )) ?? [],
        similarArtists: ((w = (p = j(a, "musicCarouselShelfRenderer")) == null ? void 0 : p.at(4)) == null ? void 0 : w.contents.map((A) => this.parseSimilarArtists(A))) ?? []
      },
      Tc
    );
  }
  static parseSearchResult(a) {
    const t = j(a, "flexColumns", "runs").flat()[0];
    return Y(
      {
        type: "ARTIST",
        artistId: b(a, "browseId"),
        name: b(t, "text"),
        thumbnails: j(a, "thumbnails")
      },
      st
    );
  }
  static parseSimilarArtists(a) {
    return Y(
      {
        type: "ARTIST",
        artistId: b(a, "browseId"),
        name: b(a, "runs", "text"),
        thumbnails: j(a, "thumbnails")
      },
      st
    );
  }
}, vu = class {
  static parse(a) {
    const e = j(a, "flexColumns"), t = j(e[1], "runs", "text").at(0), o = {
      Song: Xe.parseSearchResult,
      Video: Ea.parseSearchResult,
      Artist: Ut.parseSearchResult,
      EP: Pe.parseSearchResult,
      Single: Pe.parseSearchResult,
      Album: Pe.parseSearchResult,
      Playlist: ka.parseSearchResult
    };
    return o[t] ? o[t](a) : null;
  }
};
F.defaults.headers.common["Accept-Encoding"] = "gzip";
var zu = class {
  /**
   * Creates an instance of YTMusic
   * Make sure to call initialize()
   */
  constructor() {
    Fa(this, "cookiejar");
    Fa(this, "config");
    Fa(this, "client");
    this.cookiejar = new ac(), this.config = {}, this.client = F.create({
      baseURL: "https://music.youtube.com/",
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.5"
      },
      withCredentials: !0
    }), this.client.interceptors.request.use((a) => {
      if (a.baseURL) {
        const e = this.cookiejar.getCookieStringSync(a.baseURL);
        e && (a.headers.cookie = e);
      }
      return a;
    }), this.client.interceptors.response.use((a) => {
      if (a.headers && a.config.baseURL) {
        const e = a.headers["set-cookie"] || [];
        for (const t of e) {
          const o = qo.parse(t);
          o && this.cookiejar.setCookieSync(o, a.config.baseURL);
        }
      }
      return a;
    });
  }
  /**
   * Initializes the API
   */
  async initialize(a) {
    const { cookies: e, GL: t, HL: o } = a ?? {};
    if (e)
      for (const r of e.split("; ")) {
        const u = qo.parse(`${r}`);
        if (!u) return;
        this.cookiejar.setCookieSync(u, "https://www.youtube.com/");
      }
    const i = ((await this.client.get("/")).data.match(/ytcfg\.set\(.*\)/) || []).map((r) => r.slice(10, -1)).map((r) => {
      try {
        return JSON.parse(r);
      } catch {
        return null;
      }
    }).filter((r) => !!r);
    for (const r of i)
      this.config = {
        ...this.config,
        ...r
      };
    return this.config || (this.config = {}), t && (this.config.GL = t), o && (this.config.HL = o), this;
  }
  /**
   * Constructs a basic YouTube Music API request with all essential headers
   * and body parameters needed to make the API work
   *
   * @param endpoint Endpoint for the request
   * @param body Body
   * @param query Search params
   * @returns Raw response from YouTube Music API which needs to be parsed
   */
  async constructRequest(a, e = {}, t = {}) {
    if (!this.config)
      throw new Error("API not initialized. Make sure to call the initialize() method first");
    const o = {
      ...this.client.defaults.headers,
      "x-origin": this.client.defaults.baseURL,
      "X-Goog-Visitor-Id": this.config.VISITOR_DATA || "",
      "X-YouTube-Client-Name": this.config.INNERTUBE_CONTEXT_CLIENT_NAME,
      "X-YouTube-Client-Version": this.config.INNERTUBE_CLIENT_VERSION,
      "X-YouTube-Device": this.config.DEVICE,
      "X-YouTube-Page-CL": this.config.PAGE_CL,
      "X-YouTube-Page-Label": this.config.PAGE_BUILD_LABEL,
      "X-YouTube-Utc-Offset": String(-(/* @__PURE__ */ new Date()).getTimezoneOffset()),
      "X-YouTube-Time-Zone": new Intl.DateTimeFormat().resolvedOptions().timeZone
    }, s = new URLSearchParams({
      ...t,
      alt: "json",
      key: this.config.INNERTUBE_API_KEY
    }), n = await this.client.post(
      `youtubei/${this.config.INNERTUBE_API_VERSION}/${a}?${s.toString()}`,
      {
        context: {
          capabilities: {},
          client: {
            clientName: this.config.INNERTUBE_CLIENT_NAME,
            clientVersion: this.config.INNERTUBE_CLIENT_VERSION,
            experimentIds: [],
            experimentsToken: "",
            gl: this.config.GL,
            hl: this.config.HL,
            locationInfo: {
              locationPermissionAuthorizationStatus: "LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED"
            },
            musicAppInfo: {
              musicActivityMasterSwitch: "MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE",
              musicLocationMasterSwitch: "MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE",
              pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_UNKNOWN"
            },
            utcOffsetMinutes: -(/* @__PURE__ */ new Date()).getTimezoneOffset()
          },
          request: {
            internalExperimentFlags: [
              {
                key: "force_music_enable_outertube_tastebuilder_browse",
                value: "true"
              },
              {
                key: "force_music_enable_outertube_playlist_detail_browse",
                value: "true"
              },
              {
                key: "force_music_enable_outertube_search_suggestions",
                value: "true"
              }
            ],
            sessionIndex: {}
          },
          user: {
            enableSafetyMode: !1
          }
        },
        ...e
      },
      {
        responseType: "json",
        headers: o
      }
    );
    return "responseContext" in n.data ? n.data : n;
  }
  /**
   * Get a list of search suggestiong based on the query
   *
   * @param query Query string
   * @returns Search suggestions
   */
  async getSearchSuggestions(a) {
    return j(
      await this.constructRequest("music/get_search_suggestions", {
        input: a
      }),
      "query"
    );
  }
  /**
   * Searches YouTube Music API for results
   *
   * @param query Query string
   */
  async search(a) {
    const e = await this.constructRequest("search", {
      query: a,
      params: null
    });
    return j(e, "musicResponsiveListItemRenderer").map(vu.parse).filter(Boolean);
  }
  /**
   * Searches YouTube Music API for songs
   *
   * @param query Query string
   */
  async searchSongs(a) {
    const e = await this.constructRequest("search", {
      query: a,
      params: "Eg-KAQwIARAAGAAgACgAMABqChAEEAMQCRAFEAo%3D"
    });
    return j(e, "musicResponsiveListItemRenderer").map(
      Xe.parseSearchResult
    );
  }
  /**
   * Searches YouTube Music API for videos
   *
   * @param query Query string
   */
  async searchVideos(a) {
    const e = await this.constructRequest("search", {
      query: a,
      params: "Eg-KAQwIABABGAAgACgAMABqChAEEAMQCRAFEAo%3D"
    });
    return j(e, "musicResponsiveListItemRenderer").map(
      Ea.parseSearchResult
    );
  }
  /**
   * Searches YouTube Music API for artists
   *
   * @param query Query string
   */
  async searchArtists(a) {
    const e = await this.constructRequest("search", {
      query: a,
      params: "Eg-KAQwIABAAGAAgASgAMABqChAEEAMQCRAFEAo%3D"
    });
    return j(e, "musicResponsiveListItemRenderer").map(
      Ut.parseSearchResult
    );
  }
  /**
   * Searches YouTube Music API for albums
   *
   * @param query Query string
   */
  async searchAlbums(a) {
    const e = await this.constructRequest("search", {
      query: a,
      params: "Eg-KAQwIABAAGAEgACgAMABqChAEEAMQCRAFEAo%3D"
    });
    return j(e, "musicResponsiveListItemRenderer").map(
      Pe.parseSearchResult
    );
  }
  /**
   * Searches YouTube Music API for playlists
   *
   * @param query Query string
   */
  async searchPlaylists(a) {
    const e = await this.constructRequest("search", {
      query: a,
      params: "Eg-KAQwIABAAGAAgACgBMABqChAEEAMQCRAFEAo%3D"
    });
    return j(e, "musicResponsiveListItemRenderer").map(
      ka.parseSearchResult
    );
  }
  /**
   * Get all possible information of a Song
   *
   * @param videoId Video ID
   * @returns Song Data
   */
  async getSong(a) {
    if (!a.match(/^[a-zA-Z0-9-_]{11}$/)) throw new Error("Invalid videoId");
    const e = await this.constructRequest("player", { videoId: a }), t = Xe.parse(e);
    if (t.videoId !== a) throw new Error("Invalid videoId");
    return t;
  }
  /**
   * Get all possible information of a Up Nexts Song
   *
   * @param videoId Video ID
   * @returns Up Nexts Data
   */
  async getUpNexts(a) {
    var o, s, n, i, r, u, c, l, p, w;
    if (!a.match(/^[a-zA-Z0-9-_]{11}$/)) throw new Error("Invalid videoId");
    const e = await this.constructRequest("next", {
      videoId: a,
      playlistId: `RDAMVM${a}`,
      isAudioOnly: !0
    }), t = (w = (p = (l = (c = (u = (r = (i = (n = (s = (o = e == null ? void 0 : e.contents) == null ? void 0 : o.singleColumnMusicWatchNextResultsRenderer) == null ? void 0 : s.tabbedRenderer) == null ? void 0 : n.watchNextTabbedResultsRenderer) == null ? void 0 : i.tabs[0]) == null ? void 0 : r.tabRenderer) == null ? void 0 : u.content) == null ? void 0 : c.musicQueueRenderer) == null ? void 0 : l.content) == null ? void 0 : p.playlistPanelRenderer) == null ? void 0 : w.contents;
    if (!t) throw new Error("Invalid response structure");
    return t.slice(1).map((A) => {
      var z, T, H, K;
      const { videoId: h, title: k, shortBylineText: d, lengthText: v, thumbnail: I } = A.playlistPanelVideoRenderer;
      return {
        type: "SONG",
        videoId: h,
        title: ((z = k == null ? void 0 : k.runs[0]) == null ? void 0 : z.text) || "Unknown",
        artists: ((T = d == null ? void 0 : d.runs[0]) == null ? void 0 : T.text) || "Unknown",
        duration: ((H = v == null ? void 0 : v.runs[0]) == null ? void 0 : H.text) || "Unknown",
        thumbnail: ((K = I == null ? void 0 : I.thumbnails.at(-1)) == null ? void 0 : K.url) || "Unknown"
      };
    });
  }
  /**
   * Get all possible information of a Video
   *
   * @param videoId Video ID
   * @returns Video Data
   */
  async getVideo(a) {
    if (!a.match(/^[a-zA-Z0-9-_]{11}$/)) throw new Error("Invalid videoId");
    const e = await this.constructRequest("player", { videoId: a }), t = Ea.parse(e);
    if (t.videoId !== a) throw new Error("Invalid videoId");
    return t;
  }
  /**
   * Get lyrics of a specific Song
   *
   * @param videoId Video ID
   * @returns Lyrics
   */
  async getLyrics(a) {
    if (!a.match(/^[a-zA-Z0-9-_]{11}$/)) throw new Error("Invalid videoId");
    const e = await this.constructRequest("next", { videoId: a }), t = oe(j(e, "tabs", "tabRenderer")[1], "browseId"), o = await this.constructRequest("browse", { browseId: t }), s = b(o, "description", "runs", "text");
    return s ? s.replaceAll("\r", "").split(`
`).filter((n) => !!n) : null;
  }
  /**
   * Get all possible information of an Artist
   *
   * @param artistId Artist ID
   * @returns Artist Data
   */
  async getArtist(a) {
    const e = await this.constructRequest("browse", {
      browseId: a
    });
    return Ut.parse(e, a);
  }
  /**
   * Get all of Artist's Songs
   *
   * @param artistId Artist ID
   * @returns Artist's Songs
   */
  async getArtistSongs(a) {
    const e = await this.constructRequest("browse", {
      browseId: a
    }), t = oe(e, "musicShelfRenderer", "title", "browseId");
    if (t instanceof Array) return [];
    const o = await this.constructRequest("browse", {
      browseId: t
    }), s = oe(o, "continuation"), n = await this.constructRequest(
      "browse",
      {},
      { continuation: s }
    );
    return [
      ...j(o, "musicResponsiveListItemRenderer"),
      ...j(n, "musicResponsiveListItemRenderer")
    ].map(
      (i) => Xe.parseArtistSong(i, {
        artistId: a,
        name: b(e, "header", "title", "text")
      })
    );
  }
  /**
   * Get all of Artist's Albums
   *
   * @param artistId Artist ID
   * @returns Artist's Albums
   */
  async getArtistAlbums(a) {
    const e = await this.constructRequest("browse", {
      browseId: a
    }), t = j(e, "musicCarouselShelfRenderer")[0], o = oe(t, "moreContentButton", "browseEndpoint"), s = await this.constructRequest("browse", o);
    return j(s, "musicTwoRowItemRenderer").map(
      (n) => Pe.parseArtistAlbum(n, {
        artistId: a,
        name: b(s, "header", "runs", "text")
      })
    );
  }
  /**
   * Get all possible information of an Album
   *
   * @param albumId Album ID
   * @returns Album Data
   */
  async getAlbum(a) {
    const e = await this.constructRequest("browse", {
      browseId: a
    });
    return Pe.parse(e, a);
  }
  /**
   * Get all possible information of a Playlist except the tracks
   *
   * @param playlistId Playlist ID
   * @returns Playlist Data
   */
  async getPlaylist(a) {
    a.startsWith("PL") && (a = "VL" + a);
    const e = await this.constructRequest("browse", {
      browseId: a
    });
    return ka.parse(e, a);
  }
  /**
   * Get all videos in a Playlist
   *
   * @param playlistId Playlist ID
   * @returns Playlist's Videos
   */
  async getPlaylistVideos(a) {
    a.startsWith("PL") && (a = "VL" + a);
    const e = await this.constructRequest("browse", {
      browseId: a
    }), t = j(
      e,
      "musicPlaylistShelfRenderer",
      "musicResponsiveListItemRenderer"
    );
    let o = oe(e, "continuation");
    for (o instanceof Array && (o = o[0]); !(o instanceof Array); ) {
      const s = await this.constructRequest("browse", {}, { continuation: o });
      t.push(...j(s, "musicResponsiveListItemRenderer")), o = oe(s, "continuation");
    }
    return t.map(Ea.parsePlaylistVideo).filter((s) => s !== void 0);
  }
  /**
   * Get sections for the home page.
   *
   * @returns Mixed HomeSection
   */
  async getHomeSections() {
    const a = await this.constructRequest("browse", {
      browseId: Ec
    }), e = j("sectionListRenderer", "contents");
    let t = b(a, "continuation");
    for (; t; ) {
      const o = await this.constructRequest("browse", {}, { continuation: t });
      e.push(...j(o, "sectionListContinuation", "contents")), t = b(o, "continuation");
    }
    return e.map(pa.parseHomeSection);
  }
}, xu = zu;
let Re = null;
async function ro() {
  return Re || (Re = new xu(), await Re.initialize(), Re);
}
async function _u(a) {
  Re || await ro();
  try {
    return (await Re.search(a, "artist")).map((t) => ({
      id: t.id || t.browseId,
      name: t.name || t.title,
      subscribers: t.subscribers || null,
      thumbnails: t.thumbnails || []
    }));
  } catch (e) {
    throw console.error("YTMusic search error:", e), new Error("Failed to search YouTube Music: " + e.message);
  }
}
async function Su(a) {
  Re || await ro();
  try {
    const e = await Re.getArtist(a);
    return {
      id: a,
      name: e.name || e.title,
      description: e.description,
      subscribers: e.subscribers,
      thumbnails: e.thumbnails
    };
  } catch (e) {
    throw console.error("YTMusic getArtist error:", e), new Error("Failed to get artist details: " + e.message);
  }
}
typeof window < "u" && (window.YTMusicAPI = {
  initYTMusic: ro,
  searchArtists: _u,
  getArtist: Su
});
export {
  Su as getArtist,
  ro as initYTMusic,
  _u as searchArtists
};
