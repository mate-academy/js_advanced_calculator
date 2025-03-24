'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(callback, y) {
      this.result = callback(this.result, y);

      return this;
    },
    add(x, y) {
      return x + y;
    },
    subtract(x, y) {
      return x - y;
    },
    multiply(x, y) {
      return x * y;
    },
    divide(x, y) {
      return x / y;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
