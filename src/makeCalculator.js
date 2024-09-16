'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    operate(callback, value) {
      this.result = callback(value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(a) {
      return calculator.result + a;
    },

    subtract(a) {
      return calculator.result - a;
    },

    multiply(a) {
      return calculator.result * a;
    },

    divide(a) {
      if (a !== 0) {
        return calculator.result / a;
      }
    },
  };

  return calculator;
}

module.exports = makeCalculator;
