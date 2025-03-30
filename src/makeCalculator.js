'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, num) {
      this.result = operation(this.result, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(num1, num2) {
      return num1 + num2;
    },

    subtract(num1, num2) {
      return num1 - num2;
    },

    multiply(num1, num2) {
      return num1 * num2;
    },

    divide(num1, num2) {
      return num1 / num2;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
