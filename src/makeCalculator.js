'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number, currentValue) {
      return currentValue + number;
    },

    subtract(number, currentValue) {
      return currentValue - number;
    },

    multiply(number, currentValue) {
      return currentValue * number;
    },

    divide(number, currentValue) {
      return currentValue / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      const currentValue = this.result;

      this.result = callback(number, currentValue);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
