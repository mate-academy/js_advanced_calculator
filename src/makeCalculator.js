'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(numb) {
      this.result += numb;
    },

    subtract(numb) {
      this.result -= numb;
    },

    multiply(numb) {
      this.result *= numb;
    },

    divide(numb) {
      this.result /= numb;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, numb) {
      callback.call(this, numb);

      return this;
    },
  };
}

module.exports = makeCalculator;
