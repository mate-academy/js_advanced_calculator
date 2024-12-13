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

    operate(callback, number) {
      if (typeof callback === `function`) {
        result = callback(result, number);
      } else {
        return NaN;
      }

      return this;
    },

    reset() {
      result = 0;

      return this;
    },

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      if (b !== 0) {
        return a / b;
      }

      return NaN;
    },
  };
}

module.exports = makeCalculator;
