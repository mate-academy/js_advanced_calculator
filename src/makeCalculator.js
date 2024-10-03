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
      if (num === 0) {
        throw new Error('Cannot divide by zero');
      }
      result /= num;

      return this;
    },

    operate(operation, num) {
      return operation.call(this, num);
    },

    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
