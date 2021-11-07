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
  const calculator = {

    add(value) {
      return calculator.result + value;
    },

    subtract(value) {
      return calculator.result - value;
    },

    multiply(value) {
      return calculator.result * value;
    },

    divide(value) {
      return calculator.result / value;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(func, value) {
      calculator.result = func(value);

      return calculator;
    },

    result: 0,
  };

  return calculator;
};

module.exports = makeCalculator;
