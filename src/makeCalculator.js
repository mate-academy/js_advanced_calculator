'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(x) {
      return this.result + x;
    },

    subtract(x) {
      return this.result - x;
    },

    multiply(x) {
      return this.result * x;
    },

    divide(x) {
      return this.result / x;
    },

    operate(callback, number) {
      this.result = callback.call(this, number);

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
