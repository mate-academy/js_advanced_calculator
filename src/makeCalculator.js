'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    add(currentResult, num) {
      return currentResult + num;
    },

    subtract(currentResult, num) {
      return currentResult - num;
    },

    multiply(currentResult, num) {
      return currentResult * num;
    },

    divide(currentResult, num) {
      return currentResult / num;
    },

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
