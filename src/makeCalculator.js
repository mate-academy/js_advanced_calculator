'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
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

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
