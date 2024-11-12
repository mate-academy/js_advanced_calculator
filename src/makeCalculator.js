'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
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
      if (num !== 0) {
        result /= num;
      } else {
        result = NaN;
      }

      return result;
    },

    operate(callback, num) {
      if (typeof callback === 'function') {
        result = callback(num);
      } else {
        throw new Error('The provided callback is not a function');
      }

      return this;
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
