'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value, result) {
      return result + value;
    },

    subtract(value, result) {
      return result - value;
    },

    multiply(value, result) {
      return result * value;
    },

    divide(value, result) {
      return result / value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback(value, this.result);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
