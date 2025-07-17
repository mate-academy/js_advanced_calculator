'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value) {
      return this.result + value;
    },

    subtract(value) {
      return this.result - value;
    },

    multiply(value) {
      return this.result * value;
    },

    divide(value) {
      return this.result / value;
    },

    operate(operation, value) {
      this.result = operation.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
