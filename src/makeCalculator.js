'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
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
      if (num !== 0) {
        this.result /= num;
      } else {
        this.result = null;
      }
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      if (typeof callback === 'function') {
        callback.call(this, num);
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
