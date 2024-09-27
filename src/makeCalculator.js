'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(num) {
      this.result += num;

      return this.result;
    },
    subtract(num) {
      this.result -= num;

      return this.result;
    },
    multiply(num) {
      this.result *= num;

      return this.result;
    },
    divide(num) {
      this.result /= num;

      return this.result;
    },

    operate(callback, num) {
      callback.call(this, num);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
