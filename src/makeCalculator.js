'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      return this.operate((a, b) => a + b, number);
    },

    subtract(number) {
      return this.operate((a, b) => a - b, number);
    },

    multiply(number) {
      return this.operate((a, b) => a * b, number);
    },

    divide(number) {
      return this.operate((a, b) => a / b, number);
    },
  };
}

module.exports = makeCalculator;
