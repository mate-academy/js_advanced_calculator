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
      if (value === 0) {
      } else {
        result /= value;
      }

      return this;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(callback, value) {
      if (typeof callback === 'function') {
        callback.call(this, value);
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
