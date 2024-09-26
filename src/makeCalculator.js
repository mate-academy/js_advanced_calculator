'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate: (callback, value) => {
      callback(value);

      return calculator;
    },

    add: (value) => {
      calculator.result += value;

      return calculator;
    },

    subtract: (value) => {
      calculator.result -= value;

      return calculator;
    },

    multiply: (value) => {
      calculator.result *= value;

      return calculator;
    },

    divide: (value) => {
      calculator.result /= value;

      return calculator;
    },

    reset: (value) => {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
