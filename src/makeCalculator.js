'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(operation, value) {
      operation(value);

      return this;
    },

    add(value) {
      calculator.result += value;
    },

    subtract(value) {
      calculator.result -= value;
    },

    multiply(value) {
      calculator.result *= value;
    },

    divide(value) {
      calculator.result /= value;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
