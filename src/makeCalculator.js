'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      return callback.call(this, value);
    },
    add(value) {
      this.result += value;

      return this;
    },
    subtract(value) {
      this.result -= value;

      return this;
    },
    multiply(value) {
      this.result *= value;

      return this;
    },
    divide(value) {
      this.result /= value;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
