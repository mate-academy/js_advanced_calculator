'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, num) {
      callback.call(this, num);

      return this;
    },

    add(num = 0) {
      this.result += num;
    },

    subtract(num = 0) {
      this.result -= num;
    },

    multiply(num = 0) {
      this.result *= num;
    },

    divide(num = 0) {
      this.result /= num;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
