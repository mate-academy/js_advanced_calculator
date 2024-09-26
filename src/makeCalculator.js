'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    add(value) {
      return this.result + value;
    },

    subtract(value) {
      return this.result - value;
    },

    multiply(value) {
      return this.result * value;
    },

    divide(value) {
      return this.result / value;
    },

    operate(callback, value) {
      this.result = callback.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

  };

  return obj;
}

module.exports = makeCalculator;
