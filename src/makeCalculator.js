'use strict';

// Create a makeCalculator function that returns an object that
// has the following fields:
// - Methods: add, subtract, multiply, divide, reset, operate.
// - The result property is initially 0.
// Each operate call takes a callback and a number and sets
// the appropriate value to the result property.
// The reset method resets result value to 0.
// add, subtract, multiply, divide are passed as callbacks
// to operate method.
// The operate and reset methods can be called in a chain.

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
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
