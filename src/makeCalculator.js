'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(number, calculator) {
      calculator.result += number;
    },

    subtract(number, calculator) {
      calculator.result -= number;
    },

    multiply(number, calculator) {
      calculator.result *= number;
    },

    divide(number, calculator) {
      calculator.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      operation(number, this);

      return this;
    },
  };
}

module.exports = makeCalculator;
