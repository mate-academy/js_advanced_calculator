'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(operand, value) {
      this.result = operand(this.result, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
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
  };
}

module.exports = makeCalculator;
