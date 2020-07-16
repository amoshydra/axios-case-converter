function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

export var isURLSearchParams = function isURLSearchParams(value) {
  return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
};
export var isFormData = function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
};
export var isPlainObject = function isPlainObject(value) {
  return _typeof(value) === "object" && value !== null && Object.prototype.toString.call(value) === "[object Object]";
};
export var isTransformable = function isTransformable(value) {
  return Array.isArray(value) || isPlainObject(value) || isFormData(value) || isURLSearchParams(value);
};