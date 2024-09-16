'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(result, a) {
      return result + a;
    },

    subtract(result, a) {
      return result - a;
    },

    multiply(result, a) {
      return result * a;
    },

    divide(result, a) {
      return result / a;
    },

    reset(result) {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
