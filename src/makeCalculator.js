'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      this.result = operation(this.result, number);

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
