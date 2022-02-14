'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      calculator.result = 0;

      return calculator;
    },

    add(number) {
      calculator.result += number;
    },

    subtract(number) {
      calculator.result -= number;
    },

    multiply(number) {
      calculator.result *= number;
    },

    divide(number) {
      calculator.result /= number;
    },

    operate(callback, num) {
      callback(num);

      return this;
    },
  };

  return calculator;
};

module.exports = makeCalculator;
