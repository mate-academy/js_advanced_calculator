'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    divide(a, b) {
      return a / b;
    },
    multiply(a, b) {
      return a * b;
    },
    reset() {
      calculator.result = 0;

      return calculator;
    },
    operate(callback, number) {
      calculator.result = callback(calculator.result, number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
