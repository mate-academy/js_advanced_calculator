'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
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
      if (num === 0) {
        throw new Error('Can`t devide by 0');
      }
      this.result /= num;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate: function (callback, num) {
      callback.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
