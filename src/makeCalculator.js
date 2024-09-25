'use strict';

/**
 * @return {object}
 * - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 */
function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(y, x) {
      return y + x;
    },
    subtract(y, x) {
      return y - x;
    },
    multiply(y, x) {
      return y * x;
    },
    divide(y, x) {
      return y / x;
    },
    operate(callback, param) {
      this.result = callback(this.result, param);

      return this;
    },
  };
}

module.exports = makeCalculator;
