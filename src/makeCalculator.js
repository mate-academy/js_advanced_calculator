'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    add(result, number) {
      return result + number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    subtract(result, number) {
      return result - number;
    },

    divide(result, number) {
      if (number !== 0) {
        return result / number;
      } else {
        return `Division by zero is not allowed.`;
      }
    },

    multiply(result, number) {
      return result * number;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
