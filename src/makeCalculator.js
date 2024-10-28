'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    get result() {
      return result;
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
      result = callback(result, num);

      return this;
    },
    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
