'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
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
      this.result /= num;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
