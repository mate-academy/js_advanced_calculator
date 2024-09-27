'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(f, x) {
      this.result = f(this.result, x);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(x, y) {
      return x + y;
    },

    subtract(x, y) {
      return x - y;
    },

    divide(x, y) {
      return x / y;
    },

    multiply(x, y) {
      return x * y;
    },
  };
}

module.exports = makeCalculator;
