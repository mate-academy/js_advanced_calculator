'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      this.result += number;
    },
    multiply(number) {
      this.result *= number;
    },
    subtract(number) {
      this.result -= number;
    },
    divide(number) {
      if (number !== 0) {
        this.result /= number;
      } else {
        throw new Error('Number is zero! try again..');
      }
    },
    operate(callback, number) {
      if (typeof callback === 'function') {
        callback.call(this, number);

        return this;
      } else {
        return this + '<= Here is the last res of operation before error type';
      }
    },
  };
}

module.exports = makeCalculator;
