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

    add(value) {
      result += value;

      return this;
    },

    subtract(value) {
      result -= value;

      return this;
    },

    multiply(value) {
      result *= value;

      return this;
    },
    divide(value) {
      result /= value;

      return this;
    },
    operate(callback, value) {
      return callback.call(this, value);
    },
    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
