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

    divide(number) {
      if (number !== 0) {
        return calculator.result / number;
      }
      throw new Error('cannot divide by zero');
    },

    multiply(number) {
      return calculator.result * number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
