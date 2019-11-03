import Pred from './spec/pred';

/** @module specjs/basic */

// Basic numerical predicates

/**
 * Predicate checking if value is even.
 * @constant
 */
export const even = new Pred('is even?', (number) => {
  return number % 2 === 0 && typeof number === 'number';
});

/**
 * Predicate checking if value is odd.
 * @constant
 */
export const odd = new Pred('is odd?', (number) => {
  return number % 2 === 1 && typeof number === 'number';
});

/**
 * Predicate checking if value is positive.
 * @constant
 */
export const positive = new Pred('is positive?', (number) => {
  return typeof number === 'number' && number > 0;
});

/**
 * Predicate checking if value is negative.
 * @constant
 */
export const negative = new Pred('is negative?', (number) => {
  return typeof number === 'number' && number < 0;
});

/**
 * Predicate checking if value is zero.
 * @constant
 */
export const zero = new Pred('is zero?', (number) => {
  return typeof number === 'number' && number === 0;
});

// Type predicates

/**
 * Predicate checking if value is a number.
 * @constant
 */
export const isNumber = new Pred('is a number?', (maybeNumber) => typeof maybeNumber === 'number');

/**
 * Predicate checking if value is a number.
 * @constant
 */
export const isString = new Pred('is a string?', (maybeString) => typeof maybeString === 'string');

/**
 * Predicate checking if value is a number.
 * @constant
 */
export const isObject = new Pred('is an object?', (maybeObject) => typeof maybeObject === 'object');

/**
 * Predicate checking if value is a number.
 * @constant
 */
export const isBool = new Pred('is a boolean?', (maybeBool) => typeof maybeBool === 'boolean');

/**
 * Predicate checking if value is a symbol.
 * @constant
 */
export const isSymbol = new Pred('is a symbol?', (maybeSymbol) => typeof maybeSymbol === 'symbol');

/**
 * Predicate checking if value is a function.
 * @constant
 */
export const isFn = new Pred('is a function?', (maybeFn) => typeof maybeFn === 'function');

// TODO Arrays, Lists, etc..
