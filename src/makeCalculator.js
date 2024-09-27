'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, operand) {
      this.result = callback(this.result, operand);

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
      if (number === 0) {
        return `Error! Dividing by zero!`;
      }

      return result / number;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
