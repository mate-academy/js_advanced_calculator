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
    add: addNumber,
    subtract: subtractNumber,
    multiply: multiplyNumber,
    divide: divideNumber,
    operate: callToAction,
    reset: resetResult,
    result: 0,
  };

  function callToAction(value, number) {
    switch (value) {
      case this.add:
        addNumber(number);

        return this;

      case this.subtract:
        subtractNumber(number);

        return this;

      case this.multiply:
        multiplyNumber(number);

        return this;

      case this.divide:
        divideNumber(number);

        return this;

      case this.reset:
        resetResult();
    }
  }

  function addNumber(number) {
    calculator.result += number;
  }

  function subtractNumber(number) {
    calculator.result -= number;
  }

  function multiplyNumber(number) {
    calculator.result *= number;
  }

  function divideNumber(number) {
    calculator.result /= number;
  }

  function resetResult() {
    calculator.result = 0;

    return this;
  }

  return calculator;
}

module.exports = makeCalculator;
