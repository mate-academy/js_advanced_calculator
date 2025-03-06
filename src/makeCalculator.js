'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, n) {
      if (typeof callback === 'function') {
        callback(n);
      }

      return calculator;
    },
    reset() {
      calculator.result = 0;

      return calculator;
    },

    add(b) {
      calculator.result += b;
    },
    subtract(b) {
      calculator.result -= b;
    },
    multiply(b) {
      calculator.result *= b;
    },
    divide(b) {
      calculator.result /= b;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
