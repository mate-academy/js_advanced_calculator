'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, num) {
      callback.call(this, num);

      return this;
    },

    add(num) {
      this.result += num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    subtract(num) {
      this.result -= num;
    },

    multiply(num) {
      this.result *= num;
    },

    divide(num) {
      if (num === 0) {
        throw new Error('Division by zero is impossible');
      }

      this.result /= num;
    },
  };
}

module.exports = makeCalculator;
