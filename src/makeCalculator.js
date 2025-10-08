'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(a) {
      this.result += a;
    },
    subtract(a) {
      this.result -= a;
    },
    multiply(a) {
      this.result *= a;
    },
    divide(a) {
      this.result /= a;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(cb, a) {
      cb.call(this, a);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
