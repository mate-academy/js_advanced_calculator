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

    multiply(number) {
      result *= number;

      return this;
    },

    divide(number) {
      if (number === 0) {
        return 'Division by zero is not allowed.';
      }
      result /= number;

      return this;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(callback, number) {
      return callback.call(this, number);
    },
  };
}

module.exports = makeCalculator;
