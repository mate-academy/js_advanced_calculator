'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const initialState = 0;

  return {
    result: initialState,

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },

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
      this.result /= value;
    },

    reset() {
      this.result = initialState;

      return this;
    },
  };
}

module.exports = makeCalculator;
