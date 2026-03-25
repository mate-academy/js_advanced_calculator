'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    get result() {
      return result;
    },
    add(num) {
      return (result += num);
    },
    operate(callback, num) {
      callback(num);
      return this;
    },
    reset() {
      result = 0;
      return this;
    },
    divide(num) {
      result /= num;
      return this;
    },
    multiply(num) {
      return (result *= num);
    },
    subtract(num) {
      return (result -= num);
    },
  };
}

module.exports = makeCalculator;
