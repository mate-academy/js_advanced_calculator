'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number1, number2) {
      return number1 + number2;
    },

    subtract(number1, number2) {
      return number1 - number2;
    },

    multiply(number1, number2) {
      return number1 * number2;
    },

    divide(result, number2) {
      if (number2 !== 0) {
      }

      return result / number2;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, numm) {
      this.result = callback(this.result, numm);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
