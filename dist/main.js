// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lndM7":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "dfd5faebf5bd83b5";
module.bundle.HMR_BUNDLE_ID = "c74abc1b4dcf6831";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jUwgS":[function(require,module,exports) {
var _stylesCss = require("../../assets/css/styles.css");
var _remixiconCss = require("remixicon/fonts/remixicon.css");
var _jspdf = require("jspdf");
var QRCode = require("davidshimjs-qrcodejs");
var showMenu = function(toggleId, navId) {
    var toggle = document.getElementById(toggleId), nav = document.getElementById(navId);
    if (toggle && nav) toggle.addEventListener('click', function() {
        nav.classList.toggle('show-menu');
    });
};
showMenu('nav-toggle', 'nav-menu');
var navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.remove('show-menu');
}
if (navLink) navLink.forEach(function(n) {
    return n.addEventListener('click', linkAction);
});
var sections = document.querySelectorAll('section[id]');
function scrollActive() {
    var scrollY = window.pageYOffset;
    if (sections) sections.forEach(function(current) {
        var sectionHeight = current.offsetHeight;
        var sectionTop = current.offsetTop - 50;
        var sectionId = current.getAttribute('id');
        if (sectionId) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
            else document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);
function scrollTop() {
    var _$scrollTop = document.getElementById('scroll-top');
    if (_$scrollTop) {
        if (this.scrollY >= 200) _$scrollTop.classList.add('show-scroll');
        else _$scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);
var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'ri-sun-line';
var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon');
var getCurrentTheme = function() {
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};
var getCurrentIcon = function() {
    return themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
};
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}
themeButton.addEventListener('click', function() {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
docReady(function() {
    var qrcode = new QRCode(document.getElementById('qr_code'), {
        text: "https://www.linkedin.com/in/zsolt-szelepcs%C3%A9nyi-811a511a2/",
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#fafafa",
        correctLevel: QRCode.CorrectLevel.H
    });
    var qrCodeElement = document.getElementById('qr_code');
    if (qrCodeElement) {
        qrCodeElement.addEventListener('click', function() {
            var pdf = new _jspdf.jsPDF({
                orientation: "landscape",
                unit: "mm",
                format: [
                    94,
                    40
                ]
            });
            pdf.setFontSize(15);
            pdf.text('Zsolt Szelepcsényi', 43, 18);
            pdf.setFontSize(10);
            pdf.text('Frontend - Backend Developer', 43, 23);
            pdf.setFontSize(8);
            pdf.text('Hungary, Szeged', 43, 27);
            var base64Image = document.querySelector('#qr_code img').getAttribute('src');
            pdf.addImage(base64Image, 'png', 0, 0, 40, 40);
            pdf.save('zsolt_szelepcsenyi.pdf');
        });
        var qrcodeImage = document.querySelector('#qr_code img');
        qrcodeImage.setAttribute('width', '128');
        qrcodeImage.setAttribute('height', '128');
        qrcodeImage.setAttribute('alt', 'Zsolt Szelepcsenyi QRCode');
    }
});
function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") setTimeout(fn, 1);
    else document.addEventListener("DOMContentLoaded", fn);
}
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.getAttribute('href') !== '#') document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

},{"../../assets/css/styles.css":"bKqgn","jspdf":"9XkET","davidshimjs-qrcodejs":"eaZTN","remixicon/fonts/remixicon.css":"62aOL"}],"bKqgn":[function() {},{}],"9XkET":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AcroForm", function() {
    return St2;
});
parcelHelpers.export(exports, "AcroFormAppearance", function() {
    return At1;
});
parcelHelpers.export(exports, "AcroFormButton", function() {
    return mt;
});
parcelHelpers.export(exports, "AcroFormCheckBox", function() {
    return wt1;
});
parcelHelpers.export(exports, "AcroFormChoiceField", function() {
    return ft2;
});
parcelHelpers.export(exports, "AcroFormComboBox", function() {
    return pt;
});
parcelHelpers.export(exports, "AcroFormEditBox", function() {
    return gt;
});
parcelHelpers.export(exports, "AcroFormListBox", function() {
    return dt1;
});
parcelHelpers.export(exports, "AcroFormPasswordField", function() {
    return Lt1;
});
parcelHelpers.export(exports, "AcroFormPushButton", function() {
    return vt1;
});
parcelHelpers.export(exports, "AcroFormRadioButton", function() {
    return bt;
});
parcelHelpers.export(exports, "AcroFormTextField", function() {
    return Nt;
});
parcelHelpers.export(exports, "GState", function() {
    return j;
});
parcelHelpers.export(exports, "ShadingPattern", function() {
    return B8;
});
parcelHelpers.export(exports, "TilingPattern", function() {
    return M6;
});
parcelHelpers.export(exports, "jsPDF", function() {
    return E;
});
/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 2.5.1 Built on 2022-01-28T15:37:57.791Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2021 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2021 yWorks GmbH, http://www.yworks.com
 *               2015-2021 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, https://github.com/willowsystems
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */ var _typeof = require("@babel/runtime/helpers/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _fflate = require("fflate");
var global = arguments[3];
var n73 = function() {
    return "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this;
}();
function i() {
    n73.console && "function" == typeof n73.console.log && n73.console.log.apply(n73.console, arguments);
}
var a60 = {
    log: i,
    warn: function warn(t) {
        n73.console && ("function" == typeof n73.console.warn ? n73.console.warn.apply(n73.console, arguments) : i.call(null, arguments));
    },
    error: function error(t) {
        n73.console && ("function" == typeof n73.console.error ? n73.console.error.apply(n73.console, arguments) : i(t));
    }
};
function o45(t, e, r) {
    var n1 = new XMLHttpRequest;
    n1.open("GET", t), n1.responseType = "blob", n1.onload = function() {
        l16(n1.response, e, r);
    }, n1.onerror = function() {
        a60.error("could not download file");
    }, n1.send();
}
function s8(t) {
    var e = new XMLHttpRequest;
    e.open("HEAD", t, !1);
    try {
        e.send();
    } catch (t1) {}
    return e.status >= 200 && e.status <= 299;
}
function c15(t) {
    try {
        t.dispatchEvent(new MouseEvent("click"));
    } catch (r) {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e);
    }
}
var u21, h17, l16 = n73.saveAs || ("object" !== ("undefined" == typeof window ? "undefined" : _typeofDefault.default(window)) || window !== n73 ? function() {} : "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype ? function(t, e, r) {
    var _$i = n73.URL || n73.webkitURL, a1 = document.createElement("a");
    e = e || t.name || "download", a1.download = e, a1.rel = "noopener", "string" == typeof t ? (a1.href = t, a1.origin !== location.origin ? s8(a1.href) ? o45(t, e, r) : c15(a1, a1.target = "_blank") : c15(a1)) : (a1.href = _$i.createObjectURL(t), setTimeout(function() {
        _$i.revokeObjectURL(a1.href);
    }, 40000), setTimeout(function() {
        c15(a1);
    }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(e1, r1, n2) {
    if (r1 = r1 || e1.name || "download", "string" == typeof e1) {
        if (s8(e1)) o45(e1, r1, n2);
        else {
            var _$i = document.createElement("a");
            _$i.href = e1, _$i.target = "_blank", setTimeout(function() {
                c15(_$i);
            });
        }
    } else navigator.msSaveOrOpenBlob(function(e, r) {
        return void 0 === r ? r = {
            autoBom: !1
        } : "object" !== _typeofDefault.default(r) && (a60.warn("Deprecated: Expected third argument to be a object"), r = {
            autoBom: !r
        }), r.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([
            String.fromCharCode(65279),
            e
        ], {
            type: e.type
        }) : e;
    }(e1, n2), r1);
} : function(e, r, i1, a2) {
    if ((a2 = a2 || open("", "_blank")) && (a2.document.title = a2.document.body.innerText = "downloading..."), "string" == typeof e) return o45(e, r, i1);
    var s1 = "application/octet-stream" === e.type, c1 = /constructor/i.test(n73.HTMLElement) || n73.safari, u1 = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((u1 || s1 && c1) && "object" === ("undefined" == typeof FileReader ? "undefined" : _typeofDefault.default(FileReader))) {
        var h1 = new FileReader;
        h1.onloadend = function() {
            var _$t = h1.result;
            _$t = u1 ? _$t : _$t.replace(/^data:[^;]*;/, "data:attachment/file;"), a2 ? a2.location.href = _$t : location = _$t, a2 = null;
        }, h1.readAsDataURL(e);
    } else {
        var l1 = n73.URL || n73.webkitURL, f1 = l1.createObjectURL(e);
        a2 ? a2.location = f1 : location.href = f1, a2 = null, setTimeout(function() {
            l1.revokeObjectURL(f1);
        }, 40000);
    }
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */ function f16(t2) {
    var e2;
    t2 = t2 || "", this.ok = !1, "#" == t2.charAt(0) && (t2 = t2.substr(1, 6));
    t2 = ({
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
    })[t2 = (t2 = t2.replace(/ /g, "")).toLowerCase()] || t2;
    for(var r2 = [
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: [
                "rgb(123, 234, 45)",
                "rgb(255,234,245)"
            ],
            process: function process(t) {
                return [
                    parseInt(t[1]),
                    parseInt(t[2]),
                    parseInt(t[3])
                ];
            }
        },
        {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: [
                "#00ff00",
                "336699"
            ],
            process: function process(t) {
                return [
                    parseInt(t[1], 16),
                    parseInt(t[2], 16),
                    parseInt(t[3], 16)
                ];
            }
        },
        {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: [
                "#fb0",
                "f0f"
            ],
            process: function process(t) {
                return [
                    parseInt(t[1] + t[1], 16),
                    parseInt(t[2] + t[2], 16),
                    parseInt(t[3] + t[3], 16)
                ];
            }
        }
    ], n3 = 0; n3 < r2.length; n3++){
        var _$i = r2[n3].re, a3 = r2[n3].process, o1 = _$i.exec(t2);
        o1 && (e2 = a3(o1), this.r = e2[0], this.g = e2[1], this.b = e2[2], this.ok = !0);
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toHex = function() {
        var _$t = this.r.toString(16), e = this.g.toString(16), r = this.b.toString(16);
        return 1 == _$t.length && (_$t = "0" + _$t), 1 == e.length && (e = "0" + e), 1 == r.length && (r = "0" + r), "#" + _$t + e + r;
    };
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */ function d10(t, e) {
    var r = t[0], n4 = t[1], _$i = t[2], a4 = t[3];
    r = g8(r, n4, _$i, a4, e[0], 7, -680876936), a4 = g8(a4, r, n4, _$i, e[1], 12, -389564586), _$i = g8(_$i, a4, r, n4, e[2], 17, 606105819), n4 = g8(n4, _$i, a4, r, e[3], 22, -1044525330), r = g8(r, n4, _$i, a4, e[4], 7, -176418897), a4 = g8(a4, r, n4, _$i, e[5], 12, 1200080426), _$i = g8(_$i, a4, r, n4, e[6], 17, -1473231341), n4 = g8(n4, _$i, a4, r, e[7], 22, -45705983), r = g8(r, n4, _$i, a4, e[8], 7, 1770035416), a4 = g8(a4, r, n4, _$i, e[9], 12, -1958414417), _$i = g8(_$i, a4, r, n4, e[10], 17, -42063), n4 = g8(n4, _$i, a4, r, e[11], 22, -1990404162), r = g8(r, n4, _$i, a4, e[12], 7, 1804603682), a4 = g8(a4, r, n4, _$i, e[13], 12, -40341101), _$i = g8(_$i, a4, r, n4, e[14], 17, -1502002290), r = m6(r, n4 = g8(n4, _$i, a4, r, e[15], 22, 1236535329), _$i, a4, e[1], 5, -165796510), a4 = m6(a4, r, n4, _$i, e[6], 9, -1069501632), _$i = m6(_$i, a4, r, n4, e[11], 14, 643717713), n4 = m6(n4, _$i, a4, r, e[0], 20, -373897302), r = m6(r, n4, _$i, a4, e[5], 5, -701558691), a4 = m6(a4, r, n4, _$i, e[10], 9, 38016083), _$i = m6(_$i, a4, r, n4, e[15], 14, -660478335), n4 = m6(n4, _$i, a4, r, e[4], 20, -405537848), r = m6(r, n4, _$i, a4, e[9], 5, 568446438), a4 = m6(a4, r, n4, _$i, e[14], 9, -1019803690), _$i = m6(_$i, a4, r, n4, e[3], 14, -187363961), n4 = m6(n4, _$i, a4, r, e[8], 20, 1163531501), r = m6(r, n4, _$i, a4, e[13], 5, -1444681467), a4 = m6(a4, r, n4, _$i, e[2], 9, -51403784), _$i = m6(_$i, a4, r, n4, e[7], 14, 1735328473), r = v5(r, n4 = m6(n4, _$i, a4, r, e[12], 20, -1926607734), _$i, a4, e[5], 4, -378558), a4 = v5(a4, r, n4, _$i, e[8], 11, -2022574463), _$i = v5(_$i, a4, r, n4, e[11], 16, 1839030562), n4 = v5(n4, _$i, a4, r, e[14], 23, -35309556), r = v5(r, n4, _$i, a4, e[1], 4, -1530992060), a4 = v5(a4, r, n4, _$i, e[4], 11, 1272893353), _$i = v5(_$i, a4, r, n4, e[7], 16, -155497632), n4 = v5(n4, _$i, a4, r, e[10], 23, -1094730640), r = v5(r, n4, _$i, a4, e[13], 4, 681279174), a4 = v5(a4, r, n4, _$i, e[0], 11, -358537222), _$i = v5(_$i, a4, r, n4, e[3], 16, -722521979), n4 = v5(n4, _$i, a4, r, e[6], 23, 76029189), r = v5(r, n4, _$i, a4, e[9], 4, -640364487), a4 = v5(a4, r, n4, _$i, e[12], 11, -421815835), _$i = v5(_$i, a4, r, n4, e[15], 16, 530742520), r = b6(r, n4 = v5(n4, _$i, a4, r, e[2], 23, -995338651), _$i, a4, e[0], 6, -198630844), a4 = b6(a4, r, n4, _$i, e[7], 10, 1126891415), _$i = b6(_$i, a4, r, n4, e[14], 15, -1416354905), n4 = b6(n4, _$i, a4, r, e[5], 21, -57434055), r = b6(r, n4, _$i, a4, e[12], 6, 1700485571), a4 = b6(a4, r, n4, _$i, e[3], 10, -1894986606), _$i = b6(_$i, a4, r, n4, e[10], 15, -1051523), n4 = b6(n4, _$i, a4, r, e[1], 21, -2054922799), r = b6(r, n4, _$i, a4, e[8], 6, 1873313359), a4 = b6(a4, r, n4, _$i, e[15], 10, -30611744), _$i = b6(_$i, a4, r, n4, e[6], 15, -1560198380), n4 = b6(n4, _$i, a4, r, e[13], 21, 1309151649), r = b6(r, n4, _$i, a4, e[4], 6, -145523070), a4 = b6(a4, r, n4, _$i, e[11], 10, -1120210379), _$i = b6(_$i, a4, r, n4, e[2], 15, 718787259), n4 = b6(n4, _$i, a4, r, e[9], 21, -343485551), t[0] = _1(r, t[0]), t[1] = _1(n4, t[1]), t[2] = _1(_$i, t[2]), t[3] = _1(a4, t[3]);
}
function p9(t, e, r, n5, i2, a5) {
    return e = _1(_1(e, t), _1(n5, a5)), _1(e << i2 | e >>> 32 - i2, r);
}
function g8(t, e, r, n6, i3, a6, o2) {
    return p9(e & r | ~e & n6, t, e, i3, a6, o2);
}
function m6(t, e, r, n7, i4, a7, o3) {
    return p9(e & n7 | r & ~n7, t, e, i4, a7, o3);
}
function v5(t, e, r, n8, i5, a8, o4) {
    return p9(e ^ r ^ n8, t, e, i5, a8, o4);
}
function b6(t, e, r, n9, i6, a9, o5) {
    return p9(r ^ (e | ~n9), t, e, i6, a9, o5);
}
function y(t) {
    var e, r = t.length, n10 = [
        1732584193,
        -271733879,
        -1732584194,
        271733878
    ];
    for(e = 64; e <= t.length; e += 64)d10(n10, w4(t.substring(e - 64, e)));
    t = t.substring(e - 64);
    var _$i = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    for(e = 0; e < t.length; e++)_$i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
    if (_$i[e >> 2] |= 128 << (e % 4 << 3), e > 55) for(d10(n10, _$i), e = 0; e < 16; e++)_$i[e] = 0;
    return _$i[14] = 8 * r, d10(n10, _$i), n10;
}
function w4(t) {
    var e, r = [];
    for(e = 0; e < 64; e += 4)r[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
    return r;
}
u21 = n73.atob.bind(n73), h17 = n73.btoa.bind(n73);
var N2 = "0123456789abcdef".split("");
function L2(t) {
    for(var e = "", r = 0; r < 4; r++)e += N2[t >> 8 * r + 4 & 15] + N2[t >> 8 * r & 15];
    return e;
}
function A1(t) {
    return String.fromCharCode((255 & t) >> 0, (65280 & t) >> 8, (16711680 & t) >> 16, (4278190080 & t) >> 24);
}
function x11(t) {
    return y(t).map(A1).join("");
}
var S3 = "5d41402abc4b2a76b9719d911017c592" != function(t) {
    for(var e = 0; e < t.length; e++)t[e] = L2(t[e]);
    return t.join("");
}(y("hello"));
function _1(t, e) {
    if (S3) {
        var r = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r;
    }
    return t + e & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */ function P1(t, e) {
    var r, n11, _$i, a10;
    if (t !== r) {
        for(var o6 = (_$i = t, a10 = 1 + (256 / t.length >> 0), new Array(a10 + 1).join(_$i)), s2 = [], c2 = 0; c2 < 256; c2++)s2[c2] = c2;
        var u2 = 0;
        for(c2 = 0; c2 < 256; c2++){
            var h2 = s2[c2];
            u2 = (u2 + h2 + o6.charCodeAt(c2)) % 256, s2[c2] = s2[u2], s2[u2] = h2;
        }
        r = t, n11 = s2;
    } else s2 = n11;
    var l2 = e.length, f2 = 0, d1 = 0, p1 = "";
    for(c2 = 0; c2 < l2; c2++)d1 = (d1 + (h2 = s2[f2 = (f2 + 1) % 256])) % 256, s2[f2] = s2[d1], s2[d1] = h2, o6 = s2[(s2[f2] + s2[d1]) % 256], p1 += String.fromCharCode(e.charCodeAt(c2) ^ o6);
    return p1;
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */ var k2 = {
    print: 4,
    modify: 8,
    copy: 16,
    "annot-forms": 32
};
function I(t3, e, r, n12) {
    this.v = 1, this.r = 2;
    var _$i = 192;
    t3.forEach(function(t) {
        if (void 0 !== k2.perm) throw new Error("Invalid permission: " + t);
        _$i += k2[t];
    }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
    var a11 = (e + this.padding).substr(0, 32), o7 = (r + this.padding).substr(0, 32);
    this.O = this.processOwnerPassword(a11, o7), this.P = -(1 + (255 ^ _$i)), this.encryptionKey = x11(a11 + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(n12)).substr(0, 5), this.U = P1(this.encryptionKey, this.padding);
}
function F10(t) {
    if (/[^\u0000-\u00ff]/.test(t)) throw new Error("Invalid PDF Name Object: " + t + ", Only accept ASCII characters.");
    for(var e = "", r = t.length, n13 = 0; n13 < r; n13++){
        var _$i = t.charCodeAt(n13);
        if (_$i < 33 || 35 === _$i || 37 === _$i || 40 === _$i || 41 === _$i || 47 === _$i || 60 === _$i || 62 === _$i || 91 === _$i || 93 === _$i || 123 === _$i || 125 === _$i || _$i > 126) e += "#" + ("0" + _$i.toString(16)).slice(-2);
        else e += t[n13];
    }
    return e;
}
function C10(e3) {
    if ("object" !== _typeofDefault.default(e3)) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
    var r = {};
    this.subscribe = function(t, e, n14) {
        if (n14 = n14 || !1, "string" != typeof t || "function" != typeof e || "boolean" != typeof n14) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
        r.hasOwnProperty(t) || (r[t] = {});
        var _$i = Math.random().toString(35);
        return r[t][_$i] = [
            e,
            !!n14
        ], _$i;
    }, this.unsubscribe = function(t) {
        for(var _$e in r)if (r[_$e][t]) return delete r[_$e][t], 0 === Object.keys(r[_$e]).length && delete r[_$e], !0;
        return !1;
    }, this.publish = function(t) {
        if (r.hasOwnProperty(t)) {
            var _$i = Array.prototype.slice.call(arguments, 1), o8 = [];
            for(var s3 in r[t]){
                var c3 = r[t][s3];
                try {
                    c3[0].apply(e3, _$i);
                } catch (t) {
                    n73.console && a60.error("jsPDF PubSub Error", t.message, t);
                }
                c3[1] && o8.push(s3);
            }
            o8.length && o8.forEach(this.unsubscribe);
        }
    }, this.getTopics = function() {
        return r;
    };
}
function j(t) {
    if (!(this instanceof j)) return new j(t);
    var e = "opacity,stroke-opacity".split(",");
    for(var r in t)t.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = t[r]);
    this.id = "", this.objectNumber = -1;
}
function O8(t, e) {
    this.gState = t, this.matrix = e, this.id = "", this.objectNumber = -1;
}
function B8(t, e, r, n15, i7) {
    if (!(this instanceof B8)) return new B8(t, e, r, n15, i7);
    this.type = "axial" === t ? 2 : 3, this.coords = e, this.colors = r, O8.call(this, n15, i7);
}
function M6(t, e, r, n16, i8) {
    if (!(this instanceof M6)) return new M6(t, e, r, n16, i8);
    this.boundingBox = t, this.xStep = e, this.yStep = r, this.stream = "", this.cloneIndex = 0, O8.call(this, n16, i8);
}
function E(e4) {
    var _ = function _() {
        this.saveGraphicsState(), lt1(new Vt1(_$_t, 0, 0, -_$_t, 0, Rr() * _$_t).toString() + " cm"), this.setFontSize(this.getFontSize() / _$_t), g1 = "n", S1 = x1.ADVANCED;
    };
    var P = function P() {
        this.restoreGraphicsState(), g1 = "S", S1 = x1.COMPAT;
    };
    var ir = function ir(t, e, r, n17, i9) {
        var a12 = new M6(e || this.boundingBox, r || this.xStep, n17 || this.yStep, this.gState, i9 || this.matrix);
        a12.stream = this.stream;
        var o10 = t + "$$" + this.cloneIndex++ + "$$";
        return Jt1(o10, a12), a12;
    };
    var r3, _$i1 = "string" == typeof arguments[0] ? arguments[0] : "p", o9 = arguments[1], s4 = arguments[2], c4 = arguments[3], u3 = [], d2 = 1, p2 = 16, g1 = "S", m1 = null;
    "object" === _typeofDefault.default(e4 = e4 || {}) && (_$i1 = e4.orientation, o9 = e4.unit || o9, s4 = e4.format || s4, c4 = e4.compress || e4.compressPdf || c4, null !== (m1 = e4.encryption || null) && (m1.userPassword = m1.userPassword || "", m1.ownerPassword = m1.ownerPassword || "", m1.userPermissions = m1.userPermissions || []), d2 = "number" == typeof e4.userUnit ? Math.abs(e4.userUnit) : 1, void 0 !== e4.precision && (r3 = e4.precision), void 0 !== e4.floatPrecision && (p2 = e4.floatPrecision), g1 = e4.defaultPathOperation || "S"), u3 = e4.filters || (!0 === c4 ? [
        "FlateEncode"
    ] : u3), o9 = o9 || "mm", _$i1 = ("" + (_$i1 || "P")).toLowerCase();
    var v1 = e4.putOnlyUsedFonts || !1, b1 = {}, _$y1 = {
        internal: {},
        __private__: {}
    };
    _$y1.__private__.PubSub = C10;
    var w1 = "1.3", N = _$y1.__private__.getPdfVersion = function N() {
        return w1;
    };
    _$y1.__private__.setPdfVersion = function(t) {
        w1 = t;
    };
    var L1 = {
        a0: [
            2383.94,
            3370.39
        ],
        a1: [
            1683.78,
            2383.94
        ],
        a2: [
            1190.55,
            1683.78
        ],
        a3: [
            841.89,
            1190.55
        ],
        a4: [
            595.28,
            841.89
        ],
        a5: [
            419.53,
            595.28
        ],
        a6: [
            297.64,
            419.53
        ],
        a7: [
            209.76,
            297.64
        ],
        a8: [
            147.4,
            209.76
        ],
        a9: [
            104.88,
            147.4
        ],
        a10: [
            73.7,
            104.88
        ],
        b0: [
            2834.65,
            4008.19
        ],
        b1: [
            2004.09,
            2834.65
        ],
        b2: [
            1417.32,
            2004.09
        ],
        b3: [
            1000.63,
            1417.32
        ],
        b4: [
            708.66,
            1000.63
        ],
        b5: [
            498.9,
            708.66
        ],
        b6: [
            354.33,
            498.9
        ],
        b7: [
            249.45,
            354.33
        ],
        b8: [
            175.75,
            249.45
        ],
        b9: [
            124.72,
            175.75
        ],
        b10: [
            87.87,
            124.72
        ],
        c0: [
            2599.37,
            3676.54
        ],
        c1: [
            1836.85,
            2599.37
        ],
        c2: [
            1298.27,
            1836.85
        ],
        c3: [
            918.43,
            1298.27
        ],
        c4: [
            649.13,
            918.43
        ],
        c5: [
            459.21,
            649.13
        ],
        c6: [
            323.15,
            459.21
        ],
        c7: [
            229.61,
            323.15
        ],
        c8: [
            161.57,
            229.61
        ],
        c9: [
            113.39,
            161.57
        ],
        c10: [
            79.37,
            113.39
        ],
        dl: [
            311.81,
            623.62
        ],
        letter: [
            612,
            792
        ],
        "government-letter": [
            576,
            756
        ],
        legal: [
            612,
            1008
        ],
        "junior-legal": [
            576,
            360
        ],
        ledger: [
            1224,
            792
        ],
        tabloid: [
            792,
            1224
        ],
        "credit-card": [
            153,
            243
        ]
    };
    _$y1.__private__.getPageFormats = function() {
        return L1;
    };
    var A = _$y1.__private__.getPageFormat = function A(t) {
        return L1[t];
    };
    s4 = s4 || "a4";
    var x1 = {
        COMPAT: "compat",
        ADVANCED: "advanced"
    }, S1 = x1.COMPAT;
    var k = _$y1.__private__.combineFontStyleAndFontWeight = function k(t, e) {
        if ("bold" == t && "normal" == e || "bold" == t && 400 == e || "normal" == t && "italic" == e || "bold" == t && "italic" == e) throw new Error("Invalid Combination of fontweight and fontstyle");
        return e && (t = 400 == e || "normal" === e ? "italic" === t ? "italic" : "normal" : 700 != e && "bold" !== e || "normal" !== t ? (700 == e ? "bold" : e) + "" + t : "bold"), t;
    };
    _$y1.advancedAPI = function(t) {
        var _$e = S1 === x1.COMPAT;
        return _$e && _.call(this), "function" != typeof t || (t(this), _$e && P.call(this)), this;
    }, _$y1.compatAPI = function(t) {
        var _$e = S1 === x1.ADVANCED;
        return _$e && P.call(this), "function" != typeof t || (t(this), _$e && _.call(this)), this;
    }, _$y1.isAdvancedAPI = function() {
        return S1 === x1.ADVANCED;
    };
    var O1, q = function q(t) {
        if (S1 !== x1.ADVANCED) throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
    }, D = _$y1.roundToPrecision = _$y1.__private__.roundToPrecision = function D(t, e) {
        var n18 = r3 || e;
        if (isNaN(t) || isNaN(n18)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
        return t.toFixed(n18).replace(/0+$/, "");
    };
    O1 = _$y1.hpf = _$y1.__private__.hpf = "number" == typeof p2 ? function O1(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return D(t, p2);
    } : "smart" === p2 ? function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return D(t, t > -1 && t < 1 ? 16 : 5);
    } : function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return D(t, 16);
    };
    var R = _$y1.f2 = _$y1.__private__.f2 = function R(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2");
        return D(t, 2);
    }, T = _$y1.__private__.f3 = function T(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3");
        return D(t, 3);
    }, U = _$y1.scale = _$y1.__private__.scale = function U(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.scale");
        return S1 === x1.COMPAT ? t * _$_t : S1 === x1.ADVANCED ? t : void 0;
    }, z = function z(t) {
        return S1 === x1.COMPAT ? Rr() - t : S1 === x1.ADVANCED ? t : void 0;
    }, H = function H(t) {
        return U(z(t));
    };
    _$y1.__private__.setPrecision = _$y1.setPrecision = function(t) {
        "number" == typeof parseInt(t, 10) && (r3 = parseInt(t, 10));
    };
    var W1, V1 = "00000000000000000000000000000000", G = _$y1.__private__.getFileId = function G() {
        return V1;
    }, Y = _$y1.__private__.setFileId = function Y(t) {
        return V1 = void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t) ? t.toUpperCase() : V1.split("").map(function() {
            return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
        }).join(""), null !== m1 && (Ye = new I(m1.userPermissions, m1.userPassword, m1.ownerPassword, V1)), V1;
    };
    _$y1.setFileId = function(t) {
        return Y(t), this;
    }, _$y1.getFileId = function() {
        return G();
    };
    var J = _$y1.__private__.convertDateToPDFDate = function J(t) {
        var _$e = t.getTimezoneOffset(), r = _$e < 0 ? "+" : "-", n19 = Math.floor(Math.abs(_$e / 60)), _$i = Math.abs(_$e % 60), a13 = [
            r,
            Q1(n19),
            "'",
            Q1(_$i),
            "'"
        ].join("");
        return [
            "D:",
            t.getFullYear(),
            Q1(t.getMonth() + 1),
            Q1(t.getDate()),
            Q1(t.getHours()),
            Q1(t.getMinutes()),
            Q1(t.getSeconds()),
            a13
        ].join("");
    }, X = _$y1.__private__.convertPDFDateToDate = function X(t) {
        var _$e = parseInt(t.substr(2, 4), 10), r = parseInt(t.substr(6, 2), 10) - 1, n20 = parseInt(t.substr(8, 2), 10), _$i = parseInt(t.substr(10, 2), 10), a14 = parseInt(t.substr(12, 2), 10), o11 = parseInt(t.substr(14, 2), 10);
        return new Date(_$e, r, n20, _$i, a14, o11, 0);
    }, K = _$y1.__private__.setCreationDate = function K(t) {
        var _$e;
        if (void 0 === t && (t = new Date), t instanceof Date) _$e = J(t);
        else {
            if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
            _$e = t;
        }
        return W1 = _$e;
    }, Z = _$y1.__private__.getCreationDate = function Z(t) {
        var _$e = W1;
        return "jsDate" === t && (_$e = X(W1)), _$e;
    };
    _$y1.setCreationDate = function(t) {
        return K(t), this;
    }, _$y1.getCreationDate = function(t) {
        return Z(t);
    };
    var $1, Q1 = _$y1.__private__.padd2 = function Q1(t) {
        return ("0" + parseInt(t)).slice(-2);
    }, tt = _$y1.__private__.padd2Hex = function tt(t) {
        return ("00" + (t = t.toString())).substr(t.length);
    }, et1 = 0, rt1 = [], nt1 = [], it1 = 0, at1 = [], ot1 = [], st1 = !1, ct1 = nt1, ut = function ut() {
        et1 = 0, it1 = 0, nt1 = [], rt1 = [], at1 = [], Qt1 = Kt1(), _$te = Kt1();
    };
    _$y1.__private__.setCustomOutputDestination = function(t) {
        st1 = !0, ct1 = t;
    };
    var ht = function ht(t) {
        st1 || (ct1 = t);
    };
    _$y1.__private__.resetCustomOutputDestination = function() {
        st1 = !1, ct1 = nt1;
    };
    var lt1 = _$y1.__private__.out = function lt1(t) {
        return t = t.toString(), it1 += t.length + 1, ct1.push(t), ct1;
    }, ft = _$y1.__private__.write = function ft(t) {
        return lt1(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " "));
    }, dt = _$y1.__private__.getArrayBuffer = function dt(t) {
        for(var _$e = t.length, r = new ArrayBuffer(_$e), n21 = new Uint8Array(r); _$e--;)n21[_$e] = t.charCodeAt(_$e);
        return r;
    }, pt1 = [
        [
            "Helvetica",
            "helvetica",
            "normal",
            "WinAnsiEncoding"
        ],
        [
            "Helvetica-Bold",
            "helvetica",
            "bold",
            "WinAnsiEncoding"
        ],
        [
            "Helvetica-Oblique",
            "helvetica",
            "italic",
            "WinAnsiEncoding"
        ],
        [
            "Helvetica-BoldOblique",
            "helvetica",
            "bolditalic",
            "WinAnsiEncoding"
        ],
        [
            "Courier",
            "courier",
            "normal",
            "WinAnsiEncoding"
        ],
        [
            "Courier-Bold",
            "courier",
            "bold",
            "WinAnsiEncoding"
        ],
        [
            "Courier-Oblique",
            "courier",
            "italic",
            "WinAnsiEncoding"
        ],
        [
            "Courier-BoldOblique",
            "courier",
            "bolditalic",
            "WinAnsiEncoding"
        ],
        [
            "Times-Roman",
            "times",
            "normal",
            "WinAnsiEncoding"
        ],
        [
            "Times-Bold",
            "times",
            "bold",
            "WinAnsiEncoding"
        ],
        [
            "Times-Italic",
            "times",
            "italic",
            "WinAnsiEncoding"
        ],
        [
            "Times-BoldItalic",
            "times",
            "bolditalic",
            "WinAnsiEncoding"
        ],
        [
            "ZapfDingbats",
            "zapfdingbats",
            "normal",
            null
        ],
        [
            "Symbol",
            "symbol",
            "normal",
            null
        ]
    ];
    _$y1.__private__.getStandardFonts = function() {
        return pt1;
    };
    var gt1 = e4.fontSize || 16;
    _$y1.__private__.setFontSize = _$y1.setFontSize = function(t) {
        return gt1 = S1 === x1.ADVANCED ? t / _$_t : t, this;
    };
    var mt1, vt = _$y1.__private__.getFontSize = _$y1.getFontSize = function vt() {
        return S1 === x1.COMPAT ? gt1 : gt1 * _$_t;
    }, bt1 = e4.R2L || !1;
    _$y1.__private__.setR2L = _$y1.setR2L = function(t) {
        return bt1 = t, this;
    }, _$y1.__private__.getR2L = _$y1.getR2L = function() {
        return bt1;
    };
    var yt1, wt = _$y1.__private__.setZoomMode = function wt(t) {
        var _$e = [
            void 0,
            null,
            "fullwidth",
            "fullheight",
            "fullpage",
            "original"
        ];
        if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t)) mt1 = t;
        else if (isNaN(t)) {
            if (-1 === _$e.indexOf(t)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t + '" is not recognized.');
            mt1 = t;
        } else mt1 = parseInt(t, 10);
    };
    _$y1.__private__.getZoomMode = function() {
        return mt1;
    };
    var Nt1, Lt = _$y1.__private__.setPageMode = function Lt(t) {
        if (-1 == [
            void 0,
            null,
            "UseNone",
            "UseOutlines",
            "UseThumbs",
            "FullScreen"
        ].indexOf(t)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
        yt1 = t;
    };
    _$y1.__private__.getPageMode = function() {
        return yt1;
    };
    var At = _$y1.__private__.setLayoutMode = function At(t) {
        if (-1 == [
            void 0,
            null,
            "continuous",
            "single",
            "twoleft",
            "tworight",
            "two"
        ].indexOf(t)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
        Nt1 = t;
    };
    _$y1.__private__.getLayoutMode = function() {
        return Nt1;
    }, _$y1.__private__.setDisplayMode = _$y1.setDisplayMode = function(t, e, r) {
        return wt(t), At(e), Lt(r), this;
    };
    var xt1 = {
        title: "",
        subject: "",
        author: "",
        keywords: "",
        creator: ""
    };
    _$y1.__private__.getDocumentProperty = function(t) {
        if (-1 === Object.keys(xt1).indexOf(t)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
        return xt1[t];
    }, _$y1.__private__.getDocumentProperties = function() {
        return xt1;
    }, _$y1.__private__.setDocumentProperties = _$y1.setProperties = _$y1.setDocumentProperties = function(t) {
        for(var _$e in xt1)xt1.hasOwnProperty(_$e) && t[_$e] && (xt1[_$e] = t[_$e]);
        return this;
    }, _$y1.__private__.setDocumentProperty = function(t, e) {
        if (-1 === Object.keys(xt1).indexOf(t)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
        return xt1[t] = e;
    };
    var St1, _$_t, Pt1, kt1, It1, Ft1 = {}, Ct1 = {}, jt1 = [], Ot1 = {}, Bt1 = {}, Mt1 = {}, Et1 = {}, qt1 = null, Dt1 = 0, Rt1 = [], Tt1 = new C10(_$y1), Ut1 = e4.hotfixes || [], zt1 = {}, Ht1 = {}, Wt1 = [], Vt1 = function t(e, r, n22, i10, a15, o12) {
        if (!(this instanceof t)) return new t(e, r, n22, i10, a15, o12);
        isNaN(e) && (e = 1), isNaN(r) && (r = 0), isNaN(n22) && (n22 = 0), isNaN(i10) && (i10 = 1), isNaN(a15) && (a15 = 0), isNaN(o12) && (o12 = 0), this._matrix = [
            e,
            r,
            n22,
            i10,
            a15,
            o12
        ];
    };
    Object.defineProperty(Vt1.prototype, "sx", {
        get: function get() {
            return this._matrix[0];
        },
        set: function set(t) {
            this._matrix[0] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "shy", {
        get: function get() {
            return this._matrix[1];
        },
        set: function set(t) {
            this._matrix[1] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "shx", {
        get: function get() {
            return this._matrix[2];
        },
        set: function set(t) {
            this._matrix[2] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "sy", {
        get: function get() {
            return this._matrix[3];
        },
        set: function set(t) {
            this._matrix[3] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "tx", {
        get: function get() {
            return this._matrix[4];
        },
        set: function set(t) {
            this._matrix[4] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "ty", {
        get: function get() {
            return this._matrix[5];
        },
        set: function set(t) {
            this._matrix[5] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "a", {
        get: function get() {
            return this._matrix[0];
        },
        set: function set(t) {
            this._matrix[0] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "b", {
        get: function get() {
            return this._matrix[1];
        },
        set: function set(t) {
            this._matrix[1] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "c", {
        get: function get() {
            return this._matrix[2];
        },
        set: function set(t) {
            this._matrix[2] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "d", {
        get: function get() {
            return this._matrix[3];
        },
        set: function set(t) {
            this._matrix[3] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "e", {
        get: function get() {
            return this._matrix[4];
        },
        set: function set(t) {
            this._matrix[4] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "f", {
        get: function get() {
            return this._matrix[5];
        },
        set: function set(t) {
            this._matrix[5] = t;
        }
    }), Object.defineProperty(Vt1.prototype, "rotation", {
        get: function get() {
            return Math.atan2(this.shx, this.sx);
        }
    }), Object.defineProperty(Vt1.prototype, "scaleX", {
        get: function get() {
            return this.decompose().scale.sx;
        }
    }), Object.defineProperty(Vt1.prototype, "scaleY", {
        get: function get() {
            return this.decompose().scale.sy;
        }
    }), Object.defineProperty(Vt1.prototype, "isIdentity", {
        get: function get() {
            return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty;
        }
    }), Vt1.prototype.join = function(t) {
        return [
            this.sx,
            this.shy,
            this.shx,
            this.sy,
            this.tx,
            this.ty
        ].map(O1).join(t);
    }, Vt1.prototype.multiply = function(t) {
        var _$e = t.sx * this.sx + t.shy * this.shx, r = t.sx * this.shy + t.shy * this.sy, n23 = t.shx * this.sx + t.sy * this.shx, _$i = t.shx * this.shy + t.sy * this.sy, a16 = t.tx * this.sx + t.ty * this.shx + this.tx, o13 = t.tx * this.shy + t.ty * this.sy + this.ty;
        return new Vt1(_$e, r, n23, _$i, a16, o13);
    }, Vt1.prototype.decompose = function() {
        var _$t = this.sx, _$e = this.shy, r = this.shx, n24 = this.sy, _$i = this.tx, a17 = this.ty, o14 = Math.sqrt(_$t * _$t + _$e * _$e), s5 = (_$t /= o14) * r + (_$e /= o14) * n24;
        r -= _$t * s5, n24 -= _$e * s5;
        var c5 = Math.sqrt(r * r + n24 * n24);
        return s5 /= c5, _$t * (n24 /= c5) < _$e * (r /= c5) && (_$t = -_$t, _$e = -_$e, s5 = -s5, o14 = -o14), {
            scale: new Vt1(o14, 0, 0, c5, 0, 0),
            translate: new Vt1(1, 0, 0, 1, _$i, a17),
            rotate: new Vt1(_$t, _$e, -_$e, _$t, 0, 0),
            skew: new Vt1(1, 0, s5, 1, 0, 0)
        };
    }, Vt1.prototype.toString = function(t) {
        return this.join(" ");
    }, Vt1.prototype.inversed = function() {
        var _$t = this.sx, _$e = this.shy, r = this.shx, n25 = this.sy, _$i = this.tx, a18 = this.ty, o15 = 1 / (_$t * n25 - _$e * r), s6 = n25 * o15, c6 = -_$e * o15, u4 = -r * o15, h3 = _$t * o15;
        return new Vt1(s6, c6, u4, h3, -s6 * _$i - u4 * a18, -c6 * _$i - h3 * a18);
    }, Vt1.prototype.applyToPoint = function(t) {
        var _$e = t.x * this.sx + t.y * this.shx + this.tx, r = t.x * this.shy + t.y * this.sy + this.ty;
        return new Cr(_$e, r);
    }, Vt1.prototype.applyToRectangle = function(t) {
        var _$e = this.applyToPoint(t), r = this.applyToPoint(new Cr(t.x + t.w, t.y + t.h));
        return new jr(_$e.x, _$e.y, r.x - _$e.x, r.y - _$e.y);
    }, Vt1.prototype.clone = function() {
        var _$t = this.sx, _$e = this.shy, r = this.shx, n26 = this.sy, _$i = this.tx, a19 = this.ty;
        return new Vt1(_$t, _$e, r, n26, _$i, a19);
    }, _$y1.Matrix = Vt1;
    var Gt = _$y1.matrixMult = function Gt(t, e) {
        return e.multiply(t);
    }, Yt1 = new Vt1(1, 0, 0, 1, 0, 0);
    _$y1.unitMatrix = _$y1.identityMatrix = Yt1;
    var Jt1 = function Jt1(t, e) {
        if (!Bt1[t]) {
            var r = (e instanceof B8 ? "Sh" : "P") + (Object.keys(Ot1).length + 1).toString(10);
            e.id = r, Bt1[t] = r, Ot1[r] = e, Tt1.publish("addPattern", e);
        }
    };
    _$y1.ShadingPattern = B8, _$y1.TilingPattern = M6, _$y1.addShadingPattern = function(t, e) {
        return q("addShadingPattern()"), Jt1(t, e), this;
    }, _$y1.beginTilingPattern = function(t) {
        q("beginTilingPattern()"), Br(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix);
    }, _$y1.endTilingPattern = function(t, e) {
        q("endTilingPattern()"), e.stream = ot1[$1].join("\n"), Jt1(t, e), Tt1.publish("endTilingPattern", e), Wt1.pop().restore();
    };
    var Xt = _$y1.__private__.newObject = function Xt() {
        var _$t = Kt1();
        return Zt1(_$t, !0), _$t;
    }, Kt1 = _$y1.__private__.newObjectDeferred = function Kt1() {
        return et1++, rt1[et1] = function() {
            return it1;
        }, et1;
    }, Zt1 = function Zt1(t, e) {
        return e = "boolean" == typeof e && e, rt1[t] = it1, e && lt1(t + " 0 obj"), t;
    }, $t = _$y1.__private__.newAdditionalObject = function $t() {
        var _$t = {
            objId: Kt1(),
            content: ""
        };
        return at1.push(_$t), _$t;
    }, Qt1 = Kt1(), _$te = Kt1(), _$ee = _$y1.__private__.decodeColorString = function _$ee(t) {
        var _$e = t.split(" ");
        if (2 !== _$e.length || "g" !== _$e[1] && "G" !== _$e[1]) {
            if (5 === _$e.length && ("k" === _$e[4] || "K" === _$e[4])) _$e = [
                (1 - _$e[0]) * (1 - _$e[3]),
                (1 - _$e[1]) * (1 - _$e[3]),
                (1 - _$e[2]) * (1 - _$e[3]),
                "r"
            ];
        } else {
            var r = parseFloat(_$e[0]);
            _$e = [
                r,
                r,
                r,
                "r"
            ];
        }
        for(var n27 = "#", _$i = 0; _$i < 3; _$i++)n27 += ("0" + Math.floor(255 * parseFloat(_$e[_$i])).toString(16)).slice(-2);
        return n27;
    }, re = _$y1.__private__.encodeColorString = function re(e) {
        var r;
        "string" == typeof e && (e = {
            ch1: e
        });
        var n28 = e.ch1, _$i = e.ch2, a20 = e.ch3, o16 = e.ch4, s7 = "draw" === e.pdfColorType ? [
            "G",
            "RG",
            "K"
        ] : [
            "g",
            "rg",
            "k"
        ];
        if ("string" == typeof n28 && "#" !== n28.charAt(0)) {
            var c7 = new f16(n28);
            if (c7.ok) n28 = c7.toHex();
            else if (!/^\d*\.?\d*$/.test(n28)) throw new Error('Invalid color "' + n28 + '" passed to jsPDF.encodeColorString.');
        }
        if ("string" == typeof n28 && /^#[0-9A-Fa-f]{3}$/.test(n28) && (n28 = "#" + n28[1] + n28[1] + n28[2] + n28[2] + n28[3] + n28[3]), "string" == typeof n28 && /^#[0-9A-Fa-f]{6}$/.test(n28)) {
            var u5 = parseInt(n28.substr(1), 16);
            n28 = u5 >> 16 & 255, _$i = u5 >> 8 & 255, a20 = 255 & u5;
        }
        if (void 0 === _$i || void 0 === o16 && n28 === _$i && _$i === a20) {
            if ("string" == typeof n28) r = n28 + " " + s7[0];
            else switch(e.precision){
                case 2:
                    r = R(n28 / 255) + " " + s7[0];
                    break;
                case 3:
                default:
                    r = T(n28 / 255) + " " + s7[0];
            }
        } else if (void 0 === o16 || "object" === _typeofDefault.default(o16)) {
            if (o16 && !isNaN(o16.a) && 0 === o16.a) return r = [
                "1.",
                "1.",
                "1.",
                s7[1]
            ].join(" ");
            if ("string" == typeof n28) r = [
                n28,
                _$i,
                a20,
                s7[1]
            ].join(" ");
            else switch(e.precision){
                case 2:
                    r = [
                        R(n28 / 255),
                        R(_$i / 255),
                        R(a20 / 255),
                        s7[1]
                    ].join(" ");
                    break;
                default:
                case 3:
                    r = [
                        T(n28 / 255),
                        T(_$i / 255),
                        T(a20 / 255),
                        s7[1]
                    ].join(" ");
            }
        } else if ("string" == typeof n28) r = [
            n28,
            _$i,
            a20,
            o16,
            s7[2]
        ].join(" ");
        else switch(e.precision){
            case 2:
                r = [
                    R(n28),
                    R(_$i),
                    R(a20),
                    R(o16),
                    s7[2]
                ].join(" ");
                break;
            case 3:
            default:
                r = [
                    T(n28),
                    T(_$i),
                    T(a20),
                    T(o16),
                    s7[2]
                ].join(" ");
        }
        return r;
    }, ne = _$y1.__private__.getFilters = function ne() {
        return u3;
    }, ie = _$y1.__private__.putStream = function ie(t4) {
        var _$e = (t4 = t4 || {}).data || "", r = t4.filters || ne(), n29 = t4.alreadyAppliedFilters || [], _$i = t4.addLength1 || !1, a21 = _$e.length, o17 = t4.objectId, s = function s(t) {
            return t;
        };
        if (null !== m1 && void 0 === o17) throw new Error("ObjectId must be passed to putStream for file encryption");
        null !== m1 && (s = Ye.encryptor(o17, 0));
        var c8 = {};
        !0 === r && (r = [
            "FlateEncode"
        ]);
        var u6 = t4.additionalKeyValues || [], h4 = (c8 = void 0 !== E.API.processDataByFilters ? E.API.processDataByFilters(_$e, r) : {
            data: _$e,
            reverseChain: []
        }).reverseChain + (Array.isArray(n29) ? n29.join(" ") : n29.toString());
        if (0 !== c8.data.length && (u6.push({
            key: "Length",
            value: c8.data.length
        }), !0 === _$i && u6.push({
            key: "Length1",
            value: a21
        })), 0 != h4.length) {
            if (h4.split("/").length - 1 == 1) u6.push({
                key: "Filter",
                value: h4
            });
            else {
                u6.push({
                    key: "Filter",
                    value: "[" + h4 + "]"
                });
                for(var l3 = 0; l3 < u6.length; l3 += 1)if ("DecodeParms" === u6[l3].key) {
                    for(var f3 = [], d3 = 0; d3 < c8.reverseChain.split("/").length - 1; d3 += 1)f3.push("null");
                    f3.push(u6[l3].value), u6[l3].value = "[" + f3.join(" ") + "]";
                }
            }
        }
        lt1("<<");
        for(var p3 = 0; p3 < u6.length; p3++)lt1("/" + u6[p3].key + " " + u6[p3].value);
        lt1(">>"), 0 !== c8.data.length && (lt1("stream"), lt1(s(c8.data)), lt1("endstream"));
    }, ae = _$y1.__private__.putPage = function ae(t) {
        var _$e = t.number, r = t.data, n30 = t.objId, _$i = t.contentsObjId;
        Zt1(n30, !0), lt1("<</Type /Page"), lt1("/Parent " + t.rootDictionaryObjId + " 0 R"), lt1("/Resources " + t.resourceDictionaryObjId + " 0 R"), lt1("/MediaBox [" + parseFloat(O1(t.mediaBox.bottomLeftX)) + " " + parseFloat(O1(t.mediaBox.bottomLeftY)) + " " + O1(t.mediaBox.topRightX) + " " + O1(t.mediaBox.topRightY) + "]"), null !== t.cropBox && lt1("/CropBox [" + O1(t.cropBox.bottomLeftX) + " " + O1(t.cropBox.bottomLeftY) + " " + O1(t.cropBox.topRightX) + " " + O1(t.cropBox.topRightY) + "]"), null !== t.bleedBox && lt1("/BleedBox [" + O1(t.bleedBox.bottomLeftX) + " " + O1(t.bleedBox.bottomLeftY) + " " + O1(t.bleedBox.topRightX) + " " + O1(t.bleedBox.topRightY) + "]"), null !== t.trimBox && lt1("/TrimBox [" + O1(t.trimBox.bottomLeftX) + " " + O1(t.trimBox.bottomLeftY) + " " + O1(t.trimBox.topRightX) + " " + O1(t.trimBox.topRightY) + "]"), null !== t.artBox && lt1("/ArtBox [" + O1(t.artBox.bottomLeftX) + " " + O1(t.artBox.bottomLeftY) + " " + O1(t.artBox.topRightX) + " " + O1(t.artBox.topRightY) + "]"), "number" == typeof t.userUnit && 1 !== t.userUnit && lt1("/UserUnit " + t.userUnit), Tt1.publish("putPage", {
            objId: n30,
            pageContext: Rt1[_$e],
            pageNumber: _$e,
            page: r
        }), lt1("/Contents " + _$i + " 0 R"), lt1(">>"), lt1("endobj");
        var a22 = r.join("\n");
        return S1 === x1.ADVANCED && (a22 += "\nQ"), Zt1(_$i, !0), ie({
            data: a22,
            filters: ne(),
            objectId: _$i
        }), lt1("endobj"), n30;
    }, oe = _$y1.__private__.putPages = function oe() {
        var _$t, _$e, r = [];
        for(_$t = 1; _$t <= Dt1; _$t++)Rt1[_$t].objId = Kt1(), Rt1[_$t].contentsObjId = Kt1();
        for(_$t = 1; _$t <= Dt1; _$t++)r.push(ae({
            number: _$t,
            data: ot1[_$t],
            objId: Rt1[_$t].objId,
            contentsObjId: Rt1[_$t].contentsObjId,
            mediaBox: Rt1[_$t].mediaBox,
            cropBox: Rt1[_$t].cropBox,
            bleedBox: Rt1[_$t].bleedBox,
            trimBox: Rt1[_$t].trimBox,
            artBox: Rt1[_$t].artBox,
            userUnit: Rt1[_$t].userUnit,
            rootDictionaryObjId: Qt1,
            resourceDictionaryObjId: _$te
        }));
        Zt1(Qt1, !0), lt1("<</Type /Pages");
        var n31 = "/Kids [";
        for(_$e = 0; _$e < Dt1; _$e++)n31 += r[_$e] + " 0 R ";
        lt1(n31 + "]"), lt1("/Count " + Dt1), lt1(">>"), lt1("endobj"), Tt1.publish("postPutPages");
    }, se = function se(t) {
        Tt1.publish("putFont", {
            font: t,
            out: lt1,
            newObject: Xt,
            putStream: ie
        }), !0 !== t.isAlreadyPutted && (t.objectNumber = Xt(), lt1("<<"), lt1("/Type /Font"), lt1("/BaseFont /" + F10(t.postScriptName)), lt1("/Subtype /Type1"), "string" == typeof t.encoding && lt1("/Encoding /" + t.encoding), lt1("/FirstChar 32"), lt1("/LastChar 255"), lt1(">>"), lt1("endobj"));
    }, ce = function ce() {
        for(var _$t in Ft1)Ft1.hasOwnProperty(_$t) && (!1 === v1 || !0 === v1 && b1.hasOwnProperty(_$t)) && se(Ft1[_$t]);
    }, ue = function ue(t) {
        t.objectNumber = Xt();
        var _$e = [];
        _$e.push({
            key: "Type",
            value: "/XObject"
        }), _$e.push({
            key: "Subtype",
            value: "/Form"
        }), _$e.push({
            key: "BBox",
            value: "[" + [
                O1(t.x),
                O1(t.y),
                O1(t.x + t.width),
                O1(t.y + t.height)
            ].join(" ") + "]"
        }), _$e.push({
            key: "Matrix",
            value: "[" + t.matrix.toString() + "]"
        });
        var r = t.pages[1].join("\n");
        ie({
            data: r,
            additionalKeyValues: _$e,
            objectId: t.objectNumber
        }), lt1("endobj");
    }, he = function he() {
        for(var _$t in zt1)zt1.hasOwnProperty(_$t) && ue(zt1[_$t]);
    }, le = function le(t, e) {
        var r, n32 = [], _$i = 1 / (e - 1);
        for(r = 0; r < 1; r += _$i)n32.push(r);
        if (n32.push(1), 0 != t[0].offset) {
            var a23 = {
                offset: 0,
                color: t[0].color
            };
            t.unshift(a23);
        }
        if (1 != t[t.length - 1].offset) {
            var o18 = {
                offset: 1,
                color: t[t.length - 1].color
            };
            t.push(o18);
        }
        for(var s = "", c9 = 0, u7 = 0; u7 < n32.length; u7++){
            for(r = n32[u7]; r > t[c9 + 1].offset;)c9++;
            var h5 = t[c9].offset, l4 = (r - h5) / (t[c9 + 1].offset - h5), f4 = t[c9].color, d4 = t[c9 + 1].color;
            s += tt(Math.round((1 - l4) * f4[0] + l4 * d4[0]).toString(16)) + tt(Math.round((1 - l4) * f4[1] + l4 * d4[1]).toString(16)) + tt(Math.round((1 - l4) * f4[2] + l4 * d4[2]).toString(16));
        }
        return s.trim();
    }, fe = function fe(t, e) {
        e || (e = 21);
        var r = Xt(), n33 = le(t.colors, e), _$i = [];
        _$i.push({
            key: "FunctionType",
            value: "0"
        }), _$i.push({
            key: "Domain",
            value: "[0.0 1.0]"
        }), _$i.push({
            key: "Size",
            value: "[" + e + "]"
        }), _$i.push({
            key: "BitsPerSample",
            value: "8"
        }), _$i.push({
            key: "Range",
            value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
        }), _$i.push({
            key: "Decode",
            value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
        }), ie({
            data: n33,
            additionalKeyValues: _$i,
            alreadyAppliedFilters: [
                "/ASCIIHexDecode"
            ],
            objectId: r
        }), lt1("endobj"), t.objectNumber = Xt(), lt1("<< /ShadingType " + t.type), lt1("/ColorSpace /DeviceRGB");
        var a24 = "/Coords [" + O1(parseFloat(t.coords[0])) + " " + O1(parseFloat(t.coords[1])) + " ";
        2 === t.type ? a24 += O1(parseFloat(t.coords[2])) + " " + O1(parseFloat(t.coords[3])) : a24 += O1(parseFloat(t.coords[2])) + " " + O1(parseFloat(t.coords[3])) + " " + O1(parseFloat(t.coords[4])) + " " + O1(parseFloat(t.coords[5])), lt1(a24 += "]"), t.matrix && lt1("/Matrix [" + t.matrix.toString() + "]"), lt1("/Function " + r + " 0 R"), lt1("/Extend [true true]"), lt1(">>"), lt1("endobj");
    }, de = function de(t, e) {
        var r = Kt1(), n34 = Xt();
        e.push({
            resourcesOid: r,
            objectOid: n34
        }), t.objectNumber = n34;
        var _$i = [];
        _$i.push({
            key: "Type",
            value: "/Pattern"
        }), _$i.push({
            key: "PatternType",
            value: "1"
        }), _$i.push({
            key: "PaintType",
            value: "1"
        }), _$i.push({
            key: "TilingType",
            value: "1"
        }), _$i.push({
            key: "BBox",
            value: "[" + t.boundingBox.map(O1).join(" ") + "]"
        }), _$i.push({
            key: "XStep",
            value: O1(t.xStep)
        }), _$i.push({
            key: "YStep",
            value: O1(t.yStep)
        }), _$i.push({
            key: "Resources",
            value: r + " 0 R"
        }), t.matrix && _$i.push({
            key: "Matrix",
            value: "[" + t.matrix.toString() + "]"
        }), ie({
            data: t.stream,
            additionalKeyValues: _$i,
            objectId: t.objectNumber
        }), lt1("endobj");
    }, pe = function pe(t) {
        var _$e;
        for(_$e in Ot1)Ot1.hasOwnProperty(_$e) && (Ot1[_$e] instanceof B8 ? fe(Ot1[_$e]) : Ot1[_$e] instanceof M6 && de(Ot1[_$e], t));
    }, ge = function ge(t) {
        for(var _$e in t.objectNumber = Xt(), lt1("<<"), t)switch(_$e){
            case "opacity":
                lt1("/ca " + R(t[_$e]));
                break;
            case "stroke-opacity":
                lt1("/CA " + R(t[_$e]));
        }
        lt1(">>"), lt1("endobj");
    }, me = function me() {
        var _$t;
        for(_$t in Mt1)Mt1.hasOwnProperty(_$t) && ge(Mt1[_$t]);
    }, ve = function ve() {
        for(var _$t in lt1("/XObject <<"), zt1)zt1.hasOwnProperty(_$t) && zt1[_$t].objectNumber >= 0 && lt1("/" + _$t + " " + zt1[_$t].objectNumber + " 0 R");
        Tt1.publish("putXobjectDict"), lt1(">>");
    }, be = function be() {
        Ye.oid = Xt(), lt1("<<"), lt1("/Filter /Standard"), lt1("/V " + Ye.v), lt1("/R " + Ye.r), lt1("/U <" + Ye.toHexString(Ye.U) + ">"), lt1("/O <" + Ye.toHexString(Ye.O) + ">"), lt1("/P " + Ye.P), lt1(">>"), lt1("endobj");
    }, ye = function ye() {
        for(var _$t in lt1("/Font <<"), Ft1)Ft1.hasOwnProperty(_$t) && (!1 === v1 || !0 === v1 && b1.hasOwnProperty(_$t)) && lt1("/" + _$t + " " + Ft1[_$t].objectNumber + " 0 R");
        lt1(">>");
    }, we = function we() {
        if (Object.keys(Ot1).length > 0) {
            for(var _$t in lt1("/Shading <<"), Ot1)Ot1.hasOwnProperty(_$t) && Ot1[_$t] instanceof B8 && Ot1[_$t].objectNumber >= 0 && lt1("/" + _$t + " " + Ot1[_$t].objectNumber + " 0 R");
            Tt1.publish("putShadingPatternDict"), lt1(">>");
        }
    }, Ne = function Ne(t) {
        if (Object.keys(Ot1).length > 0) {
            for(var _$e in lt1("/Pattern <<"), Ot1)Ot1.hasOwnProperty(_$e) && Ot1[_$e] instanceof _$y1.TilingPattern && Ot1[_$e].objectNumber >= 0 && Ot1[_$e].objectNumber < t && lt1("/" + _$e + " " + Ot1[_$e].objectNumber + " 0 R");
            Tt1.publish("putTilingPatternDict"), lt1(">>");
        }
    }, Le = function Le() {
        if (Object.keys(Mt1).length > 0) {
            var _$t;
            for(_$t in lt1("/ExtGState <<"), Mt1)Mt1.hasOwnProperty(_$t) && Mt1[_$t].objectNumber >= 0 && lt1("/" + _$t + " " + Mt1[_$t].objectNumber + " 0 R");
            Tt1.publish("putGStateDict"), lt1(">>");
        }
    }, Ae = function Ae(t) {
        Zt1(t.resourcesOid, !0), lt1("<<"), lt1("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), ye(), we(), Ne(t.objectOid), Le(), ve(), lt1(">>"), lt1("endobj");
    }, xe = function xe() {
        var _$t = [];
        ce(), me(), he(), pe(_$t), Tt1.publish("putResources"), _$t.forEach(Ae), Ae({
            resourcesOid: _$te,
            objectOid: Number.MAX_SAFE_INTEGER
        }), Tt1.publish("postPutResources");
    }, Se = function Se() {
        Tt1.publish("putAdditionalObjects");
        for(var _$t = 0; _$t < at1.length; _$t++){
            var _$e = at1[_$t];
            Zt1(_$e.objId, !0), lt1(_$e.content), lt1("endobj");
        }
        Tt1.publish("postPutAdditionalObjects");
    }, _e = function _e(t) {
        Ct1[t.fontName] = Ct1[t.fontName] || {}, Ct1[t.fontName][t.fontStyle] = t.id;
    }, Pe = function Pe(t, e, r, n35, i11) {
        var a25 = {
            id: "F" + (Object.keys(Ft1).length + 1).toString(10),
            postScriptName: t,
            fontName: e,
            fontStyle: r,
            encoding: n35,
            isStandardFont: i11 || !1,
            metadata: {}
        };
        return Tt1.publish("addFont", {
            font: a25,
            instance: this
        }), Ft1[a25.id] = a25, _e(a25), a25.id;
    }, ke = function ke(t) {
        for(var _$e = 0, r = pt1.length; _$e < r; _$e++){
            var n36 = Pe.call(this, t[_$e][0], t[_$e][1], t[_$e][2], pt1[_$e][3], !0);
            !1 === v1 && (b1[n36] = !0);
            var _$i = t[_$e][0].split("-");
            _e({
                id: n36,
                fontName: _$i[0],
                fontStyle: _$i[1] || ""
            });
        }
        Tt1.publish("addFonts", {
            fonts: Ft1,
            dictionary: Ct1
        });
    }, Ie = function Ie(t5) {
        return t5.foo = function() {
            try {
                return t5.apply(this, arguments);
            } catch (t) {
                var _$e = t.stack || "";
                ~_$e.indexOf(" at ") && (_$e = _$e.split(" at ")[1]);
                var r = "Error in function " + _$e.split("\n")[0].split("<")[0] + ": " + t.message;
                if (!n73.console) throw new Error(r);
                n73.console.error(r, t), n73.alert && alert(r);
            }
        }, t5.foo.bar = t5, t5.foo;
    }, Fe = function Fe(t, e) {
        var r, n37, _$i, a26, o19, s, c10, u8, h6;
        if (_$i = (e = e || {}).sourceEncoding || "Unicode", o19 = e.outputEncoding, (e.autoencode || o19) && Ft1[St1].metadata && Ft1[St1].metadata[_$i] && Ft1[St1].metadata[_$i].encoding && (a26 = Ft1[St1].metadata[_$i].encoding, !o19 && Ft1[St1].encoding && (o19 = Ft1[St1].encoding), !o19 && a26.codePages && (o19 = a26.codePages[0]), "string" == typeof o19 && (o19 = a26[o19]), o19)) {
            for(c10 = !1, s = [], r = 0, n37 = t.length; r < n37; r++)(u8 = o19[t.charCodeAt(r)]) ? s.push(String.fromCharCode(u8)) : s.push(t[r]), s[r].charCodeAt(0) >> 8 && (c10 = !0);
            t = s.join("");
        }
        for(r = t.length; void 0 === c10 && 0 !== r;)t.charCodeAt(r - 1) >> 8 && (c10 = !0), r--;
        if (!c10) return t;
        for(s = e.noBOM ? [] : [
            254,
            255
        ], r = 0, n37 = t.length; r < n37; r++){
            if ((h6 = (u8 = t.charCodeAt(r)) >> 8) >> 8) throw new Error("Character at position " + r + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
            s.push(h6), s.push(u8 - (h6 << 8));
        }
        return String.fromCharCode.apply(void 0, s);
    }, Ce = _$y1.__private__.pdfEscape = _$y1.pdfEscape = function Ce(t, e) {
        return Fe(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }, je = _$y1.__private__.beginPage = function je(t) {
        ot1[++Dt1] = [], Rt1[Dt1] = {
            objId: 0,
            contentsObjId: 0,
            userUnit: Number(d2),
            artBox: null,
            bleedBox: null,
            cropBox: null,
            trimBox: null,
            mediaBox: {
                bottomLeftX: 0,
                bottomLeftY: 0,
                topRightX: Number(t[0]),
                topRightY: Number(t[1])
            }
        }, Me(Dt1), ht(ot1[$1]);
    }, Oe = function Oe(t, e) {
        var r, n38, o20;
        switch(_$i1 = e || _$i1, "string" == typeof t && (r = A(t.toLowerCase()), Array.isArray(r) && (n38 = r[0], o20 = r[1])), Array.isArray(t) && (n38 = t[0] * _$_t, o20 = t[1] * _$_t), isNaN(n38) && (n38 = s4[0], o20 = s4[1]), (n38 > 14400 || o20 > 14400) && (a60.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), n38 = Math.min(14400, n38), o20 = Math.min(14400, o20)), s4 = [
            n38,
            o20
        ], _$i1.substr(0, 1)){
            case "l":
                o20 > n38 && (s4 = [
                    o20,
                    n38
                ]);
                break;
            case "p":
                n38 > o20 && (s4 = [
                    o20,
                    n38
                ]);
        }
        je(s4), pr(fr), lt1(Lr), 0 !== kr && lt1(kr + " J"), 0 !== Ir && lt1(Ir + " j"), Tt1.publish("addPage", {
            pageNumber: Dt1
        });
    }, Be = function Be(t) {
        t > 0 && t <= Dt1 && (ot1.splice(t, 1), Rt1.splice(t, 1), Dt1--, $1 > Dt1 && ($1 = Dt1), this.setPage($1));
    }, Me = function Me(t) {
        t > 0 && t <= Dt1 && ($1 = t);
    }, Ee = _$y1.__private__.getNumberOfPages = _$y1.getNumberOfPages = function Ee() {
        return ot1.length - 1;
    }, qe = function qe(t, e, r) {
        var n39, _$i = void 0;
        return r = r || {}, t = void 0 !== t ? t : Ft1[St1].fontName, e = void 0 !== e ? e : Ft1[St1].fontStyle, n39 = t.toLowerCase(), void 0 !== Ct1[n39] && void 0 !== Ct1[n39][e] ? _$i = Ct1[n39][e] : void 0 !== Ct1[t] && void 0 !== Ct1[t][e] ? _$i = Ct1[t][e] : !1 === r.disableWarning && a60.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."), _$i || r.noFallback || null == (_$i = Ct1.times[e]) && (_$i = Ct1.times.normal), _$i;
    }, De = _$y1.__private__.putInfo = function De() {
        var _$t = Xt(), _$e = function _$e(t) {
            return t;
        };
        for(var r in null !== m1 && (_$e = Ye.encryptor(_$t, 0)), lt1("<<"), lt1("/Producer (" + Ce(_$e("jsPDF " + E.version)) + ")"), xt1)xt1.hasOwnProperty(r) && xt1[r] && lt1("/" + r.substr(0, 1).toUpperCase() + r.substr(1) + " (" + Ce(_$e(xt1[r])) + ")");
        lt1("/CreationDate (" + Ce(_$e(W1)) + ")"), lt1(">>"), lt1("endobj");
    }, Re = _$y1.__private__.putCatalog = function Re(t) {
        var _$e = (t = t || {}).rootDictionaryObjId || Qt1;
        switch(Xt(), lt1("<<"), lt1("/Type /Catalog"), lt1("/Pages " + _$e + " 0 R"), mt1 || (mt1 = "fullwidth"), mt1){
            case "fullwidth":
                lt1("/OpenAction [3 0 R /FitH null]");
                break;
            case "fullheight":
                lt1("/OpenAction [3 0 R /FitV null]");
                break;
            case "fullpage":
                lt1("/OpenAction [3 0 R /Fit]");
                break;
            case "original":
                lt1("/OpenAction [3 0 R /XYZ null null 1]");
                break;
            default:
                var r = "" + mt1;
                "%" === r.substr(r.length - 1) && (mt1 = parseInt(mt1) / 100), "number" == typeof mt1 && lt1("/OpenAction [3 0 R /XYZ null null " + R(mt1) + "]");
        }
        switch(Nt1 || (Nt1 = "continuous"), Nt1){
            case "continuous":
                lt1("/PageLayout /OneColumn");
                break;
            case "single":
                lt1("/PageLayout /SinglePage");
                break;
            case "two":
            case "twoleft":
                lt1("/PageLayout /TwoColumnLeft");
                break;
            case "tworight":
                lt1("/PageLayout /TwoColumnRight");
        }
        yt1 && lt1("/PageMode /" + yt1), Tt1.publish("putCatalog"), lt1(">>"), lt1("endobj");
    }, Te = _$y1.__private__.putTrailer = function Te() {
        lt1("trailer"), lt1("<<"), lt1("/Size " + (et1 + 1)), lt1("/Root " + et1 + " 0 R"), lt1("/Info " + (et1 - 1) + " 0 R"), null !== m1 && lt1("/Encrypt " + Ye.oid + " 0 R"), lt1("/ID [ <" + V1 + "> <" + V1 + "> ]"), lt1(">>");
    }, Ue = _$y1.__private__.putHeader = function Ue() {
        lt1("%PDF-" + w1), lt1("%ºß¬à");
    }, ze = _$y1.__private__.putXRef = function ze() {
        var _$t = "0000000000";
        lt1("xref"), lt1("0 " + (et1 + 1)), lt1("0000000000 65535 f ");
        for(var _$e = 1; _$e <= et1; _$e++)"function" == typeof rt1[_$e] ? lt1((_$t + rt1[_$e]()).slice(-10) + " 00000 n ") : void 0 !== rt1[_$e] ? lt1((_$t + rt1[_$e]).slice(-10) + " 00000 n ") : lt1("0000000000 00000 n ");
    }, He = _$y1.__private__.buildDocument = function He() {
        ut(), ht(nt1), Tt1.publish("buildDocument"), Ue(), oe(), Se(), xe(), null !== m1 && be(), De(), Re();
        var _$t = it1;
        return ze(), Te(), lt1("startxref"), lt1("" + _$t), lt1("%%EOF"), ht(ot1[$1]), nt1.join("\n");
    }, We = _$y1.__private__.getBlob = function We(t) {
        return new Blob([
            dt(t)
        ], {
            type: "application/pdf"
        });
    }, Ve = _$y1.output = _$y1.__private__.output = Ie(function(t, e) {
        switch("string" == typeof (e = e || {}) ? e = {
            filename: e
        } : e.filename = e.filename || "generated.pdf", t){
            case void 0:
                return He();
            case "save":
                _$y1.save(e.filename);
                break;
            case "arraybuffer":
                return dt(He());
            case "blob":
                return We(He());
            case "bloburi":
            case "bloburl":
                if (void 0 !== n73.URL && "function" == typeof n73.URL.createObjectURL) return n73.URL && n73.URL.createObjectURL(We(He())) || void 0;
                a60.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                break;
            case "datauristring":
            case "dataurlstring":
                var r = "", _$i = He();
                try {
                    r = h17(_$i);
                } catch (t6) {
                    r = h17(unescape(encodeURIComponent(_$i)));
                }
                return "data:application/pdf;filename=" + e.filename + ";base64," + r;
            case "pdfobjectnewwindow":
                if ("[object Window]" === Object.prototype.toString.call(n73)) {
                    var o21 = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", s = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
                    e.pdfObjectUrl && (o21 = e.pdfObjectUrl, s = "");
                    var c11 = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + o21 + '"' + s + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(e) + ");<\/script></body></html>", u9 = n73.open();
                    return null !== u9 && u9.document.write(c11), u9;
                }
                throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
            case "pdfjsnewwindow":
                if ("[object Window]" === Object.prototype.toString.call(n73)) {
                    var l5 = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (e.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + e.filename + '" width="500px" height="400px" /></body></html>', f5 = n73.open();
                    if (null !== f5) {
                        f5.document.write(l5);
                        var d5 = this;
                        f5.document.documentElement.querySelector("#pdfViewer").onload = function() {
                            f5.document.title = e.filename, f5.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(d5.output("bloburl"));
                        };
                    }
                    return f5;
                }
                throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
            case "dataurlnewwindow":
                if ("[object Window]" !== Object.prototype.toString.call(n73)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
                var p4 = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", e) + '"></iframe></body></html>', g2 = n73.open();
                if (null !== g2 && (g2.document.write(p4), g2.document.title = e.filename), g2 || "undefined" == typeof safari) return g2;
                break;
            case "datauri":
            case "dataurl":
                return n73.document.location.href = this.output("datauristring", e);
            default:
                return null;
        }
    }), Ge = function Ge(t) {
        return !0 === Array.isArray(Ut1) && Ut1.indexOf(t) > -1;
    };
    switch(o9){
        case "pt":
            _$_t = 1;
            break;
        case "mm":
            _$_t = 72 / 25.4;
            break;
        case "cm":
            _$_t = 72 / 2.54;
            break;
        case "in":
            _$_t = 72;
            break;
        case "px":
            _$_t = 1 == Ge("px_scaling") ? 0.75 : 96 / 72;
            break;
        case "pc":
        case "em":
            _$_t = 12;
            break;
        case "ex":
            _$_t = 6;
            break;
        default:
            if ("number" != typeof o9) throw new Error("Invalid unit: " + o9);
            _$_t = o9;
    }
    var Ye = null;
    K(), Y();
    var Je = function Je(t7) {
        return null !== m1 ? Ye.encryptor(t7, 0) : function(t) {
            return t;
        };
    }, Xe = _$y1.__private__.getPageInfo = _$y1.getPageInfo = function Xe(t) {
        if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
        return {
            objId: Rt1[t].objId,
            pageNumber: t,
            pageContext: Rt1[t]
        };
    }, Ke = _$y1.__private__.getPageInfoByObjId = function Ke(t) {
        if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
        for(var _$e in Rt1)if (Rt1[_$e].objId === t) break;
        return Xe(_$e);
    }, Ze = _$y1.__private__.getCurrentPageInfo = _$y1.getCurrentPageInfo = function Ze() {
        return {
            objId: Rt1[$1].objId,
            pageNumber: $1,
            pageContext: Rt1[$1]
        };
    };
    _$y1.addPage = function() {
        return Oe.apply(this, arguments), this;
    }, _$y1.setPage = function() {
        return Me.apply(this, arguments), ht.call(this, ot1[$1]), this;
    }, _$y1.insertPage = function(t) {
        return this.addPage(), this.movePage($1, t), this;
    }, _$y1.movePage = function(t, e) {
        var r, n40;
        if (t > e) {
            r = ot1[t], n40 = Rt1[t];
            for(var _$i = t; _$i > e; _$i--)ot1[_$i] = ot1[_$i - 1], Rt1[_$i] = Rt1[_$i - 1];
            ot1[e] = r, Rt1[e] = n40, this.setPage(e);
        } else if (t < e) {
            r = ot1[t], n40 = Rt1[t];
            for(var a27 = t; a27 < e; a27++)ot1[a27] = ot1[a27 + 1], Rt1[a27] = Rt1[a27 + 1];
            ot1[e] = r, Rt1[e] = n40, this.setPage(e);
        }
        return this;
    }, _$y1.deletePage = function() {
        return Be.apply(this, arguments), this;
    }, _$y1.__private__.text = _$y1.text = function(e5, r4, n41, i12, a28) {
        var L = function L(t) {
            return t = t.split("\t").join(Array(i12.TabLen || 9).join(" ")), Ce(t, f6);
        };
        var A = function A(t) {
            for(var _$e, _$r = t.concat(), _$n = [], _$i = _$r.length; _$i--;)"string" == typeof (_$e = _$r.shift()) ? _$n.push(_$e) : Array.isArray(t) && (1 === _$e.length || void 0 === _$e[1] && void 0 === _$e[2]) ? _$n.push(_$e[0]) : _$n.push([
                _$e[0],
                _$e[1],
                _$e[2]
            ]);
            return _$n;
        };
        var _ = function _(t, e) {
            var _$r;
            if ("string" == typeof t) _$r = e(t)[0];
            else if (Array.isArray(t)) {
                for(var _$n, _$i, _$a = t.concat(), o23 = [], s = _$a.length; s--;)"string" == typeof (_$n = _$a.shift()) ? o23.push(e(_$n)[0]) : Array.isArray(_$n) && "string" == typeof _$n[0] && (_$i = e(_$n[0], _$n[1], _$n[2]), o23.push([
                    _$i[0],
                    _$i[1],
                    _$i[2]
                ]));
                _$r = o23;
            }
            return _$r;
        };
        var o22, s9, c12, u10, h7, l6, f6, d6, p5, g3 = (i12 = i12 || {}).scope || this;
        if ("number" == typeof e5 && "number" == typeof r4 && ("string" == typeof n41 || Array.isArray(n41))) {
            var m2 = n41;
            n41 = r4, r4 = e5, e5 = m2;
        }
        if (arguments[3] instanceof Vt1 == !1 ? (c12 = arguments[4], u10 = arguments[5], "object" === _typeofDefault.default(f6 = arguments[3]) && null !== f6 || ("string" == typeof c12 && (u10 = c12, c12 = null), "string" == typeof f6 && (u10 = f6, f6 = null), "number" == typeof f6 && (c12 = f6, f6 = null), i12 = {
            flags: f6,
            angle: c12,
            align: u10
        })) : (q("The transform parameter of text() with a Matrix value"), p5 = a28), isNaN(r4) || isNaN(n41) || null == e5) throw new Error("Invalid arguments passed to jsPDF.text");
        if (0 === e5.length) return g3;
        var v2 = "", _$y = !1, w2 = "number" == typeof i12.lineHeightFactor ? i12.lineHeightFactor : lr, N1 = g3.internal.scaleFactor;
        var P = !1, k1 = !0;
        if ("string" == typeof e5) P = !0;
        else if (Array.isArray(e5)) {
            var _$I = e5.concat();
            s9 = [];
            for(var F1, _$C = _$I.length; _$C--;)("string" != typeof (F1 = _$I.shift()) || Array.isArray(F1) && "string" != typeof F1[0]) && (k1 = !1);
            P = k1;
        }
        if (!1 === P) throw new Error('Type of text must be string or Array. "' + e5 + '" is not recognized.');
        "string" == typeof e5 && (e5 = e5.match(/[\r?\n]/) ? e5.split(/\r\n|\r|\n/g) : [
            e5
        ]);
        var _$j = gt1 / g3.internal.scaleFactor, _$B = _$j * (w2 - 1);
        switch(i12.baseline){
            case "bottom":
                n41 -= _$B;
                break;
            case "top":
                n41 += _$j - _$B;
                break;
            case "hanging":
                n41 += _$j - 2 * _$B;
                break;
            case "middle":
                n41 += _$j / 2 - _$B;
        }
        if ((l6 = i12.maxWidth || 0) > 0 && ("string" == typeof e5 ? e5 = g3.splitTextToSize(e5, l6) : "[object Array]" === Object.prototype.toString.call(e5) && (e5 = e5.reduce(function(t, e) {
            return t.concat(g3.splitTextToSize(e, l6));
        }, []))), o22 = {
            text: e5,
            x: r4,
            y: n41,
            options: i12,
            mutex: {
                pdfEscape: Ce,
                activeFontKey: St1,
                fonts: Ft1,
                activeFontSize: gt1
            }
        }, Tt1.publish("preProcessText", o22), e5 = o22.text, c12 = (i12 = o22.options).angle, p5 instanceof Vt1 == !1 && c12 && "number" == typeof c12) {
            c12 *= Math.PI / 180, 0 === i12.rotationDirection && (c12 = -c12), S1 === x1.ADVANCED && (c12 = -c12);
            var _$M = Math.cos(c12), _$E = Math.sin(c12);
            p5 = new Vt1(_$M, _$E, -_$E, _$M, 0, 0);
        } else c12 && c12 instanceof Vt1 && (p5 = c12);
        S1 !== x1.ADVANCED || p5 || (p5 = Yt1), void 0 !== (h7 = i12.charSpace || _r) && (v2 += O1(U(h7)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), void 0 !== (d6 = i12.horizontalScale) && (v2 += O1(100 * d6) + " Tz\n");
        i12.lang;
        var D = -1, R = void 0 !== i12.renderingMode ? i12.renderingMode : i12.stroke, T = g3.internal.getCurrentPageInfo().pageContext;
        switch(R){
            case 0:
            case !1:
            case "fill":
                D = 0;
                break;
            case 1:
            case !0:
            case "stroke":
                D = 1;
                break;
            case 2:
            case "fillThenStroke":
                D = 2;
                break;
            case 3:
            case "invisible":
                D = 3;
                break;
            case 4:
            case "fillAndAddForClipping":
                D = 4;
                break;
            case 5:
            case "strokeAndAddPathForClipping":
                D = 5;
                break;
            case 6:
            case "fillThenStrokeAndAddToPathForClipping":
                D = 6;
                break;
            case 7:
            case "addToPathForClipping":
                D = 7;
        }
        var z = void 0 !== T.usedRenderingMode ? T.usedRenderingMode : -1;
        -1 !== D ? v2 += D + " Tr\n" : -1 !== z && (v2 += "0 Tr\n"), -1 !== D && (T.usedRenderingMode = D), u10 = i12.align || "left";
        var H1, W2 = gt1 * w2, V2 = g3.internal.pageSize.getWidth(), G = Ft1[St1];
        h7 = i12.charSpace || _r, l6 = i12.maxWidth || 0, f6 = Object.assign({
            autoencode: !0,
            noBOM: !0
        }, i12.flags);
        var Y = [];
        if ("[object Array]" === Object.prototype.toString.call(e5)) {
            var J;
            s9 = A(e5), "left" !== u10 && (H1 = s9.map(function(t) {
                return g3.getStringUnitWidth(t, {
                    font: G,
                    charSpace: h7,
                    fontSize: gt1,
                    doKerning: !1
                }) * gt1 / N1;
            }));
            var X, K = 0;
            if ("right" === u10) {
                r4 -= H1[0], e5 = [], _$C = s9.length;
                for(var Z = 0; Z < _$C; Z++)0 === Z ? (X = br(r4), J = yr(n41)) : (X = U(K - H1[Z]), J = -W2), e5.push([
                    s9[Z],
                    X,
                    J
                ]), K = H1[Z];
            } else if ("center" === u10) {
                r4 -= H1[0] / 2, e5 = [], _$C = s9.length;
                for(var $2 = 0; $2 < _$C; $2++)0 === $2 ? (X = br(r4), J = yr(n41)) : (X = U((K - H1[$2]) / 2), J = -W2), e5.push([
                    s9[$2],
                    X,
                    J
                ]), K = H1[$2];
            } else if ("left" === u10) {
                e5 = [], _$C = s9.length;
                for(var Q2 = 0; Q2 < _$C; Q2++)e5.push(s9[Q2]);
            } else {
                if ("justify" !== u10) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                e5 = [], _$C = s9.length, l6 = 0 !== l6 ? l6 : V2;
                for(var tt = 0; tt < _$C; tt++)J = 0 === tt ? yr(n41) : -W2, X = 0 === tt ? br(r4) : 0, tt < _$C - 1 ? Y.push(O1(U((l6 - H1[tt]) / (s9[tt].split(" ").length - 1)))) : Y.push(0), e5.push([
                    s9[tt],
                    X,
                    J
                ]);
            }
        }
        var et2 = "boolean" == typeof i12.R2L ? i12.R2L : bt1;
        !0 === et2 && (e5 = _(e5, function(t, e, r) {
            return [
                t.split("").reverse().join(""),
                e,
                r
            ];
        })), o22 = {
            text: e5,
            x: r4,
            y: n41,
            options: i12,
            mutex: {
                pdfEscape: Ce,
                activeFontKey: St1,
                fonts: Ft1,
                activeFontSize: gt1
            }
        }, Tt1.publish("postProcessText", o22), e5 = o22.text, _$y = o22.mutex.isHex || !1;
        var rt2 = Ft1[St1].encoding;
        "WinAnsiEncoding" !== rt2 && "StandardEncoding" !== rt2 || (e5 = _(e5, function(t, e, r) {
            return [
                L(t),
                e,
                r
            ];
        })), s9 = A(e5), e5 = [];
        for(var nt2, it2, at2, ot2 = 0, st2 = 1, ct2 = Array.isArray(s9[0]) ? st2 : ot2, ut = "", ht = function ht(t, e, r) {
            var _$n = "";
            return r instanceof Vt1 ? (r = "number" == typeof i12.angle ? Gt(r, new Vt1(1, 0, 0, 1, t, e)) : Gt(new Vt1(1, 0, 0, 1, t, e), r), S1 === x1.ADVANCED && (r = Gt(new Vt1(1, 0, 0, -1, 0, 0), r)), _$n = r.join(" ") + " Tm\n") : _$n = O1(t) + " " + O1(e) + " Td\n", _$n;
        }, ft1 = 0; ft1 < s9.length; ft1++){
            switch(ut = "", ct2){
                case st2:
                    at2 = (_$y ? "<" : "(") + s9[ft1][0] + (_$y ? ">" : ")"), nt2 = parseFloat(s9[ft1][1]), it2 = parseFloat(s9[ft1][2]);
                    break;
                case ot2:
                    at2 = (_$y ? "<" : "(") + s9[ft1] + (_$y ? ">" : ")"), nt2 = br(r4), it2 = yr(n41);
            }
            void 0 !== Y && void 0 !== Y[ft1] && (ut = Y[ft1] + " Tw\n"), 0 === ft1 ? e5.push(ut + ht(nt2, it2, p5) + at2) : ct2 === ot2 ? e5.push(ut + at2) : ct2 === st2 && e5.push(ut + ht(nt2, it2, p5) + at2);
        }
        e5 = ct2 === ot2 ? e5.join(" Tj\nT* ") : e5.join(" Tj\n"), e5 += " Tj\n";
        var dt = "BT\n/";
        return dt += St1 + " " + gt1 + " Tf\n", dt += O1(gt1 * w2) + " TL\n", dt += xr + "\n", dt += v2, dt += e5, lt1(dt += "ET"), b1[St1] = !0, g3;
    };
    var $e = _$y1.__private__.clip = _$y1.clip = function $e(t) {
        return lt1("evenodd" === t ? "W*" : "W"), this;
    };
    _$y1.clipEvenOdd = function() {
        return $e("evenodd");
    }, _$y1.__private__.discardPath = _$y1.discardPath = function() {
        return lt1("n"), this;
    };
    var Qe = _$y1.__private__.isValidStyle = function Qe(t) {
        var _$e = !1;
        return -1 !== [
            void 0,
            null,
            "S",
            "D",
            "F",
            "DF",
            "FD",
            "f",
            "f*",
            "B",
            "B*",
            "n"
        ].indexOf(t) && (_$e = !0), _$e;
    };
    _$y1.__private__.setDefaultPathOperation = _$y1.setDefaultPathOperation = function(t) {
        return Qe(t) && (g1 = t), this;
    };
    var tr = _$y1.__private__.getStyle = _$y1.getStyle = function tr(t) {
        var _$e = g1;
        switch(t){
            case "D":
            case "S":
                _$e = "S";
                break;
            case "F":
                _$e = "f";
                break;
            case "FD":
            case "DF":
                _$e = "B";
                break;
            case "f":
            case "f*":
            case "B":
            case "B*":
                _$e = t;
        }
        return _$e;
    }, er = _$y1.close = function er() {
        return lt1("h"), this;
    };
    _$y1.stroke = function() {
        return lt1("S"), this;
    }, _$y1.fill = function(t) {
        return rr("f", t), this;
    }, _$y1.fillEvenOdd = function(t) {
        return rr("f*", t), this;
    }, _$y1.fillStroke = function(t) {
        return rr("B", t), this;
    }, _$y1.fillStrokeEvenOdd = function(t) {
        return rr("B*", t), this;
    };
    var rr = function rr(e, r) {
        "object" === _typeofDefault.default(r) ? ar(r, e) : lt1(e);
    }, nr = function nr(t) {
        null === t || S1 === x1.ADVANCED && void 0 === t || (t = tr(t), lt1(t));
    };
    var ar = function ar(t, e) {
        var r = Bt1[t.key], n42 = Ot1[r];
        if (n42 instanceof B8) lt1("q"), lt1(or(e)), n42.gState && _$y1.setGState(n42.gState), lt1(t.matrix.toString() + " cm"), lt1("/" + r + " sh"), lt1("Q");
        else if (n42 instanceof M6) {
            var _$i = new Vt1(1, 0, 0, -1, 0, Rr());
            t.matrix && (_$i = _$i.multiply(t.matrix || Yt1), r = ir.call(n42, t.key, t.boundingBox, t.xStep, t.yStep, _$i).id), lt1("q"), lt1("/Pattern cs"), lt1("/" + r + " scn"), n42.gState && _$y1.setGState(n42.gState), lt1(e), lt1("Q");
        }
    }, or = function or(t) {
        switch(t){
            case "f":
            case "F":
                return "W n";
            case "f*":
                return "W* n";
            case "B":
                return "W S";
            case "B*":
                return "W* S";
            case "S":
                return "W S";
            case "n":
                return "W n";
        }
    }, sr = _$y1.moveTo = function sr(t, e) {
        return lt1(O1(U(t)) + " " + O1(H(e)) + " m"), this;
    }, cr = _$y1.lineTo = function cr(t, e) {
        return lt1(O1(U(t)) + " " + O1(H(e)) + " l"), this;
    }, ur = _$y1.curveTo = function ur(t, e, r, n43, i13, a29) {
        return lt1([
            O1(U(t)),
            O1(H(e)),
            O1(U(r)),
            O1(H(n43)),
            O1(U(i13)),
            O1(H(a29)),
            "c"
        ].join(" ")), this;
    };
    _$y1.__private__.line = _$y1.line = function(t, e, r, n44, i14) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n44) || !Qe(i14)) throw new Error("Invalid arguments passed to jsPDF.line");
        return S1 === x1.COMPAT ? this.lines([
            [
                r - t,
                n44 - e
            ]
        ], t, e, [
            1,
            1
        ], i14 || "S") : this.lines([
            [
                r - t,
                n44 - e
            ]
        ], t, e, [
            1,
            1
        ]).stroke();
    }, _$y1.__private__.lines = _$y1.lines = function(t, e, r, n45, i15, a30) {
        var o24, s, c13, u11, h8, l7, f7, d7, p6, g4, m3, v3;
        if ("number" == typeof t && (v3 = r, r = e, e = t, t = v3), n45 = n45 || [
            1,
            1
        ], a30 = a30 || !1, isNaN(e) || isNaN(r) || !Array.isArray(t) || !Array.isArray(n45) || !Qe(i15) || "boolean" != typeof a30) throw new Error("Invalid arguments passed to jsPDF.lines");
        for(sr(e, r), o24 = n45[0], s = n45[1], u11 = t.length, g4 = e, m3 = r, c13 = 0; c13 < u11; c13++)2 === (h8 = t[c13]).length ? (g4 = h8[0] * o24 + g4, m3 = h8[1] * s + m3, cr(g4, m3)) : (l7 = h8[0] * o24 + g4, f7 = h8[1] * s + m3, d7 = h8[2] * o24 + g4, p6 = h8[3] * s + m3, g4 = h8[4] * o24 + g4, m3 = h8[5] * s + m3, ur(l7, f7, d7, p6, g4, m3));
        return a30 && er(), nr(i15), this;
    }, _$y1.path = function(t) {
        for(var _$e = 0; _$e < t.length; _$e++){
            var r = t[_$e], n46 = r.c;
            switch(r.op){
                case "m":
                    sr(n46[0], n46[1]);
                    break;
                case "l":
                    cr(n46[0], n46[1]);
                    break;
                case "c":
                    ur.apply(this, n46);
                    break;
                case "h":
                    er();
            }
        }
        return this;
    }, _$y1.__private__.rect = _$y1.rect = function(t, e, r, n47, i16) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n47) || !Qe(i16)) throw new Error("Invalid arguments passed to jsPDF.rect");
        return S1 === x1.COMPAT && (n47 = -n47), lt1([
            O1(U(t)),
            O1(H(e)),
            O1(U(r)),
            O1(U(n47)),
            "re"
        ].join(" ")), nr(i16), this;
    }, _$y1.__private__.triangle = _$y1.triangle = function(t, e, r, n48, i17, a31, o25) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n48) || isNaN(i17) || isNaN(a31) || !Qe(o25)) throw new Error("Invalid arguments passed to jsPDF.triangle");
        return this.lines([
            [
                r - t,
                n48 - e
            ],
            [
                i17 - r,
                a31 - n48
            ],
            [
                t - i17,
                e - a31
            ]
        ], t, e, [
            1,
            1
        ], o25, !0), this;
    }, _$y1.__private__.roundedRect = _$y1.roundedRect = function(t, e, r, n49, i18, a32, o26) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n49) || isNaN(i18) || isNaN(a32) || !Qe(o26)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
        var s = 4 / 3 * (Math.SQRT2 - 1);
        return i18 = Math.min(i18, 0.5 * r), a32 = Math.min(a32, 0.5 * n49), this.lines([
            [
                r - 2 * i18,
                0
            ],
            [
                i18 * s,
                0,
                i18,
                a32 - a32 * s,
                i18,
                a32
            ],
            [
                0,
                n49 - 2 * a32
            ],
            [
                0,
                a32 * s,
                -i18 * s,
                a32,
                -i18,
                a32
            ],
            [
                2 * i18 - r,
                0
            ],
            [
                -i18 * s,
                0,
                -i18,
                -a32 * s,
                -i18,
                -a32
            ],
            [
                0,
                2 * a32 - n49
            ],
            [
                0,
                -a32 * s,
                i18 * s,
                -a32,
                i18,
                -a32
            ]
        ], t + i18, e, [
            1,
            1
        ], o26, !0), this;
    }, _$y1.__private__.ellipse = _$y1.ellipse = function(t, e, r, n50, i19) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n50) || !Qe(i19)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
        var a33 = 4 / 3 * (Math.SQRT2 - 1) * r, o27 = 4 / 3 * (Math.SQRT2 - 1) * n50;
        return sr(t + r, e), ur(t + r, e - o27, t + a33, e - n50, t, e - n50), ur(t - a33, e - n50, t - r, e - o27, t - r, e), ur(t - r, e + o27, t - a33, e + n50, t, e + n50), ur(t + a33, e + n50, t + r, e + o27, t + r, e), nr(i19), this;
    }, _$y1.__private__.circle = _$y1.circle = function(t, e, r, n51) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || !Qe(n51)) throw new Error("Invalid arguments passed to jsPDF.circle");
        return this.ellipse(t, e, r, r, n51);
    }, _$y1.setFont = function(t, e, r) {
        return r && (e = k(e, r)), St1 = qe(t, e, {
            disableWarning: !1
        }), this;
    };
    var hr = _$y1.__private__.getFont = _$y1.getFont = function hr() {
        return Ft1[qe.apply(_$y1, arguments)];
    };
    _$y1.__private__.getFontList = _$y1.getFontList = function() {
        var _$t, _$e, r = {};
        for(_$t in Ct1)if (Ct1.hasOwnProperty(_$t)) for(_$e in r[_$t] = [], Ct1[_$t])Ct1[_$t].hasOwnProperty(_$e) && r[_$t].push(_$e);
        return r;
    }, _$y1.addFont = function(t, e, r, n52, i20) {
        var a34 = [
            "StandardEncoding",
            "MacRomanEncoding",
            "Identity-H",
            "WinAnsiEncoding"
        ];
        return arguments[3] && -1 !== a34.indexOf(arguments[3]) ? i20 = arguments[3] : arguments[3] && -1 == a34.indexOf(arguments[3]) && (r = k(r, n52)), i20 = i20 || "Identity-H", Pe.call(this, t, e, r, i20);
    };
    var lr, fr = e4.lineWidth || 0.200025, dr = _$y1.__private__.getLineWidth = _$y1.getLineWidth = function dr() {
        return fr;
    }, pr = _$y1.__private__.setLineWidth = _$y1.setLineWidth = function pr(t) {
        return fr = t, lt1(O1(U(t)) + " w"), this;
    };
    _$y1.__private__.setLineDash = E.API.setLineDash = E.API.setLineDashPattern = function(t8, e) {
        if (t8 = t8 || [], e = e || 0, isNaN(e) || !Array.isArray(t8)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
        return t8 = t8.map(function(t) {
            return O1(U(t));
        }).join(" "), e = O1(U(e)), lt1("[" + t8 + "] " + e + " d"), this;
    };
    var gr = _$y1.__private__.getLineHeight = _$y1.getLineHeight = function gr() {
        return gt1 * lr;
    };
    _$y1.__private__.getLineHeight = _$y1.getLineHeight = function() {
        return gt1 * lr;
    };
    var mr = _$y1.__private__.setLineHeightFactor = _$y1.setLineHeightFactor = function mr(t) {
        return "number" == typeof (t = t || 1.15) && (lr = t), this;
    }, vr = _$y1.__private__.getLineHeightFactor = _$y1.getLineHeightFactor = function vr() {
        return lr;
    };
    mr(e4.lineHeight);
    var br = _$y1.__private__.getHorizontalCoordinate = function br(t) {
        return U(t);
    }, yr = _$y1.__private__.getVerticalCoordinate = function yr(t) {
        return S1 === x1.ADVANCED ? t : Rt1[$1].mediaBox.topRightY - Rt1[$1].mediaBox.bottomLeftY - U(t);
    }, wr = _$y1.__private__.getHorizontalCoordinateString = _$y1.getHorizontalCoordinateString = function wr(t) {
        return O1(br(t));
    }, Nr = _$y1.__private__.getVerticalCoordinateString = _$y1.getVerticalCoordinateString = function Nr(t) {
        return O1(yr(t));
    }, Lr = e4.strokeColor || "0 G";
    _$y1.__private__.getStrokeColor = _$y1.getDrawColor = function() {
        return _$ee(Lr);
    }, _$y1.__private__.setStrokeColor = _$y1.setDrawColor = function(t, e, r, n53) {
        return Lr = re({
            ch1: t,
            ch2: e,
            ch3: r,
            ch4: n53,
            pdfColorType: "draw",
            precision: 2
        }), lt1(Lr), this;
    };
    var Ar = e4.fillColor || "0 g";
    _$y1.__private__.getFillColor = _$y1.getFillColor = function() {
        return _$ee(Ar);
    }, _$y1.__private__.setFillColor = _$y1.setFillColor = function(t, e, r, n54) {
        return Ar = re({
            ch1: t,
            ch2: e,
            ch3: r,
            ch4: n54,
            pdfColorType: "fill",
            precision: 2
        }), lt1(Ar), this;
    };
    var xr = e4.textColor || "0 g", Sr = _$y1.__private__.getTextColor = _$y1.getTextColor = function Sr() {
        return _$ee(xr);
    };
    _$y1.__private__.setTextColor = _$y1.setTextColor = function(t, e, r, n55) {
        return xr = re({
            ch1: t,
            ch2: e,
            ch3: r,
            ch4: n55,
            pdfColorType: "text",
            precision: 3
        }), this;
    };
    var _r = e4.charSpace, Pr = _$y1.__private__.getCharSpace = _$y1.getCharSpace = function Pr() {
        return parseFloat(_r || 0);
    };
    _$y1.__private__.setCharSpace = _$y1.setCharSpace = function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
        return _r = t, this;
    };
    var kr = 0;
    _$y1.CapJoinStyles = {
        0: 0,
        butt: 0,
        but: 0,
        miter: 0,
        1: 1,
        round: 1,
        rounded: 1,
        circle: 1,
        2: 2,
        projecting: 2,
        project: 2,
        square: 2,
        bevel: 2
    }, _$y1.__private__.setLineCap = _$y1.setLineCap = function(t) {
        var _$e = _$y1.CapJoinStyles[t];
        if (void 0 === _$e) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return kr = _$e, lt1(_$e + " J"), this;
    };
    var Ir = 0;
    _$y1.__private__.setLineJoin = _$y1.setLineJoin = function(t) {
        var _$e = _$y1.CapJoinStyles[t];
        if (void 0 === _$e) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return Ir = _$e, lt1(_$e + " j"), this;
    }, _$y1.__private__.setLineMiterLimit = _$y1.__private__.setMiterLimit = _$y1.setLineMiterLimit = _$y1.setMiterLimit = function(t) {
        if (t = t || 0, isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
        return lt1(O1(U(t)) + " M"), this;
    }, _$y1.GState = j, _$y1.setGState = function(t) {
        (t = "string" == typeof t ? Mt1[Et1[t]] : Fr(null, t)).equals(qt1) || (lt1("/" + t.id + " gs"), qt1 = t);
    };
    var Fr = function Fr(t, e) {
        if (!t || !Et1[t]) {
            var r = !1;
            for(var n56 in Mt1)if (Mt1.hasOwnProperty(n56) && Mt1[n56].equals(e)) {
                r = !0;
                break;
            }
            if (r) e = Mt1[n56];
            else {
                var _$i = "GS" + (Object.keys(Mt1).length + 1).toString(10);
                Mt1[_$i] = e, e.id = _$i;
            }
            return t && (Et1[t] = e.id), Tt1.publish("addGState", e), e;
        }
    };
    _$y1.addGState = function(t, e) {
        return Fr(t, e), this;
    }, _$y1.saveGraphicsState = function() {
        return lt1("q"), jt1.push({
            key: St1,
            size: gt1,
            color: xr
        }), this;
    }, _$y1.restoreGraphicsState = function() {
        lt1("Q");
        var _$t = jt1.pop();
        return St1 = _$t.key, gt1 = _$t.size, xr = _$t.color, qt1 = null, this;
    }, _$y1.setCurrentTransformationMatrix = function(t) {
        return lt1(t.toString() + " cm"), this;
    }, _$y1.comment = function(t) {
        return lt1("#" + t), this;
    };
    var Cr = function Cr(t9, e) {
        var r = t9 || 0;
        Object.defineProperty(this, "x", {
            enumerable: !0,
            get: function get() {
                return r;
            },
            set: function set(t) {
                isNaN(t) || (r = parseFloat(t));
            }
        });
        var n57 = e || 0;
        Object.defineProperty(this, "y", {
            enumerable: !0,
            get: function get() {
                return n57;
            },
            set: function set(t) {
                isNaN(t) || (n57 = parseFloat(t));
            }
        });
        var _$i = "pt";
        return Object.defineProperty(this, "type", {
            enumerable: !0,
            get: function get() {
                return _$i;
            },
            set: function set(t) {
                _$i = t.toString();
            }
        }), this;
    }, jr = function jr(t10, e, r, n58) {
        Cr.call(this, t10, e), this.type = "rect";
        var _$i = r || 0;
        Object.defineProperty(this, "w", {
            enumerable: !0,
            get: function get() {
                return _$i;
            },
            set: function set(t) {
                isNaN(t) || (_$i = parseFloat(t));
            }
        });
        var a35 = n58 || 0;
        return Object.defineProperty(this, "h", {
            enumerable: !0,
            get: function get() {
                return a35;
            },
            set: function set(t) {
                isNaN(t) || (a35 = parseFloat(t));
            }
        }), this;
    }, Or = function Or() {
        this.page = Dt1, this.currentPage = $1, this.pages = ot1.slice(0), this.pagesContext = Rt1.slice(0), this.x = Pt1, this.y = kt1, this.matrix = It1, this.width = qr($1), this.height = Rr($1), this.outputDestination = ct1, this.id = "", this.objectNumber = -1;
    };
    Or.prototype.restore = function() {
        Dt1 = this.page, $1 = this.currentPage, Rt1 = this.pagesContext, ot1 = this.pages, Pt1 = this.x, kt1 = this.y, It1 = this.matrix, Dr($1, this.width), Tr($1, this.height), ct1 = this.outputDestination;
    };
    var Br = function Br(t, e, r, n59, i21) {
        Wt1.push(new Or), Dt1 = $1 = 0, ot1 = [], Pt1 = t, kt1 = e, It1 = i21, je([
            r,
            n59
        ]);
    }, Mr = function Mr(t) {
        if (Ht1[t]) Wt1.pop().restore();
        else {
            var _$e = new Or, r = "Xo" + (Object.keys(zt1).length + 1).toString(10);
            _$e.id = r, Ht1[t] = r, zt1[r] = _$e, Tt1.publish("addFormObject", _$e), Wt1.pop().restore();
        }
    };
    for(var Er in _$y1.beginFormObject = function(t, e, r, n60, i22) {
        return Br(t, e, r, n60, i22), this;
    }, _$y1.endFormObject = function(t) {
        return Mr(t), this;
    }, _$y1.doFormObject = function(t, e) {
        var r = zt1[Ht1[t]];
        return lt1("q"), lt1(e.toString() + " cm"), lt1("/" + r.id + " Do"), lt1("Q"), this;
    }, _$y1.getFormObject = function(t) {
        var _$e = zt1[Ht1[t]];
        return {
            x: _$e.x,
            y: _$e.y,
            width: _$e.width,
            height: _$e.height,
            matrix: _$e.matrix
        };
    }, _$y1.save = function(t11, e6) {
        return t11 = t11 || "generated.pdf", (e6 = e6 || {}).returnPromise = e6.returnPromise || !1, !1 === e6.returnPromise ? (l16(We(He()), t11), "function" == typeof l16.unload && n73.setTimeout && setTimeout(l16.unload, 911), this) : new Promise(function(e, r) {
            try {
                var _$i = l16(We(He()), t11);
                "function" == typeof l16.unload && n73.setTimeout && setTimeout(l16.unload, 911), e(_$i);
            } catch (t) {
                r(t.message);
            }
        });
    }, E.API)E.API.hasOwnProperty(Er) && ("events" === Er && E.API.events.length ? function(t, e) {
        var r, n61, _$i;
        for(_$i = e.length - 1; -1 !== _$i; _$i--)r = e[_$i][0], n61 = e[_$i][1], t.subscribe.apply(t, [
            r
        ].concat("function" == typeof n61 ? [
            n61
        ] : n61));
    }(Tt1, E.API.events) : _$y1[Er] = E.API[Er]);
    var qr = _$y1.getPageWidth = function qr(t) {
        return (Rt1[t = t || $1].mediaBox.topRightX - Rt1[t].mediaBox.bottomLeftX) / _$_t;
    }, Dr = _$y1.setPageWidth = function Dr(t, e) {
        Rt1[t].mediaBox.topRightX = e * _$_t + Rt1[t].mediaBox.bottomLeftX;
    }, Rr = _$y1.getPageHeight = function Rr(t) {
        return (Rt1[t = t || $1].mediaBox.topRightY - Rt1[t].mediaBox.bottomLeftY) / _$_t;
    }, Tr = _$y1.setPageHeight = function Tr(t, e) {
        Rt1[t].mediaBox.topRightY = e * _$_t + Rt1[t].mediaBox.bottomLeftY;
    };
    return _$y1.internal = {
        pdfEscape: Ce,
        getStyle: tr,
        getFont: hr,
        getFontSize: vt,
        getCharSpace: Pr,
        getTextColor: Sr,
        getLineHeight: gr,
        getLineHeightFactor: vr,
        getLineWidth: dr,
        write: ft,
        getHorizontalCoordinate: br,
        getVerticalCoordinate: yr,
        getCoordinateString: wr,
        getVerticalCoordinateString: Nr,
        collections: {},
        newObject: Xt,
        newAdditionalObject: $t,
        newObjectDeferred: Kt1,
        newObjectDeferredBegin: Zt1,
        getFilters: ne,
        putStream: ie,
        events: Tt1,
        scaleFactor: _$_t,
        pageSize: {
            getWidth: function getWidth() {
                return qr($1);
            },
            setWidth: function setWidth(t) {
                Dr($1, t);
            },
            getHeight: function getHeight() {
                return Rr($1);
            },
            setHeight: function setHeight(t) {
                Tr($1, t);
            }
        },
        encryptionOptions: m1,
        encryption: Ye,
        getEncryptor: Je,
        output: Ve,
        getNumberOfPages: Ee,
        pages: ot1,
        out: lt1,
        f2: R,
        f3: T,
        getPageInfo: Xe,
        getPageInfoByObjId: Ke,
        getCurrentPageInfo: Ze,
        getPDFVersion: N,
        Point: Cr,
        Rectangle: jr,
        Matrix: Vt1,
        hasHotfix: Ge
    }, Object.defineProperty(_$y1.internal.pageSize, "width", {
        get: function get() {
            return qr($1);
        },
        set: function set(t) {
            Dr($1, t);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(_$y1.internal.pageSize, "height", {
        get: function get() {
            return Rr($1);
        },
        set: function set(t) {
            Tr($1, t);
        },
        enumerable: !0,
        configurable: !0
    }), ke.call(_$y1, pt1), St1 = "F1", Oe(s4, _$i1), Tt1.publish("initialized"), _$y1;
}
I.prototype.lsbFirstWord = function(t) {
    return String.fromCharCode(t >> 0 & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255);
}, I.prototype.toHexString = function(t12) {
    return t12.split("").map(function(t) {
        return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
    }).join("");
}, I.prototype.hexToBytes = function(t) {
    for(var e = [], r = 0; r < t.length; r += 2)e.push(String.fromCharCode(parseInt(t.substr(r, 2), 16)));
    return e.join("");
}, I.prototype.processOwnerPassword = function(t, e) {
    return P1(x11(e).substr(0, 5), t);
}, I.prototype.encryptor = function(t13, e) {
    var r = x11(this.encryptionKey + String.fromCharCode(255 & t13, t13 >> 8 & 255, t13 >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
    return function(t) {
        return P1(r, t);
    };
}, j.prototype.equals = function(e) {
    var r, n62 = "id,objectNumber,equals";
    if (!e || _typeofDefault.default(e) !== _typeofDefault.default(this)) return !1;
    var _$i = 0;
    for(r in this)if (!(n62.indexOf(r) >= 0)) {
        if (this.hasOwnProperty(r) && !e.hasOwnProperty(r)) return !1;
        if (this[r] !== e[r]) return !1;
        _$i++;
    }
    for(r in e)e.hasOwnProperty(r) && n62.indexOf(r) < 0 && _$i--;
    return 0 === _$i;
}, E.API = {
    events: []
}, E.version = "2.5.1";
var q1 = E.API, D1 = 1, R1 = function R1(t) {
    return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, T1 = function T1(t) {
    return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, U1 = function U1(t) {
    return t.toFixed(2);
}, z1 = function z1(t) {
    return t.toFixed(5);
};
q1.__acroform__ = {};
var H2 = function H2(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
}, W = function W(t) {
    return t * D1;
}, V = function V(t) {
    var e = new ut1, r = At1.internal.getHeight(t) || 0, n63 = At1.internal.getWidth(t) || 0;
    return e.BBox = [
        0,
        0,
        Number(U1(n63)),
        Number(U1(r))
    ], e;
}, G1 = q1.__acroform__.setBit = function G1(t, e) {
    if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
    return t |= 1 << e;
}, Y1 = q1.__acroform__.clearBit = function Y1(t, e) {
    if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
    return t &= ~(1 << e);
}, J1 = q1.__acroform__.getBit = function J1(t, e) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
    return 0 == (t & 1 << e) ? 0 : 1;
}, X1 = q1.__acroform__.getBitForPdf = function X1(t, e) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
    return J1(t, e - 1);
}, K1 = q1.__acroform__.setBitForPdf = function K1(t, e) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
    return G1(t, e - 1);
}, Z1 = q1.__acroform__.clearBitForPdf = function Z1(t, e) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
    return Y1(t, e - 1);
}, $ = q1.__acroform__.calculateCoordinates = function $(t, e) {
    var r = e.internal.getHorizontalCoordinate, n64 = e.internal.getVerticalCoordinate, _$i = t[0], a36 = t[1], o28 = t[2], s = t[3], c14 = {};
    return c14.lowerLeft_X = r(_$i) || 0, c14.lowerLeft_Y = n64(a36 + s) || 0, c14.upperRight_X = r(_$i + o28) || 0, c14.upperRight_Y = n64(a36) || 0, [
        Number(U1(c14.lowerLeft_X)),
        Number(U1(c14.lowerLeft_Y)),
        Number(U1(c14.upperRight_X)),
        Number(U1(c14.upperRight_Y))
    ];
}, Q = function Q(t) {
    if (t.appearanceStreamContent) return t.appearanceStreamContent;
    if (t.V || t.DV) {
        var e = [], r = t._V || t.DV, n65 = tt1(t, r), _$i = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
        e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(t.scope.__private__.encodeColorString(t.color)), e.push("/" + _$i + " " + U1(n65.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(n65.text), e.push("ET"), e.push("Q"), e.push("EMC");
        var a37 = V(t);
        return a37.scope = t.scope, a37.stream = e.join("\n"), a37;
    }
}, tt1 = function tt1(t14, e7) {
    var r5 = 0 === t14.fontSize ? t14.maxFontSize : t14.fontSize, n66 = {
        text: "",
        fontSize: ""
    }, _$i = (e7 = ")" == (e7 = "(" == e7.substr(0, 1) ? e7.substr(1) : e7).substr(e7.length - 1) ? e7.substr(0, e7.length - 1) : e7).split(" ");
    _$i = t14.multiline ? _$i.map(function(t) {
        return t.split("\n");
    }) : _$i.map(function(t) {
        return [
            t
        ];
    });
    var a38 = r5, o29 = At1.internal.getHeight(t14) || 0;
    o29 = o29 < 0 ? -o29 : o29;
    var s = At1.internal.getWidth(t14) || 0;
    s = s < 0 ? -s : s;
    var c = function c(e, r, n67) {
        if (e + 1 < _$i.length) {
            var a39 = r + " " + _$i[e + 1][0];
            return et(a39, t14, n67).width <= s - 4;
        }
        return !1;
    };
    a38++;
    t: for(; a38 > 0;){
        e7 = "", a38--;
        var u12, h9, l8 = et("3", t14, a38).height, f8 = t14.multiline ? o29 - a38 : (o29 - l8) / 2, d8 = f8 += 2, p7 = 0, g5 = 0, m4 = 0;
        if (a38 <= 0) {
            e7 = "(...) Tj\n", e7 += "% Width of Text: " + et(e7, t14, a38 = 12).width + ", FieldWidth:" + s + "\n";
            break;
        }
        for(var v4 = "", b2 = 0, _$y = 0; _$y < _$i.length; _$y++)if (_$i.hasOwnProperty(_$y)) {
            var w3 = !1;
            if (1 !== _$i[_$y].length && m4 !== _$i[_$y].length - 1) {
                if ((l8 + 2) * (b2 + 2) + 2 > o29) continue t;
                v4 += _$i[_$y][m4], w3 = !0, g5 = _$y, _$y--;
            } else {
                v4 = " " == (v4 += _$i[_$y][m4] + " ").substr(v4.length - 1) ? v4.substr(0, v4.length - 1) : v4;
                var N = parseInt(_$y), L = c(N, v4, a38), A = _$y >= _$i.length - 1;
                if (L && !A) {
                    v4 += " ", m4 = 0;
                    continue;
                }
                if (L || A) {
                    if (A) g5 = N;
                    else if (t14.multiline && (l8 + 2) * (b2 + 2) + 2 > o29) continue t;
                } else {
                    if (!t14.multiline) continue t;
                    if ((l8 + 2) * (b2 + 2) + 2 > o29) continue t;
                    g5 = N;
                }
            }
            for(var x2 = "", S2 = p7; S2 <= g5; S2++){
                var _ = _$i[S2];
                if (t14.multiline) {
                    if (S2 === g5) {
                        x2 += _[m4] + " ", m4 = (m4 + 1) % _.length;
                        continue;
                    }
                    if (S2 === p7) {
                        x2 += _[_.length - 1] + " ";
                        continue;
                    }
                }
                x2 += _[0] + " ";
            }
            switch(x2 = " " == x2.substr(x2.length - 1) ? x2.substr(0, x2.length - 1) : x2, h9 = et(x2, t14, a38).width, t14.textAlign){
                case "right":
                    u12 = s - h9 - 2;
                    break;
                case "center":
                    u12 = (s - h9) / 2;
                    break;
                case "left":
                default:
                    u12 = 2;
            }
            e7 += U1(u12) + " " + U1(d8) + " Td\n", e7 += "(" + R1(x2) + ") Tj\n", e7 += -U1(u12) + " 0 Td\n", d8 = -(a38 + 2), h9 = 0, p7 = w3 ? g5 : g5 + 1, b2++, v4 = "";
        }
        break;
    }
    return n66.text = e7, n66.fontSize = a38, n66;
}, et = function et(t, e, r) {
    var n68 = e.scope.internal.getFont(e.fontName, e.fontStyle), _$i = e.scope.getStringUnitWidth(t, {
        font: n68,
        fontSize: parseFloat(r),
        charSpace: 0
    }) * parseFloat(r);
    return {
        height: e.scope.getStringUnitWidth("3", {
            font: n68,
            fontSize: parseFloat(r),
            charSpace: 0
        }) * parseFloat(r) * 1.5,
        width: _$i
    };
}, rt3 = {
    fields: [],
    xForms: [],
    acroFormDictionaryRoot: null,
    printedOut: !1,
    internal: null,
    isInitialized: !1
}, nt = function nt(t15, e) {
    var r = {
        type: "reference",
        object: t15
    };
    void 0 === e.internal.getPageInfo(t15.page).pageContext.annotations.find(function(t) {
        return t.type === r.type && t.object === r.object;
    }) && e.internal.getPageInfo(t15.page).pageContext.annotations.push(r);
}, it = function it(e, r) {
    for(var n69 in e)if (e.hasOwnProperty(n69)) {
        var _$i = n69, a40 = e[n69];
        r.internal.newObjectDeferredBegin(a40.objId, !0), "object" === _typeofDefault.default(a40) && "function" == typeof a40.putStream && a40.putStream(), delete e[_$i];
    }
}, at = function at(e8, r6) {
    if (r6.scope = e8, void 0 !== e8.internal && (void 0 === e8.internal.acroformPlugin || !1 === e8.internal.acroformPlugin.isInitialized)) {
        if (lt2.FieldNum = 0, e8.internal.acroformPlugin = JSON.parse(JSON.stringify(rt3)), e8.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
        D1 = e8.internal.scaleFactor, e8.internal.acroformPlugin.acroFormDictionaryRoot = new ht1, e8.internal.acroformPlugin.acroFormDictionaryRoot.scope = e8, e8.internal.acroformPlugin.acroFormDictionaryRoot._eventID = e8.internal.events.subscribe("postPutResources", function() {
            !function(t) {
                t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = !0;
            }(e8);
        }), e8.internal.events.subscribe("buildDocument", function() {
            !function(t) {
                t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                var _$e = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                for(var _$r in _$e)if (_$e.hasOwnProperty(_$r)) {
                    var n70 = _$e[_$r];
                    n70.objId = void 0, n70.hasAnnotation && nt(n70, t);
                }
            }(e8);
        }), e8.internal.events.subscribe("putCatalog", function() {
            !function(t) {
                if (void 0 === t.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
                t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
            }(e8);
        }), e8.internal.events.subscribe("postPutPages", function(r7) {
            !function(e, r) {
                var n71 = !e;
                for(var _$i in e || (r.internal.newObjectDeferredBegin(r.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), r.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), e = e || r.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if (e.hasOwnProperty(_$i)) {
                    var a41 = e[_$i], o30 = [], s = a41.Rect;
                    if (a41.Rect && (a41.Rect = $(a41.Rect, r)), r.internal.newObjectDeferredBegin(a41.objId, !0), a41.DA = At1.createDefaultAppearanceStream(a41), "object" === _typeofDefault.default(a41) && "function" == typeof a41.getKeyValueListForStream && (o30 = a41.getKeyValueListForStream()), a41.Rect = s, a41.hasAppearanceStream && !a41.appearanceStreamContent) {
                        var c = Q(a41);
                        o30.push({
                            key: "AP",
                            value: "<</N " + c + ">>"
                        }), r.internal.acroformPlugin.xForms.push(c);
                    }
                    if (a41.appearanceStreamContent) {
                        var u13 = "";
                        for(var h10 in a41.appearanceStreamContent)if (a41.appearanceStreamContent.hasOwnProperty(h10)) {
                            var l9 = a41.appearanceStreamContent[h10];
                            if (u13 += "/" + h10 + " ", u13 += "<<", Object.keys(l9).length >= 1 || Array.isArray(l9)) {
                                for(var _$i in l9)if (l9.hasOwnProperty(_$i)) {
                                    var f9 = l9[_$i];
                                    "function" == typeof f9 && (f9 = f9.call(r, a41)), u13 += "/" + _$i + " " + f9 + " ", r.internal.acroformPlugin.xForms.indexOf(f9) >= 0 || r.internal.acroformPlugin.xForms.push(f9);
                                }
                            } else "function" == typeof (f9 = l9) && (f9 = f9.call(r, a41)), u13 += "/" + _$i + " " + f9, r.internal.acroformPlugin.xForms.indexOf(f9) >= 0 || r.internal.acroformPlugin.xForms.push(f9);
                            u13 += ">>";
                        }
                        o30.push({
                            key: "AP",
                            value: "<<\n" + u13 + ">>"
                        });
                    }
                    r.internal.putStream({
                        additionalKeyValues: o30,
                        objectId: a41.objId
                    }), r.internal.out("endobj");
                }
                n71 && it(r.internal.acroformPlugin.xForms, r);
            }(r7, e8);
        }), e8.internal.acroformPlugin.isInitialized = !0;
    }
}, ot = q1.__acroform__.arrayToPdfArray = function ot(e, r, n72) {
    var _$i = function _$i(t) {
        return t;
    };
    if (Array.isArray(e)) {
        for(var a42 = "[", o31 = 0; o31 < e.length; o31++)switch(0 !== o31 && (a42 += " "), _typeofDefault.default(e[o31])){
            case "boolean":
            case "number":
            case "object":
                a42 += e[o31].toString();
                break;
            case "string":
                "/" !== e[o31].substr(0, 1) ? (void 0 !== r && n72 && (_$i = n72.internal.getEncryptor(r)), a42 += "(" + R1(_$i(e[o31].toString())) + ")") : a42 += e[o31].toString();
        }
        return a42 += "]";
    }
    throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
};
var st = function st(t16, e, r) {
    var n = function n(t) {
        return t;
    };
    return void 0 !== e && r && (n = r.internal.getEncryptor(e)), (t16 = t16 || "").toString(), t16 = "(" + R1(n(t16)) + ")";
}, ct = function ct() {
    this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
        get: function get() {
            if (void 0 === this._objId) {
                if (void 0 === this.scope) return;
                this._objId = this.scope.internal.newObjectDeferred();
            }
            return this._objId;
        },
        set: function set(t) {
            this._objId = t;
        }
    }), Object.defineProperty(this, "scope", {
        value: this._scope,
        writable: !0
    });
};
ct.prototype.toString = function() {
    return this.objId + " 0 R";
}, ct.prototype.putStream = function() {
    var _$t = this.getKeyValueListForStream();
    this.scope.internal.putStream({
        data: this.stream,
        additionalKeyValues: _$t,
        objectId: this.objId
    }), this.scope.internal.out("endobj");
}, ct.prototype.getKeyValueListForStream = function() {
    var _$t = [], e = Object.getOwnPropertyNames(this).filter(function(t) {
        return "content" != t && "appearanceStreamContent" != t && "scope" != t && "objId" != t && "_" != t.substring(0, 1);
    });
    for(var r in e)if (!1 === Object.getOwnPropertyDescriptor(this, e[r]).configurable) {
        var n = e[r], _$i = this[n];
        _$i && (Array.isArray(_$i) ? _$t.push({
            key: n,
            value: ot(_$i, this.objId, this.scope)
        }) : _$i instanceof ct ? (_$i.scope = this.scope, _$t.push({
            key: n,
            value: _$i.objId + " 0 R"
        })) : "function" != typeof _$i && _$t.push({
            key: n,
            value: _$i
        }));
    }
    return _$t;
};
var ut1 = function ut1() {
    ct.call(this), Object.defineProperty(this, "Type", {
        value: "/XObject",
        configurable: !1,
        writable: !0
    }), Object.defineProperty(this, "Subtype", {
        value: "/Form",
        configurable: !1,
        writable: !0
    }), Object.defineProperty(this, "FormType", {
        value: 1,
        configurable: !1,
        writable: !0
    });
    var _$t, e9 = [];
    Object.defineProperty(this, "BBox", {
        configurable: !1,
        get: function get() {
            return e9;
        },
        set: function set(t) {
            e9 = t;
        }
    }), Object.defineProperty(this, "Resources", {
        value: "2 0 R",
        configurable: !1,
        writable: !0
    }), Object.defineProperty(this, "stream", {
        enumerable: !1,
        configurable: !0,
        set: function set(e) {
            _$t = e.trim();
        },
        get: function get() {
            return _$t || null;
        }
    });
};
H2(ut1, ct);
var ht1 = function ht1() {
    ct.call(this);
    var _$t, e10 = [];
    Object.defineProperty(this, "Kids", {
        enumerable: !1,
        configurable: !0,
        get: function get() {
            return e10.length > 0 ? e10 : void 0;
        }
    }), Object.defineProperty(this, "Fields", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            return e10;
        }
    }), Object.defineProperty(this, "DA", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            if (_$t) {
                var e = function e(t) {
                    return t;
                };
                return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + R1(e(_$t)) + ")";
            }
        },
        set: function set(e) {
            _$t = e;
        }
    });
};
H2(ht1, ct);
var lt2 = function t17() {
    ct.call(this);
    var e11 = 4;
    Object.defineProperty(this, "F", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            return e11;
        },
        set: function set(t) {
            if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute F supplied.');
            e11 = t;
        }
    }), Object.defineProperty(this, "showWhenPrinted", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(e11, 3));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.F = K1(e11, 3) : this.F = Z1(e11, 3);
        }
    });
    var r = 0;
    Object.defineProperty(this, "Ff", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            return r;
        },
        set: function set(t) {
            if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
            r = t;
        }
    });
    var n = [];
    Object.defineProperty(this, "Rect", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            if (0 !== n.length) return n;
        },
        set: function set(t) {
            n = void 0 !== t ? t : [];
        }
    }), Object.defineProperty(this, "x", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return !n || isNaN(n[0]) ? 0 : n[0];
        },
        set: function set(t) {
            n[0] = t;
        }
    }), Object.defineProperty(this, "y", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return !n || isNaN(n[1]) ? 0 : n[1];
        },
        set: function set(t) {
            n[1] = t;
        }
    }), Object.defineProperty(this, "width", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return !n || isNaN(n[2]) ? 0 : n[2];
        },
        set: function set(t) {
            n[2] = t;
        }
    }), Object.defineProperty(this, "height", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return !n || isNaN(n[3]) ? 0 : n[3];
        },
        set: function set(t) {
            n[3] = t;
        }
    });
    var _$i = "";
    Object.defineProperty(this, "FT", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            return _$i;
        },
        set: function set(t) {
            switch(t){
                case "/Btn":
                case "/Tx":
                case "/Ch":
                case "/Sig":
                    _$i = t;
                    break;
                default:
                    throw new Error('Invalid value "' + t + '" for attribute FT supplied.');
            }
        }
    });
    var a43 = null;
    Object.defineProperty(this, "T", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            if (!a43 || a43.length < 1) {
                if (this instanceof yt) return;
                a43 = "FieldObject" + t17.FieldNum++;
            }
            var e = function e(t) {
                return t;
            };
            return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + R1(e(a43)) + ")";
        },
        set: function set(t) {
            a43 = t.toString();
        }
    }), Object.defineProperty(this, "fieldName", {
        configurable: !0,
        enumerable: !0,
        get: function get() {
            return a43;
        },
        set: function set(t) {
            a43 = t;
        }
    });
    var o32 = "helvetica";
    Object.defineProperty(this, "fontName", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return o32;
        },
        set: function set(t) {
            o32 = t;
        }
    });
    var s = "normal";
    Object.defineProperty(this, "fontStyle", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return s;
        },
        set: function set(t) {
            s = t;
        }
    });
    var c = 0;
    Object.defineProperty(this, "fontSize", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return c;
        },
        set: function set(t) {
            c = t;
        }
    });
    var u14 = void 0;
    Object.defineProperty(this, "maxFontSize", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return void 0 === u14 ? 50 / D1 : u14;
        },
        set: function set(t) {
            u14 = t;
        }
    });
    var h11 = "black";
    Object.defineProperty(this, "color", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return h11;
        },
        set: function set(t) {
            h11 = t;
        }
    });
    var l10 = "/F1 0 Tf 0 g";
    Object.defineProperty(this, "DA", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            if (!(!l10 || this instanceof yt || this instanceof Nt)) return st(l10, this.objId, this.scope);
        },
        set: function set(t) {
            t = t.toString(), l10 = t;
        }
    });
    var f10 = null;
    Object.defineProperty(this, "DV", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            if (f10) return this instanceof mt == !1 ? st(f10, this.objId, this.scope) : f10;
        },
        set: function set(t) {
            t = t.toString(), f10 = this instanceof mt == !1 ? "(" === t.substr(0, 1) ? T1(t.substr(1, t.length - 2)) : T1(t) : t;
        }
    }), Object.defineProperty(this, "defaultValue", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return this instanceof mt == !0 ? T1(f10.substr(1, f10.length - 1)) : f10;
        },
        set: function set(t) {
            t = t.toString(), f10 = this instanceof mt == !0 ? "/" + t : t;
        }
    });
    var d9 = null;
    Object.defineProperty(this, "_V", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            if (d9) return d9;
        },
        set: function set(t) {
            this.V = t;
        }
    }), Object.defineProperty(this, "V", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            if (d9) return this instanceof mt == !1 ? st(d9, this.objId, this.scope) : d9;
        },
        set: function set(t) {
            t = t.toString(), d9 = this instanceof mt == !1 ? "(" === t.substr(0, 1) ? T1(t.substr(1, t.length - 2)) : T1(t) : t;
        }
    }), Object.defineProperty(this, "value", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return this instanceof mt == !0 ? T1(d9.substr(1, d9.length - 1)) : d9;
        },
        set: function set(t) {
            t = t.toString(), d9 = this instanceof mt == !0 ? "/" + t : t;
        }
    }), Object.defineProperty(this, "hasAnnotation", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return this.Rect;
        }
    }), Object.defineProperty(this, "Type", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            return this.hasAnnotation ? "/Annot" : null;
        }
    }), Object.defineProperty(this, "Subtype", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            return this.hasAnnotation ? "/Widget" : null;
        }
    });
    var p8, g6 = !1;
    Object.defineProperty(this, "hasAppearanceStream", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return g6;
        },
        set: function set(t) {
            t = Boolean(t), g6 = t;
        }
    }), Object.defineProperty(this, "page", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            if (p8) return p8;
        },
        set: function set(t) {
            p8 = t;
        }
    }), Object.defineProperty(this, "readOnly", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 1));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 1) : this.Ff = Z1(this.Ff, 1);
        }
    }), Object.defineProperty(this, "required", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 2));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 2) : this.Ff = Z1(this.Ff, 2);
        }
    }), Object.defineProperty(this, "noExport", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 3));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 3) : this.Ff = Z1(this.Ff, 3);
        }
    });
    var m5 = null;
    Object.defineProperty(this, "Q", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            if (null !== m5) return m5;
        },
        set: function set(t) {
            if (-1 === [
                0,
                1,
                2
            ].indexOf(t)) throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
            m5 = t;
        }
    }), Object.defineProperty(this, "textAlign", {
        get: function get() {
            var _$t;
            switch(m5){
                case 0:
                default:
                    _$t = "left";
                    break;
                case 1:
                    _$t = "center";
                    break;
                case 2:
                    _$t = "right";
            }
            return _$t;
        },
        configurable: !0,
        enumerable: !0,
        set: function set(t) {
            switch(t){
                case "right":
                case 2:
                    m5 = 2;
                    break;
                case "center":
                case 1:
                    m5 = 1;
                    break;
                case "left":
                case 0:
                default:
                    m5 = 0;
            }
        }
    });
};
H2(lt2, ct);
var ft2 = function ft2() {
    lt2.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
    var _$t = 0;
    Object.defineProperty(this, "TI", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            return _$t;
        },
        set: function set(e) {
            _$t = e;
        }
    }), Object.defineProperty(this, "topIndex", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return _$t;
        },
        set: function set(e) {
            _$t = e;
        }
    });
    var e12 = [];
    Object.defineProperty(this, "Opt", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            return ot(e12, this.objId, this.scope);
        },
        set: function set(t18) {
            var r8, n74;
            n74 = [], "string" == typeof (r8 = t18) && (n74 = function(t, e, r) {
                r || (r = 1);
                for(var n, _$i = []; n = e.exec(t);)_$i.push(n[r]);
                return _$i;
            }(r8, /\((.*?)\)/g)), e12 = n74;
        }
    }), this.getOptions = function() {
        return e12;
    }, this.setOptions = function(t) {
        e12 = t, this.sort && e12.sort();
    }, this.addOption = function(t) {
        t = (t = t || "").toString(), e12.push(t), this.sort && e12.sort();
    }, this.removeOption = function(t, r) {
        for(r = r || !1, t = (t = t || "").toString(); -1 !== e12.indexOf(t) && (e12.splice(e12.indexOf(t), 1), !1 !== r););
    }, Object.defineProperty(this, "combo", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 18));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 18) : this.Ff = Z1(this.Ff, 18);
        }
    }), Object.defineProperty(this, "edit", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 19));
        },
        set: function set(t) {
            !0 === this.combo && (!0 === Boolean(t) ? this.Ff = K1(this.Ff, 19) : this.Ff = Z1(this.Ff, 19));
        }
    }), Object.defineProperty(this, "sort", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 20));
        },
        set: function set(t) {
            !0 === Boolean(t) ? (this.Ff = K1(this.Ff, 20), e12.sort()) : this.Ff = Z1(this.Ff, 20);
        }
    }), Object.defineProperty(this, "multiSelect", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 22));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 22) : this.Ff = Z1(this.Ff, 22);
        }
    }), Object.defineProperty(this, "doNotSpellCheck", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 23));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 23) : this.Ff = Z1(this.Ff, 23);
        }
    }), Object.defineProperty(this, "commitOnSelChange", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 27));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 27) : this.Ff = Z1(this.Ff, 27);
        }
    }), this.hasAppearanceStream = !1;
};
H2(ft2, lt2);
var dt1 = function dt1() {
    ft2.call(this), this.fontName = "helvetica", this.combo = !1;
};
H2(dt1, ft2);
var pt = function pt() {
    dt1.call(this), this.combo = !0;
};
H2(pt, dt1);
var gt = function gt() {
    pt.call(this), this.edit = !0;
};
H2(gt, pt);
var mt = function mt() {
    lt2.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 15));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 15) : this.Ff = Z1(this.Ff, 15);
        }
    }), Object.defineProperty(this, "radio", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 16));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 16) : this.Ff = Z1(this.Ff, 16);
        }
    }), Object.defineProperty(this, "pushButton", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 17));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 17) : this.Ff = Z1(this.Ff, 17);
        }
    }), Object.defineProperty(this, "radioIsUnison", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 26));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 26) : this.Ff = Z1(this.Ff, 26);
        }
    });
    var e13, r = {};
    Object.defineProperty(this, "MK", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            var _$t = function _$t(t) {
                return t;
            };
            if (this.scope && (_$t = this.scope.internal.getEncryptor(this.objId)), 0 !== Object.keys(r).length) {
                var e, n = [];
                for(e in n.push("<<"), r)n.push("/" + e + " (" + R1(_$t(r[e])) + ")");
                return n.push(">>"), n.join("\n");
            }
        },
        set: function set(e) {
            "object" === _typeofDefault.default(e) && (r = e);
        }
    }), Object.defineProperty(this, "caption", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return r.CA || "";
        },
        set: function set(t) {
            "string" == typeof t && (r.CA = t);
        }
    }), Object.defineProperty(this, "AS", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            return e13;
        },
        set: function set(t) {
            e13 = t;
        }
    }), Object.defineProperty(this, "appearanceState", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return e13.substr(1, e13.length - 1);
        },
        set: function set(t) {
            e13 = "/" + t;
        }
    });
};
H2(mt, lt2);
var vt1 = function vt1() {
    mt.call(this), this.pushButton = !0;
};
H2(vt1, mt);
var bt = function bt() {
    mt.call(this), this.radio = !0, this.pushButton = !1;
    var _$t = [];
    Object.defineProperty(this, "Kids", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            return _$t;
        },
        set: function set(e) {
            _$t = void 0 !== e ? e : [];
        }
    });
};
H2(bt, mt);
var yt = function yt() {
    var e14, r9;
    lt2.call(this), Object.defineProperty(this, "Parent", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            return e14;
        },
        set: function set(t) {
            e14 = t;
        }
    }), Object.defineProperty(this, "optionName", {
        enumerable: !1,
        configurable: !0,
        get: function get() {
            return r9;
        },
        set: function set(t) {
            r9 = t;
        }
    });
    var n, _$i = {};
    Object.defineProperty(this, "MK", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            var _$t = function _$t(t) {
                return t;
            };
            this.scope && (_$t = this.scope.internal.getEncryptor(this.objId));
            var e, r = [];
            for(e in r.push("<<"), _$i)r.push("/" + e + " (" + R1(_$t(_$i[e])) + ")");
            return r.push(">>"), r.join("\n");
        },
        set: function set(e) {
            "object" === _typeofDefault.default(e) && (_$i = e);
        }
    }), Object.defineProperty(this, "caption", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return _$i.CA || "";
        },
        set: function set(t) {
            "string" == typeof t && (_$i.CA = t);
        }
    }), Object.defineProperty(this, "AS", {
        enumerable: !1,
        configurable: !1,
        get: function get() {
            return n;
        },
        set: function set(t) {
            n = t;
        }
    }), Object.defineProperty(this, "appearanceState", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return n.substr(1, n.length - 1);
        },
        set: function set(t) {
            n = "/" + t;
        }
    }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = At1.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
H2(yt, lt2), bt.prototype.setAppearance = function(t) {
    if (!("createAppearanceStream" in t) || !("getCA" in t)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
    for(var e in this.Kids)if (this.Kids.hasOwnProperty(e)) {
        var r = this.Kids[e];
        r.appearanceStreamContent = t.createAppearanceStream(r.optionName), r.caption = t.getCA();
    }
}, bt.prototype.createOption = function(t) {
    var e = new yt;
    return e.Parent = this, e.optionName = t, this.Kids.push(e), xt.call(this.scope, e), e;
};
var wt1 = function wt1() {
    mt.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = At1.CheckBox.createAppearanceStream();
};
H2(wt1, mt);
var Nt = function Nt() {
    lt2.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 13));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 13) : this.Ff = Z1(this.Ff, 13);
        }
    }), Object.defineProperty(this, "fileSelect", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 21));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 21) : this.Ff = Z1(this.Ff, 21);
        }
    }), Object.defineProperty(this, "doNotSpellCheck", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 23));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 23) : this.Ff = Z1(this.Ff, 23);
        }
    }), Object.defineProperty(this, "doNotScroll", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 24));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 24) : this.Ff = Z1(this.Ff, 24);
        }
    }), Object.defineProperty(this, "comb", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 25));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 25) : this.Ff = Z1(this.Ff, 25);
        }
    }), Object.defineProperty(this, "richText", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 26));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 26) : this.Ff = Z1(this.Ff, 26);
        }
    });
    var _$t = null;
    Object.defineProperty(this, "MaxLen", {
        enumerable: !0,
        configurable: !1,
        get: function get() {
            return _$t;
        },
        set: function set(e) {
            _$t = e;
        }
    }), Object.defineProperty(this, "maxLength", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return _$t;
        },
        set: function set(e) {
            Number.isInteger(e) && (_$t = e);
        }
    }), Object.defineProperty(this, "hasAppearanceStream", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return this.V || this.DV;
        }
    });
};
H2(Nt, lt2);
var Lt1 = function Lt1() {
    Nt.call(this), Object.defineProperty(this, "password", {
        enumerable: !0,
        configurable: !0,
        get: function get() {
            return Boolean(X1(this.Ff, 14));
        },
        set: function set(t) {
            !0 === Boolean(t) ? this.Ff = K1(this.Ff, 14) : this.Ff = Z1(this.Ff, 14);
        }
    }), this.password = !0;
};
H2(Lt1, Nt);
var At1 = {
    CheckBox: {
        createAppearanceStream: function createAppearanceStream() {
            return {
                N: {
                    On: At1.CheckBox.YesNormal
                },
                D: {
                    On: At1.CheckBox.YesPushDown,
                    Off: At1.CheckBox.OffPushDown
                }
            };
        },
        YesPushDown: function YesPushDown(t) {
            var e = V(t);
            e.scope = t.scope;
            var r = [], n = t.scope.internal.getFont(t.fontName, t.fontStyle).id, _$i = t.scope.__private__.encodeColorString(t.color), a44 = tt1(t, t.caption);
            return r.push("0.749023 g"), r.push("0 0 " + U1(At1.internal.getWidth(t)) + " " + U1(At1.internal.getHeight(t)) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + n + " " + U1(a44.fontSize) + " Tf " + _$i), r.push("BT"), r.push(a44.text), r.push("ET"), r.push("Q"), r.push("EMC"), e.stream = r.join("\n"), e;
        },
        YesNormal: function YesNormal(t) {
            var e = V(t);
            e.scope = t.scope;
            var r = t.scope.internal.getFont(t.fontName, t.fontStyle).id, n = t.scope.__private__.encodeColorString(t.color), _$i = [], a45 = At1.internal.getHeight(t), o33 = At1.internal.getWidth(t), s = tt1(t, t.caption);
            return _$i.push("1 g"), _$i.push("0 0 " + U1(o33) + " " + U1(a45) + " re"), _$i.push("f"), _$i.push("q"), _$i.push("0 0 1 rg"), _$i.push("0 0 " + U1(o33 - 1) + " " + U1(a45 - 1) + " re"), _$i.push("W"), _$i.push("n"), _$i.push("0 g"), _$i.push("BT"), _$i.push("/" + r + " " + U1(s.fontSize) + " Tf " + n), _$i.push(s.text), _$i.push("ET"), _$i.push("Q"), e.stream = _$i.join("\n"), e;
        },
        OffPushDown: function OffPushDown(t) {
            var e = V(t);
            e.scope = t.scope;
            var r = [];
            return r.push("0.749023 g"), r.push("0 0 " + U1(At1.internal.getWidth(t)) + " " + U1(At1.internal.getHeight(t)) + " re"), r.push("f"), e.stream = r.join("\n"), e;
        }
    },
    RadioButton: {
        Circle: {
            createAppearanceStream: function createAppearanceStream(t) {
                var e = {
                    D: {
                        Off: At1.RadioButton.Circle.OffPushDown
                    },
                    N: {}
                };
                return e.N[t] = At1.RadioButton.Circle.YesNormal, e.D[t] = At1.RadioButton.Circle.YesPushDown, e;
            },
            getCA: function getCA() {
                return "l";
            },
            YesNormal: function YesNormal(t) {
                var e = V(t);
                e.scope = t.scope;
                var r = [], n = At1.internal.getWidth(t) <= At1.internal.getHeight(t) ? At1.internal.getWidth(t) / 4 : At1.internal.getHeight(t) / 4;
                n = Number((0.9 * n).toFixed(5));
                var _$i = At1.internal.Bezier_C, a46 = Number((n * _$i).toFixed(5));
                return r.push("q"), r.push("1 0 0 1 " + z1(At1.internal.getWidth(t) / 2) + " " + z1(At1.internal.getHeight(t) / 2) + " cm"), r.push(n + " 0 m"), r.push(n + " " + a46 + " " + a46 + " " + n + " 0 " + n + " c"), r.push("-" + a46 + " " + n + " -" + n + " " + a46 + " -" + n + " 0 c"), r.push("-" + n + " -" + a46 + " -" + a46 + " -" + n + " 0 -" + n + " c"), r.push(a46 + " -" + n + " " + n + " -" + a46 + " " + n + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join("\n"), e;
            },
            YesPushDown: function YesPushDown(t) {
                var e = V(t);
                e.scope = t.scope;
                var r = [], n = At1.internal.getWidth(t) <= At1.internal.getHeight(t) ? At1.internal.getWidth(t) / 4 : At1.internal.getHeight(t) / 4;
                n = Number((0.9 * n).toFixed(5));
                var _$i = Number((2 * n).toFixed(5)), a47 = Number((_$i * At1.internal.Bezier_C).toFixed(5)), o34 = Number((n * At1.internal.Bezier_C).toFixed(5));
                return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + z1(At1.internal.getWidth(t) / 2) + " " + z1(At1.internal.getHeight(t) / 2) + " cm"), r.push(_$i + " 0 m"), r.push(_$i + " " + a47 + " " + a47 + " " + _$i + " 0 " + _$i + " c"), r.push("-" + a47 + " " + _$i + " -" + _$i + " " + a47 + " -" + _$i + " 0 c"), r.push("-" + _$i + " -" + a47 + " -" + a47 + " -" + _$i + " 0 -" + _$i + " c"), r.push(a47 + " -" + _$i + " " + _$i + " -" + a47 + " " + _$i + " 0 c"), r.push("f"), r.push("Q"), r.push("0 g"), r.push("q"), r.push("1 0 0 1 " + z1(At1.internal.getWidth(t) / 2) + " " + z1(At1.internal.getHeight(t) / 2) + " cm"), r.push(n + " 0 m"), r.push(n + " " + o34 + " " + o34 + " " + n + " 0 " + n + " c"), r.push("-" + o34 + " " + n + " -" + n + " " + o34 + " -" + n + " 0 c"), r.push("-" + n + " -" + o34 + " -" + o34 + " -" + n + " 0 -" + n + " c"), r.push(o34 + " -" + n + " " + n + " -" + o34 + " " + n + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join("\n"), e;
            },
            OffPushDown: function OffPushDown(t) {
                var e = V(t);
                e.scope = t.scope;
                var r = [], n = At1.internal.getWidth(t) <= At1.internal.getHeight(t) ? At1.internal.getWidth(t) / 4 : At1.internal.getHeight(t) / 4;
                n = Number((0.9 * n).toFixed(5));
                var _$i = Number((2 * n).toFixed(5)), a48 = Number((_$i * At1.internal.Bezier_C).toFixed(5));
                return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + z1(At1.internal.getWidth(t) / 2) + " " + z1(At1.internal.getHeight(t) / 2) + " cm"), r.push(_$i + " 0 m"), r.push(_$i + " " + a48 + " " + a48 + " " + _$i + " 0 " + _$i + " c"), r.push("-" + a48 + " " + _$i + " -" + _$i + " " + a48 + " -" + _$i + " 0 c"), r.push("-" + _$i + " -" + a48 + " -" + a48 + " -" + _$i + " 0 -" + _$i + " c"), r.push(a48 + " -" + _$i + " " + _$i + " -" + a48 + " " + _$i + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join("\n"), e;
            }
        },
        Cross: {
            createAppearanceStream: function createAppearanceStream(t) {
                var e = {
                    D: {
                        Off: At1.RadioButton.Cross.OffPushDown
                    },
                    N: {}
                };
                return e.N[t] = At1.RadioButton.Cross.YesNormal, e.D[t] = At1.RadioButton.Cross.YesPushDown, e;
            },
            getCA: function getCA() {
                return "8";
            },
            YesNormal: function YesNormal(t) {
                var e = V(t);
                e.scope = t.scope;
                var r = [], n = At1.internal.calculateCross(t);
                return r.push("q"), r.push("1 1 " + U1(At1.internal.getWidth(t) - 2) + " " + U1(At1.internal.getHeight(t) - 2) + " re"), r.push("W"), r.push("n"), r.push(U1(n.x1.x) + " " + U1(n.x1.y) + " m"), r.push(U1(n.x2.x) + " " + U1(n.x2.y) + " l"), r.push(U1(n.x4.x) + " " + U1(n.x4.y) + " m"), r.push(U1(n.x3.x) + " " + U1(n.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join("\n"), e;
            },
            YesPushDown: function YesPushDown(t) {
                var e = V(t);
                e.scope = t.scope;
                var r = At1.internal.calculateCross(t), n = [];
                return n.push("0.749023 g"), n.push("0 0 " + U1(At1.internal.getWidth(t)) + " " + U1(At1.internal.getHeight(t)) + " re"), n.push("f"), n.push("q"), n.push("1 1 " + U1(At1.internal.getWidth(t) - 2) + " " + U1(At1.internal.getHeight(t) - 2) + " re"), n.push("W"), n.push("n"), n.push(U1(r.x1.x) + " " + U1(r.x1.y) + " m"), n.push(U1(r.x2.x) + " " + U1(r.x2.y) + " l"), n.push(U1(r.x4.x) + " " + U1(r.x4.y) + " m"), n.push(U1(r.x3.x) + " " + U1(r.x3.y) + " l"), n.push("s"), n.push("Q"), e.stream = n.join("\n"), e;
            },
            OffPushDown: function OffPushDown(t) {
                var e = V(t);
                e.scope = t.scope;
                var r = [];
                return r.push("0.749023 g"), r.push("0 0 " + U1(At1.internal.getWidth(t)) + " " + U1(At1.internal.getHeight(t)) + " re"), r.push("f"), e.stream = r.join("\n"), e;
            }
        }
    },
    createDefaultAppearanceStream: function createDefaultAppearanceStream(t) {
        var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id, r = t.scope.__private__.encodeColorString(t.color);
        return "/" + e + " " + t.fontSize + " Tf " + r;
    }
};
At1.internal = {
    Bezier_C: 0.551915024494,
    calculateCross: function calculateCross(t) {
        var e = At1.internal.getWidth(t), r = At1.internal.getHeight(t), n = Math.min(e, r);
        return {
            x1: {
                x: (e - n) / 2,
                y: (r - n) / 2 + n
            },
            x2: {
                x: (e - n) / 2 + n,
                y: (r - n) / 2
            },
            x3: {
                x: (e - n) / 2,
                y: (r - n) / 2
            },
            x4: {
                x: (e - n) / 2 + n,
                y: (r - n) / 2 + n
            }
        };
    }
}, At1.internal.getWidth = function(e) {
    var r = 0;
    return "object" === _typeofDefault.default(e) && (r = W(e.Rect[2])), r;
}, At1.internal.getHeight = function(e) {
    var r = 0;
    return "object" === _typeofDefault.default(e) && (r = W(e.Rect[3])), r;
};
var xt = q1.addField = function xt(t) {
    if (at(this, t), !(t instanceof lt2)) throw new Error("Invalid argument passed to jsPDF.addField.");
    var e;
    return (e = t).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), t.page = t.scope.internal.getCurrentPageInfo().pageNumber, this;
};
q1.AcroFormChoiceField = ft2, q1.AcroFormListBox = dt1, q1.AcroFormComboBox = pt, q1.AcroFormEditBox = gt, q1.AcroFormButton = mt, q1.AcroFormPushButton = vt1, q1.AcroFormRadioButton = bt, q1.AcroFormCheckBox = wt1, q1.AcroFormTextField = Nt, q1.AcroFormPasswordField = Lt1, q1.AcroFormAppearance = At1, q1.AcroForm = {
    ChoiceField: ft2,
    ListBox: dt1,
    ComboBox: pt,
    EditBox: gt,
    Button: mt,
    PushButton: vt1,
    RadioButton: bt,
    CheckBox: wt1,
    TextField: Nt,
    PasswordField: Lt1,
    Appearance: At1
}, E.AcroForm = {
    ChoiceField: ft2,
    ListBox: dt1,
    ComboBox: pt,
    EditBox: gt,
    Button: mt,
    PushButton: vt1,
    RadioButton: bt,
    CheckBox: wt1,
    TextField: Nt,
    PasswordField: Lt1,
    Appearance: At1
};
var St2 = E.AcroForm;
function _t(t19) {
    return t19.reduce(function(t, e, r) {
        return t[e] = r, t;
    }, {});
}
!function(e15) {
    e15.__addimage__ = {};
    var r10 = "UNKNOWN", n75 = {
        PNG: [
            [
                137,
                80,
                78,
                71
            ]
        ],
        TIFF: [
            [
                77,
                77,
                0,
                42
            ],
            [
                73,
                73,
                42,
                0
            ]
        ],
        JPEG: [
            [
                255,
                216,
                255,
                224,
                void 0,
                void 0,
                74,
                70,
                73,
                70,
                0
            ],
            [
                255,
                216,
                255,
                225,
                void 0,
                void 0,
                69,
                120,
                105,
                102,
                0,
                0
            ],
            [
                255,
                216,
                255,
                219
            ],
            [
                255,
                216,
                255,
                238
            ]
        ],
        JPEG2000: [
            [
                0,
                0,
                0,
                12,
                106,
                80,
                32,
                32
            ]
        ],
        GIF87a: [
            [
                71,
                73,
                70,
                56,
                55,
                97
            ]
        ],
        GIF89a: [
            [
                71,
                73,
                70,
                56,
                57,
                97
            ]
        ],
        WEBP: [
            [
                82,
                73,
                70,
                70,
                void 0,
                void 0,
                void 0,
                void 0,
                87,
                69,
                66,
                80
            ]
        ],
        BMP: [
            [
                66,
                77
            ],
            [
                66,
                65
            ],
            [
                67,
                73
            ],
            [
                67,
                80
            ],
            [
                73,
                67
            ],
            [
                80,
                84
            ]
        ]
    }, _$i = e15.__addimage__.getImageFileTypeByImageData = function _$i(t, e) {
        var _$i2, a50, o36, s, c, u15 = r10;
        if ("RGBA" === (e = e || r10) || void 0 !== t.data && t.data instanceof Uint8ClampedArray && "height" in t && "width" in t) return "RGBA";
        if (x3(t)) for(c in n75)for(o36 = n75[c], _$i2 = 0; _$i2 < o36.length; _$i2 += 1){
            for(s = !0, a50 = 0; a50 < o36[_$i2].length; a50 += 1)if (void 0 !== o36[_$i2][a50] && o36[_$i2][a50] !== t[a50]) {
                s = !1;
                break;
            }
            if (!0 === s) {
                u15 = c;
                break;
            }
        }
        else for(c in n75)for(o36 = n75[c], _$i2 = 0; _$i2 < o36.length; _$i2 += 1){
            for(s = !0, a50 = 0; a50 < o36[_$i2].length; a50 += 1)if (void 0 !== o36[_$i2][a50] && o36[_$i2][a50] !== t.charCodeAt(a50)) {
                s = !1;
                break;
            }
            if (!0 === s) {
                u15 = c;
                break;
            }
        }
        return u15 === r10 && e !== r10 && (u15 = e), u15;
    }, a49 = function t(e) {
        for(var r = this.internal.write, n = this.internal.putStream, _$i = (0, this.internal.getFilters)(); -1 !== _$i.indexOf("FlateEncode");)_$i.splice(_$i.indexOf("FlateEncode"), 1);
        e.objectId = this.internal.newObject();
        var a51 = [];
        if (a51.push({
            key: "Type",
            value: "/XObject"
        }), a51.push({
            key: "Subtype",
            value: "/Image"
        }), a51.push({
            key: "Width",
            value: e.width
        }), a51.push({
            key: "Height",
            value: e.height
        }), e.colorSpace === b3.INDEXED ? a51.push({
            key: "ColorSpace",
            value: "[/Indexed /DeviceRGB " + (e.palette.length / 3 - 1) + " " + ("sMask" in e && void 0 !== e.sMask ? e.objectId + 2 : e.objectId + 1) + " 0 R]"
        }) : (a51.push({
            key: "ColorSpace",
            value: "/" + e.colorSpace
        }), e.colorSpace === b3.DEVICE_CMYK && a51.push({
            key: "Decode",
            value: "[1 0 1 0 1 0 1 0]"
        })), a51.push({
            key: "BitsPerComponent",
            value: e.bitsPerComponent
        }), "decodeParameters" in e && void 0 !== e.decodeParameters && a51.push({
            key: "DecodeParms",
            value: "<<" + e.decodeParameters + ">>"
        }), "transparency" in e && Array.isArray(e.transparency)) {
            for(var o37 = "", s = 0, c = e.transparency.length; s < c; s++)o37 += e.transparency[s] + " " + e.transparency[s] + " ";
            a51.push({
                key: "Mask",
                value: "[" + o37 + "]"
            });
        }
        void 0 !== e.sMask && a51.push({
            key: "SMask",
            value: e.objectId + 1 + " 0 R"
        });
        var u16 = void 0 !== e.filter ? [
            "/" + e.filter
        ] : void 0;
        if (n({
            data: e.data,
            additionalKeyValues: a51,
            alreadyAppliedFilters: u16,
            objectId: e.objectId
        }), r("endobj"), "sMask" in e && void 0 !== e.sMask) {
            var h13 = "/Predictor " + e.predictor + " /Colors 1 /BitsPerComponent " + e.bitsPerComponent + " /Columns " + e.width, l12 = {
                width: e.width,
                height: e.height,
                colorSpace: "DeviceGray",
                bitsPerComponent: e.bitsPerComponent,
                decodeParameters: h13,
                data: e.sMask
            };
            "filter" in e && (l12.filter = e.filter), t.call(this, l12);
        }
        if (e.colorSpace === b3.INDEXED) {
            var f12 = this.internal.newObject();
            n({
                data: _(new Uint8Array(e.palette)),
                objectId: f12
            }), r("endobj");
        }
    }, o35 = function o35() {
        var _$t = this.internal.collections.addImage_images;
        for(var _$e in _$t)a49.call(this, _$t[_$e]);
    }, s10 = function s10() {
        var _$t, _$e = this.internal.collections.addImage_images, r = this.internal.write;
        for(var n in _$e)r("/I" + (_$t = _$e[n]).index, _$t.objectId, "0", "R");
    }, c16 = function c16() {
        this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", o35), this.internal.events.subscribe("putXobjectDict", s10));
    }, h12 = function h12() {
        var _$t = this.internal.collections.addImage_images;
        return c16.call(this), _$t;
    }, l11 = function l11() {
        return Object.keys(this.internal.collections.addImage_images).length;
    }, f11 = function f11(t) {
        return "function" == typeof e15["process" + t.toUpperCase()];
    }, d = function d(e) {
        return "object" === _typeofDefault.default(e) && 1 === e.nodeType;
    }, p = function p(t, r) {
        if ("IMG" === t.nodeName && t.hasAttribute("src")) {
            var n = "" + t.getAttribute("src");
            if (0 === n.indexOf("data:image/")) return u21(unescape(n).split("base64,").pop());
            var _$i = e15.loadFile(n, !0);
            if (void 0 !== _$i) return _$i;
        }
        if ("CANVAS" === t.nodeName) {
            if (0 === t.width || 0 === t.height) throw new Error("Given canvas must have data. Canvas width: " + t.width + ", height: " + t.height);
            var a52;
            switch(r){
                case "PNG":
                    a52 = "image/png";
                    break;
                case "WEBP":
                    a52 = "image/webp";
                    break;
                case "JPEG":
                case "JPG":
                default:
                    a52 = "image/jpeg";
            }
            return u21(t.toDataURL(a52, 1).split("base64,").pop());
        }
    }, g = function g(t) {
        var _$e = this.internal.collections.addImage_images;
        if (_$e) {
            for(var r in _$e)if (t === _$e[r].alias) return _$e[r];
        }
    }, m = function m(t, e, r) {
        return t || e || (t = -96, e = -96), t < 0 && (t = -1 * r.width * 72 / t / this.internal.scaleFactor), e < 0 && (e = -1 * r.height * 72 / e / this.internal.scaleFactor), 0 === t && (t = e * r.width / r.height), 0 === e && (e = t * r.height / r.width), [
            t,
            e
        ];
    }, v = function v(t20, e, r, n, i23, a53) {
        var o38 = m.call(this, r, n, i23), s = this.internal.getCoordinateString, c = this.internal.getVerticalCoordinateString, u17 = h12.call(this);
        if (r = o38[0], n = o38[1], u17[i23.index] = i23, a53) {
            a53 *= Math.PI / 180;
            var l13 = Math.cos(a53), f13 = Math.sin(a53), d = function d(t) {
                return t.toFixed(4);
            }, p = [
                d(l13),
                d(f13),
                d(-1 * f13),
                d(l13),
                0,
                0,
                "cm"
            ];
        }
        this.internal.write("q"), a53 ? (this.internal.write([
            1,
            "0",
            "0",
            1,
            s(t20),
            c(e + n),
            "cm"
        ].join(" ")), this.internal.write(p.join(" ")), this.internal.write([
            s(r),
            "0",
            "0",
            s(n),
            "0",
            "0",
            "cm"
        ].join(" "))) : this.internal.write([
            s(r),
            "0",
            "0",
            s(n),
            s(t20),
            c(e + n),
            "cm"
        ].join(" ")), this.isAdvancedAPI() && this.internal.write([
            1,
            0,
            0,
            -1,
            0,
            0,
            "cm"
        ].join(" ")), this.internal.write("/I" + i23.index + " Do"), this.internal.write("Q");
    }, b3 = e15.color_spaces = {
        DEVICE_RGB: "DeviceRGB",
        DEVICE_GRAY: "DeviceGray",
        DEVICE_CMYK: "DeviceCMYK",
        CAL_GREY: "CalGray",
        CAL_RGB: "CalRGB",
        LAB: "Lab",
        ICC_BASED: "ICCBased",
        INDEXED: "Indexed",
        PATTERN: "Pattern",
        SEPARATION: "Separation",
        DEVICE_N: "DeviceN"
    };
    e15.decode = {
        DCT_DECODE: "DCTDecode",
        FLATE_DECODE: "FlateDecode",
        LZW_DECODE: "LZWDecode",
        JPX_DECODE: "JPXDecode",
        JBIG2_DECODE: "JBIG2Decode",
        ASCII85_DECODE: "ASCII85Decode",
        ASCII_HEX_DECODE: "ASCIIHexDecode",
        RUN_LENGTH_DECODE: "RunLengthDecode",
        CCITT_FAX_DECODE: "CCITTFaxDecode"
    };
    var _$y = e15.image_compression = {
        NONE: "NONE",
        FAST: "FAST",
        MEDIUM: "MEDIUM",
        SLOW: "SLOW"
    }, w = e15.__addimage__.sHashCode = function w(t) {
        var _$e, r, n = 0;
        if ("string" == typeof t) for(r = t.length, _$e = 0; _$e < r; _$e++)n = (n << 5) - n + t.charCodeAt(_$e), n |= 0;
        else if (x3(t)) for(r = t.byteLength / 2, _$e = 0; _$e < r; _$e++)n = (n << 5) - n + t[_$e], n |= 0;
        return n;
    }, N = e15.__addimage__.validateStringAsBase64 = function N(t) {
        (t = t || "").toString().trim();
        var _$e = !0;
        return 0 === t.length && (_$e = !1), t.length % 4 != 0 && (_$e = !1), !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (_$e = !1), !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2)) && (_$e = !1), _$e;
    }, L = e15.__addimage__.extractImageFromDataUrl = function L(t) {
        var _$e = (t = t || "").split("base64,"), r = null;
        if (2 === _$e.length) {
            var n = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(_$e[0]);
            Array.isArray(n) && (r = {
                mimeType: n[1],
                charset: n[2],
                data: _$e[1]
            });
        }
        return r;
    }, A = e15.__addimage__.supportsArrayBuffer = function A() {
        return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array;
    };
    e15.__addimage__.isArrayBuffer = function(t) {
        return A() && t instanceof ArrayBuffer;
    };
    var x3 = e15.__addimage__.isArrayBufferView = function x3(t) {
        return A() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array);
    }, S = e15.__addimage__.binaryStringToUint8Array = function S(t) {
        for(var _$e = t.length, r = new Uint8Array(_$e), n = 0; n < _$e; n++)r[n] = t.charCodeAt(n);
        return r;
    }, _ = e15.__addimage__.arrayBufferToBinaryString = function _(t) {
        for(var _$e = "", r = x3(t) ? t : new Uint8Array(t), n = 0; n < r.length; n += 8192)_$e += String.fromCharCode.apply(null, r.subarray(n, n + 8192));
        return _$e;
    };
    e15.addImage = function() {
        var _$e, n, _$i, a54, o39, s, u18, h14, l14;
        if ("number" == typeof arguments[1] ? (n = r10, _$i = arguments[1], a54 = arguments[2], o39 = arguments[3], s = arguments[4], u18 = arguments[5], h14 = arguments[6], l14 = arguments[7]) : (n = arguments[1], _$i = arguments[2], a54 = arguments[3], o39 = arguments[4], s = arguments[5], u18 = arguments[6], h14 = arguments[7], l14 = arguments[8]), "object" === _typeofDefault.default(_$e = arguments[0]) && !d(_$e) && "imageData" in _$e) {
            var f14 = _$e;
            _$e = f14.imageData, n = f14.format || n || r10, _$i = f14.x || _$i || 0, a54 = f14.y || a54 || 0, o39 = f14.w || f14.width || o39, s = f14.h || f14.height || s, u18 = f14.alias || u18, h14 = f14.compression || h14, l14 = f14.rotation || f14.angle || l14;
        }
        var p = this.internal.getFilters();
        if (void 0 === h14 && -1 !== p.indexOf("FlateEncode") && (h14 = "SLOW"), isNaN(_$i) || isNaN(a54)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
        c16.call(this);
        var g7 = P.call(this, _$e, n, u18, h14);
        return v.call(this, _$i, a54, o39, s, g7, l14), this;
    };
    var P = function P(t21, n, a55, o40) {
        var s, c, u19;
        if ("string" == typeof t21 && _$i(t21) === r10) {
            t21 = unescape(t21);
            var h15 = k(t21, !1);
            ("" !== h15 || void 0 !== (h15 = e15.loadFile(t21, !0))) && (t21 = h15);
        }
        if (d(t21) && (t21 = p(t21, n)), n = _$i(t21, n), !f11(n)) throw new Error("addImage does not support files of type '" + n + "', please ensure that a plugin for '" + n + "' support is added.");
        if ((null == (u19 = a55) || 0 === u19.length) && (a55 = function(t) {
            return "string" == typeof t || x3(t) ? w(t) : x3(t.data) ? w(t.data) : null;
        }(t21)), (s = g.call(this, a55)) || (A() && (t21 instanceof Uint8Array || "RGBA" === n || (c = t21, t21 = S(t21))), s = this["process" + n.toUpperCase()](t21, l11.call(this), a55, function(t) {
            return t && "string" == typeof t && (t = t.toUpperCase()), t in e15.image_compression ? t : _$y.NONE;
        }(o40), c)), !s) throw new Error("An unknown error occurred whilst processing the image.");
        return s;
    }, k = e15.__addimage__.convertBase64ToBinaryString = function k(t, e) {
        var r;
        e = "boolean" != typeof e || e;
        var n, _$i = "";
        if ("string" == typeof t) {
            n = null !== (r = L(t)) ? r.data : t;
            try {
                _$i = u21(n);
            } catch (t) {
                if (e) throw N(n) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + t.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
            }
        }
        return _$i;
    };
    e15.getImageProperties = function(t) {
        var n, a56, o41 = "";
        if (d(t) && (t = p(t)), "string" == typeof t && _$i(t) === r10 && ("" === (o41 = k(t, !1)) && (o41 = e15.loadFile(t) || ""), t = o41), a56 = _$i(t), !f11(a56)) throw new Error("addImage does not support files of type '" + a56 + "', please ensure that a plugin for '" + a56 + "' support is added.");
        if (!A() || t instanceof Uint8Array || (t = S(t)), !(n = this["process" + a56.toUpperCase()](t))) throw new Error("An unknown error occurred whilst processing the image");
        return n.fileType = a56, n;
    };
}(E.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t22) {
    var e = function e(t) {
        if (void 0 !== t && "" != t) return !0;
    };
    E.API.events.push([
        "addPage",
        function(t) {
            this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [];
        }
    ]), t22.events.push([
        "putPage",
        function(t) {
            for(var r, n, _$i, a57 = this.internal.getCoordinateString, o42 = this.internal.getVerticalCoordinateString, s = this.internal.getPageInfoByObjId(t.objId), c = t.pageContext.annotations, u20 = !1, h16 = 0; h16 < c.length && !u20; h16++)switch((r = c[h16]).type){
                case "link":
                    (e(r.options.url) || e(r.options.pageNumber)) && (u20 = !0);
                    break;
                case "reference":
                case "text":
                case "freetext":
                    u20 = !0;
            }
            if (0 != u20) {
                this.internal.write("/Annots [");
                for(var l15 = 0; l15 < c.length; l15++){
                    r = c[l15];
                    var f15 = this.internal.pdfEscape, d = this.internal.getEncryptor(t.objId);
                    switch(r.type){
                        case "reference":
                            this.internal.write(" " + r.object.objId + " 0 R ");
                            break;
                        case "text":
                            var p = this.internal.newAdditionalObject(), g = this.internal.newAdditionalObject(), m = this.internal.getEncryptor(p.objId), v = r.title || "Note";
                            _$i = "<</Type /Annot /Subtype /Text " + (n = "/Rect [" + a57(r.bounds.x) + " " + o42(r.bounds.y + r.bounds.h) + " " + a57(r.bounds.x + r.bounds.w) + " " + o42(r.bounds.y) + "] ") + "/Contents (" + f15(m(r.contents)) + ")", _$i += " /Popup " + g.objId + " 0 R", _$i += " /P " + s.objId + " 0 R", _$i += " /T (" + f15(m(v)) + ") >>", p.content = _$i;
                            var b4 = p.objId + " 0 R";
                            _$i = "<</Type /Annot /Subtype /Popup " + (n = "/Rect [" + a57(r.bounds.x + 30) + " " + o42(r.bounds.y + r.bounds.h) + " " + a57(r.bounds.x + r.bounds.w + 30) + " " + o42(r.bounds.y) + "] ") + " /Parent " + b4, r.open && (_$i += " /Open true"), _$i += " >>", g.content = _$i, this.internal.write(p.objId, "0 R", g.objId, "0 R");
                            break;
                        case "freetext":
                            n = "/Rect [" + a57(r.bounds.x) + " " + o42(r.bounds.y) + " " + a57(r.bounds.x + r.bounds.w) + " " + o42(r.bounds.y + r.bounds.h) + "] ";
                            var _$y = r.color || "#000000";
                            _$i = "<</Type /Annot /Subtype /FreeText " + n + "/Contents (" + f15(d(r.contents)) + ")", _$i += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + _$y + ")", _$i += " /Border [0 0 0]", _$i += " >>", this.internal.write(_$i);
                            break;
                        case "link":
                            if (r.options.name) {
                                var w = this.annotations._nameMap[r.options.name];
                                r.options.pageNumber = w.page, r.options.top = w.y;
                            } else r.options.top || (r.options.top = 0);
                            if (n = "/Rect [" + r.finalBounds.x + " " + r.finalBounds.y + " " + r.finalBounds.w + " " + r.finalBounds.h + "] ", _$i = "", r.options.url) _$i = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /A <</S /URI /URI (" + f15(d(r.options.url)) + ") >>";
                            else if (r.options.pageNumber) switch(_$i = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(r.options.pageNumber).objId + " 0 R", r.options.magFactor = r.options.magFactor || "XYZ", r.options.magFactor){
                                case "Fit":
                                    _$i += " /Fit]";
                                    break;
                                case "FitH":
                                    _$i += " /FitH " + r.options.top + "]";
                                    break;
                                case "FitV":
                                    r.options.left = r.options.left || 0, _$i += " /FitV " + r.options.left + "]";
                                    break;
                                case "XYZ":
                                default:
                                    var N = o42(r.options.top);
                                    r.options.left = r.options.left || 0, void 0 === r.options.zoom && (r.options.zoom = 0), _$i += " /XYZ " + r.options.left + " " + N + " " + r.options.zoom + "]";
                            }
                            "" != _$i && (_$i += " >>", this.internal.write(_$i));
                    }
                }
                this.internal.write("]");
            }
        }
    ]), t22.createAnnotation = function(t) {
        var e = this.internal.getCurrentPageInfo();
        switch(t.type){
            case "link":
                this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                break;
            case "text":
            case "freetext":
                e.pageContext.annotations.push(t);
        }
    }, t22.link = function(t, e, r, n, i24) {
        var a58 = this.internal.getCurrentPageInfo(), o43 = this.internal.getCoordinateString, s = this.internal.getVerticalCoordinateString;
        a58.pageContext.annotations.push({
            finalBounds: {
                x: o43(t),
                y: s(e),
                w: o43(t + r),
                h: s(e + n)
            },
            options: i24,
            type: "link"
        });
    }, t22.textWithLink = function(t, e, r, n) {
        var _$i, a59, o44 = this.getTextWidth(t), s = this.internal.getLineHeight() / this.internal.scaleFactor;
        if (void 0 !== n.maxWidth) {
            a59 = n.maxWidth;
            var c = this.splitTextToSize(t, a59).length;
            _$i = Math.ceil(s * c);
        } else a59 = o44, _$i = s;
        return this.text(t, e, r, n), r += 0.2 * s, "center" === n.align && (e -= o44 / 2), "right" === n.align && (e -= o44), this.link(e, r - s, a59, _$i, n), o44;
    }, t22.getTextWidth = function(t) {
        var e = this.internal.getFontSize();
        return this.getStringUnitWidth(t) * e / this.internal.scaleFactor;
    };
}(E.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t23) {
    var e16 = {
        1569: [
            65152
        ],
        1570: [
            65153,
            65154
        ],
        1571: [
            65155,
            65156
        ],
        1572: [
            65157,
            65158
        ],
        1573: [
            65159,
            65160
        ],
        1574: [
            65161,
            65162,
            65163,
            65164
        ],
        1575: [
            65165,
            65166
        ],
        1576: [
            65167,
            65168,
            65169,
            65170
        ],
        1577: [
            65171,
            65172
        ],
        1578: [
            65173,
            65174,
            65175,
            65176
        ],
        1579: [
            65177,
            65178,
            65179,
            65180
        ],
        1580: [
            65181,
            65182,
            65183,
            65184
        ],
        1581: [
            65185,
            65186,
            65187,
            65188
        ],
        1582: [
            65189,
            65190,
            65191,
            65192
        ],
        1583: [
            65193,
            65194
        ],
        1584: [
            65195,
            65196
        ],
        1585: [
            65197,
            65198
        ],
        1586: [
            65199,
            65200
        ],
        1587: [
            65201,
            65202,
            65203,
            65204
        ],
        1588: [
            65205,
            65206,
            65207,
            65208
        ],
        1589: [
            65209,
            65210,
            65211,
            65212
        ],
        1590: [
            65213,
            65214,
            65215,
            65216
        ],
        1591: [
            65217,
            65218,
            65219,
            65220
        ],
        1592: [
            65221,
            65222,
            65223,
            65224
        ],
        1593: [
            65225,
            65226,
            65227,
            65228
        ],
        1594: [
            65229,
            65230,
            65231,
            65232
        ],
        1601: [
            65233,
            65234,
            65235,
            65236
        ],
        1602: [
            65237,
            65238,
            65239,
            65240
        ],
        1603: [
            65241,
            65242,
            65243,
            65244
        ],
        1604: [
            65245,
            65246,
            65247,
            65248
        ],
        1605: [
            65249,
            65250,
            65251,
            65252
        ],
        1606: [
            65253,
            65254,
            65255,
            65256
        ],
        1607: [
            65257,
            65258,
            65259,
            65260
        ],
        1608: [
            65261,
            65262
        ],
        1609: [
            65263,
            65264,
            64488,
            64489
        ],
        1610: [
            65265,
            65266,
            65267,
            65268
        ],
        1649: [
            64336,
            64337
        ],
        1655: [
            64477
        ],
        1657: [
            64358,
            64359,
            64360,
            64361
        ],
        1658: [
            64350,
            64351,
            64352,
            64353
        ],
        1659: [
            64338,
            64339,
            64340,
            64341
        ],
        1662: [
            64342,
            64343,
            64344,
            64345
        ],
        1663: [
            64354,
            64355,
            64356,
            64357
        ],
        1664: [
            64346,
            64347,
            64348,
            64349
        ],
        1667: [
            64374,
            64375,
            64376,
            64377
        ],
        1668: [
            64370,
            64371,
            64372,
            64373
        ],
        1670: [
            64378,
            64379,
            64380,
            64381
        ],
        1671: [
            64382,
            64383,
            64384,
            64385
        ],
        1672: [
            64392,
            64393
        ],
        1676: [
            64388,
            64389
        ],
        1677: [
            64386,
            64387
        ],
        1678: [
            64390,
            64391
        ],
        1681: [
            64396,
            64397
        ],
        1688: [
            64394,
            64395
        ],
        1700: [
            64362,
            64363,
            64364,
            64365
        ],
        1702: [
            64366,
            64367,
            64368,
            64369
        ],
        1705: [
            64398,
            64399,
            64400,
            64401
        ],
        1709: [
            64467,
            64468,
            64469,
            64470
        ],
        1711: [
            64402,
            64403,
            64404,
            64405
        ],
        1713: [
            64410,
            64411,
            64412,
            64413
        ],
        1715: [
            64406,
            64407,
            64408,
            64409
        ],
        1722: [
            64414,
            64415
        ],
        1723: [
            64416,
            64417,
            64418,
            64419
        ],
        1726: [
            64426,
            64427,
            64428,
            64429
        ],
        1728: [
            64420,
            64421
        ],
        1729: [
            64422,
            64423,
            64424,
            64425
        ],
        1733: [
            64480,
            64481
        ],
        1734: [
            64473,
            64474
        ],
        1735: [
            64471,
            64472
        ],
        1736: [
            64475,
            64476
        ],
        1737: [
            64482,
            64483
        ],
        1739: [
            64478,
            64479
        ],
        1740: [
            64508,
            64509,
            64510,
            64511
        ],
        1744: [
            64484,
            64485,
            64486,
            64487
        ],
        1746: [
            64430,
            64431
        ],
        1747: [
            64432,
            64433
        ]
    }, r11 = {
        65247: {
            65154: 65269,
            65156: 65271,
            65160: 65273,
            65166: 65275
        },
        65248: {
            65154: 65270,
            65156: 65272,
            65160: 65274,
            65166: 65276
        },
        65165: {
            65247: {
                65248: {
                    65258: 65010
                }
            }
        },
        1617: {
            1612: 64606,
            1613: 64607,
            1614: 64608,
            1615: 64609,
            1616: 64610
        }
    }, n76 = {
        1612: 64606,
        1613: 64607,
        1614: 64608,
        1615: 64609,
        1616: 64610
    }, _$i3 = [
        1570,
        1571,
        1573,
        1575
    ];
    t23.__arabicParser__ = {};
    var a = t23.__arabicParser__.isInArabicSubstitutionA = function a(t) {
        return void 0 !== e16[t.charCodeAt(0)];
    }, o = t23.__arabicParser__.isArabicLetter = function o(t) {
        return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t);
    }, s = t23.__arabicParser__.isArabicEndLetter = function s(t) {
        return o(t) && a(t) && e16[t.charCodeAt(0)].length <= 2;
    }, c = t23.__arabicParser__.isArabicAlfLetter = function c(t) {
        return o(t) && _$i3.indexOf(t.charCodeAt(0)) >= 0;
    };
    t23.__arabicParser__.arabicLetterHasIsolatedForm = function(t) {
        return o(t) && a(t) && e16[t.charCodeAt(0)].length >= 1;
    };
    var u = t23.__arabicParser__.arabicLetterHasFinalForm = function u(t) {
        return o(t) && a(t) && e16[t.charCodeAt(0)].length >= 2;
    };
    t23.__arabicParser__.arabicLetterHasInitialForm = function(t) {
        return o(t) && a(t) && e16[t.charCodeAt(0)].length >= 3;
    };
    var h = t23.__arabicParser__.arabicLetterHasMedialForm = function h(t) {
        return o(t) && a(t) && 4 == e16[t.charCodeAt(0)].length;
    }, l = t23.__arabicParser__.resolveLigatures = function l(t) {
        var e = 0, n = r11, _$i = "", a = 0;
        for(e = 0; e < t.length; e += 1)void 0 !== n[t.charCodeAt(e)] ? (a++, "number" == typeof (n = n[t.charCodeAt(e)]) && (_$i += String.fromCharCode(n), n = r11, a = 0), e === t.length - 1 && (n = r11, _$i += t.charAt(e - (a - 1)), e -= a - 1, a = 0)) : (n = r11, _$i += t.charAt(e - a), e -= a, a = 0);
        return _$i;
    };
    t23.__arabicParser__.isArabicDiacritic = function(t) {
        return void 0 !== t && void 0 !== n76[t.charCodeAt(0)];
    };
    var f = t23.__arabicParser__.getCorrectForm = function f(t, e, r) {
        return o(t) ? !1 === a(t) ? -1 : !u(t) || !o(e) && !o(r) || !o(r) && s(e) || s(t) && !o(e) || s(t) && c(e) || s(t) && s(e) ? 0 : h(t) && o(e) && !s(e) && o(r) && u(r) ? 3 : s(t) || !o(r) ? 1 : 2 : -1;
    }, d = function d(t) {
        var r = 0, n = 0, _$i = 0, a = "", s = "", c = "", u = (t = t || "").split("\\s+"), h = [];
        for(r = 0; r < u.length; r += 1){
            for(h.push(""), n = 0; n < u[r].length; n += 1)a = u[r][n], s = u[r][n - 1], c = u[r][n + 1], o(a) ? (_$i = f(a, s, c), h[r] += -1 !== _$i ? String.fromCharCode(e16[a.charCodeAt(0)][_$i]) : a) : h[r] += a;
            h[r] = l(h[r]);
        }
        return h.join(" ");
    }, p = t23.__arabicParser__.processArabic = t23.processArabic = function p() {
        var _$t, e = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text, r = [];
        if (Array.isArray(e)) {
            var n = 0;
            for(r = [], n = 0; n < e.length; n += 1)Array.isArray(e[n]) ? r.push([
                d(e[n][0]),
                e[n][1],
                e[n][2]
            ]) : r.push([
                d(e[n])
            ]);
            _$t = r;
        } else _$t = d(e);
        return "string" == typeof arguments[0] ? _$t : (arguments[0].text = _$t, arguments[0]);
    };
    t23.events.push([
        "preProcessText",
        p
    ]);
}(E.API), E.API.autoPrint = function(t) {
    var e;
    switch((t = t || {}).variant = t.variant || "non-conform", t.variant){
        case "javascript":
            this.addJS("print({});");
            break;
        case "non-conform":
        default:
            this.internal.events.subscribe("postPutResources", function() {
                e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
            }), this.internal.events.subscribe("putCatalog", function() {
                this.internal.out("/OpenAction " + e + " 0 R");
            });
    }
    return this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t24) {
    var e18 = function e18() {
        var _$t = void 0;
        Object.defineProperty(this, "pdf", {
            get: function get() {
                return _$t;
            },
            set: function set(e) {
                _$t = e;
            }
        });
        var e17 = 150;
        Object.defineProperty(this, "width", {
            get: function get() {
                return e17;
            },
            set: function set(t) {
                e17 = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e17 + 1);
            }
        });
        var r = 300;
        Object.defineProperty(this, "height", {
            get: function get() {
                return r;
            },
            set: function set(t) {
                r = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r + 1);
            }
        });
        var n = [];
        Object.defineProperty(this, "childNodes", {
            get: function get() {
                return n;
            },
            set: function set(t) {
                n = t;
            }
        });
        var _$i = {};
        Object.defineProperty(this, "style", {
            get: function get() {
                return _$i;
            },
            set: function set(t) {
                _$i = t;
            }
        }), Object.defineProperty(this, "parentNode", {});
    };
    e18.prototype.getContext = function(t, e) {
        var r;
        if ("2d" !== (t = t || "2d")) return null;
        for(r in e)this.pdf.context2d.hasOwnProperty(r) && (this.pdf.context2d[r] = e[r]);
        return this.pdf.context2d._canvas = this, this.pdf.context2d;
    }, e18.prototype.toDataURL = function() {
        throw new Error("toDataURL is not implemented.");
    }, t24.events.push([
        "initialized",
        function() {
            this.canvas = new e18, this.canvas.pdf = this;
        }
    ]);
}(E.API), function(e20) {
    var r12 = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    }, n77 = !1, _$i = function _$i() {
        void 0 === this.internal.__cell__ && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, r12), this.internal.__cell__.margins.width = this.getPageWidth(), a.call(this));
    }, a = function a() {
        this.internal.__cell__.lastCell = new o, this.internal.__cell__.pages = 1;
    }, o = function o() {
        var _$t = arguments[0];
        Object.defineProperty(this, "x", {
            enumerable: !0,
            get: function get() {
                return _$t;
            },
            set: function set(e) {
                _$t = e;
            }
        });
        var _$e = arguments[1];
        Object.defineProperty(this, "y", {
            enumerable: !0,
            get: function get() {
                return _$e;
            },
            set: function set(t) {
                _$e = t;
            }
        });
        var r = arguments[2];
        Object.defineProperty(this, "width", {
            enumerable: !0,
            get: function get() {
                return r;
            },
            set: function set(t) {
                r = t;
            }
        });
        var n = arguments[3];
        Object.defineProperty(this, "height", {
            enumerable: !0,
            get: function get() {
                return n;
            },
            set: function set(t) {
                n = t;
            }
        });
        var _$i = arguments[4];
        Object.defineProperty(this, "text", {
            enumerable: !0,
            get: function get() {
                return _$i;
            },
            set: function set(t) {
                _$i = t;
            }
        });
        var a = arguments[5];
        Object.defineProperty(this, "lineNumber", {
            enumerable: !0,
            get: function get() {
                return a;
            },
            set: function set(t) {
                a = t;
            }
        });
        var o46 = arguments[6];
        return Object.defineProperty(this, "align", {
            enumerable: !0,
            get: function get() {
                return o46;
            },
            set: function set(t) {
                o46 = t;
            }
        }), this;
    };
    o.prototype.clone = function() {
        return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
    }, o.prototype.toArray = function() {
        return [
            this.x,
            this.y,
            this.width,
            this.height,
            this.text,
            this.lineNumber,
            this.align
        ];
    }, e20.setHeaderFunction = function(t) {
        return _$i.call(this), this.internal.__cell__.headerFunction = "function" == typeof t ? t : void 0, this;
    }, e20.getTextDimensions = function(t25, e21) {
        _$i.call(this);
        var r = (e21 = e21 || {}).fontSize || this.getFontSize(), n = e21.font || this.getFont(), a = e21.scaleFactor || this.internal.scaleFactor, o = 0, s = 0, c = 0, u = this;
        if (!Array.isArray(t25) && "string" != typeof t25) {
            if ("number" != typeof t25) throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
            t25 = String(t25);
        }
        var h = e21.maxWidth;
        h > 0 ? "string" == typeof t25 ? t25 = this.splitTextToSize(t25, h) : "[object Array]" === Object.prototype.toString.call(t25) && (t25 = t25.reduce(function(t, e) {
            return t.concat(u.splitTextToSize(e, h));
        }, [])) : t25 = Array.isArray(t25) ? t25 : [
            t25
        ];
        for(var l = 0; l < t25.length; l++)o < (c = this.getStringUnitWidth(t25[l], {
            font: n
        }) * r) && (o = c);
        return 0 !== o && (s = t25.length), {
            w: o /= a,
            h: Math.max((s * r * this.getLineHeightFactor() - r * (this.getLineHeightFactor() - 1)) / a, 0)
        };
    }, e20.cellAddPage = function() {
        _$i.call(this), this.addPage();
        var _$t = this.internal.__cell__.margins || r12;
        return this.internal.__cell__.lastCell = new o(_$t.left, _$t.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
    };
    var s11 = e20.cell = function s11() {
        var _$t;
        _$t = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), _$i.call(this);
        var _$e = this.internal.__cell__.lastCell, a = this.internal.__cell__.padding, s = this.internal.__cell__.margins || r12, c = this.internal.__cell__.tableHeaderRow, u = this.internal.__cell__.printHeaders;
        return void 0 !== _$e.lineNumber && (_$e.lineNumber === _$t.lineNumber ? (_$t.x = (_$e.x || 0) + (_$e.width || 0), _$t.y = _$e.y || 0) : _$e.y + _$e.height + _$t.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(), _$t.y = s.top, u && c && (this.printHeaderRow(_$t.lineNumber, !0), _$t.y += c[0].height)) : _$t.y = _$e.y + _$e.height || _$t.y), void 0 !== _$t.text[0] && (this.rect(_$t.x, _$t.y, _$t.width, _$t.height, !0 === n77 ? "FD" : void 0), "right" === _$t.align ? this.text(_$t.text, _$t.x + _$t.width - a, _$t.y + a, {
            align: "right",
            baseline: "top"
        }) : "center" === _$t.align ? this.text(_$t.text, _$t.x + _$t.width / 2, _$t.y + a, {
            align: "center",
            baseline: "top",
            maxWidth: _$t.width - a - a
        }) : this.text(_$t.text, _$t.x + a, _$t.y + a, {
            align: "left",
            baseline: "top",
            maxWidth: _$t.width - a - a
        })), this.internal.__cell__.lastCell = _$t, this;
    };
    e20.table = function(e22, n, u, h, l) {
        if (_$i.call(this), !u) throw new Error("No data for PDF table.");
        var f, d, p, g, m = [], v = [], b5 = [], _$y = {}, w = {}, N = [], L = [], A = (l = l || {}).autoSize || !1, x4 = !1 !== l.printHeaders, S = l.css && void 0 !== l.css["font-size"] ? 16 * l.css["font-size"] : l.fontSize || 12, _ = l.margins || Object.assign({
            width: this.getPageWidth()
        }, r12), P = "number" == typeof l.padding ? l.padding : 3, k = l.headerBackgroundColor || "#c8c8c8", _$I = l.headerTextColor || "#000";
        if (a.call(this), this.internal.__cell__.printHeaders = x4, this.internal.__cell__.margins = _, this.internal.__cell__.table_font_size = S, this.internal.__cell__.padding = P, this.internal.__cell__.headerBackgroundColor = k, this.internal.__cell__.headerTextColor = _$I, this.setFontSize(S), null == h) v = m = Object.keys(u[0]), b5 = m.map(function() {
            return "left";
        });
        else if (Array.isArray(h) && "object" === _typeofDefault.default(h[0])) for(m = h.map(function(t) {
            return t.name;
        }), v = h.map(function(t) {
            return t.prompt || t.name || "";
        }), b5 = h.map(function(t) {
            return t.align || "left";
        }), f = 0; f < h.length; f += 1)w[h[f].name] = h[f].width * (19.049976 / 25.4);
        else Array.isArray(h) && "string" == typeof h[0] && (v = m = h, b5 = m.map(function() {
            return "left";
        }));
        if (A || Array.isArray(h) && "string" == typeof h[0]) for(f = 0; f < m.length; f += 1){
            for(_$y[g = m[f]] = u.map(function(t) {
                return t[g];
            }), this.setFont(void 0, "bold"), N.push(this.getTextDimensions(v[f], {
                fontSize: this.internal.__cell__.table_font_size,
                scaleFactor: this.internal.scaleFactor
            }).w), d = _$y[g], this.setFont(void 0, "normal"), p = 0; p < d.length; p += 1)N.push(this.getTextDimensions(d[p], {
                fontSize: this.internal.__cell__.table_font_size,
                scaleFactor: this.internal.scaleFactor
            }).w);
            w[g] = Math.max.apply(null, N) + P + P, N = [];
        }
        if (x4) {
            var F2 = {};
            for(f = 0; f < m.length; f += 1)F2[m[f]] = {}, F2[m[f]].text = v[f], F2[m[f]].align = b5[f];
            var C1 = c17.call(this, F2, w);
            L = m.map(function(t) {
                return new o(e22, n, w[t], C1, F2[t].text, void 0, F2[t].align);
            }), this.setTableHeaderRow(L), this.printHeaderRow(1, !1);
        }
        var _$j = h.reduce(function(t, e) {
            return t[e.name] = e.align, t;
        }, {});
        for(f = 0; f < u.length; f += 1){
            "rowStart" in l && l.rowStart instanceof Function && l.rowStart({
                row: f,
                data: u[f]
            }, this);
            var O2 = c17.call(this, u[f], w);
            for(p = 0; p < m.length; p += 1){
                var B1 = u[f][m[p]];
                "cellStart" in l && l.cellStart instanceof Function && l.cellStart({
                    row: f,
                    col: p,
                    data: B1
                }, this), s11.call(this, new o(e22, n, w[m[p]], O2, B1, f + 2, _$j[m[p]]));
            }
        }
        return this.internal.__cell__.table_x = e22, this.internal.__cell__.table_y = n, this;
    };
    var c17 = function c17(t26, e23) {
        var r = this.internal.__cell__.padding, n78 = this.internal.__cell__.table_font_size, _$i4 = this.internal.scaleFactor;
        return Object.keys(t26).map(function(n) {
            var _$i = t26[n];
            return this.splitTextToSize(_$i.hasOwnProperty("text") ? _$i.text : _$i, e23[n] - r - r);
        }, this).map(function(t) {
            return this.getLineHeightFactor() * t.length * n78 / _$i4 + r + r;
        }, this).reduce(function(t, e) {
            return Math.max(t, e);
        }, 0);
    };
    e20.setTableHeaderRow = function(t) {
        _$i.call(this), this.internal.__cell__.tableHeaderRow = t;
    }, e20.printHeaderRow = function(t, e) {
        if (_$i.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
        var r;
        if (n77 = !0, "function" == typeof this.internal.__cell__.headerFunction) {
            var a = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
            this.internal.__cell__.lastCell = new o(a[0], a[1], a[2], a[3], void 0, -1);
        }
        this.setFont(void 0, "bold");
        for(var c = [], u = 0; u < this.internal.__cell__.tableHeaderRow.length; u += 1){
            r = this.internal.__cell__.tableHeaderRow[u].clone(), e && (r.y = this.internal.__cell__.margins.top || 0, c.push(r)), r.lineNumber = t;
            var h = this.getTextColor();
            this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), s11.call(this, r), this.setTextColor(h);
        }
        c.length > 0 && this.setTableHeaderRow(c), this.setFont(void 0, "normal"), n77 = !1;
    };
}(E.API);
var Pt2 = {
    italic: [
        "italic",
        "oblique",
        "normal"
    ],
    oblique: [
        "oblique",
        "italic",
        "normal"
    ],
    normal: [
        "normal",
        "oblique",
        "italic"
    ]
}, kt2 = [
    "ultra-condensed",
    "extra-condensed",
    "condensed",
    "semi-condensed",
    "normal",
    "semi-expanded",
    "expanded",
    "extra-expanded",
    "ultra-expanded"
], It = _t(kt2), Ft2 = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
], Ct2 = _t(Ft2);
function jt2(t27) {
    var e = t27.family.replace(/"|'/g, "").toLowerCase(), r = function(t) {
        return Pt2[t = t || "normal"] ? t : "normal";
    }(t27.style), n = function(t) {
        if (!t) return 400;
        if ("number" == typeof t) return t >= 100 && t <= 900 && t % 100 == 0 ? t : 400;
        if (/^\d00$/.test(t)) return parseInt(t);
        switch(t){
            case "bold":
                return 700;
            case "normal":
            default:
                return 400;
        }
    }(t27.weight), _$i = function(t) {
        return "number" == typeof It[t = t || "normal"] ? t : "normal";
    }(t27.stretch);
    return {
        family: e,
        style: r,
        weight: n,
        stretch: _$i,
        src: t27.src || [],
        ref: t27.ref || {
            name: e,
            style: [
                _$i,
                r,
                n
            ].join(" ")
        }
    };
}
function Ot2(t, e, r, n) {
    var _$i;
    for(_$i = r; _$i >= 0 && _$i < e.length; _$i += n)if (t[e[_$i]]) return t[e[_$i]];
    for(_$i = r; _$i >= 0 && _$i < e.length; _$i -= n)if (t[e[_$i]]) return t[e[_$i]];
}
var Bt2 = {
    "sans-serif": "helvetica",
    fixed: "courier",
    monospace: "courier",
    terminal: "courier",
    cursive: "times",
    fantasy: "times",
    serif: "times"
}, Mt2 = {
    caption: "times",
    icon: "times",
    menu: "times",
    "message-box": "times",
    "small-caption": "times",
    "status-bar": "times"
};
function Et2(t) {
    return [
        t.stretch,
        t.style,
        t.weight,
        t.family
    ].join(" ");
}
function qt2(t28, e24, r) {
    for(var n79 = (r = r || {}).defaultFontFamily || "times", _$i5 = Object.assign({}, Bt2, r.genericFontFamilies || {}), a = null, o = null, s = 0; s < e24.length; ++s)if (_$i5[(a = jt2(e24[s])).family] && (a.family = _$i5[a.family]), t28.hasOwnProperty(a.family)) {
        o = t28[a.family];
        break;
    }
    if (!(o = o || t28[n79])) throw new Error("Could not find a font-family for the rule '" + Et2(a) + "' and default family '" + n79 + "'.");
    if (o = function(t, e) {
        if (e[t]) return e[t];
        var _$r = It[t], n = _$r <= It.normal ? -1 : 1, _$i = Ot2(e, kt2, _$r, n);
        if (!_$i) throw new Error("Could not find a matching font-stretch value for " + t);
        return _$i;
    }(a.stretch, o), o = function(t, e) {
        if (e[t]) return e[t];
        for(var _$r = Pt2[t], n = 0; n < _$r.length; ++n)if (e[_$r[n]]) return e[_$r[n]];
        throw new Error("Could not find a matching font-style for " + t);
    }(a.style, o), !(o = function(t, e) {
        if (e[t]) return e[t];
        if (400 === t && e[500]) return e[500];
        if (500 === t && e[400]) return e[400];
        var _$r = Ct2[t], n = Ot2(e, Ft2, _$r, t < 400 ? -1 : 1);
        if (!n) throw new Error("Could not find a matching font-weight for value " + t);
        return n;
    }(a.weight, o))) throw new Error("Failed to resolve a font for the rule '" + Et2(a) + "'.");
    return o;
}
function Dt2(t) {
    return t.trimLeft();
}
function Rt2(t, e) {
    for(var r = 0; r < t.length;){
        if (t.charAt(r) === e) return [
            t.substring(0, r),
            t.substring(r + 1)
        ];
        r += 1;
    }
    return null;
}
function Tt2(t) {
    var e = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
    return null === e ? null : [
        e[0],
        t.substring(e[0].length)
    ];
}
var Ut2, zt2, Ht2, Wt2 = [
    "times"
];
!function(e25) {
    var r13, n80, _$i6, o47, s12, c18, u22, h18, l17, d = function d(t) {
        return t = t || {}, this.isStrokeTransparent = t.isStrokeTransparent || !1, this.strokeOpacity = t.strokeOpacity || 1, this.strokeStyle = t.strokeStyle || "#000000", this.fillStyle = t.fillStyle || "#000000", this.isFillTransparent = t.isFillTransparent || !1, this.fillOpacity = t.fillOpacity || 1, this.font = t.font || "10px sans-serif", this.textBaseline = t.textBaseline || "alphabetic", this.textAlign = t.textAlign || "left", this.lineWidth = t.lineWidth || 1, this.lineJoin = t.lineJoin || "miter", this.lineCap = t.lineCap || "butt", this.path = t.path || [], this.transform = void 0 !== t.transform ? t.transform.clone() : new h18, this.globalCompositeOperation = t.globalCompositeOperation || "normal", this.globalAlpha = t.globalAlpha || 1, this.clip_path = t.clip_path || [], this.currentPoint = t.currentPoint || new c18, this.miterLimit = t.miterLimit || 10, this.lastPoint = t.lastPoint || new c18, this.lineDashOffset = t.lineDashOffset || 0, this.lineDash = t.lineDash || [], this.margin = t.margin || [
            0,
            0,
            0,
            0
        ], this.prevPageLastElemOffset = t.prevPageLastElemOffset || 0, this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect, this;
    };
    e25.events.push([
        "initialized",
        function() {
            this.context2d = new p11(this), r13 = this.internal.f2, n80 = this.internal.getCoordinateString, _$i6 = this.internal.getVerticalCoordinateString, o47 = this.internal.getHorizontalCoordinate, s12 = this.internal.getVerticalCoordinate, c18 = this.internal.Point, u22 = this.internal.Rectangle, h18 = this.internal.Matrix, l17 = new d;
        }
    ]);
    var p11 = function p11(t29) {
        var f = function f(t30, e) {
            if (null === h19) {
                var r15 = function(t31) {
                    var _$e = [];
                    return Object.keys(t31).forEach(function(r) {
                        t31[r].forEach(function(t) {
                            var n = null;
                            switch(t){
                                case "bold":
                                    n = {
                                        family: r,
                                        weight: "bold"
                                    };
                                    break;
                                case "italic":
                                    n = {
                                        family: r,
                                        style: "italic"
                                    };
                                    break;
                                case "bolditalic":
                                    n = {
                                        family: r,
                                        weight: "bold",
                                        style: "italic"
                                    };
                                    break;
                                case "":
                                case "normal":
                                    n = {
                                        family: r
                                    };
                            }
                            null !== n && (n.ref = {
                                name: r,
                                style: t
                            }, _$e.push(n));
                        });
                    }), _$e;
                }(t30.getFontList());
                h19 = function(t) {
                    for(var _$e = {}, r = 0; r < t.length; ++r){
                        var n = jt2(t[r]), _$i = n.family, a = n.stretch, o = n.style, s = n.weight;
                        _$e[_$i] = _$e[_$i] || {}, _$e[_$i][a] = _$e[_$i][a] || {}, _$e[_$i][a][o] = _$e[_$i][a][o] || {}, _$e[_$i][a][o][s] = n;
                    }
                    return _$e;
                }(r15.concat(e));
            }
            return h19;
        };
        Object.defineProperty(this, "canvas", {
            get: function get() {
                return {
                    parentNode: !1,
                    style: !1
                };
            }
        });
        var _$e1 = t29;
        Object.defineProperty(this, "pdf", {
            get: function get() {
                return _$e1;
            }
        });
        var r14 = !1;
        Object.defineProperty(this, "pageWrapXEnabled", {
            get: function get() {
                return r14;
            },
            set: function set(t) {
                r14 = Boolean(t);
            }
        });
        var n81 = !1;
        Object.defineProperty(this, "pageWrapYEnabled", {
            get: function get() {
                return n81;
            },
            set: function set(t) {
                n81 = Boolean(t);
            }
        });
        var _$i7 = 0;
        Object.defineProperty(this, "posX", {
            get: function get() {
                return _$i7;
            },
            set: function set(t) {
                isNaN(t) || (_$i7 = t);
            }
        });
        var a61 = 0;
        Object.defineProperty(this, "posY", {
            get: function get() {
                return a61;
            },
            set: function set(t) {
                isNaN(t) || (a61 = t);
            }
        }), Object.defineProperty(this, "margin", {
            get: function get() {
                return l17.margin;
            },
            set: function set(t) {
                var _$e;
                "number" == typeof t ? _$e = [
                    t,
                    t,
                    t,
                    t
                ] : ((_$e = new Array(4))[0] = t[0], _$e[1] = t.length >= 2 ? t[1] : _$e[0], _$e[2] = t.length >= 3 ? t[2] : _$e[0], _$e[3] = t.length >= 4 ? t[3] : _$e[1]), l17.margin = _$e;
            }
        });
        var o48 = !1;
        Object.defineProperty(this, "autoPaging", {
            get: function get() {
                return o48;
            },
            set: function set(t) {
                o48 = t;
            }
        });
        var s13 = 0;
        Object.defineProperty(this, "lastBreak", {
            get: function get() {
                return s13;
            },
            set: function set(t) {
                s13 = t;
            }
        });
        var c19 = [];
        Object.defineProperty(this, "pageBreaks", {
            get: function get() {
                return c19;
            },
            set: function set(t) {
                c19 = t;
            }
        }), Object.defineProperty(this, "ctx", {
            get: function get() {
                return l17;
            },
            set: function set(t) {
                t instanceof d && (l17 = t);
            }
        }), Object.defineProperty(this, "path", {
            get: function get() {
                return l17.path;
            },
            set: function set(t) {
                l17.path = t;
            }
        });
        var u23 = [];
        Object.defineProperty(this, "ctxStack", {
            get: function get() {
                return u23;
            },
            set: function set(t) {
                u23 = t;
            }
        }), Object.defineProperty(this, "fillStyle", {
            get: function get() {
                return this.ctx.fillStyle;
            },
            set: function set(t) {
                var _$e;
                _$e = g(t), this.ctx.fillStyle = _$e.style, this.ctx.isFillTransparent = 0 === _$e.a, this.ctx.fillOpacity = _$e.a, this.pdf.setFillColor(_$e.r, _$e.g, _$e.b, {
                    a: _$e.a
                }), this.pdf.setTextColor(_$e.r, _$e.g, _$e.b, {
                    a: _$e.a
                });
            }
        }), Object.defineProperty(this, "strokeStyle", {
            get: function get() {
                return this.ctx.strokeStyle;
            },
            set: function set(t) {
                var _$e = g(t);
                this.ctx.strokeStyle = _$e.style, this.ctx.isStrokeTransparent = 0 === _$e.a, this.ctx.strokeOpacity = _$e.a, 0 === _$e.a ? this.pdf.setDrawColor(255, 255, 255) : (_$e.a, this.pdf.setDrawColor(_$e.r, _$e.g, _$e.b));
            }
        }), Object.defineProperty(this, "lineCap", {
            get: function get() {
                return this.ctx.lineCap;
            },
            set: function set(t) {
                -1 !== [
                    "butt",
                    "round",
                    "square"
                ].indexOf(t) && (this.ctx.lineCap = t, this.pdf.setLineCap(t));
            }
        }), Object.defineProperty(this, "lineWidth", {
            get: function get() {
                return this.ctx.lineWidth;
            },
            set: function set(t) {
                isNaN(t) || (this.ctx.lineWidth = t, this.pdf.setLineWidth(t));
            }
        }), Object.defineProperty(this, "lineJoin", {
            get: function get() {
                return this.ctx.lineJoin;
            },
            set: function set(t) {
                -1 !== [
                    "bevel",
                    "round",
                    "miter"
                ].indexOf(t) && (this.ctx.lineJoin = t, this.pdf.setLineJoin(t));
            }
        }), Object.defineProperty(this, "miterLimit", {
            get: function get() {
                return this.ctx.miterLimit;
            },
            set: function set(t) {
                isNaN(t) || (this.ctx.miterLimit = t, this.pdf.setMiterLimit(t));
            }
        }), Object.defineProperty(this, "textBaseline", {
            get: function get() {
                return this.ctx.textBaseline;
            },
            set: function set(t) {
                this.ctx.textBaseline = t;
            }
        }), Object.defineProperty(this, "textAlign", {
            get: function get() {
                return this.ctx.textAlign;
            },
            set: function set(t) {
                -1 !== [
                    "right",
                    "end",
                    "center",
                    "left",
                    "start"
                ].indexOf(t) && (this.ctx.textAlign = t);
            }
        });
        var h19 = null;
        var p10 = null;
        Object.defineProperty(this, "fontFaces", {
            get: function get() {
                return p10;
            },
            set: function set(t) {
                h19 = null, p10 = t;
            }
        }), Object.defineProperty(this, "font", {
            get: function get() {
                return this.ctx.font;
            },
            set: function set(t32) {
                var _$e2;
                if (this.ctx.font = t32, null !== (_$e2 = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t32))) {
                    var r17 = _$e2[1], n82 = (_$e2[2], _$e2[3]), _$i8 = _$e2[4], a = (_$e2[5], _$e2[6]), o = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(_$i8)[2];
                    _$i8 = "px" === o ? Math.floor(parseFloat(_$i8) * this.pdf.internal.scaleFactor) : "em" === o ? Math.floor(parseFloat(_$i8) * this.pdf.getFontSize()) : Math.floor(parseFloat(_$i8) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(_$i8);
                    var s = function(t) {
                        var _$e, r, n = [], _$i = t.trim();
                        if ("" === _$i) return Wt2;
                        if (_$i in Mt2) return [
                            Mt2[_$i]
                        ];
                        for(; "" !== _$i;){
                            switch(r = null, _$e = (_$i = Dt2(_$i)).charAt(0)){
                                case '"':
                                case "'":
                                    r = Rt2(_$i.substring(1), _$e);
                                    break;
                                default:
                                    r = Tt2(_$i);
                            }
                            if (null === r) return Wt2;
                            if (n.push(r[0]), "" !== (_$i = Dt2(r[1])) && "," !== _$i.charAt(0)) return Wt2;
                            _$i = _$i.replace(/^,/, "");
                        }
                        return n;
                    }(a);
                    if (this.fontFaces) {
                        var c = qt2(f(this.pdf, this.fontFaces), s.map(function(t) {
                            return {
                                family: t,
                                stretch: "normal",
                                weight: n82,
                                style: r17
                            };
                        }));
                        this.pdf.setFont(c.ref.name, c.ref.style);
                    } else {
                        var u = "";
                        ("bold" === n82 || parseInt(n82, 10) >= 700 || "bold" === r17) && (u = "bold"), "italic" === r17 && (u += "italic"), 0 === u.length && (u = "normal");
                        for(var h = "", l = {
                            arial: "Helvetica",
                            Arial: "Helvetica",
                            verdana: "Helvetica",
                            Verdana: "Helvetica",
                            helvetica: "Helvetica",
                            Helvetica: "Helvetica",
                            "sans-serif": "Helvetica",
                            fixed: "Courier",
                            monospace: "Courier",
                            terminal: "Courier",
                            cursive: "Times",
                            fantasy: "Times",
                            serif: "Times"
                        }, d = 0; d < s.length; d++){
                            if (void 0 !== this.pdf.internal.getFont(s[d], u, {
                                noFallback: !0,
                                disableWarning: !0
                            })) {
                                h = s[d];
                                break;
                            }
                            if ("bolditalic" === u && void 0 !== this.pdf.internal.getFont(s[d], "bold", {
                                noFallback: !0,
                                disableWarning: !0
                            })) h = s[d], u = "bold";
                            else if (void 0 !== this.pdf.internal.getFont(s[d], "normal", {
                                noFallback: !0,
                                disableWarning: !0
                            })) {
                                h = s[d], u = "normal";
                                break;
                            }
                        }
                        if ("" === h) {
                            for(var p = 0; p < s.length; p++)if (l[s[p]]) {
                                h = l[s[p]];
                                break;
                            }
                        }
                        h = "" === h ? "Times" : h, this.pdf.setFont(h, u);
                    }
                }
            }
        }), Object.defineProperty(this, "globalCompositeOperation", {
            get: function get() {
                return this.ctx.globalCompositeOperation;
            },
            set: function set(t) {
                this.ctx.globalCompositeOperation = t;
            }
        }), Object.defineProperty(this, "globalAlpha", {
            get: function get() {
                return this.ctx.globalAlpha;
            },
            set: function set(t) {
                this.ctx.globalAlpha = t;
            }
        }), Object.defineProperty(this, "lineDashOffset", {
            get: function get() {
                return this.ctx.lineDashOffset;
            },
            set: function set(t) {
                this.ctx.lineDashOffset = t, T2.call(this);
            }
        }), Object.defineProperty(this, "lineDash", {
            get: function get() {
                return this.ctx.lineDash;
            },
            set: function set(t) {
                this.ctx.lineDash = t, T2.call(this);
            }
        }), Object.defineProperty(this, "ignoreClearRect", {
            get: function get() {
                return this.ctx.ignoreClearRect;
            },
            set: function set(t) {
                this.ctx.ignoreClearRect = Boolean(t);
            }
        });
    };
    p11.prototype.setLineDash = function(t) {
        this.lineDash = t;
    }, p11.prototype.getLineDash = function() {
        return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
    }, p11.prototype.fill = function() {
        A2.call(this, "fill", !1);
    }, p11.prototype.stroke = function() {
        A2.call(this, "stroke", !1);
    }, p11.prototype.beginPath = function() {
        this.path = [
            {
                type: "begin"
            }
        ];
    }, p11.prototype.moveTo = function(t, e) {
        if (isNaN(t) || isNaN(e)) throw a60.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
        var r = this.ctx.transform.applyToPoint(new c18(t, e));
        this.path.push({
            type: "mt",
            x: r.x,
            y: r.y
        }), this.ctx.lastPoint = new c18(t, e);
    }, p11.prototype.closePath = function() {
        var _$e = new c18(0, 0), r = 0;
        for(r = this.path.length - 1; -1 !== r; r--)if ("begin" === this.path[r].type && "object" === _typeofDefault.default(this.path[r + 1]) && "number" == typeof this.path[r + 1].x) {
            _$e = new c18(this.path[r + 1].x, this.path[r + 1].y);
            break;
        }
        this.path.push({
            type: "close"
        }), this.ctx.lastPoint = new c18(_$e.x, _$e.y);
    }, p11.prototype.lineTo = function(t, e) {
        if (isNaN(t) || isNaN(e)) throw a60.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
        var r = this.ctx.transform.applyToPoint(new c18(t, e));
        this.path.push({
            type: "lt",
            x: r.x,
            y: r.y
        }), this.ctx.lastPoint = new c18(r.x, r.y);
    }, p11.prototype.clip = function() {
        this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), A2.call(this, null, !0);
    }, p11.prototype.quadraticCurveTo = function(t, e, r, n) {
        if (isNaN(r) || isNaN(n) || isNaN(t) || isNaN(e)) throw a60.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
        var _$i = this.ctx.transform.applyToPoint(new c18(r, n)), o = this.ctx.transform.applyToPoint(new c18(t, e));
        this.path.push({
            type: "qct",
            x1: o.x,
            y1: o.y,
            x: _$i.x,
            y: _$i.y
        }), this.ctx.lastPoint = new c18(_$i.x, _$i.y);
    }, p11.prototype.bezierCurveTo = function(t, e, r, n, i25, o) {
        if (isNaN(i25) || isNaN(o) || isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw a60.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
        var s = this.ctx.transform.applyToPoint(new c18(i25, o)), u = this.ctx.transform.applyToPoint(new c18(t, e)), h = this.ctx.transform.applyToPoint(new c18(r, n));
        this.path.push({
            type: "bct",
            x1: u.x,
            y1: u.y,
            x2: h.x,
            y2: h.y,
            x: s.x,
            y: s.y
        }), this.ctx.lastPoint = new c18(s.x, s.y);
    }, p11.prototype.arc = function(t, e, r, n, i26, o) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i26)) throw a60.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
        if (o = Boolean(o), !this.ctx.transform.isIdentity) {
            var s = this.ctx.transform.applyToPoint(new c18(t, e));
            t = s.x, e = s.y;
            var u = this.ctx.transform.applyToPoint(new c18(0, r)), h = this.ctx.transform.applyToPoint(new c18(0, 0));
            r = Math.sqrt(Math.pow(u.x - h.x, 2) + Math.pow(u.y - h.y, 2));
        }
        Math.abs(i26 - n) >= 2 * Math.PI && (n = 0, i26 = 2 * Math.PI), this.path.push({
            type: "arc",
            x: t,
            y: e,
            radius: r,
            startAngle: n,
            endAngle: i26,
            counterclockwise: o
        });
    }, p11.prototype.arcTo = function(t, e, r, n, i) {
        throw new Error("arcTo not implemented.");
    }, p11.prototype.rect = function(t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw a60.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
        this.moveTo(t, e), this.lineTo(t + r, e), this.lineTo(t + r, e + n), this.lineTo(t, e + n), this.lineTo(t, e), this.lineTo(t + r, e), this.lineTo(t, e);
    }, p11.prototype.fillRect = function(t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw a60.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
        if (!m.call(this)) {
            var _$i = {};
            "butt" !== this.lineCap && (_$i.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (_$i.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t, e, r, n), this.fill(), _$i.hasOwnProperty("lineCap") && (this.lineCap = _$i.lineCap), _$i.hasOwnProperty("lineJoin") && (this.lineJoin = _$i.lineJoin);
        }
    }, p11.prototype.strokeRect = function(t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw a60.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
        v.call(this) || (this.beginPath(), this.rect(t, e, r, n), this.stroke());
    }, p11.prototype.clearRect = function(t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw a60.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
        this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t, e, r, n));
    }, p11.prototype.save = function(t) {
        t = "boolean" != typeof t || t;
        for(var _$e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)this.pdf.setPage(r + 1), this.pdf.internal.out("q");
        if (this.pdf.setPage(_$e), t) {
            this.ctx.fontSize = this.pdf.internal.getFontSize();
            var n = new d(this.ctx);
            this.ctxStack.push(this.ctx), this.ctx = n;
        }
    }, p11.prototype.restore = function(t) {
        t = "boolean" != typeof t || t;
        for(var _$e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)this.pdf.setPage(r + 1), this.pdf.internal.out("Q");
        this.pdf.setPage(_$e), t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
    }, p11.prototype.toDataURL = function() {
        throw new Error("toDataUrl not implemented.");
    };
    var g = function g(t) {
        var _$e, r, n, _$i;
        if (!0 === t.isCanvasGradient && (t = t.getColor()), !t) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            style: t
        };
        if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t)) _$e = 0, r = 0, n = 0, _$i = 0;
        else {
            var a = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
            if (null !== a) _$e = parseInt(a[1]), r = parseInt(a[2]), n = parseInt(a[3]), _$i = 1;
            else if (null !== (a = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t))) _$e = parseInt(a[1]), r = parseInt(a[2]), n = parseInt(a[3]), _$i = parseFloat(a[4]);
            else {
                if (_$i = 1, "string" == typeof t && "#" !== t.charAt(0)) {
                    var o = new f16(t);
                    t = o.ok ? o.toHex() : "#000000";
                }
                4 === t.length ? (_$e = t.substring(1, 2), _$e += _$e, r = t.substring(2, 3), r += r, n = t.substring(3, 4), n += n) : (_$e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7)), _$e = parseInt(_$e, 16), r = parseInt(r, 16), n = parseInt(n, 16);
            }
        }
        return {
            r: _$e,
            g: r,
            b: n,
            a: _$i,
            style: t
        };
    }, m = function m() {
        return this.ctx.isFillTransparent || 0 == this.globalAlpha;
    }, v = function v() {
        return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha);
    };
    p11.prototype.fillText = function(t, e, r, n) {
        if (isNaN(e) || isNaN(r) || "string" != typeof t) throw a60.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
        if (n = isNaN(n) ? void 0 : n, !m.call(this)) {
            var _$i = q2(this.ctx.transform.rotation), o = this.ctx.transform.scaleX;
            C2.call(this, {
                text: t,
                x: e,
                y: r,
                scale: o,
                angle: _$i,
                align: this.textAlign,
                maxWidth: n
            });
        }
    }, p11.prototype.strokeText = function(t, e, r, n) {
        if (isNaN(e) || isNaN(r) || "string" != typeof t) throw a60.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
        if (!v.call(this)) {
            n = isNaN(n) ? void 0 : n;
            var _$i = q2(this.ctx.transform.rotation), o = this.ctx.transform.scaleX;
            C2.call(this, {
                text: t,
                x: e,
                y: r,
                scale: o,
                renderingMode: "stroke",
                angle: _$i,
                align: this.textAlign,
                maxWidth: n
            });
        }
    }, p11.prototype.measureText = function(t33) {
        if ("string" != typeof t33) throw a60.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
        var _$e3 = this.pdf, r = this.pdf.internal.scaleFactor, n = _$e3.internal.getFontSize(), _$i = _$e3.getStringUnitWidth(t33) * n / _$e3.internal.scaleFactor, o = function o(t) {
            var _$e = (t = t || {}).width || 0;
            return Object.defineProperty(this, "width", {
                get: function get() {
                    return _$e;
                }
            }), this;
        };
        return new o({
            width: _$i *= Math.round(96 * r / 72 * 10000) / 10000
        });
    }, p11.prototype.scale = function(t, e) {
        if (isNaN(t) || isNaN(e)) throw a60.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
        var r = new h18(t, 0, 0, e, 0, 0);
        this.ctx.transform = this.ctx.transform.multiply(r);
    }, p11.prototype.rotate = function(t) {
        if (isNaN(t)) throw a60.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
        var _$e = new h18(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0);
        this.ctx.transform = this.ctx.transform.multiply(_$e);
    }, p11.prototype.translate = function(t, e) {
        if (isNaN(t) || isNaN(e)) throw a60.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
        var r = new h18(1, 0, 0, 1, t, e);
        this.ctx.transform = this.ctx.transform.multiply(r);
    }, p11.prototype.transform = function(t, e, r, n, i27, o) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i27) || isNaN(o)) throw a60.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
        var s = new h18(t, e, r, n, i27, o);
        this.ctx.transform = this.ctx.transform.multiply(s);
    }, p11.prototype.setTransform = function(t, e, r, n, i28, a) {
        t = isNaN(t) ? 1 : t, e = isNaN(e) ? 0 : e, r = isNaN(r) ? 0 : r, n = isNaN(n) ? 1 : n, i28 = isNaN(i28) ? 0 : i28, a = isNaN(a) ? 0 : a, this.ctx.transform = new h18(t, e, r, n, i28, a);
    };
    var b = function b() {
        return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
    };
    p11.prototype.drawImage = function(t, e, r, n, i29, a, o, s, c) {
        var l = this.pdf.getImageProperties(t), f = 1, d = 1, p = 1, g = 1;
        void 0 !== n && void 0 !== s && (p = s / n, g = c / i29, f = l.width / n * s / n, d = l.height / i29 * c / i29), void 0 === a && (a = e, o = r, e = 0, r = 0), void 0 !== n && void 0 === s && (s = n, c = i29), void 0 === n && void 0 === s && (s = l.width, c = l.height);
        for(var m, v = this.ctx.transform.decompose(), w = q2(v.rotate.shx), A = new h18, S = (A = (A = (A = A.multiply(v.translate)).multiply(v.skew)).multiply(v.scale)).applyToRectangle(new u22(a - e * p, o - r * g, n * f, i29 * d)), _ = _$y.call(this, S), P = [], k = 0; k < _.length; k += 1)-1 === P.indexOf(_[k]) && P.push(_[k]);
        if (L(P), this.autoPaging) for(var _$I = P[0], F4 = P[P.length - 1], C3 = _$I; C3 < F4 + 1; C3++){
            this.pdf.setPage(C3);
            var _$j = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], O4 = 1 === C3 ? this.posY + this.margin[0] : this.margin[0], B3 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], M2 = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], _$E = 1 === C3 ? 0 : B3 + (C3 - 2) * M2;
            if (0 !== this.ctx.clip_path.length) {
                var D = this.path;
                m = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = N(m, this.posX + this.margin[3], -_$E + O4 + this.ctx.prevPageLastElemOffset), x5.call(this, "fill", !0), this.path = D;
            }
            var R = JSON.parse(JSON.stringify(S));
            R = N([
                R
            ], this.posX + this.margin[3], -_$E + O4 + this.ctx.prevPageLastElemOffset)[0];
            var T = (C3 > _$I || C3 < F4) && b.call(this);
            T && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], _$j, M2, null).clip().discardPath()), this.pdf.addImage(t, "JPEG", R.x, R.y, R.w, R.h, null, null, w), T && this.pdf.restoreGraphicsState();
        }
        else this.pdf.addImage(t, "JPEG", S.x, S.y, S.w, S.h, null, null, w);
    };
    var _$y = function _$y(t, e, r) {
        var n = [];
        e = e || this.pdf.internal.pageSize.width, r = r || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
        var _$i = this.posY + this.ctx.prevPageLastElemOffset;
        switch(t.type){
            default:
            case "mt":
            case "lt":
                n.push(Math.floor((t.y + _$i) / r) + 1);
                break;
            case "arc":
                n.push(Math.floor((t.y + _$i - t.radius) / r) + 1), n.push(Math.floor((t.y + _$i + t.radius) / r) + 1);
                break;
            case "qct":
                var a = D2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);
                n.push(Math.floor((a.y + _$i) / r) + 1), n.push(Math.floor((a.y + a.h + _$i) / r) + 1);
                break;
            case "bct":
                var o = R2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);
                n.push(Math.floor((o.y + _$i) / r) + 1), n.push(Math.floor((o.y + o.h + _$i) / r) + 1);
                break;
            case "rect":
                n.push(Math.floor((t.y + _$i) / r) + 1), n.push(Math.floor((t.y + t.h + _$i) / r) + 1);
        }
        for(var s = 0; s < n.length; s += 1)for(; this.pdf.internal.getNumberOfPages() < n[s];)w5.call(this);
        return n;
    }, w5 = function w5() {
        var _$t = this.fillStyle, _$e = this.strokeStyle, r = this.font, n = this.lineCap, _$i = this.lineWidth, a = this.lineJoin;
        this.pdf.addPage(), this.fillStyle = _$t, this.strokeStyle = _$e, this.font = r, this.lineCap = n, this.lineWidth = _$i, this.lineJoin = a;
    }, N = function N(t, e, r) {
        for(var n = 0; n < t.length; n++)switch(t[n].type){
            case "bct":
                t[n].x2 += e, t[n].y2 += r;
            case "qct":
                t[n].x1 += e, t[n].y1 += r;
            case "mt":
            case "lt":
            case "arc":
            default:
                t[n].x += e, t[n].y += r;
        }
        return t;
    }, L = function L(t34) {
        return t34.sort(function(t, e) {
            return t - e;
        });
    }, A2 = function A2(t, e) {
        for(var r, n, _$i = this.fillStyle, a = this.strokeStyle, o = this.lineCap, s = this.lineWidth, c = Math.abs(s * this.ctx.transform.scaleX), u = this.lineJoin, h = JSON.parse(JSON.stringify(this.path)), l = JSON.parse(JSON.stringify(this.path)), f = [], d = 0; d < l.length; d++)if (void 0 !== l[d].x) for(var p = _$y.call(this, l[d]), g = 0; g < p.length; g += 1)-1 === f.indexOf(p[g]) && f.push(p[g]);
        for(var m = 0; m < f.length; m++)for(; this.pdf.internal.getNumberOfPages() < f[m];)w5.call(this);
        if (L(f), this.autoPaging) for(var v = f[0], A = f[f.length - 1], S = v; S < A + 1; S++){
            this.pdf.setPage(S), this.fillStyle = _$i, this.strokeStyle = a, this.lineCap = o, this.lineWidth = c, this.lineJoin = u;
            var _ = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], P = 1 === S ? this.posY + this.margin[0] : this.margin[0], k = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], _$I = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], F5 = 1 === S ? 0 : k + (S - 2) * _$I;
            if (0 !== this.ctx.clip_path.length) {
                var C4 = this.path;
                r = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = N(r, this.posX + this.margin[3], -F5 + P + this.ctx.prevPageLastElemOffset), x5.call(this, t, !0), this.path = C4;
            }
            if (n = JSON.parse(JSON.stringify(h)), this.path = N(n, this.posX + this.margin[3], -F5 + P + this.ctx.prevPageLastElemOffset), !1 === e || 0 === S) {
                var _$j = (S > v || S < A) && b.call(this);
                _$j && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], _, _$I, null).clip().discardPath()), x5.call(this, t, e), _$j && this.pdf.restoreGraphicsState();
            }
            this.lineWidth = s;
        }
        else this.lineWidth = c, x5.call(this, t, e), this.lineWidth = s;
        this.path = h;
    }, x5 = function x5(t, e) {
        if (("stroke" !== t || e || !v.call(this)) && ("stroke" === t || e || !m.call(this))) {
            for(var r, n, _$i = [], a = this.path, o = 0; o < a.length; o++){
                var s = a[o];
                switch(s.type){
                    case "begin":
                        _$i.push({
                            begin: !0
                        });
                        break;
                    case "close":
                        _$i.push({
                            close: !0
                        });
                        break;
                    case "mt":
                        _$i.push({
                            start: s,
                            deltas: [],
                            abs: []
                        });
                        break;
                    case "lt":
                        var c = _$i.length;
                        if (a[o - 1] && !isNaN(a[o - 1].x) && (r = [
                            s.x - a[o - 1].x,
                            s.y - a[o - 1].y
                        ], c > 0)) {
                            for(; c >= 0; c--)if (!0 !== _$i[c - 1].close && !0 !== _$i[c - 1].begin) {
                                _$i[c - 1].deltas.push(r), _$i[c - 1].abs.push(s);
                                break;
                            }
                        }
                        break;
                    case "bct":
                        r = [
                            s.x1 - a[o - 1].x,
                            s.y1 - a[o - 1].y,
                            s.x2 - a[o - 1].x,
                            s.y2 - a[o - 1].y,
                            s.x - a[o - 1].x,
                            s.y - a[o - 1].y
                        ], _$i[_$i.length - 1].deltas.push(r);
                        break;
                    case "qct":
                        var u = a[o - 1].x + 2 / 3 * (s.x1 - a[o - 1].x), h = a[o - 1].y + 2 / 3 * (s.y1 - a[o - 1].y), l = s.x + 2 / 3 * (s.x1 - s.x), f = s.y + 2 / 3 * (s.y1 - s.y), d = s.x, p = s.y;
                        r = [
                            u - a[o - 1].x,
                            h - a[o - 1].y,
                            l - a[o - 1].x,
                            f - a[o - 1].y,
                            d - a[o - 1].x,
                            p - a[o - 1].y
                        ], _$i[_$i.length - 1].deltas.push(r);
                        break;
                    case "arc":
                        _$i.push({
                            deltas: [],
                            abs: [],
                            arc: !0
                        }), Array.isArray(_$i[_$i.length - 1].abs) && _$i[_$i.length - 1].abs.push(s);
                }
            }
            n = e ? null : "stroke" === t ? "stroke" : "fill";
            for(var g = !1, b = 0; b < _$i.length; b++)if (_$i[b].arc) for(var _$y = _$i[b].abs, w = 0; w < _$y.length; w++){
                var N = _$y[w];
                "arc" === N.type ? P2.call(this, N.x, N.y, N.radius, N.startAngle, N.endAngle, N.counterclockwise, void 0, e, !g) : _$j1.call(this, N.x, N.y), g = !0;
            }
            else if (!0 === _$i[b].close) this.pdf.internal.out("h"), g = !1;
            else if (!0 !== _$i[b].begin) {
                var L = _$i[b].start.x, A = _$i[b].start.y;
                O3.call(this, _$i[b].deltas, L, A), g = !0;
            }
            n && k3.call(this, n), e && _$I1.call(this);
        }
    }, S4 = function S4(t) {
        var _$e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, r = _$e * (this.pdf.internal.getLineHeightFactor() - 1);
        switch(this.ctx.textBaseline){
            case "bottom":
                return t - r;
            case "top":
                return t + _$e - r;
            case "hanging":
                return t + _$e - 2 * r;
            case "middle":
                return t + _$e / 2 - r;
            case "ideographic":
                return t;
            case "alphabetic":
            default:
                return t;
        }
    }, _2 = function _2(t) {
        return t + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
    };
    p11.prototype.createLinearGradient = function() {
        var _$t = function _$t() {};
        return _$t.colorStops = [], _$t.addColorStop = function(t, e) {
            this.colorStops.push([
                t,
                e
            ]);
        }, _$t.getColor = function() {
            return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1];
        }, _$t.isCanvasGradient = !0, _$t;
    }, p11.prototype.createPattern = function() {
        return this.createLinearGradient();
    }, p11.prototype.createRadialGradient = function() {
        return this.createLinearGradient();
    };
    var P2 = function P2(t, e, r, n, i30, a, o, s, c) {
        for(var u = M1.call(this, r, n, i30, a), h = 0; h < u.length; h++){
            var l = u[h];
            0 === h && (c ? F3.call(this, l.x1 + t, l.y1 + e) : _$j1.call(this, l.x1 + t, l.y1 + e)), B2.call(this, t, e, l.x2, l.y2, l.x3, l.y3, l.x4, l.y4);
        }
        s ? _$I1.call(this) : k3.call(this, o);
    }, k3 = function k3(t) {
        switch(t){
            case "stroke":
                this.pdf.internal.out("S");
                break;
            case "fill":
                this.pdf.internal.out("f");
        }
    }, _$I1 = function _$I1() {
        this.pdf.clip(), this.pdf.discardPath();
    }, F3 = function F3(t, e) {
        this.pdf.internal.out(n80(t) + " " + _$i6(e) + " m");
    }, C2 = function C2(t) {
        var _$e;
        switch(t.align){
            case "right":
            case "end":
                _$e = "right";
                break;
            case "center":
                _$e = "center";
                break;
            case "left":
            case "start":
            default:
                _$e = "left";
        }
        var r = this.pdf.getTextDimensions(t.text), n = S4.call(this, t.y), _$i = _2.call(this, n) - r.h, a = this.ctx.transform.applyToPoint(new c18(t.x, n)), o = this.ctx.transform.decompose(), s = new h18;
        s = (s = (s = s.multiply(o.translate)).multiply(o.skew)).multiply(o.scale);
        for(var l, f, d, p = this.ctx.transform.applyToRectangle(new u22(t.x, n, r.w, r.h)), g = s.applyToRectangle(new u22(t.x, _$i, r.w, r.h)), m = _$y.call(this, g), v = [], w = 0; w < m.length; w += 1)-1 === v.indexOf(m[w]) && v.push(m[w]);
        if (L(v), this.autoPaging) for(var A = v[0], P = v[v.length - 1], k = A; k < P + 1; k++){
            this.pdf.setPage(k);
            var _$I = 1 === k ? this.posY + this.margin[0] : this.margin[0], F6 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], C5 = this.pdf.internal.pageSize.height - this.margin[2], _$j = C5 - this.margin[0], O5 = this.pdf.internal.pageSize.width - this.margin[1], B4 = O5 - this.margin[3], M3 = 1 === k ? 0 : F6 + (k - 2) * _$j;
            if (0 !== this.ctx.clip_path.length) {
                var _$E = this.path;
                l = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = N(l, this.posX + this.margin[3], -1 * M3 + _$I), x5.call(this, "fill", !0), this.path = _$E;
            }
            var q = N([
                JSON.parse(JSON.stringify(g))
            ], this.posX + this.margin[3], -M3 + _$I + this.ctx.prevPageLastElemOffset)[0];
            t.scale >= 0.01 && (f = this.pdf.internal.getFontSize(), this.pdf.setFontSize(f * t.scale), d = this.lineWidth, this.lineWidth = d * t.scale);
            var D = "text" !== this.autoPaging;
            if (D || q.y + q.h <= C5) {
                if (D || q.y >= _$I && q.x <= O5) {
                    var R = D ? t.text : this.pdf.splitTextToSize(t.text, t.maxWidth || O5 - q.x)[0], T = N([
                        JSON.parse(JSON.stringify(p))
                    ], this.posX + this.margin[3], -M3 + _$I + this.ctx.prevPageLastElemOffset)[0], U = D && (k > A || k < P) && b.call(this);
                    U && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], B4, _$j, null).clip().discardPath()), this.pdf.text(R, T.x, T.y, {
                        angle: t.angle,
                        align: _$e,
                        renderingMode: t.renderingMode
                    }), U && this.pdf.restoreGraphicsState();
                }
            } else q.y < C5 && (this.ctx.prevPageLastElemOffset += C5 - q.y);
            t.scale >= 0.01 && (this.pdf.setFontSize(f), this.lineWidth = d);
        }
        else t.scale >= 0.01 && (f = this.pdf.internal.getFontSize(), this.pdf.setFontSize(f * t.scale), d = this.lineWidth, this.lineWidth = d * t.scale), this.pdf.text(t.text, a.x + this.posX, a.y + this.posY, {
            angle: t.angle,
            align: _$e,
            renderingMode: t.renderingMode,
            maxWidth: t.maxWidth
        }), t.scale >= 0.01 && (this.pdf.setFontSize(f), this.lineWidth = d);
    }, _$j1 = function _$j1(t, e, r, a) {
        r = r || 0, a = a || 0, this.pdf.internal.out(n80(t + r) + " " + _$i6(e + a) + " l");
    }, O3 = function O3(t, e, r) {
        return this.pdf.lines(t, e, r, null, null);
    }, B2 = function B2(t, e, n, i31, a, c, u, h) {
        this.pdf.internal.out([
            r13(o47(n + t)),
            r13(s12(i31 + e)),
            r13(o47(a + t)),
            r13(s12(c + e)),
            r13(o47(u + t)),
            r13(s12(h + e)),
            "c"
        ].join(" "));
    }, M1 = function M1(t, e, r, n) {
        for(var _$i = 2 * Math.PI, a = Math.PI / 2; e > r;)e -= _$i;
        var o = Math.abs(r - e);
        o < _$i && n && (o = _$i - o);
        for(var s = [], c = n ? -1 : 1, u = e; o > 0.00001;){
            var h = u + c * Math.min(o, a);
            s.push(_$E1.call(this, t, u, h)), o -= Math.abs(h - u), u = h;
        }
        return s;
    }, _$E1 = function _$E1(t, e, r) {
        var n = (r - e) / 2, _$i = t * Math.cos(n), a = t * Math.sin(n), o = _$i, s = -a, c = o * o + s * s, u = c + o * _$i + s * a, h = 4 / 3 * (Math.sqrt(2 * c * u) - u) / (o * a - s * _$i), l = o - h * s, f = s + h * o, d = l, p = -f, g = n + e, m = Math.cos(g), v = Math.sin(g);
        return {
            x1: t * Math.cos(e),
            y1: t * Math.sin(e),
            x2: l * m - f * v,
            y2: l * v + f * m,
            x3: d * m - p * v,
            y3: d * v + p * m,
            x4: t * Math.cos(r),
            y4: t * Math.sin(r)
        };
    }, q2 = function q2(t) {
        return 180 * t / Math.PI;
    }, D2 = function D2(t, e, r, n, i32, a) {
        var o = t + 0.5 * (r - t), s = e + 0.5 * (n - e), c = i32 + 0.5 * (r - i32), h = a + 0.5 * (n - a), l = Math.min(t, i32, o, c), f = Math.max(t, i32, o, c), d = Math.min(e, a, s, h), p = Math.max(e, a, s, h);
        return new u22(l, d, f - l, p - d);
    }, R2 = function R2(t, e, r, n, i33, a, o, s) {
        var c, h, l, f, d, p, g, m, v, b, _$y, w, N, L, A = r - t, x6 = n - e, S = i33 - r, _ = a - n, P = o - i33, k = s - a;
        for(h = 0; h < 41; h++)v = (g = (l = t + (c = h / 40) * A) + c * ((d = r + c * S) - l)) + c * (d + c * (i33 + c * P - d) - g), b = (m = (f = e + c * x6) + c * ((p = n + c * _) - f)) + c * (p + c * (a + c * k - p) - m), 0 == h ? (_$y = v, w = b, N = v, L = b) : (_$y = Math.min(_$y, v), w = Math.min(w, b), N = Math.max(N, v), L = Math.max(L, b));
        return new u22(Math.round(_$y), Math.round(w), Math.round(N - _$y), Math.round(L - w));
    }, T2 = function T2() {
        if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
            var _$t, _$e, r = (_$t = this.ctx.lineDash, _$e = this.ctx.lineDashOffset, JSON.stringify({
                lineDash: _$t,
                lineDashOffset: _$e
            }));
            this.prevLineDash !== r && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = r);
        }
    };
}(E.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t35) {
    var r20 = function r20(t36) {
        var e26, r19, n, _$i, a, o, s, c, u, h;
        for(/[^\x00-\xFF]/.test(t36), r19 = [], n = 0, _$i = (t36 += e26 = "\0\0\0\0".slice(t36.length % 4 || 4)).length; _$i > n; n += 4)0 !== (a = (t36.charCodeAt(n) << 24) + (t36.charCodeAt(n + 1) << 16) + (t36.charCodeAt(n + 2) << 8) + t36.charCodeAt(n + 3)) ? (o = (a = ((a = ((a = ((a = (a - (h = a % 85)) / 85) - (u = a % 85)) / 85) - (c = a % 85)) / 85) - (s = a % 85)) / 85) % 85, r19.push(o + 33, s + 33, c + 33, u + 33, h + 33)) : r19.push(122);
        return function(t, e) {
            for(var r = e; r > 0; r--)t.pop();
        }(r19, e26.length), String.fromCharCode.apply(String, r19) + "~>";
    }, n84 = function n84(t37) {
        var e27, r22, n, _$i, a, o = String, s = "length", c = 255, u = "charCodeAt", h = "slice", l = "replace";
        for(t37[h](-2), t37 = t37[h](0, -2)[l](/\s/g, "")[l]("z", "!!!!!"), n = [], _$i = 0, a = (t37 += e27 = "uuuuu"[h](t37[s] % 5 || 5))[s]; a > _$i; _$i += 5)r22 = 52200625 * (t37[u](_$i) - 33) + 614125 * (t37[u](_$i + 1) - 33) + 7225 * (t37[u](_$i + 2) - 33) + 85 * (t37[u](_$i + 3) - 33) + (t37[u](_$i + 4) - 33), n.push(c & r22 >> 24, c & r22 >> 16, c & r22 >> 8, c & r22);
        return function(t, e) {
            for(var r = e; r > 0; r--)t.pop();
        }(n, e27[s]), o.fromCharCode.apply(o, n);
    }, _$i10 = function _$i10(t) {
        var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
        if (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))), t.length % 2 && (t += "0"), !1 === e.test(t)) return "";
        for(var r = "", n = 0; n < t.length; n += 2)r += String.fromCharCode("0x" + (t[n] + t[n + 1]));
        return r;
    }, a62 = function a62(t38) {
        for(var r = new Uint8Array(t38.length), n = t38.length; n--;)r[n] = t38.charCodeAt(n);
        return t38 = (r = _fflate.zlibSync(r)).reduce(function(t, e) {
            return t + String.fromCharCode(e);
        }, "");
    };
    t35.processDataByFilters = function(t39, e) {
        var o = 0, s = t39 || "", c = [];
        for("string" == typeof (e = e || []) && (e = [
            e
        ]), o = 0; o < e.length; o += 1)switch(e[o]){
            case "ASCII85Decode":
            case "/ASCII85Decode":
                s = n84(s), c.push("/ASCII85Encode");
                break;
            case "ASCII85Encode":
            case "/ASCII85Encode":
                s = r20(s), c.push("/ASCII85Decode");
                break;
            case "ASCIIHexDecode":
            case "/ASCIIHexDecode":
                s = _$i10(s), c.push("/ASCIIHexEncode");
                break;
            case "ASCIIHexEncode":
            case "/ASCIIHexEncode":
                s = s.split("").map(function(t) {
                    return ("0" + t.charCodeAt().toString(16)).slice(-2);
                }).join("") + ">", c.push("/ASCIIHexDecode");
                break;
            case "FlateEncode":
            case "/FlateEncode":
                s = a62(s), c.push("/FlateDecode");
                break;
            default:
                throw new Error('The filter: "' + e[o] + '" is not implemented');
        }
        return {
            data: s,
            reverseChain: c.reverse().join(" ")
        };
    };
}(E.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t40) {
    t40.loadFile = function(t41, e28, r23) {
        return function(t42, e29, r) {
            e29 = !1 !== e29, r = "function" == typeof r ? r : function r() {};
            var n85 = void 0;
            try {
                n85 = function(t43, e, r) {
                    var n86 = new XMLHttpRequest, _$i = 0, a = function a(t) {
                        var _$e = t.length, _$r = [], n = String.fromCharCode;
                        for(_$i = 0; _$i < _$e; _$i += 1)_$r.push(n(255 & t.charCodeAt(_$i)));
                        return _$r.join("");
                    };
                    if (n86.open("GET", t43, !e), n86.overrideMimeType("text/plain; charset=x-user-defined"), !1 === e && (n86.onload = function() {
                        200 === n86.status ? r(a(this.responseText)) : r(void 0);
                    }), n86.send(null), e && 200 === n86.status) return a(n86.responseText);
                }(t42, e29, r);
            } catch (t) {}
            return n85;
        }(t41, e28, r23);
    }, t40.loadImageFile = t40.loadFile;
}(E.API), function(e30) {
    var r = function r() {
        return (n73.html2canvas ? Promise.resolve(n73.html2canvas) : require("f9c07e0a6537ace9")).catch(function(t) {
            return Promise.reject(new Error("Could not load html2canvas: " + t));
        }).then(function(t) {
            return t.default ? t.default : t;
        });
    };
    var _$i = function _$i() {
        return (n73.DOMPurify ? Promise.resolve(n73.DOMPurify) : require("364d6894cfa3ed9")).catch(function(t) {
            return Promise.reject(new Error("Could not load dompurify: " + t));
        }).then(function(t) {
            return t.default ? t.default : t;
        });
    };
    var a = function a(e) {
        var r = _typeofDefault.default(e);
        return "undefined" === r ? "undefined" : "string" === r || e instanceof String ? "string" : "number" === r || e instanceof Number ? "number" : "function" === r || e instanceof Function ? "function" : e && e.constructor === Array ? "array" : e && 1 === e.nodeType ? "element" : "object" === r ? "object" : "unknown";
    }, o = function o(t, e) {
        var r = document.createElement(t);
        for(var n in e.className && (r.className = e.className), e.innerHTML && e.dompurify && (r.innerHTML = e.dompurify.sanitize(e.innerHTML)), e.style)r.style[n] = e.style[n];
        return r;
    }, s14 = function t(e) {
        var r = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))), n = t.convert(Promise.resolve(), r);
        return n = (n = n.setProgress(1, t, 1, [
            t
        ])).set(e);
    };
    (s14.prototype = Object.create(Promise.prototype)).constructor = s14, s14.convert = function(t, e) {
        return t.__proto__ = e || s14.prototype, t;
    }, s14.template = {
        prop: {
            src: null,
            container: null,
            overlay: null,
            canvas: null,
            img: null,
            pdf: null,
            pageSize: null,
            callback: function callback() {}
        },
        progress: {
            val: 0,
            state: null,
            n: 0,
            stack: []
        },
        opt: {
            filename: "file.pdf",
            margin: [
                0,
                0,
                0,
                0
            ],
            enableLinks: !0,
            x: 0,
            y: 0,
            html2canvas: {},
            jsPDF: {},
            backgroundColor: "transparent"
        }
    }, s14.prototype.from = function(t44, e31) {
        return this.then(function() {
            switch(e31 = e31 || function(t) {
                switch(a(t)){
                    case "string":
                        return "string";
                    case "element":
                        return "canvas" === t.nodeName.toLowerCase() ? "canvas" : "element";
                    default:
                        return "unknown";
                }
            }(t44)){
                case "string":
                    return this.then(_$i).then(function(e) {
                        return this.set({
                            src: o("div", {
                                innerHTML: t44,
                                dompurify: e
                            })
                        });
                    });
                case "element":
                    return this.set({
                        src: t44
                    });
                case "canvas":
                    return this.set({
                        canvas: t44
                    });
                case "img":
                    return this.set({
                        img: t44
                    });
                default:
                    return this.error("Unknown source type.");
            }
        });
    }, s14.prototype.to = function(t) {
        switch(t){
            case "container":
                return this.toContainer();
            case "canvas":
                return this.toCanvas();
            case "img":
                return this.toImg();
            case "pdf":
                return this.toPdf();
            default:
                return this.error("Invalid target.");
        }
    }, s14.prototype.toContainer = function() {
        return this.thenList([
            function() {
                return this.prop.src || this.error("Cannot duplicate - no source HTML.");
            },
            function() {
                return this.prop.pageSize || this.setPageSize();
            }
        ]).then(function() {
            var _$t = {
                position: "relative",
                display: "inline-block",
                width: ("number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
                left: 0,
                right: 0,
                top: 0,
                margin: "auto",
                backgroundColor: this.opt.backgroundColor
            }, _$e = function t(e, r) {
                for(var n = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), _$i = e.firstChild; _$i; _$i = _$i.nextSibling)!0 !== r && 1 === _$i.nodeType && "SCRIPT" === _$i.nodeName || n.appendChild(t(_$i, r));
                return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (n.width = e.width, n.height = e.height, n.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (n.value = e.value), n.addEventListener("load", function() {
                    n.scrollTop = e.scrollTop, n.scrollLeft = e.scrollLeft;
                }, !0)), n;
            }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
            "BODY" === _$e.tagName && (_$t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o("div", {
                className: "html2pdf__overlay",
                style: {
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 1000,
                    left: "-100000px",
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            }), this.prop.container = o("div", {
                className: "html2pdf__container",
                style: _$t
            }), this.prop.container.appendChild(_$e), this.prop.container.firstChild.appendChild(o("div", {
                style: {
                    clear: "both",
                    border: "0 none transparent",
                    margin: 0,
                    padding: 0,
                    height: 0
                }
            })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
        });
    }, s14.prototype.toCanvas = function() {
        var _$t = [
            function() {
                return document.body.contains(this.prop.container) || this.toContainer();
            }
        ];
        return this.thenList(_$t).then(r).then(function(t) {
            var _$e = Object.assign({}, this.opt.html2canvas);
            return delete _$e.onrendered, t(this.prop.container, _$e);
        }).then(function(t) {
            (this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay);
        });
    }, s14.prototype.toContext2d = function() {
        var _$t = [
            function() {
                return document.body.contains(this.prop.container) || this.toContainer();
            }
        ];
        return this.thenList(_$t).then(r).then(function(t45) {
            var _$e = this.opt.jsPDF, r = this.opt.fontFaces, n = "number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, _$i = Object.assign({
                async: !0,
                allowTaint: !0,
                scale: n,
                scrollX: this.opt.scrollX || 0,
                scrollY: this.opt.scrollY || 0,
                backgroundColor: "#ffffff",
                imageTimeout: 15000,
                logging: !0,
                proxy: null,
                removeContainer: !0,
                foreignObjectRendering: !1,
                useCORS: !1
            }, this.opt.html2canvas);
            if (delete _$i.onrendered, _$e.context2d.autoPaging = void 0 === this.opt.autoPaging || this.opt.autoPaging, _$e.context2d.posX = this.opt.x, _$e.context2d.posY = this.opt.y, _$e.context2d.margin = this.opt.margin, _$e.context2d.fontFaces = r, r) for(var a = 0; a < r.length; ++a){
                var o = r[a], s = o.src.find(function(t) {
                    return "truetype" === t.format;
                });
                s && _$e.addFont(s.url, o.ref.name, o.ref.style);
            }
            return _$i.windowHeight = _$i.windowHeight || 0, _$i.windowHeight = 0 == _$i.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : _$i.windowHeight, _$e.context2d.save(!0), t45(this.prop.container, _$i);
        }).then(function(t) {
            this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay);
        });
    }, s14.prototype.toImg = function() {
        return this.thenList([
            function() {
                return this.prop.canvas || this.toCanvas();
            }
        ]).then(function() {
            var _$t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
            this.prop.img = document.createElement("img"), this.prop.img.src = _$t;
        });
    }, s14.prototype.toPdf = function() {
        return this.thenList([
            function() {
                return this.toContext2d();
            }
        ]).then(function() {
            this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
        });
    }, s14.prototype.output = function(t, e, r) {
        return "img" === (r = r || "pdf").toLowerCase() || "image" === r.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e);
    }, s14.prototype.outputPdf = function(t, e) {
        return this.thenList([
            function() {
                return this.prop.pdf || this.toPdf();
            }
        ]).then(function() {
            return this.prop.pdf.output(t, e);
        });
    }, s14.prototype.outputImg = function(t) {
        return this.thenList([
            function() {
                return this.prop.img || this.toImg();
            }
        ]).then(function() {
            switch(t){
                case void 0:
                case "img":
                    return this.prop.img;
                case "datauristring":
                case "dataurlstring":
                    return this.prop.img.src;
                case "datauri":
                case "dataurl":
                    return document.location.href = this.prop.img.src;
                default:
                    throw 'Image output type "' + t + '" is not supported.';
            }
        });
    }, s14.prototype.save = function(t) {
        return this.thenList([
            function() {
                return this.prop.pdf || this.toPdf();
            }
        ]).set(t ? {
            filename: t
        } : null).then(function() {
            this.prop.pdf.save(this.opt.filename);
        });
    }, s14.prototype.doCallback = function() {
        return this.thenList([
            function() {
                return this.prop.pdf || this.toPdf();
            }
        ]).then(function() {
            this.prop.callback(this.prop.pdf);
        });
    }, s14.prototype.set = function(t) {
        if ("object" !== a(t)) return this;
        var _$e = Object.keys(t || {}).map(function(e) {
            if (e in s14.template.prop) return function() {
                this.prop[e] = t[e];
            };
            switch(e){
                case "margin":
                    return this.setMargin.bind(this, t.margin);
                case "jsPDF":
                    return function() {
                        return this.opt.jsPDF = t.jsPDF, this.setPageSize();
                    };
                case "pageSize":
                    return this.setPageSize.bind(this, t.pageSize);
                default:
                    return function() {
                        this.opt[e] = t[e];
                    };
            }
        }, this);
        return this.then(function() {
            return this.thenList(_$e);
        });
    }, s14.prototype.get = function(t, e) {
        return this.then(function() {
            var r = t in s14.template.prop ? this.prop[t] : this.opt[t];
            return e ? e(r) : r;
        });
    }, s14.prototype.setMargin = function(t) {
        return this.then(function() {
            switch(a(t)){
                case "number":
                    t = [
                        t,
                        t,
                        t,
                        t
                    ];
                case "array":
                    if (2 === t.length && (t = [
                        t[0],
                        t[1],
                        t[0],
                        t[1]
                    ]), 4 === t.length) break;
                default:
                    return this.error("Invalid margin array.");
            }
            this.opt.margin = t;
        }).then(this.setPageSize);
    }, s14.prototype.setPageSize = function(t46) {
        var _$e = function _$e(t, e) {
            return Math.floor(t * e / 72 * 96);
        };
        return this.then(function() {
            (t46 = t46 || E.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t46.inner = {
                width: t46.width - this.opt.margin[1] - this.opt.margin[3],
                height: t46.height - this.opt.margin[0] - this.opt.margin[2]
            }, t46.inner.px = {
                width: _$e(t46.inner.width, t46.k),
                height: _$e(t46.inner.height, t46.k)
            }, t46.inner.ratio = t46.inner.height / t46.inner.width), this.prop.pageSize = t46;
        });
    }, s14.prototype.setProgress = function(t, e, r, n) {
        return null != t && (this.progress.val = t), null != e && (this.progress.state = e), null != r && (this.progress.n = r), null != n && (this.progress.stack = n), this.progress.ratio = this.progress.val / this.progress.state, this;
    }, s14.prototype.updateProgress = function(t, e, r, n) {
        return this.setProgress(t ? this.progress.val + t : null, e || null, r ? this.progress.n + r : null, n ? this.progress.stack.concat(n) : null);
    }, s14.prototype.then = function(t47, e32) {
        var r = this;
        return this.thenCore(t47, e32, function(t48, e33) {
            return r.updateProgress(null, null, 1, [
                t48
            ]), Promise.prototype.then.call(this, function(e) {
                return r.updateProgress(null, t48), e;
            }).then(t48, e33).then(function(t) {
                return r.updateProgress(1), t;
            });
        });
    }, s14.prototype.thenCore = function(t, e, r) {
        r = r || Promise.prototype.then;
        t && (t = t.bind(this)), e && (e = e.bind(this));
        var n = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : s14.convert(Object.assign({}, this), Promise.prototype), _$i = r.call(n, t, e);
        return s14.convert(_$i, this.__proto__);
    }, s14.prototype.thenExternal = function(t, e) {
        return Promise.prototype.then.call(this, t, e);
    }, s14.prototype.thenList = function(t49) {
        var _$e = this;
        return t49.forEach(function(t) {
            _$e = _$e.thenCore(t);
        }), _$e;
    }, s14.prototype.catch = function(t) {
        t && (t = t.bind(this));
        var _$e = Promise.prototype.catch.call(this, t);
        return s14.convert(_$e, this);
    }, s14.prototype.catchExternal = function(t) {
        return Promise.prototype.catch.call(this, t);
    }, s14.prototype.error = function(t) {
        return this.then(function() {
            throw new Error(t);
        });
    }, s14.prototype.using = s14.prototype.set, s14.prototype.saveAs = s14.prototype.save, s14.prototype.export = s14.prototype.output, s14.prototype.run = s14.prototype.then, E.getPageSize = function(e, r, n) {
        if ("object" === _typeofDefault.default(e)) {
            var _$i = e;
            e = _$i.orientation, r = _$i.unit || r, n = _$i.format || n;
        }
        r = r || "mm", n = n || "a4", e = ("" + (e || "P")).toLowerCase();
        var a, o = ("" + n).toLowerCase(), s = {
            a0: [
                2383.94,
                3370.39
            ],
            a1: [
                1683.78,
                2383.94
            ],
            a2: [
                1190.55,
                1683.78
            ],
            a3: [
                841.89,
                1190.55
            ],
            a4: [
                595.28,
                841.89
            ],
            a5: [
                419.53,
                595.28
            ],
            a6: [
                297.64,
                419.53
            ],
            a7: [
                209.76,
                297.64
            ],
            a8: [
                147.4,
                209.76
            ],
            a9: [
                104.88,
                147.4
            ],
            a10: [
                73.7,
                104.88
            ],
            b0: [
                2834.65,
                4008.19
            ],
            b1: [
                2004.09,
                2834.65
            ],
            b2: [
                1417.32,
                2004.09
            ],
            b3: [
                1000.63,
                1417.32
            ],
            b4: [
                708.66,
                1000.63
            ],
            b5: [
                498.9,
                708.66
            ],
            b6: [
                354.33,
                498.9
            ],
            b7: [
                249.45,
                354.33
            ],
            b8: [
                175.75,
                249.45
            ],
            b9: [
                124.72,
                175.75
            ],
            b10: [
                87.87,
                124.72
            ],
            c0: [
                2599.37,
                3676.54
            ],
            c1: [
                1836.85,
                2599.37
            ],
            c2: [
                1298.27,
                1836.85
            ],
            c3: [
                918.43,
                1298.27
            ],
            c4: [
                649.13,
                918.43
            ],
            c5: [
                459.21,
                649.13
            ],
            c6: [
                323.15,
                459.21
            ],
            c7: [
                229.61,
                323.15
            ],
            c8: [
                161.57,
                229.61
            ],
            c9: [
                113.39,
                161.57
            ],
            c10: [
                79.37,
                113.39
            ],
            dl: [
                311.81,
                623.62
            ],
            letter: [
                612,
                792
            ],
            "government-letter": [
                576,
                756
            ],
            legal: [
                612,
                1008
            ],
            "junior-legal": [
                576,
                360
            ],
            ledger: [
                1224,
                792
            ],
            tabloid: [
                792,
                1224
            ],
            "credit-card": [
                153,
                243
            ]
        };
        switch(r){
            case "pt":
                a = 1;
                break;
            case "mm":
                a = 72 / 25.4;
                break;
            case "cm":
                a = 72 / 2.54;
                break;
            case "in":
                a = 72;
                break;
            case "px":
                a = 0.75;
                break;
            case "pc":
            case "em":
                a = 12;
                break;
            case "ex":
                a = 6;
                break;
            default:
                throw "Invalid unit: " + r;
        }
        var c, u = 0, h = 0;
        if (s.hasOwnProperty(o)) u = s[o][1] / a, h = s[o][0] / a;
        else try {
            u = n[1], h = n[0];
        } catch (t) {
            throw new Error("Invalid format: " + n);
        }
        if ("p" === e || "portrait" === e) e = "p", h > u && (c = h, h = u, u = c);
        else {
            if ("l" !== e && "landscape" !== e) throw "Invalid orientation: " + e;
            e = "l", u > h && (c = h, h = u, u = c);
        }
        return {
            width: h,
            height: u,
            unit: r,
            k: a,
            orientation: e
        };
    }, e30.html = function(t, e) {
        (e = e || {}).callback = e.callback || function() {}, e.html2canvas = e.html2canvas || {}, e.html2canvas.canvas = e.html2canvas.canvas || this.canvas, e.jsPDF = e.jsPDF || this, e.fontFaces = e.fontFaces ? e.fontFaces.map(jt2) : null;
        var r = new s14(e);
        return e.worker ? r : r.from(t).doCallback();
    };
}(E.API), E.API.addJS = function(t) {
    return Ht2 = t, this.internal.events.subscribe("postPutResources", function() {
        Ut2 = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (Ut2 + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), zt2 = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + Ht2 + ")"), this.internal.out(">>"), this.internal.out("endobj");
    }), this.internal.events.subscribe("putCatalog", function() {
        void 0 !== Ut2 && void 0 !== zt2 && this.internal.out("/Names <</JavaScript " + Ut2 + " 0 R>>");
    }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t50) {
    var e34;
    t50.events.push([
        "postPutResources",
        function() {
            var _$t = this, r = /^(\d+) 0 obj$/;
            if (this.outline.root.children.length > 0) for(var n = _$t.outline.render().split(/\r\n/), _$i = 0; _$i < n.length; _$i++){
                var a = n[_$i], o = r.exec(a);
                if (null != o) {
                    var s = o[1];
                    _$t.internal.newObjectDeferredBegin(s, !1);
                }
                _$t.internal.write(a);
            }
            if (this.outline.createNamedDestinations) {
                var c = this.internal.pages.length, u = [];
                for(_$i = 0; _$i < c; _$i++){
                    var h = _$t.internal.newObject();
                    u.push(h);
                    var l = _$t.internal.getPageInfo(_$i + 1);
                    _$t.internal.write("<< /D[" + l.objId + " 0 R /XYZ null null null]>> endobj");
                }
                var f = _$t.internal.newObject();
                _$t.internal.write("<< /Names [ ");
                for(_$i = 0; _$i < u.length; _$i++)_$t.internal.write("(page_" + (_$i + 1) + ")" + u[_$i] + " 0 R");
                _$t.internal.write(" ] >>", "endobj"), e34 = _$t.internal.newObject(), _$t.internal.write("<< /Dests " + f + " 0 R"), _$t.internal.write(">>", "endobj");
            }
        }
    ]), t50.events.push([
        "putCatalog",
        function() {
            this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e34 + " 0 R"));
        }
    ]), t50.events.push([
        "initialized",
        function() {
            var _$t = this;
            _$t.outline = {
                createNamedDestinations: !1,
                root: {
                    children: []
                }
            }, _$t.outline.add = function(t, e, r) {
                var n = {
                    title: e,
                    options: r,
                    children: []
                };
                return null == t && (t = this.root), t.children.push(n), n;
            }, _$t.outline.render = function() {
                return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = _$t, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
            }, _$t.outline.genIds_r = function(e) {
                e.id = _$t.internal.newObjectDeferred();
                for(var r = 0; r < e.children.length; r++)this.genIds_r(e.children[r]);
            }, _$t.outline.renderRoot = function(t) {
                this.objStart(t), this.line("/Type /Outlines"), t.children.length > 0 && (this.line("/First " + this.makeRef(t.children[0])), this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))), this.line("/Count " + this.count_r({
                    count: 0
                }, t)), this.objEnd();
            }, _$t.outline.renderItems = function(e) {
                for(var r = this.ctx.pdf.internal.getVerticalCoordinateString, n = 0; n < e.children.length; n++){
                    var _$i = e.children[n];
                    this.objStart(_$i), this.line("/Title " + this.makeString(_$i.title)), this.line("/Parent " + this.makeRef(e)), n > 0 && this.line("/Prev " + this.makeRef(e.children[n - 1])), n < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[n + 1])), _$i.children.length > 0 && (this.line("/First " + this.makeRef(_$i.children[0])), this.line("/Last " + this.makeRef(_$i.children[_$i.children.length - 1])));
                    var a = this.count = this.count_r({
                        count: 0
                    }, _$i);
                    if (a > 0 && this.line("/Count " + a), _$i.options && _$i.options.pageNumber) {
                        var o = _$t.internal.getPageInfo(_$i.options.pageNumber);
                        this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + r(0) + " 0]");
                    }
                    this.objEnd();
                }
                for(var s = 0; s < e.children.length; s++)this.renderItems(e.children[s]);
            }, _$t.outline.line = function(t) {
                this.ctx.val += t + "\r\n";
            }, _$t.outline.makeRef = function(t) {
                return t.id + " 0 R";
            }, _$t.outline.makeString = function(e) {
                return "(" + _$t.internal.pdfEscape(e) + ")";
            }, _$t.outline.objStart = function(t) {
                this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n";
            }, _$t.outline.objEnd = function() {
                this.ctx.val += ">> \r\nendobj\r\n";
            }, _$t.outline.count_r = function(t, e) {
                for(var r = 0; r < e.children.length; r++)t.count++, this.count_r(t, e.children[r]);
                return t.count;
            };
        }
    ]);
}(E.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t51) {
    var e = [
        192,
        193,
        194,
        195,
        196,
        197,
        198,
        199
    ];
    t51.processJPEG = function(t52, r, n, i, a, o) {
        var s, c = this.decode.DCT_DECODE, u = null;
        if ("string" == typeof t52 || this.__addimage__.isArrayBuffer(t52) || this.__addimage__.isArrayBufferView(t52)) {
            switch(t52 = a || t52, t52 = this.__addimage__.isArrayBuffer(t52) ? new Uint8Array(t52) : t52, (s = function(t) {
                for(var _$r, _$n = 256 * t.charCodeAt(4) + t.charCodeAt(5), _$i = t.length, _$a = {
                    width: 0,
                    height: 0,
                    numcomponents: 1
                }, _$o = 4; _$o < _$i; _$o += 2){
                    if (_$o += _$n, -1 !== e.indexOf(t.charCodeAt(_$o + 1))) {
                        _$r = 256 * t.charCodeAt(_$o + 5) + t.charCodeAt(_$o + 6), _$a = {
                            width: 256 * t.charCodeAt(_$o + 7) + t.charCodeAt(_$o + 8),
                            height: _$r,
                            numcomponents: t.charCodeAt(_$o + 9)
                        };
                        break;
                    }
                    _$n = 256 * t.charCodeAt(_$o + 2) + t.charCodeAt(_$o + 3);
                }
                return _$a;
            }(t52 = this.__addimage__.isArrayBufferView(t52) ? this.__addimage__.arrayBufferToBinaryString(t52) : t52)).numcomponents){
                case 1:
                    o = this.color_spaces.DEVICE_GRAY;
                    break;
                case 4:
                    o = this.color_spaces.DEVICE_CMYK;
                    break;
                case 3:
                    o = this.color_spaces.DEVICE_RGB;
            }
            u = {
                data: t52,
                width: s.width,
                height: s.height,
                colorSpace: o,
                bitsPerComponent: 8,
                filter: c,
                index: r,
                alias: n
            };
        }
        return u;
    };
}(E.API);
var Vt, Gt1, Yt3, Jt2, Xt1, Kt2 = function() {
    var a = function a(t) {
        var e36, r, n, _$i, a63, o, s, c, u, h, l, f, d, p;
        for(this.data = t, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, o = null;;){
            switch(e36 = this.readUInt32(), u = (function() {
                var _$t, e;
                for(e = [], _$t = 0; _$t < 4; ++_$t)e.push(String.fromCharCode(this.data[this.pos++]));
                return e;
            }).call(this).join("")){
                case "IHDR":
                    this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
                    break;
                case "acTL":
                    this.animation = {
                        numFrames: this.readUInt32(),
                        numPlays: this.readUInt32() || 1 / 0,
                        frames: []
                    };
                    break;
                case "PLTE":
                    this.palette = this.read(e36);
                    break;
                case "fcTL":
                    o && this.animation.frames.push(o), this.pos += 4, o = {
                        width: this.readUInt32(),
                        height: this.readUInt32(),
                        xOffset: this.readUInt32(),
                        yOffset: this.readUInt32()
                    }, a63 = this.readUInt16(), _$i = this.readUInt16() || 100, o.delay = 1000 * a63 / _$i, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
                    break;
                case "IDAT":
                case "fdAT":
                    for("fdAT" === u && (this.pos += 4, e36 -= 4), t = (null != o ? o.data : void 0) || this.imgData, f = 0; 0 <= e36 ? f < e36 : f > e36; 0 <= e36 ? ++f : --f)t.push(this.data[this.pos++]);
                    break;
                case "tRNS":
                    switch(this.transparency = {}, this.colorType){
                        case 3:
                            if (n = this.palette.length / 3, this.transparency.indexed = this.read(e36), this.transparency.indexed.length > n) throw new Error("More transparent colors than palette size");
                            if ((h = n - this.transparency.indexed.length) > 0) for(d = 0; 0 <= h ? d < h : d > h; 0 <= h ? ++d : --d)this.transparency.indexed.push(255);
                            break;
                        case 0:
                            this.transparency.grayscale = this.read(e36)[0];
                            break;
                        case 2:
                            this.transparency.rgb = this.read(e36);
                    }
                    break;
                case "tEXt":
                    s = (l = this.read(e36)).indexOf(0), c = String.fromCharCode.apply(String, l.slice(0, s)), this.text[c] = String.fromCharCode.apply(String, l.slice(s + 1));
                    break;
                case "IEND":
                    return o && this.animation.frames.push(o), this.colors = (function() {
                        switch(this.colorType){
                            case 0:
                            case 3:
                            case 4:
                                return 1;
                            case 2:
                            case 6:
                                return 3;
                        }
                    }).call(this), this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p, r = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * r, this.colorSpace = (function() {
                        switch(this.colors){
                            case 1:
                                return "DeviceGray";
                            case 3:
                                return "DeviceRGB";
                        }
                    }).call(this), void (this.imgData = new Uint8Array(this.imgData));
                default:
                    this.pos += e36;
            }
            if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
        }
    };
    var _$t1, e35, _$i11;
    a.prototype.read = function(t) {
        var e, r;
        for(r = [], e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e)r.push(this.data[this.pos++]);
        return r;
    }, a.prototype.readUInt32 = function() {
        return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
    }, a.prototype.readUInt16 = function() {
        return this.data[this.pos++] << 8 | this.data[this.pos++];
    }, a.prototype.decodePixels = function(t) {
        var o50 = function o50(r, o, s, c) {
            var u, h, l, f, d, p, g, m, v, b, _$y, w, N, L, A, x7, S, _, P, k, _$I, F7 = Math.ceil((a.width - r) / s), C6 = Math.ceil((a.height - o) / c), _$j = a.width == F7 && a.height == C6;
            for(L = e * F7, w = _$j ? n : new Uint8Array(L * C6), p = t.length, N = 0, h = 0; N < C6 && _$i < p;){
                switch(t[_$i++]){
                    case 0:
                        for(f = S = 0; S < L; f = S += 1)w[h++] = t[_$i++];
                        break;
                    case 1:
                        for(f = _ = 0; _ < L; f = _ += 1)u = t[_$i++], d = f < e ? 0 : w[h - e], w[h++] = (u + d) % 256;
                        break;
                    case 2:
                        for(f = P = 0; P < L; f = P += 1)u = t[_$i++], l = (f - f % e) / e, A = N && w[(N - 1) * L + l * e + f % e], w[h++] = (A + u) % 256;
                        break;
                    case 3:
                        for(f = k = 0; k < L; f = k += 1)u = t[_$i++], l = (f - f % e) / e, d = f < e ? 0 : w[h - e], A = N && w[(N - 1) * L + l * e + f % e], w[h++] = (u + Math.floor((d + A) / 2)) % 256;
                        break;
                    case 4:
                        for(f = _$I = 0; _$I < L; f = _$I += 1)u = t[_$i++], l = (f - f % e) / e, d = f < e ? 0 : w[h - e], 0 === N ? A = x7 = 0 : (A = w[(N - 1) * L + l * e + f % e], x7 = l && w[(N - 1) * L + (l - 1) * e + f % e]), g = d + A - x7, m = Math.abs(g - d), b = Math.abs(g - A), _$y = Math.abs(g - x7), v = m <= b && m <= _$y ? d : b <= _$y ? A : x7, w[h++] = (u + v) % 256;
                        break;
                    default:
                        throw new Error("Invalid filter algorithm: " + t[_$i - 1]);
                }
                if (!_$j) {
                    var O6 = ((o + N * c) * a.width + r) * e, B5 = N * L;
                    for(f = 0; f < F7; f += 1){
                        for(var M4 = 0; M4 < e; M4 += 1)n[O6++] = w[B5++];
                        O6 += (s - 1) * e;
                    }
                }
                N++;
            }
        };
        var e = this.pixelBitlength / 8, n = new Uint8Array(this.width * this.height * e), _$i = 0, a = this;
        if (null == t && (t = this.imgData), 0 === t.length) return new Uint8Array(0);
        return t = _fflate.unzlibSync(t), 1 == a.interlaceMethod ? (o50(0, 0, 8, 8), o50(4, 0, 8, 8), o50(0, 4, 4, 8), o50(2, 0, 4, 4), o50(0, 2, 2, 4), o50(1, 0, 2, 2), o50(0, 1, 1, 2)) : o50(0, 0, 1, 1), n;
    }, a.prototype.decodePalette = function() {
        var _$t, e, r, n, _$i, a, o, s, c;
        for(r = this.palette, a = this.transparency.indexed || [], _$i = new Uint8Array((a.length || 0) + r.length), n = 0, _$t = 0, e = o = 0, s = r.length; o < s; e = o += 3)_$i[n++] = r[e], _$i[n++] = r[e + 1], _$i[n++] = r[e + 2], _$i[n++] = null != (c = a[_$t++]) ? c : 255;
        return _$i;
    }, a.prototype.copyToImageData = function(t, e) {
        var r, n, _$i, a, o, s, c, u, h, l, f;
        if (n = this.colors, h = null, r = this.hasAlphaChannel, this.palette.length && (h = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(), n = 4, r = !0), u = (_$i = t.data || t).length, o = h || e, a = s = 0, 1 === n) for(; a < u;)c = h ? 4 * e[a / 4] : s, l = o[c++], _$i[a++] = l, _$i[a++] = l, _$i[a++] = l, _$i[a++] = r ? o[c++] : 255, s = c;
        else for(; a < u;)c = h ? 4 * e[a / 4] : s, _$i[a++] = o[c++], _$i[a++] = o[c++], _$i[a++] = o[c++], _$i[a++] = r ? o[c++] : 255, s = c;
    }, a.prototype.decode = function() {
        var _$t;
        return _$t = new Uint8Array(this.width * this.height * 4), this.copyToImageData(_$t, this.decodePixels()), _$t;
    };
    var o49 = function o49() {
        if ("[object Window]" === Object.prototype.toString.call(n73)) {
            try {
                e35 = n73.document.createElement("canvas"), _$i11 = e35.getContext("2d");
            } catch (t) {
                return !1;
            }
            return !0;
        }
        return !1;
    };
    return o49(), _$t1 = function _$t1(t) {
        var r;
        if (!0 === o49()) return _$i11.width = t.width, _$i11.height = t.height, _$i11.clearRect(0, 0, t.width, t.height), _$i11.putImageData(t, 0, 0), (r = new Image).src = e35.toDataURL(), r;
        throw new Error("This method requires a Browser with Canvas-capability.");
    }, a.prototype.decodeFrames = function(e) {
        var r, n, _$i, a, o, s, c, u;
        if (this.animation) {
            for(u = [], n = o = 0, s = (c = this.animation.frames).length; o < s; n = ++o)r = c[n], _$i = e.createImageData(r.width, r.height), a = this.decodePixels(new Uint8Array(r.data)), this.copyToImageData(_$i, a), r.imageData = _$i, u.push(r.image = _$t1(_$i));
            return u;
        }
    }, a.prototype.renderFrame = function(t, e) {
        var r, n, _$i;
        return r = (n = this.animation.frames)[e], _$i = n[e - 1], 0 === e && t.clearRect(0, 0, this.width, this.height), 1 === (null != _$i ? _$i.disposeOp : void 0) ? t.clearRect(_$i.xOffset, _$i.yOffset, _$i.width, _$i.height) : 2 === (null != _$i ? _$i.disposeOp : void 0) && t.putImageData(_$i.imageData, _$i.xOffset, _$i.yOffset), 0 === r.blendOp && t.clearRect(r.xOffset, r.yOffset, r.width, r.height), t.drawImage(r.image, r.xOffset, r.yOffset);
    }, a.prototype.animate = function(t) {
        var e, r, n, _$i, a, o51, s = this;
        return r = 0, o51 = this.animation, _$i = o51.numFrames, n = o51.frames, a = o51.numPlays, (e = function() {
            var o, c;
            if (o = (r++) % _$i, c = n[o], s.renderFrame(t, o), _$i > 1 && r / _$i < a) return s.animation._timeout = setTimeout(e, c.delay);
        })();
    }, a.prototype.stopAnimation = function() {
        var _$t;
        return clearTimeout(null != (_$t = this.animation) ? _$t._timeout : void 0);
    }, a.prototype.render = function(t) {
        var e, r;
        return t._png && t._png.stopAnimation(), t._png = this, t.width = this.width, t.height = this.height, e = t.getContext("2d"), this.animation ? (this.decodeFrames(e), this.animate(e)) : (r = e.createImageData(this.width, this.height), this.copyToImageData(r, this.decodePixels()), e.putImageData(r, 0, 0));
    }, a;
}();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */ /**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */ function Zt(t53) {
    var e37 = 0;
    if (71 !== t53[e37++] || 73 !== t53[e37++] || 70 !== t53[e37++] || 56 !== t53[e37++] || 56 != (t53[e37++] + 1 & 253) || 97 !== t53[e37++]) throw new Error("Invalid GIF 87a/89a header.");
    var r = t53[e37++] | t53[e37++] << 8, n87 = t53[e37++] | t53[e37++] << 8, _$i12 = t53[e37++], a64 = _$i12 >> 7, o52 = 1 << (7 & _$i12) + 1;
    t53[e37++];
    t53[e37++];
    var s15 = null, c20 = null;
    a64 && (s15 = e37, c20 = o52, e37 += 3 * o52);
    var u24 = !0, h20 = [], l18 = 0, f17 = null, d11 = 0, p13 = null;
    for(this.width = r, this.height = n87; u24 && e37 < t53.length;)switch(t53[e37++]){
        case 33:
            switch(t53[e37++]){
                case 255:
                    if (11 !== t53[e37] || 78 == t53[e37 + 1] && 69 == t53[e37 + 2] && 84 == t53[e37 + 3] && 83 == t53[e37 + 4] && 67 == t53[e37 + 5] && 65 == t53[e37 + 6] && 80 == t53[e37 + 7] && 69 == t53[e37 + 8] && 50 == t53[e37 + 9] && 46 == t53[e37 + 10] && 48 == t53[e37 + 11] && 3 == t53[e37 + 12] && 1 == t53[e37 + 13] && 0 == t53[e37 + 16]) e37 += 14, p13 = t53[e37++] | t53[e37++] << 8, e37++;
                    else for(e37 += 12;;){
                        if (!((P = t53[e37++]) >= 0)) throw Error("Invalid block size");
                        if (0 === P) break;
                        e37 += P;
                    }
                    break;
                case 249:
                    if (4 !== t53[e37++] || 0 !== t53[e37 + 4]) throw new Error("Invalid graphics extension block.");
                    var g9 = t53[e37++];
                    l18 = t53[e37++] | t53[e37++] << 8, f17 = t53[e37++], 0 == (1 & g9) && (f17 = null), d11 = g9 >> 2 & 7, e37++;
                    break;
                case 254:
                    for(;;){
                        if (!((P = t53[e37++]) >= 0)) throw Error("Invalid block size");
                        if (0 === P) break;
                        e37 += P;
                    }
                    break;
                default:
                    throw new Error("Unknown graphic control label: 0x" + t53[e37 - 1].toString(16));
            }
            break;
        case 44:
            var m7 = t53[e37++] | t53[e37++] << 8, v6 = t53[e37++] | t53[e37++] << 8, b7 = t53[e37++] | t53[e37++] << 8, _$y2 = t53[e37++] | t53[e37++] << 8, w6 = t53[e37++], N3 = w6 >> 6 & 1, L3 = 1 << (7 & w6) + 1, A = s15, x8 = c20, S = !1;
            if (w6 >> 7) {
                S = !0;
                A = e37, x8 = L3, e37 += 3 * L3;
            }
            var _ = e37;
            for(e37++;;){
                var P;
                if (!((P = t53[e37++]) >= 0)) throw Error("Invalid block size");
                if (0 === P) break;
                e37 += P;
            }
            h20.push({
                x: m7,
                y: v6,
                width: b7,
                height: _$y2,
                has_local_palette: S,
                palette_offset: A,
                palette_size: x8,
                data_offset: _,
                data_length: e37 - _,
                transparent_index: f17,
                interlaced: !!N3,
                delay: l18,
                disposal: d11
            });
            break;
        case 59:
            u24 = !1;
            break;
        default:
            throw new Error("Unknown gif block: 0x" + t53[e37 - 1].toString(16));
    }
    this.numFrames = function() {
        return h20.length;
    }, this.loopCount = function() {
        return p13;
    }, this.frameInfo = function(t) {
        if (t < 0 || t >= h20.length) throw new Error("Frame index out of range.");
        return h20[t];
    }, this.decodeAndBlitFrameBGRA = function(e, n) {
        var _$i = this.frameInfo(e), a = _$i.width * _$i.height, o = new Uint8Array(a);
        $t1(t53, _$i.data_offset, o, a);
        var s = _$i.palette_offset, c = _$i.transparent_index;
        null === c && (c = 256);
        var u = _$i.width, h = r - u, l = u, f = 4 * (_$i.y * r + _$i.x), d = 4 * ((_$i.y + _$i.height) * r + _$i.x), p = f, g = 4 * h;
        !0 === _$i.interlaced && (g += 4 * r * 7);
        for(var m = 8, v = 0, b = o.length; v < b; ++v){
            var _$y = o[v];
            if (0 === l && (l = u, (p += g) >= d && (g = 4 * h + 4 * r * (m - 1), p = f + (u + h) * (m << 1), m >>= 1)), _$y === c) p += 4;
            else {
                var w = t53[s + 3 * _$y], N = t53[s + 3 * _$y + 1], L = t53[s + 3 * _$y + 2];
                n[p++] = L, n[p++] = N, n[p++] = w, n[p++] = 255;
            }
            --l;
        }
    }, this.decodeAndBlitFrameRGBA = function(e, n) {
        var _$i = this.frameInfo(e), a = _$i.width * _$i.height, o = new Uint8Array(a);
        $t1(t53, _$i.data_offset, o, a);
        var s = _$i.palette_offset, c = _$i.transparent_index;
        null === c && (c = 256);
        var u = _$i.width, h = r - u, l = u, f = 4 * (_$i.y * r + _$i.x), d = 4 * ((_$i.y + _$i.height) * r + _$i.x), p = f, g = 4 * h;
        !0 === _$i.interlaced && (g += 4 * r * 7);
        for(var m = 8, v = 0, b = o.length; v < b; ++v){
            var _$y = o[v];
            if (0 === l && (l = u, (p += g) >= d && (g = 4 * h + 4 * r * (m - 1), p = f + (u + h) * (m << 1), m >>= 1)), _$y === c) p += 4;
            else {
                var w = t53[s + 3 * _$y], N = t53[s + 3 * _$y + 1], L = t53[s + 3 * _$y + 2];
                n[p++] = w, n[p++] = N, n[p++] = L, n[p++] = 255;
            }
            --l;
        }
    };
}
function $t1(t, e, r, n) {
    for(var _$i = t[e++], o = 1 << _$i, s = o + 1, c = s + 1, u = _$i + 1, h = (1 << u) - 1, l = 0, f = 0, d = 0, p = t[e++], g = new Int32Array(4096), m = null;;){
        for(; l < 16 && 0 !== p;)f |= t[e++] << l, l += 8, 1 === p ? p = t[e++] : --p;
        if (l < u) break;
        var v = f & h;
        if (f >>= u, l -= u, v !== o) {
            if (v === s) break;
            for(var b = v < c ? v : m, _$y = 0, w = b; w > o;)w = g[w] >> 8, ++_$y;
            var N = w;
            if (d + _$y + (b !== v ? 1 : 0) > n) return void a60.log("Warning, gif stream longer than expected.");
            r[d++] = N;
            var L = d += _$y;
            for(b !== v && (r[d++] = N), w = b; _$y--;)w = g[w], r[--L] = 255 & w, w >>= 8;
            null !== m && c < 4096 && (g[c++] = m << 8 | N, c >= h + 1 && u < 12 && (++u, h = h << 1 | 1)), m = v;
        } else c = s + 1, h = (1 << (u = _$i + 1)) - 1, m = null;
    }
    return d !== n && a60.log("Warning, gif stream shorter than expected."), r;
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/ function Qt3(t54) {
    var _$j = function _$j(t, e) {
        for(var r = 0, n = 0, _$i = new Array, a = 1; a <= 16; a++){
            for(var o = 1; o <= t[a]; o++)_$i[e[n]] = [], _$i[e[n]][0] = r, _$i[e[n]][1] = a, n++, r++;
            r *= 2;
        }
        return _$i;
    };
    var O = function O(t) {
        for(var e = t[0], r = t[1] - 1; r >= 0;)e & 1 << r && (m8 |= 1 << v7), r--, --v7 < 0 && (255 == m8 ? (B6(255), B6(0)) : B6(m8), v7 = 7, m8 = 0);
    };
    var B6 = function B6(t) {
        g10.push(t);
    };
    var M = function M(t) {
        B6(t >> 8 & 255), B6(255 & t);
    };
    var _$E2 = function _$E2(t55, e39, r, n, i34) {
        for(var a66, o54 = i34[0], s17 = i34[240], c22 = function(t, e) {
            var _$r, _$n, _$i, a, o, s, c, u, h, l, f = 0;
            for(h = 0; h < 8; ++h){
                _$r = t[f], _$n = t[f + 1], _$i = t[f + 2], a = t[f + 3], o = t[f + 4], s = t[f + 5], c = t[f + 6];
                var p = _$r + (u = t[f + 7]), g = _$r - u, m = _$n + c, v = _$n - c, b = _$i + s, _$y = _$i - s, w = a + o, N = a - o, L = p + w, A = p - w, x10 = m + b, S = m - b;
                t[f] = L + x10, t[f + 4] = L - x10;
                var _ = 0.707106781 * (S + A);
                t[f + 2] = A + _, t[f + 6] = A - _;
                var P = 0.382683433 * ((L = N + _$y) - (S = v + g)), k = 0.5411961 * L + P, _$I = 1.306562965 * S + P, F9 = 0.707106781 * (x10 = _$y + v), C8 = g + F9, _$j = g - F9;
                t[f + 5] = _$j + k, t[f + 3] = _$j - k, t[f + 1] = C8 + _$I, t[f + 7] = C8 - _$I, f += 8;
            }
            for(f = 0, h = 0; h < 8; ++h){
                _$r = t[f], _$n = t[f + 8], _$i = t[f + 16], a = t[f + 24], o = t[f + 32], s = t[f + 40], c = t[f + 48];
                var O7 = _$r + (u = t[f + 56]), B7 = _$r - u, M5 = _$n + c, _$E = _$n - c, q = _$i + s, D = _$i - s, R = a + o, T = a - o, U = O7 + R, z = O7 - R, H = M5 + q, W = M5 - q;
                t[f] = U + H, t[f + 32] = U - H;
                var V = 0.707106781 * (W + z);
                t[f + 16] = z + V, t[f + 48] = z - V;
                var G = 0.382683433 * ((U = T + D) - (W = _$E + B7)), Y = 0.5411961 * U + G, J = 1.306562965 * W + G, X = 0.707106781 * (H = D + _$E), K = B7 + X, Z = B7 - X;
                t[f + 40] = Z + Y, t[f + 24] = Z - Y, t[f + 8] = K + J, t[f + 56] = K - J, f++;
            }
            for(h = 0; h < 64; ++h)l = t[h] * e[h], d12[h] = l > 0 ? l + 0.5 | 0 : l - 0.5 | 0;
            return d12;
        }(t55, e39), u26 = 0; u26 < 64; ++u26)p14[A3[u26]] = c22[u26];
        var h22 = p14[0] - r;
        r = p14[0], 0 == h22 ? O(n[0]) : (O(n[f18[a66 = 32767 + h22]]), O(l19[a66]));
        for(var g11 = 63; g11 > 0 && 0 == p14[g11];)g11--;
        if (0 == g11) return O(o54), r;
        for(var m9, v8 = 1; v8 <= g11;){
            for(var b9 = v8; 0 == p14[v8] && v8 <= g11;)++v8;
            var _$y4 = v8 - b9;
            if (_$y4 >= 16) {
                m9 = _$y4 >> 4;
                for(var w8 = 1; w8 <= m9; ++w8)O(s17);
                _$y4 &= 15;
            }
            a66 = 32767 + p14[v8], O(i34[(_$y4 << 4) + f18[a66]]), O(l19[a66]), v8++;
        }
        return 63 != g11 && O(o54), r;
    };
    var q3 = function q3(t56) {
        (t56 = Math.min(Math.max(t56, 1), 100), a65 != t56) && (!function(t) {
            for(var e = [
                16,
                11,
                10,
                16,
                24,
                40,
                51,
                61,
                12,
                12,
                14,
                19,
                26,
                58,
                60,
                55,
                14,
                13,
                16,
                24,
                40,
                57,
                69,
                56,
                14,
                17,
                22,
                29,
                51,
                87,
                80,
                62,
                18,
                22,
                37,
                56,
                68,
                109,
                103,
                77,
                24,
                35,
                55,
                64,
                81,
                104,
                113,
                92,
                49,
                64,
                78,
                87,
                103,
                121,
                120,
                101,
                72,
                92,
                95,
                98,
                112,
                100,
                103,
                99
            ], r = 0; r < 64; r++){
                var n = o53((e[r] * t + 50) / 100);
                n = Math.min(Math.max(n, 1), 255), s16[A3[r]] = n;
            }
            for(var _$i = [
                17,
                18,
                24,
                47,
                99,
                99,
                99,
                99,
                18,
                21,
                26,
                66,
                99,
                99,
                99,
                99,
                24,
                26,
                56,
                99,
                99,
                99,
                99,
                99,
                47,
                66,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99
            ], a = 0; a < 64; a++){
                var l = o53((_$i[a] * t + 50) / 100);
                l = Math.min(Math.max(l, 1), 255), c21[A3[a]] = l;
            }
            for(var f = [
                1,
                1.387039845,
                1.306562965,
                1.175875602,
                1,
                0.785694958,
                0.5411961,
                0.275899379
            ], d = 0, p = 0; p < 8; p++)for(var g = 0; g < 8; g++)u25[d] = 1 / (s16[A3[d]] * f[p] * f[g] * 8), h21[d] = 1 / (c21[A3[d]] * f[p] * f[g] * 8), d++;
        }(t56 < 50 ? Math.floor(5000 / t56) : Math.floor(200 - 2 * t56)), a65 = t56);
    };
    var e38, r24, n88, _$i13, a65, o53 = Math.floor, s16 = new Array(64), c21 = new Array(64), u25 = new Array(64), h21 = new Array(64), l19 = new Array(65535), f18 = new Array(65535), d12 = new Array(64), p14 = new Array(64), g10 = [], m8 = 0, v7 = 7, b8 = new Array(64), _$y3 = new Array(64), w7 = new Array(64), N4 = new Array(256), L4 = new Array(2048), A3 = [
        0,
        1,
        5,
        6,
        14,
        15,
        27,
        28,
        2,
        4,
        7,
        13,
        16,
        26,
        29,
        42,
        3,
        8,
        12,
        17,
        25,
        30,
        41,
        43,
        9,
        11,
        18,
        24,
        31,
        40,
        44,
        53,
        10,
        19,
        23,
        32,
        39,
        45,
        52,
        54,
        20,
        22,
        33,
        38,
        46,
        51,
        55,
        60,
        21,
        34,
        37,
        47,
        50,
        56,
        59,
        61,
        35,
        36,
        48,
        49,
        57,
        58,
        62,
        63
    ], x9 = [
        0,
        0,
        1,
        5,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ], S5 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
    ], _3 = [
        0,
        0,
        2,
        1,
        3,
        3,
        2,
        4,
        3,
        5,
        5,
        4,
        4,
        0,
        0,
        1,
        125
    ], P3 = [
        1,
        2,
        3,
        0,
        4,
        17,
        5,
        18,
        33,
        49,
        65,
        6,
        19,
        81,
        97,
        7,
        34,
        113,
        20,
        50,
        129,
        145,
        161,
        8,
        35,
        66,
        177,
        193,
        21,
        82,
        209,
        240,
        36,
        51,
        98,
        114,
        130,
        9,
        10,
        22,
        23,
        24,
        25,
        26,
        37,
        38,
        39,
        40,
        41,
        42,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        225,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        241,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
    ], k4 = [
        0,
        0,
        3,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0
    ], _$I2 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
    ], F8 = [
        0,
        0,
        2,
        1,
        2,
        4,
        4,
        3,
        4,
        7,
        5,
        4,
        4,
        0,
        1,
        2,
        119
    ], C7 = [
        0,
        1,
        2,
        3,
        17,
        4,
        5,
        33,
        49,
        6,
        18,
        65,
        81,
        7,
        97,
        113,
        19,
        34,
        50,
        129,
        8,
        20,
        66,
        145,
        161,
        177,
        193,
        9,
        35,
        51,
        82,
        240,
        21,
        98,
        114,
        209,
        10,
        22,
        36,
        52,
        225,
        37,
        241,
        23,
        24,
        25,
        26,
        38,
        39,
        40,
        41,
        42,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
    ];
    this.encode = function(t57, a) {
        a && q3(a), g10 = new Array, m8 = 0, v7 = 7, M(65496), M(65504), M(16), B6(74), B6(70), B6(73), B6(70), B6(0), B6(1), B6(1), B6(0), M(1), M(1), B6(0), B6(0), function() {
            M(65499), M(132), B6(0);
            for(var _$t = 0; _$t < 64; _$t++)B6(s16[_$t]);
            B6(1);
            for(var e = 0; e < 64; e++)B6(c21[e]);
        }(), function(t, e) {
            M(65472), M(17), B6(8), M(e), M(t), B6(3), B6(1), B6(17), B6(0), B6(2), B6(17), B6(1), B6(3), B6(17), B6(1);
        }(t57.width, t57.height), function() {
            M(65476), M(418), B6(0);
            for(var _$t = 0; _$t < 16; _$t++)B6(x9[_$t + 1]);
            for(var e = 0; e <= 11; e++)B6(S5[e]);
            B6(16);
            for(var r = 0; r < 16; r++)B6(_3[r + 1]);
            for(var n = 0; n <= 161; n++)B6(P3[n]);
            B6(1);
            for(var _$i = 0; _$i < 16; _$i++)B6(k4[_$i + 1]);
            for(var _$a = 0; _$a <= 11; _$a++)B6(_$I2[_$a]);
            B6(17);
            for(var o = 0; o < 16; o++)B6(F8[o + 1]);
            for(var s = 0; s <= 161; s++)B6(C7[s]);
        }(), M(65498), M(12), B6(3), B6(1), B6(0), B6(2), B6(17), B6(3), B6(17), B6(0), B6(63), B6(0);
        var o55 = 0, l = 0, f = 0;
        m8 = 0, v7 = 7, this.encode.displayName = "_encode_";
        for(var d, p, N, A, _$j, D, R, T, U, z = t57.data, H = t57.width, W = t57.height, V = 4 * H, G = 0; G < W;){
            for(d = 0; d < V;){
                for(_$j = V * G + d, R = -1, T = 0, U = 0; U < 64; U++)D = _$j + (T = U >> 3) * V + (R = 4 * (7 & U)), G + T >= W && (D -= V * (G + 1 + T - W)), d + R >= V && (D -= d + R - V + 4), p = z[D++], N = z[D++], A = z[D++], b8[U] = (L4[p] + L4[N + 256 >> 0] + L4[A + 512 >> 0] >> 16) - 128, _$y3[U] = (L4[p + 768 >> 0] + L4[N + 1024 >> 0] + L4[A + 1280 >> 0] >> 16) - 128, w7[U] = (L4[p + 1280 >> 0] + L4[N + 1536 >> 0] + L4[A + 1792 >> 0] >> 16) - 128;
                o55 = _$E2(b8, u25, o55, e38, n88), l = _$E2(_$y3, h21, l, r24, _$i13), f = _$E2(w7, h21, f, r24, _$i13), d += 32;
            }
            G += 8;
        }
        if (v7 >= 0) {
            var Y = [];
            Y[1] = v7 + 1, Y[0] = (1 << v7 + 1) - 1, O(Y);
        }
        return M(65497), new Uint8Array(g10);
    }, t54 = t54 || 50, function() {
        for(var _$t = String.fromCharCode, e = 0; e < 256; e++)N4[e] = _$t(e);
    }(), e38 = _$j(x9, S5), r24 = _$j(k4, _$I2), n88 = _$j(_3, P3), _$i13 = _$j(F8, C7), function() {
        for(var _$t = 1, e = 2, r = 1; r <= 15; r++){
            for(var n = _$t; n < e; n++)f18[32767 + n] = r, l19[32767 + n] = [], l19[32767 + n][1] = r, l19[32767 + n][0] = n;
            for(var _$i = -(e - 1); _$i <= -_$t; _$i++)f18[32767 + _$i] = r, l19[32767 + _$i] = [], l19[32767 + _$i][1] = r, l19[32767 + _$i][0] = e - 1 + _$i;
            _$t <<= 1, e <<= 1;
        }
    }(), function() {
        for(var _$t = 0; _$t < 256; _$t++)L4[_$t] = 19595 * _$t, L4[_$t + 256 >> 0] = 38470 * _$t, L4[_$t + 512 >> 0] = 7471 * _$t + 32768, L4[_$t + 768 >> 0] = -11059 * _$t, L4[_$t + 1024 >> 0] = -21709 * _$t, L4[_$t + 1280 >> 0] = 32768 * _$t + 8421375, L4[_$t + 1536 >> 0] = -27439 * _$t, L4[_$t + 1792 >> 0] = -5329 * _$t;
    }(), q3(t54);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function te(t, e) {
    if (this.pos = 0, this.buffer = t, this.datav = new DataView(t.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === [
        "BM",
        "BA",
        "CI",
        "CP",
        "IC",
        "PT"
    ].indexOf(this.flag)) throw new Error("Invalid BMP File");
    this.parseHeader(), this.parseBGR();
}
function ee(t58) {
    var e = function e(t) {
        if (!t) throw Error("assert :P");
    };
    var r25 = function r25(t, e, r) {
        for(var n = 0; 4 > n; n++)if (t[e + n] != r.charCodeAt(n)) return !0;
        return !1;
    };
    var n89 = function n89(t, e, r, n, i35) {
        for(var a = 0; a < i35; a++)t[e + a] = r[n + a];
    };
    var _$i = function _$i(t, e, r, n) {
        for(var _$i14 = 0; _$i14 < n; _$i14++)t[e + _$i14] = r;
    };
    var a67 = function a67(t) {
        return new Int32Array(t);
    };
    var o = function o(t, e) {
        for(var r = [], n = 0; n < t; n++)r.push(new e);
        return r;
    };
    var s = function s(t59, e) {
        var r26 = [];
        return function t(r, n, i36) {
            for(var a = i36[n], o = 0; o < a && (r.push(i36.length > n + 1 ? [] : new e), !(i36.length < n + 1)); o++)t(r[o], n + 1, i36);
        }(r26, 0, t59), r26;
    };
    var u = function u(t, e) {
        for(var r = "", n = 0; n < 4; n++)r += String.fromCharCode(t[e++]);
        return r;
    };
    var h = function h(t, e) {
        return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16) >>> 0;
    };
    var l = function l(t, e) {
        return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0;
    };
    var c24 = function c24() {
        var c23 = function c23(t, e) {
            for(var r = 1 << e - 1 >>> 0; t & r;)r >>>= 1;
            return r ? (t & r - 1) + r : t;
        };
        var u = function u(t, r, n, i37, a) {
            e(!(i37 % n));
            do t[r + (i37 -= n)] = a;
            while (0 < i37)
        };
        var h23 = function h23(t60, r27, n90, i38, o56) {
            if (e(2328 >= o56), 512 >= o56) var s18 = a67(512);
            else if (null == (s18 = a67(o56))) return 0;
            return function(t, r, n, i39, o, s) {
                var h, f, d = r, p = 1 << n, g = a67(16), m = a67(16);
                for(e(0 != o), e(null != i39), e(null != t), e(0 < n), f = 0; f < o; ++f){
                    if (15 < i39[f]) return 0;
                    ++g[i39[f]];
                }
                if (g[0] == o) return 0;
                for(m[1] = 0, h = 1; 15 > h; ++h){
                    if (g[h] > 1 << h) return 0;
                    m[h + 1] = m[h] + g[h];
                }
                for(f = 0; f < o; ++f)h = i39[f], 0 < i39[f] && (s[m[h]++] = f);
                if (1 == m[15]) return (i39 = new l).g = 0, i39.value = s[0], u(t, d, 1, p, i39), p;
                var v, b = -1, _$y = p - 1, w = 0, N = 1, L = 1, A = 1 << n;
                for(f = 0, h = 1, o = 2; h <= n; ++h, o <<= 1){
                    if (N += L <<= 1, 0 > (L -= g[h])) return 0;
                    for(; 0 < g[h]; --g[h])(i39 = new l).g = h, i39.value = s[f++], u(t, d + w, o, A, i39), w = c23(w, h);
                }
                for(h = n + 1, o = 2; 15 >= h; ++h, o <<= 1){
                    if (N += L <<= 1, 0 > (L -= g[h])) return 0;
                    for(; 0 < g[h]; --g[h]){
                        if (i39 = new l, (w & _$y) != b) {
                            for(d += A, v = 1 << (b = h) - n; 15 > b && !(0 >= (v -= g[b]));)++b, v <<= 1;
                            p += A = 1 << (v = b - n), t[r + (b = w & _$y)].g = v + n, t[r + b].value = d - r - b;
                        }
                        i39.g = h - n, i39.value = s[f++], u(t, d + (w >> n), o, A, i39), w = c23(w, h);
                    }
                }
                return N != 2 * m[15] - 1 ? 0 : p;
            }(t60, r27, n90, i38, o56, s18);
        };
        var l = function l() {
            this.value = this.g = 0;
        };
        var f20 = function f20() {
            this.value = this.g = 0;
        };
        var d14 = function d14() {
            this.G = o(5, l), this.H = a67(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o(Dr, f20);
        };
        var p16 = function p16(t, r, n, i40) {
            e(null != t), e(null != r), e(2147483648 > i40), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = r, t.pa = n, t.Jd = r, t.Yc = n + i40, t.Zc = 4 <= i40 ? n + i40 - 4 + 1 : n, _(t);
        };
        var g13 = function g13(t, e) {
            for(var r = 0; 0 < e--;)r |= k(t, 128) << e;
            return r;
        };
        var m11 = function m11(t, e) {
            var r = g13(t, e);
            return P(t) ? -r : r;
        };
        var v10 = function v10(t, r, n, i41) {
            var a, o = 0;
            for(e(null != t), e(null != r), e(4294967288 > i41), t.Sb = i41, t.Ra = 0, t.u = 0, t.h = 0, 4 < i41 && (i41 = 4), a = 0; a < i41; ++a)o += r[n + a] << 8 * a;
            t.Ra = o, t.bb = i41, t.oa = r, t.pa = n;
        };
        var b11 = function b11(t) {
            for(; 8 <= t.u && t.bb < t.Sb;)t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << Ur - 8 >>> 0, ++t.bb, t.u -= 8;
            A5(t) && (t.h = 1, t.u = 0);
        };
        var _$y6 = function _$y6(t, r) {
            if (e(0 <= r), !t.h && r <= Tr) {
                var n = L6(t) & Rr[r];
                return t.u += r, b11(t), n;
            }
            return t.h = 1, t.u = 0;
        };
        var w10 = function w10() {
            this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
        };
        var N6 = function N6() {
            this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
        };
        var L6 = function L6(t) {
            return t.Ra >>> (t.u & Ur - 1) >>> 0;
        };
        var A5 = function A5(t) {
            return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > Ur;
        };
        var x = function x(t, e) {
            t.u = e, t.h = A5(t);
        };
        var S = function S(t) {
            t.u >= zr && (e(t.u >= zr), b11(t));
        };
        var _ = function _(t) {
            e(null != t && null != t.oa), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(null != t && null != t.oa), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1));
        };
        var P = function P(t) {
            return g13(t, 1);
        };
        var k = function k(t, e) {
            var r = t.Ca;
            0 > t.b && _(t);
            var n = t.b, _$i = r * e >>> 8, a = (t.I >>> n > _$i) + 0;
            for(a ? (r -= _$i, t.I -= _$i + 1 << n >>> 0) : r = _$i + 1, n = r, _$i = 0; 256 <= n;)_$i += 8, n >>= 8;
            return n = 7 ^ _$i + Hr[n], t.b -= n, t.Ca = (r << n) - 1, a;
        };
        var _$I = function _$I(t, e, r) {
            t[e + 0] = r >> 24 & 255, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = r >> 0 & 255;
        };
        var F = function F(t, e) {
            return t[e + 0] << 0 | t[e + 1] << 8;
        };
        var C = function C(t, e) {
            return F(t, e) | t[e + 2] << 16;
        };
        var _$j = function _$j(t, e) {
            return F(t, e) | F(t, e + 2) << 16;
        };
        var O = function O(t, r) {
            var n = 1 << r;
            return e(null != t), e(0 < r), t.X = a67(n), null == t.X ? 0 : (t.Mb = 32 - r, t.Xa = r, 1);
        };
        var B = function B(t, r) {
            e(null != t), e(null != r), e(t.Xa == r.Xa), n89(r.X, 0, t.X, 0, 1 << r.Xa);
        };
        var M = function M() {
            this.X = [], this.Xa = this.Mb = 0;
        };
        var _$E = function _$E(t, r, n, i42) {
            e(null != n), e(null != i42);
            var a = n[0], o = i42[0];
            return 0 == a && (a = (t * o + r / 2) / r), 0 == o && (o = (r * a + t / 2) / t), 0 >= a || 0 >= o ? 0 : (n[0] = a, i42[0] = o, 1);
        };
        var q = function q(t, e) {
            return t + (1 << e) - 1 >>> e;
        };
        var D = function D(t, e) {
            return ((4278255360 & t) + (4278255360 & e) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & e) >>> 0 & 16711935) >>> 0;
        };
        var R = function R(e, r28) {
            _$t2[r28] = function(r, n, i43, a, o, s, c) {
                var u;
                for(u = 0; u < o; ++u){
                    var h = _$t2[e](s[c + u - 1], i43, a + u);
                    s[c + u] = D(r[n + u], h);
                }
            };
        };
        var T = function T() {
            this.ud = this.hd = this.jd = 0;
        };
        var U = function U(t, e) {
            return ((4278124286 & (t ^ e)) >>> 1) + (t & e) >>> 0;
        };
        var z = function z(t) {
            return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
        };
        var H = function H(t, e) {
            return z(t + (t - e + 0.5 >> 1));
        };
        var W = function W(t, e, r) {
            return Math.abs(e - r) - Math.abs(t - r);
        };
        var V = function V(t, e, r, n, i44, a, o) {
            for(n = a[o - 1], r = 0; r < i44; ++r)a[o + r] = n = D(t[e + r], n);
        };
        var G = function G(t, e, r, n, i45) {
            var a;
            for(a = 0; a < r; ++a){
                var o = t[e + a], s = o >> 8 & 255, c = 16711935 & (c = (c = 16711935 & o) + ((s << 16) + s));
                n[i45 + a] = (4278255360 & o) + c >>> 0;
            }
        };
        var Y = function Y(t, e) {
            e.jd = t >> 0 & 255, e.hd = t >> 8 & 255, e.ud = t >> 16 & 255;
        };
        var J = function J(t, e, r, n, i46, a) {
            var o;
            for(o = 0; o < n; ++o){
                var s = e[r + o], c = s >>> 8, u = s, h = 255 & (h = (h = s >>> 16) + ((t.jd << 24 >> 24) * (c << 24 >> 24) >>> 5));
                u = 255 & (u = (u = u + ((t.hd << 24 >> 24) * (c << 24 >> 24) >>> 5)) + ((t.ud << 24 >> 24) * (h << 24 >> 24) >>> 5));
                i46[a + o] = (4278255360 & s) + (h << 16) + u;
            }
        };
        var X = function X(e40, r29, n91, i47, a) {
            _$t2[r29] = function(t, e, r, n, o, s, c, u, h) {
                for(n = c; n < u; ++n)for(c = 0; c < h; ++c)o[s++] = a(r[i47(t[e++])]);
            }, _$t2[e40] = function(e, r, o, s, c, u, h) {
                var l = 8 >> e.b, f = e.Ea, d = e.K[0], p = e.w;
                if (8 > l) for(e = (1 << e.b) - 1, p = (1 << l) - 1; r < o; ++r){
                    var g, m = 0;
                    for(g = 0; g < f; ++g)g & e || (m = i47(s[c++])), u[h++] = a(d[m & p]), m >>= l;
                }
                else _$t2["VP8LMapColor" + n91](s, c, d, p, u, h, r, o, f);
            };
        };
        var K = function K(t, e, r, n, i48) {
            for(r = e + r; e < r;){
                var a = t[e++];
                n[i48++] = a >> 16 & 255, n[i48++] = a >> 8 & 255, n[i48++] = a >> 0 & 255;
            }
        };
        var Z = function Z(t, e, r, n, i49) {
            for(r = e + r; e < r;){
                var a = t[e++];
                n[i49++] = a >> 16 & 255, n[i49++] = a >> 8 & 255, n[i49++] = a >> 0 & 255, n[i49++] = a >> 24 & 255;
            }
        };
        var $ = function $(t, e, r, n, i50) {
            for(r = e + r; e < r;){
                var a = (o = t[e++]) >> 16 & 240 | o >> 12 & 15, o = o >> 0 & 240 | o >> 28 & 15;
                n[i50++] = a, n[i50++] = o;
            }
        };
        var Q = function Q(t, e, r, n, i51) {
            for(r = e + r; e < r;){
                var a = (o = t[e++]) >> 16 & 248 | o >> 13 & 7, o = o >> 5 & 224 | o >> 3 & 31;
                n[i51++] = a, n[i51++] = o;
            }
        };
        var tt = function tt(t, e, r, n, i52) {
            for(r = e + r; e < r;){
                var a = t[e++];
                n[i52++] = a >> 0 & 255, n[i52++] = a >> 8 & 255, n[i52++] = a >> 16 & 255;
            }
        };
        var et = function et(t, e, r, i53, a, o) {
            if (0 == o) for(r = e + r; e < r;)_$I(i53, ((o = t[e++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0), a += 32;
            else n89(i53, a, t, e, r);
        };
        var rt = function rt(e, r) {
            _$t2[r][0] = _$t2[e + "0"], _$t2[r][1] = _$t2[e + "1"], _$t2[r][2] = _$t2[e + "2"], _$t2[r][3] = _$t2[e + "3"], _$t2[r][4] = _$t2[e + "4"], _$t2[r][5] = _$t2[e + "5"], _$t2[r][6] = _$t2[e + "6"], _$t2[r][7] = _$t2[e + "7"], _$t2[r][8] = _$t2[e + "8"], _$t2[r][9] = _$t2[e + "9"], _$t2[r][10] = _$t2[e + "10"], _$t2[r][11] = _$t2[e + "11"], _$t2[r][12] = _$t2[e + "12"], _$t2[r][13] = _$t2[e + "13"], _$t2[r][14] = _$t2[e + "0"], _$t2[r][15] = _$t2[e + "0"];
        };
        var nt = function nt(t) {
            return t == Hn || t == Wn || t == Vn || t == Gn;
        };
        var it = function it() {
            this.eb = [], this.size = this.A = this.fb = 0;
        };
        var at = function at() {
            this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
        };
        var ot = function ot() {
            this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new it, this.f.kb = new at, this.sd = null;
        };
        var st = function st() {
            this.width = [
                0
            ], this.height = [
                0
            ], this.Pd = [
                0
            ], this.Qd = [
                0
            ], this.format = [
                0
            ];
        };
        var ct = function ct() {
            this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
        };
        var ut = function ut(t) {
            return alert("todo:WebPSamplerProcessPlane"), t.T;
        };
        var ht = function ht(t, e) {
            var r = t.T, _$i = e.ba.f.RGBA, a = _$i.eb, o = _$i.fb + t.ka * _$i.A, s = vi[e.ba.S], c = t.y, u = t.O, h = t.f, l = t.N, f = t.ea, d = t.W, p = e.cc, g = e.dc, m = e.Mc, v = e.Nc, b = t.ka, _$y = t.ka + t.T, w = t.U, N = w + 1 >> 1;
            for(0 == b ? s(c, u, null, null, h, l, f, d, h, l, f, d, a, o, null, null, w) : (s(e.ec, e.fc, c, u, p, g, m, v, h, l, f, d, a, o - _$i.A, a, o, w), ++r); b + 2 < _$y; b += 2)p = h, g = l, m = f, v = d, l += t.Rc, d += t.Rc, o += 2 * _$i.A, s(c, (u += 2 * t.fa) - t.fa, c, u, p, g, m, v, h, l, f, d, a, o - _$i.A, a, o, w);
            return u += t.fa, t.j + _$y < t.o ? (n89(e.ec, e.fc, c, u, w), n89(e.cc, e.dc, h, l, N), n89(e.Mc, e.Nc, f, d, N), r--) : 1 & _$y || s(c, u, null, null, h, l, f, d, h, l, f, d, a, o + _$i.A, null, null, w), r;
        };
        var lt = function lt(t, r, n) {
            var _$i = t.F, a = [
                t.J
            ];
            if (null != _$i) {
                var o = t.U, s = r.ba.S, c = s == Tn || s == Vn;
                r = r.ba.f.RGBA;
                var u = [
                    0
                ], h = t.ka;
                u[0] = t.T, t.Kb && (0 == h ? --u[0] : (--h, a[0] -= t.width), t.j + t.ka + t.T == t.o && (u[0] = t.o - t.j - h));
                var l = r.eb;
                h = r.fb + h * r.A;
                t = Sn(_$i, a[0], t.width, o, u, l, h + (c ? 0 : 3), r.A), e(n == u), t && nt(s) && An(l, h, c, o, u, r.A);
            }
            return 0;
        };
        var ft = function ft(t) {
            var e = t.ma, r = e.ba.S, n = 11 > r, _$i = r == qn || r == Rn || r == Tn || r == Un || 12 == r || nt(r);
            if (e.memory = null, e.Ib = null, e.Jb = null, e.Nd = null, !Mr(e.Oa, t, _$i ? 11 : 12)) return 0;
            if (_$i && nt(r) && br(), t.da) alert("todo:use_scaling");
            else {
                if (n) {
                    if (e.Ib = ut, t.Kb) {
                        if (r = t.U + 1 >> 1, e.memory = a67(t.U + 2 * r), null == e.memory) return 0;
                        e.ec = e.memory, e.fc = 0, e.cc = e.ec, e.dc = e.fc + t.U, e.Mc = e.cc, e.Nc = e.dc + r, e.Ib = ht, br();
                    }
                } else alert("todo:EmitYUV");
                _$i && (e.Jb = lt, n && mr());
            }
            if (n && !Ci) {
                for(t = 0; 256 > t; ++t)ji[t] = 89858 * (t - 128) + _i >> Si, Mi[t] = -22014 * (t - 128) + _i, Bi[t] = -45773 * (t - 128), Oi[t] = 113618 * (t - 128) + _i >> Si;
                for(t = Pi; t < ki; ++t)e = 76283 * (t - 16) + _i >> Si, Ei[t - Pi] = Vt2(e, 255), qi[t - Pi] = Vt2(e + 8 >> 4, 15);
                Ci = 1;
            }
            return 1;
        };
        var dt = function dt(t) {
            var r = t.ma, n = t.U, _$i = t.T;
            return e(!(1 & t.ka)), 0 >= n || 0 >= _$i ? 0 : (n = r.Ib(t, r), null != r.Jb && r.Jb(t, r, n), r.Dc += n, 1);
        };
        var pt = function pt(t) {
            t.ma.memory = null;
        };
        var gt = function gt(t, e, r, n) {
            return 47 != _$y6(t, 8) ? 0 : (e[0] = _$y6(t, 14) + 1, r[0] = _$y6(t, 14) + 1, n[0] = _$y6(t, 1), 0 != _$y6(t, 3) ? 0 : !t.h);
        };
        var mt = function mt(t, e) {
            if (4 > t) return t + 1;
            var r = t - 2 >> 1;
            return (2 + (1 & t) << r) + _$y6(e, r) + 1;
        };
        var vt = function vt(t, e) {
            var r;
            return 120 < e ? e - 120 : 1 <= (r = ((r = $n[e - 1]) >> 4) * t + (8 - (15 & r))) ? r : 1;
        };
        var bt = function bt(t, e, r) {
            var n = L6(r), _$i = t[e += 255 & n].g - 8;
            return 0 < _$i && (x(r, r.u + 8), n = L6(r), e += t[e].value, e += n & (1 << _$i) - 1), x(r, r.u + t[e].g), t[e].value;
        };
        var yt = function yt(t, r, n) {
            return n.g += t.g, n.value += t.value << r >>> 0, e(8 >= n.g), t.g;
        };
        var wt = function wt(t, r, n) {
            var _$i = t.xc;
            return e((r = 0 == _$i ? 0 : t.vc[t.md * (n >> _$i) + (r >> _$i)]) < t.Wb), t.Ya[r];
        };
        var Nt = function Nt(t, r, i54, a) {
            var o = t.ab, s = t.c * r, c = t.C;
            r = c + r;
            var u = i54, h = a;
            for(a = t.Ta, i54 = t.Ua; 0 < o--;){
                var l = t.gc[o], f = c, d = r, p = u, g = h, m = (h = a, u = i54, l.Ea);
                switch(e(f < d), e(d <= l.nc), l.hc){
                    case 2:
                        Gr(p, g, (d - f) * m, h, u);
                        break;
                    case 0:
                        var v = f, b = d, _$y = h, w = u, N = (_ = l).Ea;
                        0 == v && (Wr(p, g, null, null, 1, _$y, w), V(p, g + 1, 0, 0, N - 1, _$y, w + 1), g += N, w += N, ++v);
                        for(var L = 1 << _.b, A = L - 1, x = q(N, _.b), S = _.K, _ = _.w + (v >> _.b) * x; v < b;){
                            var P = S, k = _, _$I = 1;
                            for(Vr(p, g, _$y, w - N, 1, _$y, w); _$I < N;){
                                var F = (_$I & ~A) + L;
                                F > N && (F = N), (0, Zr[P[k++] >> 8 & 15])(p, g + +_$I, _$y, w + _$I - N, F - _$I, _$y, w + _$I), _$I = F;
                            }
                            g += N, w += N, ++v & A || (_ += x);
                        }
                        d != l.nc && n89(h, u - m, h, u + (d - f - 1) * m, m);
                        break;
                    case 1:
                        for(m = p, b = g, N = (p = l.Ea) - (w = p & ~(_$y = (g = 1 << l.b) - 1)), v = q(p, l.b), L = l.K, l = l.w + (f >> l.b) * v; f < d;){
                            for(A = L, x = l, S = new T, _ = b + w, P = b + p; b < _;)Y(A[x++], S), $r(S, m, b, g, h, u), b += g, u += g;
                            b < P && (Y(A[x++], S), $r(S, m, b, N, h, u), b += N, u += N), ++f & _$y || (l += v);
                        }
                        break;
                    case 3:
                        if (p == h && g == u && 0 < l.b) {
                            for(b = h, p = m = u + (d - f) * m - (w = (d - f) * q(l.Ea, l.b)), g = h, _$y = u, v = [], w = (N = w) - 1; 0 <= w; --w)v[w] = g[_$y + w];
                            for(w = N - 1; 0 <= w; --w)b[p + w] = v[w];
                            Yr(l, f, d, h, m, h, u);
                        } else Yr(l, f, d, p, g, h, u);
                }
                u = a, h = i54;
            }
            h != i54 && n89(a, i54, u, h, s);
        };
        var Lt = function Lt(t, r) {
            var n = t.V, _$i = t.Ba + t.c * t.C, a = r - t.C;
            if (e(r <= t.l.o), e(16 >= a), 0 < a) {
                var o = t.l, s = t.Ta, c = t.Ua, u = o.width;
                if (Nt(t, a, n, _$i), a = c = [
                    c
                ], e((n = t.C) < (_$i = r)), e(o.v < o.va), _$i > o.o && (_$i = o.o), n < o.j) {
                    var h = o.j - n;
                    n = o.j;
                    a[0] += h * u;
                }
                if (n >= _$i ? n = 0 : (a[0] += 4 * o.v, o.ka = n - o.j, o.U = o.va - o.v, o.T = _$i - n, n = 1), n) {
                    if (c = c[0], 11 > (n = t.ca).S) {
                        var l = n.f.RGBA, f = (_$i = n.S, a = o.U, o = o.T, h = l.eb, l.A), d = o;
                        for(l = l.fb + t.Ma * l.A; 0 < d--;){
                            var p = s, g = c, m = a, v = h, b = l;
                            switch(_$i){
                                case En:
                                    Qr(p, g, m, v, b);
                                    break;
                                case qn:
                                    tn(p, g, m, v, b);
                                    break;
                                case Hn:
                                    tn(p, g, m, v, b), An(v, b, 0, m, 1, 0);
                                    break;
                                case Dn:
                                    nn(p, g, m, v, b);
                                    break;
                                case Rn:
                                    et(p, g, m, v, b, 1);
                                    break;
                                case Wn:
                                    et(p, g, m, v, b, 1), An(v, b, 0, m, 1, 0);
                                    break;
                                case Tn:
                                    et(p, g, m, v, b, 0);
                                    break;
                                case Vn:
                                    et(p, g, m, v, b, 0), An(v, b, 1, m, 1, 0);
                                    break;
                                case Un:
                                    en(p, g, m, v, b);
                                    break;
                                case Gn:
                                    en(p, g, m, v, b), xn(v, b, m, 1, 0);
                                    break;
                                case zn:
                                    rn(p, g, m, v, b);
                                    break;
                                default:
                                    e(0);
                            }
                            c += u, l += f;
                        }
                        t.Ma += o;
                    } else alert("todo:EmitRescaledRowsYUVA");
                    e(t.Ma <= n.height);
                }
            }
            t.C = r, e(t.C <= t.i);
        };
        var At = function At(t) {
            var e;
            if (0 < t.ua) return 0;
            for(e = 0; e < t.Wb; ++e){
                var r = t.Ya[e].G, n = t.Ya[e].H;
                if (0 < r[1][n[1] + 0].g || 0 < r[2][n[2] + 0].g || 0 < r[3][n[3] + 0].g) return 0;
            }
            return 1;
        };
        var xt = function xt(t, r, n, i55, a, o) {
            if (0 != t.Z) {
                var s = t.qd, c = t.rd;
                for(e(null != mi[t.Z]); r < n; ++r)mi[t.Z](s, c, i55, a, i55, a, o), s = i55, c = a, a += o;
                t.qd = s, t.rd = c;
            }
        };
        var St = function St(t, r) {
            var n = t.l.ma, _$i = 0 == n.Z || 1 == n.Z ? t.l.j : t.C;
            _$i = t.C < _$i ? _$i : t.C;
            if (e(r <= t.l.o), r > _$i) {
                var a = t.l.width, o = n.ca, s = n.tb + a * _$i, c = t.V, u = t.Ba + t.c * _$i, h = t.gc;
                e(1 == t.ab), e(3 == h[0].hc), Xr(h[0], _$i, r, c, u, o, s), xt(n, _$i, r, o, s, a);
            }
            t.C = t.Ma = r;
        };
        var _$_t = function _$_t(t, r, n, i56, a, o, s) {
            var c = t.$ / i56, u = t.$ % i56, h = t.m, l = t.s, f = n + t.$, d = f;
            a = n + i56 * a;
            var p = n + i56 * o, g = 280 + l.ua, m = t.Pb ? c : 16777216, v = 0 < l.ua ? l.Wa : null, b = l.wc, _$y = f < p ? wt(l, u, c) : null;
            e(t.C < o), e(p <= a);
            var w = !1;
            t: for(;;){
                for(; w || f < p;){
                    var N = 0;
                    if (c >= m) {
                        var _ = f - n;
                        e((m = t).Pb), m.wd = m.m, m.xd = _, 0 < m.s.ua && B(m.s.Wa, m.s.vb), m = c + ti;
                    }
                    if (u & b || (_$y = wt(l, u, c)), e(null != _$y), _$y.Qb && (r[f] = _$y.qb, w = !0), !w) {
                        if (S(h), _$y.jc) {
                            N = h, _ = r;
                            var P = f, k = _$y.pd[L6(N) & Dr - 1];
                            e(_$y.jc), 256 > k.g ? (x(N, N.u + k.g), _[P] = k.value, N = 0) : (x(N, N.u + k.g - 256), e(256 <= k.value), N = k.value), 0 == N && (w = !0);
                        } else N = bt(_$y.G[0], _$y.H[0], h);
                    }
                    if (h.h) break;
                    if (w || 256 > N) {
                        if (!w) {
                            if (_$y.nd) r[f] = (_$y.qb | N << 8) >>> 0;
                            else {
                                if (S(h), w = bt(_$y.G[1], _$y.H[1], h), S(h), _ = bt(_$y.G[2], _$y.H[2], h), P = bt(_$y.G[3], _$y.H[3], h), h.h) break;
                                r[f] = (P << 24 | w << 16 | N << 8 | _) >>> 0;
                            }
                        }
                        if (w = !1, ++f, ++u >= i56 && (u = 0, ++c, null != s && c <= o && !(c % 16) && s(t, c), null != v)) for(; d < f;)N = r[d++], v.X[(506832829 * N & 4294967295) >>> v.Mb] = N;
                    } else if (280 > N) {
                        if (N = mt(N - 256, h), _ = bt(_$y.G[4], _$y.H[4], h), S(h), _ = vt(i56, _ = mt(_, h)), h.h) break;
                        if (f - n < _ || a - f < N) break t;
                        for(P = 0; P < N; ++P)r[f + P] = r[f + P - _];
                        for(f += N, u += N; u >= i56;)u -= i56, ++c, null != s && c <= o && !(c % 16) && s(t, c);
                        if (e(f <= a), u & b && (_$y = wt(l, u, c)), null != v) for(; d < f;)N = r[d++], v.X[(506832829 * N & 4294967295) >>> v.Mb] = N;
                    } else {
                        if (!(N < g)) break t;
                        for(w = N - 280, e(null != v); d < f;)N = r[d++], v.X[(506832829 * N & 4294967295) >>> v.Mb] = N;
                        N = f, e(!(w >>> (_ = v).Xa)), r[N] = _.X[w], w = !0;
                    }
                    w || e(h.h == A5(h));
                }
                if (t.Pb && h.h && f < a) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && B(t.s.vb, t.s.Wa);
                else {
                    if (h.h) break t;
                    null != s && s(t, c > o ? o : c), t.a = 0, t.$ = f - n;
                }
                return 1;
            }
            return t.a = 3, 0;
        };
        var Pt = function Pt(t) {
            e(null != t), t.vc = null, t.yc = null, t.Ya = null;
            var r = t.Wa;
            null != r && (r.X = null), t.vb = null, e(null != t);
        };
        var kt = function kt() {
            var e = new or;
            return null == e ? null : (e.a = 0, e.xb = gi, rt("Predictor", "VP8LPredictors"), rt("Predictor", "VP8LPredictors_C"), rt("PredictorAdd", "VP8LPredictorsAdd"), rt("PredictorAdd", "VP8LPredictorsAdd_C"), Gr = G, $r = J, Qr = K, tn = Z, en = $, rn = Q, nn = tt, _$t2.VP8LMapColor32b = Jr, _$t2.VP8LMapColor8b = Kr, e);
        };
        var Ft = function Ft(t, r) {
            var n = t.c * t.i, _$i = n + r + 16 * r;
            return e(t.c <= r), t.V = a67(_$i), null == t.V ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + n + r, 1);
        };
        var Ct = function Ct(t, r) {
            var n = t.C, _$i = r - n, a = t.V, o = t.Ba + t.c * n;
            for(e(r <= t.l.o); 0 < _$i;){
                var s = 16 < _$i ? 16 : _$i, c = t.l.ma, u = t.l.width, h = u * s, l = c.ca, f = c.tb + u * n, d = t.Ta, p = t.Ua;
                Nt(t, s, a, o), _n(d, p, l, f, h), xt(c, n, n + s, l, f, u), _$i -= s, a += s * t.c, n += s;
            }
            e(n == r), t.C = t.Ma = r;
        };
        var jt = function jt() {
            this.ub = this.yd = this.td = this.Rb = 0;
        };
        var Ot = function Ot() {
            this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
        };
        var Bt = function Bt() {
            this.Fb = this.Bb = this.Cb = 0, this.Zb = a67(4), this.Lb = a67(4);
        };
        var Mt = function Mt() {
            this.Yb = function() {
                var _$t = [];
                return function t(e, r, n) {
                    for(var _$i = n[r], a = 0; a < _$i && (e.push(n.length > r + 1 ? [] : 0), !(n.length < r + 1)); a++)t(e[a], r + 1, n);
                }(_$t, 0, [
                    3,
                    11
                ]), _$t;
            }();
        };
        var Et = function Et() {
            this.jb = a67(3), this.Wc = s([
                4,
                8
            ], Mt), this.Xc = s([
                4,
                17
            ], Mt);
        };
        var qt = function qt() {
            this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a67(4), this.od = new a67(4);
        };
        var Dt = function Dt() {
            this.ld = this.La = this.dd = this.tc = 0;
        };
        var Rt = function Rt() {
            this.Na = this.la = 0;
        };
        var Tt = function Tt() {
            this.Sc = [
                0,
                0
            ], this.Eb = [
                0,
                0
            ], this.Qc = [
                0,
                0
            ], this.ia = this.lc = 0;
        };
        var Ut = function Ut() {
            this.ad = a67(384), this.Za = 0, this.Ob = a67(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
        };
        var zt = function zt() {
            this.uc = this.M = this.Nb = 0, this.wa = Array(new Dt), this.Y = 0, this.ya = Array(new Ut), this.aa = 0, this.l = new Gt;
        };
        var Ht = function Ht() {
            this.y = a67(16), this.f = a67(8), this.ea = a67(8);
        };
        var Wt = function Wt() {
            this.cb = this.a = 0, this.sc = "", this.m = new w10, this.Od = new jt, this.Kc = new Ot, this.ed = new qt, this.Qa = new Bt, this.Ic = this.$c = this.Aa = 0, this.D = new zt, this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o(8, w10), this.ia = 0, this.pb = o(4, Tt), this.Pa = new Et, this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [
                0,
                0,
                0,
                0
            ], this.Gd = Array(new Ht), this.Hd = 0, this.rb = Array(new Rt), this.sb = 0, this.wa = Array(new Dt), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Ut), this.L = this.aa = 0, this.gd = s([
                4,
                2
            ], Dt), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
        };
        var Vt2 = function Vt2(t, e) {
            return 0 > t ? 0 : t > e ? e : t;
        };
        var Gt = function Gt() {
            this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
        };
        var Yt = function Yt() {
            var _$t = new Wt;
            return null != _$t && (_$t.a = 0, _$t.sc = "OK", _$t.cb = 0, _$t.Xb = 0, ni || (ni = Zt2)), _$t;
        };
        var Jt = function Jt(t, e, r) {
            return 0 == t.a && (t.a = e, t.sc = r, t.cb = 0), 0;
        };
        var Xt = function Xt(t, e, r) {
            return 3 <= r && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2];
        };
        var Kt = function Kt(t, r) {
            if (null == t) return 0;
            if (t.a = 0, t.sc = "OK", null == r) return Jt(t, 2, "null VP8Io passed to VP8GetHeaders()");
            var n = r.data, a = r.w, o = r.ha;
            if (4 > o) return Jt(t, 7, "Truncated header.");
            var s = n[a + 0] | n[a + 1] << 8 | n[a + 2] << 16, c = t.Od;
            if (c.Rb = !(1 & s), c.td = s >> 1 & 7, c.yd = s >> 4 & 1, c.ub = s >> 5, 3 < c.td) return Jt(t, 3, "Incorrect keyframe parameters.");
            if (!c.yd) return Jt(t, 4, "Frame not displayable.");
            a += 3, o -= 3;
            var u = t.Kc;
            if (c.Rb) {
                if (7 > o) return Jt(t, 7, "cannot parse picture header");
                if (!Xt(n, a, o)) return Jt(t, 3, "Bad code word");
                u.c = 16383 & (n[a + 4] << 8 | n[a + 3]), u.Td = n[a + 4] >> 6, u.i = 16383 & (n[a + 6] << 8 | n[a + 5]), u.Ud = n[a + 6] >> 6, a += 7, o -= 7, t.za = u.c + 15 >> 4, t.Ub = u.i + 15 >> 4, r.width = u.c, r.height = u.i, r.Da = 0, r.j = 0, r.v = 0, r.va = r.width, r.o = r.height, r.da = 0, r.ib = r.width, r.hb = r.height, r.U = r.width, r.T = r.height, _$i((s = t.Pa).jb, 0, 255, s.jb.length), e(null != (s = t.Qa)), s.Cb = 0, s.Bb = 0, s.Fb = 1, _$i(s.Zb, 0, 0, s.Zb.length), _$i(s.Lb, 0, 0, s.Lb);
            }
            if (c.ub > o) return Jt(t, 7, "bad partition length");
            p16(s = t.m, n, a, c.ub), a += c.ub, o -= c.ub, c.Rb && (u.Ld = P(s), u.Kd = P(s)), u = t.Qa;
            var h, l = t.Pa;
            if (e(null != s), e(null != u), u.Cb = P(s), u.Cb) {
                if (u.Bb = P(s), P(s)) {
                    for(u.Fb = P(s), h = 0; 4 > h; ++h)u.Zb[h] = P(s) ? m11(s, 7) : 0;
                    for(h = 0; 4 > h; ++h)u.Lb[h] = P(s) ? m11(s, 6) : 0;
                }
                if (u.Bb) for(h = 0; 3 > h; ++h)l.jb[h] = P(s) ? g13(s, 8) : 255;
            } else u.Bb = 0;
            if (s.Ka) return Jt(t, 3, "cannot parse segment header");
            if ((u = t.ed).zd = P(s), u.Tb = g13(s, 6), u.wb = g13(s, 3), u.Pc = P(s), u.Pc && P(s)) {
                for(l = 0; 4 > l; ++l)P(s) && (u.vd[l] = m11(s, 6));
                for(l = 0; 4 > l; ++l)P(s) && (u.od[l] = m11(s, 6));
            }
            if (t.L = 0 == u.Tb ? 0 : u.zd ? 1 : 2, s.Ka) return Jt(t, 3, "cannot parse filter header");
            var f = o;
            if (o = h = a, a = h + f, u = f, t.Xb = (1 << g13(t.m, 2)) - 1, f < 3 * (l = t.Xb)) n = 7;
            else {
                for(h += 3 * l, u -= 3 * l, f = 0; f < l; ++f){
                    var d = n[o + 0] | n[o + 1] << 8 | n[o + 2] << 16;
                    d > u && (d = u), p16(t.Jc[+f], n, h, d), h += d, u -= d, o += 3;
                }
                p16(t.Jc[+l], n, h, u), n = h < a ? 0 : 5;
            }
            if (0 != n) return Jt(t, n, "cannot parse partitions");
            for(n = g13(h = t.m, 7), o = P(h) ? m11(h, 4) : 0, a = P(h) ? m11(h, 4) : 0, u = P(h) ? m11(h, 4) : 0, l = P(h) ? m11(h, 4) : 0, h = P(h) ? m11(h, 4) : 0, f = t.Qa, d = 0; 4 > d; ++d){
                if (f.Cb) {
                    var v = f.Zb[d];
                    f.Fb || (v += n);
                } else {
                    if (0 < d) {
                        t.pb[d] = t.pb[0];
                        continue;
                    }
                    v = n;
                }
                var b = t.pb[d];
                b.Sc[0] = ei[Vt2(v + o, 127)], b.Sc[1] = ri[Vt2(v + 0, 127)], b.Eb[0] = 2 * ei[Vt2(v + a, 127)], b.Eb[1] = 101581 * ri[Vt2(v + u, 127)] >> 16, 8 > b.Eb[1] && (b.Eb[1] = 8), b.Qc[0] = ei[Vt2(v + l, 117)], b.Qc[1] = ri[Vt2(v + h, 127)], b.lc = v + h;
            }
            if (!c.Rb) return Jt(t, 4, "Not a key frame.");
            for(P(s), c = t.Pa, n = 0; 4 > n; ++n){
                for(o = 0; 8 > o; ++o)for(a = 0; 3 > a; ++a)for(u = 0; 11 > u; ++u)l = k(s, ui[n][o][a][u]) ? g13(s, 8) : si[n][o][a][u], c.Wc[n][o].Yb[a][u] = l;
                for(o = 0; 17 > o; ++o)c.Xc[n][o] = c.Wc[n][hi[o]];
            }
            return t.kc = P(s), t.kc && (t.Bd = g13(s, 8)), t.cb = 1;
        };
        var Zt2 = function Zt2(t, e, r, n, i57, a, o) {
            var s = e[i57].Yb[r];
            for(r = 0; 16 > i57; ++i57){
                if (!k(t, s[r + 0])) return i57;
                for(; !k(t, s[r + 1]);)if (s = e[++i57].Yb[0], r = 0, 16 == i57) return 16;
                var c = e[i57 + 1].Yb;
                if (k(t, s[r + 2])) {
                    var u = t, h = 0;
                    if (k(u, (f = s)[(l = r) + 3])) {
                        if (k(u, f[l + 6])) {
                            for(s = 0, l = 2 * (h = k(u, f[l + 8])) + (f = k(u, f[l + 9 + h])), h = 0, f = ii[l]; f[s]; ++s)h += h + k(u, f[s]);
                            h += 3 + (8 << l);
                        } else k(u, f[l + 7]) ? (h = 7 + 2 * k(u, 165), h += k(u, 145)) : h = 5 + k(u, 159);
                    } else h = k(u, f[l + 4]) ? 3 + k(u, f[l + 5]) : 2;
                    s = c[2];
                } else h = 1, s = c[1];
                c = o + ai[i57], 0 > (u = t).b && _(u);
                var l, f = u.b, d = (l = u.Ca >> 1) - (u.I >> f) >> 31;
                --u.b, u.Ca += d, u.Ca |= 1, u.I -= (l + 1 & d) << f, a[c] = ((h ^ d) - d) * n[(0 < i57) + 0];
            }
            return 16;
        };
        var $t = function $t(t) {
            var e = t.rb[t.sb - 1];
            e.la = 0, e.Na = 0, _$i(t.zc, 0, 0, t.zc.length), t.ja = 0;
        };
        var Qt = function Qt(t61, r30) {
            if (null == t61) return 0;
            if (null == r30) return Jt(t61, 2, "NULL VP8Io parameter in VP8Decode().");
            if (!t61.cb && !Kt(t61, r30)) return 0;
            if (e(t61.cb), null == r30.ac || r30.ac(r30)) {
                r30.ob && (t61.L = 0);
                var s = Ri[t61.L];
                if (2 == t61.L ? (t61.yb = 0, t61.zb = 0) : (t61.yb = r30.v - s >> 4, t61.zb = r30.j - s >> 4, 0 > t61.yb && (t61.yb = 0), 0 > t61.zb && (t61.zb = 0)), t61.Va = r30.o + 15 + s >> 4, t61.Hb = r30.va + 15 + s >> 4, t61.Hb > t61.za && (t61.Hb = t61.za), t61.Va > t61.Ub && (t61.Va = t61.Ub), 0 < t61.L) {
                    var c = t61.ed;
                    for(s = 0; 4 > s; ++s){
                        var u;
                        if (t61.Qa.Cb) {
                            var h = t61.Qa.Lb[s];
                            t61.Qa.Fb || (h += c.Tb);
                        } else h = c.Tb;
                        for(u = 0; 1 >= u; ++u){
                            var l = t61.gd[s][u], f = h;
                            if (c.Pc && (f += c.vd[0], u && (f += c.od[0])), 0 < (f = 0 > f ? 0 : 63 < f ? 63 : f)) {
                                var d = f;
                                0 < c.wb && (d = 4 < c.wb ? d >> 2 : d >> 1) > 9 - c.wb && (d = 9 - c.wb), 1 > d && (d = 1), l.dd = d, l.tc = 2 * f + d, l.ld = 40 <= f ? 2 : 15 <= f ? 1 : 0;
                            } else l.tc = 0;
                            l.La = u;
                        }
                    }
                }
                s = 0;
            } else Jt(t61, 6, "Frame setup failed"), s = t61.a;
            if (s = 0 == s) {
                if (s) {
                    t61.$c = 0, 0 < t61.Aa || (t61.Ic = Ui);
                    t: {
                        s = t61.Ic;
                        c = 4 * (d = t61.za);
                        var p = 32 * d, g = d + 1, m = 0 < t61.L ? d * (0 < t61.Aa ? 2 : 1) : 0, v = (2 == t61.Aa ? 2 : 1) * d;
                        if ((l = c + 832 + (u = 3 * (16 * s + Ri[t61.L]) / 2 * p) + (h = null != t61.Fa && 0 < t61.Fa.length ? t61.Kc.c * t61.Kc.i : 0)) != l) s = 0;
                        else {
                            if (l > t61.Vb) {
                                if (t61.Vb = 0, t61.Ec = a67(l), t61.Fc = 0, null == t61.Ec) {
                                    s = Jt(t61, 1, "no memory during frame initialization.");
                                    break t;
                                }
                                t61.Vb = l;
                            }
                            l = t61.Ec, f = t61.Fc, t61.Ac = l, t61.Bc = f, f += c, t61.Gd = o(p, Ht), t61.Hd = 0, t61.rb = o(g + 1, Rt), t61.sb = 1, t61.wa = m ? o(m, Dt) : null, t61.Y = 0, t61.D.Nb = 0, t61.D.wa = t61.wa, t61.D.Y = t61.Y, 0 < t61.Aa && (t61.D.Y += d), e(!0), t61.oc = l, t61.pc = f, f += 832, t61.ya = o(v, Ut), t61.aa = 0, t61.D.ya = t61.ya, t61.D.aa = t61.aa, 2 == t61.Aa && (t61.D.aa += d), t61.R = 16 * d, t61.B = 8 * d, d = (p = Ri[t61.L]) * t61.R, p = p / 2 * t61.B, t61.sa = l, t61.ta = f + d, t61.qa = t61.sa, t61.ra = t61.ta + 16 * s * t61.R + p, t61.Ha = t61.qa, t61.Ia = t61.ra + 8 * s * t61.B + p, t61.$c = 0, f += u, t61.mb = h ? l : null, t61.nb = h ? f : null, e(f + h <= t61.Fc + t61.Vb), $t(t61), _$i(t61.Ac, t61.Bc, 0, c), s = 1;
                        }
                    }
                    if (s) {
                        if (r30.ka = 0, r30.y = t61.sa, r30.O = t61.ta, r30.f = t61.qa, r30.N = t61.ra, r30.ea = t61.Ha, r30.Vd = t61.Ia, r30.fa = t61.R, r30.Rc = t61.B, r30.F = null, r30.J = 0, !Cn) {
                            for(s = -255; 255 >= s; ++s)Pn[255 + s] = 0 > s ? -s : s;
                            for(s = -1020; 1020 >= s; ++s)kn[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
                            for(s = -112; 112 >= s; ++s)In[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
                            for(s = -255; 510 >= s; ++s)Fn[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
                            Cn = 1;
                        }
                        an = ue, on = ae, cn = oe, un = se, hn = ce, sn = ie, ln = Je, fn = Xe, dn = $e, pn = Qe, gn = Ke, mn = Ze, vn = tr, bn = er, yn = ze, wn = He, Nn = We, Ln = Ve, fi[0] = xe, fi[1] = le, fi[2] = Le, fi[3] = Ae, fi[4] = Se, fi[5] = Pe, fi[6] = _e, fi[7] = ke, fi[8] = Fe, fi[9] = Ie, li[0] = ve, li[1] = de, li[2] = pe, li[3] = ge, li[4] = be, li[5] = ye, li[6] = we, di[0] = Be, di[1] = fe, di[2] = Ce, di[3] = je, di[4] = Ee, di[5] = Me, di[6] = qe, s = 1;
                    } else s = 0;
                }
                s && (s = function(t, r) {
                    for(t.M = 0; t.M < t.Va; ++t.M){
                        var o, s = t.Jc[t.M & t.Xb], c = t.m, u = t;
                        for(o = 0; o < u.za; ++o){
                            var h = c, l = u, f = l.Ac, d = l.Bc + 4 * o, p = l.zc, g = l.ya[l.aa + o];
                            if (l.Qa.Bb ? g.$b = k(h, l.Pa.jb[0]) ? 2 + k(h, l.Pa.jb[2]) : k(h, l.Pa.jb[1]) : g.$b = 0, l.kc && (g.Ad = k(h, l.Bd)), g.Za = !k(h, 145) + 0, g.Za) {
                                var m = g.Ob, v = 0;
                                for(l = 0; 4 > l; ++l){
                                    var b, _$y = p[0 + l];
                                    for(b = 0; 4 > b; ++b){
                                        _$y = ci[f[d + b]][_$y];
                                        for(var w = oi[k(h, _$y[0])]; 0 < w;)w = oi[2 * w + k(h, _$y[w])];
                                        _$y = -w, f[d + b] = _$y;
                                    }
                                    n89(m, v, f, d, 4), v += 4, p[0 + l] = _$y;
                                }
                            } else _$y = k(h, 156) ? k(h, 128) ? 1 : 3 : k(h, 163) ? 2 : 0, g.Ob[0] = _$y, _$i(f, d, _$y, 4), _$i(p, 0, _$y, 4);
                            g.Dd = k(h, 142) ? k(h, 114) ? k(h, 183) ? 1 : 3 : 2 : 0;
                        }
                        if (u.m.Ka) return Jt(t, 7, "Premature end-of-partition0 encountered.");
                        for(; t.ja < t.za; ++t.ja){
                            if (u = s, h = (c = t).rb[c.sb - 1], f = c.rb[c.sb + c.ja], o = c.ya[c.aa + c.ja], d = c.kc ? o.Ad : 0) h.la = f.la = 0, o.Za || (h.Na = f.Na = 0), o.Hc = 0, o.Gc = 0, o.ia = 0;
                            else {
                                var N, L;
                                h = f, f = u, d = c.Pa.Xc, p = c.ya[c.aa + c.ja], g = c.pb[p.$b];
                                if (l = p.ad, m = 0, v = c.rb[c.sb - 1], _$y = b = 0, _$i(l, m, 0, 384), p.Za) var A = 0, x = d[3];
                                else {
                                    w = a67(16);
                                    var S = h.Na + v.Na;
                                    if (S = ni(f, d[1], S, g.Eb, 0, w, 0), h.Na = v.Na = (0 < S) + 0, 1 < S) an(w, 0, l, m);
                                    else {
                                        var _ = w[0] + 3 >> 3;
                                        for(w = 0; 256 > w; w += 16)l[m + w] = _;
                                    }
                                    A = 1, x = d[0];
                                }
                                var P = 15 & h.la, _$I = 15 & v.la;
                                for(w = 0; 4 > w; ++w){
                                    var F = 1 & _$I;
                                    for(_ = L = 0; 4 > _; ++_)P = P >> 1 | (F = (S = ni(f, x, S = F + (1 & P), g.Sc, A, l, m)) > A) << 7, L = L << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != l[m + 0]), m += 16;
                                    P >>= 4, _$I = _$I >> 1 | F << 7, b = (b << 8 | L) >>> 0;
                                }
                                for(x = P, A = _$I >> 4, N = 0; 4 > N; N += 2){
                                    for(L = 0, P = h.la >> 4 + N, _$I = v.la >> 4 + N, w = 0; 2 > w; ++w){
                                        for(F = 1 & _$I, _ = 0; 2 > _; ++_)S = F + (1 & P), P = P >> 1 | (F = 0 < (S = ni(f, d[2], S, g.Qc, 0, l, m))) << 3, L = L << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != l[m + 0]), m += 16;
                                        P >>= 2, _$I = _$I >> 1 | F << 5;
                                    }
                                    _$y |= L << 4 * N, x |= P << 4 << N, A |= (240 & _$I) << N;
                                }
                                h.la = x, v.la = A, p.Hc = b, p.Gc = _$y, p.ia = 43690 & _$y ? 0 : g.ia, d = !(b | _$y);
                            }
                            if (0 < c.L && (c.wa[c.Y + c.ja] = c.gd[o.$b][o.Za], c.wa[c.Y + c.ja].La |= !d), u.Ka) return Jt(t, 7, "Premature end-of-file encountered.");
                        }
                        if ($t(t), c = r, u = 1, o = (s = t).D, h = 0 < s.L && s.M >= s.zb && s.M <= s.Va, 0 == s.Aa) t: {
                            if (o.M = s.M, o.uc = h, Or(s, o), u = 1, o = (L = s.D).Nb, h = (_$y = Ri[s.L]) * s.R, f = _$y / 2 * s.B, w = 16 * o * s.R, _ = 8 * o * s.B, d = s.sa, p = s.ta - h + w, g = s.qa, l = s.ra - f + _, m = s.Ha, v = s.Ia - f + _, _$I = 0 == (P = L.M), b = P >= s.Va - 1, 2 == s.Aa && Or(s, L), L.uc) for(F = (S = s).D.M, e(S.D.uc), L = S.yb; L < S.Hb; ++L){
                                A = L, x = F;
                                var C9 = (_$j = (U = S).D).Nb;
                                N = U.R;
                                var _$j = _$j.wa[_$j.Y + A], O = U.sa, B = U.ta + 16 * C9 * N + 16 * A, M = _$j.dd, _$E = _$j.tc;
                                if (0 != _$E) {
                                    if (e(3 <= _$E), 1 == U.L) 0 < A && wn(O, B, N, _$E + 4), _$j.La && Ln(O, B, N, _$E), 0 < x && yn(O, B, N, _$E + 4), _$j.La && Nn(O, B, N, _$E);
                                    else {
                                        var q = U.B, D = U.qa, R = U.ra + 8 * C9 * q + 8 * A, T = U.Ha, U = U.Ia + 8 * C9 * q + 8 * A;
                                        C9 = _$j.ld;
                                        0 < A && (fn(O, B, N, _$E + 4, M, C9), pn(D, R, T, U, q, _$E + 4, M, C9)), _$j.La && (mn(O, B, N, _$E, M, C9), bn(D, R, T, U, q, _$E, M, C9)), 0 < x && (ln(O, B, N, _$E + 4, M, C9), dn(D, R, T, U, q, _$E + 4, M, C9)), _$j.La && (gn(O, B, N, _$E, M, C9), vn(D, R, T, U, q, _$E, M, C9));
                                    }
                                }
                            }
                            if (s.ia && alert("todo:DitherRow"), null != c.put) {
                                if (L = 16 * P, P = 16 * (P + 1), _$I ? (c.y = s.sa, c.O = s.ta + w, c.f = s.qa, c.N = s.ra + _, c.ea = s.Ha, c.W = s.Ia + _) : (L -= _$y, c.y = d, c.O = p, c.f = g, c.N = l, c.ea = m, c.W = v), b || (P -= _$y), P > c.o && (P = c.o), c.F = null, c.J = null, null != s.Fa && 0 < s.Fa.length && L < P && (c.J = lr(s, c, L, P - L), c.F = s.mb, null == c.F && 0 == c.F.length)) {
                                    u = Jt(s, 3, "Could not decode alpha data.");
                                    break t;
                                }
                                L < c.j && (_$y = c.j - L, L = c.j, e(!(1 & _$y)), c.O += s.R * _$y, c.N += s.B * (_$y >> 1), c.W += s.B * (_$y >> 1), null != c.F && (c.J += c.width * _$y)), L < P && (c.O += c.v, c.N += c.v >> 1, c.W += c.v >> 1, null != c.F && (c.J += c.v), c.ka = L - c.j, c.U = c.va - c.v, c.T = P - L, u = c.put(c));
                            }
                            o + 1 != s.Ic || b || (n89(s.sa, s.ta - h, d, p + 16 * s.R, h), n89(s.qa, s.ra - f, g, l + 8 * s.B, f), n89(s.Ha, s.Ia - f, m, v + 8 * s.B, f));
                        }
                        if (!u) return Jt(t, 6, "Output aborted.");
                    }
                    return 1;
                }(t61, r30)), null != r30.bc && r30.bc(r30), s &= 1;
            }
            return s ? (t61.cb = 0, s) : 0;
        };
        var _$te = function _$te(t, e, r, n, i58) {
            i58 = t[e + r + 32 * n] + (i58 >> 3), t[e + r + 32 * n] = -256 & i58 ? 0 > i58 ? 0 : 255 : i58;
        };
        var _$ee = function _$ee(t, e, r, n, i59, a) {
            _$te(t, e, 0, r, n + i59), _$te(t, e, 1, r, n + a), _$te(t, e, 2, r, n - a), _$te(t, e, 3, r, n - i59);
        };
        var re = function re(t) {
            return (20091 * t >> 16) + t;
        };
        var ne = function ne(t, e, r, n) {
            var _$i, o = 0, s = a67(16);
            for(_$i = 0; 4 > _$i; ++_$i){
                var c = t[e + 0] + t[e + 8], u = t[e + 0] - t[e + 8], h = (35468 * t[e + 4] >> 16) - re(t[e + 12]), l = re(t[e + 4]) + (35468 * t[e + 12] >> 16);
                s[o + 0] = c + l, s[o + 1] = u + h, s[o + 2] = u - h, s[o + 3] = c - l, o += 4, e++;
            }
            for(_$i = o = 0; 4 > _$i; ++_$i)c = (t = s[o + 0] + 4) + s[o + 8], u = t - s[o + 8], h = (35468 * s[o + 4] >> 16) - re(s[o + 12]), _$te(r, n, 0, 0, c + (l = re(s[o + 4]) + (35468 * s[o + 12] >> 16))), _$te(r, n, 1, 0, u + h), _$te(r, n, 2, 0, u - h), _$te(r, n, 3, 0, c - l), o++, n += 32;
        };
        var ie = function ie(t, e, r, n) {
            var _$i = t[e + 0] + 4, a = 35468 * t[e + 4] >> 16, o = re(t[e + 4]), s = 35468 * t[e + 1] >> 16;
            _$ee(r, n, 0, _$i + o, t = re(t[e + 1]), s), _$ee(r, n, 1, _$i + a, t, s), _$ee(r, n, 2, _$i - a, t, s), _$ee(r, n, 3, _$i - o, t, s);
        };
        var ae = function ae(t, e, r, n, i60) {
            ne(t, e, r, n), i60 && ne(t, e + 16, r, n + 4);
        };
        var oe = function oe(t, e, r, n) {
            on(t, e + 0, r, n, 1), on(t, e + 32, r, n + 128, 1);
        };
        var se = function se(t, e, r, n) {
            var _$i;
            for(t = t[e + 0] + 4, _$i = 0; 4 > _$i; ++_$i)for(e = 0; 4 > e; ++e)_$te(r, n, e, _$i, t);
        };
        var ce = function ce(t, e, r, n) {
            t[e + 0] && un(t, e + 0, r, n), t[e + 16] && un(t, e + 16, r, n + 4), t[e + 32] && un(t, e + 32, r, n + 128), t[e + 48] && un(t, e + 48, r, n + 128 + 4);
        };
        var ue = function ue(t, e, r, n) {
            var _$i, o = a67(16);
            for(_$i = 0; 4 > _$i; ++_$i){
                var s = t[e + 0 + _$i] + t[e + 12 + _$i], c = t[e + 4 + _$i] + t[e + 8 + _$i], u = t[e + 4 + _$i] - t[e + 8 + _$i], h = t[e + 0 + _$i] - t[e + 12 + _$i];
                o[0 + _$i] = s + c, o[8 + _$i] = s - c, o[4 + _$i] = h + u, o[12 + _$i] = h - u;
            }
            for(_$i = 0; 4 > _$i; ++_$i)s = (t = o[0 + 4 * _$i] + 3) + o[3 + 4 * _$i], c = o[1 + 4 * _$i] + o[2 + 4 * _$i], u = o[1 + 4 * _$i] - o[2 + 4 * _$i], h = t - o[3 + 4 * _$i], r[n + 0] = s + c >> 3, r[n + 16] = h + u >> 3, r[n + 32] = s - c >> 3, r[n + 48] = h - u >> 3, n += 64;
        };
        var he = function he(t, e, r) {
            var n, _$i = e - 32, a = Bn, o = 255 - t[_$i - 1];
            for(n = 0; n < r; ++n){
                var s, c = a, u = o + t[e - 1];
                for(s = 0; s < r; ++s)t[e + s] = c[u + t[_$i + s]];
                e += 32;
            }
        };
        var le = function le(t, e) {
            he(t, e, 4);
        };
        var fe = function fe(t, e) {
            he(t, e, 8);
        };
        var de = function de(t, e) {
            he(t, e, 16);
        };
        var pe = function pe(t, e) {
            var r;
            for(r = 0; 16 > r; ++r)n89(t, e + 32 * r, t, e - 32, 16);
        };
        var ge = function ge(t, e) {
            var r;
            for(r = 16; 0 < r; --r)_$i(t, e, t[e - 1], 16), e += 32;
        };
        var me = function me(t, e, r) {
            var n;
            for(n = 0; 16 > n; ++n)_$i(e, r + 32 * n, t, 16);
        };
        var ve = function ve(t, e) {
            var r, n = 16;
            for(r = 0; 16 > r; ++r)n += t[e - 1 + 32 * r] + t[e + r - 32];
            me(n >> 5, t, e);
        };
        var be = function be(t, e) {
            var r, n = 8;
            for(r = 0; 16 > r; ++r)n += t[e - 1 + 32 * r];
            me(n >> 4, t, e);
        };
        var ye = function ye(t, e) {
            var r, n = 8;
            for(r = 0; 16 > r; ++r)n += t[e + r - 32];
            me(n >> 4, t, e);
        };
        var we = function we(t, e) {
            me(128, t, e);
        };
        var Ne = function Ne(t, e, r) {
            return t + 2 * e + r + 2 >> 2;
        };
        var Le = function Le(t, e) {
            var r, _$i = e - 32;
            _$i = new Uint8Array([
                Ne(t[_$i - 1], t[_$i + 0], t[_$i + 1]),
                Ne(t[_$i + 0], t[_$i + 1], t[_$i + 2]),
                Ne(t[_$i + 1], t[_$i + 2], t[_$i + 3]),
                Ne(t[_$i + 2], t[_$i + 3], t[_$i + 4])
            ]);
            for(r = 0; 4 > r; ++r)n89(t, e + 32 * r, _$i, 0, _$i.length);
        };
        var Ae = function Ae(t, e) {
            var r = t[e - 1], n = t[e - 1 + 32], _$i = t[e - 1 + 64], a = t[e - 1 + 96];
            _$I(t, e + 0, 16843009 * Ne(t[e - 1 - 32], r, n)), _$I(t, e + 32, 16843009 * Ne(r, n, _$i)), _$I(t, e + 64, 16843009 * Ne(n, _$i, a)), _$I(t, e + 96, 16843009 * Ne(_$i, a, a));
        };
        var xe = function xe(t, e) {
            var r, n = 4;
            for(r = 0; 4 > r; ++r)n += t[e + r - 32] + t[e - 1 + 32 * r];
            for(n >>= 3, r = 0; 4 > r; ++r)_$i(t, e + 32 * r, n, 4);
        };
        var Se = function Se(t, e) {
            var r = t[e - 1 + 0], n = t[e - 1 + 32], _$i = t[e - 1 + 64], a = t[e - 1 - 32], o = t[e + 0 - 32], s = t[e + 1 - 32], c = t[e + 2 - 32], u = t[e + 3 - 32];
            t[e + 0 + 96] = Ne(n, _$i, t[e - 1 + 96]), t[e + 1 + 96] = t[e + 0 + 64] = Ne(r, n, _$i), t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = Ne(a, r, n), t[e + 3 + 96] = t[e + 2 + 64] = t[e + 1 + 32] = t[e + 0 + 0] = Ne(o, a, r), t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = Ne(s, o, a), t[e + 3 + 32] = t[e + 2 + 0] = Ne(c, s, o), t[e + 3 + 0] = Ne(u, c, s);
        };
        var _e = function _e(t, e) {
            var r = t[e + 1 - 32], n = t[e + 2 - 32], _$i = t[e + 3 - 32], a = t[e + 4 - 32], o = t[e + 5 - 32], s = t[e + 6 - 32], c = t[e + 7 - 32];
            t[e + 0 + 0] = Ne(t[e + 0 - 32], r, n), t[e + 1 + 0] = t[e + 0 + 32] = Ne(r, n, _$i), t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = Ne(n, _$i, a), t[e + 3 + 0] = t[e + 2 + 32] = t[e + 1 + 64] = t[e + 0 + 96] = Ne(_$i, a, o), t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = Ne(a, o, s), t[e + 3 + 64] = t[e + 2 + 96] = Ne(o, s, c), t[e + 3 + 96] = Ne(s, c, c);
        };
        var Pe = function Pe(t, e) {
            var r = t[e - 1 + 0], n = t[e - 1 + 32], _$i = t[e - 1 + 64], a = t[e - 1 - 32], o = t[e + 0 - 32], s = t[e + 1 - 32], c = t[e + 2 - 32], u = t[e + 3 - 32];
            t[e + 0 + 0] = t[e + 1 + 64] = a + o + 1 >> 1, t[e + 1 + 0] = t[e + 2 + 64] = o + s + 1 >> 1, t[e + 2 + 0] = t[e + 3 + 64] = s + c + 1 >> 1, t[e + 3 + 0] = c + u + 1 >> 1, t[e + 0 + 96] = Ne(_$i, n, r), t[e + 0 + 64] = Ne(n, r, a), t[e + 0 + 32] = t[e + 1 + 96] = Ne(r, a, o), t[e + 1 + 32] = t[e + 2 + 96] = Ne(a, o, s), t[e + 2 + 32] = t[e + 3 + 96] = Ne(o, s, c), t[e + 3 + 32] = Ne(s, c, u);
        };
        var ke = function ke(t, e) {
            var r = t[e + 0 - 32], n = t[e + 1 - 32], _$i = t[e + 2 - 32], a = t[e + 3 - 32], o = t[e + 4 - 32], s = t[e + 5 - 32], c = t[e + 6 - 32], u = t[e + 7 - 32];
            t[e + 0 + 0] = r + n + 1 >> 1, t[e + 1 + 0] = t[e + 0 + 64] = n + _$i + 1 >> 1, t[e + 2 + 0] = t[e + 1 + 64] = _$i + a + 1 >> 1, t[e + 3 + 0] = t[e + 2 + 64] = a + o + 1 >> 1, t[e + 0 + 32] = Ne(r, n, _$i), t[e + 1 + 32] = t[e + 0 + 96] = Ne(n, _$i, a), t[e + 2 + 32] = t[e + 1 + 96] = Ne(_$i, a, o), t[e + 3 + 32] = t[e + 2 + 96] = Ne(a, o, s), t[e + 3 + 64] = Ne(o, s, c), t[e + 3 + 96] = Ne(s, c, u);
        };
        var Ie = function Ie(t, e) {
            var r = t[e - 1 + 0], n = t[e - 1 + 32], _$i = t[e - 1 + 64], a = t[e - 1 + 96];
            t[e + 0 + 0] = r + n + 1 >> 1, t[e + 2 + 0] = t[e + 0 + 32] = n + _$i + 1 >> 1, t[e + 2 + 32] = t[e + 0 + 64] = _$i + a + 1 >> 1, t[e + 1 + 0] = Ne(r, n, _$i), t[e + 3 + 0] = t[e + 1 + 32] = Ne(n, _$i, a), t[e + 3 + 32] = t[e + 1 + 64] = Ne(_$i, a, a), t[e + 3 + 64] = t[e + 2 + 64] = t[e + 0 + 96] = t[e + 1 + 96] = t[e + 2 + 96] = t[e + 3 + 96] = a;
        };
        var Fe = function Fe(t, e) {
            var r = t[e - 1 + 0], n = t[e - 1 + 32], _$i = t[e - 1 + 64], a = t[e - 1 + 96], o = t[e - 1 - 32], s = t[e + 0 - 32], c = t[e + 1 - 32], u = t[e + 2 - 32];
            t[e + 0 + 0] = t[e + 2 + 32] = r + o + 1 >> 1, t[e + 0 + 32] = t[e + 2 + 64] = n + r + 1 >> 1, t[e + 0 + 64] = t[e + 2 + 96] = _$i + n + 1 >> 1, t[e + 0 + 96] = a + _$i + 1 >> 1, t[e + 3 + 0] = Ne(s, c, u), t[e + 2 + 0] = Ne(o, s, c), t[e + 1 + 0] = t[e + 3 + 32] = Ne(r, o, s), t[e + 1 + 32] = t[e + 3 + 64] = Ne(n, r, o), t[e + 1 + 64] = t[e + 3 + 96] = Ne(_$i, n, r), t[e + 1 + 96] = Ne(a, _$i, n);
        };
        var Ce = function Ce(t, e) {
            var r;
            for(r = 0; 8 > r; ++r)n89(t, e + 32 * r, t, e - 32, 8);
        };
        var je = function je(t, e) {
            var r;
            for(r = 0; 8 > r; ++r)_$i(t, e, t[e - 1], 8), e += 32;
        };
        var Oe = function Oe(t, e, r) {
            var n;
            for(n = 0; 8 > n; ++n)_$i(e, r + 32 * n, t, 8);
        };
        var Be = function Be(t, e) {
            var r, n = 8;
            for(r = 0; 8 > r; ++r)n += t[e + r - 32] + t[e - 1 + 32 * r];
            Oe(n >> 4, t, e);
        };
        var Me = function Me(t, e) {
            var r, n = 4;
            for(r = 0; 8 > r; ++r)n += t[e + r - 32];
            Oe(n >> 3, t, e);
        };
        var Ee = function Ee(t, e) {
            var r, n = 4;
            for(r = 0; 8 > r; ++r)n += t[e - 1 + 32 * r];
            Oe(n >> 3, t, e);
        };
        var qe = function qe(t, e) {
            Oe(128, t, e);
        };
        var De = function De(t, e, r) {
            var n = t[e - r], _$i = t[e + 0], a = 3 * (_$i - n) + jn[1020 + t[e - 2 * r] - t[e + r]], o = On[112 + (a + 4 >> 3)];
            t[e - r] = Bn[255 + n + On[112 + (a + 3 >> 3)]], t[e + 0] = Bn[255 + _$i - o];
        };
        var Re = function Re(t, e, r, n) {
            var _$i = t[e + 0], a = t[e + r];
            return Mn[255 + t[e - 2 * r] - t[e - r]] > n || Mn[255 + a - _$i] > n;
        };
        var Te = function Te(t, e, r, n) {
            return 4 * Mn[255 + t[e - r] - t[e + 0]] + Mn[255 + t[e - 2 * r] - t[e + r]] <= n;
        };
        var Ue = function Ue(t, e, r, n, i61) {
            var a = t[e - 3 * r], o = t[e - 2 * r], s = t[e - r], c = t[e + 0], u = t[e + r], h = t[e + 2 * r], l = t[e + 3 * r];
            return 4 * Mn[255 + s - c] + Mn[255 + o - u] > n ? 0 : Mn[255 + t[e - 4 * r] - a] <= i61 && Mn[255 + a - o] <= i61 && Mn[255 + o - s] <= i61 && Mn[255 + l - h] <= i61 && Mn[255 + h - u] <= i61 && Mn[255 + u - c] <= i61;
        };
        var ze = function ze(t, e, r, n) {
            var _$i = 2 * n + 1;
            for(n = 0; 16 > n; ++n)Te(t, e + n, r, _$i) && De(t, e + n, r);
        };
        var He = function He(t, e, r, n) {
            var _$i = 2 * n + 1;
            for(n = 0; 16 > n; ++n)Te(t, e + n * r, 1, _$i) && De(t, e + n * r, 1);
        };
        var We = function We(t, e, r, n) {
            var _$i;
            for(_$i = 3; 0 < _$i; --_$i)ze(t, e += 4 * r, r, n);
        };
        var Ve = function Ve(t, e, r, n) {
            var _$i;
            for(_$i = 3; 0 < _$i; --_$i)He(t, e += 4, r, n);
        };
        var Ge = function Ge(t, e, r, n, i62, a, o, s) {
            for(a = 2 * a + 1; 0 < i62--;){
                if (Ue(t, e, r, a, o)) {
                    if (Re(t, e, r, s)) De(t, e, r);
                    else {
                        var c = t, u = e, h = r, l = c[u - 2 * h], f = c[u - h], d = c[u + 0], p = c[u + h], g = c[u + 2 * h], m = 27 * (b = jn[1020 + 3 * (d - f) + jn[1020 + l - p]]) + 63 >> 7, v = 18 * b + 63 >> 7, b = 9 * b + 63 >> 7;
                        c[u - 3 * h] = Bn[255 + c[u - 3 * h] + b], c[u - 2 * h] = Bn[255 + l + v], c[u - h] = Bn[255 + f + m], c[u + 0] = Bn[255 + d - m], c[u + h] = Bn[255 + p - v], c[u + 2 * h] = Bn[255 + g - b];
                    }
                }
                e += n;
            }
        };
        var Ye = function Ye(t, e, r, n, i63, a, o, s) {
            for(a = 2 * a + 1; 0 < i63--;){
                if (Ue(t, e, r, a, o)) {
                    if (Re(t, e, r, s)) De(t, e, r);
                    else {
                        var c = t, u = e, h = r, l = c[u - h], f = c[u + 0], d = c[u + h], p = On[112 + ((g = 3 * (f - l)) + 4 >> 3)], g = On[112 + (g + 3 >> 3)], m = p + 1 >> 1;
                        c[u - 2 * h] = Bn[255 + c[u - 2 * h] + m], c[u - h] = Bn[255 + l + g], c[u + 0] = Bn[255 + f - p], c[u + h] = Bn[255 + d - m];
                    }
                }
                e += n;
            }
        };
        var Je = function Je(t, e, r, n, i64, a) {
            Ge(t, e, r, 1, 16, n, i64, a);
        };
        var Xe = function Xe(t, e, r, n, i65, a) {
            Ge(t, e, 1, r, 16, n, i65, a);
        };
        var Ke = function Ke(t, e, r, n, i66, a) {
            var o;
            for(o = 3; 0 < o; --o)Ye(t, e += 4 * r, r, 1, 16, n, i66, a);
        };
        var Ze = function Ze(t, e, r, n, i67, a) {
            var o;
            for(o = 3; 0 < o; --o)Ye(t, e += 4, 1, r, 16, n, i67, a);
        };
        var $e = function $e(t, e, r, n, i68, a, o, s) {
            Ge(t, e, i68, 1, 8, a, o, s), Ge(r, n, i68, 1, 8, a, o, s);
        };
        var Qe = function Qe(t, e, r, n, i69, a, o, s) {
            Ge(t, e, 1, i69, 8, a, o, s), Ge(r, n, 1, i69, 8, a, o, s);
        };
        var tr = function tr(t, e, r, n, i70, a, o, s) {
            Ye(t, e + 4 * i70, i70, 1, 8, a, o, s), Ye(r, n + 4 * i70, i70, 1, 8, a, o, s);
        };
        var er = function er(t, e, r, n, i71, a, o, s) {
            Ye(t, e + 4, 1, i71, 8, a, o, s), Ye(r, n + 4, 1, i71, 8, a, o, s);
        };
        var rr = function rr() {
            this.ba = new ot, this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new ct, this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
        };
        var nr = function nr() {
            this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
        };
        var ir = function ir() {
            this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
        };
        var ar = function ar() {
            this.ua = 0, this.Wa = new M, this.vb = new M, this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new d14, this.yc = new l;
        };
        var or = function or() {
            this.xb = this.a = 0, this.l = new Gt, this.ca = new ot, this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new N6, this.Pb = 0, this.wd = new N6, this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new ar, this.ab = 0, this.gc = o(4, ir), this.Oc = 0;
        };
        var sr = function sr() {
            this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Gt, this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
        };
        var cr = function cr(t, e, r, n, i72, a, o) {
            for(t = null == t ? 0 : t[e + 0], e = 0; e < o; ++e)i72[a + e] = t + r[n + e] & 255, t = i72[a + e];
        };
        var ur = function ur(t, e, r, n, i73, a, o) {
            var s;
            if (null == t) cr(null, null, r, n, i73, a, o);
            else for(s = 0; s < o; ++s)i73[a + s] = t[e + s] + r[n + s] & 255;
        };
        var hr = function hr(t, e, r, n, i74, a, o) {
            if (null == t) cr(null, null, r, n, i74, a, o);
            else {
                var s, c = t[e + 0], u = c, h = c;
                for(s = 0; s < o; ++s)u = h + (c = t[e + s]) - u, h = r[n + s] + (-256 & u ? 0 > u ? 0 : 255 : u) & 255, u = c, i74[a + s] = h;
            }
        };
        var lr = function lr(t, r, i75, o) {
            var s = r.width, c = r.o;
            if (e(null != t && null != r), 0 > i75 || 0 >= o || i75 + o > c) return null;
            if (!t.Cc) {
                if (null == t.ga) {
                    var u;
                    if (t.ga = new sr, (u = null == t.ga) || (u = r.width * r.o, e(0 == t.Gb.length), t.Gb = a67(u), t.Uc = 0, null == t.Gb ? u = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, u = 1), u = !u), !u) {
                        u = t.ga;
                        var h = t.Fa, l = t.P, f = t.qc, d = t.mb, p = t.nb, g = l + 1, m = f - 1, b = u.l;
                        if (e(null != h && null != d && null != r), mi[0] = null, mi[1] = cr, mi[2] = ur, mi[3] = hr, u.ca = d, u.tb = p, u.c = r.width, u.i = r.height, e(0 < u.c && 0 < u.i), 1 >= f) r = 0;
                        else if (u.$a = h[l + 0] >> 0 & 3, u.Z = h[l + 0] >> 2 & 3, u.Lc = h[l + 0] >> 4 & 3, l = h[l + 0] >> 6 & 3, 0 > u.$a || 1 < u.$a || 4 <= u.Z || 1 < u.Lc || l) r = 0;
                        else if (b.put = dt, b.ac = ft, b.bc = pt, b.ma = u, b.width = r.width, b.height = r.height, b.Da = r.Da, b.v = r.v, b.va = r.va, b.j = r.j, b.o = r.o, u.$a) t: {
                            e(1 == u.$a), r = kt();
                            e: for(;;){
                                if (null == r) {
                                    r = 0;
                                    break t;
                                }
                                if (e(null != u), u.mc = r, r.c = u.c, r.i = u.i, r.l = u.l, r.l.ma = u, r.l.width = u.c, r.l.height = u.i, r.a = 0, v10(r.m, h, g, m), !It2(u.c, u.i, 1, r, null)) break e;
                                if (1 == r.ab && 3 == r.gc[0].hc && At(r.s) ? (u.ic = 1, h = r.c * r.i, r.Ta = null, r.Ua = 0, r.V = a67(h), r.Ba = 0, null == r.V ? (r.a = 1, r = 0) : r = 1) : (u.ic = 0, r = Ft(r, u.c)), !r) break e;
                                r = 1;
                                break t;
                            }
                            u.mc = null, r = 0;
                        }
                        else r = m >= u.c * u.i;
                        u = !r;
                    }
                    if (u) return null;
                    1 != t.ga.Lc ? t.Ga = 0 : o = c - i75;
                }
                e(null != t.ga), e(i75 + o <= c);
                t: {
                    if (r = (h = t.ga).c, c = h.l.o, 0 == h.$a) {
                        if (g = t.rc, m = t.Vc, b = t.Fa, l = t.P + 1 + i75 * r, f = t.mb, d = t.nb + i75 * r, e(l <= t.P + t.qc), 0 != h.Z) for(e(null != mi[h.Z]), u = 0; u < o; ++u)mi[h.Z](g, m, b, l, f, d, r), g = f, m = d, d += r, l += r;
                        else for(u = 0; u < o; ++u)n89(f, d, b, l, r), g = f, m = d, d += r, l += r;
                        t.rc = g, t.Vc = m;
                    } else {
                        if (e(null != h.mc), r = i75 + o, e(null != (u = h.mc)), e(r <= u.i), u.C >= r) r = 1;
                        else if (h.ic || mr(), h.ic) {
                            h = u.V, g = u.Ba, m = u.c;
                            var _$y = u.i, w = (b = 1, l = u.$ / m, f = u.$ % m, d = u.m, p = u.s, u.$), N = m * _$y, L = m * r, x = p.wc, _ = w < L ? wt(p, f, l) : null;
                            e(w <= N), e(r <= _$y), e(At(p));
                            e: for(;;){
                                for(; !d.h && w < L;){
                                    if (f & x || (_ = wt(p, f, l)), e(null != _), S(d), 256 > (_$y = bt(_.G[0], _.H[0], d))) h[g + w] = _$y, ++w, ++f >= m && (f = 0, ++l <= r && !(l % 16) && St(u, l));
                                    else {
                                        if (!(280 > _$y)) {
                                            b = 0;
                                            break e;
                                        }
                                        _$y = mt(_$y - 256, d);
                                        var P, k = bt(_.G[4], _.H[4], d);
                                        if (S(d), !(w >= (k = vt(m, k = mt(k, d))) && N - w >= _$y)) {
                                            b = 0;
                                            break e;
                                        }
                                        for(P = 0; P < _$y; ++P)h[g + w + P] = h[g + w + P - k];
                                        for(w += _$y, f += _$y; f >= m;)f -= m, ++l <= r && !(l % 16) && St(u, l);
                                        w < L && f & x && (_ = wt(p, f, l));
                                    }
                                    e(d.h == A5(d));
                                }
                                St(u, l > r ? r : l);
                                break e;
                            }
                            !b || d.h && w < N ? (b = 0, u.a = d.h ? 5 : 3) : u.$ = w, r = b;
                        } else r = _$_t(u, u.V, u.Ba, u.c, u.i, r, Ct);
                        if (!r) {
                            o = 0;
                            break t;
                        }
                    }
                    i75 + o >= c && (t.Cc = 1), o = 1;
                }
                if (!o) return null;
                if (t.Cc && (null != (o = t.ga) && (o.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null;
            }
            return t.nb + i75 * s;
        };
        var fr = function fr(t, e, r, n, i76, a) {
            for(; 0 < i76--;){
                var o, s = t, c = e + (r ? 1 : 0), u = t, h = e + (r ? 0 : 3);
                for(o = 0; o < n; ++o){
                    var l = u[h + 4 * o];
                    255 != l && (l *= 32897, s[c + 4 * o + 0] = s[c + 4 * o + 0] * l >> 23, s[c + 4 * o + 1] = s[c + 4 * o + 1] * l >> 23, s[c + 4 * o + 2] = s[c + 4 * o + 2] * l >> 23);
                }
                e += a;
            }
        };
        var dr = function dr(t, e, r, n, i77) {
            for(; 0 < n--;){
                var a;
                for(a = 0; a < r; ++a){
                    var o = t[e + 2 * a + 0], s = 15 & (u = t[e + 2 * a + 1]), c = 4369 * s, u = (240 & u | u >> 4) * c >> 16;
                    t[e + 2 * a + 0] = (240 & o | o >> 4) * c >> 16 & 240 | (15 & o | o << 4) * c >> 16 >> 4 & 15, t[e + 2 * a + 1] = 240 & u | s;
                }
                e += i77;
            }
        };
        var pr = function pr(t, e, r, n, i78, a, o, s) {
            var c, u, h = 255;
            for(u = 0; u < i78; ++u){
                for(c = 0; c < n; ++c){
                    var l = t[e + c];
                    a[o + 4 * c] = l, h &= l;
                }
                e += r, o += s;
            }
            return 255 != h;
        };
        var gr = function gr(t, e, r, n, i79) {
            var a;
            for(a = 0; a < i79; ++a)r[n + a] = t[e + a] >> 8;
        };
        var mr = function mr() {
            An = fr, xn = dr, Sn = pr, _n = gr;
        };
        var vr = function vr(r31, n, i80) {
            _$t2[r31] = function(t, r, a, o, s, c, u, h, l, f, d, p, g, m, v, b, y1) {
                var w, N = y1 - 1 >> 1, L = s[c + 0] | u[h + 0] << 16, A = l[f + 0] | d[p + 0] << 16;
                e(null != t);
                var x = 3 * L + A + 131074 >> 2;
                for(n(t[r + 0], 255 & x, x >> 16, g, m), null != a && (x = 3 * A + L + 131074 >> 2, n(a[o + 0], 255 & x, x >> 16, v, b)), w = 1; w <= N; ++w){
                    var S = s[c + w] | u[h + w] << 16, _ = l[f + w] | d[p + w] << 16, P = L + S + A + _ + 524296, k = P + 2 * (S + A) >> 3;
                    x = k + L >> 1, L = (P = P + 2 * (L + _) >> 3) + S >> 1, n(t[r + 2 * w - 1], 255 & x, x >> 16, g, m + (2 * w - 1) * i80), n(t[r + 2 * w - 0], 255 & L, L >> 16, g, m + (2 * w - 0) * i80), null != a && (x = P + A >> 1, L = k + _ >> 1, n(a[o + 2 * w - 1], 255 & x, x >> 16, v, b + (2 * w - 1) * i80), n(a[o + 2 * w + 0], 255 & L, L >> 16, v, b + (2 * w + 0) * i80)), L = S, A = _;
                }
                1 & y1 || (x = 3 * L + A + 131074 >> 2, n(t[r + y1 - 1], 255 & x, x >> 16, g, m + (y1 - 1) * i80), null != a && (x = 3 * A + L + 131074 >> 2, n(a[o + y1 - 1], 255 & x, x >> 16, v, b + (y1 - 1) * i80)));
            };
        };
        var br = function br() {
            vi[En] = bi, vi[qn] = wi, vi[Dn] = yi, vi[Rn] = Ni, vi[Tn] = Li, vi[Un] = Ai, vi[zn] = xi, vi[Hn] = wi, vi[Wn] = Ni, vi[Vn] = Li, vi[Gn] = Ai;
        };
        var yr = function yr(t) {
            return t & ~Fi ? 0 > t ? 0 : 255 : t >> Ii;
        };
        var wr = function wr(t, e) {
            return yr((19077 * t >> 8) + (26149 * e >> 8) - 14234);
        };
        var Nr = function Nr(t, e, r) {
            return yr((19077 * t >> 8) - (6419 * e >> 8) - (13320 * r >> 8) + 8708);
        };
        var Lr = function Lr(t, e) {
            return yr((19077 * t >> 8) + (33050 * e >> 8) - 17685);
        };
        var Ar = function Ar(t, e, r, n, i81) {
            n[i81 + 0] = wr(t, r), n[i81 + 1] = Nr(t, e, r), n[i81 + 2] = Lr(t, e);
        };
        var xr = function xr(t, e, r, n, i82) {
            n[i82 + 0] = Lr(t, e), n[i82 + 1] = Nr(t, e, r), n[i82 + 2] = wr(t, r);
        };
        var Sr = function Sr(t, e, r, n, i83) {
            var a = Nr(t, e, r);
            e = a << 3 & 224 | Lr(t, e) >> 3, n[i83 + 0] = 248 & wr(t, r) | a >> 5, n[i83 + 1] = e;
        };
        var _r = function _r(t, e, r, n, i84) {
            var a = 240 & Lr(t, e) | 15;
            n[i84 + 0] = 240 & wr(t, r) | Nr(t, e, r) >> 4, n[i84 + 1] = a;
        };
        var Pr = function Pr(t, e, r, n, i85) {
            n[i85 + 0] = 255, Ar(t, e, r, n, i85 + 1);
        };
        var kr = function kr(t, e, r, n, i86) {
            xr(t, e, r, n, i86), n[i86 + 3] = 255;
        };
        var Ir = function Ir(t, e, r, n, i87) {
            Ar(t, e, r, n, i87), n[i87 + 3] = 255;
        };
        var Vt2 = function Vt2(t, e) {
            return 0 > t ? 0 : t > e ? e : t;
        };
        var Fr = function Fr(e41, r, n) {
            _$t2[e41] = function(t, e, i88, a, o, s, c, u, h) {
                for(var l = u + (-2 & h) * n; u != l;)r(t[e + 0], i88[a + 0], o[s + 0], c, u), r(t[e + 1], i88[a + 0], o[s + 0], c, u + n), e += 2, ++a, ++s, u += 2 * n;
                1 & h && r(t[e + 0], i88[a + 0], o[s + 0], c, u);
            };
        };
        var Cr = function Cr(t, e, r) {
            return 0 == r ? 0 == t ? 0 == e ? 6 : 5 : 0 == e ? 4 : 0 : r;
        };
        var jr = function jr(t, e, r, n, i89) {
            switch(t >>> 30){
                case 3:
                    on(e, r, n, i89, 0);
                    break;
                case 2:
                    sn(e, r, n, i89);
                    break;
                case 1:
                    un(e, r, n, i89);
            }
        };
        var Or = function Or(t, e) {
            var r, a, o = e.M, s = e.Nb, c = t.oc, u = t.pc + 40, h = t.oc, l = t.pc + 584, f = t.oc, d = t.pc + 600;
            for(r = 0; 16 > r; ++r)c[u + 32 * r - 1] = 129;
            for(r = 0; 8 > r; ++r)h[l + 32 * r - 1] = 129, f[d + 32 * r - 1] = 129;
            for(0 < o ? c[u - 1 - 32] = h[l - 1 - 32] = f[d - 1 - 32] = 129 : (_$i(c, u - 32 - 1, 127, 21), _$i(h, l - 32 - 1, 127, 9), _$i(f, d - 32 - 1, 127, 9)), a = 0; a < t.za; ++a){
                var p = e.ya[e.aa + a];
                if (0 < a) {
                    for(r = -1; 16 > r; ++r)n89(c, u + 32 * r - 4, c, u + 32 * r + 12, 4);
                    for(r = -1; 8 > r; ++r)n89(h, l + 32 * r - 4, h, l + 32 * r + 4, 4), n89(f, d + 32 * r - 4, f, d + 32 * r + 4, 4);
                }
                var g = t.Gd, m = t.Hd + a, v = p.ad, b = p.Hc;
                if (0 < o && (n89(c, u - 32, g[m].y, 0, 16), n89(h, l - 32, g[m].f, 0, 8), n89(f, d - 32, g[m].ea, 0, 8)), p.Za) {
                    var _$y = c, w = u - 32 + 16;
                    for(0 < o && (a >= t.za - 1 ? _$i(_$y, w, g[m].y[15], 4) : n89(_$y, w, g[m + 1].y, 0, 4)), r = 0; 4 > r; r++)_$y[w + 128 + r] = _$y[w + 256 + r] = _$y[w + 384 + r] = _$y[w + 0 + r];
                    for(r = 0; 16 > r; ++r, b <<= 2)_$y = c, w = u + Di[r], fi[p.Ob[r]](_$y, w), jr(b, v, 16 * +r, _$y, w);
                } else if (_$y = Cr(a, o, p.Ob[0]), li[_$y](c, u), 0 != b) for(r = 0; 16 > r; ++r, b <<= 2)jr(b, v, 16 * +r, c, u + Di[r]);
                for(r = p.Gc, _$y = Cr(a, o, p.Dd), di[_$y](h, l), di[_$y](f, d), b = v, _$y = h, w = l, 255 & (p = r >> 0) && (170 & p ? cn(b, 256, _$y, w) : hn(b, 256, _$y, w)), p = f, b = d, 255 & (r >>= 8) && (170 & r ? cn(v, 320, p, b) : hn(v, 320, p, b)), o < t.Ub - 1 && (n89(g[m].y, 0, c, u + 480, 16), n89(g[m].f, 0, h, l + 224, 8), n89(g[m].ea, 0, f, d + 224, 8)), r = 8 * s * t.B, g = t.sa, m = t.ta + 16 * a + 16 * s * t.R, v = t.qa, p = t.ra + 8 * a + r, b = t.Ha, _$y = t.Ia + 8 * a + r, r = 0; 16 > r; ++r)n89(g, m + r * t.R, c, u + 32 * r, 16);
                for(r = 0; 8 > r; ++r)n89(v, p + r * t.B, h, l + 32 * r, 8), n89(b, _$y + r * t.B, f, d + 32 * r, 8);
            }
        };
        var Br = function Br(t, n, i90, a, o, s, c, u, h) {
            var l = [
                0
            ], f = [
                0
            ], d = 0, p = null != h ? h.kd : 0, g = null != h ? h : new nr;
            if (null == t || 12 > i90) return 7;
            g.data = t, g.w = n, g.ha = i90, n = [
                n
            ], i90 = [
                i90
            ], g.gb = [
                g.gb
            ];
            t: {
                var m = n, b = i90, _$y = g.gb;
                if (e(null != t), e(null != b), e(null != _$y), _$y[0] = 0, 12 <= b[0] && !r25(t, m[0], "RIFF")) {
                    if (r25(t, m[0] + 8, "WEBP")) {
                        _$y = 3;
                        break t;
                    }
                    var w = _$j(t, m[0] + 4);
                    if (12 > w || 4294967286 < w) {
                        _$y = 3;
                        break t;
                    }
                    if (p && w > b[0] - 8) {
                        _$y = 7;
                        break t;
                    }
                    _$y[0] = w, m[0] += 12, b[0] -= 12;
                }
                _$y = 0;
            }
            if (0 != _$y) return _$y;
            for(w = 0 < g.gb[0], i90 = i90[0];;){
                t: {
                    var L = t;
                    b = n, _$y = i90;
                    var A = l, x = f, S = m = [
                        0
                    ];
                    if ((k = d = [
                        d
                    ])[0] = 0, 8 > _$y[0]) _$y = 7;
                    else {
                        if (!r25(L, b[0], "VP8X")) {
                            if (10 != _$j(L, b[0] + 4)) {
                                _$y = 3;
                                break t;
                            }
                            if (18 > _$y[0]) {
                                _$y = 7;
                                break t;
                            }
                            var _ = _$j(L, b[0] + 8), P = 1 + C(L, b[0] + 12);
                            if (2147483648 <= P * (L = 1 + C(L, b[0] + 15))) {
                                _$y = 3;
                                break t;
                            }
                            null != S && (S[0] = _), null != A && (A[0] = P), null != x && (x[0] = L), b[0] += 18, _$y[0] -= 18, k[0] = 1;
                        }
                        _$y = 0;
                    }
                }
                if (d = d[0], m = m[0], 0 != _$y) return _$y;
                if (b = !!(2 & m), !w && d) return 3;
                if (null != s && (s[0] = !!(16 & m)), null != c && (c[0] = b), null != u && (u[0] = 0), c = l[0], m = f[0], d && b && null == h) {
                    _$y = 0;
                    break;
                }
                if (4 > i90) {
                    _$y = 7;
                    break;
                }
                if (w && d || !w && !d && !r25(t, n[0], "ALPH")) {
                    i90 = [
                        i90
                    ], g.na = [
                        g.na
                    ], g.P = [
                        g.P
                    ], g.Sa = [
                        g.Sa
                    ];
                    t: {
                        _ = t, _$y = n, w = i90;
                        var k = g.gb;
                        A = g.na, x = g.P, S = g.Sa;
                        P = 22, e(null != _), e(null != w), L = _$y[0];
                        var _$I = w[0];
                        for(e(null != A), e(null != S), A[0] = null, x[0] = null, S[0] = 0;;){
                            if (_$y[0] = L, w[0] = _$I, 8 > _$I) {
                                _$y = 7;
                                break t;
                            }
                            var F = _$j(_, L + 4);
                            if (4294967286 < F) {
                                _$y = 3;
                                break t;
                            }
                            var O = 8 + F + 1 & -2;
                            if (P += O, 0 < k && P > k) {
                                _$y = 3;
                                break t;
                            }
                            if (!r25(_, L, "VP8 ") || !r25(_, L, "VP8L")) {
                                _$y = 0;
                                break t;
                            }
                            if (_$I[0] < O) {
                                _$y = 7;
                                break t;
                            }
                            r25(_, L, "ALPH") || (A[0] = _, x[0] = L + 8, S[0] = F), L += O, _$I -= O;
                        }
                    }
                    if (i90 = i90[0], g.na = g.na[0], g.P = g.P[0], g.Sa = g.Sa[0], 0 != _$y) break;
                }
                i90 = [
                    i90
                ], g.Ja = [
                    g.Ja
                ], g.xa = [
                    g.xa
                ];
                t: if (k = t, _$y = n, w = i90, A = g.gb[0], x = g.Ja, S = g.xa, _ = _$y[0], L = !r25(k, _, "VP8 "), P = !r25(k, _, "VP8L"), e(null != k), e(null != w), e(null != x), e(null != S), 8 > w[0]) _$y = 7;
                else {
                    if (L || P) {
                        if (k = _$j(k, _ + 4), 12 <= A && k > A - 12) {
                            _$y = 3;
                            break t;
                        }
                        if (p && k > w[0] - 8) {
                            _$y = 7;
                            break t;
                        }
                        x[0] = k, _$y[0] += 8, w[0] -= 8, S[0] = P;
                    } else S[0] = 5 <= w[0] && 47 == k[_ + 0] && !(k[_ + 4] >> 5), x[0] = w[0];
                    _$y = 0;
                }
                if (i90 = i90[0], g.Ja = g.Ja[0], g.xa = g.xa[0], n = n[0], 0 != _$y) break;
                if (4294967286 < g.Ja) return 3;
                if (null == u || b || (u[0] = g.xa ? 2 : 1), c = [
                    c
                ], m = [
                    m
                ], g.xa) {
                    if (5 > i90) {
                        _$y = 7;
                        break;
                    }
                    u = c, p = m, b = s, null == t || 5 > i90 ? t = 0 : 5 <= i90 && 47 == t[n + 0] && !(t[n + 4] >> 5) ? (w = [
                        0
                    ], k = [
                        0
                    ], A = [
                        0
                    ], v10(x = new N6, t, n, i90), gt(x, w, k, A) ? (null != u && (u[0] = w[0]), null != p && (p[0] = k[0]), null != b && (b[0] = A[0]), t = 1) : t = 0) : t = 0;
                } else {
                    if (10 > i90) {
                        _$y = 7;
                        break;
                    }
                    u = m, null == t || 10 > i90 || !Xt(t, n + 3, i90 - 3) ? t = 0 : (p = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16, b = 16383 & (t[n + 7] << 8 | t[n + 6]), t = 16383 & (t[n + 9] << 8 | t[n + 8]), 1 & p || 3 < (p >> 1 & 7) || !(p >> 4 & 1) || p >> 5 >= g.Ja || !b || !t ? t = 0 : (c && (c[0] = b), u && (u[0] = t), t = 1));
                }
                if (!t) return 3;
                if (c = c[0], m = m[0], d && (l[0] != c || f[0] != m)) return 3;
                null != h && (h[0] = g, h.offset = n - h.w, e(4294967286 > n - h.w), e(h.offset == h.ha - i90));
                break;
            }
            return 0 == _$y || 7 == _$y && d && null == h ? (null != s && (s[0] |= null != g.na && 0 < g.na.length), null != a && (a[0] = c), null != o && (o[0] = m), 0) : _$y;
        };
        var Mr = function Mr(t, e, r) {
            var n = e.width, _$i = e.height, a = 0, o = 0, s = n, c = _$i;
            if (e.Da = null != t && 0 < t.Da, e.Da && (s = t.cd, c = t.bd, a = t.v, o = t.j, 11 > r || (a &= -2, o &= -2), 0 > a || 0 > o || 0 >= s || 0 >= c || a + s > n || o + c > _$i)) return 0;
            if (e.v = a, e.j = o, e.va = a + s, e.o = o + c, e.U = s, e.T = c, e.da = null != t && 0 < t.da, e.da) {
                if (!_$E(s, c, r = [
                    t.ib
                ], a = [
                    t.hb
                ])) return 0;
                e.ib = r[0], e.hb = a[0];
            }
            return e.ob = null != t && t.ob, e.Kb = null == t || !t.Sd, e.da && (e.ob = e.ib < 3 * n / 4 && e.hb < 3 * _$i / 4, e.Kb = 0), 1;
        };
        var Er = function Er(t) {
            if (null == t) return 2;
            if (11 > t.S) {
                var e = t.f.RGBA;
                e.fb += (t.height - 1) * e.A, e.A = -e.A;
            } else e = t.f.kb, t = t.height, e.O += (t - 1) * e.fa, e.fa = -e.fa, e.N += (t - 1 >> 1) * e.Ab, e.Ab = -e.Ab, e.W += (t - 1 >> 1) * e.Db, e.Db = -e.Db, null != e.F && (e.J += (t - 1) * e.lb, e.lb = -e.lb);
            return 0;
        };
        var qr = function qr(t, e, r, n) {
            if (null == n || 0 >= t || 0 >= e) return 2;
            if (null != r) {
                if (r.Da) {
                    var _$i = r.cd, o = r.bd, s = -2 & r.v, c = -2 & r.j;
                    if (0 > s || 0 > c || 0 >= _$i || 0 >= o || s + _$i > t || c + o > e) return 2;
                    t = _$i, e = o;
                }
                if (r.da) {
                    if (!_$E(t, e, _$i = [
                        r.ib
                    ], o = [
                        r.hb
                    ])) return 2;
                    t = _$i[0], e = o[0];
                }
            }
            n.width = t, n.height = e;
            t: {
                var u = n.width, h = n.height;
                if (t = n.S, 0 >= u || 0 >= h || !(t >= En && 13 > t)) t = 2;
                else {
                    if (0 >= n.Rd && null == n.sd) {
                        s = o = _$i = e = 0;
                        var l = (c = u * zi[t]) * h;
                        if (11 > t || (o = (h + 1) / 2 * (e = (u + 1) / 2), 12 == t && (s = (_$i = u) * h)), null == (h = a67(l + 2 * o + s))) {
                            t = 1;
                            break t;
                        }
                        n.sd = h, 11 > t ? ((u = n.f.RGBA).eb = h, u.fb = 0, u.A = c, u.size = l) : ((u = n.f.kb).y = h, u.O = 0, u.fa = c, u.Fd = l, u.f = h, u.N = 0 + l, u.Ab = e, u.Cd = o, u.ea = h, u.W = 0 + l + o, u.Db = e, u.Ed = o, 12 == t && (u.F = h, u.J = 0 + l + 2 * o), u.Tc = s, u.lb = _$i);
                    }
                    if (e = 1, _$i = n.S, o = n.width, s = n.height, _$i >= En && 13 > _$i) {
                        if (11 > _$i) t = n.f.RGBA, e &= (c = Math.abs(t.A)) * (s - 1) + o <= t.size, e &= c >= o * zi[_$i], e &= null != t.eb;
                        else {
                            t = n.f.kb, c = (o + 1) / 2, l = (s + 1) / 2, u = Math.abs(t.fa);
                            h = Math.abs(t.Ab);
                            var f = Math.abs(t.Db), d = Math.abs(t.lb), p = d * (s - 1) + o;
                            e &= u * (s - 1) + o <= t.Fd, e &= h * (l - 1) + c <= t.Cd, e = (e &= f * (l - 1) + c <= t.Ed) & u >= o & h >= c & f >= c, e &= null != t.y, e &= null != t.f, e &= null != t.ea, 12 == _$i && (e &= d >= o, e &= p <= t.Tc, e &= null != t.F);
                        }
                    } else e = 0;
                    t = e ? 0 : 2;
                }
            }
            return 0 != t || null != r && r.fd && (t = Er(n)), t;
        };
        var _$t2 = this;
        function It2(t, r, n, s, c) {
            var u = 1, f = [
                t
            ], p = [
                r
            ], g = s.m, m = s.s, v = null, b = 0;
            t: for(;;){
                if (n) for(; u && _$y6(g, 1);){
                    var w = f, N = p, A = s, _ = 1, P = A.m, k = A.gc[A.ab], _$I = _$y6(P, 2);
                    if (A.Oc & 1 << _$I) u = 0;
                    else {
                        switch(A.Oc |= 1 << _$I, k.hc = _$I, k.Ea = w[0], k.nc = N[0], k.K = [
                            null
                        ], ++A.ab, e(4 >= A.ab), _$I){
                            case 0:
                            case 1:
                                k.b = _$y6(P, 3) + 2, _ = It2(q(k.Ea, k.b), q(k.nc, k.b), 0, A, k.K), k.K = k.K[0];
                                break;
                            case 3:
                                var F, C = _$y6(P, 8) + 1, _$j = 16 < C ? 0 : 4 < C ? 1 : 2 < C ? 2 : 3;
                                if (w[0] = q(k.Ea, _$j), k.b = _$j, F = _ = It2(C, 1, 0, A, k.K)) {
                                    var B, M = C, _$E = k, R = 1 << (8 >> _$E.b), T = a67(R);
                                    if (null == T) F = 0;
                                    else {
                                        var U = _$E.K[0], z = _$E.w;
                                        for(T[0] = _$E.K[0][0], B = 1; B < 1 * M; ++B)T[B] = D(U[z + B], T[B - 1]);
                                        for(; B < 4 * R; ++B)T[B] = 0;
                                        _$E.K[0] = null, _$E.K[0] = T, F = 1;
                                    }
                                }
                                _ = F;
                                break;
                            case 2:
                                break;
                            default:
                                e(0);
                        }
                        u = _;
                    }
                }
                if (f = f[0], p = p[0], u && _$y6(g, 1) && !(u = 1 <= (b = _$y6(g, 4)) && 11 >= b)) {
                    s.a = 3;
                    break t;
                }
                var H;
                if (H = u) e: {
                    var W, V, G, Y = s, J = f, X = p, K = b, Z = n, $ = Y.m, Q = Y.s, tt = [
                        null
                    ], et = 1, rt = 0, nt = Qn[K];
                    r: for(;;){
                        if (Z && _$y6($, 1)) {
                            var it = _$y6($, 3) + 2, at = q(J, it), ot = q(X, it), st = at * ot;
                            if (!It2(at, ot, 0, Y, tt)) break r;
                            for(tt = tt[0], Q.xc = it, W = 0; W < st; ++W){
                                var ct = tt[W] >> 8 & 65535;
                                tt[W] = ct, ct >= et && (et = ct + 1);
                            }
                        }
                        if ($.h) break r;
                        for(V = 0; 5 > V; ++V){
                            var ut = Xn[V];
                            !V && 0 < K && (ut += 1 << K), rt < ut && (rt = ut);
                        }
                        var ht = o(et * nt, l), lt = et, ft = o(lt, d14);
                        if (null == ft) var dt = null;
                        else e(65536 >= lt), dt = ft;
                        var pt = a67(rt);
                        if (null == dt || null == pt || null == ht) {
                            Y.a = 1;
                            break r;
                        }
                        var gt = ht;
                        for(W = G = 0; W < et; ++W){
                            var mt = dt[W], vt = mt.G, bt = mt.H, wt = 0, Nt = 1, Lt = 0;
                            for(V = 0; 5 > V; ++V){
                                ut = Xn[V], vt[V] = gt, bt[V] = G, !V && 0 < K && (ut += 1 << K);
                                n: {
                                    var At, xt = ut, St = Y, kt = pt, Ft = gt, Ct = G, jt = 0, Ot = St.m, Bt = _$y6(Ot, 1);
                                    if (_$i(kt, 0, 0, xt), Bt) {
                                        var Mt = _$y6(Ot, 1) + 1, Et = _$y6(Ot, 1), qt = _$y6(Ot, 0 == Et ? 1 : 8);
                                        kt[qt] = 1, 2 == Mt && (kt[qt = _$y6(Ot, 8)] = 1);
                                        var Dt = 1;
                                    } else {
                                        var Rt = a67(19), Tt = _$y6(Ot, 4) + 4;
                                        if (19 < Tt) {
                                            St.a = 3;
                                            var Ut = 0;
                                            break n;
                                        }
                                        for(At = 0; At < Tt; ++At)Rt[Zn[At]] = _$y6(Ot, 3);
                                        var zt = void 0, Ht = void 0, Wt = St, Vt3 = Rt, Gt = xt, Yt2 = kt, Jt = 0, Xt = Wt.m, Kt = 8, Zt3 = o(128, l);
                                        i: for(; h23(Zt3, 0, 7, Vt3, 19);){
                                            if (_$y6(Xt, 1)) {
                                                var $t = 2 + 2 * _$y6(Xt, 3);
                                                if ((zt = 2 + _$y6(Xt, $t)) > Gt) break i;
                                            } else zt = Gt;
                                            for(Ht = 0; Ht < Gt && zt--;){
                                                S(Xt);
                                                var Qt2 = Zt3[0 + (127 & L6(Xt))];
                                                x(Xt, Xt.u + Qt2.g);
                                                var _$te = Qt2.value;
                                                if (16 > _$te) Yt2[Ht++] = _$te, 0 != _$te && (Kt = _$te);
                                                else {
                                                    var _$ee = 16 == _$te, re = _$te - 16, ne = Jn[re], ie = _$y6(Xt, Yn[re]) + ne;
                                                    if (Ht + ie > Gt) break i;
                                                    for(var ae = _$ee ? Kt : 0; 0 < ie--;)Yt2[Ht++] = ae;
                                                }
                                            }
                                            Jt = 1;
                                            break i;
                                        }
                                        Jt || (Wt.a = 3), Dt = Jt;
                                    }
                                    (Dt = Dt && !Ot.h) && (jt = h23(Ft, Ct, 8, kt, xt)), Dt && 0 != jt ? Ut = jt : (St.a = 3, Ut = 0);
                                }
                                if (0 == Ut) break r;
                                if (Nt && 1 == Kn[V] && (Nt = 0 == gt[G].g), wt += gt[G].g, G += Ut, 3 >= V) {
                                    var oe, se = pt[0];
                                    for(oe = 1; oe < ut; ++oe)pt[oe] > se && (se = pt[oe]);
                                    Lt += se;
                                }
                            }
                            if (mt.nd = Nt, mt.Qb = 0, Nt && (mt.qb = (vt[3][bt[3] + 0].value << 24 | vt[1][bt[1] + 0].value << 16 | vt[2][bt[2] + 0].value) >>> 0, 0 == wt && 256 > vt[0][bt[0] + 0].value && (mt.Qb = 1, mt.qb += vt[0][bt[0] + 0].value << 8)), mt.jc = !mt.Qb && 6 > Lt, mt.jc) {
                                var ce, ue = mt;
                                for(ce = 0; ce < Dr; ++ce){
                                    var he = ce, le = ue.pd[he], fe = ue.G[0][ue.H[0] + he];
                                    256 <= fe.value ? (le.g = fe.g + 256, le.value = fe.value) : (le.g = 0, le.value = 0, he >>= yt(fe, 8, le), he >>= yt(ue.G[1][ue.H[1] + he], 16, le), he >>= yt(ue.G[2][ue.H[2] + he], 0, le), yt(ue.G[3][ue.H[3] + he], 24, le));
                                }
                            }
                        }
                        Q.vc = tt, Q.Wb = et, Q.Ya = dt, Q.yc = ht, H = 1;
                        break e;
                    }
                    H = 0;
                }
                if (!(u = H)) {
                    s.a = 3;
                    break t;
                }
                if (0 < b) {
                    if (m.ua = 1 << b, !O(m.Wa, b)) {
                        s.a = 1, u = 0;
                        break t;
                    }
                } else m.ua = 0;
                var de = s, pe = f, ge = p, me = de.s, ve = me.xc;
                if (de.c = pe, de.i = ge, me.md = q(pe, ve), me.wc = 0 == ve ? -1 : (1 << ve) - 1, n) {
                    s.xb = pi;
                    break t;
                }
                if (null == (v = a67(f * p))) {
                    s.a = 1, u = 0;
                    break t;
                }
                u = (u = _$_t(s, v, 0, f, p, p, null)) && !g.h;
                break t;
            }
            return u ? (null != c ? c[0] = v : (e(null == v), e(n)), s.$ = 0, n || Pt(m)) : Pt(m), u;
        }
        var Dr = 64, Rr = [
            0,
            1,
            3,
            7,
            15,
            31,
            63,
            127,
            255,
            511,
            1023,
            2047,
            4095,
            8191,
            16383,
            32767,
            65535,
            131071,
            262143,
            524287,
            1048575,
            2097151,
            4194303,
            8388607,
            16777215
        ], Tr = 24, Ur = 32, zr = 8, Hr = [
            0,
            0,
            1,
            1,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7
        ];
        R("Predictor0", "PredictorAdd0"), _$t2.Predictor0 = function() {
            return 4278190080;
        }, _$t2.Predictor1 = function(t) {
            return t;
        }, _$t2.Predictor2 = function(t, e, r) {
            return e[r + 0];
        }, _$t2.Predictor3 = function(t, e, r) {
            return e[r + 1];
        }, _$t2.Predictor4 = function(t, e, r) {
            return e[r - 1];
        }, _$t2.Predictor5 = function(t, e, r) {
            return U(U(t, e[r + 1]), e[r + 0]);
        }, _$t2.Predictor6 = function(t, e, r) {
            return U(t, e[r - 1]);
        }, _$t2.Predictor7 = function(t, e, r) {
            return U(t, e[r + 0]);
        }, _$t2.Predictor8 = function(t, e, r) {
            return U(e[r - 1], e[r + 0]);
        }, _$t2.Predictor9 = function(t, e, r) {
            return U(e[r + 0], e[r + 1]);
        }, _$t2.Predictor10 = function(t, e, r) {
            return U(U(t, e[r - 1]), U(e[r + 0], e[r + 1]));
        }, _$t2.Predictor11 = function(t, e, r) {
            var n = e[r + 0];
            return 0 >= W(n >> 24 & 255, t >> 24 & 255, (e = e[r - 1]) >> 24 & 255) + W(n >> 16 & 255, t >> 16 & 255, e >> 16 & 255) + W(n >> 8 & 255, t >> 8 & 255, e >> 8 & 255) + W(255 & n, 255 & t, 255 & e) ? n : t;
        }, _$t2.Predictor12 = function(t, e, r) {
            var n = e[r + 0];
            return (z((t >> 24 & 255) + (n >> 24 & 255) - ((e = e[r - 1]) >> 24 & 255)) << 24 | z((t >> 16 & 255) + (n >> 16 & 255) - (e >> 16 & 255)) << 16 | z((t >> 8 & 255) + (n >> 8 & 255) - (e >> 8 & 255)) << 8 | z((255 & t) + (255 & n) - (255 & e))) >>> 0;
        }, _$t2.Predictor13 = function(t, e, r) {
            var n = e[r - 1];
            return (H((t = U(t, e[r + 0])) >> 24 & 255, n >> 24 & 255) << 24 | H(t >> 16 & 255, n >> 16 & 255) << 16 | H(t >> 8 & 255, n >> 8 & 255) << 8 | H(t >> 0 & 255, n >> 0 & 255)) >>> 0;
        };
        var Wr = _$t2.PredictorAdd0;
        _$t2.PredictorAdd1 = V, R("Predictor2", "PredictorAdd2"), R("Predictor3", "PredictorAdd3"), R("Predictor4", "PredictorAdd4"), R("Predictor5", "PredictorAdd5"), R("Predictor6", "PredictorAdd6"), R("Predictor7", "PredictorAdd7"), R("Predictor8", "PredictorAdd8"), R("Predictor9", "PredictorAdd9"), R("Predictor10", "PredictorAdd10"), R("Predictor11", "PredictorAdd11"), R("Predictor12", "PredictorAdd12"), R("Predictor13", "PredictorAdd13");
        var Vr = _$t2.PredictorAdd2;
        X("ColorIndexInverseTransform", "MapARGB", "32b", function(t) {
            return t >> 8 & 255;
        }, function(t) {
            return t;
        }), X("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t) {
            return t;
        }, function(t) {
            return t >> 8 & 255;
        });
        var Gr, Yr = _$t2.ColorIndexInverseTransform, Jr = _$t2.MapARGB, Xr = _$t2.VP8LColorIndexInverseTransformAlpha, Kr = _$t2.MapAlpha, Zr = _$t2.VP8LPredictorsAdd = [];
        Zr.length = 16, (_$t2.VP8LPredictors = []).length = 16, (_$t2.VP8LPredictorsAdd_C = []).length = 16, (_$t2.VP8LPredictors_C = []).length = 16;
        var $r, Qr, tn, en, rn, nn, an, on, sn, cn, un, hn, ln, fn, dn, pn, gn, mn, vn, bn, yn, wn, Nn, Ln, An, xn, Sn, _n, Pn = a67(511), kn = a67(2041), In = a67(225), Fn = a67(767), Cn = 0, jn = kn, On = In, Bn = Fn, Mn = Pn, En = 0, qn = 1, Dn = 2, Rn = 3, Tn = 4, Un = 5, zn = 6, Hn = 7, Wn = 8, Vn = 9, Gn = 10, Yn = [
            2,
            3,
            7
        ], Jn = [
            3,
            3,
            11
        ], Xn = [
            280,
            256,
            256,
            256,
            40
        ], Kn = [
            0,
            1,
            1,
            1,
            0
        ], Zn = [
            17,
            18,
            0,
            1,
            2,
            3,
            4,
            5,
            16,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
        ], $n = [
            24,
            7,
            23,
            25,
            40,
            6,
            39,
            41,
            22,
            26,
            38,
            42,
            56,
            5,
            55,
            57,
            21,
            27,
            54,
            58,
            37,
            43,
            72,
            4,
            71,
            73,
            20,
            28,
            53,
            59,
            70,
            74,
            36,
            44,
            88,
            69,
            75,
            52,
            60,
            3,
            87,
            89,
            19,
            29,
            86,
            90,
            35,
            45,
            68,
            76,
            85,
            91,
            51,
            61,
            104,
            2,
            103,
            105,
            18,
            30,
            102,
            106,
            34,
            46,
            84,
            92,
            67,
            77,
            101,
            107,
            50,
            62,
            120,
            1,
            119,
            121,
            83,
            93,
            17,
            31,
            100,
            108,
            66,
            78,
            118,
            122,
            33,
            47,
            117,
            123,
            49,
            63,
            99,
            109,
            82,
            94,
            0,
            116,
            124,
            65,
            79,
            16,
            32,
            98,
            110,
            48,
            115,
            125,
            81,
            95,
            64,
            114,
            126,
            97,
            111,
            80,
            113,
            127,
            96,
            112
        ], Qn = [
            2954,
            2956,
            2958,
            2962,
            2970,
            2986,
            3018,
            3082,
            3212,
            3468,
            3980,
            5004
        ], ti = 8, ei = [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            17,
            18,
            19,
            20,
            20,
            21,
            21,
            22,
            22,
            23,
            23,
            24,
            25,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            91,
            93,
            95,
            96,
            98,
            100,
            101,
            102,
            104,
            106,
            108,
            110,
            112,
            114,
            116,
            118,
            122,
            124,
            126,
            128,
            130,
            132,
            134,
            136,
            138,
            140,
            143,
            145,
            148,
            151,
            154,
            157
        ], ri = [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            60,
            62,
            64,
            66,
            68,
            70,
            72,
            74,
            76,
            78,
            80,
            82,
            84,
            86,
            88,
            90,
            92,
            94,
            96,
            98,
            100,
            102,
            104,
            106,
            108,
            110,
            112,
            114,
            116,
            119,
            122,
            125,
            128,
            131,
            134,
            137,
            140,
            143,
            146,
            149,
            152,
            155,
            158,
            161,
            164,
            167,
            170,
            173,
            177,
            181,
            185,
            189,
            193,
            197,
            201,
            205,
            209,
            213,
            217,
            221,
            225,
            229,
            234,
            239,
            245,
            249,
            254,
            259,
            264,
            269,
            274,
            279,
            284
        ], ni = null, ii = [
            [
                173,
                148,
                140,
                0
            ],
            [
                176,
                155,
                140,
                135,
                0
            ],
            [
                180,
                157,
                141,
                134,
                130,
                0
            ],
            [
                254,
                254,
                243,
                230,
                196,
                177,
                153,
                140,
                133,
                130,
                129,
                0
            ]
        ], ai = [
            0,
            1,
            4,
            8,
            5,
            2,
            3,
            6,
            9,
            12,
            13,
            10,
            7,
            11,
            14,
            15
        ], oi = [
            -0,
            1,
            -1,
            2,
            -2,
            3,
            4,
            6,
            -3,
            5,
            -4,
            -5,
            -6,
            7,
            -7,
            8,
            -8,
            -9
        ], si = [
            [
                [
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        253,
                        136,
                        254,
                        255,
                        228,
                        219,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        189,
                        129,
                        242,
                        255,
                        227,
                        213,
                        255,
                        219,
                        128,
                        128,
                        128
                    ],
                    [
                        106,
                        126,
                        227,
                        252,
                        214,
                        209,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        98,
                        248,
                        255,
                        236,
                        226,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        181,
                        133,
                        238,
                        254,
                        221,
                        234,
                        255,
                        154,
                        128,
                        128,
                        128
                    ],
                    [
                        78,
                        134,
                        202,
                        247,
                        198,
                        180,
                        255,
                        219,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        185,
                        249,
                        255,
                        243,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        184,
                        150,
                        247,
                        255,
                        236,
                        224,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        77,
                        110,
                        216,
                        255,
                        236,
                        230,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        101,
                        251,
                        255,
                        241,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        170,
                        139,
                        241,
                        252,
                        236,
                        209,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        37,
                        116,
                        196,
                        243,
                        228,
                        255,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        204,
                        254,
                        255,
                        245,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        207,
                        160,
                        250,
                        255,
                        238,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        102,
                        103,
                        231,
                        255,
                        211,
                        171,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        152,
                        252,
                        255,
                        240,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        177,
                        135,
                        243,
                        255,
                        234,
                        225,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        80,
                        129,
                        211,
                        255,
                        194,
                        224,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        246,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ]
            ],
            [
                [
                    [
                        198,
                        35,
                        237,
                        223,
                        193,
                        187,
                        162,
                        160,
                        145,
                        155,
                        62
                    ],
                    [
                        131,
                        45,
                        198,
                        221,
                        172,
                        176,
                        220,
                        157,
                        252,
                        221,
                        1
                    ],
                    [
                        68,
                        47,
                        146,
                        208,
                        149,
                        167,
                        221,
                        162,
                        255,
                        223,
                        128
                    ]
                ],
                [
                    [
                        1,
                        149,
                        241,
                        255,
                        221,
                        224,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        184,
                        141,
                        234,
                        253,
                        222,
                        220,
                        255,
                        199,
                        128,
                        128,
                        128
                    ],
                    [
                        81,
                        99,
                        181,
                        242,
                        176,
                        190,
                        249,
                        202,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        129,
                        232,
                        253,
                        214,
                        197,
                        242,
                        196,
                        255,
                        255,
                        128
                    ],
                    [
                        99,
                        121,
                        210,
                        250,
                        201,
                        198,
                        255,
                        202,
                        128,
                        128,
                        128
                    ],
                    [
                        23,
                        91,
                        163,
                        242,
                        170,
                        187,
                        247,
                        210,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        200,
                        246,
                        255,
                        234,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        109,
                        178,
                        241,
                        255,
                        231,
                        245,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        44,
                        130,
                        201,
                        253,
                        205,
                        192,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        132,
                        239,
                        251,
                        219,
                        209,
                        255,
                        165,
                        128,
                        128,
                        128
                    ],
                    [
                        94,
                        136,
                        225,
                        251,
                        218,
                        190,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        22,
                        100,
                        174,
                        245,
                        186,
                        161,
                        255,
                        199,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        182,
                        249,
                        255,
                        232,
                        235,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        124,
                        143,
                        241,
                        255,
                        227,
                        234,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        35,
                        77,
                        181,
                        251,
                        193,
                        211,
                        255,
                        205,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        157,
                        247,
                        255,
                        236,
                        231,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        121,
                        141,
                        235,
                        255,
                        225,
                        227,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        45,
                        99,
                        188,
                        251,
                        195,
                        217,
                        255,
                        224,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        1,
                        251,
                        255,
                        213,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        203,
                        1,
                        248,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        137,
                        1,
                        177,
                        255,
                        224,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ]
            ],
            [
                [
                    [
                        253,
                        9,
                        248,
                        251,
                        207,
                        208,
                        255,
                        192,
                        128,
                        128,
                        128
                    ],
                    [
                        175,
                        13,
                        224,
                        243,
                        193,
                        185,
                        249,
                        198,
                        255,
                        255,
                        128
                    ],
                    [
                        73,
                        17,
                        171,
                        221,
                        161,
                        179,
                        236,
                        167,
                        255,
                        234,
                        128
                    ]
                ],
                [
                    [
                        1,
                        95,
                        247,
                        253,
                        212,
                        183,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        239,
                        90,
                        244,
                        250,
                        211,
                        209,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        155,
                        77,
                        195,
                        248,
                        188,
                        195,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        24,
                        239,
                        251,
                        218,
                        219,
                        255,
                        205,
                        128,
                        128,
                        128
                    ],
                    [
                        201,
                        51,
                        219,
                        255,
                        196,
                        186,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        69,
                        46,
                        190,
                        239,
                        201,
                        218,
                        255,
                        228,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        191,
                        251,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        223,
                        165,
                        249,
                        255,
                        213,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        141,
                        124,
                        248,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        16,
                        248,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        190,
                        36,
                        230,
                        255,
                        236,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        149,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        226,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        247,
                        192,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        240,
                        128,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        134,
                        252,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        213,
                        62,
                        250,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        55,
                        93,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ]
            ],
            [
                [
                    [
                        202,
                        24,
                        213,
                        235,
                        186,
                        191,
                        220,
                        160,
                        240,
                        175,
                        255
                    ],
                    [
                        126,
                        38,
                        182,
                        232,
                        169,
                        184,
                        228,
                        174,
                        255,
                        187,
                        128
                    ],
                    [
                        61,
                        46,
                        138,
                        219,
                        151,
                        178,
                        240,
                        170,
                        255,
                        216,
                        128
                    ]
                ],
                [
                    [
                        1,
                        112,
                        230,
                        250,
                        199,
                        191,
                        247,
                        159,
                        255,
                        255,
                        128
                    ],
                    [
                        166,
                        109,
                        228,
                        252,
                        211,
                        215,
                        255,
                        174,
                        128,
                        128,
                        128
                    ],
                    [
                        39,
                        77,
                        162,
                        232,
                        172,
                        180,
                        245,
                        178,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        52,
                        220,
                        246,
                        198,
                        199,
                        249,
                        220,
                        255,
                        255,
                        128
                    ],
                    [
                        124,
                        74,
                        191,
                        243,
                        183,
                        193,
                        250,
                        221,
                        255,
                        255,
                        128
                    ],
                    [
                        24,
                        71,
                        130,
                        219,
                        154,
                        170,
                        243,
                        182,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        182,
                        225,
                        249,
                        219,
                        240,
                        255,
                        224,
                        128,
                        128,
                        128
                    ],
                    [
                        149,
                        150,
                        226,
                        252,
                        216,
                        205,
                        255,
                        171,
                        128,
                        128,
                        128
                    ],
                    [
                        28,
                        108,
                        170,
                        242,
                        183,
                        194,
                        254,
                        223,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        81,
                        230,
                        252,
                        204,
                        203,
                        255,
                        192,
                        128,
                        128,
                        128
                    ],
                    [
                        123,
                        102,
                        209,
                        247,
                        188,
                        196,
                        255,
                        233,
                        128,
                        128,
                        128
                    ],
                    [
                        20,
                        95,
                        153,
                        243,
                        164,
                        173,
                        255,
                        203,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        222,
                        248,
                        255,
                        216,
                        213,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        168,
                        175,
                        246,
                        252,
                        235,
                        205,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        47,
                        116,
                        215,
                        255,
                        211,
                        212,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        121,
                        236,
                        253,
                        212,
                        214,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        141,
                        84,
                        213,
                        252,
                        201,
                        202,
                        255,
                        219,
                        128,
                        128,
                        128
                    ],
                    [
                        42,
                        80,
                        160,
                        240,
                        162,
                        185,
                        255,
                        205,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        244,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        238,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ]
            ]
        ], ci = [
            [
                [
                    231,
                    120,
                    48,
                    89,
                    115,
                    113,
                    120,
                    152,
                    112
                ],
                [
                    152,
                    179,
                    64,
                    126,
                    170,
                    118,
                    46,
                    70,
                    95
                ],
                [
                    175,
                    69,
                    143,
                    80,
                    85,
                    82,
                    72,
                    155,
                    103
                ],
                [
                    56,
                    58,
                    10,
                    171,
                    218,
                    189,
                    17,
                    13,
                    152
                ],
                [
                    114,
                    26,
                    17,
                    163,
                    44,
                    195,
                    21,
                    10,
                    173
                ],
                [
                    121,
                    24,
                    80,
                    195,
                    26,
                    62,
                    44,
                    64,
                    85
                ],
                [
                    144,
                    71,
                    10,
                    38,
                    171,
                    213,
                    144,
                    34,
                    26
                ],
                [
                    170,
                    46,
                    55,
                    19,
                    136,
                    160,
                    33,
                    206,
                    71
                ],
                [
                    63,
                    20,
                    8,
                    114,
                    114,
                    208,
                    12,
                    9,
                    226
                ],
                [
                    81,
                    40,
                    11,
                    96,
                    182,
                    84,
                    29,
                    16,
                    36
                ]
            ],
            [
                [
                    134,
                    183,
                    89,
                    137,
                    98,
                    101,
                    106,
                    165,
                    148
                ],
                [
                    72,
                    187,
                    100,
                    130,
                    157,
                    111,
                    32,
                    75,
                    80
                ],
                [
                    66,
                    102,
                    167,
                    99,
                    74,
                    62,
                    40,
                    234,
                    128
                ],
                [
                    41,
                    53,
                    9,
                    178,
                    241,
                    141,
                    26,
                    8,
                    107
                ],
                [
                    74,
                    43,
                    26,
                    146,
                    73,
                    166,
                    49,
                    23,
                    157
                ],
                [
                    65,
                    38,
                    105,
                    160,
                    51,
                    52,
                    31,
                    115,
                    128
                ],
                [
                    104,
                    79,
                    12,
                    27,
                    217,
                    255,
                    87,
                    17,
                    7
                ],
                [
                    87,
                    68,
                    71,
                    44,
                    114,
                    51,
                    15,
                    186,
                    23
                ],
                [
                    47,
                    41,
                    14,
                    110,
                    182,
                    183,
                    21,
                    17,
                    194
                ],
                [
                    66,
                    45,
                    25,
                    102,
                    197,
                    189,
                    23,
                    18,
                    22
                ]
            ],
            [
                [
                    88,
                    88,
                    147,
                    150,
                    42,
                    46,
                    45,
                    196,
                    205
                ],
                [
                    43,
                    97,
                    183,
                    117,
                    85,
                    38,
                    35,
                    179,
                    61
                ],
                [
                    39,
                    53,
                    200,
                    87,
                    26,
                    21,
                    43,
                    232,
                    171
                ],
                [
                    56,
                    34,
                    51,
                    104,
                    114,
                    102,
                    29,
                    93,
                    77
                ],
                [
                    39,
                    28,
                    85,
                    171,
                    58,
                    165,
                    90,
                    98,
                    64
                ],
                [
                    34,
                    22,
                    116,
                    206,
                    23,
                    34,
                    43,
                    166,
                    73
                ],
                [
                    107,
                    54,
                    32,
                    26,
                    51,
                    1,
                    81,
                    43,
                    31
                ],
                [
                    68,
                    25,
                    106,
                    22,
                    64,
                    171,
                    36,
                    225,
                    114
                ],
                [
                    34,
                    19,
                    21,
                    102,
                    132,
                    188,
                    16,
                    76,
                    124
                ],
                [
                    62,
                    18,
                    78,
                    95,
                    85,
                    57,
                    50,
                    48,
                    51
                ]
            ],
            [
                [
                    193,
                    101,
                    35,
                    159,
                    215,
                    111,
                    89,
                    46,
                    111
                ],
                [
                    60,
                    148,
                    31,
                    172,
                    219,
                    228,
                    21,
                    18,
                    111
                ],
                [
                    112,
                    113,
                    77,
                    85,
                    179,
                    255,
                    38,
                    120,
                    114
                ],
                [
                    40,
                    42,
                    1,
                    196,
                    245,
                    209,
                    10,
                    25,
                    109
                ],
                [
                    88,
                    43,
                    29,
                    140,
                    166,
                    213,
                    37,
                    43,
                    154
                ],
                [
                    61,
                    63,
                    30,
                    155,
                    67,
                    45,
                    68,
                    1,
                    209
                ],
                [
                    100,
                    80,
                    8,
                    43,
                    154,
                    1,
                    51,
                    26,
                    71
                ],
                [
                    142,
                    78,
                    78,
                    16,
                    255,
                    128,
                    34,
                    197,
                    171
                ],
                [
                    41,
                    40,
                    5,
                    102,
                    211,
                    183,
                    4,
                    1,
                    221
                ],
                [
                    51,
                    50,
                    17,
                    168,
                    209,
                    192,
                    23,
                    25,
                    82
                ]
            ],
            [
                [
                    138,
                    31,
                    36,
                    171,
                    27,
                    166,
                    38,
                    44,
                    229
                ],
                [
                    67,
                    87,
                    58,
                    169,
                    82,
                    115,
                    26,
                    59,
                    179
                ],
                [
                    63,
                    59,
                    90,
                    180,
                    59,
                    166,
                    93,
                    73,
                    154
                ],
                [
                    40,
                    40,
                    21,
                    116,
                    143,
                    209,
                    34,
                    39,
                    175
                ],
                [
                    47,
                    15,
                    16,
                    183,
                    34,
                    223,
                    49,
                    45,
                    183
                ],
                [
                    46,
                    17,
                    33,
                    183,
                    6,
                    98,
                    15,
                    32,
                    183
                ],
                [
                    57,
                    46,
                    22,
                    24,
                    128,
                    1,
                    54,
                    17,
                    37
                ],
                [
                    65,
                    32,
                    73,
                    115,
                    28,
                    128,
                    23,
                    128,
                    205
                ],
                [
                    40,
                    3,
                    9,
                    115,
                    51,
                    192,
                    18,
                    6,
                    223
                ],
                [
                    87,
                    37,
                    9,
                    115,
                    59,
                    77,
                    64,
                    21,
                    47
                ]
            ],
            [
                [
                    104,
                    55,
                    44,
                    218,
                    9,
                    54,
                    53,
                    130,
                    226
                ],
                [
                    64,
                    90,
                    70,
                    205,
                    40,
                    41,
                    23,
                    26,
                    57
                ],
                [
                    54,
                    57,
                    112,
                    184,
                    5,
                    41,
                    38,
                    166,
                    213
                ],
                [
                    30,
                    34,
                    26,
                    133,
                    152,
                    116,
                    10,
                    32,
                    134
                ],
                [
                    39,
                    19,
                    53,
                    221,
                    26,
                    114,
                    32,
                    73,
                    255
                ],
                [
                    31,
                    9,
                    65,
                    234,
                    2,
                    15,
                    1,
                    118,
                    73
                ],
                [
                    75,
                    32,
                    12,
                    51,
                    192,
                    255,
                    160,
                    43,
                    51
                ],
                [
                    88,
                    31,
                    35,
                    67,
                    102,
                    85,
                    55,
                    186,
                    85
                ],
                [
                    56,
                    21,
                    23,
                    111,
                    59,
                    205,
                    45,
                    37,
                    192
                ],
                [
                    55,
                    38,
                    70,
                    124,
                    73,
                    102,
                    1,
                    34,
                    98
                ]
            ],
            [
                [
                    125,
                    98,
                    42,
                    88,
                    104,
                    85,
                    117,
                    175,
                    82
                ],
                [
                    95,
                    84,
                    53,
                    89,
                    128,
                    100,
                    113,
                    101,
                    45
                ],
                [
                    75,
                    79,
                    123,
                    47,
                    51,
                    128,
                    81,
                    171,
                    1
                ],
                [
                    57,
                    17,
                    5,
                    71,
                    102,
                    57,
                    53,
                    41,
                    49
                ],
                [
                    38,
                    33,
                    13,
                    121,
                    57,
                    73,
                    26,
                    1,
                    85
                ],
                [
                    41,
                    10,
                    67,
                    138,
                    77,
                    110,
                    90,
                    47,
                    114
                ],
                [
                    115,
                    21,
                    2,
                    10,
                    102,
                    255,
                    166,
                    23,
                    6
                ],
                [
                    101,
                    29,
                    16,
                    10,
                    85,
                    128,
                    101,
                    196,
                    26
                ],
                [
                    57,
                    18,
                    10,
                    102,
                    102,
                    213,
                    34,
                    20,
                    43
                ],
                [
                    117,
                    20,
                    15,
                    36,
                    163,
                    128,
                    68,
                    1,
                    26
                ]
            ],
            [
                [
                    102,
                    61,
                    71,
                    37,
                    34,
                    53,
                    31,
                    243,
                    192
                ],
                [
                    69,
                    60,
                    71,
                    38,
                    73,
                    119,
                    28,
                    222,
                    37
                ],
                [
                    68,
                    45,
                    128,
                    34,
                    1,
                    47,
                    11,
                    245,
                    171
                ],
                [
                    62,
                    17,
                    19,
                    70,
                    146,
                    85,
                    55,
                    62,
                    70
                ],
                [
                    37,
                    43,
                    37,
                    154,
                    100,
                    163,
                    85,
                    160,
                    1
                ],
                [
                    63,
                    9,
                    92,
                    136,
                    28,
                    64,
                    32,
                    201,
                    85
                ],
                [
                    75,
                    15,
                    9,
                    9,
                    64,
                    255,
                    184,
                    119,
                    16
                ],
                [
                    86,
                    6,
                    28,
                    5,
                    64,
                    255,
                    25,
                    248,
                    1
                ],
                [
                    56,
                    8,
                    17,
                    132,
                    137,
                    255,
                    55,
                    116,
                    128
                ],
                [
                    58,
                    15,
                    20,
                    82,
                    135,
                    57,
                    26,
                    121,
                    40
                ]
            ],
            [
                [
                    164,
                    50,
                    31,
                    137,
                    154,
                    133,
                    25,
                    35,
                    218
                ],
                [
                    51,
                    103,
                    44,
                    131,
                    131,
                    123,
                    31,
                    6,
                    158
                ],
                [
                    86,
                    40,
                    64,
                    135,
                    148,
                    224,
                    45,
                    183,
                    128
                ],
                [
                    22,
                    26,
                    17,
                    131,
                    240,
                    154,
                    14,
                    1,
                    209
                ],
                [
                    45,
                    16,
                    21,
                    91,
                    64,
                    222,
                    7,
                    1,
                    197
                ],
                [
                    56,
                    21,
                    39,
                    155,
                    60,
                    138,
                    23,
                    102,
                    213
                ],
                [
                    83,
                    12,
                    13,
                    54,
                    192,
                    255,
                    68,
                    47,
                    28
                ],
                [
                    85,
                    26,
                    85,
                    85,
                    128,
                    128,
                    32,
                    146,
                    171
                ],
                [
                    18,
                    11,
                    7,
                    63,
                    144,
                    171,
                    4,
                    4,
                    246
                ],
                [
                    35,
                    27,
                    10,
                    146,
                    174,
                    171,
                    12,
                    26,
                    128
                ]
            ],
            [
                [
                    190,
                    80,
                    35,
                    99,
                    180,
                    80,
                    126,
                    54,
                    45
                ],
                [
                    85,
                    126,
                    47,
                    87,
                    176,
                    51,
                    41,
                    20,
                    32
                ],
                [
                    101,
                    75,
                    128,
                    139,
                    118,
                    146,
                    116,
                    128,
                    85
                ],
                [
                    56,
                    41,
                    15,
                    176,
                    236,
                    85,
                    37,
                    9,
                    62
                ],
                [
                    71,
                    30,
                    17,
                    119,
                    118,
                    255,
                    17,
                    18,
                    138
                ],
                [
                    101,
                    38,
                    60,
                    138,
                    55,
                    70,
                    43,
                    26,
                    142
                ],
                [
                    146,
                    36,
                    19,
                    30,
                    171,
                    255,
                    97,
                    27,
                    20
                ],
                [
                    138,
                    45,
                    61,
                    62,
                    219,
                    1,
                    81,
                    188,
                    64
                ],
                [
                    32,
                    41,
                    20,
                    117,
                    151,
                    142,
                    20,
                    21,
                    163
                ],
                [
                    112,
                    19,
                    12,
                    61,
                    195,
                    128,
                    48,
                    4,
                    24
                ]
            ]
        ], ui = [
            [
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        176,
                        246,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        223,
                        241,
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        249,
                        253,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        244,
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        234,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        246,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        239,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        248,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        251,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        251,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        253,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        250,
                        255,
                        254,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ]
            ],
            [
                [
                    [
                        217,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        225,
                        252,
                        241,
                        253,
                        255,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        234,
                        250,
                        241,
                        250,
                        253,
                        255,
                        253,
                        254,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        223,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        238,
                        253,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        248,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        249,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        247,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        250,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ]
            ],
            [
                [
                    [
                        186,
                        251,
                        250,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        234,
                        251,
                        244,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        251,
                        251,
                        243,
                        253,
                        254,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        236,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        251,
                        253,
                        253,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ]
            ],
            [
                [
                    [
                        248,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        250,
                        254,
                        252,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        248,
                        254,
                        249,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        246,
                        253,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        252,
                        254,
                        251,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        248,
                        254,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        253,
                        255,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        251,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        245,
                        251,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        253,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        251,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        252,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        249,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        250,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ]
            ]
        ], hi = [
            0,
            1,
            2,
            3,
            6,
            4,
            5,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            7,
            0
        ], li = [], fi = [], di = [], pi = 1, gi = 2, mi = [], vi = [];
        vr("UpsampleRgbLinePair", Ar, 3), vr("UpsampleBgrLinePair", xr, 3), vr("UpsampleRgbaLinePair", Ir, 4), vr("UpsampleBgraLinePair", kr, 4), vr("UpsampleArgbLinePair", Pr, 4), vr("UpsampleRgba4444LinePair", _r, 2), vr("UpsampleRgb565LinePair", Sr, 2);
        var bi = _$t2.UpsampleRgbLinePair, yi = _$t2.UpsampleBgrLinePair, wi = _$t2.UpsampleRgbaLinePair, Ni = _$t2.UpsampleBgraLinePair, Li = _$t2.UpsampleArgbLinePair, Ai = _$t2.UpsampleRgba4444LinePair, xi = _$t2.UpsampleRgb565LinePair, Si = 16, _i = 1 << Si - 1, Pi = -227, ki = 482, Ii = 6, Fi = (256 << Ii) - 1, Ci = 0, ji = a67(256), Oi = a67(256), Bi = a67(256), Mi = a67(256), Ei = a67(ki - Pi), qi = a67(ki - Pi);
        Fr("YuvToRgbRow", Ar, 3), Fr("YuvToBgrRow", xr, 3), Fr("YuvToRgbaRow", Ir, 4), Fr("YuvToBgraRow", kr, 4), Fr("YuvToArgbRow", Pr, 4), Fr("YuvToRgba4444Row", _r, 2), Fr("YuvToRgb565Row", Sr, 2);
        var Di = [
            0,
            4,
            8,
            12,
            128,
            132,
            136,
            140,
            256,
            260,
            264,
            268,
            384,
            388,
            392,
            396
        ], Ri = [
            0,
            2,
            8
        ], Ti = [
            8,
            7,
            6,
            4,
            4,
            2,
            2,
            2,
            1,
            1,
            1,
            1
        ], Ui = 1;
        this.WebPDecodeRGBA = function(t62, r32, n, i91, a) {
            var o = qn, s = new rr, c = new ot;
            s.ba = c, c.S = o, c.width = [
                c.width
            ], c.height = [
                c.height
            ];
            var u = c.width, h = c.height, l = new st;
            if (null == l || null == t62) var f = 2;
            else e(null != l), f = Br(t62, r32, n, l.width, l.height, l.Pd, l.Qd, l.format, null);
            if (0 != f ? u = 0 : (null != u && (u[0] = l.width[0]), null != h && (h[0] = l.height[0]), u = 1), u) {
                c.width = c.width[0], c.height = c.height[0], null != i91 && (i91[0] = c.width), null != a && (a[0] = c.height);
                t: {
                    if (i91 = new Gt, (a = new nr).data = t62, a.w = r32, a.ha = n, a.kd = 1, r32 = [
                        0
                    ], e(null != a), (0 == (t62 = Br(a.data, a.w, a.ha, null, null, null, r32, null, a)) || 7 == t62) && r32[0] && (t62 = 4), 0 == (r32 = t62)) {
                        if (e(null != s), i91.data = a.data, i91.w = a.w + a.offset, i91.ha = a.ha - a.offset, i91.put = dt, i91.ac = ft, i91.bc = pt, i91.ma = s, a.xa) {
                            if (null == (t62 = kt())) {
                                s = 1;
                                break t;
                            }
                            if (function(t, r) {
                                var _$n = [
                                    0
                                ], _$i = [
                                    0
                                ], _$a = [
                                    0
                                ];
                                e: for(;;){
                                    if (null == t) return 0;
                                    if (null == r) return t.a = 2, 0;
                                    if (t.l = r, t.a = 0, v10(t.m, r.data, r.w, r.ha), !gt(t.m, _$n, _$i, _$a)) {
                                        t.a = 3;
                                        break e;
                                    }
                                    if (t.xb = gi, r.width = _$n[0], r.height = _$i[0], !It2(_$n[0], _$i[0], 1, t, null)) break e;
                                    return 1;
                                }
                                return e(0 != t.a), 0;
                            }(t62, i91)) {
                                if (i91 = 0 == (r32 = qr(i91.width, i91.height, s.Oa, s.ba))) {
                                    e: {
                                        i91 = t62;
                                        r: for(;;){
                                            if (null == i91) {
                                                i91 = 0;
                                                break e;
                                            }
                                            if (e(null != i91.s.yc), e(null != i91.s.Ya), e(0 < i91.s.Wb), e(null != (n = i91.l)), e(null != (a = n.ma)), 0 != i91.xb) {
                                                if (i91.ca = a.ba, i91.tb = a.tb, e(null != i91.ca), !Mr(a.Oa, n, Rn)) {
                                                    i91.a = 2;
                                                    break r;
                                                }
                                                if (!Ft(i91, n.width)) break r;
                                                if (n.da) break r;
                                                if ((n.da || nt(i91.ca.S)) && mr(), 11 > i91.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), null != i91.ca.f.kb.F && mr()), i91.Pb && 0 < i91.s.ua && null == i91.s.vb.X && !O(i91.s.vb, i91.s.Wa.Xa)) {
                                                    i91.a = 1;
                                                    break r;
                                                }
                                                i91.xb = 0;
                                            }
                                            if (!_$_t(i91, i91.V, i91.Ba, i91.c, i91.i, n.o, Lt)) break r;
                                            a.Dc = i91.Ma, i91 = 1;
                                            break e;
                                        }
                                        e(0 != i91.a), i91 = 0;
                                    }
                                    i91 = !i91;
                                }
                                i91 && (r32 = t62.a);
                            } else r32 = t62.a;
                        } else {
                            t62 = new Yt;
                            if (t62.Fa = a.na, t62.P = a.P, t62.qc = a.Sa, Kt(t62, i91)) {
                                if (0 == (r32 = qr(i91.width, i91.height, s.Oa, s.ba))) {
                                    if (t62.Aa = 0, n = s.Oa, e(null != (a = t62)), null != n) {
                                        if (0 < (u = 0 > (u = n.Md) ? 0 : 100 < u ? 255 : 255 * u / 100)) {
                                            for(h = l = 0; 4 > h; ++h)12 > (f = a.pb[h]).lc && (f.ia = u * Ti[0 > f.lc ? 0 : f.lc] >> 3), l |= f.ia;
                                            l && (alert("todo:VP8InitRandom"), a.ia = 1);
                                        }
                                        a.Ga = n.Id, 100 < a.Ga ? a.Ga = 100 : 0 > a.Ga && (a.Ga = 0);
                                    }
                                    Qt(t62, i91) || (r32 = t62.a);
                                }
                            } else r32 = t62.a;
                        }
                        0 == r32 && null != s.Oa && s.Oa.fd && (r32 = Er(s.ba));
                    }
                    s = r32;
                }
                o = 0 != s ? null : 11 > o ? c.f.RGBA.eb : c.f.kb.y;
            } else o = null;
            return o;
        };
        var zi = [
            3,
            4,
            3,
            4,
            4,
            2,
            2,
            4,
            4,
            4,
            2,
            1,
            1
        ];
    };
    new c24;
    var f19 = [
        0
    ], d13 = [
        0
    ], p15 = [], g12 = new c24, m10 = t58, v9 = function(t63, e42) {
        var r33 = {}, n92 = 0, _$i15 = !1, a = 0, o = 0;
        if (r33.frames = [], !/** @license
   * Copyright (c) 2017 Dominik Homberger
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  https://webpjs.appspot.com
  WebPRiffParser dominikhlbg@gmail.com
  */ function(t, e, r, n) {
            for(var _$i = 0; _$i < n; _$i++)if (t[e + _$i] != r.charCodeAt(_$i)) return !0;
            return !1;
        }(t63, e42, "RIFF", 4)) {
            var s, c;
            l(t63, e42 += 4);
            for(e42 += 8; e42 < t63.length;){
                var f = u(t63, e42), d = l(t63, e42 += 4);
                e42 += 4;
                var p = d + (1 & d);
                switch(f){
                    case "VP8 ":
                    case "VP8L":
                        void 0 === r33.frames[n92] && (r33.frames[n92] = {});
                        (v = r33.frames[n92]).src_off = _$i15 ? o : e42 - 8, v.src_size = a + d + 8, n92++, _$i15 && (_$i15 = !1, a = 0, o = 0);
                        break;
                    case "VP8X":
                        (v = r33.header = {}).feature_flags = t63[e42];
                        var g = e42 + 4;
                        v.canvas_width = 1 + h(t63, g);
                        g += 3;
                        v.canvas_height = 1 + h(t63, g);
                        g += 3;
                        break;
                    case "ALPH":
                        _$i15 = !0, a = p + 8, o = e42 - 8;
                        break;
                    case "ANIM":
                        (v = r33.header).bgcolor = l(t63, e42);
                        g = e42 + 4;
                        v.loop_count = (s = t63)[(c = g) + 0] << 0 | s[c + 1] << 8;
                        g += 2;
                        break;
                    case "ANMF":
                        var m, v;
                        (v = r33.frames[n92] = {}).offset_x = 2 * h(t63, e42), e42 += 3, v.offset_y = 2 * h(t63, e42), e42 += 3, v.width = 1 + h(t63, e42), e42 += 3, v.height = 1 + h(t63, e42), e42 += 3, v.duration = h(t63, e42), e42 += 3, m = t63[e42++], v.dispose = 1 & m, v.blend = m >> 1 & 1;
                }
                "ANMF" != f && (e42 += p);
            }
            return r33;
        }
    }(m10, 0);
    v9.response = m10, v9.rgbaoutput = !0, v9.dataurl = !1;
    var b10 = v9.header ? v9.header : null, _$y5 = v9.frames ? v9.frames : null;
    if (b10) {
        b10.loop_counter = b10.loop_count, f19 = [
            b10.canvas_height
        ], d13 = [
            b10.canvas_width
        ];
        for(var w9 = 0; w9 < _$y5.length && 0 != _$y5[w9].blend; w9++);
    }
    var N5 = _$y5[0], L5 = g12.WebPDecodeRGBA(m10, N5.src_off, N5.src_size, d13, f19);
    N5.rgba = L5, N5.imgwidth = d13[0], N5.imgheight = f19[0];
    for(var A4 = 0; A4 < d13[0] * f19[0] * 4; A4++)p15[A4] = L5[A4];
    return this.width = d13, this.height = f19, this.data = p15, this;
}
!function(t64) {
    var r = function r() {
        return "function" == typeof _fflate.zlibSync;
    }, n93 = function n93(r, n, a, h) {
        var l = 4, f = s19;
        switch(h){
            case t64.image_compression.FAST:
                l = 1, f = o57;
                break;
            case t64.image_compression.MEDIUM:
                l = 6, f = c26;
                break;
            case t64.image_compression.SLOW:
                l = 9, f = u27;
        }
        r = _$i(r, n, a, f);
        var d = _fflate.zlibSync(r, {
            level: l
        });
        return t64.__addimage__.arrayBufferToBinaryString(d);
    }, _$i = function _$i(t, e, r, n) {
        for(var _$i16, a, o, s = t.length / e, c = new Uint8Array(t.length + s), u = l20(), h = 0; h < s; h += 1){
            if (o = h * e, _$i16 = t.subarray(o, o + e), n) c.set(n(_$i16, r, a), o + h);
            else {
                for(var d, p = u.length, g = []; d < p; d += 1)g[d] = u[d](_$i16, r, a);
                var m = f21(g.concat());
                c.set(g[m], o + h);
            }
            a = _$i16;
        }
        return c;
    }, a68 = function a68(t) {
        var e = Array.apply([], t);
        return e.unshift(0), e;
    }, o57 = function o57(t, e) {
        var r, n = [], _$i = t.length;
        n[0] = 1;
        for(var a = 0; a < _$i; a += 1)r = t[a - e] || 0, n[a + 1] = t[a] - r + 256 & 255;
        return n;
    }, s19 = function s19(t, e, r) {
        var n, _$i = [], a = t.length;
        _$i[0] = 2;
        for(var o = 0; o < a; o += 1)n = r && r[o] || 0, _$i[o + 1] = t[o] - n + 256 & 255;
        return _$i;
    }, c26 = function c26(t, e, r) {
        var n, _$i, a = [], o = t.length;
        a[0] = 3;
        for(var s = 0; s < o; s += 1)n = t[s - e] || 0, _$i = r && r[s] || 0, a[s + 1] = t[s] + 256 - (n + _$i >>> 1) & 255;
        return a;
    }, u27 = function u27(t, e, r) {
        var n, _$i, a, o, s = [], c = t.length;
        s[0] = 4;
        for(var u = 0; u < c; u += 1)n = t[u - e] || 0, _$i = r && r[u] || 0, a = r && r[u - e] || 0, o = h25(n, _$i, a), s[u + 1] = t[u] - o + 256 & 255;
        return s;
    }, h25 = function h25(t, e, r) {
        if (t === e && e === r) return t;
        var n = Math.abs(e - r), _$i = Math.abs(t - r), a = Math.abs(t + e - r - r);
        return n <= _$i && n <= a ? t : _$i <= a ? e : r;
    }, l20 = function l20() {
        return [
            a68,
            o57,
            s19,
            c26,
            u27
        ];
    }, f21 = function f21(t65) {
        var e43 = t65.map(function(t66) {
            return t66.reduce(function(t, e) {
                return t + Math.abs(e);
            }, 0);
        });
        return e43.indexOf(Math.min.apply(null, e43));
    };
    t64.processPNG = function(e44, i92, a, o) {
        var s, c, u, h, l, f, d, p, g, m, v, b, _$y, w, N, L = this.decode.FLATE_DECODE, A = "";
        if (this.__addimage__.isArrayBuffer(e44) && (e44 = new Uint8Array(e44)), this.__addimage__.isArrayBufferView(e44)) {
            if (e44 = (u = new Kt2(e44)).imgData, c = u.bits, s = u.colorSpace, l = u.colors, -1 !== [
                4,
                6
            ].indexOf(u.colorType)) {
                if (8 === u.bits) {
                    g = (p = 32 == u.pixelBitlength ? new Uint32Array(u.decodePixels().buffer) : 16 == u.pixelBitlength ? new Uint16Array(u.decodePixels().buffer) : new Uint8Array(u.decodePixels().buffer)).length, v = new Uint8Array(g * u.colors), m = new Uint8Array(g);
                    var x, S = u.pixelBitlength - u.bits;
                    for(w = 0, N = 0; w < g; w++){
                        for(_$y = p[w], x = 0; x < S;)v[N++] = _$y >>> x & 255, x += u.bits;
                        m[w] = _$y >>> x & 255;
                    }
                }
                if (16 === u.bits) {
                    g = (p = new Uint32Array(u.decodePixels().buffer)).length, v = new Uint8Array(g * (32 / u.pixelBitlength) * u.colors), m = new Uint8Array(g * (32 / u.pixelBitlength)), b = u.colors > 1, w = 0, N = 0;
                    for(var _ = 0; w < g;)_$y = p[w++], v[N++] = _$y >>> 0 & 255, b && (v[N++] = _$y >>> 16 & 255, _$y = p[w++], v[N++] = _$y >>> 0 & 255), m[_++] = _$y >>> 16 & 255;
                    c = 8;
                }
                o !== t64.image_compression.NONE && r() ? (e44 = n93(v, u.width * u.colors, u.colors, o), d = n93(m, u.width, 1, o)) : (e44 = v, d = m, L = void 0);
            }
            if (3 === u.colorType && (s = this.color_spaces.INDEXED, f = u.palette, u.transparency.indexed)) {
                var P = u.transparency.indexed, k = 0;
                for(w = 0, g = P.length; w < g; ++w)k += P[w];
                if ((k /= 255) === g - 1 && -1 !== P.indexOf(0)) h = [
                    P.indexOf(0)
                ];
                else if (k !== g) {
                    for(p = u.decodePixels(), m = new Uint8Array(p.length), w = 0, g = p.length; w < g; w++)m[w] = P[p[w]];
                    d = n93(m, u.width, 1);
                }
            }
            var _$I = function(e) {
                var r;
                switch(e){
                    case t64.image_compression.FAST:
                        r = 11;
                        break;
                    case t64.image_compression.MEDIUM:
                        r = 13;
                        break;
                    case t64.image_compression.SLOW:
                        r = 14;
                        break;
                    default:
                        r = 12;
                }
                return r;
            }(o);
            return L === this.decode.FLATE_DECODE && (A = "/Predictor " + _$I + " "), A += "/Colors " + l + " /BitsPerComponent " + c + " /Columns " + u.width, (this.__addimage__.isArrayBuffer(e44) || this.__addimage__.isArrayBufferView(e44)) && (e44 = this.__addimage__.arrayBufferToBinaryString(e44)), (d && this.__addimage__.isArrayBuffer(d) || this.__addimage__.isArrayBufferView(d)) && (d = this.__addimage__.arrayBufferToBinaryString(d)), {
                alias: a,
                data: e44,
                index: i92,
                filter: L,
                decodeParameters: A,
                transparency: h,
                palette: f,
                sMask: d,
                predictor: _$I,
                width: u.width,
                height: u.height,
                bitsPerComponent: c,
                colorSpace: s
            };
        }
    };
}(E.API), function(t) {
    t.processGIF89A = function(e, r, n, i93) {
        var a = new Zt(e), o = a.width, s = a.height, c = [];
        a.decodeAndBlitFrameRGBA(0, c);
        var u = {
            data: c,
            width: o,
            height: s
        }, h = new Qt3(100).encode(u, 100);
        return t.processJPEG.call(this, h, r, n, i93);
    }, t.processGIF87A = t.processGIF89A;
}(E.API), te.prototype.parseHeader = function() {
    if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
        var _$t = 0 === this.colors ? 1 << this.bitPP : this.colors;
        this.palette = new Array(_$t);
        for(var e = 0; e < _$t; e++){
            var r = this.datav.getUint8(this.pos++, !0), n = this.datav.getUint8(this.pos++, !0), _$i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0);
            this.palette[e] = {
                red: _$i,
                green: n,
                blue: r,
                quad: a
            };
        }
    }
    this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, te.prototype.parseBGR = function() {
    this.pos = this.offset;
    try {
        var _$t = "bit" + this.bitPP, e = this.width * this.height * 4;
        this.data = new Uint8Array(e), this[_$t]();
    } catch (t) {
        a60.log("bit decode error:" + t);
    }
}, te.prototype.bit1 = function() {
    var _$t, e = Math.ceil(this.width / 8), r = e % 4;
    for(_$t = this.height - 1; _$t >= 0; _$t--){
        for(var n = this.bottom_up ? _$t : this.height - 1 - _$t, _$i = 0; _$i < e; _$i++)for(var a = this.datav.getUint8(this.pos++, !0), o = n * this.width * 4 + 8 * _$i * 4, s = 0; s < 8 && 8 * _$i + s < this.width; s++){
            var c = this.palette[a >> 7 - s & 1];
            this.data[o + 4 * s] = c.blue, this.data[o + 4 * s + 1] = c.green, this.data[o + 4 * s + 2] = c.red, this.data[o + 4 * s + 3] = 255;
        }
        0 !== r && (this.pos += 4 - r);
    }
}, te.prototype.bit4 = function() {
    for(var _$t = Math.ceil(this.width / 2), e = _$t % 4, r = this.height - 1; r >= 0; r--){
        for(var n = this.bottom_up ? r : this.height - 1 - r, _$i = 0; _$i < _$t; _$i++){
            var a = this.datav.getUint8(this.pos++, !0), o = n * this.width * 4 + 2 * _$i * 4, s = a >> 4, c = 15 & a, u = this.palette[s];
            if (this.data[o] = u.blue, this.data[o + 1] = u.green, this.data[o + 2] = u.red, this.data[o + 3] = 255, 2 * _$i + 1 >= this.width) break;
            u = this.palette[c], this.data[o + 4] = u.blue, this.data[o + 4 + 1] = u.green, this.data[o + 4 + 2] = u.red, this.data[o + 4 + 3] = 255;
        }
        0 !== e && (this.pos += 4 - e);
    }
}, te.prototype.bit8 = function() {
    for(var _$t = this.width % 4, e = this.height - 1; e >= 0; e--){
        for(var r = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++){
            var _$i = this.datav.getUint8(this.pos++, !0), a = r * this.width * 4 + 4 * n;
            if (_$i < this.palette.length) {
                var o = this.palette[_$i];
                this.data[a] = o.red, this.data[a + 1] = o.green, this.data[a + 2] = o.blue, this.data[a + 3] = 255;
            } else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255;
        }
        0 !== _$t && (this.pos += 4 - _$t);
    }
}, te.prototype.bit15 = function() {
    for(var _$t = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--){
        for(var n = this.bottom_up ? r : this.height - 1 - r, _$i = 0; _$i < this.width; _$i++){
            var a = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var o = (a & e) / e * 255 | 0, s = (a >> 5 & e) / e * 255 | 0, c = (a >> 10 & e) / e * 255 | 0, u = a >> 15 ? 255 : 0, h = n * this.width * 4 + 4 * _$i;
            this.data[h] = c, this.data[h + 1] = s, this.data[h + 2] = o, this.data[h + 3] = u;
        }
        this.pos += _$t;
    }
}, te.prototype.bit16 = function() {
    for(var _$t = this.width % 3, e = parseInt("11111", 2), r = parseInt("111111", 2), n = this.height - 1; n >= 0; n--){
        for(var _$i = this.bottom_up ? n : this.height - 1 - n, a = 0; a < this.width; a++){
            var o = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var s = (o & e) / e * 255 | 0, c = (o >> 5 & r) / r * 255 | 0, u = (o >> 11) / e * 255 | 0, h = _$i * this.width * 4 + 4 * a;
            this.data[h] = u, this.data[h + 1] = c, this.data[h + 2] = s, this.data[h + 3] = 255;
        }
        this.pos += _$t;
    }
}, te.prototype.bit24 = function() {
    for(var _$t = this.height - 1; _$t >= 0; _$t--){
        for(var e = this.bottom_up ? _$t : this.height - 1 - _$t, r = 0; r < this.width; r++){
            var n = this.datav.getUint8(this.pos++, !0), _$i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), o = e * this.width * 4 + 4 * r;
            this.data[o] = a, this.data[o + 1] = _$i, this.data[o + 2] = n, this.data[o + 3] = 255;
        }
        this.pos += this.width % 4;
    }
}, te.prototype.bit32 = function() {
    for(var _$t = this.height - 1; _$t >= 0; _$t--)for(var e = this.bottom_up ? _$t : this.height - 1 - _$t, r = 0; r < this.width; r++){
        var n = this.datav.getUint8(this.pos++, !0), _$i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), s = e * this.width * 4 + 4 * r;
        this.data[s] = a, this.data[s + 1] = _$i, this.data[s + 2] = n, this.data[s + 3] = o;
    }
}, te.prototype.getData = function() {
    return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t) {
    t.processBMP = function(e, r, n, i94) {
        var a = new te(e, !1), o = a.width, s = a.height, c = {
            data: a.getData(),
            width: o,
            height: s
        }, u = new Qt3(100).encode(c, 100);
        return t.processJPEG.call(this, u, r, n, i94);
    };
}(E.API), ee.prototype.getData = function() {
    return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t) {
    t.processWEBP = function(e, r, n, i95) {
        var a = new ee(e, !1), o = a.width, s = a.height, c = {
            data: a.getData(),
            width: o,
            height: s
        }, u = new Qt3(100).encode(c, 100);
        return t.processJPEG.call(this, u, r, n, i95);
    };
}(E.API), E.API.processRGBA = function(t, e, r) {
    for(var n = t.data, _$i = n.length, a = new Uint8Array(_$i / 4 * 3), o = new Uint8Array(_$i / 4), s = 0, c = 0, u = 0; u < _$i; u += 4){
        var h = n[u], l = n[u + 1], f = n[u + 2], d = n[u + 3];
        a[s++] = h, a[s++] = l, a[s++] = f, o[c++] = d;
    }
    var p = this.__addimage__.arrayBufferToBinaryString(a);
    return {
        alpha: this.__addimage__.arrayBufferToBinaryString(o),
        data: p,
        index: e,
        alias: r,
        colorSpace: "DeviceRGB",
        bitsPerComponent: 8,
        width: t.width,
        height: t.height
    };
}, E.API.setLanguage = function(t) {
    return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), void 0 !== ({
        af: "Afrikaans",
        sq: "Albanian",
        ar: "Arabic (Standard)",
        "ar-DZ": "Arabic (Algeria)",
        "ar-BH": "Arabic (Bahrain)",
        "ar-EG": "Arabic (Egypt)",
        "ar-IQ": "Arabic (Iraq)",
        "ar-JO": "Arabic (Jordan)",
        "ar-KW": "Arabic (Kuwait)",
        "ar-LB": "Arabic (Lebanon)",
        "ar-LY": "Arabic (Libya)",
        "ar-MA": "Arabic (Morocco)",
        "ar-OM": "Arabic (Oman)",
        "ar-QA": "Arabic (Qatar)",
        "ar-SA": "Arabic (Saudi Arabia)",
        "ar-SY": "Arabic (Syria)",
        "ar-TN": "Arabic (Tunisia)",
        "ar-AE": "Arabic (U.A.E.)",
        "ar-YE": "Arabic (Yemen)",
        an: "Aragonese",
        hy: "Armenian",
        as: "Assamese",
        ast: "Asturian",
        az: "Azerbaijani",
        eu: "Basque",
        be: "Belarusian",
        bn: "Bengali",
        bs: "Bosnian",
        br: "Breton",
        bg: "Bulgarian",
        my: "Burmese",
        ca: "Catalan",
        ch: "Chamorro",
        ce: "Chechen",
        zh: "Chinese",
        "zh-HK": "Chinese (Hong Kong)",
        "zh-CN": "Chinese (PRC)",
        "zh-SG": "Chinese (Singapore)",
        "zh-TW": "Chinese (Taiwan)",
        cv: "Chuvash",
        co: "Corsican",
        cr: "Cree",
        hr: "Croatian",
        cs: "Czech",
        da: "Danish",
        nl: "Dutch (Standard)",
        "nl-BE": "Dutch (Belgian)",
        en: "English",
        "en-AU": "English (Australia)",
        "en-BZ": "English (Belize)",
        "en-CA": "English (Canada)",
        "en-IE": "English (Ireland)",
        "en-JM": "English (Jamaica)",
        "en-NZ": "English (New Zealand)",
        "en-PH": "English (Philippines)",
        "en-ZA": "English (South Africa)",
        "en-TT": "English (Trinidad & Tobago)",
        "en-GB": "English (United Kingdom)",
        "en-US": "English (United States)",
        "en-ZW": "English (Zimbabwe)",
        eo: "Esperanto",
        et: "Estonian",
        fo: "Faeroese",
        fj: "Fijian",
        fi: "Finnish",
        fr: "French (Standard)",
        "fr-BE": "French (Belgium)",
        "fr-CA": "French (Canada)",
        "fr-FR": "French (France)",
        "fr-LU": "French (Luxembourg)",
        "fr-MC": "French (Monaco)",
        "fr-CH": "French (Switzerland)",
        fy: "Frisian",
        fur: "Friulian",
        gd: "Gaelic (Scots)",
        "gd-IE": "Gaelic (Irish)",
        gl: "Galacian",
        ka: "Georgian",
        de: "German (Standard)",
        "de-AT": "German (Austria)",
        "de-DE": "German (Germany)",
        "de-LI": "German (Liechtenstein)",
        "de-LU": "German (Luxembourg)",
        "de-CH": "German (Switzerland)",
        el: "Greek",
        gu: "Gujurati",
        ht: "Haitian",
        he: "Hebrew",
        hi: "Hindi",
        hu: "Hungarian",
        is: "Icelandic",
        id: "Indonesian",
        iu: "Inuktitut",
        ga: "Irish",
        it: "Italian (Standard)",
        "it-CH": "Italian (Switzerland)",
        ja: "Japanese",
        kn: "Kannada",
        ks: "Kashmiri",
        kk: "Kazakh",
        km: "Khmer",
        ky: "Kirghiz",
        tlh: "Klingon",
        ko: "Korean",
        "ko-KP": "Korean (North Korea)",
        "ko-KR": "Korean (South Korea)",
        la: "Latin",
        lv: "Latvian",
        lt: "Lithuanian",
        lb: "Luxembourgish",
        mk: "North Macedonia",
        ms: "Malay",
        ml: "Malayalam",
        mt: "Maltese",
        mi: "Maori",
        mr: "Marathi",
        mo: "Moldavian",
        nv: "Navajo",
        ng: "Ndonga",
        ne: "Nepali",
        no: "Norwegian",
        nb: "Norwegian (Bokmal)",
        nn: "Norwegian (Nynorsk)",
        oc: "Occitan",
        or: "Oriya",
        om: "Oromo",
        fa: "Persian",
        "fa-IR": "Persian/Iran",
        pl: "Polish",
        pt: "Portuguese",
        "pt-BR": "Portuguese (Brazil)",
        pa: "Punjabi",
        "pa-IN": "Punjabi (India)",
        "pa-PK": "Punjabi (Pakistan)",
        qu: "Quechua",
        rm: "Rhaeto-Romanic",
        ro: "Romanian",
        "ro-MO": "Romanian (Moldavia)",
        ru: "Russian",
        "ru-MO": "Russian (Moldavia)",
        sz: "Sami (Lappish)",
        sg: "Sango",
        sa: "Sanskrit",
        sc: "Sardinian",
        sd: "Sindhi",
        si: "Singhalese",
        sr: "Serbian",
        sk: "Slovak",
        sl: "Slovenian",
        so: "Somani",
        sb: "Sorbian",
        es: "Spanish",
        "es-AR": "Spanish (Argentina)",
        "es-BO": "Spanish (Bolivia)",
        "es-CL": "Spanish (Chile)",
        "es-CO": "Spanish (Colombia)",
        "es-CR": "Spanish (Costa Rica)",
        "es-DO": "Spanish (Dominican Republic)",
        "es-EC": "Spanish (Ecuador)",
        "es-SV": "Spanish (El Salvador)",
        "es-GT": "Spanish (Guatemala)",
        "es-HN": "Spanish (Honduras)",
        "es-MX": "Spanish (Mexico)",
        "es-NI": "Spanish (Nicaragua)",
        "es-PA": "Spanish (Panama)",
        "es-PY": "Spanish (Paraguay)",
        "es-PE": "Spanish (Peru)",
        "es-PR": "Spanish (Puerto Rico)",
        "es-ES": "Spanish (Spain)",
        "es-UY": "Spanish (Uruguay)",
        "es-VE": "Spanish (Venezuela)",
        sx: "Sutu",
        sw: "Swahili",
        sv: "Swedish",
        "sv-FI": "Swedish (Finland)",
        "sv-SV": "Swedish (Sweden)",
        ta: "Tamil",
        tt: "Tatar",
        te: "Teluga",
        th: "Thai",
        tig: "Tigre",
        ts: "Tsonga",
        tn: "Tswana",
        tr: "Turkish",
        tk: "Turkmen",
        uk: "Ukrainian",
        hsb: "Upper Sorbian",
        ur: "Urdu",
        ve: "Venda",
        vi: "Vietnamese",
        vo: "Volapuk",
        wa: "Walloon",
        cy: "Welsh",
        xh: "Xhosa",
        ji: "Yiddish",
        zu: "Zulu"
    })[t] && (this.internal.languageSettings.languageCode = t, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
        this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
    }), this.internal.languageSettings.isSubscribed = !0)), this;
}, Vt = E.API, Gt1 = Vt.getCharWidthsArray = function Gt1(e, r) {
    var n, _$i, a = (r = r || {}).font || this.internal.getFont(), o = r.fontSize || this.internal.getFontSize(), s = r.charSpace || this.internal.getCharSpace(), c = r.widths ? r.widths : a.metadata.Unicode.widths, u = c.fof ? c.fof : 1, h = r.kerning ? r.kerning : a.metadata.Unicode.kerning, l = h.fof ? h.fof : 1, f = !1 !== r.doKerning, d = 0, p = e.length, g = 0, m = c[0] || u, v = [];
    for(n = 0; n < p; n++)_$i = e.charCodeAt(n), "function" == typeof a.metadata.widthOfString ? v.push((a.metadata.widthOfGlyph(a.metadata.characterToGlyph(_$i)) + s * (1000 / o) || 0) / 1000) : (d = f && "object" === _typeofDefault.default(h[_$i]) && !isNaN(parseInt(h[_$i][g], 10)) ? h[_$i][g] / l : 0, v.push((c[_$i] || m) / u + d)), g = _$i;
    return v;
}, Yt3 = Vt.getStringUnitWidth = function Yt3(t67, e45) {
    var r = (e45 = e45 || {}).fontSize || this.internal.getFontSize(), n = e45.font || this.internal.getFont(), _$i = e45.charSpace || this.internal.getCharSpace();
    return Vt.processArabic && (t67 = Vt.processArabic(t67)), "function" == typeof n.metadata.widthOfString ? n.metadata.widthOfString(t67, r, _$i) / r : Gt1.apply(this, arguments).reduce(function(t, e) {
        return t + e;
    }, 0);
}, Jt2 = function Jt2(t, e, r, n) {
    for(var _$i = [], a = 0, o = t.length, s = 0; a !== o && s + e[a] < r;)s += e[a], a++;
    _$i.push(t.slice(0, a));
    var c = a;
    for(s = 0; a !== o;)s + e[a] > n && (_$i.push(t.slice(c, a)), s = 0, c = a), s += e[a], a++;
    return c !== a && _$i.push(t.slice(c, a)), _$i;
}, Xt1 = function Xt1(t68, e46, r) {
    r || (r = {});
    var n, _$i, a, o, s, c, u, h = [], l = [
        h
    ], f = r.textIndent || 0, d = 0, p = 0, g = t68.split(" "), m = Gt1.apply(this, [
        " ",
        r
    ])[0];
    if (c = -1 === r.lineIndent ? g[0].length + 2 : r.lineIndent || 0) {
        var v = Array(c).join(" "), b = [];
        g.map(function(t69) {
            (t69 = t69.split(/\s*\n/)).length > 1 ? b = b.concat(t69.map(function(t, e) {
                return (e && t.length ? "\n" : "") + t;
            })) : b.push(t69[0]);
        }), g = b, c = Yt3.apply(this, [
            v,
            r
        ]);
    }
    for(a = 0, o = g.length; a < o; a++){
        var _$y = 0;
        if (n = g[a], c && "\n" == n[0] && (n = n.substr(1), _$y = 1), f + d + (p = (_$i = Gt1.apply(this, [
            n,
            r
        ])).reduce(function(t, e) {
            return t + e;
        }, 0)) > e46 || _$y) {
            if (p > e46) {
                for(s = Jt2.apply(this, [
                    n,
                    _$i,
                    e46 - (f + d),
                    e46
                ]), h.push(s.shift()), h = [
                    s.pop()
                ]; s.length;)l.push([
                    s.shift()
                ]);
                p = _$i.slice(n.length - (h[0] ? h[0].length : 0)).reduce(function(t, e) {
                    return t + e;
                }, 0);
            } else h = [
                n
            ];
            l.push(h), f = p + c, d = m;
        } else h.push(n), f += d + p, d = m;
    }
    return u = c ? function u(t, e) {
        return (e ? v : "") + t.join(" ");
    } : function(t) {
        return t.join(" ");
    }, l.map(u);
}, Vt.splitTextToSize = function(t70, e, r) {
    var n, _$i = (r = r || {}).fontSize || this.internal.getFontSize(), a = (function(t) {
        if (t.widths && t.kerning) return {
            widths: t.widths,
            kerning: t.kerning
        };
        var _$e = this.internal.getFont(t.fontName, t.fontStyle);
        return _$e.metadata.Unicode ? {
            widths: _$e.metadata.Unicode.widths || {
                0: 1
            },
            kerning: _$e.metadata.Unicode.kerning || {}
        } : {
            font: _$e.metadata,
            fontSize: this.internal.getFontSize(),
            charSpace: this.internal.getCharSpace()
        };
    }).call(this, r);
    n = Array.isArray(t70) ? t70 : String(t70).split(/\r?\n/);
    var o = 1 * this.internal.scaleFactor * e / _$i;
    a.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / _$i : 0, a.lineIndent = r.lineIndent;
    var s, c, u = [];
    for(s = 0, c = n.length; s < c; s++)u = u.concat(Xt1.apply(this, [
        n[s],
        o,
        a
    ]));
    return u;
}, function(e47) {
    e47.__fontmetrics__ = e47.__fontmetrics__ || {};
    for(var r34 = "klmnopqrstuvwxyz", n94 = {}, _$i17 = {}, a69 = 0; a69 < r34.length; a69++)n94[r34[a69]] = "0123456789abcdef"[a69], _$i17["0123456789abcdef"[a69]] = r34[a69];
    var o = function o(t) {
        return "0x" + parseInt(t, 10).toString(16);
    }, s20 = e47.__fontmetrics__.compress = function(e) {
        var r, n, a, c, u = [
            "{"
        ];
        for(var h in e){
            if (r = e[h], isNaN(parseInt(h, 10)) ? n = "'" + h + "'" : (h = parseInt(h, 10), n = (n = o(h).slice(2)).slice(0, -1) + _$i17[n.slice(-1)]), "number" == typeof r) r < 0 ? (a = o(r).slice(3), c = "-") : (a = o(r).slice(2), c = ""), a = c + a.slice(0, -1) + _$i17[a.slice(-1)];
            else {
                if ("object" !== _typeofDefault.default(r)) throw new Error("Don't know what to do with value type " + _typeofDefault.default(r) + ".");
                a = s20(r);
            }
            u.push(n + a);
        }
        return u.push("}"), u.join("");
    }, c27 = e47.__fontmetrics__.uncompress = function c27(t) {
        if ("string" != typeof t) throw new Error("Invalid argument passed to uncompress.");
        for(var _$e, r, _$i, a, o = {}, s = 1, c = o, u = [], h = "", l = "", f = t.length - 1, d = 1; d < f; d += 1)"'" == (a = t[d]) ? _$e ? (_$i = _$e.join(""), _$e = void 0) : _$e = [] : _$e ? _$e.push(a) : "{" == a ? (u.push([
            c,
            _$i
        ]), c = {}, _$i = void 0) : "}" == a ? ((r = u.pop())[0][r[1]] = c, _$i = void 0, c = r[0]) : "-" == a ? s = -1 : void 0 === _$i ? n94.hasOwnProperty(a) ? (h += n94[a], _$i = parseInt(h, 16) * s, s = 1, h = "") : h += a : n94.hasOwnProperty(a) ? (l += n94[a], c[_$i] = parseInt(l, 16) * s, s = 1, _$i = void 0, l = "") : l += a;
        return o;
    }, u28 = {
        codePages: [
            "WinAnsiEncoding"
        ],
        WinAnsiEncoding: c27("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
    }, h26 = {
        Unicode: {
            Courier: u28,
            "Courier-Bold": u28,
            "Courier-BoldOblique": u28,
            "Courier-Oblique": u28,
            Helvetica: u28,
            "Helvetica-Bold": u28,
            "Helvetica-BoldOblique": u28,
            "Helvetica-Oblique": u28,
            "Times-Roman": u28,
            "Times-Bold": u28,
            "Times-BoldItalic": u28,
            "Times-Italic": u28
        }
    }, l21 = {
        Unicode: {
            "Courier-Oblique": c27("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-BoldItalic": c27("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
            "Helvetica-Bold": c27("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
            Courier: c27("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-BoldOblique": c27("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Bold": c27("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
            Symbol: c27("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
            Helvetica: c27("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
            "Helvetica-BoldOblique": c27("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
            ZapfDingbats: c27("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-Bold": c27("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Italic": c27("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
            "Times-Roman": c27("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
            "Helvetica-Oblique": c27("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
        }
    };
    e47.events.push([
        "addFont",
        function(t) {
            var _$e = t.font, r = l21.Unicode[_$e.postScriptName];
            r && (_$e.metadata.Unicode = {}, _$e.metadata.Unicode.widths = r.widths, _$e.metadata.Unicode.kerning = r.kerning);
            var n = h26.Unicode[_$e.postScriptName];
            n && (_$e.metadata.Unicode.encoding = n, _$e.encoding = n.codePages[0]);
        }
    ]);
}(E.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t71) {
    var e = function e(t) {
        for(var e48 = t.length, r = new Uint8Array(e48), n = 0; n < e48; n++)r[n] = t.charCodeAt(n);
        return r;
    };
    t71.API.events.push([
        "addFont",
        function(r35) {
            var n95 = void 0, _$i = r35.font, a = r35.instance;
            if (!_$i.isStandardFont) {
                if (void 0 === a) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + _$i.postScriptName + "').");
                if ("string" != typeof (n95 = !1 === a.existsFileInVFS(_$i.postScriptName) ? a.loadFile(_$i.postScriptName) : a.getFileFromVFS(_$i.postScriptName))) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + _$i.postScriptName + "').");
                !function(r, n) {
                    n = /^\x00\x01\x00\x00/.test(n) ? e(n) : e(u21(n)), r.metadata = t71.API.TTFFont.open(n), r.metadata.Unicode = r.metadata.Unicode || {
                        encoding: {},
                        kerning: {},
                        widths: []
                    }, r.metadata.glyIdsUsed = [
                        0
                    ];
                }(_$i, n95);
            }
        }
    ]);
}(E), /** @license
 * Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */ function(t72) {
    var e = function e() {
        return (n73.canvg ? Promise.resolve(n73.canvg) : require("3cadb2e01d2a2b1c")).catch(function(t) {
            return Promise.reject(new Error("Could not load canvg: " + t));
        }).then(function(t) {
            return t.default ? t.default : t;
        });
    };
    E.API.addSvgAsImage = function(t73, r, n, i96, o, s, c, u) {
        if (isNaN(r) || isNaN(n)) throw a60.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
        if (isNaN(i96) || isNaN(o)) throw a60.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
        var h = document.createElement("canvas");
        h.width = i96, h.height = o;
        var l = h.getContext("2d");
        l.fillStyle = "#fff", l.fillRect(0, 0, h.width, h.height);
        var f = {
            ignoreMouse: !0,
            ignoreAnimation: !0,
            ignoreDimensions: !0
        }, d = this;
        return e().then(function(e) {
            return e.fromString(l, t73, f);
        }, function() {
            return Promise.reject(new Error("Could not load canvg."));
        }).then(function(t) {
            return t.render(f);
        }).then(function() {
            d.addImage(h.toDataURL("image/jpeg", 1), r, n, i96, o, c, u);
        });
    };
}(), E.API.putTotalPages = function(t) {
    var e, r = 0;
    parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(t, "g"), r = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g"), r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
    for(var n = 1; n <= this.internal.getNumberOfPages(); n++)for(var _$i = 0; _$i < this.internal.pages[n].length; _$i++)this.internal.pages[n][_$i] = this.internal.pages[n][_$i].replace(e, r);
    return this;
}, E.API.viewerPreferences = function(e49, r) {
    var d = function d(t, e) {
        var _$r, n = !1;
        for(_$r = 0; _$r < t.length; _$r += 1)t[_$r] === e && (n = !0);
        return n;
    };
    var n96;
    e49 = e49 || {}, r = r || !1;
    var _$i, a, o, s = {
        HideToolbar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        HideMenubar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        HideWindowUI: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        FitWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        CenterWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        DisplayDocTitle: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.4
        },
        NonFullScreenPageMode: {
            defaultValue: "UseNone",
            value: "UseNone",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "UseNone",
                "UseOutlines",
                "UseThumbs",
                "UseOC"
            ],
            pdfVersion: 1.3
        },
        Direction: {
            defaultValue: "L2R",
            value: "L2R",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "L2R",
                "R2L"
            ],
            pdfVersion: 1.3
        },
        ViewArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "MediaBox",
                "CropBox",
                "TrimBox",
                "BleedBox",
                "ArtBox"
            ],
            pdfVersion: 1.4
        },
        ViewClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "MediaBox",
                "CropBox",
                "TrimBox",
                "BleedBox",
                "ArtBox"
            ],
            pdfVersion: 1.4
        },
        PrintArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "MediaBox",
                "CropBox",
                "TrimBox",
                "BleedBox",
                "ArtBox"
            ],
            pdfVersion: 1.4
        },
        PrintClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "MediaBox",
                "CropBox",
                "TrimBox",
                "BleedBox",
                "ArtBox"
            ],
            pdfVersion: 1.4
        },
        PrintScaling: {
            defaultValue: "AppDefault",
            value: "AppDefault",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "AppDefault",
                "None"
            ],
            pdfVersion: 1.6
        },
        Duplex: {
            defaultValue: "",
            value: "none",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "Simplex",
                "DuplexFlipShortEdge",
                "DuplexFlipLongEdge",
                "none"
            ],
            pdfVersion: 1.7
        },
        PickTrayByPDFSize: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.7
        },
        PrintPageRange: {
            defaultValue: "",
            value: "",
            type: "array",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7
        },
        NumCopies: {
            defaultValue: 1,
            value: 1,
            type: "integer",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7
        }
    }, c = Object.keys(s), u = [], h = 0, l = 0, f = 0;
    if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(s)), this.internal.viewerpreferences.isSubscribed = !1), n96 = this.internal.viewerpreferences.configuration, "reset" === e49 || !0 === r) {
        var p = c.length;
        for(f = 0; f < p; f += 1)n96[c[f]].value = n96[c[f]].defaultValue, n96[c[f]].explicitSet = !1;
    }
    if ("object" === _typeofDefault.default(e49)) {
        for(a in e49)if (o = e49[a], d(c, a) && void 0 !== o) {
            if ("boolean" === n96[a].type && "boolean" == typeof o) n96[a].value = o;
            else if ("name" === n96[a].type && d(n96[a].valueSet, o)) n96[a].value = o;
            else if ("integer" === n96[a].type && Number.isInteger(o)) n96[a].value = o;
            else if ("array" === n96[a].type) {
                for(h = 0; h < o.length; h += 1)if (_$i = !0, 1 === o[h].length && "number" == typeof o[h][0]) u.push(String(o[h] - 1));
                else if (o[h].length > 1) {
                    for(l = 0; l < o[h].length; l += 1)"number" != typeof o[h][l] && (_$i = !1);
                    !0 === _$i && u.push([
                        o[h][0] - 1,
                        o[h][1] - 1
                    ].join(" "));
                }
                n96[a].value = "[" + u.join(" ") + "]";
            } else n96[a].value = n96[a].defaultValue;
            n96[a].explicitSet = !0;
        }
    }
    return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
        var _$t, _$e = [];
        for(_$t in n96)!0 === n96[_$t].explicitSet && ("name" === n96[_$t].type ? _$e.push("/" + _$t + " /" + n96[_$t].value) : _$e.push("/" + _$t + " " + n96[_$t].value));
        0 !== _$e.length && this.internal.write("/ViewerPreferences\n<<\n" + _$e.join("\n") + "\n>>");
    }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n96, this;
}, /** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */ function(t74) {
    var e = function e() {
        var _$t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', e50 = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), r = unescape(encodeURIComponent(_$t)), n = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), _$i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), a = unescape(encodeURIComponent("</x:xmpmeta>")), o = r.length + n.length + _$i.length + e50.length + a.length;
        this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"), this.internal.write("stream"), this.internal.write(e50 + r + n + _$i + a), this.internal.write("endstream"), this.internal.write("endobj");
    }, r36 = function r36() {
        this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
    };
    t74.addMetadata = function(t, n) {
        return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = {
            metadata: t,
            namespaceuri: n || "http://jspdf.default.namespaceuri/"
        }, this.internal.events.subscribe("putCatalog", r36), this.internal.events.subscribe("postPutResources", e)), this;
    };
}(E.API), function(t75) {
    var e51 = t75.API, r = e51.pdfEscape16 = function r(t, e) {
        for(var r37, n = e.metadata.Unicode.widths, _$i = [
            "",
            "0",
            "00",
            "000",
            "0000"
        ], a = [
            ""
        ], o = 0, s = t.length; o < s; ++o){
            if (r37 = e.metadata.characterToGlyph(t.charCodeAt(o)), e.metadata.glyIdsUsed.push(r37), e.metadata.toUnicode[r37] = t.charCodeAt(o), -1 == n.indexOf(r37) && (n.push(r37), n.push([
                parseInt(e.metadata.widthOfGlyph(r37), 10)
            ])), "0" == r37) return a.join("");
            r37 = r37.toString(16), a.push(_$i[4 - r37.length], r37);
        }
        return a.join("");
    }, n97 = function n97(t76) {
        var e52, r, n, _$i, a, o, s;
        for(a = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", n = [], o = 0, s = (r = Object.keys(t76).sort(function(t, e) {
            return t - e;
        })).length; o < s; o++)e52 = r[o], n.length >= 100 && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar", n = []), void 0 !== t76[e52] && null !== t76[e52] && "function" == typeof t76[e52].toString && (_$i = ("0000" + t76[e52].toString(16)).slice(-4), e52 = ("0000" + (+e52).toString(16)).slice(-4), n.push("<" + e52 + "><" + _$i + ">"));
        return n.length && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar\n"), a += "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
    };
    e51.events.push([
        "putFont",
        function(e53) {
            !function(e) {
                var r = e.font, _$i = e.out, a = e.newObject, o = e.putStream;
                if (r.metadata instanceof t75.API.TTFFont && "Identity-H" === r.encoding) {
                    for(var s = r.metadata.Unicode.widths, c = r.metadata.subset.encode(r.metadata.glyIdsUsed, 1), u = "", h = 0; h < c.length; h++)u += String.fromCharCode(c[h]);
                    var l = a();
                    o({
                        data: u,
                        addLength1: !0,
                        objectId: l
                    }), _$i("endobj");
                    var f = a();
                    o({
                        data: n97(r.metadata.toUnicode),
                        addLength1: !0,
                        objectId: f
                    }), _$i("endobj");
                    var d = a();
                    _$i("<<"), _$i("/Type /FontDescriptor"), _$i("/FontName /" + F10(r.fontName)), _$i("/FontFile2 " + l + " 0 R"), _$i("/FontBBox " + t75.API.PDFObject.convert(r.metadata.bbox)), _$i("/Flags " + r.metadata.flags), _$i("/StemV " + r.metadata.stemV), _$i("/ItalicAngle " + r.metadata.italicAngle), _$i("/Ascent " + r.metadata.ascender), _$i("/Descent " + r.metadata.decender), _$i("/CapHeight " + r.metadata.capHeight), _$i(">>"), _$i("endobj");
                    var p = a();
                    _$i("<<"), _$i("/Type /Font"), _$i("/BaseFont /" + F10(r.fontName)), _$i("/FontDescriptor " + d + " 0 R"), _$i("/W " + t75.API.PDFObject.convert(s)), _$i("/CIDToGIDMap /Identity"), _$i("/DW 1000"), _$i("/Subtype /CIDFontType2"), _$i("/CIDSystemInfo"), _$i("<<"), _$i("/Supplement 0"), _$i("/Registry (Adobe)"), _$i("/Ordering (" + r.encoding + ")"), _$i(">>"), _$i(">>"), _$i("endobj"), r.objectNumber = a(), _$i("<<"), _$i("/Type /Font"), _$i("/Subtype /Type0"), _$i("/ToUnicode " + f + " 0 R"), _$i("/BaseFont /" + F10(r.fontName)), _$i("/Encoding /" + r.encoding), _$i("/DescendantFonts [" + p + " 0 R]"), _$i(">>"), _$i("endobj"), r.isAlreadyPutted = !0;
                }
            }(e53);
        }
    ]);
    e51.events.push([
        "putFont",
        function(e54) {
            !function(e) {
                var r = e.font, _$i = e.out, a = e.newObject, o = e.putStream;
                if (r.metadata instanceof t75.API.TTFFont && "WinAnsiEncoding" === r.encoding) {
                    for(var s = r.metadata.rawData, c = "", u = 0; u < s.length; u++)c += String.fromCharCode(s[u]);
                    var h = a();
                    o({
                        data: c,
                        addLength1: !0,
                        objectId: h
                    }), _$i("endobj");
                    var l = a();
                    o({
                        data: n97(r.metadata.toUnicode),
                        addLength1: !0,
                        objectId: l
                    }), _$i("endobj");
                    var f = a();
                    _$i("<<"), _$i("/Descent " + r.metadata.decender), _$i("/CapHeight " + r.metadata.capHeight), _$i("/StemV " + r.metadata.stemV), _$i("/Type /FontDescriptor"), _$i("/FontFile2 " + h + " 0 R"), _$i("/Flags 96"), _$i("/FontBBox " + t75.API.PDFObject.convert(r.metadata.bbox)), _$i("/FontName /" + F10(r.fontName)), _$i("/ItalicAngle " + r.metadata.italicAngle), _$i("/Ascent " + r.metadata.ascender), _$i(">>"), _$i("endobj"), r.objectNumber = a();
                    for(var d = 0; d < r.metadata.hmtx.widths.length; d++)r.metadata.hmtx.widths[d] = parseInt(r.metadata.hmtx.widths[d] * (1000 / r.metadata.head.unitsPerEm));
                    _$i("<</Subtype/TrueType/Type/Font/ToUnicode " + l + " 0 R/BaseFont/" + F10(r.fontName) + "/FontDescriptor " + f + " 0 R/Encoding/" + r.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t75.API.PDFObject.convert(r.metadata.hmtx.widths) + ">>"), _$i("endobj"), r.isAlreadyPutted = !0;
                }
            }(e54);
        }
    ]);
    var _$i18 = function _$i18(t77) {
        var e, n = t77.text || "", _$i = t77.x, a = t77.y, o = t77.options || {}, s = t77.mutex || {}, c = s.pdfEscape, u = s.activeFontKey, h = s.fonts, l = u, f = "", d = 0, p = "", g = h[l].encoding;
        if ("Identity-H" !== h[l].encoding) return {
            text: n,
            x: _$i,
            y: a,
            options: o,
            mutex: s
        };
        for(p = n, l = u, Array.isArray(n) && (p = n[0]), d = 0; d < p.length; d += 1)h[l].metadata.hasOwnProperty("cmap") && (e = h[l].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]), e || p[d].charCodeAt(0) < 256 && h[l].metadata.hasOwnProperty("Unicode") ? f += p[d] : f += "";
        var m = "";
        return parseInt(l.slice(1)) < 14 || "WinAnsiEncoding" === g ? m = c(f, l).split("").map(function(t) {
            return t.charCodeAt(0).toString(16);
        }).join("") : "Identity-H" === g && (m = r(f, h[l])), s.isHex = !0, {
            text: m,
            x: _$i,
            y: a,
            options: o,
            mutex: s
        };
    };
    e51.events.push([
        "postProcessText",
        function(t) {
            var e = t.text || "", r = [], n = {
                text: e,
                x: t.x,
                y: t.y,
                options: t.options,
                mutex: t.mutex
            };
            if (Array.isArray(e)) {
                var a = 0;
                for(a = 0; a < e.length; a += 1)Array.isArray(e[a]) && 3 === e[a].length ? r.push([
                    _$i18(Object.assign({}, n, {
                        text: e[a][0]
                    })).text,
                    e[a][1],
                    e[a][2]
                ]) : r.push(_$i18(Object.assign({}, n, {
                    text: e[a]
                })).text);
                t.text = r;
            } else t.text = _$i18(Object.assign({}, n, {
                text: e
            })).text;
        }
    ]);
}(E), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function(t78) {
    var e = function e() {
        return void 0 === this.internal.vFS && (this.internal.vFS = {}), !0;
    };
    t78.existsFileInVFS = function(t) {
        return e.call(this), void 0 !== this.internal.vFS[t];
    }, t78.addFileToVFS = function(t, r) {
        return e.call(this), this.internal.vFS[t] = r, this;
    }, t78.getFileFromVFS = function(t) {
        return e.call(this), void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null;
    };
}(E.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */ function(t79) {
    t79.__bidiEngine__ = t79.prototype.__bidiEngine__ = function(t80) {
        var r39, n98, _$i19, a70, o58, s21, c28, u29 = e55, h27 = [
            [
                0,
                3,
                0,
                1,
                0,
                0,
                0
            ],
            [
                0,
                3,
                0,
                1,
                2,
                2,
                0
            ],
            [
                0,
                3,
                0,
                17,
                2,
                0,
                1
            ],
            [
                0,
                3,
                5,
                5,
                4,
                1,
                0
            ],
            [
                0,
                3,
                21,
                21,
                4,
                0,
                1
            ],
            [
                0,
                3,
                5,
                5,
                4,
                2,
                0
            ]
        ], l22 = [
            [
                2,
                0,
                1,
                1,
                0,
                1,
                0
            ],
            [
                2,
                0,
                1,
                1,
                0,
                2,
                0
            ],
            [
                2,
                0,
                2,
                1,
                3,
                2,
                0
            ],
            [
                2,
                0,
                2,
                33,
                3,
                1,
                1
            ]
        ], f22 = {
            L: 0,
            R: 1,
            EN: 2,
            AN: 3,
            N: 4,
            B: 5,
            S: 6
        }, d15 = {
            0: 0,
            5: 1,
            6: 2,
            7: 3,
            32: 4,
            251: 5,
            254: 6,
            255: 7
        }, p17 = [
            "(",
            ")",
            "(",
            "<",
            ">",
            "<",
            "[",
            "]",
            "[",
            "{",
            "}",
            "{",
            "«",
            "»",
            "«",
            "‹",
            "›",
            "‹",
            "⁅",
            "⁆",
            "⁅",
            "⁽",
            "⁾",
            "⁽",
            "₍",
            "₎",
            "₍",
            "≤",
            "≥",
            "≤",
            "〈",
            "〉",
            "〈",
            "﹙",
            "﹚",
            "﹙",
            "﹛",
            "﹜",
            "﹛",
            "﹝",
            "﹞",
            "﹝",
            "﹤",
            "﹥",
            "﹤"
        ], g14 = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), m = !1, v = 0;
        this.__bidiEngine__ = {};
        var b = function b(t) {
            var e = t.charCodeAt(), r = e >> 8, n = d15[r];
            return void 0 !== n ? u29[256 * n + (255 & e)] : 252 === r || 253 === r ? "AL" : g14.test(r) ? "L" : 8 === r ? "R" : "N";
        }, _$y = function _$y(t) {
            for(var e, r = 0; r < t.length; r++){
                if ("L" === (e = b(t.charAt(r)))) return !1;
                if ("R" === e) return !0;
            }
            return !1;
        }, w = function w(t, e, o, s) {
            var c, u, h, l, f = e[s];
            switch(f){
                case "L":
                case "R":
                    m = !1;
                    break;
                case "N":
                case "AN":
                    break;
                case "EN":
                    m && (f = "AN");
                    break;
                case "AL":
                    m = !0, f = "R";
                    break;
                case "WS":
                    f = "N";
                    break;
                case "CS":
                    s < 1 || s + 1 >= e.length || "EN" !== (c = o[s - 1]) && "AN" !== c || "EN" !== (u = e[s + 1]) && "AN" !== u ? f = "N" : m && (u = "AN"), f = u === c ? u : "N";
                    break;
                case "ES":
                    f = "EN" === (c = s > 0 ? o[s - 1] : "B") && s + 1 < e.length && "EN" === e[s + 1] ? "EN" : "N";
                    break;
                case "ET":
                    if (s > 0 && "EN" === o[s - 1]) {
                        f = "EN";
                        break;
                    }
                    if (m) {
                        f = "N";
                        break;
                    }
                    for(h = s + 1, l = e.length; h < l && "ET" === e[h];)h++;
                    f = h < l && "EN" === e[h] ? "EN" : "N";
                    break;
                case "NSM":
                    if (_$i19 && !a70) {
                        for(l = e.length, h = s + 1; h < l && "NSM" === e[h];)h++;
                        if (h < l) {
                            var d = t[s], p = d >= 1425 && d <= 2303 || 64286 === d;
                            if (c = e[h], p && ("R" === c || "AL" === c)) {
                                f = "R";
                                break;
                            }
                        }
                    }
                    f = s < 1 || "B" === (c = e[s - 1]) ? "N" : o[s - 1];
                    break;
                case "B":
                    m = !1, r39 = !0, f = v;
                    break;
                case "S":
                    n98 = !0, f = "N";
                    break;
                case "LRE":
                case "RLE":
                case "LRO":
                case "RLO":
                case "PDF":
                    m = !1;
                    break;
                case "BN":
                    f = "N";
            }
            return f;
        }, N = function N(t, e, r) {
            var n = t.split("");
            return r && L(n, r, {
                hiLevel: v
            }), n.reverse(), e && e.reverse(), n.join("");
        }, L = function L(t81, e56, i97) {
            var a, o, s, c, u, d = -1, p = t81.length, g = 0, _$y = [], N = v ? l22 : h27, L7 = [];
            for(m = !1, r39 = !1, n98 = !1, o = 0; o < p; o++)L7[o] = b(t81[o]);
            for(s = 0; s < p; s++){
                if (u = g, _$y[s] = w(t81, L7, _$y, s), a = 240 & (g = N[u][f22[_$y[s]]]), g &= 15, e56[s] = c = N[g][5], a > 0) {
                    if (16 === a) {
                        for(o = d; o < s; o++)e56[o] = 1;
                        d = -1;
                    } else d = -1;
                }
                if (N[g][6]) -1 === d && (d = s);
                else if (d > -1) {
                    for(o = d; o < s; o++)e56[o] = c;
                    d = -1;
                }
                "B" === L7[s] && (e56[s] = 0), i97.hiLevel |= c;
            }
            n98 && function(t, e, r) {
                for(var n = 0; n < r; n++)if ("S" === t[n]) {
                    e[n] = v;
                    for(var _$i = n - 1; _$i >= 0 && "WS" === t[_$i]; _$i--)e[_$i] = v;
                }
            }(L7, e56, p);
        }, A = function A(t, e, n, i98, a) {
            if (!(a.hiLevel < t)) {
                if (1 === t && 1 === v && !r39) return e.reverse(), void (n && n.reverse());
                for(var o, s, c, u, h = e.length, l = 0; l < h;){
                    if (i98[l] >= t) {
                        for(c = l + 1; c < h && i98[c] >= t;)c++;
                        for(u = l, s = c - 1; u < s; u++, s--)o = e[u], e[u] = e[s], e[s] = o, n && (o = n[u], n[u] = n[s], n[s] = o);
                        l = c;
                    }
                    l++;
                }
            }
        }, x = function x(t82, e57, r40) {
            var n99 = t82.split(""), _$i20 = {
                hiLevel: v
            };
            return r40 || (r40 = []), L(n99, r40, _$i20), function(t, e, r) {
                if (0 !== r.hiLevel && c28) for(var n, _$i = 0; _$i < t.length; _$i++)1 === e[_$i] && (n = p17.indexOf(t[_$i])) >= 0 && (t[_$i] = p17[n + 1]);
            }(n99, r40, _$i20), A(2, n99, e57, r40, _$i20), A(1, n99, e57, r40, _$i20), n99.join("");
        };
        return this.__bidiEngine__.doBidiReorder = function(t83, e58, r) {
            if (function(t, e) {
                if (e) for(var _$r = 0; _$r < t.length; _$r++)e[_$r] = _$r;
                void 0 === a70 && (a70 = _$y(t)), void 0 === s21 && (s21 = _$y(t));
            }(t83, e58), _$i19 || !o58 || s21) {
                if (_$i19 && o58 && a70 ^ s21) v = a70 ? 1 : 0, t83 = N(t83, e58, r);
                else if (!_$i19 && o58 && s21) v = a70 ? 1 : 0, t83 = x(t83, e58, r), t83 = N(t83, e58);
                else if (!_$i19 || a70 || o58 || s21) {
                    if (_$i19 && !o58 && a70 ^ s21) t83 = N(t83, e58), a70 ? (v = 0, t83 = x(t83, e58, r)) : (v = 1, t83 = x(t83, e58, r), t83 = N(t83, e58));
                    else if (_$i19 && a70 && !o58 && s21) v = 1, t83 = x(t83, e58, r), t83 = N(t83, e58);
                    else if (!_$i19 && !o58 && a70 ^ s21) {
                        var n = c28;
                        a70 ? (v = 1, t83 = x(t83, e58, r), v = 0, c28 = !1, t83 = x(t83, e58, r), c28 = n) : (v = 0, t83 = x(t83, e58, r), t83 = N(t83, e58), v = 1, c28 = !1, t83 = x(t83, e58, r), c28 = n, t83 = N(t83, e58));
                    }
                } else v = 0, t83 = x(t83, e58, r);
            } else v = a70 ? 1 : 0, t83 = x(t83, e58, r);
            return t83;
        }, this.__bidiEngine__.setOptions = function(t) {
            t && (_$i19 = t.isInputVisual, o58 = t.isOutputVisual, a70 = t.isInputRtl, s21 = t.isOutputRtl, c28 = t.isSymmetricSwapping);
        }, this.__bidiEngine__.setOptions(t80), this.__bidiEngine__;
    };
    var e55 = [
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "S",
        "B",
        "S",
        "WS",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "B",
        "B",
        "S",
        "WS",
        "N",
        "N",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ES",
        "CS",
        "ES",
        "CS",
        "CS",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "CS",
        "N",
        "ET",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "L",
        "N",
        "N",
        "BN",
        "N",
        "N",
        "ET",
        "ET",
        "EN",
        "EN",
        "N",
        "L",
        "N",
        "N",
        "N",
        "EN",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ET",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "R",
        "NSM",
        "R",
        "NSM",
        "NSM",
        "R",
        "NSM",
        "NSM",
        "R",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "N",
        "N",
        "AL",
        "ET",
        "ET",
        "AL",
        "CS",
        "AL",
        "N",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "ET",
        "AN",
        "AN",
        "AL",
        "AL",
        "AL",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AN",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "AL",
        "AL",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "R",
        "R",
        "N",
        "N",
        "N",
        "N",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "BN",
        "BN",
        "BN",
        "L",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "WS",
        "B",
        "LRE",
        "RLE",
        "PDF",
        "LRO",
        "RLO",
        "CS",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "WS",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "N",
        "LRI",
        "RLI",
        "FSI",
        "PDI",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "EN",
        "L",
        "N",
        "N",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "ES",
        "ES",
        "N",
        "N",
        "N",
        "L",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "ES",
        "ES",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "NSM",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "ES",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "R",
        "N",
        "R",
        "R",
        "N",
        "R",
        "R",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "CS",
        "N",
        "CS",
        "N",
        "N",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ET",
        "N",
        "N",
        "ES",
        "ES",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "N",
        "BN",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ES",
        "CS",
        "ES",
        "CS",
        "CS",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N"
    ], r38 = new t79.__bidiEngine__({
        isInputVisual: !0
    });
    t79.API.events.push([
        "postProcessText",
        function(t) {
            var e = t.text, n = (t.x, t.y, t.options || {}), _$i = (t.mutex, n.lang, []);
            if (n.isInputVisual = "boolean" != typeof n.isInputVisual || n.isInputVisual, r38.setOptions(n), "[object Array]" === Object.prototype.toString.call(e)) {
                var a = 0;
                for(_$i = [], a = 0; a < e.length; a += 1)"[object Array]" === Object.prototype.toString.call(e[a]) ? _$i.push([
                    r38.doBidiReorder(e[a][0]),
                    e[a][1],
                    e[a][2]
                ]) : _$i.push([
                    r38.doBidiReorder(e[a])
                ]);
                t.text = _$i;
            } else t.text = r38.doBidiReorder(e);
            r38.setOptions({
                isInputVisual: !0
            });
        }
    ]);
}(E), E.API.TTFFont = function() {
    var _$t = function _$t(t) {
        var e;
        if (this.rawData = t, e = this.contents = new ne1(t), this.contents.pos = 4, "ttcf" === e.readString(4)) throw new Error("TTCF not supported.");
        e.pos = 0, this.parse(), this.subset = new Le1(this), this.registerTTF();
    };
    return _$t.open = function(e) {
        return new _$t(e);
    }, _$t.prototype.parse = function() {
        return this.directory = new ie1(this.contents), this.head = new se1(this), this.name = new pe1(this), this.cmap = new ue1(this), this.toUnicode = {}, this.hhea = new he1(this), this.maxp = new ge1(this), this.hmtx = new me1(this), this.post = new fe1(this), this.os2 = new le1(this), this.loca = new Ne1(this), this.glyf = new be1(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [
            this.head.xMin,
            this.head.yMin,
            this.head.xMax,
            this.head.yMax
        ];
    }, _$t.prototype.registerTTF = function() {
        var _$t, e59, r41, n100, _$i21;
        if (this.scaleFactor = 1000 / this.head.unitsPerEm, this.bbox = (function() {
            var e, r, n, _$i;
            for(_$i = [], e = 0, r = (n = this.bbox).length; e < r; e++)_$t = n[e], _$i.push(Math.round(_$t * this.scaleFactor));
            return _$i;
        }).call(this), this.stemV = 0, this.post.exists ? (r41 = 255 & (n100 = this.post.italic_angle), 0 != (32768 & (e59 = n100 >> 16)) && (e59 = -(1 + (65535 ^ e59))), this.italicAngle = +(e59 + "." + r41)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (_$i21 = this.familyClass) || 2 === _$i21 || 3 === _$i21 || 4 === _$i21 || 5 === _$i21 || 7 === _$i21, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
    }, _$t.prototype.characterToGlyph = function(t) {
        var e;
        return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0;
    }, _$t.prototype.widthOfGlyph = function(t) {
        var e;
        return e = 1000 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * e;
    }, _$t.prototype.widthOfString = function(t, e, r) {
        var n, _$i, a, o;
        for(a = 0, _$i = 0, o = (t = "" + t).length; 0 <= o ? _$i < o : _$i > o; _$i = 0 <= o ? ++_$i : --_$i)n = t.charCodeAt(_$i), a += this.widthOfGlyph(this.characterToGlyph(n)) + r * (1000 / e) || 0;
        return a * (e / 1000);
    }, _$t.prototype.lineHeight = function(t, e) {
        var r;
        return null == e && (e = !1), r = e ? this.lineGap : 0, (this.ascender + r - this.decender) / 1000 * t;
    }, _$t;
}();
var re1, ne1 = function() {
    var _$t = function _$t(t) {
        this.data = null != t ? t : [], this.pos = 0, this.length = this.data.length;
    };
    return _$t.prototype.readByte = function() {
        return this.data[this.pos++];
    }, _$t.prototype.writeByte = function(t) {
        return this.data[this.pos++] = t;
    }, _$t.prototype.readUInt32 = function() {
        return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
    }, _$t.prototype.writeUInt32 = function(t) {
        return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
    }, _$t.prototype.readInt32 = function() {
        var _$t;
        return (_$t = this.readUInt32()) >= 2147483648 ? _$t - 4294967296 : _$t;
    }, _$t.prototype.writeInt32 = function(t) {
        return t < 0 && (t += 4294967296), this.writeUInt32(t);
    }, _$t.prototype.readUInt16 = function() {
        return this.readByte() << 8 | this.readByte();
    }, _$t.prototype.writeUInt16 = function(t) {
        return this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
    }, _$t.prototype.readInt16 = function() {
        var _$t;
        return (_$t = this.readUInt16()) >= 32768 ? _$t - 65536 : _$t;
    }, _$t.prototype.writeInt16 = function(t) {
        return t < 0 && (t += 65536), this.writeUInt16(t);
    }, _$t.prototype.readString = function(t) {
        var e, r;
        for(r = [], e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e)r[e] = String.fromCharCode(this.readByte());
        return r.join("");
    }, _$t.prototype.writeString = function(t) {
        var e, r, n;
        for(n = [], e = 0, r = t.length; 0 <= r ? e < r : e > r; e = 0 <= r ? ++e : --e)n.push(this.writeByte(t.charCodeAt(e)));
        return n;
    }, _$t.prototype.readShort = function() {
        return this.readInt16();
    }, _$t.prototype.writeShort = function(t) {
        return this.writeInt16(t);
    }, _$t.prototype.readLongLong = function() {
        var _$t, e, r, n, _$i, a, o, s;
        return _$t = this.readByte(), e = this.readByte(), r = this.readByte(), n = this.readByte(), _$i = this.readByte(), a = this.readByte(), o = this.readByte(), s = this.readByte(), 128 & _$t ? -1 * (72057594037927940 * (255 ^ _$t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ r) + 4294967296 * (255 ^ n) + 16777216 * (255 ^ _$i) + 65536 * (255 ^ a) + 256 * (255 ^ o) + (255 ^ s) + 1) : 72057594037927940 * _$t + 281474976710656 * e + 1099511627776 * r + 4294967296 * n + 16777216 * _$i + 65536 * a + 256 * o + s;
    }, _$t.prototype.writeLongLong = function(t) {
        var e, r;
        return e = Math.floor(t / 4294967296), r = 4294967295 & t, this.writeByte(e >> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e), this.writeByte(r >> 24 & 255), this.writeByte(r >> 16 & 255), this.writeByte(r >> 8 & 255), this.writeByte(255 & r);
    }, _$t.prototype.readInt = function() {
        return this.readInt32();
    }, _$t.prototype.writeInt = function(t) {
        return this.writeInt32(t);
    }, _$t.prototype.read = function(t) {
        var e, r;
        for(e = [], r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r)e.push(this.readByte());
        return e;
    }, _$t.prototype.write = function(t) {
        var e, r, n, _$i;
        for(_$i = [], r = 0, n = t.length; r < n; r++)e = t[r], _$i.push(this.writeByte(e));
        return _$i;
    }, _$t;
}(), ie1 = function() {
    var e = function e(t) {
        var e60, r, n;
        for(this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {}, r = 0, n = this.tableCount; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r)e60 = {
            tag: t.readString(4),
            checksum: t.readInt(),
            offset: t.readInt(),
            length: t.readInt()
        }, this.tables[e60.tag] = e60;
    };
    var _$t;
    return e.prototype.encode = function(e) {
        var r, n, _$i, a, o, s, c, u, h, l, f, d, p;
        for(p in f = Object.keys(e).length, s = Math.log(2), h = 16 * Math.floor(Math.log(f) / s), a = Math.floor(h / s), u = 16 * f - h, (n = new ne1).writeInt(this.scalarType), n.writeShort(f), n.writeShort(h), n.writeShort(a), n.writeShort(u), _$i = 16 * f, c = n.pos + _$i, o = null, d = [], e)for(l = e[p], n.writeString(p), n.writeInt(_$t(l)), n.writeInt(c), n.writeInt(l.length), d = d.concat(l), "head" === p && (o = c), c += l.length; c % 4;)d.push(0), c++;
        return n.write(d), r = 2981146554 - _$t(n.data), n.pos = o + 8, n.writeUInt32(r), n.data;
    }, _$t = function _$t(t) {
        var e, r, n, _$i;
        for(t = ve1.call(t); t.length % 4;)t.push(0);
        for(n = new ne1(t), r = 0, e = 0, _$i = t.length; e < _$i; e = e += 4)r += n.readUInt32();
        return 4294967295 & r;
    }, e;
}(), ae1 = {}.hasOwnProperty, oe1 = function oe1(t, e) {
    var n = function n() {
        this.constructor = t;
    };
    for(var r in e)ae1.call(e, r) && (t[r] = e[r]);
    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
};
re1 = function() {
    var _$t = function _$t(t) {
        var e;
        this.file = t, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents));
    };
    return _$t.prototype.parse = function() {}, _$t.prototype.encode = function() {}, _$t.prototype.raw = function() {
        return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
    }, _$t;
}();
var se1 = function(t84) {
    function e() {
        return e.__super__.constructor.apply(this, arguments);
    }
    return oe1(e, re1), e.prototype.tag = "head", e.prototype.parse = function(t) {
        return t.pos = this.offset, this.version = t.readInt(), this.revision = t.readInt(), this.checkSumAdjustment = t.readInt(), this.magicNumber = t.readInt(), this.flags = t.readShort(), this.unitsPerEm = t.readShort(), this.created = t.readLongLong(), this.modified = t.readLongLong(), this.xMin = t.readShort(), this.yMin = t.readShort(), this.xMax = t.readShort(), this.yMax = t.readShort(), this.macStyle = t.readShort(), this.lowestRecPPEM = t.readShort(), this.fontDirectionHint = t.readShort(), this.indexToLocFormat = t.readShort(), this.glyphDataFormat = t.readShort();
    }, e.prototype.encode = function(t) {
        var _$e;
        return (_$e = new ne1).writeInt(this.version), _$e.writeInt(this.revision), _$e.writeInt(this.checkSumAdjustment), _$e.writeInt(this.magicNumber), _$e.writeShort(this.flags), _$e.writeShort(this.unitsPerEm), _$e.writeLongLong(this.created), _$e.writeLongLong(this.modified), _$e.writeShort(this.xMin), _$e.writeShort(this.yMin), _$e.writeShort(this.xMax), _$e.writeShort(this.yMax), _$e.writeShort(this.macStyle), _$e.writeShort(this.lowestRecPPEM), _$e.writeShort(this.fontDirectionHint), _$e.writeShort(t), _$e.writeShort(this.glyphDataFormat), _$e.data;
    }, e;
}(), ce1 = function() {
    var _$t = function _$t(t, e) {
        var r42, n, _$i, a, o, s, c, u, h, l, f, d, p, g, m, v, b;
        switch(this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = e + t.readInt(), h = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format){
            case 0:
                for(s = 0; s < 256; ++s)this.codeMap[s] = t.readByte();
                break;
            case 4:
                for(f = t.readUInt16(), l = f / 2, t.pos += 6, _$i = function() {
                    var _$e, r;
                    for(r = [], s = _$e = 0; 0 <= l ? _$e < l : _$e > l; s = 0 <= l ? ++_$e : --_$e)r.push(t.readUInt16());
                    return r;
                }(), t.pos += 2, p = function() {
                    var _$e, r;
                    for(r = [], s = _$e = 0; 0 <= l ? _$e < l : _$e > l; s = 0 <= l ? ++_$e : --_$e)r.push(t.readUInt16());
                    return r;
                }(), c = function() {
                    var _$e, r;
                    for(r = [], s = _$e = 0; 0 <= l ? _$e < l : _$e > l; s = 0 <= l ? ++_$e : --_$e)r.push(t.readUInt16());
                    return r;
                }(), u = function() {
                    var _$e, r;
                    for(r = [], s = _$e = 0; 0 <= l ? _$e < l : _$e > l; s = 0 <= l ? ++_$e : --_$e)r.push(t.readUInt16());
                    return r;
                }(), n = (this.length - t.pos + this.offset) / 2, o = function() {
                    var _$e, r;
                    for(r = [], s = _$e = 0; 0 <= n ? _$e < n : _$e > n; s = 0 <= n ? ++_$e : --_$e)r.push(t.readUInt16());
                    return r;
                }(), s = m = 0, b = _$i.length; m < b; s = ++m)for(g = _$i[s], r42 = v = d = p[s]; d <= g ? v <= g : v >= g; r42 = d <= g ? ++v : --v)0 === u[s] ? a = r42 + c[s] : 0 !== (a = o[u[s] / 2 + (r42 - d) - (l - s)] || 0) && (a += c[s]), this.codeMap[r42] = 65535 & a;
        }
        t.pos = h;
    };
    return _$t.encode = function(t85, e61) {
        var r, n, _$i, a, o, s, c, u, h, l, f, d, p, g, m, v, b, _$y, w, N, L, A, x, S, _, P, k, _$I, F, C, _$j, O, B, M, _$E, q, D, R, T, U, z, H, W, V, G, Y;
        switch(_$I = new ne1, a = Object.keys(t85).sort(function(t, e) {
            return t - e;
        }), e61){
            case "macroman":
                for(p = 0, g = function() {
                    var _$t = [];
                    for(d = 0; d < 256; ++d)_$t.push(0);
                    return _$t;
                }(), v = {
                    0: 0
                }, _$i = {}, F = 0, B = a.length; F < B; F++)null == v[W = t85[n = a[F]]] && (v[W] = ++p), _$i[n] = {
                    old: t85[n],
                    new: v[t85[n]]
                }, g[n] = v[t85[n]];
                return _$I.writeUInt16(1), _$I.writeUInt16(0), _$I.writeUInt32(12), _$I.writeUInt16(0), _$I.writeUInt16(262), _$I.writeUInt16(0), _$I.write(g), {
                    charMap: _$i,
                    subtable: _$I.data,
                    maxGlyphID: p + 1
                };
            case "unicode":
                for(P = [], h = [], b = 0, v = {}, r = {}, m = c = null, C = 0, M = a.length; C < M; C++)null == v[w = t85[n = a[C]]] && (v[w] = ++b), r[n] = {
                    old: w,
                    new: v[w]
                }, o = v[w] - n, null != m && o === c || (m && h.push(m), P.push(n), c = o), m = n;
                for(m && h.push(m), h.push(65535), P.push(65535), S = 2 * (x = P.length), A = 2 * Math.pow(Math.log(x) / Math.LN2, 2), l = Math.log(A / 2) / Math.LN2, L = 2 * x - A, s = [], N = [], f = [], d = _$j = 0, _$E = P.length; _$j < _$E; d = ++_$j){
                    if (_ = P[d], u = h[d], 65535 === _) {
                        s.push(0), N.push(0);
                        break;
                    }
                    if (_ - (k = r[_].new) >= 32768) for(s.push(0), N.push(2 * (f.length + x - d)), n = O = _; _ <= u ? O <= u : O >= u; n = _ <= u ? ++O : --O)f.push(r[n].new);
                    else s.push(k - _), N.push(0);
                }
                for(_$I.writeUInt16(3), _$I.writeUInt16(1), _$I.writeUInt32(12), _$I.writeUInt16(4), _$I.writeUInt16(16 + 8 * x + 2 * f.length), _$I.writeUInt16(0), _$I.writeUInt16(S), _$I.writeUInt16(A), _$I.writeUInt16(l), _$I.writeUInt16(L), z = 0, q = h.length; z < q; z++)n = h[z], _$I.writeUInt16(n);
                for(_$I.writeUInt16(0), H = 0, D = P.length; H < D; H++)n = P[H], _$I.writeUInt16(n);
                for(V = 0, R = s.length; V < R; V++)o = s[V], _$I.writeUInt16(o);
                for(G = 0, T = N.length; G < T; G++)_$y = N[G], _$I.writeUInt16(_$y);
                for(Y = 0, U = f.length; Y < U; Y++)p = f[Y], _$I.writeUInt16(p);
                return {
                    charMap: r,
                    subtable: _$I.data,
                    maxGlyphID: b + 1
                };
        }
    }, _$t;
}(), ue1 = function(t86) {
    function e62() {
        return e62.__super__.constructor.apply(this, arguments);
    }
    return oe1(e62, re1), e62.prototype.tag = "cmap", e62.prototype.parse = function(t) {
        var _$e, r, n;
        for(t.pos = this.offset, this.version = t.readUInt16(), n = t.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r)_$e = new ce1(t, this.offset), this.tables.push(_$e), _$e.isUnicode && null == this.unicode && (this.unicode = _$e);
        return !0;
    }, e62.encode = function(t, e) {
        var r, n;
        return null == e && (e = "macroman"), r = ce1.encode(t, e), (n = new ne1).writeUInt16(0), n.writeUInt16(1), r.table = n.data.concat(r.subtable), r;
    }, e62;
}(), he1 = function(t87) {
    function e() {
        return e.__super__.constructor.apply(this, arguments);
    }
    return oe1(e, re1), e.prototype.tag = "hhea", e.prototype.parse = function(t) {
        return t.pos = this.offset, this.version = t.readInt(), this.ascender = t.readShort(), this.decender = t.readShort(), this.lineGap = t.readShort(), this.advanceWidthMax = t.readShort(), this.minLeftSideBearing = t.readShort(), this.minRightSideBearing = t.readShort(), this.xMaxExtent = t.readShort(), this.caretSlopeRise = t.readShort(), this.caretSlopeRun = t.readShort(), this.caretOffset = t.readShort(), t.pos += 8, this.metricDataFormat = t.readShort(), this.numberOfMetrics = t.readUInt16();
    }, e;
}(), le1 = function(t88) {
    function e() {
        return e.__super__.constructor.apply(this, arguments);
    }
    return oe1(e, re1), e.prototype.tag = "OS/2", e.prototype.parse = function(t) {
        if (t.pos = this.offset, this.version = t.readUInt16(), this.averageCharWidth = t.readShort(), this.weightClass = t.readUInt16(), this.widthClass = t.readUInt16(), this.type = t.readShort(), this.ySubscriptXSize = t.readShort(), this.ySubscriptYSize = t.readShort(), this.ySubscriptXOffset = t.readShort(), this.ySubscriptYOffset = t.readShort(), this.ySuperscriptXSize = t.readShort(), this.ySuperscriptYSize = t.readShort(), this.ySuperscriptXOffset = t.readShort(), this.ySuperscriptYOffset = t.readShort(), this.yStrikeoutSize = t.readShort(), this.yStrikeoutPosition = t.readShort(), this.familyClass = t.readShort(), this.panose = function() {
            var _$e, r;
            for(r = [], _$e = 0; _$e < 10; ++_$e)r.push(t.readByte());
            return r;
        }(), this.charRange = function() {
            var _$e, r;
            for(r = [], _$e = 0; _$e < 4; ++_$e)r.push(t.readInt());
            return r;
        }(), this.vendorID = t.readString(4), this.selection = t.readShort(), this.firstCharIndex = t.readShort(), this.lastCharIndex = t.readShort(), this.version > 0 && (this.ascent = t.readShort(), this.descent = t.readShort(), this.lineGap = t.readShort(), this.winAscent = t.readShort(), this.winDescent = t.readShort(), this.codePageRange = function() {
            var _$e, r;
            for(r = [], _$e = 0; _$e < 2; _$e = ++_$e)r.push(t.readInt());
            return r;
        }(), this.version > 1)) return this.xHeight = t.readShort(), this.capHeight = t.readShort(), this.defaultChar = t.readShort(), this.breakChar = t.readShort(), this.maxContext = t.readShort();
    }, e;
}(), fe1 = function(t89) {
    function e() {
        return e.__super__.constructor.apply(this, arguments);
    }
    return oe1(e, re1), e.prototype.tag = "post", e.prototype.parse = function(t) {
        var _$e4, r43, n101;
        switch(t.pos = this.offset, this.format = t.readInt(), this.italicAngle = t.readInt(), this.underlinePosition = t.readShort(), this.underlineThickness = t.readShort(), this.isFixedPitch = t.readInt(), this.minMemType42 = t.readInt(), this.maxMemType42 = t.readInt(), this.minMemType1 = t.readInt(), this.maxMemType1 = t.readInt(), this.format){
            case 65536:
                break;
            case 131072:
                var _$i;
                for(r43 = t.readUInt16(), this.glyphNameIndex = [], _$i = 0; 0 <= r43 ? _$i < r43 : _$i > r43; _$i = 0 <= r43 ? ++_$i : --_$i)this.glyphNameIndex.push(t.readUInt16());
                for(this.names = [], n101 = []; t.pos < this.offset + this.length;)_$e4 = t.readByte(), n101.push(this.names.push(t.readString(_$e4)));
                return n101;
            case 151552:
                return r43 = t.readUInt16(), this.offsets = t.read(r43);
            case 196608:
                break;
            case 262144:
                return this.map = (function() {
                    var _$e, r, n;
                    for(n = [], _$i = _$e = 0, r = this.file.maxp.numGlyphs; 0 <= r ? _$e < r : _$e > r; _$i = 0 <= r ? ++_$e : --_$e)n.push(t.readUInt32());
                    return n;
                }).call(this);
        }
    }, e;
}(), de1 = function de1(t, e) {
    this.raw = t, this.length = t.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
}, pe1 = function(t90) {
    function e() {
        return e.__super__.constructor.apply(this, arguments);
    }
    return oe1(e, re1), e.prototype.tag = "name", e.prototype.parse = function(t) {
        var _$e, r, n, _$i, a, o, s, c, u, h, l;
        for(t.pos = this.offset, t.readShort(), _$e = t.readShort(), o = t.readShort(), r = [], _$i = 0; 0 <= _$e ? _$i < _$e : _$i > _$e; _$i = 0 <= _$e ? ++_$i : --_$i)r.push({
            platformID: t.readShort(),
            encodingID: t.readShort(),
            languageID: t.readShort(),
            nameID: t.readShort(),
            length: t.readShort(),
            offset: this.offset + o + t.readShort()
        });
        for(s = {}, _$i = u = 0, h = r.length; u < h; _$i = ++u)n = r[_$i], t.pos = n.offset, c = t.readString(n.length), a = new de1(c, n), null == s[l = n.nameID] && (s[l] = []), s[n.nameID].push(a);
        this.strings = s, this.copyright = s[0], this.fontFamily = s[1], this.fontSubfamily = s[2], this.uniqueSubfamily = s[3], this.fontName = s[4], this.version = s[5];
        try {
            this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
        } catch (t91) {
            this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
        }
        return this.trademark = s[7], this.manufacturer = s[8], this.designer = s[9], this.description = s[10], this.vendorUrl = s[11], this.designerUrl = s[12], this.license = s[13], this.licenseUrl = s[14], this.preferredFamily = s[15], this.preferredSubfamily = s[17], this.compatibleFull = s[18], this.sampleText = s[19];
    }, e;
}(), ge1 = function(t92) {
    function e() {
        return e.__super__.constructor.apply(this, arguments);
    }
    return oe1(e, re1), e.prototype.tag = "maxp", e.prototype.parse = function(t) {
        return t.pos = this.offset, this.version = t.readInt(), this.numGlyphs = t.readUInt16(), this.maxPoints = t.readUInt16(), this.maxContours = t.readUInt16(), this.maxCompositePoints = t.readUInt16(), this.maxComponentContours = t.readUInt16(), this.maxZones = t.readUInt16(), this.maxTwilightPoints = t.readUInt16(), this.maxStorage = t.readUInt16(), this.maxFunctionDefs = t.readUInt16(), this.maxInstructionDefs = t.readUInt16(), this.maxStackElements = t.readUInt16(), this.maxSizeOfInstructions = t.readUInt16(), this.maxComponentElements = t.readUInt16(), this.maxComponentDepth = t.readUInt16();
    }, e;
}(), me1 = function(t93) {
    function e() {
        return e.__super__.constructor.apply(this, arguments);
    }
    return oe1(e, re1), e.prototype.tag = "hmtx", e.prototype.parse = function(t) {
        var _$e5, r44, n102, _$i22, a, o, s;
        for(t.pos = this.offset, this.metrics = [], _$e5 = 0, o = this.file.hhea.numberOfMetrics; 0 <= o ? _$e5 < o : _$e5 > o; _$e5 = 0 <= o ? ++_$e5 : --_$e5)this.metrics.push({
            advance: t.readUInt16(),
            lsb: t.readInt16()
        });
        for(n102 = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
            var r, _$i;
            for(_$i = [], _$e5 = r = 0; 0 <= n102 ? r < n102 : r > n102; _$e5 = 0 <= n102 ? ++r : --r)_$i.push(t.readInt16());
            return _$i;
        }(), this.widths = (function() {
            var _$t, _$e, r, n;
            for(n = [], _$t = 0, _$e = (r = this.metrics).length; _$t < _$e; _$t++)_$i22 = r[_$t], n.push(_$i22.advance);
            return n;
        }).call(this), r44 = this.widths[this.widths.length - 1], s = [], _$e5 = a = 0; 0 <= n102 ? a < n102 : a > n102; _$e5 = 0 <= n102 ? ++a : --a)s.push(this.widths.push(r44));
        return s;
    }, e.prototype.forGlyph = function(t) {
        return t in this.metrics ? this.metrics[t] : {
            advance: this.metrics[this.metrics.length - 1].advance,
            lsb: this.leftSideBearings[t - this.metrics.length]
        };
    }, e;
}(), ve1 = [].slice, be1 = function(t94) {
    function e63() {
        return e63.__super__.constructor.apply(this, arguments);
    }
    return oe1(e63, re1), e63.prototype.tag = "glyf", e63.prototype.parse = function() {
        return this.cache = {};
    }, e63.prototype.glyphFor = function(t) {
        var _$e, r, n, _$i, a, o, s, c, u, h;
        return t in this.cache ? this.cache[t] : (_$i = this.file.loca, _$e = this.file.contents, r = _$i.indexOf(t), 0 === (n = _$i.lengthOf(t)) ? this.cache[t] = null : (_$e.pos = this.offset + r, a = (o = new ne1(_$e.read(n))).readShort(), c = o.readShort(), h = o.readShort(), s = o.readShort(), u = o.readShort(), this.cache[t] = -1 === a ? new we1(o, c, h, s, u) : new ye1(o, a, c, h, s, u), this.cache[t]));
    }, e63.prototype.encode = function(t, e, r) {
        var n, _$i, a, o, s;
        for(a = [], _$i = [], o = 0, s = e.length; o < s; o++)n = t[e[o]], _$i.push(a.length), n && (a = a.concat(n.encode(r)));
        return _$i.push(a.length), {
            table: a,
            offsets: _$i
        };
    }, e63;
}(), ye1 = function() {
    var _$t = function _$t(t, e, r, n, i99, a) {
        this.raw = t, this.numberOfContours = e, this.xMin = r, this.yMin = n, this.xMax = i99, this.yMax = a, this.compound = !1;
    };
    return _$t.prototype.encode = function() {
        return this.raw.data;
    }, _$t;
}(), we1 = function() {
    var _$t = function _$t(t, e, r, n, i100) {
        var a, o;
        for(this.raw = t, this.xMin = e, this.yMin = r, this.xMax = n, this.yMax = i100, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], a = this.raw; o = a.readShort(), this.glyphOffsets.push(a.pos), this.glyphIDs.push(a.readUInt16()), 32 & o;)a.pos += 1 & o ? 4 : 2, 128 & o ? a.pos += 8 : 64 & o ? a.pos += 4 : 8 & o && (a.pos += 2);
    };
    return _$t.prototype.encode = function() {
        var _$t, e, r;
        for(e = new ne1(ve1.call(this.raw.data)), _$t = 0, r = this.glyphIDs.length; _$t < r; ++_$t)e.pos = this.glyphOffsets[_$t];
        return e.data;
    }, _$t;
}(), Ne1 = function(t95) {
    function e64() {
        return e64.__super__.constructor.apply(this, arguments);
    }
    return oe1(e64, re1), e64.prototype.tag = "loca", e64.prototype.parse = function(t) {
        var _$e6, r;
        return t.pos = this.offset, _$e6 = this.file.head.indexToLocFormat, this.offsets = 0 === _$e6 ? (function() {
            var _$e, n;
            for(n = [], r = 0, _$e = this.length; r < _$e; r += 2)n.push(2 * t.readUInt16());
            return n;
        }).call(this) : (function() {
            var _$e, n;
            for(n = [], r = 0, _$e = this.length; r < _$e; r += 4)n.push(t.readUInt32());
            return n;
        }).call(this);
    }, e64.prototype.indexOf = function(t) {
        return this.offsets[t];
    }, e64.prototype.lengthOf = function(t) {
        return this.offsets[t + 1] - this.offsets[t];
    }, e64.prototype.encode = function(t, e) {
        for(var r = new Uint32Array(this.offsets.length), n = 0, _$i = 0, a = 0; a < r.length; ++a)if (r[a] = n, _$i < e.length && e[_$i] == a) {
            ++_$i, r[a] = n;
            var o = this.offsets[a], s = this.offsets[a + 1] - o;
            s > 0 && (n += s);
        }
        for(var c = new Array(4 * r.length), u = 0; u < r.length; ++u)c[4 * u + 3] = 255 & r[u], c[4 * u + 2] = (65280 & r[u]) >> 8, c[4 * u + 1] = (16711680 & r[u]) >> 16, c[4 * u] = (4278190080 & r[u]) >> 24;
        return c;
    }, e64;
}(), Le1 = function() {
    var _$t = function _$t(t) {
        this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33;
    };
    return _$t.prototype.generateCmap = function() {
        var _$t, e, r, n, _$i;
        for(e in n = this.font.cmap.tables[0].codeMap, _$t = {}, _$i = this.subset)r = _$i[e], _$t[e] = n[r];
        return _$t;
    }, _$t.prototype.glyphsFor = function(t) {
        var e, r, n, _$i, a, o, s;
        for(n = {}, a = 0, o = t.length; a < o; a++)n[_$i = t[a]] = this.font.glyf.glyphFor(_$i);
        for(_$i in e = [], n)(null != (r = n[_$i]) ? r.compound : void 0) && e.push.apply(e, r.glyphIDs);
        if (e.length > 0) for(_$i in s = this.glyphsFor(e))r = s[_$i], n[_$i] = r;
        return n;
    }, _$t.prototype.encode = function(t96, e65) {
        var r45, n, _$i, a, o, s, c, u, h, l, f, d, p, g, m;
        for(n in r45 = ue1.encode(this.generateCmap(), "unicode"), a = this.glyphsFor(t96), f = {
            0: 0
        }, m = r45.charMap)f[(s = m[n]).old] = s.new;
        for(d in l = r45.maxGlyphID, a)d in f || (f[d] = l++);
        return u = function(t) {
            var _$e, r;
            for(_$e in r = {}, t)r[t[_$e]] = _$e;
            return r;
        }(f), h = Object.keys(u).sort(function(t, e) {
            return t - e;
        }), p = function() {
            var _$t, _$e, r;
            for(r = [], _$t = 0, _$e = h.length; _$t < _$e; _$t++)o = h[_$t], r.push(u[o]);
            return r;
        }(), _$i = this.font.glyf.encode(a, p, f), c = this.font.loca.encode(_$i.offsets, p), g = {
            cmap: this.font.cmap.raw(),
            glyf: _$i.table,
            loca: c,
            hmtx: this.font.hmtx.raw(),
            hhea: this.font.hhea.raw(),
            maxp: this.font.maxp.raw(),
            post: this.font.post.raw(),
            name: this.font.name.raw(),
            head: this.font.head.encode(e65)
        }, this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()), this.font.directory.encode(g);
    }, _$t;
}();
E.API.PDFObject = function() {
    var e = function e() {};
    var _$t;
    return _$t = function _$t(t, e) {
        return (Array(e + 1).join("0") + t).slice(-e);
    }, e.convert = function(r) {
        var n, _$i23, a71, o;
        if (Array.isArray(r)) return "[" + (function() {
            var _$t, _$i, a;
            for(a = [], _$t = 0, _$i = r.length; _$t < _$i; _$t++)n = r[_$t], a.push(e.convert(n));
            return a;
        })().join(" ") + "]";
        if ("string" == typeof r) return "/" + r;
        if (null != r ? r.isString : void 0) return "(" + r + ")";
        if (r instanceof Date) return "(D:" + _$t(r.getUTCFullYear(), 4) + _$t(r.getUTCMonth(), 2) + _$t(r.getUTCDate(), 2) + _$t(r.getUTCHours(), 2) + _$t(r.getUTCMinutes(), 2) + _$t(r.getUTCSeconds(), 2) + "Z)";
        if ("[object Object]" === ({}).toString.call(r)) {
            for(_$i23 in a71 = [
                "<<"
            ], r)o = r[_$i23], a71.push("/" + _$i23 + " " + e.convert(o));
            return a71.push(">>"), a71.join("\n");
        }
        return "" + r;
    }, e;
}();
exports.default = E;

},{"@babel/runtime/helpers/typeof":"dVTS5","fflate":"GlQxd","f9c07e0a6537ace9":"hMvcU","364d6894cfa3ed9":"8Ddpk","3cadb2e01d2a2b1c":"l7HPv","@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"dVTS5":[function(require,module,exports) {
function _typeof(obj1) {
    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj1);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"GlQxd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deflate", function() {
    return Deflate1;
});
parcelHelpers.export(exports, "AsyncDeflate", function() {
    return AsyncDeflate1;
});
parcelHelpers.export(exports, "deflate", function() {
    return deflate;
});
/**
 * Compresses data with DEFLATE without any wrapper
 * @param data The data to compress
 * @param opts The compression options
 * @returns The deflated version of the data
 */ parcelHelpers.export(exports, "deflateSync", function() {
    return deflateSync;
});
parcelHelpers.export(exports, "Inflate", function() {
    return Inflate1;
});
parcelHelpers.export(exports, "AsyncInflate", function() {
    return AsyncInflate1;
});
parcelHelpers.export(exports, "inflate", function() {
    return inflate;
});
/**
 * Expands DEFLATE data with no wrapper
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */ parcelHelpers.export(exports, "inflateSync", function() {
    return inflateSync;
});
parcelHelpers.export(exports, "Gzip", function() {
    return Gzip1;
});
parcelHelpers.export(exports, "AsyncGzip", function() {
    return AsyncGzip1;
});
parcelHelpers.export(exports, "gzip", function() {
    return gzip;
});
/**
 * Compresses data with GZIP
 * @param data The data to compress
 * @param opts The compression options
 * @returns The gzipped version of the data
 */ parcelHelpers.export(exports, "gzipSync", function() {
    return gzipSync;
});
parcelHelpers.export(exports, "Gunzip", function() {
    return Gunzip1;
});
parcelHelpers.export(exports, "AsyncGunzip", function() {
    return AsyncGunzip1;
});
parcelHelpers.export(exports, "gunzip", function() {
    return gunzip;
});
/**
 * Expands GZIP data
 * @param data The data to decompress
 * @param out Where to write the data. GZIP already encodes the output size, so providing this doesn't save memory.
 * @returns The decompressed version of the data
 */ parcelHelpers.export(exports, "gunzipSync", function() {
    return gunzipSync;
});
parcelHelpers.export(exports, "Zlib", function() {
    return Zlib1;
});
parcelHelpers.export(exports, "AsyncZlib", function() {
    return AsyncZlib1;
});
parcelHelpers.export(exports, "zlib", function() {
    return zlib;
});
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */ parcelHelpers.export(exports, "zlibSync", function() {
    return zlibSync;
});
parcelHelpers.export(exports, "Unzlib", function() {
    return Unzlib1;
});
parcelHelpers.export(exports, "AsyncUnzlib", function() {
    return AsyncUnzlib1;
});
parcelHelpers.export(exports, "unzlib", function() {
    return unzlib;
});
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */ parcelHelpers.export(exports, "unzlibSync", function() {
    return unzlibSync;
});
// Default algorithm for compression (used because having a known output size allows faster decompression)
parcelHelpers.export(exports, "compress", function() {
    return gzip;
});
parcelHelpers.export(exports, "AsyncCompress", function() {
    return AsyncGzip1;
});
// Default algorithm for compression (used because having a known output size allows faster decompression)
parcelHelpers.export(exports, "compressSync", function() {
    return gzipSync;
});
parcelHelpers.export(exports, "Compress", function() {
    return Gzip1;
});
parcelHelpers.export(exports, "Decompress", function() {
    return Decompress1;
});
parcelHelpers.export(exports, "AsyncDecompress", function() {
    return AsyncDecompress1;
});
parcelHelpers.export(exports, "decompress", function() {
    return decompress;
});
/**
 * Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */ parcelHelpers.export(exports, "decompressSync", function() {
    return decompressSync;
});
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */ parcelHelpers.export(exports, "strToU8", function() {
    return strToU8;
});
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */ parcelHelpers.export(exports, "strFromU8", function() {
    return strFromU8;
});
parcelHelpers.export(exports, "zip", function() {
    return zip;
});
/**
 * Synchronously creates a ZIP file. Prefer using `zip` for better performance
 * with more than one file.
 * @param data The directory structure for the ZIP archive
 * @param opts The main options, merged with per-file options
 * @returns The generated ZIP archive
 */ parcelHelpers.export(exports, "zipSync", function() {
    return zipSync;
});
/**
 * Asynchronously decompresses a ZIP archive
 * @param data The raw compressed ZIP file
 * @param cb The callback to call with the decompressed files
 * @returns A function that can be used to immediately terminate the unzipping
 */ parcelHelpers.export(exports, "unzip", function() {
    return unzip;
});
/**
 * Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
 * performance with more than one file.
 * @param data The raw compressed ZIP file
 * @returns The decompressed files
 */ parcelHelpers.export(exports, "unzipSync", function() {
    return unzipSync;
});
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:
// https://tools.ietf.org/html/rfc1951
// You may also wish to take a look at the guide I made about this program:
// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
// Much of the following code is similar to that of UZIP.js:
// https://github.com/photopea/UZIP.js
// Many optimizations have been made, so the bundle size is ultimately smaller but performance is similar.
// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
// is better for memory in most engines (I *think*).
var ch2 = {};
var wk = function wk(c, id, msg, transfer, cb) {
    var u = ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
        c
    ], {
        type: 'text/javascript'
    })));
    var w = new Worker(u);
    w.onerror = function(e) {
        return cb(e.error, null);
    };
    w.onmessage = function(e) {
        return cb(null, e.data);
    };
    w.postMessage(msg, transfer);
    return w;
};
// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */ 0,
    0,
    /* impossible */ 0
]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */ 0,
    0
]);
// code length index map
var clim = new u8([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
// get base, reverse index map from extra bits
var freb = function freb(eb, start) {
    var b = new u16(31);
    for(var i1 = 0; i1 < 31; ++i1)b[i1] = start += 1 << eb[i1 - 1];
    // numbers here are at max 18 bits
    var r = new u32(b[30]);
    for(var i1 = 1; i1 < 30; ++i1)for(var j = b[i1]; j < b[i1 + 1]; ++j)r[j] = j - b[i1] << 5 | i1;
    return [
        b,
        r
    ];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for(var i = 0; i < 32768; ++i){
    // reverse table algorithm from SO
    var x = (i & 43690) >>> 1 | (i & 21845) << 1;
    x = (x & 52428) >>> 2 | (x & 13107) << 2;
    x = (x & 61680) >>> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = function hMap(cd, mb, r) {
    var s = cd.length;
    // index
    var i2 = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new u16(mb);
    // length of cd must be 288 (total # of codes)
    for(; i2 < s; ++i2)++l[cd[i2] - 1];
    // u16 "map": index -> minimum code for bit length = index
    var le = new u16(mb);
    for(i2 = 0; i2 < mb; ++i2)le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for(i2 = 0; i2 < s; ++i2)// ignore 0 lengths
        if (cd[i2]) {
            // num encoding both symbol and bits read
            var sv = i2 << 4 | cd[i2];
            // free bits
            var r_1 = mb - cd[i2];
            // start value
            var v = (le[cd[i2] - 1]++) << r_1;
            // m is end value
            for(var m = v | (1 << r_1) - 1; v <= m; ++v)// every 16 bit value starting with the code yields the same result
            co[rev[v] >>> rvb] = sv;
        }
    } else {
        co = new u16(s);
        for(i2 = 0; i2 < s; ++i2)co[i2] = rev[le[cd[i2] - 1]++] >>> 15 - cd[i2];
    }
    return co;
};
// fixed length tree
var flt = new u8(288);
for(var i = 0; i < 144; ++i)flt[i] = 8;
for(var i = 144; i < 256; ++i)flt[i] = 9;
for(var i = 256; i < 280; ++i)flt[i] = 7;
for(var i = 280; i < 288; ++i)flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for(var i = 0; i < 32; ++i)fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
// find max of array
var max = function max(a) {
    var m = a[0];
    for(var i3 = 1; i3 < a.length; ++i3)if (a[i3] > m) m = a[i3];
    return m;
};
// read d, starting at bit p and mask with m
var bits = function bits(d, p, m) {
    var o = p / 8 >> 0;
    return (d[o] | d[o + 1] << 8) >>> (p & 7) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function bits16(d, p) {
    var o = p / 8 >> 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >>> (p & 7);
};
// get end of byte
var shft = function shft(p) {
    return (p / 8 >> 0) + (p & 7 && 1);
};
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function slc(v, s, e) {
    if (s == null || s < 0) s = 0;
    if (e == null || e > v.length) e = v.length;
    // can't use .constructor in case user-supplied
    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
};
// expands raw DEFLATE data
var inflt = function inflt(dat, buf, st) {
    // source length
    var sl = dat.length;
    // have to estimate size
    var noBuf = !buf || st;
    // no state
    var noSt = !st || st.i;
    if (!st) st = {};
    // Assumes roughly 33% compression ratio average
    if (!buf) buf = new u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function cbuf(l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            st.f = final = bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = shft(pos) + 4, l1 = dat[s - 4] | dat[s - 3] << 8, t = s + l1;
                if (t > sl) {
                    if (noSt) throw 'unexpected EOF';
                    break;
                }
                // ensure size
                if (noBuf) cbuf(bt + l1);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l1, st.p = pos = t * 8;
                continue;
            } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                var tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new u8(tl);
                // code length tree
                var clt = new u8(19);
                for(var i4 = 0; i4 < hcLen; ++i4)// use index map to get real code
                clt[clim[i4]] = bits(dat, pos + i4 * 3, 7);
                pos += hcLen * 3;
                // code lengths bits
                var clb = max(clt), clbmsk = (1 << clb) - 1;
                if (!noSt && pos + tl * (clb + 7) > tbts) break;
                // code lengths map
                var clm = hMap(clt, clb, 1);
                for(var i4 = 0; i4 < tl;){
                    var r = clm[bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >>> 4;
                    // code length to copy
                    if (s < 16) ldt[i4++] = s;
                    else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i4 - 1];
                        else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
                        else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
                        while(n--)ldt[i4++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = max(lt);
                // max dist bits
                dbt = max(dt);
                lm = hMap(lt, lbt, 1);
                dm = hMap(dt, dbt, 1);
            } else throw 'invalid block type';
            if (pos > tbts) throw 'unexpected EOF';
        }
        // Make sure the buffer can hold this + the largest possible addition
        // Maximum chunk size (practically, theoretically infinite) is 2^17;
        if (noBuf) cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var mxa = lbt + dbt + 18;
        while(noSt || pos + mxa < tbts){
            // bits read, code
            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts) throw 'unexpected EOF';
            if (!c) throw 'invalid length/literal';
            if (sym < 256) buf[bt++] = sym;
            else if (sym == 256) {
                lm = null;
                break;
            } else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i4 = sym - 257, b = fleb[i4];
                    add = bits(dat, pos, (1 << b) - 1) + fl[i4];
                    pos += b;
                }
                // dist
                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                if (!d) throw 'invalid distance';
                pos += d & 15;
                var dt = fd[dsym];
                if (dsym > 3) {
                    var b = fdeb[dsym];
                    dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
                }
                if (pos > tbts) throw 'unexpected EOF';
                if (noBuf) cbuf(bt + 131072);
                var end = bt + add;
                for(; bt < end; bt += 4){
                    buf[bt] = buf[bt - dt];
                    buf[bt + 1] = buf[bt + 1 - dt];
                    buf[bt + 2] = buf[bt + 2 - dt];
                    buf[bt + 3] = buf[bt + 3 - dt];
                }
                bt = end;
            }
        }
        st.l = lm, st.p = pos, st.b = bt;
        if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    }while (!final)
    return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function wbits(d, p, v) {
    v <<= p & 7;
    var o = p / 8 >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function wbits16(d, p, v) {
    v <<= p & 7;
    var o = p / 8 >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function hTree(d, mb) {
    // Need extra info to make a tree
    var t = [];
    for(var i5 = 0; i5 < d.length; ++i5)if (d[i5]) t.push({
        s: i5,
        f: d[i5]
    });
    var s = t.length;
    var t2 = t.slice();
    if (!s) return [
        new u8(0),
        0
    ];
    if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return [
            v,
            1
        ];
    }
    t.sort(function(a, b) {
        return a.f - b.f;
    });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({
        s: -1,
        f: 25001
    });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = {
        s: -1,
        f: l.f + r.f,
        l: l,
        r: r
    };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while(i1 != s - 1){
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = {
            s: -1,
            f: l.f + r.f,
            l: l,
            r: r
        };
    }
    var maxSym = t2[0].s;
    for(var i5 = 1; i5 < s; ++i5)if (t2[i5].s > maxSym) maxSym = t2[i5].s;
    // code lengths
    var tr = new u16(maxSym + 1);
    // max bits in tree
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i5 = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function(a, b) {
            return tr[b.s] - tr[a.s] || a.f - b.f;
        });
        for(; i5 < s; ++i5){
            var i2_1 = t2[i5].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << mbt - tr[i2_1]);
                tr[i2_1] = mb;
            } else break;
        }
        dt >>>= lft;
        while(dt > 0){
            var i2_2 = t2[i5].s;
            if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
            else ++i5;
        }
        for(; i5 >= 0 && dt; --i5){
            var i2_3 = t2[i5].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return [
        new u8(tr),
        mbt
    ];
};
// get the max length and assign length codes
var ln = function(n, l, d) {
    return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
// length codes generation
var lc = function lc(c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while(s && !c[--s]);
    var cl = new u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function w(v) {
        cl[cli++] = v;
    };
    for(var i6 = 1; i6 <= s; ++i6)if (c[i6] == cln && i6 != s) ++cls;
    else {
        if (!cln && cls > 2) {
            for(; cls > 138; cls -= 138)w(32754);
            if (cls > 2) {
                w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
                cls = 0;
            }
        } else if (cls > 3) {
            w(cln), --cls;
            for(; cls > 6; cls -= 6)w(8304);
            if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
        }
        while(cls--)w(cln);
        cls = 1;
        cln = c[i6];
    }
    return [
        cl.subarray(0, cli),
        s
    ];
};
// calculate the length of output from tree, code lengths
var clen = function clen(cf, cl) {
    var l = 0;
    for(var i7 = 0; i7 < cl.length; ++i7)l += cf[i7] * cl[i7];
    return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function wfblk(out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for(var i8 = 0; i8 < s; ++i8)out[o + i8 + 4] = dat[i8];
    return (o + 4 + s) * 8;
};
// writes a block
var wblk = function wblk(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a1 = hTree(lf, 15), dlt = _a1[0], mlb = _a1[1];
    var _b1 = hTree(df, 15), ddt = _b1[0], mdb = _b1[1];
    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new u16(19);
    for(var i9 = 0; i9 < lclt.length; ++i9)lcfreq[lclt[i9] & 31]++;
    for(var i9 = 0; i9 < lcdt.length; ++i9)lcfreq[lcdt[i9] & 31]++;
    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for(; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
    var flen = bl + 5 << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for(var i9 = 0; i9 < nlcc; ++i9)wbits(out, p + 3 * i9, lct[clim[i9]]);
        p += 3 * nlcc;
        var lcts = [
            lclt,
            lcdt
        ];
        for(var it = 0; it < 2; ++it){
            var clct = lcts[it];
            for(var i9 = 0; i9 < clct.length; ++i9){
                var len = clct[i9] & 31;
                wbits(out, p, llm[len]), p += lct[len];
                if (len > 15) wbits(out, p, clct[i9] >>> 5 & 127), p += clct[i9] >>> 12;
            }
        }
    } else lm = flm, ll = flt, dm = fdm, dl = fdt;
    for(var i9 = 0; i9 < li; ++i9)if (syms[i9] > 255) {
        var len = syms[i9] >>> 18 & 31;
        wbits16(out, p, lm[len + 257]), p += ll[len + 257];
        if (len > 7) wbits(out, p, syms[i9] >>> 23 & 31), p += fleb[len];
        var dst = syms[i9] & 31;
        wbits16(out, p, dm[dst]), p += dl[dst];
        if (dst > 3) wbits16(out, p, syms[i9] >>> 5 & 8191), p += fdeb[dst];
    } else wbits16(out, p, lm[syms[i9]]), p += ll[syms[i9]];
    wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/ new u32([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]);
// empty
var et = /*#__PURE__*/ new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function dflt(dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) for(var i10 = 0; i10 <= s; i10 += 65535){
        // end
        var e = i10 + 65535;
        if (e < s) // write full block
        pos = wfblk(w, pos, dat.subarray(i10, e));
        else {
            // write final block
            w[i10] = lst;
            pos = wfblk(w, pos, dat.subarray(i10, s));
        }
    }
    else {
        var opt = deo[lvl - 1];
        var n = opt >>> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = new u16(32768), head = new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function hsh(i11) {
            return (dat[i11] ^ dat[i11 + 1] << bs1_1 ^ dat[i11 + 2] << bs2_1) & msk_1;
        };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new u32(25000);
        // length/literal freq   distance freq
        var lf = new u16(288), df = new u16(32);
        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
        var lc_1 = 0, eb = 0, i10 = 0, li = 0, wi = 0, bs = 0;
        for(; i10 < s; ++i10){
            // hash value
            var hv = hsh(i10);
            // index mod 32768
            var imod = i10 & 32767;
            // previous index with this value
            var pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i10) {
                // bytes remaining
                var rem = s - i10;
                if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i10 - bs, pos);
                    li = lc_1 = eb = 0, bs = i10;
                    for(var j = 0; j < 286; ++j)lf[j] = 0;
                    for(var j = 0; j < 30; ++j)df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
                if (rem > 2 && hv == hsh(i10 - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i10);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while(dif <= maxd && --ch_1 && imod != pimod){
                        if (dat[i10 + l] == dat[i10 + l - dif]) {
                            var nl = 0;
                            for(; nl < ml && dat[i10 + nl] == dat[i10 + nl - dif]; ++nl);
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn) break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for(var j = 0; j < mmd; ++j){
                                    var ti = i10 - dif + j + 32768 & 32767;
                                    var pti = prev[ti];
                                    var cd = ti - pti + 32768 & 32767;
                                    if (cd > md) md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += imod - pimod + 32768 & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one Uint32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
                    var lin = revfl[l] & 31, din = revfd[d] & 31;
                    eb += fleb[lin] + fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i10 + l;
                    ++lc_1;
                } else {
                    syms[li++] = dat[i10];
                    ++lf[dat[i10]];
                }
            }
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i10 - bs, pos);
        // this is the easiest way to avoid needing to maintain state
        if (!lst) pos = wfblk(w, pos, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
};
// CRC32 table
var crct = /*#__PURE__*/ function() {
    var t = new u32(256);
    for(var i12 = 0; i12 < 256; ++i12){
        var c = i12, k = 9;
        while(--k)c = (c & 1 && 3988292384) ^ c >>> 1;
        t[i12] = c;
    }
    return t;
}();
// CRC32
var crc = function crc() {
    var c = 4294967295;
    return {
        p: function p(d) {
            // closures have awful performance
            var cr = c;
            for(var i13 = 0; i13 < d.length; ++i13)cr = crct[cr & 255 ^ d[i13]] ^ cr >>> 8;
            c = cr;
        },
        d: function d() {
            return c ^ 4294967295;
        }
    };
};
// Alder32
var adler = function adler() {
    var a = 1, b = 0;
    return {
        p: function p(d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length;
            for(var i14 = 0; i14 != l;){
                var e = Math.min(i14 + 5552, l);
                for(; i14 < e; ++i14)n += d[i14], m += n;
                n %= 65521, m %= 65521;
            }
            a = n, b = m;
        },
        d: function d() {
            return (a >>> 8 << 16 | (b & 255) << 8 | b >>> 8) + ((a & 255) << 23) * 2;
        }
    };
};
// deflate with opts
var dopt = function dopt(dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
};
// Walmart object spread
var mrg = function mrg(a, b) {
    var o = {};
    for(var k in a)o[k] = a[k];
    for(var k in b)o[k] = b[k];
    return o;
};
// worker clone
// This is possibly the craziest part of the entire codebase, despite how simple it may seem.
// The only parameter to this function is a closure that returns an array of variables outside of the function scope.
// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
// This took me three weeks to figure out how to do.
var wcln = function wcln(fn, fnStr, td) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/ /g, '').split(',');
    for(var i15 = 0; i15 < dt.length; ++i15){
        var v = dt[i15], k = ks[i15];
        if (typeof v == 'function') {
            fnStr += ';' + k + '=';
            var st_1 = v.toString();
            if (v.prototype) {
                // for global objects
                if (st_1.indexOf('[native code]') != -1) {
                    var spInd = st_1.indexOf(' ', 8) + 1;
                    fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
                } else {
                    fnStr += st_1;
                    for(var t in v.prototype)fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
                }
            } else fnStr += st_1;
        } else td[k] = v;
    }
    return [
        fnStr,
        td
    ];
};
var ch = [];
// clone bufs
var cbfs = function cbfs(v) {
    var tl = [];
    for(var k in v)if (v[k] instanceof u8 || v[k] instanceof u16 || v[k] instanceof u32) tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    return tl;
};
// use a worker to execute code
var wrkr = function wrkr(fns, init, id, cb) {
    var _a2;
    if (!ch[id]) {
        var fnStr = '', td_1 = {}, m = fns.length - 1;
        for(var i16 = 0; i16 < m; ++i16)_a2 = wcln(fns[i16], fnStr, td_1), fnStr = _a2[0], td_1 = _a2[1];
        ch[id] = wcln(fns[m], fnStr, td_1);
    }
    var td = mrg({}, ch[id][1]);
    return wk(ch[id][0] + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);
};
// base async inflate fn
var bInflt = function bInflt() {
    return [
        u8,
        u16,
        u32,
        fleb,
        fdeb,
        clim,
        fl,
        fd,
        flrm,
        fdrm,
        rev,
        hMap,
        max,
        bits,
        bits16,
        shft,
        slc,
        inflt,
        inflateSync,
        pbf,
        gu8
    ];
};
var bDflt = function bDflt() {
    return [
        u8,
        u16,
        u32,
        fleb,
        fdeb,
        clim,
        revfl,
        revfd,
        flm,
        flt,
        fdm,
        fdt,
        rev,
        deo,
        et,
        hMap,
        wbits,
        wbits16,
        hTree,
        ln,
        lc,
        clen,
        wfblk,
        wblk,
        shft,
        slc,
        dflt,
        dopt,
        deflateSync,
        pbf
    ];
};
// gzip extra
var gze = function gze() {
    return [
        gzh,
        gzhl,
        wbytes,
        crc,
        crct
    ];
};
// gunzip extra
var guze = function guze() {
    return [
        gzs,
        gzl
    ];
};
// zlib extra
var zle = function zle() {
    return [
        zlh,
        wbytes,
        adler
    ];
};
// unzlib extra
var zule = function zule() {
    return [
        zlv
    ];
};
// post buf
var pbf = function pbf(msg) {
    return postMessage(msg, [
        msg.buffer
    ]);
};
// get u8
var gu8 = function gu8(o) {
    return o && o.size && new u8(o.size);
};
// async helper
var cbify = function cbify(dat1, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function(err, dat) {
        w.terminate();
        cb(err, dat);
    });
    if (!opts.consume) dat1 = new u8(dat1);
    w.postMessage([
        dat1,
        opts
    ], [
        dat1.buffer
    ]);
    return function() {
        w.terminate();
    };
};
// auto stream
var astrm = function astrm(strm) {
    strm.ondata = function(dat, final) {
        return postMessage([
            dat,
            final
        ], [
            dat.buffer
        ]);
    };
    return function(ev) {
        return strm.push(ev.data[0], ev.data[1]);
    };
};
// async stream attach
var astrmify = function astrmify(fns, strm, opts, init, id) {
    var t;
    var w = wrkr(fns, init, id, function(err, dat) {
        if (err) w.terminate(), strm.ondata.call(strm, err);
        else {
            if (dat[1]) w.terminate();
            strm.ondata.call(strm, err, dat[0], dat[1]);
        }
    });
    w.postMessage(opts);
    strm.push = function(d, f) {
        if (t) throw 'stream finished';
        if (!strm.ondata) throw 'no stream handler';
        w.postMessage([
            d,
            t = f
        ], [
            d.buffer
        ]);
    };
    strm.terminate = function() {
        w.terminate();
    };
};
// read 2 bytes
var b2 = function b2(d, b) {
    return d[b] | d[b + 1] << 8;
};
// read 4 bytes
var b4 = function b4(d, b) {
    return (d[b] | d[b + 1] << 8 | d[b + 2] << 16) + (d[b + 3] << 23) * 2;
};
// write bytes
var wbytes = function wbytes(d, b, v) {
    for(; v; ++b)d[b] = v, v >>>= 8;
};
// gzip header
var gzh = function gzh(c, o) {
    var fn = o.filename;
    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix
    if (o.mtime != 0) wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));
    if (fn) {
        c[3] = 8;
        for(var i17 = 0; i17 <= fn.length; ++i17)c[i17 + 10] = fn.charCodeAt(i17);
    }
};
// gzip footer: -8 to -4 = CRC, -4 to -0 is length
// gzip start
var gzs = function gzs(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8) throw 'invalid gzip data';
    var flg = d[3];
    var st = 10;
    if (flg & 4) st += d[10] | (d[11] << 8) + 2;
    for(var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++]);
    return st + (flg & 2);
};
// gzip length
var gzl = function gzl(d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16) + 2 * (d[l - 1] << 23);
};
// gzip header length
var gzhl = function gzhl(o) {
    return 10 + (o.filename && o.filename.length + 1 || 0);
};
// zlib header
var zlh = function zlh(c, o) {
    var lv = o.level, fl1 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = fl1 << 6 | (fl1 ? 32 - 2 * fl1 : 1);
};
// zlib valid
var zlv = function zlv(d) {
    if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw 'invalid zlib data';
    if (d[1] & 32) throw 'invalid zlib data: preset dictionaries not supported';
};
function AsyncCmpStrm(opts, cb) {
    if (!cb && typeof opts == 'function') cb = opts, opts = {};
    this.ondata = cb;
    return opts;
}
// zlib footer: -4 to -0 is Adler32
/**
 * Streaming DEFLATE compression
 */ var Deflate1 = /*#__PURE__*/ function() {
    var Deflate = function Deflate(opts, cb) {
        if (!cb && typeof opts == 'function') cb = opts, opts = {};
        this.ondata = cb;
        this.o = opts || {};
    };
    Deflate.prototype.p = function(c, f) {
        this.ondata(dopt(c, this.o, 0, 0, !f), f);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Deflate.prototype.push = function(chunk, final) {
        if (this.d) throw 'stream finished';
        if (!this.ondata) throw 'no stream handler';
        this.d = final;
        this.p(chunk, final || false);
    };
    return Deflate;
}();
/**
 * Asynchronous streaming DEFLATE compression
 */ var AsyncDeflate1 = /*#__PURE__*/ function() {
    var AsyncDeflate = function AsyncDeflate(opts, cb) {
        astrmify([
            bDflt,
            function() {
                return [
                    astrm,
                    Deflate1
                ];
            }
        ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new Deflate1(ev.data);
            onmessage = astrm(strm);
        }, 6);
    };
    return AsyncDeflate;
}();
function deflate(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bDflt, 
    ], function(ev) {
        return pbf(deflateSync(ev.data[0], ev.data[1]));
    }, 0, cb);
}
function deflateSync(data, opts) {
    if (opts === void 0) opts = {};
    return dopt(data, opts, 0, 0);
}
/**
 * Streaming DEFLATE decompression
 */ var Inflate1 = /*#__PURE__*/ function() {
    var Inflate = /**
     * Creates an inflation stream
     * @param cb The callback to call whenever data is inflated
     */ function Inflate(cb) {
        this.s = {};
        this.p = new u8(0);
        this.ondata = cb;
    };
    Inflate.prototype.e = function(c) {
        if (this.d) throw 'stream finished';
        if (!this.ondata) throw 'no stream handler';
        var l = this.p.length;
        var n = new u8(l + c.length);
        n.set(this.p), n.set(c, l), this.p = n;
    };
    Inflate.prototype.c = function(final) {
        this.d = this.s.i = final || false;
        var bts = this.s.b;
        var dt = inflt(this.p, this.o, this.s);
        this.ondata(slc(dt, bts, this.s.b), this.d);
        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = slc(this.p, this.s.p / 8 >> 0), this.s.p &= 7;
    };
    /**
     * Pushes a chunk to be inflated
     * @param chunk The chunk to push
     * @param final Whether this is the final chunk
     */ Inflate.prototype.push = function(chunk, final) {
        this.e(chunk), this.c(final);
    };
    return Inflate;
}();
/**
 * Asynchronous streaming DEFLATE decompression
 */ var AsyncInflate1 = /*#__PURE__*/ function() {
    var AsyncInflate = /**
     * Creates an asynchronous inflation stream
     * @param cb The callback to call whenever data is deflated
     */ function AsyncInflate(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            function() {
                return [
                    astrm,
                    Inflate1
                ];
            }
        ], this, 0, function() {
            var strm = new Inflate1();
            onmessage = astrm(strm);
        }, 7);
    };
    return AsyncInflate;
}();
function inflate(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bInflt
    ], function(ev) {
        return pbf(inflateSync(ev.data[0], gu8(ev.data[1])));
    }, 1, cb);
}
function inflateSync(data, out) {
    return inflt(data, out);
}
// before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.
/**
 * Streaming GZIP compression
 */ var Gzip1 = /*#__PURE__*/ function() {
    var Gzip = function Gzip(opts, cb) {
        this.c = crc();
        this.l = 0;
        this.v = 1;
        Deflate1.call(this, opts, cb);
    };
    /**
     * Pushes a chunk to be GZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Gzip.prototype.push = function(chunk, final) {
        Deflate1.prototype.push.call(this, chunk, final);
    };
    Gzip.prototype.p = function(c, f) {
        this.c.p(c);
        this.l += c.length;
        var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, !f);
        if (this.v) gzh(raw, this.o), this.v = 0;
        if (f) wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
        this.ondata(raw, f);
    };
    return Gzip;
}();
/**
 * Asynchronous streaming GZIP compression
 */ var AsyncGzip1 = /*#__PURE__*/ function() {
    var AsyncGzip = function AsyncGzip(opts, cb) {
        astrmify([
            bDflt,
            gze,
            function() {
                return [
                    astrm,
                    Deflate1,
                    Gzip1
                ];
            }
        ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new Gzip1(ev.data);
            onmessage = astrm(strm);
        }, 8);
    };
    return AsyncGzip;
}();
function gzip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bDflt,
        gze,
        function() {
            return [
                gzipSync
            ];
        }
    ], function(ev) {
        return pbf(gzipSync(ev.data[0], ev.data[1]));
    }, 2, cb);
}
function gzipSync(data, opts) {
    if (opts === void 0) opts = {};
    var c = crc(), l = data.length;
    c.p(data);
    var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
    return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
}
/**
 * Streaming GZIP decompression
 */ var Gunzip1 = /*#__PURE__*/ function() {
    var Gunzip = /**
     * Creates a GUNZIP stream
     * @param cb The callback to call whenever data is inflated
     */ function Gunzip(cb) {
        this.v = 1;
        Inflate1.call(this, cb);
    };
    /**
     * Pushes a chunk to be GUNZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Gunzip.prototype.push = function(chunk, final) {
        Inflate1.prototype.e.call(this, chunk);
        if (this.v) {
            var s = gzs(this.p);
            if (s >= this.p.length && !final) return;
            this.p = this.p.subarray(s), this.v = 0;
        }
        if (final) {
            if (this.p.length < 8) throw 'invalid gzip stream';
            this.p = this.p.subarray(0, -8);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate1.prototype.c.call(this, final);
    };
    return Gunzip;
}();
/**
 * Asynchronous streaming GZIP decompression
 */ var AsyncGunzip1 = /*#__PURE__*/ function() {
    var AsyncGunzip = /**
     * Creates an asynchronous GUNZIP stream
     * @param cb The callback to call whenever data is deflated
     */ function AsyncGunzip(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            guze,
            function() {
                return [
                    astrm,
                    Inflate1,
                    Gunzip1
                ];
            }
        ], this, 0, function() {
            var strm = new Gunzip1();
            onmessage = astrm(strm);
        }, 9);
    };
    return AsyncGunzip;
}();
function gunzip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bInflt,
        guze,
        function() {
            return [
                gunzipSync
            ];
        }
    ], function(ev) {
        return pbf(gunzipSync(ev.data[0]));
    }, 3, cb);
}
function gunzipSync(data, out) {
    return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
}
/**
 * Streaming Zlib compression
 */ var Zlib1 = /*#__PURE__*/ function() {
    var Zlib = function Zlib(opts, cb) {
        this.c = adler();
        this.v = 1;
        Deflate1.call(this, opts, cb);
    };
    /**
     * Pushes a chunk to be zlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Zlib.prototype.push = function(chunk, final) {
        Deflate1.prototype.push.call(this, chunk, final);
    };
    Zlib.prototype.p = function(c, f) {
        this.c.p(c);
        var raw = dopt(c, this.o, this.v && 2, f && 4, !f);
        if (this.v) zlh(raw, this.o), this.v = 0;
        if (f) wbytes(raw, raw.length - 4, this.c.d());
        this.ondata(raw, f);
    };
    return Zlib;
}();
/**
 * Asynchronous streaming Zlib compression
 */ var AsyncZlib1 = /*#__PURE__*/ function() {
    var AsyncZlib = function AsyncZlib(opts, cb) {
        astrmify([
            bDflt,
            zle,
            function() {
                return [
                    astrm,
                    Deflate1,
                    Zlib1
                ];
            }
        ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new Zlib1(ev.data);
            onmessage = astrm(strm);
        }, 10);
    };
    return AsyncZlib;
}();
function zlib(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bDflt,
        zle,
        function() {
            return [
                zlibSync
            ];
        }
    ], function(ev) {
        return pbf(zlibSync(ev.data[0], ev.data[1]));
    }, 4, cb);
}
function zlibSync(data, opts) {
    if (opts === void 0) opts = {};
    var a = adler();
    a.p(data);
    var d = dopt(data, opts, 2, 4);
    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Streaming Zlib decompression
 */ var Unzlib1 = /*#__PURE__*/ function() {
    var Unzlib = /**
     * Creates a Zlib decompression stream
     * @param cb The callback to call whenever data is inflated
     */ function Unzlib(cb) {
        this.v = 1;
        Inflate1.call(this, cb);
    };
    /**
     * Pushes a chunk to be unzlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Unzlib.prototype.push = function(chunk, final) {
        Inflate1.prototype.e.call(this, chunk);
        if (this.v) {
            if (this.p.length < 2 && !final) return;
            this.p = this.p.subarray(2), this.v = 0;
        }
        if (final) {
            if (this.p.length < 4) throw 'invalid zlib stream';
            this.p = this.p.subarray(0, -4);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate1.prototype.c.call(this, final);
    };
    return Unzlib;
}();
/**
 * Asynchronous streaming Zlib decompression
 */ var AsyncUnzlib1 = /*#__PURE__*/ function() {
    var AsyncUnzlib = /**
     * Creates an asynchronous Zlib decompression stream
     * @param cb The callback to call whenever data is deflated
     */ function AsyncUnzlib(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            zule,
            function() {
                return [
                    astrm,
                    Inflate1,
                    Unzlib1
                ];
            }
        ], this, 0, function() {
            var strm = new Unzlib1();
            onmessage = astrm(strm);
        }, 11);
    };
    return AsyncUnzlib;
}();
function unzlib(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bInflt,
        zule,
        function() {
            return [
                unzlibSync
            ];
        }
    ], function(ev) {
        return pbf(unzlibSync(ev.data[0], gu8(ev.data[1])));
    }, 5, cb);
}
function unzlibSync(data, out) {
    return inflt((zlv(data), data.subarray(2, -4)), out);
}
/**
 * Streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var Decompress1 = /*#__PURE__*/ function() {
    var Decompress = /**
     * Creates a decompression stream
     * @param cb The callback to call whenever data is decompressed
     */ function Decompress(cb) {
        this.G = Gunzip1;
        this.I = Inflate1;
        this.Z = Unzlib1;
        this.ondata = cb;
    };
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Decompress.prototype.push = function(chunk, final) {
        if (!this.ondata) throw 'no stream handler';
        if (!this.s) {
            if (this.p && this.p.length) {
                var n = new u8(this.p.length + chunk.length);
                n.set(this.p), n.set(chunk, this.p.length);
            } else this.p = chunk;
            if (this.p.length > 2) {
                var _this_1 = this;
                var cb = function cb() {
                    _this_1.ondata.apply(_this_1, arguments);
                };
                this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(cb) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(cb) : new this.Z(cb);
                this.s.push(this.p, final);
                this.p = null;
            }
        } else this.s.push(chunk, final);
    };
    return Decompress;
}();
/**
 * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var AsyncDecompress1 = /*#__PURE__*/ function() {
    var AsyncDecompress = /**
   * Creates an asynchronous decompression stream
   * @param cb The callback to call whenever data is decompressed
   */ function AsyncDecompress(cb) {
        this.G = AsyncGunzip1;
        this.I = AsyncInflate1;
        this.Z = AsyncUnzlib1;
        this.ondata = cb;
    };
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ AsyncDecompress.prototype.push = function(chunk, final) {
        Decompress1.prototype.push.call(this, chunk, final);
    };
    return AsyncDecompress;
}();
function decompress(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzip(data, opts, cb) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflate(data, opts, cb) : unzlib(data, opts, cb);
}
function decompressSync(data, out) {
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, out) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, out) : unzlibSync(data, out);
}
// flatten a directory structure
var fltn = function(d, p, t, o) {
    for(var k in d){
        var val = d[k], n = p + k;
        if (val instanceof u8) t[n] = [
            val,
            o
        ];
        else if (Array.isArray(val)) t[n] = [
            val[0],
            mrg(o, val[1])
        ];
        else fltn(val, n + '/', t, o);
    }
};
function strToU8(str, latin1) {
    var l = str.length;
    if (!latin1 && typeof TextEncoder != 'undefined') return new TextEncoder().encode(str);
    var ar = new u8(str.length + (str.length >>> 1));
    var ai = 0;
    var w = function w(v) {
        ar[ai++] = v;
    };
    for(var i18 = 0; i18 < l; ++i18){
        if (ai + 5 > ar.length) {
            var n = new u8(ai + 8 + (l - i18 << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i18);
        if (c < 128 || latin1) w(c);
        else if (c < 2048) w(192 | c >>> 6), w(128 | c & 63);
        else if (c > 55295 && c < 57344) c = 65536 + (c & 1047552) | str.charCodeAt(++i18) & 1023, w(240 | c >>> 18), w(128 | c >>> 12 & 63), w(128 | c >>> 6 & 63), w(128 | c & 63);
        else w(224 | c >>> 12), w(128 | c >>> 6 & 63), w(128 | c & 63);
    }
    return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
    var r = '';
    if (!latin1 && typeof TextDecoder != 'undefined') return new TextDecoder().decode(dat);
    for(var i19 = 0; i19 < dat.length;){
        var c = dat[i19++];
        if (c < 128 || latin1) r += String.fromCharCode(c);
        else if (c < 224) r += String.fromCharCode((c & 31) << 6 | dat[i19++] & 63);
        else if (c < 240) r += String.fromCharCode((c & 15) << 12 | (dat[i19++] & 63) << 6 | dat[i19++] & 63);
        else c = ((c & 15) << 18 | (dat[i19++] & 63) << 12 | (dat[i19++] & 63) << 6 | dat[i19++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    }
    return r;
}
// skip local zip header
var slzh = function slzh(d, b) {
    return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
// read zip header
var zh = function zh(d, b, z) {
    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
    var _a3 = z ? z64e(d, es) : [
        b4(d, b + 20),
        b4(d, b + 24),
        b4(d, b + 42)
    ], sc = _a3[0], su = _a3[1], off = _a3[2];
    return [
        b2(d, b + 10),
        sc,
        su,
        fn,
        es + b2(d, b + 30) + b2(d, b + 32),
        off
    ];
};
// read zip64 extra field
var z64e = function z64e(d, b) {
    for(; b2(d, b) != 1; b += 4 + b2(d, b + 2));
    return [
        b4(d, b + 12),
        b4(d, b + 4),
        b4(d, b + 20)
    ];
};
// write zip header
var wzh = function wzh(d, b, c, cmp, su, fn, u, o, ce, t) {
    var fl2 = fn.length, l = cmp.length;
    wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
    if (ce != null) d[b] = 20, b += 2;
    d[b] = 20, b += 2; // spec compliance? what's that?
    d[b++] = t == 8 && (o.level == 1 ? 6 : o.level < 6 ? 4 : o.level == 9 ? 2 : 0), d[b++] = u && 8;
    d[b] = t, b += 2;
    var dt = new Date(o.mtime || Date.now()), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119) throw 'date not in range 1980-2099';
    wbytes(d, b, (y << 24) * 2 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >>> 1);
    b += 4;
    wbytes(d, b, c);
    wbytes(d, b + 4, l);
    wbytes(d, b + 8, su);
    wbytes(d, b + 12, fl2), b += 16; // skip extra field, comment
    if (ce != null) wbytes(d, b += 10, ce), b += 4;
    d.set(fn, b);
    b += fl2;
    if (ce == null) d.set(cmp, b);
};
// write zip footer (end of central directory)
var wzf = function wzf(o, b, c, d, e) {
    wbytes(o, b, 101010256); // skip disk
    wbytes(o, b + 8, c);
    wbytes(o, b + 10, c);
    wbytes(o, b + 12, d);
    wbytes(o, b + 16, e);
};
function zip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    var r = {};
    fltn(data, '', r, opts);
    var k = Object.keys(r);
    var lft = k.length, o = 0, tot = 0;
    var slft = lft, files = new Array(lft);
    var term = [];
    var tAll = function tAll() {
        for(var i21 = 0; i21 < term.length; ++i21)term[i21]();
    };
    var cbf = function cbf() {
        var out = new u8(tot + 22), oe = o, cdl = tot - o;
        tot = 0;
        for(var i22 = 0; i22 < slft; ++i22){
            var f = files[i22];
            try {
                wzh(out, tot, f.c, f.d, f.m, f.n, f.u, f.p, null, f.t);
                wzh(out, o, f.c, f.d, f.m, f.n, f.u, f.p, tot, f.t), o += 46 + f.n.length, tot += 30 + f.n.length + f.d.length;
            } catch (e) {
                return cb(e, null);
            }
        }
        wzf(out, o, files.length, cdl, oe);
        cb(null, out);
    };
    if (!lft) cbf();
    var _loop_1 = function _loop_1(i23) {
        var fn = k[i23];
        var _a4 = r[fn], file = _a4[0], p = _a4[1];
        var c = crc(), m = file.length;
        c.p(file);
        var n = strToU8(fn), s = n.length;
        var t = p.level == 0 ? 0 : 8;
        var cbl = function cbl(e, d) {
            if (e) {
                tAll();
                cb(e, null);
            } else {
                var l = d.length;
                files[i23] = {
                    t: t,
                    d: d,
                    m: m,
                    c: c.d(),
                    u: fn.length != l,
                    n: n,
                    p: p
                };
                o += 30 + s + l;
                tot += 76 + 2 * s + l;
                if (!--lft) cbf();
            }
        };
        if (n.length > 65535) cbl('filename too long', null);
        if (!t) cbl(null, file);
        else if (m < 160000) try {
            cbl(null, deflateSync(file, p));
        } catch (e) {
            cbl(e, null);
        }
        else term.push(deflate(file, p, cbl));
    };
    // Cannot use lft because it can decrease
    for(var i20 = 0; i20 < slft; ++i20)_loop_1(i20);
    return tAll;
}
function zipSync(data, opts) {
    if (opts === void 0) opts = {};
    var r = {};
    var files = [];
    fltn(data, '', r, opts);
    var o = 0;
    var tot = 0;
    for(var fn in r){
        var _a5 = r[fn], file = _a5[0], p = _a5[1];
        var t = p.level == 0 ? 0 : 8;
        var n = strToU8(fn), s = n.length;
        if (n.length > 65535) throw 'filename too long';
        var d = t ? deflateSync(file, p) : file, l = d.length;
        var c = crc();
        c.p(file);
        files.push({
            t: t,
            d: d,
            m: file.length,
            c: c.d(),
            u: fn.length != s,
            n: n,
            o: o,
            p: p
        });
        o += 30 + s + l;
        tot += 76 + 2 * s + l;
    }
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    for(var i24 = 0; i24 < files.length; ++i24){
        var f = files[i24];
        wzh(out, f.o, f.c, f.d, f.m, f.n, f.u, f.p, null, f.t);
        wzh(out, o, f.c, f.d, f.m, f.n, f.u, f.p, f.o, f.t), o += 46 + f.n.length;
    }
    wzf(out, o, files.length, cdl, oe);
    return out;
}
function unzip(data, cb) {
    if (typeof cb != 'function') throw 'no callback';
    var term = [];
    var tAll = function tAll() {
        for(var i26 = 0; i26 < term.length; ++i26)term[i26]();
    };
    var files = {};
    var e1 = data.length - 22;
    for(; b4(data, e1) != 101010256; --e1)if (!e1 || data.length - e1 > 65558) {
        cb('invalid zip file', null);
        return;
    }
    var lft = b2(data, e1 + 8);
    if (!lft) cb(null, {});
    var c = lft;
    var o = b4(data, e1 + 16);
    var z = o == 4294967295;
    if (z) {
        e1 = b4(data, e1 - 12);
        if (b4(data, e1) != 101075792) throw 'invalid zip file';
        c = lft = b4(data, e1 + 32);
        o = b4(data, e1 + 48);
    }
    var _loop_2 = function _loop_2(i) {
        var _a6 = zh(data, o, z), c_1 = _a6[0], sc = _a6[1], su = _a6[2], fn = _a6[3], no = _a6[4], off = _a6[5], b = slzh(data, off);
        o = no;
        var cbl = function cbl(e, d) {
            if (e) {
                tAll();
                cb(e, null);
            } else {
                files[fn] = d;
                if (!--lft) cb(null, files);
            }
        };
        if (!c_1) cbl(null, slc(data, b, b + sc));
        else if (c_1 == 8) {
            var infl = data.subarray(b, b + sc);
            if (sc < 320000) try {
                cbl(null, inflateSync(infl, new u8(su)));
            } catch (e) {
                cbl(e, null);
            }
            else term.push(inflate(infl, {
                size: su
            }, cbl));
        } else cbl('unknown compression type ' + c_1, null);
    };
    for(var i25 = 0; i25 < c; ++i25)_loop_2(i25);
    return tAll;
}
function unzipSync(data) {
    var files = {};
    var e = data.length - 22;
    for(; b4(data, e) != 101010256; --e){
        if (!e || data.length - e > 65558) throw 'invalid zip file';
    }
    var c = b2(data, e + 8);
    if (!c) return {};
    var o = b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = b4(data, e - 12);
        if (b4(data, e) != 101075792) throw 'invalid zip file';
        c = b4(data, e + 32);
        o = b4(data, e + 48);
    }
    for(var i27 = 0; i27 < c; ++i27){
        var _a7 = zh(data, o, z), c_2 = _a7[0], sc = _a7[1], su = _a7[2], fn = _a7[3], no = _a7[4], off = _a7[5], b = slzh(data, off);
        o = no;
        if (!c_2) files[fn] = slc(data, b, b + sc);
        else if (c_2 == 8) files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));
        else throw 'unknown compression type ' + c_2;
    }
    return files;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"5ITdS":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hMvcU":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('h6Pee') + "html2canvas.5a94bfb4.js" + "?" + Date.now()).catch(function(err) {
    delete module.bundle.cache[module.id];
    throw err;
}).then(function() {
    return module.bundle.root('7021X');
});

},{"./helpers/browser/js-loader":"iTtHJ","./helpers/bundle-url":"77bZe"}],"iTtHJ":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script1 = document.createElement('script');
        script1.async = true;
        script1.type = 'text/javascript';
        script1.charset = 'utf-8';
        script1.src = bundle;
        script1.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script1.onerror = script1.onload = null;
            script1.remove();
            reject(error);
        };
        script1.onload = function() {
            script1.onerror = script1.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script1);
    });
});

},{"../cacheLoader":"65uk9"}],"65uk9":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"77bZe":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"8Ddpk":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('h6Pee') + "purify.a0efc499.js" + "?" + Date.now()).catch(function(err) {
    delete module.bundle.cache[module.id];
    throw err;
}).then(function() {
    return module.bundle.root('3bqUn');
});

},{"./helpers/browser/js-loader":"iTtHJ","./helpers/bundle-url":"77bZe"}],"l7HPv":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('h6Pee') + "index.es.45b6f393.js" + "?" + Date.now()).catch(function(err) {
    delete module.bundle.cache[module.id];
    throw err;
}).then(function() {
    return module.bundle.root('2GP9H');
});

},{"./helpers/browser/js-loader":"iTtHJ","./helpers/bundle-url":"77bZe"}],"eaZTN":[function(require,module,exports) {
/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 * 
 * @author davidshimjs
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */ var QRCode;
(function() {
    var QR8bitByte = //---------------------------------------------------------------------
    // QRCode for JavaScript
    //
    // Copyright (c) 2009 Kazuhiko Arase
    //
    // URL: http://www.d-project.com/
    //
    // Licensed under the MIT license:
    //   http://www.opensource.org/licenses/mit-license.php
    //
    // The word "QR Code" is registered trademark of 
    // DENSO WAVE INCORPORATED
    //   http://www.denso-wave.com/qrcode/faqpatent-e.html
    //
    //---------------------------------------------------------------------
    function QR8bitByte(data) {
        this.mode = QRMode.MODE_8BIT_BYTE;
        this.data = data;
        this.parsedData = [];
        // Added to support UTF-8 Characters
        for(var i = 0, l = this.data.length; i < l; i++){
            var byteArray = [];
            var code = this.data.charCodeAt(i);
            if (code > 65536) {
                byteArray[0] = 240 | (code & 1835008) >>> 18;
                byteArray[1] = 128 | (code & 258048) >>> 12;
                byteArray[2] = 128 | (code & 4032) >>> 6;
                byteArray[3] = 128 | code & 63;
            } else if (code > 2048) {
                byteArray[0] = 224 | (code & 61440) >>> 12;
                byteArray[1] = 128 | (code & 4032) >>> 6;
                byteArray[2] = 128 | code & 63;
            } else if (code > 128) {
                byteArray[0] = 192 | (code & 1984) >>> 6;
                byteArray[1] = 128 | code & 63;
            } else byteArray[0] = code;
            this.parsedData.push(byteArray);
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData);
        if (this.parsedData.length != this.data.length) {
            this.parsedData.unshift(191);
            this.parsedData.unshift(187);
            this.parsedData.unshift(239);
        }
    };
    var QRCodeModel = function QRCodeModel(typeNumber, errorCorrectLevel) {
        this.typeNumber = typeNumber;
        this.errorCorrectLevel = errorCorrectLevel;
        this.modules = null;
        this.moduleCount = 0;
        this.dataCache = null;
        this.dataList = [];
    };
    var QRPolynomial = function QRPolynomial(num, shift) {
        if (num.length == undefined) throw new Error(num.length + "/" + shift);
        var offset = 0;
        while(offset < num.length && num[offset] == 0)offset++;
        this.num = new Array(num.length - offset + shift);
        for(var i = 0; i < num.length - offset; i++)this.num[i] = num[i + offset];
    };
    var QRRSBlock = function QRRSBlock(totalCount, dataCount) {
        this.totalCount = totalCount;
        this.dataCount = dataCount;
    };
    var QRBitBuffer = function QRBitBuffer() {
        this.buffer = [];
        this.length = 0;
    };
    var _isSupportCanvas = function _isSupportCanvas() {
        return typeof CanvasRenderingContext2D != "undefined";
    };
    var _getAndroid = // android 2.x doesn't support Data-URI spec
    function _getAndroid() {
        var android = false;
        var sAgent = navigator.userAgent;
        if (/android/i.test(sAgent)) {
            android = true;
            var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);
            if (aMat && aMat[1]) android = parseFloat(aMat[1]);
        }
        return android;
    };
    var _getTypeNumber = /**
	 * Get the type by string length
	 * 
	 * @private
	 * @param {String} sText
	 * @param {Number} nCorrectLevel
	 * @return {Number} type
	 */ function _getTypeNumber(sText, nCorrectLevel) {
        var nType = 1;
        var length = _getUTF8Length(sText);
        for(var i = 0, len = QRCodeLimitLength.length; i <= len; i++){
            var nLimit = 0;
            switch(nCorrectLevel){
                case QRErrorCorrectLevel.L:
                    nLimit = QRCodeLimitLength[i][0];
                    break;
                case QRErrorCorrectLevel.M:
                    nLimit = QRCodeLimitLength[i][1];
                    break;
                case QRErrorCorrectLevel.Q:
                    nLimit = QRCodeLimitLength[i][2];
                    break;
                case QRErrorCorrectLevel.H:
                    nLimit = QRCodeLimitLength[i][3];
                    break;
            }
            if (length <= nLimit) break;
            else nType++;
        }
        if (nType > QRCodeLimitLength.length) throw new Error("Too long data");
        return nType;
    };
    var _getUTF8Length = function _getUTF8Length(sText) {
        var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
        return replacedText.length + (replacedText.length != sText ? 3 : 0);
    };
    QR8bitByte.prototype = {
        getLength: function getLength(buffer) {
            return this.parsedData.length;
        },
        write: function write(buffer) {
            for(var i = 0, l = this.parsedData.length; i < l; i++)buffer.put(this.parsedData[i], 8);
        }
    };
    QRCodeModel.prototype = {
        addData: function addData(data) {
            var newData = new QR8bitByte(data);
            this.dataList.push(newData);
            this.dataCache = null;
        },
        isDark: function isDark(row, col) {
            if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) throw new Error(row + "," + col);
            return this.modules[row][col];
        },
        getModuleCount: function getModuleCount() {
            return this.moduleCount;
        },
        make: function make() {
            this.makeImpl(false, this.getBestMaskPattern());
        },
        makeImpl: function makeImpl(test, maskPattern) {
            this.moduleCount = this.typeNumber * 4 + 17;
            this.modules = new Array(this.moduleCount);
            for(var row = 0; row < this.moduleCount; row++){
                this.modules[row] = new Array(this.moduleCount);
                for(var col = 0; col < this.moduleCount; col++)this.modules[row][col] = null;
            }
            this.setupPositionProbePattern(0, 0);
            this.setupPositionProbePattern(this.moduleCount - 7, 0);
            this.setupPositionProbePattern(0, this.moduleCount - 7);
            this.setupPositionAdjustPattern();
            this.setupTimingPattern();
            this.setupTypeInfo(test, maskPattern);
            if (this.typeNumber >= 7) this.setupTypeNumber(test);
            if (this.dataCache == null) this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
            this.mapData(this.dataCache, maskPattern);
        },
        setupPositionProbePattern: function setupPositionProbePattern(row, col) {
            for(var r = -1; r <= 7; r++){
                if (row + r <= -1 || this.moduleCount <= row + r) continue;
                for(var c = -1; c <= 7; c++){
                    if (col + c <= -1 || this.moduleCount <= col + c) continue;
                    if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) this.modules[row + r][col + c] = true;
                    else this.modules[row + r][col + c] = false;
                }
            }
        },
        getBestMaskPattern: function getBestMaskPattern() {
            var minLostPoint = 0;
            var pattern = 0;
            for(var i = 0; i < 8; i++){
                this.makeImpl(true, i);
                var lostPoint = QRUtil.getLostPoint(this);
                if (i == 0 || minLostPoint > lostPoint) {
                    minLostPoint = lostPoint;
                    pattern = i;
                }
            }
            return pattern;
        },
        createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
            var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
            var cs = 1;
            this.make();
            for(var row = 0; row < this.modules.length; row++){
                var y = row * cs;
                for(var col = 0; col < this.modules[row].length; col++){
                    var x = col * cs;
                    var dark = this.modules[row][col];
                    if (dark) {
                        qr_mc.beginFill(0, 100);
                        qr_mc.moveTo(x, y);
                        qr_mc.lineTo(x + cs, y);
                        qr_mc.lineTo(x + cs, y + cs);
                        qr_mc.lineTo(x, y + cs);
                        qr_mc.endFill();
                    }
                }
            }
            return qr_mc;
        },
        setupTimingPattern: function setupTimingPattern() {
            for(var r = 8; r < this.moduleCount - 8; r++){
                if (this.modules[r][6] != null) continue;
                this.modules[r][6] = r % 2 == 0;
            }
            for(var c = 8; c < this.moduleCount - 8; c++){
                if (this.modules[6][c] != null) continue;
                this.modules[6][c] = c % 2 == 0;
            }
        },
        setupPositionAdjustPattern: function setupPositionAdjustPattern() {
            var pos = QRUtil.getPatternPosition(this.typeNumber);
            for(var i = 0; i < pos.length; i++)for(var j = 0; j < pos.length; j++){
                var row = pos[i];
                var col = pos[j];
                if (this.modules[row][col] != null) continue;
                for(var r = -2; r <= 2; r++){
                    for(var c = -2; c <= 2; c++)if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) this.modules[row + r][col + c] = true;
                    else this.modules[row + r][col + c] = false;
                }
            }
        },
        setupTypeNumber: function setupTypeNumber(test) {
            var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
            for(var i = 0; i < 18; i++){
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
            }
            for(var i = 0; i < 18; i++){
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
            }
        },
        setupTypeInfo: function setupTypeInfo(test, maskPattern) {
            var data = this.errorCorrectLevel << 3 | maskPattern;
            var bits = QRUtil.getBCHTypeInfo(data);
            for(var i = 0; i < 15; i++){
                var mod = !test && (bits >> i & 1) == 1;
                if (i < 6) this.modules[i][8] = mod;
                else if (i < 8) this.modules[i + 1][8] = mod;
                else this.modules[this.moduleCount - 15 + i][8] = mod;
            }
            for(var i = 0; i < 15; i++){
                var mod = !test && (bits >> i & 1) == 1;
                if (i < 8) this.modules[8][this.moduleCount - i - 1] = mod;
                else if (i < 9) this.modules[8][15 - i - 1 + 1] = mod;
                else this.modules[8][15 - i - 1] = mod;
            }
            this.modules[this.moduleCount - 8][8] = !test;
        },
        mapData: function mapData(data, maskPattern) {
            var inc = -1;
            var row = this.moduleCount - 1;
            var bitIndex = 7;
            var byteIndex = 0;
            for(var col = this.moduleCount - 1; col > 0; col -= 2){
                if (col == 6) col--;
                while(true){
                    for(var c = 0; c < 2; c++)if (this.modules[row][col - c] == null) {
                        var dark = false;
                        if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                        var mask = QRUtil.getMask(maskPattern, row, col - c);
                        if (mask) dark = !dark;
                        this.modules[row][col - c] = dark;
                        bitIndex--;
                        if (bitIndex == -1) {
                            byteIndex++;
                            bitIndex = 7;
                        }
                    }
                    row += inc;
                    if (row < 0 || this.moduleCount <= row) {
                        row -= inc;
                        inc = -inc;
                        break;
                    }
                }
            }
        }
    };
    QRCodeModel.PAD0 = 236;
    QRCodeModel.PAD1 = 17;
    QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
        var buffer = new QRBitBuffer();
        for(var i = 0; i < dataList.length; i++){
            var data = dataList[i];
            buffer.put(data.mode, 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
            data.write(buffer);
        }
        var totalDataCount = 0;
        for(var i = 0; i < rsBlocks.length; i++)totalDataCount += rsBlocks[i].dataCount;
        if (buffer.getLengthInBits() > totalDataCount * 8) throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
        if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) buffer.put(0, 4);
        while(buffer.getLengthInBits() % 8 != 0)buffer.putBit(false);
        while(true){
            if (buffer.getLengthInBits() >= totalDataCount * 8) break;
            buffer.put(QRCodeModel.PAD0, 8);
            if (buffer.getLengthInBits() >= totalDataCount * 8) break;
            buffer.put(QRCodeModel.PAD1, 8);
        }
        return QRCodeModel.createBytes(buffer, rsBlocks);
    };
    QRCodeModel.createBytes = function(buffer, rsBlocks) {
        var offset = 0;
        var maxDcCount = 0;
        var maxEcCount = 0;
        var dcdata = new Array(rsBlocks.length);
        var ecdata = new Array(rsBlocks.length);
        for(var r = 0; r < rsBlocks.length; r++){
            var dcCount = rsBlocks[r].dataCount;
            var ecCount = rsBlocks[r].totalCount - dcCount;
            maxDcCount = Math.max(maxDcCount, dcCount);
            maxEcCount = Math.max(maxEcCount, ecCount);
            dcdata[r] = new Array(dcCount);
            for(var i = 0; i < dcdata[r].length; i++)dcdata[r][i] = 255 & buffer.buffer[i + offset];
            offset += dcCount;
            var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
            var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
            var modPoly = rawPoly.mod(rsPoly);
            ecdata[r] = new Array(rsPoly.getLength() - 1);
            for(var i = 0; i < ecdata[r].length; i++){
                var modIndex = i + modPoly.getLength() - ecdata[r].length;
                ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
            }
        }
        var totalCodeCount = 0;
        for(var i = 0; i < rsBlocks.length; i++)totalCodeCount += rsBlocks[i].totalCount;
        var data = new Array(totalCodeCount);
        var index = 0;
        for(var i = 0; i < maxDcCount; i++){
            for(var r = 0; r < rsBlocks.length; r++)if (i < dcdata[r].length) data[index++] = dcdata[r][i];
        }
        for(var i = 0; i < maxEcCount; i++){
            for(var r = 0; r < rsBlocks.length; r++)if (i < ecdata[r].length) data[index++] = ecdata[r][i];
        }
        return data;
    };
    var QRMode = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    };
    var QRErrorCorrectLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    };
    var QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    var QRUtil = {
        PATTERN_POSITION_TABLE: [
            [],
            [
                6,
                18
            ],
            [
                6,
                22
            ],
            [
                6,
                26
            ],
            [
                6,
                30
            ],
            [
                6,
                34
            ],
            [
                6,
                22,
                38
            ],
            [
                6,
                24,
                42
            ],
            [
                6,
                26,
                46
            ],
            [
                6,
                28,
                50
            ],
            [
                6,
                30,
                54
            ],
            [
                6,
                32,
                58
            ],
            [
                6,
                34,
                62
            ],
            [
                6,
                26,
                46,
                66
            ],
            [
                6,
                26,
                48,
                70
            ],
            [
                6,
                26,
                50,
                74
            ],
            [
                6,
                30,
                54,
                78
            ],
            [
                6,
                30,
                56,
                82
            ],
            [
                6,
                30,
                58,
                86
            ],
            [
                6,
                34,
                62,
                90
            ],
            [
                6,
                28,
                50,
                72,
                94
            ],
            [
                6,
                26,
                50,
                74,
                98
            ],
            [
                6,
                30,
                54,
                78,
                102
            ],
            [
                6,
                28,
                54,
                80,
                106
            ],
            [
                6,
                32,
                58,
                84,
                110
            ],
            [
                6,
                30,
                58,
                86,
                114
            ],
            [
                6,
                34,
                62,
                90,
                118
            ],
            [
                6,
                26,
                50,
                74,
                98,
                122
            ],
            [
                6,
                30,
                54,
                78,
                102,
                126
            ],
            [
                6,
                26,
                52,
                78,
                104,
                130
            ],
            [
                6,
                30,
                56,
                82,
                108,
                134
            ],
            [
                6,
                34,
                60,
                86,
                112,
                138
            ],
            [
                6,
                30,
                58,
                86,
                114,
                142
            ],
            [
                6,
                34,
                62,
                90,
                118,
                146
            ],
            [
                6,
                30,
                54,
                78,
                102,
                126,
                150
            ],
            [
                6,
                24,
                50,
                76,
                102,
                128,
                154
            ],
            [
                6,
                28,
                54,
                80,
                106,
                132,
                158
            ],
            [
                6,
                32,
                58,
                84,
                110,
                136,
                162
            ],
            [
                6,
                26,
                54,
                82,
                110,
                138,
                166
            ],
            [
                6,
                30,
                58,
                86,
                114,
                142,
                170
            ]
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function getBCHTypeInfo(data) {
            var d = data << 10;
            while(QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0)d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
            return (data << 10 | d) ^ QRUtil.G15_MASK;
        },
        getBCHTypeNumber: function getBCHTypeNumber(data) {
            var d = data << 12;
            while(QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0)d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
            return data << 12 | d;
        },
        getBCHDigit: function getBCHDigit(data) {
            var digit = 0;
            while(data != 0){
                digit++;
                data >>>= 1;
            }
            return digit;
        },
        getPatternPosition: function getPatternPosition(typeNumber) {
            return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        },
        getMask: function getMask(maskPattern, i, j) {
            switch(maskPattern){
                case QRMaskPattern.PATTERN000:
                    return (i + j) % 2 == 0;
                case QRMaskPattern.PATTERN001:
                    return i % 2 == 0;
                case QRMaskPattern.PATTERN010:
                    return j % 3 == 0;
                case QRMaskPattern.PATTERN011:
                    return (i + j) % 3 == 0;
                case QRMaskPattern.PATTERN100:
                    return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
                case QRMaskPattern.PATTERN101:
                    return i * j % 2 + i * j % 3 == 0;
                case QRMaskPattern.PATTERN110:
                    return (i * j % 2 + i * j % 3) % 2 == 0;
                case QRMaskPattern.PATTERN111:
                    return (i * j % 3 + (i + j) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + maskPattern);
            }
        },
        getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
            var a = new QRPolynomial([
                1
            ], 0);
            for(var i = 0; i < errorCorrectLength; i++)a = a.multiply(new QRPolynomial([
                1,
                QRMath.gexp(i)
            ], 0));
            return a;
        },
        getLengthInBits: function getLengthInBits(mode, type) {
            if (1 <= type && type < 10) switch(mode){
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                    return 8;
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + mode);
            }
            else if (type < 27) switch(mode){
                case QRMode.MODE_NUMBER:
                    return 12;
                case QRMode.MODE_ALPHA_NUM:
                    return 11;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + mode);
            }
            else if (type < 41) switch(mode){
                case QRMode.MODE_NUMBER:
                    return 14;
                case QRMode.MODE_ALPHA_NUM:
                    return 13;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + mode);
            }
            else throw new Error("type:" + type);
        },
        getLostPoint: function getLostPoint(qrCode) {
            var moduleCount = qrCode.getModuleCount();
            var lostPoint = 0;
            for(var row = 0; row < moduleCount; row++)for(var col = 0; col < moduleCount; col++){
                var sameCount = 0;
                var dark = qrCode.isDark(row, col);
                for(var r = -1; r <= 1; r++){
                    if (row + r < 0 || moduleCount <= row + r) continue;
                    for(var c = -1; c <= 1; c++){
                        if (col + c < 0 || moduleCount <= col + c) continue;
                        if (r == 0 && c == 0) continue;
                        if (dark == qrCode.isDark(row + r, col + c)) sameCount++;
                    }
                }
                if (sameCount > 5) lostPoint += 3 + sameCount - 5;
            }
            for(var row = 0; row < moduleCount - 1; row++)for(var col = 0; col < moduleCount - 1; col++){
                var count = 0;
                if (qrCode.isDark(row, col)) count++;
                if (qrCode.isDark(row + 1, col)) count++;
                if (qrCode.isDark(row, col + 1)) count++;
                if (qrCode.isDark(row + 1, col + 1)) count++;
                if (count == 0 || count == 4) lostPoint += 3;
            }
            for(var row = 0; row < moduleCount; row++){
                for(var col = 0; col < moduleCount - 6; col++)if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) lostPoint += 40;
            }
            for(var col = 0; col < moduleCount; col++){
                for(var row = 0; row < moduleCount - 6; row++)if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) lostPoint += 40;
            }
            var darkCount = 0;
            for(var col = 0; col < moduleCount; col++){
                for(var row = 0; row < moduleCount; row++)if (qrCode.isDark(row, col)) darkCount++;
            }
            var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            lostPoint += ratio * 10;
            return lostPoint;
        }
    };
    var QRMath = {
        glog: function glog(n) {
            if (n < 1) throw new Error("glog(" + n + ")");
            return QRMath.LOG_TABLE[n];
        },
        gexp: function gexp(n) {
            while(n < 0)n += 255;
            while(n >= 256)n -= 255;
            return QRMath.EXP_TABLE[n];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    };
    for(var i1 = 0; i1 < 8; i1++)QRMath.EXP_TABLE[i1] = 1 << i1;
    for(var i1 = 8; i1 < 256; i1++)QRMath.EXP_TABLE[i1] = QRMath.EXP_TABLE[i1 - 4] ^ QRMath.EXP_TABLE[i1 - 5] ^ QRMath.EXP_TABLE[i1 - 6] ^ QRMath.EXP_TABLE[i1 - 8];
    for(var i1 = 0; i1 < 255; i1++)QRMath.LOG_TABLE[QRMath.EXP_TABLE[i1]] = i1;
    QRPolynomial.prototype = {
        get: function get(index) {
            return this.num[index];
        },
        getLength: function getLength() {
            return this.num.length;
        },
        multiply: function multiply(e) {
            var num = new Array(this.getLength() + e.getLength() - 1);
            for(var i = 0; i < this.getLength(); i++)for(var j = 0; j < e.getLength(); j++)num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
            return new QRPolynomial(num, 0);
        },
        mod: function mod(e) {
            if (this.getLength() - e.getLength() < 0) return this;
            var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
            var num = new Array(this.getLength());
            for(var i = 0; i < this.getLength(); i++)num[i] = this.get(i);
            for(var i = 0; i < e.getLength(); i++)num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
            return new QRPolynomial(num, 0).mod(e);
        }
    };
    QRRSBlock.RS_BLOCK_TABLE = [
        [
            1,
            26,
            19
        ],
        [
            1,
            26,
            16
        ],
        [
            1,
            26,
            13
        ],
        [
            1,
            26,
            9
        ],
        [
            1,
            44,
            34
        ],
        [
            1,
            44,
            28
        ],
        [
            1,
            44,
            22
        ],
        [
            1,
            44,
            16
        ],
        [
            1,
            70,
            55
        ],
        [
            1,
            70,
            44
        ],
        [
            2,
            35,
            17
        ],
        [
            2,
            35,
            13
        ],
        [
            1,
            100,
            80
        ],
        [
            2,
            50,
            32
        ],
        [
            2,
            50,
            24
        ],
        [
            4,
            25,
            9
        ],
        [
            1,
            134,
            108
        ],
        [
            2,
            67,
            43
        ],
        [
            2,
            33,
            15,
            2,
            34,
            16
        ],
        [
            2,
            33,
            11,
            2,
            34,
            12
        ],
        [
            2,
            86,
            68
        ],
        [
            4,
            43,
            27
        ],
        [
            4,
            43,
            19
        ],
        [
            4,
            43,
            15
        ],
        [
            2,
            98,
            78
        ],
        [
            4,
            49,
            31
        ],
        [
            2,
            32,
            14,
            4,
            33,
            15
        ],
        [
            4,
            39,
            13,
            1,
            40,
            14
        ],
        [
            2,
            121,
            97
        ],
        [
            2,
            60,
            38,
            2,
            61,
            39
        ],
        [
            4,
            40,
            18,
            2,
            41,
            19
        ],
        [
            4,
            40,
            14,
            2,
            41,
            15
        ],
        [
            2,
            146,
            116
        ],
        [
            3,
            58,
            36,
            2,
            59,
            37
        ],
        [
            4,
            36,
            16,
            4,
            37,
            17
        ],
        [
            4,
            36,
            12,
            4,
            37,
            13
        ],
        [
            2,
            86,
            68,
            2,
            87,
            69
        ],
        [
            4,
            69,
            43,
            1,
            70,
            44
        ],
        [
            6,
            43,
            19,
            2,
            44,
            20
        ],
        [
            6,
            43,
            15,
            2,
            44,
            16
        ],
        [
            4,
            101,
            81
        ],
        [
            1,
            80,
            50,
            4,
            81,
            51
        ],
        [
            4,
            50,
            22,
            4,
            51,
            23
        ],
        [
            3,
            36,
            12,
            8,
            37,
            13
        ],
        [
            2,
            116,
            92,
            2,
            117,
            93
        ],
        [
            6,
            58,
            36,
            2,
            59,
            37
        ],
        [
            4,
            46,
            20,
            6,
            47,
            21
        ],
        [
            7,
            42,
            14,
            4,
            43,
            15
        ],
        [
            4,
            133,
            107
        ],
        [
            8,
            59,
            37,
            1,
            60,
            38
        ],
        [
            8,
            44,
            20,
            4,
            45,
            21
        ],
        [
            12,
            33,
            11,
            4,
            34,
            12
        ],
        [
            3,
            145,
            115,
            1,
            146,
            116
        ],
        [
            4,
            64,
            40,
            5,
            65,
            41
        ],
        [
            11,
            36,
            16,
            5,
            37,
            17
        ],
        [
            11,
            36,
            12,
            5,
            37,
            13
        ],
        [
            5,
            109,
            87,
            1,
            110,
            88
        ],
        [
            5,
            65,
            41,
            5,
            66,
            42
        ],
        [
            5,
            54,
            24,
            7,
            55,
            25
        ],
        [
            11,
            36,
            12
        ],
        [
            5,
            122,
            98,
            1,
            123,
            99
        ],
        [
            7,
            73,
            45,
            3,
            74,
            46
        ],
        [
            15,
            43,
            19,
            2,
            44,
            20
        ],
        [
            3,
            45,
            15,
            13,
            46,
            16
        ],
        [
            1,
            135,
            107,
            5,
            136,
            108
        ],
        [
            10,
            74,
            46,
            1,
            75,
            47
        ],
        [
            1,
            50,
            22,
            15,
            51,
            23
        ],
        [
            2,
            42,
            14,
            17,
            43,
            15
        ],
        [
            5,
            150,
            120,
            1,
            151,
            121
        ],
        [
            9,
            69,
            43,
            4,
            70,
            44
        ],
        [
            17,
            50,
            22,
            1,
            51,
            23
        ],
        [
            2,
            42,
            14,
            19,
            43,
            15
        ],
        [
            3,
            141,
            113,
            4,
            142,
            114
        ],
        [
            3,
            70,
            44,
            11,
            71,
            45
        ],
        [
            17,
            47,
            21,
            4,
            48,
            22
        ],
        [
            9,
            39,
            13,
            16,
            40,
            14
        ],
        [
            3,
            135,
            107,
            5,
            136,
            108
        ],
        [
            3,
            67,
            41,
            13,
            68,
            42
        ],
        [
            15,
            54,
            24,
            5,
            55,
            25
        ],
        [
            15,
            43,
            15,
            10,
            44,
            16
        ],
        [
            4,
            144,
            116,
            4,
            145,
            117
        ],
        [
            17,
            68,
            42
        ],
        [
            17,
            50,
            22,
            6,
            51,
            23
        ],
        [
            19,
            46,
            16,
            6,
            47,
            17
        ],
        [
            2,
            139,
            111,
            7,
            140,
            112
        ],
        [
            17,
            74,
            46
        ],
        [
            7,
            54,
            24,
            16,
            55,
            25
        ],
        [
            34,
            37,
            13
        ],
        [
            4,
            151,
            121,
            5,
            152,
            122
        ],
        [
            4,
            75,
            47,
            14,
            76,
            48
        ],
        [
            11,
            54,
            24,
            14,
            55,
            25
        ],
        [
            16,
            45,
            15,
            14,
            46,
            16
        ],
        [
            6,
            147,
            117,
            4,
            148,
            118
        ],
        [
            6,
            73,
            45,
            14,
            74,
            46
        ],
        [
            11,
            54,
            24,
            16,
            55,
            25
        ],
        [
            30,
            46,
            16,
            2,
            47,
            17
        ],
        [
            8,
            132,
            106,
            4,
            133,
            107
        ],
        [
            8,
            75,
            47,
            13,
            76,
            48
        ],
        [
            7,
            54,
            24,
            22,
            55,
            25
        ],
        [
            22,
            45,
            15,
            13,
            46,
            16
        ],
        [
            10,
            142,
            114,
            2,
            143,
            115
        ],
        [
            19,
            74,
            46,
            4,
            75,
            47
        ],
        [
            28,
            50,
            22,
            6,
            51,
            23
        ],
        [
            33,
            46,
            16,
            4,
            47,
            17
        ],
        [
            8,
            152,
            122,
            4,
            153,
            123
        ],
        [
            22,
            73,
            45,
            3,
            74,
            46
        ],
        [
            8,
            53,
            23,
            26,
            54,
            24
        ],
        [
            12,
            45,
            15,
            28,
            46,
            16
        ],
        [
            3,
            147,
            117,
            10,
            148,
            118
        ],
        [
            3,
            73,
            45,
            23,
            74,
            46
        ],
        [
            4,
            54,
            24,
            31,
            55,
            25
        ],
        [
            11,
            45,
            15,
            31,
            46,
            16
        ],
        [
            7,
            146,
            116,
            7,
            147,
            117
        ],
        [
            21,
            73,
            45,
            7,
            74,
            46
        ],
        [
            1,
            53,
            23,
            37,
            54,
            24
        ],
        [
            19,
            45,
            15,
            26,
            46,
            16
        ],
        [
            5,
            145,
            115,
            10,
            146,
            116
        ],
        [
            19,
            75,
            47,
            10,
            76,
            48
        ],
        [
            15,
            54,
            24,
            25,
            55,
            25
        ],
        [
            23,
            45,
            15,
            25,
            46,
            16
        ],
        [
            13,
            145,
            115,
            3,
            146,
            116
        ],
        [
            2,
            74,
            46,
            29,
            75,
            47
        ],
        [
            42,
            54,
            24,
            1,
            55,
            25
        ],
        [
            23,
            45,
            15,
            28,
            46,
            16
        ],
        [
            17,
            145,
            115
        ],
        [
            10,
            74,
            46,
            23,
            75,
            47
        ],
        [
            10,
            54,
            24,
            35,
            55,
            25
        ],
        [
            19,
            45,
            15,
            35,
            46,
            16
        ],
        [
            17,
            145,
            115,
            1,
            146,
            116
        ],
        [
            14,
            74,
            46,
            21,
            75,
            47
        ],
        [
            29,
            54,
            24,
            19,
            55,
            25
        ],
        [
            11,
            45,
            15,
            46,
            46,
            16
        ],
        [
            13,
            145,
            115,
            6,
            146,
            116
        ],
        [
            14,
            74,
            46,
            23,
            75,
            47
        ],
        [
            44,
            54,
            24,
            7,
            55,
            25
        ],
        [
            59,
            46,
            16,
            1,
            47,
            17
        ],
        [
            12,
            151,
            121,
            7,
            152,
            122
        ],
        [
            12,
            75,
            47,
            26,
            76,
            48
        ],
        [
            39,
            54,
            24,
            14,
            55,
            25
        ],
        [
            22,
            45,
            15,
            41,
            46,
            16
        ],
        [
            6,
            151,
            121,
            14,
            152,
            122
        ],
        [
            6,
            75,
            47,
            34,
            76,
            48
        ],
        [
            46,
            54,
            24,
            10,
            55,
            25
        ],
        [
            2,
            45,
            15,
            64,
            46,
            16
        ],
        [
            17,
            152,
            122,
            4,
            153,
            123
        ],
        [
            29,
            74,
            46,
            14,
            75,
            47
        ],
        [
            49,
            54,
            24,
            10,
            55,
            25
        ],
        [
            24,
            45,
            15,
            46,
            46,
            16
        ],
        [
            4,
            152,
            122,
            18,
            153,
            123
        ],
        [
            13,
            74,
            46,
            32,
            75,
            47
        ],
        [
            48,
            54,
            24,
            14,
            55,
            25
        ],
        [
            42,
            45,
            15,
            32,
            46,
            16
        ],
        [
            20,
            147,
            117,
            4,
            148,
            118
        ],
        [
            40,
            75,
            47,
            7,
            76,
            48
        ],
        [
            43,
            54,
            24,
            22,
            55,
            25
        ],
        [
            10,
            45,
            15,
            67,
            46,
            16
        ],
        [
            19,
            148,
            118,
            6,
            149,
            119
        ],
        [
            18,
            75,
            47,
            31,
            76,
            48
        ],
        [
            34,
            54,
            24,
            34,
            55,
            25
        ],
        [
            20,
            45,
            15,
            61,
            46,
            16
        ]
    ];
    QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
        var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
        if (rsBlock == undefined) throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
        var length = rsBlock.length / 3;
        var list = [];
        for(var i = 0; i < length; i++){
            var count = rsBlock[i * 3 + 0];
            var totalCount = rsBlock[i * 3 + 1];
            var dataCount = rsBlock[i * 3 + 2];
            for(var j = 0; j < count; j++)list.push(new QRRSBlock(totalCount, dataCount));
        }
        return list;
    };
    QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
        switch(errorCorrectLevel){
            case QRErrorCorrectLevel.L:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
            case QRErrorCorrectLevel.M:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
            case QRErrorCorrectLevel.Q:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
            case QRErrorCorrectLevel.H:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
            default:
                return undefined;
        }
    };
    QRBitBuffer.prototype = {
        get: function get(index) {
            var bufIndex = Math.floor(index / 8);
            return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
        },
        put: function put(num, length) {
            for(var i = 0; i < length; i++)this.putBit((num >>> length - i - 1 & 1) == 1);
        },
        getLengthInBits: function getLengthInBits() {
            return this.length;
        },
        putBit: function putBit(bit) {
            var bufIndex = Math.floor(this.length / 8);
            if (this.buffer.length <= bufIndex) this.buffer.push(0);
            if (bit) this.buffer[bufIndex] |= 128 >>> this.length % 8;
            this.length++;
        }
    };
    var QRCodeLimitLength = [
        [
            17,
            14,
            11,
            7
        ],
        [
            32,
            26,
            20,
            14
        ],
        [
            53,
            42,
            32,
            24
        ],
        [
            78,
            62,
            46,
            34
        ],
        [
            106,
            84,
            60,
            44
        ],
        [
            134,
            106,
            74,
            58
        ],
        [
            154,
            122,
            86,
            64
        ],
        [
            192,
            152,
            108,
            84
        ],
        [
            230,
            180,
            130,
            98
        ],
        [
            271,
            213,
            151,
            119
        ],
        [
            321,
            251,
            177,
            137
        ],
        [
            367,
            287,
            203,
            155
        ],
        [
            425,
            331,
            241,
            177
        ],
        [
            458,
            362,
            258,
            194
        ],
        [
            520,
            412,
            292,
            220
        ],
        [
            586,
            450,
            322,
            250
        ],
        [
            644,
            504,
            364,
            280
        ],
        [
            718,
            560,
            394,
            310
        ],
        [
            792,
            624,
            442,
            338
        ],
        [
            858,
            666,
            482,
            382
        ],
        [
            929,
            711,
            509,
            403
        ],
        [
            1003,
            779,
            565,
            439
        ],
        [
            1091,
            857,
            611,
            461
        ],
        [
            1171,
            911,
            661,
            511
        ],
        [
            1273,
            997,
            715,
            535
        ],
        [
            1367,
            1059,
            751,
            593
        ],
        [
            1465,
            1125,
            805,
            625
        ],
        [
            1528,
            1190,
            868,
            658
        ],
        [
            1628,
            1264,
            908,
            698
        ],
        [
            1732,
            1370,
            982,
            742
        ],
        [
            1840,
            1452,
            1030,
            790
        ],
        [
            1952,
            1538,
            1112,
            842
        ],
        [
            2068,
            1628,
            1168,
            898
        ],
        [
            2188,
            1722,
            1228,
            958
        ],
        [
            2303,
            1809,
            1283,
            983
        ],
        [
            2431,
            1911,
            1351,
            1051
        ],
        [
            2563,
            1989,
            1423,
            1093
        ],
        [
            2699,
            2099,
            1499,
            1139
        ],
        [
            2809,
            2213,
            1579,
            1219
        ],
        [
            2953,
            2331,
            1663,
            1273
        ]
    ];
    var svgDrawer = function() {
        var Drawing = function Drawing(el, htOption) {
            this._el = el;
            this._htOption = htOption;
        };
        Drawing.prototype.draw = function(oQRCode) {
            var makeSVG = function makeSVG(tag, attrs) {
                var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
                for(var k in attrs)if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
                return el;
            };
            var _htOption = this._htOption;
            var _el = this._el;
            var nCount = oQRCode.getModuleCount();
            var nWidth = Math.floor(_htOption.width / nCount);
            var nHeight = Math.floor(_htOption.height / nCount);
            this.clear();
            var svg = makeSVG("svg", {
                'viewBox': '0 0 ' + String(nCount) + " " + String(nCount),
                'width': '100%',
                'height': '100%',
                'fill': _htOption.colorLight
            });
            svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            _el.appendChild(svg);
            svg.appendChild(makeSVG("rect", {
                "fill": _htOption.colorLight,
                "width": "100%",
                "height": "100%"
            }));
            svg.appendChild(makeSVG("rect", {
                "fill": _htOption.colorDark,
                "width": "1",
                "height": "1",
                "id": "template"
            }));
            for(var row = 0; row < nCount; row++){
                for(var col = 0; col < nCount; col++)if (oQRCode.isDark(row, col)) {
                    var child = makeSVG("use", {
                        "x": String(col),
                        "y": String(row)
                    });
                    child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template");
                    svg.appendChild(child);
                }
            }
        };
        Drawing.prototype.clear = function() {
            while(this._el.hasChildNodes())this._el.removeChild(this._el.lastChild);
        };
        return Drawing;
    }();
    var useSVG = document.documentElement.tagName.toLowerCase() === "svg";
    // Drawing in DOM by using Table tag
    var Drawing1 = useSVG ? svgDrawer : !_isSupportCanvas() ? function() {
        var Drawing = function Drawing(el, htOption) {
            this._el = el;
            this._htOption = htOption;
        };
        /**
		 * Draw the QRCode
		 * 
		 * @param {QRCode} oQRCode
		 */ Drawing.prototype.draw = function(oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
            var nCount = oQRCode.getModuleCount();
            var nWidth = Math.floor(_htOption.width / nCount);
            var nHeight = Math.floor(_htOption.height / nCount);
            var aHTML = [
                '<table style="border:0;border-collapse:collapse;">'
            ];
            for(var row = 0; row < nCount; row++){
                aHTML.push('<tr>');
                for(var col = 0; col < nCount; col++)aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
                aHTML.push('</tr>');
            }
            aHTML.push('</table>');
            _el.innerHTML = aHTML.join('');
            // Fix the margin values as real size.
            var elTable = _el.childNodes[0];
            var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
            var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;
            if (nLeftMarginTable > 0 && nTopMarginTable > 0) elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
        };
        /**
		 * Clear the QRCode
		 */ Drawing.prototype.clear = function() {
            this._el.innerHTML = '';
        };
        return Drawing;
    }() : function() {
        var _onMakeImage = function _onMakeImage() {
            this._elImage.src = this._elCanvas.toDataURL("image/png");
            this._elImage.style.display = "block";
            this._elCanvas.style.display = "none";
        };
        var _safeSetDataURI = /**
		 * Check whether the user's browser supports Data URI or not
		 * 
		 * @private
		 * @param {Function} fSuccess Occurs if it supports Data URI
		 * @param {Function} fFail Occurs if it doesn't support Data URI
		 */ function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;
            // Check it just once
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function fOnError() {
                    self._bSupportDataURI = false;
                    if (self._fFail) self._fFail.call(self);
                };
                var fOnSuccess = function fOnSuccess() {
                    self._bSupportDataURI = true;
                    if (self._fSuccess) self._fSuccess.call(self);
                };
                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                return;
            } else if (self._bSupportDataURI === true && self._fSuccess) self._fSuccess.call(self);
            else if (self._bSupportDataURI === false && self._fFail) self._fFail.call(self);
        };
        // Android 2.1 bug workaround
        // http://code.google.com/p/android/issues/detail?id=5141
        if (this._android && this._android <= 2.1) {
            var factor = 1 / window.devicePixelRatio;
            var drawImage = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function(image, sx, sy, sw, sh, dx, dy, dw, dh) {
                if ("nodeName" in image && /img/i.test(image.nodeName)) for(var i = arguments.length - 1; i >= 1; i--)arguments[i] = arguments[i] * factor;
                else if (typeof dw == "undefined") {
                    arguments[1] *= factor;
                    arguments[2] *= factor;
                    arguments[3] *= factor;
                    arguments[4] *= factor;
                }
                drawImage.apply(this, arguments);
            };
        }
        /**
		 * Drawing QRCode by using canvas
		 * 
		 * @constructor
		 * @param {HTMLElement} el
		 * @param {Object} htOption QRCode Options 
		 */ var Drawing = function Drawing(el, htOption) {
            this._bIsPainted = false;
            this._android = _getAndroid();
            this._htOption = htOption;
            this._elCanvas = document.createElement("canvas");
            this._elCanvas.width = htOption.width;
            this._elCanvas.height = htOption.height;
            el.appendChild(this._elCanvas);
            this._el = el;
            this._oContext = this._elCanvas.getContext("2d");
            this._bIsPainted = false;
            this._elImage = document.createElement("img");
            this._elImage.alt = "Scan me!";
            this._elImage.style.display = "none";
            this._el.appendChild(this._elImage);
            this._bSupportDataURI = null;
        };
        /**
		 * Draw the QRCode
		 * 
		 * @param {QRCode} oQRCode 
		 */ Drawing.prototype.draw = function(oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;
            var nCount = oQRCode.getModuleCount();
            var nWidth = _htOption.width / nCount;
            var nHeight = _htOption.height / nCount;
            var nRoundedWidth = Math.round(nWidth);
            var nRoundedHeight = Math.round(nHeight);
            _elImage.style.display = "none";
            this.clear();
            for(var row = 0; row < nCount; row++)for(var col = 0; col < nCount; col++){
                var bIsDark = oQRCode.isDark(row, col);
                var nLeft = col * nWidth;
                var nTop = row * nHeight;
                _oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
                _oContext.lineWidth = 1;
                _oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
                _oContext.fillRect(nLeft, nTop, nWidth, nHeight);
                // 안티 앨리어싱 방지 처리
                _oContext.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight);
                _oContext.strokeRect(Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight);
            }
            this._bIsPainted = true;
        };
        /**
		 * Make the image from Canvas if the browser supports Data URI.
		 */ Drawing.prototype.makeImage = function() {
            if (this._bIsPainted) _safeSetDataURI.call(this, _onMakeImage);
        };
        /**
		 * Return whether the QRCode is painted or not
		 * 
		 * @return {Boolean}
		 */ Drawing.prototype.isPainted = function() {
            return this._bIsPainted;
        };
        /**
		 * Clear the QRCode
		 */ Drawing.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
            this._bIsPainted = false;
        };
        /**
		 * @private
		 * @param {Number} nNumber
		 */ Drawing.prototype.round = function(nNumber) {
            if (!nNumber) return nNumber;
            return Math.floor(nNumber * 1000) / 1000;
        };
        return Drawing;
    }();
    /**
	 * @class QRCode
	 * @constructor
	 * @example 
	 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
	 *
	 * @example
	 * var oQRCode = new QRCode("test", {
	 *    text : "http://naver.com",
	 *    width : 128,
	 *    height : 128
	 * });
	 * 
	 * oQRCode.clear(); // Clear the QRCode.
	 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
	 *
	 * @param {HTMLElement|String} el target element or 'id' attribute of element.
	 * @param {Object|String} vOption
	 * @param {String} vOption.text QRCode link data
	 * @param {Number} [vOption.width=256]
	 * @param {Number} [vOption.height=256]
	 * @param {String} [vOption.colorDark="#000000"]
	 * @param {String} [vOption.colorLight="#ffffff"]
	 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H] 
	 */ QRCode = function QRCode(el, vOption) {
        this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRErrorCorrectLevel.H
        };
        if (typeof vOption === 'string') vOption = {
            text: vOption
        };
        // Overwrites options
        if (vOption) for(var i in vOption)this._htOption[i] = vOption[i];
        if (typeof el == "string") el = document.getElementById(el);
        if (this._htOption.useSVG) Drawing1 = svgDrawer;
        this._android = _getAndroid();
        this._el = el;
        this._oQRCode = null;
        this._oDrawing = new Drawing1(this._el, this._htOption);
        if (this._htOption.text) this.makeCode(this._htOption.text);
    };
    /**
	 * Make the QRCode
	 * 
	 * @param {String} sText link data
	 */ QRCode.prototype.makeCode = function(sText) {
        this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
        this._oQRCode.addData(sText);
        this._oQRCode.make();
        this._el.title = sText;
        this._oDrawing.draw(this._oQRCode);
        this.makeImage();
    };
    /**
	 * Make the Image from Canvas element
	 * - It occurs automatically
	 * - Android below 3 doesn't support Data-URI spec.
	 * 
	 * @private
	 */ QRCode.prototype.makeImage = function() {
        if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) this._oDrawing.makeImage();
    };
    /**
	 * Clear the QRCode
	 */ QRCode.prototype.clear = function() {
        this._oDrawing.clear();
    };
    /**
	 * @name QRCode.CorrectLevel
	 */ QRCode.CorrectLevel = QRErrorCorrectLevel;
})();
module.exports = QRCode;

},{}],"62aOL":[function() {},{}]},["lndM7","jUwgS"], "jUwgS", "parcelRequiree382")

//# sourceMappingURL=main.js.map
