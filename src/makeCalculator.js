'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, operatingValue) {
      this.result = callback(operatingValue, this.result);

      return this;
    },
    add(operatingValue, previousValue) {
      return previousValue + operatingValue;
    },
    subtract(operatingValue, previousValue) {
      return previousValue - operatingValue;
    },
    multiply(operatingValue, previousValue) {
      return previousValue * operatingValue;
    },
    divide(operatingValue, previousValue) {
      return previousValue / operatingValue;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
