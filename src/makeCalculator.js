'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    add(calculator, number) {
      calculator.result += number;

      return calculator;
    },
    subtract(calculator, number) {
      calculator.result -= number;

      return calculator;
    },
    multiply(calculator, number) {
      calculator.result *= number;

      return calculator;
    },
    divide(calculator, number) {
      if (number !== 0) {
        calculator.result /= number;
      }

      return calculator;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      callback(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
