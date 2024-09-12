'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(value, a) {
      return value + a;
    },
    subtract(value, a) {
      return value - a;
    },
    multiply(value, a) {
      return value * a;
    },
    divide(value, a) {
      return value / a;
    },
    operate(metod, a) {
      this.result = metod(this.result, a);

      return this;
    },
  };
}

module.exports = makeCalculator;
