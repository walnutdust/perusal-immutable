import invariant from 'tiny-invariant';

/** @module specjs/spec */

/**
 * Abstract class representing `Spec`, the main specification of *specjs*. Declares the abstract
 * method assert and explain which is used by the utility methods ofr validity checking and
 * specification assertion on a given value.
 * @private
 */
export default class Spec {
  constructor(name, options) {
    this.name = name;
    this.options = options;
  }

  /**
   * Asserts this spec on a given value.
   *
   * @param {any} value - The value to be asserted.
   * @throws Error on call - subclasses should all implement the `assert` method.
   */
  assert(value) {
    invariant(
      false,
      `Invalid call to Spec assert with value ${value}. Was assert implemented in the subclass?`
    );
  }

  /**
   * Expplains why a given value passes/fails this spec.
   *
   * @param {any} value - The value to be asserted.
   * @param {String[]} path - The path travelled to this spec.
   * @throws Error on call - subclasses should all implement the `explain` method.
   */
  explain(value, path) {
    invariant(
      false,
      `Invalid call to Spec explain with value ${value} at ${path}. Was explain implemented in the subclass?`
    );
  }
}
