'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    subtract(num1, num2) {
      return num1 - num2;
    },

    add(num1, num2) {
      return num1 + num2;
    },

    multiply(num1, num2) {
      return num1 * num2;
    },

    divide(num1, num2) {
      return num1 / num2;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, operator) {
      this.result = operation(this.result, operator);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
