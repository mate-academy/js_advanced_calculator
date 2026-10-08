'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(a) {
      this.result += a;

      return this;
    },

    subtract(a) {
      this.result -= a;

      return this;
    },

    multiply(a) {
      this.result *= a;

      return this;
    },

    divide(a) {
      this.result /= a;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
