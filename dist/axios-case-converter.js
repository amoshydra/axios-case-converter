(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.AxiosCaseConverter = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
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

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  /**
   * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
   */
  /**
   * Lower case as a function.
   */
  function lowerCase(str) {
      return str.toLowerCase();
  }

  // Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
  var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
  // Remove all non-word characters.
  var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
  /**
   * Normalize the string into something other libraries can manipulate easier.
   */
  function noCase(input, options) {
      if (options === void 0) { options = {}; }
      var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
      var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
      var start = 0;
      var end = result.length;
      // Trim the delimiter from around the output string.
      while (result.charAt(start) === "\0")
          start++;
      while (result.charAt(end - 1) === "\0")
          end--;
      // Transform each token independently.
      return result
          .slice(start, end)
          .split("\0")
          .map(transform)
          .join(delimiter);
  }
  /**
   * Replace `re` in the input string with the replacement value.
   */
  function replace(input, re, value) {
      if (re instanceof RegExp)
          return input.replace(re, value);
      return re.reduce(function (input, re) { return input.replace(re, value); }, input);
  }

  function pascalCaseTransform(input, index) {
      var firstChar = input.charAt(0);
      var lowerChars = input.substr(1).toLowerCase();
      if (index > 0 && firstChar >= "0" && firstChar <= "9") {
          return "_" + firstChar + lowerChars;
      }
      return "" + firstChar.toUpperCase() + lowerChars;
  }
  function pascalCase(input, options) {
      if (options === void 0) { options = {}; }
      return noCase(input, __assign({ delimiter: "", transform: pascalCaseTransform }, options));
  }

  function camelCaseTransform(input, index) {
      if (index === 0)
          return input.toLowerCase();
      return pascalCaseTransform(input, index);
  }
  function camelCase(input, options) {
      if (options === void 0) { options = {}; }
      return pascalCase(input, __assign({ transform: camelCaseTransform }, options));
  }

  /**
   * Upper case the first character of an input string.
   */
  function upperCaseFirst(input) {
      return input.charAt(0).toUpperCase() + input.substr(1);
  }

  function capitalCaseTransform(input) {
      return upperCaseFirst(input.toLowerCase());
  }
  function capitalCase(input, options) {
      if (options === void 0) { options = {}; }
      return noCase(input, __assign({ delimiter: " ", transform: capitalCaseTransform }, options));
  }

  function dotCase(input, options) {
      if (options === void 0) { options = {}; }
      return noCase(input, __assign({ delimiter: "." }, options));
  }

  function headerCase(input, options) {
      if (options === void 0) { options = {}; }
      return capitalCase(input, __assign({ delimiter: "-" }, options));
  }

  function snakeCase(input, options) {
      if (options === void 0) { options = {}; }
      return dotCase(input, __assign({ delimiter: "_" }, options));
  }

  var applyCaseOptions = function applyCaseOptions(fn, defaultOptions) {
    return function (input, options) {
      return fn(input, _objectSpread2(_objectSpread2({}, defaultOptions), options));
    };
  };
  var preserveSpecificKeys = function preserveSpecificKeys(fn, keys) {
    var condition = typeof keys === "function" ? keys : function (input) {
      return keys.includes(input);
    };
    return function (input, options) {
      return condition(input, options) ? input : fn(input, options);
    };
  };

  var isURLSearchParams = function isURLSearchParams(value) {
    return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
  };
  var isFormData = function isFormData(value) {
    return typeof FormData !== "undefined" && value instanceof FormData;
  };
  var isPlainObject = function isPlainObject(value) {
    return _typeof(value) === "object" && value !== null && Object.prototype.toString.call(value) === "[object Object]";
  };
  var isTransformable = function isTransformable(value) {
    return Array.isArray(value) || isPlainObject(value) || isFormData(value) || isURLSearchParams(value);
  };

  var caseFunctions = {
    snake: snakeCase,
    camel: camelCase,
    header: headerCase
  };

  var transformObjectUsingCallbackRecursive = function transformObjectUsingCallbackRecursive(data, fn, overwrite) {
    if (!isTransformable(data)) {
      return data;
    }
    /* eslint-disable no-console */
    // Check FormData/URLSearchParams compatibility


    if ((isFormData(data) || isURLSearchParams(data)) && (!data.entries || overwrite && !data["delete"])) {
      var type = isFormData(data) ? "FormData" : "URLSearchParams";
      var polyfill = isFormData(data) ? "https://github.com/jimmywarting/FormData" : "https://github.com/jerrybendy/url-search-params-polyfill";

      if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
        // You cannot transform FormData/URLSearchParams on React Native
        console.warn("Be careful that ".concat(type, " cannot be transformed on React Native. If you intentionally implemented, ignore this kind of warning: https://facebook.github.io/react-native/docs/debugging.html"));
      } else {
        if (!data.entries) {
          // You need to polyfill `entries` method
          console.warn("You must use polyfill of ".concat(type, ".prototype.entries() on Internet Explorer or Safari: ").concat(polyfill));
        }

        if (overwrite && !data["delete"]) {
          // You need to polyfill `delete` method for overwriting
          console.warn("You must use polyfill of ".concat(type, ".prototype.delete() on Internet Explorer or Safari: ").concat(polyfill));
        }
      }

      return data;
    }
    /* eslint-enable no-console */


    var prototype = Object.getPrototypeOf(data); // Storage of new values.
    // New instances are created when overwriting is disabled.

    var store = overwrite ? data : !prototype ? Object.create(null) : new prototype.constructor(); // We need to clean up all entries before overwriting.

    var series;

    if (isFormData(data) || isURLSearchParams(data)) {
      // Create native iterator from FormData/URLSearchParams
      series = data.entries();

      if (overwrite) {
        // When overwriting, native iterator needs to be copied as array.
        series = _toConsumableArray(series);

        var _iterator = _createForOfIteratorHelper(series),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 1),
                key = _step$value[0];

            data["delete"](key);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    } else {
      // Create array from objects
      series = Object.entries(data); // Array keys never change, so we don't need to clean up

      if (overwrite && !Array.isArray(data)) {
        var _iterator2 = _createForOfIteratorHelper(series),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 1),
                _key = _step2$value[0];

            delete data[_key];
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }

    var _iterator3 = _createForOfIteratorHelper(series),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            _key2 = _step3$value[0],
            value = _step3$value[1];

        if (isFormData(store) || isURLSearchParams(store)) {
          store.append(fn(_key2), value);
        } else if (_key2 !== "__proto__") {
          store[fn(typeof _key2 === "string" ? _key2 : "".concat(_key2))] = transformObjectUsingCallbackRecursive(value, fn, overwrite);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return store;
  };

  var transformObjectUsingCallback = function transformObjectUsingCallback(data, fn, options) {
    fn = applyCaseOptions(fn, _objectSpread2({
      stripRegexp: /[^A-Z0-9[\]]+/gi
    }, options === null || options === void 0 ? void 0 : options.caseOptions));

    if (options === null || options === void 0 ? void 0 : options.preservedKeys) {
      fn = preserveSpecificKeys(fn, options.preservedKeys);
    }

    return transformObjectUsingCallbackRecursive(data, fn, (options === null || options === void 0 ? void 0 : options.overwrite) || false);
  };

  var createObjectTransformer = function createObjectTransformer(fn) {
    return function (data, options) {
      return transformObjectUsingCallback(data, fn, options);
    };
  };
  var createObjectTransformerOf = function createObjectTransformerOf(functionName, options) {
    return createObjectTransformer((options === null || options === void 0 ? void 0 : options[functionName]) || caseFunctions[functionName]);
  };
  var createObjectTransformers = function createObjectTransformers(options) {
    var functionNames = Object.keys(caseFunctions);
    var objectTransformers = {};

    for (var _i = 0, _functionNames = functionNames; _i < _functionNames.length; _i++) {
      var functionName = _functionNames[_i];
      objectTransformers[functionName] = createObjectTransformerOf(functionName, options);
    }

    return objectTransformers;
  };

  var createSnakeParamsInterceptor = function createSnakeParamsInterceptor(options) {
    var _createObjectTransfor = createObjectTransformers(options === null || options === void 0 ? void 0 : options.caseFunctions),
        snake = _createObjectTransfor.snake;

    return function (config) {
      if (config.params) {
        config.params = snake(config.params, options);
      }

      return config;
    };
  };
  var createSnakeRequestTransformer = function createSnakeRequestTransformer(options) {
    var _createObjectTransfor2 = createObjectTransformers(options === null || options === void 0 ? void 0 : options.caseFunctions),
        snake = _createObjectTransfor2.snake,
        header = _createObjectTransfor2.header;

    return function (data, headers) {
      if (!(options === null || options === void 0 ? void 0 : options.ignoreHeaders) && isPlainObject(headers)) {
        for (var _i = 0, _Object$entries = Object.entries(headers); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          header(value, _objectSpread2({
            overwrite: true
          }, options));

          if (!["common", "delete", "get", "head", "post", "put", "patch"].includes(key)) {
            delete headers[key];
            headers[Object.keys(header(_defineProperty({}, key, null), options))[0]] = value;
          }
        }
      }

      return snake(data, options);
    };
  };
  var createCamelResponseTransformer = function createCamelResponseTransformer(options) {
    var _createObjectTransfor3 = createObjectTransformers(options === null || options === void 0 ? void 0 : options.caseFunctions),
        camel = _createObjectTransfor3.camel;

    return function (data, headers) {
      if (!(options === null || options === void 0 ? void 0 : options.ignoreHeaders)) {
        camel(headers, _objectSpread2({
          overwrite: true
        }, options));
      }

      return camel(data, options);
    };
  };
  var applyCaseMiddleware = function applyCaseMiddleware(axios, options) {
    var _options$caseMiddlewa, _options$caseMiddlewa2, _options$caseMiddlewa3;

    axios.defaults.transformRequest = [(options === null || options === void 0 ? void 0 : (_options$caseMiddlewa = options.caseMiddleware) === null || _options$caseMiddlewa === void 0 ? void 0 : _options$caseMiddlewa.requestTransformer) || createSnakeRequestTransformer(options)].concat(_toConsumableArray(Array.isArray(axios.defaults.transformRequest) ? axios.defaults.transformRequest : axios.defaults.transformRequest !== undefined ? [axios.defaults.transformRequest] : []));
    axios.defaults.transformResponse = [].concat(_toConsumableArray(Array.isArray(axios.defaults.transformResponse) ? axios.defaults.transformResponse : axios.defaults.transformResponse !== undefined ? [axios.defaults.transformResponse] : []), [(options === null || options === void 0 ? void 0 : (_options$caseMiddlewa2 = options.caseMiddleware) === null || _options$caseMiddlewa2 === void 0 ? void 0 : _options$caseMiddlewa2.responseTransformer) || createCamelResponseTransformer(options)]);
    axios.interceptors.request.use((options === null || options === void 0 ? void 0 : (_options$caseMiddlewa3 = options.caseMiddleware) === null || _options$caseMiddlewa3 === void 0 ? void 0 : _options$caseMiddlewa3.requestInterceptor) || createSnakeParamsInterceptor(options));
    return axios;
  };

  exports.default = applyCaseMiddleware;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=axios-case-converter.js.map
