'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    operate(operation, number) {
      operation(number);

      return this;
    },

    add(x) {
      calculator.result += x;
    },

    subtract(x) {
      calculator.result -= x;
    },

    divide(x) {
      calculator.result /= x;
    },

    multiply(x) {
      calculator.result *= x;
    },

    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
