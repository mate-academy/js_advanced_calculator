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
  const RESET_DEFAULT_VALUE = 0;

  return {
    result: 0,

    add(value, result) {
      return result + value;
    },

    subtract(value, result) {
      return result - value;
    },

    multiply(value, result) {
      return result * value;
    },

    divide(value, result) {
      if (value !== 0) {
        return result / value;
      }

      throw new Error('You cannot divide by zero!');
    },

    reset() {
      this.result = RESET_DEFAULT_VALUE;

      return this;
    },

    operate(operation, value) {
      if (typeof value === 'number') {
        this.result = operation(value, this.result);

        return this;
      }

      throw new Error('Value is not a number');
    },
  };
};

module.exports = makeCalculator;
