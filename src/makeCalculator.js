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

    operate(operation, operand) {
      operation.call(this, operand);

      return this;
    },

    add(operand) {
      this.result += operand;
    },

    subtract(operand) {
      this.result -= operand;
    },

    divide(operand) {
      this.result /= operand;
    },

    multiply(operand) {
      this.result *= operand;
    },
  };
}

module.exports = makeCalculator;
