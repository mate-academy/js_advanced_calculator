'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(number) {
      this.result = this.result + number;
    },

    subtract(number) {
      this.result = this.result - number;
    },

    multiply(number) {
      this.result = this.result * number;
    },

    divide(number) {
      this.result = this.result / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
