'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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
        return false;
      }
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      if (typeof callback === 'function') {
        callback.call(this, num);

        return this;
      } else {
        return false;
      }
    },
  };

  return calculator;
}

module.exports = makeCalculator;
