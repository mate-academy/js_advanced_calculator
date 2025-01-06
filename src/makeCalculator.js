'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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
      if (x === 0) {
        return 'Error';
      }

      this.result /= x;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, x) {
      callback.call(this, x);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
