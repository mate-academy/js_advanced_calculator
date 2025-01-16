'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number) {
      calculator.result += number;
    },
    subtract(number) {
      calculator.result -= number;
    },
    multiply(number) {
      calculator.result *= number;
    },
    divide(number) {
      calculator.result /= number;
    },

    reset() {
      this.result = 0;

      return calculator;
    },

    operate(operation, operand) {
      operation(operand);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
