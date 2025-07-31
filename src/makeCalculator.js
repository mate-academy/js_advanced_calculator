'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(a) {
      this.result += a;
    },
    subtract(a) {
      this.result -= a;
    },
    multiply(a) {
      this.result *= a;
    },
    divide(a) {
      this.result /= a;
    },
    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
