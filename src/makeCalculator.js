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
      if (value === 0) {
        throw new Error('Division by zero is not allowed');
      } else {
        this.result /= value;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
