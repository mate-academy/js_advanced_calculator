'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    reset() {
      this.result = 0;

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
      if (value !== 0) {
        return result / value;
      } else {
        return 'error';
      }
    },
  };

  return calculator;
}

module.exports = makeCalculator;
