'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(action, number) {
      this.result = action(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

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
      return currentResult / number;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
