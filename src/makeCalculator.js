'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    operate(calcs, argument) {
      this.result = calcs(argument, this.result);

      return this;
    },
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
  };

  return calculator;
}

module.exports = makeCalculator;
