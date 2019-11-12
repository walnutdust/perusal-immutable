"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToSpecs = addToSpecs;

var _immutable = require("immutable");

/** @module specjs/spec/util/addToSpecs */

/**
 * Adds a certain value to a certain key object's specs, initializing specs if necessary.
 * @private
 *
 * @param {any} object - The object to be added to.
 * @param {String} key - The key for the spec to be added to the object's spec
 * (typically the spec's name).
 * @param {true|invalid} value - Value representing if the object satisfied the keys.
 */
function addToSpecs(object, key, value) {
  if ((0, _immutable.isImmutable)(object) || object.isExtendable) {
    if (!object.specs) {
      object.specs = {};
    }

    object.specs[key] = value;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGVjL3V0aWwvYWRkVG9TcGVjcy50cyJdLCJuYW1lcyI6WyJhZGRUb1NwZWNzIiwib2JqZWN0Iiwia2V5IiwidmFsdWUiLCJpc0V4dGVuZGFibGUiLCJzcGVjcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7QUFTTyxTQUFTQSxVQUFULENBQW9CQyxNQUFwQixFQUFpQ0MsR0FBakMsRUFBOENDLEtBQTlDLEVBQW9FO0FBQ3pFLE1BQUksNEJBQVlGLE1BQVosS0FBdUJBLE1BQU0sQ0FBQ0csWUFBbEMsRUFBZ0Q7QUFDOUMsUUFBSSxDQUFDSCxNQUFNLENBQUNJLEtBQVosRUFBbUI7QUFDakJKLE1BQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLEVBQWY7QUFDRDs7QUFDREosSUFBQUEsTUFBTSxDQUFDSSxLQUFQLENBQWFILEdBQWIsSUFBb0JDLEtBQXBCO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNJbW11dGFibGV9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbi8qKiBAbW9kdWxlIHNwZWNqcy9zcGVjL3V0aWwvYWRkVG9TcGVjcyAqL1xuXG4vKipcbiAqIEFkZHMgYSBjZXJ0YWluIHZhbHVlIHRvIGEgY2VydGFpbiBrZXkgb2JqZWN0J3Mgc3BlY3MsIGluaXRpYWxpemluZyBzcGVjcyBpZiBuZWNlc3NhcnkuXG4gKiBAcHJpdmF0ZVxuICpcbiAqIEBwYXJhbSB7YW55fSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGJlIGFkZGVkIHRvLlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgZm9yIHRoZSBzcGVjIHRvIGJlIGFkZGVkIHRvIHRoZSBvYmplY3QncyBzcGVjXG4gKiAodHlwaWNhbGx5IHRoZSBzcGVjJ3MgbmFtZSkuXG4gKiBAcGFyYW0ge3RydWV8aW52YWxpZH0gdmFsdWUgLSBWYWx1ZSByZXByZXNlbnRpbmcgaWYgdGhlIG9iamVjdCBzYXRpc2ZpZWQgdGhlIGtleXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1NwZWNzKG9iamVjdDogYW55LCBrZXk6IHN0cmluZywgdmFsdWU6IHRydWUgfCBTeW1ib2wpIHtcbiAgaWYgKGlzSW1tdXRhYmxlKG9iamVjdCkgfHwgb2JqZWN0LmlzRXh0ZW5kYWJsZSkge1xuICAgIGlmICghb2JqZWN0LnNwZWNzKSB7XG4gICAgICBvYmplY3Quc3BlY3MgPSB7fTtcbiAgICB9XG4gICAgb2JqZWN0LnNwZWNzW2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuIl19