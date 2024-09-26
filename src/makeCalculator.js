'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, a) {
      this.result = callback(this.result, a);

      return this;
    },

    add(currentResult, a) {
      return currentResult + a;
    },

    subtract(currentResult, a) {
      return currentResult - a;
    },

    multiply(currentResult, a) {
      return currentResult * a;
    },

    divide(currentResult, a) {
      return currentResult / a;
    },
  };
}

module.exports = makeCalculator;
