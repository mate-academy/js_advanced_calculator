'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculate = {
    result: 0,

    add(param) {
      this.result += param;

      return this;
    },

    subtract(param) {
      this.result -= param;

      return this;
    },

    divide(param) {
      this.result /= param;

      return this;
    },

    multiply(param) {
      this.result *= param;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, count) {
      return operation.call(calculate, count);
    },

  };

  return calculate;
}

module.exports = makeCalculator;
