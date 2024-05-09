'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, value) {
      this.result = callback(this.result, value);

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
      if (a !== 0) {
        return b / a;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
