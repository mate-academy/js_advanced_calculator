'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, operand) {
      this.result = callback(operand);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    add(operand) {
      return calculator.result + operand;
    },
    multiply(operand) {
      return calculator.result * operand;
    },
    subtract(operand) {
      return calculator.result - operand;
    },
    divide(operand) {
      return calculator.result / operand;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
