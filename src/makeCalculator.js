'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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
      if (a !== 0) {
        calculator.result /= a;
      }

      return calculator;
    },
    reset: () => {
      calculator.result = 0;

      return calculator;
    },
    operate: (callback, a) => {
      callback.call(this, a);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
