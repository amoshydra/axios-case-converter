function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { camelCase as camelCaseString, snakeCase as snakeCaseString, headerCase as headerCaseString } from "change-case";
import { applyCaseOptions, preserveSpecificKeys } from "./decorators";
import { isFormData, isTransformable, isURLSearchParams } from "./util";
var caseFunctions = {
  snake: snakeCaseString,
  camel: camelCaseString,
  header: headerCaseString
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
  fn = applyCaseOptions(fn, _objectSpread({
    stripRegexp: /[^A-Z0-9[\]]+/gi
  }, options === null || options === void 0 ? void 0 : options.caseOptions));

  if (options === null || options === void 0 ? void 0 : options.preservedKeys) {
    fn = preserveSpecificKeys(fn, options.preservedKeys);
  }

  return transformObjectUsingCallbackRecursive(data, fn, (options === null || options === void 0 ? void 0 : options.overwrite) || false);
};

export var createObjectTransformer = function createObjectTransformer(fn) {
  return function (data, options) {
    return transformObjectUsingCallback(data, fn, options);
  };
};
export var createObjectTransformerOf = function createObjectTransformerOf(functionName, options) {
  return createObjectTransformer((options === null || options === void 0 ? void 0 : options[functionName]) || caseFunctions[functionName]);
};
export var createObjectTransformers = function createObjectTransformers(options) {
  var functionNames = Object.keys(caseFunctions);
  var objectTransformers = {};

  for (var _i2 = 0, _functionNames = functionNames; _i2 < _functionNames.length; _i2++) {
    var functionName = _functionNames[_i2];
    objectTransformers[functionName] = createObjectTransformerOf(functionName, options);
  }

  return objectTransformers;
};