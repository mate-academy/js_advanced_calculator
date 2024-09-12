'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(operation, val) {
      this.result = operation(this.result, val);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
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
      return a / b;
    },
  };
}

module.exports = makeCalculator;
