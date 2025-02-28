'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: (x) => {
      return (calculator.result += x);
    },
    subtract: (x) => {
      return (calculator.result -= x);
    },
    multiply: (x) => {
      return (calculator.result *= x);
    },
    divide: (x) => {
      return (calculator.result /= x);
    },

    operate: (operation, x) => {
      calculator.result = operation(x);

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
