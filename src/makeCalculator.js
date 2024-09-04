'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,
    add(a) {
      this.result += a;

      return this.result;
    },
    subtract(a) {
      this.result -= a;

      return this.result;
    },
    multiply(a) {
      this.result *= a;

      return this.result;
    },
    divide(a) {
      this.result /= a;

      return this.result;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, x) {
      this.result = callback.call(this, x);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
