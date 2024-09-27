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

    operate(action, num) {
      action(num);

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
