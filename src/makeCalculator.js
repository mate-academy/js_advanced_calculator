'use strict';

function makeCalculator() {
  return {
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
      if (num === 0) {
        throw new Error('Error: Division by zero');
      }
      this.result /= num;

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
}

module.exports = makeCalculator;
