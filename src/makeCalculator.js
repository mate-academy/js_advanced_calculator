'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(current, number) {
      return current + number;
    },
    subtract(current, number) {
      return current - number;
    },
    multiply(current, number) {
      return current * number;
    },
    divide(current, number) {
      return current / number;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      if (typeof callback === 'function') {
        this.result = callback(this.result, number);
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
