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
      if (num === 0) {
        throw new Error('Cannot divide by zero!');
      }
      result /= num;

      return this;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(callback, num) {
      if (typeof callback === 'function') {
        callback.call(this, num);
      }

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
