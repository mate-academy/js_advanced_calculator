'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const obj = {
    result: 0,

    add(a) {
      this.result += a;

      return this;
    },

    subtract(a) {
      this.result -= a;

      return this;
    },

    multiply(a) {
      this.result *= a;

      return this;
    },

    divide(a) {
      if (a === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      this.result /= a;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      if (typeof callback !== 'function') {
        throw new Error('Invalid callback function.');
      }
      callback.call(this, number);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
