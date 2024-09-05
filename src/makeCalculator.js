'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value) {
      this.result += value;
    },

    subtract(value) {
      this.result -= value;
    },

    multiply(value) {
      this.result *= value;
    },

    divide(value) {
      if (value !== 0) {
        this.result /= value;
      }
    },

    reset() {
      this.result = 0;

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
