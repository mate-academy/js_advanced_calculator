'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      this.result += number;

      return this;
    },

    subtract(number) {
      this.result -= number;

      return this;
    },

    multiply(number) {
      this.result *= number;

      return this;
    },

    divide(number) {
      this.result /= number;

      return this;
    },

    operate(operation, number) {
      operation.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
