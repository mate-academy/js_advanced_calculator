'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    add(res, value) {
      return res + value;
    },

    subtract(res, value) {
      return res - value;
    },

    multiply(res, value) {
      return res * value;
    },

    divide(res, value) {
      return res / value;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
