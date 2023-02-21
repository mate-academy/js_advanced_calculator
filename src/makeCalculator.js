'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, number) {
      this.result = callback(number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      calculator.result += number;

      return calculator.result;
    },
    subtract(number) {
      calculator.result -= number;

      return calculator.result;
    },
    multiply(number) {
      calculator.result *= number;

      return calculator.result;
    },
    divide(number) {
      calculator.result /= number;

      return calculator.result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
