'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;

  return {
    get result() {
      return result;
    },
    add(num) {
      result += num;
    },
    subtract(num) {
      result -= num;
    },
    multiply(num) {
      result *= num;
    },
    divide(num) {
      if (num !== 0) {
        result /= num;
      } else {
        result = NaN;
      }
    },
    reset() {
      result = 0;

      return this;
    },
    operate(callback, num) {
      callback.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
