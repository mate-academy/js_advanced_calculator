'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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
      if (number !== 0) {
        return currentResult / number;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, passedNumber) {
      this.result = operation(this.result, passedNumber);

      return this;
    },
  };
}

module.exports = makeCalculator;
