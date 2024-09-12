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

    operate(method, digit) {
      this.result = method(digit, this.result);

      return this;
    },

    add(digit, result) {
      return result + digit;
    },

    subtract(digit, result) {
      return result - digit;
    },

    multiply(digit, result) {
      return result * digit;
    },

    divide(digit, result) {
      return result / digit;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
