'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(n) {
      calculator.result += n;
    },

    subtract(n) {
      calculator.result -= n;
    },

    multiply(n) {
      calculator.result *= n;
    },

    divide(n) {
      calculator.result /= n;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(operation, n) {
      operation(n);

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
