'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number) {
      return calculator.result + number;
    },

    subtract(number) {
      return calculator.result - number;
    },

    multiply(number) {
      return calculator.result * number;
    },

    divide(number) {
      return calculator.result / number;
    },

    reset(number) {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      calculator.result = callback(number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
