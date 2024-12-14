'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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

    multiply(number) {
      this.result *= number;
    },

    divide(number) {
      if (number === 0) {
        return;
      }

      this.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
