'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
    add(currentValue, num) {
      return currentValue + num;
    },
    subtract(currentValue, num) {
      return currentValue - num;
    },
    multiply(currentValue, num) {
      return currentValue * num;
    },
    divide(currentValue, num) {
      return currentValue / num;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
