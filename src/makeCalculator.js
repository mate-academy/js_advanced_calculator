'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(currentValue, num) {
      return currentValue + num;
    },

    subtract(currentValue, num) {
      return currentValue - num;
    },

    multiply(currentValue, num) {
      return currentValue * num;
    },

    divide(currentValue, num) {
      if (num === 0) {
        return `Division by zero is not allowed`;
      }

      return currentValue / num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
