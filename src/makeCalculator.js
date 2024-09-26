'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    add(result, number) {
      return result + number;
    },
    divide(result, number) {
      return result / number;
    },
    subtract(result, number) {
      return result - number;
    },
    multiply(result, number) {
      return result * number;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
