'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,
    add(a) {
      calculator.result += a;
    },
    subtract(a) {
      calculator.result -= a;
    },
    multiply(a) {
      calculator.result *= a;
    },
    divide(a) {
      calculator.result /= a;
    },
    reset() {
      calculator.result = 0;

      return this;
    },
    operate(callback, x) {
      callback(x);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
