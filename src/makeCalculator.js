'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let currentResult = 0;

  return {
    get result() {
      return currentResult;
    },
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },

    operate(callback, num) {
      currentResult = callback(currentResult, num);

      return this;
    },

    reset() {
      currentResult = 0;

      return this;
    },
  };
  // write code here
}

module.exports = makeCalculator;
