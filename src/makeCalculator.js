'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      callback.call(this, value);

      return this;
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
      if (value !== 0) {
        this.result /= value;
      } else {
        throw new Error('You are trying to divide by 0. This is a mistake');
      }

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
