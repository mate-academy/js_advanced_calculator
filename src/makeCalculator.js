'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(num) {
      return this.result + num;
    },

    subtract(num) {
      return this.result - num;
    },

    multiply(num) {
      return this.result * num;
    },

    divide(num) {
      return this.result / num;
    },

    operate(callback, num) {
      this.result = callback.call(this, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
