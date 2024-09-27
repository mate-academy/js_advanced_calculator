'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, number) {
      operation.call(this, number);

      return this;
    },
    result: 0,
  };

  return calculator;
  // write code here
}

module.exports = makeCalculator;
