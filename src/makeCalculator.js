'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    operate(operation, number) {
      operation.call(this, number);

      return this;
    },
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
      this.result /= number;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
