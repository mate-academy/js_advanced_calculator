'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      if (b !== 0) {
        return a / b;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(action, x) {
      this.result = action(this.result, x);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
