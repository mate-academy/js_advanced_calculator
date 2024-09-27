'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: (number) => {
      calculator.result += number;
    },
    subtract(number) {
      calculator.result -= number;
    },
    multiply(number) {
      calculator.result *= number;
    },
    divide(number) {
      if (number !== 0) {
        calculator.result /= number;
      }
    },
    operate(operation, number) {
      operation(number);

      return calculator;
    },
    reset() {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
