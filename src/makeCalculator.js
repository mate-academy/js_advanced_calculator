'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
    subtract(x, y) {
      return x - y;
    },
    add(x, y) {
      return x + y;
    },
    divide(x, y) {
      return x / y;
    },
    multiply(x, y) {
      return x * y;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
