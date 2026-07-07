'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const operate = function (callback, num) {
    if (callback === add) {
      result += num;
    } else if (callback === subtract) {
      result -= num;
    } else if (callback === multiply) {
      result *= num;
    } else if (callback === divide) {
      result /= num;
    }

    return this;
  };

  const reset = function () {
    result = 0;

    return this;
  };

  return {
    get result() {
      return result;
    },
    add,
    subtract,
    multiply,
    divide,
    operate,
    reset,
  };
}
module.exports = makeCalculator;
