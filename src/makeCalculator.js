'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      operation.call(this, number);

      return this;
    },

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    divide(number) {
      this.result /= number;
    },

    multiply(number) {
      this.result *= number;
    },
  };
}

module.exports = makeCalculator;
