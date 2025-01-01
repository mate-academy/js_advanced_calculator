'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(currentValue, number) {
      return currentValue + number;
    },

    subtract(currentValue, number) {
      return currentValue - number;
    },

    multiply(currentValue, number) {
      return currentValue * number;
    },

    divide(currentValue, number) {
      if (number === 0) {
        throw new Error('Cannot divide by zero');
      }

      return currentValue / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
