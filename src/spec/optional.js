import Spec from './spec';
import {invalid} from '../control';
import invariant from 'tiny-invariant';

/** @module specjs/spec */

/**
 * Class representing `Optional` specs, which either accepts an undefined value or
 * requires that the value satisfy the spec if present. Typically used with keys to
 * denote specs for optional keys.
 * @private
 */
export default class Optional extends Spec {
  /**
   * Asserts this spec on a given value. Returns the value if value passes spec,
   * returns `specjs.invalid` otherwise.
   *
   * @param {any} value - The value to be asserted.
   * @return {invalid|any} Returns the value if value passes spec, returns
   * specjs.invalid otherwise.
   */
  assert(value) {
    if (value === undefined) return value;

    const result = this.options.assert(value);

    if (result !== invalid) return value;
    return invalid;
  }

  /**
   * Explains why a value passes/fails this spec.
   *
   * @param {any} value - The value to be checked.
   * @param {String[]} path - The path travelled to this spec.
   * @return {boolean} Returns true if the value satisfies this spec, false
   * otherwise.
   */
  explain(value, path) {
    if (value === undefined) return true;

    return this.options.explain(value, path);
  }
}

/**
 * Factory function for `Optional` specs.
 *
 * @param {Spec} spec - Spec that has to be fulfiled if input value is not undefined.
 * @return {Optional} Returns a `Optional` spec requiring the input value to satisfy
 * the provided spec if it is defined.
 */
export const optional = (spec) => {
  invariant(spec instanceof Spec, 'Invalid specification passed to specjs.optional');
  return new Optional('optional', spec);
};
