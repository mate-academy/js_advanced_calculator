'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(num) {
      this.result += num;
    },

    subtract(num) {
      this.result -= num;
    },

    multiply(num) {
      this.result *= num;
    },

    divide(num) {
      this.result /= num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      switch (operation) {
        case this.add: {
          this.add(number);
          break;
        }

        case this.subtract: {
          this.subtract(number);
          break;
        }

        case this.multiply: {
          this.multiply(number);
          break;
        }

        case this.divide: {
          this.divide(number);
          break;
        }
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
