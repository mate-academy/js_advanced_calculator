'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(operation, x) {
      operation(x);

      return this;
    },

    add(x) {
      calculator.result += x;

      return this;
    },
    subtract(x) {
      calculator.result -= x;

      return this;
    },
    divide(x) {
      calculator.result /= x;

      return this;
    },
    multiply(x) {
      calculator.result *= x;

      return this;
    },
    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
