'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, a) {
      callback.call(this, a);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(a) {
      this.result += a;
    },

    subtract(a) {
      this.result -= a;
    },

    multiply(a) {
      this.result *= a;
    },

    divide(a) {
      if (a === 0) {
        throw new Error('Not possible for this action');
      }
      this.result /= a;
    },
  };
}

module.exports = makeCalculator;
