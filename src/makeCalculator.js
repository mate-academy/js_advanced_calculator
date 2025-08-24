'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(currentResult, additionalValue) {
      return currentResult + additionalValue;
    },

    subtract(currentResult, additionalValue) {
      return currentResult - additionalValue;
    },

    multiply(currentResult, additionalValue) {
      return currentResult * additionalValue;
    },

    divide(currentResult, additionalValue) {
      return currentResult / additionalValue;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
