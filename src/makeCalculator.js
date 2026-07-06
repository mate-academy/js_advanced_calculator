'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(x) {
      calculator.result += x;
    },
    subtract(x) {
      calculator.result -= x;
    },
    multiply(x) {
      calculator.result *= x;
    },
    divide(x) {
      calculator.result /= x;
    },
    reset() {
      calculator.result = 0;

      return calculator;
    },
    operate(callback, number) {
      callback(number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
