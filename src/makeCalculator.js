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

      return this;
    },

    subtract(number) {
      result -= number;

      return this;
    },

    divide(number) {
      result /= number;

      return this;
    },

    multiply(number) {
      result *= number;

      return this;
    },

    operate(callback, arg) {
      callback(arg);

      return this;
    },

    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
