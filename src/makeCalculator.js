'use strict';

function makeCalculator() {
  const calculator = {
    add(num) {
      calculator.result += num;

      return this;
    },

    subtract(num) {
      calculator.result -= num;

      return this;
    },

    multiply(num) {
      calculator.result *= num;

      return this;
    },

    divide(num) {
      if (num !== 0) {
        calculator.result /= num;

        return this;
      } else {
        return new Error('can not be divided by 0');
      }
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(callback, num) {
      callback(num);

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
