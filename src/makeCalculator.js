'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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
      if (num !== 0) {
        this.result /= num;
      }

      return this;
    },

    reset(num) {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      return callback.call(this, num);
    },
  };

  return calculator;
}

module.exports = makeCalculator;
