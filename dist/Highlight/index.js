"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Highlight = function Highlight(_ref) {
  var children = _ref.children,
      color = _ref.color,
      bg = _ref.bg,
      customBG = _ref.customBG,
      customColor = _ref.customColor;
  var CustomComponent = 'span';
  var classes = "highlighter highlighter-bg-".concat(bg, " highlighter-color-").concat(color);
  return /*#__PURE__*/_react.default.createElement(CustomComponent, {
    className: classes
  }, children);
};

Highlight.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string.isRequired,
  bg: _propTypes.default.string.isRequired
};
Highlight.defaultProps = {
  color: 'black',
  bg: 'yellow'
};
var _default = Highlight;
exports.default = _default;