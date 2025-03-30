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

    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
