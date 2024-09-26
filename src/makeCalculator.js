'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    operate(callback, value) {
      this.result = callback(this.result, value);

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
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
