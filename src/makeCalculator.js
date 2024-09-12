'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(result, number) {
      return result + number;
    },

    subtract(result, number) {
      return result - number;
    },

    multiply(result, number) {
      return result * number;
    },

    divide(result, number) {
      return result / number;
    },
  };
}

module.exports = makeCalculator;
