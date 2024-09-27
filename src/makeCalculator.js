'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      return a / b;
    },

    /**
     * Resets the current result to zero.
     */
    reset() {
      this.result = 0;

      return this;
    },

    /**
     * Takes a number and changes the current result according to the
     * operation value.
     * @param {*} operation operation to be performed on the current result.
     * @param {*} number number to change the current result.
     */
    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
