'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(result, num) {
      this.result = result + num;

      return this.result;
    },

    subtract(result, num) {
      this.result = result - num;

      return this.result;
    },

    multiply(result, num) {
      this.result = result * num;

      return this.result;
    },

    divide(result, num) {
      this.result = result / num;

      return this.result;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      this.result = callback.call(this, this.result, num);

      return this;
    },

  };

  return calculator;
}

module.exports = makeCalculator;
