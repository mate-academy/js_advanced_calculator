'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
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
      if (value !== 0) {
        this.result /= value;
      }

      return this;
    },
    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
