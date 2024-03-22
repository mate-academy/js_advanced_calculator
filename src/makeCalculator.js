'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value) {
      return this.result + value;
    },

    subtract(value) {
      return this.result - value;
    },

    multiply(value) {
      return this.result * value;
    },

    divide(value) {
      if (value === 0) {
        throw new Error('Error');
      }

      return this.result / value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
