'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(x) {
      this.result += x;

      return this;
    },

    subtract(x) {
      this.result -= x;

      return this;
    },

    divide(x) {
      if (x === 0) {
        throw new Error('Cannot divide on zero');
      }
      this.result /= x;

      return this;
    },

    multiply(x) {
      this.result *= x;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      if (typeof callback === 'function') {
        return callback.call(this, num);
      }
      throw new Error('First argument should be a function');
    },
  };
}

module.exports = makeCalculator;
