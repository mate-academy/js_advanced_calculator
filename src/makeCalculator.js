'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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
      if (number === 0) {
        return 'You cannot divide by zero';
      }
      calculator.result /= number;

      return calculator;
    },

    reset: () => {
      calculator.result = 0;

      return calculator;
    },

    operate: (callback, number) => {
      callback(number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
