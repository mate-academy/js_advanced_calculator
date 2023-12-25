'use strict';

function makeCalculator() {
  return {
    result: 0,
    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    divide(number) {
      if (number === 0) {
        return this;
      }
      this.result /= number;
    },

    multiply(number) {
      this.result *= number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
