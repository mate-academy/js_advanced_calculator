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
 * const calculator = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.result === 21

 * calculator.reset()
 * calculator.result === 0

 * calculator
 *  .operate(calculator.add, 10)
 *  .reset()
 *  .operate(calculator.subtract, 20)
 *  .operate(calculator.divide, 5)
 *  .operate(calculator.multiply, 7)
 *
 * calculator.result === -28
 *
 *
 * @return {object}
 */

function makeCalculator() {
  const obj = {
    result: 0,
    methods: ['add', 'subtract', 'multiply', 'divide', 'reset', 'operate'],

    operate(method, arg) {
      return method.call(this, arg);
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(arg) {
      this.result += arg;

      return this.result;
    },

    subtract(arg) {
      this.result -= arg;

      return this.result;
    },

    multiply(arg) {
      this.result *= arg;

      return this.result;
    },

    divide(arg) {
      this.result /= arg;

      return this.result;
    },
  };

  return obj;
}

module.exports = makeCalculator;
