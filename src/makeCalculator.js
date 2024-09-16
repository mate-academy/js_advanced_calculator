'use strict';

/**
 * @return {object}
 */
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
        throw new Error('TypeError: Division by zero.');
      }

      this.result /= num;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      return callback.call(this, num);
    },
  };
};

module.exports = makeCalculator;
