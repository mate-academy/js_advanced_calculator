'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(result, value) {
      return result + value;
    },
    subtract(result, value) {
      return result - value;
    },
    multiply(result, value) {
      return result * value;
    },
    divide(result, value) {
      return result / value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
