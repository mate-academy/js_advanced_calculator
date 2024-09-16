'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(x) {
      this.result += x;
    },
    subtract(x) {
      this.result -= x;
    },
    multiply(x) {
      this.result *= x;
    },
    divide(x) {
      this.result /= x;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, x) {
      callback.call(this, x);

      return this;
    },
  };
}

module.exports = makeCalculator;
