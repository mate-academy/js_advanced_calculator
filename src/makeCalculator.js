'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    operate(callback, number) {
      result = callback(number);

      return this;
    },
    reset() {
      result = 0;

      return this;
    },

    add(number) {
      return result + number;
    },
    subtract(number) {
      return result - number;
    },
    divide(number) {
      return result / number;
    },
    multiply(number) {
      return result * number;
    },
    get result() {
      return result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
