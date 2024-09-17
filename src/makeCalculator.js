'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // Calculator obj init:
  const calculator = {

    // - All of this mess
    // |-- is to change this property)
    result: 0,

    // - Reset it back to zero
    // |-- within the `reset` method)
    reset() {
      this.result = 0;

      return this;
    },

    // Main calculator `operate` method:
    operate(callback, num) {
      this.result = callback(num, this.result);

      return this;
    },

    // Callbacks operations for `operate` method:
    add(x, before) {
      return before + x;
    },
    subtract(x, before) {
      return before - x;
    },
    multiply(x, before) {
      return before * x;
    },
    divide(x, before) {
      return before / x;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
