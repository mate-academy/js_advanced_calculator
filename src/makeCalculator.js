'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(fn, a) {
      fn.call(this, a);

      return this;
    },
    add(a) {
      this.result += a;
    },
    subtract(a) {
      this.result -= a;
    },
    multiply(a) {
      this.result *= a;
    },
    divide(a) {
      if (a === 0) {
        this.result = 0;
      } else {
        this.result /= a;
      }
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
