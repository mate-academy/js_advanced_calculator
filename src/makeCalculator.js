'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(x, y) {
      return x + y;
    },
    subtract(x, y) {
      return x - y;
    },
    multiply(x, y) {
      return x * y;
    },
    divide(x, y) {
      return x / y;
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
