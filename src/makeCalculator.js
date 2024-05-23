'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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
      return num === 0 ? "You can't divide by zero" : currentResult / num;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, num) {
      this.result = operation(this.result, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
