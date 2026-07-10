'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(current, value) {
      return current + value;
    },

    subtract(current, value) {
      return current - value;
    },

    divide(current, value) {
      return current / value;
    },

    multiply(current, value) {
      return current * value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
