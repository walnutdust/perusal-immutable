"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pred = exports["default"] = void 0;

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
 * Class representing `Predicates`, the building block of specs. It is important that
 * your predicates are as simple as possible to aid in debugging, because simple
 * predicates will meaningfully inform exactly what the issue is.
 * @private
 */
var Pred =
/*#__PURE__*/
function (_Spec) {
  _inherits(Pred, _Spec);

  function Pred() {
    _classCallCheck(this, Pred);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pred).apply(this, arguments));
  }

  _createClass(Pred, [{
    key: "assert",

    /**
     * Asserts this spec on a given value. Returns the value if value passes spec,
     * returns `specjs.invalid` otherwise.
     *
     * @param {any} value - The value to be asserted.
     * @return {invalid|any} Returns the value if value passes spec, returns
     * specjs.invalid otherwise.
     * @throws Throws an error if predicate function does not return boolean when
     * fed with input value.
     */
    value: function assert(value) {
      var result = this.options(value);
      if (result === true) return value;
      if (result === false) return _control.invalid; // Checking for predicate function with invalid (non-boolean output)

      (0, _tinyInvariant["default"])(false, "Invalid predicate function used in (Predicate: ".concat(this.name, ")."));
    }
    /**
     * Explains why a value passes/fails this spec. Prints out the path to this pred
     * if value fails at this pred.
     *
     * @param {any} value - The value to be checked.
     * @param {string[]} path - The path travelled to this spec.
     * @return {boolean} Returns true if the value satisfies this spec, false
     * otherwise.
     */

  }, {
    key: "explain",
    value: function explain(value, path) {
      var result = this.options(value);
      if (result === true) return true; // eslint-disable-next-line

      console.log("".concat(path.concat([this.name]).join('->'), ": ").concat(JSON.stringify(value, null, '\t'), " failed specification."));
      return false;
    }
  }]);

  return Pred;
}(_spec["default"]);
/**
 * Factory function for `Pred` specs. Note that this does not check if input function is a valid
 * boolean function (since program is unaware of user input domain), thus the responsibility is
 * on the user to verify that the input fn is a function. However, during runtime, should a
 * non-boolean output be detected, assert throws an error, which may help in debugging.
 *
 * @param {string} name - Name of the key spec. Important to set this to a human
 * readable (meaningful) string, since this is what will get printed out in explain.
 * @param {function} fn - Predicate function that returns a boolean value on input
 * within user-desired domain.
 * @return {Pred} Returns a `Pred` spec requiring the value to return true when fed
 * to `fn`.
 * @throws Throws an error if name is not a valid string or fn is not a valid function.
 */


exports["default"] = Pred;

var pred = function pred(name, fn) {
  (0, _tinyInvariant["default"])(fn && typeof fn === 'function', 'specjs.pred was called with an invalid predicate.');
  (0, _tinyInvariant["default"])(name && typeof name === 'string', 'specjs.pred was called with an invalid string.');
  return new Pred(name, fn);
};

exports.pred = pred;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGVjL3ByZWQudHMiXSwibmFtZXMiOlsiUHJlZCIsInZhbHVlIiwicmVzdWx0Iiwib3B0aW9ucyIsImludmFsaWQiLCJuYW1lIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJqb2luIiwiSlNPTiIsInN0cmluZ2lmeSIsIlNwZWMiLCJwcmVkIiwiZm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7SUFNcUJBLEk7Ozs7Ozs7Ozs7Ozs7O0FBQ25COzs7Ozs7Ozs7OzJCQVVPQyxLLEVBQVk7QUFDakIsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLE9BQUwsQ0FBYUYsS0FBYixDQUFmO0FBRUEsVUFBSUMsTUFBTSxLQUFLLElBQWYsRUFBcUIsT0FBT0QsS0FBUDtBQUNyQixVQUFJQyxNQUFNLEtBQUssS0FBZixFQUFzQixPQUFPRSxnQkFBUCxDQUpMLENBTWpCOztBQUNBLHFDQUFVLEtBQVYsMkRBQW1FLEtBQUtDLElBQXhFO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7OzRCQVNRSixLLEVBQVlLLEksRUFBZ0I7QUFDbEMsVUFBTUosTUFBTSxHQUFHLEtBQUtDLE9BQUwsQ0FBYUYsS0FBYixDQUFmO0FBRUEsVUFBSUMsTUFBTSxLQUFLLElBQWYsRUFBcUIsT0FBTyxJQUFQLENBSGEsQ0FLbEM7O0FBQ0FLLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUNLRixJQUFJLENBQUNHLE1BQUwsQ0FBWSxDQUFDLEtBQUtKLElBQU4sQ0FBWixFQUF5QkssSUFBekIsQ0FBOEIsSUFBOUIsQ0FETCxlQUM2Q0MsSUFBSSxDQUFDQyxTQUFMLENBQ3pDWCxLQUR5QyxFQUV6QyxJQUZ5QyxFQUd6QyxJQUh5QyxDQUQ3QztBQU9BLGFBQU8sS0FBUDtBQUNEOzs7O0VBNUMrQlksZ0I7QUErQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDVCxJQUFELEVBQWVVLEVBQWYsRUFBK0M7QUFDakUsaUNBQVVBLEVBQUUsSUFBSSxPQUFPQSxFQUFQLEtBQWMsVUFBOUIsRUFBMEMsbURBQTFDO0FBRUEsaUNBQVVWLElBQUksSUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQWxDLEVBQTRDLGdEQUE1QztBQUVBLFNBQU8sSUFBSUwsSUFBSixDQUFTSyxJQUFULEVBQWVVLEVBQWYsQ0FBUDtBQUNELENBTk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYyBmcm9tICcuL3NwZWMnO1xuaW1wb3J0IHtpbnZhbGlkfSBmcm9tICcuLi9jb250cm9sJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG4vKiogQG1vZHVsZSBzcGVjanMvc3BlYyAqL1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBgUHJlZGljYXRlc2AsIHRoZSBidWlsZGluZyBibG9jayBvZiBzcGVjcy4gSXQgaXMgaW1wb3J0YW50IHRoYXRcbiAqIHlvdXIgcHJlZGljYXRlcyBhcmUgYXMgc2ltcGxlIGFzIHBvc3NpYmxlIHRvIGFpZCBpbiBkZWJ1Z2dpbmcsIGJlY2F1c2Ugc2ltcGxlXG4gKiBwcmVkaWNhdGVzIHdpbGwgbWVhbmluZ2Z1bGx5IGluZm9ybSBleGFjdGx5IHdoYXQgdGhlIGlzc3VlIGlzLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZCBleHRlbmRzIFNwZWMge1xuICAvKipcbiAgICogQXNzZXJ0cyB0aGlzIHNwZWMgb24gYSBnaXZlbiB2YWx1ZS4gUmV0dXJucyB0aGUgdmFsdWUgaWYgdmFsdWUgcGFzc2VzIHNwZWMsXG4gICAqIHJldHVybnMgYHNwZWNqcy5pbnZhbGlkYCBvdGhlcndpc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBhc3NlcnRlZC5cbiAgICogQHJldHVybiB7aW52YWxpZHxhbnl9IFJldHVybnMgdGhlIHZhbHVlIGlmIHZhbHVlIHBhc3NlcyBzcGVjLCByZXR1cm5zXG4gICAqIHNwZWNqcy5pbnZhbGlkIG90aGVyd2lzZS5cbiAgICogQHRocm93cyBUaHJvd3MgYW4gZXJyb3IgaWYgcHJlZGljYXRlIGZ1bmN0aW9uIGRvZXMgbm90IHJldHVybiBib29sZWFuIHdoZW5cbiAgICogZmVkIHdpdGggaW5wdXQgdmFsdWUuXG4gICAqL1xuICBhc3NlcnQodmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMub3B0aW9ucyh2YWx1ZSk7XG5cbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSByZXR1cm4gdmFsdWU7XG4gICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHJldHVybiBpbnZhbGlkO1xuXG4gICAgLy8gQ2hlY2tpbmcgZm9yIHByZWRpY2F0ZSBmdW5jdGlvbiB3aXRoIGludmFsaWQgKG5vbi1ib29sZWFuIG91dHB1dClcbiAgICBpbnZhcmlhbnQoZmFsc2UsIGBJbnZhbGlkIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIGluIChQcmVkaWNhdGU6ICR7dGhpcy5uYW1lfSkuYCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwbGFpbnMgd2h5IGEgdmFsdWUgcGFzc2VzL2ZhaWxzIHRoaXMgc3BlYy4gUHJpbnRzIG91dCB0aGUgcGF0aCB0byB0aGlzIHByZWRcbiAgICogaWYgdmFsdWUgZmFpbHMgYXQgdGhpcyBwcmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aCAtIFRoZSBwYXRoIHRyYXZlbGxlZCB0byB0aGlzIHNwZWMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgc2F0aXNmaWVzIHRoaXMgc3BlYywgZmFsc2VcbiAgICogb3RoZXJ3aXNlLlxuICAgKi9cbiAgZXhwbGFpbih2YWx1ZTogYW55LCBwYXRoOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMub3B0aW9ucyh2YWx1ZSk7XG5cbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYCR7cGF0aC5jb25jYXQoW3RoaXMubmFtZV0pLmpvaW4oJy0+Jyl9OiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJ1xcdCdcbiAgICAgICl9IGZhaWxlZCBzcGVjaWZpY2F0aW9uLmBcbiAgICApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gZm9yIGBQcmVkYCBzcGVjcy4gTm90ZSB0aGF0IHRoaXMgZG9lcyBub3QgY2hlY2sgaWYgaW5wdXQgZnVuY3Rpb24gaXMgYSB2YWxpZFxuICogYm9vbGVhbiBmdW5jdGlvbiAoc2luY2UgcHJvZ3JhbSBpcyB1bmF3YXJlIG9mIHVzZXIgaW5wdXQgZG9tYWluKSwgdGh1cyB0aGUgcmVzcG9uc2liaWxpdHkgaXNcbiAqIG9uIHRoZSB1c2VyIHRvIHZlcmlmeSB0aGF0IHRoZSBpbnB1dCBmbiBpcyBhIGZ1bmN0aW9uLiBIb3dldmVyLCBkdXJpbmcgcnVudGltZSwgc2hvdWxkIGFcbiAqIG5vbi1ib29sZWFuIG91dHB1dCBiZSBkZXRlY3RlZCwgYXNzZXJ0IHRocm93cyBhbiBlcnJvciwgd2hpY2ggbWF5IGhlbHAgaW4gZGVidWdnaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUga2V5IHNwZWMuIEltcG9ydGFudCB0byBzZXQgdGhpcyB0byBhIGh1bWFuXG4gKiByZWFkYWJsZSAobWVhbmluZ2Z1bCkgc3RyaW5nLCBzaW5jZSB0aGlzIGlzIHdoYXQgd2lsbCBnZXQgcHJpbnRlZCBvdXQgaW4gZXhwbGFpbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gUHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgb24gaW5wdXRcbiAqIHdpdGhpbiB1c2VyLWRlc2lyZWQgZG9tYWluLlxuICogQHJldHVybiB7UHJlZH0gUmV0dXJucyBhIGBQcmVkYCBzcGVjIHJlcXVpcmluZyB0aGUgdmFsdWUgdG8gcmV0dXJuIHRydWUgd2hlbiBmZWRcbiAqIHRvIGBmbmAuXG4gKiBAdGhyb3dzIFRocm93cyBhbiBlcnJvciBpZiBuYW1lIGlzIG5vdCBhIHZhbGlkIHN0cmluZyBvciBmbiBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IHByZWQgPSAobmFtZTogc3RyaW5nLCBmbjogKHZhbHVlOiBhbnkpID0+IGJvb2xlYW4pID0+IHtcbiAgaW52YXJpYW50KGZuICYmIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJywgJ3NwZWNqcy5wcmVkIHdhcyBjYWxsZWQgd2l0aCBhbiBpbnZhbGlkIHByZWRpY2F0ZS4nKTtcblxuICBpbnZhcmlhbnQobmFtZSAmJiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycsICdzcGVjanMucHJlZCB3YXMgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBzdHJpbmcuJyk7XG5cbiAgcmV0dXJuIG5ldyBQcmVkKG5hbWUsIGZuKTtcbn07XG4iXX0=