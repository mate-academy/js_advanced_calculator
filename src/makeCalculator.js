'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(x, currentResult) {
      return currentResult + x;
    },
    subtract(x, currentResult) {
      return currentResult - x;
    },
    multiply(x, currentResult) {
      return currentResult * x;
    },
    divide(x, currentResult) {
      return currentResult / x;
    },
    operate(operation, value) {
      this.result = operation(value, this.result);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
