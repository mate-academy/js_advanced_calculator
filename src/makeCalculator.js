'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, number) {
      return operation.call(this, number);
    },

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
  };
}

module.exports = makeCalculator;
