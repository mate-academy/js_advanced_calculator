'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, int) {
      this.result = callback(this.result, int);

      return this;
    },

    add(result, int) {
      return result + int;
    },

    subtract(result, int) {
      return result - int;
    },

    multiply(result, int) {
      return result * int;
    },

    divide(result, int) {
      return result / int;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
