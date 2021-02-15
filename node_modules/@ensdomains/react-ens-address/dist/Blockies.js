"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleNameBlockies = exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _blockies = _interopRequireDefault(require("./utils/blockies"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 10px;\n  border-radius: 50%;\n  box-shadow: 2px 2px 9px 0 #e1e1e1;\n  flex-shrink: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var BlockiesContainer = (0, _styled["default"])('span')(_templateObject());

var Blockies = function Blockies(_ref) {
  var address = _ref.address,
      _ref$imageSize = _ref.imageSize,
      imageSize = _ref$imageSize === void 0 ? 42 : _ref$imageSize,
      className = _ref.className;
  var imgURL = (0, _blockies["default"])({
    seed: address.toLowerCase(),
    size: 8,
    scale: 5
  }).toDataURL();
  var style = {
    backgroundImage: 'url(' + imgURL + ')',
    backgroundSize: 'cover',
    width: imageSize + 'px',
    height: imageSize + 'px',
    display: 'inline-block'
  };
  return _react["default"].createElement(BlockiesContainer, {
    className: className,
    style: style
  });
};

Blockies.propTypes = {
  address: _propTypes["default"].string.isRequired,
  imageSize: _propTypes["default"].number,
  className: _propTypes["default"].string
};
var _default = Blockies;
exports["default"] = _default;
var SingleNameBlockies = (0, _styled["default"])(Blockies)(_templateObject2());
exports.SingleNameBlockies = SingleNameBlockies;