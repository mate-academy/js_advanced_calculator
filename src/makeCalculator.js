'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(number1, number2) {
      return number1 + number2;
    },
    subtract(number1, number2) {
      return number1 - number2;
    },
    divide(number1, number2) {
      return number1 / number2;
    },
    multiply(number1, number2) {
      return number1 * number2;
    },

    operate(method, number) {
      this.result = method(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
