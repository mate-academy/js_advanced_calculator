'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;

  const calc = {
    get result() {
      return result;
    },

    add(a) {
      result += a;
    },

    subtract(a) {
      result -= a;
    },

    divide(a) {
      result /= a;
    },

    multiply(a) {
      result *= a;
    },

    reset() {
      result *= 0;

      return this;
    },

    operate(callback, a) {
      callback(a);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
