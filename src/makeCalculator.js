'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, value) {
      callback(value);

      return this;
    },

    add(value) {
      calculator.result += value;
    },

    subtract(value) {
      calculator.result -= value;
    },

    multiply(value) {
      calculator.result *= value;
    },

    divide(value) {
      calculator.result /= value;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
