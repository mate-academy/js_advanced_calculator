'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(a) {
      this.result += a;

      return this;
    },
    multiply(a) {
      this.result *= a;

      return this;
    },
    subtract(a) {
      this.result -= a;

      return this;
    },
    divide(a) {
      this.result /= a;

      return this;
    },
    operate(callback, a) {
      callback.call(this, a);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
