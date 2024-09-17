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

    operate(operation, value) {
      operation(value);

      return this;
    },

    add(value) {
      calculator.result += value;

      return calculator.result;
    },

    subtract(value) {
      calculator.result -= value;

      return calculator.result;
    },

    multiply(value) {
      calculator.result *= value;

      return calculator.result;
    },

    divide(value) {
      calculator.result /= value;

      return calculator.result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
