'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    add(x) {
      this.result += x;

      return this;
    },
    subtract(x) {
      this.result -= x;

      return this;
    },
    multiply(x) {
      this.result *= x;

      return this;
    },
    divide(x) {
      if (x === 0) {
        return NaN;
      }
      this.result /= x;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
