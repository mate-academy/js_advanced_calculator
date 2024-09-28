'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calcResult = 0;

  return {
    result: calcResult,

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    multiply(number) {
      this.result *= number;
    },

    divide(number) {
      this.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      operation.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
