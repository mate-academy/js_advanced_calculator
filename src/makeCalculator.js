'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(a) {
      calculator.result += a;

      return calculator.result;
    },

    subtract(a) {
      calculator.result -= a;

      return calculator.result;
    },

    multiply(a) {
      calculator.result *= a;

      return calculator.result;
    },

    divide(a) {
      calculator.result /= a;

      return calculator.result;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(action, value) {
      action(value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
