'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      if (a === 0) {
        return this;
      }

      return a / b;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
