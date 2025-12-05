'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(currentResult, value) {
      return currentResult + value;
    },
    subtract(currentResult, value) {
      return currentResult - value;
    },
    multiply(currentResult, value) {
      return currentResult * value;
    },
    divide(currentResult, value) {
      return currentResult / value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
