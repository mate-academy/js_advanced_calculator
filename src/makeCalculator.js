'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(value, output) {
      return output + value;
    },

    subtract(value, output) {
      return output - value;
    },

    multiply(value, output) {
      return output * value;
    },

    divide(value, output) {
      return output / value;
    },

    operate(callback, value) {
      this.result = callback(value, this.result);

      return this;
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
