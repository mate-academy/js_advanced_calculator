'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(x) {
      return this.result + x;
    },

    subtract(x) {
      return this.result - x;
    },

    multiply(x) {
      return this.result * x;
    },

    divide(x) {
      return this.result / x;
    },

    operate(callback, value) {
      this.result = callback.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
