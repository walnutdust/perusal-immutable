"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @module specjs/spec */

/**
 * Abstract class representing `Spec`, the main specification of *specjs*. Declares the abstract
 * method assert and explain which is used by the utility methods ofr validity checking and
 * specification assertion on a given value.
 * @private
 */
var Spec =
/*#__PURE__*/
function () {
  function Spec(name, options) {
    _classCallCheck(this, Spec);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "options", void 0);

    this.name = name;
    this.options = options;
  }
  /**
   * Asserts this spec on a given value.
   *
   * @param {any} value - The value to be asserted.
   * @throws Error on call - subclasses should all implement the `assert` method.
   */


  _createClass(Spec, [{
    key: "assert",
    value: function assert(value) {
      (0, _tinyInvariant["default"])(false, "Invalid call to Spec assert with value ".concat(value, ". Was assert implemented in the subclass?"));
      return value;
    }
    /**
     * Expplains why a given value passes/fails this spec.
     *
     * @param {any} value - The value to be asserted.
     * @param {String[]} path - The path travelled to this spec.
     * @throws Error on call - subclasses should all implement the `explain` method.
     */

  }, {
    key: "explain",
    value: function explain(value, path) {
      (0, _tinyInvariant["default"])(false, "Invalid call to Spec explain with value ".concat(value, " at ").concat(path, ". Was explain implemented in the subclass?"));
    }
  }]);

  return Spec;
}();

exports["default"] = Spec;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGVjL3NwZWMudHMiXSwibmFtZXMiOlsiU3BlYyIsIm5hbWUiLCJvcHRpb25zIiwidmFsdWUiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7SUFNOEJBLEk7OztBQUk1QixnQkFBWUMsSUFBWixFQUEwQkMsT0FBMUIsRUFBd0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFDdEMsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzsyQkFNT0MsSyxFQUFZO0FBQ2pCLHFDQUNFLEtBREYsbURBRTRDQSxLQUY1QztBQUtBLGFBQU9BLEtBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OzRCQU9RQSxLLEVBQVlDLEksRUFBZ0I7QUFDbEMscUNBQ0UsS0FERixvREFFNkNELEtBRjdDLGlCQUV5REMsSUFGekQ7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG4vKiogQG1vZHVsZSBzcGVjanMvc3BlYyAqL1xuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBgU3BlY2AsIHRoZSBtYWluIHNwZWNpZmljYXRpb24gb2YgKnNwZWNqcyouIERlY2xhcmVzIHRoZSBhYnN0cmFjdFxuICogbWV0aG9kIGFzc2VydCBhbmQgZXhwbGFpbiB3aGljaCBpcyB1c2VkIGJ5IHRoZSB1dGlsaXR5IG1ldGhvZHMgb2ZyIHZhbGlkaXR5IGNoZWNraW5nIGFuZFxuICogc3BlY2lmaWNhdGlvbiBhc3NlcnRpb24gb24gYSBnaXZlbiB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFNwZWMge1xuICBuYW1lOiBzdHJpbmc7XG4gIG9wdGlvbnM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlcnRzIHRoaXMgc3BlYyBvbiBhIGdpdmVuIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgYXNzZXJ0ZWQuXG4gICAqIEB0aHJvd3MgRXJyb3Igb24gY2FsbCAtIHN1YmNsYXNzZXMgc2hvdWxkIGFsbCBpbXBsZW1lbnQgdGhlIGBhc3NlcnRgIG1ldGhvZC5cbiAgICovXG4gIGFzc2VydCh2YWx1ZTogYW55KSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICBgSW52YWxpZCBjYWxsIHRvIFNwZWMgYXNzZXJ0IHdpdGggdmFsdWUgJHt2YWx1ZX0uIFdhcyBhc3NlcnQgaW1wbGVtZW50ZWQgaW4gdGhlIHN1YmNsYXNzP2BcbiAgICApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cHBsYWlucyB3aHkgYSBnaXZlbiB2YWx1ZSBwYXNzZXMvZmFpbHMgdGhpcyBzcGVjLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgYXNzZXJ0ZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nW119IHBhdGggLSBUaGUgcGF0aCB0cmF2ZWxsZWQgdG8gdGhpcyBzcGVjLlxuICAgKiBAdGhyb3dzIEVycm9yIG9uIGNhbGwgLSBzdWJjbGFzc2VzIHNob3VsZCBhbGwgaW1wbGVtZW50IHRoZSBgZXhwbGFpbmAgbWV0aG9kLlxuICAgKi9cbiAgZXhwbGFpbih2YWx1ZTogYW55LCBwYXRoOiBTdHJpbmdbXSkge1xuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgYEludmFsaWQgY2FsbCB0byBTcGVjIGV4cGxhaW4gd2l0aCB2YWx1ZSAke3ZhbHVlfSBhdCAke3BhdGh9LiBXYXMgZXhwbGFpbiBpbXBsZW1lbnRlZCBpbiB0aGUgc3ViY2xhc3M/YFxuICAgICk7XG4gIH1cbn1cbiJdfQ==