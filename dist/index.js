'use strict';

var clsx = require('clsx');
var React2 = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var clsx__default = /*#__PURE__*/_interopDefault(clsx);
var React2__default = /*#__PURE__*/_interopDefault(React2);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Button(_a) {
  var _b = _a, {
    variant = "primary",
    size = "medium",
    children,
    className
  } = _b, props = __objRest(_b, [
    "variant",
    "size",
    "children",
    "className"
  ]);
  const baseClass = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-orange-500 text-white shadow hover:bg-orange-600 focus:ring-orange-500",
    secondary: "bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300 focus:ring-gray-400",
    outline: "border border-orange-400 text-orange-500 bg-transparent hover:bg-orange-50 focus:ring-orange-400"
  };
  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };
  return /* @__PURE__ */ React2__default.default.createElement(
    "button",
    __spreadProps(__spreadValues({}, props), {
      className: clsx__default.default(baseClass, variants[variant], sizes[size], className)
    }),
    children
  );
}
function Card({
  title,
  children,
  variant = "primary"
}) {
  const baseClass = "w-[320px] h-auto rounded-2xl p-6 transition-all duration-300";
  const variantClasses = {
    primary: "bg-gradient-to-br from-orange-200 to-orange-100 border border-orange-300 text-gray-900 shadow-md hover:shadow-lg",
    secondary: "bg-white border border-gray-200 text-gray-800 shadow-sm hover:shadow-md",
    outline: "bg-transparent border-2 border-orange-400 text-gray-700 hover:bg-orange-50 hover:shadow-sm"
  };
  return /* @__PURE__ */ React2__default.default.createElement("div", { className: `${baseClass} ${variantClasses[variant]}` }, /* @__PURE__ */ React2__default.default.createElement("h2", { className: "text-xl font-bold mb-3 tracking-tight" }, title), /* @__PURE__ */ React2__default.default.createElement("div", { className: "text-sm leading-relaxed" }, children));
}

exports.Button = Button;
exports.Card = Card;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map