'use strict';

/**
 * @return {object}
 */
const makeCalculator = () => {
  const calculator = {
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
      return currentResult / number;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
};

module.exports = makeCalculator;
