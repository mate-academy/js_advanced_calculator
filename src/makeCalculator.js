'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(value) {
      this.result += value;
    },

    multiply(value) {
      this.result *= value;
    },

    divide(value) {
      this.result /= value;
    },

    subtract(value) {
      this.result -= value;
    },
  };
}

module.exports = makeCalculator;
