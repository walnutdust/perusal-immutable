import Spec from './spec/spec';
import {and} from './spec/and';
import {or} from './spec/or';
import {pred} from './spec/pred';
import {keys} from './spec/keys';
import {optional} from './spec/optional';
import {invalid} from './control';
import {isImmutable} from 'immutable';
import invariant from 'tiny-invariant';

export {and, keys, pred, optional, Spec, or};

/* eslint-disable no-console */
/** @member {Map} defs holds all user-made definitions. */
const defs = {};

/**
 * Asserts a spec on a given value. Returns the value if value passes specification,
 * returns `specjs.invalid` otherwise.
 *
 * @param {any} value - The value to be asserted.
 * @param {Spec} spec - The spec to be used.
 * @return {invalid|any} Returns the value if value passes specification, returns
 * specjs.invalid otherwise.
 */
export function assert(value, spec) {
  // getSpec allows us to pass it strings to retrive previously defined specs.
  invariant(
    typeof spec === 'string' || spec instanceof Spec,
    `Invalid spec ${spec} passed to specjs.assert.`
  );

  const specification = getSpec(spec);

  // If the value was previous asserted with this specification, simply return the
  // previous result.
  if (value.specs && value.specs[specification.name]) return value.specs[specification.name];

  return specification.assert(value);
}

/**
 * Checks if a value is valid given a specificiation.
 *
 * @param {any} value - The value to be checked.
 * @param {Spec} spec - The speficiation to be used.
 * @return {boolean} Returns boolean representing if the value if value passes
 * spec.
 */
export function isValid(value, spec) {
  // Error checking/throwing here to provide more helpful error messages.
  invariant(
    typeof spec === 'string' || spec instanceof Spec,
    `Invalid specification ${spec} passed to specjs.isValid.`
  );

  return assert(value, spec) !== invalid;
}

/**
 * Explains why a value passes/fails a specification.
 *
 * @param {any} value - The value to be checked.
 * @param {Spec} spec - The speficiation to be used.
 */
export function explain(value, spec) {
  invariant(
    typeof spec === 'string' || spec instanceof Spec,
    `Invalid specification ${spec} passed to specjs.explain.`
  );

  const specification = getSpec(spec);

  if (specification.assert(value, spec) !== invalid) {
    console.log('\n\nValue:\n');
    console.log(isImmutable(value) ? value.toJS() : value);
    console.log(`\n\nPasses specification ${specification.name}.`);
    console.log(`\n`);
  } else {
    console.log('\n\nValue:\n');
    console.log(isImmutable(value) ? value.toJS() : value);
    console.log(`\n\nFails specification(s):`);
    specification.explain(value, []);
    console.log(`\n`);
  }
}

/**
 * Explains why a value fails a specification. Like {@link explain}, but only produces output if invalid.
 *
 * @param {any} value - The value to be checked.
 * @param {Spec} spec - The specificiation to be used.
 */
export function explainIfInvalid(value, spec) {
  invariant(
    typeof spec === 'string' || spec instanceof Spec,
    `Invalid specification ${spec} passed to specjs.explainIfInvalid.`
  );

  const specification = getSpec(spec);

  if (specification.assert(value) === invalid) {
    console.log('\n\nValue:\n');
    console.log(isImmutable(value) ? value.toJS() : value);
    console.log(`\n\nFails specification(s):`);
    specification.explain(value, []);
    console.log(`\n`);
  }
}

/**
 * Defines a new spec, allowing it to be referenced as such in the future.
 *
 * @param {String} name - The name that will be used to refer to the spec in the future.
 * @param {Spec} spec - The spec to be defined.
 */
export function define(name, spec) {
  invariant(!defs[name], `Specfication for ${name} already exists!`);
  invariant(spec instanceof Spec, 'specjs.define called with invalid spec.');
  defs[name] = spec;
}

/**
 * Defines a new spec, allowing it to be referenced as such in the future.
 *
 * @param {String|Spec} maybeSpec - The name of the spec as previously defined in
 * {@link define} or the spec itself.
 */
export function getSpec(maybeSpec) {
  if (maybeSpec instanceof Spec) return maybeSpec;

  invariant(defs[maybeSpec], `Specification for ${maybeSpec} does not exist!`);
  return defs[maybeSpec];
}
