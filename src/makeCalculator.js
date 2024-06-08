'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add(num) {
      result += num;

      return this;
    },

    subtract(num) {
      result -= num;

      return this;
    },

    multiply(num) {
      result *= num;

      return this;
    },

    divide(num) {
      if (num !== 0) {
        result /= num;
      } else {
        throw new Error('Division by zero is not allowed');
      }

      return this;
    },

    operate(callback, number) {
      callback.call(this, number);

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
