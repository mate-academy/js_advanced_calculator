'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const object = {
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

    operate(method, number) {
      this.result = method(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return object;
}

module.exports = makeCalculator;
