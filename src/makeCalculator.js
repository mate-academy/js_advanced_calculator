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
  const calculator = {
    result: 0,

    add(number1, number2) {
      return number1 + number2;
    },

    subtract(number1, number2) {
      return number1 - number2;
    },

    multiply(number1, number2) {
      return number1 * number2;
    },

    divide(number1, number2) {
      let resultDivide = 0;

      // eslint-disable-next-line no-unused-expressions
      (number2 !== 0)
        ? resultDivide += number1 / number2
        : Error('Division by 0 is impossible');

      return resultDivide;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, numeric) {
      this.result = callback(this.result, numeric);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
