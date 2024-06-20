'use strict';

/**
 * @return {object}
 */
function makeCalculator(operate) {
  const obj = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

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
      if (number === 0) {
        return 'cannot be divided by zero';
      }

      return currentResult / number;
    },
  };

  return obj;
}

module.exports = makeCalculator;
