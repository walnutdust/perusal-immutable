"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optional = exports["default"] = void 0;

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
 * Class representing `Optional` specs, which either accepts an undefined value or
 * requires that the value satisfy the spec if present. Typically used with keys to
 * denote specs for optional keys.
 * @private
 */
var Optional =
/*#__PURE__*/
function (_Spec) {
  _inherits(Optional, _Spec);

  function Optional() {
    _classCallCheck(this, Optional);

    return _possibleConstructorReturn(this, _getPrototypeOf(Optional).apply(this, arguments));
  }

  _createClass(Optional, [{
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
      if (value === undefined) return value;
      var result = this.options.assert(value);
      if (result !== _control.invalid) return value;
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
      if (value === undefined) return true;
      return this.options.explain(value, path);
    }
  }]);

  return Optional;
}(_spec["default"]);
/**
 * Factory function for `Optional` specs.
 *
 * @param {Spec} spec - Spec that has to be fulfiled if input value is not undefined.
 * @return {Optional} Returns a `Optional` spec requiring the input value to satisfy
 * the provided spec if it is defined.
 */


exports["default"] = Optional;

var optional = function optional(spec) {
  (0, _tinyInvariant["default"])(spec instanceof _spec["default"], 'Invalid specification passed to specjs.optional');
  return new Optional('optional', spec);
};

exports.optional = optional;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGVjL29wdGlvbmFsLnRzIl0sIm5hbWVzIjpbIk9wdGlvbmFsIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJvcHRpb25zIiwiYXNzZXJ0IiwiaW52YWxpZCIsInBhdGgiLCJleHBsYWluIiwiU3BlYyIsIm9wdGlvbmFsIiwic3BlYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7Ozs7OztJQU1xQkEsUTs7Ozs7Ozs7Ozs7Ozs7QUFDbkI7Ozs7Ozs7OzJCQVFPQyxLLEVBQVk7QUFDakIsVUFBSUEsS0FBSyxLQUFLQyxTQUFkLEVBQXlCLE9BQU9ELEtBQVA7QUFFekIsVUFBTUUsTUFBTSxHQUFHLEtBQUtDLE9BQUwsQ0FBYUMsTUFBYixDQUFvQkosS0FBcEIsQ0FBZjtBQUVBLFVBQUlFLE1BQU0sS0FBS0csZ0JBQWYsRUFBd0IsT0FBT0wsS0FBUDtBQUN4QixhQUFPSyxnQkFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OzRCQVFRTCxLLEVBQVlNLEksRUFBZ0I7QUFDbEMsVUFBSU4sS0FBSyxLQUFLQyxTQUFkLEVBQXlCLE9BQU8sSUFBUDtBQUV6QixhQUFPLEtBQUtFLE9BQUwsQ0FBYUksT0FBYixDQUFxQlAsS0FBckIsRUFBNEJNLElBQTVCLENBQVA7QUFDRDs7OztFQTlCbUNFLGdCO0FBaUN0Qzs7Ozs7Ozs7Ozs7QUFPTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQWdCO0FBQ3RDLGlDQUFVQSxJQUFJLFlBQVlGLGdCQUExQixFQUFnQyxpREFBaEM7QUFDQSxTQUFPLElBQUlULFFBQUosQ0FBYSxVQUFiLEVBQXlCVyxJQUF6QixDQUFQO0FBQ0QsQ0FITSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVjIGZyb20gJy4vc3BlYyc7XG5pbXBvcnQge2ludmFsaWR9IGZyb20gJy4uL2NvbnRyb2wnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5cbi8qKiBAbW9kdWxlIHNwZWNqcy9zcGVjICovXG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGBPcHRpb25hbGAgc3BlY3MsIHdoaWNoIGVpdGhlciBhY2NlcHRzIGFuIHVuZGVmaW5lZCB2YWx1ZSBvclxuICogcmVxdWlyZXMgdGhhdCB0aGUgdmFsdWUgc2F0aXNmeSB0aGUgc3BlYyBpZiBwcmVzZW50LiBUeXBpY2FsbHkgdXNlZCB3aXRoIGtleXMgdG9cbiAqIGRlbm90ZSBzcGVjcyBmb3Igb3B0aW9uYWwga2V5cy5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbmFsIGV4dGVuZHMgU3BlYyB7XG4gIC8qKlxuICAgKiBBc3NlcnRzIHRoaXMgc3BlYyBvbiBhIGdpdmVuIHZhbHVlLiBSZXR1cm5zIHRoZSB2YWx1ZSBpZiB2YWx1ZSBwYXNzZXMgc3BlYyxcbiAgICogcmV0dXJucyBgc3BlY2pzLmludmFsaWRgIG90aGVyd2lzZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIGFzc2VydGVkLlxuICAgKiBAcmV0dXJuIHtpbnZhbGlkfGFueX0gUmV0dXJucyB0aGUgdmFsdWUgaWYgdmFsdWUgcGFzc2VzIHNwZWMsIHJldHVybnNcbiAgICogc3BlY2pzLmludmFsaWQgb3RoZXJ3aXNlLlxuICAgKi9cbiAgYXNzZXJ0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5vcHRpb25zLmFzc2VydCh2YWx1ZSk7XG5cbiAgICBpZiAocmVzdWx0ICE9PSBpbnZhbGlkKSByZXR1cm4gdmFsdWU7XG4gICAgcmV0dXJuIGludmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogRXhwbGFpbnMgd2h5IGEgdmFsdWUgcGFzc2VzL2ZhaWxzIHRoaXMgc3BlYy5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGggLSBUaGUgcGF0aCB0cmF2ZWxsZWQgdG8gdGhpcyBzcGVjLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHNhdGlzZmllcyB0aGlzIHNwZWMsIGZhbHNlXG4gICAqIG90aGVyd2lzZS5cbiAgICovXG4gIGV4cGxhaW4odmFsdWU6IGFueSwgcGF0aDogc3RyaW5nW10pIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmV4cGxhaW4odmFsdWUsIHBhdGgpO1xuICB9XG59XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiBmb3IgYE9wdGlvbmFsYCBzcGVjcy5cbiAqXG4gKiBAcGFyYW0ge1NwZWN9IHNwZWMgLSBTcGVjIHRoYXQgaGFzIHRvIGJlIGZ1bGZpbGVkIGlmIGlucHV0IHZhbHVlIGlzIG5vdCB1bmRlZmluZWQuXG4gKiBAcmV0dXJuIHtPcHRpb25hbH0gUmV0dXJucyBhIGBPcHRpb25hbGAgc3BlYyByZXF1aXJpbmcgdGhlIGlucHV0IHZhbHVlIHRvIHNhdGlzZnlcbiAqIHRoZSBwcm92aWRlZCBzcGVjIGlmIGl0IGlzIGRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBvcHRpb25hbCA9IChzcGVjOiBTcGVjKSA9PiB7XG4gIGludmFyaWFudChzcGVjIGluc3RhbmNlb2YgU3BlYywgJ0ludmFsaWQgc3BlY2lmaWNhdGlvbiBwYXNzZWQgdG8gc3BlY2pzLm9wdGlvbmFsJyk7XG4gIHJldHVybiBuZXcgT3B0aW9uYWwoJ29wdGlvbmFsJywgc3BlYyk7XG59O1xuIl19