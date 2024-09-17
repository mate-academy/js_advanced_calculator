'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    add(value) {
      this.result += value;

      return this;
    },

    subtract(value) {
      this.result -= value;

      return this;
    },

    multiply(value) {
      this.result *= value;

      return this;
    },

    divide(value) {
      if (value === 0) {
        return;
      }

      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },

    result: 0,
  };
}

module.exports = makeCalculator;
