'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(x = 0) {
      this.result += x;
    },

    subtract(x = 0) {
      this.result -= x;
    },

    multiply(x = 0) {
      this.result *= x;
    },

    divide(x = 0) {
      this.result /= x;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, x) {
      callback.call(this, x);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
