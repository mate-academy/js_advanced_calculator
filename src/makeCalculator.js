'use strict';

/**
 * @return {object}
 */
function makeCalculator(operation, x, y) {
  return {
    result: 0,
    add(num) {
      this.result += num;

      return this;
    },
    subtract(num) {
      this.result -= num;

      return this;
    },
    multiply(num) {
      this.result *= num;

      return this;
    },
    divide(num) {
      if (num !== 0) {
        this.result /= num;
      }

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      callback.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
