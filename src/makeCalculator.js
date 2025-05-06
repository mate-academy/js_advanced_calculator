'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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

    operate(callback, a) {
      this.result = callback.call(this, a);

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
