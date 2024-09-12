'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    defaultValue: 0,
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
      this.result = this.defaultValue;

      return this;
    },
    operate(callback, x) {
      callback.call(this, x);

      return this;
    },
  };
}

module.exports = makeCalculator;
