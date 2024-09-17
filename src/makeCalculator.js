'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, operand) {
      callback.call(this, operand);

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

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
