'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  let result = 0;

  const calculator = {
    add(num) {
      result += num;
    },
    subtract(num) {
      result -= num;
    },
    multiply(num) {
      result *= num;
    },
    divide(num) {
      if (num !== 0) {
        result /= num;
      } else {
        throw new Error('Не можна ділити на нуль');
      }
    },
    reset() {
      result = 0;

      return calculator;
    },
    operate(callback, num) {
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
