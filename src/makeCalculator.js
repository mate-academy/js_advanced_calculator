'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add(number) {
      result += number;

      return result;
    },
    subtract(number) {
      result -= number;

      return result;
    },
    multiply(number) {
      result *= number;

      return result;
    },
    divide(number) {
      if (number === 0) {
        return null;
      }
      result /= number;

      return result;
    },
    reset() {
      result = 0;

      return this;
    },
    operate(callback, number) {
      result = callback(number);

      return this;
    },
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
