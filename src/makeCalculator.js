'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
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
        throw new Error('Error!');
      }
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(fn, num) {
      fn.call(this, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
