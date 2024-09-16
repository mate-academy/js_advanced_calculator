'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
