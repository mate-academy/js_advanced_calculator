'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(a) {
      return this.result + a;
    },

    subtract(a) {
      return this.result - a;
    },

    multiply(a) {
      return this.result * a;
    },

    divide(a) {
      return this.result / a;
    },

    operate(operation, number) {
      this.result = operation.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
