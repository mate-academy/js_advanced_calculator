'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `calculator.result` property is initially 0.
 *
 * How the calculator will work:
 * - Each `operate` call takes a callback and a number and sets the
 *   appropriate value to the `calculator.result` property.
 * - The `reset` method resets `calculator.result` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - The `operate` and `reset` methods can be called in a chain.
 *
 * Example:
 * const calculator = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.calculator.result === 21

 * calculator.reset()
 * calculator.calculator.result === 0

 * calculator
 *  .operate(calculator.add, 10)
 *  .reset()
 *  .operate(calculator.subtract, 20)
 *  .operate(calculator.divide, 5)
 *  .operate(calculator.multiply, 7)
 *
 * calculator.calculator.result === -28
 *
 *
 * @return {object}
 */
function makeCalculator() {
  // write code here

  const calculator = {
    result: 0,

    add(val) {
      calculator.result += val;

      return calculator.result;
    },

    subtract(val) {
      calculator.result -= val;

      return calculator.result;
    },

    multiply(val) {
      calculator.result *= val;

      return calculator.result;
    },

    divide(val) {
      calculator.result /= val;

      return calculator.result;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, val) {
      callback(val);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
