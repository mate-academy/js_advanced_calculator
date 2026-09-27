'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value, number) {
      return value + number;
    },

    subtract(value, number) {
      return value - number;
    },

    multiply(value, number) {
      return value * number;
    },

    divide(value, number) {
      return value / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
