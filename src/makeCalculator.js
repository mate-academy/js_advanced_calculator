'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const resultObj = {
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

    operate(method, number) {
      this.result = method(this.result, number);

      return this;
    },
  };

  return resultObj;
}

module.exports = makeCalculator;
