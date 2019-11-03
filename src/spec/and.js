import Spec from './spec';
import {invalid} from '../control';
import invariant from 'tiny-invariant';

/** @module specjs/spec */

/**
 * Class representing `And` specs, which requires that all the sub-specs be fulfilled.
 * @private
 */
class And extends Spec {
  /**
   * Asserts this spec on a given value. Returns the value if value passes spec,
   * returns `specjs.invalid` otherwise.
   *
   * @param {any} value - The value to be asserted.
   * @return {invalid|any} Returns the value if value passes spec, returns
   * specjs.invalid otherwise.
   */
  assert(value) {
    for (let spec of this.options) {
      if (spec.assert(value) === invalid) {
        return invalid;
      }
    }

    return value;
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
    let result = true;
    for (let spec of this.options) {
      if (spec.explain(value, path.concat([this.name])) === false) {
        result = false;
      }
    }

    return result;
  }
}

/**
 * Factory function for `And` specs.
 *
 * @param {String} name - Name of the and spec. Important to set this to a human
 * readable (meaningful) string, since this is what will get printed out in explain.
 * @param {...Spec} specs - Specs that have all to be satisfied to fulfill this spec.
 * @return {And} Returns an `And` spec representing the conjunction of the given specs.
 */
export function and(name, ...specs) {
  invariant(typeof name === 'string', 'specjs.and was called with an invalid name.');
  invariant(specs.length > 0, 'specjs.and was called without specs.');
  for (let spec of specs) {
    invariant(spec instanceof Spec, 'specjs.and was called with invalid specs.');
  }
  return new And(name, specs);
}
