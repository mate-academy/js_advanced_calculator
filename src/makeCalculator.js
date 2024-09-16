'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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

    operate(operation, x) {
      this.result = operation(this.result, x);

      return this;
    },
  };
}

module.exports = makeCalculator;
