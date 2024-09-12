'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(number) {
      this.result += number;

      return this;
    },
    subtract(number) {
      this.result -= number;

      return this;
    },
    multiply(number) {
      this.result *= number;

      return this;
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
      return callback.call(this, number);
    },
  };
}

module.exports = makeCalculator;
