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
      switch (callback) {
        case this.add:
          this.add(number);
          break;
        case this.subtract:
          this.subtract(number);
          break;
        case this.multiply:
          this.multiply(number);
          break;
        case this.divide:
          this.divide(number);
          break;
        default:
          return this;
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
