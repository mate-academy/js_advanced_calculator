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
    operate(callback, num) {
      callback(num);

      return this;
    },
    reset() {
      calculator.result = 0;

      return this;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
