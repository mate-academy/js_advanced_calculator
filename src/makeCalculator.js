'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(num) {
      this.result += num;

      return this;
    },
    subtract(num) {
      this.result -= num;

      return this;
    },
    multiply(num) {
      this.result *= num;
    },
    divide(num) {
      this.result /= num;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(method, number) {
      method.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
