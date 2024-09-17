'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(Callback, value) {
      this.result = Callback(this.result, value);

      return this;
    },
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    divide(a, b) {
      return a / b;
    },
    multiply(a, b) {
      return a * b;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
