"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.and = and;

var _spec = _interopRequireDefault(require("./spec"));

var _control = require("../control");

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** @module specjs/spec */

/**
 * Class representing `And` specs, which requires that all the sub-specs be fulfilled.
 * @private
 */
var And =
/*#__PURE__*/
function (_Spec) {
  _inherits(And, _Spec);

  function And() {
    _classCallCheck(this, And);

    return _possibleConstructorReturn(this, _getPrototypeOf(And).apply(this, arguments));
  }

  _createClass(And, [{
    key: "assert",

    /**
     * Asserts this spec on a given value. Returns the value if value passes spec,
     * returns `specjs.invalid` otherwise.
     *
     * @param {any} value - The value to be asserted.
     * @return {invalid|any} Returns the value if value passes spec, returns
     * specjs.invalid otherwise.
     */
    value: function assert(value) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var spec = _step.value;

          if (spec.assert(value) === _control.invalid) {
            return _control.invalid;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return value;
    }
    /**
     * Explains why a value passes/fails this spec.
     *
     * @param {any} value - The value to be checked.
     * @param {string[]} path - The path travelled to this spec.
     * @return {boolean} Returns true if the value satisfies this spec, false
     * otherwise.
     */

  }, {
    key: "explain",
    value: function explain(value, path) {
      var result = true;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var spec = _step2.value;

          if (spec.explain(value, path.concat([this.name])) === false) {
            result = false;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return result;
    }
  }]);

  return And;
}(_spec["default"]);
/**
 * Factory function for `And` specs.
 *
 * @param {string} name - Name of the and spec. Important to set this to a human
 * readable (meaningful) string, since this is what will get printed out in explain.
 * @param {...Spec} specs - Specs that have all to be satisfied to fulfill this spec.
 * @return {And} Returns an `And` spec representing the conjunction of the given specs.
 */


function and(name) {
  (0, _tinyInvariant["default"])(typeof name === 'string', 'specjs.and was called with an invalid name.');

  for (var _len = arguments.length, specs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    specs[_key - 1] = arguments[_key];
  }

  (0, _tinyInvariant["default"])(specs.length > 0, 'specjs.and was called without specs.');

  for (var _i = 0, _specs = specs; _i < _specs.length; _i++) {
    var spec = _specs[_i];
    (0, _tinyInvariant["default"])(spec instanceof _spec["default"], 'specjs.and was called with invalid specs.');
  }

  return new And(name, specs);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGVjL2FuZC50cyJdLCJuYW1lcyI6WyJBbmQiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzcGVjIiwiYXNzZXJ0IiwiaW52YWxpZCIsInBhdGgiLCJyZXN1bHQiLCJleHBsYWluIiwiY29uY2F0IiwibmFtZSIsIlNwZWMiLCJhbmQiLCJzcGVjcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7Ozs7SUFJTUEsRzs7Ozs7Ozs7Ozs7Ozs7QUFDSjs7Ozs7Ozs7MkJBUU9DLEssRUFBWTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNqQiw2QkFBaUIsS0FBS0MsT0FBdEIsOEhBQStCO0FBQUEsY0FBdEJDLElBQXNCOztBQUM3QixjQUFJQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUgsS0FBWixNQUF1QkksZ0JBQTNCLEVBQW9DO0FBQ2xDLG1CQUFPQSxnQkFBUDtBQUNEO0FBQ0Y7QUFMZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPakIsYUFBT0osS0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OzRCQVFRQSxLLEVBQVlLLEksRUFBeUI7QUFDM0MsVUFBSUMsTUFBTSxHQUFHLElBQWI7QUFEMkM7QUFBQTtBQUFBOztBQUFBO0FBRTNDLDhCQUFpQixLQUFLTCxPQUF0QixtSUFBK0I7QUFBQSxjQUF0QkMsSUFBc0I7O0FBQzdCLGNBQUlBLElBQUksQ0FBQ0ssT0FBTCxDQUFhUCxLQUFiLEVBQW9CSyxJQUFJLENBQUNHLE1BQUwsQ0FBWSxDQUFDLEtBQUtDLElBQU4sQ0FBWixDQUFwQixNQUFrRCxLQUF0RCxFQUE2RDtBQUMzREgsWUFBQUEsTUFBTSxHQUFHLEtBQVQ7QUFDRDtBQUNGO0FBTjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUTNDLGFBQU9BLE1BQVA7QUFDRDs7OztFQXBDZUksZ0I7QUF1Q2xCOzs7Ozs7Ozs7O0FBUU8sU0FBU0MsR0FBVCxDQUFhRixJQUFiLEVBQTZDO0FBQ2xELGlDQUFVLE9BQU9BLElBQVAsS0FBZ0IsUUFBMUIsRUFBb0MsNkNBQXBDOztBQURrRCxvQ0FBZkcsS0FBZTtBQUFmQSxJQUFBQSxLQUFlO0FBQUE7O0FBRWxELGlDQUFVQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxDQUF6QixFQUE0QixzQ0FBNUI7O0FBQ0EsNEJBQWlCRCxLQUFqQiw0QkFBd0I7QUFBbkIsUUFBSVYsSUFBSSxhQUFSO0FBQ0gsbUNBQVVBLElBQUksWUFBWVEsZ0JBQTFCLEVBQWdDLDJDQUFoQztBQUNEOztBQUNELFNBQU8sSUFBSVgsR0FBSixDQUFRVSxJQUFSLEVBQWNHLEtBQWQsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWMgZnJvbSAnLi9zcGVjJztcbmltcG9ydCB7aW52YWxpZH0gZnJvbSAnLi4vY29udHJvbCc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcblxuLyoqIEBtb2R1bGUgc3BlY2pzL3NwZWMgKi9cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYEFuZGAgc3BlY3MsIHdoaWNoIHJlcXVpcmVzIHRoYXQgYWxsIHRoZSBzdWItc3BlY3MgYmUgZnVsZmlsbGVkLlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgQW5kIGV4dGVuZHMgU3BlYyB7XG4gIC8qKlxuICAgKiBBc3NlcnRzIHRoaXMgc3BlYyBvbiBhIGdpdmVuIHZhbHVlLiBSZXR1cm5zIHRoZSB2YWx1ZSBpZiB2YWx1ZSBwYXNzZXMgc3BlYyxcbiAgICogcmV0dXJucyBgc3BlY2pzLmludmFsaWRgIG90aGVyd2lzZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIGFzc2VydGVkLlxuICAgKiBAcmV0dXJuIHtpbnZhbGlkfGFueX0gUmV0dXJucyB0aGUgdmFsdWUgaWYgdmFsdWUgcGFzc2VzIHNwZWMsIHJldHVybnNcbiAgICogc3BlY2pzLmludmFsaWQgb3RoZXJ3aXNlLlxuICAgKi9cbiAgYXNzZXJ0KHZhbHVlOiBhbnkpIHtcbiAgICBmb3IgKGxldCBzcGVjIG9mIHRoaXMub3B0aW9ucykge1xuICAgICAgaWYgKHNwZWMuYXNzZXJ0KHZhbHVlKSA9PT0gaW52YWxpZCkge1xuICAgICAgICByZXR1cm4gaW52YWxpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRXhwbGFpbnMgd2h5IGEgdmFsdWUgcGFzc2VzL2ZhaWxzIHRoaXMgc3BlYy5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGggLSBUaGUgcGF0aCB0cmF2ZWxsZWQgdG8gdGhpcyBzcGVjLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHNhdGlzZmllcyB0aGlzIHNwZWMsIGZhbHNlXG4gICAqIG90aGVyd2lzZS5cbiAgICovXG4gIGV4cGxhaW4odmFsdWU6IGFueSwgcGF0aDogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzcGVjIG9mIHRoaXMub3B0aW9ucykge1xuICAgICAgaWYgKHNwZWMuZXhwbGFpbih2YWx1ZSwgcGF0aC5jb25jYXQoW3RoaXMubmFtZV0pKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gZm9yIGBBbmRgIHNwZWNzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgYW5kIHNwZWMuIEltcG9ydGFudCB0byBzZXQgdGhpcyB0byBhIGh1bWFuXG4gKiByZWFkYWJsZSAobWVhbmluZ2Z1bCkgc3RyaW5nLCBzaW5jZSB0aGlzIGlzIHdoYXQgd2lsbCBnZXQgcHJpbnRlZCBvdXQgaW4gZXhwbGFpbi5cbiAqIEBwYXJhbSB7Li4uU3BlY30gc3BlY3MgLSBTcGVjcyB0aGF0IGhhdmUgYWxsIHRvIGJlIHNhdGlzZmllZCB0byBmdWxmaWxsIHRoaXMgc3BlYy5cbiAqIEByZXR1cm4ge0FuZH0gUmV0dXJucyBhbiBgQW5kYCBzcGVjIHJlcHJlc2VudGluZyB0aGUgY29uanVuY3Rpb24gb2YgdGhlIGdpdmVuIHNwZWNzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYW5kKG5hbWU6IHN0cmluZywgLi4uc3BlY3M6IFNwZWNbXSkge1xuICBpbnZhcmlhbnQodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnLCAnc3BlY2pzLmFuZCB3YXMgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBuYW1lLicpO1xuICBpbnZhcmlhbnQoc3BlY3MubGVuZ3RoID4gMCwgJ3NwZWNqcy5hbmQgd2FzIGNhbGxlZCB3aXRob3V0IHNwZWNzLicpO1xuICBmb3IgKGxldCBzcGVjIG9mIHNwZWNzKSB7XG4gICAgaW52YXJpYW50KHNwZWMgaW5zdGFuY2VvZiBTcGVjLCAnc3BlY2pzLmFuZCB3YXMgY2FsbGVkIHdpdGggaW52YWxpZCBzcGVjcy4nKTtcbiAgfVxuICByZXR1cm4gbmV3IEFuZChuYW1lLCBzcGVjcyk7XG59XG4iXX0=