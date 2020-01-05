import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { headerCase as ccHeader } from 'change-case';
import { snake, camel, header } from './transform';
export var snakeParams = function snakeParams(config) {
  if (config.params) {
    config.params = snake(config.params);
  }

  return config;
};
export var snakeRequest = function snakeRequest(data, headers) {
  for (var _i = 0, _Object$entries = Object.entries(headers); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    header(value, true);

    if (!['common', 'delete', 'get', 'head', 'post', 'put', 'patch'].includes(key)) {
      delete headers[key];
      headers[ccHeader(key)] = value;
    }
  }

  return snake(data);
};
export var camelResponse = function camelResponse(data, headers) {
  camel(headers, true);
  return camel(data);
};

var applyConverters = function applyConverters(axios) {
  axios.defaults.transformRequest = [snakeRequest].concat(_toConsumableArray(axios.defaults.transformRequest));
  axios.defaults.transformResponse = [].concat(_toConsumableArray(axios.defaults.transformResponse), [camelResponse]);
  axios.interceptors.request.use(snakeParams);
  return axios;
};

export default applyConverters;