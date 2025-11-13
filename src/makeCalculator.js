'use strict';

/**
 * @return {Object} The calculator object
 */
function makeCalculator() {
  const calculator = {
    /**
     * Current result of calculations
     */
    result: 0,

    /**
     * Adds a value to the current result
     * @param {number} value - value to add
     */
    add(value) {
      this.result += value;
    },

    /**
     * Subtracts a value from the current result
     * @param {number} value - value to subtract
     */
    subtract(value) {
      this.result -= value;
    },

    /**
     * Multiplies the current result by a value
     * @param {number} value - value to multiply by
     */
    multiply(value) {
      this.result *= value;
    },

    /**
     * Divides the current result by a value.
     * Resets the result if the value is 0.
     * @param {number} value - value to divide by
     */
    divide(value) {
      if (value === 0) {
        this.reset();
      } else {
        this.result /= value;
      }
    },

    /**
     * Applies some operation to the current result using a callback function.
     * @param {Function} callbackFn - The callback function to apply
     * @param {number} value - The value to pass to the callback function
     * @returns {Object} The calculator object for method chaining
     */
    operate(callbackFn, value) {
      callbackFn.call(this, value);

      return this;
    },

    /**
     * Resets the result to 0
     * @returns {Object} The calculator object for method chaining
     */
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
