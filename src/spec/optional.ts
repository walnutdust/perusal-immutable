import Spec from './spec';
import {invalid} from '../control';
import invariant from 'tiny-invariant';

/** @module perusal-immutable/spec */

/**
 * Class representing `Optional` specs, which either accepts an undefined value or
 * requires that the value satisfy the spec if present. Typically used with keys to
 * denote specs for optional keys.
 * @private
 */
export default class Optional extends Spec {
  /**
   * Asserts this spec on a given value. Returns the value if value passes spec,
   * returns `perusal-immutable.invalid` otherwise.
   *
   * @param {any} value - The value to be asserted.
   * @return {invalid|any} Returns the value if value passes spec, returns
   * perusal-immutable.invalid otherwise.
   */
  assert(value: any): any {
    if (value === undefined) return value;

    const result = this.options.assert(value);

    if (result !== invalid) return value;
    return invalid;
  }

  /**
   * Explains why a value passes/fails this spec.
   *
   * @param {any} value - The value to be checked.
   * @param {string[]} path - The path travelled to this spec.
   * @return {boolean} Returns true if the value satisfies this spec, false
   * otherwise.
   */
  explain(value: any, path: string[]): boolean {
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
export function optional(spec: Spec): Optional {
  invariant(spec instanceof Spec, 'Invalid specification passed to perusal-immutable.optional');
  invariant(
    arguments.length === 1,
    'perusal-immutable.optional was called with invalid number of arguments.'
  );
  return new Optional('optional', spec);
}
