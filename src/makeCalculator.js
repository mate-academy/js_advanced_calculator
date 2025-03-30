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

    add(value1, value2) {
      return value1 + value2;
    },

    subtract(value1, value2) {
      return value1 - value2;
    },

    divide(value1, value2) {
      return value1 / value2;
    },

    multiply(value1, value2) {
      return value1 * value2;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
