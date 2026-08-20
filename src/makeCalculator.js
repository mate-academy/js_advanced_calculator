'use strict';

/**
 * @return {object}
 */
const makeCalculator = () => {
  return {
    result: 0,

    add(num) {
      this.result += num;
    },
    subtract(num) {
      this.result -= num;
    },
    multiply(num) {
      this.result *= num;
    },
    divide(num) {
      this.result /= num;
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
};

module.exports = makeCalculator;
