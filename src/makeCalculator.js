'use strict';

function makeCalculator() {
  return {
    result: 0,

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
        throw new Error('Cannot divide by zero');
      }
      this.result /= value;
    },

    operate(operation, value) {
      try {
        operation.call(this, value);
      } catch (error) {
        // Handle the error appropriately (e.g., return NaN)
        this.result = NaN;
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
