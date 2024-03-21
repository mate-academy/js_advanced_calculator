'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(num) {
      const number = this;

      number.result += num;

      return number;
    },

    subtract(num) {
      const number = this;

      number.result -= num;

      return number;
    },

    multiply(num) {
      const number = this;

      number.result *= num;

      return number;
    },

    divide(num) {
      const number = this;

      number.result /= num;

      return number;
    },

    reset() {
      const number = this;

      number.result = 0;

      return number;
    },

    operate(callback, num) {
      const number = this;

      callback.call(number, num);

      return number;
    },
  };
}

module.exports = makeCalculator;
