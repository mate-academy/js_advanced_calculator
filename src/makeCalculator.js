'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(number) {
      this.result += number;

      return this.result;
    },

    subtract(number) {
      this.result -= number;

      return this.result;
    },

    multiply(number) {
      this.result *= number;

      return this.result;
    },

    divide(number) {
      if (number === 0) {
        return -1;
      }
      this.result /= number;

      return this.result;
    },

    operate(method, number) {
      method.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    getResult() {
      return this.result;
    },
  };
}

module.exports = makeCalculator;
