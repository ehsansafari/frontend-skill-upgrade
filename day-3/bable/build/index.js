"use strict";

var _hook = _interopRequireDefault(require("./hook"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
const greet = () => console.log("Hello from Babel!");
greet();
(0, _hook.default)();
