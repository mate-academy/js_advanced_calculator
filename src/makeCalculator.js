'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add(value1, value2) {
      return value1 + value2;
    },

    subtract(value1, value2) {
      return value1 - value2;
    },

    multiply(value1, value2) {
      return value1 * value2;
    },

    divide(value1, value2) {
      return value1 / value2;
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
