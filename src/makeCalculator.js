'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(x) {
      this.result += x;

      return this;
    },

    subtract(x) {
      this.result -= x;

      return this;
    },

    multiply(x) {
      this.result *= x;

      return this;
    },

    divide(x) {
      this.result /= x;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, x) {
      return callback.call(this, x);
    },
  };
}

module.exports = makeCalculator;
