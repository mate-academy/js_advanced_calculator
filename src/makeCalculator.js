'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add(value) {
      result += value;
    },
    subtract(value) {
      result -= value;
    },
    multiply(value) {
      result *= value;
    },
    divide(value) {
      result /= value;
    },
    reset(value) {
      result = 0;

      return this;
    },

    operate(callback, value) {
      callback(value);

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
