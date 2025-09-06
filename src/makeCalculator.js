'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(current, value) {
      return current + value;
    },
    subtract(current, value) {
      return current - value;
    },
    multiply(current, value) {
      return current * value;
    },
    divide(current, value) {
      return current / value;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this; // permite encadeamento
    },

    reset() {
      this.result = 0;

      return this; // permite encadeamento
    },
  };

  return calculator;
}

module.exports = makeCalculator;
