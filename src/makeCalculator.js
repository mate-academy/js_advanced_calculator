'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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
    reset() {
      this.result -= this.result;

      return this;
    },
    operate(callback, value) {
      callback.call(this, value);

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
