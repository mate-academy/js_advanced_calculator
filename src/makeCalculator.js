'use strict';

/**
 * @return {object}
 */
const makeCalculator = () => {
  return {
    result: 0,

    operate(callback, number) {
      if (typeof callback === 'function') {
        callback.call(this, number);
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    multiply(number) {
      this.result *= number;
    },

    divide(number) {
      this.result /= number;
    },
  };
};

module.exports = makeCalculator;
