'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    add(number) {
      result += number;
    },

    subtract(number) {
      result -= number;
    },

    multiply(number) {
      result *= number;
    },

    divide(number) {
      if (number === 0) {
        throw new Error('Error!!!');
      }

      result /= number;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(callback, number) {
      callback(number);

      return this;
    },

    get result() {
      return result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
