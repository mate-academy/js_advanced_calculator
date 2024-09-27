'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
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

    operate(callback, number) {
      callback(number, this);

      return this;
    },
  };
}

module.exports = makeCalculator;
