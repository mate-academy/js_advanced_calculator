'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
  return {
    result: 0,

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(num) {
      this.result += num;
    },

    subtract(num) {
      this.result -= num;
    },

    multiply(num) {
      this.result *= num;
    },

    divide(num) {
      this.result /= num;
    },
  };
}

module.exports = makeCalculator;
