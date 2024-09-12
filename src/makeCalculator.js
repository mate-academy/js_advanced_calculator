'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add(current, num) {
      return current + num;
    },

    subtract(current, num) {
      return current - num;
    },

    multiply(current, num) {
      return current * num;
    },

    divide(current, num) {
      if (num !== 0) {
        return current / num;
      }

      return current;
    },

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
