'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const object = {
    result: 0,

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

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };

  return object;
}

module.exports = makeCalculator;
