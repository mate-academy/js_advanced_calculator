'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate(callback, x) {
      callback.call(this, x);

      return this;
    },
    add(x) {
      this.result += x;
    },
    subtract(x) {
      this.result -= x;
    },
    divide(x) {
      if (x === 0) {
        throw new Error('Division by zero is not allowed ');
      }
      this.result /= x;
    },
    multiply(x) {
      this.result *= x;
    },
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
