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
      if (number !== 0) {
        return result / number;
      }
    },
  };

  return calculator;
}

module.exports = makeCalculator;
