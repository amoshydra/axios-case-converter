function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { createObjectTransformers } from "./transformers";
import { isPlainObject } from "./util";
export var createSnakeParamsInterceptor = function createSnakeParamsInterceptor(options) {
  var _createObjectTransfor = createObjectTransformers(options === null || options === void 0 ? void 0 : options.caseFunctions),
      snake = _createObjectTransfor.snake;

  return function (config) {
    if (config.params) {
      config.params = snake(config.params, options);
    }

    return config;
  };
};
export var createSnakeRequestTransformer = function createSnakeRequestTransformer(options) {
  var _createObjectTransfor2 = createObjectTransformers(options === null || options === void 0 ? void 0 : options.caseFunctions),
      snake = _createObjectTransfor2.snake,
      header = _createObjectTransfor2.header;

  return function (data, headers) {
    if (!(options === null || options === void 0 ? void 0 : options.ignoreHeaders) && isPlainObject(headers)) {
      for (var _i = 0, _Object$entries = Object.entries(headers); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        header(value, _objectSpread({
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
export var createCamelResponseTransformer = function createCamelResponseTransformer(options) {
  var _createObjectTransfor3 = createObjectTransformers(options === null || options === void 0 ? void 0 : options.caseFunctions),
      camel = _createObjectTransfor3.camel;

  return function (data, headers) {
    if (!(options === null || options === void 0 ? void 0 : options.ignoreHeaders)) {
      camel(headers, _objectSpread({
        overwrite: true
      }, options));
    }

    return camel(data, options);
  };
};
export var applyCaseMiddleware = function applyCaseMiddleware(axios, options) {
  var _options$caseMiddlewa, _options$caseMiddlewa2, _options$caseMiddlewa3;

  axios.defaults.transformRequest = [(options === null || options === void 0 ? void 0 : (_options$caseMiddlewa = options.caseMiddleware) === null || _options$caseMiddlewa === void 0 ? void 0 : _options$caseMiddlewa.requestTransformer) || createSnakeRequestTransformer(options)].concat(_toConsumableArray(Array.isArray(axios.defaults.transformRequest) ? axios.defaults.transformRequest : axios.defaults.transformRequest !== undefined ? [axios.defaults.transformRequest] : []));
  axios.defaults.transformResponse = [].concat(_toConsumableArray(Array.isArray(axios.defaults.transformResponse) ? axios.defaults.transformResponse : axios.defaults.transformResponse !== undefined ? [axios.defaults.transformResponse] : []), [(options === null || options === void 0 ? void 0 : (_options$caseMiddlewa2 = options.caseMiddleware) === null || _options$caseMiddlewa2 === void 0 ? void 0 : _options$caseMiddlewa2.responseTransformer) || createCamelResponseTransformer(options)]);
  axios.interceptors.request.use((options === null || options === void 0 ? void 0 : (_options$caseMiddlewa3 = options.caseMiddleware) === null || _options$caseMiddlewa3 === void 0 ? void 0 : _options$caseMiddlewa3.requestInterceptor) || createSnakeParamsInterceptor(options));
  return axios;
};