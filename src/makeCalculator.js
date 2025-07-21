'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    add(result, value) {
      return result + value;
    },

    subtract(result, value) {
      return result - value;
    },

    multiply(result, value) {
      return result * value;
    },

    divide(result, value) {
      return result / value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
