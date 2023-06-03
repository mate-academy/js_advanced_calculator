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
 * this.result === 21

 * calculator.reset()
 * this.result === 0

 * calculator
 *  .operate(calculator.add, 10)
 *  .reset()
 *  .operate(calculator.subtract, 20)
 *  .operate(calculator.divide, 5)
 *  .operate(calculator.multiply, 7)
 *
 * this.result === -28
 *
 *
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
  };

  function add(number) {
    this.result += number;
  }

  function subtract(number) {
    this.result -= number;
  }

  function multiply(number) {
    this.result *= number;
  }

  function divide(number) {
    if (number === 0) {
      return 'error';
    }

    this.result /= number;
  }

  function reset() {
    this.result = 0;

    return this;
  }

  function operate(callback, number) {
    callback.call(calculator, number);

    return calculator;
  }

  return calculator;
}

module.exports = makeCalculator;
