'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0, // Initial result

    // Method for addition
    add(value) {
      this.result += value;
    },

    // Method for subtraction
    subtract(value) {
      this.result -= value;
    },

    // Method for multiplication
    multiply(value) {
      this.result *= value;
    },

    // Method for division
    divide(value) {
      this.result /= value;
    },

    // Method to reset the result to 0
    reset() {
      this.result = 0;

      return this; // Allow chaining
    },

    // Operate method to perform calculations using the passed callback
    operate(callback, value) {
      // Bind 'this' to maintain context inside the callback
      callback.call(this, value);

      return this; // Allow chaining
    },
  };
}

module.exports = makeCalculator;
