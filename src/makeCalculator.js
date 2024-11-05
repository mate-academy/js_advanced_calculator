'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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
      if (number === 0) {
        this.result = 'infinity';
      } else {
        this.result /= number;
      }

      return this;
    },

    operate(operation, number) {
      operation.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
