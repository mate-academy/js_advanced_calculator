'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(addend) {
      this.result += addend;
    },

    subtract(subtrahend) {
      this.result -= subtrahend;
    },

    multiply(multiplier) {
      this.result *= multiplier;
    },

    divide(divisor) {
      this.result /= divisor;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      callback.call(this, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
