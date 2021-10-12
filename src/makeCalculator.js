'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `result` property is initially 0.
 *
 * How the calculator will work:
 * - Each `operate` call takes a callback and a number and sets the
 *   appropriate value to the `result` property.
 * - The `reset` method resets `result` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - The `operate` and `reset` methods can be called in a chain.
 *
 * Example:
 *
 * @return {object}
 */
function makeCalculator() {
  const obj = {

    add(value) {
      return obj.result + value;
    },

    subtract(value) {
      return obj.result - value;
    },

    multiply(value) {
      return obj.result * value;
    },

    divide(value) {
      return obj.result / value;
    },

    reset() {
      obj.result = 0;

      return obj;
    },

    operate(func, value) {
      obj.result = func(value);

      return obj;
    },

    result: 0,
  };

  return obj;
};

module.exports = makeCalculator;
