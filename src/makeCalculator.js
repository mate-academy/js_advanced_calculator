'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculates = {
    result: 0,

    operate(callback, num) {
      this.result = callback(this.result, num);

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

  return calculates;
}

module.exports = makeCalculator;
