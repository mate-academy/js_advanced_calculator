'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(func, a) {
      if (func === this.add) {
        return this.add(a);
      }

      if (func === this.subtract) {
        return this.subtract(a);
      }

      if (func === this.multiply) {
        return this.multiply(a);
      }

      if (func === this.divide) {
        return this.divide(a);
      }

      if (func === this.reset) {
        return this.reset();
      }
    },
    add(a) {
      this.result += a;

      return this;
    },
    subtract(a) {
      this.result -= a;

      return this;
    },
    multiply(a) {
      this.result *= a;

      return this;
    },
    divide(a) {
      this.result /= a;

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
