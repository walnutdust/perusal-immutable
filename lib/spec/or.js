"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.or = void 0;

var _spec2 = _interopRequireDefault(require("./spec"));

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
 * Class representing `Or` specs, which requires that at least one sub-spec be
 * fulfilled.
 * @private
 */
var Or =
/*#__PURE__*/
function (_Spec) {
  _inherits(Or, _Spec);

  function Or() {
    _classCallCheck(this, Or);

    return _possibleConstructorReturn(this, _getPrototypeOf(Or).apply(this, arguments));
  }

  _createClass(Or, [{
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

          if (spec.assert(value) !== _control.invalid) {
            return value;
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

      return _control.invalid;
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
      var result = false;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var spec = _step2.value;

          if (spec.assert(value) !== _control.invalid) {
            result = true;
            break;
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

      if (result === true) return true;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _spec = _step3.value;

          _spec.explain(value, path.concat([this.name]));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return false;
    }
  }]);

  return Or;
}(_spec2["default"]);
/**
 * Factory function for `Or` specs.
 *
 * @param {string} name - Name of the and spec. Important to set this to a human
 * readable (meaningful) string, since this is what will get printed out in explain.
 * @param {...Spec} specs - Specs, where one of them has to be satisfied to fulfill
 * this spec.
 * @return {And} Returns an `Or` spec representing the disjunction of the given specs.
 */


var or = function or(name) {
  (0, _tinyInvariant["default"])(typeof name === 'string', 'specjs.or was called with an invalid name.');

  for (var _len = arguments.length, specs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    specs[_key - 1] = arguments[_key];
  }

  (0, _tinyInvariant["default"])(specs.length > 0, 'specjs.or was called without specs.');

  for (var _i = 0, _specs = specs; _i < _specs.length; _i++) {
    var spec = _specs[_i];
    (0, _tinyInvariant["default"])(spec instanceof _spec2["default"], 'specjs.or was called with invalid specs.');
  }

  return new Or(name, specs);
};

exports.or = or;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGVjL29yLnRzIl0sIm5hbWVzIjpbIk9yIiwidmFsdWUiLCJvcHRpb25zIiwic3BlYyIsImFzc2VydCIsImludmFsaWQiLCJwYXRoIiwicmVzdWx0IiwiZXhwbGFpbiIsImNvbmNhdCIsIm5hbWUiLCJTcGVjIiwib3IiLCJzcGVjcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7Ozs7O0lBS01BLEU7Ozs7Ozs7Ozs7Ozs7O0FBQ0o7Ozs7Ozs7OzJCQVFPQyxLLEVBQVk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDakIsNkJBQWlCLEtBQUtDLE9BQXRCLDhIQUErQjtBQUFBLGNBQXRCQyxJQUFzQjs7QUFDN0IsY0FBSUEsSUFBSSxDQUFDQyxNQUFMLENBQVlILEtBQVosTUFBdUJJLGdCQUEzQixFQUFvQztBQUNsQyxtQkFBT0osS0FBUDtBQUNEO0FBQ0Y7QUFMZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPakIsYUFBT0ksZ0JBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs0QkFRUUosSyxFQUFZSyxJLEVBQWdCO0FBQ2xDLFVBQUlDLE1BQU0sR0FBRyxLQUFiO0FBRGtDO0FBQUE7QUFBQTs7QUFBQTtBQUVsQyw4QkFBaUIsS0FBS0wsT0FBdEIsbUlBQStCO0FBQUEsY0FBdEJDLElBQXNCOztBQUM3QixjQUFJQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUgsS0FBWixNQUF1QkksZ0JBQTNCLEVBQW9DO0FBQ2xDRSxZQUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNBO0FBQ0Q7QUFDRjtBQVBpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNsQyxVQUFJQSxNQUFNLEtBQUssSUFBZixFQUFxQixPQUFPLElBQVA7QUFUYTtBQUFBO0FBQUE7O0FBQUE7QUFXbEMsOEJBQWlCLEtBQUtMLE9BQXRCLG1JQUErQjtBQUFBLGNBQXRCQyxLQUFzQjs7QUFDN0JBLFVBQUFBLEtBQUksQ0FBQ0ssT0FBTCxDQUFhUCxLQUFiLEVBQW9CSyxJQUFJLENBQUNHLE1BQUwsQ0FBWSxDQUFDLEtBQUtDLElBQU4sQ0FBWixDQUFwQjtBQUNEO0FBYmlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY2xDLGFBQU8sS0FBUDtBQUNEOzs7O0VBMUNjQyxpQjtBQTZDakI7Ozs7Ozs7Ozs7O0FBU08sSUFBTUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBQ0YsSUFBRCxFQUFvQztBQUNwRCxpQ0FBVSxPQUFPQSxJQUFQLEtBQWdCLFFBQTFCLEVBQW9DLDRDQUFwQzs7QUFEb0Qsb0NBQWxCRyxLQUFrQjtBQUFsQkEsSUFBQUEsS0FBa0I7QUFBQTs7QUFFcEQsaUNBQVVBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLENBQXpCLEVBQTRCLHFDQUE1Qjs7QUFDQSw0QkFBaUJELEtBQWpCLDRCQUF3QjtBQUFuQixRQUFJVixJQUFJLGFBQVI7QUFDSCxtQ0FBVUEsSUFBSSxZQUFZUSxpQkFBMUIsRUFBZ0MsMENBQWhDO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFJWCxFQUFKLENBQU9VLElBQVAsRUFBYUcsS0FBYixDQUFQO0FBQ0QsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVjIGZyb20gJy4vc3BlYyc7XG5pbXBvcnQge2ludmFsaWR9IGZyb20gJy4uL2NvbnRyb2wnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5cbi8qKiBAbW9kdWxlIHNwZWNqcy9zcGVjICovXG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGBPcmAgc3BlY3MsIHdoaWNoIHJlcXVpcmVzIHRoYXQgYXQgbGVhc3Qgb25lIHN1Yi1zcGVjIGJlXG4gKiBmdWxmaWxsZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBPciBleHRlbmRzIFNwZWMge1xuICAvKipcbiAgICogQXNzZXJ0cyB0aGlzIHNwZWMgb24gYSBnaXZlbiB2YWx1ZS4gUmV0dXJucyB0aGUgdmFsdWUgaWYgdmFsdWUgcGFzc2VzIHNwZWMsXG4gICAqIHJldHVybnMgYHNwZWNqcy5pbnZhbGlkYCBvdGhlcndpc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBhc3NlcnRlZC5cbiAgICogQHJldHVybiB7aW52YWxpZHxhbnl9IFJldHVybnMgdGhlIHZhbHVlIGlmIHZhbHVlIHBhc3NlcyBzcGVjLCByZXR1cm5zXG4gICAqIHNwZWNqcy5pbnZhbGlkIG90aGVyd2lzZS5cbiAgICovXG4gIGFzc2VydCh2YWx1ZTogYW55KSB7XG4gICAgZm9yIChsZXQgc3BlYyBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGlmIChzcGVjLmFzc2VydCh2YWx1ZSkgIT09IGludmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGxhaW5zIHdoeSBhIHZhbHVlIHBhc3Nlcy9mYWlscyB0aGlzIHNwZWMuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRoIC0gVGhlIHBhdGggdHJhdmVsbGVkIHRvIHRoaXMgc3BlYy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBzYXRpc2ZpZXMgdGhpcyBzcGVjLCBmYWxzZVxuICAgKiBvdGhlcndpc2UuXG4gICAqL1xuICBleHBsYWluKHZhbHVlOiBhbnksIHBhdGg6IHN0cmluZ1tdKSB7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgIGZvciAobGV0IHNwZWMgb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAoc3BlYy5hc3NlcnQodmFsdWUpICE9PSBpbnZhbGlkKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHJldHVybiB0cnVlO1xuXG4gICAgZm9yIChsZXQgc3BlYyBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHNwZWMuZXhwbGFpbih2YWx1ZSwgcGF0aC5jb25jYXQoW3RoaXMubmFtZV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiBmb3IgYE9yYCBzcGVjcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIGFuZCBzcGVjLiBJbXBvcnRhbnQgdG8gc2V0IHRoaXMgdG8gYSBodW1hblxuICogcmVhZGFibGUgKG1lYW5pbmdmdWwpIHN0cmluZywgc2luY2UgdGhpcyBpcyB3aGF0IHdpbGwgZ2V0IHByaW50ZWQgb3V0IGluIGV4cGxhaW4uXG4gKiBAcGFyYW0gey4uLlNwZWN9IHNwZWNzIC0gU3BlY3MsIHdoZXJlIG9uZSBvZiB0aGVtIGhhcyB0byBiZSBzYXRpc2ZpZWQgdG8gZnVsZmlsbFxuICogdGhpcyBzcGVjLlxuICogQHJldHVybiB7QW5kfSBSZXR1cm5zIGFuIGBPcmAgc3BlYyByZXByZXNlbnRpbmcgdGhlIGRpc2p1bmN0aW9uIG9mIHRoZSBnaXZlbiBzcGVjcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG9yID0gKG5hbWU6IHN0cmluZywgLi4uc3BlY3M6IFNwZWNbXSkgPT4ge1xuICBpbnZhcmlhbnQodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnLCAnc3BlY2pzLm9yIHdhcyBjYWxsZWQgd2l0aCBhbiBpbnZhbGlkIG5hbWUuJyk7XG4gIGludmFyaWFudChzcGVjcy5sZW5ndGggPiAwLCAnc3BlY2pzLm9yIHdhcyBjYWxsZWQgd2l0aG91dCBzcGVjcy4nKTtcbiAgZm9yIChsZXQgc3BlYyBvZiBzcGVjcykge1xuICAgIGludmFyaWFudChzcGVjIGluc3RhbmNlb2YgU3BlYywgJ3NwZWNqcy5vciB3YXMgY2FsbGVkIHdpdGggaW52YWxpZCBzcGVjcy4nKTtcbiAgfVxuICByZXR1cm4gbmV3IE9yKG5hbWUsIHNwZWNzKTtcbn07XG4iXX0=