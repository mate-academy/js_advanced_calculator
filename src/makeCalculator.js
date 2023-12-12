'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `sum` property is initially 0.
 *
 * How the calculator will work:
 * - Each `operate` call takes a callback and a number and sets the
 *   appropriate value to the `sum` property.
 * - The `reset` method resets `sum` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - The `operate` and `reset` methods can be called in a chain.
 *
 * Example:
 * const calculator = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.sum === 21

 * calculator.reset()
 * calculator.sum === 0

 * calculator
 *  .operate(calculator.add, 10)
 *  .reset()
 *  .operate(calculator.subtract, 20)
 *  .operate(calculator.divide, 5)
 *  .operate(calculator.multiply, 7)
 *
 * calculator.sum === -28
 *
 *
 * @return {object}
 */
function makeCalculator() {
  let sum = 0;

  const calcMethods = {
    reset() {
      sum = 0;

      return this;
    },
    add(num) {
      sum += num;

      return this;
    },
    subtract(num) {
      sum -= num;

      return this;
    },
    divide(num) {
      sum /= num;

      return this;
    },
    multiply(num) {
      sum *= num;

      return this;
    },
    operate(callback, num) {
      callback(num);

      return this;
    },
    get result() {
      return sum;
    },
  };

  return calcMethods;
}

module.exports = makeCalculator;
