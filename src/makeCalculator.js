'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, x) {
      if (callback === this.add) {
        return this.add(x);
      }

      if (callback === this.subtract) {
        return this.subtract(x);
      }

      if (callback === this.divide) {
        return this.divide(x);
      }

      if (callback === this.multiply) {
        return this.multiply(x);
      }

      if (callback === this.reset) {
        return this.reset;
      }
    },
    add(x) {
      this.result += x;

      return this;
    },
    subtract(x) {
      this.result -= x;

      return this;
    },
    divide(x) {
      this.result /= x;

      return this;
    },
    multiply(x) {
      this.result *= x;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
