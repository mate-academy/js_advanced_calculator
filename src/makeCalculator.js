'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(a) {
      this.result += a;
    },

    subtract(a) {
      this.result -= a;
    },

    multiply(a) {
      this.result *= a;
    },

    divide(a) {
      this.result /= a;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, a) {
      callback.call(this, a);

      return this;
    },
  };
}

module.exports = makeCalculator;
