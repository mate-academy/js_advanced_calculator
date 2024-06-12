'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate: (callback, number) => {
      calculator.result = callback(calculator.result, number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
