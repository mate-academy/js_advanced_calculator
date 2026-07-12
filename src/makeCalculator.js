'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
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
  };

  return calc;
}

module.exports = makeCalculator;
