'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value = 0, n = 0) {
      return value + n;
    },

    subtract(value = 0, n = 0) {
      return value - n;
    },

    multiply(value = 0, n = 1) {
      return value * n;
    },

    divide(value = 0, n = 1) {
      if (n === 0) {
        throw new Error('You cannot divide by 0!!!');
      }

      return value / n;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(action, n) {
      this.result = action(this.result, n);

      return this;
    },
  };
}

module.exports = makeCalculator;
