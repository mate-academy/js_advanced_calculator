'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

    add(n) {
      this.result += n;
    },

    subtract(n) {
      this.result -= n;
    },

    multiply(n) {
      this.result *= n;
    },

    divide(n) {
      this.result /= n;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
