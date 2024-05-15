'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    subtract(value) {
      this.result -= value;

      return this.result;
    },

    add(value) {
      this.result += value;

      return this.result;
    },

    multiply(value) {
      this.result *= value;

      return this.result;
    },

    divide(value) {
      this.result = value !== 0 ? this.result / value : this.result;

      return this.result;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback.call(this, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
