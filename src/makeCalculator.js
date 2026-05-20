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

    divide(number1, number2) {
      return number1 / number2;
    },

    operate(callBack, number) {
      this.result = callBack(this.result, number);

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
