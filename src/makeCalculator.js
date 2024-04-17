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

    operate(operation, operand) {
      operation.call(this, operand);

      return this;
    },

    add(operand) {
      this.result += operand;

      return this;
    },

    subtract(operand) {
      this.result -= operand;

      return this;
    },

    multiply(operand) {
      this.result *= operand;

      return this;
    },

    divide(operand) {
      this.result /= operand;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
