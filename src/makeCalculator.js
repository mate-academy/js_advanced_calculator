'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const sum = {
    result: 0,
    reset() {
      this.result = 0;
      return this;
    },
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },
    operate(callback, value) {
      this.result = callback.call(this, this.result, value);
      return this;
    }
  }
  return sum;
}

module.exports = makeCalculator;
