'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      calculator.result = 0;

      return this;
    },
    add(number) {
      calculator.result += number;
    },
    subtract(number) {
      calculator.result -= number;
    },
    divide(number) {
      calculator.result /= number;
    },
    multiply(number) {
      calculator.result *= number;
    },

    operate(operation, number) {
      operation(number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
