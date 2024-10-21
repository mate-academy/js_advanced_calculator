'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add: (num) => (result += num),

    subtract: (num) => (result -= num),

    multiply: (num) => (result *= num),

    divide: (num) => (result /= num),

    operate(callback, num) {
      // Method shorthand syntax
      callback(num);

      return this;
    },

    reset() {
      // Method shorthand syntax
      result = 0;

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
