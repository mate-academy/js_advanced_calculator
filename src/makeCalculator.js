'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, operand) {
      callback(operand);

      return this;
    },

    add(operand) {
      calculator.result += operand;
    },

    subtract(operand) {
      calculator.result -= operand;
    },

    multiply(operand) {
      calculator.result *= operand;
    },

    divide(operand) {
      calculator.result /= operand;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

  };

  return calculator;
}

module.exports = makeCalculator;
