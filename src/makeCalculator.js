'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, number) {
      return callback.call(this, number);
    },

    add(b) {
      this.result += b;

      return this;
    },

    subtract(b) {
      this.result -= b;

      return this;
    },

    multiply(b) {
      this.result *= b;

      return this;
    },

    divide(b) {
      this.result /= b;

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
