'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, a) {
      this.result = callback(this.result, a);

      return this;
    },

    add(b, a) {
      return b + a;
    },

    subtract(b, a) {
      return b - a;
    },

    multiply(b, a) {
      return b * a;
    },

    divide(b, a) {
      return b / a;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
