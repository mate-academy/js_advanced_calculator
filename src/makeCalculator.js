'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(value, currantResult) {
      return currantResult + value;
    },
    subtract(value, currantResult) {
      return currantResult - value;
    },
    multiply(value, currantResult) {
      return currantResult * value;
    },
    divide(value, currantResult) {
      return currantResult / value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      this.result = callback(number, this.result);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
