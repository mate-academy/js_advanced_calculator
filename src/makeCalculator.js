'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    add(value, currentValue) {
      return currentValue + value;
    },

    subtract(value, currentValue) {
      return currentValue - value;
    },

    multiply(value, currentValue) {
      return currentValue * value;
    },

    divide(value, currentValue) {
      return currentValue / value;
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
