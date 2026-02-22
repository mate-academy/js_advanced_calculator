'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number) {
      return this.result + number;
    },

    subtract(number) {
      return this.result - number;
    },

    multiply(number) {
      return this.result * number;
    },

    divide(number) {
      return this.result / number;
    },

    operate(callback, number) {
      this.result = callback.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
