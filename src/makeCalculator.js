'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

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

    operate(operation, value) {
      this.result = operation(value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
