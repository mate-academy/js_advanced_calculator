'use strict';

/**
 *
 *
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(value, currentResult) {
      return currentResult + value;
    },
    subtract(value, currentResult) {
      return currentResult - value;
    },
    multiply(value, currentResult) {
      return currentResult * value;
    },
    divide(value, currentResult) {
      return currentResult / value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, input) {
      this.result = callback(input, this.result);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
