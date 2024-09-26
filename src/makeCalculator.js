'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add(num) {
      result += num;

      return this;
    },
    subtract(num) {
      result -= num;

      return this;
    },
    multiply(num) {
      result *= num;

      return this;
    },
    divide(num) {
      result /= num;

      return this;
    },
    reset() {
      result = 0;

      return this;
    },
    operate(method, num) {
      method(num);

      return this;
    },
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
