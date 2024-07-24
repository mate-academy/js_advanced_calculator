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
    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
    add(number) {
      this.result += number;
    },
    subtract(number) {
      this.result -= number;
    },
    divide(number) {
      this.result /= number;
    },
    multiply(number) {
      this.result *= number;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
