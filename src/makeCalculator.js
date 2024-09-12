'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    add(value) {
      this.result += value;

      return this;
    },
    subtract(value) {
      this.result -= value;

      return this;
    },
    divide(value) {
      this.result /= value;

      return this;
    },
    multiply(value) {
      this.result *= value;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      return callback.call(this, value);
    },
  };

  return calculator;
}

module.exports = makeCalculator;
