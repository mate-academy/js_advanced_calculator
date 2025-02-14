'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: (x) => (calculator.result += x),
    subtract: (x) => (calculator.result -= x),
    multiply: (x) => (calculator.result *= x),
    divide: (x) => {
      if (x !== 0) {
        calculator.result /= x;
      } else {
        throw new Error('Cannot divide by zero');
      }
    },
    reset: () => {
      calculator.result = 0;

      return calculator;
    },
    operate: (callback, value) => {
      callback(value);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
