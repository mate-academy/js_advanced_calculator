'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value1, value2) {
      return value1 + value2;
    },
    subtract(value1, value2) {
      return value1 - value2;
    },
    multiply(value1, value2) {
      return value1 * value2;
    },
    divide(value1, value2) {
      return value1 / value2;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
