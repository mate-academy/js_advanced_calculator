'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let res = 0;

  return {
    add(num) {
      res += num;

      return res;
    },
    subtract(num) {
      res -= num;

      return res;
    },
    multiply(num) {
      res *= num;

      return res;
    },
    divide(num) {
      res /= num;

      return res;
    },
    reset() {
      res = 0;

      return this;
    },
    operate(operation, num) {
      res = operation(num);

      return this;
    },
    get result() {
      return res;
    },
  };
}

module.exports = makeCalculator;
