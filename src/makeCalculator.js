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

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
