'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(number) {
      this.result += number;

      return this.result;
    },

    subtract(number) {
      this.result -= number;

      return this.result;
    },

    divide(number) {
      if (number === 0) {
        return;
      }

      this.result /= number;

      return this.result;
    },

    multiply(number) {
      this.result *= number;

      return this.result;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
