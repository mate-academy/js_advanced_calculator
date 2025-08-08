'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
