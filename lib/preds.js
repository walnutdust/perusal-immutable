"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFn = exports.isSymbol = exports.isBool = exports.isObject = exports.isString = exports.isNumber = exports.zero = exports.negative = exports.positive = exports.odd = exports.even = void 0;

var _pred = _interopRequireDefault(require("./spec/pred"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** @module specjs/basic */
// Basic numerical predicates

/**
 * Predicate checking if value is even.
 * @constant
 */
var even = new _pred["default"]('is even?', function (number) {
  return number % 2 === 0 && typeof number === 'number';
});
/**
 * Predicate checking if value is odd.
 * @constant
 */

exports.even = even;
var odd = new _pred["default"]('is odd?', function (number) {
  return number % 2 === 1 && typeof number === 'number';
});
/**
 * Predicate checking if value is positive.
 * @constant
 */

exports.odd = odd;
var positive = new _pred["default"]('is positive?', function (number) {
  return typeof number === 'number' && number > 0;
});
/**
 * Predicate checking if value is negative.
 * @constant
 */

exports.positive = positive;
var negative = new _pred["default"]('is negative?', function (number) {
  return typeof number === 'number' && number < 0;
});
/**
 * Predicate checking if value is zero.
 * @constant
 */

exports.negative = negative;
var zero = new _pred["default"]('is zero?', function (number) {
  return typeof number === 'number' && number === 0;
}); // Type predicates

/**
 * Predicate checking if value is a number.
 * @constant
 */

exports.zero = zero;
var isNumber = new _pred["default"]('is a number?', function (maybeNumber) {
  return typeof maybeNumber === 'number';
});
/**
 * Predicate checking if value is a number.
 * @constant
 */

exports.isNumber = isNumber;
var isString = new _pred["default"]('is a string?', function (maybeString) {
  return typeof maybeString === 'string';
});
/**
 * Predicate checking if value is a number.
 * @constant
 */

exports.isString = isString;
var isObject = new _pred["default"]('is an object?', function (maybeObject) {
  return _typeof(maybeObject) === 'object';
});
/**
 * Predicate checking if value is a number.
 * @constant
 */

exports.isObject = isObject;
var isBool = new _pred["default"]('is a boolean?', function (maybeBool) {
  return typeof maybeBool === 'boolean';
});
/**
 * Predicate checking if value is a symbol.
 * @constant
 */

exports.isBool = isBool;
var isSymbol = new _pred["default"]('is a symbol?', function (maybeSymbol) {
  return _typeof(maybeSymbol) === 'symbol';
});
/**
 * Predicate checking if value is a function.
 * @constant
 */

exports.isSymbol = isSymbol;
var isFn = new _pred["default"]('is a function?', function (maybeFn) {
  return typeof maybeFn === 'function';
}); // TODO Arrays, Lists, etc..

exports.isFn = isFn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVkcy50cyJdLCJuYW1lcyI6WyJldmVuIiwiUHJlZCIsIm51bWJlciIsIm9kZCIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJ6ZXJvIiwiaXNOdW1iZXIiLCJtYXliZU51bWJlciIsImlzU3RyaW5nIiwibWF5YmVTdHJpbmciLCJpc09iamVjdCIsIm1heWJlT2JqZWN0IiwiaXNCb29sIiwibWF5YmVCb29sIiwiaXNTeW1ib2wiLCJtYXliZVN5bWJvbCIsImlzRm4iLCJtYXliZUZuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBRUE7O0FBRUE7Ozs7QUFJTyxJQUFNQSxJQUFJLEdBQUcsSUFBSUMsZ0JBQUosQ0FBUyxVQUFULEVBQXFCLFVBQUNDLE1BQUQsRUFBb0I7QUFDM0QsU0FBT0EsTUFBTSxHQUFHLENBQVQsS0FBZSxDQUFmLElBQW9CLE9BQU9BLE1BQVAsS0FBa0IsUUFBN0M7QUFDRCxDQUZtQixDQUFiO0FBSVA7Ozs7OztBQUlPLElBQU1DLEdBQUcsR0FBRyxJQUFJRixnQkFBSixDQUFTLFNBQVQsRUFBb0IsVUFBQ0MsTUFBRCxFQUFvQjtBQUN6RCxTQUFPQSxNQUFNLEdBQUcsQ0FBVCxLQUFlLENBQWYsSUFBb0IsT0FBT0EsTUFBUCxLQUFrQixRQUE3QztBQUNELENBRmtCLENBQVo7QUFJUDs7Ozs7O0FBSU8sSUFBTUUsUUFBUSxHQUFHLElBQUlILGdCQUFKLENBQVMsY0FBVCxFQUF5QixVQUFDQyxNQUFELEVBQW9CO0FBQ25FLFNBQU8sT0FBT0EsTUFBUCxLQUFrQixRQUFsQixJQUE4QkEsTUFBTSxHQUFHLENBQTlDO0FBQ0QsQ0FGdUIsQ0FBakI7QUFJUDs7Ozs7O0FBSU8sSUFBTUcsUUFBUSxHQUFHLElBQUlKLGdCQUFKLENBQVMsY0FBVCxFQUF5QixVQUFDQyxNQUFELEVBQW9CO0FBQ25FLFNBQU8sT0FBT0EsTUFBUCxLQUFrQixRQUFsQixJQUE4QkEsTUFBTSxHQUFHLENBQTlDO0FBQ0QsQ0FGdUIsQ0FBakI7QUFJUDs7Ozs7O0FBSU8sSUFBTUksSUFBSSxHQUFHLElBQUlMLGdCQUFKLENBQVMsVUFBVCxFQUFxQixVQUFDQyxNQUFELEVBQW9CO0FBQzNELFNBQU8sT0FBT0EsTUFBUCxLQUFrQixRQUFsQixJQUE4QkEsTUFBTSxLQUFLLENBQWhEO0FBQ0QsQ0FGbUIsQ0FBYixDLENBSVA7O0FBRUE7Ozs7OztBQUlPLElBQU1LLFFBQVEsR0FBRyxJQUFJTixnQkFBSixDQUN0QixjQURzQixFQUV0QixVQUFDTyxXQUFEO0FBQUEsU0FBc0IsT0FBT0EsV0FBUCxLQUF1QixRQUE3QztBQUFBLENBRnNCLENBQWpCO0FBS1A7Ozs7OztBQUlPLElBQU1DLFFBQVEsR0FBRyxJQUFJUixnQkFBSixDQUN0QixjQURzQixFQUV0QixVQUFDUyxXQUFEO0FBQUEsU0FBc0IsT0FBT0EsV0FBUCxLQUF1QixRQUE3QztBQUFBLENBRnNCLENBQWpCO0FBS1A7Ozs7OztBQUlPLElBQU1DLFFBQVEsR0FBRyxJQUFJVixnQkFBSixDQUN0QixlQURzQixFQUV0QixVQUFDVyxXQUFEO0FBQUEsU0FBc0IsUUFBT0EsV0FBUCxNQUF1QixRQUE3QztBQUFBLENBRnNCLENBQWpCO0FBS1A7Ozs7OztBQUlPLElBQU1DLE1BQU0sR0FBRyxJQUFJWixnQkFBSixDQUFTLGVBQVQsRUFBMEIsVUFBQ2EsU0FBRDtBQUFBLFNBQW9CLE9BQU9BLFNBQVAsS0FBcUIsU0FBekM7QUFBQSxDQUExQixDQUFmO0FBRVA7Ozs7OztBQUlPLElBQU1DLFFBQVEsR0FBRyxJQUFJZCxnQkFBSixDQUN0QixjQURzQixFQUV0QixVQUFDZSxXQUFEO0FBQUEsU0FBc0IsUUFBT0EsV0FBUCxNQUF1QixRQUE3QztBQUFBLENBRnNCLENBQWpCO0FBS1A7Ozs7OztBQUlPLElBQU1DLElBQUksR0FBRyxJQUFJaEIsZ0JBQUosQ0FBUyxnQkFBVCxFQUEyQixVQUFDaUIsT0FBRDtBQUFBLFNBQWtCLE9BQU9BLE9BQVAsS0FBbUIsVUFBckM7QUFBQSxDQUEzQixDQUFiLEMsQ0FFUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmVkIGZyb20gJy4vc3BlYy9wcmVkJztcblxuLyoqIEBtb2R1bGUgc3BlY2pzL2Jhc2ljICovXG5cbi8vIEJhc2ljIG51bWVyaWNhbCBwcmVkaWNhdGVzXG5cbi8qKlxuICogUHJlZGljYXRlIGNoZWNraW5nIGlmIHZhbHVlIGlzIGV2ZW4uXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGV2ZW4gPSBuZXcgUHJlZCgnaXMgZXZlbj8nLCAobnVtYmVyOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIG51bWJlciAlIDIgPT09IDAgJiYgdHlwZW9mIG51bWJlciA9PT0gJ251bWJlcic7XG59KTtcblxuLyoqXG4gKiBQcmVkaWNhdGUgY2hlY2tpbmcgaWYgdmFsdWUgaXMgb2RkLlxuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBvZGQgPSBuZXcgUHJlZCgnaXMgb2RkPycsIChudW1iZXI6IG51bWJlcikgPT4ge1xuICByZXR1cm4gbnVtYmVyICUgMiA9PT0gMSAmJiB0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJztcbn0pO1xuXG4vKipcbiAqIFByZWRpY2F0ZSBjaGVja2luZyBpZiB2YWx1ZSBpcyBwb3NpdGl2ZS5cbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgcG9zaXRpdmUgPSBuZXcgUHJlZCgnaXMgcG9zaXRpdmU/JywgKG51bWJlcjogbnVtYmVyKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiBudW1iZXIgPiAwO1xufSk7XG5cbi8qKlxuICogUHJlZGljYXRlIGNoZWNraW5nIGlmIHZhbHVlIGlzIG5lZ2F0aXZlLlxuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBuZWdhdGl2ZSA9IG5ldyBQcmVkKCdpcyBuZWdhdGl2ZT8nLCAobnVtYmVyOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBudW1iZXIgPT09ICdudW1iZXInICYmIG51bWJlciA8IDA7XG59KTtcblxuLyoqXG4gKiBQcmVkaWNhdGUgY2hlY2tpbmcgaWYgdmFsdWUgaXMgemVyby5cbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgemVybyA9IG5ldyBQcmVkKCdpcyB6ZXJvPycsIChudW1iZXI6IG51bWJlcikgPT4ge1xuICByZXR1cm4gdHlwZW9mIG51bWJlciA9PT0gJ251bWJlcicgJiYgbnVtYmVyID09PSAwO1xufSk7XG5cbi8vIFR5cGUgcHJlZGljYXRlc1xuXG4vKipcbiAqIFByZWRpY2F0ZSBjaGVja2luZyBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSBuZXcgUHJlZChcbiAgJ2lzIGEgbnVtYmVyPycsXG4gIChtYXliZU51bWJlcjogYW55KSA9PiB0eXBlb2YgbWF5YmVOdW1iZXIgPT09ICdudW1iZXInXG4pO1xuXG4vKipcbiAqIFByZWRpY2F0ZSBjaGVja2luZyBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSBuZXcgUHJlZChcbiAgJ2lzIGEgc3RyaW5nPycsXG4gIChtYXliZVN0cmluZzogYW55KSA9PiB0eXBlb2YgbWF5YmVTdHJpbmcgPT09ICdzdHJpbmcnXG4pO1xuXG4vKipcbiAqIFByZWRpY2F0ZSBjaGVja2luZyBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSBuZXcgUHJlZChcbiAgJ2lzIGFuIG9iamVjdD8nLFxuICAobWF5YmVPYmplY3Q6IGFueSkgPT4gdHlwZW9mIG1heWJlT2JqZWN0ID09PSAnb2JqZWN0J1xuKTtcblxuLyoqXG4gKiBQcmVkaWNhdGUgY2hlY2tpbmcgaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzQm9vbCA9IG5ldyBQcmVkKCdpcyBhIGJvb2xlYW4/JywgKG1heWJlQm9vbDogYW55KSA9PiB0eXBlb2YgbWF5YmVCb29sID09PSAnYm9vbGVhbicpO1xuXG4vKipcbiAqIFByZWRpY2F0ZSBjaGVja2luZyBpZiB2YWx1ZSBpcyBhIHN5bWJvbC5cbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgaXNTeW1ib2wgPSBuZXcgUHJlZChcbiAgJ2lzIGEgc3ltYm9sPycsXG4gIChtYXliZVN5bWJvbDogYW55KSA9PiB0eXBlb2YgbWF5YmVTeW1ib2wgPT09ICdzeW1ib2wnXG4pO1xuXG4vKipcbiAqIFByZWRpY2F0ZSBjaGVja2luZyBpZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBpc0ZuID0gbmV3IFByZWQoJ2lzIGEgZnVuY3Rpb24/JywgKG1heWJlRm46IGFueSkgPT4gdHlwZW9mIG1heWJlRm4gPT09ICdmdW5jdGlvbicpO1xuXG4vLyBUT0RPIEFycmF5cywgTGlzdHMsIGV0Yy4uXG4iXX0=