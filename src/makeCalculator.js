'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, number) {
      operation(number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(addend) {
      calculator.result += addend;
    },

    subtract(subtrahend) {
      calculator.result -= subtrahend;
    },

    multiply(multiplicand) {
      calculator.result *= multiplicand;
    },

    divide(divisor) {
      calculator.result /= divisor;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
