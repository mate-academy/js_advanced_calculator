'use strict';

/**
 * @return {object}
 */
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

    reset(value) {
      this.result = 0;

      return this;
    },

    operate(calculate, value) {
      calculate.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
