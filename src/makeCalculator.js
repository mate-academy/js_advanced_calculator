'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      if (a !== 0 && b !== 0) {
        return a / b;
      }
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(way, num) {
      this.result = way(this.result, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
