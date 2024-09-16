'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(a) {
      calculator.result += a;
    },
    subtract(a) {
      calculator.result -= a;
    },
    multiply(a) {
      calculator.result *= a;
    },
    divide(a) {
      calculator.result /= a;
    },
    reset() {
      calculator.result = 0;

      return this;
    },
    operate(callback, a) {
      callback(a);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
