'use strict';

function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(result, value) {
      return result + value;
    },
    subtract(result, value) {
      return result - value;
    },
    multiply(result, value) {
      return result * value;
    },
    divide(result, value) {
      if (value !== 0) {
        return result / value;
      }
    },
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
