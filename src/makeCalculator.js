'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate(callback, value) {
      callback.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(x) {
      this.result += x;
    },

    subtract(x) {
      this.result -= x;
    },

    multiply(x) {
      this.result *= x;
    },

    divide(x) {
      this.result /= x;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
