'use strict';

function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(result, value) {
      const newResult = result + value;

      return newResult;
    },
    subtract(result, value) {
      const newResult = result - value;

      return newResult;
    },
    multiply(result, value) {
      const newResult = result * value;

      return newResult;
    },
    divide(result, value) {
      const newResult = result / value;

      return newResult;
    },
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
