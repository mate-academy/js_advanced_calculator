'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(result, numb) {
      return result + numb;
    },

    subtract(result, numb) {
      return result - numb;
    },

    multiply(result, numb) {
      return result * numb;
    },

    divide(result, numb) {
      return result / numb;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, numb) {
      this.result = callback(this.result, numb);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
