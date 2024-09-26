'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    multiply(number) {
      this.result *= number;
    },

    divide(number) {
      this.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate: function(callback, number) {
      callback.call(this, number);

      return this;
    },
  };
}
module.exports = makeCalculator;
