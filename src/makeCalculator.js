'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
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
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }

      return a / b;
    },
    operate(callback, number) {
      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function');
      }
      this.result = callback(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
