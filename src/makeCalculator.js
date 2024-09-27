'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
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
      this.result /= number;

      return this;
    },
    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

  };

  return calculator;
}

module.exports = makeCalculator;
