'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(operation, a) {
      operation.call(this, a);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
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
      this.result = Math.floor((this.result / a));
    },
  };
}

module.exports = makeCalculator;
