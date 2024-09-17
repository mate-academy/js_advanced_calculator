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

    add(num) {
      this.result += num;

      return this;
    },

    subtract(num) {
      this.result -= num;

      return this;
    },

    multiply(num) {
      this.result *= num;

      return this;
    },

    divide(num) {
      this.result /= num;

      return this;
    },

    operate(operator, value) {
      switch (operator) {
        case this.add:
          this.add(value);
          break;

        case this.subtract:
          this.subtract(value);
          break;

        case this.multiply:
          this.multiply(value);
          break;

        case this.divide:
          this.divide(value);
          break;

        default:
          return 'error';
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
