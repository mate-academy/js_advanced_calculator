'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(number) {
      calculator.result += number;
    },
    subtract(number) {
      calculator.result -= number;
    },
    multiply(number) {
      calculator.result *= number;
    },
    divide(number) {
      calculator.result /= number;
    },
    operate(callback, number) {
      callback(number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    result: 0,
  };

  return calculator;
}
module.exports = makeCalculator;
