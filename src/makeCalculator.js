'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value) {
      return calculator.result + value;
    },

    subtract(value) {
      return calculator.result - value;
    },

    multiply(value) {
      return calculator.result * value;
    },

    divide(value) {
      return calculator.result / value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(method, value) {
      this.result = method(value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
