'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    // Initialize the result property
    result: 0,

    // Add method
    add(a, b) {
      return a + b;
    },

    // Subtract method
    subtract(a, b) {
      return a - b;
    },

    // Multiply method
    multiply(a, b) {
      return a * b;
    },

    // Divide method
    divide(a, b) {
      return b !== 0 ? a / b : NaN; // Avoid division by zero
    },

    // Operate method
    operate(callback, number) {
      this.result = callback(this.result, number);
      // Update the result using the callback function

      return this; // Return the calculator for chaining
    },

    // Reset method
    reset() {
      this.result = 0; // Reset result to 0

      return this; // Return the calculator for chaining
    },
  };

  return calculator;
}

module.exports = makeCalculator;
