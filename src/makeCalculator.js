'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // let result = 0;

  return {
    result: 0,

    add(value) {
      this.result += value;

      return this.result;
    },

    subtract(value) {
      this.result -= value;

      return this.result;
    },

    multiply(value) {
      this.result *= value;

      return this.result;
    },

    divide(value) {
      this.result /= value;

      return this.result;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
