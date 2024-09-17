'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(number) {
      this.result += number;
    },
    subtract(number) {
      this.result -= number;
    },
    multiply(number) {
      this.result *= number;
    },
    divide(number) {
      if (number !== 0) {
        this.result /= number;
      }

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      callback(number);

      return this;
    },
  };
}

module.exports = makeCalculator;
