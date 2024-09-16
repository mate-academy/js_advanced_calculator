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

    operate(operation, number) {
      operation(this, number);

      return this;
    },

    add(calculator, number) {
      calculator.result += number;
    },

    subtract(calculator, number) {
      calculator.result -= number;
    },

    multiply(calculator, number) {
      calculator.result *= number;
    },

    divide(calculator, number) {
      calculator.result /= number;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
