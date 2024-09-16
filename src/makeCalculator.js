'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate: (callback, number) => {
      calculator.result = callback(number);

      return calculator;
    },
    add: (arg) => {
      return calculator.result + arg;
    },
    subtract: (arg) => {
      return calculator.result - arg;
    },
    divide: (arg) => {
      return calculator.result / arg;
    },
    multiply: (arg) => {
      return calculator.result * arg;
    },
    reset: () => {
      calculator.result = 0;

      return calculator;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
