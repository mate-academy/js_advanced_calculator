'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add(value) {
      this.result += value;

      return this;
    },

    subtract(value) {
      this.result -= value;

      return this;
    },

    multiply(value) {
      this.result *= value;

      return this;
    },

    divide(value) {
      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(action, value) {
      action.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
