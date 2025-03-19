'use strict';

function makeCalculator() {
  return {
    result: 0,
    add(value) {
      this.result += value;

      return this;
    },
    subtract(value) {
      this.result -= value;

      return this;
    },
    multiply(value) {
      this.result *= value;

      return this;
    },
    divide(value) {
      this.result /= value;

      return this;
    },
    operate(fn, value) {
      fn.call(this, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
