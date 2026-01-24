'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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

    operate(callback, number) {
      if (callback === this.add) {
        this.add(number);
      }

      if (callback === this.subtract) {
        this.subtract(number);
      }

      if (callback === this.multiply) {
        this.multiply(number);
      }

      if (callback === this.divide) {
        this.divide(number);
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
