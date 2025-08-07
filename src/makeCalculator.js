'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    operate(callback, number) {
      callback(number);

      return this;
    },
    reset() {
      result = 0;

      return this;
    },

    add(number) {
      result += number;
    },
    subtract(number) {
      result -= number;
    },
    divide(number) {
      result /= number;
    },
    multiply(number) {
      result *= number;
    },
    get result() {
      return result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
