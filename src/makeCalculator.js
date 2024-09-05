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

    divide(num) {
      if (num === 0) {
        throw new Error('Error: division by zero');
      };

      this.result /= num;

      return this;
    },

    multiply(num) {
      this.result *= num;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      return callback.call(this, number);
    },
  };

  return calculator;
}

module.exports = makeCalculator;
