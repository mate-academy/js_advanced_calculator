/**
 * Factory function that creates a chainable calculator
 * @returns {object} calculator with result property and arithmetic methods
 */
function makeCalculator() {
  return {
    result: 0, // initial value

    // Adds value to result
    add(value) {
      this.result += value;
      return this;
    },

    // Subtracts value from result
    subtract(value) {
      this.result -= value;
      return this;
    },

    // Multiplies result by value
    multiply(value) {
      this.result *= value;
      return this;
    },

    // Divides result by value
    divide(value) {
      this.result /= value;
      return this;
    },

    // Resets result to 0
    reset() {
      this.result = 0;
      return this;
    },

    /**
     * Operates on result using a callback function
     * @param {function} callback - function to apply to the calculator
     * @param {number} number - argument for the callback
     * @returns {object} this - for method chaining
     */
    operate(callback, number) {
      // invoke callback with 'this' bound to calculator
      if (typeof callback === 'function') {
        callback.call(this, number);
      }
      return this; // allow chaining
    }
  };
}

module.exports = makeCalculator;
