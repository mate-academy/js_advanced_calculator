'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, n) {
      callback.call(this, n);

      return this;
    },

    add(n) {
      this.result += n;
    },

    subtract(n) {
      this.result -= n;
    },

    multiply(n) {
      this.result *= n;
    },

    divide(n) {
      this.result /= n;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
