'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const defaultResult = 0;

  return {
    result: defaultResult,

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },

    add(value) {
      this.result += value;
    },

    reset() {
      this.result = defaultResult;

      return this;
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
  };
}

module.exports = makeCalculator;
