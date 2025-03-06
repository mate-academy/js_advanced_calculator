'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num, currentResult) {
      return currentResult + num;
    },

    subtract(num, currentResult) {
      return currentResult - num;
    },

    multiply(num, currentResult) {
      return currentResult * num;
    },

    divide(num, currentResult) {
      return currentResult / num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      this.result = callback(num, this.result);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
