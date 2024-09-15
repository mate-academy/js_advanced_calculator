'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, num) {
      this.result = operation(this.result, num);

      return this;
    },
    add(currentResult, addend) {
      return (currentResult + addend);
    },
    subtract(currentResult, subtrahend) {
      return (currentResult - subtrahend);
    },
    multiply(currentResult, multiplier) {
      return (currentResult * multiplier);
    },
    divide(currentResult, divisor) {
      return (currentResult / divisor);
    },
  };
}

module.exports = makeCalculator;
