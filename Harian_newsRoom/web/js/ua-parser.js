/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
!function (i) {
    function e(o) {
        if (s[o])
            return s[o].exports;
        var r = s[o] = {i: o, l: !1, exports: {}};
        return i[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var s = {};
    e.m = i, e.c = s, e.i = function (i) {
        return i
    }, e.d = function (i, s, o) {
        e.o(i, s) || Object.defineProperty(i, s, {configurable: !1, enumerable: !0, get: o})
    }, e.n = function (i) {
        var s = i && i.__esModule ? function () {
            return i.default
        } : function () {
            return i
        };
        return e.d(s, "a", s), s
    }, e.o = function (i, e) {
        return Object.prototype.hasOwnProperty.call(i, e)
    }, e.p = "/navipage/", e(e.s = 41)
}({15: function (i, e) {
        i.exports = function () {
            throw new Error("define cannot be used indirect")
        }
    }, 16: function (i, e) {
        (function (e) {
            i.exports = e
        }).call(e, {})
    }, 17: function (i, e) {
        i.exports = function (i) {
            return i.webpackPolyfill || (i.deprecate = function () {
            }, i.paths = [], i.children || (i.children = []), Object.defineProperty(i, "loaded", {enumerable: !0, get: function () {
                    return i.l
                }}), Object.defineProperty(i, "id", {enumerable: !0, get: function () {
                    return i.i
                }}), i.webpackPolyfill = 1), i
        }
    }, 41: function (i, e, s) {
        "use strict";
        (function (i) {
            var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (i) {
                return typeof i
            } : function (i) {
                return i && "function" == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
            };
            !function (n, t) {
                var a = "model", l = "name", d = "type", w = "vendor", c = "version", u = "mobile", p = "tablet", m = {extend: function (i, e) {
                        var s = {};
                        for (var o in i)
                            e[o] && e[o].length % 2 == 0 ? s[o] = e[o].concat(i[o]) : s[o] = i[o];
                        return s
                    }, has: function (i, e) {
                        return"string" == typeof i && -1 !== e.toLowerCase().indexOf(i.toLowerCase())
                    }, lowerize: function (i) {
                        return i.toLowerCase()
                    }, major: function (i) {
                        return"string" === (void 0 === i ? "undefined" : r(i)) ? i.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                    }, trim: function (i) {
                        return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }}, f = {rgx: function () {
                        var i, e, s, o, n, t, a = {}, l = 0, d = arguments;
                        for (s = 0; s < d[1].length; s++)
                            o = d[1][s], a["object" === (void 0 === o ? "undefined" : r(o)) ? o[0] : o] = void 0;
                        for (; l < d.length && !n; ) {
                            var w = d[l], c = d[l + 1];
                            for (i = e = 0; i < w.length && !n; )
                                if (n = w[i++].exec(this.getUA()))
                                    for (s = 0; s < c.length; s++)
                                        t = n[++e], o = c[s], "object" === (void 0 === o ? "undefined" : r(o)) && o.length > 0 ? 2 == o.length ? "function" == r(o[1]) ? a[o[0]] = o[1].call(this, t) : a[o[0]] = o[1] : 3 == o.length ? "function" !== r(o[1]) || o[1].exec && o[1].test ? a[o[0]] = t ? t.replace(o[1], o[2]) : void 0 : a[o[0]] = t ? o[1].call(this, t, o[2]) : void 0 : 4 == o.length && (a[o[0]] = t ? o[3].call(this, t.replace(o[1], o[2])) : void 0) : a[o] = t || void 0;
                            l += 2
                        }
                        return a
                    }, str: function (i, e) {
                        for (var s in e)
                            if ("object" === r(e[s]) && e[s].length > 0) {
                                for (var o = 0; o < e[s].length; o++)
                                    if (m.has(e[s][o], i))
                                        return"?" === s ? void 0 : s
                            } else if (m.has(e[s], i))
                                return"?" === s ? void 0 : s;
                        return i
                    }}, b = {browser: {oldsafari: {version: {"1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/"}}}, device: {amazon: {model: {"Fire Phone": ["SD", "KF"]}}, sprint: {model: {"Evo Shift 4G": "7373KT"}, vendor: {HTC: "APA", Sprint: "Sprint"}}}, os: {windows: {version: {ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2000: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM"}}}}, g = {browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [l, c], [/(opios)[\/\s]+([\w\.]+)/i], [[l, "Opera Mini"], c], [/\s(opr)\/([\w\.]+)/i], [[l, "Opera"], c], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [l, c], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[l, "IE"], c], [/(edge)\/((\d+)?[\w\.]+)/i], [l, c], [/(yabrowser)\/([\w\.]+)/i], [[l, "Yandex"], c], [/(comodo_dragon)\/([\w\.]+)/i], [[l, /_/g, " "], c], [/(micromessenger)\/([\w\.]+)/i], [[l, "WeChat"], c], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [c, [l, "MIUI Browser"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[l, /(.+)/, "$1 WebView"], c], [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [c, [l, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [l, c], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i], [[l, "UCBrowser"], c], [/(dolfin)\/([\w\.]+)/i], [[l, "Dolphin"], c], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[l, "Chrome"], c], [/;fbav\/([\w\.]+);/i], [c, [l, "Facebook"]], [/fxios\/([\w\.-]+)/i], [c, [l, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [c, [l, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [c, l], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [l, [c, f.str, b.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [l, c], [/(navigator|netscape)\/([\w\.-]+)/i], [[l, "Netscape"], c], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [l, c]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", m.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", m.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", m.lowerize]]], device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [a, w, [d, p]], [/applecoremedia\/[\w\.]+ \((ipad)/], [a, [w, "Apple"], [d, p]], [/(apple\s{0,1}tv)/i], [[a, "Apple TV"], [w, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [w, a, [d, p]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [a, [w, "Amazon"], [d, p]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[a, f.str, b.device.amazon.model], [w, "Amazon"], [d, u]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [a, w, [d, u]], [/\((ip[honed|\s\w*]+);/i], [a, [w, "Apple"], [d, u]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [w, a, [d, u]], [/\(bb10;\s(\w+)/i], [a, [w, "BlackBerry"], [d, u]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [a, [w, "Asus"], [d, p]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[w, "Sony"], [a, "Xperia Tablet"], [d, p]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[w, "Sony"], [a, "Xperia Phone"], [d, u]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [w, a, [d, "console"]], [/android.+;\s(shield)\sbuild/i], [a, [w, "Nvidia"], [d, "console"]], [/(playstation\s[34portablevi]+)/i], [a, [w, "Sony"], [d, "console"]], [/(sprint\s(\w+))/i], [[w, f.str, b.device.sprint.vendor], [a, f.str, b.device.sprint.model], [d, u]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [w, a, [d, p]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [w, [a, /_/g, " "], [d, u]], [/(nexus\s9)/i], [a, [w, "HTC"], [d, p]], [/(nexus\s6p)/i], [a, [w, "Huawei"], [d, u]], [/(microsoft);\s(lumia[\s\w]+)/i], [w, a, [d, u]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [a, [w, "Microsoft"], [d, "console"]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [w, "Microsoft"], [d, u]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [a, [w, "Motorola"], [d, u]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [a, [w, "Motorola"], [d, p]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[w, m.trim], [a, m.trim], [d, "smarttv"]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [w, "Samsung"], [d, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [a, [w, "Sharp"], [d, "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[w, "Samsung"], a, [d, p]], [/smart-tv.+(samsung)/i], [w, [d, "smarttv"], a], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[w, "Samsung"], a, [d, u]], [/sie-(\w+)*/i], [a, [w, "Siemens"], [d, u]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[w, "Nokia"], a, [d, u]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [a, [w, "Acer"], [d, p]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[w, "LG"], a, [d, p]], [/(lg) netcast\.tv/i], [w, a, [d, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [a, [w, "LG"], [d, u]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [a, [w, "Lenovo"], [d, p]], [/linux;.+((jolla));/i], [w, a, [d, u]], [/((pebble))app\/[\d\.]+\s/i], [w, a, [d, "wearable"]], [/android.+;\s(glass)\s\d/i], [a, [w, "Google"], [d, "wearable"]], [/android.+;\s(pixel c)\s/i], [a, [w, "Google"], [d, p]], [/android.+;\s(pixel xl|pixel)\s/i], [a, [w, "Google"], [d, u]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i], [[a, /_/g, " "], [w, "Xiaomi"], [d, u]], [/android.+a000(1)\s+build/i], [a, [w, "OnePlus"], [d, u]], [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[d, m.lowerize], w, a]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [c, [l, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [l, c], [/rv\:([\w\.]+).*(gecko)/i], [c, l]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [l, c], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [l, [c, f.str, b.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[l, "Windows"], [c, f.str, b.os.windows.version]], [/\((bb)(10);/i], [[l, "BlackBerry"], c], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [l, c], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[l, "Symbian"], c], [/\((series40);/i], [l], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[l, "Firefox OS"], c], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [l, c], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[l, "Chromium OS"], c], [/(sunos)\s?([\w\.]+\d)*/i], [[l, "Solaris"], c], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [l, c], [/(haiku)\s(\w+)/i], [l, c], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[l, "iOS"], [c, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[l, "Mac OS"], [c, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [l, c]]}, h = function i(e, s) {
                    if (!(this instanceof i))
                        return new i(e, s).getResult();
                    var o = e || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""), r = s ? m.extend(g, s) : g;
                    return this.getBrowser = function () {
                        var i = f.rgx.apply(this, r.browser);
                        return i.major = m.major(i.version), i
                    }, this.getCPU = function () {
                        return f.rgx.apply(this, r.cpu)
                    }, this.getDevice = function () {
                        return f.rgx.apply(this, r.device)
                    }, this.getEngine = function () {
                        return f.rgx.apply(this, r.engine)
                    }, this.getOS = function () {
                        return f.rgx.apply(this, r.os)
                    }, this.getResult = function () {
                        return{ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU()}
                    }, this.getUA = function () {
                        return o
                    }, this.setUA = function (i) {
                        return o = i, this
                    }, this
                };
                h.VERSION = "0.7.12", h.BROWSER = {NAME: l, MAJOR: "major", VERSION: c}, h.CPU = {ARCHITECTURE: "architecture"}, h.DEVICE = {MODEL: a, VENDOR: w, TYPE: d, CONSOLE: "console", MOBILE: u, SMARTTV: "smarttv", TABLET: p, WEARABLE: "wearable", EMBEDDED: "embedded"}, h.ENGINE = {NAME: l, VERSION: c}, h.OS = {NAME: l, VERSION: c}, "undefined" !== r(e) ? ("undefined" !== r(i) && i.exports && (e = i.exports = h), e.UAParser = h) : "function" === r(s(15)) && s(16) ? void 0 !== (o = function () {
                    return h
                }.call(e, s, e, i)) && (i.exports = o) : n.UAParser = h;
                var v = n.jQuery || n.Zepto;
                if ("undefined" !== (void 0 === v ? "undefined" : r(v))) {
                    var x = new h;
                    v.ua = x.getResult(), v.ua.get = function () {
                        return x.getUA()
                    }, v.ua.set = function (i) {
                        x.setUA(i);
                        var e = x.getResult();
                        for (var s in e)
                            v.ua[s] = e[s]
                    }
                }
            }("object" === ("undefined" == typeof window ? "undefined" : r(window)) ? window : void 0)
        }).call(e, s(17)(i))
    }});


