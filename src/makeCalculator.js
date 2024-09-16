'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const resultObj = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return b - a;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return b / a;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      this.result = callback(number, this.result);

      return this;
    },
    result: 0,
  };

  return resultObj;
}

module.exports = makeCalculator;
