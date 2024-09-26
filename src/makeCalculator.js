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
      this.result = operation(this.result, operand);

      return this;
    },

    add(number, operand) {
      return number + operand;
    },

    subtract(number, operand) {
      return number - operand;
    },

    multiply(number, operand) {
      return number * operand;
    },

    divide(number, operand) {
      return number / operand;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
