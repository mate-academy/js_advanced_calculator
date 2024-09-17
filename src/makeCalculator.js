'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate: function(callback, number) {
      callback.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(num) {
      this.result += num;

      return this;
    },

    subtract(num) {
      this.result -= num;

      return this;
    },

    multiply(num) {
      this.result *= num;

      return this;
    },

    divide(num) {
      this.result /= num;

      return this;
    },
  };
}

module.exports = makeCalculator;
