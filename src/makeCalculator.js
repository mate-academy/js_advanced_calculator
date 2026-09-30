'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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
    operate: (operation, a) => {
      operation(a);

      return calculator;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
