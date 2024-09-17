'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(x) {
      this.result += x;

      return this.result;
    },
    subtract(x) {
      this.result -= x;

      return this.result;
    },
    multiply(x) {
      this.result *= x;

      return this.result;
    },
    divide(x) {
      this.result /= x;

      return this.result;
    },
    reset() {
      this.result = 0;

      return this;
    },

    operate: function (callback, num) {
      this.result = callback.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
