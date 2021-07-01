'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `this.result` property is initially 0.
 *
 * How the calculator will work:
 * - Each `operate` call takes a callback and a number and sets the
 *   appropriate value to the `this.result` property.
 * - The `reset` method resets `this.result` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - The `operate` and `reset` methods can be called in a chain.
 *
 * Example:
 * const calculator = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.this.result === 21

 * calculator.reset()
 * calculator.this.result === 0

 * calculator
 *  .operate(calculator.add, 10)
 *  .reset()
 *  .operate(calculator.subtract, 20)
 *  .operate(calculator.divide, 5)
 *  .operate(calculator.multiply, 7)
 *
 * calculator.this.result === -28
 *
 *
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(n) {
      calculator.result += n;
    },

    subtract(n) {
      calculator.result -= n;
    },

    multiply(n) {
      calculator.result *= n;
    },

    divide(n) {
      calculator.result /= n;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, n) {
      operation(n);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
