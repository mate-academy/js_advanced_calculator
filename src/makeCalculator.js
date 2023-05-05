'use strict';

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
      this.result /= a;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, a) {
      callback.call(this, a);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
