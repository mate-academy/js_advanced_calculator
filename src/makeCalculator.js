'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculate = {
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
        throw new Error('You can divide on zero');
      }
    },
    reset() {
      result = 0;

      return calculate;
    },
    operate(callback, num) {
      callback(num);

      return calculate;
    },
    get result() {
      return result;
    },
  };

  return calculate;
}

module.exports = makeCalculator;
