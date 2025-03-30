"use strict";

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    // Main methods
    operate(callback, value) {
      callback.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    // Operations
    add(value) {
      this.result += value;
    },

    subtract(value) {
      this.result -= value;
    },

    multiply(value) {
      this.result *= value;
    },

    divide(value) {
      if (value === 0) {
        return;
      }

      this.result /= value;
    },
  };
}

module.exports = makeCalculator;
