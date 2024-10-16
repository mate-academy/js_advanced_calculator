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
      } else {
        return 'Error: Division by zero';
      }

      return this;
    },

    operate(callback, num) {
      callback.call(this, num);

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
