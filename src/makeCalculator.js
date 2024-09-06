'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    operate(callback, num) {
      result = callback(num);

      return this;
    },
    add(num) {
      result += num;

      return result;
    },
    subtract(num) {
      result -= num;

      return result;
    },
    multiply(num) {
      result *= num;

      return result;
    },
    divide(num) {
      if (num === 0) {
        throw new Error('Division by 0 is not allowed.');
      }
      result /= num;

      return result;
    },
    reset() {
      result = 0;

      return this;
    },
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
