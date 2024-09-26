'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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
      return (number === 0) ? result : result / number;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
