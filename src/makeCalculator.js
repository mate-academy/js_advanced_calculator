'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(calculatorResult, value) {
      return calculatorResult + value;
    },

    subtract(calculatorResult, value) {
      return calculatorResult - value;
    },

    multiply(calculatorResult, value) {
      return calculatorResult * value;
    },

    divide(calculatorResult, value) {
      return calculatorResult / value;
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
