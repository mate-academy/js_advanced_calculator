'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, value) {
      this.result = callback(this.result, value);

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
      if (num2 === 0) {
        return `Error! Dividing by zero!`;
      }

      return num1 / num2;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
