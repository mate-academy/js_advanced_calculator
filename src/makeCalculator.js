'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    result: 0,

    add(value) {
      result += value;
      this.result = result;
      return this; // Enable method chaining
    },
    subtract(value) {
      result -= value;
      this.result = result;
      return this; // Enable method chaining
    },
    multiply(value) {
      result *= value;
      this.result = result;
      return this; // Enable method chaining
    },
    divide(value) {
      if (value === 0) {
        throw new Error("Cannot divide by zero");
      }
      result /= value;
      this.result = result;
      return this; // Enable method chaining
    },

    operate(callback, value) {
      result = callback.call(this, value); // Ensure callback uses the correct `this`
      this.result = result;
      return this; // Enable method chaining
    },

    reset() {
      result = 0;
      this.result = result;
      return this; // Enable method chaining
    }
  };

  return calculator;
}

module.exports = makeCalculator;
