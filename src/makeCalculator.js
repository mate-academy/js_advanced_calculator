'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    get result() {
      return result;
    },

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
  };
}

module.exports = makeCalculator;
