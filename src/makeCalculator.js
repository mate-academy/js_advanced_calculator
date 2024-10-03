'use strict';

/**
 * @return {object}
 */
function makeCalculator(operation, x) {
  const calculator = {
    result: 0,
    add(num) {
      this.result += num;
    },
    subtract(num) {
      this.result -= num;
    },
    multiply(num) {
      this.result *= num;
    },
    divide(num) {
      if (num !== 0) {
        this.result /= num;
      } else {
      }
    },
    reset(num = 0) {
      this.result = 0;
    },
    operate(callback, num) {
      callback.call(this, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
