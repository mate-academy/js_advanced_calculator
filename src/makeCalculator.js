'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate(callback, x) {
      if (typeof callback === 'function') {
        callback.call(this, x);
      }

      return this;
    },
    result: 0,

    add(x) {
      this.result += x;
    },

    subtract(x) {
      this.result -= x;
    },

    multiply(x) {
      this.result *= x;
    },

    divide(x) {
      this.result /= x;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
