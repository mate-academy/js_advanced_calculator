'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(firstValue, secondValue) {
      return firstValue + secondValue;
    },

    subtract(firstValue, secondValue) {
      return firstValue - secondValue;
    },

    multiply(firstValue, secondValue) {
      return firstValue * secondValue;
    },

    divide(firstValue, secondValue) {
      return firstValue / secondValue;
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
