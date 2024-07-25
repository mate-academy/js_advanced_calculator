'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    add: (num) => {
      result += num;

      return calculator;
    },
    subtract: (num) => {
      result -= num;

      return calculator;
    },
    multiply: (num) => {
      result *= num;

      return calculator;
    },
    divide: (num) => {
      result /= num;

      return calculator;
    },
    reset: () => {
      result = 0;

      return calculator;
    },
    operate: (callback, num) => {
      callback(num);

      return calculator;
    },
    get result() {
      return result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
