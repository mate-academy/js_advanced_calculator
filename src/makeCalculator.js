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
      return callback.call(this, num);
    },
  };
}

module.exports = makeCalculator;
