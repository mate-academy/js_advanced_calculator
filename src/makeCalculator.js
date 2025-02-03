'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {
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

    operate(action, number) {
      this.result = action(this.result, number);

      return this;
    },

    result: 0,
  };
}

module.exports = makeCalculator;
