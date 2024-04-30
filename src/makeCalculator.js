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
      if (a !== 0) {
        calculator.result /= a;
      }
    },
    operate(callback, a) {
      callback(a);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
