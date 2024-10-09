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
      if (x !== 0) {
        calculator.result /= x;
      }
    },
    reset() {
      calculator.result = 0;

      return this;
    },
    operate(callback, arg) {
      callback(arg);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
