'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(a) {
      this.result += a;

      return this;
    },
    subtract(a) {
      this.result -= a;

      return this;
    },
    multiply(a) {
      this.result *= a;

      return this;
    },
    divide(a) {
      if (a !== 0) {
        this.result /= a;
      }

      return this;
    },
    reset() {
      this.result = 0;

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
