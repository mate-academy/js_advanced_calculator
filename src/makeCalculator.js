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

    add(n) {
      calculator.result += n;
    },

    subtract(n) {
      calculator.result -= n;
    },

    divide(n) {
      calculator.result /= n;
    },

    multiply(n) {
      calculator.result *= n;
    },

    operate(operation, number) {
      operation(number);

      return this;
    },
  };

  return calculator;
};

module.exports = makeCalculator;
