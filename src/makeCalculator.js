'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;

  const add = function (a, b) {
    return a + b;
  };

  const subtract = function (a, b) {
    return a - b;
  };

  const multiply = function (a, b) {
    return a * b;
  };

  const divide = function (a, b) {
    return a / b;
  };

  const operate = function (callback, number) {
    result = callback(result, number);

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
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    operate: operate,
    reset: reset,
  };
}

module.exports = makeCalculator;
