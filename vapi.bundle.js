"use strict";
var VapiSDK = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/@daily-co/daily-js/dist/daily.js
  var require_daily = __commonJS({
    "node_modules/@daily-co/daily-js/dist/daily.js"(exports, module) {
      !(function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Daily = t() : e.Daily = t();
      })(exports, (function() {
        return (function() {
          var e = { 7: function(e2) {
            "use strict";
            var t2, n2 = "object" == typeof Reflect ? Reflect : null, r = n2 && "function" == typeof n2.apply ? n2.apply : function(e3, t3, n3) {
              return Function.prototype.apply.call(e3, t3, n3);
            };
            t2 = n2 && "function" == typeof n2.ownKeys ? n2.ownKeys : Object.getOwnPropertySymbols ? function(e3) {
              return Object.getOwnPropertyNames(e3).concat(Object.getOwnPropertySymbols(e3));
            } : function(e3) {
              return Object.getOwnPropertyNames(e3);
            };
            var i = Number.isNaN || function(e3) {
              return e3 != e3;
            };
            function o() {
              o.init.call(this);
            }
            e2.exports = o, e2.exports.once = function(e3, t3) {
              return new Promise((function(n3, r2) {
                function i2(n4) {
                  e3.removeListener(t3, o2), r2(n4);
                }
                function o2() {
                  "function" == typeof e3.removeListener && e3.removeListener("error", i2), n3([].slice.call(arguments));
                }
                v(e3, t3, o2, { once: true }), "error" !== t3 && (function(e4, t4) {
                  "function" == typeof e4.on && v(e4, "error", t4, { once: true });
                })(e3, i2);
              }));
            }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
            var a = 10;
            function s(e3) {
              if ("function" != typeof e3) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e3);
            }
            function c(e3) {
              return void 0 === e3._maxListeners ? o.defaultMaxListeners : e3._maxListeners;
            }
            function u(e3, t3, n3, r2) {
              var i2, o2, a2, u2;
              if (s(n3), void 0 === (o2 = e3._events) ? (o2 = e3._events = /* @__PURE__ */ Object.create(null), e3._eventsCount = 0) : (void 0 !== o2.newListener && (e3.emit("newListener", t3, n3.listener ? n3.listener : n3), o2 = e3._events), a2 = o2[t3]), void 0 === a2) a2 = o2[t3] = n3, ++e3._eventsCount;
              else if ("function" == typeof a2 ? a2 = o2[t3] = r2 ? [n3, a2] : [a2, n3] : r2 ? a2.unshift(n3) : a2.push(n3), (i2 = c(e3)) > 0 && a2.length > i2 && !a2.warned) {
                a2.warned = true;
                var l2 = new Error("Possible EventEmitter memory leak detected. " + a2.length + " " + String(t3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                l2.name = "MaxListenersExceededWarning", l2.emitter = e3, l2.type = t3, l2.count = a2.length, u2 = l2, console && console.warn && console.warn(u2);
              }
              return e3;
            }
            function l() {
              if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
            }
            function d(e3, t3, n3) {
              var r2 = { fired: false, wrapFn: void 0, target: e3, type: t3, listener: n3 }, i2 = l.bind(r2);
              return i2.listener = n3, r2.wrapFn = i2, i2;
            }
            function f(e3, t3, n3) {
              var r2 = e3._events;
              if (void 0 === r2) return [];
              var i2 = r2[t3];
              return void 0 === i2 ? [] : "function" == typeof i2 ? n3 ? [i2.listener || i2] : [i2] : n3 ? (function(e4) {
                for (var t4 = new Array(e4.length), n4 = 0; n4 < t4.length; ++n4) t4[n4] = e4[n4].listener || e4[n4];
                return t4;
              })(i2) : h(i2, i2.length);
            }
            function p(e3) {
              var t3 = this._events;
              if (void 0 !== t3) {
                var n3 = t3[e3];
                if ("function" == typeof n3) return 1;
                if (void 0 !== n3) return n3.length;
              }
              return 0;
            }
            function h(e3, t3) {
              for (var n3 = new Array(t3), r2 = 0; r2 < t3; ++r2) n3[r2] = e3[r2];
              return n3;
            }
            function v(e3, t3, n3, r2) {
              if ("function" == typeof e3.on) r2.once ? e3.once(t3, n3) : e3.on(t3, n3);
              else {
                if ("function" != typeof e3.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e3);
                e3.addEventListener(t3, (function i2(o2) {
                  r2.once && e3.removeEventListener(t3, i2), n3(o2);
                }));
              }
            }
            Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
              return a;
            }, set: function(e3) {
              if ("number" != typeof e3 || e3 < 0 || i(e3)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e3 + ".");
              a = e3;
            } }), o.init = function() {
              void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
            }, o.prototype.setMaxListeners = function(e3) {
              if ("number" != typeof e3 || e3 < 0 || i(e3)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e3 + ".");
              return this._maxListeners = e3, this;
            }, o.prototype.getMaxListeners = function() {
              return c(this);
            }, o.prototype.emit = function(e3) {
              for (var t3 = [], n3 = 1; n3 < arguments.length; n3++) t3.push(arguments[n3]);
              var i2 = "error" === e3, o2 = this._events;
              if (void 0 !== o2) i2 = i2 && void 0 === o2.error;
              else if (!i2) return false;
              if (i2) {
                var a2;
                if (t3.length > 0 && (a2 = t3[0]), a2 instanceof Error) throw a2;
                var s2 = new Error("Unhandled error." + (a2 ? " (" + a2.message + ")" : ""));
                throw s2.context = a2, s2;
              }
              var c2 = o2[e3];
              if (void 0 === c2) return false;
              if ("function" == typeof c2) r(c2, this, t3);
              else {
                var u2 = c2.length, l2 = h(c2, u2);
                for (n3 = 0; n3 < u2; ++n3) r(l2[n3], this, t3);
              }
              return true;
            }, o.prototype.addListener = function(e3, t3) {
              return u(this, e3, t3, false);
            }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e3, t3) {
              return u(this, e3, t3, true);
            }, o.prototype.once = function(e3, t3) {
              return s(t3), this.on(e3, d(this, e3, t3)), this;
            }, o.prototype.prependOnceListener = function(e3, t3) {
              return s(t3), this.prependListener(e3, d(this, e3, t3)), this;
            }, o.prototype.removeListener = function(e3, t3) {
              var n3, r2, i2, o2, a2;
              if (s(t3), void 0 === (r2 = this._events)) return this;
              if (void 0 === (n3 = r2[e3])) return this;
              if (n3 === t3 || n3.listener === t3) 0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r2[e3], r2.removeListener && this.emit("removeListener", e3, n3.listener || t3));
              else if ("function" != typeof n3) {
                for (i2 = -1, o2 = n3.length - 1; o2 >= 0; o2--) if (n3[o2] === t3 || n3[o2].listener === t3) {
                  a2 = n3[o2].listener, i2 = o2;
                  break;
                }
                if (i2 < 0) return this;
                0 === i2 ? n3.shift() : (function(e4, t4) {
                  for (; t4 + 1 < e4.length; t4++) e4[t4] = e4[t4 + 1];
                  e4.pop();
                })(n3, i2), 1 === n3.length && (r2[e3] = n3[0]), void 0 !== r2.removeListener && this.emit("removeListener", e3, a2 || t3);
              }
              return this;
            }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e3) {
              var t3, n3, r2;
              if (void 0 === (n3 = this._events)) return this;
              if (void 0 === n3.removeListener) return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n3[e3] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[e3]), this;
              if (0 === arguments.length) {
                var i2, o2 = Object.keys(n3);
                for (r2 = 0; r2 < o2.length; ++r2) "removeListener" !== (i2 = o2[r2]) && this.removeAllListeners(i2);
                return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
              }
              if ("function" == typeof (t3 = n3[e3])) this.removeListener(e3, t3);
              else if (void 0 !== t3) for (r2 = t3.length - 1; r2 >= 0; r2--) this.removeListener(e3, t3[r2]);
              return this;
            }, o.prototype.listeners = function(e3) {
              return f(this, e3, true);
            }, o.prototype.rawListeners = function(e3) {
              return f(this, e3, false);
            }, o.listenerCount = function(e3, t3) {
              return "function" == typeof e3.listenerCount ? e3.listenerCount(t3) : p.call(e3, t3);
            }, o.prototype.listenerCount = p, o.prototype.eventNames = function() {
              return this._eventsCount > 0 ? t2(this._events) : [];
            };
          }, 781: function(e2, t2, n2) {
            var r = n2(948);
            e2.exports = r.default;
          }, 880: function(e2) {
            e2.exports = (function(e3) {
              var t2 = {};
              function n2(r) {
                if (t2[r]) return t2[r].exports;
                var i = t2[r] = { i: r, l: false, exports: {} };
                return e3[r].call(i.exports, i, i.exports, n2), i.l = true, i.exports;
              }
              return n2.m = e3, n2.c = t2, n2.d = function(e4, t3, r) {
                n2.o(e4, t3) || Object.defineProperty(e4, t3, { enumerable: true, get: r });
              }, n2.r = function(e4) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
              }, n2.t = function(e4, t3) {
                if (1 & t3 && (e4 = n2(e4)), 8 & t3) return e4;
                if (4 & t3 && "object" == typeof e4 && e4 && e4.__esModule) return e4;
                var r = /* @__PURE__ */ Object.create(null);
                if (n2.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e4 }), 2 & t3 && "string" != typeof e4) for (var i in e4) n2.d(r, i, function(t4) {
                  return e4[t4];
                }.bind(null, i));
                return r;
              }, n2.n = function(e4) {
                var t3 = e4 && e4.__esModule ? function() {
                  return e4.default;
                } : function() {
                  return e4;
                };
                return n2.d(t3, "a", t3), t3;
              }, n2.o = function(e4, t3) {
                return Object.prototype.hasOwnProperty.call(e4, t3);
              }, n2.p = "", n2(n2.s = 90);
            })({ 17: function(e3, t2, n2) {
              "use strict";
              t2.__esModule = true, t2.default = void 0;
              var r = n2(18), i = (function() {
                function e4() {
                }
                return e4.getFirstMatch = function(e5, t3) {
                  var n3 = t3.match(e5);
                  return n3 && n3.length > 0 && n3[1] || "";
                }, e4.getSecondMatch = function(e5, t3) {
                  var n3 = t3.match(e5);
                  return n3 && n3.length > 1 && n3[2] || "";
                }, e4.matchAndReturnConst = function(e5, t3, n3) {
                  if (e5.test(t3)) return n3;
                }, e4.getWindowsVersionName = function(e5) {
                  switch (e5) {
                    case "NT":
                      return "NT";
                    case "XP":
                    case "NT 5.1":
                      return "XP";
                    case "NT 5.0":
                      return "2000";
                    case "NT 5.2":
                      return "2003";
                    case "NT 6.0":
                      return "Vista";
                    case "NT 6.1":
                      return "7";
                    case "NT 6.2":
                      return "8";
                    case "NT 6.3":
                      return "8.1";
                    case "NT 10.0":
                      return "10";
                    default:
                      return;
                  }
                }, e4.getMacOSVersionName = function(e5) {
                  var t3 = e5.split(".").splice(0, 2).map((function(e6) {
                    return parseInt(e6, 10) || 0;
                  }));
                  if (t3.push(0), 10 === t3[0]) switch (t3[1]) {
                    case 5:
                      return "Leopard";
                    case 6:
                      return "Snow Leopard";
                    case 7:
                      return "Lion";
                    case 8:
                      return "Mountain Lion";
                    case 9:
                      return "Mavericks";
                    case 10:
                      return "Yosemite";
                    case 11:
                      return "El Capitan";
                    case 12:
                      return "Sierra";
                    case 13:
                      return "High Sierra";
                    case 14:
                      return "Mojave";
                    case 15:
                      return "Catalina";
                    default:
                      return;
                  }
                }, e4.getAndroidVersionName = function(e5) {
                  var t3 = e5.split(".").splice(0, 2).map((function(e6) {
                    return parseInt(e6, 10) || 0;
                  }));
                  if (t3.push(0), !(1 === t3[0] && t3[1] < 5)) return 1 === t3[0] && t3[1] < 6 ? "Cupcake" : 1 === t3[0] && t3[1] >= 6 ? "Donut" : 2 === t3[0] && t3[1] < 2 ? "Eclair" : 2 === t3[0] && 2 === t3[1] ? "Froyo" : 2 === t3[0] && t3[1] > 2 ? "Gingerbread" : 3 === t3[0] ? "Honeycomb" : 4 === t3[0] && t3[1] < 1 ? "Ice Cream Sandwich" : 4 === t3[0] && t3[1] < 4 ? "Jelly Bean" : 4 === t3[0] && t3[1] >= 4 ? "KitKat" : 5 === t3[0] ? "Lollipop" : 6 === t3[0] ? "Marshmallow" : 7 === t3[0] ? "Nougat" : 8 === t3[0] ? "Oreo" : 9 === t3[0] ? "Pie" : void 0;
                }, e4.getVersionPrecision = function(e5) {
                  return e5.split(".").length;
                }, e4.compareVersions = function(t3, n3, r2) {
                  void 0 === r2 && (r2 = false);
                  var i2 = e4.getVersionPrecision(t3), o = e4.getVersionPrecision(n3), a = Math.max(i2, o), s = 0, c = e4.map([t3, n3], (function(t4) {
                    var n4 = a - e4.getVersionPrecision(t4), r3 = t4 + new Array(n4 + 1).join(".0");
                    return e4.map(r3.split("."), (function(e5) {
                      return new Array(20 - e5.length).join("0") + e5;
                    })).reverse();
                  }));
                  for (r2 && (s = a - Math.min(i2, o)), a -= 1; a >= s; ) {
                    if (c[0][a] > c[1][a]) return 1;
                    if (c[0][a] === c[1][a]) {
                      if (a === s) return 0;
                      a -= 1;
                    } else if (c[0][a] < c[1][a]) return -1;
                  }
                }, e4.map = function(e5, t3) {
                  var n3, r2 = [];
                  if (Array.prototype.map) return Array.prototype.map.call(e5, t3);
                  for (n3 = 0; n3 < e5.length; n3 += 1) r2.push(t3(e5[n3]));
                  return r2;
                }, e4.find = function(e5, t3) {
                  var n3, r2;
                  if (Array.prototype.find) return Array.prototype.find.call(e5, t3);
                  for (n3 = 0, r2 = e5.length; n3 < r2; n3 += 1) {
                    var i2 = e5[n3];
                    if (t3(i2, n3)) return i2;
                  }
                }, e4.assign = function(e5) {
                  for (var t3, n3, r2 = e5, i2 = arguments.length, o = new Array(i2 > 1 ? i2 - 1 : 0), a = 1; a < i2; a++) o[a - 1] = arguments[a];
                  if (Object.assign) return Object.assign.apply(Object, [e5].concat(o));
                  var s = function() {
                    var e6 = o[t3];
                    "object" == typeof e6 && null !== e6 && Object.keys(e6).forEach((function(t4) {
                      r2[t4] = e6[t4];
                    }));
                  };
                  for (t3 = 0, n3 = o.length; t3 < n3; t3 += 1) s();
                  return e5;
                }, e4.getBrowserAlias = function(e5) {
                  return r.BROWSER_ALIASES_MAP[e5];
                }, e4.getBrowserTypeByAlias = function(e5) {
                  return r.BROWSER_MAP[e5] || "";
                }, e4;
              })();
              t2.default = i, e3.exports = t2.default;
            }, 18: function(e3, t2, n2) {
              "use strict";
              t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0, t2.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, t2.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, t2.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, t2.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, t2.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
            }, 90: function(e3, t2, n2) {
              "use strict";
              t2.__esModule = true, t2.default = void 0;
              var r, i = (r = n2(91)) && r.__esModule ? r : { default: r }, o = n2(18);
              function a(e4, t3) {
                for (var n3 = 0; n3 < t3.length; n3++) {
                  var r2 = t3[n3];
                  r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e4, r2.key, r2);
                }
              }
              var s = (function() {
                function e4() {
                }
                var t3, n3;
                return e4.getParser = function(e5, t4) {
                  if (void 0 === t4 && (t4 = false), "string" != typeof e5) throw new Error("UserAgent should be a string");
                  return new i.default(e5, t4);
                }, e4.parse = function(e5) {
                  return new i.default(e5).getResult();
                }, t3 = e4, n3 = [{ key: "BROWSER_MAP", get: function() {
                  return o.BROWSER_MAP;
                } }, { key: "ENGINE_MAP", get: function() {
                  return o.ENGINE_MAP;
                } }, { key: "OS_MAP", get: function() {
                  return o.OS_MAP;
                } }, { key: "PLATFORMS_MAP", get: function() {
                  return o.PLATFORMS_MAP;
                } }], null, n3 && a(t3, n3), e4;
              })();
              t2.default = s, e3.exports = t2.default;
            }, 91: function(e3, t2, n2) {
              "use strict";
              t2.__esModule = true, t2.default = void 0;
              var r = c(n2(92)), i = c(n2(93)), o = c(n2(94)), a = c(n2(95)), s = c(n2(17));
              function c(e4) {
                return e4 && e4.__esModule ? e4 : { default: e4 };
              }
              var u = (function() {
                function e4(e5, t4) {
                  if (void 0 === t4 && (t4 = false), null == e5 || "" === e5) throw new Error("UserAgent parameter can't be empty");
                  this._ua = e5, this.parsedResult = {}, true !== t4 && this.parse();
                }
                var t3 = e4.prototype;
                return t3.getUA = function() {
                  return this._ua;
                }, t3.test = function(e5) {
                  return e5.test(this._ua);
                }, t3.parseBrowser = function() {
                  var e5 = this;
                  this.parsedResult.browser = {};
                  var t4 = s.default.find(r.default, (function(t5) {
                    if ("function" == typeof t5.test) return t5.test(e5);
                    if (t5.test instanceof Array) return t5.test.some((function(t6) {
                      return e5.test(t6);
                    }));
                    throw new Error("Browser's test function is not valid");
                  }));
                  return t4 && (this.parsedResult.browser = t4.describe(this.getUA())), this.parsedResult.browser;
                }, t3.getBrowser = function() {
                  return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
                }, t3.getBrowserName = function(e5) {
                  return e5 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
                }, t3.getBrowserVersion = function() {
                  return this.getBrowser().version;
                }, t3.getOS = function() {
                  return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
                }, t3.parseOS = function() {
                  var e5 = this;
                  this.parsedResult.os = {};
                  var t4 = s.default.find(i.default, (function(t5) {
                    if ("function" == typeof t5.test) return t5.test(e5);
                    if (t5.test instanceof Array) return t5.test.some((function(t6) {
                      return e5.test(t6);
                    }));
                    throw new Error("Browser's test function is not valid");
                  }));
                  return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
                }, t3.getOSName = function(e5) {
                  var t4 = this.getOS().name;
                  return e5 ? String(t4).toLowerCase() || "" : t4 || "";
                }, t3.getOSVersion = function() {
                  return this.getOS().version;
                }, t3.getPlatform = function() {
                  return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
                }, t3.getPlatformType = function(e5) {
                  void 0 === e5 && (e5 = false);
                  var t4 = this.getPlatform().type;
                  return e5 ? String(t4).toLowerCase() || "" : t4 || "";
                }, t3.parsePlatform = function() {
                  var e5 = this;
                  this.parsedResult.platform = {};
                  var t4 = s.default.find(o.default, (function(t5) {
                    if ("function" == typeof t5.test) return t5.test(e5);
                    if (t5.test instanceof Array) return t5.test.some((function(t6) {
                      return e5.test(t6);
                    }));
                    throw new Error("Browser's test function is not valid");
                  }));
                  return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
                }, t3.getEngine = function() {
                  return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
                }, t3.getEngineName = function(e5) {
                  return e5 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
                }, t3.parseEngine = function() {
                  var e5 = this;
                  this.parsedResult.engine = {};
                  var t4 = s.default.find(a.default, (function(t5) {
                    if ("function" == typeof t5.test) return t5.test(e5);
                    if (t5.test instanceof Array) return t5.test.some((function(t6) {
                      return e5.test(t6);
                    }));
                    throw new Error("Browser's test function is not valid");
                  }));
                  return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
                }, t3.parse = function() {
                  return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
                }, t3.getResult = function() {
                  return s.default.assign({}, this.parsedResult);
                }, t3.satisfies = function(e5) {
                  var t4 = this, n3 = {}, r2 = 0, i2 = {}, o2 = 0;
                  if (Object.keys(e5).forEach((function(t5) {
                    var a3 = e5[t5];
                    "string" == typeof a3 ? (i2[t5] = a3, o2 += 1) : "object" == typeof a3 && (n3[t5] = a3, r2 += 1);
                  })), r2 > 0) {
                    var a2 = Object.keys(n3), c2 = s.default.find(a2, (function(e6) {
                      return t4.isOS(e6);
                    }));
                    if (c2) {
                      var u2 = this.satisfies(n3[c2]);
                      if (void 0 !== u2) return u2;
                    }
                    var l = s.default.find(a2, (function(e6) {
                      return t4.isPlatform(e6);
                    }));
                    if (l) {
                      var d = this.satisfies(n3[l]);
                      if (void 0 !== d) return d;
                    }
                  }
                  if (o2 > 0) {
                    var f = Object.keys(i2), p = s.default.find(f, (function(e6) {
                      return t4.isBrowser(e6, true);
                    }));
                    if (void 0 !== p) return this.compareVersion(i2[p]);
                  }
                }, t3.isBrowser = function(e5, t4) {
                  void 0 === t4 && (t4 = false);
                  var n3 = this.getBrowserName().toLowerCase(), r2 = e5.toLowerCase(), i2 = s.default.getBrowserTypeByAlias(r2);
                  return t4 && i2 && (r2 = i2.toLowerCase()), r2 === n3;
                }, t3.compareVersion = function(e5) {
                  var t4 = [0], n3 = e5, r2 = false, i2 = this.getBrowserVersion();
                  if ("string" == typeof i2) return ">" === e5[0] || "<" === e5[0] ? (n3 = e5.substr(1), "=" === e5[1] ? (r2 = true, n3 = e5.substr(2)) : t4 = [], ">" === e5[0] ? t4.push(1) : t4.push(-1)) : "=" === e5[0] ? n3 = e5.substr(1) : "~" === e5[0] && (r2 = true, n3 = e5.substr(1)), t4.indexOf(s.default.compareVersions(i2, n3, r2)) > -1;
                }, t3.isOS = function(e5) {
                  return this.getOSName(true) === String(e5).toLowerCase();
                }, t3.isPlatform = function(e5) {
                  return this.getPlatformType(true) === String(e5).toLowerCase();
                }, t3.isEngine = function(e5) {
                  return this.getEngineName(true) === String(e5).toLowerCase();
                }, t3.is = function(e5, t4) {
                  return void 0 === t4 && (t4 = false), this.isBrowser(e5, t4) || this.isOS(e5) || this.isPlatform(e5);
                }, t3.some = function(e5) {
                  var t4 = this;
                  return void 0 === e5 && (e5 = []), e5.some((function(e6) {
                    return t4.is(e6);
                  }));
                }, e4;
              })();
              t2.default = u, e3.exports = t2.default;
            }, 92: function(e3, t2, n2) {
              "use strict";
              t2.__esModule = true, t2.default = void 0;
              var r, i = (r = n2(17)) && r.__esModule ? r : { default: r }, o = /version\/(\d+(\.?_?\d+)+)/i, a = [{ test: [/googlebot/i], describe: function(e4) {
                var t3 = { name: "Googlebot" }, n3 = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/opera/i], describe: function(e4) {
                var t3 = { name: "Opera" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/opr\/|opios/i], describe: function(e4) {
                var t3 = { name: "Opera" }, n3 = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/SamsungBrowser/i], describe: function(e4) {
                var t3 = { name: "Samsung Internet for Android" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/Whale/i], describe: function(e4) {
                var t3 = { name: "NAVER Whale Browser" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/MZBrowser/i], describe: function(e4) {
                var t3 = { name: "MZ Browser" }, n3 = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/focus/i], describe: function(e4) {
                var t3 = { name: "Focus" }, n3 = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/swing/i], describe: function(e4) {
                var t3 = { name: "Swing" }, n3 = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/coast/i], describe: function(e4) {
                var t3 = { name: "Opera Coast" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e4) {
                var t3 = { name: "Opera Touch" }, n3 = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/yabrowser/i], describe: function(e4) {
                var t3 = { name: "Yandex Browser" }, n3 = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/ucbrowser/i], describe: function(e4) {
                var t3 = { name: "UC Browser" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/Maxthon|mxios/i], describe: function(e4) {
                var t3 = { name: "Maxthon" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/epiphany/i], describe: function(e4) {
                var t3 = { name: "Epiphany" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/puffin/i], describe: function(e4) {
                var t3 = { name: "Puffin" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/sleipnir/i], describe: function(e4) {
                var t3 = { name: "Sleipnir" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/k-meleon/i], describe: function(e4) {
                var t3 = { name: "K-Meleon" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/micromessenger/i], describe: function(e4) {
                var t3 = { name: "WeChat" }, n3 = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/qqbrowser/i], describe: function(e4) {
                var t3 = { name: /qqbrowserlite/i.test(e4) ? "QQ Browser Lite" : "QQ Browser" }, n3 = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/msie|trident/i], describe: function(e4) {
                var t3 = { name: "Internet Explorer" }, n3 = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/\sedg\//i], describe: function(e4) {
                var t3 = { name: "Microsoft Edge" }, n3 = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/edg([ea]|ios)/i], describe: function(e4) {
                var t3 = { name: "Microsoft Edge" }, n3 = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/vivaldi/i], describe: function(e4) {
                var t3 = { name: "Vivaldi" }, n3 = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/seamonkey/i], describe: function(e4) {
                var t3 = { name: "SeaMonkey" }, n3 = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/sailfish/i], describe: function(e4) {
                var t3 = { name: "Sailfish" }, n3 = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/silk/i], describe: function(e4) {
                var t3 = { name: "Amazon Silk" }, n3 = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/phantom/i], describe: function(e4) {
                var t3 = { name: "PhantomJS" }, n3 = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/slimerjs/i], describe: function(e4) {
                var t3 = { name: "SlimerJS" }, n3 = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e4) {
                var t3 = { name: "BlackBerry" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/(web|hpw)[o0]s/i], describe: function(e4) {
                var t3 = { name: "WebOS Browser" }, n3 = i.default.getFirstMatch(o, e4) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/bada/i], describe: function(e4) {
                var t3 = { name: "Bada" }, n3 = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/tizen/i], describe: function(e4) {
                var t3 = { name: "Tizen" }, n3 = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/qupzilla/i], describe: function(e4) {
                var t3 = { name: "QupZilla" }, n3 = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e4) {
                var t3 = { name: "Firefox" }, n3 = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/electron/i], describe: function(e4) {
                var t3 = { name: "Electron" }, n3 = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/MiuiBrowser/i], describe: function(e4) {
                var t3 = { name: "Miui" }, n3 = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/chromium/i], describe: function(e4) {
                var t3 = { name: "Chromium" }, n3 = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e4) || i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/chrome|crios|crmo/i], describe: function(e4) {
                var t3 = { name: "Chrome" }, n3 = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/GSA/i], describe: function(e4) {
                var t3 = { name: "Google Search" }, n3 = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: function(e4) {
                var t3 = !e4.test(/like android/i), n3 = e4.test(/android/i);
                return t3 && n3;
              }, describe: function(e4) {
                var t3 = { name: "Android Browser" }, n3 = i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/playstation 4/i], describe: function(e4) {
                var t3 = { name: "PlayStation 4" }, n3 = i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/safari|applewebkit/i], describe: function(e4) {
                var t3 = { name: "Safari" }, n3 = i.default.getFirstMatch(o, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/.*/i], describe: function(e4) {
                var t3 = -1 !== e4.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                return { name: i.default.getFirstMatch(t3, e4), version: i.default.getSecondMatch(t3, e4) };
              } }];
              t2.default = a, e3.exports = t2.default;
            }, 93: function(e3, t2, n2) {
              "use strict";
              t2.__esModule = true, t2.default = void 0;
              var r, i = (r = n2(17)) && r.__esModule ? r : { default: r }, o = n2(18), a = [{ test: [/Roku\/DVP/], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e4);
                return { name: o.OS_MAP.Roku, version: t3 };
              } }, { test: [/windows phone/i], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e4);
                return { name: o.OS_MAP.WindowsPhone, version: t3 };
              } }, { test: [/windows /i], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e4), n3 = i.default.getWindowsVersionName(t3);
                return { name: o.OS_MAP.Windows, version: t3, versionName: n3 };
              } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e4) {
                var t3 = { name: o.OS_MAP.iOS }, n3 = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/macintosh/i], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e4).replace(/[_\s]/g, "."), n3 = i.default.getMacOSVersionName(t3), r2 = { name: o.OS_MAP.MacOS, version: t3 };
                return n3 && (r2.versionName = n3), r2;
              } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e4).replace(/[_\s]/g, ".");
                return { name: o.OS_MAP.iOS, version: t3 };
              } }, { test: function(e4) {
                var t3 = !e4.test(/like android/i), n3 = e4.test(/android/i);
                return t3 && n3;
              }, describe: function(e4) {
                var t3 = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e4), n3 = i.default.getAndroidVersionName(t3), r2 = { name: o.OS_MAP.Android, version: t3 };
                return n3 && (r2.versionName = n3), r2;
              } }, { test: [/(web|hpw)[o0]s/i], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e4), n3 = { name: o.OS_MAP.WebOS };
                return t3 && t3.length && (n3.version = t3), n3;
              } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e4) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e4) || i.default.getFirstMatch(/\bbb(\d+)/i, e4);
                return { name: o.OS_MAP.BlackBerry, version: t3 };
              } }, { test: [/bada/i], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e4);
                return { name: o.OS_MAP.Bada, version: t3 };
              } }, { test: [/tizen/i], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e4);
                return { name: o.OS_MAP.Tizen, version: t3 };
              } }, { test: [/linux/i], describe: function() {
                return { name: o.OS_MAP.Linux };
              } }, { test: [/CrOS/], describe: function() {
                return { name: o.OS_MAP.ChromeOS };
              } }, { test: [/PlayStation 4/], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e4);
                return { name: o.OS_MAP.PlayStation4, version: t3 };
              } }];
              t2.default = a, e3.exports = t2.default;
            }, 94: function(e3, t2, n2) {
              "use strict";
              t2.__esModule = true, t2.default = void 0;
              var r, i = (r = n2(17)) && r.__esModule ? r : { default: r }, o = n2(18), a = [{ test: [/googlebot/i], describe: function() {
                return { type: "bot", vendor: "Google" };
              } }, { test: [/huawei/i], describe: function(e4) {
                var t3 = i.default.getFirstMatch(/(can-l01)/i, e4) && "Nova", n3 = { type: o.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                return t3 && (n3.model = t3), n3;
              } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
                return { type: o.PLATFORMS_MAP.tablet, vendor: "Nexus" };
              } }, { test: [/ipad/i], describe: function() {
                return { type: o.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
              } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
                return { type: o.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
              } }, { test: [/kftt build/i], describe: function() {
                return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
              } }, { test: [/silk/i], describe: function() {
                return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon" };
              } }, { test: [/tablet(?! pc)/i], describe: function() {
                return { type: o.PLATFORMS_MAP.tablet };
              } }, { test: function(e4) {
                var t3 = e4.test(/ipod|iphone/i), n3 = e4.test(/like (ipod|iphone)/i);
                return t3 && !n3;
              }, describe: function(e4) {
                var t3 = i.default.getFirstMatch(/(ipod|iphone)/i, e4);
                return { type: o.PLATFORMS_MAP.mobile, vendor: "Apple", model: t3 };
              } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
                return { type: o.PLATFORMS_MAP.mobile, vendor: "Nexus" };
              } }, { test: [/[^-]mobi/i], describe: function() {
                return { type: o.PLATFORMS_MAP.mobile };
              } }, { test: function(e4) {
                return "blackberry" === e4.getBrowserName(true);
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
              } }, { test: function(e4) {
                return "bada" === e4.getBrowserName(true);
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.mobile };
              } }, { test: function(e4) {
                return "windows phone" === e4.getBrowserName();
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
              } }, { test: function(e4) {
                var t3 = Number(String(e4.getOSVersion()).split(".")[0]);
                return "android" === e4.getOSName(true) && t3 >= 3;
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.tablet };
              } }, { test: function(e4) {
                return "android" === e4.getOSName(true);
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.mobile };
              } }, { test: function(e4) {
                return "macos" === e4.getOSName(true);
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.desktop, vendor: "Apple" };
              } }, { test: function(e4) {
                return "windows" === e4.getOSName(true);
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.desktop };
              } }, { test: function(e4) {
                return "linux" === e4.getOSName(true);
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.desktop };
              } }, { test: function(e4) {
                return "playstation 4" === e4.getOSName(true);
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.tv };
              } }, { test: function(e4) {
                return "roku" === e4.getOSName(true);
              }, describe: function() {
                return { type: o.PLATFORMS_MAP.tv };
              } }];
              t2.default = a, e3.exports = t2.default;
            }, 95: function(e3, t2, n2) {
              "use strict";
              t2.__esModule = true, t2.default = void 0;
              var r, i = (r = n2(17)) && r.__esModule ? r : { default: r }, o = n2(18), a = [{ test: function(e4) {
                return "microsoft edge" === e4.getBrowserName(true);
              }, describe: function(e4) {
                if (/\sedg\//i.test(e4)) return { name: o.ENGINE_MAP.Blink };
                var t3 = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e4);
                return { name: o.ENGINE_MAP.EdgeHTML, version: t3 };
              } }, { test: [/trident/i], describe: function(e4) {
                var t3 = { name: o.ENGINE_MAP.Trident }, n3 = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: function(e4) {
                return e4.test(/presto/i);
              }, describe: function(e4) {
                var t3 = { name: o.ENGINE_MAP.Presto }, n3 = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: function(e4) {
                var t3 = e4.test(/gecko/i), n3 = e4.test(/like gecko/i);
                return t3 && !n3;
              }, describe: function(e4) {
                var t3 = { name: o.ENGINE_MAP.Gecko }, n3 = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
                return { name: o.ENGINE_MAP.Blink };
              } }, { test: [/(apple)?webkit/i], describe: function(e4) {
                var t3 = { name: o.ENGINE_MAP.WebKit }, n3 = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e4);
                return n3 && (t3.version = n3), t3;
              } }];
              t2.default = a, e3.exports = t2.default;
            } });
          }, 948: function(e2, t2, n2) {
            "use strict";
            function r(e3, t3) {
              if (null == e3) return {};
              var n3, r2, i2 = (function(e4, t4) {
                if (null == e4) return {};
                var n4 = {};
                for (var r3 in e4) if ({}.hasOwnProperty.call(e4, r3)) {
                  if (-1 !== t4.indexOf(r3)) continue;
                  n4[r3] = e4[r3];
                }
                return n4;
              })(e3, t3);
              if (Object.getOwnPropertySymbols) {
                var o2 = Object.getOwnPropertySymbols(e3);
                for (r2 = 0; r2 < o2.length; r2++) n3 = o2[r2], -1 === t3.indexOf(n3) && {}.propertyIsEnumerable.call(e3, n3) && (i2[n3] = e3[n3]);
              }
              return i2;
            }
            function i(e3, t3) {
              if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }
            function o(e3) {
              return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                return typeof e4;
              } : function(e4) {
                return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
              }, o(e3);
            }
            function a(e3) {
              var t3 = (function(e4) {
                if ("object" != o(e4) || !e4) return e4;
                var t4 = e4[Symbol.toPrimitive];
                if (void 0 !== t4) {
                  var n3 = t4.call(e4, "string");
                  if ("object" != o(n3)) return n3;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              })(e3);
              return "symbol" == o(t3) ? t3 : t3 + "";
            }
            function s(e3, t3) {
              for (var n3 = 0; n3 < t3.length; n3++) {
                var r2 = t3[n3];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, a(r2.key), r2);
              }
            }
            function c(e3, t3, n3) {
              return t3 && s(e3.prototype, t3), n3 && s(e3, n3), Object.defineProperty(e3, "prototype", { writable: false }), e3;
            }
            function u(e3, t3) {
              if (t3 && ("object" == o(t3) || "function" == typeof t3)) return t3;
              if (void 0 !== t3) throw new TypeError("Derived constructors may only return object or undefined");
              return (function(e4) {
                if (void 0 === e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e4;
              })(e3);
            }
            function l(e3) {
              return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
                return e4.__proto__ || Object.getPrototypeOf(e4);
              }, l(e3);
            }
            function d(e3, t3) {
              return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
                return e4.__proto__ = t4, e4;
              }, d(e3, t3);
            }
            function f(e3, t3) {
              if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && d(e3, t3);
            }
            function p(e3, t3, n3) {
              return (t3 = a(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
            }
            function h(e3, t3, n3, r2, i2, o2, a2) {
              try {
                var s2 = e3[o2](a2), c2 = s2.value;
              } catch (e4) {
                return void n3(e4);
              }
              s2.done ? t3(c2) : Promise.resolve(c2).then(r2, i2);
            }
            function v(e3) {
              return function() {
                var t3 = this, n3 = arguments;
                return new Promise((function(r2, i2) {
                  var o2 = e3.apply(t3, n3);
                  function a2(e4) {
                    h(o2, r2, i2, a2, s2, "next", e4);
                  }
                  function s2(e4) {
                    h(o2, r2, i2, a2, s2, "throw", e4);
                  }
                  a2(void 0);
                }));
              };
            }
            function g(e3, t3) {
              (null == t3 || t3 > e3.length) && (t3 = e3.length);
              for (var n3 = 0, r2 = Array(t3); n3 < t3; n3++) r2[n3] = e3[n3];
              return r2;
            }
            function m(e3, t3) {
              return (function(e4) {
                if (Array.isArray(e4)) return e4;
              })(e3) || (function(e4, t4) {
                var n3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                if (null != n3) {
                  var r2, i2, o2, a2, s2 = [], c2 = true, u2 = false;
                  try {
                    if (o2 = (n3 = n3.call(e4)).next, 0 === t4) {
                      if (Object(n3) !== n3) return;
                      c2 = false;
                    } else for (; !(c2 = (r2 = o2.call(n3)).done) && (s2.push(r2.value), s2.length !== t4); c2 = true) ;
                  } catch (e5) {
                    u2 = true, i2 = e5;
                  } finally {
                    try {
                      if (!c2 && null != n3.return && (a2 = n3.return(), Object(a2) !== a2)) return;
                    } finally {
                      if (u2) throw i2;
                    }
                  }
                  return s2;
                }
              })(e3, t3) || (function(e4, t4) {
                if (e4) {
                  if ("string" == typeof e4) return g(e4, t4);
                  var n3 = {}.toString.call(e4).slice(8, -1);
                  return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e4) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? g(e4, t4) : void 0;
                }
              })(e3, t3) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              })();
            }
            n2.r(t2), n2.d(t2, { DAILY_ACCESS_LEVEL_FULL: function() {
              return Yr;
            }, DAILY_ACCESS_LEVEL_LOBBY: function() {
              return $r;
            }, DAILY_ACCESS_LEVEL_NONE: function() {
              return qr;
            }, DAILY_ACCESS_UNKNOWN: function() {
              return Jr;
            }, DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: function() {
              return ai;
            }, DAILY_CAMERA_ERROR_CAM_IN_USE: function() {
              return ii;
            }, DAILY_CAMERA_ERROR_CONSTRAINTS: function() {
              return li;
            }, DAILY_CAMERA_ERROR_MIC_IN_USE: function() {
              return oi;
            }, DAILY_CAMERA_ERROR_NOT_FOUND: function() {
              return ui;
            }, DAILY_CAMERA_ERROR_PERMISSIONS: function() {
              return si;
            }, DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: function() {
              return ci;
            }, DAILY_CAMERA_ERROR_UNKNOWN: function() {
              return di;
            }, DAILY_EVENT_ACCESS_STATE_UPDATED: function() {
              return Ai;
            }, DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: function() {
              return Zi;
            }, DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: function() {
              return eo;
            }, DAILY_EVENT_APP_MSG: function() {
              return qi;
            }, DAILY_EVENT_CAMERA_ERROR: function() {
              return _i;
            }, DAILY_EVENT_CPU_LOAD_CHANGE: function() {
              return ro;
            }, DAILY_EVENT_ERROR: function() {
              return go;
            }, DAILY_EVENT_EXIT_FULLSCREEN: function() {
              return ao;
            }, DAILY_EVENT_FACE_COUNTS_UPDATED: function() {
              return io;
            }, DAILY_EVENT_FULLSCREEN: function() {
              return oo;
            }, DAILY_EVENT_IFRAME_LAUNCH_CONFIG: function() {
              return pi;
            }, DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: function() {
              return fi;
            }, DAILY_EVENT_INPUT_SETTINGS_UPDATED: function() {
              return ho;
            }, DAILY_EVENT_JOINED_MEETING: function() {
              return Si;
            }, DAILY_EVENT_JOINING_MEETING: function() {
              return bi;
            }, DAILY_EVENT_LANG_UPDATED: function() {
              return fo;
            }, DAILY_EVENT_LEFT_MEETING: function() {
              return wi;
            }, DAILY_EVENT_LIVE_STREAMING_ERROR: function() {
              return lo;
            }, DAILY_EVENT_LIVE_STREAMING_STARTED: function() {
              return so;
            }, DAILY_EVENT_LIVE_STREAMING_STOPPED: function() {
              return uo;
            }, DAILY_EVENT_LIVE_STREAMING_UPDATED: function() {
              return co;
            }, DAILY_EVENT_LOADED: function() {
              return mi;
            }, DAILY_EVENT_LOADING: function() {
              return vi;
            }, DAILY_EVENT_LOAD_ATTEMPT_FAILED: function() {
              return gi;
            }, DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED: function() {
              return Xi;
            }, DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: function() {
              return Ki;
            }, DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: function() {
              return Qi;
            }, DAILY_EVENT_MEETING_SESSION_DATA_ERROR: function() {
              return Pi;
            }, DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: function() {
              return Oi;
            }, DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED: function() {
              return Ci;
            }, DAILY_EVENT_NETWORK_CONNECTION: function() {
              return no;
            }, DAILY_EVENT_NETWORK_QUALITY_CHANGE: function() {
              return to;
            }, DAILY_EVENT_NONFATAL_ERROR: function() {
              return vo;
            }, DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: function() {
              return Mi;
            }, DAILY_EVENT_PARTICIPANT_JOINED: function() {
              return ki;
            }, DAILY_EVENT_PARTICIPANT_LEFT: function() {
              return Ti;
            }, DAILY_EVENT_PARTICIPANT_UPDATED: function() {
              return Ei;
            }, DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: function() {
              return po;
            }, DAILY_EVENT_RECORDING_DATA: function() {
              return $i;
            }, DAILY_EVENT_RECORDING_ERROR: function() {
              return Ji;
            }, DAILY_EVENT_RECORDING_STARTED: function() {
              return Vi;
            }, DAILY_EVENT_RECORDING_STATS: function() {
              return Bi;
            }, DAILY_EVENT_RECORDING_STOPPED: function() {
              return Ui;
            }, DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: function() {
              return Yi;
            }, DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: function() {
              return Gi;
            }, DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: function() {
              return Hi;
            }, DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: function() {
              return zi;
            }, DAILY_EVENT_STARTED_CAMERA: function() {
              return yi;
            }, DAILY_EVENT_THEME_UPDATED: function() {
              return hi;
            }, DAILY_EVENT_TRACK_STARTED: function() {
              return Ni;
            }, DAILY_EVENT_TRACK_STOPPED: function() {
              return ji;
            }, DAILY_EVENT_TRANSCRIPTION_ERROR: function() {
              return Fi;
            }, DAILY_EVENT_TRANSCRIPTION_MSG: function() {
              return Wi;
            }, DAILY_EVENT_TRANSCRIPTION_STARTED: function() {
              return Ri;
            }, DAILY_EVENT_TRANSCRIPTION_STOPPED: function() {
              return xi;
            }, DAILY_EVENT_WAITING_PARTICIPANT_ADDED: function() {
              return Ii;
            }, DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: function() {
              return Di;
            }, DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: function() {
              return Li;
            }, DAILY_FATAL_ERROR_CONNECTION: function() {
              return ri;
            }, DAILY_FATAL_ERROR_EJECTED: function() {
              return zr;
            }, DAILY_FATAL_ERROR_EOL: function() {
              return ti;
            }, DAILY_FATAL_ERROR_EXP_ROOM: function() {
              return Qr;
            }, DAILY_FATAL_ERROR_EXP_TOKEN: function() {
              return Xr;
            }, DAILY_FATAL_ERROR_MEETING_FULL: function() {
              return ei;
            }, DAILY_FATAL_ERROR_NBF_ROOM: function() {
              return Hr;
            }, DAILY_FATAL_ERROR_NBF_TOKEN: function() {
              return Kr;
            }, DAILY_FATAL_ERROR_NOT_ALLOWED: function() {
              return ni;
            }, DAILY_FATAL_ERROR_NO_ROOM: function() {
              return Zr;
            }, DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: function() {
              return Gr;
            }, DAILY_RECEIVE_SETTINGS_BASE_KEY: function() {
              return Wr;
            }, DAILY_STATE_ERROR: function() {
              return jr;
            }, DAILY_STATE_JOINED: function() {
              return Dr;
            }, DAILY_STATE_JOINING: function() {
              return Lr;
            }, DAILY_STATE_LEFT: function() {
              return Nr;
            }, DAILY_STATE_NEW: function() {
              return Or;
            }, DAILY_TRACK_STATE_BLOCKED: function() {
              return Rr;
            }, DAILY_TRACK_STATE_INTERRUPTED: function() {
              return Ur;
            }, DAILY_TRACK_STATE_LOADING: function() {
              return Vr;
            }, DAILY_TRACK_STATE_OFF: function() {
              return xr;
            }, DAILY_TRACK_STATE_PLAYABLE: function() {
              return Br;
            }, DAILY_TRACK_STATE_SENDABLE: function() {
              return Fr;
            }, default: function() {
              return fs;
            } });
            var y = n2(7), _ = n2.n(y), b = Object.prototype.hasOwnProperty;
            function S(e3, t3, n3) {
              for (n3 of e3.keys()) if (w(n3, t3)) return n3;
            }
            function w(e3, t3) {
              var n3, r2, i2;
              if (e3 === t3) return true;
              if (e3 && t3 && (n3 = e3.constructor) === t3.constructor) {
                if (n3 === Date) return e3.getTime() === t3.getTime();
                if (n3 === RegExp) return e3.toString() === t3.toString();
                if (n3 === Array) {
                  if ((r2 = e3.length) === t3.length) for (; r2-- && w(e3[r2], t3[r2]); ) ;
                  return -1 === r2;
                }
                if (n3 === Set) {
                  if (e3.size !== t3.size) return false;
                  for (r2 of e3) {
                    if ((i2 = r2) && "object" == typeof i2 && !(i2 = S(t3, i2))) return false;
                    if (!t3.has(i2)) return false;
                  }
                  return true;
                }
                if (n3 === Map) {
                  if (e3.size !== t3.size) return false;
                  for (r2 of e3) {
                    if ((i2 = r2[0]) && "object" == typeof i2 && !(i2 = S(t3, i2))) return false;
                    if (!w(r2[1], t3.get(i2))) return false;
                  }
                  return true;
                }
                if (n3 === ArrayBuffer) e3 = new Uint8Array(e3), t3 = new Uint8Array(t3);
                else if (n3 === DataView) {
                  if ((r2 = e3.byteLength) === t3.byteLength) for (; r2-- && e3.getInt8(r2) === t3.getInt8(r2); ) ;
                  return -1 === r2;
                }
                if (ArrayBuffer.isView(e3)) {
                  if ((r2 = e3.byteLength) === t3.byteLength) for (; r2-- && e3[r2] === t3[r2]; ) ;
                  return -1 === r2;
                }
                if (!n3 || "object" == typeof e3) {
                  for (n3 in r2 = 0, e3) {
                    if (b.call(e3, n3) && ++r2 && !b.call(t3, n3)) return false;
                    if (!(n3 in t3) || !w(e3[n3], t3[n3])) return false;
                  }
                  return Object.keys(t3).length === r2;
                }
              }
              return e3 != e3 && t3 != t3;
            }
            var k = n2(880), E = n2.n(k);
            function T() {
              return Date.now() + Math.random().toString();
            }
            function M() {
              throw new Error("Method must be implemented in subclass");
            }
            function A(e3, t3) {
              return null != t3 && t3.proxyUrl ? t3.proxyUrl + ("/" === t3.proxyUrl.slice(-1) ? "" : "/") + e3.substring(8) : e3;
            }
            function C(e3) {
              return null != e3 && e3.callObjectBundleUrlOverride ? e3.callObjectBundleUrlOverride : A("https://c.daily.co/call-machine/versioned/".concat("0.85.0", "/static/call-machine-object-bundle.js"), e3);
            }
            function O(e3) {
              try {
                new URL(e3);
              } catch (e4) {
                return false;
              }
              return true;
            }
            const P = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, I = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, L = "8.55.0", D = globalThis;
            function N(e3, t3, n3) {
              const r2 = n3 || D, i2 = r2.__SENTRY__ = r2.__SENTRY__ || {}, o2 = i2[L] = i2[L] || {};
              return o2[e3] || (o2[e3] = t3());
            }
            const j = ["debug", "info", "warn", "error", "log", "assert", "trace"], R = {};
            function x(e3) {
              if (!("console" in D)) return e3();
              const t3 = D.console, n3 = {}, r2 = Object.keys(R);
              r2.forEach(((e4) => {
                const r3 = R[e4];
                n3[e4] = t3[e4], t3[e4] = r3;
              }));
              try {
                return e3();
              } finally {
                r2.forEach(((e4) => {
                  t3[e4] = n3[e4];
                }));
              }
            }
            const F = N("logger", (function() {
              let e3 = false;
              const t3 = { enable: () => {
                e3 = true;
              }, disable: () => {
                e3 = false;
              }, isEnabled: () => e3 };
              return I ? j.forEach(((n3) => {
                t3[n3] = (...t4) => {
                  e3 && x((() => {
                    D.console[n3](`Sentry Logger [${n3}]:`, ...t4);
                  }));
                };
              })) : j.forEach(((e4) => {
                t3[e4] = () => {
                };
              })), t3;
            })), V = [];
            function U(e3, t3) {
              for (const n3 of t3) n3 && n3.afterAllSetup && n3.afterAllSetup(e3);
            }
            function B(e3, t3, n3) {
              if (n3[t3.name]) P && F.log(`Integration skipped because it was already installed: ${t3.name}`);
              else {
                if (n3[t3.name] = t3, -1 === V.indexOf(t3.name) && "function" == typeof t3.setupOnce && (t3.setupOnce(), V.push(t3.name)), t3.setup && "function" == typeof t3.setup && t3.setup(e3), "function" == typeof t3.preprocessEvent) {
                  const n4 = t3.preprocessEvent.bind(t3);
                  e3.on("preprocessEvent", ((t4, r2) => n4(t4, r2, e3)));
                }
                if ("function" == typeof t3.processEvent) {
                  const n4 = t3.processEvent.bind(t3), r2 = Object.assign(((t4, r3) => n4(t4, r3, e3)), { id: t3.name });
                  e3.addEventProcessor(r2);
                }
                P && F.log(`Integration installed: ${t3.name}`);
              }
            }
            const J = Object.prototype.toString;
            function Y(e3) {
              switch (J.call(e3)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                case "[object WebAssembly.Exception]":
                  return true;
                default:
                  return Z(e3, Error);
              }
            }
            function $(e3, t3) {
              return J.call(e3) === `[object ${t3}]`;
            }
            function q(e3) {
              return $(e3, "ErrorEvent");
            }
            function W(e3) {
              return $(e3, "DOMError");
            }
            function G(e3) {
              return $(e3, "String");
            }
            function z(e3) {
              return "object" == typeof e3 && null !== e3 && "__sentry_template_string__" in e3 && "__sentry_template_values__" in e3;
            }
            function H(e3) {
              return null === e3 || z(e3) || "object" != typeof e3 && "function" != typeof e3;
            }
            function K(e3) {
              return $(e3, "Object");
            }
            function Q(e3) {
              return "undefined" != typeof Event && Z(e3, Event);
            }
            function X(e3) {
              return Boolean(e3 && e3.then && "function" == typeof e3.then);
            }
            function Z(e3, t3) {
              try {
                return e3 instanceof t3;
              } catch (e4) {
                return false;
              }
            }
            function ee(e3) {
              return !("object" != typeof e3 || null === e3 || !e3.__isVue && !e3._isVue);
            }
            const te = D;
            function ne(e3, t3 = {}) {
              if (!e3) return "<unknown>";
              try {
                let n3 = e3;
                const r2 = 5, i2 = [];
                let o2 = 0, a2 = 0;
                const s2 = " > ", c2 = s2.length;
                let u2;
                const l2 = Array.isArray(t3) ? t3 : t3.keyAttrs, d2 = !Array.isArray(t3) && t3.maxStringLength || 80;
                for (; n3 && o2++ < r2 && (u2 = re(n3, l2), !("html" === u2 || o2 > 1 && a2 + i2.length * c2 + u2.length >= d2)); ) i2.push(u2), a2 += u2.length, n3 = n3.parentNode;
                return i2.reverse().join(s2);
              } catch (e4) {
                return "<unknown>";
              }
            }
            function re(e3, t3) {
              const n3 = e3, r2 = [];
              if (!n3 || !n3.tagName) return "";
              if (te.HTMLElement && n3 instanceof HTMLElement && n3.dataset) {
                if (n3.dataset.sentryComponent) return n3.dataset.sentryComponent;
                if (n3.dataset.sentryElement) return n3.dataset.sentryElement;
              }
              r2.push(n3.tagName.toLowerCase());
              const i2 = t3 && t3.length ? t3.filter(((e4) => n3.getAttribute(e4))).map(((e4) => [e4, n3.getAttribute(e4)])) : null;
              if (i2 && i2.length) i2.forEach(((e4) => {
                r2.push(`[${e4[0]}="${e4[1]}"]`);
              }));
              else {
                n3.id && r2.push(`#${n3.id}`);
                const e4 = n3.className;
                if (e4 && G(e4)) {
                  const t4 = e4.split(/\s+/);
                  for (const e5 of t4) r2.push(`.${e5}`);
                }
              }
              const o2 = ["aria-label", "type", "name", "title", "alt"];
              for (const e4 of o2) {
                const t4 = n3.getAttribute(e4);
                t4 && r2.push(`[${e4}="${t4}"]`);
              }
              return r2.join("");
            }
            function ie(e3, t3 = 0) {
              return "string" != typeof e3 || 0 === t3 || e3.length <= t3 ? e3 : `${e3.slice(0, t3)}...`;
            }
            function oe(e3, t3) {
              if (!Array.isArray(e3)) return "";
              const n3 = [];
              for (let t4 = 0; t4 < e3.length; t4++) {
                const r2 = e3[t4];
                try {
                  ee(r2) ? n3.push("[VueViewModel]") : n3.push(String(r2));
                } catch (e4) {
                  n3.push("[value cannot be serialized]");
                }
              }
              return n3.join(t3);
            }
            function ae(e3, t3 = [], n3 = false) {
              return t3.some(((t4) => (function(e4, t5, n4 = false) {
                return !!G(e4) && ($(t5, "RegExp") ? t5.test(e4) : !!G(t5) && (n4 ? e4 === t5 : e4.includes(t5)));
              })(e3, t4, n3)));
            }
            function se(e3, t3, n3) {
              if (!(t3 in e3)) return;
              const r2 = e3[t3], i2 = n3(r2);
              "function" == typeof i2 && ue(i2, r2);
              try {
                e3[t3] = i2;
              } catch (n4) {
                I && F.log(`Failed to replace method "${t3}" in object`, e3);
              }
            }
            function ce(e3, t3, n3) {
              try {
                Object.defineProperty(e3, t3, { value: n3, writable: true, configurable: true });
              } catch (n4) {
                I && F.log(`Failed to add non-enumerable property "${t3}" to object`, e3);
              }
            }
            function ue(e3, t3) {
              try {
                const n3 = t3.prototype || {};
                e3.prototype = t3.prototype = n3, ce(e3, "__sentry_original__", t3);
              } catch (e4) {
              }
            }
            function le(e3) {
              return e3.__sentry_original__;
            }
            function de(e3) {
              if (Y(e3)) return { message: e3.message, name: e3.name, stack: e3.stack, ...pe(e3) };
              if (Q(e3)) {
                const t3 = { type: e3.type, target: fe(e3.target), currentTarget: fe(e3.currentTarget), ...pe(e3) };
                return "undefined" != typeof CustomEvent && Z(e3, CustomEvent) && (t3.detail = e3.detail), t3;
              }
              return e3;
            }
            function fe(e3) {
              try {
                return "undefined" != typeof Element && Z(e3, Element) ? ne(e3) : Object.prototype.toString.call(e3);
              } catch (e4) {
                return "<unknown>";
              }
            }
            function pe(e3) {
              if ("object" == typeof e3 && null !== e3) {
                const t3 = {};
                for (const n3 in e3) Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
                return t3;
              }
              return {};
            }
            function he(e3) {
              return ve(e3, /* @__PURE__ */ new Map());
            }
            function ve(e3, t3) {
              if ((function(e4) {
                if (!K(e4)) return false;
                try {
                  const t4 = Object.getPrototypeOf(e4).constructor.name;
                  return !t4 || "Object" === t4;
                } catch (e5) {
                  return true;
                }
              })(e3)) {
                const n3 = t3.get(e3);
                if (void 0 !== n3) return n3;
                const r2 = {};
                t3.set(e3, r2);
                for (const n4 of Object.getOwnPropertyNames(e3)) void 0 !== e3[n4] && (r2[n4] = ve(e3[n4], t3));
                return r2;
              }
              if (Array.isArray(e3)) {
                const n3 = t3.get(e3);
                if (void 0 !== n3) return n3;
                const r2 = [];
                return t3.set(e3, r2), e3.forEach(((e4) => {
                  r2.push(ve(e4, t3));
                })), r2;
              }
              return e3;
            }
            function ge() {
              const e3 = D, t3 = e3.crypto || e3.msCrypto;
              let n3 = () => 16 * Math.random();
              try {
                if (t3 && t3.randomUUID) return t3.randomUUID().replace(/-/g, "");
                t3 && t3.getRandomValues && (n3 = () => {
                  const e4 = new Uint8Array(1);
                  return t3.getRandomValues(e4), e4[0];
                });
              } catch (e4) {
              }
              return ("10000000100040008000" + 1e11).replace(/[018]/g, ((e4) => (e4 ^ (15 & n3()) >> e4 / 4).toString(16)));
            }
            function me(e3) {
              return e3.exception && e3.exception.values ? e3.exception.values[0] : void 0;
            }
            function ye(e3) {
              const { message: t3, event_id: n3 } = e3;
              if (t3) return t3;
              const r2 = me(e3);
              return r2 ? r2.type && r2.value ? `${r2.type}: ${r2.value}` : r2.type || r2.value || n3 || "<unknown>" : n3 || "<unknown>";
            }
            function _e(e3, t3, n3) {
              const r2 = e3.exception = e3.exception || {}, i2 = r2.values = r2.values || [], o2 = i2[0] = i2[0] || {};
              o2.value || (o2.value = t3 || ""), o2.type || (o2.type = n3 || "Error");
            }
            function be(e3, t3) {
              const n3 = me(e3);
              if (!n3) return;
              const r2 = n3.mechanism;
              if (n3.mechanism = { type: "generic", handled: true, ...r2, ...t3 }, t3 && "data" in t3) {
                const e4 = { ...r2 && r2.data, ...t3.data };
                n3.mechanism.data = e4;
              }
            }
            function Se(e3) {
              if ((function(e4) {
                try {
                  return e4.__sentry_captured__;
                } catch (e5) {
                }
              })(e3)) return true;
              try {
                ce(e3, "__sentry_captured__", true);
              } catch (e4) {
              }
              return false;
            }
            const we = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/], ke = (e3 = {}) => ({ name: "InboundFilters", processEvent(t3, n3, r2) {
              const i2 = r2.getOptions(), o2 = (function(e4 = {}, t4 = {}) {
                return { allowUrls: [...e4.allowUrls || [], ...t4.allowUrls || []], denyUrls: [...e4.denyUrls || [], ...t4.denyUrls || []], ignoreErrors: [...e4.ignoreErrors || [], ...t4.ignoreErrors || [], ...e4.disableErrorDefaults ? [] : we], ignoreTransactions: [...e4.ignoreTransactions || [], ...t4.ignoreTransactions || []], ignoreInternal: void 0 === e4.ignoreInternal || e4.ignoreInternal };
              })(e3, i2);
              return (function(e4, t4) {
                return t4.ignoreInternal && (function(e5) {
                  try {
                    return "SentryError" === e5.exception.values[0].type;
                  } catch (e6) {
                  }
                  return false;
                })(e4) ? (P && F.warn(`Event dropped due to being internal Sentry Error.
Event: ${ye(e4)}`), true) : (function(e5, t5) {
                  return !(e5.type || !t5 || !t5.length) && (function(e6) {
                    const t6 = [];
                    let n4;
                    e6.message && t6.push(e6.message);
                    try {
                      n4 = e6.exception.values[e6.exception.values.length - 1];
                    } catch (e7) {
                    }
                    return n4 && n4.value && (t6.push(n4.value), n4.type && t6.push(`${n4.type}: ${n4.value}`)), t6;
                  })(e5).some(((e6) => ae(e6, t5)));
                })(e4, t4.ignoreErrors) ? (P && F.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${ye(e4)}`), true) : (function(e5) {
                  return !e5.type && (!(!e5.exception || !e5.exception.values || 0 === e5.exception.values.length) && (!e5.message && !e5.exception.values.some(((e6) => e6.stacktrace || e6.type && "Error" !== e6.type || e6.value))));
                })(e4) ? (P && F.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${ye(e4)}`), true) : (function(e5, t5) {
                  if ("transaction" !== e5.type || !t5 || !t5.length) return false;
                  const n4 = e5.transaction;
                  return !!n4 && ae(n4, t5);
                })(e4, t4.ignoreTransactions) ? (P && F.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${ye(e4)}`), true) : (function(e5, t5) {
                  if (!t5 || !t5.length) return false;
                  const n4 = Ee(e5);
                  return !!n4 && ae(n4, t5);
                })(e4, t4.denyUrls) ? (P && F.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${ye(e4)}.
Url: ${Ee(e4)}`), true) : !(function(e5, t5) {
                  if (!t5 || !t5.length) return true;
                  const n4 = Ee(e5);
                  return !n4 || ae(n4, t5);
                })(e4, t4.allowUrls) && (P && F.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${ye(e4)}.
Url: ${Ee(e4)}`), true);
              })(t3, o2) ? null : t3;
            } });
            function Ee(e3) {
              try {
                let t3;
                try {
                  t3 = e3.exception.values[0].stacktrace.frames;
                } catch (e4) {
                }
                return t3 ? (function(e4 = []) {
                  for (let t4 = e4.length - 1; t4 >= 0; t4--) {
                    const n3 = e4[t4];
                    if (n3 && "<anonymous>" !== n3.filename && "[native code]" !== n3.filename) return n3.filename || null;
                  }
                  return null;
                })(t3) : null;
              } catch (t3) {
                return P && F.error(`Cannot extract url for event ${ye(e3)}`), null;
              }
            }
            function Te() {
              return Me(D), D;
            }
            function Me(e3) {
              const t3 = e3.__SENTRY__ = e3.__SENTRY__ || {};
              return t3.version = t3.version || L, t3[L] = t3[L] || {};
            }
            function Ae() {
              return Date.now() / 1e3;
            }
            const Ce = (function() {
              const { performance: e3 } = D;
              if (!e3 || !e3.now) return Ae;
              const t3 = Date.now() - e3.now(), n3 = null == e3.timeOrigin ? t3 : e3.timeOrigin;
              return () => (n3 + e3.now()) / 1e3;
            })();
            let Oe;
            function Pe(e3, t3 = {}) {
              if (t3.user && (!e3.ipAddress && t3.user.ip_address && (e3.ipAddress = t3.user.ip_address), e3.did || t3.did || (e3.did = t3.user.id || t3.user.email || t3.user.username)), e3.timestamp = t3.timestamp || Ce(), t3.abnormal_mechanism && (e3.abnormal_mechanism = t3.abnormal_mechanism), t3.ignoreDuration && (e3.ignoreDuration = t3.ignoreDuration), t3.sid && (e3.sid = 32 === t3.sid.length ? t3.sid : ge()), void 0 !== t3.init && (e3.init = t3.init), !e3.did && t3.did && (e3.did = `${t3.did}`), "number" == typeof t3.started && (e3.started = t3.started), e3.ignoreDuration) e3.duration = void 0;
              else if ("number" == typeof t3.duration) e3.duration = t3.duration;
              else {
                const t4 = e3.timestamp - e3.started;
                e3.duration = t4 >= 0 ? t4 : 0;
              }
              t3.release && (e3.release = t3.release), t3.environment && (e3.environment = t3.environment), !e3.ipAddress && t3.ipAddress && (e3.ipAddress = t3.ipAddress), !e3.userAgent && t3.userAgent && (e3.userAgent = t3.userAgent), "number" == typeof t3.errors && (e3.errors = t3.errors), t3.status && (e3.status = t3.status);
            }
            function Ie() {
              return ge();
            }
            function Le() {
              return ge().substring(16);
            }
            function De(e3, t3, n3 = 2) {
              if (!t3 || "object" != typeof t3 || n3 <= 0) return t3;
              if (e3 && t3 && 0 === Object.keys(t3).length) return e3;
              const r2 = { ...e3 };
              for (const e4 in t3) Object.prototype.hasOwnProperty.call(t3, e4) && (r2[e4] = De(r2[e4], t3[e4], n3 - 1));
              return r2;
            }
            (() => {
              const { performance: e3 } = D;
              if (!e3 || !e3.now) return void (Oe = "none");
              const t3 = 36e5, n3 = e3.now(), r2 = Date.now(), i2 = e3.timeOrigin ? Math.abs(e3.timeOrigin + n3 - r2) : t3, o2 = i2 < t3, a2 = e3.timing && e3.timing.navigationStart, s2 = "number" == typeof a2 ? Math.abs(a2 + n3 - r2) : t3;
              o2 || s2 < t3 ? i2 <= s2 ? (Oe = "timeOrigin", e3.timeOrigin) : Oe = "navigationStart" : Oe = "dateNow";
            })();
            const Ne = "_sentrySpan";
            function je(e3, t3) {
              t3 ? ce(e3, Ne, t3) : delete e3[Ne];
            }
            function Re(e3) {
              return e3[Ne];
            }
            class xe {
              constructor() {
                this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: Ie(), spanId: Le() };
              }
              clone() {
                const e3 = new xe();
                return e3._breadcrumbs = [...this._breadcrumbs], e3._tags = { ...this._tags }, e3._extra = { ...this._extra }, e3._contexts = { ...this._contexts }, this._contexts.flags && (e3._contexts.flags = { values: [...this._contexts.flags.values] }), e3._user = this._user, e3._level = this._level, e3._session = this._session, e3._transactionName = this._transactionName, e3._fingerprint = this._fingerprint, e3._eventProcessors = [...this._eventProcessors], e3._requestSession = this._requestSession, e3._attachments = [...this._attachments], e3._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, e3._propagationContext = { ...this._propagationContext }, e3._client = this._client, e3._lastEventId = this._lastEventId, je(e3, Re(this)), e3;
              }
              setClient(e3) {
                this._client = e3;
              }
              setLastEventId(e3) {
                this._lastEventId = e3;
              }
              getClient() {
                return this._client;
              }
              lastEventId() {
                return this._lastEventId;
              }
              addScopeListener(e3) {
                this._scopeListeners.push(e3);
              }
              addEventProcessor(e3) {
                return this._eventProcessors.push(e3), this;
              }
              setUser(e3) {
                return this._user = e3 || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && Pe(this._session, { user: e3 }), this._notifyScopeListeners(), this;
              }
              getUser() {
                return this._user;
              }
              getRequestSession() {
                return this._requestSession;
              }
              setRequestSession(e3) {
                return this._requestSession = e3, this;
              }
              setTags(e3) {
                return this._tags = { ...this._tags, ...e3 }, this._notifyScopeListeners(), this;
              }
              setTag(e3, t3) {
                return this._tags = { ...this._tags, [e3]: t3 }, this._notifyScopeListeners(), this;
              }
              setExtras(e3) {
                return this._extra = { ...this._extra, ...e3 }, this._notifyScopeListeners(), this;
              }
              setExtra(e3, t3) {
                return this._extra = { ...this._extra, [e3]: t3 }, this._notifyScopeListeners(), this;
              }
              setFingerprint(e3) {
                return this._fingerprint = e3, this._notifyScopeListeners(), this;
              }
              setLevel(e3) {
                return this._level = e3, this._notifyScopeListeners(), this;
              }
              setTransactionName(e3) {
                return this._transactionName = e3, this._notifyScopeListeners(), this;
              }
              setContext(e3, t3) {
                return null === t3 ? delete this._contexts[e3] : this._contexts[e3] = t3, this._notifyScopeListeners(), this;
              }
              setSession(e3) {
                return e3 ? this._session = e3 : delete this._session, this._notifyScopeListeners(), this;
              }
              getSession() {
                return this._session;
              }
              update(e3) {
                if (!e3) return this;
                const t3 = "function" == typeof e3 ? e3(this) : e3, [n3, r2] = t3 instanceof Fe ? [t3.getScopeData(), t3.getRequestSession()] : K(t3) ? [e3, e3.requestSession] : [], { tags: i2, extra: o2, user: a2, contexts: s2, level: c2, fingerprint: u2 = [], propagationContext: l2 } = n3 || {};
                return this._tags = { ...this._tags, ...i2 }, this._extra = { ...this._extra, ...o2 }, this._contexts = { ...this._contexts, ...s2 }, a2 && Object.keys(a2).length && (this._user = a2), c2 && (this._level = c2), u2.length && (this._fingerprint = u2), l2 && (this._propagationContext = l2), r2 && (this._requestSession = r2), this;
              }
              clear() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, je(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: Ie() }), this._notifyScopeListeners(), this;
              }
              addBreadcrumb(e3, t3) {
                const n3 = "number" == typeof t3 ? t3 : 100;
                if (n3 <= 0) return this;
                const r2 = { timestamp: Ae(), ...e3 };
                return this._breadcrumbs.push(r2), this._breadcrumbs.length > n3 && (this._breadcrumbs = this._breadcrumbs.slice(-n3), this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
              }
              getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1];
              }
              clearBreadcrumbs() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this;
              }
              addAttachment(e3) {
                return this._attachments.push(e3), this;
              }
              clearAttachments() {
                return this._attachments = [], this;
              }
              getScopeData() {
                return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: Re(this) };
              }
              setSDKProcessingMetadata(e3) {
                return this._sdkProcessingMetadata = De(this._sdkProcessingMetadata, e3, 2), this;
              }
              setPropagationContext(e3) {
                return this._propagationContext = { spanId: Le(), ...e3 }, this;
              }
              getPropagationContext() {
                return this._propagationContext;
              }
              captureException(e3, t3) {
                const n3 = t3 && t3.event_id ? t3.event_id : ge();
                if (!this._client) return F.warn("No client configured on scope - will not capture exception!"), n3;
                const r2 = new Error("Sentry syntheticException");
                return this._client.captureException(e3, { originalException: e3, syntheticException: r2, ...t3, event_id: n3 }, this), n3;
              }
              captureMessage(e3, t3, n3) {
                const r2 = n3 && n3.event_id ? n3.event_id : ge();
                if (!this._client) return F.warn("No client configured on scope - will not capture message!"), r2;
                const i2 = new Error(e3);
                return this._client.captureMessage(e3, t3, { originalException: e3, syntheticException: i2, ...n3, event_id: r2 }, this), r2;
              }
              captureEvent(e3, t3) {
                const n3 = t3 && t3.event_id ? t3.event_id : ge();
                return this._client ? (this._client.captureEvent(e3, { ...t3, event_id: n3 }, this), n3) : (F.warn("No client configured on scope - will not capture event!"), n3);
              }
              _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach(((e3) => {
                  e3(this);
                })), this._notifyingListeners = false);
              }
            }
            const Fe = xe;
            class Ve {
              constructor(e3, t3) {
                let n3, r2;
                n3 = e3 || new Fe(), r2 = t3 || new Fe(), this._stack = [{ scope: n3 }], this._isolationScope = r2;
              }
              withScope(e3) {
                const t3 = this._pushScope();
                let n3;
                try {
                  n3 = e3(t3);
                } catch (e4) {
                  throw this._popScope(), e4;
                }
                return X(n3) ? n3.then(((e4) => (this._popScope(), e4)), ((e4) => {
                  throw this._popScope(), e4;
                })) : (this._popScope(), n3);
              }
              getClient() {
                return this.getStackTop().client;
              }
              getScope() {
                return this.getStackTop().scope;
              }
              getIsolationScope() {
                return this._isolationScope;
              }
              getStackTop() {
                return this._stack[this._stack.length - 1];
              }
              _pushScope() {
                const e3 = this.getScope().clone();
                return this._stack.push({ client: this.getClient(), scope: e3 }), e3;
              }
              _popScope() {
                return !(this._stack.length <= 1 || !this._stack.pop());
              }
            }
            function Ue() {
              const e3 = Me(Te());
              return e3.stack = e3.stack || new Ve(N("defaultCurrentScope", (() => new Fe())), N("defaultIsolationScope", (() => new Fe())));
            }
            function Be(e3) {
              return Ue().withScope(e3);
            }
            function Je(e3, t3) {
              const n3 = Ue();
              return n3.withScope((() => (n3.getStackTop().scope = e3, t3(e3))));
            }
            function Ye(e3) {
              return Ue().withScope((() => e3(Ue().getIsolationScope())));
            }
            function $e(e3) {
              const t3 = Me(e3);
              return t3.acs ? t3.acs : { withIsolationScope: Ye, withScope: Be, withSetScope: Je, withSetIsolationScope: (e4, t4) => Ye(t4), getCurrentScope: () => Ue().getScope(), getIsolationScope: () => Ue().getIsolationScope() };
            }
            function qe() {
              return $e(Te()).getCurrentScope();
            }
            function We() {
              return $e(Te()).getIsolationScope();
            }
            function Ge() {
              return qe().getClient();
            }
            function ze(e3) {
              const t3 = e3.getPropagationContext(), { traceId: n3, spanId: r2, parentSpanId: i2 } = t3;
              return he({ trace_id: n3, span_id: r2, parent_span_id: i2 });
            }
            let He;
            const Ke = /* @__PURE__ */ new WeakMap(), Qe = () => ({ name: "FunctionToString", setupOnce() {
              He = Function.prototype.toString;
              try {
                Function.prototype.toString = function(...e3) {
                  const t3 = le(this), n3 = Ke.has(Ge()) && void 0 !== t3 ? t3 : this;
                  return He.apply(n3, e3);
                };
              } catch (e3) {
              }
            }, setup(e3) {
              Ke.set(e3, true);
            } }), Xe = "?", Ze = /\(error: (.*)\)/, et = /captureMessage|captureException/;
            function tt(e3) {
              return e3[e3.length - 1] || {};
            }
            const nt = "<anonymous>";
            function rt(e3) {
              try {
                return e3 && "function" == typeof e3 && e3.name || nt;
              } catch (e4) {
                return nt;
              }
            }
            function it(e3) {
              const t3 = e3.exception;
              if (t3) {
                const e4 = [];
                try {
                  return t3.values.forEach(((t4) => {
                    t4.stacktrace.frames && e4.push(...t4.stacktrace.frames);
                  })), e4;
                } catch (e5) {
                  return;
                }
              }
            }
            const ot = () => {
              let e3;
              return { name: "Dedupe", processEvent(t3) {
                if (t3.type) return t3;
                try {
                  if ((function(e4, t4) {
                    return !!t4 && (!!(function(e5, t5) {
                      const n3 = e5.message, r2 = t5.message;
                      return !(!n3 && !r2) && (!(n3 && !r2 || !n3 && r2) && (n3 === r2 && (!!st(e5, t5) && !!at(e5, t5))));
                    })(e4, t4) || !!(function(e5, t5) {
                      const n3 = ct(t5), r2 = ct(e5);
                      return !(!n3 || !r2) && (n3.type === r2.type && n3.value === r2.value && (!!st(e5, t5) && !!at(e5, t5)));
                    })(e4, t4));
                  })(t3, e3)) return P && F.warn("Event dropped due to being a duplicate of previously captured event."), null;
                } catch (e4) {
                }
                return e3 = t3;
              } };
            };
            function at(e3, t3) {
              let n3 = it(e3), r2 = it(t3);
              if (!n3 && !r2) return true;
              if (n3 && !r2 || !n3 && r2) return false;
              if (r2.length !== n3.length) return false;
              for (let e4 = 0; e4 < r2.length; e4++) {
                const t4 = r2[e4], i2 = n3[e4];
                if (t4.filename !== i2.filename || t4.lineno !== i2.lineno || t4.colno !== i2.colno || t4.function !== i2.function) return false;
              }
              return true;
            }
            function st(e3, t3) {
              let n3 = e3.fingerprint, r2 = t3.fingerprint;
              if (!n3 && !r2) return true;
              if (n3 && !r2 || !n3 && r2) return false;
              try {
                return !(n3.join("") !== r2.join(""));
              } catch (e4) {
                return false;
              }
            }
            function ct(e3) {
              return e3.exception && e3.exception.values && e3.exception.values[0];
            }
            const ut = {}, lt = {};
            function dt(e3, t3) {
              ut[e3] = ut[e3] || [], ut[e3].push(t3);
            }
            function ft(e3, t3) {
              if (!lt[e3]) {
                lt[e3] = true;
                try {
                  t3();
                } catch (t4) {
                  I && F.error(`Error while instrumenting ${e3}`, t4);
                }
              }
            }
            function pt(e3, t3) {
              const n3 = e3 && ut[e3];
              if (n3) for (const r2 of n3) try {
                r2(t3);
              } catch (t4) {
                I && F.error(`Error while triggering instrumentation handler.
Type: ${e3}
Name: ${rt(r2)}
Error:`, t4);
              }
            }
            const ht = D;
            let vt, gt, mt;
            function yt() {
              if (!ht.document) return;
              const e3 = pt.bind(null, "dom"), t3 = _t(e3, true);
              ht.document.addEventListener("click", t3, false), ht.document.addEventListener("keypress", t3, false), ["EventTarget", "Node"].forEach(((t4) => {
                const n3 = ht[t4], r2 = n3 && n3.prototype;
                r2 && r2.hasOwnProperty && r2.hasOwnProperty("addEventListener") && (se(r2, "addEventListener", (function(t5) {
                  return function(n4, r3, i2) {
                    if ("click" === n4 || "keypress" == n4) try {
                      const r4 = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, o2 = r4[n4] = r4[n4] || { refCount: 0 };
                      if (!o2.handler) {
                        const r5 = _t(e3);
                        o2.handler = r5, t5.call(this, n4, r5, i2);
                      }
                      o2.refCount++;
                    } catch (e4) {
                    }
                    return t5.call(this, n4, r3, i2);
                  };
                })), se(r2, "removeEventListener", (function(e4) {
                  return function(t5, n4, r3) {
                    if ("click" === t5 || "keypress" == t5) try {
                      const n5 = this.__sentry_instrumentation_handlers__ || {}, i2 = n5[t5];
                      i2 && (i2.refCount--, i2.refCount <= 0 && (e4.call(this, t5, i2.handler, r3), i2.handler = void 0, delete n5[t5]), 0 === Object.keys(n5).length && delete this.__sentry_instrumentation_handlers__);
                    } catch (e5) {
                    }
                    return e4.call(this, t5, n4, r3);
                  };
                })));
              }));
            }
            function _t(e3, t3 = false) {
              return (n3) => {
                if (!n3 || n3._sentryCaptured) return;
                const r2 = (function(e4) {
                  try {
                    return e4.target;
                  } catch (e5) {
                    return null;
                  }
                })(n3);
                if ((function(e4, t4) {
                  return "keypress" === e4 && (!t4 || !t4.tagName || "INPUT" !== t4.tagName && "TEXTAREA" !== t4.tagName && !t4.isContentEditable);
                })(n3.type, r2)) return;
                ce(n3, "_sentryCaptured", true), r2 && !r2._sentryId && ce(r2, "_sentryId", ge());
                const i2 = "keypress" === n3.type ? "input" : n3.type;
                (function(e4) {
                  if (e4.type !== gt) return false;
                  try {
                    if (!e4.target || e4.target._sentryId !== mt) return false;
                  } catch (e5) {
                  }
                  return true;
                })(n3) || (e3({ event: n3, name: i2, global: t3 }), gt = n3.type, mt = r2 ? r2._sentryId : void 0), clearTimeout(vt), vt = ht.setTimeout((() => {
                  mt = void 0, gt = void 0;
                }), 1e3);
              };
            }
            const bt = "__sentry_xhr_v3__";
            function St() {
              if (!ht.XMLHttpRequest) return;
              const e3 = XMLHttpRequest.prototype;
              e3.open = new Proxy(e3.open, { apply(e4, t3, n3) {
                const r2 = new Error(), i2 = 1e3 * Ce(), o2 = G(n3[0]) ? n3[0].toUpperCase() : void 0, a2 = (function(e5) {
                  if (G(e5)) return e5;
                  try {
                    return e5.toString();
                  } catch (e6) {
                  }
                })(n3[1]);
                if (!o2 || !a2) return e4.apply(t3, n3);
                t3[bt] = { method: o2, url: a2, request_headers: {} }, "POST" === o2 && a2.match(/sentry_key/) && (t3.__sentry_own_request__ = true);
                const s2 = () => {
                  const e5 = t3[bt];
                  if (e5 && 4 === t3.readyState) {
                    try {
                      e5.status_code = t3.status;
                    } catch (e6) {
                    }
                    pt("xhr", { endTimestamp: 1e3 * Ce(), startTimestamp: i2, xhr: t3, virtualError: r2 });
                  }
                };
                return "onreadystatechange" in t3 && "function" == typeof t3.onreadystatechange ? t3.onreadystatechange = new Proxy(t3.onreadystatechange, { apply(e5, t4, n4) {
                  return s2(), e5.apply(t4, n4);
                } }) : t3.addEventListener("readystatechange", s2), t3.setRequestHeader = new Proxy(t3.setRequestHeader, { apply(e5, t4, n4) {
                  const [r3, i3] = n4, o3 = t4[bt];
                  return o3 && G(r3) && G(i3) && (o3.request_headers[r3.toLowerCase()] = i3), e5.apply(t4, n4);
                } }), e4.apply(t3, n3);
              } }), e3.send = new Proxy(e3.send, { apply(e4, t3, n3) {
                const r2 = t3[bt];
                return r2 ? (void 0 !== n3[0] && (r2.body = n3[0]), pt("xhr", { startTimestamp: 1e3 * Ce(), xhr: t3 }), e4.apply(t3, n3)) : e4.apply(t3, n3);
              } });
            }
            const wt = D;
            let kt;
            function Et(e3) {
              const t3 = "history";
              dt(t3, e3), ft(t3, Tt);
            }
            function Tt() {
              if (!(function() {
                const e4 = wt.chrome, t4 = e4 && e4.app && e4.app.runtime, n3 = "history" in wt && !!wt.history.pushState && !!wt.history.replaceState;
                return !t4 && n3;
              })()) return;
              const e3 = ht.onpopstate;
              function t3(e4) {
                return function(...t4) {
                  const n3 = t4.length > 2 ? t4[2] : void 0;
                  if (n3) {
                    const e5 = kt, t5 = String(n3);
                    kt = t5, pt("history", { from: e5, to: t5 });
                  }
                  return e4.apply(this, t4);
                };
              }
              ht.onpopstate = function(...t4) {
                const n3 = ht.location.href, r2 = kt;
                if (kt = n3, pt("history", { from: r2, to: n3 }), e3) try {
                  return e3.apply(this, t4);
                } catch (e4) {
                }
              }, se(ht.history, "pushState", t3), se(ht.history, "replaceState", t3);
            }
            function Mt() {
              "console" in D && j.forEach((function(e3) {
                e3 in D.console && se(D.console, e3, (function(t3) {
                  return R[e3] = t3, function(...t4) {
                    pt("console", { args: t4, level: e3 });
                    const n3 = R[e3];
                    n3 && n3.apply(D.console, t4);
                  };
                }));
              }));
            }
            const At = D;
            function Ct(e3) {
              return e3 && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e3.toString());
            }
            function Ot(e3, t3 = false) {
              t3 && !(function() {
                if ("string" == typeof EdgeRuntime) return true;
                if (!(function() {
                  if (!("fetch" in At)) return false;
                  try {
                    return new Headers(), new Request("http://www.example.com"), new Response(), true;
                  } catch (e5) {
                    return false;
                  }
                })()) return false;
                if (Ct(At.fetch)) return true;
                let e4 = false;
                const t4 = At.document;
                if (t4 && "function" == typeof t4.createElement) try {
                  const n3 = t4.createElement("iframe");
                  n3.hidden = true, t4.head.appendChild(n3), n3.contentWindow && n3.contentWindow.fetch && (e4 = Ct(n3.contentWindow.fetch)), t4.head.removeChild(n3);
                } catch (e5) {
                  I && F.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e5);
                }
                return e4;
              })() || se(D, "fetch", (function(t4) {
                return function(...n3) {
                  const r2 = new Error(), { method: i2, url: o2 } = (function(e4) {
                    if (0 === e4.length) return { method: "GET", url: "" };
                    if (2 === e4.length) {
                      const [t6, n4] = e4;
                      return { url: It(t6), method: Pt(n4, "method") ? String(n4.method).toUpperCase() : "GET" };
                    }
                    const t5 = e4[0];
                    return { url: It(t5), method: Pt(t5, "method") ? String(t5.method).toUpperCase() : "GET" };
                  })(n3), a2 = { args: n3, fetchData: { method: i2, url: o2 }, startTimestamp: 1e3 * Ce(), virtualError: r2 };
                  return e3 || pt("fetch", { ...a2 }), t4.apply(D, n3).then((async (t5) => (e3 ? e3(t5) : pt("fetch", { ...a2, endTimestamp: 1e3 * Ce(), response: t5 }), t5)), ((e4) => {
                    throw pt("fetch", { ...a2, endTimestamp: 1e3 * Ce(), error: e4 }), Y(e4) && void 0 === e4.stack && (e4.stack = r2.stack, ce(e4, "framesToPop", 1)), e4;
                  }));
                };
              }));
            }
            function Pt(e3, t3) {
              return !!e3 && "object" == typeof e3 && !!e3[t3];
            }
            function It(e3) {
              return "string" == typeof e3 ? e3 : e3 ? Pt(e3, "url") ? e3.url : e3.toString ? e3.toString() : "" : "";
            }
            const Lt = 100;
            function Dt(e3, t3) {
              const n3 = Ge(), r2 = We();
              if (!n3) return;
              const { beforeBreadcrumb: i2 = null, maxBreadcrumbs: o2 = Lt } = n3.getOptions();
              if (o2 <= 0) return;
              const a2 = { timestamp: Ae(), ...e3 }, s2 = i2 ? x((() => i2(a2, t3))) : a2;
              null !== s2 && (n3.emit && n3.emit("beforeAddBreadcrumb", s2, t3), r2.addBreadcrumb(s2, o2));
            }
            function Nt(e3) {
              return void 0 === e3 ? void 0 : e3 >= 400 && e3 < 500 ? "warning" : e3 >= 500 ? "error" : void 0;
            }
            function jt(e3) {
              if (!e3) return {};
              const t3 = e3.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
              if (!t3) return {};
              const n3 = t3[6] || "", r2 = t3[8] || "";
              return { host: t3[4], path: t3[5], protocol: t3[2], search: n3, hash: r2, relative: t3[5] + n3 + r2 };
            }
            const Rt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, xt = "production";
            var Ft;
            function Vt(e3) {
              return new Bt(((t3) => {
                t3(e3);
              }));
            }
            function Ut(e3) {
              return new Bt(((t3, n3) => {
                n3(e3);
              }));
            }
            !(function(e3) {
              e3[e3.PENDING = 0] = "PENDING", e3[e3.RESOLVED = 1] = "RESOLVED", e3[e3.REJECTED = 2] = "REJECTED";
            })(Ft || (Ft = {}));
            class Bt {
              constructor(e3) {
                Bt.prototype.__init.call(this), Bt.prototype.__init2.call(this), Bt.prototype.__init3.call(this), Bt.prototype.__init4.call(this), this._state = Ft.PENDING, this._handlers = [];
                try {
                  e3(this._resolve, this._reject);
                } catch (e4) {
                  this._reject(e4);
                }
              }
              then(e3, t3) {
                return new Bt(((n3, r2) => {
                  this._handlers.push([false, (t4) => {
                    if (e3) try {
                      n3(e3(t4));
                    } catch (e4) {
                      r2(e4);
                    }
                    else n3(t4);
                  }, (e4) => {
                    if (t3) try {
                      n3(t3(e4));
                    } catch (e5) {
                      r2(e5);
                    }
                    else r2(e4);
                  }]), this._executeHandlers();
                }));
              }
              catch(e3) {
                return this.then(((e4) => e4), e3);
              }
              finally(e3) {
                return new Bt(((t3, n3) => {
                  let r2, i2;
                  return this.then(((t4) => {
                    i2 = false, r2 = t4, e3 && e3();
                  }), ((t4) => {
                    i2 = true, r2 = t4, e3 && e3();
                  })).then((() => {
                    i2 ? n3(r2) : t3(r2);
                  }));
                }));
              }
              __init() {
                this._resolve = (e3) => {
                  this._setResult(Ft.RESOLVED, e3);
                };
              }
              __init2() {
                this._reject = (e3) => {
                  this._setResult(Ft.REJECTED, e3);
                };
              }
              __init3() {
                this._setResult = (e3, t3) => {
                  this._state === Ft.PENDING && (X(t3) ? t3.then(this._resolve, this._reject) : (this._state = e3, this._value = t3, this._executeHandlers()));
                };
              }
              __init4() {
                this._executeHandlers = () => {
                  if (this._state === Ft.PENDING) return;
                  const e3 = this._handlers.slice();
                  this._handlers = [], e3.forEach(((e4) => {
                    e4[0] || (this._state === Ft.RESOLVED && e4[1](this._value), this._state === Ft.REJECTED && e4[2](this._value), e4[0] = true);
                  }));
                };
              }
            }
            function Jt(e3, t3, n3, r2 = 0) {
              return new Bt(((i2, o2) => {
                const a2 = e3[r2];
                if (null === t3 || "function" != typeof a2) i2(t3);
                else {
                  const s2 = a2({ ...t3 }, n3);
                  P && a2.id && null === s2 && F.log(`Event processor "${a2.id}" dropped event`), X(s2) ? s2.then(((t4) => Jt(e3, t4, n3, r2 + 1).then(i2))).then(null, o2) : Jt(e3, s2, n3, r2 + 1).then(i2).then(null, o2);
                }
              }));
            }
            let Yt, $t, qt;
            function Wt(e3, t3 = 100, n3 = 1 / 0) {
              try {
                return zt("", e3, t3, n3);
              } catch (e4) {
                return { ERROR: `**non-serializable** (${e4})` };
              }
            }
            function Gt(e3, t3 = 3, n3 = 102400) {
              const r2 = Wt(e3, t3);
              return i2 = r2, (function(e4) {
                return ~-encodeURI(e4).split(/%..|./).length;
              })(JSON.stringify(i2)) > n3 ? Gt(e3, t3 - 1, n3) : r2;
              var i2;
            }
            function zt(e3, t3, n3 = 1 / 0, r2 = 1 / 0, i2 = /* @__PURE__ */ (function() {
              const e4 = "function" == typeof WeakSet, t4 = e4 ? /* @__PURE__ */ new WeakSet() : [];
              return [function(n4) {
                if (e4) return !!t4.has(n4) || (t4.add(n4), false);
                for (let e5 = 0; e5 < t4.length; e5++) if (t4[e5] === n4) return true;
                return t4.push(n4), false;
              }, function(n4) {
                if (e4) t4.delete(n4);
                else for (let e5 = 0; e5 < t4.length; e5++) if (t4[e5] === n4) {
                  t4.splice(e5, 1);
                  break;
                }
              }];
            })()) {
              const [o2, a2] = i2;
              if (null == t3 || ["boolean", "string"].includes(typeof t3) || "number" == typeof t3 && Number.isFinite(t3)) return t3;
              const s2 = (function(e4, t4) {
                try {
                  if ("domain" === e4 && t4 && "object" == typeof t4 && t4._events) return "[Domain]";
                  if ("domainEmitter" === e4) return "[DomainEmitter]";
                  if ("undefined" != typeof window && t4 === window) return "[Global]";
                  if ("undefined" != typeof window && t4 === window) return "[Window]";
                  if ("undefined" != typeof document && t4 === document) return "[Document]";
                  if (ee(t4)) return "[VueViewModel]";
                  if (K(n4 = t4) && "nativeEvent" in n4 && "preventDefault" in n4 && "stopPropagation" in n4) return "[SyntheticEvent]";
                  if ("number" == typeof t4 && !Number.isFinite(t4)) return `[${t4}]`;
                  if ("function" == typeof t4) return `[Function: ${rt(t4)}]`;
                  if ("symbol" == typeof t4) return `[${String(t4)}]`;
                  if ("bigint" == typeof t4) return `[BigInt: ${String(t4)}]`;
                  const r3 = (function(e5) {
                    const t5 = Object.getPrototypeOf(e5);
                    return t5 ? t5.constructor.name : "null prototype";
                  })(t4);
                  return /^HTML(\w*)Element$/.test(r3) ? `[HTMLElement: ${r3}]` : `[object ${r3}]`;
                } catch (e5) {
                  return `**non-serializable** (${e5})`;
                }
                var n4;
              })(e3, t3);
              if (!s2.startsWith("[object ")) return s2;
              if (t3.__sentry_skip_normalization__) return t3;
              const c2 = "number" == typeof t3.__sentry_override_normalization_depth__ ? t3.__sentry_override_normalization_depth__ : n3;
              if (0 === c2) return s2.replace("object ", "");
              if (o2(t3)) return "[Circular ~]";
              const u2 = t3;
              if (u2 && "function" == typeof u2.toJSON) try {
                return zt("", u2.toJSON(), c2 - 1, r2, i2);
              } catch (e4) {
              }
              const l2 = Array.isArray(t3) ? [] : {};
              let d2 = 0;
              const f2 = de(t3);
              for (const e4 in f2) {
                if (!Object.prototype.hasOwnProperty.call(f2, e4)) continue;
                if (d2 >= r2) {
                  l2[e4] = "[MaxProperties ~]";
                  break;
                }
                const t4 = f2[e4];
                l2[e4] = zt(e4, t4, c2 - 1, r2, i2), d2++;
              }
              return a2(t3), l2;
            }
            const Ht = /^sentry-/;
            function Kt(e3) {
              return e3.split(",").map(((e4) => e4.split("=").map(((e5) => decodeURIComponent(e5.trim()))))).reduce(((e4, [t3, n3]) => (t3 && n3 && (e4[t3] = n3), e4)), {});
            }
            function Qt(e3) {
              const t3 = e3._sentryMetrics;
              if (!t3) return;
              const n3 = {};
              for (const [, [e4, r2]] of t3) (n3[e4] || (n3[e4] = [])).push(he(r2));
              return n3;
            }
            let Xt = false;
            function Zt(e3) {
              const { spanId: t3, traceId: n3, isRemote: r2 } = e3.spanContext();
              return he({ parent_span_id: r2 ? t3 : nn(e3).parent_span_id, span_id: r2 ? Le() : t3, trace_id: n3 });
            }
            function en(e3) {
              return "number" == typeof e3 ? tn(e3) : Array.isArray(e3) ? e3[0] + e3[1] / 1e9 : e3 instanceof Date ? tn(e3.getTime()) : Ce();
            }
            function tn(e3) {
              return e3 > 9999999999 ? e3 / 1e3 : e3;
            }
            function nn(e3) {
              if ((function(e4) {
                return "function" == typeof e4.getSpanJSON;
              })(e3)) return e3.getSpanJSON();
              try {
                const { spanId: t3, traceId: n3 } = e3.spanContext();
                if ((function(e4) {
                  const t4 = e4;
                  return !!(t4.attributes && t4.startTime && t4.name && t4.endTime && t4.status);
                })(e3)) {
                  const { attributes: r2, startTime: i2, name: o2, endTime: a2, parentSpanId: s2, status: c2 } = e3;
                  return he({ span_id: t3, trace_id: n3, data: r2, description: o2, parent_span_id: s2, start_timestamp: en(i2), timestamp: en(a2) || void 0, status: rn(c2), op: r2["sentry.op"], origin: r2["sentry.origin"], _metrics_summary: Qt(e3) });
                }
                return { span_id: t3, trace_id: n3 };
              } catch (e4) {
                return {};
              }
            }
            function rn(e3) {
              if (e3 && 0 !== e3.code) return 1 === e3.code ? "ok" : e3.message || "unknown_error";
            }
            function on(e3) {
              return e3._sentryRootSpan || e3;
            }
            function an(e3, t3) {
              const n3 = t3.getOptions(), { publicKey: r2 } = t3.getDsn() || {}, i2 = he({ environment: n3.environment || xt, release: n3.release, public_key: r2, trace_id: e3 });
              return t3.emit("createDsc", i2), i2;
            }
            function sn(e3) {
              const t3 = Ge();
              if (!t3) return {};
              const n3 = on(e3), r2 = n3._frozenDsc;
              if (r2) return r2;
              const i2 = n3.spanContext().traceState, o2 = i2 && i2.get("sentry.dsc"), a2 = o2 && (function(e4) {
                const t4 = (function(e5) {
                  if (e5 && (G(e5) || Array.isArray(e5))) return Array.isArray(e5) ? e5.reduce(((e6, t5) => {
                    const n5 = Kt(t5);
                    return Object.entries(n5).forEach((([t6, n6]) => {
                      e6[t6] = n6;
                    })), e6;
                  }), {}) : Kt(e5);
                })(e4);
                if (!t4) return;
                const n4 = Object.entries(t4).reduce(((e5, [t5, n5]) => (t5.match(Ht) && (e5[t5.slice(7)] = n5), e5)), {});
                return Object.keys(n4).length > 0 ? n4 : void 0;
              })(o2);
              if (a2) return a2;
              const s2 = an(e3.spanContext().traceId, t3), c2 = nn(n3), u2 = c2.data || {}, l2 = u2["sentry.sample_rate"];
              null != l2 && (s2.sample_rate = `${l2}`);
              const d2 = u2["sentry.source"], f2 = c2.description;
              return "url" !== d2 && f2 && (s2.transaction = f2), (function() {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return false;
                const e4 = Ge(), t4 = e4 && e4.getOptions();
                return !!t4 && (t4.enableTracing || "tracesSampleRate" in t4 || "tracesSampler" in t4);
              })() && (s2.sampled = String((function(e4) {
                const { traceFlags: t4 } = e4.spanContext();
                return 1 === t4;
              })(n3))), t3.emit("createDsc", s2, n3), s2;
            }
            function cn(e3, t3) {
              const { extra: n3, tags: r2, user: i2, contexts: o2, level: a2, sdkProcessingMetadata: s2, breadcrumbs: c2, fingerprint: u2, eventProcessors: l2, attachments: d2, propagationContext: f2, transactionName: p2, span: h2 } = t3;
              un(e3, "extra", n3), un(e3, "tags", r2), un(e3, "user", i2), un(e3, "contexts", o2), e3.sdkProcessingMetadata = De(e3.sdkProcessingMetadata, s2, 2), a2 && (e3.level = a2), p2 && (e3.transactionName = p2), h2 && (e3.span = h2), c2.length && (e3.breadcrumbs = [...e3.breadcrumbs, ...c2]), u2.length && (e3.fingerprint = [...e3.fingerprint, ...u2]), l2.length && (e3.eventProcessors = [...e3.eventProcessors, ...l2]), d2.length && (e3.attachments = [...e3.attachments, ...d2]), e3.propagationContext = { ...e3.propagationContext, ...f2 };
            }
            function un(e3, t3, n3) {
              e3[t3] = De(e3[t3], n3, 1);
            }
            function ln(e3, t3, n3, r2, i2, o2) {
              const { normalizeDepth: a2 = 3, normalizeMaxBreadth: s2 = 1e3 } = e3, c2 = { ...t3, event_id: t3.event_id || n3.event_id || ge(), timestamp: t3.timestamp || Ae() }, u2 = n3.integrations || e3.integrations.map(((e4) => e4.name));
              !(function(e4, t4) {
                const { environment: n4, release: r3, dist: i3, maxValueLength: o3 = 250 } = t4;
                e4.environment = e4.environment || n4 || xt, !e4.release && r3 && (e4.release = r3), !e4.dist && i3 && (e4.dist = i3), e4.message && (e4.message = ie(e4.message, o3));
                const a3 = e4.exception && e4.exception.values && e4.exception.values[0];
                a3 && a3.value && (a3.value = ie(a3.value, o3));
                const s3 = e4.request;
                s3 && s3.url && (s3.url = ie(s3.url, o3));
              })(c2, e3), (function(e4, t4) {
                t4.length > 0 && (e4.sdk = e4.sdk || {}, e4.sdk.integrations = [...e4.sdk.integrations || [], ...t4]);
              })(c2, u2), i2 && i2.emit("applyFrameMetadata", t3), void 0 === t3.type && (function(e4, t4) {
                const n4 = (function(e5) {
                  const t5 = D._sentryDebugIds;
                  if (!t5) return {};
                  const n5 = Object.keys(t5);
                  return qt && n5.length === $t || ($t = n5.length, qt = n5.reduce(((n6, r3) => {
                    Yt || (Yt = {});
                    const i3 = Yt[r3];
                    if (i3) n6[i3[0]] = i3[1];
                    else {
                      const i4 = e5(r3);
                      for (let e6 = i4.length - 1; e6 >= 0; e6--) {
                        const o3 = i4[e6], a3 = o3 && o3.filename, s3 = t5[r3];
                        if (a3 && s3) {
                          n6[a3] = s3, Yt[r3] = [a3, s3];
                          break;
                        }
                      }
                    }
                    return n6;
                  }), {})), qt;
                })(t4);
                try {
                  e4.exception.values.forEach(((e5) => {
                    e5.stacktrace.frames.forEach(((e6) => {
                      n4 && e6.filename && (e6.debug_id = n4[e6.filename]);
                    }));
                  }));
                } catch (e5) {
                }
              })(c2, e3.stackParser);
              const l2 = (function(e4, t4) {
                if (!t4) return e4;
                const n4 = e4 ? e4.clone() : new Fe();
                return n4.update(t4), n4;
              })(r2, n3.captureContext);
              n3.mechanism && be(c2, n3.mechanism);
              const d2 = i2 ? i2.getEventProcessors() : [], f2 = N("globalScope", (() => new Fe())).getScopeData();
              o2 && cn(f2, o2.getScopeData()), l2 && cn(f2, l2.getScopeData());
              const p2 = [...n3.attachments || [], ...f2.attachments];
              return p2.length && (n3.attachments = p2), (function(e4, t4) {
                const { fingerprint: n4, span: r3, breadcrumbs: i3, sdkProcessingMetadata: o3 } = t4;
                !(function(e5, t5) {
                  const { extra: n5, tags: r4, user: i4, contexts: o4, level: a3, transactionName: s3 } = t5, c3 = he(n5);
                  c3 && Object.keys(c3).length && (e5.extra = { ...c3, ...e5.extra });
                  const u3 = he(r4);
                  u3 && Object.keys(u3).length && (e5.tags = { ...u3, ...e5.tags });
                  const l3 = he(i4);
                  l3 && Object.keys(l3).length && (e5.user = { ...l3, ...e5.user });
                  const d3 = he(o4);
                  d3 && Object.keys(d3).length && (e5.contexts = { ...d3, ...e5.contexts }), a3 && (e5.level = a3), s3 && "transaction" !== e5.type && (e5.transaction = s3);
                })(e4, t4), r3 && (function(e5, t5) {
                  e5.contexts = { trace: Zt(t5), ...e5.contexts }, e5.sdkProcessingMetadata = { dynamicSamplingContext: sn(t5), ...e5.sdkProcessingMetadata };
                  const n5 = nn(on(t5)).description;
                  n5 && !e5.transaction && "transaction" === e5.type && (e5.transaction = n5);
                })(e4, r3), (function(e5, t5) {
                  e5.fingerprint = e5.fingerprint ? Array.isArray(e5.fingerprint) ? e5.fingerprint : [e5.fingerprint] : [], t5 && (e5.fingerprint = e5.fingerprint.concat(t5)), e5.fingerprint && !e5.fingerprint.length && delete e5.fingerprint;
                })(e4, n4), (function(e5, t5) {
                  const n5 = [...e5.breadcrumbs || [], ...t5];
                  e5.breadcrumbs = n5.length ? n5 : void 0;
                })(e4, i3), (function(e5, t5) {
                  e5.sdkProcessingMetadata = { ...e5.sdkProcessingMetadata, ...t5 };
                })(e4, o3);
              })(c2, f2), Jt([...d2, ...f2.eventProcessors], c2, n3).then(((e4) => (e4 && (function(e5) {
                const t4 = {};
                try {
                  e5.exception.values.forEach(((e6) => {
                    e6.stacktrace.frames.forEach(((e7) => {
                      e7.debug_id && (e7.abs_path ? t4[e7.abs_path] = e7.debug_id : e7.filename && (t4[e7.filename] = e7.debug_id), delete e7.debug_id);
                    }));
                  }));
                } catch (e6) {
                }
                if (0 === Object.keys(t4).length) return;
                e5.debug_meta = e5.debug_meta || {}, e5.debug_meta.images = e5.debug_meta.images || [];
                const n4 = e5.debug_meta.images;
                Object.entries(t4).forEach((([e6, t5]) => {
                  n4.push({ type: "sourcemap", code_file: e6, debug_id: t5 });
                }));
              })(e4), "number" == typeof a2 && a2 > 0 ? (function(e5, t4, n4) {
                if (!e5) return null;
                const r3 = { ...e5, ...e5.breadcrumbs && { breadcrumbs: e5.breadcrumbs.map(((e6) => ({ ...e6, ...e6.data && { data: Wt(e6.data, t4, n4) } }))) }, ...e5.user && { user: Wt(e5.user, t4, n4) }, ...e5.contexts && { contexts: Wt(e5.contexts, t4, n4) }, ...e5.extra && { extra: Wt(e5.extra, t4, n4) } };
                return e5.contexts && e5.contexts.trace && r3.contexts && (r3.contexts.trace = e5.contexts.trace, e5.contexts.trace.data && (r3.contexts.trace.data = Wt(e5.contexts.trace.data, t4, n4))), e5.spans && (r3.spans = e5.spans.map(((e6) => ({ ...e6, ...e6.data && { data: Wt(e6.data, t4, n4) } })))), e5.contexts && e5.contexts.flags && r3.contexts && (r3.contexts.flags = Wt(e5.contexts.flags, 3, n4)), r3;
              })(e4, a2, s2) : e4)));
            }
            const dn = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
            function fn(e3, t3) {
              return qe().captureEvent(e3, t3);
            }
            function pn(e3) {
              const t3 = Ge(), n3 = We(), r2 = qe(), { release: i2, environment: o2 = xt } = t3 && t3.getOptions() || {}, { userAgent: a2 } = D.navigator || {}, s2 = (function(e4) {
                const t4 = Ce(), n4 = { sid: ge(), init: true, timestamp: t4, started: t4, duration: 0, status: "ok", errors: 0, ignoreDuration: false, toJSON: () => (function(e5) {
                  return he({ sid: `${e5.sid}`, init: e5.init, started: new Date(1e3 * e5.started).toISOString(), timestamp: new Date(1e3 * e5.timestamp).toISOString(), status: e5.status, errors: e5.errors, did: "number" == typeof e5.did || "string" == typeof e5.did ? `${e5.did}` : void 0, duration: e5.duration, abnormal_mechanism: e5.abnormal_mechanism, attrs: { release: e5.release, environment: e5.environment, ip_address: e5.ipAddress, user_agent: e5.userAgent } });
                })(n4) };
                return e4 && Pe(n4, e4), n4;
              })({ release: i2, environment: o2, user: r2.getUser() || n3.getUser(), ...a2 && { userAgent: a2 }, ...e3 }), c2 = n3.getSession();
              return c2 && "ok" === c2.status && Pe(c2, { status: "exited" }), hn(), n3.setSession(s2), r2.setSession(s2), s2;
            }
            function hn() {
              const e3 = We(), t3 = qe(), n3 = t3.getSession() || e3.getSession();
              n3 && (function(e4) {
                let t4 = {};
                "ok" === e4.status && (t4 = { status: "exited" }), Pe(e4, t4);
              })(n3), vn(), e3.setSession(), t3.setSession();
            }
            function vn() {
              const e3 = We(), t3 = qe(), n3 = Ge(), r2 = t3.getSession() || e3.getSession();
              r2 && n3 && n3.captureSession(r2);
            }
            function gn(e3 = false) {
              e3 ? hn() : vn();
            }
            const mn = D;
            let yn = 0;
            function _n() {
              return yn > 0;
            }
            function bn(e3, t3 = {}) {
              if (!/* @__PURE__ */ (function(e4) {
                return "function" == typeof e4;
              })(e3)) return e3;
              try {
                const t4 = e3.__sentry_wrapped__;
                if (t4) return "function" == typeof t4 ? t4 : e3;
                if (le(e3)) return e3;
              } catch (t4) {
                return e3;
              }
              const n3 = function(...n4) {
                try {
                  const r2 = n4.map(((e4) => bn(e4, t3)));
                  return e3.apply(this, r2);
                } catch (e4) {
                  throw yn++, setTimeout((() => {
                    yn--;
                  })), (function(...e5) {
                    const t4 = $e(Te());
                    if (2 === e5.length) {
                      const [n5, r2] = e5;
                      return n5 ? t4.withSetScope(n5, r2) : t4.withScope(r2);
                    }
                    t4.withScope(e5[0]);
                  })(((r2) => {
                    var i2;
                    r2.addEventProcessor(((e5) => (t3.mechanism && (_e(e5, void 0, void 0), be(e5, t3.mechanism)), e5.extra = { ...e5.extra, arguments: n4 }, e5))), i2 = e4, qe().captureException(i2, (function(e5) {
                      if (e5) return (function(e6) {
                        return e6 instanceof Fe || "function" == typeof e6;
                      })(e5) || (function(e6) {
                        return Object.keys(e6).some(((e7) => dn.includes(e7)));
                      })(e5) ? { captureContext: e5 } : e5;
                    })(void 0));
                  })), e4;
                }
              };
              try {
                for (const t4 in e3) Object.prototype.hasOwnProperty.call(e3, t4) && (n3[t4] = e3[t4]);
              } catch (e4) {
              }
              ue(n3, e3), ce(e3, "__sentry_wrapped__", n3);
              try {
                Object.getOwnPropertyDescriptor(n3, "name").configurable && Object.defineProperty(n3, "name", { get() {
                  return e3.name;
                } });
              } catch (e4) {
              }
              return n3;
            }
            const Sn = (e3 = {}) => {
              const t3 = { console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true, ...e3 };
              return { name: "Breadcrumbs", setup(e4) {
                var n3;
                t3.console && (function(e5) {
                  const t4 = "console";
                  dt(t4, e5), ft(t4, Mt);
                })(/* @__PURE__ */ (function(e5) {
                  return function(t4) {
                    if (Ge() !== e5) return;
                    const n4 = { category: "console", data: { arguments: t4.args, logger: "console" }, level: (r2 = t4.level, "warn" === r2 ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(r2) ? r2 : "log"), message: oe(t4.args, " ") };
                    var r2;
                    if ("assert" === t4.level) {
                      if (false !== t4.args[0]) return;
                      n4.message = `Assertion failed: ${oe(t4.args.slice(1), " ") || "console.assert"}`, n4.data.arguments = t4.args.slice(1);
                    }
                    Dt(n4, { input: t4.args, level: t4.level });
                  };
                })(e4)), t3.dom && (n3 = /* @__PURE__ */ (function(e5, t4) {
                  return function(n4) {
                    if (Ge() !== e5) return;
                    let r2, i2, o2 = "object" == typeof t4 ? t4.serializeAttribute : void 0, a2 = "object" == typeof t4 && "number" == typeof t4.maxStringLength ? t4.maxStringLength : void 0;
                    a2 && a2 > 1024 && (Rt && F.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a2} was configured. Sentry will use 1024 instead.`), a2 = 1024), "string" == typeof o2 && (o2 = [o2]);
                    try {
                      const e6 = n4.event, t5 = (function(e7) {
                        return !!e7 && !!e7.target;
                      })(e6) ? e6.target : e6;
                      r2 = ne(t5, { keyAttrs: o2, maxStringLength: a2 }), i2 = (function(e7) {
                        if (!te.HTMLElement) return null;
                        let t6 = e7;
                        for (let e8 = 0; e8 < 5; e8++) {
                          if (!t6) return null;
                          if (t6 instanceof HTMLElement) {
                            if (t6.dataset.sentryComponent) return t6.dataset.sentryComponent;
                            if (t6.dataset.sentryElement) return t6.dataset.sentryElement;
                          }
                          t6 = t6.parentNode;
                        }
                        return null;
                      })(t5);
                    } catch (e6) {
                      r2 = "<unknown>";
                    }
                    if (0 === r2.length) return;
                    const s2 = { category: `ui.${n4.name}`, message: r2 };
                    i2 && (s2.data = { "ui.component_name": i2 }), Dt(s2, { event: n4.event, name: n4.name, global: n4.global });
                  };
                })(e4, t3.dom), dt("dom", n3), ft("dom", yt)), t3.xhr && (function(e5) {
                  dt("xhr", e5), ft("xhr", St);
                })(/* @__PURE__ */ (function(e5) {
                  return function(t4) {
                    if (Ge() !== e5) return;
                    const { startTimestamp: n4, endTimestamp: r2 } = t4, i2 = t4.xhr[bt];
                    if (!n4 || !r2 || !i2) return;
                    const { method: o2, url: a2, status_code: s2, body: c2 } = i2, u2 = { method: o2, url: a2, status_code: s2 }, l2 = { xhr: t4.xhr, input: c2, startTimestamp: n4, endTimestamp: r2 };
                    Dt({ category: "xhr", data: u2, type: "http", level: Nt(s2) }, l2);
                  };
                })(e4)), t3.fetch && (function(e5) {
                  const t4 = "fetch";
                  dt(t4, e5), ft(t4, (() => Ot(void 0, void 0)));
                })(/* @__PURE__ */ (function(e5) {
                  return function(t4) {
                    if (Ge() !== e5) return;
                    const { startTimestamp: n4, endTimestamp: r2 } = t4;
                    if (r2 && (!t4.fetchData.url.match(/sentry_key/) || "POST" !== t4.fetchData.method)) if (t4.error) Dt({ category: "fetch", data: t4.fetchData, level: "error", type: "http" }, { data: t4.error, input: t4.args, startTimestamp: n4, endTimestamp: r2 });
                    else {
                      const e6 = t4.response, i2 = { ...t4.fetchData, status_code: e6 && e6.status }, o2 = { input: t4.args, response: e6, startTimestamp: n4, endTimestamp: r2 };
                      Dt({ category: "fetch", data: i2, type: "http", level: Nt(i2.status_code) }, o2);
                    }
                  };
                })(e4)), t3.history && Et(/* @__PURE__ */ (function(e5) {
                  return function(t4) {
                    if (Ge() !== e5) return;
                    let n4 = t4.from, r2 = t4.to;
                    const i2 = jt(mn.location.href);
                    let o2 = n4 ? jt(n4) : void 0;
                    const a2 = jt(r2);
                    o2 && o2.path || (o2 = i2), i2.protocol === a2.protocol && i2.host === a2.host && (r2 = a2.relative), i2.protocol === o2.protocol && i2.host === o2.host && (n4 = o2.relative), Dt({ category: "navigation", data: { from: n4, to: r2 } });
                  };
                })(e4)), t3.sentry && e4.on("beforeSendEvent", /* @__PURE__ */ (function(e5) {
                  return function(t4) {
                    Ge() === e5 && Dt({ category: "sentry." + ("transaction" === t4.type ? "transaction" : "event"), event_id: t4.event_id, level: t4.level, message: ye(t4) }, { event: t4 });
                  };
                })(e4));
              } };
            }, wn = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], kn = (e3 = {}) => {
              const t3 = { XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true, ...e3 };
              return { name: "BrowserApiErrors", setupOnce() {
                t3.setTimeout && se(mn, "setTimeout", En), t3.setInterval && se(mn, "setInterval", En), t3.requestAnimationFrame && se(mn, "requestAnimationFrame", Tn), t3.XMLHttpRequest && "XMLHttpRequest" in mn && se(XMLHttpRequest.prototype, "send", Mn);
                const e4 = t3.eventTarget;
                e4 && (Array.isArray(e4) ? e4 : wn).forEach(An);
              } };
            };
            function En(e3) {
              return function(...t3) {
                const n3 = t3[0];
                return t3[0] = bn(n3, { mechanism: { data: { function: rt(e3) }, handled: false, type: "instrument" } }), e3.apply(this, t3);
              };
            }
            function Tn(e3) {
              return function(t3) {
                return e3.apply(this, [bn(t3, { mechanism: { data: { function: "requestAnimationFrame", handler: rt(e3) }, handled: false, type: "instrument" } })]);
              };
            }
            function Mn(e3) {
              return function(...t3) {
                const n3 = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(((e4) => {
                  e4 in n3 && "function" == typeof n3[e4] && se(n3, e4, (function(t4) {
                    const n4 = { mechanism: { data: { function: e4, handler: rt(t4) }, handled: false, type: "instrument" } }, r2 = le(t4);
                    return r2 && (n4.mechanism.data.handler = rt(r2)), bn(t4, n4);
                  }));
                })), e3.apply(this, t3);
              };
            }
            function An(e3) {
              const t3 = mn[e3], n3 = t3 && t3.prototype;
              n3 && n3.hasOwnProperty && n3.hasOwnProperty("addEventListener") && (se(n3, "addEventListener", (function(t4) {
                return function(n4, r2, i2) {
                  try {
                    "function" == typeof r2.handleEvent && (r2.handleEvent = bn(r2.handleEvent, { mechanism: { data: { function: "handleEvent", handler: rt(r2), target: e3 }, handled: false, type: "instrument" } }));
                  } catch (e4) {
                  }
                  return t4.apply(this, [n4, bn(r2, { mechanism: { data: { function: "addEventListener", handler: rt(r2), target: e3 }, handled: false, type: "instrument" } }), i2]);
                };
              })), se(n3, "removeEventListener", (function(e4) {
                return function(t4, n4, r2) {
                  try {
                    const i2 = n4.__sentry_wrapped__;
                    i2 && e4.call(this, t4, i2, r2);
                  } catch (e5) {
                  }
                  return e4.call(this, t4, n4, r2);
                };
              })));
            }
            let Cn = null;
            function On() {
              Cn = D.onerror, D.onerror = function(e3, t3, n3, r2, i2) {
                return pt("error", { column: r2, error: i2, line: n3, msg: e3, url: t3 }), !!Cn && Cn.apply(this, arguments);
              }, D.onerror.__SENTRY_INSTRUMENTED__ = true;
            }
            let Pn = null;
            function In() {
              Pn = D.onunhandledrejection, D.onunhandledrejection = function(e3) {
                return pt("unhandledrejection", e3), !Pn || Pn.apply(this, arguments);
              }, D.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
            }
            function Ln(e3, t3) {
              const n3 = Nn(e3, t3), r2 = { type: xn(t3), value: Fn(t3) };
              return n3.length && (r2.stacktrace = { frames: n3 }), void 0 === r2.type && "" === r2.value && (r2.value = "Unrecoverable error caught"), r2;
            }
            function Dn(e3, t3) {
              return { exception: { values: [Ln(e3, t3)] } };
            }
            function Nn(e3, t3) {
              const n3 = t3.stacktrace || t3.stack || "", r2 = (function(e4) {
                return e4 && jn.test(e4.message) ? 1 : 0;
              })(t3), i2 = (function(e4) {
                return "number" == typeof e4.framesToPop ? e4.framesToPop : 0;
              })(t3);
              try {
                return e3(n3, r2, i2);
              } catch (e4) {
              }
              return [];
            }
            const jn = /Minified React error #\d+;/i;
            function Rn(e3) {
              return "undefined" != typeof WebAssembly && void 0 !== WebAssembly.Exception && e3 instanceof WebAssembly.Exception;
            }
            function xn(e3) {
              const t3 = e3 && e3.name;
              return !t3 && Rn(e3) ? e3.message && Array.isArray(e3.message) && 2 == e3.message.length ? e3.message[0] : "WebAssembly.Exception" : t3;
            }
            function Fn(e3) {
              const t3 = e3 && e3.message;
              return t3 ? t3.error && "string" == typeof t3.error.message ? t3.error.message : Rn(e3) && Array.isArray(e3.message) && 2 == e3.message.length ? e3.message[1] : t3 : "No error message";
            }
            function Vn(e3, t3, n3, r2, i2) {
              let o2;
              if (q(t3) && t3.error) return Dn(e3, t3.error);
              if (W(t3) || $(t3, "DOMException")) {
                const i3 = t3;
                if ("stack" in t3) o2 = Dn(e3, t3);
                else {
                  const t4 = i3.name || (W(i3) ? "DOMError" : "DOMException"), a2 = i3.message ? `${t4}: ${i3.message}` : t4;
                  o2 = Un(e3, a2, n3, r2), _e(o2, a2);
                }
                return "code" in i3 && (o2.tags = { ...o2.tags, "DOMException.code": `${i3.code}` }), o2;
              }
              return Y(t3) ? Dn(e3, t3) : K(t3) || Q(t3) ? (o2 = (function(e4, t4, n4, r3) {
                const i3 = Ge(), o3 = i3 && i3.getOptions().normalizeDepth, a2 = (function(e5) {
                  for (const t5 in e5) if (Object.prototype.hasOwnProperty.call(e5, t5)) {
                    const n5 = e5[t5];
                    if (n5 instanceof Error) return n5;
                  }
                })(t4), s2 = { __serialized__: Gt(t4, o3) };
                if (a2) return { exception: { values: [Ln(e4, a2)] }, extra: s2 };
                const c2 = { exception: { values: [{ type: Q(t4) ? t4.constructor.name : r3 ? "UnhandledRejection" : "Error", value: Bn(t4, { isUnhandledRejection: r3 }) }] }, extra: s2 };
                if (n4) {
                  const t5 = Nn(e4, n4);
                  t5.length && (c2.exception.values[0].stacktrace = { frames: t5 });
                }
                return c2;
              })(e3, t3, n3, i2), be(o2, { synthetic: true }), o2) : (o2 = Un(e3, t3, n3, r2), _e(o2, `${t3}`, void 0), be(o2, { synthetic: true }), o2);
            }
            function Un(e3, t3, n3, r2) {
              const i2 = {};
              if (r2 && n3) {
                const r3 = Nn(e3, n3);
                r3.length && (i2.exception = { values: [{ value: t3, stacktrace: { frames: r3 } }] }), be(i2, { synthetic: true });
              }
              if (z(t3)) {
                const { __sentry_template_string__: e4, __sentry_template_values__: n4 } = t3;
                return i2.logentry = { message: e4, params: n4 }, i2;
              }
              return i2.message = t3, i2;
            }
            function Bn(e3, { isUnhandledRejection: t3 }) {
              const n3 = (function(e4, t4 = 40) {
                const n4 = Object.keys(de(e4));
                n4.sort();
                const r3 = n4[0];
                if (!r3) return "[object has no keys]";
                if (r3.length >= t4) return ie(r3, t4);
                for (let e5 = n4.length; e5 > 0; e5--) {
                  const r4 = n4.slice(0, e5).join(", ");
                  if (!(r4.length > t4)) return e5 === n4.length ? r4 : ie(r4, t4);
                }
                return "";
              })(e3), r2 = t3 ? "promise rejection" : "exception";
              return q(e3) ? `Event \`ErrorEvent\` captured as ${r2} with message \`${e3.message}\`` : Q(e3) ? `Event \`${(function(e4) {
                try {
                  const t4 = Object.getPrototypeOf(e4);
                  return t4 ? t4.constructor.name : void 0;
                } catch (e5) {
                }
              })(e3)}\` (type=${e3.type}) captured as ${r2}` : `Object captured as ${r2} with keys: ${n3}`;
            }
            const Jn = (e3 = {}) => {
              const t3 = { onerror: true, onunhandledrejection: true, ...e3 };
              return { name: "GlobalHandlers", setupOnce() {
                Error.stackTraceLimit = 50;
              }, setup(e4) {
                t3.onerror && ((function(e5) {
                  !(function() {
                    const t4 = "error";
                    dt(t4, ((t5) => {
                      const { stackParser: n3, attachStacktrace: r2 } = $n();
                      if (Ge() !== e5 || _n()) return;
                      const { msg: i2, url: o2, line: a2, column: s2, error: c2 } = t5, u2 = (function(e6, t6, n4, r3) {
                        const i3 = e6.exception = e6.exception || {}, o3 = i3.values = i3.values || [], a3 = o3[0] = o3[0] || {}, s3 = a3.stacktrace = a3.stacktrace || {}, c3 = s3.frames = s3.frames || [], u3 = r3, l2 = n4, d2 = G(t6) && t6.length > 0 ? t6 : (function() {
                          try {
                            return te.document.location.href;
                          } catch (e7) {
                            return "";
                          }
                        })();
                        return 0 === c3.length && c3.push({ colno: u3, filename: d2, function: Xe, in_app: true, lineno: l2 }), e6;
                      })(Vn(n3, c2 || i2, void 0, r2, false), o2, a2, s2);
                      u2.level = "error", fn(u2, { originalException: c2, mechanism: { handled: false, type: "onerror" } });
                    })), ft(t4, On);
                  })();
                })(e4), Yn("onerror")), t3.onunhandledrejection && ((function(e5) {
                  !(function() {
                    const t4 = "unhandledrejection";
                    dt(t4, ((t5) => {
                      const { stackParser: n3, attachStacktrace: r2 } = $n();
                      if (Ge() !== e5 || _n()) return;
                      const i2 = (function(e6) {
                        if (H(e6)) return e6;
                        try {
                          if ("reason" in e6) return e6.reason;
                          if ("detail" in e6 && "reason" in e6.detail) return e6.detail.reason;
                        } catch (e7) {
                        }
                        return e6;
                      })(t5), o2 = H(i2) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(i2)}` }] } } : Vn(n3, i2, void 0, r2, true);
                      o2.level = "error", fn(o2, { originalException: i2, mechanism: { handled: false, type: "onunhandledrejection" } });
                    })), ft(t4, In);
                  })();
                })(e4), Yn("onunhandledrejection"));
              } };
            };
            function Yn(e3) {
              Rt && F.log(`Global Handler attached: ${e3}`);
            }
            function $n() {
              const e3 = Ge();
              return e3 && e3.getOptions() || { stackParser: () => [], attachStacktrace: false };
            }
            function qn(e3, t3, n3 = 250, r2, i2, o2, a2) {
              if (!(o2.exception && o2.exception.values && a2 && Z(a2.originalException, Error))) return;
              const s2 = o2.exception.values.length > 0 ? o2.exception.values[o2.exception.values.length - 1] : void 0;
              var c2, u2;
              s2 && (o2.exception.values = (c2 = Wn(e3, t3, i2, a2.originalException, r2, o2.exception.values, s2, 0), u2 = n3, c2.map(((e4) => (e4.value && (e4.value = ie(e4.value, u2)), e4)))));
            }
            function Wn(e3, t3, n3, r2, i2, o2, a2, s2) {
              if (o2.length >= n3 + 1) return o2;
              let c2 = [...o2];
              if (Z(r2[i2], Error)) {
                Gn(a2, s2);
                const o3 = e3(t3, r2[i2]), u2 = c2.length;
                zn(o3, i2, u2, s2), c2 = Wn(e3, t3, n3, r2[i2], i2, [o3, ...c2], o3, u2);
              }
              return Array.isArray(r2.errors) && r2.errors.forEach(((r3, o3) => {
                if (Z(r3, Error)) {
                  Gn(a2, s2);
                  const u2 = e3(t3, r3), l2 = c2.length;
                  zn(u2, `errors[${o3}]`, l2, s2), c2 = Wn(e3, t3, n3, r3, i2, [u2, ...c2], u2, l2);
                }
              })), c2;
            }
            function Gn(e3, t3) {
              e3.mechanism = e3.mechanism || { type: "generic", handled: true }, e3.mechanism = { ...e3.mechanism, ..."AggregateError" === e3.type && { is_exception_group: true }, exception_id: t3 };
            }
            function zn(e3, t3, n3, r2) {
              e3.mechanism = e3.mechanism || { type: "generic", handled: true }, e3.mechanism = { ...e3.mechanism, type: "chained", source: t3, exception_id: n3, parent_id: r2 };
            }
            const Hn = (e3 = {}) => {
              const t3 = e3.limit || 5, n3 = e3.key || "cause";
              return { name: "LinkedErrors", preprocessEvent(e4, r2, i2) {
                const o2 = i2.getOptions();
                qn(Ln, o2.stackParser, o2.maxValueLength, n3, t3, e4, r2);
              } };
            };
            function Kn(e3) {
              const t3 = [ke(), Qe(), kn(), Sn(), Jn(), Hn(), ot(), { name: "HttpContext", preprocessEvent(e4) {
                if (!mn.navigator && !mn.location && !mn.document) return;
                const t4 = e4.request && e4.request.url || mn.location && mn.location.href, { referrer: n3 } = mn.document || {}, { userAgent: r2 } = mn.navigator || {}, i2 = { ...e4.request && e4.request.headers, ...n3 && { Referer: n3 }, ...r2 && { "User-Agent": r2 } }, o2 = { ...e4.request, ...t4 && { url: t4 }, headers: i2 };
                e4.request = o2;
              } }];
              return false !== e3.autoSessionTracking && t3.push({ name: "BrowserSession", setupOnce() {
                void 0 !== mn.document ? (pn({ ignoreDuration: true }), gn(), Et((({ from: e4, to: t4 }) => {
                  void 0 !== e4 && e4 !== t4 && (pn({ ignoreDuration: true }), gn());
                }))) : Rt && F.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
              } }), t3;
            }
            const Qn = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
            function Xn(e3, t3 = false) {
              const { host: n3, path: r2, pass: i2, port: o2, projectId: a2, protocol: s2, publicKey: c2 } = e3;
              return `${s2}://${c2}${t3 && i2 ? `:${i2}` : ""}@${n3}${o2 ? `:${o2}` : ""}/${r2 ? `${r2}/` : r2}${a2}`;
            }
            function Zn(e3) {
              return { protocol: e3.protocol, publicKey: e3.publicKey || "", pass: e3.pass || "", host: e3.host, port: e3.port || "", path: e3.path || "", projectId: e3.projectId };
            }
            function er(e3, t3 = []) {
              return [e3, t3];
            }
            function tr(e3, t3) {
              const [n3, r2] = e3;
              return [n3, [...r2, t3]];
            }
            function nr(e3, t3) {
              const n3 = e3[1];
              for (const e4 of n3) if (t3(e4, e4[0].type)) return true;
              return false;
            }
            function rr(e3) {
              return D.__SENTRY__ && D.__SENTRY__.encodePolyfill ? D.__SENTRY__.encodePolyfill(e3) : new TextEncoder().encode(e3);
            }
            function ir(e3) {
              const [t3, n3] = e3;
              let r2 = JSON.stringify(t3);
              function i2(e4) {
                "string" == typeof r2 ? r2 = "string" == typeof e4 ? r2 + e4 : [rr(r2), e4] : r2.push("string" == typeof e4 ? rr(e4) : e4);
              }
              for (const e4 of n3) {
                const [t4, n4] = e4;
                if (i2(`
${JSON.stringify(t4)}
`), "string" == typeof n4 || n4 instanceof Uint8Array) i2(n4);
                else {
                  let e5;
                  try {
                    e5 = JSON.stringify(n4);
                  } catch (t5) {
                    e5 = JSON.stringify(Wt(n4));
                  }
                  i2(e5);
                }
              }
              return "string" == typeof r2 ? r2 : (function(e4) {
                const t4 = e4.reduce(((e5, t5) => e5 + t5.length), 0), n4 = new Uint8Array(t4);
                let r3 = 0;
                for (const t5 of e4) n4.set(t5, r3), r3 += t5.length;
                return n4;
              })(r2);
            }
            function or(e3) {
              const t3 = "string" == typeof e3.data ? rr(e3.data) : e3.data;
              return [he({ type: "attachment", length: t3.length, filename: e3.filename, content_type: e3.contentType, attachment_type: e3.attachmentType }), t3];
            }
            const ar = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };
            function sr(e3) {
              return ar[e3];
            }
            function cr(e3) {
              if (!e3 || !e3.sdk) return;
              const { name: t3, version: n3 } = e3.sdk;
              return { name: t3, version: n3 };
            }
            class ur extends Error {
              constructor(e3, t3 = "warn") {
                super(e3), this.message = e3, this.logLevel = t3;
              }
            }
            const lr = "Not capturing exception because it's already been captured.";
            class dr {
              constructor(e3) {
                if (this._options = e3, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e3.dsn ? this._dsn = (function(e4) {
                  const t4 = "string" == typeof e4 ? (function(e5) {
                    const t5 = Qn.exec(e5);
                    if (!t5) return void x((() => {
                      console.error(`Invalid Sentry Dsn: ${e5}`);
                    }));
                    const [n4, r3, i3 = "", o2 = "", a2 = "", s2 = ""] = t5.slice(1);
                    let c2 = "", u2 = s2;
                    const l2 = u2.split("/");
                    if (l2.length > 1 && (c2 = l2.slice(0, -1).join("/"), u2 = l2.pop()), u2) {
                      const e6 = u2.match(/^\d+/);
                      e6 && (u2 = e6[0]);
                    }
                    return Zn({ host: o2, pass: i3, path: c2, projectId: u2, port: a2, protocol: n4, publicKey: r3 });
                  })(e4) : Zn(e4);
                  if (t4 && (function(e5) {
                    if (!I) return true;
                    const { port: t5, projectId: n4, protocol: r3 } = e5;
                    return !(["protocol", "publicKey", "host", "projectId"].find(((t6) => !e5[t6] && (F.error(`Invalid Sentry Dsn: ${t6} missing`), true))) || (n4.match(/^\d+$/) ? /* @__PURE__ */ (function(e6) {
                      return "http" === e6 || "https" === e6;
                    })(r3) ? t5 && isNaN(parseInt(t5, 10)) && (F.error(`Invalid Sentry Dsn: Invalid port ${t5}`), 1) : (F.error(`Invalid Sentry Dsn: Invalid protocol ${r3}`), 1) : (F.error(`Invalid Sentry Dsn: Invalid projectId ${n4}`), 1)));
                  })(t4)) return t4;
                })(e3.dsn) : P && F.warn("No DSN provided, client will not send events."), this._dsn) {
                  const i3 = (t3 = this._dsn, n3 = e3.tunnel, r2 = e3._metadata ? e3._metadata.sdk : void 0, n3 || `${(function(e4) {
                    return `${(function(e5) {
                      const t4 = e5.protocol ? `${e5.protocol}:` : "", n4 = e5.port ? `:${e5.port}` : "";
                      return `${t4}//${e5.host}${n4}${e5.path ? `/${e5.path}` : ""}/api/`;
                    })(e4)}${e4.projectId}/envelope/`;
                  })(t3)}?${(function(e4, t4) {
                    const n4 = { sentry_version: "7" };
                    return e4.publicKey && (n4.sentry_key = e4.publicKey), t4 && (n4.sentry_client = `${t4.name}/${t4.version}`), new URLSearchParams(n4).toString();
                  })(t3, r2)}`);
                  this._transport = e3.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e3.transportOptions, url: i3 });
                }
                var t3, n3, r2;
                const i2 = ["enableTracing", "tracesSampleRate", "tracesSampler"].find(((t4) => t4 in e3 && null == e3[t4]));
                i2 && x((() => {
                  console.warn(`[Sentry] Deprecation warning: \`${i2}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`);
                }));
              }
              captureException(e3, t3, n3) {
                const r2 = ge();
                if (Se(e3)) return P && F.log(lr), r2;
                const i2 = { event_id: r2, ...t3 };
                return this._process(this.eventFromException(e3, i2).then(((e4) => this._captureEvent(e4, i2, n3)))), i2.event_id;
              }
              captureMessage(e3, t3, n3, r2) {
                const i2 = { event_id: ge(), ...n3 }, o2 = z(e3) ? e3 : String(e3), a2 = H(e3) ? this.eventFromMessage(o2, t3, i2) : this.eventFromException(e3, i2);
                return this._process(a2.then(((e4) => this._captureEvent(e4, i2, r2)))), i2.event_id;
              }
              captureEvent(e3, t3, n3) {
                const r2 = ge();
                if (t3 && t3.originalException && Se(t3.originalException)) return P && F.log(lr), r2;
                const i2 = { event_id: r2, ...t3 }, o2 = (e3.sdkProcessingMetadata || {}).capturedSpanScope;
                return this._process(this._captureEvent(e3, i2, o2 || n3)), i2.event_id;
              }
              captureSession(e3) {
                "string" != typeof e3.release ? P && F.warn("Discarded session because of missing or non-string release") : (this.sendSession(e3), Pe(e3, { init: false }));
              }
              getDsn() {
                return this._dsn;
              }
              getOptions() {
                return this._options;
              }
              getSdkMetadata() {
                return this._options._metadata;
              }
              getTransport() {
                return this._transport;
              }
              flush(e3) {
                const t3 = this._transport;
                return t3 ? (this.emit("flush"), this._isClientDoneProcessing(e3).then(((n3) => t3.flush(e3).then(((e4) => n3 && e4))))) : Vt(true);
              }
              close(e3) {
                return this.flush(e3).then(((e4) => (this.getOptions().enabled = false, this.emit("close"), e4)));
              }
              getEventProcessors() {
                return this._eventProcessors;
              }
              addEventProcessor(e3) {
                this._eventProcessors.push(e3);
              }
              init() {
                (this._isEnabled() || this._options.integrations.some((({ name: e3 }) => e3.startsWith("Spotlight")))) && this._setupIntegrations();
              }
              getIntegrationByName(e3) {
                return this._integrations[e3];
              }
              addIntegration(e3) {
                const t3 = this._integrations[e3.name];
                B(this, e3, this._integrations), t3 || U(this, [e3]);
              }
              sendEvent(e3, t3 = {}) {
                this.emit("beforeSendEvent", e3, t3);
                let n3 = (function(e4, t4, n4, r3) {
                  const i2 = cr(n4), o2 = e4.type && "replay_event" !== e4.type ? e4.type : "event";
                  !(function(e5, t5) {
                    t5 && (e5.sdk = e5.sdk || {}, e5.sdk.name = e5.sdk.name || t5.name, e5.sdk.version = e5.sdk.version || t5.version, e5.sdk.integrations = [...e5.sdk.integrations || [], ...t5.integrations || []], e5.sdk.packages = [...e5.sdk.packages || [], ...t5.packages || []]);
                  })(e4, n4 && n4.sdk);
                  const a2 = (function(e5, t5, n5, r4) {
                    const i3 = e5.sdkProcessingMetadata && e5.sdkProcessingMetadata.dynamicSamplingContext;
                    return { event_id: e5.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...t5 && { sdk: t5 }, ...!!n5 && r4 && { dsn: Xn(r4) }, ...i3 && { trace: he({ ...i3 }) } };
                  })(e4, i2, r3, t4);
                  return delete e4.sdkProcessingMetadata, er(a2, [[{ type: o2 }, e4]]);
                })(e3, this._dsn, this._options._metadata, this._options.tunnel);
                for (const e4 of t3.attachments || []) n3 = tr(n3, or(e4));
                const r2 = this.sendEnvelope(n3);
                r2 && r2.then(((t4) => this.emit("afterSendEvent", e3, t4)), null);
              }
              sendSession(e3) {
                const t3 = (function(e4, t4, n3, r2) {
                  const i2 = cr(n3);
                  return er({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...i2 && { sdk: i2 }, ...!!r2 && t4 && { dsn: Xn(t4) } }, ["aggregates" in e4 ? [{ type: "sessions" }, e4] : [{ type: "session" }, e4.toJSON()]]);
                })(e3, this._dsn, this._options._metadata, this._options.tunnel);
                this.sendEnvelope(t3);
              }
              recordDroppedEvent(e3, t3, n3) {
                if (this._options.sendClientReports) {
                  const r2 = "number" == typeof n3 ? n3 : 1, i2 = `${e3}:${t3}`;
                  P && F.log(`Recording outcome: "${i2}"${r2 > 1 ? ` (${r2} times)` : ""}`), this._outcomes[i2] = (this._outcomes[i2] || 0) + r2;
                }
              }
              on(e3, t3) {
                const n3 = this._hooks[e3] = this._hooks[e3] || [];
                return n3.push(t3), () => {
                  const e4 = n3.indexOf(t3);
                  e4 > -1 && n3.splice(e4, 1);
                };
              }
              emit(e3, ...t3) {
                const n3 = this._hooks[e3];
                n3 && n3.forEach(((e4) => e4(...t3)));
              }
              sendEnvelope(e3) {
                return this.emit("beforeEnvelope", e3), this._isEnabled() && this._transport ? this._transport.send(e3).then(null, ((e4) => (P && F.error("Error while sending envelope:", e4), e4))) : (P && F.error("Transport disabled"), Vt({}));
              }
              _setupIntegrations() {
                const { integrations: e3 } = this._options;
                this._integrations = (function(e4, t3) {
                  const n3 = {};
                  return t3.forEach(((t4) => {
                    t4 && B(e4, t4, n3);
                  })), n3;
                })(this, e3), U(this, e3);
              }
              _updateSessionFromEvent(e3, t3) {
                let n3 = "fatal" === t3.level, r2 = false;
                const i2 = t3.exception && t3.exception.values;
                if (i2) {
                  r2 = true;
                  for (const e4 of i2) {
                    const t4 = e4.mechanism;
                    if (t4 && false === t4.handled) {
                      n3 = true;
                      break;
                    }
                  }
                }
                const o2 = "ok" === e3.status;
                (o2 && 0 === e3.errors || o2 && n3) && (Pe(e3, { ...n3 && { status: "crashed" }, errors: e3.errors || Number(r2 || n3) }), this.captureSession(e3));
              }
              _isClientDoneProcessing(e3) {
                return new Bt(((t3) => {
                  let n3 = 0;
                  const r2 = setInterval((() => {
                    0 == this._numProcessing ? (clearInterval(r2), t3(true)) : (n3 += 1, e3 && n3 >= e3 && (clearInterval(r2), t3(false)));
                  }), 1);
                }));
              }
              _isEnabled() {
                return false !== this.getOptions().enabled && void 0 !== this._transport;
              }
              _prepareEvent(e3, t3, n3 = qe(), r2 = We()) {
                const i2 = this.getOptions(), o2 = Object.keys(this._integrations);
                return !t3.integrations && o2.length > 0 && (t3.integrations = o2), this.emit("preprocessEvent", e3, t3), e3.type || r2.setLastEventId(e3.event_id || t3.event_id), ln(i2, e3, t3, n3, this, r2).then(((e4) => {
                  if (null === e4) return e4;
                  e4.contexts = { trace: ze(n3), ...e4.contexts };
                  const t4 = (function(e5, t5) {
                    const n4 = t5.getPropagationContext();
                    return n4.dsc || an(n4.traceId, e5);
                  })(this, n3);
                  return e4.sdkProcessingMetadata = { dynamicSamplingContext: t4, ...e4.sdkProcessingMetadata }, e4;
                }));
              }
              _captureEvent(e3, t3 = {}, n3) {
                return this._processEvent(e3, t3, n3).then(((e4) => e4.event_id), ((e4) => {
                  P && (e4 instanceof ur && "log" === e4.logLevel ? F.log(e4.message) : F.warn(e4));
                }));
              }
              _processEvent(e3, t3, n3) {
                const r2 = this.getOptions(), { sampleRate: i2 } = r2, o2 = pr(e3), a2 = fr(e3), s2 = e3.type || "error", c2 = `before send for type \`${s2}\``, u2 = void 0 === i2 ? void 0 : (function(e4) {
                  if ("boolean" == typeof e4) return Number(e4);
                  const t4 = "string" == typeof e4 ? parseFloat(e4) : e4;
                  if (!("number" != typeof t4 || isNaN(t4) || t4 < 0 || t4 > 1)) return t4;
                  P && F.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e4)} of type ${JSON.stringify(typeof e4)}.`);
                })(i2);
                if (a2 && "number" == typeof u2 && Math.random() > u2) return this.recordDroppedEvent("sample_rate", "error", e3), Ut(new ur(`Discarding event because it's not included in the random sample (sampling rate = ${i2})`, "log"));
                const l2 = "replay_event" === s2 ? "replay" : s2, d2 = (e3.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(e3, t3, n3, d2).then(((n4) => {
                  if (null === n4) throw this.recordDroppedEvent("event_processor", l2, e3), new ur("An event processor returned `null`, will not send event.", "log");
                  if (t3.data && true === t3.data.__sentry__) return n4;
                  const i3 = (function(e4, t4, n5, r3) {
                    const { beforeSend: i4, beforeSendTransaction: o3, beforeSendSpan: a3 } = t4;
                    if (fr(n5) && i4) return i4(n5, r3);
                    if (pr(n5)) {
                      if (n5.spans && a3) {
                        const t5 = [];
                        for (const r4 of n5.spans) {
                          const n6 = a3(r4);
                          n6 ? t5.push(n6) : (Xt || (x((() => {
                            console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
                          })), Xt = true), e4.recordDroppedEvent("before_send", "span"));
                        }
                        n5.spans = t5;
                      }
                      if (o3) {
                        if (n5.spans) {
                          const e5 = n5.spans.length;
                          n5.sdkProcessingMetadata = { ...n5.sdkProcessingMetadata, spanCountBeforeProcessing: e5 };
                        }
                        return o3(n5, r3);
                      }
                    }
                    return n5;
                  })(this, r2, n4, t3);
                  return (function(e4, t4) {
                    const n5 = `${t4} must return \`null\` or a valid event.`;
                    if (X(e4)) return e4.then(((e5) => {
                      if (!K(e5) && null !== e5) throw new ur(n5);
                      return e5;
                    }), ((e5) => {
                      throw new ur(`${t4} rejected with ${e5}`);
                    }));
                    if (!K(e4) && null !== e4) throw new ur(n5);
                    return e4;
                  })(i3, c2);
                })).then(((r3) => {
                  if (null === r3) {
                    if (this.recordDroppedEvent("before_send", l2, e3), o2) {
                      const t4 = 1 + (e3.spans || []).length;
                      this.recordDroppedEvent("before_send", "span", t4);
                    }
                    throw new ur(`${c2} returned \`null\`, will not send event.`, "log");
                  }
                  const i3 = n3 && n3.getSession();
                  if (!o2 && i3 && this._updateSessionFromEvent(i3, r3), o2) {
                    const e4 = (r3.sdkProcessingMetadata && r3.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r3.spans ? r3.spans.length : 0);
                    e4 > 0 && this.recordDroppedEvent("before_send", "span", e4);
                  }
                  const a3 = r3.transaction_info;
                  if (o2 && a3 && r3.transaction !== e3.transaction) {
                    const e4 = "custom";
                    r3.transaction_info = { ...a3, source: e4 };
                  }
                  return this.sendEvent(r3, t3), r3;
                })).then(null, ((e4) => {
                  if (e4 instanceof ur) throw e4;
                  throw this.captureException(e4, { data: { __sentry__: true }, originalException: e4 }), new ur(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e4}`);
                }));
              }
              _process(e3) {
                this._numProcessing++, e3.then(((e4) => (this._numProcessing--, e4)), ((e4) => (this._numProcessing--, e4)));
              }
              _clearOutcomes() {
                const e3 = this._outcomes;
                return this._outcomes = {}, Object.entries(e3).map((([e4, t3]) => {
                  const [n3, r2] = e4.split(":");
                  return { reason: n3, category: r2, quantity: t3 };
                }));
              }
              _flushOutcomes() {
                P && F.log("Flushing outcomes...");
                const e3 = this._clearOutcomes();
                if (0 === e3.length) return void (P && F.log("No outcomes to send"));
                if (!this._dsn) return void (P && F.log("No dsn provided, will not send outcomes"));
                P && F.log("Sending outcomes:", e3);
                const t3 = (n3 = e3, er((r2 = this._options.tunnel && Xn(this._dsn)) ? { dsn: r2 } : {}, [[{ type: "client_report" }, { timestamp: Ae(), discarded_events: n3 }]]));
                var n3, r2;
                this.sendEnvelope(t3);
              }
            }
            function fr(e3) {
              return void 0 === e3.type;
            }
            function pr(e3) {
              return "transaction" === e3.type;
            }
            class hr extends dr {
              constructor(e3) {
                const t3 = { parentSpanIsAlwaysRootSpan: true, ...e3 };
                !(function(e4, t4, n3 = [t4], r2 = "npm") {
                  const i2 = e4._metadata || {};
                  i2.sdk || (i2.sdk = { name: `sentry.javascript.${t4}`, packages: n3.map(((e5) => ({ name: `${r2}:@sentry/${e5}`, version: L }))), version: L }), e4._metadata = i2;
                })(t3, "browser", ["browser"], mn.SENTRY_SDK_SOURCE || "npm"), super(t3), t3.sendClientReports && mn.document && mn.document.addEventListener("visibilitychange", (() => {
                  "hidden" === mn.document.visibilityState && this._flushOutcomes();
                }));
              }
              eventFromException(e3, t3) {
                return (function(e4, t4, n3, r2) {
                  const i2 = Vn(e4, t4, n3 && n3.syntheticException || void 0, r2);
                  return be(i2), i2.level = "error", n3 && n3.event_id && (i2.event_id = n3.event_id), Vt(i2);
                })(this._options.stackParser, e3, t3, this._options.attachStacktrace);
              }
              eventFromMessage(e3, t3 = "info", n3) {
                return (function(e4, t4, n4 = "info", r2, i2) {
                  const o2 = Un(e4, t4, r2 && r2.syntheticException || void 0, i2);
                  return o2.level = n4, r2 && r2.event_id && (o2.event_id = r2.event_id), Vt(o2);
                })(this._options.stackParser, e3, t3, n3, this._options.attachStacktrace);
              }
              captureUserFeedback(e3) {
                if (!this._isEnabled()) return void (Rt && F.warn("SDK not enabled, will not capture user feedback."));
                const t3 = (function(e4, { metadata: t4, tunnel: n3, dsn: r2 }) {
                  const i2 = { event_id: e4.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...t4 && t4.sdk && { sdk: { name: t4.sdk.name, version: t4.sdk.version } }, ...!!n3 && !!r2 && { dsn: Xn(r2) } }, o2 = /* @__PURE__ */ (function(e5) {
                    return [{ type: "user_report" }, e5];
                  })(e4);
                  return er(i2, [o2]);
                })(e3, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
                this.sendEnvelope(t3);
              }
              _prepareEvent(e3, t3, n3) {
                return e3.platform = e3.platform || "javascript", super._prepareEvent(e3, t3, n3);
              }
            }
            const vr = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, gr = {};
            function mr(e3) {
              gr[e3] = void 0;
            }
            function yr(e3, t3, n3 = /* @__PURE__ */ (function(e4) {
              const t4 = [];
              function n4(e5) {
                return t4.splice(t4.indexOf(e5), 1)[0] || Promise.resolve(void 0);
              }
              return { $: t4, add: function(r2) {
                if (!(void 0 === e4 || t4.length < e4)) return Ut(new ur("Not adding Promise because buffer limit was reached."));
                const i2 = r2();
                return -1 === t4.indexOf(i2) && t4.push(i2), i2.then((() => n4(i2))).then(null, (() => n4(i2).then(null, (() => {
                })))), i2;
              }, drain: function(e5) {
                return new Bt(((n5, r2) => {
                  let i2 = t4.length;
                  if (!i2) return n5(true);
                  const o2 = setTimeout((() => {
                    e5 && e5 > 0 && n5(false);
                  }), e5);
                  t4.forEach(((e6) => {
                    Vt(e6).then((() => {
                      --i2 || (clearTimeout(o2), n5(true));
                    }), r2);
                  }));
                }));
              } };
            })(e3.bufferSize || 64)) {
              let r2 = {};
              return { send: function(i2) {
                const o2 = [];
                if (nr(i2, ((t4, n4) => {
                  const i3 = sr(n4);
                  if ((function(e4, t5, n5 = Date.now()) {
                    return (function(e5, t6) {
                      return e5[t6] || e5.all || 0;
                    })(e4, t5) > n5;
                  })(r2, i3)) {
                    const r3 = _r(t4, n4);
                    e3.recordDroppedEvent("ratelimit_backoff", i3, r3);
                  } else o2.push(t4);
                })), 0 === o2.length) return Vt({});
                const a2 = er(i2[0], o2), s2 = (t4) => {
                  nr(a2, ((n4, r3) => {
                    const i3 = _r(n4, r3);
                    e3.recordDroppedEvent(t4, sr(r3), i3);
                  }));
                };
                return n3.add((() => t3({ body: ir(a2) }).then(((e4) => (void 0 !== e4.statusCode && (e4.statusCode < 200 || e4.statusCode >= 300) && P && F.warn(`Sentry responded with status code ${e4.statusCode} to sent event.`), r2 = (function(e5, { statusCode: t4, headers: n4 }, r3 = Date.now()) {
                  const i3 = { ...e5 }, o3 = n4 && n4["x-sentry-rate-limits"], a3 = n4 && n4["retry-after"];
                  if (o3) for (const e6 of o3.trim().split(",")) {
                    const [t5, n5, , , o4] = e6.split(":", 5), a4 = parseInt(t5, 10), s3 = 1e3 * (isNaN(a4) ? 60 : a4);
                    if (n5) for (const e7 of n5.split(";")) "metric_bucket" === e7 && o4 && !o4.split(";").includes("custom") || (i3[e7] = r3 + s3);
                    else i3.all = r3 + s3;
                  }
                  else a3 ? i3.all = r3 + (function(e6, t5 = Date.now()) {
                    const n5 = parseInt(`${e6}`, 10);
                    if (!isNaN(n5)) return 1e3 * n5;
                    const r4 = Date.parse(`${e6}`);
                    return isNaN(r4) ? 6e4 : r4 - t5;
                  })(a3, r3) : 429 === t4 && (i3.all = r3 + 6e4);
                  return i3;
                })(r2, e4), e4)), ((e4) => {
                  throw s2("network_error"), e4;
                })))).then(((e4) => e4), ((e4) => {
                  if (e4 instanceof ur) return P && F.error("Skipped sending event because buffer is full."), s2("queue_overflow"), Vt({});
                  throw e4;
                }));
              }, flush: (e4) => n3.drain(e4) };
            }
            function _r(e3, t3) {
              if ("event" === t3 || "transaction" === t3) return Array.isArray(e3) ? e3[1] : void 0;
            }
            function br(e3, t3 = (function(e4) {
              const t4 = gr[e4];
              if (t4) return t4;
              let n3 = ht[e4];
              if (Ct(n3)) return gr[e4] = n3.bind(ht);
              const r2 = ht.document;
              if (r2 && "function" == typeof r2.createElement) try {
                const t5 = r2.createElement("iframe");
                t5.hidden = true, r2.head.appendChild(t5);
                const i2 = t5.contentWindow;
                i2 && i2[e4] && (n3 = i2[e4]), r2.head.removeChild(t5);
              } catch (t5) {
                vr && F.warn(`Could not create sandbox iframe for ${e4} check, bailing to window.${e4}: `, t5);
              }
              return n3 ? gr[e4] = n3.bind(ht) : n3;
            })("fetch")) {
              let n3 = 0, r2 = 0;
              return yr(e3, (function(i2) {
                const o2 = i2.body.length;
                n3 += o2, r2++;
                const a2 = { body: i2.body, method: "POST", referrerPolicy: "origin", headers: e3.headers, keepalive: n3 <= 6e4 && r2 < 15, ...e3.fetchOptions };
                if (!t3) return mr("fetch"), Ut("No fetch implementation available");
                try {
                  return t3(e3.url, a2).then(((e4) => (n3 -= o2, r2--, { statusCode: e4.status, headers: { "x-sentry-rate-limits": e4.headers.get("X-Sentry-Rate-Limits"), "retry-after": e4.headers.get("Retry-After") } })));
                } catch (e4) {
                  return mr("fetch"), n3 -= o2, r2--, Ut(e4);
                }
              }));
            }
            function Sr(e3, t3, n3, r2) {
              const i2 = { filename: e3, function: "<anonymous>" === t3 ? Xe : t3, in_app: true };
              return void 0 !== n3 && (i2.lineno = n3), void 0 !== r2 && (i2.colno = r2), i2;
            }
            const wr = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, kr = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Er = /\((\S*)(?::(\d+))(?::(\d+))\)/, Tr = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Mr = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Ar = (function(...e3) {
              const t3 = e3.sort(((e4, t4) => e4[0] - t4[0])).map(((e4) => e4[1]));
              return (e4, n3 = 0, r2 = 0) => {
                const i2 = [], o2 = e4.split("\n");
                for (let e5 = n3; e5 < o2.length; e5++) {
                  const n4 = o2[e5];
                  if (n4.length > 1024) continue;
                  const a2 = Ze.test(n4) ? n4.replace(Ze, "$1") : n4;
                  if (!a2.match(/\S*Error: /)) {
                    for (const e6 of t3) {
                      const t4 = e6(a2);
                      if (t4) {
                        i2.push(t4);
                        break;
                      }
                    }
                    if (i2.length >= 50 + r2) break;
                  }
                }
                return (function(e5) {
                  if (!e5.length) return [];
                  const t4 = Array.from(e5);
                  return /sentryWrapped/.test(tt(t4).function || "") && t4.pop(), t4.reverse(), et.test(tt(t4).function || "") && (t4.pop(), et.test(tt(t4).function || "") && t4.pop()), t4.slice(0, 50).map(((e6) => ({ ...e6, filename: e6.filename || tt(t4).filename, function: e6.function || Xe })));
                })(i2.slice(r2));
              };
            })([30, (e3) => {
              const t3 = wr.exec(e3);
              if (t3) {
                const [, e4, n4, r2] = t3;
                return Sr(e4, Xe, +n4, +r2);
              }
              const n3 = kr.exec(e3);
              if (n3) {
                if (n3[2] && 0 === n3[2].indexOf("eval")) {
                  const e5 = Er.exec(n3[2]);
                  e5 && (n3[2] = e5[1], n3[3] = e5[2], n3[4] = e5[3]);
                }
                const [e4, t4] = Cr(n3[1] || Xe, n3[2]);
                return Sr(t4, e4, n3[3] ? +n3[3] : void 0, n3[4] ? +n3[4] : void 0);
              }
            }], [50, (e3) => {
              const t3 = Tr.exec(e3);
              if (t3) {
                if (t3[3] && t3[3].indexOf(" > eval") > -1) {
                  const e5 = Mr.exec(t3[3]);
                  e5 && (t3[1] = t3[1] || "eval", t3[3] = e5[1], t3[4] = e5[2], t3[5] = "");
                }
                let e4 = t3[3], n3 = t3[1] || Xe;
                return [n3, e4] = Cr(n3, e4), Sr(e4, n3, t3[4] ? +t3[4] : void 0, t3[5] ? +t3[5] : void 0);
              }
            }]), Cr = (e3, t3) => {
              const n3 = -1 !== e3.indexOf("safari-extension"), r2 = -1 !== e3.indexOf("safari-web-extension");
              return n3 || r2 ? [-1 !== e3.indexOf("@") ? e3.split("@")[0] : Xe, n3 ? `safari-extension:${t3}` : `safari-web-extension:${t3}`] : [e3, t3];
            };
            var Or = "new", Pr = "loading", Ir = "loaded", Lr = "joining-meeting", Dr = "joined-meeting", Nr = "left-meeting", jr = "error", Rr = "blocked", xr = "off", Fr = "sendable", Vr = "loading", Ur = "interrupted", Br = "playable", Jr = "unknown", Yr = "full", $r = "lobby", qr = "none", Wr = "base", Gr = "*", zr = "ejected", Hr = "nbf-room", Kr = "nbf-token", Qr = "exp-room", Xr = "exp-token", Zr = "no-room", ei = "meeting-full", ti = "end-of-life", ni = "not-allowed", ri = "connection-error", ii = "cam-in-use", oi = "mic-in-use", ai = "cam-mic-in-use", si = "permissions", ci = "undefined-mediadevices", ui = "not-found", li = "constraints", di = "unknown", fi = "iframe-ready-for-launch-config", pi = "iframe-launch-config", hi = "theme-updated", vi = "loading", gi = "load-attempt-failed", mi = "loaded", yi = "started-camera", _i = "camera-error", bi = "joining-meeting", Si = "joined-meeting", wi = "left-meeting", ki = "participant-joined", Ei = "participant-updated", Ti = "participant-left", Mi = "participant-counts-updated", Ai = "access-state-updated", Ci = "meeting-session-summary-updated", Oi = "meeting-session-state-updated", Pi = "meeting-session-data-error", Ii = "waiting-participant-added", Li = "waiting-participant-updated", Di = "waiting-participant-removed", Ni = "track-started", ji = "track-stopped", Ri = "transcription-started", xi = "transcription-stopped", Fi = "transcription-error", Vi = "recording-started", Ui = "recording-stopped", Bi = "recording-stats", Ji = "recording-error", Yi = "recording-upload-completed", $i = "recording-data", qi = "app-message", Wi = "transcription-message", Gi = "remote-media-player-started", zi = "remote-media-player-updated", Hi = "remote-media-player-stopped", Ki = "local-screen-share-started", Qi = "local-screen-share-stopped", Xi = "local-screen-share-canceled", Zi = "active-speaker-change", eo = "active-speaker-mode-change", to = "network-quality-change", no = "network-connection", ro = "cpu-load-change", io = "face-counts-updated", oo = "fullscreen", ao = "exited-fullscreen", so = "live-streaming-started", co = "live-streaming-updated", uo = "live-streaming-stopped", lo = "live-streaming-error", fo = "lang-updated", po = "receive-settings-updated", ho = "input-settings-updated", vo = "nonfatal-error", go = "error", mo = 4096, yo = 102400, _o = "iframe-call-message", bo = "local-screen-start", So = "daily-method-update-live-streaming-endpoints", wo = "transmit-log", ko = "daily-custom-track", Eo = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" }, To = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, Mo = { PLAY: "play", PAUSE: "pause" }, Ao = ["jpg", "png", "jpeg"], Co = "sip-call-transfer";
            function Oo() {
              return !Po() && "undefined" != typeof window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
            }
            function Po() {
              return "undefined" != typeof navigator && navigator.product && "ReactNative" === navigator.product;
            }
            function Io() {
              return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
            }
            function Lo() {
              if (Po()) return false;
              if (!document) return false;
              var e3 = document.createElement("iframe");
              return !!e3.requestFullscreen || !!e3.webkitRequestFullscreen;
            }
            var Do = "none", No = (function() {
              try {
                var e3, t3 = document.createElement("canvas"), n3 = false;
                (e3 = t3.getContext("webgl2", { failIfMajorPerformanceCaveat: true })) || (n3 = true, e3 = t3.getContext("webgl2"));
                var r2 = null != e3;
                return t3.remove(), r2 ? n3 ? "software" : "hardware" : Do;
              } catch (e4) {
                return Do;
              }
            })();
            function jo() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return !Po() && !(No === Do) && (e3 ? !Vo() && ["Chrome", "Firefox"].includes(Uo()) : (function() {
                if (Vo()) return false;
                var e4 = Uo();
                if ("Safari" === e4) {
                  var t3 = qo();
                  if (t3.major < 15 || 15 === t3.major && t3.minor < 4) return false;
                }
                return "Chrome" === e4 ? Jo().major >= 77 : "Firefox" === e4 ? Wo().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(e4);
              })());
            }
            function Ro() {
              if (Po()) return false;
              if (Fo()) return false;
              if ("undefined" == typeof AudioWorkletNode) return false;
              switch (Uo()) {
                case "Chrome":
                case "Firefox":
                  return true;
                case "Safari":
                  var e3 = Bo();
                  return e3.major > 17 || 17 === e3.major && e3.minor >= 4;
              }
              return false;
            }
            function xo() {
              return Io() && "undefined" != typeof MediaStreamTrack && !(function() {
                var e3, t3 = Uo();
                if (!Oo()) return true;
                switch (t3) {
                  case "Chrome":
                    return (e3 = Jo()).major && e3.major > 0 && e3.major < 75;
                  case "Firefox":
                    return (e3 = Wo()).major < 91;
                  case "Safari":
                    return (e3 = qo()).major < 13 || 13 === e3.major && e3.minor < 1;
                  default:
                    return true;
                }
              })();
            }
            function Fo() {
              return Oo().match(/Linux; Android/);
            }
            function Vo() {
              var e3, t3 = Oo(), n3 = t3.match(/Mac/) && (!Po() && "undefined" != typeof window && null !== (e3 = window) && void 0 !== e3 && null !== (e3 = e3.navigator) && void 0 !== e3 && e3.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
              return !!(t3.match(/Mobi/) || t3.match(/Android/) || n3) || !!Oo().match(/DailyAnd\//) || void 0;
            }
            function Uo() {
              if ("undefined" != typeof window) {
                var e3 = Oo();
                return Yo() ? "Safari" : e3.indexOf("Edge") > -1 ? "Edge" : e3.match(/Chrome\//) ? "Chrome" : e3.indexOf("Safari") > -1 || $o() ? "Safari" : e3.indexOf("Firefox") > -1 ? "Firefox" : e3.indexOf("MSIE") > -1 || e3.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
              }
            }
            function Bo() {
              switch (Uo()) {
                case "Chrome":
                  return Jo();
                case "Safari":
                  return qo();
                case "Firefox":
                  return Wo();
                case "Edge":
                  return (function() {
                    var e3 = 0, t3 = 0;
                    if ("undefined" != typeof window) {
                      var n3 = Oo().match(/Edge\/(\d+).(\d+)/);
                      if (n3) try {
                        e3 = parseInt(n3[1]), t3 = parseInt(n3[2]);
                      } catch (e4) {
                      }
                    }
                    return { major: e3, minor: t3 };
                  })();
              }
            }
            function Jo() {
              var e3 = 0, t3 = 0, n3 = 0, r2 = 0, i2 = false;
              if ("undefined" != typeof window) {
                var o2 = Oo(), a2 = o2.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
                if (a2) try {
                  e3 = parseInt(a2[1]), t3 = parseInt(a2[2]), n3 = parseInt(a2[3]), r2 = parseInt(a2[4]), i2 = o2.indexOf("OPR/") > -1;
                } catch (e4) {
                }
              }
              return { major: e3, minor: t3, build: n3, patch: r2, opera: i2 };
            }
            function Yo() {
              return !!Oo().match(/iPad|iPhone|iPod/i) && Io();
            }
            function $o() {
              return Oo().indexOf("AppleWebKit/605.1.15") > -1;
            }
            function qo() {
              var e3 = 0, t3 = 0, n3 = 0;
              if ("undefined" != typeof window) {
                var r2 = Oo().match(/Version\/(\d+).(\d+)(.(\d+))?/);
                if (r2) try {
                  e3 = parseInt(r2[1]), t3 = parseInt(r2[2]), n3 = parseInt(r2[4]);
                } catch (e4) {
                }
                else (Yo() || $o()) && (e3 = 14, t3 = 0, n3 = 3);
              }
              return { major: e3, minor: t3, point: n3 };
            }
            function Wo() {
              var e3 = 0, t3 = 0;
              if ("undefined" != typeof window) {
                var n3 = Oo().match(/Firefox\/(\d+).(\d+)/);
                if (n3) try {
                  e3 = parseInt(n3[1]), t3 = parseInt(n3[2]);
                } catch (e4) {
                }
              }
              return { major: e3, minor: t3 };
            }
            var Go = (function() {
              return c((function e3() {
                i(this, e3);
              }), [{ key: "addListenerForMessagesFromCallMachine", value: function(e3, t3, n3) {
                M();
              } }, { key: "addListenerForMessagesFromDailyJs", value: function(e3, t3, n3) {
                M();
              } }, { key: "sendMessageToCallMachine", value: function(e3, t3, n3, r2) {
                M();
              } }, { key: "sendMessageToDailyJs", value: function(e3, t3) {
                M();
              } }, { key: "removeListener", value: function(e3) {
                M();
              } }]);
            })();
            function zo(e3, t3) {
              var n3 = Object.keys(e3);
              if (Object.getOwnPropertySymbols) {
                var r2 = Object.getOwnPropertySymbols(e3);
                t3 && (r2 = r2.filter((function(t4) {
                  return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                }))), n3.push.apply(n3, r2);
              }
              return n3;
            }
            function Ho(e3) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var n3 = null != arguments[t3] ? arguments[t3] : {};
                t3 % 2 ? zo(Object(n3), true).forEach((function(t4) {
                  p(e3, t4, n3[t4]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : zo(Object(n3)).forEach((function(t4) {
                  Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
                }));
              }
              return e3;
            }
            function Ko() {
              try {
                var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
                })));
              } catch (e4) {
              }
              return (Ko = function() {
                return !!e3;
              })();
            }
            var Qo = (function(e3) {
              function t3() {
                var e4, n3, r2, o2;
                return i(this, t3), n3 = this, r2 = l(r2 = t3), (e4 = u(n3, Ko() ? Reflect.construct(r2, [], l(n3).constructor) : r2.apply(n3, o2)))._wrappedListeners = {}, e4._messageCallbacks = {}, e4;
              }
              return f(t3, e3), c(t3, [{ key: "addListenerForMessagesFromCallMachine", value: function(e4, t4, n3) {
                var r2 = this, i2 = function(i3) {
                  if (i3.data && "iframe-call-message" === i3.data.what && (!i3.data.callClientId || i3.data.callClientId === t4) && (!i3.data.from || "module" !== i3.data.from)) {
                    var o2 = Ho({}, i3.data);
                    if (delete o2.from, o2.callbackStamp && r2._messageCallbacks[o2.callbackStamp]) {
                      var a2 = o2.callbackStamp;
                      r2._messageCallbacks[a2].call(n3, o2), delete r2._messageCallbacks[a2];
                    }
                    delete o2.what, delete o2.callbackStamp, e4.call(n3, o2);
                  }
                };
                this._wrappedListeners[e4] = i2, window.addEventListener("message", i2);
              } }, { key: "addListenerForMessagesFromDailyJs", value: function(e4, t4, n3) {
                var r2 = function(r3) {
                  var i2;
                  if (!(!r3.data || r3.data.what !== _o || !r3.data.action || r3.data.from && "module" !== r3.data.from || r3.data.callClientId && t4 && r3.data.callClientId !== t4 || null != r3 && null !== (i2 = r3.data) && void 0 !== i2 && i2.callFrameId)) {
                    var o2 = r3.data;
                    e4.call(n3, o2);
                  }
                };
                this._wrappedListeners[e4] = r2, window.addEventListener("message", r2);
              } }, { key: "sendMessageToCallMachine", value: function(e4, t4, n3, r2) {
                if (!n3) throw new Error("undefined callClientId. Are you trying to use a DailyCall instance previously destroyed?");
                var i2 = Ho({}, e4);
                if (i2.what = _o, i2.from = "module", i2.callClientId = n3, t4) {
                  var o2 = T();
                  this._messageCallbacks[o2] = t4, i2.callbackStamp = o2;
                }
                var a2 = r2 ? r2.contentWindow : window, s2 = this._callMachineTargetOrigin(r2);
                s2 && a2.postMessage(i2, s2);
              } }, { key: "sendMessageToDailyJs", value: function(e4, t4) {
                e4.what = _o, e4.callClientId = t4, e4.from = "embedded", window.postMessage(e4, this._targetOriginFromWindowLocation());
              } }, { key: "removeListener", value: function(e4) {
                var t4 = this._wrappedListeners[e4];
                t4 && (window.removeEventListener("message", t4), delete this._wrappedListeners[e4]);
              } }, { key: "forwardPackagedMessageToCallMachine", value: function(e4, t4, n3) {
                var r2 = Ho({}, e4);
                r2.callClientId = n3;
                var i2 = t4 ? t4.contentWindow : window, o2 = this._callMachineTargetOrigin(t4);
                o2 && i2.postMessage(r2, o2);
              } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(e4, t4) {
                var n3 = function(n4) {
                  if (n4.data && "iframe-call-message" === n4.data.what && (!n4.data.callClientId || n4.data.callClientId === t4) && (!n4.data.from || "module" !== n4.data.from)) {
                    var r2 = n4.data;
                    e4(r2);
                  }
                };
                return this._wrappedListeners[e4] = n3, window.addEventListener("message", n3), e4;
              } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(e4) {
                var t4 = this._wrappedListeners[e4];
                t4 && (window.removeEventListener("message", t4), delete this._wrappedListeners[e4]);
              } }, { key: "_callMachineTargetOrigin", value: function(e4) {
                return e4 ? e4.src ? new URL(e4.src).origin : void 0 : this._targetOriginFromWindowLocation();
              } }, { key: "_targetOriginFromWindowLocation", value: function() {
                return "file:" === window.location.protocol ? "*" : window.location.origin;
              } }]);
            })(Go);
            function Xo(e3, t3) {
              var n3 = Object.keys(e3);
              if (Object.getOwnPropertySymbols) {
                var r2 = Object.getOwnPropertySymbols(e3);
                t3 && (r2 = r2.filter((function(t4) {
                  return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                }))), n3.push.apply(n3, r2);
              }
              return n3;
            }
            function Zo() {
              try {
                var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
                })));
              } catch (e4) {
              }
              return (Zo = function() {
                return !!e3;
              })();
            }
            var ea = (function(e3) {
              function t3() {
                var e4, n3, r2, o2;
                return i(this, t3), n3 = this, r2 = l(r2 = t3), e4 = u(n3, Zo() ? Reflect.construct(r2, [], l(n3).constructor) : r2.apply(n3, o2)), window.callMachineToDailyJsEmitter = window.callMachineToDailyJsEmitter || new y.EventEmitter(), window.dailyJsToCallMachineEmitter = window.dailyJsToCallMachineEmitter || new y.EventEmitter(), e4._wrappedListeners = {}, e4._messageCallbacks = {}, e4;
              }
              return f(t3, e3), c(t3, [{ key: "addListenerForMessagesFromCallMachine", value: function(e4, t4, n3) {
                this._addListener(e4, window.callMachineToDailyJsEmitter, t4, n3, "received call machine message");
              } }, { key: "addListenerForMessagesFromDailyJs", value: function(e4, t4, n3) {
                this._addListener(e4, window.dailyJsToCallMachineEmitter, t4, n3, "received daily-js message");
              } }, { key: "sendMessageToCallMachine", value: function(e4, t4, n3) {
                this._sendMessage(e4, window.dailyJsToCallMachineEmitter, n3, t4, "sending message to call machine");
              } }, { key: "sendMessageToDailyJs", value: function(e4, t4) {
                this._sendMessage(e4, window.callMachineToDailyJsEmitter, t4, null, "sending message to daily-js");
              } }, { key: "removeListener", value: function(e4) {
                var t4 = this._wrappedListeners[e4];
                t4 && (window.callMachineToDailyJsEmitter.removeListener("message", t4), window.dailyJsToCallMachineEmitter.removeListener("message", t4), delete this._wrappedListeners[e4]);
              } }, { key: "_addListener", value: function(e4, t4, n3, r2, i2) {
                var o2 = this, a2 = function(t5) {
                  if (t5.callClientId === n3) {
                    if (t5.callbackStamp && o2._messageCallbacks[t5.callbackStamp]) {
                      var i3 = t5.callbackStamp;
                      o2._messageCallbacks[i3].call(r2, t5), delete o2._messageCallbacks[i3];
                    }
                    e4.call(r2, t5);
                  }
                };
                this._wrappedListeners[e4] = a2, t4.addListener("message", a2);
              } }, { key: "_sendMessage", value: function(e4, t4, n3, r2, i2) {
                var o2 = (function(e5) {
                  for (var t5 = 1; t5 < arguments.length; t5++) {
                    var n4 = null != arguments[t5] ? arguments[t5] : {};
                    t5 % 2 ? Xo(Object(n4), true).forEach((function(t6) {
                      p(e5, t6, n4[t6]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n4)) : Xo(Object(n4)).forEach((function(t6) {
                      Object.defineProperty(e5, t6, Object.getOwnPropertyDescriptor(n4, t6));
                    }));
                  }
                  return e5;
                })({}, e4);
                if (o2.callClientId = n3, r2) {
                  var a2 = T();
                  this._messageCallbacks[a2] = r2, o2.callbackStamp = a2;
                }
                t4.emit("message", o2);
              } }]);
            })(Go), ta = "replace", na = "shallow-merge", ra = [ta, na];
            var ia = (function() {
              function e3() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = t3.data, r2 = t3.mergeStrategy, o2 = void 0 === r2 ? ta : r2;
                i(this, e3), e3._validateMergeStrategy(o2), e3._validateData(n3, o2), this.mergeStrategy = o2, this.data = n3;
              }
              return c(e3, [{ key: "isNoOp", value: function() {
                return e3.isNoOpUpdate(this.data, this.mergeStrategy);
              } }], [{ key: "isNoOpUpdate", value: function(e4, t3) {
                return 0 === Object.keys(e4).length && t3 === na;
              } }, { key: "_validateMergeStrategy", value: function(e4) {
                if (!ra.includes(e4)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(ra, "]"));
              } }, { key: "_validateData", value: function(e4, t3) {
                if (!(function(e5) {
                  if (null == e5 || "object" !== o(e5)) return false;
                  var t4 = Object.getPrototypeOf(e5);
                  return null == t4 || t4 === Object.prototype;
                })(e4)) throw Error("Meeting session data must be a plain (map-like) object");
                var n3;
                try {
                  if (n3 = JSON.stringify(e4), t3 === ta) {
                    var r2 = JSON.parse(n3);
                    w(r2, e4) || console.warn("The meeting session data provided will be modified when serialized.", r2, e4);
                  } else if (t3 === na) {
                    for (var i2 in e4) if (Object.hasOwnProperty.call(e4, i2) && void 0 !== e4[i2]) {
                      var a2 = JSON.parse(JSON.stringify(e4[i2]));
                      w(e4[i2], a2) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", a2, e4[i2]);
                    }
                  }
                } catch (e5) {
                  throw Error("Meeting session data must be serializable to JSON: ".concat(e5));
                }
                if (n3.length > yo) throw Error("Meeting session data is too large (".concat(n3.length, " characters). Maximum size suppported is ").concat(yo, "."));
              } }]);
            })();
            function oa() {
              try {
                var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
                })));
              } catch (e4) {
              }
              return (oa = function() {
                return !!e3;
              })();
            }
            function aa(e3) {
              var t3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
              return aa = function(e4) {
                if (null === e4 || !(function(e5) {
                  try {
                    return -1 !== Function.toString.call(e5).indexOf("[native code]");
                  } catch (t4) {
                    return "function" == typeof e5;
                  }
                })(e4)) return e4;
                if ("function" != typeof e4) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t3) {
                  if (t3.has(e4)) return t3.get(e4);
                  t3.set(e4, n3);
                }
                function n3() {
                  return (function(e5, t4, n4) {
                    if (oa()) return Reflect.construct.apply(null, arguments);
                    var r2 = [null];
                    r2.push.apply(r2, t4);
                    var i2 = new (e5.bind.apply(e5, r2))();
                    return n4 && d(i2, n4.prototype), i2;
                  })(e4, arguments, l(this).constructor);
                }
                return n3.prototype = Object.create(e4.prototype, { constructor: { value: n3, enumerable: false, writable: true, configurable: true } }), d(n3, e4);
              }, aa(e3);
            }
            function sa() {
              try {
                var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
                })));
              } catch (e4) {
              }
              return (sa = function() {
                return !!e3;
              })();
            }
            function ca(e3) {
              var t3, n3 = null === (t3 = window._daily) || void 0 === t3 ? void 0 : t3.pendings;
              if (n3) {
                var r2 = n3.indexOf(e3);
                -1 !== r2 && n3.splice(r2, 1);
              }
            }
            var ua = (function() {
              return c((function e3(t3) {
                i(this, e3), this._currentLoad = null, this._callClientId = t3;
              }), [{ key: "load", value: function() {
                var e3, t3 = this, n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = arguments.length > 1 ? arguments[1] : void 0, i2 = arguments.length > 2 ? arguments[2] : void 0;
                if (this.loaded) return window._daily.instances[this._callClientId].callMachine.reset(), void r2(true);
                e3 = this._callClientId, window._daily.pendings.push(e3), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new la(n3, (function() {
                  r2(false);
                }), (function(e4, n4) {
                  n4 || ca(t3._callClientId), i2(e4, n4);
                })), this._currentLoad.start();
              } }, { key: "cancel", value: function() {
                this._currentLoad && this._currentLoad.cancel(), ca(this._callClientId);
              } }, { key: "loaded", get: function() {
                return this._currentLoad && this._currentLoad.succeeded;
              } }]);
            })(), la = (function() {
              return c((function e3() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = arguments.length > 1 ? arguments[1] : void 0, r2 = arguments.length > 2 ? arguments[2] : void 0;
                i(this, e3), this._attemptsRemaining = 3, this._currentAttempt = null, this._dailyConfig = t3, this._successCallback = n3, this._failureCallback = r2;
              }), [{ key: "start", value: function() {
                var e3 = this;
                if (!this._currentAttempt) {
                  var t3 = function(n3) {
                    e3._currentAttempt.cancelled || (e3._attemptsRemaining--, e3._failureCallback(n3, e3._attemptsRemaining > 0), e3._attemptsRemaining <= 0 || setTimeout((function() {
                      e3._currentAttempt.cancelled || (e3._currentAttempt = new pa(e3._dailyConfig, e3._successCallback, t3), e3._currentAttempt.start());
                    }), 3e3));
                  };
                  this._currentAttempt = new pa(this._dailyConfig, this._successCallback, t3), this._currentAttempt.start();
                }
              } }, { key: "cancel", value: function() {
                this._currentAttempt && this._currentAttempt.cancel();
              } }, { key: "cancelled", get: function() {
                return this._currentAttempt && this._currentAttempt.cancelled;
              } }, { key: "succeeded", get: function() {
                return this._currentAttempt && this._currentAttempt.succeeded;
              } }]);
            })(), da = (function(e3) {
              function t3() {
                return i(this, t3), e4 = this, r2 = arguments, n3 = l(n3 = t3), u(e4, sa() ? Reflect.construct(n3, r2 || [], l(e4).constructor) : n3.apply(e4, r2));
                var e4, n3, r2;
              }
              return f(t3, e3), c(t3);
            })(aa(Error)), fa = 2e4, pa = (function() {
              return c((function e4(t3, n3, r2) {
                i(this, e4), this._loadAttemptImpl = Po() || !t3.avoidEval ? new ha(t3, n3, r2) : new va(t3, n3, r2);
              }), [{ key: "start", value: (e3 = v((function* () {
                return this._loadAttemptImpl.start();
              })), function() {
                return e3.apply(this, arguments);
              }) }, { key: "cancel", value: function() {
                this._loadAttemptImpl.cancel();
              } }, { key: "cancelled", get: function() {
                return this._loadAttemptImpl.cancelled;
              } }, { key: "succeeded", get: function() {
                return this._loadAttemptImpl.succeeded;
              } }]);
              var e3;
            })(), ha = (function() {
              return c((function e4(t4, n4, r3) {
                i(this, e4), this.cancelled = false, this.succeeded = false, this._networkTimedOut = false, this._networkTimeout = null, this._iosCache = "undefined" != typeof iOSCallObjectBundleCache && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = t4, this._successCallback = n4, this._failureCallback = r3;
              }), [{ key: "start", value: (r2 = v((function* () {
                var e4 = C(this._dailyConfig);
                !(yield this._tryLoadFromIOSCache(e4)) && this._loadFromNetwork(e4);
              })), function() {
                return r2.apply(this, arguments);
              }) }, { key: "cancel", value: function() {
                clearTimeout(this._networkTimeout), this.cancelled = true;
              } }, { key: "_tryLoadFromIOSCache", value: (n3 = v((function* (e4) {
                if (!this._iosCache) return false;
                try {
                  var t4 = yield this._iosCache.get(e4);
                  return !!this.cancelled || !!t4 && (t4.code ? (Function('"use strict";' + t4.code)(), this.succeeded = true, this._successCallback(), true) : (this._refetchHeaders = t4.refetchHeaders, false));
                } catch (e5) {
                  return false;
                }
              })), function(e4) {
                return n3.apply(this, arguments);
              }) }, { key: "_loadFromNetwork", value: (t3 = v((function* (e4) {
                var t4 = this;
                this._networkTimeout = setTimeout((function() {
                  t4._networkTimedOut = true, t4._failureCallback({ msg: "Timed out (>".concat(fa, " ms) when loading call object bundle ").concat(e4), type: "timeout" });
                }), fa);
                try {
                  var n4 = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, r3 = yield fetch(e4, n4);
                  if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new da();
                  var i2 = yield this._getBundleCodeFromResponse(e4, r3);
                  if (this.cancelled) throw new da();
                  Function('"use strict";' + i2)(), this._iosCache && this._iosCache.set(e4, i2, r3.headers), this.succeeded = true, this._successCallback();
                } catch (t5) {
                  if (clearTimeout(this._networkTimeout), t5 instanceof da || this.cancelled || this._networkTimedOut) return;
                  this._failureCallback({ msg: "Failed to load call object bundle ".concat(e4, ": ").concat(t5), type: t5.message });
                }
              })), function(e4) {
                return t3.apply(this, arguments);
              }) }, { key: "_getBundleCodeFromResponse", value: (e3 = v((function* (e4, t4) {
                if (t4.ok) return yield t4.text();
                if (this._iosCache && 304 === t4.status) return (yield this._iosCache.renew(e4, t4.headers)).code;
                throw new Error("Received ".concat(t4.status, " response"));
              })), function(t4, n4) {
                return e3.apply(this, arguments);
              }) }]);
              var e3, t3, n3, r2;
            })(), va = (function() {
              return c((function e3(t3, n3, r2) {
                i(this, e3), this.cancelled = false, this.succeeded = false, this._dailyConfig = t3, this._successCallback = n3, this._failureCallback = r2, this._attemptId = T(), this._networkTimeout = null, this._scriptElement = null;
              }), [{ key: "start", value: function() {
                window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
                var e3 = C(this._dailyConfig);
                "object" === ("undefined" == typeof document ? "undefined" : o(document)) ? this._startLoading(e3) : this._failureCallback({ msg: "Call object bundle must be loaded in a DOM/web context", type: "missing context" });
              } }, { key: "cancel", value: function() {
                this._stopLoading(), this.cancelled = true;
              } }, { key: "_startLoading", value: function(e3) {
                var t3 = this;
                this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout((function() {
                  t3._stopLoading(), t3._failureCallback({ msg: "Timed out (>".concat(fa, " ms) when loading call object bundle ").concat(e3), type: "timeout" });
                }), fa);
                var n3 = document.getElementsByTagName("head")[0], r2 = document.createElement("script");
                this._scriptElement = r2, r2.onload = function() {
                  t3._stopLoading(), t3.succeeded = true, t3._successCallback();
                }, r2.onerror = function(e4) {
                  t3._stopLoading(), t3._failureCallback({ msg: "Failed to load call object bundle ".concat(e4.target.src), type: e4.message });
                }, r2.src = e3, n3.appendChild(r2);
              } }, { key: "_stopLoading", value: function() {
                this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
              } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
                window._dailyCallMachineLoadWaitlist.add(this._attemptId);
              } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
                window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
              } }]);
            })(), ga = function(e3, t3, n3) {
              return true === _a(e3.local, t3, n3);
            }, ma = function(e3, t3, n3) {
              return e3.local.streams && e3.local.streams[t3] && e3.local.streams[t3].stream && e3.local.streams[t3].stream["get".concat("video" === n3 ? "Video" : "Audio", "Tracks")]()[0];
            }, ya = function(e3, t3, n3, r2) {
              var i2 = ba(e3, t3, n3, r2);
              return i2 && i2.pendingTrack;
            }, _a = function(e3, t3, n3) {
              if (!e3) return false;
              var r2 = function(e4) {
                switch (e4) {
                  case "avatar":
                    return true;
                  case "staged":
                    return e4;
                  default:
                    return !!e4;
                }
              }, i2 = e3.public.subscribedTracks;
              return i2 && i2[t3] ? -1 === ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(n3) && i2[t3].custom ? [true, "staged"].includes(i2[t3].custom) ? r2(i2[t3].custom) : r2(i2[t3].custom[n3]) : r2(i2[t3][n3]) : !i2 || r2(i2.ALL);
            }, ba = function(e3, t3, n3, r2) {
              var i2 = Object.values(e3.streams || {}).filter((function(e4) {
                return e4.participantId === t3 && e4.type === n3 && e4.pendingTrack && e4.pendingTrack.kind === r2;
              })).sort((function(e4, t4) {
                return new Date(t4.starttime) - new Date(e4.starttime);
              }));
              return i2 && i2[0];
            }, Sa = function(e3, t3) {
              var n3 = e3.local.public.customTracks;
              if (n3 && n3[t3]) return n3[t3].track;
            };
            function wa(e3, t3) {
              for (var n3 = t3.getState(), r2 = 0, i2 = ["cam", "screen"]; r2 < i2.length; r2++) for (var o2 = i2[r2], a2 = 0, s2 = ["video", "audio"]; a2 < s2.length; a2++) {
                var c2 = s2[a2], u2 = "cam" === o2 ? c2 : "screen".concat(c2.charAt(0).toUpperCase() + c2.slice(1)), l2 = e3.tracks[u2];
                if (l2) {
                  var d2 = e3.local ? ma(n3, o2, c2) : ya(n3, e3.session_id, o2, c2);
                  "playable" === l2.state && (l2.track = d2), l2.persistentTrack = d2;
                }
              }
            }
            function ka(e3, t3) {
              try {
                var n3 = t3.getState();
                for (var r2 in e3.tracks) if (!Ea(r2)) {
                  var i2 = e3.tracks[r2].kind;
                  if (i2) {
                    var o2 = e3.tracks[r2];
                    if (o2) {
                      var a2 = e3.local ? Sa(n3, r2) : ya(n3, e3.session_id, r2, i2);
                      "playable" === o2.state && (e3.tracks[r2].track = a2), o2.persistentTrack = a2;
                    }
                  } else console.error("unknown type for custom track");
                }
              } catch (e4) {
                console.error(e4);
              }
            }
            function Ea(e3) {
              return ["video", "audio", "screenVideo", "screenAudio"].includes(e3);
            }
            function Ta(e3, t3, n3) {
              var r2 = n3.getState();
              if (e3.local) {
                if (e3.audio) try {
                  e3.audioTrack = r2.local.streams.cam.stream.getAudioTracks()[0], e3.audioTrack || (e3.audio = false);
                } catch (e4) {
                }
                if (e3.video) try {
                  e3.videoTrack = r2.local.streams.cam.stream.getVideoTracks()[0], e3.videoTrack || (e3.video = false);
                } catch (e4) {
                }
                if (e3.screen) try {
                  e3.screenVideoTrack = r2.local.streams.screen.stream.getVideoTracks()[0], e3.screenAudioTrack = r2.local.streams.screen.stream.getAudioTracks()[0], e3.screenVideoTrack || e3.screenAudioTrack || (e3.screen = false);
                } catch (e4) {
                }
              } else {
                var i2 = true;
                try {
                  var o2 = r2.participants[e3.session_id];
                  o2 && o2.public && o2.public.rtcType && "peer-to-peer" === o2.public.rtcType.impl && o2.private && !["connected", "completed"].includes(o2.private.peeringState) && (i2 = false);
                } catch (e4) {
                  console.error(e4);
                }
                if (!i2) return e3.audio = false, e3.audioTrack = false, e3.video = false, e3.videoTrack = false, e3.screen = false, void (e3.screenTrack = false);
                try {
                  if (r2.streams, e3.audio && ga(r2, e3.session_id, "cam-audio")) {
                    var a2 = ya(r2, e3.session_id, "cam", "audio");
                    a2 && (t3 && t3.audioTrack && t3.audioTrack.id === a2.id ? e3.audioTrack = a2 : a2.muted || (e3.audioTrack = a2)), e3.audioTrack || (e3.audio = false);
                  }
                  if (e3.video && ga(r2, e3.session_id, "cam-video")) {
                    var s2 = ya(r2, e3.session_id, "cam", "video");
                    s2 && (t3 && t3.videoTrack && t3.videoTrack.id === s2.id ? e3.videoTrack = s2 : s2.muted || (e3.videoTrack = s2)), e3.videoTrack || (e3.video = false);
                  }
                  if (e3.screen && ga(r2, e3.session_id, "screen-audio")) {
                    var c2 = ya(r2, e3.session_id, "screen", "audio");
                    c2 && (t3 && t3.screenAudioTrack && t3.screenAudioTrack.id === c2.id ? e3.screenAudioTrack = c2 : c2.muted || (e3.screenAudioTrack = c2));
                  }
                  if (e3.screen && ga(r2, e3.session_id, "screen-video")) {
                    var u2 = ya(r2, e3.session_id, "screen", "video");
                    u2 && (t3 && t3.screenVideoTrack && t3.screenVideoTrack.id === u2.id ? e3.screenVideoTrack = u2 : u2.muted || (e3.screenVideoTrack = u2));
                  }
                  e3.screenVideoTrack || e3.screenAudioTrack || (e3.screen = false);
                } catch (e4) {
                  console.error("unexpected error matching up tracks", e4);
                }
              }
            }
            function Ma(e3, t3) {
              (null == t3 || t3 > e3.length) && (t3 = e3.length);
              for (var n3 = 0, r2 = Array(t3); n3 < t3; n3++) r2[n3] = e3[n3];
              return r2;
            }
            var Aa = /* @__PURE__ */ new Map(), Ca = null;
            function Oa(e3, t3) {
              (null == t3 || t3 > e3.length) && (t3 = e3.length);
              for (var n3 = 0, r2 = Array(t3); n3 < t3; n3++) r2[n3] = e3[n3];
              return r2;
            }
            var Pa = /* @__PURE__ */ new Map(), Ia = null;
            function La(e3) {
              Da() ? (function(e4) {
                Aa.has(e4) || (Aa.set(e4, {}), navigator.mediaDevices.enumerateDevices().then((function(t3) {
                  Aa.has(e4) && (Aa.get(e4).lastDevicesString = JSON.stringify(t3), Ca || (Ca = (function() {
                    var e5 = v((function* () {
                      var e6, t4 = yield navigator.mediaDevices.enumerateDevices(), n3 = (function(e7, t5) {
                        var n4 = "undefined" != typeof Symbol && e7[Symbol.iterator] || e7["@@iterator"];
                        if (!n4) {
                          if (Array.isArray(e7) || (n4 = (function(e8, t6) {
                            if (e8) {
                              if ("string" == typeof e8) return Ma(e8, t6);
                              var n5 = {}.toString.call(e8).slice(8, -1);
                              return "Object" === n5 && e8.constructor && (n5 = e8.constructor.name), "Map" === n5 || "Set" === n5 ? Array.from(e8) : "Arguments" === n5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? Ma(e8, t6) : void 0;
                            }
                          })(e7)) || t5 && e7 && "number" == typeof e7.length) {
                            n4 && (e7 = n4);
                            var r3 = 0, i3 = function() {
                            };
                            return { s: i3, n: function() {
                              return r3 >= e7.length ? { done: true } : { done: false, value: e7[r3++] };
                            }, e: function(e8) {
                              throw e8;
                            }, f: i3 };
                          }
                          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }
                        var o2, a2 = true, s2 = false;
                        return { s: function() {
                          n4 = n4.call(e7);
                        }, n: function() {
                          var e8 = n4.next();
                          return a2 = e8.done, e8;
                        }, e: function(e8) {
                          s2 = true, o2 = e8;
                        }, f: function() {
                          try {
                            a2 || null == n4.return || n4.return();
                          } finally {
                            if (s2) throw o2;
                          }
                        } };
                      })(Aa.keys());
                      try {
                        for (n3.s(); !(e6 = n3.n()).done; ) {
                          var r2 = e6.value, i2 = JSON.stringify(t4);
                          i2 !== Aa.get(r2).lastDevicesString && (Aa.get(r2).lastDevicesString = i2, r2(t4));
                        }
                      } catch (e7) {
                        n3.e(e7);
                      } finally {
                        n3.f();
                      }
                    }));
                    return function() {
                      return e5.apply(this, arguments);
                    };
                  })(), navigator.mediaDevices.addEventListener("devicechange", Ca)));
                })).catch((function() {
                })));
              })(e3) : (function(e4) {
                Pa.has(e4) || (Pa.set(e4, {}), navigator.mediaDevices.enumerateDevices().then((function(t3) {
                  Pa.has(e4) && (Pa.get(e4).lastDevicesString = JSON.stringify(t3), Ia || (Ia = setInterval(v((function* () {
                    var e5, t4 = yield navigator.mediaDevices.enumerateDevices(), n3 = (function(e6, t5) {
                      var n4 = "undefined" != typeof Symbol && e6[Symbol.iterator] || e6["@@iterator"];
                      if (!n4) {
                        if (Array.isArray(e6) || (n4 = (function(e7, t6) {
                          if (e7) {
                            if ("string" == typeof e7) return Oa(e7, t6);
                            var n5 = {}.toString.call(e7).slice(8, -1);
                            return "Object" === n5 && e7.constructor && (n5 = e7.constructor.name), "Map" === n5 || "Set" === n5 ? Array.from(e7) : "Arguments" === n5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? Oa(e7, t6) : void 0;
                          }
                        })(e6)) || t5 && e6 && "number" == typeof e6.length) {
                          n4 && (e6 = n4);
                          var r3 = 0, i3 = function() {
                          };
                          return { s: i3, n: function() {
                            return r3 >= e6.length ? { done: true } : { done: false, value: e6[r3++] };
                          }, e: function(e7) {
                            throw e7;
                          }, f: i3 };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                      }
                      var o2, a2 = true, s2 = false;
                      return { s: function() {
                        n4 = n4.call(e6);
                      }, n: function() {
                        var e7 = n4.next();
                        return a2 = e7.done, e7;
                      }, e: function(e7) {
                        s2 = true, o2 = e7;
                      }, f: function() {
                        try {
                          a2 || null == n4.return || n4.return();
                        } finally {
                          if (s2) throw o2;
                        }
                      } };
                    })(Pa.keys());
                    try {
                      for (n3.s(); !(e5 = n3.n()).done; ) {
                        var r2 = e5.value, i2 = JSON.stringify(t4);
                        i2 !== Pa.get(r2).lastDevicesString && (Pa.get(r2).lastDevicesString = i2, r2(t4));
                      }
                    } catch (e6) {
                      n3.e(e6);
                    } finally {
                      n3.f();
                    }
                  })), 3e3)));
                })));
              })(e3);
            }
            function Da() {
              var e3;
              return Po() || void 0 !== (null === (e3 = navigator.mediaDevices) || void 0 === e3 ? void 0 : e3.ondevicechange);
            }
            var Na = /* @__PURE__ */ new Set();
            function ja(e3, t3) {
              var n3 = Object.keys(e3);
              if (Object.getOwnPropertySymbols) {
                var r2 = Object.getOwnPropertySymbols(e3);
                t3 && (r2 = r2.filter((function(t4) {
                  return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                }))), n3.push.apply(n3, r2);
              }
              return n3;
            }
            function Ra(e3) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var n3 = null != arguments[t3] ? arguments[t3] : {};
                t3 % 2 ? ja(Object(n3), true).forEach((function(t4) {
                  p(e3, t4, n3[t4]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : ja(Object(n3)).forEach((function(t4) {
                  Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
                }));
              }
              return e3;
            }
            var xa = Object.freeze({ VIDEO: "video", AUDIO: "audio", SCREEN_VIDEO: "screenVideo", SCREEN_AUDIO: "screenAudio", CUSTOM_VIDEO: "customVideo", CUSTOM_AUDIO: "customAudio" }), Fa = Object.freeze({ PARTICIPANTS: "participants", STREAMING: "streaming", TRANSCRIPTION: "transcription" }), Va = Object.values(xa), Ua = ["v", "a", "sv", "sa", "cv", "ca"], Ba = (Object.freeze(Va.reduce((function(e3, t3, n3) {
              return e3[t3] = Ua[n3], e3;
            }), {})), Object.freeze(Ua.reduce((function(e3, t3, n3) {
              return e3[t3] = Va[n3], e3;
            }), {})), [xa.VIDEO, xa.AUDIO, xa.SCREEN_VIDEO, xa.SCREEN_AUDIO]), Ja = Object.values(Fa), Ya = ["p", "s", "t"], $a = (Object.freeze(Ja.reduce((function(e3, t3, n3) {
              return e3[t3] = Ya[n3], e3;
            }), {})), Object.freeze(Ya.reduce((function(e3, t3, n3) {
              return e3[t3] = Ja[n3], e3;
            }), {})), (function() {
              function e3() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = t3.base, r2 = t3.byUserId, o2 = t3.byParticipantId;
                i(this, e3), this.base = n3, this.byUserId = r2, this.byParticipantId = o2;
              }
              return c(e3, [{ key: "clone", value: function() {
                var t3 = new e3();
                if (this.base instanceof qa ? t3.base = this.base.clone() : t3.base = this.base, void 0 !== this.byUserId) for (var n3 in t3.byUserId = {}, this.byUserId) {
                  var r2 = this.byUserId[n3];
                  t3.byUserId[n3] = r2 instanceof qa ? r2.clone() : r2;
                }
                if (void 0 !== this.byParticipantId) for (var i2 in t3.byParticipantId = {}, this.byParticipantId) {
                  var o2 = this.byParticipantId[i2];
                  t3.byParticipantId[i2] = o2 instanceof qa ? o2.clone() : o2;
                }
                return t3;
              } }, { key: "toJSONObject", value: function() {
                var e4 = {};
                if ("boolean" == typeof this.base ? e4.base = this.base : this.base instanceof qa && (e4.base = this.base.toJSONObject()), void 0 !== this.byUserId) for (var t3 in e4.byUserId = {}, this.byUserId) {
                  var n3 = this.byUserId[t3];
                  e4.byUserId[t3] = n3 instanceof qa ? n3.toJSONObject() : n3;
                }
                if (void 0 !== this.byParticipantId) for (var r2 in e4.byParticipantId = {}, this.byParticipantId) {
                  var i2 = this.byParticipantId[r2];
                  e4.byParticipantId[r2] = i2 instanceof qa ? i2.toJSONObject() : i2;
                }
                return e4;
              } }, { key: "toMinifiedJSONObject", value: function() {
                var e4 = {};
                if (void 0 !== this.base && ("boolean" == typeof this.base ? e4.b = this.base : e4.b = this.base.toMinifiedJSONObject()), void 0 !== this.byUserId) for (var t3 in e4.u = {}, this.byUserId) {
                  var n3 = this.byUserId[t3];
                  e4.u[t3] = "boolean" == typeof n3 ? n3 : n3.toMinifiedJSONObject();
                }
                if (void 0 !== this.byParticipantId) for (var r2 in e4.p = {}, this.byParticipantId) {
                  var i2 = this.byParticipantId[r2];
                  e4.p[r2] = "boolean" == typeof i2 ? i2 : i2.toMinifiedJSONObject();
                }
                return e4;
              } }, { key: "normalize", value: function() {
                return this.base instanceof qa && (this.base = this.base.normalize()), this.byUserId && (this.byUserId = Object.fromEntries(Object.entries(this.byUserId).map((function(e4) {
                  var t3 = m(e4, 2), n3 = t3[0], r2 = t3[1];
                  return [n3, r2 instanceof qa ? r2.normalize() : r2];
                })))), this.byParticipantId && (this.byParticipantId = Object.fromEntries(Object.entries(this.byParticipantId).map((function(e4) {
                  var t3 = m(e4, 2), n3 = t3[0], r2 = t3[1];
                  return [n3, r2 instanceof qa ? r2.normalize() : r2];
                })))), this;
              } }], [{ key: "fromJSONObject", value: function(t3) {
                var n3, r2, i2;
                if (void 0 !== t3.base && (n3 = "boolean" == typeof t3.base ? t3.base : qa.fromJSONObject(t3.base)), void 0 !== t3.byUserId) for (var o2 in r2 = {}, t3.byUserId) {
                  var a2 = t3.byUserId[o2];
                  r2[o2] = "boolean" == typeof a2 ? a2 : qa.fromJSONObject(a2);
                }
                if (void 0 !== t3.byParticipantId) for (var s2 in i2 = {}, t3.byParticipantId) {
                  var c2 = t3.byParticipantId[s2];
                  i2[s2] = "boolean" == typeof c2 ? c2 : qa.fromJSONObject(c2);
                }
                return new e3({ base: n3, byUserId: r2, byParticipantId: i2 });
              } }, { key: "fromMinifiedJSONObject", value: function(t3) {
                var n3, r2, i2;
                if (void 0 !== t3.b && (n3 = "boolean" == typeof t3.b ? t3.b : qa.fromMinifiedJSONObject(t3.b)), void 0 !== t3.u) for (var o2 in r2 = {}, t3.u) {
                  var a2 = t3.u[o2];
                  r2[o2] = "boolean" == typeof a2 ? a2 : qa.fromMinifiedJSONObject(a2);
                }
                if (void 0 !== t3.p) for (var s2 in i2 = {}, t3.p) {
                  var c2 = t3.p[s2];
                  i2[s2] = "boolean" == typeof c2 ? c2 : qa.fromMinifiedJSONObject(c2);
                }
                return new e3({ base: n3, byUserId: r2, byParticipantId: i2 });
              } }, { key: "validateJSONObject", value: function(e4) {
                if ("object" !== o(e4)) return [false, "canReceive must be an object"];
                for (var t3 = ["base", "byUserId", "byParticipantId"], n3 = 0, r2 = Object.keys(e4); n3 < r2.length; n3++) {
                  var i2 = r2[n3];
                  if (!t3.includes(i2)) return [false, "canReceive can only contain keys (".concat(t3.join(", "), ")")];
                  if ("base" === i2) {
                    var a2 = m(qa.validateJSONObject(e4.base, true), 2), s2 = a2[0], c2 = a2[1];
                    if (!s2) return [false, c2];
                  } else {
                    if ("object" !== o(e4[i2])) return [false, "invalid (non-object) value for field '".concat(i2, "' in canReceive")];
                    for (var u2 = 0, l2 = Object.values(e4[i2]); u2 < l2.length; u2++) {
                      var d2 = l2[u2], f2 = m(qa.validateJSONObject(d2), 2), p2 = f2[0], h2 = f2[1];
                      if (!p2) return [false, h2];
                    }
                  }
                }
                return [true];
              } }]);
            })()), qa = (function() {
              function e3() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = t3.video, r2 = t3.audio, o2 = t3.screenVideo, a2 = t3.screenAudio, s2 = t3.customVideo, c2 = t3.customAudio;
                i(this, e3), this.video = n3, this.audio = r2, this.screenVideo = o2, this.screenAudio = a2, this.customVideo = s2, this.customAudio = c2;
              }
              return c(e3, [{ key: "clone", value: function() {
                var t3 = new e3();
                return void 0 !== this.video && (t3.video = this.video), void 0 !== this.audio && (t3.audio = this.audio), void 0 !== this.screenVideo && (t3.screenVideo = this.screenVideo), void 0 !== this.screenAudio && (t3.screenAudio = this.screenAudio), void 0 !== this.customVideo && (t3.customVideo = Ra({}, this.customVideo)), void 0 !== this.customAudio && (t3.customAudio = Ra({}, this.customAudio)), t3;
              } }, { key: "toJSONObject", value: function() {
                var e4 = {};
                return void 0 !== this.video && (e4.video = this.video), void 0 !== this.audio && (e4.audio = this.audio), void 0 !== this.screenVideo && (e4.screenVideo = this.screenVideo), void 0 !== this.screenAudio && (e4.screenAudio = this.screenAudio), void 0 !== this.customVideo && (e4.customVideo = Ra({}, this.customVideo)), void 0 !== this.customAudio && (e4.customAudio = Ra({}, this.customAudio)), e4;
              } }, { key: "toMinifiedJSONObject", value: function() {
                var e4 = {};
                return void 0 !== this.video && (e4.v = this.video), void 0 !== this.audio && (e4.a = this.audio), void 0 !== this.screenVideo && (e4.sv = this.screenVideo), void 0 !== this.screenAudio && (e4.sa = this.screenAudio), void 0 !== this.customVideo && (e4.cv = Ra({}, this.customVideo)), void 0 !== this.customAudio && (e4.ca = Ra({}, this.customAudio)), e4;
              } }, { key: "normalize", value: function() {
                function e4(e5, t3) {
                  return e5 && 1 === Object.keys(e5).length && e5["*"] === t3;
                }
                return !(true !== this.video || true !== this.audio || true !== this.screenVideo || true !== this.screenAudio || !e4(this.customVideo, true) || !e4(this.customAudio, true)) || (false !== this.video || false !== this.audio || false !== this.screenVideo || false !== this.screenAudio || !e4(this.customVideo, false) || !e4(this.customAudio, false)) && this;
              } }], [{ key: "fromBoolean", value: function(t3) {
                return new e3({ video: t3, audio: t3, screenVideo: t3, screenAudio: t3, customVideo: { "*": t3 }, customAudio: { "*": t3 } });
              } }, { key: "fromJSONObject", value: function(t3) {
                return new e3({ video: t3.video, audio: t3.audio, screenVideo: t3.screenVideo, screenAudio: t3.screenAudio, customVideo: void 0 !== t3.customVideo ? Ra({}, t3.customVideo) : void 0, customAudio: void 0 !== t3.customAudio ? Ra({}, t3.customAudio) : void 0 });
              } }, { key: "fromMinifiedJSONObject", value: function(t3) {
                return new e3({ video: t3.v, audio: t3.a, screenVideo: t3.sv, screenAudio: t3.sa, customVideo: t3.cv, customAudio: t3.ca });
              } }, { key: "validateJSONObject", value: function(e4, t3) {
                if ("boolean" == typeof e4) return [true];
                if ("object" !== o(e4)) return [false, "invalid (non-object, non-boolean) value in canReceive"];
                for (var n3 = Object.keys(e4), r2 = 0, i2 = n3; r2 < i2.length; r2++) {
                  var a2 = i2[r2];
                  if (!Va.includes(a2)) return [false, "invalid media type '".concat(a2, "' in canReceive")];
                  if (Ba.includes(a2)) {
                    if ("boolean" != typeof e4[a2]) return [false, "invalid (non-boolean) value for media type '".concat(a2, "' in canReceive")];
                  } else {
                    if ("object" !== o(e4[a2])) return [false, "invalid (non-object) value for media type '".concat(a2, "' in canReceive")];
                    for (var s2 = 0, c2 = Object.values(e4[a2]); s2 < c2.length; s2++) if ("boolean" != typeof c2[s2]) return [false, "invalid (non-boolean) value for entry within '".concat(a2, "' in canReceive")];
                    if (t3 && void 0 === e4[a2]["*"]) return [false, `canReceive "base" permission must specify "*" as an entry within '`.concat(a2, "'")];
                  }
                }
                return t3 && n3.length !== Va.length ? [false, 'canReceive "base" permission must specify all media types: '.concat(Va.join(", "), " (or be set to a boolean shorthand)")] : [true];
              } }]);
            })(), Wa = ["result"], Ga = ["preserveIframe"];
            function za(e3, t3) {
              var n3 = Object.keys(e3);
              if (Object.getOwnPropertySymbols) {
                var r2 = Object.getOwnPropertySymbols(e3);
                t3 && (r2 = r2.filter((function(t4) {
                  return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                }))), n3.push.apply(n3, r2);
              }
              return n3;
            }
            function Ha(e3) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var n3 = null != arguments[t3] ? arguments[t3] : {};
                t3 % 2 ? za(Object(n3), true).forEach((function(t4) {
                  p(e3, t4, n3[t4]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : za(Object(n3)).forEach((function(t4) {
                  Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
                }));
              }
              return e3;
            }
            function Ka() {
              try {
                var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
                })));
              } catch (e4) {
              }
              return (Ka = function() {
                return !!e3;
              })();
            }
            function Qa(e3, t3) {
              var n3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
              if (!n3) {
                if (Array.isArray(e3) || (n3 = (function(e4, t4) {
                  if (e4) {
                    if ("string" == typeof e4) return Xa(e4, t4);
                    var n4 = {}.toString.call(e4).slice(8, -1);
                    return "Object" === n4 && e4.constructor && (n4 = e4.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e4) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? Xa(e4, t4) : void 0;
                  }
                })(e3)) || t3 && e3 && "number" == typeof e3.length) {
                  n3 && (e3 = n3);
                  var r2 = 0, i2 = function() {
                  };
                  return { s: i2, n: function() {
                    return r2 >= e3.length ? { done: true } : { done: false, value: e3[r2++] };
                  }, e: function(e4) {
                    throw e4;
                  }, f: i2 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var o2, a2 = true, s2 = false;
              return { s: function() {
                n3 = n3.call(e3);
              }, n: function() {
                var e4 = n3.next();
                return a2 = e4.done, e4;
              }, e: function(e4) {
                s2 = true, o2 = e4;
              }, f: function() {
                try {
                  a2 || null == n3.return || n3.return();
                } finally {
                  if (s2) throw o2;
                }
              } };
            }
            function Xa(e3, t3) {
              (null == t3 || t3 > e3.length) && (t3 = e3.length);
              for (var n3 = 0, r2 = Array(t3); n3 < t3; n3++) r2[n3] = e3[n3];
              return r2;
            }
            var Za = {}, es = "video", ts = "voice", ns = Po() ? { data: {} } : { data: {}, topology: "none" }, rs = { present: 0, hidden: 0 }, is = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, os = Object.keys(is), as = ["state", "volume", "simulcastEncodings"], ss = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, cs = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string", visualState: "'default' | 'sidebar-open' | 'active'" } }, us = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, ls = { customIntegrations: { validate: js, help: Ds() }, customTrayButtons: { validate: Ns, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(cs)) }, url: { validate: function(e3) {
              return "string" == typeof e3;
            }, help: "url should be a string" }, baseUrl: { validate: function(e3) {
              return "string" == typeof e3;
            }, help: "baseUrl should be a string" }, token: { validate: function(e3) {
              return "string" == typeof e3;
            }, help: "token should be a string", queryString: "t" }, dailyConfig: { validate: function(e3, t3) {
              try {
                return t3.validateDailyConfig(e3), true;
              } catch (e4) {
                console.error("Failed to validate dailyConfig", e4);
              }
              return false;
            }, help: "Unsupported dailyConfig. Check error logs for detailed info." }, reactNativeConfig: { validate: function(e3) {
              return Rs(e3, ss);
            }, help: "reactNativeConfig should look like ".concat(JSON.stringify(ss), ", all fields optional") }, lang: { validate: function(e3) {
              return ["da", "de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(e3);
            }, help: "language not supported. Options are: da, de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user" }, userName: true, userData: { validate: function(e3) {
              try {
                return Es(e3), true;
              } catch (e4) {
                return console.error(e4), false;
              }
            }, help: "invalid userData type provided" }, startVideoOff: true, startAudioOff: true, allowLocalVideo: true, allowLocalAudio: true, activeSpeakerMode: true, showLeaveButton: true, showLocalVideo: true, showParticipantsBar: true, showFullscreenButton: true, showUserNameChangeUI: true, iframeStyle: true, customLayout: true, cssFile: true, cssText: true, bodyClass: true, videoSource: { validate: function(e3, t3) {
              if ("boolean" == typeof e3) return t3._preloadCache.allowLocalVideo = e3, true;
              var n3;
              if (e3 instanceof MediaStreamTrack) t3._sharedTracks.videoTrack = e3, n3 = { customTrack: ko };
              else {
                if (delete t3._sharedTracks.videoTrack, "string" != typeof e3) return console.error("videoSource must be a MediaStreamTrack, boolean, or a string"), false;
                n3 = { deviceId: e3 };
              }
              return t3._updatePreloadCacheInputSettings({ video: { settings: n3 } }, false), true;
            } }, audioSource: { validate: function(e3, t3) {
              if ("boolean" == typeof e3) return t3._preloadCache.allowLocalAudio = e3, true;
              var n3;
              if (e3 instanceof MediaStreamTrack) t3._sharedTracks.audioTrack = e3, n3 = { customTrack: ko };
              else {
                if (delete t3._sharedTracks.audioTrack, "string" != typeof e3) return console.error("audioSource must be a MediaStreamTrack, boolean, or a string"), false;
                n3 = { deviceId: e3 };
              }
              return t3._updatePreloadCacheInputSettings({ audio: { settings: n3 } }, false), true;
            } }, subscribeToTracksAutomatically: { validate: function(e3, t3) {
              return t3._preloadCache.subscribeToTracksAutomatically = e3, true;
            } }, theme: { validate: function(e3) {
              var t3 = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], n3 = function(e4) {
                for (var n4 = 0, r2 = Object.keys(e4); n4 < r2.length; n4++) {
                  var i2 = r2[n4];
                  if (!t3.includes(i2)) return console.error('unsupported color "'.concat(i2, '". Valid colors: ').concat(t3.join(", "))), false;
                  if (!e4[i2].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(i2, ' theme color should be provided in valid hex color format. Received: "').concat(e4[i2], '"')), false;
                }
                return true;
              };
              return "object" === o(e3) && ("light" in e3 && "dark" in e3 || "colors" in e3) ? "light" in e3 && "dark" in e3 ? "colors" in e3.light ? "colors" in e3.dark ? n3(e3.light.colors) && n3(e3.dark.colors) : (console.error('Dark theme is missing "colors" property.', e3), false) : (console.error('Light theme is missing "colors" property.', e3), false) : n3(e3.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', e3), false);
            }, help: "unsupported theme configuration. Check error logs for detailed info." }, layoutConfig: { validate: function(e3) {
              if ("grid" in e3) {
                var t3 = e3.grid;
                if ("maxTilesPerPage" in t3) {
                  if (!Number.isInteger(t3.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(t3.maxTilesPerPage, ".")), false;
                  if (t3.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), false;
                }
                if ("minTilesPerPage" in t3) {
                  if (!Number.isInteger(t3.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(t3.minTilesPerPage, ".")), false;
                  if (t3.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), false;
                  if ("maxTilesPerPage" in t3 && t3.minTilesPerPage > t3.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), false;
                }
              }
              return true;
            }, help: "unsupported layoutConfig. Check error logs for detailed info." }, receiveSettings: { validate: function(e3) {
              return Ts(e3, { allowAllParticipantsKey: false });
            }, help: Ls({ allowAllParticipantsKey: false }) }, sendSettings: { validate: function(e3, t3) {
              return !!(function(e4, t4) {
                try {
                  return t4.validateUpdateSendSettings(e4), true;
                } catch (e5) {
                  return console.error("Failed to validate send settings", e5), false;
                }
              })(e3, t3) && (t3._preloadCache.sendSettings = e3, true);
            }, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(e3, t3) {
              var n3;
              return !!Ms(e3) && (t3._inputSettings || (t3._inputSettings = {}), As(e3, null === (n3 = t3.properties) || void 0 === n3 ? void 0 : n3.dailyConfig, t3._sharedTracks), t3._updatePreloadCacheInputSettings(e3, true), true);
            }, help: Is() }, layout: { validate: function(e3) {
              return "custom-v1" === e3 || "browser" === e3 || "none" === e3;
            }, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, proxy: { queryString: "proxy" }, strictMode: true, allowMultipleCallInstances: true }, ds = { styles: { validate: function(e3) {
              for (var t3 in e3) if ("cam" !== t3 && "screen" !== t3) return false;
              if (e3.cam) {
                for (var n3 in e3.cam) if ("div" !== n3 && "video" !== n3) return false;
              }
              if (e3.screen) {
                for (var r2 in e3.screen) if ("div" !== r2 && "video" !== r2) return false;
              }
              return true;
            }, help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }" }, setSubscribedTracks: { validate: function(e3, t3) {
              if (t3._preloadCache.subscribeToTracksAutomatically) return false;
              var n3 = [true, false, "staged"];
              if (n3.includes(e3) || !Po() && "avatar" === e3) return true;
              var r2 = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"], i2 = function(e4) {
                var t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                for (var o2 in e4) if ("custom" === o2) {
                  if (!n3.includes(e4[o2]) && !i2(e4[o2], true)) return false;
                } else {
                  var a2 = !t4 && !r2.includes(o2), s2 = !n3.includes(e4[o2]);
                  if (a2 || s2) return false;
                }
                return true;
              };
              return i2(e3);
            }, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(Po() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: true, setVideo: true, setScreenShare: { validate: function(e3) {
              return false === e3;
            }, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: true, updatePermissions: { validate: function(e3) {
              for (var t3 = 0, n3 = Object.entries(e3); t3 < n3.length; t3++) {
                var r2 = m(n3[t3], 2), i2 = r2[0], o2 = r2[1];
                switch (i2) {
                  case "hasPresence":
                    if ("boolean" != typeof o2) return false;
                    break;
                  case "canSend":
                    if (o2 instanceof Set || o2 instanceof Array || Array.isArray(o2)) {
                      var a2, s2 = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], c2 = Qa(o2);
                      try {
                        for (c2.s(); !(a2 = c2.n()).done; ) {
                          var u2 = a2.value;
                          if (!s2.includes(u2)) return false;
                        }
                      } catch (e4) {
                        c2.e(e4);
                      } finally {
                        c2.f();
                      }
                    } else if ("boolean" != typeof o2) return false;
                    (o2 instanceof Array || Array.isArray(o2)) && (e3.canSend = new Set(o2));
                    break;
                  case "canReceive":
                    var l2 = m($a.validateJSONObject(o2), 2), d2 = l2[0], f2 = l2[1];
                    if (!d2) return console.error(f2), false;
                    break;
                  case "canAdmin":
                    if (o2 instanceof Set || o2 instanceof Array || Array.isArray(o2)) {
                      var p2, h2 = ["participants", "streaming", "transcription"], v2 = Qa(o2);
                      try {
                        for (v2.s(); !(p2 = v2.n()).done; ) {
                          var g2 = p2.value;
                          if (!h2.includes(g2)) return false;
                        }
                      } catch (e4) {
                        v2.e(e4);
                      } finally {
                        v2.f();
                      }
                    } else if ("boolean" != typeof o2) return false;
                    (o2 instanceof Array || Array.isArray(o2)) && (e3.canAdmin = new Set(o2));
                    break;
                  default:
                    return false;
                }
              }
              return true;
            }, help: "updatePermissions can take hasPresence, canSend, canReceive, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canReceive must be an object specifying base, byUserId, and/or byParticipantId fields (see documentation for more details). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)." } };
            Promise.any || (Promise.any = (function() {
              var e3 = v((function* (e4) {
                return new Promise((function(t3, n3) {
                  var r2 = [];
                  e4.forEach((function(i2) {
                    return Promise.resolve(i2).then((function(e5) {
                      t3(e5);
                    })).catch((function(t4) {
                      r2.push(t4), r2.length === e4.length && n3(r2);
                    }));
                  }));
                }));
              }));
              return function(t3) {
                return e3.apply(this, arguments);
              };
            })());
            var fs = (function(e3) {
              function t3(e4) {
                var n4, r2, o2, a3, s3, c2, d3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (i(this, t3), o2 = this, a3 = l(a3 = t3), p(r2 = u(o2, Ka() ? Reflect.construct(a3, [], l(o2).constructor) : a3.apply(o2, s3)), "startListeningForDeviceChanges", (function() {
                  La(r2.handleDeviceChange);
                })), p(r2, "stopListeningForDeviceChanges", (function() {
                  var e5;
                  e5 = r2.handleDeviceChange, Da() ? (function(e6) {
                    Aa.has(e6) && (Aa.delete(e6), 0 === Aa.size && Ca && (navigator.mediaDevices.removeEventListener("devicechange", Ca), Ca = null));
                  })(e5) : (function(e6) {
                    Pa.has(e6) && (Pa.delete(e6), 0 === Pa.size && Ia && (clearInterval(Ia), Ia = null));
                  })(e5);
                })), p(r2, "handleDeviceChange", (function(e5) {
                  e5 = e5.map((function(e6) {
                    return JSON.parse(JSON.stringify(e6));
                  })), r2.emitDailyJSEvent({ action: "available-devices-updated", availableDevices: e5 });
                })), p(r2, "handleNativeAppStateChange", (function() {
                  var e5 = v((function* (e6) {
                    if ("destroyed" === e6) return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield r2.destroy());
                    var t4 = "active" === e6;
                    r2.disableReactNativeAutoDeviceManagement("video") || (t4 ? r2.camUnmutedBeforeLosingNativeActiveState && r2.setLocalVideo(true) : (r2.camUnmutedBeforeLosingNativeActiveState = r2.localVideo(), r2.camUnmutedBeforeLosingNativeActiveState && r2.setLocalVideo(false)));
                  }));
                  return function(t4) {
                    return e5.apply(this, arguments);
                  };
                })()), p(r2, "handleNativeAudioFocusChange", (function(e5) {
                  r2.disableReactNativeAutoDeviceManagement("audio") || (r2._hasNativeAudioFocus = e5, r2.toggleParticipantAudioBasedOnNativeAudioFocus(), r2._hasNativeAudioFocus ? r2.micUnmutedBeforeLosingNativeAudioFocus && r2.setLocalAudio(true) : (r2.micUnmutedBeforeLosingNativeAudioFocus = r2.localAudio(), r2.setLocalAudio(false)));
                })), p(r2, "handleNativeSystemScreenCaptureStop", (function() {
                  r2.stopScreenShare();
                })), !xo() && !Po()) throw new Error("WebRTC not supported or suppressed");
                if (r2.strictMode = void 0 === d3.strictMode || d3.strictMode, r2.allowMultipleCallInstances = null !== (n4 = d3.allowMultipleCallInstances) && void 0 !== n4 && n4, Object.keys(Za).length && (r2._logDuplicateInstanceAttempt(), !r2.allowMultipleCallInstances)) {
                  if (r2.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
                  console.warn("Using strictMode: false to allow multiple call instances is now deprecated. Set `allowMultipleCallInstances: true`");
                }
                if (window._daily || (window._daily = { pendings: [], instances: {} }), r2.callClientId = T(), Za[(c2 = r2).callClientId] = c2, window._daily.instances[r2.callClientId] = {}, r2._sharedTracks = {}, window._daily.instances[r2.callClientId].tracks = r2._sharedTracks, d3.dailyJsVersion = t3.version(), r2._iframe = e4, r2._callObjectMode = "none" === d3.layout && !r2._iframe, r2._preloadCache = { subscribeToTracksAutomatically: true, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, void 0 !== d3.showLocalVideo ? r2._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : r2._showLocalVideo = !!d3.showLocalVideo : r2._showLocalVideo = true, void 0 !== d3.showParticipantsBar ? r2._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : r2._showParticipantsBar = !!d3.showParticipantsBar : r2._showParticipantsBar = true, void 0 !== d3.customIntegrations ? r2._callObjectMode ? console.error("customIntegrations is not available in call object mode") : r2._customIntegrations = d3.customIntegrations : r2._customIntegrations = {}, void 0 !== d3.customTrayButtons ? r2._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : r2._customTrayButtons = d3.customTrayButtons : r2._customTrayButtons = {}, void 0 !== d3.activeSpeakerMode ? r2._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : r2._activeSpeakerMode = !!d3.activeSpeakerMode : r2._activeSpeakerMode = false, d3.receiveSettings ? r2._callObjectMode ? r2._receiveSettings = d3.receiveSettings : console.error("receiveSettings is only available in call object mode") : r2._receiveSettings = {}, r2.validateProperties(d3), r2.properties = Ha({}, d3), r2._inputSettings || (r2._inputSettings = {}), r2._callObjectLoader = r2._callObjectMode ? new ua(r2.callClientId) : null, r2._callState = Or, r2._isPreparingToJoin = false, r2._accessState = { access: Jr }, r2._meetingSessionSummary = {}, r2._finalSummaryOfPrevSession = {}, r2._meetingSessionState = Us(ns, r2._callObjectMode), r2._nativeInCallAudioMode = es, r2._participants = {}, r2._isScreenSharing = false, r2._participantCounts = rs, r2._rmpPlayerState = {}, r2._waitingParticipants = {}, r2._network = { threshold: "good", quality: 100, networkState: "unknown", stats: {} }, r2._activeSpeaker = {}, r2._localAudioLevel = 0, r2._isLocalAudioLevelObserverRunning = false, r2._remoteParticipantsAudioLevel = {}, r2._isRemoteParticipantsAudioLevelObserverRunning = false, r2._maxAppMessageSize = mo, r2._messageChannel = Po() ? new ea() : new Qo(), r2._iframe && (r2._iframe.requestFullscreen ? r2._iframe.addEventListener("fullscreenchange", (function() {
                  document.fullscreenElement === r2._iframe ? (r2.emitDailyJSEvent({ action: oo }), r2.sendMessageToCallMachine({ action: oo })) : (r2.emitDailyJSEvent({ action: ao }), r2.sendMessageToCallMachine({ action: ao }));
                })) : r2._iframe.webkitRequestFullscreen && r2._iframe.addEventListener("webkitfullscreenchange", (function() {
                  document.webkitFullscreenElement === r2._iframe ? (r2.emitDailyJSEvent({ action: oo }), r2.sendMessageToCallMachine({ action: oo })) : (r2.emitDailyJSEvent({ action: ao }), r2.sendMessageToCallMachine({ action: ao }));
                }))), Po()) {
                  var f2 = r2.nativeUtils();
                  f2.addAudioFocusChangeListener && f2.removeAudioFocusChangeListener && f2.addAppStateChangeListener && f2.removeAppStateChangeListener && f2.addSystemScreenCaptureStopListener && f2.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), r2._hasNativeAudioFocus = true, f2.addAudioFocusChangeListener(r2.handleNativeAudioFocusChange), f2.addAppStateChangeListener(r2.handleNativeAppStateChange), f2.addSystemScreenCaptureStopListener(r2.handleNativeSystemScreenCaptureStop);
                }
                return r2._callObjectMode && r2.startListeningForDeviceChanges(), r2._messageChannel.addListenerForMessagesFromCallMachine(r2.handleMessageFromCallMachine, r2.callClientId, r2), r2;
              }
              return f(t3, e3), c(t3, [{ key: "destroy", value: (te2 = v((function* () {
                var e4;
                try {
                  yield this.leave();
                } catch (e5) {
                }
                var t4 = this._iframe;
                if (t4) {
                  var n4 = t4.parentElement;
                  n4 && n4.removeChild(t4);
                }
                if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), Po()) {
                  var r2 = this.nativeUtils();
                  r2.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), r2.removeAppStateChangeListener(this.handleNativeAppStateChange), r2.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
                }
                this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = true, this.emitDailyJSEvent({ action: "call-instance-destroyed" }), delete Za[this.callClientId], (null === (e4 = window) || void 0 === e4 || null === (e4 = e4._daily) || void 0 === e4 ? void 0 : e4.instances) && delete window._daily.instances[this.callClientId], this.strictMode && (this.callClientId = void 0);
              })), function() {
                return te2.apply(this, arguments);
              }) }, { key: "isDestroyed", value: function() {
                return !!this._destroyed;
              } }, { key: "loadCss", value: function(e4) {
                var t4 = e4.bodyClass, n4 = e4.cssFile, r2 = e4.cssText;
                return ws(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(n4), bodyClass: t4, cssText: r2 }), this;
              } }, { key: "iframe", value: function() {
                return ws(), this._iframe;
              } }, { key: "meetingState", value: function() {
                return this._callState;
              } }, { key: "accessState", value: function() {
                return bs(this._callObjectMode, "accessState()"), this._accessState;
              } }, { key: "participants", value: function() {
                return this._participants;
              } }, { key: "participantCounts", value: function() {
                return this._participantCounts;
              } }, { key: "waitingParticipants", value: function() {
                return bs(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
              } }, { key: "validateParticipantProperties", value: function(e4, t4) {
                for (var n4 in t4) {
                  if (!ds[n4]) throw new Error("unrecognized updateParticipant property ".concat(n4));
                  if (ds[n4].validate && !ds[n4].validate(t4[n4], this, this._participants[e4])) throw new Error(ds[n4].help);
                }
              } }, { key: "updateParticipant", value: function(e4, t4) {
                return this._participants.local && this._participants.local.session_id === e4 && (e4 = "local"), e4 && t4 && (this.validateParticipantProperties(e4, t4), this.sendMessageToCallMachine({ action: "update-participant", id: e4, properties: t4 })), this;
              } }, { key: "updateParticipants", value: function(e4) {
                var t4 = this._participants.local && this._participants.local.session_id;
                for (var n4 in e4) n4 === t4 && (n4 = "local"), n4 && e4[n4] && this.validateParticipantProperties(n4, e4[n4]);
                return this.sendMessageToCallMachine({ action: "update-participants", participants: e4 }), this;
              } }, { key: "updateWaitingParticipant", value: (ee2 = v((function* () {
                var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (bs(this._callObjectMode, "updateWaitingParticipant()"), vs(this._callState, "updateWaitingParticipant()"), "string" != typeof t4 || "object" !== o(n4)) throw new Error("updateWaitingParticipant() must take an id string and a updates object");
                return new Promise((function(r2, i2) {
                  e4.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: t4, updates: n4 }, (function(e5) {
                    e5.error && i2(e5.error), e5.id || i2(new Error("unknown error in updateWaitingParticipant()")), r2({ id: e5.id });
                  }));
                }));
              })), function() {
                return ee2.apply(this, arguments);
              }) }, { key: "updateWaitingParticipants", value: (Z2 = v((function* () {
                var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (bs(this._callObjectMode, "updateWaitingParticipants()"), vs(this._callState, "updateWaitingParticipants()"), "object" !== o(t4)) throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
                return new Promise((function(n4, r2) {
                  e4.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: t4 }, (function(e5) {
                    e5.error && r2(e5.error), e5.ids || r2(new Error("unknown error in updateWaitingParticipants()")), n4({ ids: e5.ids });
                  }));
                }));
              })), function() {
                return Z2.apply(this, arguments);
              }) }, { key: "requestAccess", value: (X2 = v((function* () {
                var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n4 = t4.access, r2 = void 0 === n4 ? { level: Yr } : n4, i2 = t4.name, o2 = void 0 === i2 ? "" : i2;
                return bs(this._callObjectMode, "requestAccess()"), vs(this._callState, "requestAccess()"), new Promise((function(t5, n5) {
                  e4.sendMessageToCallMachine({ action: "daily-method-request-access", access: r2, name: o2 }, (function(e5) {
                    e5.error && n5(e5.error), e5.access || n5(new Error("unknown error in requestAccess()")), t5({ access: e5.access, granted: e5.granted });
                  }));
                }));
              })), function() {
                return X2.apply(this, arguments);
              }) }, { key: "localAudio", value: function() {
                return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
              } }, { key: "localVideo", value: function() {
                return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
              } }, { key: "setLocalAudio", value: function(e4) {
                var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "forceDiscardTrack" in t4 && (Po() ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), t4 = {}) : e4 && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), t4 = {})), this.sendMessageToCallMachine({ action: "local-audio", state: e4, options: t4 }), this;
              } }, { key: "localScreenAudio", value: function() {
                return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null;
              } }, { key: "localScreenVideo", value: function() {
                return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null;
              } }, { key: "updateScreenShare", value: function(e4) {
                if (this._isScreenSharing) return this.sendMessageToCallMachine({ action: "local-screen-update", options: e4 }), this;
                console.warn("There is no screen share in progress. Try calling startScreenShare first.");
              } }, { key: "setLocalVideo", value: function(e4) {
                return this.sendMessageToCallMachine({ action: "local-video", state: e4 }), this;
              } }, { key: "_setAllowLocalAudio", value: function(e4) {
                if (this._preloadCache.allowLocalAudio = e4, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-audio", state: e4 }), this;
              } }, { key: "_setAllowLocalVideo", value: function(e4) {
                if (this._preloadCache.allowLocalVideo = e4, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-video", state: e4 }), this;
              } }, { key: "getReceiveSettings", value: (Q2 = v((function* (e4) {
                var t4 = this, n4 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).showInheritedValues, r2 = void 0 !== n4 && n4;
                if (bs(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized) return this._receiveSettings;
                switch (o(e4)) {
                  case "string":
                    return new Promise((function(n5) {
                      t4.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: e4, showInheritedValues: r2 }, (function(e5) {
                        n5(e5.receiveSettings);
                      }));
                    }));
                  case "undefined":
                    return this._receiveSettings;
                  default:
                    throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
                }
              })), function(e4) {
                return Q2.apply(this, arguments);
              }) }, { key: "updateReceiveSettings", value: (K2 = v((function* (e4) {
                var t4 = this;
                if (bs(this._callObjectMode, "updateReceiveSettings()"), !Ts(e4, { allowAllParticipantsKey: true })) throw new Error(Ls({ allowAllParticipantsKey: true }));
                return vs(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise((function(n4) {
                  t4.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: e4 }, (function(e5) {
                    n4({ receiveSettings: e5.receiveSettings });
                  }));
                }));
              })), function(e4) {
                return K2.apply(this, arguments);
              }) }, { key: "_prepInputSettingsForSharing", value: function(e4, t4) {
                if (e4) {
                  var n4 = {};
                  if (e4.audio) {
                    var r2, i2, o2;
                    e4.audio.settings && (!Object.keys(e4.audio.settings).length && t4 || (n4.audio = { settings: Ha({}, e4.audio.settings) })), t4 && null !== (r2 = n4.audio) && void 0 !== r2 && null !== (r2 = r2.settings) && void 0 !== r2 && r2.customTrack && (n4.audio.settings = { customTrack: this._sharedTracks.audioTrack });
                    var a3 = "none" === (null === (i2 = e4.audio.processor) || void 0 === i2 ? void 0 : i2.type) && (null === (o2 = e4.audio.processor) || void 0 === o2 ? void 0 : o2._isDefaultWhenNone);
                    if (e4.audio.processor && !a3) {
                      var s3 = Ha({}, e4.audio.processor);
                      delete s3._isDefaultWhenNone, n4.audio = Ha(Ha({}, n4.audio), {}, { processor: s3 });
                    }
                  }
                  if (e4.video) {
                    var c2, u2, l2;
                    e4.video.settings && (!Object.keys(e4.video.settings).length && t4 || (n4.video = { settings: Ha({}, e4.video.settings) })), t4 && null !== (c2 = n4.video) && void 0 !== c2 && null !== (c2 = c2.settings) && void 0 !== c2 && c2.customTrack && (n4.video.settings = { customTrack: this._sharedTracks.videoTrack });
                    var d3 = "none" === (null === (u2 = e4.video.processor) || void 0 === u2 ? void 0 : u2.type) && (null === (l2 = e4.video.processor) || void 0 === l2 ? void 0 : l2._isDefaultWhenNone);
                    if (e4.video.processor && !d3) {
                      var f2 = Ha({}, e4.video.processor);
                      delete f2._isDefaultWhenNone, n4.video = Ha(Ha({}, n4.video), {}, { processor: f2 });
                    }
                  }
                  return n4;
                }
              } }, { key: "getInputSettings", value: function() {
                var e4 = this;
                return ws(), new Promise((function(t4) {
                  t4(e4._getInputSettings());
                }));
              } }, { key: "_getInputSettings", value: function() {
                var e4, t4, n4, r2, i2, o2, a3 = { processor: { type: "none", _isDefaultWhenNone: true } };
                this._inputSettings ? (e4 = (null === (n4 = this._inputSettings) || void 0 === n4 ? void 0 : n4.video) || a3, t4 = (null === (r2 = this._inputSettings) || void 0 === r2 ? void 0 : r2.audio) || a3) : (e4 = (null === (i2 = this._preloadCache) || void 0 === i2 || null === (i2 = i2.inputSettings) || void 0 === i2 ? void 0 : i2.video) || a3, t4 = (null === (o2 = this._preloadCache) || void 0 === o2 || null === (o2 = o2.inputSettings) || void 0 === o2 ? void 0 : o2.audio) || a3);
                var s3 = { audio: t4, video: e4 };
                return this._prepInputSettingsForSharing(s3, true);
              } }, { key: "_updatePreloadCacheInputSettings", value: function(e4, t4) {
                var n4, r2, i2, o2, a3, s3, c2 = this._inputSettings || {}, u2 = {};
                e4.video ? (u2.video = {}, e4.video.settings ? (u2.video.settings = {}, t4 || e4.video.settings.customTrack || null === (i2 = c2.video) || void 0 === i2 || !i2.settings ? u2.video.settings = e4.video.settings : u2.video.settings = Ha(Ha({}, c2.video.settings), e4.video.settings), Object.keys(u2.video.settings).length || delete u2.video.settings) : null !== (n4 = c2.video) && void 0 !== n4 && n4.settings && (u2.video.settings = c2.video.settings), e4.video.processor ? u2.video.processor = e4.video.processor : null !== (r2 = c2.video) && void 0 !== r2 && r2.processor && (u2.video.processor = c2.video.processor)) : c2.video && (u2.video = c2.video);
                e4.audio ? (u2.audio = {}, e4.audio.settings ? (u2.audio.settings = {}, t4 || e4.audio.settings.customTrack || null === (s3 = c2.audio) || void 0 === s3 || !s3.settings ? u2.audio.settings = e4.audio.settings : u2.audio.settings = Ha(Ha({}, c2.audio.settings), e4.audio.settings), Object.keys(u2.audio.settings).length || delete u2.audio.settings) : null !== (o2 = c2.audio) && void 0 !== o2 && o2.settings && (u2.audio.settings = c2.audio.settings), e4.audio.processor ? u2.audio.processor = e4.audio.processor : null !== (a3 = c2.audio) && void 0 !== a3 && a3.processor && (u2.audio.processor = c2.audio.processor)) : c2.audio && (u2.audio = c2.audio);
                this._maybeUpdateInputSettings(u2);
              } }, { key: "_devicesFromInputSettings", value: function(e4) {
                var t4, n4, r2 = (null == e4 || null === (t4 = e4.video) || void 0 === t4 || null === (t4 = t4.settings) || void 0 === t4 ? void 0 : t4.deviceId) || null, i2 = (null == e4 || null === (n4 = e4.audio) || void 0 === n4 || null === (n4 = n4.settings) || void 0 === n4 ? void 0 : n4.deviceId) || null, o2 = this._preloadCache.outputDeviceId || null;
                return { camera: r2 ? { deviceId: r2 } : {}, mic: i2 ? { deviceId: i2 } : {}, speaker: o2 ? { deviceId: o2 } : {} };
              } }, { key: "updateInputSettings", value: (H2 = v((function* (e4) {
                var t4 = this;
                return ws(), Ms(e4) ? e4.video || e4.audio ? (As(e4, this.properties.dailyConfig, this._sharedTracks), this._callObjectMode && !this._callMachineInitialized ? (this._updatePreloadCacheInputSettings(e4, true), this._getInputSettings()) : new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: e4 }, (function(i2) {
                    if (i2.error) r2(i2.error);
                    else {
                      if (i2.returnPreloadCache) return t4._updatePreloadCacheInputSettings(e4, true), void n4(t4._getInputSettings());
                      t4._maybeUpdateInputSettings(i2.inputSettings), n4(t4._prepInputSettingsForSharing(i2.inputSettings, true));
                    }
                  }));
                }))) : this._getInputSettings() : (console.error(Is()), Promise.reject(Is()));
              })), function(e4) {
                return H2.apply(this, arguments);
              }) }, { key: "setBandwidth", value: function(e4) {
                var t4 = e4.kbs, n4 = e4.trackConstraints;
                if (ws(), this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: t4, trackConstraints: n4 }), this;
              } }, { key: "getDailyLang", value: function() {
                var e4 = this;
                if (ws(), this._callMachineInitialized) return new Promise((function(t4) {
                  e4.sendMessageToCallMachine({ action: "get-daily-lang" }, (function(e5) {
                    delete e5.action, delete e5.callbackStamp, t4(e5);
                  }));
                }));
              } }, { key: "setDailyLang", value: function(e4) {
                return ws(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: e4 }), this;
              } }, { key: "setProxyUrl", value: function(e4) {
                return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: e4 }), this;
              } }, { key: "setIceConfig", value: function(e4) {
                return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: e4 }), this;
              } }, { key: "meetingSessionSummary", value: function() {
                return [Nr, jr].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
              } }, { key: "getMeetingSession", value: (z2 = v((function* () {
                var e4 = this;
                return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), vs(this._callState, "getMeetingSession()"), new Promise((function(t4) {
                  e4.sendMessageToCallMachine({ action: "get-meeting-session" }, (function(e5) {
                    delete e5.action, delete e5.callbackStamp, t4(e5);
                  }));
                }));
              })), function() {
                return z2.apply(this, arguments);
              }) }, { key: "meetingSessionState", value: function() {
                return vs(this._callState, "meetingSessionState"), this._meetingSessionState;
              } }, { key: "setMeetingSessionData", value: function(e4) {
                var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "replace";
                bs(this._callObjectMode, "setMeetingSessionData()"), vs(this._callState, "setMeetingSessionData");
                try {
                  !(function(e5, t5) {
                    new ia({ data: e5, mergeStrategy: t5 });
                  })(e4, t4);
                } catch (e5) {
                  throw console.error(e5), e5;
                }
                try {
                  this.sendMessageToCallMachine({ action: "set-session-data", data: e4, mergeStrategy: t4 });
                } catch (e5) {
                  throw new Error("Error setting meeting session data: ".concat(e5));
                }
              } }, { key: "setUserName", value: function(e4, t4) {
                var n4 = this;
                return this.properties.userName = e4, new Promise((function(r2) {
                  n4.sendMessageToCallMachine({ action: "set-user-name", name: null != e4 ? e4 : "", thisMeetingOnly: Po() || !!t4 && !!t4.thisMeetingOnly }, (function(e5) {
                    delete e5.action, delete e5.callbackStamp, r2(e5);
                  }));
                }));
              } }, { key: "setUserData", value: (G2 = v((function* (e4) {
                var t4 = this;
                try {
                  Es(e4);
                } catch (e5) {
                  throw console.error(e5), e5;
                }
                if (this.properties.userData = e4, this._callMachineInitialized) return new Promise((function(n4) {
                  try {
                    t4.sendMessageToCallMachine({ action: "set-user-data", userData: e4 }, (function(e5) {
                      delete e5.action, delete e5.callbackStamp, n4(e5);
                    }));
                  } catch (e5) {
                    throw new Error("Error setting user data: ".concat(e5));
                  }
                }));
              })), function(e4) {
                return G2.apply(this, arguments);
              }) }, { key: "validateAudioLevelInterval", value: function(e4) {
                if (e4 && (e4 < 100 || "number" != typeof e4)) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
              } }, { key: "startLocalAudioLevelObserver", value: function(e4) {
                var t4 = this;
                if ("undefined" == typeof AudioWorkletNode && !Po()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
                if (this.validateAudioLevelInterval(e4), this._callMachineInitialized) return this._isLocalAudioLevelObserverRunning = true, new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: e4 }, (function(e5) {
                    t4._isLocalAudioLevelObserverRunning = !e5.error, e5.error ? r2({ error: e5.error }) : n4();
                  }));
                }));
                this._preloadCache.localAudioLevelObserver = { enabled: true, interval: e4 };
              } }, { key: "isLocalAudioLevelObserverRunning", value: function() {
                return this._isLocalAudioLevelObserverRunning;
              } }, { key: "stopLocalAudioLevelObserver", value: function() {
                this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = false, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
              } }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(e4) {
                var t4 = this;
                if (this.validateAudioLevelInterval(e4), this._callMachineInitialized) return this._isRemoteParticipantsAudioLevelObserverRunning = true, new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: e4 }, (function(e5) {
                    t4._isRemoteParticipantsAudioLevelObserverRunning = !e5.error, e5.error ? r2({ error: e5.error }) : n4();
                  }));
                }));
                this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: true, interval: e4 };
              } }, { key: "isRemoteParticipantsAudioLevelObserverRunning", value: function() {
                return this._isRemoteParticipantsAudioLevelObserverRunning;
              } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: function() {
                this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = false, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
              } }, { key: "startCamera", value: (W2 = v((function* () {
                var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (bs(this._callObjectMode, "startCamera()"), ms(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), this.needsLoad()) try {
                  yield this.load(t4);
                } catch (e5) {
                  return Promise.reject(e5);
                }
                else {
                  if (this._didPreAuth) {
                    if (t4.url && t4.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
                    if (t4.token && t4.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
                  }
                  this.validateProperties(t4), this.properties = Ha(Ha({}, this.properties), t4);
                }
                return new Promise((function(t5) {
                  e4._preloadCache.inputSettings = e4._prepInputSettingsForSharing(e4._inputSettings, false), e4.sendMessageToCallMachine({ action: "start-camera", properties: hs(e4.properties, e4.callClientId), preloadCache: hs(e4._preloadCache, e4.callClientId) }, (function(e5) {
                    t5({ camera: e5.camera, mic: e5.mic, speaker: e5.speaker });
                  }));
                }));
              })), function() {
                return W2.apply(this, arguments);
              }) }, { key: "validateCustomTrack", value: function(e4, t4, n4) {
                if (n4 && n4.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
                if (t4 && "music" !== t4 && "speech" !== t4 && !(t4 instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
                if (n4 && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(n4)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
                if (!(e4 instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
              } }, { key: "startCustomTrack", value: function() {
                var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { track, mode, trackName, ignoreAudioLevel };
                return ws(), vs(this._callState, "startCustomTrack()"), this.validateCustomTrack(t4.track, t4.mode, t4.trackName), new Promise((function(n4, r2) {
                  e4._sharedTracks.customTrack = t4.track, t4.track = ko, e4.sendMessageToCallMachine({ action: "start-custom-track", properties: t4 }, (function(e5) {
                    e5.error ? r2({ error: e5.error }) : n4(e5.mediaTag);
                  }));
                }));
              } }, { key: "stopCustomTrack", value: function(e4) {
                var t4 = this;
                return ws(), vs(this._callState, "stopCustomTrack()"), new Promise((function(n4) {
                  t4.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: e4 }, (function(e5) {
                    n4(e5.mediaTag);
                  }));
                }));
              } }, { key: "setCamera", value: function(e4) {
                var t4 = this;
                return ks(), ys(this._callMachineInitialized, "setCamera()"), new Promise((function(n4) {
                  t4.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: e4 }, (function(e5) {
                    n4({ device: e5.device });
                  }));
                }));
              } }, { key: "setAudioDevice", value: (q2 = v((function* (e4) {
                return ks(), this.nativeUtils().setAudioDevice(e4), { deviceId: yield this.nativeUtils().getAudioDevice() };
              })), function(e4) {
                return q2.apply(this, arguments);
              }) }, { key: "cycleCamera", value: function() {
                var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Promise((function(n4) {
                  e4.sendMessageToCallMachine({ action: "cycle-camera", properties: t4 }, (function(e5) {
                    n4({ device: e5.device });
                  }));
                }));
              } }, { key: "cycleMic", value: function() {
                var e4 = this;
                return ws(), new Promise((function(t4) {
                  e4.sendMessageToCallMachine({ action: "cycle-mic" }, (function(e5) {
                    t4({ device: e5.device });
                  }));
                }));
              } }, { key: "getCameraFacingMode", value: function() {
                var e4 = this;
                return ks(), new Promise((function(t4) {
                  e4.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, (function(e5) {
                    t4(e5.facingMode);
                  }));
                }));
              } }, { key: "setInputDevicesAsync", value: ($2 = v((function* (e4) {
                var t4 = this, n4 = e4.audioDeviceId, r2 = e4.videoDeviceId, i2 = e4.audioSource, o2 = e4.videoSource;
                if (ws(), void 0 !== i2 && (n4 = i2), void 0 !== o2 && (r2 = o2), "boolean" == typeof n4 && (this._setAllowLocalAudio(n4), n4 = void 0), "boolean" == typeof r2 && (this._setAllowLocalVideo(r2), r2 = void 0), !n4 && !r2) return yield this.getInputDevices();
                var a3 = {};
                return n4 && (n4 instanceof MediaStreamTrack ? (this._sharedTracks.audioTrack = n4, n4 = ko, a3.audio = { settings: { customTrack: n4 } }) : (delete this._sharedTracks.audioTrack, a3.audio = { settings: { deviceId: n4 } })), r2 && (r2 instanceof MediaStreamTrack ? (this._sharedTracks.videoTrack = r2, r2 = ko, a3.video = { settings: { customTrack: r2 } }) : (delete this._sharedTracks.videoTrack, a3.video = { settings: { deviceId: r2 } })), this._callObjectMode && this.needsLoad() ? (this._updatePreloadCacheInputSettings(a3, false), this._devicesFromInputSettings(this._inputSettings)) : new Promise((function(e5) {
                  t4.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: n4, videoDeviceId: r2 }, (function(n5) {
                    if (delete n5.action, delete n5.callbackStamp, n5.returnPreloadCache) return t4._updatePreloadCacheInputSettings(a3, false), void e5(t4._devicesFromInputSettings(t4._inputSettings));
                    e5(n5);
                  }));
                }));
              })), function(e4) {
                return $2.apply(this, arguments);
              }) }, { key: "setOutputDeviceAsync", value: (Y2 = v((function* (e4) {
                var t4 = this, n4 = e4.outputDeviceId;
                if (ws(), !n4 || "string" != typeof n4) throw new Error("outputDeviceId must be provided and must be a valid device id");
                return this._preloadCache.outputDeviceId = n4, this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise((function(e5, r2) {
                  t4.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: n4 }, (function(n5) {
                    if (delete n5.action, delete n5.callbackStamp, n5.error) {
                      var i2 = new Error(n5.error.message);
                      return i2.type = n5.error.type, void r2(i2);
                    }
                    n5.returnPreloadCache ? e5(t4._devicesFromInputSettings(t4._inputSettings)) : e5(n5);
                  }));
                }));
              })), function(e4) {
                return Y2.apply(this, arguments);
              }) }, { key: "getInputDevices", value: (J2 = v((function* () {
                var e4 = this;
                return this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise((function(t4) {
                  e4.sendMessageToCallMachine({ action: "get-input-devices" }, (function(n4) {
                    n4.returnPreloadCache ? t4(e4._devicesFromInputSettings(e4._inputSettings)) : t4({ camera: n4.camera, mic: n4.mic, speaker: n4.speaker });
                  }));
                }));
              })), function() {
                return J2.apply(this, arguments);
              }) }, { key: "nativeInCallAudioMode", value: function() {
                return ks(), this._nativeInCallAudioMode;
              } }, { key: "setNativeInCallAudioMode", value: function(e4) {
                if (ks(), [es, ts].includes(e4)) {
                  if (e4 !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = e4, !this.disableReactNativeAutoDeviceManagement("audio") && gs(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
                } else console.error("invalid in-call audio mode specified: ", e4);
              } }, { key: "preAuth", value: (B2 = v((function* () {
                var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (bs(this._callObjectMode, "preAuth()"), ms(this._callState, this._isPreparingToJoin, "preAuth()"), this.needsLoad() && (yield this.load(t4)), !t4.url) throw new Error("preAuth() requires at least a url to be provided");
                return this.validateProperties(t4), this.properties = Ha(Ha({}, this.properties), t4), new Promise((function(t5, n4) {
                  e4._preloadCache.inputSettings = e4._prepInputSettingsForSharing(e4._inputSettings, false), e4.sendMessageToCallMachine({ action: "daily-method-preauth", properties: hs(e4.properties, e4.callClientId), preloadCache: hs(e4._preloadCache, e4.callClientId) }, (function(r2) {
                    return r2.error ? n4(r2.error) : r2.access ? (e4._didPreAuth = true, void t5({ access: r2.access })) : n4(new Error("unknown error in preAuth()"));
                  }));
                }));
              })), function() {
                return B2.apply(this, arguments);
              }) }, { key: "load", value: (U2 = v((function* (e4) {
                var t4 = this;
                if (this.needsLoad()) {
                  if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
                  if (e4 && (this.validateProperties(e4), this.properties = Ha(Ha({}, this.properties), e4)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
                  return this._updateCallState(Pr), this.emitDailyJSEvent({ action: vi }), this._callObjectMode ? new Promise((function(e5, n4) {
                    t4._callObjectLoader.cancel();
                    var r2 = Date.now();
                    t4._callObjectLoader.load(t4.properties.dailyConfig, (function(n5) {
                      t4._bundleLoadTime = n5 ? "no-op" : Date.now() - r2, t4._updateCallState(Ir), n5 && t4.emitDailyJSEvent({ action: mi }), e5();
                    }), (function(e6, r3) {
                      if (t4.emitDailyJSEvent({ action: gi }), !r3) {
                        t4._updateCallState(jr), t4.resetMeetingDependentVars();
                        var i2 = { action: go, errorMsg: e6.msg, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: e6, bundleUrl: C(t4.properties.dailyConfig) } } };
                        t4._maybeSendToSentry(i2), t4.emitDailyJSEvent(i2), n4(e6.msg);
                      }
                    }));
                  })) : (this._iframe.src = A(this.assembleMeetingUrl(), this.properties.dailyConfig), new Promise((function(e5, n4) {
                    t4._loadedCallback = function(r2) {
                      t4._callState !== jr ? (t4._updateCallState(Ir), (t4.properties.cssFile || t4.properties.cssText) && t4.loadCss(t4.properties), e5()) : n4(r2);
                    };
                  })));
                }
              })), function(e4) {
                return U2.apply(this, arguments);
              }) }, { key: "join", value: (V2 = v((function* () {
                var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this._testCallInProgress && this.stopTestCallQuality();
                var n4 = false;
                if (this.needsLoad()) {
                  this.updateIsPreparingToJoin(true);
                  try {
                    yield this.load(t4);
                  } catch (e5) {
                    return this.updateIsPreparingToJoin(false), Promise.reject(e5);
                  }
                } else {
                  if (n4 = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
                    if (t4.url && t4.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(false), Promise.reject();
                    if (t4.token && t4.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(false), Promise.reject();
                  }
                  if (t4.url && !this._callObjectMode && t4.url && t4.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(t4.url, ")")), this.updateIsPreparingToJoin(false), Promise.reject();
                  this.validateProperties(t4), this.properties = Ha(Ha({}, this.properties), t4);
                }
                return void 0 !== t4.showLocalVideo && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!t4.showLocalVideo), void 0 !== t4.showParticipantsBar && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!t4.showParticipantsBar), this._callState === Dr || this._callState === Lr ? (console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(false)) : (this._updateCallState(Lr, false), this.emitDailyJSEvent({ action: bi }), this._preloadCache.inputSettings = this._prepInputSettingsForSharing(this._inputSettings || {}, false), this.sendMessageToCallMachine({ action: "join-meeting", properties: hs(this.properties, this.callClientId), preloadCache: hs(this._preloadCache, this.callClientId) }), new Promise((function(t5, r2) {
                  e4._joinedCallback = function(i2, o2) {
                    if (e4._callState !== jr) {
                      if (e4._updateCallState(Dr), i2) for (var a3 in i2) {
                        if (e4._callObjectMode) {
                          var s3 = e4._callMachine().store;
                          wa(i2[a3], s3), ka(i2[a3], s3), Ta(i2[a3], e4._participants[a3], s3);
                        }
                        e4._participants[a3] = Ha({}, i2[a3]), e4.toggleParticipantAudioBasedOnNativeAudioFocus();
                      }
                      n4 && e4.loadCss(e4.properties), t5(i2);
                    } else r2(o2);
                  };
                })));
              })), function() {
                return V2.apply(this, arguments);
              }) }, { key: "leave", value: (F2 = v((function* () {
                var e4 = this;
                return this._testCallInProgress && this.stopTestCallQuality(), new Promise((function(t4) {
                  e4._callState === Nr || e4._callState === jr ? t4() : e4._callObjectLoader && !e4._callObjectLoader.loaded ? (e4._callObjectLoader.cancel(), e4._updateCallState(Nr), e4.resetMeetingDependentVars(), e4.emitDailyJSEvent({ action: Nr }), t4()) : (e4._resolveLeave = t4, e4.sendMessageToCallMachine({ action: "leave-meeting" }));
                }));
              })), function() {
                return F2.apply(this, arguments);
              }) }, { key: "startScreenShare", value: (x2 = v((function* () {
                var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ys(this._callMachineInitialized, "startScreenShare()"), t4.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", t4.screenVideoSendSettings), t4.mediaStream && (this._sharedTracks.screenMediaStream = t4.mediaStream, t4.mediaStream = ko), "undefined" != typeof DailyNativeUtils && void 0 !== DailyNativeUtils.isIOS && DailyNativeUtils.isIOS) {
                  var n4 = this.nativeUtils();
                  if (yield n4.isScreenBeingCaptured()) return void this.emitDailyJSEvent({ action: vo, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
                  n4.setSystemScreenCaptureStartCallback((function() {
                    n4.setSystemScreenCaptureStartCallback(null), e4.sendMessageToCallMachine({ action: bo, captureOptions: t4 });
                  })), n4.presentSystemScreenCapturePrompt();
                } else this.sendMessageToCallMachine({ action: bo, captureOptions: t4 });
              })), function() {
                return x2.apply(this, arguments);
              }) }, { key: "stopScreenShare", value: function() {
                ys(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
              } }, { key: "startRecording", value: function() {
                var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t4 = e4.type;
                if (t4 && "cloud" !== t4 && "raw-tracks" !== t4 && "local" !== t4) throw new Error("invalid type: ".concat(t4, ", allowed values 'cloud', 'raw-tracks', or 'local'"));
                this.sendMessageToCallMachine(Ha({ action: "local-recording-start" }, e4));
              } }, { key: "updateRecording", value: function(e4) {
                var t4 = e4.layout, n4 = void 0 === t4 ? { preset: "default" } : t4, r2 = e4.instanceId;
                this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: n4, instanceId: r2 });
              } }, { key: "stopRecording", value: function() {
                var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.sendMessageToCallMachine(Ha({ action: "local-recording-stop" }, e4));
              } }, { key: "startLiveStreaming", value: function() {
                var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.sendMessageToCallMachine(Ha({ action: "daily-method-start-live-streaming" }, e4));
              } }, { key: "updateLiveStreaming", value: function(e4) {
                var t4 = e4.layout, n4 = void 0 === t4 ? { preset: "default" } : t4, r2 = e4.instanceId;
                this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: n4, instanceId: r2 });
              } }, { key: "addLiveStreamingEndpoints", value: function(e4) {
                var t4 = e4.endpoints, n4 = e4.instanceId;
                this.sendMessageToCallMachine({ action: So, endpointsOp: "add-endpoints", endpoints: t4, instanceId: n4 });
              } }, { key: "removeLiveStreamingEndpoints", value: function(e4) {
                var t4 = e4.endpoints, n4 = e4.instanceId;
                this.sendMessageToCallMachine({ action: So, endpointsOp: "remove-endpoints", endpoints: t4, instanceId: n4 });
              } }, { key: "stopLiveStreaming", value: function() {
                var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.sendMessageToCallMachine(Ha({ action: "daily-method-stop-live-streaming" }, e4));
              } }, { key: "validateDailyConfig", value: function(e4) {
                e4.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(e4.camSimulcastEncodings)), e4.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), Fo() && e4.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
              } }, { key: "validateSimulcastEncodings", value: function(e4) {
                var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n4 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e4) {
                  if (!(e4 instanceof Array || Array.isArray(e4))) throw new Error("encodings must be an Array");
                  if (!Vs(e4.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
                  for (var r2 = 0; r2 < e4.length; r2++) {
                    var i2 = e4[r2];
                    for (var o2 in this._validateEncodingLayerHasValidProperties(i2), i2) if (os.includes(o2)) {
                      if ("number" != typeof i2[o2]) throw new Error("".concat(o2, " must be a number"));
                      if (t4) {
                        var a3 = t4[o2], s3 = a3.min, c2 = a3.max;
                        if (!Vs(i2[o2], s3, c2)) throw new Error("".concat(o2, " value not in range. valid range: ").concat(s3, " to ").concat(c2));
                      }
                    } else if (!["active", "scalabilityMode"].includes(o2)) throw new Error("Invalid key ".concat(o2, ", valid keys are:") + Object.values(os));
                    if (n4 && !i2.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
                  }
                }
              } }, { key: "startRemoteMediaPlayer", value: (R2 = v((function* (e4) {
                var t4 = this, n4 = e4.url, r2 = e4.settings, i2 = void 0 === r2 ? { state: Mo.PLAY } : r2;
                try {
                  !(function(e5) {
                    if ("string" != typeof e5) throw new Error('url parameter must be "string" type');
                  })(n4), Fs(i2), (function(e5) {
                    for (var t5 in e5) if (!as.includes(t5)) throw new Error("Invalid key ".concat(t5, ", valid keys are: ").concat(as));
                    e5.simulcastEncodings && this.validateSimulcastEncodings(e5.simulcastEncodings, is, true);
                  })(i2);
                } catch (e5) {
                  throw console.error("invalid argument Error: ".concat(e5)), console.error('startRemoteMediaPlayer arguments must be of the form:\n  { url: "playback url",\n  settings?:\n  {state: "play"|"pause", simulcastEncodings?: [{}] } }'), e5;
                }
                return new Promise((function(e5, r3) {
                  t4.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: n4, settings: i2 }, (function(t5) {
                    t5.error ? r3({ error: t5.error, errorMsg: t5.errorMsg }) : e5({ session_id: t5.session_id, remoteMediaPlayerState: { state: t5.state, settings: t5.settings } });
                  }));
                }));
              })), function(e4) {
                return R2.apply(this, arguments);
              }) }, { key: "stopRemoteMediaPlayer", value: (j2 = v((function* (e4) {
                var t4 = this;
                if ("string" != typeof e4) throw new Error(" remotePlayerID must be of type string");
                return new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: e4 }, (function(e5) {
                    e5.error ? r2({ error: e5.error, errorMsg: e5.errorMsg }) : n4();
                  }));
                }));
              })), function(e4) {
                return j2.apply(this, arguments);
              }) }, { key: "updateRemoteMediaPlayer", value: (N2 = v((function* (e4) {
                var t4 = this, n4 = e4.session_id, r2 = e4.settings;
                try {
                  Fs(r2);
                } catch (e5) {
                  throw console.error("invalid argument Error: ".concat(e5)), console.error('updateRemoteMediaPlayer arguments must be of the form:\n  session_id: "participant session",\n  { settings?: {state: "play"|"pause"} }'), e5;
                }
                return new Promise((function(e5, i2) {
                  t4.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: n4, settings: r2 }, (function(t5) {
                    t5.error ? i2({ error: t5.error, errorMsg: t5.errorMsg }) : e5({ session_id: t5.session_id, remoteMediaPlayerState: { state: t5.state, settings: t5.settings } });
                  }));
                }));
              })), function(e4) {
                return N2.apply(this, arguments);
              }) }, { key: "startTranscription", value: function(e4) {
                vs(this._callState, "startTranscription()"), this.sendMessageToCallMachine(Ha({ action: "daily-method-start-transcription" }, e4));
              } }, { key: "updateTranscription", value: function(e4) {
                if (vs(this._callState, "updateTranscription()"), !e4) throw new Error("updateTranscription Error: options is mandatory");
                if ("object" !== o(e4)) throw new Error("updateTranscription Error: options must be object type");
                if (e4.participants && !Array.isArray(e4.participants)) throw new Error("updateTranscription Error: participants must be an array");
                this.sendMessageToCallMachine(Ha({ action: "daily-method-update-transcription" }, e4));
              } }, { key: "stopTranscription", value: function(e4) {
                if (vs(this._callState, "stopTranscription()"), e4 && "object" !== o(e4)) throw new Error("stopTranscription Error: options must be object type");
                if (e4 && !e4.instanceId) throw new Error('"instanceId" not provided');
                this.sendMessageToCallMachine(Ha({ action: "daily-method-stop-transcription" }, e4));
              } }, { key: "startDialOut", value: (D2 = v((function* (e4) {
                var t4 = this;
                vs(this._callState, "startDialOut()");
                var n4 = function(e5) {
                  if (e5) {
                    if (!Array.isArray(e5)) throw new Error("Error starting dial out: audio codec must be an array");
                    if (e5.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
                    e5.forEach((function(e6) {
                      if ("string" != typeof e6) throw new Error("Error starting dial out: audio codec must be a string");
                      if ("OPUS" !== e6 && "PCMU" !== e6 && "PCMA" !== e6 && "G722" !== e6) throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
                    }));
                  }
                };
                if (!e4.sipUri && !e4.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
                if (e4.sipUri && e4.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
                if (e4.sipUri) {
                  if ("string" != typeof e4.sipUri) throw new Error("Error starting dial out: sipUri must be a string");
                  if (!e4.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
                  if (e4.video && "boolean" != typeof e4.video) throw new Error("Error starting dial out: video must be a boolean value");
                  !(function(e5) {
                    if (e5 && (n4(e5.audio), e5.video)) {
                      if (!Array.isArray(e5.video)) throw new Error("Error starting dial out: video codec must be an array");
                      if (e5.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
                      e5.video.forEach((function(e6) {
                        if ("string" != typeof e6) throw new Error("Error starting dial out: video codec must be a string");
                        if ("H264" !== e6 && "VP8" !== e6) throw new Error("Error starting dial out: video codec must be H264 or VP8");
                      }));
                    }
                  })(e4.codecs);
                }
                if (e4.phoneNumber) {
                  if ("string" != typeof e4.phoneNumber) throw new Error("Error starting dial out: phoneNumber must be a string");
                  if (!/^\+\d{1,}$/.test(e4.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
                  e4.codecs && n4(e4.codecs.audio);
                }
                if (e4.callerId) {
                  if ("string" != typeof e4.callerId) throw new Error("Error starting dial out: callerId must be a string");
                  if (e4.sipUri) throw new Error("Error starting dial out: callerId not allowed with sipUri");
                }
                if (e4.displayName) {
                  if ("string" != typeof e4.displayName) throw new Error("Error starting dial out: displayName must be a string");
                  if (e4.displayName.length >= 200) throw new Error("Error starting dial out: displayName length must be less than 200");
                }
                if (e4.userId) {
                  if ("string" != typeof e4.userId) throw new Error("Error starting dial out: userId must be a string");
                  if (e4.userId.length > 36) throw new Error("Error starting dial out: userId length must be less than or equal to 36");
                }
                if (ps(e4), e4.permissions && e4.permissions.canReceive) {
                  var r2 = m($a.validateJSONObject(e4.permissions.canReceive), 2), i2 = r2[0], o2 = r2[1];
                  if (!i2) throw new Error(o2);
                }
                if (e4.provider) {
                  if ("daily" !== e4.provider) throw new Error("Error: provider can be set only to 'daily', got: ".concat(e4.provider));
                  if (e4.phoneNumber) throw new Error("Error starting dial out: provider valid only for sipUri, not phoneNumber");
                  console.warn("(pre-beta) provider=daily is currently in pre-beta, things might break!");
                }
                return new Promise((function(n5, r3) {
                  t4.sendMessageToCallMachine(Ha({ action: "dialout-start" }, e4), (function(e5) {
                    e5.error ? r3(e5.error) : n5(e5);
                  }));
                }));
              })), function(e4) {
                return D2.apply(this, arguments);
              }) }, { key: "stopDialOut", value: function(e4) {
                var t4 = this;
                return vs(this._callState, "stopDialOut()"), new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine(Ha({ action: "dialout-stop" }, e4), (function(e5) {
                    e5.error ? r2(e5.error) : n4(e5);
                  }));
                }));
              } }, { key: "sipCallTransfer", value: (L2 = v((function* (e4) {
                var t4 = this;
                if (vs(this._callState, "sipCallTransfer()"), !e4) throw new Error("sipCallTransfer() requires a sessionId and toEndPoint");
                return e4.useSipRefer = false, xs(e4, "sipCallTransfer"), ps(e4), new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine(Ha({ action: Co }, e4), (function(e5) {
                    e5.error ? r2(e5.error) : n4(e5);
                  }));
                }));
              })), function(e4) {
                return L2.apply(this, arguments);
              }) }, { key: "sipRefer", value: (I2 = v((function* (e4) {
                var t4 = this;
                if (vs(this._callState, "sipRefer()"), !e4) throw new Error("sessionId and toEndPoint are mandatory parameter");
                return e4.useSipRefer = true, xs(e4, "sipRefer"), new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine(Ha({ action: Co }, e4), (function(e5) {
                    e5.error ? r2(e5.error) : n4(e5);
                  }));
                }));
              })), function(e4) {
                return I2.apply(this, arguments);
              }) }, { key: "sendDTMF", value: (P2 = v((function* (e4) {
                var t4 = this;
                return vs(this._callState, "sendDTMF()"), (function(e5) {
                  var t5 = e5.sessionId, n4 = e5.tones;
                  if (!t5 || !n4) throw new Error("sessionId and tones are mandatory parameter");
                  if ("string" != typeof t5 || "string" != typeof n4) throw new Error("sessionId and tones should be of string type");
                  if (n4.length > 20) throw new Error("tones string must be upto 20 characters");
                  var r2 = n4.match(/[^0-9A-D*#]/g);
                  if (r2 && r2[0]) throw new Error("".concat(r2[0], " is not valid DTMF tone"));
                })(e4), new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine(Ha({ action: "send-dtmf" }, e4), (function(e5) {
                    e5.error ? r2(e5.error) : n4(e5);
                  }));
                }));
              })), function(e4) {
                return P2.apply(this, arguments);
              }) }, { key: "getNetworkStats", value: function() {
                var e4 = this;
                return this._callState !== Dr ? Promise.resolve(Ha({ stats: { latest: {} } }, this._network)) : new Promise((function(t4) {
                  e4.sendMessageToCallMachine({ action: "get-calc-stats" }, (function(n4) {
                    t4(Ha(Ha({}, e4._network), {}, { stats: n4.stats }));
                  }));
                }));
              } }, { key: "testWebsocketConnectivity", value: (O2 = v((function* () {
                var e4 = this;
                if (_s(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
                  yield this.load();
                } catch (e5) {
                  return Promise.reject(e5);
                }
                return new Promise((function(t4, n4) {
                  e4.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, (function(e5) {
                    e5.error ? n4(e5.error) : t4(e5.results);
                  }));
                }));
              })), function() {
                return O2.apply(this, arguments);
              }) }, { key: "abortTestWebsocketConnectivity", value: function() {
                this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
              } }, { key: "_validateVideoTrackForNetworkTests", value: function(e4) {
                return e4 ? e4 instanceof MediaStreamTrack ? !!(function(e5, t4) {
                  var n4 = t4.isLocalScreenVideo;
                  return e5 && "live" === e5.readyState && !(function(e6, t5) {
                    return (!t5.isLocalScreenVideo || "Chrome" !== Uo()) && e6.muted && !Na.has(e6.id);
                  })(e5, { isLocalScreenVideo: n4 });
                })(e4, { isLocalScreenVideo: false }) || (console.error("Video track is not playable. This test needs a live video track."), false) : (console.error("Video track needs to be of type `MediaStreamTrack`."), false) : (console.error("Missing video track. You must provide a video track in order to run this test."), false);
              } }, { key: "testCallQuality", value: (M2 = v((function* () {
                var e4 = this;
                ws(), bs(this._callObjectMode, "testCallQuality()"), ys(this._callMachineInitialized, "testCallQuality()", null, true), ms(this._callState, this._isPreparingToJoin, "testCallQuality()");
                var t4 = this._testCallAlreadyInProgress, n4 = function(n5) {
                  t4 || (e4._testCallInProgress = n5);
                };
                if (n4(true), this.needsLoad()) try {
                  var i2 = this._callState;
                  yield this.load(), this._callState = i2;
                } catch (e5) {
                  return n4(false), Promise.reject(e5);
                }
                return new Promise((function(t5) {
                  e4.sendMessageToCallMachine({ action: "test-call-quality", dailyJsVersion: e4.properties.dailyJsVersion }, (function(i3) {
                    var o2 = i3.results, a3 = o2.result, s3 = r(o2, Wa);
                    if ("failed" === a3) {
                      var c2, u2 = Ha({}, s3);
                      null !== (c2 = s3.error) && void 0 !== c2 && c2.details ? (s3.error.details = JSON.parse(s3.error.details), u2.error = Ha(Ha({}, u2.error), {}, { details: Ha({}, u2.error.details) }), u2.error.details.duringTest = "testCallQuality") : (u2.error = u2.error ? Ha({}, u2.error) : {}, u2.error.details = { duringTest: "testCallQuality" }), e4._maybeSendToSentry(u2);
                    }
                    n4(false), t5(Ha({ result: a3 }, s3));
                  }));
                }));
              })), function() {
                return M2.apply(this, arguments);
              }) }, { key: "stopTestCallQuality", value: function() {
                this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
              } }, { key: "testConnectionQuality", value: (k2 = v((function* (e4) {
                var t4;
                Po() ? (console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead"), t4 = yield this.testPeerToPeerCallQuality(e4)) : (console.warn("testConnectionQuality() is deprecated: use testCallQuality() instead"), t4 = yield this.testCallQuality());
                var n4 = { result: t4.result, secondsElapsed: t4.secondsElapsed };
                return t4.data && (n4.data = { maxRTT: t4.data.maxRoundTripTime, packetLoss: t4.data.avgRecvPacketLoss }), n4;
              })), function(e4) {
                return k2.apply(this, arguments);
              }) }, { key: "testPeerToPeerCallQuality", value: (S2 = v((function* (e4) {
                var t4 = this;
                if (_s(this._testCallInProgress, "testPeerToPeerCallQuality()"), this.needsLoad()) try {
                  yield this.load();
                } catch (e5) {
                  return Promise.reject(e5);
                }
                var n4 = e4.videoTrack, r2 = e4.duration;
                if (!this._validateVideoTrackForNetworkTests(n4)) throw new Error("Video track error");
                return this._sharedTracks.videoTrackForConnectionQualityTest = n4, new Promise((function(e5, n5) {
                  t4.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: r2 }, (function(t5) {
                    t5.error ? n5(t5.error) : e5(t5.results);
                  }));
                }));
              })), function(e4) {
                return S2.apply(this, arguments);
              }) }, { key: "stopTestConnectionQuality", value: function() {
                Po() ? (console.warn("stopTestConnectionQuality() is deprecated: use testPeerToPeerCallQuality() and stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality()) : (console.warn("stopTestConnectionQuality() is deprecated: use testCallQuality() and stopTestCallQuality() instead"), this.stopTestCallQuality());
              } }, { key: "stopTestPeerToPeerCallQuality", value: function() {
                this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
              } }, { key: "testNetworkConnectivity", value: (b2 = v((function* (e4) {
                var t4 = this;
                if (_s(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
                  yield this.load();
                } catch (e5) {
                  return Promise.reject(e5);
                }
                if (!this._validateVideoTrackForNetworkTests(e4)) throw new Error("Video track error");
                return this._sharedTracks.videoTrackForNetworkConnectivityTest = e4, new Promise((function(e5, n4) {
                  t4.sendMessageToCallMachine({ action: "test-network-connectivity" }, (function(t5) {
                    t5.error ? n4(t5.error) : e5(t5.results);
                  }));
                }));
              })), function(e4) {
                return b2.apply(this, arguments);
              }) }, { key: "abortTestNetworkConnectivity", value: function() {
                this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
              } }, { key: "getCpuLoadStats", value: function() {
                var e4 = this;
                return new Promise((function(t4) {
                  e4._callState === Dr ? e4.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, (function(e5) {
                    t4(e5.cpuStats);
                  })) : t4({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
                }));
              } }, { key: "_validateEncodingLayerHasValidProperties", value: function(e4) {
                var t4;
                if (!((null === (t4 = Object.keys(e4)) || void 0 === t4 ? void 0 : t4.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(os));
              } }, { key: "_validateVideoSendSettings", value: function(e4, t4) {
                var n4 = "screenVideo" === e4 ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], r2 = "Video send settings should be either an object or one of the supported presets: ".concat(n4.join());
                if ("string" == typeof t4) {
                  if (!n4.includes(t4)) throw new Error(r2);
                } else {
                  if ("object" !== o(t4)) throw new Error(r2);
                  if (!t4.maxQuality && !t4.encodings && void 0 === t4.allowAdaptiveLayers) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
                  if (t4.maxQuality && -1 === ["low", "medium", "high"].indexOf(t4.maxQuality)) throw new Error("maxQuality must be either low, medium or high");
                  if (t4.encodings) {
                    var i2 = false;
                    switch (Object.keys(t4.encodings).length) {
                      case 1:
                        i2 = !t4.encodings.low;
                        break;
                      case 2:
                        i2 = !t4.encodings.low || !t4.encodings.medium;
                        break;
                      case 3:
                        i2 = !t4.encodings.low || !t4.encodings.medium || !t4.encodings.high;
                        break;
                      default:
                        i2 = true;
                    }
                    if (i2) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
                    t4.encodings.low && this._validateEncodingLayerHasValidProperties(t4.encodings.low), t4.encodings.medium && this._validateEncodingLayerHasValidProperties(t4.encodings.medium), t4.encodings.high && this._validateEncodingLayerHasValidProperties(t4.encodings.high);
                  }
                }
              } }, { key: "validateUpdateSendSettings", value: function(e4) {
                var t4 = this;
                if (!e4 || 0 === Object.keys(e4).length) throw new Error("Send settings must contain at least information for one track!");
                Object.entries(e4).forEach((function(e5) {
                  var n4 = m(e5, 2), r2 = n4[0], i2 = n4[1];
                  t4._validateVideoSendSettings(r2, i2);
                }));
              } }, { key: "updateSendSettings", value: function(e4) {
                var t4 = this;
                return this.validateUpdateSendSettings(e4), this.needsLoad() ? (this._preloadCache.sendSettings = e4, { sendSettings: this._preloadCache.sendSettings }) : new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: e4 }, (function(e5) {
                    e5.error ? r2(e5.error) : n4(e5.sendSettings);
                  }));
                }));
              } }, { key: "getSendSettings", value: function() {
                return this._sendSettings || this._preloadCache.sendSettings;
              } }, { key: "getLocalAudioLevel", value: function() {
                return this._localAudioLevel;
              } }, { key: "getRemoteParticipantsAudioLevel", value: function() {
                return this._remoteParticipantsAudioLevel;
              } }, { key: "getActiveSpeaker", value: function() {
                return ws(), this._activeSpeaker;
              } }, { key: "setActiveSpeakerMode", value: function(e4) {
                return ws(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: e4 }), this;
              } }, { key: "activeSpeakerMode", value: function() {
                return ws(), this._activeSpeakerMode;
              } }, { key: "subscribeToTracksAutomatically", value: function() {
                return this._preloadCache.subscribeToTracksAutomatically;
              } }, { key: "setSubscribeToTracksAutomatically", value: function(e4) {
                return vs(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = e4, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: e4 }), this;
              } }, { key: "enumerateDevices", value: (y2 = v((function* () {
                var e4 = this;
                if (this._callObjectMode) {
                  var t4 = yield navigator.mediaDevices.enumerateDevices();
                  return "Firefox" === Uo() && Bo().major > 115 && Bo().major < 123 && (t4 = t4.filter((function(e5) {
                    return "audiooutput" !== e5.kind;
                  }))), { devices: t4.map((function(e5) {
                    var t5 = JSON.parse(JSON.stringify(e5));
                    if (!Po() && "videoinput" === e5.kind && e5.getCapabilities) {
                      var n4, r2 = e5.getCapabilities();
                      t5.facing = (null == r2 || null === (n4 = r2.facingMode) || void 0 === n4 ? void 0 : n4.length) >= 1 ? r2.facingMode[0] : void 0;
                    }
                    return t5;
                  })) };
                }
                return new Promise((function(t5) {
                  e4.sendMessageToCallMachine({ action: "enumerate-devices" }, (function(e5) {
                    t5({ devices: e5.devices });
                  }));
                }));
              })), function() {
                return y2.apply(this, arguments);
              }) }, { key: "sendAppMessage", value: function(e4) {
                var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
                if (vs(this._callState, "sendAppMessage()"), JSON.stringify(e4).length > this._maxAppMessageSize) throw new Error("Message data too large. Max size is " + this._maxAppMessageSize);
                return this.sendMessageToCallMachine({ action: "app-msg", data: e4, to: t4 }), this;
              } }, { key: "addFakeParticipant", value: function(e4) {
                return ws(), vs(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(Ha({ action: "add-fake-participant" }, e4)), this;
              } }, { key: "setShowNamesMode", value: function(e4) {
                return Ss(this._callObjectMode, "setShowNamesMode()"), ws(), e4 && "always" !== e4 && "never" !== e4 ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: e4 }), this);
              } }, { key: "setShowLocalVideo", value: function() {
                var e4 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return Ss(this._callObjectMode, "setShowLocalVideo()"), ws(), vs(this._callState, "setShowLocalVideo()"), "boolean" != typeof e4 ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: e4 }), this._showLocalVideo = e4, this);
              } }, { key: "showLocalVideo", value: function() {
                return Ss(this._callObjectMode, "showLocalVideo()"), ws(), this._showLocalVideo;
              } }, { key: "setShowParticipantsBar", value: function() {
                var e4 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return Ss(this._callObjectMode, "setShowParticipantsBar()"), ws(), vs(this._callState, "setShowParticipantsBar()"), "boolean" != typeof e4 ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: e4 }), this._showParticipantsBar = e4, this);
              } }, { key: "showParticipantsBar", value: function() {
                return Ss(this._callObjectMode, "showParticipantsBar()"), ws(), this._showParticipantsBar;
              } }, { key: "customIntegrations", value: function() {
                return ws(), Ss(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
              } }, { key: "setCustomIntegrations", value: function(e4) {
                return ws(), Ss(this._callObjectMode, "setCustomIntegrations()"), vs(this._callState, "setCustomIntegrations()"), js(e4) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: e4 }), this._customIntegrations = e4, this) : this;
              } }, { key: "startCustomIntegrations", value: function(e4) {
                var t4 = this;
                if (ws(), Ss(this._callObjectMode, "startCustomIntegrations()"), vs(this._callState, "startCustomIntegrations()"), Array.isArray(e4) && e4.some((function(e5) {
                  return "string" != typeof e5;
                })) || !Array.isArray(e4) && "string" != typeof e4) return console.error("startCustomIntegrations() only accepts string | string[]"), this;
                var n4 = "string" == typeof e4 ? [e4] : e4, r2 = n4.filter((function(e5) {
                  return !(e5 in t4._customIntegrations);
                }));
                return r2.length ? (console.error(`Can't find custom integration(s): "`.concat(r2.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: n4 }), this);
              } }, { key: "stopCustomIntegrations", value: function(e4) {
                var t4 = this;
                if (ws(), Ss(this._callObjectMode, "stopCustomIntegrations()"), vs(this._callState, "stopCustomIntegrations()"), Array.isArray(e4) && e4.some((function(e5) {
                  return "string" != typeof e5;
                })) || !Array.isArray(e4) && "string" != typeof e4) return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
                var n4 = "string" == typeof e4 ? [e4] : e4, r2 = n4.filter((function(e5) {
                  return !(e5 in t4._customIntegrations);
                }));
                return r2.length ? (console.error(`Can't find custom integration(s): "`.concat(r2.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: n4 }), this);
              } }, { key: "customTrayButtons", value: function() {
                return Ss(this._callObjectMode, "customTrayButtons()"), ws(), this._customTrayButtons;
              } }, { key: "updateCustomTrayButtons", value: function(e4) {
                return Ss(this._callObjectMode, "updateCustomTrayButtons()"), ws(), vs(this._callState, "updateCustomTrayButtons()"), Ns(e4) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: e4 }), this._customTrayButtons = e4, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(cs))), this);
              } }, { key: "theme", value: function() {
                return Ss(this._callObjectMode, "theme()"), this.properties.theme;
              } }, { key: "setTheme", value: function(e4) {
                var t4 = this;
                return Ss(this._callObjectMode, "setTheme()"), new Promise((function(n4, r2) {
                  try {
                    t4.validateProperties({ theme: e4 }), t4.properties.theme = Ha({}, e4), t4.sendMessageToCallMachine({ action: "set-theme", theme: t4.properties.theme });
                    try {
                      t4.emitDailyJSEvent({ action: hi, theme: t4.properties.theme });
                    } catch (e5) {
                      console.log("could not emit 'theme-updated'", e5);
                    }
                    n4(t4.properties.theme);
                  } catch (e5) {
                    r2(e5);
                  }
                }));
              } }, { key: "requestFullscreen", value: (g2 = v((function* () {
                if (ws(), this._iframe && !document.fullscreenElement && Lo()) try {
                  (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
                } catch (e4) {
                  console.log("could not make video call fullscreen", e4);
                }
              })), function() {
                return g2.apply(this, arguments);
              }) }, { key: "exitFullscreen", value: function() {
                ws(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
              } }, { key: "getSidebarView", value: (h2 = v((function* () {
                var e4 = this;
                return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise((function(t4) {
                  e4.sendMessageToCallMachine({ action: "get-sidebar-view" }, (function(e5) {
                    t4(e5.view);
                  }));
                }));
              })), function() {
                return h2.apply(this, arguments);
              }) }, { key: "setSidebarView", value: function(e4) {
                return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: e4 }), this);
              } }, { key: "room", value: (d2 = v((function* () {
                var e4 = this, t4 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).includeRoomConfigDefaults, n4 = void 0 === t4 || t4;
                return this._accessState.access === Jr || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise((function(t5) {
                  e4.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: n4 }, (function(e5) {
                    delete e5.action, delete e5.callbackStamp, t5(e5);
                  }));
                }));
              })), function() {
                return d2.apply(this, arguments);
              }) }, { key: "geo", value: (s2 = v((function* () {
                try {
                  var e4 = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
                  return { current: (yield e4.json()).geo };
                } catch (e5) {
                  return console.error("geo lookup failed", e5), { current: "" };
                }
              })), function() {
                return s2.apply(this, arguments);
              }) }, { key: "setNetworkTopology", value: (a2 = v((function* (e4) {
                var t4 = this;
                return ws(), vs(this._callState, "setNetworkTopology()"), new Promise((function(n4, r2) {
                  t4.sendMessageToCallMachine({ action: "set-network-topology", opts: e4 }, (function(e5) {
                    e5.error ? r2({ error: e5.error }) : n4({ workerId: e5.workerId });
                  }));
                }));
              })), function(e4) {
                return a2.apply(this, arguments);
              }) }, { key: "getNetworkTopology", value: (n3 = v((function* () {
                var e4 = this;
                return new Promise((function(t4, n4) {
                  e4.needsLoad() && t4({ topology: "none" }), e4.sendMessageToCallMachine({ action: "get-network-topology" }, (function(e5) {
                    e5.error ? n4({ error: e5.error }) : t4({ topology: e5.topology });
                  }));
                }));
              })), function() {
                return n3.apply(this, arguments);
              }) }, { key: "setPlayNewParticipantSound", value: function(e4) {
                if (ws(), "number" != typeof e4 && true !== e4 && false !== e4) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(e4));
                this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: e4 });
              } }, { key: "on", value: function(e4, t4) {
                return _().prototype.on.call(this, e4, t4);
              } }, { key: "once", value: function(e4, t4) {
                return _().prototype.once.call(this, e4, t4);
              } }, { key: "off", value: function(e4, t4) {
                return _().prototype.off.call(this, e4, t4);
              } }, { key: "validateProperties", value: function(e4) {
                var t4, n4;
                if (null != e4 && null !== (t4 = e4.dailyConfig) && void 0 !== t4 && t4.userMediaAudioConstraints) {
                  var r2, i2;
                  Po() || console.warn("userMediaAudioConstraints is deprecated. You can override constraints with inputSettings.audio.settings, found in DailyCallOptions.");
                  var o2 = e4.inputSettings || {};
                  o2.audio = (null === (r2 = e4.inputSettings) || void 0 === r2 ? void 0 : r2.audio) || {}, o2.audio.settings = (null === (i2 = e4.inputSettings) || void 0 === i2 || null === (i2 = i2.audio) || void 0 === i2 ? void 0 : i2.settings) || {}, o2.audio.settings = Ha(Ha({}, o2.audio.settings), e4.dailyConfig.userMediaAudioConstraints), e4.inputSettings = o2, delete e4.dailyConfig.userMediaAudioConstraints;
                }
                if (null != e4 && null !== (n4 = e4.dailyConfig) && void 0 !== n4 && n4.userMediaVideoConstraints) {
                  var a3, s3;
                  Po() || console.warn("userMediaVideoConstraints is deprecated. You can override constraints with inputSettings.video.settings, found in DailyCallOptions.");
                  var c2 = e4.inputSettings || {};
                  c2.video = (null === (a3 = e4.inputSettings) || void 0 === a3 ? void 0 : a3.video) || {}, c2.video.settings = (null === (s3 = e4.inputSettings) || void 0 === s3 || null === (s3 = s3.video) || void 0 === s3 ? void 0 : s3.settings) || {}, c2.video.settings = Ha(Ha({}, c2.video.settings), e4.dailyConfig.userMediaVideoConstraints), e4.inputSettings = c2, delete e4.dailyConfig.userMediaVideoConstraints;
                }
                for (var u2 in e4) if (ls[u2]) {
                  if (ls[u2].validate && !ls[u2].validate(e4[u2], this)) throw new Error("property '".concat(u2, "': ").concat(ls[u2].help));
                } else console.warn("Ignoring unrecognized property '".concat(u2, "'")), delete e4[u2];
              } }, { key: "assembleMeetingUrl", value: function() {
                var e4, t4, n4 = Ha(Ha({}, this.properties), {}, { emb: this.callClientId, embHref: encodeURIComponent(window.location.href), proxy: null !== (e4 = this.properties.dailyConfig) && void 0 !== e4 && e4.proxyUrl ? encodeURIComponent(null === (t4 = this.properties.dailyConfig) || void 0 === t4 ? void 0 : t4.proxyUrl) : void 0 }), r2 = n4.url.match(/\?/) ? "&" : "?";
                return n4.url + r2 + Object.keys(ls).filter((function(e5) {
                  return ls[e5].queryString && void 0 !== n4[e5];
                })).map((function(e5) {
                  return "".concat(ls[e5].queryString, "=").concat(n4[e5]);
                })).join("&");
              } }, { key: "needsLoad", value: function() {
                return [Or, Pr, Nr, jr].includes(this._callState);
              } }, { key: "sendMessageToCallMachine", value: function(e4, t4) {
                if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
                this._messageChannel.sendMessageToCallMachine(e4, t4, this.callClientId, this._iframe);
              } }, { key: "forwardPackagedMessageToCallMachine", value: function(e4) {
                this._messageChannel.forwardPackagedMessageToCallMachine(e4, this._iframe, this.callClientId);
              } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(e4) {
                return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(e4, this.callClientId);
              } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(e4) {
                this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(e4);
              } }, { key: "handleMessageFromCallMachine", value: function(e4) {
                switch (e4.action) {
                  case fi:
                    this.sendMessageToCallMachine(Ha({ action: pi }, this.properties));
                    break;
                  case "call-machine-initialized":
                    this._callMachineInitialized = true;
                    var t4 = { action: wo, level: "log", code: 1011, stats: { event: "bundle load", time: "no-op" === this._bundleLoadTime ? 0 : this._bundleLoadTime, preLoaded: "no-op" === this._bundleLoadTime, url: C(this.properties.dailyConfig) } };
                    this.sendMessageToCallMachine(t4), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
                    break;
                  case mi:
                    this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null), this.emitDailyJSEvent(e4);
                    break;
                  case Si:
                    var n4, i2 = Ha({}, e4);
                    delete i2.internal, this._maxAppMessageSize = (null === (n4 = e4.internal) || void 0 === n4 ? void 0 : n4._maxAppMessageSize) || mo, this._joinedCallback && (this._joinedCallback(e4.participants), this._joinedCallback = null), this.emitDailyJSEvent(i2);
                    break;
                  case ki:
                  case Ei:
                    if (this._callState === Nr) return;
                    if (e4.participant && e4.participant.session_id) {
                      var o2 = e4.participant.local ? "local" : e4.participant.session_id;
                      if (this._callObjectMode) {
                        var a3 = this._callMachine().store;
                        wa(e4.participant, a3), ka(e4.participant, a3), Ta(e4.participant, this._participants[o2], a3);
                      }
                      try {
                        this.maybeParticipantTracksStopped(this._participants[o2], e4.participant), this.maybeParticipantTracksStarted(this._participants[o2], e4.participant), this.maybeEventRecordingStopped(this._participants[o2], e4.participant), this.maybeEventRecordingStarted(this._participants[o2], e4.participant);
                      } catch (e5) {
                        console.error("track events error", e5);
                      }
                      this.compareEqualForParticipantUpdateEvent(e4.participant, this._participants[o2]) || (this._participants[o2] = Ha({}, e4.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus(), this.emitDailyJSEvent(e4));
                    }
                    break;
                  case Ti:
                    if (e4.participant && e4.participant.session_id) {
                      var s3 = this._participants[e4.participant.session_id];
                      s3 && this.maybeParticipantTracksStopped(s3, null), delete this._participants[e4.participant.session_id], this.emitDailyJSEvent(e4);
                    }
                    break;
                  case Mi:
                    w(this._participantCounts, e4.participantCounts) || (this._participantCounts = e4.participantCounts, this.emitDailyJSEvent(e4));
                    break;
                  case Ai:
                    var c2 = { access: e4.access };
                    e4.awaitingAccess && (c2.awaitingAccess = e4.awaitingAccess), w(this._accessState, c2) || (this._accessState = c2, this.emitDailyJSEvent(e4));
                    break;
                  case Ci:
                    if (e4.meetingSession) {
                      this._meetingSessionSummary = e4.meetingSession, this.emitDailyJSEvent(e4);
                      var u2 = Ha(Ha({}, e4), {}, { action: "meeting-session-updated" });
                      this.emitDailyJSEvent(u2);
                    }
                    break;
                  case go:
                    var l2;
                    this._iframe && !e4.preserveIframe && (this._iframe.src = ""), this._updateCallState(jr), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(e4.errorMsg), this._loadedCallback = null), e4.preserveIframe;
                    var d3 = r(e4, Ga);
                    null != d3 && null !== (l2 = d3.error) && void 0 !== l2 && l2.details && (d3.error.details = JSON.parse(d3.error.details)), this._maybeSendToSentry(e4), this._joinedCallback && (this._joinedCallback(null, d3), this._joinedCallback = null), this.emitDailyJSEvent(d3);
                    break;
                  case wi:
                    this._callState !== jr && this._updateCallState(Nr), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null), this.emitDailyJSEvent(e4);
                    break;
                  case "selected-devices-updated":
                    e4.devices && this.emitDailyJSEvent(e4);
                    break;
                  case to:
                    var f2 = e4.state, p2 = e4.threshold, h3 = e4.quality, v2 = f2.state, g3 = f2.reasons;
                    v2 === this._network.networkState && w(g3, this._network.networkStateReasons) && p2 === this._network.threshold && h3 === this._network.quality || (this._network.networkState = v2, this._network.networkStateReasons = g3, this._network.quality = h3, this._network.threshold = p2, e4.networkState = v2, g3.length && (e4.networkStateReasons = g3), delete e4.state, this.emitDailyJSEvent(e4));
                    break;
                  case ro:
                    e4 && e4.cpuLoadState && this.emitDailyJSEvent(e4);
                    break;
                  case io:
                    e4 && void 0 !== e4.faceCounts && this.emitDailyJSEvent(e4);
                    break;
                  case Zi:
                    var m2 = e4.activeSpeaker;
                    this._activeSpeaker.peerId !== m2.peerId && (this._activeSpeaker.peerId = m2.peerId, this.emitDailyJSEvent({ action: e4.action, activeSpeaker: this._activeSpeaker }));
                    break;
                  case "show-local-video-changed":
                    if (this._callObjectMode) return;
                    var y3 = e4.show;
                    this._showLocalVideo = y3, this.emitDailyJSEvent({ action: e4.action, show: y3 });
                    break;
                  case eo:
                    var _2 = e4.enabled;
                    this._activeSpeakerMode !== _2 && (this._activeSpeakerMode = _2, this.emitDailyJSEvent({ action: e4.action, enabled: this._activeSpeakerMode }));
                    break;
                  case Ii:
                  case Li:
                  case Di:
                    this._waitingParticipants = e4.allWaitingParticipants, this.emitDailyJSEvent({ action: e4.action, participant: e4.participant });
                    break;
                  case po:
                    w(this._receiveSettings, e4.receiveSettings) || (this._receiveSettings = e4.receiveSettings, this.emitDailyJSEvent({ action: e4.action, receiveSettings: e4.receiveSettings }));
                    break;
                  case ho:
                    this._maybeUpdateInputSettings(e4.inputSettings);
                    break;
                  case "send-settings-updated":
                    w(this._sendSettings, e4.sendSettings) || (this._sendSettings = e4.sendSettings, this._preloadCache.sendSettings = null, this.emitDailyJSEvent({ action: e4.action, sendSettings: e4.sendSettings }));
                    break;
                  case "local-audio-level":
                    this._localAudioLevel = e4.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(e4);
                    break;
                  case "remote-participants-audio-level":
                    this._remoteParticipantsAudioLevel = e4.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(e4);
                    break;
                  case Gi:
                    var b3 = e4.session_id;
                    this._rmpPlayerState[b3] = e4.playerState, this.emitDailyJSEvent(e4);
                    break;
                  case Hi:
                    delete this._rmpPlayerState[e4.session_id], this.emitDailyJSEvent(e4);
                    break;
                  case zi:
                    var S3 = e4.session_id, k3 = this._rmpPlayerState[S3];
                    k3 && this.compareEqualForRMPUpdateEvent(k3, e4.remoteMediaPlayerState) || (this._rmpPlayerState[S3] = e4.remoteMediaPlayerState, this.emitDailyJSEvent(e4));
                    break;
                  case "custom-button-click":
                  case "sidebar-view-changed":
                  case "pip-started":
                  case "pip-stopped":
                    this.emitDailyJSEvent(e4);
                    break;
                  case Oi:
                    var E2 = this._meetingSessionState.topology !== (e4.meetingSessionState && e4.meetingSessionState.topology);
                    this._meetingSessionState = Us(e4.meetingSessionState, this._callObjectMode), (this._callObjectMode || E2) && this.emitDailyJSEvent(e4);
                    break;
                  case Ki:
                    this._isScreenSharing = true, this.emitDailyJSEvent(e4);
                    break;
                  case Qi:
                  case Xi:
                    this._isScreenSharing = false, this.emitDailyJSEvent(e4);
                    break;
                  case Vi:
                  case Ui:
                  case Bi:
                  case Ji:
                  case Yi:
                  case Ri:
                  case xi:
                  case Fi:
                  case yi:
                  case _i:
                  case qi:
                  case Wi:
                  case "test-completed":
                  case no:
                  case $i:
                  case so:
                  case co:
                  case uo:
                  case lo:
                  case vo:
                  case fo:
                  case "dialin-ready":
                  case "dialin-connected":
                  case "dialin-error":
                  case "dialin-stopped":
                  case "dialin-warning":
                  case "dialout-connected":
                  case "dialout-answered":
                  case "dialout-error":
                  case "dialout-stopped":
                  case "dialout-warning":
                    this.emitDailyJSEvent(e4);
                    break;
                  case "request-fullscreen":
                    this.requestFullscreen();
                    break;
                  case "request-exit-fullscreen":
                    this.exitFullscreen();
                }
              } }, { key: "maybeEventRecordingStopped", value: function(e4, t4) {
                var n4 = "record";
                e4 && (t4.local || false !== t4[n4] || e4[n4] === t4[n4] || this.emitDailyJSEvent({ action: Ui }));
              } }, { key: "maybeEventRecordingStarted", value: function(e4, t4) {
                var n4 = "record";
                e4 && (t4.local || true !== t4[n4] || e4[n4] === t4[n4] || this.emitDailyJSEvent({ action: Vi }));
              } }, { key: "_trackStatePlayable", value: function(e4) {
                return !(!e4 || e4.state !== Br);
              } }, { key: "_trackChanged", value: function(e4, t4) {
                return !((null == e4 ? void 0 : e4.id) === (null == t4 ? void 0 : t4.id));
              } }, { key: "maybeEventTrackStopped", value: function(e4, t4, n4) {
                var r2, i2, o2 = null !== (r2 = null == t4 ? void 0 : t4.tracks[e4]) && void 0 !== r2 ? r2 : null, a3 = null !== (i2 = null == n4 ? void 0 : n4.tracks[e4]) && void 0 !== i2 ? i2 : null, s3 = null == o2 ? void 0 : o2.track;
                if (s3) {
                  var c2 = this._trackStatePlayable(o2), u2 = this._trackStatePlayable(a3), l2 = this._trackChanged(s3, null == a3 ? void 0 : a3.track);
                  c2 && (u2 && !l2 || this.emitDailyJSEvent({ action: ji, track: s3, participant: null != n4 ? n4 : t4, type: e4 }));
                }
              } }, { key: "maybeEventTrackStarted", value: function(e4, t4, n4) {
                var r2, i2, o2 = null !== (r2 = null == t4 ? void 0 : t4.tracks[e4]) && void 0 !== r2 ? r2 : null, a3 = null !== (i2 = null == n4 ? void 0 : n4.tracks[e4]) && void 0 !== i2 ? i2 : null, s3 = null == a3 ? void 0 : a3.track;
                if (s3) {
                  var c2 = this._trackStatePlayable(o2), u2 = this._trackStatePlayable(a3), l2 = this._trackChanged(null == o2 ? void 0 : o2.track, s3);
                  u2 && (c2 && !l2 || this.emitDailyJSEvent({ action: Ni, track: s3, participant: n4, type: e4 }));
                }
              } }, { key: "maybeParticipantTracksStopped", value: function(e4, t4) {
                if (e4) for (var n4 in e4.tracks) this.maybeEventTrackStopped(n4, e4, t4);
              } }, { key: "maybeParticipantTracksStarted", value: function(e4, t4) {
                if (t4) for (var n4 in t4.tracks) this.maybeEventTrackStarted(n4, e4, t4);
              } }, { key: "compareEqualForRMPUpdateEvent", value: function(e4, t4) {
                var n4, r2;
                return e4.state === t4.state && (null === (n4 = e4.settings) || void 0 === n4 ? void 0 : n4.volume) === (null === (r2 = t4.settings) || void 0 === r2 ? void 0 : r2.volume);
              } }, { key: "emitDailyJSEvent", value: function(e4) {
                try {
                  e4.callClientId = this.callClientId, this.emit(e4.action, e4);
                } catch (t4) {
                  console.log("could not emit", e4, t4);
                }
              } }, { key: "compareEqualForParticipantUpdateEvent", value: function(e4, t4) {
                return !(!w(e4, t4) || e4.videoTrack && t4.videoTrack && (e4.videoTrack.id !== t4.videoTrack.id || e4.videoTrack.muted !== t4.videoTrack.muted || e4.videoTrack.enabled !== t4.videoTrack.enabled) || e4.audioTrack && t4.audioTrack && (e4.audioTrack.id !== t4.audioTrack.id || e4.audioTrack.muted !== t4.audioTrack.muted || e4.audioTrack.enabled !== t4.audioTrack.enabled));
              } }, { key: "nativeUtils", value: function() {
                return Po() ? "undefined" == typeof DailyNativeUtils ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
              } }, { key: "updateIsPreparingToJoin", value: function(e4) {
                this._updateCallState(this._callState, e4);
              } }, { key: "_updateCallState", value: function(e4) {
                var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._isPreparingToJoin;
                if (e4 !== this._callState || t4 !== this._isPreparingToJoin) {
                  var n4 = this._callState, r2 = this._isPreparingToJoin;
                  this._callState = e4, this._isPreparingToJoin = t4;
                  var i2 = this._callState === Dr;
                  this.updateShowAndroidOngoingMeetingNotification(i2);
                  var o2 = gs(n4, r2), a3 = gs(this._callState, this._isPreparingToJoin);
                  o2 !== a3 && (this.updateKeepDeviceAwake(a3), this.updateDeviceAudioMode(a3), this.updateNoOpRecordingEnsuringBackgroundContinuity(a3));
                }
              } }, { key: "resetMeetingDependentVars", value: function() {
                this._participants = {}, this._participantCounts = rs, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = false, this._didPreAuth = false, this._accessState = { access: Jr }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = Us(ns, this._callObjectMode), this._isScreenSharing = false, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = false, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = false, this._maxAppMessageSize = mo, this._callMachineInitialized = false, this._bundleLoadTime = void 0, this._preloadCache;
              } }, { key: "updateKeepDeviceAwake", value: function(e4) {
                Po() && this.nativeUtils().setKeepDeviceAwake(e4, this.callClientId);
              } }, { key: "updateDeviceAudioMode", value: function(e4) {
                if (Po() && !this.disableReactNativeAutoDeviceManagement("audio")) {
                  var t4 = e4 ? this._nativeInCallAudioMode : "idle";
                  this.nativeUtils().setAudioMode(t4);
                }
              } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(e4) {
                if (Po() && this.nativeUtils().setShowOngoingMeetingNotification) {
                  var t4, n4, r2, i2;
                  if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
                    var o2 = this.properties.reactNativeConfig.androidInCallNotification;
                    t4 = o2.title, n4 = o2.subtitle, r2 = o2.iconName, i2 = o2.disableForCustomOverride;
                  }
                  i2 && (e4 = false), this.nativeUtils().setShowOngoingMeetingNotification(e4, t4, n4, r2, this.callClientId);
                }
              } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(e4) {
                Po() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(e4);
              } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
                var e4;
                if (Po()) {
                  var t4 = null === (e4 = this._callMachine()) || void 0 === e4 || null === (e4 = e4.store) || void 0 === e4 ? void 0 : e4.getState();
                  for (var n4 in null == t4 ? void 0 : t4.streams) {
                    var r2 = t4.streams[n4];
                    r2 && r2.pendingTrack && "audio" === r2.pendingTrack.kind && (r2.pendingTrack.enabled = this._hasNativeAudioFocus);
                  }
                }
              } }, { key: "disableReactNativeAutoDeviceManagement", value: function(e4) {
                return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[e4];
              } }, { key: "absoluteUrl", value: function(e4) {
                if (void 0 !== e4) {
                  var t4 = document.createElement("a");
                  return t4.href = e4, t4.href;
                }
              } }, { key: "sayHello", value: function() {
                var e4 = "hello, world.";
                return console.log(e4), e4;
              } }, { key: "_logUseAfterDestroy", value: function() {
                var e4 = Object.values(Za)[0];
                if (this.needsLoad()) if (e4 && !e4.needsLoad()) {
                  var t4 = { action: wo, level: "error", code: this.strictMode ? 9995 : 9997 };
                  e4.sendMessageToCallMachine(t4);
                } else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
                else {
                  var n4 = { action: wo, level: "error", code: this.strictMode ? 9995 : 9997 };
                  this._messageChannel.sendMessageToCallMachine(n4, null, this.callClientId, this._iframe);
                }
              } }, { key: "_logDuplicateInstanceAttempt", value: function() {
                for (var e4 = 0, t4 = Object.values(Za); e4 < t4.length; e4++) {
                  var n4 = t4[e4];
                  n4._callMachineInitialized ? (n4.sendMessageToCallMachine({ action: wo, level: "warn", code: this.allowMultipleCallInstances ? 9993 : 9992 }), n4._delayDuplicateInstanceLog = false) : n4._delayDuplicateInstanceLog = true;
                }
              } }, { key: "_maybeSendToSentry", value: function(e4) {
                var n4, r2, i2, o2;
                if (null !== (n4 = e4.error) && void 0 !== n4 && n4.type) {
                  if (![ri, ti, Zr].includes(e4.error.type)) return;
                  if (e4.error.type === Zr && e4.error.msg.includes("deleted")) return;
                }
                var a3 = null !== (r2 = this.properties) && void 0 !== r2 && r2.url ? new URL(this.properties.url) : void 0, s3 = "production";
                a3 && a3.host.includes(".staging.daily") && (s3 = "staging");
                var c2, u2, l2, d3, f2, p2 = Kn({}).filter((function(e5) {
                  return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(e5.name);
                })), h3 = new hr({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: br, stackParser: Ar, integrations: p2, environment: s3 }), v2 = new Fe();
                if (v2.setClient(h3), h3.init(), this.session_id && v2.setExtra("sessionId", this.session_id), this.properties) {
                  var g3 = Ha({}, this.properties);
                  g3.userName = g3.userName ? "[Filtered]" : void 0, g3.userData = g3.userData ? "[Filtered]" : void 0, g3.token = g3.token ? "[Filtered]" : void 0, v2.setExtra("properties", g3);
                }
                if (a3) {
                  var m2 = a3.searchParams.get("domain");
                  if (!m2) {
                    var y3 = a3.host.match(/(.*?)\./);
                    m2 = y3 && y3[1] || "";
                  }
                  m2 && v2.setTag("domain", m2);
                }
                e4.error && (v2.setTag("fatalErrorType", e4.error.type), v2.setExtra("errorDetails", e4.error.details), (null === (c2 = e4.error.details) || void 0 === c2 ? void 0 : c2.uri) && v2.setTag("serverAddress", e4.error.details.uri), (null === (u2 = e4.error.details) || void 0 === u2 ? void 0 : u2.workerGroup) && v2.setTag("workerGroup", e4.error.details.workerGroup), (null === (l2 = e4.error.details) || void 0 === l2 ? void 0 : l2.geoGroup) && v2.setTag("geoGroup", e4.error.details.geoGroup), (null === (d3 = e4.error.details) || void 0 === d3 ? void 0 : d3.on) && v2.setTag("connectionAttempt", e4.error.details.on), null !== (f2 = e4.error.details) && void 0 !== f2 && f2.bundleUrl && (v2.setTag("bundleUrl", e4.error.details.bundleUrl), v2.setTag("bundleError", e4.error.details.sourceError.type))), v2.setTags({ callMode: this._callObjectMode ? Po() ? "reactNative" : null !== (i2 = this.properties) && void 0 !== i2 && null !== (i2 = i2.dailyConfig) && void 0 !== i2 && null !== (i2 = i2.callMode) && void 0 !== i2 && i2.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame", version: t3.version() });
                var _2 = (null === (o2 = e4.error) || void 0 === o2 ? void 0 : o2.msg) || e4.errorMsg;
                v2.captureException(new Error(_2));
              } }, { key: "_callMachine", value: function() {
                var e4;
                return null === (e4 = window._daily) || void 0 === e4 || null === (e4 = e4.instances) || void 0 === e4 || null === (e4 = e4[this.callClientId]) || void 0 === e4 ? void 0 : e4.callMachine;
              } }, { key: "_maybeUpdateInputSettings", value: function(e4) {
                if (!w(this._inputSettings, e4)) {
                  var t4 = this._getInputSettings();
                  this._inputSettings = e4;
                  var n4 = this._getInputSettings();
                  w(t4, n4) || this.emitDailyJSEvent({ action: ho, inputSettings: n4 });
                }
              } }], [{ key: "supportedBrowser", value: function() {
                if (Po()) return { supported: true, mobile: true, name: "React Native", version: null, supportsScreenShare: true, supportsSfu: true, supportsVideoProcessing: false, supportsAudioProcessing: false };
                var e4 = E().getParser(Oo());
                return { supported: !!xo(), mobile: "mobile" === e4.getPlatformType(), name: e4.getBrowserName(), version: e4.getBrowserVersion(), supportsFullscreen: !!Lo(), supportsScreenShare: !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && ((function(e5, t4) {
                  if (!e5 || !t4) return true;
                  switch (e5) {
                    case "Chrome":
                      return t4.major >= 75;
                    case "Safari":
                      return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(13 === t4.major && 0 === t4.minor && 0 === t4.point);
                    case "Firefox":
                      return t4.major >= 67;
                  }
                  return true;
                })(Uo(), Bo()) || Po())), supportsSfu: !!xo(), supportsVideoProcessing: jo(), supportsAudioProcessing: Ro() };
              } }, { key: "version", value: function() {
                return "0.85.0";
              } }, { key: "createCallObject", value: function() {
                var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e4.layout = "none", new t3(null, e4);
              } }, { key: "wrap", value: function(e4) {
                var n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (ws(), !e4 || !e4.contentWindow || "string" != typeof e4.src) throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
                return n4.layout || (n4.customLayout ? n4.layout = "custom-v1" : n4.layout = "browser"), new t3(e4, n4);
              } }, { key: "createFrame", value: function(e4, n4) {
                var r2, i2;
                ws(), e4 && n4 ? (r2 = e4, i2 = n4) : e4 && e4.append ? (r2 = e4, i2 = {}) : (r2 = document.body, i2 = e4 || {});
                var o2 = i2.iframeStyle;
                o2 || (o2 = r2 === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
                var a3 = document.createElement("iframe");
                window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? a3.allow = "microphone, camera" : a3.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", a3.style.visibility = "hidden", r2.appendChild(a3), a3.style.visibility = null, Object.keys(o2).forEach((function(e5) {
                  return a3.style[e5] = o2[e5];
                })), i2.layout || (i2.customLayout ? i2.layout = "custom-v1" : i2.layout = "browser");
                try {
                  return new t3(a3, i2);
                } catch (e5) {
                  throw r2.removeChild(a3), e5;
                }
              } }, { key: "createTransparentFrame", value: function() {
                var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ws();
                var n4 = document.createElement("iframe");
                return n4.allow = "microphone; camera; autoplay", n4.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    ", document.body.appendChild(n4), e4.layout || (e4.layout = "custom-v1"), t3.wrap(n4, e4);
              } }, { key: "getCallInstance", value: function() {
                var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                return e4 ? Za[e4] : Object.values(Za)[0];
              } }]);
              var n3, a2, s2, d2, h2, g2, y2, b2, S2, k2, M2, O2, P2, I2, L2, D2, N2, j2, R2, x2, F2, V2, U2, B2, J2, Y2, $2, q2, W2, G2, z2, H2, K2, Q2, X2, Z2, ee2, te2;
            })(_());
            function ps(e3) {
              if (e3.extension) {
                if ("string" != typeof e3.extension) throw new Error("Error starting dial out: extension must be a string");
                if (e3.extension.length > 20) throw new Error("Error starting dial out: extension length must be less than or equal to 20");
              }
              if (e3.waitBeforeExtensionDialSec) {
                if ("number" != typeof e3.waitBeforeExtensionDialSec) throw new Error("Error starting dial out: waitBeforeExtensionDialSec must be a number");
                if (e3.waitBeforeExtensionDialSec > 60) throw new Error("Error starting dial out: waitBeforeExtensionDialSec must be less than or equal to 60");
                if (!e3.extension) throw new Error("Error starting dial out: waitBeforeExtensionDialSec requires a phoneNumber and extension");
              }
            }
            function hs(e3, t3) {
              var n3 = {};
              for (var r2 in e3) if (e3[r2] instanceof MediaStreamTrack) console.warn("MediaStreamTrack found in props or cache.", r2), n3[r2] = ko;
              else if ("dailyConfig" === r2) {
                if (e3[r2].modifyLocalSdpHook) {
                  var i2 = window._daily.instances[t3].customCallbacks || {};
                  i2.modifyLocalSdpHook = e3[r2].modifyLocalSdpHook, window._daily.instances[t3].customCallbacks = i2, delete e3[r2].modifyLocalSdpHook;
                }
                if (e3[r2].modifyRemoteSdpHook) {
                  var o2 = window._daily.instances[t3].customCallbacks || {};
                  o2.modifyRemoteSdpHook = e3[r2].modifyRemoteSdpHook, window._daily.instances[t3].customCallbacks = o2, delete e3[r2].modifyRemoteSdpHook;
                }
                n3[r2] = e3[r2];
              } else n3[r2] = e3[r2];
              return n3;
            }
            function vs(e3) {
              var t3 = arguments.length > 2 ? arguments[2] : void 0;
              if (e3 !== Dr) {
                var n3 = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " only supported after join.");
                throw t3 && (n3 += " ".concat(t3)), console.error(n3), new Error(n3);
              }
            }
            function gs(e3, t3) {
              return [Lr, Dr].includes(e3) || t3;
            }
            function ms(e3, t3) {
              var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "This daily-js method", r2 = arguments.length > 3 ? arguments[3] : void 0;
              if (gs(e3, t3)) {
                var i2 = "".concat(n3, " not supported after joining a meeting.");
                throw r2 && (i2 += " ".concat(r2)), console.error(i2), new Error(i2);
              }
            }
            function ys(e3) {
              var t3 = arguments.length > 2 ? arguments[2] : void 0;
              if (!e3) {
                var n3 = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? " requires preAuth() or startCamera() to initialize call state." : " requires preAuth(), startCamera(), or join() to initialize call state.");
                throw t3 && (n3 += " ".concat(t3)), console.error(n3), new Error(n3);
              }
            }
            function _s(e3) {
              if (e3) {
                var t3 = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
                throw console.error(t3), new Error(t3);
              }
            }
            function bs(e3) {
              if (!e3) {
                var t3 = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
                throw console.error(t3), new Error(t3);
              }
            }
            function Ss(e3) {
              if (e3) {
                var t3 = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
                throw console.error(t3), new Error(t3);
              }
            }
            function ws() {
              if (Po()) throw new Error("This daily-js method is not currently supported in React Native");
            }
            function ks() {
              if (!Po()) throw new Error("This daily-js method is only supported in React Native");
            }
            function Es(e3) {
              if (void 0 === e3) return true;
              var t3;
              if ("string" == typeof e3) t3 = e3;
              else try {
                t3 = JSON.stringify(e3), w(JSON.parse(t3), e3) || console.warn("The userData provided will be modified when serialized.");
              } catch (e4) {
                throw Error("userData must be serializable to JSON: ".concat(e4));
              }
              if (t3.length > 4096) throw Error("userData is too large (".concat(t3.length, " characters). Maximum size suppported is ").concat(4096, "."));
              return true;
            }
            function Ts(e3, t3) {
              for (var n3 = t3.allowAllParticipantsKey, r2 = function(e4) {
                var t4 = ["local"];
                return n3 || t4.push("*"), e4 && !t4.includes(e4);
              }, i2 = function(e4) {
                return !!(void 0 === e4.layer || Number.isInteger(e4.layer) && e4.layer >= 0 || "inherit" === e4.layer);
              }, o2 = function(e4) {
                return !(!e4 || e4.video && !i2(e4.video) || e4.screenVideo && !i2(e4.screenVideo));
              }, a2 = 0, s2 = Object.entries(e3); a2 < s2.length; a2++) {
                var c2 = m(s2[a2], 2), u2 = c2[0], l2 = c2[1];
                if (!r2(u2) || !o2(l2)) return false;
              }
              return true;
            }
            function Ms(e3) {
              if ("object" !== o(e3)) return false;
              for (var t3 = 0, n3 = Object.entries(e3); t3 < n3.length; t3++) {
                var r2 = m(n3[t3], 2), i2 = r2[0], a2 = r2[1];
                switch (i2) {
                  case "video":
                    if ("object" !== o(a2)) return false;
                    for (var s2 = 0, c2 = Object.entries(a2); s2 < c2.length; s2++) {
                      var u2 = m(c2[s2], 2), l2 = u2[0], d2 = u2[1];
                      switch (l2) {
                        case "processor":
                          if (!Os(d2)) return false;
                          break;
                        case "settings":
                          if (!Ps(d2)) return false;
                          break;
                        default:
                          return false;
                      }
                    }
                    break;
                  case "audio":
                    if ("object" !== o(a2)) return false;
                    for (var f2 = 0, p2 = Object.entries(a2); f2 < p2.length; f2++) {
                      var h2 = m(p2[f2], 2), v2 = h2[0], g2 = h2[1];
                      switch (v2) {
                        case "processor":
                          if (!Cs(g2)) return false;
                          break;
                        case "settings":
                          if (!Ps(g2)) return false;
                          break;
                        default:
                          return false;
                      }
                    }
                    break;
                  default:
                    return false;
                }
              }
              return true;
            }
            function As(e3, t3, n3) {
              var r2, i2 = [];
              e3.video && e3.video.processor && (jo(null !== (r2 = null == t3 ? void 0 : t3.useLegacyVideoProcessor) && void 0 !== r2 && r2) || (e3.video.settings ? delete e3.video.processor : delete e3.video, i2.push("video"))), e3.audio && e3.audio.processor && (Ro() || (e3.audio.settings ? delete e3.audio.processor : delete e3.audio, i2.push("audio"))), i2.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(i2.join(", "))), e3.audio && e3.audio.settings && (e3.audio.settings.customTrack ? (n3.audioTrack = e3.audio.settings.customTrack, e3.audio.settings = { customTrack: ko }) : delete n3.audioTrack), e3.video && e3.video.settings && (e3.video.settings.customTrack ? (n3.videoTrack = e3.video.settings.customTrack, e3.video.settings = { customTrack: ko }) : delete n3.videoTrack);
            }
            function Cs(e3) {
              if (Po()) return console.warn("Video processing is not yet supported in React Native"), false;
              var t3, n3 = ["type"];
              return !(!e3 || "object" !== o(e3) || (Object.keys(e3).filter((function(e4) {
                return !n3.includes(e4);
              })).forEach((function(t4) {
                console.warn("invalid key inputSettings -> audio -> processor : ".concat(t4)), delete e3[t4];
              })), t3 = e3.type, "string" != typeof t3 || !Object.values(To).includes(t3) && (console.error("inputSettings audio processor type invalid"), 1)));
            }
            function Os(e3) {
              if (Po()) return console.warn("Video processing is not yet supported in React Native"), false;
              var t3, n3 = ["type", "config"];
              if (!e3) return false;
              if ("object" !== o(e3)) return false;
              if ("string" != typeof (t3 = e3.type) || !Object.values(Eo).includes(t3) && (console.error("inputSettings video processor type invalid"), 1)) return false;
              if (e3.config) {
                if ("object" !== o(e3.config)) return false;
                if (!(function(e4, t4) {
                  var n4 = Object.keys(t4);
                  if (0 === n4.length) return true;
                  var r2 = "invalid object in inputSettings -> video -> processor -> config";
                  switch (e4) {
                    case Eo.BGBLUR:
                      return n4.length > 1 || "strength" !== n4[0] ? (console.error(r2), false) : !("number" != typeof t4.strength || t4.strength <= 0 || t4.strength > 1 || isNaN(t4.strength)) || (console.error("".concat(r2, "; expected: {0 < strength <= 1}, got: ").concat(t4.strength)), false);
                    case Eo.BGIMAGE:
                      return !(void 0 !== t4.source && !(function(e5) {
                        return "default" === e5.source ? (e5.type = "default", true) : e5.source instanceof ArrayBuffer || (O(e5.source) ? (e5.type = "url", !!(function(e6) {
                          var t6 = new URL(e6), n6 = t6.pathname;
                          if ("data:" === t6.protocol) try {
                            var r3 = n6.substring(n6.indexOf(":") + 1, n6.indexOf(";")).split("/")[1];
                            return Ao.includes(r3);
                          } catch (e7) {
                            return console.error("failed to deduce blob content type", e7), false;
                          }
                          var i2 = n6.split(".").at(-1).toLowerCase().trim();
                          return Ao.includes(i2);
                        })(e5.source) || (console.error("invalid image type; supported types: [".concat(Ao.join(", "), "]")), false)) : (t5 = e5.source, n5 = Number(t5), isNaN(n5) || !Number.isInteger(n5) || n5 <= 0 || n5 > 10 ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), false) : (e5.type = "daily-preselect", true)));
                        var t5, n5;
                      })(t4));
                    default:
                      return true;
                  }
                })(e3.type, e3.config)) return false;
              }
              return Object.keys(e3).filter((function(e4) {
                return !n3.includes(e4);
              })).forEach((function(t4) {
                console.warn("invalid key inputSettings -> video -> processor : ".concat(t4)), delete e3[t4];
              })), true;
            }
            function Ps(e3) {
              return "object" === o(e3) && (!e3.customTrack || e3.customTrack instanceof MediaStreamTrack);
            }
            function Is() {
              var e3 = Object.values(Eo).join(" | "), t3 = Object.values(To).join(" | ");
              return "inputSettings must be of the form: { video?: { processor?: { type: [ ".concat(e3, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(t3, " ] } } }");
            }
            function Ls(e3) {
              var t3 = e3.allowAllParticipantsKey;
              return "receiveSettings must be of the form { [<remote participant id> | ".concat(Wr).concat(t3 ? ' | "'.concat(Gr, '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
            }
            function Ds() {
              return "customIntegrations should be an object of type ".concat(JSON.stringify(us), ".");
            }
            function Ns(e3) {
              if (e3 && "object" !== o(e3) || Array.isArray(e3)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(cs), ".")), false;
              if (e3) for (var t3 = 0, n3 = Object.entries(e3); t3 < n3.length; t3++) for (var r2 = m(n3[t3], 1)[0], i2 = 0, a2 = Object.entries(e3[r2]); i2 < a2.length; i2++) {
                var s2 = m(a2[i2], 2), c2 = s2[0], u2 = s2[1], l2 = cs.id[c2];
                if (!l2) return console.error("customTrayButton does not support key ".concat(c2)), false;
                switch (c2) {
                  case "iconPath":
                  case "iconPathDarkMode":
                    if (!O(u2)) return console.error("customTrayButton ".concat(c2, " should be a url.")), false;
                    break;
                  case "visualState":
                    if (!["default", "sidebar-open", "active"].includes(u2)) return console.error("customTrayButton ".concat(c2, " should be ").concat(l2, ". Got: ").concat(u2)), false;
                    break;
                  default:
                    if (o(u2) !== l2) return console.error("customTrayButton ".concat(c2, " should be a ").concat(l2, ".")), false;
                }
              }
              return true;
            }
            function js(e3) {
              if (!e3 || e3 && "object" !== o(e3) || Array.isArray(e3)) return console.error(Ds()), false;
              for (var t3 = function(e4) {
                return "".concat(e4, " should be ").concat(us.id[e4]);
              }, n3 = function(e4, t4) {
                return console.error("customIntegration ".concat(e4, ": ").concat(t4));
              }, r2 = 0, i2 = Object.entries(e3); r2 < i2.length; r2++) {
                var a2 = m(i2[r2], 1)[0];
                if (!("label" in e3[a2])) return n3(a2, "label is required"), false;
                if (!("location" in e3[a2])) return n3(a2, "location is required"), false;
                if (!("src" in e3[a2]) && !("srcdoc" in e3[a2])) return n3(a2, "src or srcdoc is required"), false;
                for (var s2 = 0, c2 = Object.entries(e3[a2]); s2 < c2.length; s2++) {
                  var u2 = m(c2[s2], 2), l2 = u2[0], d2 = u2[1];
                  switch (l2) {
                    case "allow":
                    case "csp":
                    case "name":
                    case "referrerPolicy":
                    case "sandbox":
                      if ("string" != typeof d2) return n3(a2, t3(l2)), false;
                      break;
                    case "iconURL":
                      if (!O(d2)) return n3(a2, "".concat(l2, " should be a url")), false;
                      break;
                    case "src":
                      if ("srcdoc" in e3[a2]) return n3(a2, "cannot have both src and srcdoc"), false;
                      if (!O(d2)) return n3(a2, 'src "'.concat(d2, '" is not a valid URL')), false;
                      break;
                    case "srcdoc":
                      if ("src" in e3[a2]) return n3(a2, "cannot have both src and srcdoc"), false;
                      if ("string" != typeof d2) return n3(a2, t3(l2)), false;
                      break;
                    case "location":
                      if (!["main", "sidebar"].includes(d2)) return n3(a2, t3(l2)), false;
                      break;
                    case "controlledBy":
                      if ("*" !== d2 && "owners" !== d2 && (!Array.isArray(d2) || d2.some((function(e4) {
                        return "string" != typeof e4;
                      })))) return n3(a2, t3(l2)), false;
                      break;
                    case "shared":
                      if ((!Array.isArray(d2) || d2.some((function(e4) {
                        return "string" != typeof e4;
                      }))) && "owners" !== d2 && "boolean" != typeof d2) return n3(a2, t3(l2)), false;
                      break;
                    default:
                      if (!us.id[l2]) return console.error("customIntegration does not support key ".concat(l2)), false;
                  }
                }
              }
              return true;
            }
            function Rs(e3, t3) {
              if (void 0 === t3) return false;
              switch (o(t3)) {
                case "string":
                  return o(e3) === t3;
                case "object":
                  if ("object" !== o(e3)) return false;
                  for (var n3 in e3) if (!Rs(e3[n3], t3[n3])) return false;
                  return true;
                default:
                  return false;
              }
            }
            function xs(e3, t3) {
              var n3 = e3.sessionId, r2 = e3.toEndPoint, i2 = e3.callerId, o2 = e3.useSipRefer;
              if (!n3 || !r2) throw new Error("".concat(t3, "() requires a sessionId and toEndPoint"));
              if ("string" != typeof n3 || "string" != typeof r2) throw new Error("Invalid paramater: sessionId and toEndPoint must be of type string");
              if (o2 && !r2.startsWith("sip:")) throw new Error('"toEndPoint" must be a "sip" address');
              if (!r2.startsWith("sip:") && !r2.startsWith("+")) throw new Error("toEndPoint: ".concat(r2, ' must starts with either "sip:" or "+"'));
              if (i2 && "string" != typeof i2) throw new Error("callerId must be of type string");
              if (i2 && !r2.startsWith("+")) throw new Error("callerId is only valid when transferring to a PSTN number");
            }
            function Fs(e3) {
              if ("object" !== o(e3)) throw new Error('RemoteMediaPlayerSettings: must be "object" type');
              if (e3.state && !Object.values(Mo).includes(e3.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Mo));
              if (e3.volume) {
                if ("number" != typeof e3.volume) throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
                if (e3.volume < 0 || e3.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
              }
            }
            function Vs(e3, t3, n3) {
              return !("number" != typeof e3 || e3 < t3 || e3 > n3);
            }
            function Us(e3, t3) {
              return e3 && !t3 && delete e3.data, e3;
            }
          } }, t = {};
          function n(r) {
            var i = t[r];
            if (void 0 !== i) return i.exports;
            var o = t[r] = { exports: {} };
            return e[r].call(o.exports, o, o.exports, n), o.exports;
          }
          return n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, { a: t2 }), t2;
          }, n.d = function(e2, t2) {
            for (var r in t2) n.o(t2, r) && !n.o(e2, r) && Object.defineProperty(e2, r, { enumerable: true, get: t2[r] });
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n(781);
        })();
      })), globalThis && globalThis.Daily && (globalThis.DailyIframe = globalThis.Daily);
    }
  });

  // node_modules/events/events.js
  var require_events = __commonJS({
    "node_modules/events/events.js"(exports, module) {
      "use strict";
      var R = typeof Reflect === "object" ? Reflect : null;
      var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      };
      var ReflectOwnKeys;
      if (R && typeof R.ownKeys === "function") {
        ReflectOwnKeys = R.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        };
      } else {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target);
        };
      }
      function ProcessEmitWarning(warning) {
        if (console && console.warn) console.warn(warning);
      }
      var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
        return value !== value;
      };
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      module.exports = EventEmitter;
      module.exports.once = once;
      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = void 0;
      EventEmitter.prototype._eventsCount = 0;
      EventEmitter.prototype._maxListeners = void 0;
      var defaultMaxListeners = 10;
      function checkListener(listener) {
        if (typeof listener !== "function") {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
      }
      Object.defineProperty(EventEmitter, "defaultMaxListeners", {
        enumerable: true,
        get: function() {
          return defaultMaxListeners;
        },
        set: function(arg) {
          if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
          }
          defaultMaxListeners = arg;
        }
      });
      EventEmitter.init = function() {
        if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || void 0;
      };
      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
        if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
        }
        this._maxListeners = n;
        return this;
      };
      function _getMaxListeners(that) {
        if (that._maxListeners === void 0)
          return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }
      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
        return _getMaxListeners(this);
      };
      EventEmitter.prototype.emit = function emit(type) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
        var doError = type === "error";
        var events = this._events;
        if (events !== void 0)
          doError = doError && events.error === void 0;
        else if (!doError)
          return false;
        if (doError) {
          var er;
          if (args.length > 0)
            er = args[0];
          if (er instanceof Error) {
            throw er;
          }
          var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
          err.context = er;
          throw err;
        }
        var handler = events[type];
        if (handler === void 0)
          return false;
        if (typeof handler === "function") {
          ReflectApply(handler, this, args);
        } else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);
          for (var i = 0; i < len; ++i)
            ReflectApply(listeners[i], this, args);
        }
        return true;
      };
      function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
        checkListener(listener);
        events = target._events;
        if (events === void 0) {
          events = target._events = /* @__PURE__ */ Object.create(null);
          target._eventsCount = 0;
        } else {
          if (events.newListener !== void 0) {
            target.emit(
              "newListener",
              type,
              listener.listener ? listener.listener : listener
            );
            events = target._events;
          }
          existing = events[type];
        }
        if (existing === void 0) {
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === "function") {
            existing = events[type] = prepend ? [listener, existing] : [existing, listener];
          } else if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
          m = _getMaxListeners(target);
          if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
          }
        }
        return target;
      }
      EventEmitter.prototype.addListener = function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      };
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.prependListener = function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };
      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0)
            return this.listener.call(this.target);
          return this.listener.apply(this.target, arguments);
        }
      }
      function _onceWrap(target, type, listener) {
        var state = { fired: false, wrapFn: void 0, target, type, listener };
        var wrapped = onceWrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }
      EventEmitter.prototype.once = function once2(type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.removeListener = function removeListener(type, listener) {
        var list, events, position, i, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === void 0)
          return this;
        list = events[type];
        if (list === void 0)
          return this;
        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit("removeListener", type, list.listener || listener);
          }
        } else if (typeof list !== "function") {
          position = -1;
          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }
          if (position < 0)
            return this;
          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }
          if (list.length === 1)
            events[type] = list[0];
          if (events.removeListener !== void 0)
            this.emit("removeListener", type, originalListener || listener);
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
        var listeners, events, i;
        events = this._events;
        if (events === void 0)
          return this;
        if (events.removeListener === void 0) {
          if (arguments.length === 0) {
            this._events = /* @__PURE__ */ Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== void 0) {
            if (--this._eventsCount === 0)
              this._events = /* @__PURE__ */ Object.create(null);
            else
              delete events[type];
          }
          return this;
        }
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners("removeListener");
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
          return this;
        }
        listeners = events[type];
        if (typeof listeners === "function") {
          this.removeListener(type, listeners);
        } else if (listeners !== void 0) {
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }
        return this;
      };
      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (events === void 0)
          return [];
        var evlistener = events[type];
        if (evlistener === void 0)
          return [];
        if (typeof evlistener === "function")
          return unwrap ? [evlistener.listener || evlistener] : [evlistener];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }
      EventEmitter.prototype.listeners = function listeners(type) {
        return _listeners(this, type, true);
      };
      EventEmitter.prototype.rawListeners = function rawListeners(type) {
        return _listeners(this, type, false);
      };
      EventEmitter.listenerCount = function(emitter, type) {
        if (typeof emitter.listenerCount === "function") {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };
      EventEmitter.prototype.listenerCount = listenerCount;
      function listenerCount(type) {
        var events = this._events;
        if (events !== void 0) {
          var evlistener = events[type];
          if (typeof evlistener === "function") {
            return 1;
          } else if (evlistener !== void 0) {
            return evlistener.length;
          }
        }
        return 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
      };
      function arrayClone(arr, n) {
        var copy = new Array(n);
        for (var i = 0; i < n; ++i)
          copy[i] = arr[i];
        return copy;
      }
      function spliceOne(list, index) {
        for (; index + 1 < list.length; index++)
          list[index] = list[index + 1];
        list.pop();
      }
      function unwrapListeners(arr) {
        var ret = new Array(arr.length);
        for (var i = 0; i < ret.length; ++i) {
          ret[i] = arr[i].listener || arr[i];
        }
        return ret;
      }
      function once(emitter, name) {
        return new Promise(function(resolve, reject) {
          function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
          }
          function resolver() {
            if (typeof emitter.removeListener === "function") {
              emitter.removeListener("error", errorListener);
            }
            resolve([].slice.call(arguments));
          }
          ;
          eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
          if (name !== "error") {
            addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
          }
        });
      }
      function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
        if (typeof emitter.on === "function") {
          eventTargetAgnosticAddListener(emitter, "error", handler, flags);
        }
      }
      function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
        if (typeof emitter.on === "function") {
          if (flags.once) {
            emitter.once(name, listener);
          } else {
            emitter.on(name, listener);
          }
        } else if (typeof emitter.addEventListener === "function") {
          emitter.addEventListener(name, function wrapListener(arg) {
            if (flags.once) {
              emitter.removeEventListener(name, wrapListener);
            }
            listener(arg);
          });
        } else {
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
        }
      }
    }
  });

  // node_modules/@vapi-ai/web/dist/api.js
  var require_api = __commonJS({
    "node_modules/@vapi-ai/web/dist/api.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Api = exports.HttpClient = exports.ContentType = void 0;
      var ContentType;
      (function(ContentType2) {
        ContentType2["Json"] = "application/json";
        ContentType2["JsonApi"] = "application/vnd.api+json";
        ContentType2["FormData"] = "multipart/form-data";
        ContentType2["UrlEncoded"] = "application/x-www-form-urlencoded";
        ContentType2["Text"] = "text/plain";
      })(ContentType || (exports.ContentType = ContentType = {}));
      var HttpClient = class {
        baseUrl = "https://api.vapi.ai";
        securityData = null;
        securityWorker;
        abortControllers = /* @__PURE__ */ new Map();
        customFetch = (...fetchParams) => fetch(...fetchParams);
        baseApiParams = {
          credentials: "same-origin",
          headers: {},
          redirect: "follow",
          referrerPolicy: "no-referrer"
        };
        constructor(apiConfig = {}) {
          Object.assign(this, apiConfig);
        }
        setSecurityData = (data) => {
          this.securityData = data;
        };
        encodeQueryParam(key, value) {
          const encodedKey = encodeURIComponent(key);
          return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
        }
        addQueryParam(query, key) {
          return this.encodeQueryParam(key, query[key]);
        }
        addArrayQueryParam(query, key) {
          const value = query[key];
          return value.map((v) => this.encodeQueryParam(key, v)).join("&");
        }
        toQueryString(rawQuery) {
          const query = rawQuery || {};
          const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
          return keys.map((key) => Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)).join("&");
        }
        addQueryParams(rawQuery) {
          const queryString = this.toQueryString(rawQuery);
          return queryString ? `?${queryString}` : "";
        }
        contentFormatters = {
          [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
          [ContentType.JsonApi]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
          [ContentType.Text]: (input) => input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
          [ContentType.FormData]: (input) => {
            if (input instanceof FormData) {
              return input;
            }
            return Object.keys(input || {}).reduce((formData, key) => {
              const property = input[key];
              formData.append(key, property instanceof Blob ? property : typeof property === "object" && property !== null ? JSON.stringify(property) : `${property}`);
              return formData;
            }, new FormData());
          },
          [ContentType.UrlEncoded]: (input) => this.toQueryString(input)
        };
        mergeRequestParams(params1, params2) {
          return {
            ...this.baseApiParams,
            ...params1,
            ...params2 || {},
            headers: {
              ...this.baseApiParams.headers || {},
              ...params1.headers || {},
              ...params2 && params2.headers || {}
            }
          };
        }
        createAbortSignal = (cancelToken) => {
          if (this.abortControllers.has(cancelToken)) {
            const abortController2 = this.abortControllers.get(cancelToken);
            if (abortController2) {
              return abortController2.signal;
            }
            return void 0;
          }
          const abortController = new AbortController();
          this.abortControllers.set(cancelToken, abortController);
          return abortController.signal;
        };
        abortRequest = (cancelToken) => {
          const abortController = this.abortControllers.get(cancelToken);
          if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
          }
        };
        request = async ({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }) => {
          const secureParams = (typeof secure === "boolean" ? secure : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {};
          const requestParams = this.mergeRequestParams(params, secureParams);
          const queryString = query && this.toQueryString(query);
          const payloadFormatter = this.contentFormatters[type || ContentType.Json];
          const responseFormat = format || requestParams.format;
          return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
            ...requestParams,
            headers: {
              ...requestParams.headers || {},
              ...type && type !== ContentType.FormData ? { "Content-Type": type } : {}
            },
            signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
            body: typeof body === "undefined" || body === null ? null : payloadFormatter(body)
          }).then(async (response) => {
            const r = response;
            r.data = null;
            r.error = null;
            const responseToParse = responseFormat ? response.clone() : response;
            const data = !responseFormat ? r : await responseToParse[responseFormat]().then((data2) => {
              if (r.ok) {
                r.data = data2;
              } else {
                r.error = data2;
              }
              return r;
            }).catch((e) => {
              r.error = e;
              return r;
            });
            if (cancelToken) {
              this.abortControllers.delete(cancelToken);
            }
            if (!response.ok)
              throw data;
            return data;
          });
        };
      };
      exports.HttpClient = HttpClient;
      var Api = class extends HttpClient {
        assistant = {
          /**
           * No description
           *
           * @tags Assistants
           * @name AssistantControllerCreate
           * @summary Create Assistant
           * @request POST:/assistant
           * @secure
           */
          assistantControllerCreate: (data, params = {}) => this.request({
            path: `/assistant`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Assistants
           * @name AssistantControllerFindAll
           * @summary List Assistants
           * @request GET:/assistant
           * @secure
           */
          assistantControllerFindAll: (query, params = {}) => this.request({
            path: `/assistant`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Assistants
           * @name AssistantControllerFindOne
           * @summary Get Assistant
           * @request GET:/assistant/{id}
           * @secure
           */
          assistantControllerFindOne: (id, params = {}) => this.request({
            path: `/assistant/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Assistants
           * @name AssistantControllerUpdate
           * @summary Update Assistant
           * @request PATCH:/assistant/{id}
           * @secure
           */
          assistantControllerUpdate: (id, data, params = {}) => this.request({
            path: `/assistant/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Assistants
           * @name AssistantControllerReplace
           * @summary Replace Assistant
           * @request PUT:/assistant/{id}
           * @secure
           */
          assistantControllerReplace: (id, data, params = {}) => this.request({
            path: `/assistant/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Assistants
           * @name AssistantControllerRemove
           * @summary Delete Assistant
           * @request DELETE:/assistant/{id}
           * @secure
           */
          assistantControllerRemove: (id, params = {}) => this.request({
            path: `/assistant/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Assistants
           * @name AssistantControllerFindVersions
           * @summary List Assistant Versions
           * @request GET:/assistant/{id}/version
           * @secure
           */
          assistantControllerFindVersions: (id, query, params = {}) => this.request({
            path: `/assistant/${id}/version`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          })
        };
        v2 = {
          /**
           * No description
           *
           * @tags Assistants
           * @name AssistantControllerFindAllPaginated
           * @summary List Assistants with pagination
           * @request GET:/v2/assistant
           * @secure
           */
          assistantControllerFindAllPaginated: (query, params = {}) => this.request({
            path: `/v2/assistant`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerCallsExport
           * @summary Export Calls to CSV
           * @request GET:/v2/call/export
           * @secure
           */
          callControllerCallsExport: (query, params = {}) => this.request({
            path: `/v2/call/export`,
            method: "GET",
            query,
            secure: true,
            ...params
          }),
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerFindAllPaginated
           * @summary List Calls
           * @request GET:/v2/call
           * @secure
           */
          callControllerFindAllPaginated: (query, params = {}) => this.request({
            path: `/v2/call`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerFindAllMetadataPaginated
           * @summary List Call Metadata
           * @request GET:/v2/call/metadata
           * @secure
           */
          callControllerFindAllMetadataPaginated: (query, params = {}) => this.request({
            path: `/v2/call/metadata`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Phone Numbers
           * @name PhoneNumberControllerFindAllPaginated
           * @summary List Phone Numbers
           * @request GET:/v2/phone-number
           * @secure
           */
          phoneNumberControllerFindAllPaginated: (query, params = {}) => this.request({
            path: `/v2/phone-number`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          })
        };
        squad = {
          /**
           * No description
           *
           * @tags Squads
           * @name SquadControllerCreate
           * @summary Create Squad
           * @request POST:/squad
           * @secure
           */
          squadControllerCreate: (data, params = {}) => this.request({
            path: `/squad`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Squads
           * @name SquadControllerFindAll
           * @summary List Squads
           * @request GET:/squad
           * @secure
           */
          squadControllerFindAll: (query, params = {}) => this.request({
            path: `/squad`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Squads
           * @name SquadControllerFindOne
           * @summary Get Squad
           * @request GET:/squad/{id}
           * @secure
           */
          squadControllerFindOne: (id, params = {}) => this.request({
            path: `/squad/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Squads
           * @name SquadControllerUpdate
           * @summary Update Squad
           * @request PATCH:/squad/{id}
           * @secure
           */
          squadControllerUpdate: (id, data, params = {}) => this.request({
            path: `/squad/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Squads
           * @name SquadControllerRemove
           * @summary Delete Squad
           * @request DELETE:/squad/{id}
           * @secure
           */
          squadControllerRemove: (id, params = {}) => this.request({
            path: `/squad/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        workflow = {
          /**
           * No description
           *
           * @tags Workflow
           * @name WorkflowControllerFindAll
           * @summary Get Workflows
           * @request GET:/workflow
           * @secure
           */
          workflowControllerFindAll: (params = {}) => this.request({
            path: `/workflow`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Workflow
           * @name WorkflowControllerCreate
           * @summary Create Workflow
           * @request POST:/workflow
           * @secure
           */
          workflowControllerCreate: (data, params = {}) => this.request({
            path: `/workflow`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Workflow
           * @name WorkflowControllerFindOne
           * @summary Get Workflow
           * @request GET:/workflow/{id}
           * @secure
           */
          workflowControllerFindOne: (id, params = {}) => this.request({
            path: `/workflow/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Workflow
           * @name WorkflowControllerDelete
           * @summary Delete Workflow
           * @request DELETE:/workflow/{id}
           * @secure
           */
          workflowControllerDelete: (id, params = {}) => this.request({
            path: `/workflow/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Workflow
           * @name WorkflowControllerUpdate
           * @summary Update Workflow
           * @request PATCH:/workflow/{id}
           * @secure
           */
          workflowControllerUpdate: (id, data, params = {}) => this.request({
            path: `/workflow/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          })
        };
        call = {
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerCreate
           * @summary Create Call
           * @request POST:/call
           * @secure
           */
          callControllerCreate: (data, params = {}) => this.request({
            path: `/call`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerFindAll
           * @summary List Calls
           * @request GET:/call
           * @secure
           */
          callControllerFindAll: (query, params = {}) => this.request({
            path: `/call`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerFindOne
           * @summary Get Call
           * @request GET:/call/{id}
           * @secure
           */
          callControllerFindOne: (id, params = {}) => this.request({
            path: `/call/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerUpdate
           * @summary Update Call
           * @request PATCH:/call/{id}
           * @secure
           */
          callControllerUpdate: (id, data, params = {}) => this.request({
            path: `/call/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerDeleteCallData
           * @summary Delete Call Data
           * @request DELETE:/call/{id}
           * @secure
           */
          callControllerDeleteCallData: (id, data, params = {}) => this.request({
            path: `/call/${id}`,
            method: "DELETE",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerCreatePhoneCall
           * @summary Create Phone Call
           * @request POST:/call/phone
           * @deprecated
           * @secure
           */
          callControllerCreatePhoneCall: (data, params = {}) => this.request({
            path: `/call/phone`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Calls
           * @name CallControllerCreateWebCall
           * @summary Create Web Call
           * @request POST:/call/web
           * @secure
           */
          callControllerCreateWebCall: (data, params = {}) => this.request({
            path: `/call/web`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          })
        };
        chat = {
          /**
           * No description
           *
           * @tags Chats
           * @name ChatControllerListChats
           * @summary List Chats
           * @request GET:/chat
           * @secure
           */
          chatControllerListChats: (query, params = {}) => this.request({
            path: `/chat`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * @description Creates a new chat with optional SMS delivery via transport field. Requires at least one of: assistantId/assistant, sessionId, or previousChatId. Note: sessionId and previousChatId are mutually exclusive. Transport field enables SMS delivery with two modes: (1) New conversation - provide transport.phoneNumberId and transport.customer to create a new session, (2) Existing conversation - provide sessionId to use existing session data. Cannot specify both sessionId and transport fields together. The transport.useLLMGeneratedMessageForOutbound flag controls whether input is processed by LLM (true, default) or forwarded directly as SMS (false).
           *
           * @tags Chats
           * @name ChatControllerCreateChat
           * @summary Create Chat
           * @request POST:/chat
           * @secure
           */
          chatControllerCreateChat: (data, params = {}) => this.request({
            path: `/chat`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Chats
           * @name ChatControllerGetChat
           * @summary Get Chat
           * @request GET:/chat/{id}
           * @secure
           */
          chatControllerGetChat: (id, params = {}) => this.request({
            path: `/chat/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Chats
           * @name ChatControllerDeleteChat
           * @summary Delete Chat
           * @request DELETE:/chat/{id}
           * @secure
           */
          chatControllerDeleteChat: (id, params = {}) => this.request({
            path: `/chat/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Chats
           * @name ChatControllerCreateOpenAiChat
           * @summary Create Chat (OpenAI Compatible)
           * @request POST:/chat/responses
           * @secure
           */
          chatControllerCreateOpenAiChat: (data, params = {}) => this.request({
            path: `/chat/responses`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Chats
           * @name ChatControllerCreateWebChat
           * @summary Create WebChat
           * @request POST:/chat/web
           * @secure
           */
          chatControllerCreateWebChat: (data, params = {}) => this.request({
            path: `/chat/web`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Chats
           * @name ChatControllerCreateOpenAiWebChat
           * @summary Create WebChat (OpenAI Compatible)
           * @request POST:/chat/web/responses
           * @secure
           */
          chatControllerCreateOpenAiWebChat: (data, params = {}) => this.request({
            path: `/chat/web/responses`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          })
        };
        campaign = {
          /**
           * No description
           *
           * @tags Campaigns
           * @name CampaignControllerCreate
           * @summary Create Campaign
           * @request POST:/campaign
           * @secure
           */
          campaignControllerCreate: (data, params = {}) => this.request({
            path: `/campaign`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Campaigns
           * @name CampaignControllerFindAll
           * @summary List Campaigns
           * @request GET:/campaign
           * @secure
           */
          campaignControllerFindAll: (query, params = {}) => this.request({
            path: `/campaign`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Campaigns
           * @name CampaignControllerFindOne
           * @summary Get Campaign
           * @request GET:/campaign/{id}
           * @secure
           */
          campaignControllerFindOne: (id, params = {}) => this.request({
            path: `/campaign/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Campaigns
           * @name CampaignControllerUpdate
           * @summary Update Campaign
           * @request PATCH:/campaign/{id}
           * @secure
           */
          campaignControllerUpdate: (id, data, params = {}) => this.request({
            path: `/campaign/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Campaigns
           * @name CampaignControllerRemove
           * @summary Delete Campaign
           * @request DELETE:/campaign/{id}
           * @secure
           */
          campaignControllerRemove: (id, params = {}) => this.request({
            path: `/campaign/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        session = {
          /**
           * No description
           *
           * @tags Sessions
           * @name SessionControllerCreate
           * @summary Create Session
           * @request POST:/session
           * @secure
           */
          sessionControllerCreate: (data, params = {}) => this.request({
            path: `/session`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Sessions
           * @name SessionControllerFindAllPaginated
           * @summary List Sessions
           * @request GET:/session
           * @secure
           */
          sessionControllerFindAllPaginated: (query, params = {}) => this.request({
            path: `/session`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Sessions
           * @name SessionControllerFindOne
           * @summary Get Session
           * @request GET:/session/{id}
           * @secure
           */
          sessionControllerFindOne: (id, params = {}) => this.request({
            path: `/session/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Sessions
           * @name SessionControllerUpdate
           * @summary Update Session
           * @request PATCH:/session/{id}
           * @secure
           */
          sessionControllerUpdate: (id, data, params = {}) => this.request({
            path: `/session/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Sessions
           * @name SessionControllerRemove
           * @summary Delete Session
           * @request DELETE:/session/{id}
           * @secure
           */
          sessionControllerRemove: (id, params = {}) => this.request({
            path: `/session/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        phoneNumber = {
          /**
           * @description Use POST /phone-number instead.
           *
           * @tags Phone Numbers
           * @name PhoneNumberControllerImportTwilio
           * @summary Import Twilio Number
           * @request POST:/phone-number/import/twilio
           * @deprecated
           * @secure
           */
          phoneNumberControllerImportTwilio: (data, params = {}) => this.request({
            path: `/phone-number/import/twilio`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * @description Use POST /phone-number instead.
           *
           * @tags Phone Numbers
           * @name PhoneNumberControllerImportVonage
           * @summary Import Vonage Number
           * @request POST:/phone-number/import/vonage
           * @deprecated
           * @secure
           */
          phoneNumberControllerImportVonage: (data, params = {}) => this.request({
            path: `/phone-number/import/vonage`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Phone Numbers
           * @name PhoneNumberControllerCreate
           * @summary Create Phone Number
           * @request POST:/phone-number
           * @secure
           */
          phoneNumberControllerCreate: (data, params = {}) => this.request({
            path: `/phone-number`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Phone Numbers
           * @name PhoneNumberControllerFindAll
           * @summary List Phone Numbers
           * @request GET:/phone-number
           * @secure
           */
          phoneNumberControllerFindAll: (query, params = {}) => this.request({
            path: `/phone-number`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Phone Numbers
           * @name PhoneNumberControllerFindOne
           * @summary Get Phone Number
           * @request GET:/phone-number/{id}
           * @secure
           */
          phoneNumberControllerFindOne: (id, params = {}) => this.request({
            path: `/phone-number/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Phone Numbers
           * @name PhoneNumberControllerUpdate
           * @summary Update Phone Number
           * @request PATCH:/phone-number/{id}
           * @secure
           */
          phoneNumberControllerUpdate: (id, data, params = {}) => this.request({
            path: `/phone-number/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Phone Numbers
           * @name PhoneNumberControllerRemove
           * @summary Delete Phone Number
           * @request DELETE:/phone-number/{id}
           * @secure
           */
          phoneNumberControllerRemove: (id, params = {}) => this.request({
            path: `/phone-number/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        tool = {
          /**
           * No description
           *
           * @tags Tools
           * @name ToolControllerCreate
           * @summary Create Tool
           * @request POST:/tool
           * @secure
           */
          toolControllerCreate: (data, params = {}) => this.request({
            path: `/tool`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Tools
           * @name ToolControllerFindAll
           * @summary List Tools
           * @request GET:/tool
           * @secure
           */
          toolControllerFindAll: (query, params = {}) => this.request({
            path: `/tool`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Tools
           * @name ToolControllerFindOne
           * @summary Get Tool
           * @request GET:/tool/{id}
           * @secure
           */
          toolControllerFindOne: (id, params = {}) => this.request({
            path: `/tool/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Tools
           * @name ToolControllerUpdate
           * @summary Update Tool
           * @request PATCH:/tool/{id}
           * @secure
           */
          toolControllerUpdate: (id, data, params = {}) => this.request({
            path: `/tool/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Tools
           * @name ToolControllerRemove
           * @summary Delete Tool
           * @request DELETE:/tool/{id}
           * @secure
           */
          toolControllerRemove: (id, params = {}) => this.request({
            path: `/tool/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        file = {
          /**
           * @description Use POST /file instead.
           *
           * @tags Files
           * @name FileControllerCreateDeprecated
           * @summary Upload File
           * @request POST:/file/upload
           * @deprecated
           * @secure
           */
          fileControllerCreateDeprecated: (data, params = {}) => this.request({
            path: `/file/upload`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.FormData,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Files
           * @name FileControllerCreate
           * @summary Upload File
           * @request POST:/file
           * @secure
           */
          fileControllerCreate: (data, params = {}) => this.request({
            path: `/file`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.FormData,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Files
           * @name FileControllerFindAll
           * @summary List Files
           * @request GET:/file
           * @secure
           */
          fileControllerFindAll: (params = {}) => this.request({
            path: `/file`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Files
           * @name FileControllerFindOne
           * @summary Get File
           * @request GET:/file/{id}
           * @secure
           */
          fileControllerFindOne: (id, params = {}) => this.request({
            path: `/file/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Files
           * @name FileControllerUpdate
           * @summary Update File
           * @request PATCH:/file/{id}
           * @secure
           */
          fileControllerUpdate: (id, data, params = {}) => this.request({
            path: `/file/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Files
           * @name FileControllerRemove
           * @summary Delete File
           * @request DELETE:/file/{id}
           * @secure
           */
          fileControllerRemove: (id, params = {}) => this.request({
            path: `/file/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        knowledgeBase = {
          /**
           * No description
           *
           * @tags Knowledge Base
           * @name KnowledgeBaseControllerCreate
           * @summary Create Knowledge Base
           * @request POST:/knowledge-base
           * @secure
           */
          knowledgeBaseControllerCreate: (data, params = {}) => this.request({
            path: `/knowledge-base`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Knowledge Base
           * @name KnowledgeBaseControllerFindAll
           * @summary List Knowledge Bases
           * @request GET:/knowledge-base
           * @secure
           */
          knowledgeBaseControllerFindAll: (query, params = {}) => this.request({
            path: `/knowledge-base`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Knowledge Base
           * @name KnowledgeBaseControllerFindOne
           * @summary Get Knowledge Base
           * @request GET:/knowledge-base/{id}
           * @secure
           */
          knowledgeBaseControllerFindOne: (id, params = {}) => this.request({
            path: `/knowledge-base/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Knowledge Base
           * @name KnowledgeBaseControllerUpdate
           * @summary Update Knowledge Base
           * @request PATCH:/knowledge-base/{id}
           * @secure
           */
          knowledgeBaseControllerUpdate: (id, data, params = {}) => this.request({
            path: `/knowledge-base/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Knowledge Base
           * @name KnowledgeBaseControllerRemove
           * @summary Delete Knowledge Base
           * @request DELETE:/knowledge-base/{id}
           * @secure
           */
          knowledgeBaseControllerRemove: (id, params = {}) => this.request({
            path: `/knowledge-base/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        structuredOutput = {
          /**
           * No description
           *
           * @tags Structured Outputs
           * @name StructuredOutputControllerFindAll
           * @summary List Structured Outputs
           * @request GET:/structured-output
           * @secure
           */
          structuredOutputControllerFindAll: (query, params = {}) => this.request({
            path: `/structured-output`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Structured Outputs
           * @name StructuredOutputControllerCreate
           * @summary Create Structured Output
           * @request POST:/structured-output
           * @secure
           */
          structuredOutputControllerCreate: (data, params = {}) => this.request({
            path: `/structured-output`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Structured Outputs
           * @name StructuredOutputControllerFindOne
           * @summary Get Structured Output
           * @request GET:/structured-output/{id}
           * @secure
           */
          structuredOutputControllerFindOne: (id, params = {}) => this.request({
            path: `/structured-output/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Structured Outputs
           * @name StructuredOutputControllerUpdate
           * @summary Update Structured Output
           * @request PATCH:/structured-output/{id}
           * @secure
           */
          structuredOutputControllerUpdate: (id, query, data, params = {}) => this.request({
            path: `/structured-output/${id}`,
            method: "PATCH",
            query,
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Structured Outputs
           * @name StructuredOutputControllerRemove
           * @summary Delete Structured Output
           * @request DELETE:/structured-output/{id}
           * @secure
           */
          structuredOutputControllerRemove: (id, params = {}) => this.request({
            path: `/structured-output/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Structured Outputs
           * @name StructuredOutputControllerRun
           * @summary Run Structured Output
           * @request POST:/structured-output/run
           * @secure
           */
          structuredOutputControllerRun: (data, params = {}) => this.request({
            path: `/structured-output/run`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          })
        };
        testSuite = {
          /**
           * No description
           *
           * @tags Test Suites
           * @name TestSuiteControllerFindAllPaginated
           * @summary List Test Suites
           * @request GET:/test-suite
           * @secure
           */
          testSuiteControllerFindAllPaginated: (query, params = {}) => this.request({
            path: `/test-suite`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suites
           * @name TestSuiteControllerCreate
           * @summary Create Test Suite
           * @request POST:/test-suite
           * @secure
           */
          testSuiteControllerCreate: (data, params = {}) => this.request({
            path: `/test-suite`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suites
           * @name TestSuiteControllerFindOne
           * @summary Get Test Suite
           * @request GET:/test-suite/{id}
           * @secure
           */
          testSuiteControllerFindOne: (id, params = {}) => this.request({
            path: `/test-suite/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suites
           * @name TestSuiteControllerUpdate
           * @summary Update Test Suite
           * @request PATCH:/test-suite/{id}
           * @secure
           */
          testSuiteControllerUpdate: (id, data, params = {}) => this.request({
            path: `/test-suite/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suites
           * @name TestSuiteControllerRemove
           * @summary Delete Test Suite
           * @request DELETE:/test-suite/{id}
           * @secure
           */
          testSuiteControllerRemove: (id, params = {}) => this.request({
            path: `/test-suite/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Tests
           * @name TestSuiteTestControllerFindAllPaginated
           * @summary List Tests
           * @request GET:/test-suite/{testSuiteId}/test
           * @secure
           */
          testSuiteTestControllerFindAllPaginated: (testSuiteId, query, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/test`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Tests
           * @name TestSuiteTestControllerCreate
           * @summary Create Test
           * @request POST:/test-suite/{testSuiteId}/test
           * @secure
           */
          testSuiteTestControllerCreate: (testSuiteId, data, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/test`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Tests
           * @name TestSuiteTestControllerFindOne
           * @summary Get Test
           * @request GET:/test-suite/{testSuiteId}/test/{id}
           * @secure
           */
          testSuiteTestControllerFindOne: (testSuiteId, id, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/test/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Tests
           * @name TestSuiteTestControllerUpdate
           * @summary Update Test
           * @request PATCH:/test-suite/{testSuiteId}/test/{id}
           * @secure
           */
          testSuiteTestControllerUpdate: (testSuiteId, id, data, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/test/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Tests
           * @name TestSuiteTestControllerRemove
           * @summary Delete Test
           * @request DELETE:/test-suite/{testSuiteId}/test/{id}
           * @secure
           */
          testSuiteTestControllerRemove: (testSuiteId, id, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/test/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Runs
           * @name TestSuiteRunControllerFindAllPaginated
           * @summary List Test Suite Runs
           * @request GET:/test-suite/{testSuiteId}/run
           * @secure
           */
          testSuiteRunControllerFindAllPaginated: (testSuiteId, query, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/run`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Runs
           * @name TestSuiteRunControllerCreate
           * @summary Create Test Suite Run
           * @request POST:/test-suite/{testSuiteId}/run
           * @secure
           */
          testSuiteRunControllerCreate: (testSuiteId, data, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/run`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Runs
           * @name TestSuiteRunControllerFindOne
           * @summary Get Test Suite Run
           * @request GET:/test-suite/{testSuiteId}/run/{id}
           * @secure
           */
          testSuiteRunControllerFindOne: (testSuiteId, id, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/run/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Runs
           * @name TestSuiteRunControllerUpdate
           * @summary Update Test Suite Run
           * @request PATCH:/test-suite/{testSuiteId}/run/{id}
           * @secure
           */
          testSuiteRunControllerUpdate: (testSuiteId, id, data, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/run/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Test Suite Runs
           * @name TestSuiteRunControllerRemove
           * @summary Delete Test Suite Run
           * @request DELETE:/test-suite/{testSuiteId}/run/{id}
           * @secure
           */
          testSuiteRunControllerRemove: (testSuiteId, id, params = {}) => this.request({
            path: `/test-suite/${testSuiteId}/run/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        reporting = {
          /**
           * No description
           *
           * @tags Insight
           * @name InsightControllerCreate
           * @summary Create Insight
           * @request POST:/reporting/insight
           * @secure
           */
          insightControllerCreate: (data, params = {}) => this.request({
            path: `/reporting/insight`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Insight
           * @name InsightControllerFindAll
           * @summary Get Insights
           * @request GET:/reporting/insight
           * @secure
           */
          insightControllerFindAll: (query, params = {}) => this.request({
            path: `/reporting/insight`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Insight
           * @name InsightControllerUpdate
           * @summary Update Insight
           * @request PATCH:/reporting/insight/{id}
           * @secure
           */
          insightControllerUpdate: (id, data, params = {}) => this.request({
            path: `/reporting/insight/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Insight
           * @name InsightControllerFindOne
           * @summary Get Insight
           * @request GET:/reporting/insight/{id}
           * @secure
           */
          insightControllerFindOne: (id, params = {}) => this.request({
            path: `/reporting/insight/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Insight
           * @name InsightControllerRemove
           * @summary Delete Insight
           * @request DELETE:/reporting/insight/{id}
           * @secure
           */
          insightControllerRemove: (id, params = {}) => this.request({
            path: `/reporting/insight/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Insight
           * @name InsightControllerRun
           * @summary Run Insight
           * @request POST:/reporting/insight/{id}/run
           * @secure
           */
          insightControllerRun: (id, data, params = {}) => this.request({
            path: `/reporting/insight/${id}/run`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Insight
           * @name InsightControllerPreview
           * @summary Preview Insight
           * @request POST:/reporting/insight/preview
           * @secure
           */
          insightControllerPreview: (data, params = {}) => this.request({
            path: `/reporting/insight/preview`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          })
        };
        eval = {
          /**
           * No description
           *
           * @tags Eval
           * @name EvalControllerCreate
           * @summary Create Eval
           * @request POST:/eval
           * @secure
           */
          evalControllerCreate: (data, params = {}) => this.request({
            path: `/eval`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Eval
           * @name EvalControllerGetPaginated
           * @summary List Evals
           * @request GET:/eval
           * @secure
           */
          evalControllerGetPaginated: (query, params = {}) => this.request({
            path: `/eval`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Eval
           * @name EvalControllerUpdate
           * @summary Update Eval
           * @request PATCH:/eval/{id}
           * @secure
           */
          evalControllerUpdate: (id, data, params = {}) => this.request({
            path: `/eval/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Eval
           * @name EvalControllerRemove
           * @summary Delete Eval
           * @request DELETE:/eval/{id}
           * @secure
           */
          evalControllerRemove: (id, params = {}) => this.request({
            path: `/eval/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Eval
           * @name EvalControllerGet
           * @summary Get Eval
           * @request GET:/eval/{id}
           * @secure
           */
          evalControllerGet: (id, params = {}) => this.request({
            path: `/eval/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Eval
           * @name EvalControllerRemoveRun
           * @summary Delete Eval Run
           * @request DELETE:/eval/run/{id}
           * @secure
           */
          evalControllerRemoveRun: (id, params = {}) => this.request({
            path: `/eval/run/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Eval
           * @name EvalControllerGetRun
           * @summary Get Eval Run
           * @request GET:/eval/run/{id}
           * @secure
           */
          evalControllerGetRun: (id, params = {}) => this.request({
            path: `/eval/run/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Eval
           * @name EvalControllerRun
           * @summary Create Eval Run
           * @request POST:/eval/run
           * @secure
           */
          evalControllerRun: (data, params = {}) => this.request({
            path: `/eval/run`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            ...params
          }),
          /**
           * No description
           *
           * @tags Eval
           * @name EvalControllerGetRunsPaginated
           * @summary List Eval Runs
           * @request GET:/eval/run
           * @secure
           */
          evalControllerGetRunsPaginated: (query, params = {}) => this.request({
            path: `/eval/run`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          })
        };
        observability = {
          /**
           * No description
           *
           * @tags Observability/Scorecard
           * @name ScorecardControllerGet
           * @summary Get Scorecard
           * @request GET:/observability/scorecard/{id}
           * @secure
           */
          scorecardControllerGet: (id, params = {}) => this.request({
            path: `/observability/scorecard/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Observability/Scorecard
           * @name ScorecardControllerUpdate
           * @summary Update Scorecard
           * @request PATCH:/observability/scorecard/{id}
           * @secure
           */
          scorecardControllerUpdate: (id, data, params = {}) => this.request({
            path: `/observability/scorecard/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Observability/Scorecard
           * @name ScorecardControllerRemove
           * @summary Delete Scorecard
           * @request DELETE:/observability/scorecard/{id}
           * @secure
           */
          scorecardControllerRemove: (id, params = {}) => this.request({
            path: `/observability/scorecard/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Observability/Scorecard
           * @name ScorecardControllerGetPaginated
           * @summary List Scorecards
           * @request GET:/observability/scorecard
           * @secure
           */
          scorecardControllerGetPaginated: (query, params = {}) => this.request({
            path: `/observability/scorecard`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Observability/Scorecard
           * @name ScorecardControllerCreate
           * @summary Create Scorecard
           * @request POST:/observability/scorecard
           * @secure
           */
          scorecardControllerCreate: (data, params = {}) => this.request({
            path: `/observability/scorecard`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          })
        };
        org = {
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerCreate
           * @summary Create Org
           * @request POST:/org
           * @secure
           */
          orgControllerCreate: (data, params = {}) => this.request({
            path: `/org`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerFindAll
           * @summary List Orgs
           * @request GET:/org
           * @secure
           */
          orgControllerFindAll: (params = {}) => this.request({
            path: `/org`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerFeatureFlagEnabled
           * @summary Check if Feature Flag is enabled
           * @request GET:/org/feature-flag
           * @secure
           */
          orgControllerFeatureFlagEnabled: (query, params = {}) => this.request({
            path: `/org/feature-flag`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerFindOne
           * @summary Get Org
           * @request GET:/org/{id}
           * @secure
           */
          orgControllerFindOne: (id, params = {}) => this.request({
            path: `/org/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerUpdate
           * @summary Update Org
           * @request PATCH:/org/{id}
           * @secure
           */
          orgControllerUpdate: (id, data, params = {}) => this.request({
            path: `/org/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerDeleteOrg
           * @summary Delete Org
           * @request DELETE:/org/{id}
           * @secure
           */
          orgControllerDeleteOrg: (id, params = {}) => this.request({
            path: `/org/${id}`,
            method: "DELETE",
            secure: true,
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerFindAllUsers
           * @summary List Users
           * @request GET:/org/{id}/user
           * @secure
           */
          orgControllerFindAllUsers: (id, params = {}) => this.request({
            path: `/org/${id}/user`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerOrgLeave
           * @summary Leave Org
           * @request DELETE:/org/{id}/leave
           * @secure
           */
          orgControllerOrgLeave: (id, params = {}) => this.request({
            path: `/org/${id}/leave`,
            method: "DELETE",
            secure: true,
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerOrgRemoveUser
           * @summary Remove Org Member
           * @request DELETE:/org/{id}/member/{memberId}/leave
           * @secure
           */
          orgControllerOrgRemoveUser: (id, memberId, params = {}) => this.request({
            path: `/org/${id}/member/${memberId}/leave`,
            method: "DELETE",
            secure: true,
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerUsersInvite
           * @summary Invite User
           * @request POST:/org/{id}/invite
           * @secure
           */
          orgControllerUsersInvite: (id, data, params = {}) => this.request({
            path: `/org/${id}/invite`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerUserUpdate
           * @summary Update User Role
           * @request PATCH:/org/{id}/role
           * @secure
           */
          orgControllerUserUpdate: (id, data, params = {}) => this.request({
            path: `/org/${id}/role`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            ...params
          }),
          /**
           * No description
           *
           * @tags Orgs
           * @name OrgControllerOrgToken
           * @summary Generate User Org JWT
           * @request GET:/org/{id}/auth
           * @secure
           */
          orgControllerOrgToken: (id, params = {}) => this.request({
            path: `/org/${id}/auth`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          })
        };
        token = {
          /**
           * No description
           *
           * @tags Tokens
           * @name TokenControllerCreate
           * @summary Create Token
           * @request POST:/token
           * @secure
           */
          tokenControllerCreate: (data, params = {}) => this.request({
            path: `/token`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Tokens
           * @name TokenControllerFindAll
           * @summary List Tokens
           * @request GET:/token
           * @secure
           */
          tokenControllerFindAll: (query, params = {}) => this.request({
            path: `/token`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Tokens
           * @name TokenControllerFindOne
           * @summary Get Token
           * @request GET:/token/{id}
           * @secure
           */
          tokenControllerFindOne: (id, params = {}) => this.request({
            path: `/token/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Tokens
           * @name TokenControllerUpdate
           * @summary Update Token
           * @request PATCH:/token/{id}
           * @secure
           */
          tokenControllerUpdate: (id, data, params = {}) => this.request({
            path: `/token/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Tokens
           * @name TokenControllerRemove
           * @summary Delete Token
           * @request DELETE:/token/{id}
           * @secure
           */
          tokenControllerRemove: (id, params = {}) => this.request({
            path: `/token/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        credential = {
          /**
           * No description
           *
           * @tags Credentials
           * @name CredentialControllerCreate
           * @summary Create Credential
           * @request POST:/credential
           * @secure
           */
          credentialControllerCreate: (data, params = {}) => this.request({
            path: `/credential`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Credentials
           * @name CredentialControllerFindAll
           * @summary List Credentials
           * @request GET:/credential
           * @secure
           */
          credentialControllerFindAll: (query, params = {}) => this.request({
            path: `/credential`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Credentials
           * @name CredentialControllerFindOne
           * @summary Get Credential
           * @request GET:/credential/{id}
           * @secure
           */
          credentialControllerFindOne: (id, params = {}) => this.request({
            path: `/credential/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Credentials
           * @name CredentialControllerUpdate
           * @summary Update Credential
           * @request PATCH:/credential/{id}
           * @secure
           */
          credentialControllerUpdate: (id, data, params = {}) => this.request({
            path: `/credential/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Credentials
           * @name CredentialControllerRemove
           * @summary Delete Credential
           * @request DELETE:/credential/{id}
           * @secure
           */
          credentialControllerRemove: (id, params = {}) => this.request({
            path: `/credential/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        template = {
          /**
           * No description
           *
           * @tags Templates
           * @name TemplateControllerCreate
           * @summary Create Template
           * @request POST:/template
           * @secure
           */
          templateControllerCreate: (data, params = {}) => this.request({
            path: `/template`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Templates
           * @name TemplateControllerFindAll
           * @summary List Templates
           * @request GET:/template
           * @secure
           */
          templateControllerFindAll: (query, params = {}) => this.request({
            path: `/template`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Templates
           * @name TemplateControllerFindAllPinned
           * @summary List Templates
           * @request GET:/template/pinned
           * @secure
           */
          templateControllerFindAllPinned: (params = {}) => this.request({
            path: `/template/pinned`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Templates
           * @name TemplateControllerFindOne
           * @summary Get Template
           * @request GET:/template/{id}
           * @secure
           */
          templateControllerFindOne: (id, params = {}) => this.request({
            path: `/template/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Templates
           * @name TemplateControllerUpdate
           * @summary Update Template
           * @request PATCH:/template/{id}
           * @secure
           */
          templateControllerUpdate: (id, data, params = {}) => this.request({
            path: `/template/${id}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Templates
           * @name TemplateControllerRemove
           * @summary Delete Template
           * @request DELETE:/template/{id}
           * @secure
           */
          templateControllerRemove: (id, params = {}) => this.request({
            path: `/template/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          })
        };
        voiceLibrary = {
          /**
           * No description
           *
           * @tags Voice Library
           * @name VoiceLibraryControllerVoiceGetByProvider
           * @summary Get voices in Voice Library by Provider
           * @request GET:/voice-library/{provider}
           * @secure
           */
          voiceLibraryControllerVoiceGetByProvider: (provider, query, params = {}) => this.request({
            path: `/voice-library/${provider}`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Voice Library
           * @name VoiceLibraryControllerVoiceGetAccentsByProvider
           * @summary Get accents in Voice Library by Provider
           * @request GET:/voice-library/{provider}/accents
           * @secure
           */
          voiceLibraryControllerVoiceGetAccentsByProvider: (provider, params = {}) => this.request({
            path: `/voice-library/${provider}/accents`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Voice Library
           * @name VoiceLibraryControllerVoiceLibrarySyncByProvider
           * @summary Sync Private voices in Voice Library by Provider
           * @request POST:/voice-library/sync/{provider}
           * @secure
           */
          voiceLibraryControllerVoiceLibrarySyncByProvider: (provider, params = {}) => this.request({
            path: `/voice-library/sync/${provider}`,
            method: "POST",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Voice Library
           * @name VoiceLibraryControllerVoiceLibrarySyncDefaultVoices
           * @summary Sync Default voices in Voice Library by Providers
           * @request POST:/voice-library/sync
           * @secure
           */
          voiceLibraryControllerVoiceLibrarySyncDefaultVoices: (data, params = {}) => this.request({
            path: `/voice-library/sync`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Voice Library
           * @name VoiceLibraryControllerVoiceLibraryCreateSesameVoice
           * @summary Create a new voice in the Voice Library using Sesame
           * @request POST:/voice-library/create-sesame-voice
           * @secure
           */
          voiceLibraryControllerVoiceLibraryCreateSesameVoice: (data, params = {}) => this.request({
            path: `/voice-library/create-sesame-voice`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            ...params
          })
        };
        provider = {
          /**
           * No description
           *
           * @tags Provider Resources
           * @name ProviderResourceControllerCreateProviderResource
           * @summary Create Provider Resource
           * @request POST:/provider/{provider}/{resourceName}
           * @secure
           */
          providerResourceControllerCreateProviderResource: (provider, resourceName, params = {}) => this.request({
            path: `/provider/${provider}/${resourceName}`,
            method: "POST",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Provider Resources
           * @name ProviderResourceControllerGetProviderResourcesPaginated
           * @summary List Provider Resources
           * @request GET:/provider/{provider}/{resourceName}
           * @secure
           */
          providerResourceControllerGetProviderResourcesPaginated: (provider, resourceName, query, params = {}) => this.request({
            path: `/provider/${provider}/${resourceName}`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Provider Resources
           * @name ProviderResourceControllerGetProviderResource
           * @summary Get Provider Resource
           * @request GET:/provider/{provider}/{resourceName}/{id}
           * @secure
           */
          providerResourceControllerGetProviderResource: (provider, resourceName, id, params = {}) => this.request({
            path: `/provider/${provider}/${resourceName}/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Provider Resources
           * @name ProviderResourceControllerDeleteProviderResource
           * @summary Delete Provider Resource
           * @request DELETE:/provider/{provider}/{resourceName}/{id}
           * @secure
           */
          providerResourceControllerDeleteProviderResource: (provider, resourceName, id, params = {}) => this.request({
            path: `/provider/${provider}/${resourceName}/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Provider Resources
           * @name ProviderResourceControllerUpdateProviderResource
           * @summary Update Provider Resource
           * @request PATCH:/provider/{provider}/{resourceName}/{id}
           * @secure
           */
          providerResourceControllerUpdateProviderResource: (provider, resourceName, id, params = {}) => this.request({
            path: `/provider/${provider}/${resourceName}/${id}`,
            method: "PATCH",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Providers
           * @name ProviderControllerGetWorkflows
           * @request GET:/{provider}/workflows
           * @secure
           */
          providerControllerGetWorkflows: (provider, query, params = {}) => this.request({
            path: `/${provider}/workflows`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Providers
           * @name ProviderControllerGetWorkflowTriggerHook
           * @request GET:/{provider}/workflows/{workflowId}/hooks
           * @secure
           */
          providerControllerGetWorkflowTriggerHook: (provider, workflowId, params = {}) => this.request({
            path: `/${provider}/workflows/${workflowId}/hooks`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Providers
           * @name ProviderControllerGetLocations
           * @request GET:/{provider}/locations
           * @secure
           */
          providerControllerGetLocations: (provider, params = {}) => this.request({
            path: `/${provider}/locations`,
            method: "GET",
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Providers
           * @name VoiceProviderControllerSearchVoices
           * @summary Search Voice from Provider Voice Library.
           * @request GET:/{provider}/voices/search
           * @deprecated
           * @secure
           */
          voiceProviderControllerSearchVoices: (provider, query, params = {}) => this.request({
            path: `/${provider}/voices/search`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Providers
           * @name VoiceProviderControllerSearchVoice
           * @summary Search Voice from Provider Voice Library.
           * @request GET:/{provider}/voice/search
           * @secure
           */
          voiceProviderControllerSearchVoice: (provider, query, params = {}) => this.request({
            path: `/${provider}/voice/search`,
            method: "GET",
            query,
            secure: true,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Providers
           * @name VoiceProviderControllerAddVoices
           * @summary Add Shared Voice to your Provider Account.
           * @request POST:/{provider}/voices/add
           * @deprecated
           * @secure
           */
          voiceProviderControllerAddVoices: (provider, data, params = {}) => this.request({
            path: `/${provider}/voices/add`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          }),
          /**
           * No description
           *
           * @tags Providers
           * @name VoiceProviderControllerAddVoice
           * @summary Add Shared Voice to your Provider Account.
           * @request POST:/{provider}/voice/add
           * @secure
           */
          voiceProviderControllerAddVoice: (provider, data, params = {}) => this.request({
            path: `/${provider}/voice/add`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          })
        };
        v11Labs = {
          /**
           * No description
           *
           * @tags Providers
           * @name VoiceProviderControllerCloneVoices
           * @summary Clone a voice to the provider account and add to Vapi Voice Library.
           * @request POST:/11labs/voice/clone
           * @secure
           */
          voiceProviderControllerCloneVoices: (data, params = {}) => this.request({
            path: `/11labs/voice/clone`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.FormData,
            ...params
          })
        };
        analytics = {
          /**
           * No description
           *
           * @tags Analytics
           * @name AnalyticsControllerQuery
           * @summary Create Analytics Queries
           * @request POST:/analytics
           * @secure
           */
          analyticsControllerQuery: (data, params = {}) => this.request({
            path: `/analytics`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params
          })
        };
      };
      exports.Api = Api;
    }
  });

  // node_modules/@vapi-ai/web/dist/client.js
  var require_client = __commonJS({
    "node_modules/@vapi-ai/web/dist/client.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.client = void 0;
      var api_1 = require_api();
      var api = new api_1.Api({
        baseUrl: "https://api.vapi.ai",
        baseApiParams: {
          secure: true
        },
        securityWorker: async (securityData) => {
          if (securityData) {
            return {
              headers: {
                Authorization: `Bearer ${securityData}`
              }
            };
          }
        }
      });
      exports.client = api;
    }
  });

  // node_modules/@vapi-ai/web/dist/daily-guards.js
  var require_daily_guards = __commonJS({
    "node_modules/@vapi-ai/web/dist/daily-guards.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createSafeDailyConfig = createSafeDailyConfig;
      exports.safeSetLocalAudio = safeSetLocalAudio;
      exports.safeSetInputDevicesAsync = safeSetInputDevicesAsync;
      exports.createSafeDailyFactoryOptions = createSafeDailyFactoryOptions;
      function createSafeDailyConfig(config) {
        if (!config)
          return {};
        const { alwaysIncludeMicInPermissionPrompt, ...rest } = config;
        if (alwaysIncludeMicInPermissionPrompt === false) {
          console.warn("[Vapi] alwaysIncludeMicInPermissionPrompt:false detected. This can cause Chrome 140+ issues. Removing the property.");
          return rest;
        }
        return config;
      }
      function safeSetLocalAudio(call, enabled) {
        if (!call) {
          throw new Error("Call object is not available.");
        }
        call.setLocalAudio(enabled);
      }
      async function safeSetInputDevicesAsync(call, options) {
        if (!call) {
          throw new Error("Call object is not available.");
        }
        if ("audioSource" in options && options.audioSource === false) {
          console.warn("[Vapi] setInputDevicesAsync with audioSource:false detected. This can cause Chrome 140+ issues. Using default device instead.");
          const { audioSource, ...safeOptions } = options;
          await call.setInputDevicesAsync(safeOptions);
          return;
        }
        await call.setInputDevicesAsync(options);
      }
      function createSafeDailyFactoryOptions(options) {
        if (!options)
          return {};
        if (options.audioSource === false) {
          console.warn("[Vapi] audioSource:false detected in factory options. This can cause Chrome 140+ issues. Defaulting to true.");
          return { ...options, audioSource: true };
        }
        return options;
      }
    }
  });

  // node_modules/@vapi-ai/web/dist/vapi.js
  var require_vapi = __commonJS({
    "node_modules/@vapi-ai/web/dist/vapi.js"(exports) {
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var daily_js_1 = __importDefault(require_daily());
      var events_1 = __importDefault(require_events());
      var client_1 = require_client();
      var daily_guards_1 = require_daily_guards();
      function serializeError(error) {
        if (error === null || error === void 0) {
          return { message: "Unknown error (null or undefined)" };
        }
        if (error instanceof Error) {
          const serialized = {
            message: error.message,
            name: error.name,
            stack: error.stack
          };
          const errorAsAny = error;
          if (errorAsAny.code !== void 0) {
            serialized.code = errorAsAny.code;
          }
          if (errorAsAny.cause !== void 0) {
            serialized.cause = String(errorAsAny.cause);
          }
          if (errorAsAny.reason !== void 0) {
            serialized.reason = errorAsAny.reason;
          }
          if (errorAsAny.details !== void 0) {
            serialized.details = errorAsAny.details;
          }
          if (errorAsAny.errorMsg !== void 0) {
            serialized.errorMsg = errorAsAny.errorMsg;
          }
          if (errorAsAny.error !== void 0 && typeof errorAsAny.error === "string") {
            serialized.errorDetail = errorAsAny.error;
          }
          return serialized;
        }
        if (typeof error === "string") {
          return { message: error };
        }
        if (typeof error === "object") {
          const errorObj = error;
          return {
            message: errorObj.message || errorObj.error || JSON.stringify(error),
            ...errorObj
          };
        }
        return { message: String(error) };
      }
      async function startAudioPlayer(player, track2) {
        player.muted = false;
        player.autoplay = true;
        if (track2 != null) {
          player.srcObject = new MediaStream([track2]);
          await player.play();
        }
      }
      async function buildAudioPlayer(track2, participantId) {
        const player = document.createElement("audio");
        player.dataset.participantId = participantId;
        document.body.appendChild(player);
        await startAudioPlayer(player, track2);
        return player;
      }
      function destroyAudioPlayer(participantId) {
        const player = document.querySelector(`audio[data-participant-id="${participantId}"]`);
        player?.remove();
      }
      function subscribeToTracks(e, call, isVideoRecordingEnabled, isVideoEnabled) {
        if (e.participant.local)
          return;
        call.updateParticipant(e.participant.session_id, {
          setSubscribedTracks: {
            audio: true,
            video: isVideoRecordingEnabled || isVideoEnabled
          }
        });
      }
      var VapiEventEmitter = class extends events_1.default {
        on(event, listener) {
          super.on(event, listener);
          return this;
        }
        once(event, listener) {
          super.once(event, listener);
          return this;
        }
        emit(event, ...args) {
          return super.emit(event, ...args);
        }
        removeListener(event, listener) {
          super.removeListener(event, listener);
          return this;
        }
        removeAllListeners(event) {
          super.removeAllListeners(event);
          return this;
        }
      };
      var Vapi = class extends VapiEventEmitter {
        started = false;
        call = null;
        speakingTimeout = null;
        dailyCallConfig = {};
        dailyCallObject = {};
        hasEmittedCallEndedStatus = false;
        constructor(apiToken, apiBaseUrl, dailyCallConfig, dailyCallObject) {
          super();
          client_1.client.baseUrl = apiBaseUrl ?? "https://api.vapi.ai";
          client_1.client.setSecurityData(apiToken);
          this.dailyCallConfig = (0, daily_guards_1.createSafeDailyConfig)(dailyCallConfig);
          this.dailyCallObject = (0, daily_guards_1.createSafeDailyFactoryOptions)(dailyCallObject);
        }
        async cleanup() {
          this.started = false;
          this.hasEmittedCallEndedStatus = false;
          if (this.call) {
            await this.call.destroy();
            this.call = null;
          }
          this.speakingTimeout = null;
        }
        isMobileDevice() {
          if (typeof navigator === "undefined") {
            return false;
          }
          const userAgent = navigator.userAgent;
          return /android|iphone|ipad|ipod|iemobile|blackberry|bada/i.test(userAgent.toLowerCase());
        }
        async sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        }
        async start(assistant, assistantOverrides, squad, workflow, workflowOverrides, options) {
          const startTime = Date.now();
          if (!assistant && !squad && !workflow) {
            const error = new Error("Assistant or Squad or Workflow must be provided.");
            this.emit("error", {
              type: "validation-error",
              stage: "input-validation",
              error: serializeError(error),
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            throw error;
          }
          if (this.started) {
            this.emit("call-start-progress", {
              stage: "validation",
              status: "failed",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              metadata: { reason: "already-started" }
            });
            return null;
          }
          this.emit("call-start-progress", {
            stage: "initialization",
            status: "started",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            metadata: {
              hasAssistant: !!assistant,
              hasSquad: !!squad,
              hasWorkflow: !!workflow
            }
          });
          this.started = true;
          try {
            this.emit("call-start-progress", {
              stage: "web-call-creation",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            const webCallStartTime = Date.now();
            const webCall = (await client_1.client.call.callControllerCreateWebCall({
              assistant: typeof assistant === "string" ? void 0 : assistant,
              assistantId: typeof assistant === "string" ? assistant : void 0,
              assistantOverrides,
              squad: typeof squad === "string" ? void 0 : squad,
              squadId: typeof squad === "string" ? squad : void 0,
              workflow: typeof workflow === "string" ? void 0 : workflow,
              workflowId: typeof workflow === "string" ? workflow : void 0,
              workflowOverrides,
              roomDeleteOnUserLeaveEnabled: options?.roomDeleteOnUserLeaveEnabled
            })).data;
            const webCallDuration = Date.now() - webCallStartTime;
            this.emit("call-start-progress", {
              stage: "web-call-creation",
              status: "completed",
              duration: webCallDuration,
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              metadata: {
                callId: webCall?.id || "unknown",
                videoRecordingEnabled: webCall?.artifactPlan?.videoRecordingEnabled ?? false,
                voiceProvider: webCall?.assistant?.voice?.provider || "unknown"
              }
            });
            if (this.call) {
              this.emit("call-start-progress", {
                stage: "daily-call-object-creation",
                status: "started",
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { action: "cleanup-existing" }
              });
              await this.cleanup();
            }
            const isVideoRecordingEnabled = webCall?.artifactPlan?.videoRecordingEnabled ?? false;
            const isVideoEnabled = webCall?.assistant?.voice?.provider === "tavus";
            this.emit("call-start-progress", {
              stage: "daily-call-object-creation",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              metadata: {
                audioSource: this.dailyCallObject.audioSource ?? true,
                videoSource: this.dailyCallObject.videoSource ?? isVideoRecordingEnabled,
                isVideoRecordingEnabled,
                isVideoEnabled
              }
            });
            const dailyCallStartTime = Date.now();
            try {
              this.call = daily_js_1.default.createCallObject({
                audioSource: this.dailyCallObject.audioSource ?? true,
                videoSource: this.dailyCallObject.videoSource ?? isVideoRecordingEnabled,
                dailyConfig: this.dailyCallConfig
              });
              const dailyCallDuration = Date.now() - dailyCallStartTime;
              this.emit("call-start-progress", {
                stage: "daily-call-object-creation",
                status: "completed",
                duration: dailyCallDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            } catch (error) {
              const dailyCallDuration = Date.now() - dailyCallStartTime;
              const serializedError = serializeError(error);
              this.emit("call-start-progress", {
                stage: "daily-call-object-creation",
                status: "failed",
                duration: dailyCallDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { error: serializedError.message }
              });
              this.emit("error", {
                type: "daily-call-object-creation-error",
                stage: "daily-call-object-creation",
                error: serializedError,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
              throw error;
            }
            this.call.iframe()?.style.setProperty("display", "none");
            this.call.on("left-meeting", () => {
              this.emit("call-end");
              if (!this.hasEmittedCallEndedStatus) {
                this.emit("message", {
                  type: "status-update",
                  status: "ended",
                  "endedReason": "customer-ended-call"
                });
                this.hasEmittedCallEndedStatus = true;
              }
              if (isVideoRecordingEnabled) {
                this.call?.stopRecording();
              }
              this.cleanup().catch(console.error);
            });
            this.call.on("error", (error) => {
              this.emit("error", {
                type: "daily-error",
                error: serializeError(error),
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
              if (isVideoRecordingEnabled) {
                this.call?.stopRecording();
              }
            });
            this.call.on("camera-error", (error) => {
              this.emit("camera-error", {
                type: "camera-error",
                error: serializeError(error),
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            });
            this.call.on("network-quality-change", (event) => {
              this.emit("network-quality-change", event);
            });
            this.call.on("network-connection", (event) => {
              this.emit("network-connection", event);
            });
            this.call.on("track-started", async (e) => {
              if (!e || !e.participant) {
                return;
              }
              if (e.participant?.local) {
                return;
              }
              if (e.participant?.user_name !== "Vapi Speaker") {
                return;
              }
              if (e.track.kind === "video") {
                this.emit("video", e.track);
              }
              if (e.track.kind === "audio") {
                await buildAudioPlayer(e.track, e.participant.session_id);
              }
              this.call?.sendAppMessage("playable");
            });
            this.call.on("participant-joined", (e) => {
              if (!e || !this.call)
                return;
              subscribeToTracks(e, this.call, isVideoRecordingEnabled, isVideoEnabled);
            });
            this.call.on("participant-updated", (e) => {
              if (!e) {
                return;
              }
              this.emit("daily-participant-updated", e.participant);
            });
            this.call.on("participant-left", (e) => {
              if (!e) {
                return;
              }
              destroyAudioPlayer(e.participant.session_id);
            });
            const isMobile = this.isMobileDevice();
            this.emit("call-start-progress", {
              stage: "mobile-permissions",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              metadata: { isMobile }
            });
            if (isMobile) {
              const mobileWaitStartTime = Date.now();
              await this.sleep(1e3);
              const mobileWaitDuration = Date.now() - mobileWaitStartTime;
              this.emit("call-start-progress", {
                stage: "mobile-permissions",
                status: "completed",
                duration: mobileWaitDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { action: "permissions-wait" }
              });
            } else {
              this.emit("call-start-progress", {
                stage: "mobile-permissions",
                status: "completed",
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { action: "skipped-not-mobile" }
              });
            }
            this.emit("call-start-progress", {
              stage: "daily-call-join",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            const joinStartTime = Date.now();
            try {
              await this.call.join({
                // @ts-expect-error This exists
                url: webCall.webCallUrl,
                subscribeToTracksAutomatically: false
              });
              const joinDuration = Date.now() - joinStartTime;
              this.emit("call-start-progress", {
                stage: "daily-call-join",
                status: "completed",
                duration: joinDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            } catch (error) {
              const joinDuration = Date.now() - joinStartTime;
              const serializedError = serializeError(error);
              this.emit("call-start-progress", {
                stage: "daily-call-join",
                status: "failed",
                duration: joinDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { error: serializedError.message }
              });
              this.emit("error", {
                type: "daily-call-join-error",
                stage: "daily-call-join",
                error: serializedError,
                duration: joinDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
              throw error;
            }
            if (isVideoRecordingEnabled) {
              this.emit("call-start-progress", {
                stage: "video-recording-setup",
                status: "started",
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
              const recordingRequestedTime = (/* @__PURE__ */ new Date()).getTime();
              const recordingStartTime = Date.now();
              try {
                this.call.startRecording({
                  width: 1280,
                  height: 720,
                  backgroundColor: "#FF1F2D3D",
                  layout: {
                    preset: "default"
                  }
                });
                const recordingSetupDuration = Date.now() - recordingStartTime;
                this.emit("call-start-progress", {
                  stage: "video-recording-setup",
                  status: "completed",
                  duration: recordingSetupDuration,
                  timestamp: (/* @__PURE__ */ new Date()).toISOString()
                });
                this.call.on("recording-started", () => {
                  const totalRecordingDelay = ((/* @__PURE__ */ new Date()).getTime() - recordingRequestedTime) / 1e3;
                  this.emit("call-start-progress", {
                    stage: "video-recording-started",
                    status: "completed",
                    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                    metadata: { delaySeconds: totalRecordingDelay }
                  });
                  this.send({
                    type: "control",
                    control: "say-first-message",
                    videoRecordingStartDelaySeconds: totalRecordingDelay
                  });
                });
              } catch (error) {
                const recordingSetupDuration = Date.now() - recordingStartTime;
                const serializedError = serializeError(error);
                this.emit("call-start-progress", {
                  stage: "video-recording-setup",
                  status: "failed",
                  duration: recordingSetupDuration,
                  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                  metadata: { error: serializedError.message }
                });
                this.emit("error", {
                  type: "video-recording-setup-error",
                  stage: "video-recording-setup",
                  error: serializedError,
                  timestamp: (/* @__PURE__ */ new Date()).toISOString()
                });
              }
            } else {
              this.emit("call-start-progress", {
                stage: "video-recording-setup",
                status: "completed",
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { action: "skipped-not-enabled" }
              });
            }
            this.emit("call-start-progress", {
              stage: "audio-observer-setup",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            const audioObserverStartTime = Date.now();
            try {
              this.call.startRemoteParticipantsAudioLevelObserver(100);
              const audioObserverDuration = Date.now() - audioObserverStartTime;
              this.emit("call-start-progress", {
                stage: "audio-observer-setup",
                status: "completed",
                duration: audioObserverDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            } catch (error) {
              const audioObserverDuration = Date.now() - audioObserverStartTime;
              const serializedError = serializeError(error);
              this.emit("call-start-progress", {
                stage: "audio-observer-setup",
                status: "failed",
                duration: audioObserverDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { error: serializedError.message }
              });
              this.emit("error", {
                type: "audio-observer-setup-error",
                stage: "audio-observer-setup",
                error: serializedError,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            }
            this.call.on("remote-participants-audio-level", (e) => {
              if (e)
                this.handleRemoteParticipantsAudioLevel(e);
            });
            this.call.on("app-message", (e) => this.onAppMessage(e));
            this.call.on("nonfatal-error", (e) => {
              if (e?.type === "audio-processor-error") {
                this.call?.updateInputSettings({
                  audio: {
                    processor: {
                      type: "none"
                    }
                  }
                }).then(() => {
                  (0, daily_guards_1.safeSetLocalAudio)(this.call, true);
                });
              }
            });
            this.emit("call-start-progress", {
              stage: "audio-processing-setup",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            const audioProcessingStartTime = Date.now();
            try {
              this.call.updateInputSettings({
                audio: {
                  processor: {
                    type: "noise-cancellation"
                  }
                }
              });
              const audioProcessingDuration = Date.now() - audioProcessingStartTime;
              this.emit("call-start-progress", {
                stage: "audio-processing-setup",
                status: "completed",
                duration: audioProcessingDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            } catch (error) {
              const audioProcessingDuration = Date.now() - audioProcessingStartTime;
              const serializedError = serializeError(error);
              this.emit("call-start-progress", {
                stage: "audio-processing-setup",
                status: "failed",
                duration: audioProcessingDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { error: serializedError.message }
              });
              this.emit("error", {
                type: "audio-processing-setup-error",
                stage: "audio-processing-setup",
                error: serializedError,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            }
            const totalDuration = Date.now() - startTime;
            this.emit("call-start-success", {
              totalDuration,
              callId: webCall?.id || "unknown",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            return webCall;
          } catch (e) {
            const totalDuration = Date.now() - startTime;
            const serializedError = serializeError(e);
            this.emit("call-start-failed", {
              stage: "unknown",
              totalDuration,
              error: serializedError.message,
              errorStack: serializedError.stack || "No stack trace available",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              context: {
                hasAssistant: !!assistant,
                hasSquad: !!squad,
                hasWorkflow: !!workflow,
                isMobile: this.isMobileDevice()
              }
            });
            this.emit("error", {
              type: "start-method-error",
              stage: "unknown",
              error: serializedError,
              totalDuration,
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              context: {
                hasAssistant: !!assistant,
                hasSquad: !!squad,
                hasWorkflow: !!workflow,
                isMobile: this.isMobileDevice()
              }
            });
            await this.cleanup();
            return null;
          }
        }
        onAppMessage(e) {
          if (!e) {
            return;
          }
          try {
            if (e.data === "listening") {
              return this.emit("call-start");
            } else {
              try {
                const parsedMessage = JSON.parse(e.data);
                this.emit("message", parsedMessage);
                if (parsedMessage && "type" in parsedMessage && "status" in parsedMessage && parsedMessage.type === "status-update" && parsedMessage.status === "ended") {
                  this.hasEmittedCallEndedStatus = true;
                }
              } catch (parseError) {
                console.log("Error parsing message data: ", parseError);
              }
            }
          } catch (e2) {
            console.error(e2);
          }
        }
        handleRemoteParticipantsAudioLevel(e) {
          const speechLevel = Object.values(e.participantsAudioLevel).reduce((a, b) => a + b, 0);
          this.emit("volume-level", Math.min(1, speechLevel / 0.15));
          const isSpeaking = speechLevel > 0.01;
          if (!isSpeaking) {
            return;
          }
          if (this.speakingTimeout) {
            clearTimeout(this.speakingTimeout);
            this.speakingTimeout = null;
          } else {
            this.emit("speech-start");
          }
          this.speakingTimeout = setTimeout(() => {
            this.emit("speech-end");
            this.speakingTimeout = null;
          }, 1e3);
        }
        /**
         * Stops the call by destroying the Daily call object.
         *
         * If `roomDeleteOnUserLeaveEnabled` is set to `false`, the Vapi call will be kept alive, allowing reconnections to the same call using the `reconnect` method.
         * If `roomDeleteOnUserLeaveEnabled` is set to `true`, the Vapi call will also be destroyed, preventing any reconnections.
         */
        async stop() {
          this.started = false;
          if (this.call) {
            await this.call.destroy();
            this.call = null;
          }
          this.speakingTimeout = null;
        }
        /**
         * Sends a Live Call Control message to the Vapi server.
         *
         * Docs: https://docs.vapi.ai/calls/call-features
         */
        send(message) {
          this.call?.sendAppMessage(JSON.stringify(message));
        }
        setMuted(mute) {
          (0, daily_guards_1.safeSetLocalAudio)(this.call, !mute);
        }
        isMuted() {
          if (!this.call) {
            return false;
          }
          return this.call.localAudio() === false;
        }
        say(message, endCallAfterSpoken, interruptionsEnabled, interruptAssistantEnabled) {
          this.send({
            type: "say",
            message,
            endCallAfterSpoken,
            interruptionsEnabled: interruptionsEnabled ?? false,
            interruptAssistantEnabled: interruptAssistantEnabled ?? false
          });
        }
        /**
         * Ends the call immediately by sending a `end-call` message using Live Call Control, and destroys the Daily call object.
         *
         * This method always ends the call, regardless of the `roomDeleteOnUserLeaveEnabled` option.
         */
        end() {
          this.send({
            type: "end-call"
          });
          this.stop();
        }
        setInputDevicesAsync(options) {
          return (0, daily_guards_1.safeSetInputDevicesAsync)(this.call, options);
        }
        async increaseMicLevel(gain) {
          if (!this.call) {
            throw new Error("Call object is not available.");
          }
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const audioContext = new AudioContext();
            const source = audioContext.createMediaStreamSource(stream);
            const gainNode = audioContext.createGain();
            gainNode.gain.value = gain;
            source.connect(gainNode);
            const destination = audioContext.createMediaStreamDestination();
            gainNode.connect(destination);
            const [boostedTrack] = destination.stream.getAudioTracks();
            await (0, daily_guards_1.safeSetInputDevicesAsync)(this.call, { audioSource: boostedTrack });
          } catch (error) {
            console.error("Error adjusting microphone level:", error);
          }
        }
        setOutputDeviceAsync(options) {
          this.call?.setOutputDeviceAsync(options);
        }
        getDailyCallObject() {
          return this.call;
        }
        startScreenSharing(displayMediaOptions, screenVideoSendSettings) {
          this.call?.startScreenShare({
            displayMediaOptions,
            screenVideoSendSettings
          });
        }
        stopScreenSharing() {
          this.call?.stopScreenShare();
        }
        /**
         * Reconnects to an active call.
         *
         *
         * @param webCall
         */
        async reconnect(webCall) {
          const startTime = Date.now();
          if (this.started) {
            throw new Error("Cannot reconnect while a call is already in progress. Call stop() first.");
          }
          if (!webCall.webCallUrl) {
            throw new Error("webCallUrl is required for reconnection.");
          }
          this.emit("call-start-progress", {
            stage: "reconnect-initialization",
            status: "started",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            metadata: {
              callId: webCall.id || "unknown",
              hasVideoRecording: !!webCall?.artifactPlan?.videoRecordingEnabled,
              voiceProvider: webCall?.assistant?.voice?.provider || "unknown"
            }
          });
          this.started = true;
          try {
            if (this.call) {
              this.emit("call-start-progress", {
                stage: "cleanup-existing-call",
                status: "started",
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
              await this.cleanup();
              this.emit("call-start-progress", {
                stage: "cleanup-existing-call",
                status: "completed",
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            }
            const isVideoRecordingEnabled = webCall?.artifactPlan?.videoRecordingEnabled ?? false;
            const isVideoEnabled = webCall?.assistant?.voice?.provider === "tavus";
            this.emit("call-start-progress", {
              stage: "daily-call-object-creation",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              metadata: {
                audioSource: this.dailyCallObject.audioSource ?? true,
                videoSource: this.dailyCallObject.videoSource ?? isVideoRecordingEnabled,
                isVideoRecordingEnabled,
                isVideoEnabled
              }
            });
            const dailyCallStartTime = Date.now();
            this.call = daily_js_1.default.createCallObject({
              audioSource: this.dailyCallObject.audioSource ?? true,
              videoSource: this.dailyCallObject.videoSource ?? isVideoRecordingEnabled,
              dailyConfig: this.dailyCallConfig
            });
            const dailyCallDuration = Date.now() - dailyCallStartTime;
            this.emit("call-start-progress", {
              stage: "daily-call-object-creation",
              status: "completed",
              duration: dailyCallDuration,
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            this.call.iframe()?.style.setProperty("display", "none");
            this.call.on("left-meeting", () => {
              this.emit("call-end");
              if (!this.hasEmittedCallEndedStatus) {
                this.emit("message", {
                  type: "status-update",
                  status: "ended",
                  "endedReason": "customer-ended-call"
                });
                this.hasEmittedCallEndedStatus = true;
              }
              if (isVideoRecordingEnabled) {
                this.call?.stopRecording();
              }
              this.cleanup().catch(console.error);
            });
            this.call.on("error", (error) => {
              this.emit("error", {
                type: "daily-error",
                error: serializeError(error),
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
              if (isVideoRecordingEnabled) {
                this.call?.stopRecording();
              }
            });
            this.call.on("camera-error", (error) => {
              this.emit("camera-error", {
                type: "camera-error",
                error: serializeError(error),
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            });
            this.call.on("network-quality-change", (event) => {
              this.emit("network-quality-change", event);
            });
            this.call.on("network-connection", (event) => {
              this.emit("network-connection", event);
            });
            this.call.on("track-started", async (e) => {
              if (!e || !e.participant) {
                return;
              }
              if (e.participant?.local) {
                return;
              }
              if (e.participant?.user_name !== "Vapi Speaker") {
                return;
              }
              if (e.track.kind === "video") {
                this.emit("video", e.track);
              }
              if (e.track.kind === "audio") {
                await buildAudioPlayer(e.track, e.participant.session_id);
              }
              this.call?.sendAppMessage("playable");
            });
            this.call.on("participant-joined", (e) => {
              if (!e || !this.call)
                return;
              subscribeToTracks(e, this.call, isVideoRecordingEnabled, isVideoEnabled);
            });
            this.call.on("participant-updated", (e) => {
              if (!e) {
                return;
              }
              this.emit("daily-participant-updated", e.participant);
            });
            this.call.on("participant-left", (e) => {
              if (!e) {
                return;
              }
              destroyAudioPlayer(e.participant.session_id);
            });
            this.call.on("remote-participants-audio-level", (e) => {
              if (e)
                this.handleRemoteParticipantsAudioLevel(e);
            });
            this.call.on("app-message", (e) => this.onAppMessage(e));
            this.call.on("nonfatal-error", (e) => {
              if (e?.type === "audio-processor-error") {
                this.call?.updateInputSettings({
                  audio: {
                    processor: {
                      type: "none"
                    }
                  }
                }).then(() => {
                  (0, daily_guards_1.safeSetLocalAudio)(this.call, true);
                });
              }
            });
            const isMobile = this.isMobileDevice();
            this.emit("call-start-progress", {
              stage: "mobile-permissions",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              metadata: { isMobile }
            });
            if (isMobile) {
              const mobileWaitStartTime = Date.now();
              await this.sleep(1e3);
              const mobileWaitDuration = Date.now() - mobileWaitStartTime;
              this.emit("call-start-progress", {
                stage: "mobile-permissions",
                status: "completed",
                duration: mobileWaitDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { action: "permissions-wait" }
              });
            } else {
              this.emit("call-start-progress", {
                stage: "mobile-permissions",
                status: "completed",
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { action: "skipped-not-mobile" }
              });
            }
            this.emit("call-start-progress", {
              stage: "daily-call-join",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            const joinStartTime = Date.now();
            await this.call.join({
              url: webCall.webCallUrl,
              subscribeToTracksAutomatically: false
            });
            const joinDuration = Date.now() - joinStartTime;
            this.emit("call-start-progress", {
              stage: "daily-call-join",
              status: "completed",
              duration: joinDuration,
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            if (isVideoRecordingEnabled) {
              this.emit("call-start-progress", {
                stage: "video-recording-setup",
                status: "started",
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
              const recordingStartTime = Date.now();
              const recordingRequestedTime = (/* @__PURE__ */ new Date()).getTime();
              try {
                this.call.startRecording({
                  width: 1280,
                  height: 720,
                  backgroundColor: "#FF1F2D3D",
                  layout: {
                    preset: "default"
                  }
                });
                const recordingSetupDuration = Date.now() - recordingStartTime;
                this.emit("call-start-progress", {
                  stage: "video-recording-setup",
                  status: "completed",
                  duration: recordingSetupDuration,
                  timestamp: (/* @__PURE__ */ new Date()).toISOString()
                });
                this.call.on("recording-started", () => {
                  const totalRecordingDelay = ((/* @__PURE__ */ new Date()).getTime() - recordingRequestedTime) / 1e3;
                  this.emit("call-start-progress", {
                    stage: "video-recording-started",
                    status: "completed",
                    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                    metadata: { delaySeconds: totalRecordingDelay }
                  });
                  this.send({
                    type: "control",
                    control: "say-first-message",
                    videoRecordingStartDelaySeconds: totalRecordingDelay
                  });
                });
              } catch (error) {
                const recordingSetupDuration = Date.now() - recordingStartTime;
                const serializedError = serializeError(error);
                this.emit("call-start-progress", {
                  stage: "video-recording-setup",
                  status: "failed",
                  duration: recordingSetupDuration,
                  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                  metadata: { error: serializedError.message }
                });
              }
            } else {
              this.emit("call-start-progress", {
                stage: "video-recording-setup",
                status: "completed",
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { action: "skipped-not-enabled" }
              });
            }
            this.emit("call-start-progress", {
              stage: "audio-observer-setup",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            const audioObserverStartTime = Date.now();
            try {
              this.call.startRemoteParticipantsAudioLevelObserver(100);
              const audioObserverDuration = Date.now() - audioObserverStartTime;
              this.emit("call-start-progress", {
                stage: "audio-observer-setup",
                status: "completed",
                duration: audioObserverDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            } catch (error) {
              const audioObserverDuration = Date.now() - audioObserverStartTime;
              const serializedError = serializeError(error);
              this.emit("call-start-progress", {
                stage: "audio-observer-setup",
                status: "failed",
                duration: audioObserverDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { error: serializedError.message }
              });
            }
            this.emit("call-start-progress", {
              stage: "audio-processing-setup",
              status: "started",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            const audioProcessingStartTime = Date.now();
            try {
              this.call.updateInputSettings({
                audio: {
                  processor: {
                    type: "noise-cancellation"
                  }
                }
              });
              const audioProcessingDuration = Date.now() - audioProcessingStartTime;
              this.emit("call-start-progress", {
                stage: "audio-processing-setup",
                status: "completed",
                duration: audioProcessingDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              });
            } catch (error) {
              const audioProcessingDuration = Date.now() - audioProcessingStartTime;
              const serializedError = serializeError(error);
              this.emit("call-start-progress", {
                stage: "audio-processing-setup",
                status: "failed",
                duration: audioProcessingDuration,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                metadata: { error: serializedError.message }
              });
            }
            const totalDuration = Date.now() - startTime;
            this.emit("call-start-success", {
              totalDuration,
              callId: webCall?.id || "unknown",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            });
            this.emit("call-start");
          } catch (e) {
            const totalDuration = Date.now() - startTime;
            const serializedError = serializeError(e);
            this.emit("call-start-failed", {
              stage: "reconnect",
              totalDuration,
              error: serializedError.message,
              errorStack: serializedError.stack || "No stack trace available",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              context: {
                isReconnect: true,
                callId: webCall?.id || "unknown",
                hasVideoRecording: !!webCall?.artifactPlan?.videoRecordingEnabled,
                voiceProvider: webCall?.assistant?.voice?.provider || "unknown",
                isMobile: this.isMobileDevice()
              }
            });
            this.emit("error", {
              type: "reconnect-error",
              error: serializedError,
              totalDuration,
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              context: {
                isReconnect: true,
                callId: webCall?.id || "unknown",
                hasVideoRecording: !!webCall?.artifactPlan?.videoRecordingEnabled,
                voiceProvider: webCall?.assistant?.voice?.provider || "unknown",
                isMobile: this.isMobileDevice()
              }
            });
            await this.cleanup();
            throw e;
          }
        }
        /**
         * Runs all network connectivity tests for pre-call diagnostics.
         * Creates a temporary Daily call object for testing purposes.
         *
         * Tests performed:
         * 1. Network connectivity (TURN server) - Tests if traffic can be relayed through TURN servers
         * 2. Websocket connectivity - Tests if websocket connections can be established
         * 3. Call quality - Tests overall call quality metrics (if available in SDK version)
         *
         * @returns {Promise<Record<string, any>>} Test results object with status for each test
         *
         * @example
         * // Run pre-call network diagnostics
         * const results = await Vapi.runNetworkTestsStandalone();
         * if (results.networkConnectivity?.result === 'failed') {
         *   console.warn('Network issues detected - calls may not work properly');
         * }
         *
         * @static
         */
        static async runNetworkTestsStandalone() {
          console.log("Starting standalone network connectivity tests...");
          const results = {};
          let tempCall = null;
          try {
            console.log("Creating temporary call object for testing...");
            tempCall = daily_js_1.default.createCallObject({
              audioSource: true,
              videoSource: true
            });
            console.log("\n1. Testing network connectivity (TURN server)...");
            let videoTrack = null;
            try {
              const stream = await navigator.mediaDevices.getUserMedia({ video: true });
              videoTrack = stream.getVideoTracks()[0];
              const networkTest = await tempCall.testNetworkConnectivity(videoTrack);
              results.networkConnectivity = networkTest;
              console.log("Network connectivity test result:", networkTest);
            } catch (error) {
              results.networkConnectivity = { result: "error", error: error?.toString() };
              console.error("Network connectivity test error:", error);
            } finally {
              if (videoTrack) {
                videoTrack.stop();
              }
            }
            console.log("\n2. Testing websocket connectivity...");
            try {
              const websocketTest = await tempCall.testWebsocketConnectivity();
              results.websocketConnectivity = websocketTest;
              console.log("Websocket connectivity test result:", websocketTest);
            } catch (error) {
              results.websocketConnectivity = { result: "error", error: error?.toString() };
              console.error("Websocket connectivity test error:", error);
            }
            console.log("\n3. Testing call quality...");
            try {
              if (typeof tempCall.testCallQuality === "function") {
                try {
                  console.log("Initializing call state with startCamera...");
                  await tempCall.startCamera();
                  const callQualityTest = await tempCall.testCallQuality();
                  results.callQuality = callQualityTest;
                  console.log("Call quality test result:", callQualityTest);
                } catch (startCameraError) {
                  console.error("Failed to start camera for call quality test:", startCameraError);
                  results.callQuality = {
                    result: "error",
                    error: startCameraError?.toString(),
                    message: "Failed to initialize camera for call quality test. Check camera permissions."
                  };
                }
              } else {
                results.callQuality = { result: "not-available", message: "testCallQuality method not available" };
                console.log("Call quality test not available in current Daily.co version");
              }
            } catch (error) {
              results.callQuality = { result: "error", error: error?.toString() };
              console.error("Call quality test error:", error);
            }
          } catch (error) {
            console.error("Failed to create temporary call object:", error);
            results.error = error?.toString();
          } finally {
            if (tempCall) {
              try {
                console.log("Cleaning up temporary call object...");
                await tempCall.destroy();
              } catch (error) {
                console.error("Error destroying temporary call object:", error);
              }
            }
          }
          console.log("\n=== Network Test Summary ===");
          console.log("Results:", JSON.stringify(results, null, 2));
          return results;
        }
      };
      exports.default = Vapi;
    }
  });
  return require_vapi();
})();
