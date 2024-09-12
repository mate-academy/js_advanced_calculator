'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add: (number) => {
      calculator.result += number;

      return calculator;
    },
    subtract: (number) => {
      calculator.result -= number;

      return calculator;
    },
    multiply: (number) => {
      calculator.result *= number;

      return calculator;
    },
    divide: (number) => {
      if (number !== 0) {
        calculator.result /= number;
      }

      return calculator;
    },
    reset: () => {
      calculator.result = 0;

      return calculator;
    },
    operate: (method, number) => {
      return method(number);
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
