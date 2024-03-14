'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(a) {
      calculator.result += a;

      return this;
    },

    subtract(a) {
      calculator.result -= a;

      return this;
    },

    divide(a) {
      if (a !== 0) {
        calculator.result /= a;
      }

      return this;
    },

    multiply(a) {
      calculator.result *= a;

      return this;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(callback, number) {
      return callback.call(calculator, number);
    },
  };

  return calculator;
}

module.exports = makeCalculator;
