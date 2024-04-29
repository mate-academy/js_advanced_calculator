'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    add(number) {
      calculator.result += number;

      return this;
    },

    subtract(number) {
      calculator.result -= number;

      return this;
    },

    multiply(number) {
      calculator.result *= number;

      return this;
    },

    divide(number) {
      calculator.result /= number;

      return this;
    },

    reset() {
      calculator.result = 0;

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
