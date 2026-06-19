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
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

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
