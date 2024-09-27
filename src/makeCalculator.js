'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate: (operation, argument) => {
      return operation(argument);
    },
    add: (a) => {
      calculator.result += a;

      return calculator;
    },
    subtract: (a) => {
      calculator.result -= a;

      return calculator;
    },
    multiply: (a) => {
      calculator.result *= a;

      return calculator;
    },
    divide: (a) => {
      calculator.result /= a;

      return calculator;
    },
    reset: () => {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
