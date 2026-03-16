'use strict';

function makeCalculator() {
  return {
    result: 0,

    operate(operation, x = 0) {
      operation.call(this, x);

      return this;
    },

    add(x) {
      this.result += x;

      return this;
    },

    subtract(x) {
      this.result -= x;

      return this;
    },

    multiply(x) {
      this.result *= x;

      return this;
    },

    divide(x) {
      this.result /= x;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
