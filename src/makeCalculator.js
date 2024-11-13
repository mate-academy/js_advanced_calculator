'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

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
        this.result += 0;
      } else {
        this.result /= a;
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
