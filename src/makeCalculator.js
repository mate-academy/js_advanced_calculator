'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(n) {
      this.result += n;
    },

    subtract(n) {
      this.result -= n;
    },

    multiply(n) {
      this.result *= n;
    },

    divide(n) {
      if (n === 0) {
        throw new Error('Division by zero is not allowed');
      }
      this.result /= n;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, n) {
      callback.call(this, n);

      return this;
    },
  };
}

module.exports = makeCalculator;
