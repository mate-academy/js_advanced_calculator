'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(operand) {
      calculator.result += operand;

      return this;
    },

    subtract(operand) {
      calculator.result -= operand;

      return this;
    },

    multiply(operand) {
      calculator.result *= operand;

      return this;
    },

    divide(operand) {
      calculator.result /= operand;

      return this;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(callback, operand) {
      callback(operand);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
