'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(b) {
      this.result += b;
    },

    subtract(b) {
      this.result -= b;
    },

    multiply(b) {
      this.result *= b;
    },

    divide(b) {
      this.result /= b;
    },

    operate(callback, num) {
      callback.call(this, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
