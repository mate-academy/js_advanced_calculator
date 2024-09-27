'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const resultObj = {
    result: 0,
    add(a, b) {
      return b + a;
    },
    subtract(a, b) {
      return b - a;
    },
    multiply(a, b) {
      return b * a;
    },
    divide(a, b) {
      return b / a;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      this.result = callback(num, this.result);

      return this;
    },
  };

  return resultObj;
}

module.exports = makeCalculator;
