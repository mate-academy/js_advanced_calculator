'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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
    operate(method, value) {
      this.result = method(this.result, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
