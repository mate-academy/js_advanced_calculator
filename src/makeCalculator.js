'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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

      return this;
    },

    operate(operation, number) {
      operation(number);

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
