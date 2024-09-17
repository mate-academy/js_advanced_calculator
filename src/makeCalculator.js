'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
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
      this.result = 0;

      return this;
    },
    operate(callback, operand) {
      callback.call(this, operand);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
