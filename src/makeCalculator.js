'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  const obj = {
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
      return a / b;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callbacks, a) {
      this.result = callbacks(this.result, a);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
