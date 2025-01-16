'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, value) {
      this.result = callback.call(this, value);

      return this;
    },

    add(a) {
      return this.result + a;
    },

    subtract(a) {
      return this.result - a;
    },

    multiply(a) {
      return this.result * a;
    },

    divide(a) {
      return this.result / a;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
