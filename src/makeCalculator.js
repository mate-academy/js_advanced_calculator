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

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
