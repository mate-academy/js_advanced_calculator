'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(curr, n) {
      return curr + n;
    },

    subtract(curr, n) {
      return curr - n;
    },

    multiply(curr, n) {
      return curr * n;
    },

    divide(curr, n) {
      return curr / n;
    },

    operate(cb, n) {
      this.result = cb(this.result, n);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
