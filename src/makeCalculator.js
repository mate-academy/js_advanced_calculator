'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
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
    operate(callback, num) {
      callback(num);

      return this;
    },
    get result() {
      return result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
