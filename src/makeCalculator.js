'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callbackOperation, number) {
      this.result = callbackOperation(number, this.result);

      return this;
    },

    add(a, result) {
      return result + a;
    },

    subtract(a, result) {
      return result - a;
    },

    multiply(a, result) {
      return result * a;
    },

    divide(a, result) {
      return result / a;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
