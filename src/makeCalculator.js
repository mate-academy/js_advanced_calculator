'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      callback.call(this, num);

      return this;
    },

    add(num) {
      this.result += num;
    },

    multiply(num) {
      this.result *= num;
    },

    subtract(num) {
      this.result -= num;
    },

    divide(num) {
      this.result /= num;
    },
  };
}

module.exports = makeCalculator;
