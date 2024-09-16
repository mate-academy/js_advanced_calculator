'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(a) {
      this.result += a;

      return this.result;
    },
    subtract(a) {
      this.result -= a;

      return this.result;
    },
    multiply(a) {
      this.result *= a;

      return this.result;
    },
    divide(a) {
      this.result /= a;

      return this.result;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      this.result = callback.call(this, num);

      return this;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
