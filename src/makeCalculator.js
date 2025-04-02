'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(a) {
      return this.result + a;
    },

    subtract(a) {
      return this.result - a;
    },

    multiply(a) {
      return this.result * a;
    },

    divide(a) {
      return this.result / a;
    },

    operate(callback, value) {
      this.result = callback.call(this, value);

      return this; // permite encadeamento
    },

    reset() {
      this.result = 0;

      return this; // permite encadeamento
    },
  };
}

module.exports = makeCalculator;
