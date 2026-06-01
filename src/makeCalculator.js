'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    add(currentResult, number) {
      return currentResult + number;
    },

    subtract(currentResult, number) {
      return currentResult - number;
    },

    multiply(currentResult, number) {
      return currentResult * number;
    },

    divide(currentResult, number) {
      return currentResult / number;
    },

    reset(number) {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    result: 0,
  };
}

module.exports = makeCalculator;
