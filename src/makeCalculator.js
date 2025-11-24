'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(number = 0) {
      this.result += number;
    },
    subtract(number = 0) {
      this.result -= number;
    },
    multiply(number = 1) {
      this.result *= number;
    },
    divide(number = 1) {
      this.result /= number;
    },
    operate(method, number) {
      method.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
